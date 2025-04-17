// utils/getOrSaveImageFileUrlRTDB.js
import { rtdb } from '../firebaseConfig';
import { ref, get, set } from 'firebase/database';
import Constants from 'expo-constants';

// モジュール読み込み時に一度だけ出るログ
const PEXELS_API_KEY = (Constants.expoConfig?.extra as any)['PEXELS_API_KEY'];

export async function getOrSaveImageFileUrlRTDB(problemId: any, query: string) {
  const nodePath = `citlinimage/${problemId}`;
  const nodeRef = ref(rtdb, nodePath);
  // 1) 既存の imageUrl をチェック
  let snap;
  try {
    snap = await get(nodeRef);
  } catch (e) {
    console.error('[getOrSaveImageFileUrlRTDB] データベース取得エラー:', e);
    throw e;
  }

  if (snap.exists() && snap.val().imageUrl) {
    return snap.val().imageUrl;
  }

  // 2) なければ Pexels API を叩く
  const effective = query?.trim() || 'default';
  let data;
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?per_page=1&query=${encodeURIComponent(effective)}`,
      { headers: { Authorization: PEXELS_API_KEY } }
    );
    data = await res.json();
  } catch (e) {
    console.error('[getOrSaveImageFileUrlRTDB] Pexels API 呼び出しエラー:', e);
    throw e;
  }

  if (!data.photos?.length) {
    console.warn('[getOrSaveImageFileUrlRTDB] 画像が見つかりませんでした');
    return null;
  }

  const photo = data.photos[0];
  const imageUrl = photo.src.large;
  const photographer = photo.photographer;

  // 3) DB に保存
  try {
    await set(nodeRef, { imageUrl, photographer });
  } catch (e) {
    console.error('[getOrSaveImageFileUrlRTDB] DB保存エラー:', e);
    // 保存失敗でも画像URLは返却
  }
  return imageUrl;
}
