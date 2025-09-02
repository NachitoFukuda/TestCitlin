// hooks/useCharacterPrompt.ts
import { useCallback } from 'react';
import Constants from 'expo-constants';

// Config loader: prefer Expo extra, then process.env (dev), with safe undefined fallbacks
const EXTRA = (Constants?.expoConfig?.extra || {}) as any;
const OPENAI_API_KEY: string | undefined = EXTRA.OPENAI_API_KEY ?? (typeof process !== 'undefined' ? (process as any).env?.OPENAI_API_KEY : undefined);
const OPENAI_CHAT_MODEL: string | undefined = EXTRA.OPENAI_CHAT_MODEL ?? (typeof process !== 'undefined' ? (process as any).env?.OPENAI_CHAT_MODEL : undefined);
const OPENAI_ORG: string | undefined = EXTRA.OPENAI_ORG ?? (typeof process !== 'undefined' ? (process as any).env?.OPENAI_ORG : undefined);
const OPENAI_BASE_URL: string | undefined = EXTRA.OPENAI_BASE_URL ?? (typeof process !== 'undefined' ? (process as any).env?.OPENAI_BASE_URL : undefined);
const BASE_URL = (OPENAI_BASE_URL && OPENAI_BASE_URL.replace(/\/$/, '')) || 'https://api.openai.com';
import { Personality } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ---- Helpers: normalize personality and build payload ----
const clampList = (arr?: string[] | null, n = 5) => Array.isArray(arr) ? arr.filter(v => typeof v === 'string' && v.trim()).slice(0, n) : [];
const cleanText = (v: any) => (typeof v === 'string' ? v.trim() : undefined);

type ProfilePayload = {
  nickname?: string;
  age?: number;
  gender?: string;
  traits?: string[];
  catchphrases?: string[];
  verbalTics?: string[];
  favorites?: string[];
  dislikes?: string[];
  background?: string;
  profileDetails?: string;
  tone?: string;              // 追加
  teaching_style?: string;    // 追加
  mistake_reaction?: string;  // 追加
  praise?: string;            // 追加
  character?: string;         // 追加（声質・話し方など）
};

const buildProfilePayload = (p: Personality & { gender?: string }): ProfilePayload => {
  return {
    nickname: cleanText(p.nickname ?? (p as any).name),
    age: typeof p.age === 'number' ? p.age : undefined,
    gender: cleanText(p.gender),
    traits: clampList(p.traits),
    catchphrases: clampList(p.catchphrases),
    verbalTics: clampList(p.verbalTics),
    favorites: clampList((p as any).favorites),
    dislikes: clampList((p as any).dislikes),
    background: cleanText(p.background),
    profileDetails: cleanText(p.profileDetails),
    tone: cleanText((p as any).tone),
    teaching_style: cleanText((p as any).teaching_style),
    mistake_reaction: cleanText((p as any).mistake_reaction),
    praise: cleanText((p as any).praise),
    character: cleanText((p as any).character),
  };
};

const buildSystemInstruction = () =>
  '以下のJSONの値を厳密に反映して、日本語で会話エンジン用のキャラクタープロンプト（システム指示）を作成してください。未設定や空の項目は出力に含めないでください。冗長な説明は避け、箇条書き中心で端的に。';

const OUTPUT_TEMPLATE = `システムプロンプト（システム用指示文本）\n\n- 役割/立場\n  {role}\n\n- 基本方針\n  {policies}\n\n- トーン/話し方\n  {tone}\n\n- 口癖・語尾（ある場合のみ）\n  {catchphrases}\n\n- 性格・特徴\n  {traits}\n\n- 指導スタイル（ある場合のみ）\n  {teaching_style}\n\n- ミスへの反応（ある場合のみ）\n  {mistake_reaction}\n\n- 好き/嫌い（ある場合のみ）\n  {likes_dislikes}\n\n- 背景/プロフィール（ある場合のみ）\n  {background_profile}\n\n- 応答の構成\n  箇条書き→根拠→次アクション の順で簡潔に。`;


