import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// Silver gradient colors for VIP


export type CardDesignProps = {
  level: string;
  size?: 'mini' | 'normal';
};

// 内部マップ（このコンポーネントは "級" だけを受け取り、見た目はここで統一）
export const levelMap: Record<string, string> = {
  '1': '1級',
  '1.5': '準1級',
  '2': '2級',
  '2.5': '準2級',
  '3': '3級',
};
// Reverse map: Japanese label -> key (e.g., '準1級' -> '1.5')
const levelReverseMap: Record<string, string> = Object.fromEntries(
  Object.entries(levelMap).map(([k, v]) => [v, k])
);
// --- Price difference vs. wordbook (monthly) ---
const levelPriceMap: Record<string, string> = {
  '1': '¥1,100',
  '1.5': '¥900',
  '1_5': '¥900',
  '2': '¥700',
  '2.5': '¥500',
  '2_5': '¥500',
  '3': '¥300',
  'All Level': '¥0',
};

const resolveLevelKey = (lvl: string) => {
  // If already a known key, return as-is
  if (levelPriceMap[lvl] !== undefined) return lvl;
  // If it's a Japanese label like '1級' or '準1級', map back to key
  const fromJp = levelReverseMap[lvl];
  if (fromJp) return fromJp;
  // Normalize separators (e.g., '1_5' <-> '1.5')
  const dot = lvl.replace('_', '.');
  const under = lvl.replace('.', '_');
  if (levelPriceMap[dot] !== undefined) return dot;
  if (levelPriceMap[under] !== undefined) return under;
  return lvl;
};

