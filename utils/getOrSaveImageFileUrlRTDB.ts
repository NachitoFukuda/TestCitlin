import { rdb } from '../firebaseConfig';
import { ref, get, set } from 'firebase/database';
import Constants from 'expo-constants';

// モジュール読み込み時に一度だけ出るログ
const PEXELS_API_KEY = (Constants.expoConfig?.extra as any)['PEXELS_API_KEY'];

export async function getOrSaveImageFileUrlRTDB(problemId: any, query: string) {
  // ネットワーク疎通テスト
  try {
    const ping = await fetch('https://example.com');
    console.log('🌐 ネットワーク OK:', ping.status);
  } catch (e) {
    console.error('🛑 ネットワークエラー:', e);
  }

  const nodePath = `citlinimage/${problemId}`;
  const nodeRef = ref(rdb, nodePath);

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

  // API キー未設定なら処理を中断（ログはキー値を出さない）
  if (!PEXELS_API_KEY) {
    console.warn('[getOrSaveImageFileUrlRTDB] PEXELS_API_KEY が未設定のため画像取得をスキップします');
    return null;
  }
  let data;
  try {
    const url = `https://api.pexels.com/v1/search?per_page=1&query=${encodeURIComponent(effective)}`;
    console.log('[getOrSaveImageFileUrlRTDB] Fetch URL:', url);

    const res = await fetch(url, {
      headers: { Authorization: PEXELS_API_KEY || '' },
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(`[getOrSaveImageFileUrlRTDB] HTTP Error ${res.status}:`, text);
      return null;
    }
    data = await res.json();
  } catch (e) {
    console.error('[getOrSaveImageFileUrlRTDB] Pexels API 呼び出しエラー:', e);
    throw e;
  }

  if (!data.photos?.length) {
    console.warn('[getOrSaveImageFileUrlRTDB] 画像が見つかりませんでした');
    return null;
  }

  // 返ってきた photo と src 情報をログ
  const photo = data.photos[0];
  console.log('[getOrSaveImageFileUrlRTDB] photo object:', photo);
  console.log('[getOrSaveImageFileUrlRTDB] src keys:', Object.keys(photo.src), photo.src);
  const imageUrl = photo.src.large;
  console.log('[getOrSaveImageFileUrlRTDB] 画像 URL:', imageUrl);
  const photographer = photo.photographer;

  // 3) DB に保存
  try {
    await set(nodeRef, { imageUrl, photographer });
  } catch (e) {
    console.error('[getOrSaveImageFileUrlRTDB] DB保存エラー:', e);
  }

  return imageUrl;
}
