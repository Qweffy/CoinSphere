import { Stack } from 'expo-router';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  enableNative: true,
  debug: __DEV__,
});

function RootLayoutContent() {
  return <Stack />;
}

export default Sentry.wrap(RootLayoutContent);
