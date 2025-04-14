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
  theme: "Passage",
  passage:
    "Nowadays, gardening is becoming increasingly popular in people's daily lives. In many towns and cities, residents cultivate small gardens on balconies and rooftops. Many families grow fresh vegetables and colorful flowers to enjoy natural produce and beauty. This trend not only beautifies urban areas but also promotes a healthy lifestyle.",
  questions: [
    {
      id: 1,
      question: "According to the passage, how do many families enjoy natural produce and beauty?"
    },
    {
      id: 2,
      question: "Now, please look at Picture A. People are engaged in various gardening activities. Tell me as much as you can about what they are doing."
    },
    {
      id: 3,
      question: "Now, look at Picture B. Please describe the situation in detail."
    },
    {
      id: 4,
      question: "Do you think urban gardening will become more popular in the future? Please explain your opinion."
    },
    {
      id: 5,
      question: "There are many types of urban gardening activities available today. Do you participate in any gardening activities? Please tell me more"
    },
  ],
};


// 例として、セット１（At the Park）のデータを個別にエクスポートする場合
export const sampleQuestions = atThePark.questions;
export const passageText = atThePark.passage;
