import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref as dbRef, set as dbSet } from 'firebase/database';
type ChatRole = 'system' | 'user' | 'assistant';
interface ChatMessage { role: ChatRole; content: string; }
import { getApp, getApps, initializeApp } from 'firebase/app';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
// --- Minimal key resolver (safe; does not log key) ---

function getOpenAIKey(): string | undefined {
  const OPENAI_API_KEY: string | undefined =
    EXTRA.OPENAI_API_KEY ??
    (typeof process !== 'undefined' ? (process as any).env?.OPENAI_API_KEY : undefined);
  return typeof OPENAI_API_KEY === 'string' && OPENAI_API_KEY.trim()
    ? OPENAI_API_KEY.trim()
    : undefined;
}
const EXTRA = (Constants?.expoConfig?.extra ?? {}) as Record<string, any>;

const ELT_POLICY_PROMPT = `Role: Friendly Japanese tutor teaching English.
Scope: English learning only (ELT). Refuse unrelated topics and redirect to English practice.

Teaching policy:
- Always reply in exactly 3 sections, in this order:
  • ポイント: briefly explain the learner’s mistake(s) or improvement points (in Japanese if needed).
  • 訂正: give the corrected English sentence (minimal fix).
  • 次の質問: ask a new follow-up question in English to keep the conversation going.
- Keep responses short and clear.
- Use Japanese only for short explanations of grammar/vocabulary.
- If no mistake, still write “Points: ✅ Good!” then continue with Correction (repeat learner’s sentence) and Next.
- Always encourage retry if the learner struggled.

Tone:
- Friendly, supportive, concise.`;
// Robust Firebase app init: get existing or initialize from config
let app;
try {
  if (getApps().length) {
    app = getApp();
  } else {
    // Prefer expo config extra, fallback to local firebaseConfig module
    let cfg: any = EXTRA?.firebaseConfig;
    if (!cfg) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const localCfg = require('../../firebaseConfig');
        cfg = localCfg?.default ?? localCfg?.firebaseConfig ?? localCfg;
      } catch {}
    }
    if (!cfg) {
      console.warn('[AIChat] firebaseConfig not found in extra or local file.');
      throw new Error('Missing firebaseConfig');
    }
    app = initializeApp(cfg);
  }
} catch (e) {
  console.error('[AIChat] Firebase init failed:', e);
  throw e;
}

const auth = getAuth(app);
const rdb = getDatabase(app);

