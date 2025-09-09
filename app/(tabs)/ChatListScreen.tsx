import React, { useCallback, useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Image,
    Dimensions,
    Animated,
  } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import NeomorphBox from '@/components/ui/NeomorphBox';
import Footer from '@/components/ui/Footer';
import { useFocusEffect } from '@react-navigation/native';
import PurchaseScreen from '@/components/etc/PurchaseScreen';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import * as Haptics from 'expo-haptics';

interface SessionListItem {
  id: string;
  title: string;
  imageUri?: string | null;
}
// @ts-ignore ts(6385)
function getIconForChatId(chatId: string) {
  switch (chatId) {
    default:
      return require('../../assets/chatIcon/friend.jpg');
  }
}

const ChatListScreen: React.FC = () => {
  const router = useRouter();

  const [sessions, setSessions] = useState<SessionListItem[]>([]);
  const [customerInfo] = useState<any>(null);
  const [trialPressCount, setTrialPressCount] = useState(0);
  const hapticTimers = React.useRef<any[]>([]);
// Schedule haptics in sync with checkmark appearance
// 既存タイマーをクリア
hapticTimers.current.forEach(t => clearTimeout(t));
hapticTimers.current = [];
useEffect(() => {
  return () => {
    hapticTimers.current.forEach(t => clearTimeout(t));
    hapticTimers.current = [];
  };
}, [trialPressCount]);
// 各行は 120ms 間隔で出現。出現開始から少し待って振動させる（見え始めと同時くらい）
  // Schedule haptics in sync with checkmark appearance
// 既存タイマーをクリア
hapticTimers.current.forEach(t => clearTimeout(t));
hapticTimers.current = [];
  // 新規チャット作成（必要  // --- 追加 ---
  const deleteChat = async (id: string) => {
    try {
      // 消すキーを列挙
      const keys = [
        `@chat_prompt:${id}`,
        `@chat_image:${id}`,
        `@chat_name:${id}`,
        `chat_${id}`,
      ];
      await AsyncStorage.multiRemove(keys);
      // 画面からも除外
      setSessions(prev => prev.filter(item => item.id !== id));
    } catch (e) {
      Alert.alert('Error', '削除に失敗しました');
    }
  };
  // --- ここまで ---があればストレージ保存処理を追加）
  const handleAddChat = () => {
    // ここで必要なら AsyncStorage.setItem(`@chat_prompt:${newId}`, 初期タイトル) などを行う
    router.push('/newAI');  
  };

  // AsyncStorage からセッション一覧をロード
  // セッション一覧をロードする関数
    const aiGirl = require('../../assets/images/AIgarl.png');
  const { width: screenWidth } = Dimensions.get('window');
  const aspectRatio = Image.resolveAssetSource(aiGirl).width / Image.resolveAssetSource(aiGirl).height;
  const loadSessions = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();

      // ローカル専用: @chat_prompt: のあるIDのみを対象
      const promptKeys = keys.filter(k => k.startsWith('@chat_prompt:'));
      const ids = promptKeys.map(k => k.substring('@chat_prompt:'.length));

      const sessionsData = await Promise.all(
        ids.map(async id => {
          const title =
            (await AsyncStorage.getItem(`@chat_name:${id}`)) ||
            (await AsyncStorage.getItem(`@chatName:${id}`)) ||
            `チャット ${id.slice(-4)}`;
          const imageUri =
            (await AsyncStorage.getItem(`@chat_image:${id}`)) ||
            (await AsyncStorage.getItem(`@chatImage:${id}`));
          return { id, title, imageUri } as SessionListItem;
        })
      );

      setSessions(sessionsData);
    } catch (e) {
      console.error('[ChatList] loadSessions error:', e);
      Alert.alert('Error', 'セッションの読み込みに失敗しました');
    }
  };

  // 初回マウント時にロード
  useEffect(() => {
    loadSessions();
  }, []);

  // 画面フォーカス時にも再ロード
  useFocusEffect(
    useCallback(() => {
      setTrialPressCount(0);
      loadSessions();
    }, [])
  );

