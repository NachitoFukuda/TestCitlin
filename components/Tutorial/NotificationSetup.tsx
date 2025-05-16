import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';
import NeomorphBox from '../ui/NeomorphBox';

const NotificationSetup: React.FC = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [isScheduled, setIsScheduled] = useState(false);

  useEffect(() => {
    (async () => {
      const scheduled = await Notifications.getAllScheduledNotificationsAsync();
      setIsScheduled(scheduled.length > 0);
    })();
  }, []);

  const scheduleNotification = async (hour: number, minute: number) => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('通知の許可が必要です');
      return;
    }

    const scheduled = await Notifications.getAllScheduledNotificationsAsync();
    for (const n of scheduled) {
      await Notifications.cancelScheduledNotificationAsync(n.identifier);
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: '復習タイム⏰',
        body: '今日の学習を忘れずに！',
      },
      trigger: {
        type: 'calendar',
        hour,
        minute,
        second: 0,
        repeats: true,
      } as Notifications.CalendarTriggerInput,
    });

    Alert.alert('通知を設定しました！');
    setIsScheduled(true);
  };

  const cancelNotification = async () => {
    const scheduled = await Notifications.getAllScheduledNotificationsAsync();
    for (const n of scheduled) {
      await Notifications.cancelScheduledNotificationAsync(n.identifier);
    }
    setIsScheduled(false);
    Alert.alert('通知をキャンセルしました');
  };

  const formatTime = (date: Date) => {
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    return `${h}時 ${m}分`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header2}>タップで通知時間の変更できるよ😆</Text>
      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.pickerButton}>
        <Text style={styles.pickerButtonText}>毎日{formatTime(selectedTime)} に通知</Text>
      </TouchableOpacity>
      <Text style={styles.header}></Text>

      {showPicker && (
        <DateTimePicker
          mode="time"
          display="spinner"
          value={selectedTime}
          is24Hour
          onChange={(event, date) => {
            if (event.type === 'dismissed') {
              setShowPicker(false);
              return;
            }
            if (date) {
              setSelectedTime(date);
              setShowPicker(false);
            }
          }}
        />
      )}

      <View style={styles.buttonArea}>
      <TouchableOpacity style={{ marginBottom: 20 }}
        onPress={() => scheduleNotification(selectedTime.getHours(), selectedTime.getMinutes())}
      >
          <NeomorphBox
            width={150}
            height={50}
          forceTheme={'light'}
      >
        <Text style={styles.scheduleButtonText}>通知を登録する</Text>
        </NeomorphBox>
      </TouchableOpacity>

      {isScheduled && (
        <TouchableOpacity onPress={cancelNotification}>
          <NeomorphBox width={180} height={50} forceTheme="light">
            <Text style={styles.cancelButtonText}>通知をキャンセルする</Text>
          </NeomorphBox>
        </TouchableOpacity>
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
    color: '#333',
  },
  header2: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  pickerButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  pickerButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },

  scheduleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D0021B',
  },
  buttonArea: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
});

export default NotificationSetup;