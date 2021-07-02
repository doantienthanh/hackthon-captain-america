import { Navigation } from 'react-native-navigation';
import {
  onMainContentLaunch,
  onRegisterScreensOnLaunch,
} from './src/navigation';

Navigation.events().registerAppLaunchedListener(() => {
  onRegisterScreensOnLaunch();
  setTimeout(() => {
    onMainContentLaunch();
  }, 300);
});
