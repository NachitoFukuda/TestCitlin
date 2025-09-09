import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Dimensions, ViewStyle, Linking, Modal, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlassCard from '../ui/GlassCard';
import * as Notifications from 'expo-notifications';
const windowWidth = Dimensions.get('window').width;



interface FirstTimeComponentProps {
  onClose: () => void;
}

// NOTE: Ensure these variables are defined or adjust as needed
// Example placeholders:

const FirstTimeComponent: FC<FirstTimeComponentProps> = ({ onClose }) => {
  const [nickname, setNickname] = useState<string>('');
  const [dayCount, setDayCount] = useState<number>(1);

  const dailyMessages = [
    '継続は力なり！',
    '毎日一歩ずつ成長中！',
    'あなたの頑張りが未来をつくる！',
    '今日も英単語マスターしよう！',
    '続けることが成功の鍵！',
  ];

  const randomMessage = useMemo(
    () => dailyMessages[Math.floor(Math.random() * dailyMessages.length)],
    [dayCount]
  );

  // 初回表示時に選択レベルをクリア
  AsyncStorage.getItem('@selected_levels');

  // ストレージからニックネームを取得
  useEffect(() => {
    AsyncStorage.getItem('@nickname').then(value => {
      if (value) setNickname(value);
    });
  }, []);



  const safeGetData = async (key: string, defaultValue: any) => {
    try {
      const json = await AsyncStorage.getItem(key);
      if (!json) return defaultValue;
      return JSON.parse(json);
    } catch (error) {
      return defaultValue;
    }
  };
  // 今日のおぼえる単語数を計算して状態にセット


  useEffect(() => {
    const loadDeadlineDays = async () => {
      try {
        let deadlineData = await safeGetData('@deadline_days', null);
        // If no streakStart, initialize it to today
        if (!deadlineData?.streakStart) {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const streakStartISO = today.toISOString();
          const updatedData = {
            ...(deadlineData || {}),
            streakStart: streakStartISO,
            streak: 1,
            today: streakStartISO,
          };
          await AsyncStorage.setItem('@deadline_days', JSON.stringify(updatedData));
          // reflect in local variable
          if (deadlineData) {
            deadlineData.streakStart = streakStartISO;
            deadlineData.streak = 1;
            deadlineData.today = streakStartISO;
          } else {
            deadlineData = { streakStart: streakStartISO, streak: 1, today: streakStartISO };
          }
        }
        if (deadlineData?.savedAt) {
          const lastLogin = new Date(deadlineData.savedAt);
          lastLogin.setHours(0, 0, 0, 0);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const diffDays = Math.floor((today.getTime() - lastLogin.getTime()) / (1000 * 60 * 60 * 24));

          if (diffDays === 1) {
            // 前日ログインしていた場合は streak を increment
            //deadlineData.streak = (deadlineData.streak || 1) + 1;
            //ログイン記録
          } else if (diffDays > 1) {
            // 前日より前のログインなら reset
            const resetDate = today.toISOString();
            deadlineData.streakStart = resetDate;
            deadlineData.streak = 1;
            deadlineData.today = resetDate;
          }
          // 更新した savedAt と streak をストレージに保存
          deadlineData.savedAt = today.toISOString();
          await AsyncStorage.setItem('@deadline_days', JSON.stringify(deadlineData));
          // 画面上の dayCount にはアカウント作成日（streakStart）からの日数を表示
          const startDate = new Date(deadlineData.streakStart);
          startDate.setHours(0,0,0,0);
          const todayDate = new Date();
          todayDate.setHours(0,0,0,0);
          const accountDiffDays = Math.floor((todayDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
          setDayCount(accountDiffDays);
        }
      } catch (error) {
        console.log('[FirstTimeComponent] Error in loadDeadlineDays:', error);
      }
    };
    loadDeadlineDays();
  }, []);

  const buttonScale = useRef(new Animated.Value(1)).current;
  // Compute today's date in format: YYYY年M月D日
  // Animated value for Day counter opacity
  const dayOpacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(buttonScale, { toValue: 1.05, duration: 800, useNativeDriver: true }),
        Animated.timing(buttonScale, { toValue: 1, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  // Animate dayOpacity when dayCount changes or on mount
  useEffect(() => {
    Animated.timing(dayOpacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [dayCount]);

  // Animated opacity values for notification intro texts
  const intro1Opacity = useRef(new Animated.Value(0)).current;
  const intro2Opacity = useRef(new Animated.Value(0)).current;
  const intro3Opacity = useRef(new Animated.Value(0)).current;

  // Fade-in sequence for notification intro
  useEffect(() => {
    if (dayCount === 1) {
      Animated.sequence([
        Animated.timing(intro1Opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(intro2Opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(intro3Opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]).start();
    }
  }, [dayCount]);

  // Modal state and inputs
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [notifTime, setNotifTime] = useState<Date>(new Date());
  const [notifMessage, setNotifMessage] = useState<string>('単語の勉強の時間やで！😍');
  const [hasOpenedModal, setHasOpenedModal] = useState<boolean>(false);

  // 通知許可をリクエストする関数
  const requestNotificationPermission = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('通知が許可されていません。設定から通知をオンにしてください。');
      return false;
    }
    return true;
  };

  const handleConfigureNotifications = useCallback(async () => {
    // まずはボタン押下の時点で Start を表示できるようにする
    setHasOpenedModal(true);
    const granted = await requestNotificationPermission();
    if (!granted) {
      // 権限が拒否されても Start は表示継続。モーダルは開かない。
      return;
    }
    setModalVisible(true);
  }, []);

  // 通知をスケジューリング
  const scheduleLocalNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '復習の時間だよ！',
        body: notifMessage,
      },
      trigger: {
        type: 'calendar',
        hour: notifTime.getHours(),
        minute: notifTime.getMinutes(),
        repeats: true,
      } as Notifications.CalendarTriggerInput, // ← ここで明示！
    });
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.bigDayText, { opacity: dayOpacity }]}>
        Day {dayCount}
      </Animated.Text>
      {dayCount === 1 && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            今日から <Text style={styles.highlight}>{nickname}</Text>の
          </Text>
          <Text style={[styles.title, styles.secondLine]}>
              英単語無双が始まる。
          </Text>


          <View style={styles.notificationIntro}>
            <Animated.Text style={[styles.title, styles.smallNotifTitle, { opacity: intro1Opacity }]}>
              まず…
            </Animated.Text>
            <Animated.Text style={[styles.title, styles.smallNotifTitle, { opacity: intro2Opacity }]}>
              通知を設定しよう！
            </Animated.Text>
            <Animated.Text style={[styles.title, styles.smallNotifTitle, { opacity: intro3Opacity }]}>
            通知を許可すると3倍、継続率が上がるよ！
              </Animated.Text>
          </View>
          <Text style={styles.notificationEffect}>
            
          </Text>
          <View style={styles.centeredButtonContainer}>
            <TouchableOpacity style={styles.notificationButton} onPress={handleConfigureNotifications}>
              <View style={styles.notificationButtonContent}>
                <Ionicons name="notifications-outline" size={20} color="#121212" style={{ marginRight: 8 }} />
                <Text style={styles.notificationButtonText}>通知を設定する</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Modal visible={modalVisible} transparent animationType="slide">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>通知設定</Text>
                <DateTimePicker
                  value={notifTime}
                  mode="time"
                  display="spinner"
                  onChange={(_, date) => date && setNotifTime(date)}
                  style={{ width: '100%' }}
                  textColor="#000000"
                />
                <TextInput
                  style={styles.modalInput}
                  value={notifMessage}
                  onChangeText={setNotifMessage}
                  placeholder="カスタム通知メッセージ"
                />
                <View style={styles.modalButtons}>
                  <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                    <Text>キャンセル</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={scheduleLocalNotification} style={styles.modalButton}>
                    <Text>設定</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}

      {!(dayCount === 1 && !hasOpenedModal) && (
        <>
          {dayCount >= 2 && (
            <Text style={styles.randomText}>{randomMessage}</Text>
          )}
          <Animated.View
            style={[
              {
                position: 'absolute',
                bottom: 40,
                alignSelf: 'center',
              },
              { transform: [{ scale: buttonScale }] },
            ]}
          >
            <TouchableOpacity onPress={onClose}>
              <GlassCard width={windowWidth*0.8} height={80} design="dark">
                <Text style={styles.startButtonText}>Start</Text>
              </GlassCard>
            </TouchableOpacity>
          </Animated.View>
        </>
      )}
    </View>
  );
};

export default FirstTimeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#rgb(6, 0, 25)',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 10,
  },
  titleContainer: {
    position: 'absolute',
    top: 100 + windowWidth * 0.25 + 10, // below bigDayText
    left: 20,
  },
  secondLine: {
    fontSize: 43,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
    color: '#CCCCCC',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  goalText: {
    fontSize: 18,
    marginVertical: 12,
    textAlign: 'center',
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  levelText: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  dayText: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  firstDayText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#00FFEA',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  startButtonText: {
    fontSize:32,
    fontWeight: '500',
    color: '#00FFEA',
    textShadowColor: '#00FFEA',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
    letterSpacing: 2,
  },
  highlight: {
    fontSize: 35,
    color: '#FFD700',
    fontWeight: '800',
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  bigDayText: {
    position: 'absolute',
    top: 60,
    left: 20,
    fontSize: windowWidth * 0.25,
    fontWeight: '900',
    color: '#00FFEA',
    textShadowColor: '#00FFEA',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 7,
    letterSpacing: 2,
  },
  glassButton: {
    width: 200,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  notificationPrompt: {
    marginTop: windowWidth * 0.05,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  notificationText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: '#000000',
    fontWeight: '600',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  notificationButton: {
    backgroundColor: '#00FFEA',
    marginTop:30,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  notificationButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#121212',
  },
  notificationIntro: {
    marginTop: 80,
  },
  smallNotifTitle: {
    fontSize: 22,
  },
  notificationButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor:'#fff',
    borderRadius:10,
    padding:20,
  },
  modalTitle: {
    fontSize:18,
    fontWeight:'bold',
    marginBottom:12,
  },
  modalInput: {
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:5,
    padding:8,
    marginTop:12,
    marginBottom:12,
  },
  modalPicker: {
    width: '100%',
    height: 50,
    marginBottom: 12,
  },
  modalButtons: {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  modalButton: {
    padding:10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 12,
  },
  randomText: {
    fontSize: 30,
    color: '#00FFEA',
    textAlign: 'center',
    marginBottom: 16,
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  centeredButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationEffect: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
