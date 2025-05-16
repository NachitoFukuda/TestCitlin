export type QuestionData = {
    questions1: any[];
    questions2: any[];
    questions3: any[];
  };

  export interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: number;
  }
  
// ── src/types.ts （もしくは /app/types.ts）
// types.ts

export interface Personality {
  id: string;
  nickname: string;
  age?: number;
  gender?: string;
  traits: string[];
  catchphrases: string[];
  verbalTics: string[];
  favorites?: string[];
  dislikes?: string[];
  background?: string;
  profileDetails?: string;
}
  
  
export interface ChatSession {
  id: string;
  personality: Personality;
  prompt: string;                  // プロンプトは必須
  nickname?: string;               // ニックネームは任意
  imageUri?: string | null;        // 画像URIは任意
  messages: Message[];             // メッセージの配列
  createdAt: number;               // 作成日時（ミリ秒）
  lastModified: number;            // 最終更新日時（ミリ秒）
}
  
  export interface ApiChatResponse {
    message: string;
    error?: string;
  }