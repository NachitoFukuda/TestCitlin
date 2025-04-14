// useSoundFiles.js
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { soundFileMap } from '../../constants/soundFileMap';

const useSoundFiles = () => {
  const [soundFiles, setSoundFiles] = useState(null);

  useEffect(() => {
    const loadSoundFiles = async () => {
      try {
        console.log('AsyncStorageから級を取得中...');
        const data = await AsyncStorage.getItem('@selected_levels');
        let level = data ? JSON.parse(data) : '1';

        if (Array.isArray(level)) {
          level = level[0];
        }

        console.log('取得した級:', level);

        const files = soundFileMap[level];
        if (!files) {
          throw new Error(`soundFileMap に ${level} のデータが存在しません`);
        }

        console.log(`サウンドファイル（${level}級）の読み込み完了`);
        setSoundFiles(files);
      } catch (error) {
        console.error('サウンドファイルの取得に失敗:', error);
        setSoundFiles(null);
      }
    };

    loadSoundFiles();
  }, []);

  return soundFiles;
};

export default useSoundFiles;
