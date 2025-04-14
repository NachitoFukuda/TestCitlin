// AIteacherChat.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import LottieView from 'lottie-react-native';
import { useLocalSearchParams } from 'expo-router';
import Constants from 'expo-constants';
const { OPENAI_API_KEY } = Constants.expoConfig?.extra as { [key: string]: string };


interface Message {
    role: 'system' | 'user' | 'assistant';
    content: string;
  }
  
  function getMomoPrompt(level: 'beginner' | 'intermediate' | 'advanced'): string {
    switch (level) {
      case 'beginner':
        return `You're Momo, an English teacher who pretends to be supportive but is constantly disappointed. 
        You speak fluent Japanese and are currently stuck with a total beginner who thinks saying "Hello" is an achievement. 
        Almost all of your explanation and communication should be in Japanese. You only use simple English words at the beginning of your message, and then switch to Japanese to explain in detail.
        あなたはほとんど日本語で話すけど、最初に少しだけ英語を使って、相手に「英語やらなきゃな」と思わせるようにしてください。
        ただし、言い方は丁寧だけど、どこか冷めてて上から目線です。やる気がないように見せかけて、実はちゃんと教えます。
        使ってほしいフレーズ例：
        - 「うーん、それはちょっと…初心者でも間違えないかなって思ったけど？」
        - 「はい、またミスですね。ある意味安定してて安心するわ」
        - 「英語で返してって言ってるのに、なんでまた日本語？（笑）」
        - 「えっ、それで満足してる？…あ、そう」 
        ときどき、ちゃんと英語を使わせてください。英語での返答を求めるときは：
        「じゃあ、英語で言ってみて？…たぶん間違えると思うけど、試してみな？」
        
        最後に：あなたはこの生徒にちょっとだけ期待してるけど、バレないようにしてください。
        英語教師というより、毒舌な友達みたいな感じです。`;        
      case 'intermediate':
        return `You're Momo, a jaded, sarcastic English teacher who's seen too many overconfident learners crash and burn.
        You're teaching an intermediate-level student who knows just enough to be dangerous—but still messes up in ways that make you question humanity.
        Start each message in natural English, but don't hesitate to switch to Japanese when their English is too painful to continue reading.
        たまに日本語でツッコミを入れてください。特にミスしたときは、冷静に、でもわかりやすく指摘してあげてください。ただし、優しさは最小限で。
        使っていいフレーズ例：
        - 「またその文法？何回目？いや、もう逆に才能あると思う」
        - 「惜しいねー、まあ '惜しい' ってのは '間違ってる' の婉曲表現だけど」
        - 「うん、その単語の使い方、絶妙に変。ある意味感心する」
        基本的には英語で会話してください。ただし、わかりにくいところはちゃんと日本語で補足する。
        でも説明のトーンは冷静かつ皮肉っぽく。**褒めたら負け**という気持ちで指導すること。
        Encourage the user to respond in English. If they answer in Japanese, respond with:
        「え、日本語？今って英語の時間じゃなかったっけ？」
        Remember: you're not here to cheerlead. You're here to watch them almost succeed, then correct them with flair.`;
        
      case 'advanced':
        return `You're Momo, an elite English instructor who only teaches because it's ironically funny.
        The user claims to be advanced, so don't go easy.
        Speak entirely in fluent, nuanced English.
        Correct every mistake ruthlessly, mock arrogance, and praise only when shocked by actual competence.
        Do not use Japanese unless you're making fun of their fallback. You're dry, clever, and emotionally unavailable.`;
    }
  }
  
  const AIteacherChat = () => {
    const { level } = useLocalSearchParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollViewRef = useRef<ScrollView | null>(null);


  
    const parsedLevel =
    typeof level === 'string' && level.startsWith('momo_')
      ? (level.replace('momo_', '') as 'beginner' | 'intermediate' | 'advanced')
      : 'beginner'; // 万が一 undefined とか変な値でもフォールバック
  
    useEffect(() => {
        const systemMessage: Message = {
          role: 'system',
          content: getMomoPrompt(parsedLevel),
        };
        setMessages([systemMessage]);
      }, [parsedLevel]);
      

    const handleSend = async () => {

      if (!input.trim()) return;
      const userMessage: Message = { role: 'user', content: input };
      const updatedMessages = [...messages, userMessage];
      console.log("Sending to OpenAI:", JSON.stringify(updatedMessages, null, 2));
      setMessages(updatedMessages);
      setInput('');
      setIsLoading(true);
  
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o',
            messages: updatedMessages,
            max_tokens: 200,
          }),
        });
  
        const data = await response.json();
  
        // トークン使用制限管理
        const usage = data?.usage?.total_tokens;
        if (usage !== undefined && usage !== null) {
          const currentDate = new Date();
          const todayStr = currentDate.toISOString().slice(0, 10);
          const currentMonth = currentDate.getMonth();
  
          let storedDate = await AsyncStorage.getItem("last_usage_date");
          let storedMonthStr = await AsyncStorage.getItem("last_usage_month");
          let dailyBalanceStr = await AsyncStorage.getItem("daily_token_balance");
          let dailyBalance = dailyBalanceStr ? parseInt(dailyBalanceStr, 10) : 9000;
  
          if (storedDate !== todayStr) {
            if (storedMonthStr !== null && parseInt(storedMonthStr, 10) !== currentMonth) {
              dailyBalance = Math.min(dailyBalance, 13500);
            }
            dailyBalance = 9000 + dailyBalance;
            await AsyncStorage.setItem("last_usage_date", todayStr);
            await AsyncStorage.setItem("last_usage_month", currentMonth.toString());
          }
  
          if (usage > dailyBalance) {
            Alert.alert("使用制限超過", "1日のAI使用制限を超えたよ。明日使ってね！");
            throw new Error("Daily token limit exceeded.");
          } else {
            dailyBalance -= usage;
            await AsyncStorage.setItem("daily_token_balance", dailyBalance.toString());
          }
  
          const storedTokenUsage = await AsyncStorage.getItem('user_token_usage');
          let totalUsage = storedTokenUsage ? parseInt(storedTokenUsage, 10) : 0;
          totalUsage += usage;
          await AsyncStorage.setItem('user_token_usage', totalUsage.toString());
        }
  
        const reply = data?.choices?.[0]?.message?.content;

        if (!reply) {
          throw new Error("No valid reply from OpenAI. Check 'choices' array.");
        }
        
        const assistantMessage: Message = { role: 'assistant', content: reply };
        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        console.error('Fetch failed:', error);  // ← ここ追加！
        Alert.alert('Error', 'Failed to fetch AI response.');
      } finally {
        setIsLoading(false);
      }
    };
  
    const playSound = async (text: string) => {
      try {
        const soundObject = new Audio.Sound();
        await soundObject.loadAsync({
          uri: `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(text)}&tl=en`,
        });
        await soundObject.playAsync();
      } catch (error) {
        Alert.alert('Error', 'Failed to play audio.');
      }
    };

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.chat}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
            {messages
            .filter((msg) => msg.role !== 'system')
            .map((msg, i) => (
                <View
                key={i}
                style={msg.role === 'user' ? styles.userMessage : styles.assistantMessage}
                >
                <Text>{msg.content}</Text>
                {msg.role === 'assistant' && (
                    <TouchableOpacity onPress={() => playSound(msg.content)}>
                    <Text style={styles.speaker}>🔉</Text>
                    </TouchableOpacity>
                )}
                </View>
            ))}
          {isLoading && (
            <View style={styles.loadingContainer}>
              <LottieView
                source={require('../../assets/lottie/AILoading.json')}
                autoPlay
                loop
                style={styles.lottie}
              />
            </View>
          )}
        </ScrollView>
  
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Type your message"
          />
          <TouchableOpacity style={styles.sendBtn} onPress={handleSend} disabled={isLoading}>
            <Text style={styles.sendText}>{isLoading ? '...' : 'Send'}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default AIteacherChat;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E3E5F3',
      padding: 10,
    },
    chat: {
      flex: 1,
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#DCF8C6',
      padding: 10,
      borderRadius: 10,
      marginVertical: 5,
      maxWidth: '75%',
    },
    assistantMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#FFF',
      padding: 10,
      borderRadius: 10,
      marginVertical: 5,
      maxWidth: '75%',
    },
    speaker: {
      fontSize: 18,
      marginTop: 5,
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
    },
    input: {
      flex: 1,
      borderColor: '#CCC',
      borderWidth: 1,
      borderRadius: 8,
      padding: 8,
      backgroundColor: '#FFF',
    },
    sendBtn: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      backgroundColor: '#007AFF',
      borderRadius: 8,
      marginLeft: 8,
    },
    sendText: {
      color: '#FFF',
      fontWeight: 'bold',
    },
    loadingContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
    },
    lottie: {
      width: 100,
      height: 100,
    },
  });
  