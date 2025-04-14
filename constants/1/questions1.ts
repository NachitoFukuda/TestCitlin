// 問題１つ分の質問データの型定義
export interface Question {
  id: number;
  question: string;
}

// １セットの問題（パッセージと５つの質問）を表す型定義
export interface ProblemSet {
  theme: string;
  passage: string;
  questions: Question[];
}

// セット１：At the Park
const atThePark: ProblemSet = {
  theme: "",
  passage:
    "",
  questions: [
    {
      id: 1,
      question: "Should governments limit the use of social media to protect public safety?"
    },
    {
      id: 2,
      question: "Is it better to live in a big city or a small town?"
    },
    {
      id: 3,
      question: "Does technology make people’s lives easier or more complicated?"
    },
    {
      id: 4,
      question: "Should schools focus more on creativity rather than memorization?"
    },

  ],
};

// セット２：Eating Healthy
const eatingHealthy: ProblemSet = {
  theme: "Eating Healthy",
  passage:
    "Eating healthy is important. Many people choose to eat fruits, vegetables, and whole grains. They avoid junk food to maintain a good diet.",
  questions: [
    {
      id: 1,
      question: "Please look at the passage. What do people choose to eat for a healthy diet?"
    },
    {
      id: 2,
      question: "Please look at the picture. Where are the fruits kept?"
    },
    {
      id: 3,
      question: "Please look at the woman. What is she going to do?"
    },
    {
      id: 4,
      question: "What kind of meals do you like to eat?"
    },
    {
      id: 5,
      question: "Do you like cooking at home?"
    },
  ],
};

// セット３：Using Technology at School
const usingTechnology: ProblemSet = {
  theme: "Using Technology at School",
  passage:
    "Many schools now use technology in the classroom. Computers and tablets help students learn more interactively. Students often use the internet for research.",
  questions: [
    {
      id: 1,
      question: "Please look at the passage. How do schools use technology?"
    },
    {
      id: 2,
      question: "Please look at the picture. Where is the teacher showing the computer?"
    },
    {
      id: 3,
      question: "Please look at the student. What is he going to do?"
    },
    {
      id: 4,
      question: "What kind of technology do you like to use at school?"
    },
    {
      id: 5,
      question: "Do you think technology improves learning?"
    },
  ],
};

// すべての問題セットをまとめた配列
export const problemSets: ProblemSet[] = [
  atThePark,
  eatingHealthy,
  usingTechnology,
];

// ランダムに１つの問題セットを返す関数
export function getRandomProblemSet(): ProblemSet {
  const randomIndex = Math.floor(Math.random() * problemSets.length);
  return problemSets[randomIndex];
}

// 例として、セット１（At the Park）のデータを個別にエクスポートする場合
export const sampleQuestions = atThePark.questions;
export const passageText = atThePark.passage;
