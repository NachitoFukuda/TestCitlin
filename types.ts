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
    messages: Message[];
    createdAt: number;
    lastModified: number;
    imageUri?: string | null;  // ここを追加
    prompt?: string; // Added the optional 'prompt' property
  }
  
  export interface ApiChatResponse {
    message: string;
    error?: string;
  }