// hooks/useSessionStorage.ts
import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChatSession } from '@/types';

const storage = {
  getItem: async (key: string): Promise<string | null> => {
    return await AsyncStorage.getItem(key);
  },
  setItem: async (key: string, value: string): Promise<void> => {
    await AsyncStorage.setItem(key, value);
  },
  removeItem: async (key: string): Promise<void> => {
    await AsyncStorage.removeItem(key);
  }
};

const SESSIONS_KEY = 'ai_english_chat_sessions';
const SESSION_ID_KEY = 'ai_english_chat_session_ids';

export function useSessionStorage() {
  const getSessions = useCallback(async (): Promise<ChatSession[]> => {
    const sessionsJson = await storage.getItem(SESSIONS_KEY);
    return sessionsJson ? JSON.parse(sessionsJson) : [];
  }, []);

  const getSession = useCallback(async (id: string): Promise<ChatSession | null> => {
    const sessions = await getSessions();
    const session = sessions.find((s) => s.id === id);
    return session || null;
  }, []);

  const createSession = useCallback(async (session: ChatSession): Promise<string> => {
    const sessions = await getSessions();
    const newSession = { ...session, id: `${Date.now()}` }; // Example ID generation
    sessions.push(newSession);
    await storage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
    return newSession.id; // Return the new session ID
  }, []);

  const updateSession = useCallback(async (id: string, updates: Partial<ChatSession>): Promise<void> => {
    // ...（元の実装をそのまま）
  }, []);

  const deleteSession = useCallback(async (id: string): Promise<void> => {
    // ...（元の実装をそのまま）
  }, []);

  const clearAllSessions = useCallback(async (): Promise<void> => {
    // ...（元の実装をそのまま）
  }, []);

  return {
    getSessions,
    getSession,
    createSession,
    updateSession,
    deleteSession,
    clearAllSessions
  };
}