const checkOpacities = React.useRef(Array.from({ length: 6 }, () => new Animated.Value(0))).current;
const checkColors = React.useRef(Array.from({ length: 6 }, () => new Animated.Value(0))).current;
const animateChecks = useCallback(() => {
  // Reset via animations to avoid native/JS driver mismatch
  Animated.parallel([
    Animated.parallel(
      checkOpacities.map(v =>
        Animated.timing(v, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        })
      )
    ),
Animated.parallel(
  checkColors.map((v, i) =>
    Animated.timing(v, {
      toValue: i === 0 ? 1 : 0, // 0番は最初から緑（色アニメ無効）
      duration: 0,
      useNativeDriver: false,
    })
  )
),
  ]).start(() => {
    // Staggered show: opacity 0→1, and color 0→1 (red→green)
    // Schedule haptics in sync with checkmark appearance
// 既存タイマーをクリア
hapticTimers.current.forEach(t => clearTimeout(t));
hapticTimers.current = [];

// 各行は 120ms 間隔で出現。出現開始から少し待って振動させる（見え始めと同時くらい）
checkOpacities.forEach((_, i) => {
  const t = setTimeout(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }, 120 * i + 90); // 90msはお好みで。もう少し遅らせたければ 120 に
  hapticTimers.current.push(t as any);
});
    Animated.stagger(
      120,
      checkOpacities.map((_, i) =>
        Animated.parallel([
          Animated.timing(checkOpacities[i], {
            toValue: 1,
            duration: 180,
            useNativeDriver: false,
          }),
          Animated.sequence([
            Animated.delay(100), // keep it red briefly *after* opacity starts
            Animated.timing(checkColors[i], {
              toValue: 1,
              duration: 160,
              useNativeDriver: false,
            }),
          ]),
        ])
      )
    ).start();
  });
}, [checkOpacities, checkColors]);

      useEffect(() => {
        if (trialPressCount === 1) {
          animateChecks();
        }
      }, [trialPressCount, animateChecks]);

      const getCheckStyle = (i: number) => ({
        opacity: checkOpacities[i],
        transform: [
          {
            translateY: checkOpacities[i].interpolate({
              inputRange: [0, 1],
              outputRange: [-6, 0],
            }),
          },
        ],
        // flash red → green on appear
        color: (
          checkColors[i] ?? new Animated.Value(0)
        ).interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ['#ff3b30', '#4000f0ff', '#00f070'],
        }),
      });

        const GradientText: React.FC<{
          text: string;
          style?: any;
          colors?: readonly [string, string, ...string[]];
        }> = ({ text, style, colors = [ '#FFB200','#FFDF6D', '#FFB200'] as const }) => {
          const flat = StyleSheet.flatten(style) || {};
          const { position, top, left, right, bottom, transform, ...textStyle } = flat as any;
          const wrapperStyle = { position, top, left, right, bottom, transform } as any;

          return (
            <View style={wrapperStyle} pointerEvents="none">
              <MaskedView
                maskElement={<Text style={[textStyle, { backgroundColor: 'transparent' }]}>{text}</Text>}
              >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors}>
                  <Text style={[textStyle, { opacity: 0 }]}>{text}</Text>
                </LinearGradient>
              </MaskedView>
            </View>
          );
        };
        
  // リストの各アイテムレンダリング
 const renderItem = ({ item }: { item: SessionListItem }) => {
    // 削除ボタンをスワイプ後に表示
    const renderRightActions = () => (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() =>
          Alert.alert('確認', '本当に削除しますか？', [
            { text: 'キャンセル', style: 'cancel' },
            {
              text: '削除',
              style: 'destructive',
              onPress: () => deleteChat(item.id),
           },
        ])
        }
      >
       <Text style={styles.deleteText}>削除</Text>
      </TouchableOpacity>
    );

        const iconSource = item.imageUri
          ? { uri: item.imageUri }
          : getIconForChatId(item.id);

        const handleChatSelect = () => {
          router.push(`/AIChat?chatId=${item.id}`);
        };

        // Lightweight gradient text with MaskedView (fallback to solid gold if package unavailable)


      return (
        <Swipeable renderRightActions={renderRightActions}> 
         <NeomorphBox
            width={Dimensions.get('window').width * 0.85}
            height={60}
            forceTheme="light"
            style={styles.chatItemNeumorphism}
          >
        <TouchableOpacity
          style={styles.chatItemTouchable}
          onPress={handleChatSelect}
        >
          <View style={styles.iconTitleContainer}>
            <Image source={iconSource} style={styles.chatIcon} />
            <Text style={styles.chatTitle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </NeomorphBox>
      </Swipeable>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            <Text style={styles.aiText}>AI</Text>Chat
          </Text>
        </View>
        {true ? (
          trialPressCount == 0 ? (
            <>
            <View style={[styles.heroContainer, { height: screenWidth / aspectRatio }]}>
              <Image
                source={require('../../assets/images/AIgarl.png')}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  width: '100%',
                  height: screenWidth / aspectRatio,
                  resizeMode: 'cover',}}
              />
                  <View style={styles.heroTitleWrapper} pointerEvents="none">
                    <GradientText
                      text="Premier Pro"
                      style={styles.heroTitleText}
                      colors={[ '#ffa600ff','#fff09aff', '#ffa600ff'] as const}
                    />
                  </View>
            </View>
        <View style={[styles.heroContainer, { height: screenWidth / aspectRatio }]}>
          <Image
            source={require('../../assets/images/AIgarl.png')}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              width: '100%',
              height: screenWidth / aspectRatio,
              resizeMode: 'cover',}}
          />
      <View style={styles.heroTitleWrapper} pointerEvents="none">
                <GradientText
                  text="Premier Pro"
                  style={styles.heroTitleText}
                  colors={[ '#ffa600ff','#f3d945ff', '#ffa600ff'] as const}
                />
          </View>
        </View>
            <View style={styles.heroCenterContainer} pointerEvents="none">
            <View style={styles.heroRow}>
              <Text style={styles.heroCenterText1}>推し</Text>
              <Text style={[styles.heroCenterText, styles.heroCenterTextRight]}>が英語を教えてくれたら</Text>
            </View>
              <Text style={styles.heroCenterText}>
                すぐに覚えられるよね！
              </Text>
            </View>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity
                  onPress={() => setTrialPressCount(prev => prev + 1)}
                  style={styles.trialButton}
                >
                <NeomorphBox
                  width={Dimensions.get('window').width * 0.9}
                  height={50}
                  variant={'blue'}
                >
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>¥0で話してみる</Text>
                </NeomorphBox>
            </TouchableOpacity>
            </View>
          </>
          ) : trialPressCount == 1 ? (
            <View style={styles.compareContainer}>
              <Text style={styles.compareTitle}>Superで英語コースをもっと効率よく進めよう！</Text>

          <View style={styles.compareCard}>
                {/* Header columns */}
          <View style={styles.compareHeaderRow}>
            <View style={styles.colLabelHeader} />

            <View style={[styles.headerCellContainer, { flex: 0.9 }]}>
              <Text style={styles.compareHeaderText}>無料版</Text>
            </View>

            <View style={[styles.headerCellContainer, styles.proColBgHeader, { flex: 0.9 }]}>
              <View style={styles.proBadgeContainer}>
                <GradientText
                  text="Pro"
                  style={styles.heroTitleText2}
                  colors={[ '#ffc800ff','#ffe26fff', '#ffc800ff'] as const}
                />
              </View>
            </View>
          </View>

      {/* Rows */}
      <View style={styles.compareRowTOP}> 
        <Text style={[styles.compareLabel, {flex: 1.6}]}>通常学習コンテンツ</Text>
        <Animated.Text style={[styles.cellIconCheck, getCheckStyle(0)]}>✓</Animated.Text>
          <Animated.Text style={[styles.cellIconCheck, getCheckStyle(1)]}>✓</Animated.Text>
      </View>

      <View style={styles.rowDivider} />

      <View style={styles.compareRow}> 
        <Text style={[styles.compareLabel, {flex: 1.6}]}>AI推し教師</Text>
        <Text style={styles.cellIconDash}>—</Text>
        <Animated.Text style={[styles.cellIconCheck, getCheckStyle(2)]}>✓</Animated.Text>
      </View>

      <View style={styles.rowDivider} />

      <View style={styles.compareRow}> 
        <Text style={[styles.compareLabel, {flex: 1.6}]}>全ての級の広告をオフ</Text>
        <Text style={styles.cellIconDash}>—</Text>
        <Animated.Text style={[styles.cellIconCheck, getCheckStyle(3)]}>✓</Animated.Text>
      </View>

      <View style={styles.rowDivider} />

      <View style={styles.compareRow}> 
        <Text style={[styles.compareLabel, {flex: 1.6}]}>AI推し教師の作成</Text>
        <Text style={styles.cellIconDash}>—</Text>
        <Animated.Text style={[styles.cellIconCheck, getCheckStyle(4)]}>✓</Animated.Text>
      </View>

      <View style={styles.rowDivider} />

      <View style={styles.compareRow}> 
        <Text style={[styles.compareLabel, {flex: 1.6}]}>特別アイコン</Text>
        <Text style={styles.cellIconDash}>—</Text>
        <Animated.Text style={[styles.cellIconCheck, getCheckStyle(5)]}>✓</Animated.Text>
      </View>
    </View>

    <View style={styles.compareCtaContainer}>
      <TouchableOpacity
        onPress={() => setTrialPressCount(prev => prev + 1)}
        style={styles.trialButton}
      >
        <NeomorphBox
          width={Dimensions.get('window').width * 0.9}
          height={50}
          variant={'blue'}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>1週間無料トライアルをスタート</Text>
        </NeomorphBox>
      </TouchableOpacity>
    </View>
  </View>
): (
            <PurchaseScreen customerInfo={customerInfo} />
          )
        ) : (
            <>
            <Text style={styles.sectionTitle}>教師一覧</Text>
            <View style={styles.addButtonContainer}>
              <TouchableOpacity
                onPress={handleAddChat}
              >
                  <NeomorphBox
                    width={200}
                    height={40}
                    variant="AI"
                  >
                  <Text style={styles.addButtonText}>+ 新しいチャットを追加</Text>
                </NeomorphBox>
              </TouchableOpacity>
                      <FlatList
                        data={sessions}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={{
                          alignItems: 'center',
                          paddingBottom: 150,
                        }}
                      />
            </View>
            </>
          )}
      </SafeAreaView>
      {/* 画面下部の固定ボタン群 */}
      <Footer activeIcon="chat" />
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E3E5F2' },
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  aiText: {
    color: 'rgba(0, 89, 255, 0.8)',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 16,
  },
  chatItemNeumorphism: {
    marginVertical: 10,
    backgroundColor: '#E3E5F2',
    borderRadius: 8,
    paddingVertical: 7,
  },
  chatItemTouchable: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  iconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  chatIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    overflow: 'hidden',
  },
  chatTitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'left',
  },
  addButtonContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },

  addButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
    bottomButtonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 180, // フッターと被らないよう余白（必要に応じて調整）
    alignItems: 'center',
  },
  trialButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  heroContainer: {
    position: 'absolute',
    width: '100%',
  },