const buildLocalPrompt = (p: ProfilePayload): string => {
  const sec = (title: string, body?: string | string[]) => {
    if (!body || (Array.isArray(body) && body.length === 0) || (typeof body === 'string' && !body.trim())) return '';
    const text = Array.isArray(body) ? body.join('、') : body.trim();
    return `- ${title}\n  ${text}\n`;
  };

  // Compute richer role/stance string using available fields
  const displayName = (typeof p.nickname === 'string' && p.nickname.trim()) ? p.nickname.trim() : undefined;
  const roleBits: string[] = [];
  if (displayName) roleBits.push(`「${displayName}」として厳格かつ実務的に対応する`);
  if (typeof p.age === 'number') roleBits.push(`${p.age}歳`);
  if (typeof p.gender === 'string' && p.gender.trim()) roleBits.push(p.gender.trim());
  const roleBody = roleBits.length ? roleBits.join(' / ') : undefined;

  const parts: string[] = [];
  parts.push(sec('役割/立場', roleBody));
  parts.push(sec('トーン/話し方', p.tone || p.character));
  parts.push(sec('口癖・語尾', p.catchphrases));
  parts.push(sec('性格・特徴', p.traits));
  parts.push(sec('指導スタイ）', p.teaching_style));
  parts.push(sec('ミスへの反応', p.mistake_reaction));
  const likes = (p.favorites && p.favorites.length) ? `好き: ${p.favorites.join('、')}` : '';
  const dislikes = (p.dislikes && p.dislikes.length) ? `嫌い: ${p.dislikes.join('、')}` : '';
  const likesDislikes = [likes, dislikes].filter(Boolean).join(' / ');
  parts.push(sec('好き/嫌い', likesDislikes));
  const bgpf = [p.background, p.profileDetails].filter(Boolean).join(' / ');
  parts.push(sec('背景/プロフィール', bgpf));


  return parts.filter(Boolean).join('\n').replace(/\n{3,}/g, '\n\n').trim();
};

const STRONG_SYSTEM = `あなたはプロンプトエンジニアです。以下のJSONに含まれるフィールドのみを厳密に使用し、日本語で会話エンジン用のシステムプロンプトだけを出力してください。\n- 未設定や空の値は出力に含めない\n- 余計な前置きや説明文を付けない（出力はプロンプト本文のみ）\n- 章立てはテンプレートに従うが、空欄は章ごと省略してよい\n- モデルが短い出力を返しがちな場合でも、最低でも見出し3つ以上を含める`;

const MODEL_PATTERN = /^(gpt-(?:5-mini(?:-[0-9-]+)?|4o(?:-mini)?(?:-[0-9-]+)?|4\.1(?:-mini)?(?:-[0-9-]+)?|4-turbo(?:-[0-9-]+)?|3\.5-turbo(?:-[0-9-]+)?)|o4(?:-mini)?(?:-[0-9-]+)?|o3(?:-mini)?(?:-[0-9-]+)?)$/;
const ENV_MODEL = (OPENAI_CHAT_MODEL && MODEL_PATTERN.test(OPENAI_CHAT_MODEL)) ? OPENAI_CHAT_MODEL : undefined;
const CHAT_MODEL = ENV_MODEL || 'gpt-5-nano';
console.log('[generateCharacterPrompt] CHAT_MODEL(sanitized):', CHAT_MODEL, 'ENV_MODEL:', OPENAI_CHAT_MODEL);

// Responses API caller (for models like gpt‑5‑nano which don't accept temperature)
const callResponses = async (
  model: string,
  input: string,
  apiKey: string,
  maxOutputTokens: number = 1024,
  instructions?: string,
) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 60000);
  try {
    const res = await fetch(`${BASE_URL}/v1/responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        ...(OPENAI_ORG ? { 'OpenAI-Organization': OPENAI_ORG } : {}),
      },
      body: JSON.stringify({ model, input, max_output_tokens: maxOutputTokens, ...(instructions ? { instructions } : {}) }),
      signal: controller.signal,
    });
    const text = await res.text();
    if (!res.ok) {
      const err = new Error(text || `HTTP ${res.status}`);
      (err as any).status = res.status;
      (err as any).model = model;
      throw err;
    }
    return JSON.parse(text);
  } finally {
    clearTimeout(id);
  }
};

// Robust extractor for Responses API outputs
const extractResponsesText = (r: any): string => {
  // 1) Direct output_text
  if (typeof r?.output_text === 'string' && r.output_text.trim()) {
    return r.output_text.trim();
  }
  // 2) Walk output[].content[] variants
  const parts: string[] = [];
  const out = r?.output;
  if (Array.isArray(out)) {
    for (const item of out) {
      const contentArr = item?.content;
      if (Array.isArray(contentArr)) {
        for (const c of contentArr) {
          // Common shapes: { type: 'output_text' | 'text', text: string | { value: string } }
          if (typeof c?.text === 'string') {
            parts.push(c.text);
          } else if (c?.text && typeof c.text.value === 'string') {
            parts.push(c.text.value);
          } else if (typeof c?.content === 'string') {
            // Extremely rare fallback
            parts.push(c.content);
          }
        }
      }
    }
  }
  if (parts.length) return parts.join('\n').trim();

  // 3) choices-like fallbacks (some gateways proxy into choices)
  const ch0 = r?.choices?.[0];
  const msg = ch0?.message?.content;
  if (typeof msg === 'string' && msg.trim()) return msg.trim();
  if (Array.isArray(msg)) {
    const arr = msg
      .map((p: any) => (typeof p?.text === 'string' ? p.text : typeof p === 'string' ? p : ''))
      .filter(Boolean);
    if (arr.length) return arr.join('\n').trim();
  }
  if (typeof ch0?.text === 'string' && ch0.text.trim()) return ch0.text.trim();

  return '';
};

const callChatCompletions = async (
  model: string,
  payloadBase: Omit<Record<string, any>, 'model'>,
  apiKey: string,
) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 60000); // 60s timeout
  try {
    const res = await fetch(`${BASE_URL}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        ...(OPENAI_ORG ? { 'OpenAI-Organization': OPENAI_ORG } : {}),
      },
      body: JSON.stringify({ ...payloadBase, model }),
      signal: controller.signal,
    });
    const text = await res.text();
    if (!res.ok) {
      const err = new Error(text || `HTTP ${res.status}`);
      (err as any).status = res.status;
      (err as any).model = model;
      throw err;
    }
    return JSON.parse(text);
  } finally {
    clearTimeout(id);
  }
};

