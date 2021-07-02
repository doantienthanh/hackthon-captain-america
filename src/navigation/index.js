import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator, Platform } from 'react-native';
import { NavigationProvider } from 'react-native-navigation-hooks';
import { store, persistor } from 'features/store';
import { Colors } from 'themes';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SCREEN_OVERLAY = {
  android: 'overCurrentContext',
  ios: 'overFullScreen',
};

import { Home, Profile, DetailField, Field } from 'screens';

const SCREENS = {
  Home,
  Profile,
  DetailField,
  Field,
};
export const onMainContentLaunch = () => {
  Promise.all([
    Icon.getImageSource('home-outline', 30),
    Icon.getImageSource('soccer-field', 30),
    Icons.getImageSource('plus-circle', 50),
    Icon.getImageSource('bell-ring-outline', 30),
    Icons.getImageSource('user', 30),
  ]).then(([home, filed, plus, bell, user]) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          center: {
            bottomTabs: {
              id: 'BottomTabs',
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'Home',
                          id: 'Home',
                          options: {
                            topBar: {
                              visible: false,
                            },
                            bottomTab: {
                              icon: home,
                              animate: false,
                              text: 'Trang chủ',
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'Profile',
                          id: 'Profile',
                          options: {
                            topBar: {
                              visible: false,
                            },
                            visible: false,
                            bottomTab: {
                              icon: filed,
                              animate: false,
                              text: 'sân bóng',
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
      },
    });
  });
};
Navigation.setDefaultOptions({
  bottomTab: {
    textColor: Colors.neutral3,
    iconColor: Colors.neutral3,
    selectedIconColor: Colors.primary,
    selectedTextColor: Colors.neturalBlack,
  },
  bottomTabs: {
    visible: true,
    animate: true,
    elevation: 10,
    titleDisplayMode: 'alwaysShow',
    preferLargeIcons: true,
    animateTabSelection: false,
  },
  layout: {
    componentBackgroundColor: Colors.white,
    backgroundColor: Colors.white,
    orientation: ['portrait'],
  },
});
export function showConfirmAlert(options = {}) {
  Navigation.showOverlay({
    component: {
      id: 'ConfirmAlert',
      name: 'ConfirmAlert',
      options: {
        overlay: {
          interceptTouchOutside: true,
        },
        layout: {
          backgroundColor: Colors.transparent,
        },
        statusBar: {
          style: 'light',
        },
      },
      passProps: options,
    },
  });
}

export function showErrorAlert(options = {}) {
  Navigation.showOverlay({
    component: {
      id: 'ErrorAlert',
      name: 'ErrorAlert',
      options: {
        overlay: {
          interceptTouchOutside: true,
        },
        layout: {
          backgroundColor: Colors.transparent,
        },
        statusBar: {
          style: 'light',
        },
      },
      passProps: options,
    },
  });
}

export function showOverlay(screen, options = {}) {
  Navigation.showOverlay({
    component: {
      id: screen,
      name: screen,
      options: {
        overlay: {
          interceptTouchOutside: true,
        },
        layout: {
          backgroundColor: Colors.transparent,
        },
        statusBar: {
          style: 'light',
        },
      },
      passProps: options,
    },
  });
}
export const showModal = (screen, options = {}) => {
  Navigation.showModal({
    component: {
      id: screen,
      name: screen,
      passProps: options,
      options: {
        overlay: {
          interceptTouchOutside: false,
        },
        layout: {
          componentBackgroundColor: 'transparent',
          backgroundColor: 'transparent',
        },
        screenBackgroundColor: 'transparent',
        modalPresentationStyle: SCREEN_OVERLAY[Platform.OS],
        animations: {
          showModal: {
            enabled: true,
          },
          dismissModal: {
            enable: false,
            enabled: false,
          },
        },
      },
    },
  });
};

export const dismissModal = (screen) => {
  Navigation.dismissModal(screen);
};

export function pushScreen({
  id,
  screen,
  title,
  isTopBarEnable,
  isBottomTabsEnable,
  rightButtonIcon,
  elevation,
  passProps,
  textRightTop,
}) {
  Navigation.push(id, {
    component: {
      id: screen,
      name: screen,
      passProps: passProps,
      options: {
        bottomTabs: {
          visible: isBottomTabsEnable,
          drawBehind: !isBottomTabsEnable,
        },
        topBar: {
          visible: false,
        },
      },
    },
  });
}
export const onRegisterScreensOnLaunch = () => {
  return Object.keys(SCREENS).map((item) => {
    const Component = SCREENS[item];
    Navigation.registerComponent(
      item,
      () => (props) => {
        return (
          <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
              <NavigationProvider value={{ componentId: props.componentId }}>
                <Component {...props} />
              </NavigationProvider>
            </PersistGate>
          </Provider>
        );
      },
      () => Component,
    );
  });
};