export const CardDesign: React.FC<CardDesignProps> = ({ level, size }) => {
  // mini のときにフォント・余白・位置を一律スケール
  const scale = size === 'mini' ? 0.7 : 1;
  console.log('CardDesign render', { level, size, scale });
  const textScale = scale;
  const posScale = scale;
  const textScale2 = scale;


  const pastelBgMap: Record<string, string> = {
    '1': 'rgba(255, 0, 38, 0.4)', // light pink
    '1.5': 'rgba(255, 136, 0, 0.4)', // peach
    '2': 'rgba(0, 145, 255, 0.4)', // light blue
    '2.5': 'rgba(38, 255, 0, 0.4)', // mint
    '3': 'rgba(255, 0, 230, 0.4)', // light yellow
    'All Level': 'rgba(53, 53, 53, 0.8)', // goldish
  };
  const pastelBg = pastelBgMap[level] ?? 'rgba(200,200,200,0.3)';

  const caption = '広告削除';
  const canonicalKey = resolveLevelKey(String(level));
  const title = `${levelMap[canonicalKey] ?? level}`;
  const k1 = canonicalKey;
  const k2 = canonicalKey.replace('.', '_');
  const k3 = canonicalKey.replace('_', '.');
  const price = levelPriceMap[k1] ?? levelPriceMap[k2] ?? levelPriceMap[k3] ?? '—';

  if (level === 'All Level') {
    return (
      <TouchableOpacity activeOpacity={0.92} style={styles.wrapper}>
        <View style={[styles.card, { backgroundColor: pastelBg },]}> 
          {/* Gold background image (left-anchored like VIP) */}

          {/* Right column: badge + gold crown + VIP letters */}
          <View style={styles.vipRightColumn} pointerEvents="none">
            <Text style={[styles.levelListCaptionText, { position: 'relative', top: 20 * posScale, left: 10 * posScale, color: '#FFD700', fontSize: 24 * textScale }]}>{caption}</Text>
          </View>

          {/* Bottom-right decorative text */}
          <Text style={[styles.vipCard, { color: '#ffd90061', fontSize: 84 * textScale }]}>Card</Text>

          {/* Description and price */}
          <Text
            style={[
              styles.levelListHeader,
              {
                color: '#FFD700',
                fontSize: 60 * textScale2,
                // mini のときは文字間隔を詰める
                letterSpacing: size === 'mini' ? 0 : 0.5,
              },
            ]}
          >
            1〜3級
          </Text>
          <View style={[styles.levelListBlock, { top: 100 * posScale }]}>
            <Text style={[styles.levelListText, { color: '#fff', fontSize: 14 * textScale }]}>1級 / 準1級 / 2級 / 準2級 / 3級</Text>
          </View>
          <Text style={{ position: 'absolute', top: 180 * posScale, left: 60 * posScale, fontSize: 24 * textScale, fontWeight: '700', color: '#ffd900ff' }}>¥2,000</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    // onPress は受け取らない仕様：見た目のみ提供
    <TouchableOpacity activeOpacity={0.92} style={styles.wrapper}>
    <View style={[styles.card, { backgroundColor: pastelBg }]}> 
        {/* 画面と同じ絶対配置のテキストレイアウト */}
        <Text style={{ fontSize: 60 * textScale, fontWeight: '700', position: 'absolute', top: 20 * posScale, left: 20 * posScale, color: '#fff' }}>{title}</Text>
        <Text style={[styles.levelListCaptionText, { position: 'absolute', top: 20 * posScale, right: 20 * posScale, color: '#fff', fontSize: 24 * textScale }]}>{caption}</Text>
        <View style={[styles.levelListBlock, { top: 100 * posScale }]}>
          {/* Removed caption text here as caption is now positioned top-right */}
        </View>
        <Text style={[
          styles.purchasePriceText,
          {
            position: 'absolute',
            top: 180 * posScale,
            left: 60 * posScale,
            color: '#fff',
            fontSize: 24 * textScale,
          },
        ]}>{price}</Text>
        {/* "Card" gradient text in bottom-right of card */}
        <Text style={[styles.vipCard, { opacity: 0.4, color: '#fff', fontSize: 84 * textScale }]}>Card</Text>
      </View>    
    </TouchableOpacity>
  );
};

export default CardDesign;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    aspectRatio: 1.6,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(28, 28, 28, 1)',
    shadowOpacity: 0.6,
    shadowOffset: { width: 20, height: 48 },
    shadowRadius: 12,
    elevation: 8,
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius:16,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  grad: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  content: {
    position: 'absolute',
    left: 18,
    right: 18,
    top: 18,
    bottom: 18,
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 0.6,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  caption: {
    marginTop: 6,
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.6,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  ctaPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.26)',
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.4,
  },
  rightImage: {
    width: 54,
    height: 54,
    marginVertical: 4,
    top: 55 
  },
  // 背景PNG（VIP左寄せ）
  bgImageVipLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    height: '120%',
    transform: [{ translateX: -150 }],
    opacity: 0.9,
  },
  // 画面と同一のテキスト配置
  levelListHeader: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 60,
    fontWeight: '700',
    // color removed for gradient
    marginBottom: 4,
  },
  levelListBlock: {
    position: 'absolute',
    left: 20,
  },
  levelListText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#bbb',
  },
  levelListCaptionText: {
    fontSize: 24,
    fontWeight: '600',
  },
  purchaseCardButtonText: {
    position: 'absolute',
    top: 164,
    left: 60,
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  purchasePriceWrapper: {
    position: 'absolute',
    top: 164,
    left: 60,
  },
  purchasePriceText: {
    fontSize: 24,
    fontWeight: '700',
  },
  vipRightColumn: {
    position: 'absolute',
    top: 10,
    right: 37,
    alignItems: 'center',
    zIndex: 2,
  },
  vipRightColumn2: {
    position: 'absolute',
    top: 40,
    right: 37,
    alignItems: 'center',
    zIndex: 2,
  },
  vipRowCompact: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: -45,
  },
  vipVIP: {
    fontSize: 33,
    fontWeight: '700',
    letterSpacing: 2,
    transform: [{ scaleY: 1.5 }],
  },
  vipDot: {
    width: 6,
    height: 6,
    marginHorizontal: 1,
    borderRadius: 2,
    marginTop: 29,
  },
  rightImageCrown: {
    width: 54,
    height: 54,
    marginVertical: 4,
    top: 55,
  },
  vipCard: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    fontSize: 84,
    fontWeight: '600',
    fontFamily: 'DancingScript_700Bold',
  },
});
