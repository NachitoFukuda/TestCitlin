import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { Ionicons } from '@expo/vector-icons';
// Silver gradient colors for VIP
const silverColors = ['rgb(149,149,149)', '#ffffff', 'rgb(88,88,88)'] as const;

const GOLD_BG = require('../../assets/images/gooldbg.png');
const CROWN_GOLD = require('../../assets/images/CrownGoold.png');
const goldColors = ['#FFF5C4', '#FFC107', '#FFE082'] as const;
const goldColors1 = ['#FFFFFF', '#FFFFFF', '#FFFFFF'] as const;
const goldColors2 = ['#FFF5C444', '#FFF5C444', '#FFF5C444'] as const;

// GradientText helper for masked gradient text
const GradientText: React.FC<{
  text: string;
  style?: any;
  colors?: readonly [string, string, ...string[]];
}> = ({ text, style, colors = silverColors }) => {
  const flat = StyleSheet.flatten(style) || {};
  const { position, top, left, right, bottom, transform, ...textStyle } = flat as any;
  const wrapperStyle = { position, top, left, right, bottom, transform } as any;

  return (
    <View style={wrapperStyle} pointerEvents="none">
      <MaskedView
        maskElement={<Text style={[textStyle, { backgroundColor: 'transparent' }]}>{text}</Text>}
      >
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors}>
          <Text style={[textStyle, { opacity: 0 }]}>{text}</Text>
        </LinearGradient>
      </MaskedView>
    </View>
  );
};

const featuresByLevel: Record<string, string[]> = {
  monthly: [
    '全レベル学習（アプリ内）',
    '広告削除',
    '学習進捗の自動保存',
    '優先サポート（アプリ内問い合わせ）',
  ],
  yearly: [
    '全レベル完全解放',
    '広告完全削除',
    '学習進捗のクラウド同期',
    'VIPバッジ表示',
  ],
};

export type CardDesignProps = {
  level: string;
  size?: 'mini' | 'normal';
  selected?: boolean; // 右上にチェックマークを出すか
};