const listAvailableModels = async (apiKey: string): Promise<string[]> => {
  try {
    const res = await fetch(`${BASE_URL}/v1/models`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        ...(OPENAI_ORG ? { 'OpenAI-Organization': OPENAI_ORG } : {}),
      },
    });
    if (!res.ok) {
      const t = await res.text();
      console.warn('[generateCharacterPrompt] /models failed:', res.status, t);
      return [];
    }
    const j = await res.json();
    const ids: string[] = Array.isArray(j?.data) ? j.data.map((d: any) => d?.id).filter(Boolean) : [];
    return ids;
  } catch (e) {
    console.warn('[generateCharacterPrompt] listAvailableModels error:', e);
    return [];
  }
};

export const useCharacterPrompt = () => {
  /**
   * ユーザーの入力内容を受け取り、GPT API でキャラクタープロンプトを生成
   */
  const generateCharacterPrompt = useCallback(
    async (
      personality: Personality & { gender?: string },
      chatId: string,
      imageUri?: string,
      parentPrompt?: string,
    ): Promise<string> => {
      try {
        // If a nickname is passed from parent, save it to storage

        if (parentPrompt) {
          // 親から渡されたプロンプトをそのまま保存して返す
          await AsyncStorage.setItem(`@chat_prompt:${chatId}`, parentPrompt);
          console.log('[generateCharacterPrompt] using parent prompt:', parentPrompt.trim(),chatId);
          if (imageUri) {
            await AsyncStorage.setItem(`@chat_image:${chatId}`, imageUri);
          }
          // Confirm storage by retrieving and logging
          const storedName = await AsyncStorage.getItem(`@chat_name:${chatId}`);
          if (storedName) {
          }
          if (imageUri) {
            const storedImage = await AsyncStorage.getItem(`@chat_image:${chatId}`);
          }
          return parentPrompt.trim();
        }
        if (!OPENAI_API_KEY) {
          console.error('[generateCharacterPrompt] API key missing');
          throw new Error('APIキーが見つかりません');
        }
        if (OPENAI_API_KEY && !/^sk-/.test(OPENAI_API_KEY)) {
          console.warn('[generateCharacterPrompt] API key format does not look like an OpenAI key (sk-...)');
        }
        const profile = buildProfilePayload(personality);
        const systemContent = STRONG_SYSTEM;
        const profileJson = JSON.stringify(profile, (_k, v) => (v === undefined ? undefined : v));
        console.log('[generateCharacterPrompt] user input personality:', personality);
        console.log('[generateCharacterPrompt] profile payload (JSON):', profileJson);
        const userContent = `キャラクター情報(JSON):\n${profileJson}\n\n出力テンプレート:\n${OUTPUT_TEMPLATE}\n\n要件:\n- JSONの値のみ反映\n- 未設定は章ごと省略\n- 冗長説明なし、プロンプト本文のみ`;

        // Probe available models with this API key
        const available = await listAvailableModels(OPENAI_API_KEY);

        const preferred = [
          'gpt-5-nano',      // Responses API
          'gpt-5-mini',      // Responses API
          'gpt-5',           // chat/completions（高品質）
          'gpt-4o',          // chat/completions（安定）
          'gpt-4o-mini',     // chat/completions
        ].filter(Boolean) as string[];

        const candidates = Array.from(new Set(
          available.length > 0
            ? preferred.filter(id => available.includes(id))
            : preferred
        ));

        if (available.length > 0 && candidates.length === 0) {
          // If none of our preferred IDs are available, just try the first few available models
          candidates.push(...available.slice(0, 5));
        }

        // Build a base payload (model is injected later)
        const payloadBase = {
          messages: [
            { role: 'system', content: systemContent },
            { role: 'user', content: userContent },
          ],
          max_tokens: 900,
        } as const;

        let json: any | null = null;
        let lastErr: any = null;
        for (const m of candidates) {
          try {
            console.log('[generateCharacterPrompt] trying model:', m);
            const isResponsesModel = /^gpt-5-(nano|mini)/.test(m);
            if (isResponsesModel) {
              const inputStr = userContent;
              const caps = [1024, 2048];
              let r: any = null;
              let outputText = '';
              for (const cap of caps) {
                console.warn('[generateCharacterPrompt] Responses API try with max_output_tokens:', cap);
                r = await callResponses(m, inputStr, OPENAI_API_KEY, cap, systemContent);
                outputText = extractResponsesText(r);
                if (outputText && (!r?.status || r?.status === 'completed')) break;
                // If incomplete due to cap, continue to next cap
                const wasCapped = (r?.status === 'incomplete' && r?.incomplete_details?.reason === 'max_output_tokens');
                if (!wasCapped) break; // some other reason; stop cap loop
              }

              if (!outputText) {
                console.warn('[generateCharacterPrompt] Responses API returned no text. Raw:', JSON.stringify(r).slice(0, 800));
                // Treat as failure for this model so we can try the next candidate
                throw new Error('empty responses text');
              }

              // Normalize into chat-like shape for downstream code
              json = { choices: [{ message: { content: outputText } }] };
              if (!outputText) {
                // force trying the next model
                throw new Error('empty responses text');
              }
            } else {
              json = await callChatCompletions(m, payloadBase, OPENAI_API_KEY);
            }
            lastErr = null;
            break; // success
          } catch (e: any) {
            lastErr = e;
            const msg = String(e?.message || '');
            const status = (e as any)?.status;
            console.warn('[generateCharacterPrompt] model failed:', m, 'status:', status, 'msg:', msg);
            // If invalid model, continue to next candidate; otherwise stop early
            let isInvalidModel = /invalid model/i.test(msg);
            // AbortError（タイムアウト等）は次の候補へ進む
            const isAbort = /abort/i.test(msg) || (e && (e.name === 'AbortError'));
            if (isAbort) {
              isInvalidModel = true; // 続行して次のモデルを試す
            }
            try {
              const parsed = JSON.parse(msg);
              if (parsed?.error?.message && /invalid model/i.test(parsed.error.message)) {
                isInvalidModel = true;
              }
            } catch {}
            if (!isInvalidModel) {
              break;
            }
          }
        }
        if (!json) {
          console.warn('[generateCharacterPrompt] all models failed, falling back to local prompt builder');
          const local = buildLocalPrompt(profile);
          const trimmedLocal = local.trim();
          await AsyncStorage.setItem(`@chat_prompt:${chatId}`, trimmedLocal);
          await AsyncStorage.setItem(`@chat_name:${chatId}`, personality.nickname);
          if (imageUri) {
            await AsyncStorage.setItem(`@chat_image:${chatId}`, imageUri);
          }
          console.log('[generateCharacterPrompt] generated prompt (local):', trimmedLocal);
          return trimmedLocal;
        }

        const content = json.choices?.[0]?.message?.content;
        if (!content) {
          console.warn('[generateCharacterPrompt] empty content returned, using local fallback');
          const local = buildLocalPrompt(profile);
          const trimmedLocal = local.trim();
          await AsyncStorage.setItem(`@chat_prompt:${chatId}`, trimmedLocal);
          await AsyncStorage.setItem(`@chat_name:${chatId}`, personality.nickname);
          if (imageUri) {
            await AsyncStorage.setItem(`@chat_image:${chatId}`, imageUri);
          }
          console.log('[generateCharacterPrompt] generated prompt (local):', trimmedLocal);
          return trimmedLocal;
        }
        const trimmed = content.trim();
        if (trimmed.split('\n').length < 3) {
          console.warn('[generateCharacterPrompt] generated prompt too short, will rely on fallback if available');
        }
        console.log('[generateCharacterPrompt] generated prompt:', trimmed);
        await AsyncStorage.setItem(`@chat_prompt:${chatId}`, trimmed);
        await AsyncStorage.setItem(`@chat_name:${chatId}`, personality.nickname);
        if (imageUri) {
          await AsyncStorage.setItem(`@chat_image:${chatId}`, imageUri);
        }
        // Confirm storage by retrieving and logging
         await AsyncStorage.getItem(`@chat_prompt:${chatId}`);
         await AsyncStorage.getItem(`@chat_name:${chatId}`);
         await AsyncStorage.getItem(`@chat_image:${chatId}`);

        return trimmed;
      } catch (error) {
        console.error('[generateCharacterPrompt] error:', error);
        throw error;
      }
    },
    []
  );
  return { generateCharacterPrompt };
};