// --- Minimal API caller using Responses API ---
async function callAI(
  miniMessages: ChatMessage[],
  maxTokens = 512,
  instructions?: string
): Promise<string | null> {
  const OPENAI_API_KEY = getOpenAIKey();
  if (!OPENAI_API_KEY) {
    Alert.alert('APIキー未設定', 'app.config.js の extra または .env に設定してください');
    return null;
  }

  // Build role-aware input for Responses API
  const turns = miniMessages.filter(m => m.role !== 'system').slice(-8);

  // Build simple string-content messages for the Responses API
  const inputParts: any[] = [];
  for (const t of turns) {
  inputParts.push({ role: t.role, content: t.content });
  }
  const sysFromHistory = miniMessages.find(m => m.role === 'system')?.content?.trim();

  const topLevelInstructions = (instructions && instructions.trim()) || sysFromHistory || '';

  const payload = {
    model: 'gpt-5-mini',
    input: inputParts,
    instructions: topLevelInstructions,
    max_output_tokens: maxTokens,
    reasoning: { effort: 'low' } 
  } as const;

  let res: Response;
  try {
    res = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${OPENAI_API_KEY}` },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('[AIChat][callAI] fetch failed:', err);
    Alert.alert('AIエラー', 'ネットワークに接続できませんでした。');
    return null;
  }

  if (!res.ok) {
    const body = await res.text();
    console.warn('[AIChat][callAI] non-ok', res.status, body);
    Alert.alert('AIエラー', `status: ${res.status}`);
    return null;
  }

  let data: any;
  try {
    data = await res.json();
  } catch (e) {
    console.error('[AIChat][callAI] json parse error:', e);
    return null;
  }
try {
  console.warn('[AIChat][callAI] preview:', JSON.stringify(data, null, 2).slice(0, 1500));
} catch {}


const tryExtract = (d: any): string | null => {
  const topLevelInstructions = (instructions && instructions.trim()) || sysFromHistory || '';
  console.log('[AIChat][callAI] using instructions:', topLevelInstructions);
  const candidates: string[] = [];
  // content item からテキスト候補をできるだけ吸い上げる
  const pullFromContent = (ci: any): string[] => {
    const out: string[] = [];
    if (!ci) return out;

    // 素の文字列
    if (typeof ci === 'string') { out.push(ci); return out; }

    // OpenAI Responses: 出力ユニット
    // 1) type: 'output_text' → text が本文
    if (ci?.type === 'output_text' && typeof ci?.text === 'string') out.push(ci.text);

    // 2) よくある形
    if (typeof ci?.text === 'string') out.push(ci.text);
    if (ci?.text && typeof ci.text.value === 'string') out.push(ci.text.value);
    if (typeof ci?.output_text === 'string') out.push(ci.output_text);

    // 3) text が配列の形 [{text:'...'}]
    if (Array.isArray(ci?.text)) {
      const s = ci.text.map((t: any) => (typeof t?.text === 'string' ? t.text : (typeof t === 'string' ? t : ''))).join('');
      if (s.trim()) out.push(s);
    }

    // 4) content が string / array
    if (typeof ci?.content === 'string') out.push(ci.content);
    if (Array.isArray(ci?.content)) {
      // 一段目
      const s1 = ci.content
        .map((c2: any) => {
          if (typeof c2 === 'string') return c2;
          if (typeof c2?.text === 'string') return c2.text;
          if (c2?.text && typeof c2.text.value === 'string') return c2.text.value;
          if (typeof c2?.output_text === 'string') return c2.output_text;
          if (Array.isArray(c2?.text)) return c2.text.map((t: any) => (t?.text ?? t ?? '')).join('');
          return '';
        })
        .join('');
      if (s1.trim()) out.push(s1);

      // 二段目の深いネスト（content[*].content[*].text など）
      const s2 = ci.content
        .map((c2: any) => {
          if (!Array.isArray(c2?.content)) return '';
          return c2.content
            .map((c3: any) => {
              if (typeof c3 === 'string') return c3;
              if (typeof c3?.text === 'string') return c3.text;
              if (c3?.text && typeof c3.text.value === 'string') return c3.text.value;
              if (typeof c3?.output_text === 'string') return c3.output_text;
              if (Array.isArray(c3?.text)) return c3.text.map((t: any) => (t?.text ?? t ?? '')).join('');
              return '';
            })
            .join('');
        })
        .join('');
      if (s2.trim()) out.push(s2);
    }

    // 5) message ラッパー（message → content[*] → output_text など）
    if (ci?.type === 'message' && Array.isArray(ci?.content)) {
      const s = ci.content.map((p: any) => pullFromContent(p).join('')).join('');
      if (s.trim()) out.push(s);
    }

    // 6) annotations に本文が入るケース
    if (Array.isArray(ci?.annotations)) {
      const s = ci.annotations
        .map((a: any) =>
          typeof a?.text === 'string'
            ? a.text
            : (Array.isArray(a?.text) ? a.text.map((t: any) => (t?.text ?? t ?? '')).join('') : '')
        )
        .join('');
      if (s.trim()) out.push(s);
    }

    return out;
  };

  // 直接系
  if (typeof d?.output_text === 'string') candidates.push(d.output_text);
  if (typeof d?.text === 'string') candidates.push(d.text);
  if (Array.isArray(d?.text)) {
    const joined = d.text
      .map((x: any) => (typeof x === 'string' ? x : (x?.text ?? x?.output_text ?? x?.value ?? '')))
      .join('')
      .trim();
    if (joined) candidates.push(joined);
  }
  if (typeof d?.output === 'string') candidates.push(d.output);

  // Responses: response.output[*].content[*]
  const respOut = d?.response?.output;
  if (Array.isArray(respOut)) {
    for (const o of respOut) {
      if (Array.isArray(o?.content)) {
        for (const ci of o.content) candidates.push(...pullFromContent(ci));
      }
    }
  }

  // top-level output[*].content[*]
  const topOut = d?.output;
  if (Array.isArray(topOut)) {
    for (const o of topOut) {
      if (Array.isArray(o?.content)) {
        for (const ci of o.content) candidates.push(...pullFromContent(ci));
      }
    }
  }

  // response.content[*]
  const contentFromResponse = d?.response?.content;
  if (Array.isArray(contentFromResponse)) {
    for (const ci of contentFromResponse) candidates.push(...pullFromContent(ci));
  }

  // choices 互換
  if (Array.isArray(d?.choices) && d.choices[0]) {
    const c = d.choices[0].message?.content;
    if (typeof c === 'string') candidates.push(c);
    if (Array.isArray(c)) for (const ci of c) candidates.push(...pullFromContent(ci));
    if (typeof d.choices[0].text === 'string') candidates.push(d.choices[0].text);
  }

  // message.content
  const m = d?.message?.content;
  if (typeof m === 'string') candidates.push(m);
  if (Array.isArray(m)) for (const ci of m) candidates.push(...pullFromContent(ci));

  // 正規化 & フィルタ & 最長採用（ダミー語は除外）
  const clean = (s: string) => s.replace(/\s+/g, ' ').trim();
  const BAD = new Set(['response','assistant_response','message','assistant','ok','success']);
  const uniq = Array.from(new Set(candidates.map(clean))).filter(Boolean);
  let best = uniq.filter(s => !BAD.has(s.toLowerCase())).sort((a, b) => b.length - a.length)[0];
  if (!best) best = uniq.sort((a, b) => b.length - a.length)[0];

  return best || null;
};


  const text = tryExtract(data);
  if (!text) {
  try {
    const previewAny = JSON.stringify(data, null, 2).slice(0, 1500);
    console.warn('[AIChat][callAI] NO TEXT EXTRACTED. Raw preview:', previewAny);
  } catch {}
}
  return text ?? null;
}


export default function AIChat() {
  const params = useLocalSearchParams<{ chatId?: string }>();
  const chatId = typeof params.chatId === 'string' ? params.chatId : undefined;

const [sysPrompt, setSysPrompt] = useState('短く、親切に回答してください。');
const [chatName, setChatName] = useState<string | undefined>(undefined);
const [hidePlus, setHidePlus] = useState(false);
const [messages, setMessages] = useState<ChatMessage[]>([
  { role: 'system' as ChatRole, content: '短く、親切に回答してください。' },
]);
async function savePromptForUser(userId: string, chatName: string, prompt: string, chatId?: string) {
  const id = chatId ?? String(Date.now());
  const path = `prompto/${id}`;
  console.log('[AIChat][savePromptForUser] saving to', path, { userId, chatName, promptLen: (prompt ?? '').length });
  await dbSet(dbRef(rdb, path), {
    prompt,
    chatName,
    userId,
    savedAt: Date.now(),
  });
  return { path, id } as const;
}

 const onPressPlus = async () => {
   try {
     const user = auth.currentUser;
     if (!user) {
       Alert.alert('ログインが必要です', '保存するにはログインしてください。');
       return;
     }
      const usedPrompt = (sysPrompt && sysPrompt.trim()) ? sysPrompt.trim() : '短く、親切に回答してください。';
      const usedName = (chatName && chatName.trim()) ? chatName.trim() : (chatId ? `Chat ${chatId}` : 'AI Chat');
      const { path } = await savePromptForUser(user.uid, usedName, usedPrompt, chatId);
      Alert.alert('保存しました', `RTDB: ${path}`);
   } catch (e) {
     console.error('[AIChat][onPressPlus] save failed', e);
     Alert.alert('保存エラー', 'プロンプトの保存に失敗しました。');
   }
 };

useEffect(() => {
  (async () => {
    try {
        if (!chatId) {
          setHidePlus(false);
          return;
        }
        try {
          const [markTemplate] = await Promise.all([
            AsyncStorage.getItem(`@chat_template:${chatId}`),
            
          ]);
          const exists = markTemplate !== null;
          if (exists) {
            setHidePlus(true);
          } else {
            setHidePlus(false);
          }
          console.log('[AIChat] template mark check', chatId, {
            template: markTemplate !== null,
            hidePlus: exists,
          });
        } catch (err) {
          console.warn('[AIChat] template mark check failed', err);
          setHidePlus(false);
        }
     // プロンプトと名前の読み込み
      const prompt = await AsyncStorage.getItem(`@chat_prompt:${chatId}`);
      if (prompt && prompt.trim()) {
        console.log('[AIChat] 現在のプロンプトあs:', prompt);
        setSysPrompt(prompt);
      }
      const savedName = await AsyncStorage.getItem(`@chat_name:${chatId}`);
      if (savedName && savedName.trim()) {
        setChatName(savedName);
      }
      // チャット履歴の読み込み
      const savedMessages = await AsyncStorage.getItem(`@chat_messages:${chatId}`);
      if (savedMessages) {
        try {
          const parsed = JSON.parse(savedMessages);
          if (Array.isArray(parsed)) {
            setMessages(parsed);
            return; // 読み込み成功したので早期 return
          }
        } catch {
          // JSON パース失敗時は無視して続行
        }
      }
// 保存済み履歴がない場合は ELT 方針を付与したシステムメッセージで初期化
          const combinedInit = (sysPrompt && sysPrompt.trim())
            ? `${sysPrompt.trim()}\n\n${ELT_POLICY_PROMPT}`
            : ELT_POLICY_PROMPT;
          setMessages([{ role: 'system' as ChatRole, content: combinedInit }]);
        } catch {
      // エラー処理は適宜
    }
  })();
}, [chatId, sysPrompt]);

// state を ChatMessage[] に

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

function normalizeTutorReply(raw: string): string {
  const text = (raw ?? '').toString().trim();
  if (!text) return '';

  // 1) Pre-normalize: force breaks before labels (English or Japanese)
  let norm = text
    .replace(/\r/g, '')
    .replace(/\s*(Points|Correction|Next|ポイント|訂正|次の質問)\s*[:：]\s*/gi, (_m, p1) => `\n\n${p1}:\n`)
    .trim();

  // 2) Extract helper: try English and Japanese label variants
  const grab = (en: string, ja: string) => {
    const re = new RegExp(`(?:^|\n)\s*(?:${en}|${ja})[:：]\\n([\\s\\S]*?)(?=\\n\s*(Points|Correction|Next|ポイント|訂正|次の質問)[:：]\\n|$)`, 'i');
    const m = norm.match(re);
    return (m && m[1] ? m[1].trim() : '');
  };

  const points = grab('Points', 'ポイント');
  const correction = grab('Correction', '訂正');
  const next = grab('Next', '次の質問');

  // 3) Rebuild in strict order **with Japanese labels**
  const rebuilt = [
    `ポイント:${points || '✅ Good!'}`,
    `\n訂正:\n${correction || ''}`,
    `\n次の質問:\n${next || '次は何を練習したい？'}`,
  ].join('');

  return rebuilt.trim();
}



const onSend = async () => {
  const trimmed = input.trim();
  if (!trimmed || loading) return;
  setInput('');

  // ユーザーのメッセージを追加し、即時保存
  const next: ChatMessage[] = [...messages, { role: 'user' as ChatRole, content: trimmed }];
  setMessages(next);
  if (chatId) {
    await AsyncStorage.setItem(`@chat_messages:${chatId}`, JSON.stringify(next));
  }

  setLoading(true);
  try {
    const combinedInstructions = (sysPrompt && sysPrompt.trim())
      ? `${sysPrompt.trim()}\n\n${ELT_POLICY_PROMPT}`
      : ELT_POLICY_PROMPT;
    const reply = await callAI(next, 512, combinedInstructions);
    if (reply) {
      const formatted = normalizeTutorReply(reply);
      const updated: ChatMessage[] = [...next, { role: 'assistant' as ChatRole, content: formatted }];
      setMessages(updated);
      if (chatId) {
        await AsyncStorage.setItem(`@chat_messages:${chatId}`, JSON.stringify(updated));
      }
    }
  } catch (e) {
    console.error('[AIChat][onSend] send error', e);
    Alert.alert('送信エラー', 'AIとの通信に失敗しました。');
  } finally {
    setLoading(false);
  }
};

function formatSections(raw: string): string {
  const s = (raw ?? '').toString();
  return s
    .replace(/\r/g, '')
    // Force line breaks before labels anywhere in the text
    .replace(/\s*(ポイント|Points)\s*[:：]\s*/gi, 'ポイント\n')
    .replace(/\s*(訂正|Correction)\s*[:：]\s*/gi, '\n\n訂正\n')
    .replace(/\s*(次の質問|Next)\s*[:：]\s*/gi, '次の質問\n');
}
const headerName = chatName
  ? chatName                                // 保存されている名前を優先
  : chatId
    ? `Chat ${chatId}`                      // chatId があればそれをタイトルに使う
    : 'AI Chat';     
                           // どちらもない場合のデフォルト
  function splitTutorMessage(raw: string): { main: string; nextPart: string | null } {
  const text = (raw ?? '').toString();
  const norm = text
    .replace(/\r/g, '')
    .replace(/\s*(ポイント|Points)\s*[:：]\s*/gi, 'ポイント:\n')
    .replace(/\s*(訂正|Correction)\s*[:：]\s*/gi, '\n訂正:\n')
    .replace(/\s*(次の質問|Next)\s*[:：]\s*/gi, '\n次の質問:\n');

  const re = /(\n|^)\s*次の質問:\n([\s\S]*)$/i;
  const m = norm.match(re);
  if (!m) return { main: norm, nextPart: null };

  const idx = m.index ?? -1;
  const main = norm.slice(0, idx).trim();
  const nextPart = `次の質問:\n${(m[2] || '').trim()}`;
  return { main, nextPart };
}
function renderMessageContent(raw: string) {
  const formatted = formatSections(raw);
  const lines = formatted.split('\n');
  return (
    <>
      {lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {/* 「訂正」の前に線を挿入 */}
          {line === '訂正' && <View style={styles.separator} />}

          <Text
            style={
              line === '訂正'
                ? styles.correctionLabel                 // 「訂正」は緑色
                : (line === 'ポイント' || line === '次の質問')
                  ? styles.label                       // 他のラベルは既定の色
                  : styles.text                        // 通常テキスト
            }
          >
            {line}
          </Text>
        </React.Fragment>
      ))}
    </>
  );
}

  return (
    <>
        <LinearGradient
      colors={["#E3E5F2","#E3E5F2", "#6ed6e0ff", "#ffa0ecff"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
    <View style={styles.header}>
      <Text style={styles.headerText}>{headerName}</Text>
      {!hidePlus && (
        <TouchableOpacity
          onPress={onPressPlus}
          style={styles.headerPlusButton}
          accessibilityLabel="新規作成"
          accessibilityRole="button"
        >
          <Text style={styles.headerPlusText}>＋</Text>
        </TouchableOpacity>
      )}
    </View>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0} // 必要なら調整してください
    >
     <ScrollView style={styles.list} contentContainerStyle={styles.listInner}>
        {messages
          .filter(m => m.role !== 'system')
          .map((m, i) =>
            m.role === 'assistant' ? (
              // フラグメントに key を付ける
              <React.Fragment key={i}>
                <View key={`${i}-main`} style={[styles.bubble, styles.assistant]}>
                  {renderMessageContent(splitTutorMessage(m.content).main)}
                </View>
                {(() => {
                  const { nextPart } = splitTutorMessage(m.content);
                  return nextPart ? (
                    <View key={`${i}-next`} style={[styles.bubble, styles.assistant]}>
                      {renderMessageContent(nextPart)}
                    </View>
                  ) : null;
                })()}
              </React.Fragment>
            ) : (
              <View key={i} style={[styles.bubble, styles.user]}>
                {renderMessageContent(m.content)}
              </View>
            )
          )
        }
        {loading && (
          <View style={[styles.bubble, styles.assistant]}>
            <ActivityIndicator />
          </View>
        )}
      </ScrollView>

      <View style={styles.inputRow}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="メッセージを入力"
          placeholderTextColor="#999"
          style={styles.input}
          multiline
        />
        <TouchableOpacity onPress={onSend} style={styles.sendBtn} disabled={loading}>
          <Text style={styles.sendText}>{loading ? '…' : '送信'}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
        </LinearGradient>
    </>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E3E5F2' },
  list: { flex: 1 },
  listInner: { 
    padding: 12,       // 他方向のパディング
  },
  bubble: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    maxWidth: '90%',
  },
  user: {
    alignSelf: 'flex-end',
    backgroundColor: '#1100ffa6',
  },
  assistant: {
    alignSelf: 'flex-start',
    backgroundColor: '#22262ed0',
  },
  text: { color: '#ffffffff', fontSize: 16, lineHeight: 22 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#2a2f3a',
    backgroundColor: '#0c0f14',
    gap: 8,
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    padding: 10,
    backgroundColor: '#161a22',
    color: '#fff',
    borderRadius: 10,
  },
  sendBtn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#1f6feb',
    borderRadius: 10,
  },
  sendText: { color: '#fff', fontWeight: '600' },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ffffffff', // ラインの色をお好みで調整
    marginVertical: 4,
    alignSelf: 'stretch',
  },
  label: {
    color: '#73ffffff',   // 「ポイント」「次の質問」など他ラベル用の色
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
  },
  correctionLabel: {
    color: '#48e348ff',   // 「訂正」のラベル用の緑色
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
  },
  header: {
    height: 120,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#666', // 適宜調整
    marginBottom: 4,
  },
  headerText: {
    fontSize: 20,
    marginTop: 70,
    fontWeight: '700',
    color: '#000000ff', // 背景に合わせて白などに
  },
    headerPlusButton: {
      position: 'absolute',
      right: 12,
      top: 70,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#0066ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerPlusText: {
      color: '#cacacaff',
      fontSize: 22,
      fontWeight: '800',
      lineHeight: 22,
      paddingTop: 2,
    },
});