import React from 'react';
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import * as AuthApis from 'api/auth';
import { showErrorAlert, pushScreen } from 'navigation';
import { translate } from 'i18n';
import { Navigation } from 'react-native-navigation';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { actions as ConversationActions } from 'features/conversations';

const Notification = () => {
  const dispatch = useDispatch();
  const showAlertOpenSetting = () => {
    // return showErrorAlert({
    //   message: translate('mailbox.notificationRequest'),
    //   hasOption: true,
    //   pressTitle: translate('button.openSetting'),
    //   onPress: () => {
    //     Linking.openSettings();
    //   },
    // });
  };

  const requestUserPermission = React.useCallback(async () => {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        await getToken();
      } else {
        setTimeout(() => {
          showAlertOpenSetting();
        }, 3000);
      }
    } catch (error) {
      setTimeout(() => {
        showAlertOpenSetting();
      }, 3000);
    }
  }, [getToken]);

  const checkNotificationAppPermission = React.useCallback(async () => {
    try {
      const authStatus = await messaging().hasPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        await getToken();
      } else {
        await requestUserPermission();
      }
    } catch (error) {
      await requestUserPermission();
    }
  }, [requestUserPermission, getToken]);
  const dismissOverlayError = () => {
    Navigation.dismissOverlay('ErrorAlert');
  };

  const getToken = React.useCallback(async () => {
    try {
      const fcmToken = await messaging().getToken();
      await AuthApis.syncDeviceToken({
        deviceToken: fcmToken,
        tokenStatus: true,
      });
    } catch (error) {
      showErrorAlert({
        title: translate('errorMessage'),
        message: error?.data?.message || translate('error'),
        label: translate('close'),
        onCallBack: () => dismissOverlayError(),
      });
    }
  }, []);

  const registerDevice = async () => {
    if (
      Platform.OS === 'ios' &&
      !messaging().isDeviceRegisteredForRemoteMessages
    ) {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
  };
  const navigateTab = (index) => {
    Navigation.mergeOptions('BottomTabs', {
      bottomTabs: { currentTabIndex: index },
    });
  };
  const handleBackground = React.useCallback((projectId) => {
    navigateTab(1);
    pushScreen({
      id: 'MyProjects',
      screen: 'ProjectDetailOffer',
      isBottomTabsEnable: false,
      isTopBarEnable: false,
      passProps: {
        id: projectId,
      },
    });
  }, []);

  const handleNotificationOnBackgroundAndQuitApp = React.useCallback(
    (remoteMessage, isQuitState = false) => {
      const notificationData =
        typeof remoteMessage?.data?.notification === 'string'
          ? JSON.parse(remoteMessage?.data?.notification)
          : remoteMessage?.data?.notification;
      const notificationPayload = notificationData?.extraObject
        ? notificationData?.extraObject
        : null;
      const type = notificationData?.type;
      switch (type) {
        case 'ReceiveOfferNotification':
          handleBackground(notificationPayload?.relevantId);
          break;
        case 'ReceiveAcceptOfferNotification':
        case 'ReceiveRemoveOfferNotification':
        case 'ReceiveDeclineOfferNotification':
        case 'ReceiveCompleteProjectNotification':
        case 'ReceiveCompleteOfferNotification':
          navigateTab(2);
          break;
        case 'ChatMessage':
          navigateTab(3);
          const dataSend = {
            id: notificationPayload?.conversationId,
            title: notificationPayload?.conversation?.title
              ? notificationPayload?.conversation?.title
              : notificationPayload?.sender?.fullName,
            type: notificationPayload?.conversation?.title
              ? 'Group'
              : 'Private',
          };
          navigationNotification(dataSend);
          break;
      }
    },
    [handleBackground, navigationNotification],
  );

  const navigationNotification = React.useCallback((chat) => {
    pushScreen({
      id: 'Chat',
      screen: 'Messenger',
      title: chat?.title,
      rightButtonIcon: '',
      elevation: 1,
      isBottomTabsEnable: false,
      passProps: {
        dataChat: {
          idProject: null,
          typeChat: chat?.type,
          idConversation: chat?.id,
        },
      },
    });
  }, []);

  React.useEffect(() => {
    registerDevice();
    checkNotificationAppPermission();
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      if (remoteMessage) {
        const notificationData =
          typeof remoteMessage?.data?.notification === 'string'
            ? JSON.parse(remoteMessage?.data?.notification)
            : remoteMessage?.data?.notification;
        const notificationPayload = notificationData?.extraObject
          ? notificationData?.extraObject
          : null;
        if (notificationData?.type === 'ChatMessage') {
          dispatch(
            ConversationActions.updateOne({
              id: notificationPayload?.conversationId,
              changes: {
                lastMessageInfo: {
                  message: notificationPayload?.message,
                  messageType: notificationPayload?.messageType,
                },
                participants: notificationPayload?.participants,
                modifiedAt: moment().format(),
              },
            }),
          );
        }
      }
    });

    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp((remoteMessage) => {
      if (remoteMessage) {
        handleNotificationOnBackgroundAndQuitApp(remoteMessage);
      }
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          handleNotificationOnBackgroundAndQuitApp(remoteMessage, true);
        }
      });
    return unsubscribe;
  }, [
    checkNotificationAppPermission,
    dispatch,
    handleNotificationOnBackgroundAndQuitApp,
  ]);
  return null;
};

export default Notification;
