import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QuestionData } from '../../types'; // 型定義のインポート

const useQuestionData = (): { questionData: QuestionData | null; level: string | null } => {
  const [questionData, setQuestionData] = useState<QuestionData | null>(null);
  const [level, setLevel] = useState<string | null>(null);

  // AsyncStorageから選択された級を取得し、"1_5" → "1.5" のように変換して保持する
  useEffect(() => {
    AsyncStorage.getItem('@selected_levels')
      .then((data) => {
        let parsedData = data ? JSON.parse(data) : '1';
        if (Array.isArray(parsedData)) {
          parsedData = parsedData[0];
        }
        // もしアンダースコアが含まれていたらドットに置換する
        if (typeof parsedData === 'string' && parsedData.includes('_')) {
          parsedData = parsedData.replace('_', '.');
        }
        setLevel(parsedData);
      })
      .catch((error) => {
        console.error('[useQuestionData] 保存された級の取得に失敗:', error);
        setLevel('1');
      });
  }, []);

  // 選択された級に応じて動的に問題データを読み込む
  useEffect(() => {
    if (level) {
      const loadQuestions = async () => {
        try {
          let questions1, questions2, questions3;
          if (level === '1') {
            const mod1 = await import('../../constants/1/1_1');
            const mod2 = await import('../../constants/1/1_2');
            const mod3 = await import('../../constants/1/1_3');
            questions1 = mod1.default;
            questions2 = mod2.default;
            questions3 = mod3.default;
          } else if (level === '1.5') {  // 1_5 を 1.5 に変換
            const mod1 = await import('../../constants/1_5/1_5_1');
            const mod2 = await import('../../constants/1_5/1_5_2');
            const mod3 = await import('../../constants/1_5/1_5_3');
            questions1 = mod1.default;
            questions2 = mod2.default;
            questions3 = mod3.default;
          } else if (level === '2') {
            const mod1 = await import('../../constants/2/2_1');
            const mod2 = await import('../../constants/2/2_2');
            const mod3 = await import('../../constants/2/2_3');
            questions1 = mod1.default;
            questions2 = mod2.default;
            questions3 = mod3.default;
          } else if (level === '2.5') {  // 2_5 を 2.5 に変換
            const mod1 = await import('../../constants/2_5/2_5_1');
            const mod2 = await import('../../constants/2_5/2_5_2');
            const mod3 = await import('../../constants/2_5/2_5_3');
            questions1 = mod1.default;
            questions2 = mod2.default;
            questions3 = mod3.default;
          } else if (level === '3') {
            const mod1 = await import('../../constants/3/3_1');
            const mod2 = await import('../../constants/3/3_2');
            const mod3 = await import('../../constants/3/3_3');
            questions1 = mod1.default;
            questions2 = mod2.default;
            questions3 = mod3.default;
          }
          const loadedData: QuestionData = {
            questions1: questions1 ?? [],
            questions2: questions2 ?? [],
            questions3: questions3 ?? [],
          };
          setQuestionData(loadedData);
        } catch (error) {
          console.error('[useQuestionData] 問題データの読み込みに失敗:', error);
        }
      };
      loadQuestions();
    }
  }, [level]);

  // questionData 更新時のログ（必要なら）
  useEffect(() => {
    if (questionData) {
    }
  }, [questionData]);

  return { questionData, level };
};

export default useQuestionData;
