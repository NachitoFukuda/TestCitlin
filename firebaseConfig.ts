import Constants from 'expo-constants';
import { initializeApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore'; // ← 追加

// firebaseConfig.ts の一番上あたり
console.log('🛠️ Expo extra:', Constants.expoConfig?.extra);
interface AppConfigExtra {
  FIREBASE_API_KEY: string;
  FIREBASE_AUTH_DOMAIN: string;
  FIREBASE_PROJECT_ID: string;
  FIREBASE_STORAGE_BUCKET: string;
  FIREBASE_MESSAGING_SENDER_ID: string;
  FIREBASE_APP_ID: string;
  FIREBASE_MEASUREMENT_ID: string;
  FIREBASE_DATABASE_URL: string;  // ここも型定義に追加
}

const extra = Constants.expoConfig?.extra as AppConfigExtra;

const firebaseConfig = {
  apiKey: extra.FIREBASE_API_KEY,
  authDomain: extra.FIREBASE_AUTH_DOMAIN,
  projectId: extra.FIREBASE_PROJECT_ID,
  storageBucket: extra.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: extra.FIREBASE_MESSAGING_SENDER_ID,
  appId: extra.FIREBASE_APP_ID,
  measurementId: extra.FIREBASE_MEASUREMENT_ID,
  databaseURL: extra.FIREBASE_DATABASE_URL,  // 追加行
};

// 既存のアプリがあればそれを、なければ初期化
const app =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp(firebaseConfig);

// storage と Realtime Database を app にバインドしてエクスポート
export const storage = getStorage(app);
export const rtdb = getDatabase(app);
export const firestore = getFirestore(app);      // ← 追加
// （必要に応じて Firestore を以下のように追加可能）
// import { getFirestore } from 'firebase/firestore';
// export const firestore = getFirestore(app);