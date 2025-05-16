// hooks/useCharacterPrompt.ts
import { useCallback } from 'react';
import Constants from 'expo-constants';
import { Personality } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { OPENAI_API_KEY } = (Constants.expoConfig?.extra || {}) as { OPENAI_API_KEY?: string };
export const useCharacterPrompt = () => {
  /**
   * ユーザーの入力内容を受け取り、GPT API でキャラクタープロンプトを生成
   */
  const generateCharacterPrompt = useCallback(
    async (
      personality: Personality & { gender?: string },
      chatId: string,
      imageUri?: string,
      parentPrompt?: string,
    ): Promise<string> => {
      try {
        // If a nickname is passed from parent, save it to storage

        if (parentPrompt) {
          // 親から渡されたプロンプトをそのまま保存して返す
          await AsyncStorage.setItem(`@chat_prompt:${chatId}`, parentPrompt);
          if (imageUri) {
            await AsyncStorage.setItem(`@chat_image:${chatId}`, imageUri);
          }
          // Confirm storage by retrieving and logging
          const storedPrompt = await AsyncStorage.getItem(`@chat_prompt:${chatId}`);
          const storedName = await AsyncStorage.getItem(`@chat_name:${chatId}`);
          if (storedName) {
          }
          if (imageUri) {
            const storedImage = await AsyncStorage.getItem(`@chat_image:${chatId}`);
          }
          return parentPrompt.trim();
        }
        if (!OPENAI_API_KEY) {
          console.error('[generateCharacterPrompt] API key missing');
          throw new Error('APIキーが見つかりません');
        }
        const systemContent = `
          ユーザーから渡された以下の情報をもとに、会話エンジン用のキャラクタープロンプトを作成してください。
          - ニックネーム: ${personality.nickname}
          - 年齢: ${personality.age}歳
          - 性別: ${personality.gender}
          - 性格の特徴: ${personality.traits.join('、')}
          - 口癖 語尾: ${personality.catchphrases.join('、')}
          - 一言フレーズ: ${personality.verbalTics.join('、')}
          - 好きなもの: ${personality.favorites?.join('、') || '情報なし'}
          - 嫌いなもの: ${personality.dislikes?.join('、') || '情報なし'}
          - 背景設定: ${personality.background}
          - 詳細プロフィール: ${personality.profileDetails}
          `;
        const payload = {
          model: 'gpt-4.1-nano',
          messages: [
            { role: 'system', content: systemContent },
            { role: 'user', content: '上記を踏まえ、システムプロンプトを作成してください。' },
          ],
          max_tokens: 500,
          temperature: 0.8,
        };
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          const errText = await res.text();
          console.error('[generateCharacterPrompt] OpenAI API error:', errText);
          throw new Error(`OpenAI API エラー: ${errText}`);
        }

        const json = await res.json();
        const content = json.choices?.[0]?.message?.content;
        if (!content) {
          console.error('[generateCharacterPrompt] empty content returned');
          throw new Error('応答が空です');
        }
        const trimmed = content.trim();
        await AsyncStorage.setItem(`@chat_prompt:${chatId}`, trimmed);
        await AsyncStorage.setItem(`@chat_name:${chatId}`, personality.nickname);
        if (imageUri) {
          await AsyncStorage.setItem(`@chat_image:${chatId}`, imageUri);
        }
        // Confirm storage by retrieving and logging
         await AsyncStorage.getItem(`@chat_prompt:${chatId}`);
         await AsyncStorage.getItem(`@chat_name:${chatId}`);
         await AsyncStorage.getItem(`@chat_image:${chatId}`);

        return trimmed;
      } catch (error) {
        console.error('[generateCharacterPrompt] error:', error);
        throw error;
      }
    },
    []
  );
  return { generateCharacterPrompt };
};