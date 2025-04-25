// app.config.js
require('dotenv').config(); // .env から読み込み

module.exports = {
  expo: {
    name: "testcitlin",
    slug: "testcitlin",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    splash: {
      image: "./assets/images/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
      // app.config.js の expo.ios.infoPlist 部分
      ios: {
        supportsTablet: true,
        infoPlist: {
          NSPhotoLibraryUsageDescription: "ユーザーが写真を選択できるようにします",
          NSAppTransportSecurity: {
            NSAllowsArbitraryLoads: true,
            NSExceptionDomains: {
              "pexels.com": {
                NSIncludesSubdomains: true,
                NSAllowsArbitraryLoads: true
              }
            }
          }
        }
      },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router" // ← ここだけで OK
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      PEXELS_API_KEY: process.env.PEXELS_API_KEY,
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
      FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL
    }
  }
};