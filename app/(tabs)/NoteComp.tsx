import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Animated, PanResponder, ActivityIndicator } from 'react-native';
import NeomorphBox from '@/components/ui/NeomorphBox';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import useQuestionData from '../../components/questioncomp/useQuestionData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebaseConfig';

const NoteComp = ({  }) => {
  const navigation = useNavigation();
  const { questionData } = useQuestionData();
  const questions1 = questionData?.questions1 ?? [];

  const screenWidth = Dimensions.get('window').width;
  const boxWidth = screenWidth * 0.9;

  type CorrectDataType = {
    [key: string]: {
      C: number;
      L: string;
      M: number;
    };
  };
  
  const [correctData, setCorrectData] = useState<CorrectDataType>({});

  // Toggle swap of red sheet side
  const [isSwapped, setIsSwapped] = useState(false);

  // Track which item’s audio is loading (by index), or null if none
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  const redSheetPosition = useRef(new Animated.Value(0)).current;

  // Store the initial Y position of the red sheet when gesture starts
  const initialRedY = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // Capture current red sheet position as initial Y
        initialRedY.current = redY;
      },
      onPanResponderMove: (e, gestureState) => {
        // Update the red sheet position based on initial Y + vertical movement
        redSheetPosition.setValue(initialRedY.current + gestureState.dy);
      },
      onPanResponderRelease: () => {
        // Nothing to flatten since we're setting absolute value directly
      },
      onPanResponderTerminate: () => {
        // No additional handling needed
      },
    })
  ).current;

  // Track each item’s layout (y-position and height)
  const [itemLayouts, setItemLayouts] = useState<{ [key: number]: { y: number; height: number } }>({});
  // Track the red sheet’s current Y position
  const [redY, setRedY] = useState(0);
  // Track ScrollView vertical scroll offset
  const [scrollY, setScrollY] = useState(0);
  // Compute red sheet height in pixels (70% of window height)
  const redSheetHeight = Dimensions.get('window').height * 0.7;
  
  useEffect(() => {
    const loadCorrectData = async () => {
      const data = await AsyncStorage.getItem('correctData');
      if (data) {
        setCorrectData(JSON.parse(data));
      }
    };
    loadCorrectData();
  }, []);

  useEffect(() => {
    const listenerId = redSheetPosition.addListener(({ value }) => {
      setRedY(value);
    });
    return () => {
      redSheetPosition.removeListener(listenerId);
    };
  }, []);

  // 単語の音声をロードして再生する
  const playWordAudio = async (question: any, index: number) => {
    try {
      // Start loading for this index
      setLoadingIndex(index);
      // 新しい Audio.Sound インスタンスを作成
      const sound = new Audio.Sound();
      // Firebase Storage から URL を取得（ID を利用）
      const folder = '3'; // 必要に応じてフォルダを変更
      const filePath = `${folder}/${question.id}.mp3`;
      const soundUrl = await getDownloadURL(ref(storage, filePath));
      // ロードして再生
      await sound.loadAsync({ uri: soundUrl }, { shouldPlay: false }, true);
      await sound.setPositionAsync(0);
      await sound.playAsync();
      // Loading complete
      setLoadingIndex(null);
      // 再生完了後は不要ならアンロード
      sound.setOnPlaybackStatusUpdate((status: any) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error('単語再生エラー:', error);
      setLoadingIndex(null);
    }
  };

  const filteredQuestions = questions1.filter(q => {
    const record = correctData[q.id];
    return record && record.C >= 1;
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.redSheet,
          { right: 0 },
          { transform: [{ translateY: redSheetPosition }] }
        ]}
      />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} disabled={loadingIndex !== null}>
        <Ionicons name="chevron-back" size={28} color="#777" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsSwapped(prev => !prev)}
        style={[styles.swapButton]}
        disabled={loadingIndex !== null}
      >
        <Text style={styles.swapButtonText}>A↔︎あ</Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={styles.list}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        style={{ width: '100%' }}
        onScroll={(e) => {
          setScrollY(e.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={16}
        >
{filteredQuestions.map((q, index) => {
  const record = correctData[q.id];
  return (
    <View
      key={index}
      onLayout={(e) => {
        const { y, height } = e.nativeEvent.layout;
        setItemLayouts(prev => ({
          ...prev,
          [index]: { y, height },
        }));
      }}
      style={{ marginBottom: 16 }}
    >
      <NeomorphBox
        width={boxWidth}
        height={80}
        style={{ marginBottom: 0 }}
      > 
        <View style={styles.labelRow}>
          {isSwapped ? (
            <>
              <Text style={styles.jpLabel}>JP </Text>
              <Text style={styles.count}>正解数: {record?.C ?? 0}</Text>
              <Text style={styles.enLabel}>EN </Text>
            </>
          ) : (
            <>
              <Text style={styles.enLabel2}>EN </Text>
              <Text style={styles.count}>正解数: {record?.C ?? 0}</Text>
              <Text style={styles.jpLabel2}>JP </Text>
            </>
          )}
        </View>

        <View style={styles.row}>
          <View style={styles.textContainer}>
            {(() => {
              // Determine if this item’s layout is still covered by the red sheet
              const layout = itemLayouts[index];
              let isCovered = false;
              if (layout) {
                const contentOffset = 100;
                const itemScreenBottom = layout.y - scrollY + layout.height + contentOffset;
                const sheetTop = redY;
                if (sheetTop <= itemScreenBottom) {
                  isCovered = true;
                }
              }
              return isSwapped ? (
                <>
                  {/* First render the Japanese answer on the left */}
                  <Text style={styles.japanese}>
                    {q.correctAnswer}
                  </Text>
                  {/* Then render the English question on the right with conceal logic */}
                  <Text
                    style={[
                      styles.item,
                      isCovered && { color: 'transparent' },
                    ]}
                  >
                    {q.question}
                  </Text>
                </>
              ) : (
                <>
                  {/* Default: question on the left */}
                  <Text style={styles.item}>
                    {q.question}
                  </Text>
                  {/* Then answer on the right with conceal logic */}
                  <Text
                    style={[
                      styles.japanese,
                      isCovered && { color: 'transparent' },
                    ]}
                  >
                    {q.correctAnswer}
                  </Text>
                </>
              );
            })()}
            {/* 再生ボタン */}
            {loadingIndex === index ? (
              <ActivityIndicator size="small" color="#3366CC" style={styles.playButton} />
            ) : (
              <TouchableOpacity
                onPress={() => playWordAudio(q, index)}
                style={styles.playButton}
                disabled={loadingIndex !== null}
              >
                <Ionicons name="play-circle-outline" size={24} color="#3366CC" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </NeomorphBox>
    </View>
  );
})}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3E5F2',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 30,
    padding: 10,
    zIndex:4
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  list: {
    marginTop: 100,
    paddingHorizontal: 20,
    paddingBottom: 200,
  },
  item: {
    fontSize: 20,
    color: '#666',
    marginBottom: 10,
    flex: 1,
    textAlign:'center'

  },
  japanese: {
    position: 'relative',
    fontSize: 20,
    color: '#666',
    marginLeft: 10,
    flex: 1,
    textAlign:'center',
    zIndex: -1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    zIndex: -1,
  },
  count: {
    fontSize: 14,
    marginTop: 10,
    color: '#777',
    marginLeft: 10,
  },
  enLabel: {
    marginTop: 10,
    marginLeft:50,
    color: '#3366CC',
  },
  jpLabel: {
    marginTop: 10,
    marginRight:50,
    color: '#CC3366',
  },
  enLabel2: {
    marginTop: 10,
    marginRight:50,
    color: '#3366CC',
  },
  jpLabel2: {
    marginTop: 10,
    marginLeft:50,
    color: '#CC3366',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  redSheet: {
    position: 'absolute',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    top: 0,
    width: '50%',
    height: '100%',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    zIndex: 5,
  },
  swapButton: {
    position: 'absolute',
    top: 50,
    right: 30,
    padding: 10,
    backgroundColor: '#666',
    borderRadius: 5,
    zIndex: 4,
  },
  swapButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  playButton: {
    position:'absolute',
    marginLeft: 8,
    alignSelf: 'center',
  },
});

export default NoteComp;
