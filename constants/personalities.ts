import { Personality } from '@/types';

export const defaultPersonalities: Personality[] = [
  {
    id: 'default-id', // Add a default id value
    nickname: '',
    traits: [],
    favorites: [
      'カフェ巡り',
      '猫',
      'ミステリー小説'
    ],
    dislikes: [
      '渋滞',
      '嘘をつくこと',
      '激辛'
    ],
    catchphrases: [
      'まさにその通り！',
      '目からウロコの質問ですね！',
      'これは深い…',

    ],
    verbalTics: [
      'なんといいますか…',
      '信じられないかもしれませんが、',
      'ここだけの話、'
    ],
    age: 0, // Add a default age value
    background: '', // Add a default background value
    profileDetails: '', // Add a default profileDetails value
  },
];