// StrictMode やリマウントによる二重実行を防ぐモジュールスコープのフラグ
let hasSubmitted = false;
import React, { useState, useEffect, useRef } from 'react';
import { LayoutAnimation, UIManager } from 'react-native';
// Android で LayoutAnimation を有効化
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
import { useFocusEffect } from '@react-navigation/native';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  Alert,
  Image,
  Button,
  Dimensions,
  Keyboard
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { X, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Colors from '@/constants/Colors';
import { defaultPersonalities } from '../../constants/personalities';
import { Personality } from '@/types';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { generateUniqueId } from '../../utils/helpers';
import AgePicker from '@/components/AIchat/AgePicker';
import PersonalityPicker from '@/components/AIchat/PersonalityPicker';
import CatchphraseTicEditor from '@/components/AIchat/CatchphraseTicEditor';
import { useCharacterPrompt } from '@/hooks/useCharacterPrompt';
import NeomorphBox from '@/components/ui/NeomorphBox';

export default function NewChatScreen() {
  const router = useRouter();
  const { createSession } = useSessionStorage();
  const { generateCharacterPrompt } = useCharacterPrompt();
  const [step, setStep] = useState(1);
  const screenWidth = Dimensions.get('window').width;
  const [selectedPersonality, setSelectedPersonality] = useState<Personality>(
    JSON.parse(JSON.stringify(defaultPersonalities[0]))
  );
  const [newPhrase, setNewPhrase] = useState('');
  const [newTic, setNewTic] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);
  const [similarityLevel, setSimilarityLevel] = useState<'high' | 'medium' | 'low' | 'AI' | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(5);
  // ステップ表示プリセット
  const [customDisplayIndices, setCustomDisplayIndices] = useState<number[] | null>(null);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState<string | null>(null);
  const [traitsSelected, setTraitsSelected] = useState(false);

  // キャラクタープロンプト生成モーダル制御
  const [showCharacterPrompt] = useState(false);

  // 好きなもの入力用ステートとハンドラ
  const [newFavorite, setNewFavorite] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [newDislike, setNewDislike] = useState('');
  const [dislikes, setDislikes] = useState<string[]>([]);

  // 質問内容を管理するステート
  const [questions, setQuestions] = useState<string[]>(Array(questionCount).fill(''));

  // 画面がフォーカスされるたびにウィザード状態をリセット
  useFocusEffect(
    React.useCallback(() => {
      // モジュールスコープのフラグをリセット
      hasSubmitted = false;
      // 初期状態にリセット
      setStep(1);
      setSimilarityLevel(null);
      setQuestionCount(10);
      setCustomDisplayIndices(null);
      return () => {
        // クリーンアップ不要
      };
    }, [])
  );

  // questionCount の変更に応じて配列長を調整
  useEffect(() => {
    setQuestions(prev => {
      const diff = questionCount - prev.length;
      if (diff > 0) {
        return [...prev, ...Array(diff).fill('')];
      } else if (diff < 0) {
        return prev.slice(0, questionCount);
      }
      return prev;
    });
  }, [questionCount]);

  const handleAddFavorite = () => {
    if (newFavorite.trim() === '') return;
    setFavorites(prev => [...prev, newFavorite.trim()]);
    setNewFavorite('');
  };

  const handleRemoveFavorite = (index: number) => {
    setFavorites(prev => prev.filter((_, i) => i !== index));
  };

  const handleAddDislike = () => {
    if (newDislike.trim() === '') return;
    setDislikes(prev => [...prev, newDislike.trim()]);
    setNewDislike('');
  };

  const handleRemoveDislike = (index: number) => {
    setDislikes(prev => prev.filter((_, i) => i !== index));
  };
  useEffect(() => {
    // 最終ステップ（renderSummary）表示時
    if (step === renderSteps.length && !hasSubmitted) {
      hasSubmitted = true;
      const submitData = async () => {
        // 一意なIDを生成
        const id = generateUniqueId();
        // 性格プロンプトをフックに渡す（親からの親Promptを第四引数で渡す）
        const charPrompt = await generateCharacterPrompt(
          {
            ...selectedPersonality,
            age,
            gender: gender ?? undefined,
            background,
            profileDetails,
            favorites,
            dislikes,
          },
          id, // chatId
          pickedImage ?? undefined, // imageUri
          parentPrompt !== '' ? parentPrompt : undefined, // parentPrompt
        );
        // セッションとして保存
        await createSession({
          id: id,
          personality: selectedPersonality,
          nickname: selectedPersonality.nickname,
          prompt: charPrompt,
          imageUri: pickedImage,
          messages: [],
          createdAt: Date.now(),
          lastModified: Date.now(),
        });
        // ここでチャット画面へ遷移
        router.push({ pathname: '/AIChat', params: { chatId: id } });
      };
      submitData();
    }
  }, [step]);

  // 推しの背景設定および詳細プロフィール
  const [background, setBackground] = useState('');
  const [profileDetails, setProfileDetails] = useState('');

  // 画像追加用ステート
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  // State to track generated prompt from child
  const [parentPrompt, setParentPrompt] = useState<string>('');
  // State to track generated nickname from child

  // State for keyboard visibility
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // 画像ピッカー起動
    const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        // MediaTypeOptions の代わりに文字列配列を指定
      mediaTypes: ['images'],
      aspect: [3, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets.length > 0) {
      setPickedImage(result.assets[0].uri);
    }
  };


  const handleAddCatchphrase = () => {
    if (newPhrase.trim() === '') return;
    setSelectedPersonality({
      ...selectedPersonality,
      catchphrases: [...selectedPersonality.catchphrases, newPhrase.trim()]
    });
    setNewPhrase('');
  };

  const handleAddTic = () => {
    if (newTic.trim() === '') return;
    setSelectedPersonality({
      ...selectedPersonality,
      verbalTics: [...selectedPersonality.verbalTics, newTic.trim()]
    });
    setNewTic('');
  };

  const handleRemoveCatchphrase = (index: number) => {
    setSelectedPersonality({
      ...selectedPersonality,
      catchphrases: selectedPersonality.catchphrases.filter((_, i) => i !== index)
    });
  };

  const handleRemoveTic = (index: number) => {
    setSelectedPersonality({
      ...selectedPersonality,
      verbalTics: selectedPersonality.verbalTics.filter((_, i) => i !== index)
    });
  };


  const handleNext = () => {
    if (customDisplayIndices && customDisplayIndices.length > 0) {
      const idx = customDisplayIndices.indexOf(step - 1);
      if (idx >= 0 && idx < customDisplayIndices.length - 1) {
        // advance in custom flow
        const nextStep = customDisplayIndices[idx + 1] + 1;
        setStep(nextStep);
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
        return;
      }
      // if custom flow ended, fall back to normal next
    }
    // normal flow including summary
    if (step < renderSteps.length) {
      setStep(step + 1);
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

const handleBack = () => {
  if (customDisplayIndices && customDisplayIndices.length > 0) {
    const idx = customDisplayIndices.indexOf(step - 1);
    if (idx > 0) {
      const prevStep = customDisplayIndices[idx - 1] + 1;
      setStep(prevStep);
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  } else {
    if (step > 1) {
      setStep(step - 1);
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  }
};



  const renderStep1 = () => {
    return (
      <Animated.View entering={FadeInDown.delay(200).springify()} style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#EBF3FF',
      }}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.push('/ChatListScreen')}
          >
          <NeomorphBox
            width={60}
            height={60}
            style={styles.AIbutton}
          >
            <X size={24} color={Colors.gray[600]} />
          </NeomorphBox>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={styles.similarityTitle}>質問に答えて推しを作成しよう！！</Text>

        </View>
            <TouchableOpacity
              style={styles.nextButton1}
              onPress={handleNext}
            >
              <NeomorphBox
                width={screenWidth * 0.9}
                height={60}
                variant="blue"
                style={styles.ImageBox}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.nextButtonText}>スタート</Text>
                </View>
              </NeomorphBox>
            </TouchableOpacity>
      </Animated.View>
    );
  };

  const renderStep2 = () => (
    <Animated.View entering={FadeInDown.delay(200).springify()} style={{ flex: 1, justifyContent: 'space-between' }}>

      <View>
        <Text style={styles.similarityTitle}>推しのニックネーム</Text>
        <NeomorphBox
              width={screenWidth * 0.9}
              height={60}
              style={styles.ImageBox}
            >
        <TextInput
          placeholder="名前　ニックネームを入力..."
          value={selectedPersonality.nickname || ''}
          onChangeText={(text) =>
            setSelectedPersonality({ ...selectedPersonality, nickname: text })
          }
        />
      </NeomorphBox>

      </View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBack}
        >
          <ChevronLeft size={20} color={Colors.gray[700]} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          disabled={!selectedPersonality.nickname || selectedPersonality.nickname.trim() === ''}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <ChevronRight size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  const renderStep3 = () => (
    <Animated.View entering={FadeInDown.delay(200).springify()} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AgePicker
          value={age}
          onChange={setAge}
          gender={gender ?? undefined}
          onGenderChange={setGender}
          minAge={0}
          maxAge={120}
          itemHeight={50}
          style={{ width: 100 }}
        />
      </View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBack}
        >
          <ChevronLeft size={20} color={Colors.gray[700]} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        {age !== null && gender && (
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>Next</Text>
            <ChevronRight size={20} color={Colors.white} />
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );

  const renderStep4 = () => {
    return (
      <Animated.View style={{ flex: 1 }} entering={FadeInDown.delay(200).springify()}>
        <View style={{ flex: 1 }}>
          <PersonalityPicker
            onSelectionChange={(labels) => {
              setSelectedPersonality((prev) => ({ ...prev, traits: labels }));
              setTraitsSelected(labels.length > 0);
            }}
          />
        </View>
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
          >
            <ChevronLeft size={20} color={Colors.gray[700]} />
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          
          {traitsSelected && (
            <TouchableOpacity
              style={styles.startButton}
              onPress={handleNext}
            >
              <Text style={styles.nextButtonText}>Next</Text>
              <ChevronRight size={20} color={Colors.white} />
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    );
  };

  const renderStep5 = () => (
      <Animated.View 
        entering={FadeInDown.delay(200).springify()} 
        style={{ flex: 1, justifyContent: 'space-between' }}
        >
      <CatchphraseTicEditor
        selectedPersonality={selectedPersonality}
        newPhrase={newPhrase}
        setNewPhrase={setNewPhrase}
        handleAddCatchphrase={handleAddCatchphrase}
        handleRemoveCatchphrase={handleRemoveCatchphrase}
        newTic={newTic}
        setNewTic={setNewTic}
        handleAddTic={handleAddTic}
        handleRemoveTic={handleRemoveTic}
      />
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBack}
        >
          <ChevronLeft size={20} color={Colors.gray[700]} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <ChevronRight size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  const renderStep6 = () => (
    <Animated.View 
      entering={FadeInDown.delay(200).springify()} 
      style={{ flex: 1, justifyContent: 'space-between' }}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.sectionTitle}>推しの好きなものを入力</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
          <TextInput
            style={styles.addItemInput}
            placeholder="好きなものを入力..."
            value={newFavorite}
            onChangeText={setNewFavorite}
          />
          <TouchableOpacity onPress={handleAddFavorite} style={{ marginLeft: 8, padding: 8, backgroundColor: Colors.primary[500], borderRadius: 8 }}>
            <Plus size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {favorites.map((fav, idx) => (
            <View key={idx} style={styles.phraseItem}>
              <Text style={{ flex: 1, fontFamily: 'Inter-Regular', fontSize: 14, color: Colors.gray[800] }}>{fav}</Text>
              <TouchableOpacity onPress={() => handleRemoveFavorite(idx)}>
                <X size={20} color={Colors.gray[600]} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <ChevronLeft size={20} color={Colors.gray[700]} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        {favorites.length > 0 && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              setSelectedPersonality({ ...selectedPersonality, favorites });
              handleNext();
            }}
          >
            <Text style={styles.nextButtonText}>Next</Text>
            <ChevronRight size={20} color={Colors.white} />
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );

const renderStep7 = () => (
  <Animated.View 
    entering={FadeInDown.delay(200).springify()} 
    style={{ flex: 1, justifyContent: 'space-between' }}
  >
    <View style={{ flex: 1 }}>
      <Text style={styles.sectionTitle}>推しの嫌いなものを入力</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
        <TextInput
          style={styles.addItemInput}
          placeholder="嫌いなものを入力..."
          value={newDislike}
          onChangeText={setNewDislike}
        />
        <TouchableOpacity onPress={handleAddDislike} style={{ marginLeft: 8, padding: 8, backgroundColor: Colors.primary[500], borderRadius: 8 }}>
          <Plus size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {dislikes.map((fav, idx) => (
          <View key={idx} style={styles.phraseItem}>
            <Text style={{ flex: 1, fontFamily: 'Inter-Regular', fontSize: 14, color: Colors.gray[800] }}>{fav}</Text>
            <TouchableOpacity onPress={() => handleRemoveDislike(idx)}>
              <X size={20} color={Colors.gray[600]} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
    <View style={styles.navigationButtons}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <ChevronLeft size={20} color={Colors.gray[700]} />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      {dislikes.length > 0 && (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            setSelectedPersonality({ ...selectedPersonality, dislikes });
            handleNext();
          }}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <ChevronRight size={20} color={Colors.white} />
        </TouchableOpacity>
      )}
    </View>
  </Animated.View>
);

const renderStep8 = () => (
  <Animated.View 
    entering={FadeInDown.delay(200).springify()} 
    style={{ flex: 1, justifyContent: 'space-between' }}
  >
    {/* 背景設定フォーム */}
    <ScrollView style={{ flex: 1 }}>
      <Text style={styles.sectionTitle}>推しの背景設定</Text>
      <TextInput
        style={styles.addItemInput}
        placeholder="推しの背景を入力..."
        value={background}
        onChangeText={setBackground}
        multiline
      />

      <Text style={styles.sectionTitle}>細かいプロフィール</Text>
      <TextInput
        style={[styles.addItemInput, { height: 100 }]}
        placeholder="出身地、趣味などを入力..."
        value={profileDetails}
        onChangeText={setProfileDetails}
        multiline
      />
    </ScrollView>
    {/* ナビゲーションボタン */}
    <View style={styles.navigationButtons}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <ChevronLeft size={20} color={Colors.gray[700]} />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      {background.trim() !== '' && profileDetails.trim() !== '' && (
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  </Animated.View>
);


const renderStep9 = () => (
  <Animated.View 
    entering={FadeInDown.delay(200).springify()} 
    style={{ flex: 1, justifyContent: 'space-between' }}
  >
    {/* 画像追加セクション */}
    <View style={{ alignItems: 'center', marginVertical: 16 }}>
      <Button title="推しの画像を選択" onPress={pickImage} />
      {pickedImage && (
        <Image
          source={{ uri: pickedImage }}
          style={{ width: 120, height: 120, borderRadius: 8, marginTop: 12 }}
        />
      )}
    </View>

    <View style={styles.navigationButtons}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <ChevronLeft size={20} color={Colors.gray[700]} />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      {pickedImage && (
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <ChevronRight size={20} color={Colors.white} />
        </TouchableOpacity>
      )}
    </View>
  </Animated.View>
);

const renderSummary = () => (
  <Animated.View entering={FadeInDown.delay(200).springify()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={styles.stepTitle}>推しAI作成中...</Text>
  </Animated.View>
);

  // 追加: レンダリング関数を配列で管理
  const renderSteps = [
    renderStep1,
    renderStep2,
    renderStep3,
    renderStep4,
    renderStep5,
    renderStep6,
    renderStep7,
    renderStep8,
    renderStep9,
    renderSummary,
  ];

  // questionCount またはカスタム入力に合わせて、均等または指定ステップを抽出
  const displayStepIndices =
    customDisplayIndices && customDisplayIndices.length > 0
      ? customDisplayIndices
      : questionCount >= renderSteps.length
      ? renderSteps.map((_, idx) => idx)
      : Array.from({ length: questionCount }, (_, i) =>
          Math.floor((i * (renderSteps.length - 1)) / (questionCount - 1))
        );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <View style={styles.header}>
        <View style={styles.progress}>
          {displayStepIndices.map((_, idx) => {
            const currentDisplayIndex = displayStepIndices.indexOf(step - 1);
            return (
              <View
                key={idx}
                style={[
                  styles.progressStep,
                  idx <= currentDisplayIndex ? styles.activeStep : {}
                ]}
              />  
            );
          })}
        </View>
      </View>
      <View style={styles.content}>
        {displayStepIndices.map((stepIdx) => {
          if (showCharacterPrompt && stepIdx === 0) {
            return null;
          }
          if (step === stepIdx + 1) {
            const element = renderSteps[stepIdx]();
            return React.cloneElement(element, { key: `step-${stepIdx}` });
          }
          return null;
        })}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  traitChip: {
    borderWidth: 1,
    borderColor: Colors.gray[300],
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
  },
  traitChipSelected: {
    backgroundColor: Colors.primary[100],
    borderColor: Colors.primary[500],
  },
  traitChipText: {
    fontSize: 14,
    color: Colors.gray[700],
  },
  traitChipTextSelected: {
    color: Colors.primary[500],
  },
  container: {
    flex: 1,
    backgroundColor: '#EBF3FF',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#EBF3FF',
  },
  progress: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  AIbutton: {
    marginBottom: 50,
  },
  ImageBox: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressStep: {
    flex: 1,
    height: 4,
    backgroundColor: Colors.gray[200],
    borderRadius: 2,
    marginHorizontal: 2,
  },
  activeStep: {
    backgroundColor: Colors.primary[500],
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#EBF3FF',
  },
  stepTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: Colors.gray[900],
  },

  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 20,
  },
  closeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    top: 40,
    backgroundColor: Colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: Colors.primary[500],
    borderRadius: 12,
    shadowColor: Colors.primary[500],
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
    alignSelf: 'flex-end',
  },
  nextButton1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40,
  },
  nextButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.white,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: Colors.gray[200],
  },
  backButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.gray[700],
  },

  sliderLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[800],
    marginBottom: 8,
  },
  sliderTrack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: Colors.gray[800],
    marginTop: 24,
    marginBottom: 4,
  },
  phraseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.gray[100],
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  addItemInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.gray[300],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginRight: 8,
  },
  modeDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: Colors.primary[500],
    borderRadius: 12,
    shadowColor: Colors.primary[500],
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  similarityTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 200,
    marginBottom: 60,
    textAlign: 'center',
    color: Colors.gray[800],
  },
  similarityOptions: {
    flexDirection: 'column',
    marginBottom: 8,
    flex: 0.3,
  },
  similarityButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: Colors.gray[300],
    borderRadius: 8,
    marginVertical: 4,
    alignItems: 'center',
  },

  similarityText: {
    fontSize: 15,
    textAlign: 'center',
    color: Colors.gray[500],
  },
  skipOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
});
