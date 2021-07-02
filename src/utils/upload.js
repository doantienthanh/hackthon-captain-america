import RNFetchBlob from 'rn-fetch-blob';
import Config from 'react-native-config';
import { store } from 'features/store';
import { translate } from 'i18n';
const { BASE_URL } = Config;

export default async function uploadImage(response) {
  try {
    const photo = {
      uri: response.path,
      type: response.mime,
      name: response.filename || Date.now().toString(),
    };

    const requestPreSignUrl = await fetch(`${BASE_URL}/presignedUrlS3`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + store.getState()?.auth?.access_token,
      },
      body: JSON.stringify({ key: photo.name, type: photo.type }),
    });

    const res = await requestPreSignUrl.json();

    const uploadRes = await RNFetchBlob.fetch(
      'PUT',
      res?.uploadUrl,
      { 'Content-Type': photo.type },
      RNFetchBlob.wrap(photo.uri),
    );
    if (uploadRes.info().status === 200) {
      return {
        status: 'success',
        url: res?.url,
        key: res?.fileName,
        ...res,
      };
    }
  } catch (error) {
    return { status: 'error', message: translate('notSendFile') };
  }
}