heroTitleWrapper: {
  position: 'absolute',
  top: 65,
  left: 0,
  right: 0,
  alignItems: 'center',
  zIndex: 2,
},
heroTitleText: {
  position: 'absolute',
  right: 20,
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
},
heroTitleText2: {
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
  padding: 4,
},
heroCenterText: {
  fontSize: 27,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#666',
},
heroCenterText1: {
  fontSize: 34,
  fontWeight: 'bold',
  color: '#00db04ff',
},
heroCenterContainer: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 280,  // 位置はここを調整
  alignItems: 'center',
},
heroRow: {
  flexDirection: 'row',
  alignItems: 'baseline', // keep the text baselines aligned
  justifyContent: 'center',
},
heroCenterTextRight: {
  marginLeft: 6,
},
compareContainer: {
  flex: 1,
  paddingHorizontal: 16,
  paddingTop: 20,
},
compareTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  marginBottom: 16,
},
compareCtaContainer: {
  marginTop: 16,
  alignItems: 'center',
},
compareCard: {
  borderRadius: 16,
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderColor: 'rgba(255,255,255,0.25)',
  borderWidth: 1,
  backdropFilter: 'blur(8px)', // ignored on RN but safe
},
compareHeaderText: {
  fontSize: 16,
  color: '#000000ff',
  textAlign: 'center',   // ← 中央揃え
  marginLeft: 10
},
compareLabel: {
  color: '#000000ff',
  fontSize: 17,
  fontWeight: '400',
  paddingVertical: 12,
  paddingHorizontal: 12,
},
cellIconCheck: {
  flex: 0.9,
  textAlign: 'center',
  color: '#00f070ff',
  fontSize: 20,
  fontWeight: 'bold',
  paddingVertical: 12,
},
cellIconDash: {
  flex: 0.9,
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  color: '#aeaeaeff',
  paddingVertical: 12,
},
compareRow: {
  flexDirection: 'row',
  alignItems: 'center',
  borderTopColor: '#9e9e9eff',
  borderTopWidth: 1,   // ← 横の区切り線だけ残す
},
compareRowTOP: {
  flexDirection: 'row',
  alignItems: 'center',
},
rowDivider: {
  height: 1,
  backgroundColor: 'rgba(255,255,255,0.18)',
},
compareHeaderRow: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 12,
},
colLabelHeader: { flex: 1.6 },
headerCellContainer: {
  alignItems: 'center',
  justifyContent: 'center',
},
proBadgeContainer: {
  position: 'absolute',
  borderRadius: 12,
  paddingHorizontal: 8,
  paddingVertical: 4,
  marginBottom: 80,
},
proColBgHeader: {
  borderRadius: 12,
  paddingVertical: 4,
  paddingHorizontal: 4,
  paddingBottom: 30,
  backgroundColor: '#000000ff',
},
});

export default ChatListScreen;