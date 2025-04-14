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
    "One day, Mr. Yamada discovered a new relaxation lounge at the central station. The station now offers a quiet space where busy commuters can unwind while waiting for their trains. The lounge features comfortable seating, free Wi-Fi, and a variety of refreshments. Many travelers appreciate this service as it makes their long waits more pleasant and productive. In addition, similar services are being introduced in airports and bus terminals to provide a stress-free experience.",
  questions: [
    {
      id: 1,
      question: "According to the passage, how does the new relaxation lounge benefit busy commuters?"
    },
    {
      id: 2,
      question: " Look at the picture and describe it. You have 20 seconds to prepare. Start with the sentence on the card."
    },
    {
      id: 3,
      question: " Do you think relaxation lounges at stations are necessary for commuters? Why or why not?"
    },
    {
      id: 4,
      question: " How can relaxation lounges improve the travel experience for busy people?"
    },

  ],
};


// 例として、セット１（At the Park）のデータを個別にエクスポートする場合
export const sampleQuestions = atThePark.questions;
export const passageText = atThePark.passage;
