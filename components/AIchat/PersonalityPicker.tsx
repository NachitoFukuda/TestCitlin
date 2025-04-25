import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type PersonalityPickerProps = {
  onSelectionChange?: (labels: string[]) => void;
};

type Personality = {
  id: string;
  label: string;
};

// 初期の性格リスト
const initialPersonalities: Personality[] = [
  { id: 'friendly',  label: 'フレンドリー' },
  { id: 'serious',   label: '真面目' },
  { id: 'funny',     label: 'おもしろい' },
  { id: 'shy',       label: 'シャイ' },
  { id: 'energetic', label: 'エネルギッシュ' },
  { id: 'optimistic',   label: '楽観的' },
  { id: 'pessimistic',  label: '悲観的' },
  { id: 'calm',         label: '落ち着き' },
  { id: 'assertive',    label: '自己主張的' },
  { id: 'creative',     label: '創造的' },
];

// 各性格に関連する性格マップ
const relatedMap: Record<string, Personality[]> = {
  friendly:  [{ id: 'cheerful',  label: '陽気' },    { id: 'helpful', label: '協力的' }],
  serious:   [{ id: 'reliable',  label: '信頼できる' },{ id: 'focused', label: '集中力が高い' }],
  funny:     [{ id: 'witty',     label: 'ウィットに富む' },{ id: 'playful', label: '遊び心がある' }],
  shy:       [{ id: 'quiet',     label: '落ち着いている' },{ id: 'thoughtful', label: '思慮深い' }],
  energetic: [{ id: 'active',    label: '行動的' },      { id: 'enthusiastic', label: '熱心' }],
  optimistic: [{ id: 'hopeful',      label: '希望に満ちた' },{ id: 'cheerful',     label: '陽気' }],
  pessimistic: [{ id: 'cautious',     label: '慎重な' },{ id: 'realistic',    label: '現実主義的' }],
  calm: [{ id: 'peaceful',     label: '平穏な' },{ id: 'collected',    label: '冷静な' }],
  assertive: [{ id: 'confident',    label: '自信に満ちた' },{ id: 'decisive',     label: '決断力がある' }],
  creative: [{ id: 'imaginative',  label: '想像力豊かな' },{ id: 'innovative',   label: '革新的な' }],
};

const PersonalityPicker: React.FC<PersonalityPickerProps> = ({ onSelectionChange }) => {
  const [available, setAvailable] = useState<Personality[]>(initialPersonalities);
  const [selected,  setSelected]  = useState<Personality[]>([]);

  useEffect(() => {
    onSelectionChange?.(selected.map(p => p.label));
  }, [selected]);

  const handlePress = (p: Personality) => {
    // 既に選択済みなら何もしない
    if (selected.find(s => s.id === p.id)) return;

    // 選択リストに追加
    setSelected(prev => [...prev, p]);

    // 関連性格を取得してavailableに追加（重複除外）
    const related = relatedMap[p.id] || [];
    setAvailable(prev => [
      ...prev,
      ...related.filter(r =>
        !prev.find(a => a.id === r.id) &&
        !selected.find(s => s.id === r.id)
      )
    ]);
  };

  const handleRemove = (p: Personality) => {
    setSelected(prev => prev.filter(s => s.id !== p.id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>選択済みの性格</Text>
      <View style={styles.selectedContainer}>
        {selected.map(p => (
          <TouchableOpacity key={p.id} onPress={() => handleRemove(p)}>
            <View style={styles.selectedChip}>
              <Text style={styles.selectedText}>
                {p.label} ✕
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.heading}>性格を選んでください</Text>
      <View style={styles.optionsContainer}>
        {available.map(p => (
          <TouchableOpacity
            key={p.id}
            style={styles.optionChip}
            onPress={() => handlePress(p)}
          >
            <Text style={styles.optionText}>{p.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
  },
  selectedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: 40,
  },
  selectedChip: {
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    margin: 4,
  },
  selectedText: {
    fontSize: 14,
    color: '#333',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 8,
  },
  optionChip: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 14,
    color: '#000',
  },
});

export default PersonalityPicker;