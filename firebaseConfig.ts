import Constants from 'expo-constants';
import { initializeApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from 'firebase/database';

interface AppConfigExtra {
  FIREBASE_API_KEY: string;
  FIREBASE_AUTH_DOMAIN: string;
  FIREBASE_PROJECT_ID: string;
  FIREBASE_STORAGE_BUCKET: string;
  FIREBASE_MESSAGING_SENDER_ID: string;
  FIREBASE_APP_ID: string;
  FIREBASE_MEASUREMENT_ID: string;
  FIREBASE_DATABASE_URL: string;
}

const extra = Constants.expoConfig?.extra as AppConfigExtra;

export const firebaseConfig = {
  apiKey: extra.FIREBASE_API_KEY,
  authDomain: extra.FIREBASE_AUTH_DOMAIN,
  projectId: extra.FIREBASE_PROJECT_ID,
  storageBucket: extra.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: extra.FIREBASE_MESSAGING_SENDER_ID,
  appId: extra.FIREBASE_APP_ID,
  measurementId: extra.FIREBASE_MEASUREMENT_ID,
  databaseURL: extra.FIREBASE_DATABASE_URL,
};

// 既存のアプリがあればそれを再利用、なければ新規初期化
const app = getApps().length > 0
  ? getApps()[0]
  : initializeApp(firebaseConfig);

// Realtime Database, Firestore, Storage のエクスポート
export const rdb = getDatabase(app);
export const storage = getStorage(app);

// Initialize Auth with persistence only once
let authInstance;
try {
  authInstance = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
} catch (e: any) {
  if (e.code === 'auth/already-initialized') {
    authInstance = getAuth(app);
  } else {
    throw e;
  }
}

export const auth = authInstance;