// 内部マップ（このコンポーネントは "級" だけを受け取り、見た目はここで統一）
export const levelMap: Record<string, string> = {
  'monthly': 'Premir+',
  'yearly': 'Premir Pro',

};
// --- Price difference vs. wordbook (monthly) ---
const levelPriceMap: Record<string, string> = {
  'monthly': '¥500/月',
  'yearly': '417/月',

};
// 級対応カードの共通デザイン（背景PNGは左寄せ、右下にシルバー王冠）
const SILVER_BG = require('../../assets/images/silverbg.png');
const CROWN_SILVER = require('../../assets/images/CrownSilver.png');
const SILVER_Colors = ['#C0C0C0', '#E0E0E0', '#A9A9A9'] as const;
const SILVER_Colors2 = ['#ffffff52', '#ffffff52', '#ffffff52'] as const; 
// プレミアテキスト用：虹色グラデーション（高級感 + AI感）
// プレミアテキスト用：パステル調の虹色グラデーション（高級感 + AI感）
const puremiaText = [
'#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF'
] as const;
export const VipCardDesign: React.FC<CardDesignProps> = ({ level, size, selected }) => {
  const title = `${levelMap[level] ?? level}`;

  const levelKey = String(level);
  const normKey1 = levelKey.replace('.', '_');
  const normKey2 = levelKey.replace('_', '.');
  const price =
    levelPriceMap[levelKey] ??
    levelPriceMap[normKey1] ??
    levelPriceMap[normKey2] ??
    '—';

  const scaleStyle = size === 'mini' ? { transform: [{ scale: 0.5 }] } : {};

  if (level === 'yearly') {
    return (
      <TouchableOpacity activeOpacity={0.95} style={styles.wrapper}>
        <View style={[styles.card, { backgroundColor: '#000' }, scaleStyle]}> 

          {/* Gold background image (left-anchored like VIP) */}
          <Image source={GOLD_BG} style={styles.bgImageVipLeft} resizeMode="contain" />

          {/* Right column: badge + gold crown + VIP letters */}
          <View style={styles.vipRightColumn} pointerEvents="none">
            <GradientText
              text="¥417/月"
              colors={goldColors}
              style={[styles.levelListCaptionText]}
            />
            <Image source={CROWN_GOLD} style={styles.rightImageCrown} resizeMode="contain" />
            <View style={styles.vipRowCompact}>
              <GradientText text="V" colors={goldColors} style={styles.vipVIP} />
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={goldColors} style={styles.vipDot} />
              <GradientText text="I" colors={goldColors} style={styles.vipVIP} />
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={goldColors} style={styles.vipDot} />
              <GradientText text="P" colors={goldColors} style={styles.vipVIP} />
            </View>
          </View>

          {/* Bottom-right decorative text */}
          <GradientText text="Card" colors={goldColors2} style={styles.vipCard} />

          {/* Description and price */}
          <GradientText text="Premir Pro" colors={goldColors} style={styles.levelListHeader} />
          <GradientText text="1級 / 準1級 / 2級 / 準2級 / 3級" colors={goldColors1} style={styles.levelListText} />
          <View style={{ flexDirection: 'column', alignItems: 'flex-start', position: 'absolute', top: 90, left: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
              <View style={[styles.checkBadge, styles.checkBadgeSilver]}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
            <GradientText text="推しAI先生" colors={puremiaText} style={styles.puremiaText1} />
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                <View style={[styles.checkBadge, styles.checkBadgeSilver]}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <GradientText text="全ての級の広告削除" colors={goldColors1} style={styles.puremiaText} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.checkBadge, styles.checkBadgeSilver]}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <GradientText text="年間1000円OFF" colors={goldColors1} style={styles.puremiaText} />
              </View>
            </View>
          </View>
          
          <GradientText text="12か月 ¥5,000" colors={goldColors} style={{ position: 'absolute',  bottom: 20, left: 30, fontSize: 24, fontWeight: '700' }} />

        </View>
      </TouchableOpacity>
    );
  }

  return (
    // onPress は受け取らない仕様：見た目のみ提供
    <TouchableOpacity activeOpacity={0.92} style={styles.wrapper}>
      <View style={[styles.card, { backgroundColor: '#000' }, scaleStyle]}> 
        {/* グラデ背景（統一） */}
          <Image source={SILVER_BG} style={styles.bgImageVipLeft} resizeMode="contain" />

          <View style={styles.vipRightColumn} pointerEvents="none">
            <GradientText text="¥500/月"colors={SILVER_Colors} style={[styles.levelListCaptionText,]}
            />
            <Image source={CROWN_SILVER} style={styles.rightImageCrown} resizeMode="contain" />
            <View style={styles.vipRowCompact}>
              <GradientText text="V" colors={SILVER_Colors} style={styles.vipVIP} />
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={SILVER_Colors} style={styles.vipDot} />
              <GradientText text="I" colors={SILVER_Colors} style={styles.vipVIP} />
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={SILVER_Colors} style={styles.vipDot} />
              <GradientText text="P" colors={SILVER_Colors} style={styles.vipVIP} />
            </View>
          </View>
          <GradientText text="Card" colors={SILVER_Colors2} style={styles.vipCard} />

        {/* 画面と同じ絶対配置のテキストレイアウト */}
          {/* Description and price */}
          <GradientText text="Premir+" colors={SILVER_Colors} style={styles.levelListHeader} />
          <GradientText text="1級 / 準1級 / 2級 / 準2級 / 3級" colors={goldColors1} style={styles.levelListText} />
          <View style={{ flexDirection: 'column', alignItems: 'flex-start', position: 'absolute', top: 90, left: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
              <View style={[styles.checkBadge, styles.checkBadgeSilver]}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <GradientText text="推しAI先生" colors={puremiaText} style={styles.puremiaText1} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={[styles.checkBadge, styles.checkBadgeSilver]}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <GradientText text="全ての級の広告削除" colors={goldColors1} style={styles.puremiaText} />
            </View>
          </View>
          <GradientText text="月額制" colors={SILVER_Colors} style={{ position: 'absolute', bottom: 20, left: 30, fontSize: 24, fontWeight: '700' }} />
        </View>
    </TouchableOpacity>
  );
};

export default VipCardDesign;

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
  opacity: 0.7, // ← 半透明度（0～1で指定）
},
  // 画面と同一のテキスト配置
  levelListHeader: {
    position: 'absolute',
    top: 15,
    left: 20,
    fontSize: 30,
    fontWeight: '700',
    // color removed for gradient
    marginBottom: 4,
  },
  levelListText: {
    position: 'absolute',
    top: 50,
    left: 20,
    fontSize: 14,
    fontWeight: '600',
    color: '#bbb',
  },
  puremiaText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#bbb',
  },
  puremiaText1: {
    fontSize: 24,
    fontWeight: '500',
    color: '#bbb',
  },
  levelListCaptionText: {
    fontSize: 24,
    fontWeight: '600',
    position: 'relative',
    top: 0,
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
    bottom: 5,
    left: 60,
  },
  purchasePriceText: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom:10,
  },
  vipRightColumn: {
    position: 'absolute',
    top: 20,
    right: 37,
    alignItems: 'center',
    zIndex: 2,
  },
  vipRightColumn2: {
    position: 'absolute',
    bottom: 70,
    right: 37,
    alignItems: 'center',
    zIndex: 2,
  },
  vipRowCompact: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: -60,
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
    bottom: -70,
  },
  vipCard: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    fontSize: 84,
    fontWeight: '600',
    fontFamily: 'DancingScript_700Bold',
  },
  featuresContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: 200,
  },
  featureItem: {
    color: '#CFCFCF',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 4,
    fontWeight: '600',
  },
  featureItemYearly: {
    color: '#FFC107',
  },
  checkBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    borderWidth: 1,
  },
  checkBadgeGold: {
    backgroundColor: 'rgba(255, 193, 7, 0.6)',
    borderColor: 'rgba(255, 193, 7, 0.9)',
  },
  checkBadgeSilver: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderColor: 'rgba(224, 224, 224, 0.9)',
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 16,
  },
});
