import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { X, Plus } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { Personality } from '@/types';

interface Props {
  selectedPersonality: Personality;
  newPhrase: string;
  setNewPhrase: (text: string) => void;
  handleAddCatchphrase: () => void;
  handleRemoveCatchphrase: (index: number) => void;
  newTic: string;
  setNewTic: (text: string) => void;
  handleAddTic: () => void;
  handleRemoveTic: (index: number) => void;
}

const CatchphraseTicEditor: React.FC<Props> = ({
  selectedPersonality,
  newTic,
  setNewTic,
  handleAddTic,
  handleRemoveTic,
}) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    style={{ marginTop: 16, flex: 1 }}
  >
    {/* 口癖 */}

    <Text style={styles.sectionTitle}>推しの口癖　語尾を追加</Text>
    <View style={styles.phrasesContainer}>
      {selectedPersonality.verbalTics.map((tic, idx) => (
        <View key={idx} style={styles.phraseItem}>
          <Text style={styles.phraseText}>{tic}</Text>
          <TouchableOpacity onPress={() => handleRemoveTic(idx)}>
            <X size={16} color={Colors.gray[600]} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
    <View style={styles.addItemContainer}>
      <TextInput
        style={styles.addItemInput}
        placeholder="口癖を追加。。。"
        value={newTic}
        onChangeText={setNewTic}
        returnKeyType="done"
        onSubmitEditing={handleAddTic}
      />
      <TouchableOpacity style={styles.addItemButton} onPress={handleAddTic}>
        <Plus size={20} color={Colors.white} />
      </TouchableOpacity>
    </View>

    <View style={{ height: 50 }} />
  </ScrollView>
);

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: Colors.gray[800],
    marginTop: 24,
    marginBottom: 4,
  },
  sectionDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    marginBottom: 12,
  },
  phrasesContainer: {
    marginBottom: 8,
  },
  phraseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray[100],
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  phraseText: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[800],
  },
  addItemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
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
  addItemButton: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: Colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    padding: 4,
  },
});

export default CatchphraseTicEditor;