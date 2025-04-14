const questions1 = [
  {
      id: 1,
      question: "inferior",
      choices: ["複雑な", "高価な", "劣った", "珍しい"],
      correctAnswer: "劣った"
    },
    {
      id: 2,
      question: "as a result",
      choices: ["その結果", "予期せず", "ためらいながら", "注意深く"],
      correctAnswer: "その結果"
    },
    {
      id: 3,
      question: "however",
      choices: ["具体的に", "しかしながら", "次第に", "主に"],
      correctAnswer: "しかしながら"
    },
    {
      id: 4,
      question: "environment",
      choices: ["環境", "哲学", "手法", "戦略"],
      correctAnswer: "環境"
    },
    {
      id: 5,
      question: "reduce",
      choices: ["拡大する", "評価する", "減らす", "比較する"],
      correctAnswer: "減らす"
    },
    {
      id: 6,
      question: "instead",
      choices: ["無限に", "突然", "代わりに", "自然に"],
      correctAnswer: "代わりに"
    },
    {
      id: 7,
      question: "in order to",
      choices: ["のために", "への反抗として", "の一部として", "の余白に"],
      correctAnswer: "のために"
    },
    {
      id: 8,
      question: "vehicle",
      choices: ["哲学", "乗り物", "理論", "運動"],
      correctAnswer: "乗り物"
    },
    {
      id: 9,
      question: "recommend",
      choices: ["否定する", "勧める", "隠す", "解放する"],
      correctAnswer: "勧める"
    },
    {
      id: 10,
      question: "improve",
      choices: ["評価する", "分析する", "改善する", "観察する"],
      correctAnswer: "改善する"
    },
    {
      id: 11,
      question: "recently",
      choices: ["最近", "遠く", "昔", "いつか"],
      correctAnswer: "最近"
    },
    {
      id: 12,
      question: "customer",
      choices: ["顧客", "店員", "製品", "売り手"],
      correctAnswer: "顧客"
    },
    {
      id: 13,
      question: "several",
      choices: ["幾つかの", "多くの", "少数の", "大量の"],
      correctAnswer: "幾つかの"
    },
    {
      id: 14,
      question: "discover",
      choices: ["を発見する", "を失う，見失う", "を避ける", "を発明する"],
      correctAnswer: "を発見する"
    },
    {
      id: 15,
      question: "common",
      choices: ["共通の", "異なる", "普通の", "珍しい"],
      correctAnswer: "共通の"
    },
    {
      id: 16,
      question: "in particular",
      choices: ["特に", "その上", "その他", "詳細に"],
      correctAnswer: "特に"
    },
    {
      id: 17,
      question: "disturb",
      choices: ["を阻害する", "を誘惑する", "を褒める", "を探求する"],
      correctAnswer: "を阻害する"
    },
    {
      id: 18,
      question: "moreover",
      choices: ["さらに", "しかし", "また", "そのために"],
      correctAnswer: "さらに"
    },
    {
      id: 19,
      question: "not only a but also b",
      choices: ["aと同様bも", "aのみ", "bのみ", "aまたはb"],
      correctAnswer: "aと同様bも"
    },
    {
      id: 20,
      question: "a number of",
      choices: ["たくさんの", "数えること", "少しの，いくつかの", "数値"],
      correctAnswer: "たくさんの"
    },
    {
      id: 21,
      question: "benefit",
      choices:  ["利益", "損失", "売上", "コスト"],
      correctAnswer: "利益"
    },
    {
      id: 22,
      question: "deal with",
      choices:["に対処する", "無視する", "放置する", "諦める"],
      correctAnswer: "に対処する"
    },
    {
      id: 23,
      question: "solution",
      choices: ["解決法", "問題", "課題", "挑戦"],
      correctAnswer: "解決法"
    },
    {
      id: 24,
      question: "inform",
      choices:["情報を与える", "隠す", "推測する", "想像する"],
      correctAnswer: "情報を与える"
    },
    {
      id: 25,
      question: "unable",
      choices: ["できない", "可能", "容易", "自由"],
      correctAnswer: "できない"
    },
    {
      id: 26,
      question: "disease",
      choices: ["病気", "健康", "治療", "予防"],
      correctAnswer: "病気"
    },
    {
      id: 27,
      question: "therefore",
      choices: ["それゆえ", "しかし", "かつて", "近く"],
      correctAnswer: "それゆえ"
    },
    {
      id: 28,
      question: "unfortunately",
      choices:["残念なことに", "幸運にも", "意外にも", "明らかに"],
      correctAnswer: "残念なことに"
    },    
    {
      id: 29,
      question: "device",
      choices:  ["装置", "理論", "法則", "原理"],
      correctAnswer: "装置"
    },
    {
      id: 30,
      question: "attractive",
      choices:["魅力的な", "平凡な", "退屈な", "一般的な"],
      correctAnswer: "魅力的な"
    },
    {
      id: 31,
      question: "climate",
      choices: ["気候", "地形", "人口", "文化"],
      correctAnswer: "気候"
    },
    {
      id: 32,
      question: "end up",
      choices: ["最終的に", "始める", "途中で", "避ける"],
      correctAnswer: "最終的に"
    },
    {
      id: 33,
      question: "evidence",
      choices: ["証拠", "意見", "推測", "伝聞"],
      correctAnswer: "証拠"
    },
    {
      id: 34,
      question: "estimate",
      choices: ["推定する", "確認する", "無視する", "軽視する"],
      correctAnswer: "推定する"
    },
    {
      id: 35,
      question: "argue",
      choices: ["主張する", "同意する", "譲る", "無関心"],
      correctAnswer: "主張する"
    },
    {
      id: 36,
      question: "according to",
      choices: ["によると", "反して", "関係なく", "一致して"],
      correctAnswer: "によると"
    },
    {
      id: 37,
      question: "meanwhile",
      choices: ["一方で", "以前は", "その後で", "直ちに"],
      correctAnswer: "一方で"
    },
    {
      id: 38,
      question: "entirely",
      choices: ["完全に", "部分的に", "ほとんど", "やや"],
      correctAnswer: "完全に"
    },
    {
      id: 39,
      question: "publish",
      choices: ["出版する", "隠す", "保留する", "破棄する"],
      correctAnswer: "出版する"
    },
    {
      id: 40,
      question: "melt",
      choices: ["溶ける", "凍る", "蒸発する", "硬化する"],
      correctAnswer: "溶ける"
    },
    {
      id: 41,
      question: "expense",
      choices: ["費用", "利益", "節約", "収入"],
      correctAnswer: "費用"
    },
    {
      id: 42,
      question: "contain",
      choices: ["含む", "排除する", "避ける", "無視する"],
      correctAnswer: "含む"
    },
    {
      id: 43,
      question: "similar",
      choices: ["似ている", "異なる", "対立する", "独特の"],
      correctAnswer: "似ている"
    },
    {
      id: 44,
      question: "government",
      choices: ["政府", "民間", "企業", "非政府組織"],
      correctAnswer: "政府"
    },
    {
      id: 45,
      question: "modern",
      choices: ["現代的な", "古典的な", "伝統的な", "歴史的な"],
      correctAnswer: "現代的な"
    },
    {
      id: 46,
      question: "million",
      choices: ["100万", "10万", "1億", "1000"],
      correctAnswer: "100万"
    },
    {
      id: 47,
      question: "quit",
      choices: ["やめる", "続ける", "始める", "加速する"],
      correctAnswer: "やめる"
    },
    {
      id: 48,
      question: "scientist",
      choices: ["科学者", "芸術家", "教師", "政治家"],
      correctAnswer: "科学者"
    },
    {
      id: 49,
      question: "pollution",
      choices: ["汚染", "清潔", "保護", "再生"],
      correctAnswer: "汚染"
    },
    {
      id: 50,
      question: "foundation",
      choices: ["土台", "破壊", "撤回", "否定"],
      correctAnswer: "土台"
    },
    {
      id: 51,
      question: "remove",
      choices: ["取り除く", "追加する", "保持する", "隠す"],
      correctAnswer: "取り除く"
    },
    {
      id: 52,
      question: "compare",
      choices: ["比較する", "合わせる", "分離する", "無視する"],
      correctAnswer: "比較する"
    },
    {
      id: 53,
      question: "replace",
      choices: ["取り換える", "壊す", "修復する", "下げる"],
      correctAnswer: "取り換える"
    },
    {
      id: 54,
      question: "lead to",
      choices: ["に導く", "避ける", "逃れる", "終わらせる"],
      correctAnswer: "に導く"
    },
    {
      id: 55,
      question: "furthermore",
      choices: ["さらに", "しかし", "代わりに", "以前に"],
      correctAnswer: "さらに"
    },
    {
      id: 56,
      question: "result in",
      choices: ["結果として", "起因する", "阻止する", "無視する"],
      correctAnswer: "結果として"
    },
    {
      id: 57,
      question: "profit",
      choices: ["利益", "損失", "投資", "コスト"],
      correctAnswer: "利益"
    },
    {
      id: 58,
      question: "remain",
      choices: ["残る", "去る", "変化する", "進化する"],
      correctAnswer: "残る"
    },
    {
      id: 59,
      question: "organize",
      choices: ["組織する", "解体する", "混乱させる", "隠蔽する"],
      correctAnswer: "組織する"
    },
    {
      id: 60,
      question: "suffer from",
      choices: ["苦しむ", "楽しむ", "回復する", "利益を得る"],
      correctAnswer: "苦しむ"
    },
    {
      id: 61,
      question: "emphasize",
      choices: ["強調する", "軽視する", "忘れる", "否定する"],
      correctAnswer: "強調する"
    },
    {
      id: 62,
      question: "more and more",
      choices: ["ますます多くの", "ますます少なく", "常に一定の", "減少して"],
      correctAnswer: "ますます多くの"
    },
    {
      id: 63,
      question: "experiment",
      choices: ["実験", "理論", "観察", "解釈"],
      correctAnswer: "実験"
    },
    {
      id: 64,
      question: "consume",
      choices: ["消費する", "節約する", "増加する", "蓄積する"],
      correctAnswer: "消費する"
    },
    {
      id: 65,
      question: "development",
      choices: ["発展", "後退", "停滞", "減少"],
      correctAnswer: "発展"
    },
    {
      id: 66,
      question: "detect",
      choices: ["検出する", "無視する", "隠蔽する", "否認する"],
      correctAnswer: "検出する"
    },
    {
      id: 67,
      question: "extremely",
      choices: ["極端に", "わずかに", "平均的に", "たまに"],
      correctAnswer: "極端に"
    },
    {
      id: 68,
      question: "employment",
      choices: ["雇用", "解雇", "休息", "退職"],
      correctAnswer: "雇用"
    },
    {
      id: 69,
      question: "by chance",
      choices: ["偶然に", "計画的に", "意図的に", "確実に"],
      correctAnswer: "偶然に"
    },
    {
      id: 70,
      question: "unlike",
      choices: ["と異なって", "同様に", "一致して", "支持して"],
      correctAnswer: "と異なって"
    },
    {
      id: 71,
      question: "properly",
      choices: ["適切に", "不適切に", "急いで", "遅れて"],
      correctAnswer: "適切に"
    },
    {
      id: 72,
      question: "repair",
      choices: ["修理する", "壊す", "捨てる", "無視する"],
      correctAnswer: "修理する"
    },
    {
      id: 73,
      question: "in addition",
      choices: ["追加として", "代わりに", "しかし", "もっと少なく"],
      correctAnswer: "追加として"
    },
    {
      id: 74,
      question: "complicated",
      choices: ["複雑な", "単純な", "明白な", "直接的な"],
      correctAnswer: "複雑な"
    },
    {
      id: 75,
      question: "until",
      choices: ["までに", "から", "以前に", "直後に"],
      correctAnswer: "までに"
    },
    {
      id: 76,
      question: "on the other hand",
      choices: ["一方で", "同様に", "加えて", "先に"],
      correctAnswer: "一方で"
    },
    {
      id: 77,
      question: "arrest",
      choices: ["逮捕する", "解放する", "推奨する", "無視する"],
      correctAnswer: "逮捕する"
    },
    {
      id: 78,
      question: "betray",
      choices: ["裏切る", "忠実に守る", "強化する", "合意する"],
      correctAnswer: "裏切る"
    },
    {
      id: 79,
      question: "survey",
      choices: ["調査", "推測", "無視", "批判"],
      correctAnswer: "調査"
    },
    {
      id: 80,
      question: "affect",
      choices: ["影響を与える", "独立する", "断つ", "避ける"],
      correctAnswer: "影響を与える"
    },
    {
      id: 81,
      question: "consider",
      choices: ["考える", "無視する", "強制する", "否定する"],
      correctAnswer: "考える"
    },
    {
      id: 82,
      question: "portable",
      choices: ["持ち運べる", "固定式の", "重い", "大型の"],
      correctAnswer: "持ち運べる"
    },
    {
      id: 83,
      question: "remind",
      choices: ["思い出させる", "忘れさせる", "隠す", "軽視する"],
      correctAnswer: "思い出させる"
    },
    {
      id: 84,
      question: "ability",
      choices: ["能力", "無能", "怠慢", "依存"],
      correctAnswer: "能力"
    },
    {
      id: 85,
      question: "allow",
      choices: ["許可する", "禁止する", "阻止する", "疑う"],
      correctAnswer: "許可する"
    },
    {
      id: 86,
      question: "quality",
      choices: ["質", "量", "コスト", "速度"],
      correctAnswer: "質"
    },
    {
      id: 87,
      question: "construction",
      choices: ["建設", "解体", "放置", "避難"],
      correctAnswer: "建設"
    },
    {
      id: 88,
      question: "develop",
      choices: ["発達させる", "停止する", "減退させる", "隠蔽する"],
      correctAnswer: "発達させる"
    },
    {
      id: 89,
      question: "permission",
      choices: ["許可", "拒絶", "無関心", "批判"],
      correctAnswer: "許可"
    },
    {
      id: 90,
      question: "mess",
      choices: ["混乱", "整理", "秩序", "静寂"],
      correctAnswer: "混乱"
    },
    {
      id: 91,
      question: "convert",
      choices: ["変える", "保持する", "破棄する", "無視する"],
      correctAnswer: "変える"
    },
    {
      id: 92,
      question: "resident",
      choices: ["住民", "訪問者", "外国人", "旅行者"],
      correctAnswer: "住民"
    },
    {
      id: 93,
      question: "provide",
      choices: ["供給する", "取り除く", "拒否する", "隠蔽する"],
      correctAnswer: "供給する"
    },
    {
      id: 94,
      question: "metal",
      choices: ["金属", "プラスチック", "木材", "ガラス"],
      correctAnswer: "金属"
    },
    {
      id: 95,
      question: "immediately",
      choices: ["即座に", "後で", "徐々に", "最終的に"],
      correctAnswer: "即座に"
    },
    {
      id: 96,
      question: "predict",
      choices: ["予想する", "忘れる", "確認する", "無視する"],
      correctAnswer: "予想する"
    },
    {
      id: 97,
      question: "religion",
      choices: ["宗教", "科学", "哲学", "政治"],
      correctAnswer: "宗教"
    },
    {
      id: 98,
      question: "currency",
      choices: ["通貨", "商品", "サービス", "財産"],
      correctAnswer: "通貨"
    },
    {
      id: 99,
      question: "restore",
      choices: ["元に戻す", "破壊する", "変更する", "進化させる"],
      correctAnswer: "元に戻す"
    },
    {
      id: 100,
      question: "accompany",
      choices: ["付き添う", "避ける", "攻撃する", "批判する"],
      correctAnswer: "付き添う"
    },
    {
      id: 101,
      question: "in detail",
      choices: ["詳細に", "大まかに", "簡単に", "ぼんやりと"],
      correctAnswer: "詳細に"
    },
    {
      id: 102,
      question: "no longer",
      choices: ["もはやAでない", "まだ", "これから", "常に"],
      correctAnswer: "もはやAでない"
    },
    {
      id: 103,
      question: "nevertheless",
      choices: ["にも関わらず", "そのため", "同様に", "そして"],
      correctAnswer: "にも関わらず"
    },
    {
      id: 104,
      question: "probably",
      choices: ["おそらく", "絶対に", "決して", "めったに～ない"],
      correctAnswer: "おそらく"
    },
    {
      id: 105,
      question: "in contrast",
      choices: ["対照的に", "同様に", "加えて", "結果として"],
      correctAnswer: "対照的に"
    },
    {
      id: 106,
      question: "for instance",
      choices: ["例えば", "しかし", "全く", "特に"],
      correctAnswer: "例えば"
    },
    {
      id: 107,
      question: "additionally",
      choices: ["加えて", "代わりに", "ただし", "実際には"],
      correctAnswer: "加えて"
    },
    {
      id: 108,
      question: "anxiety",
      choices: ["心配", "自信", "喜び", "興奮"],
      correctAnswer: "心配"
    },
    {
      id: 109,
      question: "for example",
      choices: ["例えば", "それに対して", "さらに", "実際"],
      correctAnswer: "例えば"
    },
    {
      id: 110,
      question: "brain",
      choices: ["頭脳", "心", "感情", "肉体"],
      correctAnswer: "頭脳"
    },
    {
      id: 111,
      question: "certain",
      choices: ["確信している", "不確かな", "迷って", "不明な"],
      correctAnswer: "確信している"
    },
    {
      id: 112,
      question: "pain",
      choices: ["痛み", "喜び", "安心", "興奮"],
      correctAnswer: "痛み"
    },
    {
      id: 113,
      question: "in response to",
      choices: ["に応じて", "無視して", "前もって", "遅れて"],
      correctAnswer: "に応じて"
    },
    {
      id: 114,
      question: "stare at",
      choices: ["をじっと見つめる", "見逃す", "閉じる", "回避する"],
      correctAnswer: "をじっと見つめる"
    },
    {
      id: 115,
      question: "involve",
      choices: ["を含む", "排除する", "避ける", "無関係にする"],
      correctAnswer: "を含む"
    },
    {
      id: 116,
      question: "at the same time",
      choices: ["同時に", "順番に", "異なる時に", "たまに"],
      correctAnswer: "同時に"
    },
    {
      id: 117,
      question: "preserved",
      choices: ["保存された", "破壊された", "失われた", "無視された"],
      correctAnswer: "保存された"
    },
    {
      id: 118,
      question: "be known as",
      choices: ["として知られている", "未知の", "忘れられた", "誤解された"],
      correctAnswer: "として知られている"
    },
    {
      id: 119,
      question: "accurate",
      choices: ["正確な", "誤った", "不確かな", "大まかな"],
      correctAnswer: "正確な"
    },
    {
      id: 120,
      question: "analyze",
      choices: ["を分析する", "無視する", "信じる", "推測する"],
      correctAnswer: "を分析する"
    },
    {
      id: 121,
      question: "a variety of",
      choices: ["いろいろな", "一種の", "同一の", "限られた"],
      correctAnswer: "いろいろな"
    },
    {
      id: 122,
      question: "obtain",
      choices: ["を手に入れる", "失う", "放棄する", "拒否する"],
      correctAnswer: "を手に入れる"
    },
    {
      id: 123,
      question: "sympathy",
      choices: ["同情", "無関心", "敵意", "喜び"],
      correctAnswer: "同情"
    },
    {
      id: 124,
      question: "flexibility",
      choices: ["しなやかさ", "硬直性", "重さ", "不安定"],
      correctAnswer: "しなやかさ"
    },
    {
      id: 125,
      question: "approach",
      choices: ["に近づく", "離れる", "避ける", "忘れる"],
      correctAnswer: "に近づく"
    },
    {
      id: 126,
      question: "manage",
      choices: ["何とかうまくやる", "失敗する", "放棄する", "無視する"],
      correctAnswer: "何とかうまくやる"
    },
    {
      id: 127,
      question: "reach out",
      choices: ["手を延ばす", "引き下がる", "諦める", "隠れる"],
      correctAnswer: "手を延ばす"
    },
    {
      id: 128,
      question: "for fear of",
      choices: ["を恐れて", "信頼して", "希望を持って", "楽観的に"],
      correctAnswer: "を恐れて"
    },
    {
      id: 129,
      question: "on behalf of",
      choices: ["の代わりに", "反対して", "一緒に", "遠く離れて"],
      correctAnswer: "の代わりに"
    },
    {
      id: 130,
      question: "on account of",
      choices: ["のため", "にもかかわらず", "に対して", "の方向に"],
      correctAnswer: "のため"
    },
    {
      id: 131,
      question: "artificial",
      choices: ["人工的な", "自然な", "生物的な", "有機的な"],
      correctAnswer: "人工的な"
    },
    {
      id: 132,
      question: "prevent A from B",
      choices: ["AをBから防ぐ", "AをBに促す", "AとBを結びつける", "AとBを同時に進める"],
      correctAnswer: "AをBから防ぐ"
    },
    {
      id: 133,
      question: "rather than",
      choices: ["よりむしろ", "その上で", "加えて", "同様に"],
      correctAnswer: "よりむしろ"
    },
    {
      id: 134,
      question: "slightly",
      choices: ["わずかに", "大幅に", "完全に", "永続的に"],
      correctAnswer: "わずかに"
    },
    {
      id: 135,
      question: "measure",
      choices: ["測るもの", "推測する", "無視する", "放棄する"],
      correctAnswer: "測るもの"
    },
    {
      id: 136,
      question: "be born with",
      choices: ["生まれつき", "後天的に獲得する", "年齢とともに発達する", "学習により得る"],
      correctAnswer: "生まれつき"
    },
    {
      id: 137,
      question: "waste",
      choices: ["浪費", "節約", "投資", "収益"],
      correctAnswer: "浪費"
    },
    {
      id: 138,
      question: "since then",
      choices: ["それ以来", "それ以前", "その瞬間に", "遠い将来に"],
      correctAnswer: "それ以来"
    },
    {
      id: 139,
      question: "turn A into B",
      choices: ["AをBに変える", "AとBを分離する", "AにBを追加する", "AからBを取り除く"],
      correctAnswer: "AをBに変える"
    },
    {
      id: 140,
      question: "fertilizer",
      choices: ["肥料", "農薬", "水", "土"],
      correctAnswer: "肥料"
    },
    {
      id: 141,
      question: "made of",
      choices: ["で出来ている", "破壊される", "分離される", "複製される"],
      correctAnswer: "で出来ている"
    },
    {
      id: 142,
      question: "adopt",
      choices: ["を自分のものにする", "拒絶する", "無視する", "破壊する"],
      correctAnswer: "を自分のものにする"
    },
    {
      id: 143,
      question: "raise",
      choices: ["を上げる", "下げる", "放棄する", "損なう"],
      correctAnswer: "を上げる"
    },
    {
      id: 144,
      question: "avoid",
      choices: ["を避ける", "追求する", "受け入れる", "確認する"],
      correctAnswer: "を避ける"
    },
    {
      id: 145,
      question: "make sure",
      choices: ["を確かめる", "推測する", "忘れる", "譲る"],
      correctAnswer: "を確かめる"
    },
    {
      id: 146,
      question: "participate in",
      choices: ["に参加する", "離脱する", "批判する", "無視する"],
      correctAnswer: "に参加する"
    },
    {
      id: 147,
      question: "achieve",
      choices: ["を達成する", "失敗する", "放棄する", "減少する"],
      correctAnswer: "を達成する"
    },
    {
      id: 148,
      question: "tolerate",
      choices: ["に耐える", "拒絶する", "急ぐ", "避ける"],
      correctAnswer: "に耐える"
    },
    {
      id: 149,
      question: "journey",
      choices: ["旅", "滞在", "休息", "作業"],
      correctAnswer: "旅"
    },
    {
      id: 150,
      question: "get along",
      choices: ["うまくやる", "失敗する", "引き離す", "攻撃する"],
      correctAnswer: "うまくやる"
    },
    {
      id: 151,
      question: "keep up with",
      choices: ["に遅れず付いていく", "避ける", "無視する", "先行する"],
      correctAnswer: "に遅れず付いていく"
    },
    {
      id: 152,
      question: "production",
      choices: ["生産", "消費", "減少", "中断"],
      correctAnswer: "生産"
    },
    {
      id: 153,
      question: "cell",
      choices: ["細胞", "器官", "機械", "建物"],
      correctAnswer: "細胞"
    },
    {
      id: 154,
      question: "such as",
      choices: ["のような", "対照的に", "とは異なり", "と共に"],
      correctAnswer: "のような"
    },
    {
      id: 155,
      question: "complete",
      choices: ["完全な", "不完全な", "部分的な", "初期の"],
      correctAnswer: "完全な"
    },
    {
      id: 156,
      question: "annually",
      choices: ["毎年の", "毎月の", "毎週の", "一度きりの"],
      correctAnswer: "毎年の"
    },
    {
      id: 157,
      question: "psychologist",
      choices: ["心理学者", "生物学者", "化学者", "物理学者"],
      correctAnswer: "心理学者"
    },
    {
      id: 158,
      question: "invest in",
      choices: ["に投資する", "から引き出す", "を貯蓄する", "を隠す"],
      correctAnswer: "に投資する"
    },
    {
      id: 159,
      question: "demand",
      choices: ["要求", "提供", "回答", "無視"],
      correctAnswer: "要求"
    },
    {
      id: 160,
      question: "respond",
      choices: ["反応する", "拒否する", "逃げる", "攻撃する"],
      correctAnswer: "反応する"
    },
    {
      id: 161,
      question: "valuable",
      choices: ["貴重な", "価値のない", "平凡な", "普通の"],
      correctAnswer: "貴重な"
    },
    {
      id: 162,
      question: "witness",
      choices: ["目撃者", "関係者", "被害者", "加害者"],
      correctAnswer: "目撃者"
    },
    {
      id: 163,
      question: "poverty",
      choices: ["貧困", "富", "中流", "裕福"],
      correctAnswer: "貧困"
    },
    {
      id: 164,
      question: "embarrass",
      choices: ["を恥ずかしがらせる", "を誇らしく思わせる", "を励ます", "を怒らせる"],
      correctAnswer: "を恥ずかしがらせる"
    },
    {
      id: 165,
      question: "enlarge",
      choices: ["を拡大する", "を縮小する", "を保持する", "を削減する"],
      correctAnswer: "を拡大する"
    },
    {
      id: 166,
      question: "ingredient",
      choices: ["材料", "製品", "廃棄物", "工具"],
      correctAnswer: "材料"
    },
    {
      id: 167,
      question: "overall",
      choices: ["全体的な", "一部の", "特定の", "個別の"],
      correctAnswer: "全体的な"
    },
    {
      id: 168,
      question: "spend",
      choices: ["を費やす", "を貯蓄する", "を隠す", "を拒否する"],
      correctAnswer: "を費やす"
    },
    {
      id: 169,
      question: "purchase",
      choices: ["を購入する", "を売却する", "を貸し出す", "を交換する"],
      correctAnswer: "を購入する"
    },
    {
      id: 170,
      question: "brilliant",
      choices: ["優れた", "平凡な", "劣った", "悪い"],
      correctAnswer: "優れた"
    },
{    
  id: 171,    
  question: "revolution",    
  choices: ["革命", "進化", "停滞", "回帰"],
  correctAnswer: "革命"
},
{
  id: 172,
  question: "in charge of",
  choices: ["の担当をして", "から遠ざかって", "に対して反対して", "に依存して"],
  correctAnswer: "の担当をして"
},
{
  id: 173,
  question: "previously",
  choices: ["以前は", "将来的に", "現在", "同時に"],
  correctAnswer: "以前は"
},
{
  id: 174,
  question: "feature",
  choices: ["特徴", "問題", "解決策", "障害"],
  correctAnswer: "特徴"
},
{
  id: 175,
  question: "excuse",
  choices: ["言い訳", "認証", "批判", "賞賛"],
  correctAnswer: "言い訳"
},
{
  id: 176,
  question: "rely on",
  choices: ["に頼る", "を避ける", "を攻撃する", "を無視する"],
  correctAnswer: "に頼る"
},
{
  id: 177,
  question: "vote for",
  choices: ["に投票する", "を拒否する", "に反対する", "を無視する"],
  correctAnswer: "に投票する"
},
{
  id: 178,
  question: "decrease",
  choices: ["減少する", "増加する", "維持する", "再評価する"],
  correctAnswer: "減少する"
},
{
  id: 179,
  question: "frequent",
  choices: ["頻繁な", "稀な", "一時的な", "恒久的な"],
  correctAnswer: "頻繁な"
},
{
  id: 180,
  question: "theory",
  choices: ["理論", "実践", "事例", "伝説"],
  correctAnswer: "理論"
},

    {
      id: 181,
      question: "gravity",
      choices: ["重力", "軽さ", "浮力", "磁力"],
      correctAnswer: "重力"
    },
    {
      id: 182,
      question: "translate",
      choices: ["を翻訳する", "を創造する", "を破壊する", "を無視する"],
      correctAnswer: "を翻訳する"
    },
    {
      id: 183,
      question: "equipment",
      choices: ["装置", "障害物", "手段", "隠れ場所"],
      correctAnswer: "装置"
    },
    {
      id: 184,
      question: "rare",
      choices: ["まれな", "一般的な", "普及している", "過剰な"],
      correctAnswer: "まれな"
    },
    {
      id: 185,
      question: "decide",
      choices: ["決心する", "躊躇する", "拒否する", "逃げる"],
      correctAnswer: "決心する"
    },
    {
      id: 186,
      question: "bank account",
      choices: ["銀行口座", "財布", "現金", "投資"],
      correctAnswer: "銀行口座"
    },
    {
      id: 187,
      question: "amount",
      choices: ["量", "種類", "形", "質"],
      correctAnswer: "量"
    },
    {
      id: 188,
      question: "constant",
      choices: ["絶え間ない", "変動する", "一時的な", "断続的な"],
      correctAnswer: "絶え間ない"
    },
    {
      id: 189,
      question: "efficient",
      choices: ["効率的な", "非効率的な", "遅い", "手間のかかる"],
      correctAnswer: "効率的な"
    },
    {
      id: 190,
      question: "available",
      choices: ["利用できる", "利用不可の", "売り切れの", "隠された"],
      correctAnswer: "利用できる"
    },

  {
    id: 191,
    question: "particular",
    choices: ["特定の", "あいまいな", "全般的な", "無関心な"],
    correctAnswer: "特定の"
  },
  {
    id: 192,
    question: "locate",
    choices: ["見つける", "紛失する", "隠す", "忘れる"],
    correctAnswer: "見つける"
  },
  {
    id: 193,
    question: "recommendation",
    choices: ["推薦", "拒否", "批判", "無視"],
    correctAnswer: "推薦"
  },
  {
    id: 194,
    question: "apply to",
    choices: ["に適用する", "を除外する", "を避ける", "を攻撃する"],
    correctAnswer: "に適用する"
  },
  {
    id: 195,
    question: "politely",
    choices: ["丁寧に", "無礼に", "急いで", "遅れて"],
    correctAnswer: "丁寧に"
  },
  {
    id: 196,
    question: "accidentally",
    choices: ["誤って", "意図的に", "計画的に", "注意深く"],
    correctAnswer: "誤って"
  },
  {
    id: 197,
    question: "satisfy",
    choices: ["を満足させる", "を失望させる", "を怒らせる", "を混乱させる"],
    correctAnswer: "を満足させる"
  },
  {
    id: 198,
    question: "appointment",
    choices: ["予定", "キャンセル", "遅延", "断念"],
    correctAnswer: "予定"
  },
  {
    id: 199,
    question: "chemical",
    choices: ["化学物質", "自然物", "生物学的物質", "物理的現象"],
    correctAnswer: "化学物質"
  },
  {
    id: 200,
    question: "attach",
    choices: ["を貼り付ける", "を剥がす", "を破壊する", "を無視する"],
    correctAnswer: "を貼り付ける"
  },

  {
  id: 201,
  question: "permit",
  choices: ["を許可する", "を禁止する", "を拒否する", "を疑う"],
  correctAnswer: "を許可する"
  },
  {
  id: 202,
  question: "prevent",
  choices: ["を妨げる", "を促進する", "を支持する", "を応援する"],
  correctAnswer: "を妨げる"
  },
  {
  id: 203,
  question: "increase",
  choices: ["を増やす", "を減らす", "を固定する", "を無視する"],
  correctAnswer: "を増やす"
  },
  {
  id: 204,
  question: "luxury",
  choices: ["贅沢", "簡素", "必需品", "貧乏"],
  correctAnswer: "贅沢"
  },
  {
  id: 205,
  question: "decade",
  choices: ["10年間", "1年間", "100年間", "1ヶ月間"],
  correctAnswer: "10年間"
  },
  {
  id: 206,
  question: "enormous",
  choices: ["非常に大きい", "非常に小さい", "平均的な", "わずかな"],
  correctAnswer: "非常に大きい"
  },
  {
  id: 207,
  question: "replacement",
  choices: ["置換", "保持", "損失", "回復"],
  correctAnswer: "置換"
  },
  {
  id: 208,
  question: "in touch",
  choices: ["連絡中", "遠ざかって", "断絶して", "無関心で"],
  correctAnswer: "連絡中"
  },
  {
  id: 209,
  question: "confuse",
  choices: ["を混乱させる", "を明確にする", "を強化する", "を回避する"],
  correctAnswer: "を混乱させる"
  },
  {
  id: 210,
  question: "produce",
  choices: ["を生産する", "を消費する", "を売買する", "を廃棄する"],
  correctAnswer: "を生産する"
},

    {
    id: 211,
    question: "economy",
    choices: ["経済", "浪費", "豪華", "不景気"],
    correctAnswer: "経済"
    },
    {
    id: 212,
    question: "celebrate",
    choices: ["祝う", "悲しむ", "無視する", "批判する"],
    correctAnswer: "祝う"
    },
    {
    id: 213,
    question: "cope with",
    choices: ["に対処する", "逃げる", "依存する", "攻撃する"],
    correctAnswer: "に対処する"
    },
    {
    id: 214,
    question: "imitate",
    choices: ["模倣する", "創造する", "破壊する", "否定する"],
    correctAnswer: "模倣する"
    },
    {
    id: 215,
    question: "assignment",
    choices: ["割り当て", "回避", "集中", "放棄"],
    correctAnswer: "割り当て"
    },
    {
    id: 216,
    question: "certainly",
    choices: ["確かに", "おそらく", "決して", "まれに"],
    correctAnswer: "確かに"
    },
    {
    id: 217,
    question: "behave",
    choices: ["振る舞う", "怠る", "拒否する", "怠ける"],
    correctAnswer: "振る舞う"
    },
    {
    id: 218,
    question: "instrument",
    choices: ["楽器", "道具", "障害物", "機械"],
    correctAnswer: "楽器"
    },
    {
    id: 219,
    question: "temporary",
    choices: ["一時的な", "永続的な", "定期的な", "不変の"],
    correctAnswer: "一時的な"
    },
    {
    id: 220,
    question: "capable of",
    choices: ["ができる", "無能で", "関心がない", "反対して"],
    correctAnswer: "ができる"
  },

    {
    id: 221,
    question: "arrange",
    choices: ["整える", "乱す", "破壊する", "無視する"],
    correctAnswer: "整える"
    },
    {
    id: 222,
    question: "occasion",
    choices: ["特定の時", "日常", "無関係な時間", "永遠"],
    correctAnswer: "特定の時"
    },
    {
    id: 223,
    question: "take after",
    choices: ["に似る", "避ける", "超える", "無視する"],
    correctAnswer: "に似る"
    },
    {
    id: 224,
    question: "guilty of",
    choices: ["罪を犯して", "無罪の", "関与していない", "知らない"],
    correctAnswer: "罪を犯して"
    },
    {
    id: 225,
    question: "work out",
    choices: ["練習する", "諦める", "拒否する", "回避する"],
    correctAnswer: "練習する"
    },
    {
    id: 226,
    question: "promote",
    choices: ["を促進する", "を妨げる", "を禁止する", "を忘れる"],
    correctAnswer: "を促進する"
    },
    {
    id: 227,
    question: "electricity",
    choices: ["電力", "ガス", "水", "風力"],
    correctAnswer: "電力"
    },
    {
    id: 228,
    question: "composer",
    choices: ["作曲家", "画家", "彫刻家", "作家"],
    correctAnswer: "作曲家"
    },
    {
    id: 229,
    question: "creature",
    choices: ["生き物", "無生物", "機械", "幻想"],
    correctAnswer: "生き物"
    },
    {
    id: 230,
    question: "substance",
    choices: ["物質", "理論", "空想", "感情"],
    correctAnswer: "物質"
  },

    {
    id: 231,
    question: "graduate",
    choices: ["を卒業する", "を開始する", "を中断する", "を継続する"],
    correctAnswer: "を卒業する"
    },
    {
    id: 232,
    question: "furniture",
    choices: ["家具", "食器", "衣服", "装飾品"],
    correctAnswer: "家具"
    },
    {
    id: 233,
    question: "medicine",
    choices: ["薬", "食物", "毒", "飲料"],
    correctAnswer: "薬"
    },
    {
    id: 234,
    question: "at last",
    choices: ["ついに", "最初に", "たまに", "ほとんどない"],
    correctAnswer: "ついに"
    },
    {
    id: 235,
    question: "attitude",
    choices: ["態度", "知識", "技術", "理論"],
    correctAnswer: "態度"
    },
    {
    id: 236,
    question: "borrow",
    choices: ["を借りる", "を貸す", "を購入する", "を売る"],
    correctAnswer: "を借りる"
    },
    {
    id: 237,
    question: "sufficient",
    choices: ["十分な", "不十分な", "過剰な", "最小限の"],
    correctAnswer: "十分な"
    },
    {
    id: 238,
    question: "hear from",
    choices: ["から便りがある", "を無視する", "に反対する", "を批判する"],
    correctAnswer: "から便りがある"
    },
    {
    id: 239,
    question: "directly",
    choices: ["直接", "間接的に", "遅れて", "早く"],
    correctAnswer: "直接"
    },
    {
    id: 240,
    question: "historic",
    choices: ["由緒のある", "現代的な", "忘れられた", "未来の"],
    correctAnswer: "由緒のある"
  },

  {
  id: 241,
  question: "barely",
  choices: ["かろうじて", "容易に", "明確に", "頻繁に"],
  correctAnswer: "かろうじて"
  },
  {
  id: 242,
  question: "delete",
  choices: ["を削除する", "を追加する", "を保存する", "を無視する"],
  correctAnswer: "を削除する"
  },
  {
  id: 243,
  question: "urgent",
  choices: ["緊急の", "穏やかな", "遅延可能な", "無関心な"],
  correctAnswer: "緊急の"
  },
  {
  id: 244,
  question: "generous",
  choices: ["気前のよい", "けちな", "冷淡な", "無関心な"],
  correctAnswer: "気前のよい"
  },
  {
  id: 245,
  question: "cruel",
  choices: ["残酷な", "優しい", "寛容な", "愉快な"],
  correctAnswer: "残酷な"
  },
  {
  id: 246,
  question: "celebration",
  choices: ["お祝い", "悲しみ", "喪", "無関心"],
  correctAnswer: "お祝い"
  },
  {
  id: 247,
  question: "reflection",
  choices: ["反響", "直接的な", "無関係な", "無視された"],
  correctAnswer: "反響"
  },
  {
  id: 248,
  question: "concept",
  choices: ["概念", "具体物", "無視", "拒絶"],
  correctAnswer: "概念"
  },
  {
  id: 249,
  question: "whisper",
  choices: ["ささやく", "叫ぶ", "無視する", "公に話す"],
  correctAnswer: "ささやく"
  },
  {
  id: 250,
  question: "deposit",
  choices: ["お金を預ける", "引き出す", "浪費する", "盗む"],
  correctAnswer: "お金を預ける"
},

    {
    id: 251,
    question: "apology",
    choices: ["謝罪", "賞賛", "非難", "承認"],
    correctAnswer: "謝罪"
    },
    {
    id: 252,
    question: "deceive",
    choices: ["を欺く", "を助ける", "を指導する", "を保護する"],
    correctAnswer: "を欺く"
    },
    {
    id: 253,
    question: "establish",
    choices: ["を設立する", "を解体する", "を無視する", "を軽視する"],
    correctAnswer: "を設立する"
    },
    {
    id: 254,
    question: "endure",
    choices: ["を我慢する", "を放棄する", "を追求する", "を拒絶する"],
    correctAnswer: "を我慢する"
    },
    {
    id: 255,
    question: "dispose",
    choices: ["廃棄", "保管", "購入", "借用"],
    correctAnswer: "廃棄"
    },
    {
    id: 256,
    question: "statistics",
    choices: ["統計", "予測", "仮説", "推測"],
    correctAnswer: "統計"
    },
    {
    id: 257,
    question: "compromise",
    choices: ["妥協", "抗議", "攻撃", "回避"],
    correctAnswer: "妥協"
    },
    {
    id: 258,
    question: "terminal",
    choices: ["終りの", "始まりの", "恒常的な", "一時的な"],
    correctAnswer: "終りの"
    },
    {
    id: 259,
    question: "formation",
    choices: ["形成", "解体", "無視", "放棄"],
    correctAnswer: "形成"
    },
    {
    id: 260,
    question: "envelope",
    choices: ["封筒", "箱", "容器", "袋"],
    correctAnswer: "封筒"
  },

  {
  id: 261,
  question: "quarrel",
  choices: ["喧嘩", "協力", "合意", "議論"],
  correctAnswer: "喧嘩"
  },
  {
  id: 262,
  question: "handle",
  choices: ["を手で扱う", "を放置する", "を拒否する", "を隠す"],
  correctAnswer: "を手で扱う"
  },
  {
  id: 263,
  question: "condition",
  choices: ["状態", "解放", "制限", "無関係"],
  correctAnswer: "状態"
  },
  {
  id: 264,
  question: "punish",
  choices: ["を罰する", "を賞賛する", "を保護する", "を無視する"],
  correctAnswer: "を罰する"
  },
  {
  id: 265,
  question: "from time to time",
  choices: ["時々", "常に", "決して", "一度も"],
  correctAnswer: "時々"
  },
  {
  id: 266,
  question: "in demand",
  choices: ["需要のある", "過剰供給の", "利用不可の", "時代遅れの"],
  correctAnswer: "需要のある"
  },
  {
  id: 267,
  question: "stand out",
  choices: ["目立つ", "隠れる", "後退する", "同化する"],
  correctAnswer: "目立つ"
  },
  {
  id: 268,
  question: "in the meantime",
  choices: ["とりあえず", "最終的に", "初めに", "遅れて"],
  correctAnswer: "とりあえず"
  },
  {
  id: 269,
  question: "to some extent",
  choices: ["いくらか", "全く", "絶対に", "微塵も"],
  correctAnswer: "いくらか"
  },
  {
  id: 270,
  question: "at any cost",
  choices: ["どんな犠牲を払っても", "無料で", "安価で", "努力せずに"],
  correctAnswer: "どんな犠牲を払っても"
},

    {
    id: 271,
    question: "on the contrary",
    choices: ["その反対で", "同意して", "加えて", "類似して"],
    correctAnswer: "その反対で"
    },
    {
    id: 272,
    question: "lose face",
    choices: ["面子を失う", "賞賛される", "名誉を得る", "人気を博す"],
    correctAnswer: "面子を失う"
    },
    {
    id: 273,
    question: "answer for",
    choices: ["責任を負う", "拒否する", "支持する", "逃れる"],
    correctAnswer: "責任を負う"
    },
    {
    id: 274,
    question: "insist on",
    choices: ["するように強く求める", "諦める", "避ける", "無視する"],
    correctAnswer: "するように強く求める"
    },
    {
    id: 275,
    question: "despite",
    choices: ["にも関わらず", "のために", "おかげで", "に応じて"],
    correctAnswer: "にも関わらず"
    },
    {
    id: 276,
    question: "worth",
    choices: ["の価値がある", "価値がない", "関連がない", "反対の"],
    correctAnswer: "の価値がある"
    },
    {
    id: 277,
    question: "not always",
    choices: ["必ずしもではない", "常に", "絶対に", "一貫して"],
    correctAnswer: "必ずしもではない"
    },
    {
    id: 278,
    question: "spread",
    choices: ["を広げる", "を集める", "を削減する", "を避ける"],
    correctAnswer: "を広げる"
    },
    {
    id: 279,
    question: "at that time",
    choices: ["あの時は", "これから", "以前は", "将来に"],
    correctAnswer: "あの時は"
    },
    {
    id: 280,
    question: "in common",
    choices: ["共通して", "個別に", "特別に", "異なって"],
    correctAnswer: "共通して"
  },

      {
      id: 281,
      question: "be affected by",
      choices: ["の影響を受ける", "影響を与える", "無関係である", "克服する"],
      correctAnswer: "の影響を受ける"
      },
      {
      id: 282,
      question: "luckily",
      choices: ["幸いなことに", "不幸にも", "予想通りに", "たまたま"],
      correctAnswer: "幸いなことに"
      },
      {
      id: 283,
      question: "not yet",
      choices: ["まだ", "もう", "すでに", "絶対に"],
      correctAnswer: "まだ"
      },
      {
      id: 284,
      question: "in response",
      choices: ["に応じて", "無視して", "反対して", "先行して"],
      correctAnswer: "に応じて"
      },
      {
      id: 285,
      question: "have effects on",
      choices: ["に影響を与える", "から影響を受ける", "と無関係である", "を支持する"],
      correctAnswer: "に影響を与える"
      },
      {
      id: 286,
      question: "taste",
      choices: ["味", "色", "形", "質感"],
      correctAnswer: "味"
      },
      {
      id: 287,
      question: "in advance",
      choices: ["前もって", "遅れて", "同時に", "突然"],
      correctAnswer: "前もって"
      },
      {
      id: 288,
      question: "confident",
      choices: ["自信のある", "不安な", "恐れて", "迷っている"],
      correctAnswer: "自信のある"
      },
      {
      id: 289,
      question: "one day",
      choices: ["ある日", "毎日", "今日", "昨日"],
      correctAnswer: "ある日"
      },
      {
      id: 290,
      question: "five senses",
      choices: ["五感", "六感", "四元素", "三原色"],
      correctAnswer: "五感"
    },

        {
        id: 291,
        question: "sight",
        choices: ["見ること", "聞くこと", "触ること", "味わうこと"],
        correctAnswer: "見ること"
        },
        {
        id: 292,
        question: "electric",
        choices: ["電気の", "ガスの", "水力の", "風力の"],
        correctAnswer: "電気の"
        },
        {
        id: 293,
        question: "receive",
        choices: ["を受け取る", "を送る", "を拒否する", "を無視する"],
        correctAnswer: "を受け取る"
        },
        {
        id: 294,
        question: "ankle",
        choices: ["足首", "手首", "首", "膝"],
        correctAnswer: "足首"
        },
        {
        id: 295,
        question: "related to",
        choices: ["に関連する", "から離れる", "に対立する", "とは無関係の"],
        correctAnswer: "に関連する"
        },
        {
        id: 296,
        question: "fear",
        choices: ["恐れ", "喜び", "無関心", "希望"],
        correctAnswer: "恐れ"
        },
        {
        id: 297,
        question: "active",
        choices: ["活動的な", "受動的な", "静止した", "退屈な"],
        correctAnswer: "活動的な"
        },
        {
        id: 298,
        question: "lesser",
        choices: ["より少ない", "より多い", "同等の", "最大の"],
        correctAnswer: "より少ない"
        },
        {
      id: 299,
      question: "degree",
      choices: ["程度", "単位", "方向", "位置"],
      correctAnswer: "程度"
      },
      {      
      id: 300,
      question: "effect",
      choices: ["効果", "原因", "手段", "目的"],
      correctAnswer: "効果"
    },

  {
  id: 301,
  question: "cause",
  choices: ["原因となる", "結果となる", "解決する", "課題となる"],
  correctAnswer: "原因となる"
  },
  {
  id: 302,
  question: "particularly",
  choices: ["特に", "一般的に", "部分的に", "完全に"],
  correctAnswer: "特に"
  },
  {
  id: 303,
  question: "suffer",
  choices: ["苦しむ", "回復する", "享受する", "無視する"],
  correctAnswer: "苦しむ"
  },
  {
  id: 304,
  question: "immune",
  choices: ["免疫のある", "感染しやすい", "影響を受ける", "敏感な"],
  correctAnswer: "免疫のある"
  },
  {
  id: 305,
  question: "disorder",
  choices: ["無秩序", "秩序", "調和", "混乱"],
  correctAnswer: "無秩序"
  },
  {
  id: 306,
  question: "mental",
  choices: ["精神の", "心の", "身体の", "肉体の"],
  correctAnswer: "精神の"
  },
  {
  id: 307,
  question: "physical",
  choices: ["身体の", "心の", "精神の", "感情の"],
  correctAnswer: "身体の"
  },
  {
  id: 308,
  question: "intend to",
  choices: ["するつもり", "望む", "計画する", "避ける"],
  correctAnswer: "するつもり"
  },
  {
  id: 309,
  question: "at present",
  choices: ["現在は", "過去は", "未来は", "たまには"],
  correctAnswer: "現在は"
  },
  {
  id: 310,
  question: "make a difference",
  choices: ["違いを生む", "差をつける", "変化を避ける", "一致する"],
  correctAnswer: "違いを生む"
},

  {
  id: 311,
  question: "opportunity",
  choices: ["機会", "障害", "問題", "解決"],
  correctAnswer: "機会"
  },
  {
  id: 312,
  question: "on purpose",
  choices: ["故意に", "偶然に", "急に", "頻繁に"],
  correctAnswer: "故意に"
  },
  {
  id: 313,
  question: "exceptionally",
  choices: ["例外的に", "通常", "平均的に", "極端に"],
  correctAnswer: "例外的に"
  },
  {
  id: 314,
  question: "almost",
  choices: ["ほとんど", "全く", "時々", "完全に"],
  correctAnswer: "ほとんど"
  },
  {
  id: 315,
  question: "characteristic",
  choices: ["特有の", "共通の", "普通の", "異なる"],
  correctAnswer: "特有の"
  },
  {
  id: 316,
  question: "similar to",
  choices: ["似ている", "対照的", "関係ない", "独立している"],
  correctAnswer: "似ている"
  },
  {
  id: 317,
  question: "as to",
  choices: ["に関して", "を除いて", "以前は", "次に"],
  correctAnswer: "に関して"
  },
  {
  id: 318,
  question: "civilization",
  choices: ["文明", "野蛮", "自然", "混沌"],
  correctAnswer: "文明"
  },
  {
  id: 319,
  question: "represent",
  choices: ["を表す", "を隠す", "を否定する", "を避ける"],
  correctAnswer: "を表す"
  },
  {
  id: 320,
  question: "collapse",
  choices: ["崩壊する", "建設する", "維持する", "拡大する"],
  correctAnswer: "崩壊する"
},

  {
  id: 321,
  question: "insult",
  choices: ["侮辱する", "賞賛する", "無視する", "励ます"],
  correctAnswer: "侮辱する"
  },
  {
  id: 322,
  question: "mixture",
  choices: ["混合物", "純粋物", "元素", "化合物"],
  correctAnswer: "混合物"
  },
  {
  id: 323,
  question: "isolated",
  choices: ["孤立した", "社交的な", "集団の", "統合された"],
  correctAnswer: "孤立した"
  },
  {
  id: 324,
  question: "punctual",
  choices: ["時間通りの", "遅れがちの", "不規則な", "予測不可能な"],
  correctAnswer: "時間通りの"
  },
  {
  id: 325,
  question: "responsible",
  choices: ["責任がある", "無責任な", "従属的な", "無関心な"],
  correctAnswer: "責任がある"
  },
  {
  id: 326,
  question: "frightened",
  choices: ["怖かった", "楽しんだ", "落ち着いた", "興奮した"],
  correctAnswer: "怖かった"
  },
  {
  id: 327,
  question: "guarantee",
  choices: ["保証する", "危険にさらす", "疑問を投げかける", "拒否する"],
  correctAnswer: "保証する"
  },
  {
  id: 328,
  question: "blame",
  choices: ["非難する", "褒める", "無視する", "擁護する"],
  correctAnswer: "非難する"
  },
  {
  id: 329,
  question: "anniversary",
  choices: ["記念日", "日常", "出発点", "終点"],
  correctAnswer: "記念日"
  },
  {
  id: 330,
  question: "violate",
  choices: ["違反する", "遵守する", "支持する", "保護する"],
  correctAnswer: "違反する"
},

  {
  id: 331,
  question: "delay",
  choices: ["遅らせる", "加速する", "維持する", "取消す"],
  correctAnswer: "遅らせる"
  },
  {
  id: 332,
  question: "surround",
  choices: ["取り囲む", "離れる", "透過する", "超える"],
  correctAnswer: "取り囲む"
  },
  {
  id: 333,
  question: "immigrate",
  choices: ["移住する", "脱出する", "旅行する", "滞在する"],
  correctAnswer: "移住する"
  },
  {
  id: 334,
  question: "correct",
  choices: ["訂正する", "誤る", "無視する", "確認する"],
  correctAnswer: "訂正する"
  },
  {
  id: 335,
  question: "landscape",
  choices: ["風景", "都市", "室内", "抽象"],
  correctAnswer: "風景"
  },
  {
  id: 336,
  question: "instinct",
  choices: ["直感", "理論", "分析", "計画"],
  correctAnswer: "直感"
  },
  {
  id: 337,
  question: "policy",
  choices: ["政策", "提案", "感想", "報告"],
  correctAnswer: "政策"
  },
  {
  id: 338,
  question: "obviously",
  choices: ["明らかに", "隠れて", "微妙に", "偶然に"],
  correctAnswer: "明らかに"
  },
  {
  id: 339,
  question: "strangely",
  choices: ["不思議に", "通常", "積極的に", "消極的に"],
  correctAnswer: "不思議に"
  },
  {
  id: 340,
  question: "chase",
  choices: ["追跡する", "逃げる", "観察する", "放置する"],
  correctAnswer: "追跡する"
},

  {
  id: 341,
  question: "pour",
  choices: ["注ぐ", "乾かす", "減る", "固まる"],
  correctAnswer: "注ぐ"
  },
  {
  id: 342,
  question: "at one time",
  choices: ["一度に", "順番に", "たまに", "常に"],
  correctAnswer: "一度に"
  },
  {
  id: 343,
  question: "all the way",
  choices: ["はるばる", "すぐに", "ほとんど", "部分的に"],
  correctAnswer: "はるばる"
  },
  {
  id: 344,
  question: "show up",
  choices: ["現れる", "消える", "下がる", "上がる"],
  correctAnswer: "現れる"
  },
  {
  id: 345,
  question: "pull away",
  choices: ["引き離す", "接近する", "固定する", "融合する"],
  correctAnswer: "引き離す"
  },
  {
  id: 346,
  question: "try out",
  choices: ["試す", "放棄する", "保留する", "確認する"],
  correctAnswer: "試す"
  },
  {
  id: 347,
  question: "break into",
  choices: ["押し入る", "封鎖する", "閉じる", "保護する"],
  correctAnswer: "押し入る"
  },
  {
  id: 348,
  question: "call it a day",
  choices: ["終了する", "開始する", "継続する", "延期する"],
  correctAnswer: "終了する"
  },
  {
  id: 349,
  question: "be awake",
  choices: ["目覚めている", "眠っている", "混乱している", "集中している"],
  correctAnswer: "目覚めている"
  },
  {
  id: 350,
  question: "issue",
  choices: ["問題", "解決", "提案", "成功"],
  correctAnswer: "問題"
},

  {
  id: 351,
  question: "elderly",
  choices: ["年配の", "若い", "中年の", "乳児の"],
  correctAnswer: "年配の"
  },
  {
  id: 352,
  question: "brightness",
  choices: ["明るさ", "暗さ", "色彩", "透明度"],
  correctAnswer: "明るさ"
  },
  {
  id: 353,
  question: "have an effect on",
  choices: ["影響する", "無関係である", "抵抗する", "支援する"],
  correctAnswer: "影響する"
  },
  {
  id: 354,
  question: "indoor",
  choices: ["屋内の", "屋外の", "公共の", "私有の"],
  correctAnswer: "屋内の"
  },
  {
  id: 355,
  question: "senior",
  choices: ["年上の", "年下の", "同年代の", "無関係の"],
  correctAnswer: "年上の"
  },
  {
  id: 356,
  question: "natural",
  choices: ["自然の", "人工の", "異常な", "加工された"],
  correctAnswer: "自然の"
  },
  {
  id: 357,
  question: "be adjusted to",
  choices: ["調整する", "無視する", "反対する", "賛成する"],
  correctAnswer: "調整する"
  },
  {
  id: 358,
  question: "specific",
  choices: ["特定の", "曖昧な", "一般的な", "不確定の"],
  correctAnswer: "特定の"
  },
  {
  id: 359,
  question: "heart rate",
  choices: ["心拍数", "血圧", "体温", "呼吸率"],
  correctAnswer: "心拍数"
  },
  {
  id: 360,
  question: "be beneficial to",
  choices: ["有益である", "有害である", "無関係である", "敵対する"],
  correctAnswer: "有益である"
},

  {
  id: 361,
  question: "what is called",
  choices: ["いわゆる", "正式には", "具体的には", "簡単に言えば"],
  correctAnswer: "いわゆる"
  },
  {
  id: 362,
  question: "symmetry",
  choices: ["対称", "非対称", "乱雑", "一致"],
  correctAnswer: "対称"
  },
  {
  id: 363,
  question: "each other",
  choices: ["お互い", "単独で", "集団で", "相反して"],
  correctAnswer: "お互い"
  },
  {
  id: 364,
  question: "advantage",
  choices: ["有利", "不利", "中立", "不確定"],
  correctAnswer: "有利"
  },
  {
  id: 365,
  question: "knee",
  choices: ["膝", "肘", "肩", "足首"],
  correctAnswer: "膝"
  },
  {
  id: 366,
  question: "check for",
  choices: ["確認する", "無視する", "推測する", "希望する"],
  correctAnswer: "確認する"
  },
  {
  id: 367,
  question: "after all",
  choices: ["結局", "初めから", "たまたま", "一時的に"],
  correctAnswer: "結局"
  },
  {
  id: 368,
  question: "over time",
  choices: ["時間と共に", "一度に", "突然に", "短期間で"],
  correctAnswer: "時間と共に"
  },
  {
  id: 369,
  question: "What is more",
  choices: ["さらに", "しかし", "同様に", "それにもかかわらず"],
  correctAnswer: "さらに"
  },
  {
  id: 370,
  question: "for some time",
  choices: ["しばらくの間", "永遠に", "直ちに", "たまに"],
  correctAnswer: "しばらくの間"
},

  {
  id: 371,
  question: "at a time",
  choices: ["１度に", "順番に", "たびたび", "まれに"],
  correctAnswer: "１度に"
  },
  {
  id: 372,
  question: "parking lot",
  choices: ["駐車場", "公園", "遊園地", "庭園"],
  correctAnswer: "駐車場"
  },
  {
  id: 373,
  question: "all around the world",
  choices: ["世界中で", "国内で", "地域で", "特定の場所で"],
  correctAnswer: "世界中で"
  },
  {
  id: 374,
  question: "copyright",
  choices: ["著作権", "特許権", "商標権", "デザイン権"],
  correctAnswer: "著作権"
  },
  {
  id: 375,
  question: "charge",
  choices: ["請求する", "提供する", "拒否する", "確認する"],
  correctAnswer: "請求する"
  },
  {
  id: 376,
  question: "director",
  choices: ["監督", "演員", "プロデューサー", "編集者"],
  correctAnswer: "監督"
  },
  {
  id: 377,
  question: "in reality",
  choices: ["実際に", "理論上", "希望的に", "過去に"],
  correctAnswer: "実際に"
  },
  {
  id: 378,
  question: "actually",
  choices: ["実際に", "想像に", "予測に", "間違って"],
  correctAnswer: "実際に"
  },
  {
  id: 379,
  question: "compose",
  choices: ["構成する", "分解する", "除外する", "回避する"],
  correctAnswer: "構成する"
  },
  {
  id: 380,
  question: "greet",
  choices: ["出迎える", "見送る", "無視する", "批判する"],
  correctAnswer: "出迎える"
},

  {
  id: 381,
  question: "depend on",
  choices: ["頼る", "独立する", "対立する", "合意する"],
  correctAnswer: "頼る"
  },
  {
  id: 382,
  question: "claim to do",
  choices: ["主張する", "否定する", "無視する", "検討する"],
  correctAnswer: "主張する"
  },
  {
  id: 383,
  question: "agree with",
  choices: ["賛成する", "反対する", "無関心である", "確認する"],
  correctAnswer: "賛成する"
  },
  {
  id: 384,
  question: "it is common to hear",
  choices: ["よく聞かれる", "めったに聞かれない", "全く聞かれない", "時々聞かれる"],
  correctAnswer: "よく聞かれる"
  },
  {
  id: 385,
  question: "temple",
  choices: ["お寺", "教会", "モスク", "シナゴーグ"],
  correctAnswer: "お寺"
  },
  {
  id: 386,
  question: "heritage",
  choices: ["遺産", "新規プロジェクト", "現代アート", "技術革新"],
  correctAnswer: "遺産"
  },
  {
  id: 387,
  question: "abroad",
  choices: ["外国で", "国内で", "地方で", "首都で"],
  correctAnswer: "外国で"
  },
  {
  id: 388,
  question: "population",
  choices: ["人口", "動物群", "植物群", "無生物"],
  correctAnswer: "人口"
  },
  {
  id: 389,
  question: "bring",
  choices: ["持ってくる", "持って行く", "捨てる", "隠す"],
  correctAnswer: "持ってくる"
  },
  {
  id: 390,
  question: "environmental",
  choices: ["環境の", "経済の", "政治の", "社会の"],
  correctAnswer: "環境の"
},

  {
  id: 391,
  question: "throw away",
  choices: ["廃棄する", "保管する", "修理する", "回収する"],
  correctAnswer: "廃棄する"
  },
  {
  id: 392,
  question: "garbage",
  choices: ["生ゴミ", "リサイクル品", "宝物", "新品"],
  correctAnswer: "生ゴミ"
  },
  {
  id: 393,
  question: "come up with",
  choices: ["思いつく", "諦める", "忘れる", "避ける"],
  correctAnswer: "思いつく"
  },
  {
  id: 394,
  question: "environmentally",
  choices: ["環境的に", "経済的に", "政治的に", "文化的に"],
  correctAnswer: "環境的に"
  },
  {
  id: 395,
  question: "council",
  choices: ["議会", "委員会", "協会", "団体"],
  correctAnswer: "議会"
  },
  {
  id: 396,
  question: "carry out",
  choices: ["実行する", "中止する", "破棄する", "検討する"],
  correctAnswer: "実行する"
  },
  {
  id: 397,
  question: "fuel",
  choices: ["燃料", "水", "食料", "空気"],
  correctAnswer: "燃料"
  },
  {
  id: 398,
  question: "process",
  choices: ["加工処理する", "破壊する", "放置する", "輸出する"],
  correctAnswer: "加工処理する"
  },
  {
  id: 399,
  question: "up to",
  choices: ["まで", "以下の", "以上の", "～を除く"],
  correctAnswer: "まで"
  },
  {
  id: 400,
  question: "turn into",
  choices: ["変わる", "進化する", "退化する", "停止する"],
  correctAnswer: "変わる"
},

  {
  id: 401,
  question: "cut down on",
  choices: ["節約する", "増やす", "無視する", "拡大する"],
  correctAnswer: "節約する"
  },
  {
  id: 402,
  question: "fossil fuel",
  choices: ["化石燃料", "再生可能エネルギー", "太陽光発電", "風力エネルギー"],
  correctAnswer: "化石燃料"
  },
  {
  id: 403,
  question: "ban",
  choices: ["禁止する", "許可する", "奨励する", "無視する"],
  correctAnswer: "禁止する"
  },
  {
  id: 404,
  question: "plastic bag",
  choices: ["プラスチック袋", "紙袋", "布製バッグ", "エコバッグ"],
  correctAnswer: "プラスチック袋"
  },
  {
  id: 405,
  question: "harm",
  choices: ["害する", "保護する", "治療する", "強化する"],
  correctAnswer: "害する"
  },
  {
  id: 406,
  question: "unbelievable",
  choices: ["信じられない", "信頼できる", "可能性が高い", "当然の"],
  correctAnswer: "信じられない"
  },
  {
  id: 407,
  question: "innocent",
  choices: ["無罪の", "有罪の", "疑わしい", "不明な"],
  correctAnswer: "無罪の"
  },
  {
  id: 408,
  question: "arrogant",
  choices: ["傲慢な", "謙虚な", "協力的な", "友好的な"],
  correctAnswer: "傲慢な"
  },
  {
  id: 409,
  question: "harbor",
  choices: ["港", "空港", "駅", "バス停"],
  correctAnswer: "港"
  },
  {
  id: 410,
  question: "temper",
  choices: ["気性", "冷静", "理性", "忍耐"],
  correctAnswer: "気性"
},

  {
  id: 411,
  question: "legend",
  choices: ["伝説", "現実", "事実", "噂"],
  correctAnswer: "伝説"
  },
  {
  id: 412,
  question: "fairly",
  choices: ["かなり", "わずかに", "全く", "決して"],
  correctAnswer: "かなり"
  },
  {
  id: 413,
  question: "vague",
  choices: ["漠然とした", "明確な", "具体的な", "詳細な"],
  correctAnswer: "漠然とした"
  },
  {
  id: 414,
  question: "harvest",
  choices: ["収穫する", "植える", "放棄する", "破壊する"],
  correctAnswer: "収穫する"
  },
  {
  id: 415,
  question: "assistance",
  choices: ["支援", "妨害", "競争", "無視"],
  correctAnswer: "支援"
  },
  {
  id: 416,
  question: "conflict",
  choices: ["対立", "協力", "和解", "統一"],
  correctAnswer: "対立"
  },
  {
  id: 417,
  question: "planet",
  choices: ["惑星", "恒星", "小惑星", "彗星"],
  correctAnswer: "惑星"
  },
  {
  id: 418,
  question: "ruin",
  choices: ["台無しにする", "修復する", "保護する", "強化する"],
  correctAnswer: "台無しにする"
  },
  {
  id: 419,
  question: "launch",
  choices: ["発売する", "回収する", "保存する", "廃棄する"],
  correctAnswer: "発売する"
  },
  {
  id: 420,
  question: "withdraw",
  choices: ["撤回する", "進出する", "接近する", "維持する"],
  correctAnswer: "撤回する"
},

  {
  id: 421,
  question: "refuse",
  choices: ["拒否する", "受け入れる", "検討する", "無視する"],
  correctAnswer: "拒否する"
  },
  {
  id: 422,
  question: "embrace",
  choices: ["抱きしめる", "拒絶する", "無視する", "観察する"],
  correctAnswer: "抱きしめる"
  },
  {
  id: 423,
  question: "overtake",
  choices: ["追い越す", "遅れる", "停止する", "追跡する"],
  correctAnswer: "追い越す"
  },
  {
  id: 424,
  question: "restrict",
  choices: ["制限する", "拡大する", "促進する", "解放する"],
  correctAnswer: "制限する"
  },
  {
  id: 425,
  question: "instruction",
  choices: ["指示", "提案", "批判", "無視"],
  correctAnswer: "指示"
  },
  {
  id: 426,
  question: "stock",
  choices: ["在庫に持つ", "廃棄する", "拒絶する", "購入する"],
  correctAnswer: "在庫に持つ"
  },
  {
  id: 427,
  question: "competitor",
  choices: ["競争相手", "協力者", "顧客", "仲間"],
  correctAnswer: "競争相手"
  },
  {
  id: 428,
  question: "spectator",
  choices: ["観客", "参加者", "主催者", "審判"],
  correctAnswer: "観客"
  },
  {
  id: 429,
  question: "explorer",
  choices: ["探検家", "学者", "技術者", "芸術家"],
  correctAnswer: "探検家"
  },
  {
  id: 430,
  question: "be filled with",
  choices: ["で満たされている", "から空である", "に関心がない", "に不足している"],
  correctAnswer: "で満たされている"
},

  {
  id: 431,
  question: "due to",
  choices: ["が原因で", "おかげで", "反対に", "関係なく"],
  correctAnswer: "が原因で"
  },
  {
  id: 432,
  question: "remind of",
  choices: ["思い出させる", "忘れさせる", "避けさせる", "慣れさせる"],
  correctAnswer: "思い出させる"
  },
  {
  id: 433,
  question: "concentrate on",
  choices: ["集中する", "放棄する", "軽視する", "分散する"],
  correctAnswer: "集中する"
  },
  {
  id: 434,
  question: "laugh at",
  choices: ["笑う", "泣く", "叫ぶ", "沈黙する"],
  correctAnswer: "笑う"
  },
  {
  id: 435,
  question: "well off",
  choices: ["裕福な", "貧乏な", "普通の", "困窮している"],
  correctAnswer: "裕福な"
  },
  {
  id: 436,
  question: "straight on",
  choices: ["まっすぐに", "曲がって", "逆方向に", "一時停止して"],
  correctAnswer: "まっすぐに"
  },
  {
  id: 437,
  question: "far off",
  choices: ["はるか遠くの", "すぐ近くの", "直接関係ない", "深く関わる"],
  correctAnswer: "はるか遠くの"
  },
  {
  id: 438,
  question: "equal",
  choices: ["等しい", "劣る", "優れる", "異なる"],
  correctAnswer: "等しい"
  },
  {
  id: 439,
  question: "drop off",
  choices: ["落ちる", "登る", "増加する", "安定する"],
  correctAnswer: "落ちる"
  },
  {
  id: 440,
  question: "leave out",
  choices: ["除外する", "含める", "強調する", "軽視する"],
  correctAnswer: "除外する"
},

  {
  id: 441,
  question: "the other",
  choices: ["もう一方の", "同じ", "最初の", "最後の"],
  correctAnswer: "もう一方の"
  },
  {
  id: 442,
  question: "solve",
  choices: ["解決する", "悪化させる", "無視する", "確認する"],
  correctAnswer: "解決する"
  },
  {
  id: 443,
  question: "be concerned with",
  choices: ["関連している", "無関係である", "反対している", "同意している"],
  correctAnswer: "関連している"
  },
  {
  id: 444,
  question: "childhood",
  choices: ["子供時代", "青春期", "成人期", "老年期"],
  correctAnswer: "子供時代"
  },
  {
  id: 445,
  question: "sustainable",
  choices: ["持続可能な", "一時的な", "非現実的な", "固定的な"],
  correctAnswer: "持続可能な"
  },
  {
  id: 446,
  question: "leftover",
  choices: ["残り物", "新鮮な", "使用済み", "未使用の"],
  correctAnswer: "残り物"
  },
  {
  id: 447,
  question: "at most",
  choices: ["多くとも", "少なくとも", "常に", "決して"],
  correctAnswer: "多くとも"
  },
  {
  id: 448,
  question: "because of",
  choices: ["のために", "にもかかわらず", "以前に", "を除いて"],
  correctAnswer: "のために"
  },
  {
  id: 449,
  question: "hundreds of",
  choices: ["何百もの", "数えるほどの", "一握りの", "数千の"],
  correctAnswer: "何百もの"
  },
  {
  id: 450,
  question: "efficiency",
  choices: ["効率", "無駄", "効果", "力"],
  correctAnswer: "効率"
},

  {
  id: 451,
  question: "arrangement",
  choices: ["配置", "解体", "混乱", "一致"],
  correctAnswer: "配置"
  },
  {
  id: 452,
  question: "treat",
  choices: ["扱う", "無視する", "悪化させる", "評価する"],
  correctAnswer: "扱う"
  },
  {
  id: 453,
  question: "muscle",
  choices: ["筋肉", "骨", "脂肪", "皮膚"],
  correctAnswer: "筋肉"
  },
  {
  id: 454,
  question: "aspect",
  choices: ["局面", "結論", "開始", "終了"],
  correctAnswer: "局面"
  },
  {
  id: 455,
  question: "content",
  choices: ["内容", "形式", "要約", "批評"],
  correctAnswer: "内容"
  },
  {
  id: 456,
  question: "prescription",
  choices: ["処方", "診断", "予防", "治療"],
  correctAnswer: "処方"
  },
  {
  id: 457,
  question: "anxious",
  choices: ["不安な", "安心した", "無関心な", "興奮した"],
  correctAnswer: "不安な"
  },
  {
  id: 458,
  question: "ancient",
  choices: ["古代の", "現代の", "未来の", "一時的な"],
  correctAnswer: "古代の"
  },
  {
  id: 459,
  question: "generously",
  choices: ["気前よく", "けちけちと", "渋々", "無関心に"],
  correctAnswer: "気前よく"
  },
  {
    id: 460,
    question: "literature",
    choices: ["文学", "科学", "歴史", "数学"],
    correctAnswer: "文学"
  },

  {
  id: 461,
  question: "do well",
  choices: ["成功する", "失敗する", "諦める", "避ける"],
  correctAnswer: "成功する"
  },
  {
  id: 462,
  question: "deadline",
  choices: ["締め切り", "開始", "中断", "継続"],
  correctAnswer: "締め切り"
  },
  {
  id: 463,
  question: "exception",
  choices: ["例外", "規則", "一般", "標準"],
  correctAnswer: "例外"
  },
  {
  id: 464,
  question: "temporarily",
  choices: ["一時的に", "永遠に", "断続的に", "継続的に"],
  correctAnswer: "一時的に"
  },
  {
  id: 465,
  question: "provide A with B",
  choices: ["AにBを提供する", "AからBを取り除く", "AとBを比較する", "AをBで置き換える"],
  correctAnswer: "AにBを提供する"
  },
  {
  id: 466,
  question: "fund",
  choices: ["資金", "負債", "損失", "利益"],
  correctAnswer: "資金"
  },
  {
  id: 467,
  question: "in the long run",
  choices: ["長期間にわたって", "直ちに", "短期間で", "時折"],
  correctAnswer: "長期間にわたって"
  },
  {
  id: 468,
  question: "accomplish",
  choices: ["成し遂げる", "放棄する", "開始する", "避ける"],
  correctAnswer: "成し遂げる"
  },
  {
  id: 469,
  question: "introduce",
  choices: ["紹介する", "隠す", "禁止する", "批判する"],
  correctAnswer: "紹介する"
  },
  {
  id: 470,
  question: "overlap",
  choices: ["重ねる", "分離する", "破棄する", "融合する"],
  correctAnswer: "重ねる"
},

  {
  id: 471,
  question: "identify",
  choices: ["識別する", "無視する", "混同する", "拒絶する"],
  correctAnswer: "識別する"
  },
  {
  id: 472,
  question: "collaboration",
  choices: ["協力", "競争", "対立", "孤立"],
  correctAnswer: "協力"
  },
  {
  id: 473,
  question: "detective",
  choices: ["探偵", "弁護士", "犯罪者", "目撃者"],
  correctAnswer: "探偵"
  },
  {
  id: 474,
  question: "democracy",
  choices: ["民主主義", "独裁制", "君主制", "共和制"],
  correctAnswer: "民主主義"
  },
  {
  id: 475,
  question: "modify",
  choices: ["変更する", "確認する", "維持する", "削除する"],
  correctAnswer: "変更する"
  },
  {
  id: 476,
  question: "stir",
  choices: ["かき混ぜる", "固める", "焼く", "冷やす"],
  correctAnswer: "かき混ぜる"
  },
  {
  id: 477,
  question: "roll",
  choices: ["転がる", "飛ぶ", "浮かぶ", "沈む"],
  correctAnswer: "転がる"
  },
  {
  id: 478,
  question: "orbit",
  choices: ["軌道", "直線", "交差点", "停止点"],
  correctAnswer: "軌道"
  },
  {
  id: 479,
  question: "frequently",
  choices: ["頻繁に", "まれに", "一度も", "常に"],
  correctAnswer: "頻繁に"
  },
  {
  id: 480,
  question: "emotionally",
  choices: ["感情的に", "理論的に", "客観的に", "冷静に"],
  correctAnswer: "感情的に"
},

  {
  id: 481,
  question: "evaluate",
  choices: ["評価する", "無視する", "軽視する", "拡張する"],
  correctAnswer: "評価する"
  },
  {
  id: 482,
  question: "defend",
  choices: ["守る", "攻撃する", "放棄する", "確認する"],
  correctAnswer: "守る"
  },
  {
  id: 483,
  question: "district",
  choices: ["地域", "中心部", "周辺部", "国外"],
  correctAnswer: "地域"
  },
  {
  id: 484,
  question: "purpose",
  choices: ["目的", "方法", "結果", "理由"],
  correctAnswer: "目的"
  },
  {
  id: 485,
  question: "prayer",
  choices: ["祈り", "賛美", "講義", "討論"],
  correctAnswer: "祈り"
  },
  {
  id: 486,
  question: "prospect",
  choices: ["見込み", "回顧", "現状", "歴史"],
  correctAnswer: "見込み"
  },
  {
  id: 487,
  question: "victim",
  choices: ["犠牲者", "加害者", "目撃者", "支援者"],
  correctAnswer: "犠牲者"
  },
  {
  id: 488,
  question: "distant",
  choices: ["遠く離れた", "近い", "直接的な", "間接的な"],
  correctAnswer: "遠く離れた"
  },
  {
  id: 489,
  question: "various",
  choices: ["様々な", "同一の", "限定された", "特定の"],
  correctAnswer: "様々な"
  },
  {
  id: 490,
  question: "visible",
  choices: ["目に見える", "目に見えない", "感じられる", "理解できる"],
  correctAnswer: "目に見える"
},

  {
  id: 491,
  question: "wrap",
  choices: ["包む", "解く", "投げる", "取り除く"],
  correctAnswer: "包む"
  },
  {
  id: 492,
  question: "dig",
  choices: ["掘る", "植える", "塗る", "燃やす"],
  correctAnswer: "掘る"
  },
  {
  id: 493,
  question: "drop by",
  choices: ["立ち寄る", "通り過ぎる", "避ける", "滞在する"],
  correctAnswer: "立ち寄る"
  },
  {
  id: 494,
  question: "take over",
  choices: ["引き継ぐ", "放棄する", "破壊する", "無視する"],
  correctAnswer: "引き継ぐ"
  },
  {
  id: 495,
  question: "angle",
  choices: ["角度", "直線", "円", "四角形"],
  correctAnswer: "角度"
  },
  {
  id: 496,
  question: "payment",
  choices: ["支払い", "受取り", "請求", "借入"],
  correctAnswer: "支払い"
  },
  {
  id: 497,
  question: "look into",
  choices: ["調べる", "見過ごす", "眺める", "閉じる"],
  correctAnswer: "調べる"
  },
  {
  id: 498,
  question: "in practice",
  choices: ["実際には", "理論上", "計画的に", "偶然に"],
  correctAnswer: "実際には"
  },
  {
  id: 499,
  question: "on schedule",
  choices: ["予定通りに", "遅れて", "早く", "不定期に"],
  correctAnswer: "予定通りに"
  },
  {
  id: 500,
  question: "once",
  choices: ["かつて", "二度", "しばしば", "常に"],
  correctAnswer: "かつて"
},

  {
  id: 501,
  question: "in fact",
  choices: ["実際には", "想像上", "理論的に", "計画的に"],
  correctAnswer: "実際には"
  },
  {
  id: 502,
  question: "publisher",
  choices: ["出版社", "図書館", "書店", "印刷所"],
  correctAnswer: "出版社"
  },
  {
  id: 503,
  question: "look forward to",
  choices: ["楽しみにする", "恐れる", "回避する", "忘れる"],
  correctAnswer: "楽しみにする"
  },
  {
  id: 504,
  question: "dizzy",
  choices: ["めまいがする", "安定して", "落ち着いて", "活発に"],
  correctAnswer: "めまいがする"
  },
  {
  id: 505,
  question: "as though",
  choices: ["まるで", "違って", "似て", "遠くから"],
  correctAnswer: "まるで"
  },
  {
  id: 506,
  question: "be pleased with",
  choices: ["喜ぶ", "不満である", "無関心である", "悲しむ"],
  correctAnswer: "喜ぶ"
  },
  {
  id: 507,
  question: "postpone",
  choices: ["延期する", "進める", "キャンセルする", "即時にする"],
  correctAnswer: "延期する"
  },
  {
  id: 508,
  question: "justify",
  choices: ["正当化する", "非難する", "否定する", "無視する"],
  correctAnswer: "正当化する"
  },
  {
  id: 509,
  question: "fulfill",
  choices: ["満たす", "空にする", "損なう", "減らす"],
  correctAnswer: "満たす"
  },
  {
  id: 510,
  question: "influence",
  choices: ["影響を及ぼす", "避ける", "支援する", "挑発する"],
  correctAnswer: "影響を及ぼす"
},

  {
  id: 511,
  question: "capacity",
  choices: ["容量", "不足", "過剰", "固定"],
  correctAnswer: "容量"
  },
  {
  id: 512,
  question: "continent",
  choices: ["大陸", "島", "半島", "海域"],
  correctAnswer: "大陸"
  },
  {
  id: 513,
  question: "industry",
  choices: ["産業", "農業", "サービス業", "公共"],
  correctAnswer: "産業"
  },
  {
  id: 514,
  question: "surface",
  choices: ["表面", "内部", "下部", "中心"],
  correctAnswer: "表面"
  },
  {
  id: 515,
  question: "doubtfully",
  choices: ["疑わしく", "確信して", "楽観的に", "絶対に"],
  correctAnswer: "疑わしく"
  },
  {
  id: 516,
  question: "permanently",
  choices: ["恒久的に", "一時的に", "断続的に", "稀に"],
  correctAnswer: "恒久的に"
  },
  {
  id: 517,
  question: "sensitive",
  choices: ["敏感な", "鈍感な", "無関心な", "不安定な"],
  correctAnswer: "敏感な"
  },
  {
  id: 518,
  question: "peaceful",
  choices: ["平和な", "混沌とした", "騒々しい", "危険な"],
  correctAnswer: "平和な"
  },
  {
  id: 519,
  question: "medical",
  choices: ["医学の", "法学の", "経済学の", "文学の"],
  correctAnswer: "医学の"
  },
  {
  id: 520,
  question: "critics",
  choices: ["批評家", "芸術家", "科学者", "教師"],
  correctAnswer: "批評家"
},

  {
  id: 511,
  question: "capacity",
  choices: ["容量", "不足", "過剰", "固定"],
  correctAnswer: "容量"
  },
  {
  id: 512,
  question: "continent",
  choices: ["大陸", "島", "半島", "海域"],
  correctAnswer: "大陸"
  },
  {
  id: 513,
  question: "industry",
  choices: ["産業", "農業", "サービス業", "公共"],
  correctAnswer: "産業"
  },
  {
  id: 514,
  question: "surface",
  choices: ["表面", "内部", "下部", "中心"],
  correctAnswer: "表面"
  },
  {
  id: 515,
  question: "doubtfully",
  choices: ["疑わしく", "確信して", "楽観的に", "絶対に"],
  correctAnswer: "疑わしく"
  },
  {
  id: 516,
  question: "permanently",
  choices: ["恒久的に", "一時的に", "断続的に", "稀に"],
  correctAnswer: "恒久的に"
  },
  {
  id: 517,
  question: "sensitive",
  choices: ["敏感な", "鈍感な", "無関心な", "不安定な"],
  correctAnswer: "敏感な"
  },
  {
  id: 518,
  question: "peaceful",
  choices: ["平和な", "混沌とした", "騒々しい", "危険な"],
  correctAnswer: "平和な"
  },
  {
  id: 519,
  question: "medical",
  choices: ["医学の", "法学の", "経済学の", "文学の"],
  correctAnswer: "医学の"
  },
  {
  id: 520,
  question: "critics",
  choices: ["批評家", "芸術家", "科学者", "教師"],
  correctAnswer: "批評家"
},

  {
  id: 521,
  question: "explorers",
  choices: ["探検家", "学者", "芸術家", "政治家"],
  correctAnswer: "探検家"
  },
  {
  id: 522,
  question: "obstacle",
  choices: ["障害", "助け", "解決策", "機会"],
  correctAnswer: "障害"
  },
  {
  id: 523,
  question: "admit",
  choices: ["認める", "否定する", "隠す", "疑う"],
  correctAnswer: "認める"
  },
  {
  id: 524,
  question: "react",
  choices: ["反応する", "無視する", "進行する", "停止する"],
  correctAnswer: "反応する"
  },
  {
  id: 525,
  question: "succeed",
  choices: ["成功する", "失敗する", "諦める", "中断する"],
  correctAnswer: "成功する"
  },
  {
  id: 526,
  question: "disappear",
  choices: ["消える", "現れる", "変化する", "増える"],
  correctAnswer: "消える"
  },
  {
  id: 527,
  question: "take A for granted",
  choices: ["Aを当然のことと思う", "Aを疑う", "Aを評価する", "Aを無視する"],
  correctAnswer: "Aを当然のことと思う"
  },
  {
  id: 528,
  question: "be familiar with",
  choices: ["に馴染みがある", "に無知である", "に不慣れである", "を嫌う"],
  correctAnswer: "に馴染みがある"
  },
  {
  id: 529,
  question: "beyond",
  choices: ["を越えて", "の内側に", "の直前に", "と平行して"],
  correctAnswer: "を越えて"
  },
  {
  id: 530,
  question: "run away",
  choices: ["逃げる", "接近する", "立ち向かう", "滞在する"],
  correctAnswer: "逃げる"
},

  {
  id: 531,
  question: "pass out",
  choices: ["気絶する", "回復する", "立ち去る", "参加する"],
  correctAnswer: "気絶する"
  },
  {
  id: 532,
  question: "think over",
  choices: ["熟考する", "忘れる", "無視する", "拒絶する"],
  correctAnswer: "熟考する"
  },
  {
  id: 533,
  question: "put away",
  choices: ["片付ける", "取り出す", "使用する", "破棄する"],
  correctAnswer: "片付ける"
  },
  {
  id: 534,
  question: "believe in",
  choices: ["信じる", "疑う", "拒否する", "無視する"],
  correctAnswer: "信じる"
  },
  {
  id: 535,
  question: "calm down",
  choices: ["落ち着く", "興奮する", "怒る", "悲しむ"],
  correctAnswer: "落ち着く"
  },
  {
  id: 536,
  question: "what is worse",
  choices: ["さらに悪いことには", "幸いにも", "同様に", "しかし"],
  correctAnswer: "さらに悪いことには"
  },
  {
  id: 537,
  question: "observe",
  choices: ["観察する", "無視する", "発表する", "製造する"],
  correctAnswer: "観察する"
  },
  {
  id: 538,
  question: "participant",
  choices: ["参加者", "観察者", "主催者", "批評家"],
  correctAnswer: "参加者"
  },
  {
  id: 539,
  question: "react to",
  choices: ["に反応する", "から逃げる", "を支持する", "を拒絶する"],
  correctAnswer: "に反応する"
  },
  {
  id: 540,
  question: "at first",
  choices: ["最初は", "最終的に", "時々", "常に"],
  correctAnswer: "最初は"
},

  {
  id: 541,
  question: "tight",
  choices: ["狭い", "広い", "柔らかい", "硬い"],
  correctAnswer: "狭い"
  },
  {
  id: 542,
  question: "be known for",
  choices: ["で知られている", "に無関心である", "から隠されている", "で有名ではない"],
  correctAnswer: "で知られている"
  },
  {
  id: 543,
  question: "social",
  choices: ["社会の", "個人の", "秘密の", "公式の"],
  correctAnswer: "社会の"
  },
  {
  id: 544,
  question: "jealously",
  choices: ["嫉妬深く", "寛大に", "忠実に", "楽観的に"],
  correctAnswer: "嫉妬深く"
  },
  {
  id: 545,
  question: "reliable",
  choices: ["信頼性のある", "不確かな", "変わりやすい", "予測不可能な"],
  correctAnswer: "信頼性のある"
  },
  {
  id: 546,
  question: "stable",
  choices: ["安定した", "不安定な", "変化しやすい", "危険な"],
  correctAnswer: "安定した"
  },
  {
  id: 547,
  question: "transport",
  choices: ["輸送する", "保管する", "製造する", "販売する"],
  correctAnswer: "輸送する"
  },
  {
  id: 548,
  question: "in other words",
  choices: ["言い換えれば", "同様に", "逆に", "さらに"],
  correctAnswer: "言い換えれば"
  },
  {
  id: 549,
  question: "associated with",
  choices: ["と関連した", "と無関係の", "に対抗する", "に従属する"],
  correctAnswer: "と関連した"
  },
  {
  id: 550,
  question: "to start with",
  choices: ["まず第一に", "その次に", "最終的に", "まれに"],
  correctAnswer: "まず第一に"
},

  {
  id: 551,
  question: "first of all",
  choices: ["まず第一に", "最後に", "たまに", "常に"],
  correctAnswer: "まず第一に"
  },
  {
  id: 552,
  question: "congratulations on",
  choices: ["に対するお祝い", "に対する同情", "に対する批判", "に対する感謝"],
  correctAnswer: "に対するお祝い"
  },
  {
  id: 553,
  question: "precious",
  choices: ["貴重な", "価値のない", "平凡な", "過大評価された"],
  correctAnswer: "貴重な"
  },
  {
  id: 554,
  question: "specialize in",
  choices: ["に特化する", "から遠ざかる", "に対して一般的である", "を避ける"],
  correctAnswer: "に特化する"
  },
  {
  id: 555,
  question: "vaccine",
  choices: ["ワクチン", "薬", "治療法", "病気"],
  correctAnswer: "ワクチン"
  },
  {
  id: 556,
  question: "neverthless",
  choices: ["にも関わらず", "そのため", "さらに", "したがって"],
  correctAnswer: "にも関わらず"
  },
  {
  id: 557,
  question: "illness",
  choices: ["病気", "健康", "回復", "予防"],
  correctAnswer: "病気"
  },
  {
  id: 558,
  question: "for free",
  choices: ["無料で", "高価で", "交渉で", "割引で"],
  correctAnswer: "無料で"
  },
  {
  id: 559,
  question: "checkup",
  choices: ["健康診断", "登録", "キャンセル", "更新"],
  correctAnswer: "健康診断"
  },
  {
  id: 560,
  question: "temperature",
  choices: ["温度", "湿度", "気圧", "風速"],
  correctAnswer: "温度"
},

  {
  id: 561,
  question: "health insurance",
  choices: ["健康保険", "生命保険", "自動車保険", "火災保険"],
  correctAnswer: "健康保険"
  },
  {
  id: 562,
  question: "memory loss",
  choices: ["記憶喪失", "聴力喪失", "視力喪失", "感情喪失"],
  correctAnswer: "記憶喪失"
  },
  {
  id: 563,
  question: "inconvenience",
  choices: ["不便", "利便性", "快適性", "安心"],
  correctAnswer: "不便"
  },
  {
  id: 564,
  question: "unusually",
  choices: ["異常に", "通常に", "一般的に", "稀に"],
  correctAnswer: "異常に"
  },
  {
  id: 565,
  question: "take part in",
  choices: ["参加する", "見学する", "応援する", "放棄する"],
  correctAnswer: "参加する"
  },
  {
  id: 566,
  question: "determine",
  choices: ["決める", "迷う", "推測する", "避ける"],
  correctAnswer: "決める"
  },
  {
  id: 567,
  question: "be considered to",
  choices: ["と見なされる", "を忘れる", "を詳細に調べる", "を否定する"],
  correctAnswer: "と見なされる"
  },
  {
  id: 568,
  question: "amount to",
  choices: ["成る", "減少する", "除外される", "対立する"],
  correctAnswer: "成る"
  },
  {
  id: 569,
  question: "in some way",
  choices: ["何らかの方法で", "全くない", "絶対に", "偶然に"],
  correctAnswer: "何らかの方法で"
  },
  {
  id: 570,
  question: "be connected to",
  choices: ["に接続される", "から切断される", "に対立する", "に依存する"],
  correctAnswer: "に接続される"
},

  {
  id: 571,
  question: "be involved in",
  choices: ["関与する", "排除する", "忘れる", "保存する"],
  correctAnswer: "関与する"
  },
  {
  id: 572,
  question: "genetically",
  choices: ["遺伝的に", "環境的に", "心理的に", "物理的に"],
  correctAnswer: "遺伝的に"
  },
  {
  id: 573,
  question: "diet",
  choices: ["食事", "運動", "休息", "瞑想"],
  correctAnswer: "食事"
  },
  {
  id: 574,
  question: "be made from",
  choices: ["から作られる", "を破壊する", "を模倣する", "を保持する"],
  correctAnswer: "から作られる"
  },
  {
  id: 575,
  question: "major",
  choices: ["専攻科目", "副科目", "趣味", "職業"],
  correctAnswer: "専攻科目"
  },
  {
  id: 576,
  question: "sign",
  choices: ["標識", "音楽", "美術", "文学"],
  correctAnswer: "標識"
  },
  {
  id: 577,
  question: "be threatened to",
  choices: ["脅かされる", "支持される", "応援される", "無視される"],
  correctAnswer: "脅かされる"
  },
  {
  id: 578,
  question: "progress",
  choices: ["進歩", "後退", "停滞", "循環"],
  correctAnswer: "進歩"
  },
  {
  id: 579,
  question: "with luck",
  choices: ["運が良ければ", "計画通りに", "大きな努力で", "十分な資金で"],
  correctAnswer: "運が良ければ"
  },
  {
  id: 580,
  question: "offensive",
  choices: ["攻撃的な", "防御的な", "中立的な", "積極的な"],
  correctAnswer: "攻撃的な"
},

  {
  id: 581,
  question: "abrupt",
  choices: ["突然の", "予測可能な", "徐々の", "永続的な"],
  correctAnswer: "突然の"
  },
  {
  id: 582,
  question: "familiar",
  choices: ["見慣れた", "新奇な", "異質な", "遠い"],
  correctAnswer: "見慣れた"
  },
  {
  id: 583,
  question: "distributor",
  choices: ["卸売業者", "製造業者", "小売業者", "消費者"],
  correctAnswer: "卸売業者"
  },
  {
  id: 584,
  question: "publicity",
  choices: ["宣伝", "秘密", "無視", "検閲"],
  correctAnswer: "宣伝"
  },
  {
  id: 585,
  question: "separation",
  choices: ["分離", "結合", "一致", "対立"],
  correctAnswer: "分離"
  },
  {
  id: 586,
  question: "reuse",
  choices: ["再利用する", "破棄する", "貯蔵する", "無視する"],
  correctAnswer: "再利用する"
  },
  {
  id: 587,
  question: "strike",
  choices: ["叩く", "抱擁する", "回避する", "賛美する"],
  correctAnswer: "叩く"
  },
  {
  id: 588,
  question: "protest",
  choices: ["抗議する", "同意する", "諦める", "無視する"],
  correctAnswer: "抗議する"
  },
  {
  id: 589,
  question: "illustrate",
  choices: ["説明する", "複雑にする", "否定する", "隠す"],
  correctAnswer: "説明する"
  },
  {
  id: 590,
  question: "voluntarily",
  choices: ["自発的に", "強制的に", "消極的に", "無関心から"],
  correctAnswer: "自発的に"
},

  {
  id: 591,
  question: "consciously",
  choices: ["意識的に", "無意識に", "偶然に", "適当に"],
  correctAnswer: "意識的に"
  },
  {
  id: 592,
  question: "approximately",
  choices: ["約", "正確に", "全く", "少し"],
  correctAnswer: "約"
  },
  {
  id: 593,
  question: "peacefully",
  choices: ["平和的に", "攻撃的に", "緊張感を持って", "不安定に"],
  correctAnswer: "平和的に"
  },
  {
  id: 594,
  question: "burden",
  choices: ["負担", "救済", "喜び", "自由"],
  correctAnswer: "負担"
  },
  {
  id: 595,
  question: "whistle",
  choices: ["口笛を吹く", "歌う", "叫ぶ", "泣く"],
  correctAnswer: "口笛を吹く"
  },
  {
  id: 596,
  question: "voyage",
  choices: ["航海", "登山", "ジョギング", "瞑想"],
  correctAnswer: "航海"
  },
  {
  id: 597,
  question: "envy",
  choices: ["妬み", "感謝", "同情", "尊敬"],
  correctAnswer: "妬み"
  },
  {
  id: 598,
  question: "exaggerate",
  choices: ["誇張する", "減らす", "無視する", "合理化する"],
  correctAnswer: "誇張する"
  },
  {
  id: 599,
  question: "refer to",
  choices: ["参照する", "創造する", "破壊する", "放棄する"],
  correctAnswer: "参照する"
  },
  {
  id: 600,
  question: "speaking of",
  choices: ["と言えば", "無視して", "支持して", "反対して"],
  correctAnswer: "と言えば"
},

  {
  id: 601,
  question: "wait for",
  choices: ["待つ", "急ぐ", "回避する", "開始する"],
  correctAnswer: "待つ"
  },
  {
  id: 602,
  question: "in trouble",
  choices: ["困った状況にある", "安全な状態にある", "完璧な状況にある", "進行中である"],
  correctAnswer: "困った状況にある"
  },
  {
  id: 603,
  question: "at best",
  choices: ["せいぜい", "最悪", "常に", "まれに"],
  correctAnswer: "せいぜい"
  },
  {
  id: 604,
  question: "except for",
  choices: ["を除いては", "を含めて", "に特化して", "に対して"],
  correctAnswer: "を除いては"
  },
  {
  id: 605,
  question: "matter",
  choices: ["問題", "解決", "計画", "機会"],
  correctAnswer: "問題"
  },
  {
  id: 606,
  question: "in effect",
  choices: ["効果がある", "無効である", "検討中である", "延期されている"],
  correctAnswer: "効果がある"
  },
  {
  id: 607,
  question: "in fashion",
  choices: ["流行っている", "時代遅れである", "予定されている", "廃止されている"],
  correctAnswer: "流行っている"
  },
  {
  id: 608,
  question: "on demand",
  choices: ["要求に応じて", "事前に", "無条件で", "特別な許可で"],
  correctAnswer: "要求に応じて"
  },
  {
  id: 609,
  question: "individual",
  choices: ["個人の", "集団の", "全体的な", "公的な"],
  correctAnswer: "個人の"
  },
  {
  id: 610,
  question: "as well",
  choices: ["同様に", "異なって", "代わりに", "一部として"],
  correctAnswer: "同様に"
},

  {
  id: 611,
  question: "transportation",
  choices: ["交通", "散歩", "休息", "食事"],
  correctAnswer: "交通"
  },
  {
  id: 612,
  question: "in general",
  choices: ["一般的に", "具体的に", "個別に", "特別に"],
  correctAnswer: "一般的に"
  },
  {
  id: 613,
  question: "smell",
  choices: ["においがする", "見える", "感じる", "聞こえる"],
  correctAnswer: "においがする"
  },
  {
  id: 614,
  question: "recognize",
  choices: ["認識する", "忘れる", "無視する", "拒絶する"],
  correctAnswer: "認識する"
  },
  {
  id: 615,
  question: "get rid of",
  choices: ["取り除く", "追加する", "保持する", "隠す"],
  correctAnswer: "取り除く"
  },
  {
  id: 616,
  question: "treatment",
  choices: ["扱い", "無視", "評価", "批判"],
  correctAnswer: "扱い"
  },
  {
  id: 617,
  question: "expired",
  choices: ["期限切れの", "有効な", "使用中の", "新品の"],
  correctAnswer: "期限切れの"
  },
  {
  id: 618,
  question: "fee",
  choices: ["料金", "報酬", "給料", "賞金"],
  correctAnswer: "料金"
  },
  {
  id: 619,
  question: "current",
  choices: ["現在の", "過去の", "未来の", "永続的な"],
  correctAnswer: "現在の"
  },
  {
  id: 620,
  question: "renew",
  choices: ["更新する", "終了する", "維持する", "減少する"],
  correctAnswer: "更新する"
},

  {
  id: 621,
  question: "from now on",
  choices: ["これから先も", "過去に", "現時点で", "一時的に"],
  correctAnswer: "これから先も"
  },
  {
  id: 622,
  question: "attach to",
  choices: ["に添える", "から取り除く", "を無視する", "を分析する"],
  correctAnswer: "に添える"
  },
  {
  id: 623,
  question: "fill out",
  choices: ["書き込む", "消去する", "回避する", "見落とす"],
  correctAnswer: "書き込む"
  },
  {
  id: 624,
  question: "unexpected",
  choices: ["意外な", "予想される", "計画的な", "常習的な"],
  correctAnswer: "意外な"
  },
  {
  id: 625,
  question: "economic",
  choices: ["経済の", "文化の", "政治の", "社会的な"],
  correctAnswer: "経済の"
  },
  {
  id: 626,
  question: "breath",
  choices: ["息", "手", "視線", "声"],
  correctAnswer: "息"
  },
  {
  id: 627,
  question: "carbon dioxide",
  choices: ["二酸化炭素", "酸素", "水素", "窒素"],
  correctAnswer: "二酸化炭素"
  },
  {
  id: 628,
  question: "humidity",
  choices: ["湿度", "温度", "気圧", "風速"],
  correctAnswer: "湿度"
  },
  {
  id: 629,
  question: "on duty",
  choices: ["勤務時間中で", "休暇中で", "退職後", "移動中に"],
  correctAnswer: "勤務時間中で"
  },
  {
  id: 630,
  question: "in case",
  choices: ["万一に備えて", "既に", "完全に", "稀に"],
  correctAnswer: "万一に備えて"
},

  {
  id: 631,
  question: "gradually",
  choices: ["次第に", "急激に", "同時に", "一度に"],
  correctAnswer: "次第に"
  },
  {
  id: 632,
  question: "ceiling",
  choices: ["天井", "床", "壁", "窓"],
  correctAnswer: "天井"
  },
  {
  id: 633,
  question: "out of use",
  choices: ["使用できない", "使用中", "新品", "修理中"],
  correctAnswer: "使用できない"
  },
  {
  id: 634,
  question: "sculpture",
  choices: ["彫刻", "絵画", "写真", "書籍"],
  correctAnswer: "彫刻"
  },
  {
  id: 635,
  question: "exact",
  choices: ["正確な", "不正確な", "曖昧な", "一般的な"],
  correctAnswer: "正確な"
  },
  {
  id: 636,
  question: "between A and B",
  choices: ["AとBの間", "A以上B以下", "AとBの外", "AまたはB"],
  correctAnswer: "AとBの間"
  },
  {
  id: 637,
  question: "produce",
  choices: ["生産する", "消費する", "廃棄する", "輸入する"],
  correctAnswer: "生産する"
  },
  {
  id: 638,
  question: "even though",
  choices: ["だけれども", "以来", "まで", "だから"],
  correctAnswer: "だけれども"
  },
  {
  id: 639,
  question: "warm",
  choices: ["暖かい", "寒い", "涼しい", "熱い"],
  correctAnswer: "暖かい"
  },
  {
  id: 640,
  question: "inside",
  choices: ["内部", "外部", "表面", "下部"],
  correctAnswer: "内部"
},

  {
  id: 641,
  question: "ill",
  choices: ["病気で", "健康な", "活動的な", "元気な"],
  correctAnswer: "病気で"
  },
  {
  id: 642,
  question: "out of place",
  choices: ["場違いで", "適切で", "一致して", "調和して"],
  correctAnswer: "場違いで"
  },
  {
  id: 643,
  question: "research",
  choices: ["研究", "実践", "演習", "休息"],
  correctAnswer: "研究"
  },
  {
  id: 644,
  question: "relative",
  choices: ["相対的な", "絶対的な", "独立した", "隔離した"],
  correctAnswer: "相対的な"
  },
  {
  id: 645,
  question: "poison",
  choices: ["毒", "薬", "栄養", "水"],
  correctAnswer: "毒"
  },
  {
  id: 646,
  question: "completely",
  choices: ["完全に", "部分的に", "ほとんど", "少しも"],
  correctAnswer: "完全に"
  },
  {
  id: 647,
  question: "be effective at",
  choices: ["で効果的である", "に影響される", "を妨げる", "を促進する"],
  correctAnswer: "で効果的である"
  },
  {
  id: 648,
  question: "absorb",
  choices: ["吸収する", "排出する", "無視する", "拒否する"],
  correctAnswer: "吸収する"
  },
  {
  id: 649,
  question: "feed",
  choices: ["餌を与える", "取り除く", "制限する", "閉じ込める"],
  correctAnswer: "餌を与える"
  },
  {
  id: 650,
  question: "effective",
  choices: ["効果的な", "無効な", "危険な", "不確かな"],
  correctAnswer: "効果的な"
},

  {
  id: 651,
  question: "container",
  choices: ["容器", "機械", "建物", "車両"],
  correctAnswer: "容器"
  },
  {
  id: 652,
  question: "thanks to",
  choices: ["のおかげで", "にもかかわらず", "向けて", "に対抗して"],
  correctAnswer: "のおかげで"
  },
  {
  id: 653,
  question: "on the run",
  choices: ["逃げて", "安定して", "休んで", "計画して"],
  correctAnswer: "逃げて"
  },
  {
  id: 654,
  question: "dedicate",
  choices: ["専念する", "諦める", "分散する", "評価する"],
  correctAnswer: "専念する"
  },
  {
  id: 655,
  question: "abandon",
  choices: ["捨て去る", "取り組む", "修復する", "保持する"],
  correctAnswer: "捨て去る"
  },
  {
  id: 656,
  question: "amuse",
  choices: ["楽しませる", "悩ます", "怒らせる", "混乱させる"],
  correctAnswer: "楽しませる"
  },
  {
  id: 657,
  question: "range",
  choices: ["範囲", "一点", "直線", "交差点"],
  correctAnswer: "範囲"
  },
  {
  id: 658,
  question: "sphere",
  choices: ["球", "立方体", "円", "ピラミッド"],
  correctAnswer: "球"
  },
  {
  id: 659,
  question: "revenge",
  choices: ["復讐", "許し", "協力", "無視"],
  correctAnswer: "復讐"
  },
  {
  id: 660,
  question: "popularity",
  choices: ["人気", "不人気", "中立", "無関心"],
  correctAnswer: "人気"
},

  {
  id: 661,
  question: "suspicious",
  choices: ["疑わしい", "信頼できる", "明白な", "一貫した"],
  correctAnswer: "疑わしい"
  },
  {
  id: 662,
  question: "delicate",
  choices: ["繊細な", "粗野な", "頑丈な", "大雑把な"],
  correctAnswer: "繊細な"
  },
  {
  id: 663,
  question: "welfare",
  choices: ["福祉", "貧困", "災害", "紛争"],
  correctAnswer: "福祉"
  },
  {
  id: 664,
  question: "border",
  choices: ["国境", "中心", "地下", "頂点"],
  correctAnswer: "国境"
  },
  {
  id: 665,
  question: "habit",
  choices: ["習慣", "偶発", "革新", "忘却"],
  correctAnswer: "習慣"
  },
  {
  id: 666,
  question: "interrupt",
  choices: ["中断する", "継続する", "加速する", "軽減する"],
  correctAnswer: "中断する"
  },
  {
  id: 667,
  question: "persuade",
  choices: ["説得する", "威嚇する", "無視する", "譲る"],
  correctAnswer: "説得する"
  },
  {
  id: 668,
  question: "examine",
  choices: ["検査する", "発表する", "応援する", "延期する"],
  correctAnswer: "検査する"
  },
  {
  id: 669,
  question: "leisurely",
  choices: ["のんびりした", "急ぎの", "緊張した", "混雑した"],
  correctAnswer: "のんびりした"
  },
  {
  id: 670,
  question: "bravely",
  choices: ["勇敢に", "臆病に", "不安に", "無関心に"],
  correctAnswer: "勇敢に"
},

  {
  id: 671,
  question: "relatively",
  choices: ["比較的", "絶対に", "即座に", "稀に"],
  correctAnswer: "比較的"
  },
  {
  id: 672,
  question: "substitute",
  choices: ["代用品", "原材料", "高級品", "廃材"],
  correctAnswer: "代用品"
  },
  {
  id: 673,
  question: "peel",
  choices: ["皮", "核", "種", "葉"],
  correctAnswer: "皮"
  },
  {
  id: 674,
  question: "hospitality",
  choices: ["おもてなし", "無視", "批判", "警戒"],
  correctAnswer: "おもてなし"
  },
  {
  id: 675,
  question: "tragedy",
  choices: ["悲劇", "喜劇", "奇跡", "常日頃"],
  correctAnswer: "悲劇"
  },
  {
  id: 676,
  question: "struggle with",
  choices: ["と闘う", "を支援する", "を避ける", "を楽しむ"],
  correctAnswer: "と闘う"
  },
  {
  id: 677,
  question: "instruct",
  choices: ["指示する", "諦める", "遅らせる", "放棄する"],
  correctAnswer: "指示する"
  },
  {
  id: 678,
  question: "gather",
  choices: ["集める", "分散する", "廃棄する", "輸出する"],
  correctAnswer: "集める"
  },
  {
  id: 679,
  question: "get used to",
  choices: ["慣れる", "忘れる", "怖がる", "拒絶する"],
  correctAnswer: "慣れる"
  },
  {
  id: 680,
  question: "out of date",
  choices: ["時代遅れの", "最先端の", "現代的な", "永遠の"],
  correctAnswer: "時代遅れの"
},

  {
  id: 681,
  question: "in tough",
  choices: ["苦労して", "楽に", "自信満々で", "明確に"],
  correctAnswer: "苦労して"
  },
  {
  id: 682,
  question: "under way",
  choices: ["進行中で", "終了して", "計画中で", "停止して"],
  correctAnswer: "進行中で"
  },
  {
  id: 683,
  question: "come into being",
  choices: ["生まれ出る", "消滅する", "静止する", "後退する"],
  correctAnswer: "生まれ出る"
  },
  {
  id: 684,
  question: "in need of",
  choices: ["を必要として", "を過剰に持って", "完全に装備して", "独立して"],
  correctAnswer: "を必要として"
  },
  {
  id: 685,
  question: "be aware of",
  choices: ["に気づいている", "を無視している", "に驚いている", "に同意している"],
  correctAnswer: "に気づいている"
  },
  {
  id: 686,
  question: "at a loss",
  choices: ["途方に暮れて", "安心して", "準備ができて", "勇気を持って"],
  correctAnswer: "途方に暮れて"
  },
  {
  id: 687,
  question: "within reach",
  choices: ["届く範囲で", "手の届かない", "遠く離れて", "視界に入らない"],
  correctAnswer: "届く範囲で"
  },
  {
  id: 688,
  question: "on average",
  choices: ["平均して", "例外的に", "特別に", "一貫して"],
  correctAnswer: "平均して"
  },
  {
  id: 689,
  question: "in a row",
  choices: ["一列に", "ランダムに", "断続的に", "逆に"],
  correctAnswer: "一列に"
  },
  {
  id: 690,
  question: "appear",
  choices: ["現れる", "消える", "変化する", "停止する"],
  correctAnswer: "現れる"
},

  {
  id: 691,
  question: "hesitate",
  choices: ["ためらう", "急ぐ", "信頼する", "同意する"],
  correctAnswer: "ためらう"
  },
  {
  id: 692,
  question: "be short of",
  choices: ["が不足する", "が豊富にある", "が適切である", "が過剰である"],
  correctAnswer: "が不足する"
  },
  {
  id: 693,
  question: "play a role in",
  choices: ["において役割を果たす", "を妨害する", "を無視する", "から撤退する"],
  correctAnswer: "において役割を果たす"
  },
  {
  id: 694,
  question: "alternative",
  choices: ["代替物", "同じ物", "原型", "標準"],
  correctAnswer: "代替物"
  },
  {
  id: 695,
  question: "depression",
  choices: ["落ち込み", "興奮", "安定", "喜び"],
  correctAnswer: "落ち込み"
  },
  {
  id: 696,
  question: "large amount of",
  choices: ["大量の", "少量の", "適切な量の", "一定量の"],
  correctAnswer: "大量の"
  },
  {
  id: 697,
  question: "rug",
  choices: ["じゅうたん", "壁掛け", "カーテン", "枕"],
  correctAnswer: "じゅうたん"
  },
  {
  id: 698,
  question: "invent",
  choices: ["発明する", "破壊する", "復元する", "保存する"],
  correctAnswer: "発明する"
  },
  {
  id: 699,
  question: "encourage",
  choices: ["勇気づける", "非難する", "無視する", "脅かす"],
  correctAnswer: "勇気づける"
  },
  {
  id: 700,
  question: "rarely",
  choices: ["めったにAない", "頻繁に", "常に", "時々"],
  correctAnswer: "めったにAない"
},

  {
  id: 701,
  question: "digest",
  choices: ["消化する", "拡大する", "破壊する", "忘れる"],
  correctAnswer: "消化する"
  },
  {
  id: 702,
  question: "focus on",
  choices: ["に焦点を合わせる", "から離れる", "を軽視する", "を拒否する"],
  correctAnswer: "に焦点を合わせる"
  },
  {
  id: 703,
  question: "be concerned about",
  choices: ["について心配する", "について楽観的である", "を支持する", "に無関心である"],
  correctAnswer: "について心配する"
  },
  {
  id: 704,
  question: "vocabulary",
  choices: ["語彙", "文法", "発音", "文学"],
  correctAnswer: "語彙"
  },
  {
  id: 705,
  question: "complex",
  choices: ["複雑な", "単純な", "明確な", "直接的な"],
  correctAnswer: "複雑な"
  },
  {
  id: 706,
  question: "strengthen",
  choices: ["強化する", "弱める", "維持する", "分解する"],
  correctAnswer: "強化する"
  },
  {
  id: 707,
  question: "similarly",
  choices: ["同様に", "異なって", "部分的に", "完全に反対に"],
  correctAnswer: "同様に"
  },
  {
  id: 708,
  question: "ignorance",
  choices: ["無知", "知識", "理解", "専門知識"],
  correctAnswer: "無知"
  },
  {
  id: 709,
  question: "opposite",
  choices: ["反対の", "同じ", "関連する", "独立した"],
  correctAnswer: "反対の"
  },
  {
  id: 710,
  question: "pronunciation",
  choices: ["発音", "構造", "意味", "用法"],
  correctAnswer: "発音"
},

  {
  id: 711,
  question: "invention",
  choices: ["発明", "破壊", "再現", "解体"],
  correctAnswer: "発明"
  },
  {
  id: 712,
  question: "reverse",
  choices: ["反対の", "同じ", "補助的な", "進行形の"],
  correctAnswer: "反対の"
  },
  {
  id: 713,
  question: "commute",
  choices: ["通勤する", "休息する", "旅行する", "勉強する"],
  correctAnswer: "通勤する"
  },
  {
  id: 714,
  question: "appeal",
  choices: ["訴える", "賛成する", "反対する", "確認する"],
  correctAnswer: "訴える"
  },
  {
  id: 715,
  question: "qualify",
  choices: ["資格を与える", "拒否する", "疑問を投げかける", "無視する"],
  correctAnswer: "資格を与える"
  },
  {
  id: 716,
  question: "incident",
  choices: ["事件", "計画", "解決", "目的"],
  correctAnswer: "事件"
  },
  {
  id: 717,
  question: "market",
  choices: ["市場", "学校", "病院", "図書館"],
  correctAnswer: "市場"
  },
  {
  id: 718,
  question: "maximum",
  choices: ["最大", "最小", "平均", "定数"],
  correctAnswer: "最大"
  },
  {
  id: 719,
  question: "yell",
  choices: ["大声で叫ぶ", "ささやく", "歌う", "泣く"],
  correctAnswer: "大声で叫ぶ"
  },
  {
  id: 720,
  question: "sneeze",
  choices: ["くしゃみをする", "笑う", "咳をする", "ため息をつく"],
  correctAnswer: "くしゃみをする"
},

  {
  id: 721,
  question: "wipe",
  choices: ["拭く", "汚す", "破る", "修復する"],
  correctAnswer: "拭く"
  },
  {
  id: 722,
  question: "twist",
  choices: ["ねじれ", "直線", "分割", "結合"],
  correctAnswer: "ねじれ"
  },
  {
  id: 723,
  question: "civilize",
  choices: ["文明化する", "野蛮にする", "破壊する", "無視する"],
  correctAnswer: "文明化する"
  },
  {
  id: 724,
  question: "murder",
  choices: ["殺人", "防衛", "救助", "和解"],
  correctAnswer: "殺人"
  },
  {
  id: 725,
  question: "impose",
  choices: ["課す", "減免する", "返還する", "共有する"],
  correctAnswer: "課す"
  },
  {
  id: 726,
  question: "parliament",
  choices: ["議会", "会社", "学校", "病院"],
  correctAnswer: "議会"
  },
  {
  id: 727,
  question: "nursery school",
  choices: ["保育園", "小学校", "中学校", "大学"],
  correctAnswer: "保育園"
  },
  {
  id: 728,
  question: "glance",
  choices: ["一目見る", "詳細に調べる", "無視する", "深く考える"],
  correctAnswer: "一目見る"
  },
  {
  id: 729,
  question: "aid",
  choices: ["援助", "妨害", "競争", "批判"],
  correctAnswer: "援助"
  },
  {
  id: 730,
  question: "force",
  choices: ["力", "弱さ", "平和", "合意"],
  correctAnswer: "力"
},

  {
  id: 731,
  question: "role",
  choices: ["役割", "欠如", "余剰", "反対"],
  correctAnswer: "役割"
  },
  {
  id: 732,
  question: "acquaint",
  choices: ["知らせる", "隠す", "忘れる", "避ける"],
  correctAnswer: "知らせる"
  },
  {
  id: 733,
  question: "superior",
  choices: ["より優れた", "劣っている", "同等の", "無関係の"],
  correctAnswer: "より優れた"
  },
  {
  id: 734,
  question: "knowledge",
  choices: ["知識", "無知", "疑問", "推測"],
  correctAnswer: "知識"
  },
  {
  id: 735,
  question: "mindful",
  choices: ["注意深く", "無頓着に", "怠慢に", "軽率に"],
  correctAnswer: "注意深く"
  },
  {
  id: 736,
  question: "stand still",
  choices: ["停止", "加速", "進化", "後退"],
  correctAnswer: "停止"
  },
  {
  id: 737,
  question: "appearance",
  choices: ["外見", "内部", "本質", "隠れた意味"],
  correctAnswer: "外見"
  },
  {
  id: 738,
  question: "incredible",
  choices: ["信じられない", "当然の", "信頼できる", "確実な"],
  correctAnswer: "信じられない"
  },
  {
  id: 739,
  question: "in terms of",
  choices: ["に関して", "に反して", "に加えて", "に独立して"],
  correctAnswer: "に関して"
  },
  {
  id: 740,
  question: "article",
  choices: ["記事", "小説", "詩", "手紙"],
  correctAnswer: "記事"
},

  {
  id: 741,
  question: "for sure",
  choices: ["確かに", "おそらく", "まれに", "絶対にではない"],
  correctAnswer: "確かに"
  },
  {
  id: 742,
  question: "ancestor",
  choices: ["祖先", "子孫", "同僚", "友人"],
  correctAnswer: "祖先"
  },
  {
  id: 743,
  question: "in time",
  choices: ["丁度よい時に", "遅れて", "予定より早く", "絶対に間に合わない"],
  correctAnswer: "丁度よい時に"
  },
  {
  id: 744,
  question: "bend",
  choices: ["曲げる", "伸ばす", "分割する", "固定する"],
  correctAnswer: "曲げる"
  },
  {
  id: 745,
  question: "occur",
  choices: ["発生する", "消滅する", "停止する", "維持される"],
  correctAnswer: "発生する"
  },
  {
  id: 746,
  question: "objection",
  choices: ["異議", "同意", "無関心", "支持"],
  correctAnswer: "異議"
  },
  {
  id: 747,
  question: "lazy",
  choices: ["怠け者の", "勤勉な", "熱心な", "活発な"],
  correctAnswer: "怠け者の"
  },
  {
  id: 748,
  question: "outstanding",
  choices: ["並外れた", "平凡な", "平均的な", "下位の"],
  correctAnswer: "並外れた"
  },
  {
  id: 749,
  question: "construct",
  choices: ["組み立てる", "解体する", "無視する", "批判する"],
  correctAnswer: "組み立てる"
  },
  {
  id: 750,
  question: "adequate",
  choices: ["適切で", "不十分な", "過剰な", "未達成の"],
  correctAnswer: "適切で"
},

  {
  id: 751,
  question: "instead of",
  choices: ["の代わりに", "加えて", "従って", "反対して"],
  correctAnswer: "の代わりに"
  },
  {
  id: 752,
  question: "mildly",
  choices: ["穏やかに", "激しく", "急激に", "無関心に"],
  correctAnswer: "穏やかに"
  },
  {
  id: 753,
  question: "scar",
  choices: ["傷跡", "回復", "成長", "変化"],
  correctAnswer: "傷跡"
  },
  {
  id: 754,
  question: "hesitantly",
  choices: ["躊躇して", "自信を持って", "迅速に", "楽観的に"],
  correctAnswer: "躊躇して"
  },
  {
  id: 755,
  question: "wealthy",
  choices: ["裕福な", "貧乏な", "中流の", "貧弱な"],
  correctAnswer: "裕福な"
  },
  {
  id: 756,
  question: "give out",
  choices: ["配布する", "回収する", "拒否する", "保留する"],
  correctAnswer: "配布する"
  },
  {
  id: 757,
  question: "forget",
  choices: ["忘れる", "記憶する", "強調する", "分析する"],
  correctAnswer: "忘れる"
  },
  {
  id: 758,
  question: "stranger",
  choices: ["他人", "友人", "家族", "同僚"],
  correctAnswer: "他人"
  },
  {
  id: 759,
  question: "prove",
  choices: ["証明する", "否定する", "無視する", "避ける"],
  correctAnswer: "証明する"
  },
  {
  id: 760,
  question: "insurance",
  choices: ["保険", "リスク", "損失", "利益"],
  correctAnswer: "保険"
},

  {
  id: 761,
  question: "generation",
  choices: ["世代", "単位", "小説", "技術"],
  correctAnswer: "世代"
  },
  {
  id: 762,
  question: "take down",
  choices: ["降ろす", "持ち上げる", "加速する", "減速する"],
  correctAnswer: "降ろす"
  },
  {
  id: 763,
  question: "conclude",
  choices: ["締めくくる", "開始する", "中断する", "継続する"],
  correctAnswer: "締めくくる"
  },
  {
  id: 764,
  question: "violence",
  choices: ["暴力", "平和", "調和", "友情"],
  correctAnswer: "暴力"
  },
  {
  id: 765,
  question: "irritate",
  choices: ["イライラさせる", "安心させる", "励ます", "支援する"],
  correctAnswer: "イライラさせる"
  },
  {
  id: 766,
  question: "put together",
  choices: ["まとめる", "分解する", "排除する", "競争する"],
  correctAnswer: "まとめる"
  },
  {
  id: 767,
  question: "account for",
  choices: ["説明する", "忘れる", "無視する", "避ける"],
  correctAnswer: "説明する"
  },
  {
  id: 768,
  question: "tourism",
  choices: ["観光", "仕事", "研究", "教育"],
  correctAnswer: "観光"
  },
  {
  id: 769,
  question: "commit",
  choices: ["専念", "諦める", "回避する", "減少する"],
  correctAnswer: "専念"
  },
  {
  id: 770,
  question: "put off",
  choices: ["延期する", "急ぐ", "解決する", "攻撃する"],
  correctAnswer: "延期する"
},

  {
  id: 771,
  question: "maintain",
  choices: ["維持する", "放棄する", "破壊する", "忘れる"],
  correctAnswer: "維持する"
  },
  {
  id: 772,
  question: "favor",
  choices: ["好意", "敵意", "無関心", "恐怖"],
  correctAnswer: "好意"
  },
  {
  id: 773,
  question: "relevant to",
  choices: ["に関連して", "から離れて", "に反対して", "に従属して"],
  correctAnswer: "に関連して"
  },
  {
  id: 774,
  question: "differ",
  choices: ["異なる", "一致する", "依存する", "結合する"],
  correctAnswer: "異なる"
  },
  {
  id: 775,
  question: "keep up",
  choices: ["維持する", "諦める", "低下させる", "排除する"],
  correctAnswer: "維持する"
  },
  {
  id: 776,
  question: "look over",
  choices: ["見渡す", "見逃す", "監視する", "無視する"],
  correctAnswer: "見渡す"
  },
  {
  id: 777,
  question: "though",
  choices: ["だけれども", "なぜなら", "そのために", "と同時に"],
  correctAnswer: "だけれども"
  },
  {
  id: 778,
  question: "limb",
  choices: ["手足", "頭", "心臓", "背骨"],
  correctAnswer: "手足"
  },
  {
  id: 779,
  question: "eventually",
  choices: ["結局は", "直ちに", "たまに", "決して"],
  correctAnswer: "結局は"
  },
  {
  id: 780,
  question: "suggest",
  choices: ["提案する", "拒否する", "隠す", "疑う"],
  correctAnswer: "提案する"
},

  {
  id: 781,
  question: "entitle to",
  choices: ["に資格を与える", "から排除する", "を拒否する", "を無視する"],
  correctAnswer: "に資格を与える"
  },
  {
  id: 782,
  question: "capture",
  choices: ["捕まえる", "解放する", "無視する", "応援する"],
  correctAnswer: "捕まえる"
  },
  {
  id: 783,
  question: "psychology",
  choices: ["心理学", "生物学", "物理学", "化学"],
  correctAnswer: "心理学"
  },
  {
  id: 784,
  question: "export",
  choices: ["輸出する", "輸入する", "消費する", "貯蔵する"],
  correctAnswer: "輸出する"
  },
  {
  id: 785,
  question: "spill",
  choices: ["こぼす", "拭く", "蓄える", "修理する"],
  correctAnswer: "こぼす"
  },
  {
  id: 786,
  question: "identity",
  choices: ["同一性", "差異", "複雑性", "独立性"],
  correctAnswer: "同一性"
  },
  {
  id: 787,
  question: "participate",
  choices: ["参加する", "退去する", "拒否する", "観察する"],
  correctAnswer: "参加する"
  },
  {
  id: 788,
  question: "cough",
  choices: ["咳をする", "笑う", "歌う", "叫ぶ"],
  correctAnswer: "咳をする"
  },
  {
  id: 789,
  question: "include",
  choices: ["含む", "排除する", "特化する", "比較する"],
  correctAnswer: "含む"
  },
  {
  id: 790,
  question: "sincerely",
  choices: ["心から", "偽りなく", "表面的に", "無関心に"],
  correctAnswer: "心から"
},

  {
    id: 790,
    question: "sincerely",
    choices: ["心から", "偽って", "軽蔑して", "無関心に"],
    correctAnswer: "心から"
    },
    {
    id: 791,
    question: "absorb in",
    choices: ["没頭する", "遠ざける", "放棄する", "軽視する"],
    correctAnswer: "没頭する"
    },
    {
    id: 792,
    question: "improvement",
    choices: ["改善", "悪化", "停滞", "混乱"],
    correctAnswer: "改善"
    },
    {
    id: 793,
    question: "crime",
    choices: ["犯罪", "正義", "規則", "奉仕"],
    correctAnswer: "犯罪"
    },
    {
    id: 794,
    question: "spiritually",
    choices: ["精神的に", "物質的に", "表面的に", "一時的に"],
    correctAnswer: "精神的に"
    },
    {
    id: 795,
    question: "proposal",
    choices: ["提案", "拒絶", "疑問", "解答"],
    correctAnswer: "提案"
    },
    {
    id: 796,
    question: "confess",
    choices: ["打ち明ける", "隠す", "否定する", "批評する"],
    correctAnswer: "打ち明ける"
    },
    {
    id: 797,
    question: "credit",
    choices: ["信用", "疑い", "失敗", "罰"],
    correctAnswer: "信用"
    },
    {
    id: 798,
    question: "reservation",
    choices: ["予約", "即時", "拒絶", "直接"],
    correctAnswer: "予約"
    },
    {
    id: 799,
    question: "translation",
    choices: ["翻訳", "原文", "創作", "抹消"],
    correctAnswer: "翻訳"
    },
    {
    id: 800,
    question: "disadvantage",
    choices: ["不利益", "利益", "機会", "報酬"],
    correctAnswer: "不利益"
  },

  {
  id: 801,
  question: "objectively",
  choices: ["客観的に", "主観的に", "情熱的に", "無関心に"],
  correctAnswer: "客観的に"
  },
  {
  id: 802,
  question: "consumption",
  choices: ["消費", "生産", "保存", "廃棄"],
  correctAnswer: "消費"
  },
  {
  id: 803,
  question: "innocently",
  choices: ["無邪気に", "悪意を持って", "疑わしげに", "怒りっぽく"],
  correctAnswer: "無邪気に"
  },
  {
  id: 804,
  question: "researcher",
  choices: ["研究者", "教師", "学生", "経営者"],
  correctAnswer: "研究者"
  },
  {
  id: 805,
  question: "location",
  choices: ["位置", "方向", "距離", "速度"],
  correctAnswer: "位置"
  },
  {
  id: 806,
  question: "oxygen",
  choices: ["酸素", "炭素", "水素", "窒素"],
  correctAnswer: "酸素"
  },
  {
  id: 807,
  question: "do away with",
  choices: ["廃止する", "強化する", "採用する", "無視する"],
  correctAnswer: "廃止する"
  },
  {
  id: 808,
  question: "take care",
  choices: ["注意する", "無視する", "急ぐ", "遅らせる"],
  correctAnswer: "注意する"
  },
  {
  id: 809,
  question: "neglect",
  choices: ["無視する", "注目する", "保護する", "賛美する"],
  correctAnswer: "無視する"
  },
  {
  id: 810,
  question: "be obliged to",
  choices: ["義務付けられる", "許される", "招待される", "励まされる"],
  correctAnswer: "義務付けられる"
},
  {
  id: 811,
  question: "survive",
  choices: ["生き残る", "敗れる", "減少する", "変化する"],
  correctAnswer: "生き残る"
  },
  {
  id: 812,
  question: "desert",
  choices: ["砂漠", "森林", "都市", "海"],
  correctAnswer: "砂漠"
  },
  {
  id: 813,
  question: "donation",
  choices: ["寄贈", "取り消し", "抗議", "評価"],
  correctAnswer: "寄贈"
  },
  {
  id: 814,
  question: "exhibit",
  choices: ["示す", "隠す", "忘れる", "破壊する"],
  correctAnswer: "示す"
  },
  {
  id: 815,
  question: "principal",
  choices: ["主要な", "二次的な", "不要な", "一時的な"],
  correctAnswer: "主要な"
  },
  {
  id: 816,
  question: "product",
  choices: ["製品", "原料", "理論", "サービス"],
  correctAnswer: "製品"
  },
  {
  id: 817,
  question: "in short",
  choices: ["要するに", "長く", "詳細に", "例外的に"],
  correctAnswer: "要するに"
  },
  {
  id: 818,
  question: "formal",
  choices: ["形式の", "非公式の", "非定型の", "カジュアルな"],
  correctAnswer: "形式の"
  },
  {
  id: 819,
  question: "persuasion",
  choices: ["説得", "反論", "無視", "賛成"],
  correctAnswer: "説得"
  },
  {
  id: 820,
  question: "huge",
  choices: ["巨大な", "小さい", "平均的な", "微細な"],
  correctAnswer: "巨大な"
},
  {
  id: 821,
  question: "migrate",
  choices: ["移行する", "静止する", "回避する", "減少する"],
  correctAnswer: "移行する"
  },
  {
  id: 822,
  question: "logical",
  choices: ["論理的な", "非論理的な", "感情的な", "直感的な"],
  correctAnswer: "論理的な"
  },
  {
  id: 823,
  question: "get away with",
  choices: ["持ち逃げする", "責任を取る", "支払う", "共有する"],
  correctAnswer: "持ち逃げする"
  },
  {
  id: 824,
  question: "interpret",
  choices: ["解釈する", "無視する", "誇張する", "具体化する"],
  correctAnswer: "解釈する"
  },
  {
  id: 825,
  question: "accuracy",
  choices: ["正確さ", "不正確さ", "一般性", "変動性"],
  correctAnswer: "正確さ"
  },
  {
  id: 826,
  question: "contribution",
  choices: ["寄付", "取り消し", "損失", "障害"],
  correctAnswer: "寄付"
  },
  {
  id: 827,
  question: "climb",
  choices: ["登る", "降りる", "横断する", "停止する"],
  correctAnswer: "登る"
  },
  {
  id: 828,
  question: "stand up",
  choices: ["立つ", "座る", "休む", "転ぶ"],
  correctAnswer: "立つ"
  },
  {
  id: 829,
  question: "preserve",
  choices: ["保存する", "捨てる", "汚染する", "壊す"],
  correctAnswer: "保存する"
  },
  {
  id: 830,
  question: "laundry",
  choices: ["洗濯物", "食器", "掃除", "料理"],
  correctAnswer: "洗濯物"
},

  {
  id: 831,
  question: "deal",
  choices: ["扱う", "避ける", "無視する", "拒絶する"],
  correctAnswer: "扱う"
  },
  {
  id: 832,
  question: "complain of",
  choices: ["不満を漏らす", "賞賛する", "支持する", "同意する"],
  correctAnswer: "不満を漏らす"
  },
  {
  id: 833,
  question: "intensive",
  choices: ["集中的な", "緩和的な", "断続的な", "表面的な"],
  correctAnswer: "集中的な"
  },
  {
  id: 834,
  question: "look through",
  choices: ["ひと通り調べる", "無視する", "複製する", "隠す"],
  correctAnswer: "ひと通り調べる"
  },
  {
  id: 835,
  question: "budget",
  choices: ["予算", "損失", "利益", "債務"],
  correctAnswer: "予算"
  },
  {
  id: 836,
  question: "mummy",
  choices: ["ミイラ", "彫像", "絵画", "宝石"],
  correctAnswer: "ミイラ"
  },
  {
  id: 837,
  question: "dizziness",
  choices: ["めまい", "安定", "興奮", "鎮静"],
  correctAnswer: "めまい"
  },
  {
  id: 838,
  question: "occasionally",
  choices: ["時折", "常に", "決して", "頻繁に"],
  correctAnswer: "時折"
  },
  {
  id: 839,
  question: "audience",
  choices: ["聴衆", "演者", "批評家", "支持者"],
  correctAnswer: "聴衆"
  },
  {
  id: 840,
  question: "liquid",
  choices: ["液体", "固体", "気体", "プラズマ"],
  correctAnswer: "液体"
},

  {
  id: 841,
  question: "combine",
  choices: ["結合させる", "分離する", "減少させる", "破壊する"],
  correctAnswer: "結合させる"
  },
  {
  id: 842,
  question: "imply",
  choices: ["ほのめかす", "明言する", "否定する", "確認する"],
  correctAnswer: "ほのめかす"
  },
  {
  id: 843,
  question: "applause",
  choices: ["拍手かっさい", "非難", "無視", "懐疑"],
  correctAnswer: "拍手かっさい"
  },
  {
  id: 844,
  question: "ridiculous",
  choices: ["ばかげている", "合理的な", "重要な", "可能な"],
  correctAnswer: "ばかげている"
  },
  {
  id: 845,
  question: "ignore",
  choices: ["無視する", "注目する", "分析する", "評価する"],
  correctAnswer: "無視する"
  },
  {
  id: 846,
  question: "mammal",
  choices: ["哺乳類", "爬虫類", "鳥類", "魚類"],
  correctAnswer: "哺乳類"
  },
  {
  id: 847,
  question: "indeed",
  choices: ["実に", "まれに", "おそらく", "一時的に"],
  correctAnswer: "実に"
  },
  {
  id: 848,
  question: "blame for",
  choices: ["の責任を問う", "を賞賛する", "を支援する", "を許す"],
  correctAnswer: "の責任を問う"
  },
  {
  id: 849,
  question: "fossil",
  choices: ["化石", "新種", "生物", "植物"],
  correctAnswer: "化石"
  },
  {
  id: 850,
  question: "obvious",
  choices: ["明白な", "隠れた", "疑わしい", "可能性が低い"],
  correctAnswer: "明白な"
},

  {
  id: 851,
  question: "precise",
  choices: ["正確な", "曖昧な", "不正確な", "一般的な"],
  correctAnswer: "正確な"
  },
  {
  id: 852,
  question: "see in",
  choices: ["案内して部屋に入れる", "送り出す", "拒否する", "無視する"],
  correctAnswer: "案内して部屋に入れる"
  },
  {
  id: 853,
  question: "happen",
  choices: ["起こる", "防ぐ", "避ける", "維持する"],
  correctAnswer: "起こる"
  },
  {
  id: 854,
  question: "argument",
  choices: ["議論", "合意", "協力", "支持"],
  correctAnswer: "議論"
  },
  {
  id: 855,
  question: "visually",
  choices: ["視覚的に", "聴覚的に", "触覚的に", "味覚的に"],
  correctAnswer: "視覚的に"
  },
  {
  id: 856,
  question: "terribly",
  choices: ["ひどく", "わずかに", "穏やかに", "極めて"],
  correctAnswer: "ひどく"
  },
  {
  id: 857,
  question: "go after",
  choices: ["追いかける", "避ける", "観察する", "分析する"],
  correctAnswer: "追いかける"
  },
  {
  id: 858,
  question: "by nature",
  choices: ["本来", "後天的に", "偶然に", "意図的に"],
  correctAnswer: "本来"
  },
  {
  id: 859,
  question: "direction",
  choices: ["方向", "位置", "距離", "速度"],
  correctAnswer: "方向"
  },
  {
  id: 860,
  question: "differ from",
  choices: ["とは違って", "と一致して", "を基にして", "に依存して"],
  correctAnswer: "とは違って"
},

  {
  id: 861,
  question: "astonish",
  choices: ["ひどく驚かす", "安心させる", "悲しませる", "怒らせる"],
  correctAnswer: "ひどく驚かす"
  },
  {
  id: 862,
  question: "divide",
  choices: ["分割する", "結合する", "拡大する", "減少する"],
  correctAnswer: "分割する"
  },
  {
  id: 863,
  question: "at least",
  choices: ["少なくとも", "最大で", "完全に", "一切なしで"],
  correctAnswer: "少なくとも"
  },
  {
  id: 864,
  question: "distract",
  choices: ["気を散らす", "集中させる", "強化する", "支援する"],
  correctAnswer: "気を散らす"
  },
  {
  id: 865,
  question: "describe",
  choices: ["述べる", "隠す", "無視する", "否定する"],
  correctAnswer: "述べる"
  },
  {
  id: 866,
  question: "in place",
  choices: ["決まった場所に", "場違いで", "動いて", "進行中で"],
  correctAnswer: "決まった場所に"
  },
  {
  id: 867,
  question: "opinion",
  choices: ["意見", "事実", "解決", "問題"],
  correctAnswer: "意見"
  },
  {
  id: 868,
  question: "finally",
  choices: ["ついに", "始めに", "一時的に", "継続的に"],
  correctAnswer: "ついに"
  },
  {
  id: 869,
  question: "frown",
  choices: ["しかめっ面", "笑顔", "無表情", "泣き顔"],
  correctAnswer: "しかめっ面"
  },
  {
  id: 870,
  question: "culture",
  choices: ["文化", "自然", "科学", "技術"],
  correctAnswer: "文化"
},

  {
  id: 871,
  question: "overcome",
  choices: ["克服する", "屈する", "避ける", "無視する"],
  correctAnswer: "克服する"
  },
  {
  id: 872,
  question: "figure",
  choices: ["形", "色", "音", "味"],
  correctAnswer: "形"
  },
  {
  id: 873,
  question: "inspire",
  choices: ["鼓舞する", "抑える", "恐れる", "退屈させる"],
  correctAnswer: "鼓舞する"
  },
  {
  id: 874,
  question: "prize",
  choices: ["賞", "罰", "任務", "責任"],
  correctAnswer: "賞"
  },
  {
  id: 875,
  question: "accomplishment",
  choices: ["完成", "失敗", "進行中", "計画"],
  correctAnswer: "完成"
  },
  {
  id: 876,
  question: "suburb",
  choices: ["郊外", "都心", "地方", "農村"],
  correctAnswer: "郊外"
  },
  {
  id: 877,
  question: "drag",
  choices: ["引っ張る", "押す", "投げる", "落とす"],
  correctAnswer: "引っ張る"
  },
  {
  id: 878,
  question: "mineral",
  choices: ["無機物", "生物", "ガス", "液体"],
  correctAnswer: "無機物"
  },
  {
  id: 879,
  question: "escape",
  choices: ["逃れる", "向かう", "接近する", "滞在する"],
  correctAnswer: "逃れる"
  },
  {
  id: 880,
  question: "come out",
  choices: ["出てくる", "消える", "停止する", "後退する"],
  correctAnswer: "出てくる"
},
  {
  id: 881,
  question: "tremble",
  choices: ["震える", "安定する", "強化する", "静まる"],
  correctAnswer: "震える"
  },
  {
  id: 882,
  question: "stay up",
  choices: ["起きている", "寝る", "座る", "出かける"],
  correctAnswer: "起きている"
  },
  {
  id: 883,
  question: "genuine",
  choices: ["本物の", "偽物の", "模倣の", "代用の"],
  correctAnswer: "本物の"
  },
  {
  id: 884,
  question: "come across",
  choices: ["出くわす", "避ける", "追い越す", "探求する"],
  correctAnswer: "出くわす"
  },
  {
  id: 885,
  question: "needlessly",
  choices: ["不必要に", "必要に応じて", "緊急に", "意図的に"],
  correctAnswer: "不必要に"
  },
  {
  id: 886,
  question: "in exchange",
  choices: ["と引き換えに", "加えて", "独立して", "反対して"],
  correctAnswer: "と引き換えに"
  },
  {
  id: 887,
  question: "during",
  choices: ["の間", "前に", "後に", "以外に"],
  correctAnswer: "の間"
  },
  {
  id: 888,
  question: "island",
  choices: ["島", "大陸", "半島", "河川"],
  correctAnswer: "島"
  },
  {
  id: 889,
  question: "property",
  choices: ["財産", "負債", "義務", "権利"],
  correctAnswer: "財産"
  },
  {
  id: 890,
  question: "deaf",
  choices: ["耳が不自由な", "目が不自由な", "話すことができない", "健康な"],
  correctAnswer: "耳が不自由な"
},

  {
  id: 891,
  question: "masterpiece",
  choices: ["傑作", "失敗作", "下書き", "初作"],
  correctAnswer: "傑作"
  },
  {
  id: 892,
  question: "bound for",
  choices: ["行きの", "帰りの", "周辺の", "対抗する"],
  correctAnswer: "行きの"
  },
  {
  id: 893,
  question: "in stock",
  choices: ["在庫あり", "完売", "注文中", "廃盤"],
  correctAnswer: "在庫あり"
  },
  {
  id: 894,
  question: "admission",
  choices: ["入場", "拒否", "退出", "停止"],
  correctAnswer: "入場"
  },
  {
  id: 895,
  question: "retire",
  choices: ["退職する", "就職する", "昇進する", "転職する"],
  correctAnswer: "退職する"
  },
  {
  id: 896,
  question: "deliver",
  choices: ["配達する", "受け取る", "拒否する", "返品する"],
  correctAnswer: "配達する"
  },
  {
  id: 897,
  question: "draw",
  choices: ["描く", "消去する", "無視する", "分析する"],
  correctAnswer: "描く"
  },
  {
  id: 898,
  question: "factory",
  choices: ["工場", "オフィス", "学校", "病院"],
  correctAnswer: "工場"
  },
  {
  id: 899,
  question: "create",
  choices: ["創造する", "破壊する", "修正する", "検証する"],
  correctAnswer: "創造する"
  },
  {
  id: 900,
  question: "rather",
  choices: ["むしろ", "絶対に", "少しも", "完全に"],
  correctAnswer: "むしろ"
},

  {
  id: 901,
  question: "thrathereat",
  choices: ["脅威", "安全", "機会", "利益"],
  correctAnswer: "脅威"
  },
  {
  id: 902,
  question: "tropical",
  choices: ["熱帯の", "寒帯の", "温帯の", "乾燥の"],
  correctAnswer: "熱帯の"
  },
  {
  id: 903,
  question: "act on",
  choices: ["決定する", "無視する", "推遲する", "反対する"],
  correctAnswer: "決定する"
  },
  {
  id: 904,
  question: "vital",
  choices: ["極めて重要な", "無意味な", "二次的な", "一時的な"],
  correctAnswer: "極めて重要な"
  },
  {
  id: 905,
  question: "agricultural",
  choices: ["農業の", "工業の", "商業の", "教育の"],
  correctAnswer: "農業の"
  },
  {
  id: 906,
  question: "altogether",
  choices: ["完全に", "部分的に", "たまに", "時々"],
  correctAnswer: "完全に"
  },
  {
  id: 907,
  question: "quantity",
  choices: ["量", "質", "種類", "形状"],
  correctAnswer: "量"
  },
  {
  id: 908,
  question: "male",
  choices: ["男性", "女性", "子供", "老人"],
  correctAnswer: "男性"
  },
  {
  id: 909,
  question: "by means of",
  choices: ["によって", "対して", "近くで", "向かって"],
  correctAnswer: "によって"
  },
  {
  id: 910,
  question: "insist",
  choices: ["強く主張する", "譲る", "同意する", "無視する"],
  correctAnswer: "強く主張する"
},

  {
  id: 911,
  question: "hesitation",
  choices: ["ためらい", "決断", "急ぎ", "自信"],
  correctAnswer: "ためらい"
  },
  {
  id: 912,
  question: "persist in",
  choices: ["固執する", "放棄する", "避ける", "譲る"],
  correctAnswer: "固執する"
  },
  {
  id: 913,
  question: "conversation",
  choices: ["会話", "沈黙", "独り言", "叫び"],
  correctAnswer: "会話"
  },
  {
  id: 914,
  question: "ordinary",
  choices: ["ふつうの", "特別な", "珍しい", "異常な"],
  correctAnswer: "ふつうの"
  },
  {
  id: 915,
  question: "in vain",
  choices: ["無駄に", "成功して", "効果的に", "注意深く"],
  correctAnswer: "無駄に"
  },
  {
  id: 916,
  question: "catch up with",
  choices: ["に追いつく", "から遅れる", "を避ける", "を見下ろす"],
  correctAnswer: "に追いつく"
  },
  {
  id: 917,
  question: "off duty",
  choices: ["非番の", "勤務中の", "準備中の", "出勤中の"],
  correctAnswer: "非番の"
  },
  {
  id: 918,
  question: "live on",
  choices: ["生き続ける", "終わる", "停止する", "消える"],
  correctAnswer: "生き続ける"
  },
  {
  id: 919,
  question: "illustration",
  choices: ["図解", "文章", "批評", "無視"],
  correctAnswer: "図解"
  },
  {
  id: 920,
  question: "expensive",
  choices: ["高価な", "安価な", "無料の", "価値のない"],
  correctAnswer: "高価な"
},

  {
  id: 921,
  question: "expect",
  choices: ["予期する", "無視する", "拒絶する", "確認する"],
  correctAnswer: "予期する"
  },
  {
  id: 922,
  question: "concentration",
  choices: ["集中", "分散", "中断", "放棄"],
  correctAnswer: "集中"
  },
  {
  id: 923,
  question: "thermometer",
  choices: ["温度計", "圧力計", "速度計", "湿度計"],
  correctAnswer: "温度計"
  },
  {
  id: 924,
  question: "advertisement",
  choices: ["広告", "報告", "論文", "通知"],
  correctAnswer: "広告"
  },
  {
  id: 925,
  question: "debt",
  choices: ["借金", "資産", "利益", "配当"],
  correctAnswer: "借金"
  },
  {
  id: 926,
  question: "pull down",
  choices: ["引き下げる", "持ち上げる", "固定する", "拡大する"],
  correctAnswer: "引き下げる"
  },
  {
  id: 927,
  question: "investigate",
  choices: ["調査する", "無視する", "推測する", "発表する"],
  correctAnswer: "調査する"
  },
  {
  id: 928,
  question: "description",
  choices: ["説明書", "予測", "要約", "指示"],
  correctAnswer: "説明書"
  },
  {
  id: 929,
  question: "as follows",
  choices: ["次のとおり", "前述のとおり", "遠く離れて", "近接して"],
  correctAnswer: "次のとおり"
  },
  {
  id: 930,
  question: "bother",
  choices: ["面倒", "楽", "快適", "有益"],
  correctAnswer: "面倒"
},

  {
  id: 931,
  question: "punishment",
  choices: ["罰", "報酬", "推薦", "承認"],
  correctAnswer: "罰"
  },
  {
  id: 932,
  question: "propose",
  choices: ["提案する", "拒絶する", "無視する", "批判する"],
  correctAnswer: "提案する"
  },
  {
  id: 933,
  question: "flame",
  choices: ["火炎", "水", "氷", "風"],
  correctAnswer: "火炎"
  },
  {
  id: 934,
  question: "ambulance",
  choices: ["救急車", "消防車", "パトカー", "タクシー"],
  correctAnswer: "救急車"
  },
  {
  id: 935,
  question: "intense",
  choices: ["激しい", "穏やかな", "軽微な", "一時的な"],
  correctAnswer: "激しい"
  },
  {
  id: 936,
  question: "impossible",
  choices: ["不可能な", "可能な", "簡単な", "確実な"],
  correctAnswer: "不可能な"
  },
  {
  id: 937,
  question: "be accustomed to",
  choices: ["に慣れている", "に新しい", "に抵抗がある", "に関心がない"],
  correctAnswer: "に慣れている"
  },
  {
  id: 938,
  question: "curiosity",
  choices: ["好奇心", "無関心", "恐怖", "確信"],
  correctAnswer: "好奇心"
  },
  {
  id: 939,
  question: "organization",
  choices: ["組織", "個人", "無秩序", "混乱"],
  correctAnswer: "組織"
  },
  {
  id: 940,
  question: "in danger of",
  choices: ["の危険にさらされている", "の安全を確保している", "から保護されている", "に利益を与える"],
  correctAnswer: "の危険にさらされている"
},

  {
  id: 941,
  question: "in turn",
  choices: ["順番に", "同時に", "無関係に", "独立して"],
  correctAnswer: "順番に"
  },
  {
  id: 942,
  question: "worthy of",
  choices: ["ふさわしくて", "遠く離れて", "不十分で", "反対して"],
  correctAnswer: "ふさわしくて"
  },
  {
  id: 943,
  question: "look up to",
  choices: ["尊敬する", "軽蔑する", "無視する", "恐れる"],
  correctAnswer: "尊敬する"
  },
  {
  id: 944,
  question: "add to",
  choices: ["増やす", "減らす", "保持する", "無視する"],
  correctAnswer: "増やす"
  },
  {
  id: 945,
  question: "submit",
  choices: ["提出する", "拒絶する", "保留する", "回避する"],
  correctAnswer: "提出する"
  },
  {
  id: 946,
  question: "immigration",
  choices: ["移住", "出国", "帰国", "転出"],
  correctAnswer: "移住"
  },
  {
  id: 947,
  question: "convince",
  choices: ["納得させる", "混乱させる", "撤回させる", "避けさせる"],
  correctAnswer: "納得させる"
  },
  {
  id: 948,
  question: "declare",
  choices: ["宣言する", "隠す", "否定する", "疑う"],
  correctAnswer: "宣言する"
  },
  {
  id: 949,
  question: "vain",
  choices: ["うぬぼれの強い", "謙虚な", "誠実な", "共感的な"],
  correctAnswer: "うぬぼれの強い"
  },
  {
  id: 950,
  question: "resource",
  choices: ["資源", "障害", "制限", "問題"],
  correctAnswer: "資源"
},

  {
  id: 951,
  question: "domestic",
  choices: ["国内の", "国外の", "普遍的な", "特定の"],
  correctAnswer: "国内の"
  },
  {
  id: 952,
  question: "make up",
  choices: ["用意する", "取り消す", "拒絶する", "議論する"],
  correctAnswer: "用意する"
  },
  {
  id: 953,
  question: "affection",
  choices: ["愛情", "無関心", "敵意", "恐怖"],
  correctAnswer: "愛情"
  },
  {
  id: 954,
  question: "recent",
  choices: ["最近の", "古い", "永続的な", "将来の"],
  correctAnswer: "最近の"
  },
  {
  id: 955,
  question: "discovery",
  choices: ["発見", "損失", "隠蔽", "放棄"],
  correctAnswer: "発見"
  },
  {
  id: 956,
  question: "by heart",
  choices: ["暗記して", "理解して", "感情的に", "偶然に"],
  correctAnswer: "暗記して"
  },
  {
  id: 957,
  question: "stimulate",
  choices: ["刺激する", "鎮める", "抑制する", "破壊する"],
  correctAnswer: "刺激する"
  },
  {
  id: 958,
  question: "college",
  choices: ["大学", "小学校", "中学校", "高校"],
  correctAnswer: "大学"
  },
  {
  id: 959,
  question: "academically",
  choices: ["学問的に", "経済的に", "社会的に", "個人的に"],
  correctAnswer: "学問的に"
  },
  {
  id: 960,
  question: "grass",
  choices: ["草", "木", "花", "果物"],
  correctAnswer: "草"
},

  {
  id: 961,
  question: "praise",
  choices: ["ほめる", "非難する", "無視する", "疑う"],
  correctAnswer: "ほめる"
  },
  {
  id: 962,
  question: "dentist",
  choices: ["歯医者", "眼科医", "心理学者", "整形外科医"],
  correctAnswer: "歯医者"
  },
  {
  id: 963,
  question: "truly",
  choices: ["真に", "偽りに", "部分的に", "疑わしげに"],
  correctAnswer: "真に"
  },
  {
  id: 964,
  question: "cling",
  choices: ["くっつく", "離れる", "破壊する", "変化する"],
  correctAnswer: "くっつく"
  },
  {
  id: 965,
  question: "clip",
  choices: ["切る", "結ぶ", "拡大する", "減少する"],
  correctAnswer: "切る"
  },
  {
  id: 966,
  question: "reaction",
  choices: ["反応", "無反応", "予測", "計画"],
  correctAnswer: "反応"
  },
  {
  id: 967,
  question: "conventional",
  choices: ["従来の", "革新的な", "珍しい", "特異な"],
  correctAnswer: "従来の"
  },
  {
  id: 968,
  question: "relieve",
  choices: ["和らげる", "強化する", "挑発する", "無視する"],
  correctAnswer: "和らげる"
  },
  {
  id: 969,
  question: "seek",
  choices: ["求める", "避ける", "放棄する", "拒絶する"],
  correctAnswer: "求める"
  },
  {
  id: 970,
  question: "forever",
  choices: ["永遠に", "一時的に", "稀に", "たまに"],
  correctAnswer: "永遠に"
},

  {
  id: 971,
  question: "intervention",
  choices: ["介在", "無関係", "対立", "合意"],
  correctAnswer: "介在"
  },
  {
  id: 972,
  question: "historian",
  choices: ["歴史家", "物理学者", "芸術家", "政治家"],
  correctAnswer: "歴史家"
  },
  {
  id: 973,
  question: "whether",
  choices: ["どちらか", "常に", "決して", "時々"],
  correctAnswer: "どちらか"
  },
  {
  id: 974,
  question: "ethnic",
  choices: ["民族の", "国際的な", "個人的な", "普遍的な"],
  correctAnswer: "民族の"
  },
  {
  id: 975,
  question: "swear",
  choices: ["誓う", "否定する", "疑う", "議論する"],
  correctAnswer: "誓う"
  },
  {
  id: 976,
  question: "responsibility",
  choices: ["責任", "自由", "権利", "機会"],
  correctAnswer: "責任"
  },
  {
  id: 977,
  question: "opponent",
  choices: ["相手", "支持者", "同盟者", "指導者"],
  correctAnswer: "相手"
  },
  {
  id: 978,
  question: "blow",
  choices: ["吹く", "引く", "止める", "保持する"],
  correctAnswer: "吹く"
  },
  {
  id: 979,
  question: "history",
  choices: ["歴史", "現在", "未来", "仮説"],
  correctAnswer: "歴史"
  },
  {
  id: 980,
  question: "society",
  choices: ["社会", "個人", "孤立", "無秩序"],
  correctAnswer: "社会"
},

  {
  id: 981,
  question: "mature",
  choices: ["成熟した", "未成年の", "初期の", "退化した"],
  correctAnswer: "成熟した"
  },
  {
  id: 982,
  question: "democratic",
  choices: ["民主主義の", "独裁的な", "君主制の", "専制的な"],
  correctAnswer: "民主主義の"
  },
  {
  id: 983,
  question: "manager",
  choices: ["部長", "従業員", "顧客", "パートナー"],
  correctAnswer: "部長"
  },
  {
  id: 984,
  question: "definition",
  choices: ["定義", "推測", "矛盾", "複製"],
  correctAnswer: "定義"
  },
  {
  id: 985,
  question: "abstract",
  choices: ["抽象的な", "具体的な", "明白な", "隠された"],
  correctAnswer: "抽象的な"
  },
  {
  id: 986,
  question: "recover",
  choices: ["回復する", "悪化する", "停止する", "進化する"],
  correctAnswer: "回復する"
  },
  {
  id: 987,
  question: "notion",
  choices: ["考え", "事実", "指示", "批判"],
  correctAnswer: "考え"
  },
  {
  id: 988,
  question: "reject",
  choices: ["拒絶する", "受け入れる", "検討する", "推奨する"],
  correctAnswer: "拒絶する"
  },
  {
  id: 989,
  question: "chamber",
  choices: ["小部屋", "大ホール", "屋外", "公共スペース"],
  correctAnswer: "小部屋"
  },
  {
  id: 990,
  question: "desire",
  choices: ["願望", "無関心", "満足", "恐怖"],
  correctAnswer: "願望"
},

  {
  id: 991,
  question: "distinguish",
  choices: ["区別する", "一般化する", "混同する", "結合する"],
  correctAnswer: "区別する"
  },
  {
  id: 992,
  question: "warn",
  choices: ["警告する", "奨励する", "賛成する", "無視する"],
  correctAnswer: "警告する"
  },
  {
  id: 993,
  question: "excess",
  choices: ["過剰", "不足", "平均", "最小限"],
  correctAnswer: "過剰"
  },
  {
  id: 994,
  question: "numerous",
  choices: ["多数の", "少数の", "単一の", "二つの"],
  correctAnswer: "多数の"
  },
  {
  id: 995,
  question: "harmony",
  choices: ["調和", "衝突", "混乱", "隔たり"],
  correctAnswer: "調和"
  },
  {
  id: 996,
  question: "fail",
  choices: ["失敗する", "成功する", "進む", "保留する"],
  correctAnswer: "失敗する"
  },
  {
  id: 997,
  question: "gentle",
  choices: ["穏やかな", "激しい", "急な", "鋭い"],
  correctAnswer: "穏やかな"
  },
  {
  id: 998,
  question: "enforcement",
  choices: ["執行", "放棄", "拒否", "疑問"],
  correctAnswer: "執行"
  },
  {
  id: 999,
  question: "trait",
  choices: ["特性", "平凡", "不確実性", "一般性"],
  correctAnswer: "特性"
  },
  {
  id: 1000,
  question: "deficit",
  choices: ["赤字", "黒字", "バランス", "超過"],
  correctAnswer: "赤字"
},

  {
  id: 1001,
  question: "source",
  choices: ["情報源", "結果", "効果", "解決"],
  correctAnswer: "情報源"
  },
  {
  id: 1002,
  question: "representative",
  choices: ["代表者", "敵", "観客", "批評家"],
  correctAnswer: "代表者"
  },
  {
  id: 1003,
  question: "commitment",
  choices: ["約束", "拒絶", "無関心", "疑念"],
  correctAnswer: "約束"
  },
  {
  id: 1004,
  question: "worry",
  choices: ["心配する", "安心する", "喜ぶ", "無視する"],
  correctAnswer: "心配する"
  },
  {
  id: 1005,
  question: "bitter",
  choices: ["苦い", "甘い", "酸っぱい", "辛い"],
  correctAnswer: "苦い"
  },
  {
  id: 1006,
  question: "assess",
  choices: ["評価する", "無視する", "拒否する", "推測する"],
  correctAnswer: "評価する"
  },
  {
  id: 1007,
  question: "prosecution",
  choices: ["起訴", "防衛", "支援", "和解"],
  correctAnswer: "起訴"
  },
  {
  id: 1008,
  question: "discussion",
  choices: ["議論", "合意", "命令", "観察"],
  correctAnswer: "議論"
  },
  {
  id: 1009,
  question: "drift",
  choices: ["漂流", "沈む", "固定する", "上昇する"],
  correctAnswer: "漂流"
  },
  {
  id: 1010,
  question: "troop",
  choices: ["群れ", "単独", "ペア", "集団"],
  correctAnswer: "群れ"
},

  {
  id: 1011,
  question: "crack",
  choices: ["裂け目", "結合", "平滑", "曲線"],
  correctAnswer: "裂け目"
  },
  {
  id: 1012,
  question: "output",
  choices: ["生産量", "消費量", "入力", "減少"],
  correctAnswer: "生産量"
  },
  {
  id: 1013,
  question: "relation",
  choices: ["関係性", "隔たり", "単独性", "独立"],
  correctAnswer: "関係性"
  },
  {
  id: 1014,
  question: "law",
  choices: ["法律", "理論", "仮説", "指針"],
  correctAnswer: "法律"
  },
  {
  id: 1015,
  question: "share",
  choices: ["分かち合う", "独占する", "排除する", "無視する"],
  correctAnswer: "分かち合う"
  },
  {
  id: 1016,
  question: "assist",
  choices: ["手伝う", "妨害する", "批判する", "無視する"],
  correctAnswer: "手伝う"
  },
  {
  id: 1017,
  question: "later",
  choices: ["後に", "前に", "同時に", "常に"],
  correctAnswer: "後に"
  },
  {
  id: 1018,
  question: "resolution",
  choices: ["解決", "問題", "混乱", "複雑化"],
  correctAnswer: "解決"
  },
  {
  id: 1019,
  question: "welcome",
  choices: ["歓迎される", "拒絶される", "無視される", "懐疑される"],
  correctAnswer: "歓迎される"
  },
  {
  id: 1020,
  question: "ensure",
  choices: ["確実にする", "疑う", "放棄する", "危険にさらす"],
  correctAnswer: "確実にする"
},

  {
  id: 1021,
  question: "classical",
  choices: ["古典の", "現代の", "未来の", "革新的な"],
  correctAnswer: "古典の"
  },
  {
  id: 1022,
  question: "merely",
  choices: ["単に", "完全に", "複雑に", "明確に"],
  correctAnswer: "単に"
  },
  {
  id: 1023,
  question: "according",
  choices: ["による", "反して", "無関係に", "一致して"],
  correctAnswer: "による"
  },
  {
  id: 1024,
  question: "occupation",
  choices: ["職業", "趣味", "休息", "勉強"],
  correctAnswer: "職業"
  },
  {
  id: 1025,
  question: "proportion",
  choices: ["比率", "一致", "不一致", "差異"],
  correctAnswer: "比率"
  },
  {
  id: 1026,
  question: "anger",
  choices: ["怒り", "喜び", "悲しみ", "興奮"],
  correctAnswer: "怒り"
  },
  {
  id: 1027,
  question: "delivery",
  choices: ["配達", "回収", "保持", "拒絶"],
  correctAnswer: "配達"
  },
  {
  id: 1028,
  question: "annoy",
  choices: ["いらだたせる", "喜ばせる", "安心させる", "鼓舞する"],
  correctAnswer: "いらだたせる"
  },
  {
  id: 1029,
  question: "civilian",
  choices: ["民間人", "軍人", "外交官", "政治家"],
  correctAnswer: "民間人"
  },
  {
  id: 1030,
  question: "craft",
  choices: ["工芸", "科学", "文学", "歴史"],
  correctAnswer: "工芸"
},

  {
  id: 1031,
  question: "appreciate",
  choices: ["感謝する", "無視する", "軽蔑する", "疑う"],
  correctAnswer: "感謝する"
  },
  {
  id: 1032,
  question: "corridor",
  choices: ["廊下", "部屋", "庭", "屋根"],
  correctAnswer: "廊下"
  },
  {
  id: 1033,
  question: "plenty",
  choices: ["たくさん", "少し", "全くない", "適度に"],
  correctAnswer: "たくさん"
  },
  {
  id: 1034,
  question: "virtue",
  choices: ["徳", "悪徳", "中立", "無関心"],
  correctAnswer: "徳"
  },
  {
  id: 1035,
  question: "pleasure",
  choices: ["楽しみ", "苦痛", "恐怖", "悲しみ"],
  correctAnswer: "楽しみ"
  },
  {
  id: 1036,
  question: "bored",
  choices: ["退屈した", "興奮した", "満足した", "活気づいた"],
  correctAnswer: "退屈した"
  },
  {
  id: 1037,
  question: "behavior",
  choices: ["振る舞い", "停止", "無関心", "混乱"],
  correctAnswer: "振る舞い"
  },
  {
  id: 1038,
  question: "conscious",
  choices: ["意識して", "無意識に", "偶然に", "反射的に"],
  correctAnswer: "意識して"
  },
  {
  id: 1039,
  question: "objective",
  choices: ["目標", "障害", "回避", "失敗"],
  correctAnswer: "目標"
  },
  {
  id: 1040,
  question: "education",
  choices: ["教育", "遊び", "業務", "休息"],
  correctAnswer: "教育"
},

  {
  id: 1041,
  question: "regional",
  choices: ["地方の", "全国的な", "国際的な", "個人的な"],
  correctAnswer: "地方の"
  },
  {
  id: 1042,
  question: "controversial",
  choices: ["議論の的になる", "普遍的な", "無害な", "一致した"],
  correctAnswer: "議論の的になる"
  },
  {
  id: 1043,
  question: "investigator",
  choices: ["捜査官", "被告", "証人", "弁護士"],
  correctAnswer: "捜査官"
  },
  {
  id: 1044,
  question: "slide",
  choices: ["滑る", "登る", "跳ぶ", "停止する"],
  correctAnswer: "滑る"
  },
  {
  id: 1045,
  question: "seat",
  choices: ["着席させる", "立たせる", "踊らせる", "走らせる"],
  correctAnswer: "着席させる"
  },
  {
  id: 1046,
  question: "tap",
  choices: ["軽くたたく", "強く押す", "引っ張る", "切る"],
  correctAnswer: "軽くたたく"
  },
  {
  id: 1047,
  question: "manner",
  choices: ["やり方", "停止", "無視", "拒絶"],
  correctAnswer: "やり方"
  },
  {
  id: 1048,
  question: "therapy",
  choices: ["治療", "診断", "予防", "感染"],
  correctAnswer: "治療"
  },
  {
  id: 1049,
  question: "compete",
  choices: ["競争する", "協力する", "避ける", "譲る"],
  correctAnswer: "競争する"
  },
  {
  id: 1050,
  question: "representation",
  choices: ["表現", "無視", "矛盾", "単純化"],
  correctAnswer: "表現"
},

  {
  id: 1051,
  question: "tear",
  choices: ["引き裂く", "結ぶ", "修理する", "構築する"],
  correctAnswer: "引き裂く"
  },
  {
  id: 1052,
  question: "crucial",
  choices: ["重要な", "無関係な", "取るに足らない", "避けられる"],
  correctAnswer: "重要な"
  },
  {
  id: 1053,
  question: "creative",
  choices: ["創造的な", "受動的な", "模倣的な", "消極的な"],
  correctAnswer: "創造的な"
  },
  {
  id: 1054,
  question: "realize",
  choices: ["わかる", "忘れる", "無視する", "否定する"],
  correctAnswer: "わかる"
  },
  {
  id: 1055,
  question: "physics",
  choices: ["物理学", "化学", "生物学", "地学"],
  correctAnswer: "物理学"
  },
  {
  id: 1056,
  question: "invest",
  choices: ["投資する", "撤退する", "節約する", "消費する"],
  correctAnswer: "投資する"
  },
  {
  id: 1057,
  question: "satisfaction",
  choices: ["満足", "不満", "無関心", "不安"],
  correctAnswer: "満足"
  },
  {
  id: 1058,
  question: "dust",
  choices: ["ほこり", "水", "油", "煙"],
  correctAnswer: "ほこり"
  },
  {
  id: 1059,
  question: "possible",
  choices: ["可能な", "不可能な", "不確実な", "永続的な"],
  correctAnswer: "可能な"
  },
  {
  id: 1060,
  question: "tremendous",
  choices: ["非常に大きな", "非常に小さな", "平均的な", "微細な"],
  correctAnswer: "非常に大きな"
},

  {
  id: 1061,
  question: "typically",
  choices: ["典型的に", "異例に", "偶然に", "矛盾して"],
  correctAnswer: "典型的に"
  },
  {
  id: 1062,
  question: "awareness",
  choices: ["気づき", "無知", "混乱", "無関心"],
  correctAnswer: "気づき"
  },
  {
  id: 1063,
  question: "quite",
  choices: ["かなり", "わずかに", "全く", "まったくなく"],
  correctAnswer: "かなり"
  },
  {
  id: 1064,
  question: "committee",
  choices: ["委員会", "集会", "クラブ", "グループ"],
  correctAnswer: "委員会"
  },
  {
  id: 1065,
  question: "dependent",
  choices: ["依存している", "独立している", "支配している", "反抗している"],
  correctAnswer: "依存している"
  },
  {
  id: 1066,
  question: "especially",
  choices: ["特に", "普通", "時々", "決して"],
  correctAnswer: "特に"
  },
  {
  id: 1067,
  question: "deputy",
  choices: ["代理", "主役", "対立者", "敵"],
  correctAnswer: "代理"
  },
  {
  id: 1068,
  question: "extent",
  choices: ["程度", "狭さ", "限界", "最小限"],
  correctAnswer: "程度"
  },
  {
  id: 1069,
  question: "subject",
  choices: ["教科", "余談", "選択", "指令"],
  correctAnswer: "教科"
  },
  {
  id: 1070,
  question: "horror",
  choices: ["恐怖", "喜び", "驚き", "悲しみ"],
  correctAnswer: "恐怖"
},

  {
  id: 1071,
  question: "salary",
  choices: ["給与", "賞金", "手当", "ボーナス"],
  correctAnswer: "給与"
  },
  {
  id: 1072,
  question: "grand",
  choices: ["壮大な", "普通の", "小さな", "狭い"],
  correctAnswer: "壮大な"
  },
  {
  id: 1073,
  question: "guide",
  choices: ["案内する", "追放する", "無視する", "批判する"],
  correctAnswer: "案内する"
  },
  {
  id: 1074,
  question: "vessel",
  choices: ["容器", "物質", "成分", "装置"],
  correctAnswer: "容器"
  },
  {
  id: 1075,
  question: "cooperation",
  choices: ["協力", "対立", "独立", "競争"],
  correctAnswer: "協力"
  },
  {
  id: 1076,
  question: "interfere",
  choices: ["干渉する", "支援する", "承認する", "応援する"],
  correctAnswer: "干渉する"
  },
  {
  id: 1077,
  question: "recall",
  choices: ["呼び戻す", "放棄する", "忘れる", "進む"],
  correctAnswer: "呼び戻す"
  },
  {
  id: 1078,
  question: "patience",
  choices: ["辛抱強さ", "急ぎ", "無関心", "攻撃性"],
  correctAnswer: "辛抱強さ"
  },
  {
  id: 1079,
  question: "venture",
  choices: ["冒険的事業", "安定した事業", "収益性の低い事業", "一時的な事業"],
  correctAnswer: "冒険的事業"
  },
  {
  id: 1080,
  question: "annual",
  choices: ["毎年の", "月次の", "一度きりの", "毎日の"],
  correctAnswer: "毎年の"
},

  {
  id: 1081,
  question: "fair",
  choices: ["公平な", "不公平な", "一方的な", "偏見がある"],
  correctAnswer: "公平な"
  },
  {
  id: 1082,
  question: "bill",
  choices: ["請求書", "受領書", "手紙", "日記"],
  correctAnswer: "請求書"
  },
  {
  id: 1083,
  question: "behind",
  choices: ["背後に", "前方に", "上に", "下に"],
  correctAnswer: "背後に"
  },
  {
  id: 1084,
  question: "suppose",
  choices: ["だと思う", "知る", "否定する", "確認する"],
  correctAnswer: "だと思う"
  },
  {
  id: 1085,
  question: "provision",
  choices: ["供給", "消費", "廃棄", "回収"],
  correctAnswer: "供給"
  },
  {
  id: 1086,
  question: "depend",
  choices: ["依存する", "独立する", "抵抗する", "諦める"],
  correctAnswer: "依存する"
  },
  {
  id: 1087,
  question: "myth",
  choices: ["神話", "歴史", "真実", "科学"],
  correctAnswer: "神話"
  },
  {
  id: 1088,
  question: "sink",
  choices: ["沈む", "浮かぶ", "飛ぶ", "走る"],
  correctAnswer: "沈む"
  },
  {
  id: 1089,
  question: "pregnant",
  choices: ["妊娠している", "独身の", "忙しい", "リラックスしている"],
  correctAnswer: "妊娠している"
  },
  {
  id: 1090,
  question: "derive",
  choices: ["引き出す", "挿入する", "廃棄する", "無視する"],
  correctAnswer: "引き出す"
},

  {
  id: 1091,
  question: "practically",
  choices: ["実質的に", "理論上", "感情的に", "直感的に"],
  correctAnswer: "実質的に"
  },
  {
  id: 1092,
  question: "elaborate",
  choices: ["手の込んだ", "簡単な", "直接的な", "大まかな"],
  correctAnswer: "手の込んだ"
  },
  {
  id: 1093,
  question: "refugee",
  choices: ["難民", "観光客", "移民", "居住者"],
  correctAnswer: "難民"
  },
  {
  id: 1094,
  question: "motive",
  choices: ["動機", "結果", "手段", "目的"],
  correctAnswer: "動機"
  },
  {
  id: 1095,
  question: "ally",
  choices: ["同盟する", "対立する", "分離する", "無視する"],
  correctAnswer: "同盟する"
  },
  {
  id: 1096,
  question: "minimum",
  choices: ["最小の", "最大の", "平均の", "適度な"],
  correctAnswer: "最小の"
  },
  {
  id: 1097,
  question: "attorney",
  choices: ["弁護士", "医者", "教師", "会計士"],
  correctAnswer: "弁護士"
  },
  {
  id: 1098,
  question: "commissioner",
  choices: ["委員", "社員", "管理者", "顧客"],
  correctAnswer: "委員"
  },
  {
  id: 1099,
  question: "clue",
  choices: ["手がかり", "解答", "妨害", "賞賛"],
  correctAnswer: "手がかり"
  },
  {
  id: 1100,
  question: "minister",
  choices: ["大臣", "事務官", "教授", "技術者"],
  correctAnswer: "大臣"
},

  {
  id: 1101,
  question: "arrival",
  choices: ["到着", "出発", "遅延", "旅"],
  correctAnswer: "到着"
  },
  {
  id: 1102,
  question: "technical",
  choices: ["技術上の", "理論的な", "実践的な", "非科学的な"],
  correctAnswer: "技術上の"
  },
  {
  id: 1103,
  question: "similarity",
  choices: ["類似点", "差異", "矛盾", "一致"],
  correctAnswer: "類似点"
  },
  {
  id: 1104,
  question: "fully",
  choices: ["十分に", "部分的に", "ほとんど", "全く"],
  correctAnswer: "十分に"
  },
  {
  id: 1105,
  question: "nowhere",
  choices: ["どこにも", "どこかに", "そこに", "ここに"],
  correctAnswer: "どこにも"
  },
  {
  id: 1106,
  question: "hunger",
  choices: ["飢え", "満足", "過食", "渇望"],
  correctAnswer: "飢え"
  },
  {
  id: 1107,
  question: "pretend",
  choices: ["ふりをする", "拒否する", "受け入れる", "確認する"],
  correctAnswer: "ふりをする"
  },
  {
  id: 1108,
  question: "perception",
  choices: ["知覚", "無関心", "誤解", "確信"],
  correctAnswer: "知覚"
  },
  {
  id: 1109,
  question: "leap",
  choices: ["飛び跳ねる", "歩く", "這う", "滑る"],
  correctAnswer: "飛び跳ねる"
  },
  {
  id: 1110,
  question: "lie",
  choices: ["横たわる", "立つ", "座る", "跳ぶ"],
  correctAnswer: "横たわる"
},

  {
  id: 1111,
  question: "tongue",
  choices: ["舌", "手", "足", "目"],
  correctAnswer: "舌"
  },
  {
  id: 1112,
  question: "success",
  choices: ["成功", "失敗", "試み", "過程"],
  correctAnswer: "成功"
  },
  {
  id: 1113,
  question: "candidate",
  choices: ["候補者", "観客", "指導者", "敵"],
  correctAnswer: "候補者"
  },
  {
  id: 1114,
  question: "hate",
  choices: ["ひどく嫌う", "愛する", "無視する", "好む"],
  correctAnswer: "ひどく嫌う"
  },
  {
  id: 1115,
  question: "notice",
  choices: ["気づく", "無視する", "拒否する", "忘れる"],
  correctAnswer: "気づく"
  },
  {
  id: 1116,
  question: "mystery",
  choices: ["神秘", "明白さ", "単純さ", "理解"],
  correctAnswer: "神秘"
  },
  {
  id: 1117,
  question: "dignity",
  choices: ["威厳", "謙虚", "無礼", "怠慢"],
  correctAnswer: "威厳"
  },
  {
  id: 1118,
  question: "senate",
  choices: ["上院", "下院", "議会", "会議"],
  correctAnswer: "上院"
  },
  {
  id: 1119,
  question: "contemporary",
  choices: ["現在の", "過去の", "未来の", "古典的な"],
  correctAnswer: "現在の"
  },
  {
  id: 1120,
  question: "previous",
  choices: ["前の", "次の", "現在の", "最終の"],
  correctAnswer: "前の"
},

  {
  id: 1121,
  question: "fiber",
  choices: ["繊維", "液体", "固体", "気体"],
  correctAnswer: "繊維"
  },
  {
  id: 1122,
  question: "oppose",
  choices: ["反対する", "支持する", "無視する", "承認する"],
  correctAnswer: "反対する"
  },
  {
  id: 1123,
  question: "creation",
  choices: ["創造", "破壊", "保存", "変更"],
  correctAnswer: "創造"
  },
  {
  id: 1124,
  question: "Jewish",
  choices: ["ユダヤ人の", "キリスト教徒の", "イスラム教徒の", "無宗教の"],
  correctAnswer: "ユダヤ人の"
  },
  {
  id: 1125,
  question: "reputation",
  choices: ["評判", "忘却", "無関心", "否定"],
  correctAnswer: "評判"
  },
  {
  id: 1126,
  question: "rude",
  choices: ["失礼な", "礼儀正しい", "謙虚な", "親切な"],
  correctAnswer: "失礼な"
  },
  {
  id: 1127,
  question: "ritual",
  choices: ["儀式", "会議", "討論", "遊び"],
  correctAnswer: "儀式"
  },
  {
  id: 1128,
  question: "historical",
  choices: ["歴史上の", "現代の", "未来の", "架空の"],
  correctAnswer: "歴史上の"
  },
  {
  id: 1129,
  question: "opposition",
  choices: ["反対", "同意", "協力", "無関心"],
  correctAnswer: "反対"
  },
  {
  id: 1130,
  question: "structure",
  choices: ["構造", "混乱", "単純さ", "無秩序"],
  correctAnswer: "構造"
},

  {
  id: 1131,
  question: "percentage",
  choices: ["割合", "総量", "個数", "程度"],
  correctAnswer: "割合"
  },
  {
  id: 1132,
  question: "enter",
  choices: ["入る", "出る", "避ける", "停止する"],
  correctAnswer: "入る"
  },
  {
  id: 1133,
  question: "install",
  choices: ["導入する", "取り除く", "壊す", "回避する"],
  correctAnswer: "導入する"
  },
  {
  id: 1134,
  question: "tip",
  choices: ["先", "根", "中央", "後部"],
  correctAnswer: "先"
  },
  {
  id: 1135,
  question: "use up",
  choices: ["使い切る", "保存する", "増やす", "隠す"],
  correctAnswer: "使い切る"
  },
  {
  id: 1136,
  question: "state",
  choices: ["状態", "変化", "固定", "混乱"],
  correctAnswer: "状態"
  },
  {
  id: 1137,
  question: "adjust",
  choices: ["調節する", "無視する", "拒絶する", "固定する"],
  correctAnswer: "調節する"
  },
  {
  id: 1138,
  question: "physician",
  choices: ["医師", "薬剤師", "看護師", "心理学者"],
  correctAnswer: "医師"
  },
  {
  id: 1139,
  question: "labor",
  choices: ["労働", "休息", "遊び", "学習"],
  correctAnswer: "労働"
  },
  {
  id: 1140,
  question: "international",
  choices: ["国際的な", "国内の", "地方の", "個人的な"],
  correctAnswer: "国際的な"
},

  {
  id: 1141,
  question: "strongly",
  choices: ["強く", "弱く", "静かに", "怠けて"],
  correctAnswer: "強く"
  },
  {
  id: 1142,
  question: "arms",
  choices: ["武器", "工具", "楽器", "家具"],
  correctAnswer: "武器"
  },
  {
  id: 1143,
  question: "household",
  choices: ["家族", "企業", "団体", "個人"],
  correctAnswer: "家族"
  },
  {
  id: 1144,
  question: "nation",
  choices: ["国家", "地域", "都市", "大陸"],
  correctAnswer: "国家"
  },
  {
  id: 1145,
  question: "jury",
  choices: ["陪審員", "被告人", "証人", "弁護士"],
  correctAnswer: "陪審員"
  },
  {
  id: 1146,
  question: "former",
  choices: ["前の", "現在の", "将来の", "永久の"],
  correctAnswer: "前の"
  },
  {
  id: 1147,
  question: "illegal",
  choices: ["違法の", "合法の", "公式の", "一般的な"],
  correctAnswer: "違法の"
  },
  {
  id: 1148,
  question: "circumstance",
  choices: ["状況", "計画", "理論", "解決"],
  correctAnswer: "状況"
  },
  {
  id: 1149,
  question: "wan",
  choices: ["青ざめた", "健康的な", "赤い", "黒い"],
  correctAnswer: "青ざめた"
  },
  {
  id: 1150,
  question: "spoil",
  choices: ["台無しにする", "保存する", "強化する", "改善する"],
  correctAnswer: "台無しにする"
},

  {
  id: 1151,
  question: "composition",
  choices: ["構成", "解体", "破壊", "減少"],
  correctAnswer: "構成"
  },
  {
  id: 1152,
  question: "tail",
  choices: ["尾", "頭", "腕", "足"],
  correctAnswer: "尾"
  },
  {
  id: 1153,
  question: "majority",
  choices: ["大多数", "少数", "全員", "一部"],
  correctAnswer: "大多数"
  },
  {
  id: 1154,
  question: "beside",
  choices: ["の横に", "の上に", "の下に", "の内側に"],
  correctAnswer: "の横に"
  },
  {
  id: 1155,
  question: "operation",
  choices: ["操作", "停止", "拒否", "観察"],
  correctAnswer: "操作"
  },
  {
  id: 1156,
  question: "talent",
  choices: ["才能", "弱点", "怠け", "不安"],
  correctAnswer: "才能"
  },
  {
  id: 1157,
  question: "pleasant",
  choices: ["楽しい", "悲しい", "苦い", "怒って"],
  correctAnswer: "楽しい"
  },
  {
  id: 1158,
  question: "era",
  choices: ["時代", "瞬間", "未来", "過去"],
  correctAnswer: "時代"
  },
  {
  id: 1159,
  question: "ultimate",
  choices: ["究極の", "初期の", "一時的な", "次善の"],
  correctAnswer: "究極の"
  },
  {
  id: 1160,
  question: "telescope",
  choices: ["望遠鏡", "顕微鏡", "双眼鏡", "カメラ"],
  correctAnswer: "望遠鏡"
},

  {
  id: 1161,
  question: "originate",
  choices: ["始まる", "終わる", "停止する", "減少する"],
  correctAnswer: "始まる"
  },
  {
  id: 1162,
  question: "delight",
  choices: ["喜び", "悲しみ", "怒り", "無関心"],
  correctAnswer: "喜び"
  },
  {
  id: 1163,
  question: "whenever",
  choices: ["する時はいつでも", "しない限り", "ただ一度", "まれに"],
  correctAnswer: "する時はいつでも"
  },
  {
  id: 1164,
  question: "operate",
  choices: ["操作する", "避ける", "観察する", "議論する"],
  correctAnswer: "操作する"
  },
  {
  id: 1165,
  question: "consistent",
  choices: ["一貫した", "変わりやすい", "不安定な", "不規則な"],
  correctAnswer: "一貫した"
  },
  {
  id: 1166,
  question: "exhaust",
  choices: ["疲れ果てさせる", "元気づける", "活性化する", "安定させる"],
  correctAnswer: "疲れ果てさせる"
  },
  {
  id: 1167,
  question: "twin",
  choices: ["双子", "単独", "三つ子", "異なる"],
  correctAnswer: "双子"
  },
  {
  id: 1168,
  question: "fix",
  choices: ["固定する", "解放する", "忘れる", "混乱させる"],
  correctAnswer: "固定する"
  },
  {
  id: 1169,
  question: "enhance",
  choices: ["強調する", "減少させる", "否定する", "無視する"],
  correctAnswer: "強調する"
  },
  {
  id: 1170,
  question: "defendant",
  choices: ["被告人", "証人", "弁護士", "裁判官"],
  correctAnswer: "被告人"
},

  {
  id: 1171,
  question: "negotiation",
  choices: ["交渉", "論争", "同意", "拒絶"],
  correctAnswer: "交渉"
  },
  {
  id: 1172,
  question: "face",
  choices: ["直面する", "回避する", "支持する", "分析する"],
  correctAnswer: "直面する"
  },
  {
  id: 1173,
  question: "immediate",
  choices: ["即座の", "遅延した", "間接的な", "長期的な"],
  correctAnswer: "即座の"
  },
  {
  id: 1174,
  question: "instant",
  choices: ["瞬間", "永遠", "遅れ", "期間"],
  correctAnswer: "瞬間"
  },
  {
  id: 1175,
  question: "bloody",
  choices: ["血の", "清潔な", "空の", "水の"],
  correctAnswer: "血の"
  },
  {
  id: 1176,
  question: "gear",
  choices: ["伝動装置", "ブレーキ", "ステアリング", "シート"],
  correctAnswer: "伝動装置"
  },
  {
  id: 1177,
  question: "block",
  choices: ["妨げる", "促進する", "承認する", "無視する"],
  correctAnswer: "妨げる"
  },
  {
  id: 1178,
  question: "unless",
  choices: ["でない限り", "もし...ならば", "そうであれば", "でも"],
  correctAnswer: "でない限り"
  },
  {
  id: 1179,
  question: "willing",
  choices: ["いとわない", "拒否する", "躊躇する", "怒る"],
  correctAnswer: "いとわない"
  },
  {
  id: 1180,
  question: "negotiate",
  choices: ["交渉する", "諦める", "攻撃する", "隠れる"],
  correctAnswer: "交渉する"
},

  {
  id: 1181,
  question: "doubt",
  choices: ["疑い", "信頼", "確信", "承認"],
  correctAnswer: "疑い"
  },
  {
  id: 1182,
  question: "afford",
  choices: ["余裕がある", "欠ける", "失う", "節約する"],
  correctAnswer: "余裕がある"
  },
  {
  id: 1183,
  question: "wage",
  choices: ["賃金", "利益", "損失", "借金"],
  correctAnswer: "賃金"
  },
  {
  id: 1184,
  question: "abortion",
  choices: ["中絶", "出産", "妊娠", "養子縁組"],
  correctAnswer: "中絶"
  },
  {
  id: 1185,
  question: "strange",
  choices: ["奇妙な", "普通の", "馴染みのある", "予想通りの"],
  correctAnswer: "奇妙な"
  },
  {
  id: 1186,
  question: "estate",
  choices: ["財産", "負債", "消耗品", "サービス"],
  correctAnswer: "財産"
  },
  {
  id: 1187,
  question: "addition",
  choices: ["追加", "削除", "維持", "減少"],
  correctAnswer: "追加"
  },
  {
  id: 1188,
  question: "smart",
  choices: ["頭の良い", "遅い", "怠ける", "不注意な"],
  correctAnswer: "頭の良い"
  },
  {
  id: 1189,
  question: "bind",
  choices: ["縛りつける", "解放する", "忘れる", "見過ごす"],
  correctAnswer: "縛りつける"
  },
  {
  id: 1190,
  question: "shed",
  choices: ["流す", "保持する", "集める", "避ける"],
  correctAnswer: "流す"
},

  {
  id: 1191,
  question: "citizen",
  choices: ["市民", "観光客", "外国人", "住人"],
  correctAnswer: "市民"
  },
  {
  id: 1192,
  question: "summit",
  choices: ["頂上", "谷", "平地", "海底"],
  correctAnswer: "頂上"
  },
  {
  id: 1193,
  question: "battery",
  choices: ["電池", "ガソリン", "風力", "太陽光"],
  correctAnswer: "電池"
  },
  {
  id: 1194,
  question: "complexity",
  choices: ["複雑さ", "単純さ", "明確さ", "疑わしさ"],
  correctAnswer: "複雑さ"
  },
  {
  id: 1195,
  question: "reduction",
  choices: ["削減", "増加", "維持", "変換"],
  correctAnswer: "削減"
  },
  {
  id: 1196,
  question: "disaster",
  choices: ["災害", "幸運", "成功", "平穏"],
  correctAnswer: "災害"
  },
  {
  id: 1197,
  question: "comfort",
  choices: ["快適さ", "不快", "苦痛", "不安"],
  correctAnswer: "快適さ"
  },
  {
  id: 1198,
  question: "founder",
  choices: ["創設者", "従業員", "顧客", "敵"],
  correctAnswer: "創設者"
  },
  {
  id: 1199,
  question: "assault",
  choices: ["暴行", "防衛", "協力", "逃走"],
  correctAnswer: "暴行"
  },
  {
  id: 1200,
  question: "broadcast",
  choices: ["放送する", "撤回する", "隠す", "禁止する"],
  correctAnswer: "放送する"
},

  {
  id: 1201,
  question: "critic",
  choices: ["批評家", "作家", "アーティスト", "俳優"],
  correctAnswer: "批評家"
  },
  {
  id: 1202,
  question: "friendly",
  choices: ["友好的な", "敵対的な", "無関心な", "怒っている"],
  correctAnswer: "友好的な"
  },
  {
  id: 1203,
  question: "consequently",
  choices: ["その結果として", "原因として", "可能性として", "仮定として"],
  correctAnswer: "その結果として"
  },
  {
  id: 1204,
  question: "urban",
  choices: ["都会の", "田舎の", "郊外の", "孤立した"],
  correctAnswer: "都会の"
  },
  {
  id: 1205,
  question: "detailed",
  choices: ["詳細の", "大まかな", "簡潔な", "抽象的な"],
  correctAnswer: "詳細の"
  },
  {
  id: 1206,
  question: "primitive",
  choices: ["原始的な", "現代的な", "進化した", "洗練された"],
  correctAnswer: "原始的な"
  },
  {
  id: 1207,
  question: "electrical",
  choices: ["電気の", "機械の", "手動の", "化学の"],
  correctAnswer: "電気の"
  },
  {
  id: 1208,
  question: "afraid",
  choices: ["心配して", "自信がある", "興奮して", "無関心"],
  correctAnswer: "心配して"
  },
  {
  id: 1209,
  question: "community",
  choices: ["共同社会", "個人", "対立団体", "敵"],
  correctAnswer: "共同社会"
  },
  {
  id: 1210,
  question: "connect",
  choices: ["つなげる", "分離する", "破壊する", "無視する"],
  correctAnswer: "つなげる"
},

  {
  id: 1211,
  question: "scheme",
  choices: ["計画", "偶発", "障害", "即興"],
  correctAnswer: "計画"
  },
  {
  id: 1212,
  question: "language",
  choices: ["言語", "音楽", "数学", "美術"],
  correctAnswer: "言語"
  },
  {
  id: 1213,
  question: "colleague",
  choices: ["同僚", "敵", "上司", "部下"],
  correctAnswer: "同僚"
  },
  {
  id: 1214,
  question: "stroke",
  choices: ["打撃", "抱擁", "軽い触れ", "握手"],
  correctAnswer: "打撃"
  },
  {
  id: 1215,
  question: "servant",
  choices: ["使用人", "主人", "客", "パートナー"],
  correctAnswer: "使用人"
  },
  {
  id: 1216,
  question: "belief",
  choices: ["信念", "疑問", "知識", "事実"],
  correctAnswer: "信念"
  },
  {
  id: 1217,
  question: "inflation",
  choices: ["膨張", "収縮", "安定", "減少"],
  correctAnswer: "膨張"
  },
  {
  id: 1218,
  question: "Muslim",
  choices: ["イスラム教徒", "キリスト教徒", "ユダヤ教徒", "無宗教"],
  correctAnswer: "イスラム教徒"
  },
  {
  id: 1219,
  question: "upset",
  choices: ["気持ちが動揺した", "落ち着いた", "喜んだ", "無関心"],
  correctAnswer: "気持ちが動揺した"
  },
  {
  id: 1220,
  question: "inquiry",
  choices: ["問い合わせ", "命令", "提案", "警告"],
  correctAnswer: "問い合わせ"
},

  {
  id: 1221,
  question: "apply",
  choices: ["適用する", "取り除く", "無視する", "軽視する"],
  correctAnswer: "適用する"
  },
  {
  id: 1222,
  question: "failure",
  choices: ["失敗", "成功", "進行", "停止"],
  correctAnswer: "失敗"
  },
  {
  id: 1223,
  question: "seed",
  choices: ["種子", "花", "葉", "根"],
  correctAnswer: "種子"
  },
  {
  id: 1224,
  question: "potentially",
  choices: ["潜在的に", "現実に", "明らかに", "一時的に"],
  correctAnswer: "潜在的に"
  },
  {
  id: 1225,
  question: "cultivate",
  choices: ["耕作する", "破壊する", "放置する", "乾燥させる"],
  correctAnswer: "耕作する"
  },
  {
  id: 1226,
  question: "awful",
  choices: ["ひどい", "素晴らしい", "平凡な", "楽しい"],
  correctAnswer: "ひどい"
  },
  {
  id: 1227,
  question: "mate",
  choices: ["友達", "敵", "指導者", "部下"],
  correctAnswer: "友達"
  },
  {
  id: 1228,
  question: "military",
  choices: ["軍隊", "民間", "学校", "政府"],
  correctAnswer: "軍隊"
  },
  {
  id: 1229,
  question: "armed",
  choices: ["武装した", "無防備な", "平和な", "装飾された"],
  correctAnswer: "武装した"
  },
  {
  id: 1230,
  question: "lung",
  choices: ["肺", "心", "脳", "肝臓"],
  correctAnswer: "肺"
},

  {
  id: 1231,
  question: "sequence",
  choices: ["連続", "断絶", "逆順", "単発"],
  correctAnswer: "連続"
  },
  {
  id: 1232,
  question: "impress",
  choices: ["感銘を与える", "失望させる", "無視する", "混乱させる"],
  correctAnswer: "感銘を与える"
  },
  {
  id: 1233,
  question: "Mexican",
  choices: ["メキシコの", "アメリカの", "カナダの", "ブラジルの"],
  correctAnswer: "メキシコの"
  },
  {
  id: 1234,
  question: "suffering",
  choices: ["苦しみ", "幸福", "興奮", "無関心"],
  correctAnswer: "苦しみ"
  },
  {
  id: 1235,
  question: "refrain from",
  choices: ["控える", "追求する", "加速する", "強化する"],
  correctAnswer: "控える"
  },
  {
  id: 1236,
  question: "well-known",
  choices: ["よく知られた", "無名の", "隠された", "新しい"],
  correctAnswer: "よく知られた"
  },
  {
  id: 1237,
  question: "associate",
  choices: ["結びつけて考える", "分離する", "否定する", "無視する"],
  correctAnswer: "結びつけて考える"
  },
  {
  id: 1238,
  question: "lord",
  choices: ["領主", "農民", "市民", "奴隷"],
  correctAnswer: "領主"
  },
  {
  id: 1239,
  question: "governor",
  choices: ["知事", "市長", "大統領", "議員"],
  correctAnswer: "知事"
  },
  {
  id: 1240,
  question: "permanent",
  choices: ["永久の", "一時的な", "変動的な", "新しい"],
  correctAnswer: "永久の"
},

  {
  id: 1241,
  question: "bishop",
  choices: ["司教", "牧師", "修道士", "神父"],
  correctAnswer: "司教"
  },
  {
  id: 1242,
  question: "background",
  choices: ["背景", "前景", "概要", "詳細"],
  correctAnswer: "背景"
  },
  {
  id: 1243,
  question: "beg",
  choices: ["懇願する", "命令する", "拒否する", "無視する"],
  correctAnswer: "懇願する"
  },
  {
  id: 1244,
  question: "relevant",
  choices: ["関連のある", "無関係の", "反対の", "類似の"],
  correctAnswer: "関連のある"
  },
  {
  id: 1245,
  question: "recognition",
  choices: ["認識", "無視", "混乱", "忘却"],
  correctAnswer: "認識"
  },
  {
  id: 1246,
  question: "sharp",
  choices: ["鋭い", "鈍い", "柔らかい", "滑らかな"],
  correctAnswer: "鋭い"
  },
  {
  id: 1247,
  question: "legal",
  choices: ["法律の", "非合法の", "倫理的な", "道徳的な"],
  correctAnswer: "法律の"
  },
  {
  id: 1248,
  question: "criticize",
  choices: ["批評する", "賞賛する", "支持する", "無視する"],
  correctAnswer: "批評する"
  },
  {
  id: 1249,
  question: "naked",
  choices: ["裸の", "着衣の", "保護された", "隠された"],
  correctAnswer: "裸の"
  },
  {
  id: 1250,
  question: "symptom",
  choices: ["症状", "解決", "予防", "治療"],
  correctAnswer: "症状"
},

  {
  id: 1251,
  question: "raw",
  choices: ["生の", "調理済みの", "凍結した", "保存された"],
  correctAnswer: "生の"
  },
  {
  id: 1252,
  question: "association",
  choices: ["協会", "個人", "競争者", "敵"],
  correctAnswer: "協会"
  },
  {
  id: 1253,
  question: "phase",
  choices: ["段階", "終了", "開始", "停止"],
  correctAnswer: "段階"
  },
  {
  id: 1254,
  question: "politics",
  choices: ["政治", "経済", "教育", "科学"],
  correctAnswer: "政治"
  },
  {
  id: 1255,
  question: "atmosphere",
  choices: ["雰囲気", "乾燥", "湿度", "温度"],
  correctAnswer: "雰囲気"
  },
  {
  id: 1256,
  question: "lap",
  choices: ["ひざ", "肩", "手", "頭"],
  correctAnswer: "ひざ"
  },
  {
  id: 1257,
  question: "clerk",
  choices: ["事務員", "管理者", "技術者", "労働者"],
  correctAnswer: "事務員"
  },
  {
  id: 1258,
  question: "fault",
  choices: ["欠点", "長所", "特技", "能力"],
  correctAnswer: "欠点"
  },
  {
  id: 1259,
  question: "toward",
  choices: ["向かって", "遠ざかって", "沿って", "対して"],
  correctAnswer: "向かって"
  },
  {
  id: 1260,
  question: "foreign",
  choices: ["外国の", "国内の", "地元の", "古代の"],
  correctAnswer: "外国の"
},

  {
  id: 1261,
  question: "global",
  choices: ["地球の", "地方の", "国内の", "個人の"],
  correctAnswer: "地球の"
  },
  {
  id: 1262,
  question: "hire",
  choices: ["雇う", "解雇する", "拒否する", "評価する"],
  correctAnswer: "雇う"
  },
  {
  id: 1263,
  question: "item",
  choices: ["項目", "全体", "要約", "結論"],
  correctAnswer: "項目"
  },
  {
  id: 1264,
  question: "dislike",
  choices: ["嫌がる", "好む", "無関心", "愛する"],
  correctAnswer: "嫌がる"
  },
  {
  id: 1265,
  question: "unknown",
  choices: ["未知の", "知られた", "明確な", "定義された"],
  correctAnswer: "未知の"
  },
  {
  id: 1266,
  question: "nearby",
  choices: ["近くの", "遠くの", "間の", "外側の"],
  correctAnswer: "近くの"
  },
  {
  id: 1267,
  question: "traditional",
  choices: ["伝統的な", "革新的な", "現代的な", "未来的な"],
  correctAnswer: "伝統的な"
  },
  {
  id: 1268,
  question: "liberty",
  choices: ["自由", "束縛", "制限", "依存"],
  correctAnswer: "自由"
  },
  {
  id: 1269,
  question: "toe",
  choices: ["つま先", "掌", "腕", "膝"],
  correctAnswer: "つま先"
  },
  {
  id: 1270,
  question: "log",
  choices: ["丸太", "枝", "葉", "花"],
  correctAnswer: "丸太"
},

  {
  id: 1271,
  question: "appoint",
  choices: ["任命する", "解雇する", "無視する", "批判する"],
  correctAnswer: "任命する"
  },
  {
  id: 1272,
  question: "courage",
  choices: ["勇気", "恐怖", "躊躇", "怠惰"],
  correctAnswer: "勇気"
  },
  {
  id: 1273,
  question: "quarter",
  choices: ["四半期", "全期", "半期", "三期"],
  correctAnswer: "四半期"
  },
  {
  id: 1274,
  question: "affair",
  choices: ["事柄", "解決", "無関心", "喜び"],
  correctAnswer: "事柄"
  },
  {
  id: 1275,
  question: "snap",
  choices: ["パチンと鳴らす", "静かにする", "ゆっくりと動く", "固定する"],
  correctAnswer: "パチンと鳴らす"
  },
  {
  id: 1276,
  question: "tale",
  choices: ["お話", "事実", "記録", "分析"],
  correctAnswer: "お話"
  },
  {
  id: 1277,
  question: "educational",
  choices: ["教育の", "娯楽の", "商業的な", "医療の"],
  correctAnswer: "教育の"
  },
  {
  id: 1278,
  question: "hardly",
  choices: ["ほとんどない", "頻繁に", "常に", "大量に"],
  correctAnswer: "ほとんどない"
  },
  {
  id: 1279,
  question: "conclusion",
  choices: ["結論", "導入", "進行", "仮説"],
  correctAnswer: "結論"
  },
  {
  id: 1280,
  question: "whereas",
  choices: ["である一方で", "そのために", "同様に", "かつては"],
  correctAnswer: "である一方で"
},

  {
  id: 1281,
  question: "custom",
  choices: ["習慣", "異常", "新規性", "同一性"],
  correctAnswer: "習慣"
  },
  {
  id: 1282,
  question: "biological",
  choices: ["生物学上の", "化学的な", "物理的な", "数学的な"],
  correctAnswer: "生物学上の"
  },
  {
  id: 1283,
  question: "confine",
  choices: ["制限する", "拡大する", "解放する", "統合する"],
  correctAnswer: "制限する"
  },
  {
  id: 1284,
  question: "beneath",
  choices: ["の下に", "の上に", "の横に", "の内部に"],
  correctAnswer: "の下に"
  },
  {
  id: 1285,
  question: "extinction",
  choices: ["絶滅", "発展", "発芽", "再生"],
  correctAnswer: "絶滅"
  },
  {
  id: 1286,
  question: "tiny",
  choices: ["ごく小さい", "巨大な", "平均的な", "広大な"],
  correctAnswer: "ごく小さい"
  },
  {
  id: 1287,
  question: "election",
  choices: ["選挙", "指名", "棄権", "選択"],
  correctAnswer: "選挙"
  },
  {
  id: 1288,
  question: "charm",
  choices: ["魅力", "嫌悪", "中立", "恐怖"],
  correctAnswer: "魅力"
  },
  {
  id: 1289,
  question: "palm",
  choices: ["手のひら", "足の裏", "頭", "肩"],
  correctAnswer: "手のひら"
  },
  {
  id: 1290,
  question: "mean",
  choices: ["を意味する", "無視する", "批判する", "賞賛する"],
  correctAnswer: "を意味する"
},

  {
  id: 1291,
  question: "advertise",
  choices: ["宣伝する", "隠す", "禁止する", "批判する"],
  correctAnswer: "宣伝する"
  },
  {
  id: 1292,
  question: "advertising",
  choices: ["広告", "分析", "調査", "保守"],
  correctAnswer: "広告"
  },
  {
  id: 1293,
  question: "factor",
  choices: ["要因", "結果", "解決", "仮定"],
  correctAnswer: "要因"
  },
  {
  id: 1294,
  question: "curious",
  choices: ["好奇心が強い", "無関心な", "怠惰な", "恐れている"],
  correctAnswer: "好奇心が強い"
  },
  {
  id: 1295,
  question: "pitch",
  choices: ["投げる", "捕まえる", "回避する", "保持する"],
  correctAnswer: "投げる"
  },
  {
  id: 1296,
  question: "excessive",
  choices: ["過度の", "不足の", "適切な", "平均的な"],
  correctAnswer: "過度の"
  },
  {
  id: 1297,
  question: "war",
  choices: ["戦争", "平和", "協定", "合意"],
  correctAnswer: "戦争"
  },
  {
  id: 1298,
  question: "apparently",
  choices: ["明らかに", "曖昧に", "隠されて", "疑わしく"],
  correctAnswer: "明らかに"
  },
  {
  id: 1299,
  question: "boundary",
  choices: ["境界", "中心", "統一", "混合"],
  correctAnswer: "境界"
  },
  {
  id: 1300,
  question: "procedure",
  choices: ["手続き", "結果", "仮説", "理論"],
  correctAnswer: "手続き"
},

  {
  id: 1301,
  question: "consumer",
  choices: ["消費者", "生産者", "批評家", "観察者"],
  correctAnswer: "消費者"
  },
  {
  id: 1302,
  question: "satisfactory",
  choices: ["満足のいく", "不十分な", "平凡な", "驚くべき"],
  correctAnswer: "満足のいく"
  },
  {
  id: 1303,
  question: "echo",
  choices: ["こだま", "静寂", "騒音", "調和"],
  correctAnswer: "こだま"
  },
  {
  id: 1304,
  question: "essay",
  choices: ["論文", "小説", "詩", "報告書"],
  correctAnswer: "論文"
  },
  {
  id: 1305,
  question: "extension",
  choices: ["拡張", "縮小", "停止", "保持"],
  correctAnswer: "拡張"
  },
  {
  id: 1306,
  question: "atomic",
  choices: ["原子の", "巨大な", "微細な", "有機的な"],
  correctAnswer: "原子の"
  },
  {
  id: 1307,
  question: "sigh",
  choices: ["ため息をつく", "笑う", "叫ぶ", "泣く"],
  correctAnswer: "ため息をつく"
  },
  {
  id: 1308,
  question: "sophisticated",
  choices: ["洗練された", "素朴な", "未発達の", "原始的な"],
  correctAnswer: "洗練された"
  },
  {
  id: 1309,
  question: "considerable",
  choices: ["かなりの", "わずかな", "一時的な", "恒常的な"],
  correctAnswer: "かなりの"
  },
  {
  id: 1310,
  question: "explain",
  choices: ["説明する", "混乱させる", "隠す", "無視する"],
  correctAnswer: "説明する"
},

  {
  id: 1311,
  question: "bet",
  choices: ["賭ける", "拒否する", "貯蓄する", "譲渡する"],
  correctAnswer: "賭ける"
  },
  {
  id: 1312,
  question: "plant",
  choices: ["植物", "動物", "菌類", "無生物"],
  correctAnswer: "植物"
  },
  {
  id: 1313,
  question: "scatter",
  choices: ["まき散らす", "集める", "固定する", "結合する"],
  correctAnswer: "まき散らす"
  },
  {
  id: 1314,
  question: "admire",
  choices: ["賞賛する", "批判する", "無視する", "恐れる"],
  correctAnswer: "賞賛する"
  },
  {
  id: 1315,
  question: "largely",
  choices: ["主として", "部分的に", "稀に", "完全に"],
  correctAnswer: "主として"
  },
  {
  id: 1316,
  question: "rear",
  choices: ["後部の", "前部の", "下部の", "上部の"],
  correctAnswer: "後部の"
  },
  {
  id: 1317,
  question: "bond",
  choices: ["拘束", "自由", "分離", "独立"],
  correctAnswer: "拘束"
  },
  {
  id: 1318,
  question: "authority",
  choices: ["権威", "従属", "反逆", "同等"],
  correctAnswer: "権威"
  },
  {
  id: 1319,
  question: "medium",
  choices: ["中間の", "極端な", "初期の", "最終的な"],
  correctAnswer: "中間の"
  },
  {
  id: 1320,
  question: "adapt",
  choices: ["適合させる", "反発する", "無視する", "抵抗する"],
  correctAnswer: "適合させる"
},

  {
  id: 1321,
  question: "resist",
  choices: ["抵抗する", "受け入れる", "賛成する", "無視する"],
  correctAnswer: "抵抗する"
  },
  {
  id: 1322,
  question: "folk",
  choices: ["人々", "動物", "機械", "植物"],
  correctAnswer: "人々"
  },
  {
  id: 1323,
  question: "poet",
  choices: ["詩人", "画家", "音楽家", "彫刻家"],
  correctAnswer: "詩人"
  },
  {
  id: 1324,
  question: "resolve",
  choices: ["解決する", "複雑にする", "無視する", "遅らせる"],
  correctAnswer: "解決する"
  },
  {
  id: 1325,
  question: "detail",
  choices: ["詳細", "概要", "抽象", "一般性"],
  correctAnswer: "詳細"
  },
  {
  id: 1326,
  question: "priority",
  choices: ["優先度", "後回し", "等価性", "無関心"],
  correctAnswer: "優先度"
  },
  {
  id: 1327,
  question: "false",
  choices: ["誤った", "正確な", "確実な", "疑わしい"],
  correctAnswer: "誤った"
  },
  {
  id: 1328,
  question: "prisoner",
  choices: ["囚人", "警官", "弁護士", "裁判官"],
  correctAnswer: "囚人"
  },
  {
  id: 1329,
  question: "apparent",
  choices: ["外見上の", "隠された", "疑わしい", "未確認の"],
  correctAnswer: "外見上の"
  },
  {
  id: 1330,
  question: "lab",
  choices: ["研究室", "教室", "図書館", "体育館"],
  correctAnswer: "研究室"
},

  {
  id: 1331,
  question: "squeeze",
  choices: ["絞る", "拡大する", "融合する", "固定する"],
  correctAnswer: "絞る"
  },
  {
  id: 1332,
  question: "status",
  choices: ["状態", "変化", "停止", "進行"],
  correctAnswer: "状態"
  },
  {
  id: 1333,
  question: "pension",
  choices: ["年金", "給料", "報酬", "手当"],
  correctAnswer: "年金"
  },
  {
  id: 1334,
  question: "unique",
  choices: ["他に類を見ない", "普通の", "似たような", "多様な"],
  correctAnswer: "他に類を見ない"
  },
  {
  id: 1335,
  question: "eliminate",
  choices: ["取り除く", "追加する", "強化する", "保存する"],
  correctAnswer: "取り除く"
  },
  {
  id: 1336,
  question: "patch",
  choices: ["当て布", "糸", "針", "ボタン"],
  correctAnswer: "当て布"
  },
  {
  id: 1337,
  question: "observation",
  choices: ["観察", "推測", "忘却", "無視"],
  correctAnswer: "観察"
  },
  {
  id: 1338,
  question: "dozen",
  choices: ["12の", "10の", "20の", "100の"],
  correctAnswer: "12の"
  },
  {
  id: 1339,
  question: "airline",
  choices: ["航空会社", "鉄道会社", "バス会社", "船会社"],
  correctAnswer: "航空会社"
  },
  {
  id: 1340,
  question: "flow",
  choices: ["流れる", "停止する", "乾燥する", "凍る"],
  correctAnswer: "流れる"
},

  {
  id: 1341,
  question: "independent",
  choices: ["独立した", "依存した", "連結した", "一致した"],
  correctAnswer: "独立した"
  },
  {
  id: 1342,
  question: "president",
  choices: ["社長", "従業員", "顧客", "パートナー"],
  correctAnswer: "社長"
  },
  {
  id: 1343,
  question: "socially",
  choices: ["社会的に", "個人的に", "秘密に", "公然と"],
  correctAnswer: "社会的に"
  },
  {
  id: 1344,
  question: "settle",
  choices: ["決着させる", "始める", "無視する", "混乱させる"],
  correctAnswer: "決着させる"
  },
  {
  id: 1345,
  question: "ideal",
  choices: ["理想", "現実", "過去", "将来"],
  correctAnswer: "理想"
  },
  {
  id: 1346,
  question: "address",
  choices: ["住所", "メールアドレス", "電話番号", "名前"],
  correctAnswer: "住所"
  },
  {
  id: 1347,
  question: "pray",
  choices: ["祈る", "諦める", "笑う", "叫ぶ"],
  correctAnswer: "祈る"
  },
  {
  id: 1348,
  question: "ray",
  choices: ["光線", "闇", "音", "波"],
  correctAnswer: "光線"
  },
  {
  id: 1349,
  question: "maker",
  choices: ["製造元", "消費者", "批評家", "観察者"],
  correctAnswer: "製造元"
  },
  {
  id: 1350,
  question: "combat",
  choices: ["戦闘", "和平", "交渉", "回避"],
  correctAnswer: "戦闘"
},

  {
  id: 1351,
  question: "ministry",
  choices: ["省庁", "企業", "学校", "病院"],
  correctAnswer: "省庁"
  },
  {
  id: 1352,
  question: "explosion",
  choices: ["爆発", "崩壊", "構築", "静穏"],
  correctAnswer: "爆発"
  },
  {
  id: 1353,
  question: "cure",
  choices: ["治療する", "感染させる", "無視する", "悪化させる"],
  correctAnswer: "治療する"
  },
  {
  id: 1354,
  question: "public",
  choices: ["公共の", "私的な", "秘密の", "独占的な"],
  correctAnswer: "公共の"
  },
  {
  id: 1355,
  question: "reach",
  choices: ["到着する", "離脱する", "停止する", "回避する"],
  correctAnswer: "到着する"
  },
  {
  id: 1356,
  question: "impact",
  choices: ["影響", "無関係", "逃避", "支援"],
  correctAnswer: "影響"
  },
  {
  id: 1357,
  question: "union",
  choices: ["統合", "分裂", "競争", "疎外"],
  correctAnswer: "統合"
  },
  {
  id: 1358,
  question: "author",
  choices: ["著者", "聴衆", "批評家", "編集者"],
  correctAnswer: "著者"
  },
  {
  id: 1359,
  question: "thick",
  choices: ["厚い", "薄い", "透明な", "透ける"],
  correctAnswer: "厚い"
  },
  {
  id: 1360,
  question: "presence",
  choices: ["存在", "不在", "消失", "無効"],
  correctAnswer: "存在"
},

  {
  id: 1361,
  question: "incorporate",
  choices: ["合体させる", "分離させる", "無視する", "反対する"],
  correctAnswer: "合体させる"
  },
  {
  id: 1362,
  question: "rent",
  choices: ["家賃", "販売価格", "購入費", "利息"],
  correctAnswer: "家賃"
  },
  {
  id: 1363,
  question: "radical",
  choices: ["急進的な", "保守的な", "中立的な", "従来の"],
  correctAnswer: "急進的な"
  },
  {
  id: 1364,
  question: "economics",
  choices: ["経済学", "歴史学", "心理学", "物理学"],
  correctAnswer: "経済学"
  },
  {
  id: 1365,
  question: "trust",
  choices: ["信頼", "疑念", "無関心", "敵意"],
  correctAnswer: "信頼"
  },
  {
  id: 1366,
  question: "virus",
  choices: ["ウイルス", "細菌", "菌類", "寄生虫"],
  correctAnswer: "ウイルス"
  },
  {
  id: 1367,
  question: "party",
  choices: ["政党", "集会", "個人", "団体"],
  correctAnswer: "政党"
  },
  {
  id: 1368,
  question: "pupil",
  choices: ["生徒", "教師", "校長", "保護者"],
  correctAnswer: "生徒"
  },
  {
  id: 1369,
  question: "unusual",
  choices: ["珍しい", "普通の", "一般的な", "伝統的な"],
  correctAnswer: "珍しい"
  },
  {
  id: 1370,
  question: "meal",
  choices: ["食事", "飲み物", "スナック", "デザート"],
  correctAnswer: "食事"
},

  {
  id: 1371,
  question: "neighbor",
  choices: ["隣人", "敵", "同僚", "上司"],
  correctAnswer: "隣人"
  },
  {
  id: 1372,
  question: "civil",
  choices: ["市民の", "外国の", "軍事の", "宗教の"],
  correctAnswer: "市民の"
  },
  {
  id: 1373,
  question: "counter",
  choices: ["に対抗する", "支持する", "無視する", "従う"],
  correctAnswer: "に対抗する"
  },
  {
  id: 1374,
  question: "suicide",
  choices: ["自殺", "殺人", "事故", "自然死"],
  correctAnswer: "自殺"
  },
  {
  id: 1375,
  question: "protein",
  choices: ["タンパク質", "炭水化物", "脂肪", "ビタミン"],
  correctAnswer: "タンパク質"
  },
  {
  id: 1376,
  question: "poll",
  choices: ["投票", "討論", "会議", "セミナー"],
  correctAnswer: "投票"
  },
  {
  id: 1377,
  question: "mutual",
  choices: ["相互の", "一方的な", "独立した", "隔たった"],
  correctAnswer: "相互の"
  },
  {
  id: 1378,
  question: "vote",
  choices: ["投票する", "拒否する", "観察する", "調査する"],
  correctAnswer: "投票する"
  },
  {
  id: 1379,
  question: "attend",
  choices: ["出席する", "逃げる", "無視する", "延期する"],
  correctAnswer: "出席する"
  },
  {
  id: 1380,
  question: "regret",
  choices: ["後悔する", "楽しむ", "望む", "無視する"],
  correctAnswer: "後悔する"
},

  {
  id: 1381,
  question: "academic",
  choices: ["学術の", "商業の", "実践的な", "趣味の"],
  correctAnswer: "学術の"
  },
  {
  id: 1382,
  question: "supreme",
  choices: ["最高の", "最低の", "平均的な", "基本的な"],
  correctAnswer: "最高の"
  },
  {
  id: 1383,
  question: "comfortable",
  choices: ["心地の良い", "不快な", "耐え難い", "痛い"],
  correctAnswer: "心地の良い"
  },
  {
  id: 1384,
  question: "involvement",
  choices: ["関与", "無関心", "距離", "分離"],
  correctAnswer: "関与"
  },
  {
  id: 1385,
  question: "crowd",
  choices: ["群衆", "個人", "少数", "ペア"],
  correctAnswer: "群衆"
  },
  {
  id: 1386,
  question: "emotional",
  choices: ["感情の", "論理的な", "無感情の", "客観的な"],
  correctAnswer: "感情の"
  },
  {
  id: 1387,
  question: "revenue",
  choices: ["収益", "費用", "損失", "投資"],
  correctAnswer: "収益"
  },
  {
  id: 1388,
  question: "neighborhood",
  choices: ["近所", "都心", "郊外", "農村"],
  correctAnswer: "近所"
  },
  {
  id: 1389,
  question: "concern",
  choices: ["心配する", "喜ぶ", "無視する", "挑戦する"],
  correctAnswer: "心配する"
  },
  {
  id: 1390,
  question: "remember",
  choices: ["覚えている", "忘れる", "無視する", "発見する"],
  correctAnswer: "覚えている"
},

  {
  id: 1391,
  question: "guilty",
  choices: ["有罪の", "無罪の", "中立の", "関与しない"],
  correctAnswer: "有罪の"
  },
  {
  id: 1392,
  question: "fascinate",
  choices: ["魅了する", "退屈させる", "恐怖を与える", "遠ざける"],
  correctAnswer: "魅了する"
  },
  {
  id: 1393,
  question: "trigger",
  choices: ["引き金", "安全装置", "防御", "保護"],
  correctAnswer: "引き金"
  },
  {
  id: 1394,
  question: "distinction",
  choices: ["区別", "統合", "類似", "一致"],
  correctAnswer: "区別"
  },
  {
  id: 1395,
  question: "transform",
  choices: ["を変える", "を維持する", "を削除する", "を復元する"],
  correctAnswer: "を変える"
  },
  {
  id: 1396,
  question: "transfer",
  choices: ["を移す", "を固定する", "を拒否する", "を複製する"],
  correctAnswer: "を移す"
  },
  {
  id: 1397,
  question: "order",
  choices: ["命令", "提案", "質問", "許可"],
  correctAnswer: "命令"
  },
  {
  id: 1398,
  question: "hide",
  choices: ["隠す", "公開する", "強調する", "解明する"],
  correctAnswer: "隠す"
  },
  {
  id: 1399,
  question: "solid",
  choices: ["固い", "液体の", "気体の", "柔らかい"],
  correctAnswer: "固い"
  },
  {
  id: 1400,
  question: "plain",
  choices: ["簡素な", "複雑な", "装飾的な", "豪華な"],
  correctAnswer: "簡素な"
},

  {
  id: 1401,
  question: "ease",
  choices: ["容易さ", "困難さ", "緊張", "混乱"],
  correctAnswer: "容易さ"
  },
  {
  id: 1402,
  question: "stretch",
  choices: ["広がる", "収縮する", "停止する", "分裂する"],
  correctAnswer: "広がる"
  },
  {
  id: 1403,
  question: "amendment",
  choices: ["修正", "破壊", "無視", "減少"],
  correctAnswer: "修正"
  },
  {
  id: 1404,
  question: "frighten",
  choices: ["怖がらせる", "安心させる", "喜ばせる", "悲しませる"],
  correctAnswer: "怖がらせる"
  },
  {
  id: 1405,
  question: "heel",
  choices: ["かかと", "つま先", "手のひら", "肘"],
  correctAnswer: "かかと"
  },
  {
  id: 1406,
  question: "perceive",
  choices: ["知覚する", "無視する", "否定する", "批判する"],
  correctAnswer: "知覚する"
  },
  {
  id: 1407,
  question: "rational",
  choices: ["理性的な", "感情的な", "非合理的な", "主観的な"],
  correctAnswer: "理性的な"
  },
  {
  id: 1408,
  question: "faith",
  choices: ["信頼", "疑念", "不信", "恐怖"],
  correctAnswer: "信頼"
  },
  {
  id: 1409,
  question: "conviction",
  choices: ["信念", "不確実", "変動", "不信"],
  correctAnswer: "信念"
  },
  {
  id: 1410,
  question: "agent",
  choices: ["代理人", "敵", "主人", "観察者"],
  correctAnswer: "代理人"
},

  {
  id: 1411,
  question: "rural",
  choices: ["田舎の", "都市の", "海沿いの", "山岳の"],
  correctAnswer: "田舎の"
  },
  {
  id: 1412,
  question: "pioneer",
  choices: ["開拓者", "追随者", "批評家", "観察者"],
  correctAnswer: "開拓者"
  },
  {
  id: 1413,
  question: "humanity",
  choices: ["人間", "機械", "自然", "動物"],
  correctAnswer: "人間"
  },
  {
  id: 1414,
  question: "within",
  choices: ["以内で", "外部で", "遠く離れて", "周辺で"],
  correctAnswer: "以内で"
  },
  {
  id: 1415,
  question: "respect",
  choices: ["尊敬", "軽蔑", "無関心", "敵意"],
  correctAnswer: "尊敬"
  },
  {
  id: 1416,
  question: "sweep",
  choices: ["掃く", "拭く", "洗う", "塗る"],
  correctAnswer: "掃く"
  },
  {
  id: 1417,
  question: "display",
  choices: ["展示する", "隠す", "破壊する", "保持する"],
  correctAnswer: "展示する"
  },
  {
  id: 1418,
  question: "own",
  choices: ["自身の", "他人の", "共有の", "公共の"],
  correctAnswer: "自身の"
  },
  {
  id: 1419,
  question: "disappoint",
  choices: ["がっかりさせる", "喜ばせる", "驚かせる", "鼓舞する"],
  correctAnswer: "がっかりさせる"
  },
  {
  id: 1420,
  question: "hang",
  choices: ["つるす", "取り外す", "押し込む", "折りたたむ"],
  correctAnswer: "つるす"
},

  {
  id: 1421,
  question: "transition",
  choices: ["遷移", "停滞", "回復", "衰退"],
  correctAnswer: "遷移"
  },
  {
  id: 1422,
  question: "decision",
  choices: ["決定", "迷い", "疑問", "推測"],
  correctAnswer: "決定"
  },
  {
  id: 1423,
  question: "aware",
  choices: ["気づいている", "無知な", "無関心な", "混乱している"],
  correctAnswer: "気づいている"
  },
  {
  id: 1424,
  question: "reward",
  choices: ["褒美", "罰", "責任", "課題"],
  correctAnswer: "褒美"
  },
  {
  id: 1425,
  question: "uncomfortable",
  choices: ["心地の悪い", "快適な", "満足な", "エキサイティングな"],
  correctAnswer: "心地の悪い"
  },
  {
  id: 1426,
  question: "civilized",
  choices: ["発達した文明をもつ", "原始的な", "未開の", "野蛮な"],
  correctAnswer: "発達した文明をもつ"
  },
  {
  id: 1427,
  question: "aggressive",
  choices: ["攻撃的な", "平和的な", "受動的な", "慎重な"],
  correctAnswer: "攻撃的な"
  },
  {
  id: 1428,
  question: "infant",
  choices: ["乳児", "少年", "成人", "老人"],
  correctAnswer: "乳児"
  },
  {
  id: 1429,
  question: "means",
  choices: ["手段", "結果", "目的", "理由"],
  correctAnswer: "手段"
  },
  {
  id: 1430,
  question: "useless",
  choices: ["役に立たない", "有益な", "必要な", "基本的な"],
  correctAnswer: "役に立たない"
},

  {
  id: 1431,
  question: "briefly",
  choices: ["簡単に", "長々と", "複雑に", "具体的に"],
  correctAnswer: "簡単に"
  },
  {
  id: 1432,
  question: "site",
  choices: ["場所", "建物", "装置", "道具"],
  correctAnswer: "場所"
  },
  {
  id: 1433,
  question: "nature",
  choices: ["自然", "文化", "科学", "技術"],
  correctAnswer: "自然"
  },
  {
  id: 1434,
  question: "dialect",
  choices: ["方言", "公用語", "専門用語", "古語"],
  correctAnswer: "方言"
  },
  {
  id: 1435,
  question: "genius",
  choices: ["天才", "凡人", "学生", "教師"],
  correctAnswer: "天才"
  },
  {
  id: 1436,
  question: "conduct",
  choices: ["行為", "理論", "計画", "分析"],
  correctAnswer: "行為"
  },
  {
  id: 1437,
  question: "insect",
  choices: ["昆虫", "哺乳類", "爬虫類", "鳥類"],
  correctAnswer: "昆虫"
  },
  {
  id: 1438,
  question: "demonstrate",
  choices: ["実証する", "否定する", "想像する", "忘れる"],
  correctAnswer: "実証する"
  },
  {
  id: 1439,
  question: "painful",
  choices: ["苦痛な", "楽しい", "快適な", "平穏な"],
  correctAnswer: "苦痛な"
  },
  {
  id: 1440,
  question: "circuit",
  choices: ["回路", "直線", "交差点", "終点"],
  correctAnswer: "回路"
},

  {
  id: 1441,
  question: "regime",
  choices: ["政権", "反対派", "民間", "国際機関"],
  correctAnswer: "政権"
  },
  {
  id: 1442,
  question: "awake",
  choices: ["目を覚ましている", "眠っている", "混乱している", "集中している"],
  correctAnswer: "目を覚ましている"
  },
  {
  id: 1443,
  question: "useful",
  choices: ["役に立つ", "無駄な", "害悪な", "複雑な"],
  correctAnswer: "役に立つ"
  },
  {
  id: 1444,
  question: "entertainment",
  choices: ["娯楽", "仕事", "学習", "瞑想"],
  correctAnswer: "娯楽"
  },
  {
  id: 1445,
  question: "express",
  choices: ["表現する", "隠す", "無視する", "消去する"],
  correctAnswer: "表現する"
  },
  {
  id: 1446,
  question: "sacrifice",
  choices: ["犠牲", "報酬", "利益", "機会"],
  correctAnswer: "犠牲"
  },
  {
  id: 1447,
  question: "devise",
  choices: ["考え出す", "忘れる", "拒絶する", "依存する"],
  correctAnswer: "考え出す"
  },
  {
  id: 1448,
  question: "intimate",
  choices: ["親密な", "遠い", "敵対的な", "公式の"],
  correctAnswer: "親密な"
  },
  {
  id: 1449,
  question: "seldom",
  choices: ["めったにAしない", "常に", "頻繁に", "時々"],
  correctAnswer: "めったにAしない"
  },
  {
  id: 1450,
  question: "criticism",
  choices: ["批判", "称賛", "無視", "同意"],
  correctAnswer: "批判"
},

  {
  id: 1451,
  question: "price",
  choices: ["値段", "量", "重さ", "色"],
  correctAnswer: "値段"
  },
  {
  id: 1452,
  question: "invisible",
  choices: ["見えない", "鮮明な", "目立つ", "色鮮やかな"],
  correctAnswer: "見えない"
  },
  {
  id: 1453,
  question: "present",
  choices: ["現在の", "過去の", "未来の", "永遠の"],
  correctAnswer: "現在の"
  },
  {
  id: 1454,
  question: "somehow",
  choices: ["どうにか", "絶対に", "決して", "明確に"],
  correctAnswer: "どうにか"
  },
  {
  id: 1455,
  question: "agreement",
  choices: ["同意", "反対", "疑問", "無関心"],
  correctAnswer: "同意"
  },
  {
  id: 1456,
  question: "although",
  choices: ["だけれども", "なぜなら", "その上", "それにもかかわらず"],
  correctAnswer: "だけれども"
  },
  {
  id: 1457,
  question: "advocate",
  choices: ["提唱する", "否定する", "隠す", "無視する"],
  correctAnswer: "提唱する"
  },
  {
  id: 1458,
  question: "increasingly",
  choices: ["ますます", "次第に減って", "一貫して", "偶然に"],
  correctAnswer: "ますます"
  },
  {
  id: 1459,
  question: "govern",
  choices: ["統治する", "従う", "放棄する", "破壊する"],
  correctAnswer: "統治する"
  },
  {
  id: 1460,
  question: "electronic",
  choices: ["電子の", "機械的な", "手動の", "生物学的な"],
  correctAnswer: "電子の"
},

  {
  id: 1461,
  question: "necessarily",
  choices: ["必然的に", "偶然に", "まれに", "時々"],
  correctAnswer: "必然的に"
  },
  {
  id: 1462,
  question: "severe",
  choices: ["厳しい", "寛大な", "優しい", "柔軟な"],
  correctAnswer: "厳しい"
  },
  {
  id: 1463,
  question: "convenient",
  choices: ["都合がよい", "不便な", "困難な", "厄介な"],
  correctAnswer: "都合がよい"
  },
  {
  id: 1464,
  question: "due",
  choices: ["期限の", "遅れた", "早すぎる", "不定の"],
  correctAnswer: "期限の"
  },
  {
  id: 1465,
  question: "coast",
  choices: ["海岸", "山岳", "平野", "森林"],
  correctAnswer: "海岸"
  },
  {
  id: 1466,
  question: "extreme",
  choices: ["極端な", "中庸な", "穏やかな", "平均的な"],
  correctAnswer: "極端な"
  },
  {
  id: 1467,
  question: "relief",
  choices: ["安堵", "不安", "混乱", "緊張"],
  correctAnswer: "安堵"
  },
  {
  id: 1468,
  question: "edge",
  choices: ["端", "中心", "底", "頂点"],
  correctAnswer: "端"
  },
  {
  id: 1469,
  question: "vice",
  choices: ["副担当の", "主担当の", "無関係の", "対立する"],
  correctAnswer: "副担当の"
  },
  {
  id: 1470,
  question: "national",
  choices: ["国の", "地方の", "私的な", "国際的な"],
  correctAnswer: "国の"
},

  {
  id: 1471,
  question: "vulnerable",
  choices: ["傷つきやすい", "強固な", "不変の", "攻撃的な"],
  correctAnswer: "傷つきやすい"
  },
  {
  id: 1472,
  question: "evolution",
  choices: ["進化", "退化", "停滞", "復活"],
  correctAnswer: "進化"
  },
  {
  id: 1473,
  question: "slight",
  choices: ["かすかな", "強烈な", "重大な", "大幅な"],
  correctAnswer: "かすかな"
  },
  {
  id: 1474,
  question: "rely",
  choices: ["頼る", "拒否する", "攻撃する", "回避する"],
  correctAnswer: "頼る"
  },
  {
  id: 1475,
  question: "globe",
  choices: ["地球", "月", "太陽", "銀河"],
  correctAnswer: "地球"
  },
  {
  id: 1476,
  question: "constitution",
  choices: ["憲法", "破壊", "混乱", "解散"],
  correctAnswer: "憲法"
  },
  {
  id: 1477,
  question: "prompt",
  choices: ["即座の", "遅延した", "間接的な", "途切れた"],
  correctAnswer: "即座の"
  },
  {
  id: 1478,
  question: "restriction",
  choices: ["制限", "拡張", "自由", "解放"],
  correctAnswer: "制限"
  },
  {
  id: 1479,
  question: "rapid",
  choices: ["急速な", "緩やかな", "静的な", "周期的な"],
  correctAnswer: "急速な"
  },
  {
  id: 1480,
  question: "inspector",
  choices: ["検査官", "教師", "生徒", "管理者"],
  correctAnswer: "検査官"
},

  {
  id: 1481,
  question: "essentially",
  choices: ["本質的に", "表面的に", "偶然に", "一時的に"],
  correctAnswer: "本質的に"
  },
  {
  id: 1482,
  question: "select",
  choices: ["を選び出す", "を排除する", "を無視する", "を評価する"],
  correctAnswer: "を選び出す"
  },
  {
  id: 1483,
  question: "carbon",
  choices: ["炭素", "水素", "酸素", "窒素"],
  correctAnswer: "炭素"
  },
  {
  id: 1484,
  question: "sudden",
  choices: ["突然の", "徐々の", "永続的な", "定期的な"],
  correctAnswer: "突然の"
  },
  {
  id: 1485,
  question: "deliberately",
  choices: ["故意に", "偶然に", "急いで", "無意識に"],
  correctAnswer: "故意に"
  },
  {
  id: 1486,
  question: "significant",
  choices: ["重要な", "無関係な", "些細な", "一時的な"],
  correctAnswer: "重要な"
  },
  {
  id: 1487,
  question: "employ",
  choices: ["雇う", "解雇する", "忘れる", "避ける"],
  correctAnswer: "雇う"
  },
  {
  id: 1488,
  question: "latest",
  choices: ["最新の", "最古の", "過去の", "古典的な"],
  correctAnswer: "最新の"
  },
  {
  id: 1489,
  question: "tough",
  choices: ["頑強な", "脆い", "柔軟な", "繊細な"],
  correctAnswer: "頑強な"
  },
  {
  id: 1490,
  question: "tide",
  choices: ["潮", "波", "風", "雨"],
  correctAnswer: "潮"
},

  {
  id: 1491,
  question: "asset",
  choices: ["資産", "負債", "損害", "費用"],
  correctAnswer: "資産"
  },
  {
  id: 1492,
  question: "origin",
  choices: ["起源", "結末", "中間", "進行"],
  correctAnswer: "起源"
  },
  {
  id: 1493,
  question: "popular",
  choices: ["人気のある", "忌避される", "無名の", "特別な"],
  correctAnswer: "人気のある"
  },
  {
  id: 1494,
  question: "colony",
  choices: ["植民地", "共和国", "王国", "自治区"],
  correctAnswer: "植民地"
  },
  {
  id: 1495,
  question: "distribution",
  choices: ["分布", "集中", "単一性", "一貫性"],
  correctAnswer: "分布"
  },
  {
  id: 1496,
  question: "plot",
  choices: ["話の筋", "登場人物", "背景", "テーマ"],
  correctAnswer: "話の筋"
  },
  {
  id: 1497,
  question: "mortgage",
  choices: ["抵当", "現金", "寄付", "貯金"],
  correctAnswer: "抵当"
  },
  {
  id: 1498,
  question: "drug",
  choices: ["麻薬", "ビタミン", "栄養補助食品", "食品"],
  correctAnswer: "麻薬"
  },
  {
  id: 1499,
  question: "possibly",
  choices: ["ひょっとすると", "絶対に", "決して", "かつて"],
  correctAnswer: "ひょっとすると"
  },
  {
  id: 1500,
  question: "advice",
  choices: ["助言", "命令", "要請", "批判"],
  correctAnswer: "助言"
},

  {
  id: 1501,
  question: "industrialize",
  choices: ["産業化する", "自然化する", "農業化する", "デジタル化する"],
  correctAnswer: "産業化する"
  },
  {
  id: 1502,
  question: "complain",
  choices: ["不満を言う", "賞賛する", "同意する", "推薦する"],
  correctAnswer: "不満を言う"
  },
  {
  id: 1503,
  question: "county",
  choices: ["州", "市", "村", "区"],
  correctAnswer: "州"
  },
  {
  id: 1504,
  question: "supporter",
  choices: ["支援者", "反対者", "批判者", "無関心者"],
  correctAnswer: "支援者"
  },
  {
  id: 1505,
  question: "federal",
  choices: ["連邦の", "地方の", "私立の", "国際的な"],
  correctAnswer: "連邦の"
  },
  {
  id: 1506,
  question: "fur",
  choices: ["毛皮", "羽毛", "皮膚", "爪"],
  correctAnswer: "毛皮"
  },
  {
  id: 1507,
  question: "commercial",
  choices: ["商業の", "非営利の", "公共の", "個人的な"],
  correctAnswer: "商業の"
  },
  {
  id: 1508,
  question: "aggression",
  choices: ["攻撃性", "防御性", "平和主義", "中立性"],
  correctAnswer: "攻撃性"
  },
  {
  id: 1509,
  question: "entire",
  choices: ["全体の", "部分的な", "一時的な", "恒久的な"],
  correctAnswer: "全体の"
  },
  {
  id: 1510,
  question: "silly",
  choices: ["馬鹿な", "賢い", "真剣な", "冷静な"],
  correctAnswer: "馬鹿な"
},

  {
  id: 1511,
  question: "brick",
  choices: ["れんが", "木材", "金属", "プラスチック"],
  correctAnswer: "れんが"
  },
  {
  id: 1512,
  question: "basis",
  choices: ["土台", "頂点", "側面", "背景"],
  correctAnswer: "土台"
  },
  {
  id: 1513,
  question: "protect",
  choices: ["を守る", "を攻撃する", "を無視する", "を放棄する"],
  correctAnswer: "を守る"
  },
  {
  id: 1514,
  question: "confirm",
  choices: ["確認する", "否定する", "推測する", "拡大する"],
  correctAnswer: "確認する"
  },
  {
  id: 1515,
  question: "broad",
  choices: ["広い", "狭い", "高い", "低い"],
  correctAnswer: "広い"
  },
  {
  id: 1516,
  question: "prior",
  choices: ["優先の", "後の", "同等の", "関連性がない"],
  correctAnswer: "優先の"
  },
  {
  id: 1517,
  question: "consequence",
  choices: ["結果", "原因", "方法", "目的"],
  correctAnswer: "結果"
  },
  {
  id: 1518,
  question: "pretty",
  choices: ["かなり", "わずかに", "全く", "決して"],
  correctAnswer: "かなり"
  },
  {
  id: 1519,
  question: "manufacturer",
  choices: ["製造元", "小売業者", "消費者", "配送業者"],
  correctAnswer: "製造元"
  },
  {
  id: 1520,
  question: "exhibition",
  choices: ["展示", "抑制", "解消", "消滅"],
  correctAnswer: "展示"
},

  {
  id: 1521,
  question: "cruise",
  choices: ["巡航する", "停止する", "沈む", "浮かぶ"],
  correctAnswer: "巡航する"
  },
  {
  id: 1522,
  question: "extraordinary",
  choices: ["普通でない", "普通の", "平均的な", "基本的な"],
  correctAnswer: "普通でない"
  },
  {
  id: 1523,
  question: "leisure",
  choices: ["余暇", "労働", "勉強", "緊張"],
  correctAnswer: "余暇"
  },
  {
  id: 1524,
  question: "multiple",
  choices: ["掛け算する", "足し算する", "引き算する", "割り算する"],
  correctAnswer: "掛け算する"
  },
  {
  id: 1525,
  question: "variation",
  choices: ["変化", "一貫性", "停滞", "減少"],
  correctAnswer: "変化"
  },
  {
  id: 1526,
  question: "suit",
  choices: ["適合する", "反対する", "破壊する", "忘れる"],
  correctAnswer: "適合する"
  },
  {
  id: 1527,
  question: "teenager",
  choices: ["十代", "二十代", "三十代", "幼児期"],
  correctAnswer: "十代"
  },
  {
  id: 1528,
  question: "bare",
  choices: ["裸の", "覆われた", "飾られた", "保護された"],
  correctAnswer: "裸の"
  },
  {
  id: 1529,
  question: "minority",
  choices: ["少数派", "多数派", "全体", "単一"],
  correctAnswer: "少数派"
  },
  {
  id: 1530,
  question: "rapidly",
  choices: ["素早く", "ゆっくりと", "時々", "永遠に"],
  correctAnswer: "素早く"
},

  {
  id: 1531,
  question: "odd",
  choices: ["変な", "普通の", "単純な", "明確な"],
  correctAnswer: "変な"
  },
  {
  id: 1532,
  question: "lawn",
  choices: ["芝生", "砂漠", "森林", "岩場"],
  correctAnswer: "芝生"
  },
  {
  id: 1533,
  question: "consist",
  choices: ["成り立つ", "解体する", "減少する", "拡大する"],
  correctAnswer: "成り立つ"
  },
  {
  id: 1534,
  question: "duty",
  choices: ["職務", "権利", "自由", "制約"],
  correctAnswer: "職務"
  },
  {
  id: 1535,
  question: "period",
  choices: ["期間", "瞬間", "永遠", "過去"],
  correctAnswer: "期間"
  },
  {
  id: 1536,
  question: "comprehensive",
  choices: ["包括的な", "限定的な", "狭い", "専門的な"],
  correctAnswer: "包括的な"
  },
  {
  id: 1537,
  question: "achievement",
  choices: ["達成", "失敗", "試み", "計画"],
  correctAnswer: "達成"
  },
  {
  id: 1538,
  question: "sum",
  choices: ["合計", "差額", "倍率", "割合"],
  correctAnswer: "合計"
  },
  {
  id: 1539,
  question: "seem",
  choices: ["の様に見える", "確定する", "消える", "変化する"],
  correctAnswer: "の様に見える"
  },
  {
  id: 1540,
  question: "implement",
  choices: ["実施する", "禁止する", "推測する", "忘れる"],
  correctAnswer: "実施する"
},

  {
  id: 1541,
  question: "interior",
  choices: ["内部の", "外部の", "上部の", "下部の"],
  correctAnswer: "内部の"
  },
  {
  id: 1542,
  question: "calculate",
  choices: ["計算する", "推測する", "忘れる", "比較する"],
  correctAnswer: "計算する"
  },
  {
  id: 1543,
  question: "dominate",
  choices: ["を支配する", "を服従させる", "を解放する", "を無視する"],
  correctAnswer: "を支配する"
  },
  {
  id: 1544,
  question: "obligation",
  choices: ["義務", "権利", "自由", "選択"],
  correctAnswer: "義務"
  },
  {
  id: 1545,
  question: "joy",
  choices: ["喜び", "悲しみ", "恐怖", "怒り"],
  correctAnswer: "喜び"
  },
  {
  id: 1546,
  question: "throat",
  choices: ["のど", "心", "肺", "脳"],
  correctAnswer: "のど"
  },
  {
  id: 1547,
  question: "imagination",
  choices: ["想像", "現実", "記憶", "知識"],
  correctAnswer: "想像"
  },
  {
  id: 1548,
  question: "democrat",
  choices: ["民主主義者", "共和主義者", "無政府主義者", "君主主義者"],
  correctAnswer: "民主主義者"
  },
  {
  id: 1549,
  question: "chapter",
  choices: ["章", "節", "行", "段落"],
  correctAnswer: "章"
  },
  {
  id: 1550,
  question: "hell",
  choices: ["地獄", "天国", "現世", "楽園"],
  correctAnswer: "地獄"
},

  {
  id: 1551,
  question: "lean",
  choices: ["傾く", "直立する", "跳ぶ", "走る"],
  correctAnswer: "傾く"
  },
  {
  id: 1552,
  question: "pan",
  choices: ["フライパン", "鍋", "皿", "カップ"],
  correctAnswer: "フライパン"
  },
  {
  id: 1553,
  question: "blast",
  choices: ["爆風", "微風", "熱風", "冷風"],
  correctAnswer: "爆風"
  },
  {
  id: 1554,
  question: "exist",
  choices: ["存在する", "消失する", "変化する", "発展する"],
  correctAnswer: "存在する"
  },
  {
  id: 1555,
  question: "politician",
  choices: ["政治家", "科学者", "教師", "医者"],
  correctAnswer: "政治家"
  },
  {
  id: 1556,
  question: "industrial",
  choices: ["産業の", "農業の", "医療の", "教育の"],
  correctAnswer: "産業の"
  },
  {
  id: 1557,
  question: "merchant",
  choices: ["商人", "学生", "労働者", "管理者"],
  correctAnswer: "商人"
  },
  {
  id: 1558,
  question: "assembly",
  choices: ["集合", "分解", "運動", "瞑想"],
  correctAnswer: "集合"
  },
  {
  id: 1559,
  question: "focus",
  choices: ["焦点", "周辺", "背景", "遠景"],
  correctAnswer: "焦点"
  },
  {
  id: 1560,
  question: "actual",
  choices: ["現実の", "理想の", "過去の", "未来の"],
  correctAnswer: "現実の"
},

  {
  id: 1561,
  question: "universe",
  choices: ["宇宙", "地球", "大陸", "海"],
  correctAnswer: "宇宙"
  },
  {
  id: 1562,
  question: "nerve",
  choices: ["神経", "筋肉", "骨", "血管"],
  correctAnswer: "神経"
  },
  {
  id: 1563,
  question: "mostly",
  choices: ["主に", "稀に", "時々", "絶対に"],
  correctAnswer: "主に"
  },
  {
  id: 1564,
  question: "criminal",
  choices: ["犯罪の", "合法の", "公正な", "民間の"],
  correctAnswer: "犯罪の"
  },
  {
  id: 1565,
  question: "passage",
  choices: ["一節", "全文", "単語", "段落"],
  correctAnswer: "一節"
  },
  {
  id: 1566,
  question: "logic",
  choices: ["論理", "情感", "直感", "想像"],
  correctAnswer: "論理"
  },
  {
  id: 1567,
  question: "arise",
  choices: ["起こる", "消える", "減少する", "安定する"],
  correctAnswer: "起こる"
  },
  {
  id: 1568,
  question: "whatever",
  choices: ["なんでも", "何も", "少しも", "特にない"],
  correctAnswer: "なんでも"
  },
  {
  id: 1569,
  question: "rebel",
  choices: ["反逆者", "支持者", "観察者", "指導者"],
  correctAnswer: "反逆者"
  },
  {
  id: 1570,
  question: "encounter",
  choices: ["遭遇する", "避ける", "追求する", "忘れる"],
  correctAnswer: "遭遇する"
},

  {
  id: 1571,
  question: "depress",
  choices: ["落胆させる", "元気づける", "無視する", "強化する"],
  correctAnswer: "落胆させる"
  },
  {
  id: 1572,
  question: "widely",
  choices: ["広範囲に", "狭い範囲に", "部分的に", "密接に"],
  correctAnswer: "広範囲に"
  },
  {
  id: 1573,
  question: "expansion",
  choices: ["拡張", "縮小", "停止", "減少"],
  correctAnswer: "拡張"
  },
  {
  id: 1574,
  question: "existence",
  choices: ["存在", "消失", "仮定", "偽造"],
  correctAnswer: "存在"
  },
  {
  id: 1575,
  question: "peculiar",
  choices: ["奇妙な", "普通の", "一般的な", "特別な"],
  correctAnswer: "奇妙な"
  },
  {
  id: 1576,
  question: "strict",
  choices: ["厳しい", "寛容な", "柔軟な", "無関心な"],
  correctAnswer: "厳しい"
  },
  {
  id: 1577,
  question: "firm",
  choices: ["しっかりした", "弱い", "不確かな", "不安定な"],
  correctAnswer: "しっかりした"
  },
  {
  id: 1578,
  question: "desperate",
  choices: ["やけくその", "落ち着いた", "希望に満ちた", "自信がある"],
  correctAnswer: "やけくその"
  },
  {
  id: 1579,
  question: "sort",
  choices: ["種類", "同一", "全体", "個別"],
  correctAnswer: "種類"
  },
  {
  id: 1580,
  question: "personally",
  choices: ["個人的に", "公に", "集団で", "客観的に"],
  correctAnswer: "個人的に"
},

  {
  id: 1581,
  question: "urge",
  choices: ["強く促す", "避ける", "減速する", "無視する"],
  correctAnswer: "強く促す"
  },
  {
  id: 1582,
  question: "blood",
  choices: ["血", "水", "汗", "涙"],
  correctAnswer: "血"
  },
  {
  id: 1583,
  question: "institution",
  choices: ["制度", "解体", "制約", "拡張"],
  correctAnswer: "制度"
  },
  {
  id: 1584,
  question: "facility",
  choices: ["施設", "障害", "複雑さ", "限界"],
  correctAnswer: "施設"
  },
  {
  id: 1585,
  question: "crew",
  choices: ["乗組員", "旅行者", "観光客", "地元民"],
  correctAnswer: "乗組員"
  },
  {
  id: 1586,
  question: "index",
  choices: ["索引", "本文", "補足", "導入"],
  correctAnswer: "索引"
  },
  {
  id: 1587,
  question: "unpleasant",
  choices: ["不愉快な", "愉快な", "中立的な", "興奮する"],
  correctAnswer: "不愉快な"
  },
  {
  id: 1588,
  question: "etc",
  choices: ["等々", "特に", "ただし", "しかしながら"],
  correctAnswer: "等々"
  },
  {
  id: 1589,
  question: "elementary",
  choices: ["初級の", "上級の", "専門的な", "一般的な"],
  correctAnswer: "初級の"
  },
  {
  id: 1590,
  question: "viewer",
  choices: ["観察者", "参加者", "演者", "指導者"],
  correctAnswer: "観察者"
},

  {
  id: 1591,
  question: "spiritual",
  choices: ["精神の", "物質的な", "外観の", "一時的な"],
  correctAnswer: "精神の"
  },
  {
  id: 1592,
  question: "conference",
  choices: ["会議", "個人面談", "休憩", "演習"],
  correctAnswer: "会議"
  },
  {
  id: 1593,
  question: "freeze",
  choices: ["凍る", "溶ける", "蒸発する", "沸騰する"],
  correctAnswer: "凍る"
  },
  {
  id: 1594,
  question: "debate",
  choices: ["討論", "合意", "協力", "無視"],
  correctAnswer: "討論"
  },
  {
  id: 1595,
  question: "swallow",
  choices: ["を飲み込む", "を吐き出す", "を噛む", "を見る"],
  correctAnswer: "を飲み込む"
  },
  {
  id: 1596,
  question: "convey",
  choices: ["伝える", "隠す", "忘れる", "捨てる"],
  correctAnswer: "伝える"
  },
  {
  id: 1597,
  question: "honor",
  choices: ["名誉", "恥", "平凡", "失敗"],
  correctAnswer: "名誉"
  },
  {
  id: 1598,
  question: "traffic jam",
  choices: ["交通渋滞", "迅速な通行", "空路", "海路"],
  correctAnswer: "交通渋滞"
  },
  {
  id: 1599,
  question: "concrete",
  choices: ["具体的な", "抽象的な", "理論的な", "仮想的な"],
  correctAnswer: "具体的な"
  },
  {
  id: 1600,
  question: "laboratory",
  choices: ["実験室", "図書館", "講堂", "体育館"],
  correctAnswer: "実験室"
},

  {
  id: 1601,
  question: "capable",
  choices: ["可能性がある", "不可能な", "不適切な", "無関心な"],
  correctAnswer: "可能性がある"
  },
  {
  id: 1602,
  question: "treasure",
  choices: ["宝", "負債", "損失", "罰"],
  correctAnswer: "宝"
  },
  {
  id: 1603,
  question: "reserve",
  choices: ["を取っておく", "を放棄する", "を拒絶する", "を公開する"],
  correctAnswer: "を取っておく"
  },
  {
  id: 1604,
  question: "phenomenon",
  choices: ["現象", "理論", "仮説", "解答"],
  correctAnswer: "現象"
  },
  {
  id: 1605,
  question: "chest",
  choices: ["たんす", "机", "椅子", "ベッド"],
  correctAnswer: "たんす"
  },
  {
  id: 1606,
  question: "bite",
  choices: ["を噛む", "をなめる", "を触る", "を見る"],
  correctAnswer: "を噛む"
  },
  {
  id: 1607,
  question: "proper",
  choices: ["適切な", "不適切な", "過剰な", "不十分な"],
  correctAnswer: "適切な"
  },
  {
  id: 1608,
  question: "rub",
  choices: ["こする", "打つ", "投げる", "振る"],
  correctAnswer: "こする"
  },
  {
  id: 1609,
  question: "shortly",
  choices: ["まもなく", "永遠に", "時々", "かなり前に"],
  correctAnswer: "まもなく"
  },
  {
  id: 1610,
  question: "term",
  choices: ["期間", "条件", "定義", "結論"],
  correctAnswer: "期間"
},
  {
  id: 1611,
  question: "psychological",
  choices: ["心理的な", "物理的な", "経済的な", "生物学的な"],
  correctAnswer: "心理的な"
  },
  {
  id: 1612,
  question: "right",
  choices: ["正しい", "間違った", "不確かな", "不明確な"],
  correctAnswer: "正しい"
  },
  {
  id: 1613,
  question: "inclined",
  choices: ["傾いた", "水平な", "下降した", "安定した"],
  correctAnswer: "傾いた"
  },
  {
  id: 1614,
  question: "attract",
  choices: ["引きつける", "避ける", "排除する", "無視する"],
  correctAnswer: "引きつける"
  },
  {
  id: 1615,
  question: "headquarters",
  choices: ["本部", "支店", "外局", "工場"],
  correctAnswer: "本部"
  },
  {
  id: 1616,
  question: "highlight",
  choices: ["目立たせる", "隠す", "減光する", "消去する"],
  correctAnswer: "目立たせる"
  },
  {
  id: 1617,
  question: "owe",
  choices: ["を借りている", "返済した", "与える", "受け取る"],
  correctAnswer: "を借りている"
  },
  {
  id: 1618,
  question: "accustomed",
  choices: ["慣れている", "不慣れな", "新しい", "遠い"],
  correctAnswer: "慣れている"
  },
  {
  id: 1619,
  question: "portion",
  choices: ["部分", "全体", "余剰", "不足"],
  correctAnswer: "部分"
  },
  {
  id: 1620,
  question: "mad",
  choices: ["狂った", "落ち着いた", "幸せな", "悲しい"],
  correctAnswer: "狂った"
},
  {
  id: 1621,
  question: "buyer",
  choices: ["買い手", "売り手", "観察者", "中立者"],
  correctAnswer: "買い手"
  },
  {
  id: 1622,
  question: "till",
  choices: ["まで", "から", "を除いて", "に対して"],
  correctAnswer: "まで"
  },
  {
  id: 1623,
  question: "destruction",
  choices: ["破壊", "建設", "修復", "維持"],
  correctAnswer: "破壊"
  },
  {
  id: 1624,
  question: "injury",
  choices: ["怪我", "治癒", "健康", "強化"],
  correctAnswer: "怪我"
  },
  {
  id: 1625,
  question: "confusion",
  choices: ["混乱", "秩序", "明確性", "統一"],
  correctAnswer: "混乱"
  },
  {
  id: 1626,
  question: "employer",
  choices: ["雇用者", "従業員", "協力者", "競争者"],
  correctAnswer: "雇用者"
  },
  {
  id: 1627,
  question: "crop",
  choices: ["収穫物", "廃棄物", "資源", "障害物"],
  correctAnswer: "収穫物"
  },
  {
  id: 1628,
  question: "nervous",
  choices: ["神経質な", "落ち着いた", "自信がある", "無関心な"],
  correctAnswer: "神経質な"
  },
  {
  id: 1629,
  question: "companion",
  choices: ["仲間", "敵", "指導者", "追随者"],
  correctAnswer: "仲間"
  },
  {
  id: 1630,
  question: "distance",
  choices: ["距離", "近さ", "接触", "隔離"],
  correctAnswer: "距離"
},

  {
  id: 1631,
  question: "impression",
  choices: ["印象", "無関心", "誤解", "確信"],
  correctAnswer: "印象"
  },
  {
  id: 1632,
  question: "confront",
  choices: ["直面させる", "回避する", "合意する", "調和する"],
  correctAnswer: "直面させる"
  },
  {
  id: 1633,
  question: "path",
  choices: ["小道", "大通り", "橋", "階段"],
  correctAnswer: "小道"
  },
  {
  id: 1634,
  question: "suppress",
  choices: ["抑える", "促進する", "許可する", "解放する"],
  correctAnswer: "抑える"
  },
  {
  id: 1635,
  question: "decline",
  choices: ["断る", "受け入れる", "追求する", "研究する"],
  correctAnswer: "断る"
  },
  {
  id: 1636,
  question: "truth",
  choices: ["真実", "嘘", "誇張", "仮定"],
  correctAnswer: "真実"
  },
  {
  id: 1637,
  question: "intellectual",
  choices: ["知的な", "感情的な", "物理的な", "無関心な"],
  correctAnswer: "知的な"
  },
  {
  id: 1638,
  question: "jail",
  choices: ["刑務所", "学校", "病院", "公園"],
  correctAnswer: "刑務所"
  },
  {
  id: 1639,
  question: "cease",
  choices: ["やめる", "開始する", "続ける", "加速する"],
  correctAnswer: "やめる"
  },
  {
  id: 1640,
  question: "pile",
  choices: ["積み重ね", "分解", "流出", "減少"],
  correctAnswer: "積み重ね"
},

  {
  id: 1641,
  question: "cover",
  choices: ["を覆う", "を露出する", "を削除する", "を強調する"],
  correctAnswer: "を覆う"
  },
  {
  id: 1642,
  question: "finance",
  choices: ["財政", "科学", "教育", "健康"],
  correctAnswer: "財政"
  },
  {
  id: 1643,
  question: "cast",
  choices: ["投げる", "引く", "保存する", "計算する"],
  correctAnswer: "投げる"
  },
  {
  id: 1644,
  question: "distinct",
  choices: ["他と違った", "同じ", "関連している", "一致している"],
  correctAnswer: "他と違った"
  },
  {
  id: 1645,
  question: "conservation",
  choices: ["保全", "消費", "破壊", "無視"],
  correctAnswer: "保全"
  },
  {
  id: 1646,
  question: "prosecutor",
  choices: ["検察官", "弁護士", "裁判官", "証人"],
  correctAnswer: "検察官"
  },
  {
  id: 1647,
  question: "task",
  choices: ["仕事", "休息", "娯楽", "移動"],
  correctAnswer: "仕事"
  },
  {
  id: 1648,
  question: "initially",
  choices: ["最初は", "最終的に", "時々", "絶えず"],
  correctAnswer: "最初は"
  },
  {
  id: 1649,
  question: "behalf",
  choices: ["代わって", "対抗して", "一致して", "離れて"],
  correctAnswer: "代わって"
  },
  {
  id: 1650,
  question: "region",
  choices: ["地域", "都市", "国", "大陸"],
  correctAnswer: "地域"
},

  {
  id: 1651,
  question: "prefer",
  choices: ["より好む", "嫌う", "無視する", "避ける"],
  correctAnswer: "より好む"
  },
  {
  id: 1652,
  question: "perspective",
  choices: ["見解", "混乱", "単純", "困難"],
  correctAnswer: "見解"
  },
  {
  id: 1653,
  question: "income",
  choices: ["所得", "支出", "借金", "貯蓄"],
  correctAnswer: "所得"
  },
  {
  id: 1654,
  question: "identical",
  choices: ["同一の", "異なる", "関連のない", "対照的な"],
  correctAnswer: "同一の"
  },
  {
  id: 1655,
  question: "impressive",
  choices: ["印象的な", "普通の", "無視できる", "忘れやすい"],
  correctAnswer: "印象的な"
  },
  {
  id: 1656,
  question: "polite",
  choices: ["礼儀正しい", "無礼な", "無関心な", "攻撃的な"],
  correctAnswer: "礼儀正しい"
  },
  {
  id: 1657,
  question: "executive",
  choices: ["実行する", "計画する", "破棄する", "分析する"],
  correctAnswer: "実行する"
  },
  {
  id: 1658,
  question: "rough",
  choices: ["ごつごつした", "滑らかな", "薄い", "透明な"],
  correctAnswer: "ごつごつした"
  },
  {
  id: 1659,
  question: "proposed",
  choices: ["提案した", "拒否した", "確認した", "無視した"],
  correctAnswer: "提案した"
  },
  {
  id: 1660,
  question: "province",
  choices: ["州", "市", "村", "国"],
  correctAnswer: "州"
},

  {
  id: 1661,
  question: "personality",
  choices: ["人格", "外見", "能力", "経験"],
  correctAnswer: "人格"
  },
  {
  id: 1662,
  question: "stake",
  choices: ["くい", "賞", "損失", "利益"],
  correctAnswer: "くい"
  },
  {
  id: 1663,
  question: "goal",
  choices: ["目標", "開始", "過程", "結果"],
  correctAnswer: "目標"
  },
  {
  id: 1664,
  question: "girlfriend",
  choices: ["女友達", "男友達", "敵", "同僚"],
  correctAnswer: "女友達"
  },
  {
  id: 1665,
  question: "forward",
  choices: ["前方へ", "後ろへ", "上へ", "下へ"],
  correctAnswer: "前方へ"
  },
  {
  id: 1666,
  question: "narrow",
  choices: ["幅が狭い", "幅が広い", "均等な", "無限の"],
  correctAnswer: "幅が狭い"
  },
  {
  id: 1667,
  question: "divorce",
  choices: ["離婚", "結婚", "婚約", "再婚"],
  correctAnswer: "離婚"
  },
  {
  id: 1668,
  question: "apart",
  choices: ["離れて", "一緒に", "近くに", "中央で"],
  correctAnswer: "離れて"
  },
  {
  id: 1669,
  question: "emphasis",
  choices: ["強調", "軽視", "無視", "平等"],
  correctAnswer: "強調"
  },
  {
  id: 1670,
  question: "shooting",
  choices: ["撮影", "射撃", "投げる", "走る"],
  correctAnswer: "撮影"
},
  {
  id: 1671,
  question: "inhabitant",
  choices: ["居住者", "訪問者", "建築家", "通行人"],
  correctAnswer: "居住者"
  },
  {
  id: 1672,
  question: "recession",
  choices: ["不況", "成長", "安定", "繁栄"],
  correctAnswer: "不況"
  },
  {
  id: 1673,
  question: "passive",
  choices: ["受身の", "積極的な", "攻撃的な", "能動的な"],
  correctAnswer: "受身の"
  },
  {
  id: 1674,
  question: "subtle",
  choices: ["微妙な", "明白な", "雑な", "荒々しい"],
  correctAnswer: "微妙な"
  },
  {
  id: 1675,
  question: "competitive",
  choices: ["競争力のある", "協力的な", "独占的な", "孤立した"],
  correctAnswer: "競争力のある"
  },
  {
  id: 1676,
  question: "clothing",
  choices: ["衣料品", "家具", "食料品", "工芸品"],
  correctAnswer: "衣料品"
  },
  {
  id: 1677,
  question: "wise",
  choices: ["賢い", "愚かな", "怠惰な", "無関心な"],
  correctAnswer: "賢い"
  },
  {
  id: 1678,
  question: "pursuit",
  choices: ["追跡", "放棄", "停止", "開始"],
  correctAnswer: "追跡"
  },
  {
  id: 1679,
  question: "settlement",
  choices: ["移住", "紛争", "解決", "取引"],
  correctAnswer: "移住"
  },
  {
  id: 1680,
  question: "seize",
  choices: ["つかむ", "放す", "見逃す", "無視する"],
  correctAnswer: "つかむ"
},

  {
  id: 1681,
  question: "partnership",
  choices: ["共同", "競争", "分離", "孤立"],
  correctAnswer: "共同"
  },
  {
  id: 1682,
  question: "expression",
  choices: ["表現", "抑制", "無関心", "拒絶"],
  correctAnswer: "表現"
  },
  {
  id: 1683,
  question: "dispute",
  choices: ["争議", "協定", "同意", "承認"],
  correctAnswer: "争議"
  },
  {
  id: 1684,
  question: "contrary",
  choices: ["反対の", "同意の", "似ている", "無関係の"],
  correctAnswer: "反対の"
  },
  {
  id: 1685,
  question: "expand",
  choices: ["拡大する", "縮小する", "維持する", "停止する"],
  correctAnswer: "拡大する"
  },
  {
  id: 1686,
  question: "intelligence",
  choices: ["知能", "無知", "感情", "直感"],
  correctAnswer: "知能"
  },
  {
  id: 1687,
  question: "shortage",
  choices: ["不足", "過剰", "平均", "充足"],
  correctAnswer: "不足"
  },
  {
  id: 1688,
  question: "compound",
  choices: ["調合する", "分解する", "除去する", "避ける"],
  correctAnswer: "調合する"
  },
  {
  id: 1689,
  question: "defeat",
  choices: ["負かす", "支援する", "合意する", "逃げる"],
  correctAnswer: "負かす"
  },
  {
  id: 1690,
  question: "assumption",
  choices: ["想定", "確証", "無視", "拒否"],
  correctAnswer: "想定"
},

  {
  id: 1691,
  question: "sustain",
  choices: ["保持する", "放棄する", "失う", "無視する"],
  correctAnswer: "保持する"
  },
  {
  id: 1692,
  question: "initiative",
  choices: ["主導権", "従属", "反対", "無関心"],
  correctAnswer: "主導権"
  },
  {
  id: 1693,
  question: "bow",
  choices: ["お辞儀する", "跳ねる", "走る", "回避する"],
  correctAnswer: "お辞儀する"
  },
  {
  id: 1694,
  question: "examination",
  choices: ["試験", "会議", "発表", "休息"],
  correctAnswer: "試験"
  },
  {
  id: 1695,
  question: "confidence",
  choices: ["自信", "不安", "恐怖", "悲しみ"],
  correctAnswer: "自信"
  },
  {
  id: 1696,
  question: "yield",
  choices: ["産出する", "減少する", "回避する", "競争する"],
  correctAnswer: "産出する"
  },
  {
  id: 1697,
  question: "firmly",
  choices: ["堅く", "軟らかく", "不確かに", "不安定に"],
  correctAnswer: "堅く"
  },
  {
  id: 1698,
  question: "engaged",
  choices: ["に従事して", "無視して", "遠ざけて", "逃げて"],
  correctAnswer: "に従事して"
  },
  {
  id: 1699,
  question: "impulse",
  choices: ["衝動", "計画", "静けさ", "平穏"],
  correctAnswer: "衝動"
  },
  {
  id: 1700,
  question: "destroy",
  choices: ["を破壊する", "を建設する", "を保存する", "を分析する"],
  correctAnswer: "を破壊する"
},

  {
  id: 1701,
  question: "steady",
  choices: ["着実な", "不安定な", "変化する", "急な"],
  correctAnswer: "着実な"
  },
  {
  id: 1702,
  question: "element",
  choices: ["要素", "混乱", "複雑さ", "一貫性"],
  correctAnswer: "要素"
  },
  {
  id: 1703,
  question: "dealer",
  choices: ["販売業者", "消費者", "製造者", "監督者"],
  correctAnswer: "販売業者"
  },
  {
  id: 1704,
  question: "mysterious",
  choices: ["不可解な", "明白な", "単純な", "明るい"],
  correctAnswer: "不可解な"
  },
  {
  id: 1705,
  question: "comparison",
  choices: ["比較", "同一", "独立", "協力"],
  correctAnswer: "比較"
  },
  {
  id: 1706,
  question: "communist",
  choices: ["共産主義者", "資本主義者", "中立者", "保守主義者"],
  correctAnswer: "共産主義者"
  },
  {
  id: 1707,
  question: "republic",
  choices: ["共和国", "王国", "帝国", "君主国"],
  correctAnswer: "共和国"
  },
  {
  id: 1708,
  question: "expose",
  choices: ["明らかにする", "隠す", "制限する", "忘れる"],
  correctAnswer: "明らかにする"
  },
  {
  id: 1709,
  question: "department",
  choices: ["部門", "全体", "個人", "外部"],
  correctAnswer: "部門"
  },
  {
  id: 1710,
  question: "explanation",
  choices: ["説明", "質問", "応答", "無視"],
  correctAnswer: "説明"
},
  {
  id: 1711,
  question: "isolate",
  choices: ["を孤立させる", "を統合する", "を強化する", "を減少させる"],
  correctAnswer: "を孤立させる"
  },
  {
  id: 1712,
  question: "proceed",
  choices: ["進む", "停止する", "退く", "躊躇する"],
  correctAnswer: "進む"
  },
  {
  id: 1713,
  question: "explore",
  choices: ["探索する", "無視する", "破棄する", "避ける"],
  correctAnswer: "探索する"
  },
  {
  id: 1714,
  question: "regarding",
  choices: ["に関して", "逆らって", "離れて", "超えて"],
  correctAnswer: "に関して"
  },
  {
  id: 1715,
  question: "stupid",
  choices: ["馬鹿な", "賢い", "注意深い", "熟練した"],
  correctAnswer: "馬鹿な"
  },
  {
  id: 1716,
  question: "alive",
  choices: ["生きている", "死んでいる", "消失した", "静かな"],
  correctAnswer: "生きている"
  },
  {
  id: 1717,
  question: "dramatic",
  choices: ["劇的な", "平凡な", "予測可能な", "単調な"],
  correctAnswer: "劇的な"
  },
  {
  id: 1718,
  question: "potential",
  choices: ["潜在的な", "表面的な", "現実的な", "過去の"],
  correctAnswer: "潜在的な"
  },
  {
  id: 1719,
  question: "approval",
  choices: ["承認", "拒絶", "疑問", "無関心"],
  correctAnswer: "承認"
  },
  {
  id: 1720,
  question: "dare",
  choices: ["思い切ってする", "恐れる", "避ける", "諦める"],
  correctAnswer: "思い切ってする"
},

  {
  id: 1721,
  question: "activist",
  choices: ["行動主義者", "理論家", "観察者", "批評家"],
  correctAnswer: "行動主義者"
  },
  {
  id: 1722,
  question: "effectively",
  choices: ["効果的に", "無効に", "間接的に", "直接的に"],
  correctAnswer: "効果的に"
  },
  {
  id: 1723,
  question: "strain",
  choices: ["張る", "緩む", "切れる", "固定する"],
  correctAnswer: "張る"
  },
  {
  id: 1724,
  question: "shame",
  choices: ["恥", "誇り", "無関心", "喜び"],
  correctAnswer: "恥"
  },
  {
  id: 1725,
  question: "cash",
  choices: ["現金", "小切手", "信用", "負債"],
  correctAnswer: "現金"
  },
  {
  id: 1726,
  question: "asleep",
  choices: ["眠っている", "覚醒している", "活動中", "集中している"],
  correctAnswer: "眠っている"
  },
  {
  id: 1727,
  question: "mass",
  choices: ["塊", "少量", "空虚", "分散"],
  correctAnswer: "塊"
  },
  {
  id: 1728,
  question: "latter",
  choices: ["後者の", "前者の", "現在の", "未来の"],
  correctAnswer: "後者の"
  },
  {
  id: 1729,
  question: "absolutely",
  choices: ["絶対に", "おそらく", "たまに", "まれに"],
  correctAnswer: "絶対に"
  },
  {
  id: 1730,
  question: "intention",
  choices: ["意図", "無関心", "偶然", "反対"],
  correctAnswer: "意図"
},
  {
  id: 1731,
  question: "science",
  choices: ["科学", "文学", "歴史", "芸術"],
  correctAnswer: "科学"
  },
  {
  id: 1732,
  question: "split",
  choices: ["割る", "結ぶ", "融合する", "解決する"],
  correctAnswer: "割る"
  },
  {
  id: 1733,
  question: "diminish",
  choices: ["減らす", "増やす", "維持する", "無視する"],
  correctAnswer: "減らす"
  },
  {
  id: 1734,
  question: "positive",
  choices: ["自信のある", "否定的な", "中立的な", "不確かな"],
  correctAnswer: "自信のある"
  },
  {
  id: 1735,
  question: "remote",
  choices: ["遠い", "近い", "直接的な", "間接的な"],
  correctAnswer: "遠い"
  },
  {
  id: 1736,
  question: "collect",
  choices: ["集める", "分散させる", "廃棄する", "忘れる"],
  correctAnswer: "集める"
  },
  {
  id: 1737,
  question: "equivalent",
  choices: ["等しい", "異なる", "上位の", "下位の"],
  correctAnswer: "等しい"
  },
  {
  id: 1738,
  question: "bear",
  choices: ["我慢する", "投げる", "逃げる", "攻撃する"],
  correctAnswer: "我慢する"
  },
  {
  id: 1739,
  question: "empire",
  choices: ["帝国", "共和国", "王国", "公国"],
  correctAnswer: "帝国"
  },
  {
  id: 1740,
  question: "navy",
  choices: ["海軍", "空軍", "陸軍", "海兵隊"],
  correctAnswer: "海軍"
},

  {
  id: 1741,
  question: "significance",
  choices: ["重要性", "無関心", "平凡", "軽視"],
  correctAnswer: "重要性"
  },
  {
  id: 1742,
  question: "practical",
  choices: ["実用的な", "理論的な", "非実用的な", "抽象的な"],
  correctAnswer: "実用的な"
  },
  {
  id: 1743,
  question: "guess",
  choices: ["推測する", "確認する", "無視する", "同意する"],
  correctAnswer: "推測する"
  },
  {
  id: 1744,
  question: "agriculture",
  choices: ["農業", "工業", "商業", "鉱業"],
  correctAnswer: "農業"
  },
  {
  id: 1745,
  question: "leap",
  choices: ["跳ぶ", "歩く", "走る", "這う"],
  correctAnswer: "跳ぶ"
  },
  {
  id: 1746,
  question: "empty",
  choices: ["何も入っていない", "満タンの", "半分の", "ほぼ満たされた"],
  correctAnswer: "何も入っていない"
  },
  {
  id: 1747,
  question: "insight",
  choices: ["洞察", "無知", "誤解", "不明瞭"],
  correctAnswer: "洞察"
  },
  {
  id: 1748,
  question: "verbal",
  choices: ["言葉の", "筆記の", "視覚の", "非言語的な"],
  correctAnswer: "言葉の"
  },
  {
  id: 1749,
  question: "unit",
  choices: ["単位", "集団", "分割", "総体"],
  correctAnswer: "単位"
  },
  {
  id: 1750,
  question: "evil",
  choices: ["邪悪な", "善良な", "無害な", "中立的な"],
  correctAnswer: "邪悪な"
},

  {
  id: 1751,
  question: "newly",
  choices: ["新たに", "古く", "頻繁に", "稀に"],
  correctAnswer: "新たに"
  },
  {
  id: 1752,
  question: "automobile",
  choices: ["自動車", "自転車", "飛行機", "船"],
  correctAnswer: "自動車"
  },
  {
  id: 1753,
  question: "university",
  choices: ["大学", "高校", "専門学校", "中学校"],
  correctAnswer: "大学"
  },
  {
  id: 1754,
  question: "publication",
  choices: ["出版物", "非公開", "口頭発表", "秘密文書"],
  correctAnswer: "出版物"
  },
  {
  id: 1755,
  question: "past",
  choices: ["過去の", "現在の", "未来の", "永続的な"],
  correctAnswer: "過去の"
  },
  {
  id: 1756,
  question: "contrast",
  choices: ["対照", "一致", "融合", "類似"],
  correctAnswer: "対照"
  },
  {
  id: 1757,
  question: "immigrant",
  choices: ["移民", "観光客", "留学生", "難民"],
  correctAnswer: "移民"
  },
  {
  id: 1758,
  question: "lack",
  choices: ["不足", "過剰", "充分", "豊富"],
  correctAnswer: "不足"
  },
  {
  id: 1759,
  question: "brief",
  choices: ["短い", "長い", "無限", "一定"],
  correctAnswer: "短い"
  },
  {
  id: 1760,
  question: "cop",
  choices: ["警官", "弁護士", "医者", "教師"],
  correctAnswer: "警官"
},

  {
  id: 1761,
  question: "eager",
  choices: ["強く望んでいる", "恐れている", "無関心な", "悲しんでいる"],
  correctAnswer: "強く望んでいる"
  },
  {
  id: 1762,
  question: "crown",
  choices: ["王冠", "剣", "盾", "旗"],
  correctAnswer: "王冠"
  },
  {
  id: 1763,
  question: "observer",
  choices: ["観察者", "参加者", "主催者", "批評家"],
  correctAnswer: "観察者"
  },
  {
  id: 1764,
  question: "nod",
  choices: ["うなずく", "拒否する", "叫ぶ", "泣く"],
  correctAnswer: "うなずく"
  },
  {
  id: 1765,
  question: "investment",
  choices: ["投資", "貯蓄", "損失", "借金"],
  correctAnswer: "投資"
  },
  {
  id: 1766,
  question: "scientific",
  choices: ["科学の", "芸術の", "宗教の", "経済の"],
  correctAnswer: "科学の"
  },
  {
  id: 1767,
  question: "constitute",
  choices: ["構成する", "破壊する", "無視する", "翻訳する"],
  correctAnswer: "構成する"
  },
  {
  id: 1768,
  question: "moral",
  choices: ["道徳の", "物理的な", "心理的な", "金銭的な"],
  correctAnswer: "道徳の"
  },
  {
  id: 1769,
  question: "voter",
  choices: ["投票者", "候補者", "観察者", "裁判官"],
  correctAnswer: "投票者"
  },
  {
  id: 1770,
  question: "remarkable",
  choices: ["目立った", "普通の", "隠された", "忘れられた"],
  correctAnswer: "目立った"
},

  {
  id: 1771,
  question: "mere",
  choices: ["単なる", "複雑な", "永久の", "多様な"],
  correctAnswer: "単なる"
  },
  {
  id: 1772,
  question: "belong",
  choices: ["に属する", "破棄する", "借りる", "販売する"],
  correctAnswer: "に属する"
  },
  {
  id: 1773,
  question: "pursue",
  choices: ["追い求める", "放棄する", "隠す", "否定する"],
  correctAnswer: "追い求める"
  },
  {
  id: 1774,
  question: "totally",
  choices: ["完全に", "部分的に", "間違って", "稀に"],
  correctAnswer: "完全に"
  },
  {
  id: 1775,
  question: "patient",
  choices: ["我慢強い", "不安定な", "攻撃的な", "急速な"],
  correctAnswer: "我慢強い"
  },
  {
  id: 1776,
  question: "match",
  choices: ["試合", "協力", "対立", "合唱"],
  correctAnswer: "試合"
  },
  {
  id: 1777,
  question: "weather",
  choices: ["天候", "景気", "環境", "政治"],
  correctAnswer: "天候"
  },
  {
  id: 1778,
  question: "survival",
  choices: ["生存", "敗北", "成長", "発見"],
  correctAnswer: "生存"
  },
  {
  id: 1779,
  question: "fellow",
  choices: ["仲間", "敵", "指導者", "訪問者"],
  correctAnswer: "仲間"
  },
  {
  id: 1780,
  question: "towards",
  choices: ["の方へ", "から離れて", "内部に", "周辺に"],
  correctAnswer: "の方へ"
},

  {
  id: 1781,
  question: "aircraft",
  choices: ["航空機", "自動車", "船舶", "列車"],
  correctAnswer: "航空機"
  },
  {
  id: 1782,
  question: "legislation",
  choices: ["立法", "解釈", "適用", "廃止"],
  correctAnswer: "立法"
  },
  {
  id: 1783,
  question: "wherever",
  choices: ["どこでも", "いつでも", "どうしても", "なぜなら"],
  correctAnswer: "どこでも"
  },
  {
  id: 1784,
  question: "tax",
  choices: ["税金", "補助金", "手数料", "罰金"],
  correctAnswer: "税金"
  },
  {
  id: 1785,
  question: "nuclear",
  choices: ["核の", "太陽の", "風力の", "化石燃料の"],
  correctAnswer: "核の"
  },
  {
  id: 1786,
  question: "internal",
  choices: ["内部の", "外部の", "国際的な", "局所的な"],
  correctAnswer: "内部の"
  },
  {
  id: 1787,
  question: "enterprise",
  choices: ["会社", "非営利組織", "政府機関", "学校"],
  correctAnswer: "会社"
  },
  {
  id: 1788,
  question: "initial",
  choices: ["当初の", "最終の", "中間の", "遅延の"],
  correctAnswer: "当初の"
  },
  {
  id: 1789,
  question: "division",
  choices: ["分割", "統合", "交換", "維持"],
  correctAnswer: "分割"
  },
  {
  id: 1790,
  question: "parallel",
  choices: ["平行の", "直交の", "垂直の", "曲線の"],
  correctAnswer: "平行の"
},

  {
  id: 1791,
  question: "preference",
  choices: ["好み", "嫌悪", "無関心", "恐怖"],
  correctAnswer: "好み"
  },
  {
  id: 1792,
  question: "consideration",
  choices: ["考慮", "無視", "強制", "宣言"],
  correctAnswer: "考慮"
  },
  {
  id: 1793,
  question: "expectation",
  choices: ["期待", "絶望", "不安", "確信"],
  correctAnswer: "期待"
  },
  {
  id: 1794,
  question: "literally",
  choices: ["文字通りに", "比喩的に", "誤って", "部分的に"],
  correctAnswer: "文字通りに"
  },
  {
  id: 1795,
  question: "grave",
  choices: ["墓", "病院", "学校", "図書館"],
  correctAnswer: "墓"
  },
  {
  id: 1796,
  question: "laughter",
  choices: ["笑い", "涙", "怒り", "沈黙"],
  correctAnswer: "笑い"
  },
  {
  id: 1797,
  question: "found",
  choices: ["設立する", "廃止する", "回避する", "評価する"],
  correctAnswer: "設立する"
  },
  {
  id: 1798,
  question: "terror",
  choices: ["恐怖", "喜び", "同情", "興奮"],
  correctAnswer: "恐怖"
  },
  {
  id: 1799,
  question: "suitable",
  choices: ["適した", "不適切な", "平凡な", "突飛な"],
  correctAnswer: "適した"
  },
  {
  id: 1800,
  question: "reference",
  choices: ["参照", "無視", "反論", "同意"],
  correctAnswer: "参照"
},

  {
  id: 1801,
  question: "fabric",
  choices: ["織物", "金属", "プラスチック", "ガラス"],
  correctAnswer: "織物"
  },
  {
  id: 1802,
  question: "length",
  choices: ["長さ", "幅", "高さ", "深さ"],
  correctAnswer: "長さ"
  },
  {
  id: 1803,
  question: "deny",
  choices: ["否定する", "承認する", "無視する", "推奨する"],
  correctAnswer: "否定する"
  },
  {
  id: 1804,
  question: "satellite",
  choices: ["衛星", "星", "惑星", "彗星"],
  correctAnswer: "衛星"
  },
  {
  id: 1805,
  question: "steadily",
  choices: ["着実に", "不規則に", "急激に", "偶然に"],
  correctAnswer: "着実に"
  },
  {
  id: 1806,
  question: "fundamental",
  choices: ["基本的な", "複雑な", "余分な", "一次的な"],
  correctAnswer: "基本的な"
  },
  {
  id: 1807,
  question: "strategy",
  choices: ["戦略", "運命", "偶然", "失敗"],
  correctAnswer: "戦略"
  },
  {
  id: 1808,
  question: "virtually",
  choices: ["実質的に", "物理的に", "直接に", "間接的に"],
  correctAnswer: "実質的に"
  },
  {
  id: 1809,
  question: "partly",
  choices: ["部分的に", "全体的に", "一致して", "矛盾して"],
  correctAnswer: "部分的に"
  },
  {
  id: 1810,
  question: "profession",
  choices: ["職業", "趣味", "理念", "信条"],
  correctAnswer: "職業"
},

  {
  id: 1811,
  question: "undergo",
  choices: ["経験する", "避ける", "破壊する", "修理する"],
  correctAnswer: "経験する"
  },
  {
  id: 1812,
  question: "congress",
  choices: ["会議", "討論", "休憩", "演習"],
  correctAnswer: "会議"
  },
  {
  id: 1813,
  question: "given",
  choices: ["与えられた", "取り除かれた", "拒否された", "評価された"],
  correctAnswer: "与えられた"
  },
  {
  id: 1814,
  question: "traffic",
  choices: ["交通", "通信", "貿易", "運動"],
  correctAnswer: "交通"
  },
  {
  id: 1815,
  question: "mainly",
  choices: ["主に", "たまに", "時々", "全く"],
  correctAnswer: "主に"
  },
  {
  id: 1816,
  question: "cave",
  choices: ["ほら穴", "山", "川", "森"],
  correctAnswer: "ほら穴"
  },
  {
  id: 1817,
  question: "fancy",
  choices: ["空想", "現実", "回想", "計画"],
  correctAnswer: "空想"
  },
  {
  id: 1818,
  question: "wisdom",
  choices: ["知恵", "愚かさ", "勇気", "強さ"],
  correctAnswer: "知恵"
  },
  {
  id: 1819,
  question: "blink",
  choices: ["瞬きをする", "見つめる", "閉じる", "見逃す"],
  correctAnswer: "瞬きをする"
  },
  {
  id: 1820,
  question: "scholar",
  choices: ["学者", "学生", "教師", "研究員"],
  correctAnswer: "学者"
},

  {
  id: 1821,
  question: "rid",
  choices: ["を取り除く", "追加する", "隠す", "保存する"],
  correctAnswer: "を取り除く"
  },
  {
  id: 1822,
  question: "privilege",
  choices: ["特権", "義務", "責任", "罰"],
  correctAnswer: "特権"
  },
  {
  id: 1823,
  question: "method",
  choices: ["方法", "結果", "課題", "問題"],
  correctAnswer: "方法"
  },
  {
  id: 1824,
  question: "establishment",
  choices: ["設立", "解散", "保持", "拡大"],
  correctAnswer: "設立"
  },
  {
  id: 1825,
  question: "shrug",
  choices: ["肩をすくめる", "握手する", "頷く", "笑う"],
  correctAnswer: "肩をすくめる"
  },
  {
  id: 1826,
  question: "aloud",
  choices: ["声に出して", "静かに", "心の中で", "ぼんやりと"],
  correctAnswer: "声に出して"
  },
  {
  id: 1827,
  question: "continue",
  choices: ["をし続ける", "停止する", "始める", "考える"],
  correctAnswer: "をし続ける"
  },
  {
  id: 1828,
  question: "master",
  choices: ["主人", "従僕", "訪問者", "見習い"],
  correctAnswer: "主人"
  },
  {
  id: 1829,
  question: "rating",
  choices: ["評価", "減点", "無視", "推薦"],
  correctAnswer: "評価"
  },
  {
  id: 1830,
  question: "extra",
  choices: ["余分の", "基本の", "少ない", "特別な"],
  correctAnswer: "余分の"
},

  {
  id: 1831,
  question: "flee",
  choices: ["逃げる", "追う", "立ち向かう", "隠れる"],
  correctAnswer: "逃げる"
  },
  {
  id: 1832,
  question: "administration",
  choices: ["機関", "分析", "設計", "計画"],
  correctAnswer: "機関"
  },
  {
  id: 1833,
  question: "die",
  choices: ["死ぬ", "生きる", "発芽する", "回復する"],
  correctAnswer: "死ぬ"
  },
  {
  id: 1834,
  question: "throughout",
  choices: ["至るところに", "部分的に", "時折", "一度も"],
  correctAnswer: "至るところに"
  },
  {
  id: 1835,
  question: "shit",
  choices: ["大便", "小便", "嘔吐", "息をする"],
  correctAnswer: "大便"
  },
  {
  id: 1836,
  question: "tradition",
  choices: ["伝統", "革新", "変化", "進化"],
  correctAnswer: "伝統"
  },
  {
  id: 1837,
  question: "typical",
  choices: ["典型的な", "異例の", "珍しい", "普通の"],
  correctAnswer: "典型的な"
  },
  {
  id: 1838,
  question: "weigh",
  choices: ["重さがある", "軽い", "計算する", "考える"],
  correctAnswer: "重さがある"
  },
  {
  id: 1839,
  question: "unlikely",
  choices: ["起こりそうにない", "確実な", "可能性が高い", "頻繁に起こる"],
  correctAnswer: "起こりそうにない"
  },
  {
  id: 1840,
  question: "weight",
  choices: ["重さ", "高さ", "長さ", "幅"],
  correctAnswer: "重さ"
},

  {
  id: 1841,
  question: "normally",
  choices: ["通常は", "例外的に", "急に", "たまに"],
  correctAnswer: "通常は"
  },
  {
  id: 1842,
  question: "retain",
  choices: ["保持する", "放棄する", "失う", "破壊する"],
  correctAnswer: "保持する"
  },
  {
  id: 1843,
  question: "overwhelming",
  choices: ["圧倒的な", "無力な", "弱い", "劣る"],
  correctAnswer: "圧倒的な"
  },
  {
  id: 1844,
  question: "promotion",
  choices: ["昇進", "降格", "解雇", "採用"],
  correctAnswer: "昇進"
  },
  {
  id: 1845,
  question: "massive",
  choices: ["巨大な", "小さい", "細かい", "軽い"],
  correctAnswer: "巨大な"
  },
  {
  id: 1846,
  question: "desirable",
  choices: ["望ましい", "不快な", "無関心な", "避けるべき"],
  correctAnswer: "望ましい"
  },
  {
  id: 1847,
  question: "stare",
  choices: ["じっと見つめる", "避ける", "閉じる", "点滅する"],
  correctAnswer: "じっと見つめる"
  },
  {
  id: 1848,
  question: "application",
  choices: ["適用", "除外", "廃止", "無視"],
  correctAnswer: "適用"
  },
  {
  id: 1849,
  question: "grasp",
  choices: ["つかむ", "放す", "失う", "避ける"],
  correctAnswer: "つかむ"
  },
  {
  id: 1850,
  question: "fat",
  choices: ["太った", "痩せた", "平均的な", "筋肉質の"],
  correctAnswer: "太った"
},
  {
  id: 1851,
  question: "gene",
  choices: ["遺伝子", "細胞", "分子", "タンパク質"],
  correctAnswer: "遺伝子"
  },
  {
  id: 1852,
  question: "contract",
  choices: ["契約", "解除", "破棄", "無効"],
  correctAnswer: "契約"
  },
  {
  id: 1853,
  question: "discuss",
  choices: ["について議論する", "無視する", "承認する", "拒否する"],
  correctAnswer: "について議論する"
  },
  {
  id: 1854,
  question: "court",
  choices: ["裁判所", "学校", "病院", "市役所"],
  correctAnswer: "裁判所"
  },
  {
  id: 1855,
  question: "analysis",
  choices: ["分析", "合成", "記述", "評価"],
  correctAnswer: "分析"
  },
  {
  id: 1856,
  question: "generate",
  choices: ["発生させる", "消滅させる", "回復させる", "変換する"],
  correctAnswer: "発生させる"
  },
  {
  id: 1857,
  question: "regardless",
  choices: ["にも関わらず", "注意深く", "熱心に", "意図的に"],
  correctAnswer: "にも関わらず"
  },
  {
  id: 1858,
  question: "fire",
  choices: ["首にする", "雇う", "昇進させる", "褒める"],
  correctAnswer: "首にする"
  },
  {
  id: 1859,
  question: "entitle",
  choices: ["と題する", "否定する", "破壊する", "隠す"],
  correctAnswer: "と題する"
  },
  {
  id: 1860,
  question: "bury",
  choices: ["埋める", "掘り出す", "売る", "購入する"],
  correctAnswer: "埋める"
},
  {
  id: 1861,
  question: "pit",
  choices: ["くぼみ", "山", "穴", "丘"],
  correctAnswer: "くぼみ"
  },
  {
  id: 1862,
  question: "critical",
  choices: ["極めて重要な", "無関心な", "平凡な", "余剰の"],
  correctAnswer: "極めて重要な"
  },
  {
  id: 1863,
  question: "crisis",
  choices: ["危機", "安定", "成功", "発展"],
  correctAnswer: "危機"
  },
  {
  id: 1864,
  question: "flood",
  choices: ["洪水", "干ばつ", "地震", "嵐"],
  correctAnswer: "洪水"
  },
  {
  id: 1865,
  question: "wildlife",
  choices: ["野生動物", "家畜", "植物", "海洋生物"],
  correctAnswer: "野生動物"
  },
  {
  id: 1866,
  question: "wrong",
  choices: ["間違い", "正しい", "不確かな", "確信している"],
  correctAnswer: "間違い"
  },
  {
  id: 1867,
  question: "wear",
  choices: ["身につけている", "外す", "売る", "修理する"],
  correctAnswer: "身につけている"
  },
  {
  id: 1868,
  question: "earn",
  choices: ["稼ぐ", "使う", "貸す", "貯める"],
  correctAnswer: "稼ぐ"
  },
  {
  id: 1869,
  question: "import",
  choices: ["輸入する", "輸出する", "生産する", "消費する"],
  correctAnswer: "輸入する"
  },
  {
  id: 1870,
  question: "retirement",
  choices: ["退職", "昇進", "就職", "転職"],
  correctAnswer: "退職"
},
  {
  id: 1871,
  question: "stream",
  choices: ["流れ", "湖", "池", "海"],
  correctAnswer: "流れ"
  },
  {
  id: 1872,
  question: "species",
  choices: ["種", "個体", "群れ", "集団"],
  correctAnswer: "種"
  },
  {
  id: 1873,
  question: "recovery",
  choices: ["回復", "衰退", "停滞", "損失"],
  correctAnswer: "回復"
  },
  {
  id: 1874,
  question: "coalition",
  choices: ["連立", "分裂", "単独", "対立"],
  correctAnswer: "連立"
  },
  {
  id: 1875,
  question: "acquaintance",
  choices: ["知人", "敵", "指導者", "部下"],
  correctAnswer: "知人"
  },
  {
  id: 1876,
  question: "peer",
  choices: ["同僚", "上司", "後輩", "客"],
  correctAnswer: "同僚"
  },
  {
  id: 1877,
  question: "alter",
  choices: ["を変える", "を維持する", "を減らす", "を増やす"],
  correctAnswer: "を変える"
  },
  {
  id: 1878,
  question: "absolute",
  choices: ["絶対的な", "相対的な", "一時的な", "偶然の"],
  correctAnswer: "絶対的な"
  },
  {
  id: 1879,
  question: "secretary",
  choices: ["秘書", "会長", "管理者", "監督"],
  correctAnswer: "秘書"
  },
  {
  id: 1880,
  question: "deserve",
  choices: ["値する", "拒否する", "避ける", "忘れる"],
  correctAnswer: "値する"
},

  {
  id: 1881,
  question: "contribute",
  choices: ["に寄付する", "借りる", "購入する", "売る"],
  correctAnswer: "に寄付する"
  },
  {
  id: 1882,
  question: "implication",
  choices: ["含み", "直接的な表現", "詳細説明", "明確化"],
  correctAnswer: "含み"
  },
  {
  id: 1883,
  question: "calm",
  choices: ["穏やかな", "荒れ模様の", "騒々しい", "不安定な"],
  correctAnswer: "穏やかな"
  },
  {
  id: 1884,
  question: "constantly",
  choices: ["常に", "時々", "めったに", "一度も"],
  correctAnswer: "常に"
  },
  {
  id: 1885,
  question: "famous",
  choices: ["有名な", "無名の", "忘れられた", "新進の"],
  correctAnswer: "有名な"
  },
  {
  id: 1886,
  question: "precisely",
  choices: ["正確に", "おおざっぱに", "間違って", "適当に"],
  correctAnswer: "正確に"
  },
  {
  id: 1887,
  question: "parking",
  choices: ["駐車場", "遊園地", "公園", "庭園"],
  correctAnswer: "駐車場"
  },
  {
  id: 1888,
  question: "ad",
  choices: ["広告", "記事", "報告", "批評"],
  correctAnswer: "広告"
  },
  {
  id: 1889,
  question: "commander",
  choices: ["司令官", "兵士", "平民", "顧問"],
  correctAnswer: "司令官"
  },
  {
  id: 1890,
  question: "rise",
  choices: ["上がる", "下がる", "停止する", "回転する"],
  correctAnswer: "上がる"
},

  {
  id: 1891,
  question: "gain",
  choices: ["得る", "放棄する", "損失を被る", "無視する"],
  correctAnswer: "得る"
  },
  {
  id: 1892,
  question: "proud",
  choices: ["自慢に思って", "恥じて", "悲しんで", "無関心で"],
  correctAnswer: "自慢に思って"
  },
  {
  id: 1893,
  question: "lose",
  choices: ["失う", "獲得する", "保存する", "発見する"],
  correctAnswer: "失う"
  },
  {
  id: 1894,
  question: "editor",
  choices: ["編集者", "作家", "記者", "出版者"],
  correctAnswer: "編集者"
  },
  {
  id: 1895,
  question: "killer",
  choices: ["殺人者", "警官", "弁護士", "被害者"],
  correctAnswer: "殺人者"
  },
  {
  id: 1896,
  question: "material",
  choices: ["材料", "製品", "廃棄物", "データ"],
  correctAnswer: "材料"
  },
  {
  id: 1897,
  question: "breast",
  choices: ["胸部", "腕", "腰", "足"],
  correctAnswer: "胸部"
  },
  {
  id: 1898,
  question: "appetite",
  choices: ["食欲", "睡眠欲", "好奇心", "怒り"],
  correctAnswer: "食欲"
  },
  {
  id: 1899,
  question: "flavor",
  choices: ["風味", "色", "形", "質感"],
  correctAnswer: "風味"
  },
  {
  id: 1900,
  question: "aim",
  choices: ["ねらいをつける", "回避する", "調査する", "開発する"],
  correctAnswer: "ねらいをつける"
},

  {
  id: 1901,
  question: "preparation",
  choices: ["準備", "実行", "分析", "回復"],
  correctAnswer: "準備"
  },
  {
  id: 1902,
  question: "investigation",
  choices: ["調査", "治療", "訓練", "製造"],
  correctAnswer: "調査"
  },
  {
  id: 1903,
  question: "storage",
  choices: ["保管", "販売", "購入", "輸送"],
  correctAnswer: "保管"
  },
  {
  id: 1904,
  question: "investor",
  choices: ["投資家", "研究者", "発明家", "教師"],
  correctAnswer: "投資家"
  },
  {
  id: 1905,
  question: "whole",
  choices: ["全部の", "一部の", "最新の", "最古の"],
  correctAnswer: "全部の"
  },
  {
  id: 1906,
  question: "regulation",
  choices: ["規制", "提案", "議論", "承認"],
  correctAnswer: "規制"
  },
  {
  id: 1907,
  question: "existing",
  choices: ["既存の", "新規の", "廃止された", "計画中の"],
  correctAnswer: "既存の"
  },
  {
  id: 1908,
  question: "fate",
  choices: ["運命", "幸運", "不幸", "選択"],
  correctAnswer: "運命"
  },
  {
  id: 1909,
  question: "accuse",
  choices: ["告発する", "擁護する", "無視する", "承認する"],
  correctAnswer: "告発する"
  },
  {
  id: 1910,
  question: "object",
  choices: ["物体", "目的", "反対", "行動"],
  correctAnswer: "物体"
},

  {
  id: 1911,
  question: "cope",
  choices: ["対処する", "逃げる", "交渉する", "合意する"],
  correctAnswer: "対処する"
  },
  {
  id: 1912,
  question: "racial",
  choices: ["人種の", "宗教の", "文化の", "経済の"],
  correctAnswer: "人種の"
  },
  {
  id: 1913,
  question: "judge",
  choices: ["を判断する", "を信じる", "を疑う", "を忘れる"],
  correctAnswer: "を判断する"
  },
  {
  id: 1914,
  question: "disagree",
  choices: ["反対する", "同意する", "無関心である", "支持する"],
  correctAnswer: "反対する"
  },
  {
  id: 1915,
  question: "release",
  choices: ["解き放つ", "拘束する", "隠す", "破壊する"],
  correctAnswer: "解き放つ"
  },
  {
  id: 1916,
  question: "literary",
  choices: ["文学の", "科学の", "技術の", "歴史の"],
  correctAnswer: "文学の"
  },
  {
  id: 1917,
  question: "maybe",
  choices: ["たぶん", "絶対に", "決して", "まれに"],
  correctAnswer: "たぶん"
  },
  {
  id: 1918,
  question: "alliance",
  choices: ["同盟", "競争", "対立", "孤立"],
  correctAnswer: "同盟"
  },
  {
  id: 1919,
  question: "thought",
  choices: ["考えること", "忘れること", "覚えること", "無視すること"],
  correctAnswer: "考えること"
  },
  {
  id: 1920,
  question: "comedy",
  choices: ["喜劇", "悲劇", "ドキュメンタリー", "ミュージカル"],
  correctAnswer: "喜劇"
},

  {
  id: 1921,
  question: "reply",
  choices: ["返答する", "無視する", "拒絶する", "要求する"],
  correctAnswer: "返答する"
  },
  {
  id: 1922,
  question: "gay",
  choices: ["同性愛の", "異性愛の", "無性愛の", "二性愛の"],
  correctAnswer: "同性愛の"
  },
  {
  id: 1923,
  question: "definite",
  choices: ["明確な", "曖昧な", "不確かな", "変更可能な"],
  correctAnswer: "明確な"
  },
  {
  id: 1924,
  question: "attempt",
  choices: ["試み", "成功", "放棄", "継続"],
  correctAnswer: "試み"
  },
  {
  id: 1925,
  question: "commission",
  choices: ["手数料", "利益", "損失", "補償"],
  correctAnswer: "手数料"
  },
  {
  id: 1926,
  question: "except",
  choices: ["を除いて", "含めて", "対して", "関係なく"],
  correctAnswer: "を除いて"
  },
  {
  id: 1927,
  question: "height",
  choices: ["高さ", "幅", "長さ", "深さ"],
  correctAnswer: "高さ"
  },
  {
  id: 1928,
  question: "favorite",
  choices: ["特に好きな", "嫌いな", "普通の", "珍しい"],
  correctAnswer: "特に好きな"
  },
  {
  id: 1929,
  question: "harmful",
  choices: ["有害な", "無害な", "有益な", "不明瞭な"],
  correctAnswer: "有害な"
  },
  {
  id: 1930,
  question: "terrible",
  choices: ["ひどい", "素晴らしい", "普通の", "興味深い"],
  correctAnswer: "ひどい"
},

  {
  id: 1931,
  question: "dull",
  choices: ["面白みのない", "鮮やかな", "活発な", "明るい"],
  correctAnswer: "面白みのない"
  },
  {
  id: 1932,
  question: "context",
  choices: ["文脈", "直接", "個別", "結論"],
  correctAnswer: "文脈"
  },
  {
  id: 1933,
  question: "fold",
  choices: ["折りたたむ", "広げる", "切る", "固定する"],
  correctAnswer: "折りたたむ"
  },
  {
  id: 1934,
  question: "suggestion",
  choices: ["提案", "拒絶", "質問", "命令"],
  correctAnswer: "提案"
  },
  {
  id: 1935,
  question: "steam",
  choices: ["蒸気", "液体", "固体", "気体"],
  correctAnswer: "蒸気"
  },
  {
  id: 1936,
  question: "extensive",
  choices: ["広範な", "狭い", "浅い", "限定的な"],
  correctAnswer: "広範な"
  },
  {
  id: 1937,
  question: "mayor",
  choices: ["市長", "大統領", "議員", "首相"],
  correctAnswer: "市長"
  },
  {
  id: 1938,
  question: "funding",
  choices: ["資金調達", "消費", "節約", "投資"],
  correctAnswer: "資金調達"
  },
  {
  id: 1939,
  question: "operator",
  choices: ["操作者", "監視者", "理論家", "研究者"],
  correctAnswer: "操作者"
  },
  {
  id: 1940,
  question: "universal",
  choices: ["普遍的な", "特定の", "一時的な", "個別の"],
  correctAnswer: "普遍的な"
},

  {
  id: 1941,
  question: "exposure",
  choices: ["暴露", "保護", "隠蔽", "誤解"],
  correctAnswer: "暴露"
  },
  {
  id: 1942,
  question: "pose",
  choices: ["姿勢", "運動", "逃避", "解決"],
  correctAnswer: "姿勢"
  },
  {
  id: 1943,
  question: "headline",
  choices: ["見出し", "注釈", "本文", "引用"],
  correctAnswer: "見出し"
  },
  {
  id: 1944,
  question: "bang",
  choices: ["ドンドン叩く", "静かに閉じる", "滑らかに開く", "ゆっくり歩く"],
  correctAnswer: "ドンドン叩く"
  },
  {
  id: 1945,
  question: "likely",
  choices: ["起こりそうな", "起こり得ない", "不可能な", "避けられる"],
  correctAnswer: "起こりそうな"
  },
  {
  id: 1946,
  question: "necessity",
  choices: ["必要性", "余裕", "豊富", "選択肢"],
  correctAnswer: "必要性"
  },
  {
  id: 1947,
  question: "financial",
  choices: ["財政の", "技術的な", "社会的な", "文化的な"],
  correctAnswer: "財政の"
  },
  {
  id: 1948,
  question: "resistance",
  choices: ["抵抗", "支援", "同意", "協力"],
  correctAnswer: "抵抗"
  },
  {
  id: 1949,
  question: "grammar",
  choices: ["文法", "語彙", "発音", "会話"],
  correctAnswer: "文法"
  },
  {
  id: 1950,
  question: "capital",
  choices: ["資本", "損失", "費用", "収益"],
  correctAnswer: "資本"
},

  {
  id: 1951,
  question: "intend",
  choices: ["意図する", "避ける", "忘れる", "拒否する"],
  correctAnswer: "意図する"
  },
  {
  id: 1952,
  question: "alike",
  choices: ["よく似た", "異なる", "独立した", "相反する"],
  correctAnswer: "よく似た"
  },
  {
  id: 1953,
  question: "peak",
  choices: ["頂上", "底", "中間", "出発点"],
  correctAnswer: "頂上"
  },
  {
  id: 1954,
  question: "educate",
  choices: ["教育する", "無視する", "制限する", "促進する"],
  correctAnswer: "教育する"
  },
  {
  id: 1955,
  question: "closely",
  choices: ["綿密に", "遠くに", "ゆるやかに", "間接的に"],
  correctAnswer: "綿密に"
  },
  {
  id: 1956,
  question: "exactly",
  choices: ["正確に", "大まかに", "時々", "まったく"],
  correctAnswer: "正確に"
  },
  {
  id: 1957,
  question: "moment",
  choices: ["瞬間", "時間", "期間", "遅延"],
  correctAnswer: "瞬間"
  },
  {
  id: 1958,
  question: "extend",
  choices: ["延びる", "縮む", "停止する", "回避する"],
  correctAnswer: "延びる"
  },
  {
  id: 1959,
  question: "employee",
  choices: ["従業員", "雇用者", "顧客", "パートナー"],
  correctAnswer: "従業員"
  },
  {
  id: 1960,
  question: "remaining",
  choices: ["残りの", "新しい", "最初の", "最終の"],
  correctAnswer: "残りの"
},

  {
  id: 1961,
  question: "negative",
  choices: ["否定の", "肯定の", "中立の", "無関心の"],
  correctAnswer: "否定の"
  },
  {
  id: 1962,
  question: "burst",
  choices: ["破裂する", "凍る", "融解する", "膨張する"],
  correctAnswer: "破裂する"
  },
  {
  id: 1963,
  question: "portrait",
  choices: ["肖像画", "風景画", "静物画", "抽象画"],
  correctAnswer: "肖像画"
  },
  {
  id: 1964,
  question: "possibility",
  choices: ["可能性", "不可能性", "必然性", "偶然性"],
  correctAnswer: "可能性"
  },
  {
  id: 1965,
  question: "absence",
  choices: ["不在", "存在", "参加", "出席"],
  correctAnswer: "不在"
  },
  {
  id: 1966,
  question: "primary",
  choices: ["最初の", "二次的な", "最終の", "一時的な"],
  correctAnswer: "最初の"
  },
  {
  id: 1967,
  question: "inferior",
  choices: ["劣った", "優れた", "平等な", "競争的な"],
  correctAnswer: "劣った"
  },
  {
  id: 1968,
  question: "interpretation",
  choices: ["解釈", "無視", "信念", "確証"],
  correctAnswer: "解釈"
  },
  {
  id: 1969,
  question: "evident",
  choices: ["明らかな", "隠された", "疑わしい", "曖昧な"],
  correctAnswer: "明らかな"
  },
  {
  id: 1970,
  question: "tribe",
  choices: ["部族", "国家", "組織", "集団"],
  correctAnswer: "部族"
},

  {
  id: 1971,
  question: "maintenance",
  choices: ["持続", "中断", "開始", "終了"],
  correctAnswer: "持続"
  },
  {
  id: 1972,
  question: "passenger",
  choices: ["乗客", "運転手", "歩行者", "船長"],
  correctAnswer: "乗客"
  },
  {
  id: 1973,
  question: "profound",
  choices: ["深い", "浅い", "単純な", "複雑な"],
  correctAnswer: "深い"
  },
  {
  id: 1974,
  question: "significantly",
  choices: ["かなり", "わずかに", "全く", "時々"],
  correctAnswer: "かなり"
  },
  {
  id: 1975,
  question: "agree",
  choices: ["同意する", "反対する", "無視する", "疑問に思う"],
  correctAnswer: "同意する"
  },
  {
  id: 1976,
  question: "assure",
  choices: ["保証する", "拒否する", "遅延する", "取消す"],
  correctAnswer: "保証する"
  },
  {
  id: 1977,
  question: "dump",
  choices: ["投げ捨てる", "収集する", "保存する", "販売する"],
  correctAnswer: "投げ捨てる"
  },
  {
  id: 1978,
  question: "difference",
  choices: ["違い", "類似", "一致", "関連"],
  correctAnswer: "違い"
  },
  {
  id: 1979,
  question: "coal",
  choices: ["石炭", "石油", "天然ガス", "木材"],
  correctAnswer: "石炭"
  },
  {
  id: 1980,
  question: "drain",
  choices: ["排出させる", "蓄積する", "浄化する", "吸収する"],
  correctAnswer: "排出させる"
},

  {
  id: 1981,
  question: "acknowledge",
  choices: ["を認める", "否定する", "無視する", "隠す"],
  correctAnswer: "を認める"
  },
  {
  id: 1982,
  question: "suspect",
  choices: ["疑う", "信じる", "確認する", "承認する"],
  correctAnswer: "疑う"
  },
  {
  id: 1983,
  question: "gaze",
  choices: ["凝視する", "無視する", "閉じる", "点検する"],
  correctAnswer: "凝視する"
  },
  {
  id: 1984,
  question: "sure",
  choices: ["確信して", "不確か", "不安", "恐れて"],
  correctAnswer: "確信して"
  },
  {
  id: 1985,
  question: "steel",
  choices: ["鋼鉄", "アルミニウム", "銅", "プラスチック"],
  correctAnswer: "鋼鉄"
  },
  {
  id: 1986,
  question: "exclude",
  choices: ["除く", "含む", "歓迎する", "拡大する"],
  correctAnswer: "除く"
  },
  {
  id: 1987,
  question: "surgery",
  choices: ["手術", "診察", "治療", "診断"],
  correctAnswer: "手術"
  },
  {
  id: 1988,
  question: "add",
  choices: ["足し算する", "引き算する", "乗算する", "除算する"],
  correctAnswer: "足し算する"
  },
  {
  id: 1989,
  question: "load",
  choices: ["積む", "卸す", "販売する", "購入する"],
  correctAnswer: "積む"
  },
  {
  id: 1990,
  question: "inevitable",
  choices: ["避けられない", "可能な", "不確定な", "予測可能な"],
  correctAnswer: "避けられない"
},

  {
  id: 1991,
  question: "female",
  choices: ["雌の", "雄の", "中性の", "不明な"],
  correctAnswer: "雌の"
  },
  {
  id: 1992,
  question: "depending",
  choices: ["依存している", "独立している", "関係ない", "反対している"],
  correctAnswer: "依存している"
  },
  {
  id: 1993,
  question: "so-called",
  choices: ["いわゆる", "未知の", "特定の", "新しい"],
  correctAnswer: "いわゆる"
  },
  {
  id: 1994,
  question: "accept",
  choices: ["受け入れる", "拒否する", "無視する", "検討する"],
  correctAnswer: "受け入れる"
  },
  {
  id: 1995,
  question: "enthusiasm",
  choices: ["情熱", "無関心", "憂鬱", "冷淡"],
  correctAnswer: "情熱"
  },
  {
  id: 1996,
  question: "joint",
  choices: ["継目", "断面", "一部", "全体"],
  correctAnswer: "継目"
  },
  {
  id: 1997,
  question: "assessment",
  choices: ["評価", "無視", "取り消し", "開始"],
  correctAnswer: "評価"
  },
  {
  id: 1998,
  question: "evolve",
  choices: ["進化する", "退化する", "停滞する", "分解する"],
  correctAnswer: "進化する"
  },
  {
  id: 1999,
  question: "occupy",
  choices: ["占める", "放棄する", "減少する", "軽視する"],
  correctAnswer: "占める"
  },
  {
  id: 2000,
  question: "mention",
  choices: ["言及する", "隠す", "変更する", "強調する"],
  correctAnswer: "言及する"
  },
  {
    id: 2001,
    question: "account",
    choices: ["銀行口座", "操る", "大通り", "訴える"],
    correctAnswer: "銀行口座"
  },
  {
    id: 2002,
    question: "as a matter of fact",
    choices: ["実際のところ", "商品", "操る", "抜き取る"],
    correctAnswer: "実際のところ"
  },
  {
    id: 2003,
    question: "commodity",
    choices: ["訴える", "取り除く", "商品", "延期する"],
    correctAnswer: "商品"
  },
  {
    id: 2004,
    question: "grace",
    choices: ["操る", "歪める", "恵み", "実際のところ"],
    correctAnswer: "恵み"
  },
  {
    id: 2005,
    question: "distort",
    choices: ["歪める", "操る", "実際のところ", "除外する"],
    correctAnswer: "歪める"
  },
  {
    id: 2006,
    question: "Arctic",
    choices: ["北極地方", "訴える", "強迫観念", "延期する"],
    correctAnswer: "北極地方"
  },
  {
    id: 2007,
    question: "obsession",
    choices: ["強迫観念", "隠す", "変更する", "実際のところ"],
    correctAnswer: "強迫観念"
  },
  {
    id: 2008,
    question: "obey",
    choices: ["従う", "操る", "取り除く", "恵み"],
    correctAnswer: "従う"
  },
  {
    id: 2009,
    question: "rule out",
    choices: ["除外する", "変更する", "実際のところ", "従う"],
    correctAnswer: "除外する"
  },
  {
    id: 2010,
    question: "manipulate",
    choices: ["操る", "取り除く", "変更する", "恵み"],
    correctAnswer: "操る"
  },
  {
    id: 2011,
    question: "sue",
    choices: ["訴える", "商品", "延期する", "強迫観念"],
    correctAnswer: "訴える"
  },
  {
    id: 2012,
    question: "get rid of",
    choices: ["取り除く", "従う", "変更する", "銀行口座"],
    correctAnswer: "取り除く"
  },
  {
    id: 2013,
    question: "Buddhist",
    choices: ["仏教", "実際のところ", "従う", "強調する"],
    correctAnswer: "仏教"
  },
  {
    id: 2014,
    question: "as far as I know",
    choices: ["私の知る限り", "隠す", "延期する", "商品"],
    correctAnswer: "私の知る限り"
  },
  {
    id: 2015,
    question: "put off",
    choices: ["延期する", "操る", "恵み", "取り除く"],
    correctAnswer: "延期する"
  },
  {
    id: 2016,
    question: "extract",
    choices: ["抜き取る", "実際のところ", "訴える", "商品"],
    correctAnswer: "抜き取る"
  },
  {
    id: 2017,
    question: "as if",
    choices: ["まるで～かのように", "従う", "変更する", "銀行口座"],
    correctAnswer: "まるで～かのように"
  },
  {
    id: 2018,
    question: "indigenous",
    choices: ["原産の", "操る", "恵み", "訴える"],
    correctAnswer: "原産の"
  },
  {
    id: 2019,
    question: "slavery",
    choices: ["奴隷制度", "銀行口座", "変更する", "操る"],
    correctAnswer: "奴隷制度"
  },
  {
    id: 2020,
    question: "avenue",
    choices: ["大通り", "訴える", "実際のところ", "歪める"],
    correctAnswer: "大通り"
  },
  {
    id: 2021,
    question: "destination",
    choices: ["北極地方", "見渡す", "領地", "目的地，行き先"],
    correctAnswer: "目的地，行き先"
  },
  {
    id: 2022,
    question: "designate",
    choices: ["選定する", "結果として，結果～になる", "まるで～かのように", "抜き取る"],
    correctAnswer: "選定する"
  },
  {
    id: 2023,
    question: "domain",
    choices: ["まるで～かのように", "もはや～でない", "まともな", "領地"],
    correctAnswer: "領地"
  },
  {
    id: 2024,
    question: "result in",
    choices: ["除外する", "疲労", "結果として，結果～になる", "延期する"],
    correctAnswer: "結果として，結果～になる"
  },
  {
    id: 2025,
    question: "infrastructure",
    choices: ["商品", "強迫観念", "まるで～かのように", "基盤"],
    correctAnswer: "基盤"
  },
  {
    id: 2026,
    question: "provoke",
    choices: ["有罪とする", "挑発する", "仏教", "を申し込む"],
    correctAnswer: "挑発する"
  },
  {
    id: 2027,
    question: "sole",
    choices: ["を飼育する，繁殖する", "銀行口座", "単独の", "基盤"],
    correctAnswer: "単独の"
  },
  {
    id: 2028,
    question: "convict",
    choices: ["を申し込む", "単独の", "有罪とする", "厳格な"],
    correctAnswer: "有罪とする"
  },
  {
    id: 2029,
    question: "apply for",
    choices: ["先行する", "目的地，行き先", "を申し込む", "操る"],
    correctAnswer: "を申し込む"
  },
  {
    id: 2030,
    question: "fatigue",
    choices: ["北極地方", "見渡す", "疲労", "証拠"],
    correctAnswer: "疲労"
  },
  {
    id: 2031,
    question: "precede",
    choices: ["北極地方", "目的地，行き先", "先行する", "実際のところ"],
    correctAnswer: "先行する"
  },
  {
    id: 2032,
    question: "decent",
    choices: ["先行する", "単独の", "強迫観念", "まともな"],
    correctAnswer: "まともな"
  },
  {
    id: 2033,
    question: "utter",
    choices: ["完全な", "強迫観念", "選定する", "操る"],
    correctAnswer: "完全な"
  },
  {
    id: 2034,
    question: "look over",
    choices: ["銀行口座", "奴隷制度", "除外する", "見渡す"],
    correctAnswer: "見渡す"
  },
  {
    id: 2035,
    question: "stern",
    choices: ["有罪とする", "証拠", "仏教", "厳格な"],
    correctAnswer: "厳格な"
  },
  {
    id: 2036,
    question: "breed",
    choices: ["抜き取る", "従う", "恵み", "を飼育する，繁殖する"],
    correctAnswer: "を飼育する，繁殖する"
  },
  {
    id: 2037,
    question: "no longer",
    choices: ["を飼育する，繁殖する", "もはや～でない", "恵み", "大通り"],
    correctAnswer: "もはや～でない"
  },
  {
    id: 2038,
    question: "one by one",
    choices: ["1つずつ，一つ一つ", "原産の", "挑発する", "目的地，行き先"],
    correctAnswer: "1つずつ，一つ一つ"
  },
  {
    id: 2039,
    question: "forecast",
    choices: ["領地", "予測する", "北極地方", "挑発する"],
    correctAnswer: "予測する"
  },
  {
    id: 2040,
    question: "evidence",
    choices: ["北極地方", "強迫観念", "私の知る限り", "証拠"],
    correctAnswer: "証拠"
  },
  {
    id: 2041,
    question: "otherwise",
    choices: ["通路", "さもなければ", "操る", "寮，大部屋"],
    correctAnswer: "さもなければ"
  },
  {
    id: 2042,
    question: "require",
    choices: ["さもなければ", "厳格な", "実際のところ", "を必要とする，を要求する"],
    correctAnswer: "を必要とする，を要求する"
  },
  {
    id: 2043,
    question: "architect",
    choices: ["を飼育する，繁殖する", "が原因で", "挑発する", "建築家"],
    correctAnswer: "建築家"
  },
  {
    id: 2044,
    question: "lessen",
    choices: ["除外する", "操る", "先行する", "減らす"],
    correctAnswer: "減らす"
  },
  {
    id: 2045,
    question: "tumor",
    choices: ["減らす", "腫瘍", "強迫観念", "証拠"],
    correctAnswer: "腫瘍"
  },
  {
    id: 2046,
    question: "dormitory",
    choices: ["減らす", "結果として，結果～になる", "寮，大部屋", "まともな"],
    correctAnswer: "寮，大部屋"
  },
  {
    id: 2047,
    question: "suffer from",
    choices: ["腫瘍", "除外する", "で苦しむ，悩まされる", "さもなければ"],
    correctAnswer: "で苦しむ，悩まされる"
  },
  {
    id: 2048,
    question: "thrust",
    choices: ["先行する", "完全な", "突き上げる", "疲労"],
    correctAnswer: "突き上げる"
  },
  {
    id: 2049,
    question: "handout",
    choices: ["収容する", "配布物", "を飼育する，繁殖する", "1つずつ，一つ一つ"],
    correctAnswer: "配布物"
  },
  {
    id: 2050,
    question: "addicted",
    choices: ["疲労", "癖になった", "を申し込む", "基盤"],
    correctAnswer: "癖になった"
  },
  {
    id: 2051,
    question: "kindergarten",
    choices: ["予測する", "料金", "幼稚園", "有罪とする"],
    correctAnswer: "幼稚園"
  },
  {
    id: 2052,
    question: "reasonable",
    choices: ["北極地方", "訴える", "理性のある，分別のある", "完全な"],
    correctAnswer: "理性のある，分別のある"
  },
  {
    id: 2053,
    question: "phenomenon",
    choices: ["現象", "仏教", "予測する", "で苦しむ，悩まされる"],
    correctAnswer: "現象"
  },
  {
    id: 2054,
    question: "accommodate",
    choices: ["で苦しむ，悩まされる", "幼稚園", "収容する", "食料品"],
    correctAnswer: "収容する"
  },
  {
    id: 2055,
    question: "obscure",
    choices: ["除外する", "不明瞭な", "商品", "寮，大部屋"],
    correctAnswer: "不明瞭な"
  },
  {
    id: 2056,
    question: "aisle",
    choices: ["大通り", "通路", "理性のある，分別のある", "辞任する"],
    correctAnswer: "通路"
  },
  {
    id: 2057,
    question: "resign",
    choices: ["仏教", "もはや～でない", "辞任する", "取り除く"],
    correctAnswer: "辞任する"
  },
  {
    id: 2058,
    question: "due to",
    choices: ["操る", "が原因で", "もはや～でない", "先行する"],
    correctAnswer: "が原因で"
  },
  {
    id: 2059,
    question: "grocery",
    choices: ["疲労", "商品", "食料品", "建築家"],
    correctAnswer: "食料品"
  },
  {
    id: 2060,
    question: "toll",
    choices: ["見渡す", "操る", "領地", "料金"],
    correctAnswer: "料金"
  },
  {
    id: 2061,
    question: "transaction",
    choices: ["取引", "の終わりまでに", "厳格な", "硬い"],
    correctAnswer: "取引"
  },
  {
    id: 2062,
    question: "stiff",
    choices: ["証拠", "を飼育する，繁殖する", "配布物", "硬い"],
    correctAnswer: "硬い"
  },
  {
    id: 2063,
    question: "put up with",
    choices: ["銀行口座", "衛生", "に耐える", "選定する"],
    correctAnswer: "に耐える"
  },
  {
    id: 2064,
    question: "deal with",
    choices: ["予測する", "奴隷制度", "もがき苦しむ", "に対処する"],
    correctAnswer: "に対処する"
  },
  {
    id: 2065,
    question: "induce",
    choices: ["に耐える", "隔離", "大通り", "誘発する"],
    correctAnswer: "誘発する"
  },
  {
    id: 2066,
    question: "withstand",
    choices: ["選定する", "耐える", "もがき苦しむ", "減らす"],
    correctAnswer: "耐える"
  },
  {
    id: 2067,
    question: "sanitation",
    choices: ["先行する", "単独の", "衛生", "抜き取る"],
    correctAnswer: "衛生"
  },
  {
    id: 2068,
    question: "fraction",
    choices: ["1つずつ，一つ一つ", "分数", "疲労", "お土産"],
    correctAnswer: "分数"
  },
  {
    id: 2069,
    question: "conceal",
    choices: ["辞任する", "隠す", "取り除く", "に関して，の点から"],
    correctAnswer: "隠す"
  },
  {
    id: 2070,
    question: "retail",
    choices: ["小売り", "1つずつ，一つ一つ", "私の知る限り", "実際のところ"],
    correctAnswer: "小売り"
  },
  {
    id: 2071,
    question: "isolation",
    choices: ["突き上げる", "まともな", "隠す", "隔離"],
    correctAnswer: "隔離"
  },
  {
    id: 2072,
    question: "before long",
    choices: ["間もなく", "に対処する", "取引", "理性のある，分別のある"],
    correctAnswer: "間もなく"
  },
  {
    id: 2073,
    question: "biology",
    choices: ["先行する", "寮，大部屋", "選定する", "生物学"],
    correctAnswer: "生物学"
  },
  {
    id: 2074,
    question: "in terms of",
    choices: ["単独の", "現象", "に関して，の点から", "仏教"],
    correctAnswer: "に関して，の点から"
  },
  {
    id: 2075,
    question: "by the end of",
    choices: ["先行する", "の終わりまでに", "仏教", "恵み"],
    correctAnswer: "の終わりまでに"
  },
  {
    id: 2076,
    question: "prejudice",
    choices: ["まともな", "先入観", "仏教", "を必要とする，を要求する"],
    correctAnswer: "先入観"
  },
  {
    id: 2077,
    question: "souvenir",
    choices: ["現象", "厳格な", "お土産", "予測する"],
    correctAnswer: "お土産"
  },
  {
    id: 2078,
    question: "bring up",
    choices: ["持ち出す", "衛生", "さもなければ", "もはや～でない"],
    correctAnswer: "持ち出す"
  },
  {
    id: 2079,
    question: "supervisor",
    choices: ["延期する", "に対処する", "領地", "上司"],
    correctAnswer: "上司"
  },
  {
    id: 2080,
    question: "struggle",
    choices: ["北極地方", "通路", "もがき苦しむ", "に耐える"],
    correctAnswer: "もがき苦しむ"
  },
  {
    id: 2081,
    question: "attribute",
    choices: ["疲労", "取り除く", "に帰する", "を申し込む"],
    correctAnswer: "に帰する"
  },
  {
    id: 2082,
    question: "subsequent",
    choices: ["を申し込む", "その後の", "補足，追加", "取るに足らない"],
    correctAnswer: "その後の"
  },
  {
    id: 2083,
    question: "soak",
    choices: ["厳格な", "挑発する", "浸す", "の終わりまでに"],
    correctAnswer: "浸す"
  },
  {
    id: 2084,
    question: "supplement",
    choices: ["仏教", "補足，追加", "恥ずかしい", "現象"],
    correctAnswer: "補足，追加"
  },
  {
    id: 2085,
    question: "drought",
    choices: ["干ばつ", "除外する", "従う", "銀行口座"],
    correctAnswer: "干ばつ"
  },
  {
    id: 2086,
    question: "rely on",
    choices: ["完全な", "に頼る，を当てにする", "耐える", "寮，大部屋"],
    correctAnswer: "に頼る，を当てにする"
  },
  {
    id: 2087,
    question: "penetrate",
    choices: ["恵み", "貫く", "などなど", "に対処する"],
    correctAnswer: "貫く"
  },
  {
    id: 2088,
    question: "conform",
    choices: ["通路", "食料品", "先入観", "従う"],
    correctAnswer: "従う"
  },
  {
    id: 2089,
    question: "at most",
    choices: ["基盤", "強迫観念", "多くとも，せいぜい", "で苦しむ，悩まされる"],
    correctAnswer: "多くとも，せいぜい"
  },
  {
    id: 2090,
    question: "scarce",
    choices: ["厳格な", "乏しい", "取り除く", "従う"],
    correctAnswer: "乏しい"
  },
  {
    id: 2091,
    question: "trivial",
    choices: ["取るに足らない", "結果として，結果～になる", "硬い", "北極地方"],
    correctAnswer: "取るに足らない"
  },
  {
    id: 2092,
    question: "thorough",
    choices: ["辞任する", "先入観", "皇帝，天皇", "徹底した"],
    correctAnswer: "徹底した"
  },
  {
    id: 2093,
    question: "urge",
    choices: ["基盤", "腫瘍", "辞任する", "強く促す，早める"],
    correctAnswer: "強く促す，早める"
  },
  {
    id: 2094,
    question: "predator",
    choices: ["を申し込む", "捕食者", "大通り", "乏しい"],
    correctAnswer: "捕食者"
  },
  {
    id: 2095,
    question: "beverage",
    choices: ["飲料", "予測する", "現象", "恵み"],
    correctAnswer: "飲料"
  },
  {
    id: 2096,
    question: "emperor",
    choices: ["皇帝，天皇", "の終わりまでに", "取り除く", "舞い上がる"],
    correctAnswer: "皇帝，天皇"
  },
  {
    id: 2097,
    question: "soar",
    choices: ["抜き取る", "予測する", "舞い上がる", "さもなければ"],
    correctAnswer: "舞い上がる"
  },
  {
    id: 2098,
    question: "embarrassed",
    choices: ["減らす", "恥ずかしい", "厳格な", "強く促す，早める"],
    correctAnswer: "恥ずかしい"
  },
  {
    id: 2099,
    question: "and so on",
    choices: ["多くとも，せいぜい", "などなど", "私の知る限り", "仏教"],
    correctAnswer: "などなど"
  },
  {
    id: 2100,
    question: "famine",
    choices: ["間もなく", "補足，追加", "抜き取る", "食料不足"],
    correctAnswer: "食料不足"
  },
  {
    id: 2101,
    question: "secondhand",
    choices: ["改訂する", "領地", "従う", "中古の"],
    correctAnswer: "中古の"
  },
  {
    id: 2102,
    question: "bureau",
    choices: ["事務局，たんす", "帝国の", "を思いつく，を考え出す", "単独の"],
    correctAnswer: "事務局，たんす"
  },
  {
    id: 2103,
    question: "extinct",
    choices: ["完全な", "仏教", "絶滅した", "挑発する"],
    correctAnswer: "絶滅した"
  },
  {
    id: 2104,
    question: "on duty",
    choices: ["勤務時間中で，当番の", "皇帝，天皇", "商品", "理性のある，分別のある"],
    correctAnswer: "勤務時間中で，当番の"
  },
  {
    id: 2105,
    question: "roast",
    choices: ["などなど", "きちんとした", "あぶり焼きにする", "隔離"],
    correctAnswer: "あぶり焼きにする"
  },
  {
    id: 2106,
    question: "along with",
    choices: ["お土産", "飲料", "に沿って", "疲労"],
    correctAnswer: "に沿って"
  },
  {
    id: 2107,
    question: "make fun of",
    choices: ["をからかう", "衛生", "に帰する", "目的地，行き先"],
    correctAnswer: "をからかう"
  },
  {
    id: 2108,
    question: "conquer",
    choices: ["取るに足らない", "現象", "強く促す，早める", "征服する"],
    correctAnswer: "征服する"
  },
  {
    id: 2109,
    question: "come up with",
    choices: ["干ばつ", "に帰する", "浸す", "を思いつく，を考え出す"],
    correctAnswer: "を思いつく，を考え出す"
  },
  {
    id: 2110,
    question: "converse",
    choices: ["突き上げる", "取るに足らない", "に頼る，を当てにする", "逆の"],
    correctAnswer: "逆の"
  },
  {
    id: 2111,
    question: "revise",
    choices: ["改訂する", "建築家", "弁護士，法律家", "階層"],
    correctAnswer: "改訂する"
  },
  {
    id: 2112,
    question: "lawyer",
    choices: ["不明瞭な", "補足，追加", "弁護士，法律家", "分数"],
    correctAnswer: "弁護士，法律家"
  },
  {
    id: 2113,
    question: "dip",
    choices: ["補足，追加", "原産の", "少し浸す", "取るに足らない"],
    correctAnswer: "少し浸す"
  },
  {
    id: 2114,
    question: "look into",
    choices: ["従う", "挑発する", "を調べる", "分数"],
    correctAnswer: "を調べる"
  },
  {
    id: 2115,
    question: "optimistic",
    choices: ["奴隷制度", "楽観的な", "持ち出す", "に対処する"],
    correctAnswer: "楽観的な"
  },
  {
    id: 2116,
    question: "neat",
    choices: ["領地", "隠す", "きちんとした", "寮，大部屋"],
    correctAnswer: "きちんとした"
  },
  {
    id: 2117,
    question: "refer",
    choices: ["言及する", "銀行口座", "従う", "誘発する"],
    correctAnswer: "言及する"
  },
  {
    id: 2118,
    question: "expire",
    choices: ["期限切れの", "に関して，の点から", "に頼る，を当てにする", "取るに足らない"],
    correctAnswer: "期限切れの"
  },
  {
    id: 2119,
    question: "imperial",
    choices: ["間もなく", "取り除く", "帝国の", "期限切れの"],
    correctAnswer: "帝国の"
  },
  {
    id: 2120,
    question: "hierarchy",
    choices: ["言及する", "事務局，たんす", "期限切れの", "階層"],
    correctAnswer: "階層"
  },
  {
    id: 2121,
    question: "erosion",
    choices: ["侵食", "干ばつ", "腫瘍", "基盤"],
    correctAnswer: "侵食"
  },
  {
    id: 2122,
    question: "evoke",
    choices: ["貫く", "中古の", "呼び起こす", "生物学"],
    correctAnswer: "呼び起こす"
  },
  {
    id: 2123,
    question: "chemistry",
    choices: ["恵み", "延期する", "化学", "単独の"],
    correctAnswer: "化学"
  },
  {
    id: 2124,
    question: "habit",
    choices: ["中古の", "上司", "習慣，慣習", "見渡す"],
    correctAnswer: "習慣，慣習"
  },
  {
    id: 2125,
    question: "vanish",
    choices: ["消える", "で苦しむ，悩まされる", "改訂する", "楽観的な"],
    correctAnswer: "消える"
  },
  {
    id: 2126,
    question: "medieval",
    choices: ["を申し込む", "中世の", "隠す", "絶滅した"],
    correctAnswer: "中世の"
  },
  {
    id: 2127,
    question: "earnest",
    choices: ["逆の", "を思いつく，を考え出す", "誘発する", "真剣な"],
    correctAnswer: "真剣な"
  },
  {
    id: 2128,
    question: "get by",
    choices: ["捕食者", "貫く", "きちんとした", "どうにか切り抜ける"],
    correctAnswer: "どうにか切り抜ける"
  },
  {
    id: 2129,
    question: "cope with",
    choices: ["1つずつ，一つ一つ", "料金", "現象", "に対処する"],
    correctAnswer: "に対処する"
  },
  {
    id: 2130,
    question: "savage",
    choices: ["獰猛な", "あぶり焼きにする", "呼び起こす", "征服する"],
    correctAnswer: "獰猛な"
  },
  {
    id: 2131,
    question: "spur",
    choices: ["刺激", "を寄付する，を寄贈する", "従う", "銀行口座"],
    correctAnswer: "刺激"
  },
  {
    id: 2132,
    question: "bleed",
    choices: ["出血する", "間もなく", "に対処する", "配布物"],
    correctAnswer: "出血する"
  },
  {
    id: 2133,
    question: "eyesight",
    choices: ["誘発する", "隔離", "視界", "征服する"],
    correctAnswer: "視界"
  },
  {
    id: 2134,
    question: "apologize",
    choices: ["謝る，謝罪する", "挑発する", "飢える", "徹底した"],
    correctAnswer: "謝る，謝罪する"
  },
  {
    id: 2135,
    question: "concentrate",
    choices: ["集中する", "捕食者", "まるで～かのように", "食料不足"],
    correctAnswer: "集中する"
  },
  {
    id: 2136,
    question: "utilize",
    choices: ["化学", "硬い", "利用する", "舞い上がる"],
    correctAnswer: "利用する"
  },
  {
    id: 2137,
    question: "fame",
    choices: ["取引", "名声", "習慣，慣習", "楽観的な"],
    correctAnswer: "名声"
  },
  {
    id: 2138,
    question: "accommodation",
    choices: ["宿泊施設", "目的地，行き先", "厳格な", "勤務時間中で，当番の"],
    correctAnswer: "宿泊施設"
  },
  {
    id: 2139,
    question: "donate",
    choices: ["を必要とする，を要求する", "を寄付する，を寄贈する", "に帰する", "歪める"],
    correctAnswer: "を寄付する，を寄贈する"
  },
  {
    id: 2140,
    question: "starve",
    choices: ["抜き取る", "の終わりまでに", "飢える", "を思いつく，を考え出す"],
    correctAnswer: "飢える"
  },
  {
    id: 2141,
    question: "in spite of",
    choices: ["減らす", "階層", "にも関わらず", "不明瞭な"],
    correctAnswer: "にも関わらず"
  },
  {
    id: 2142,
    question: "organ",
    choices: ["臓器", "獰猛な", "通路", "硬い"],
    correctAnswer: "臓器"
  },
  {
    id: 2143,
    question: "domestic",
    choices: ["きちんとした", "国内の，自国の", "結果として，結果～になる", "いじめっ子"],
    correctAnswer: "国内の，自国の"
  },
  {
    id: 2144,
    question: "discrimination",
    choices: ["差別/差別的な", "壮大な", "従う", "強く促す，早める"],
    correctAnswer: "差別/差別的な"
  },
  {
    id: 2145,
    question: "bully",
    choices: ["配布物", "硬い", "もはや～でない", "いじめっ子"],
    correctAnswer: "いじめっ子"
  },
  {
    id: 2146,
    question: "bake",
    choices: ["焼く，焼成する", "に帰する", "延期する", "隠す"],
    correctAnswer: "焼く，焼成する"
  },
  {
    id: 2147,
    question: "ambiguous",
    choices: ["壮大な", "弁護士，法律家", "あいまいな", "小売り"],
    correctAnswer: "あいまいな"
  },
  {
    id: 2148,
    question: "integrate",
    choices: ["どうにか切り抜ける", "統合する", "生物学", "を使い果たす，消耗する"],
    correctAnswer: "統合する"
  },
  {
    id: 2149,
    question: "particle",
    choices: ["分子", "まるで～かのように", "抜き取る", "が原因で"],
    correctAnswer: "分子"
  },
  {
    id: 2150,
    question: "magnificent",
    choices: ["皇帝，天皇", "寄付する", "壮大な", "銀行口座"],
    correctAnswer: "壮大な"
  },
  {
    id: 2151,
    question: "pastime",
    choices: ["を使い果たす，消耗する", "娯楽", "利用する", "私の知る限り"],
    correctAnswer: "娯楽"
  },
  {
    id: 2152,
    question: "enrich",
    choices: ["寮，大部屋", "1つずつ，一つ一つ", "多くとも，せいぜい", "豊かにする"],
    correctAnswer: "豊かにする"
  },
  {
    id: 2153,
    question: "refund",
    choices: ["商品", "利用する", "払い戻す", "単独の"],
    correctAnswer: "払い戻す"
  },
  {
    id: 2154,
    question: "germ",
    choices: ["細菌", "小売り", "弁護士，法律家", "収容する"],
    correctAnswer: "細菌"
  },
  {
    id: 2155,
    question: "rumor",
    choices: ["うわさ", "差別/差別的な", "大通り", "予測する"],
    correctAnswer: "うわさ"
  },
  {
    id: 2156,
    question: "run out of",
    choices: ["化学", "を使い果たす，消耗する", "に関して，の点から", "誘発する"],
    correctAnswer: "を使い果たす，消耗する"
  },
  {
    id: 2157,
    question: "descend",
    choices: ["現象", "下降する", "勤務時間中で，当番の", "取るに足らない"],
    correctAnswer: "下降する"
  },
  {
    id: 2158,
    question: "irrelevant",
    choices: ["もはや～でない", "配布物", "勤務時間中で，当番の", "無関係な"],
    correctAnswer: "無関係な"
  },
  {
    id: 2159,
    question: "endow",
    choices: ["皇帝，天皇", "寄付する", "勤務時間中で，当番の", "もがき苦しむ"],
    correctAnswer: "寄付する"
  },
  {
    id: 2160,
    question: "fingerprint",
    choices: ["指紋", "見渡す", "捕食者", "料金"],
    correctAnswer: "指紋"
  },
  {
    id: 2161,
    question: "vending machine",
    choices: ["浸す", "自動販売機", "ぎこちない", "1つずつ，一つ一つ"],
    correctAnswer: "自動販売機"
  },
  {
    id: 2162,
    question: "compile",
    choices: ["予測する", "挑発する", "編集する", "をからかう"],
    correctAnswer: "編集する"
  },
  {
    id: 2163,
    question: "compassion",
    choices: ["思いやり", "宿泊施設", "万一に備えて", "食料不足"],
    correctAnswer: "思いやり"
  },
  {
    id: 2164,
    question: "ancestor",
    choices: ["乏しい", "祖先，先祖", "集中する", "承認する"],
    correctAnswer: "祖先，先祖"
  },
  {
    id: 2165,
    question: "in case",
    choices: ["に対処する", "楽観的な", "まるで～かのように", "万一に備えて"],
    correctAnswer: "万一に備えて"
  },
  {
    id: 2166,
    question: "think over",
    choices: ["習慣，慣習", "銀行口座", "熟考する，よく考える", "統合する"],
    correctAnswer: "熟考する，よく考える"
  },
  {
    id: 2167,
    question: "according to",
    choices: ["まともな", "事務局，たんす", "貫く", "によれば，に基づいて"],
    correctAnswer: "によれば，に基づいて"
  },
  {
    id: 2168,
    question: "by degrees",
    choices: ["万一に備えて", "持ち出す", "利用する", "徐々に"],
    correctAnswer: "徐々に"
  },
  {
    id: 2169,
    question: "sorrow",
    choices: ["あいまいな", "食料不足", "悲しみ", "癖になった"],
    correctAnswer: "悲しみ"
  },
  {
    id: 2170,
    question: "approve",
    choices: ["強く促す，早める", "宿泊施設", "を思いつく，を考え出す", "承認する"],
    correctAnswer: "承認する"
  },
  {
    id: 2171,
    question: "undertake",
    choices: ["悲しみ", "引き受ける", "捕食者", "を調べる"],
    correctAnswer: "引き受ける"
  },
  {
    id: 2172,
    question: "compliment",
    choices: ["統合する", "褒め言葉", "征服する", "商品"],
    correctAnswer: "褒め言葉"
  },
  {
    id: 2173,
    question: "hang up",
    choices: ["圧倒する", "あぶり焼きにする", "中断する", "豊かにする"],
    correctAnswer: "中断する"
  },
  {
    id: 2174,
    question: "overwhelm",
    choices: ["目的地，行き先", "圧倒する", "先行する", "生物学"],
    correctAnswer: "圧倒する"
  },
  {
    id: 2175,
    question: "confess",
    choices: ["を打ち明ける，白状する", "壮大な", "獰猛な", "耐える"],
    correctAnswer: "を打ち明ける，白状する"
  },
  {
    id: 2176,
    question: "break out",
    choices: ["が原因で", "を寄付する，を寄贈する", "勃発する", "刺激"],
    correctAnswer: "勃発する"
  },
  {
    id: 2177,
    question: "watch out",
    choices: ["気を付ける", "階層", "基盤", "予測する"],
    correctAnswer: "気を付ける"
  },
  {
    id: 2178,
    question: "pull off",
    choices: ["もはや～でない", "改訂する", "もぎ取る，成功を掴む", "に関して，の点から"],
    correctAnswer: "もぎ取る，成功を掴む"
  },
  {
    id: 2179,
    question: "awkward",
    choices: ["恵み", "取るに足らない", "ぎこちない", "従う"],
    correctAnswer: "ぎこちない"
  },
  {
    id: 2180,
    question: "tame",
    choices: ["焼く，焼成する", "祖先，先祖", "飼いならす", "を思いつく，を考え出す"],
    correctAnswer: "飼いならす"
  },
  {
    id: 2181,
    question: "appropriate",
    choices: ["熟考する，よく考える", "無関係な", "適当な，充当する", "呼び起こす"],
    correctAnswer: "適当な，充当する"
  },
  {
    id: 2182,
    question: "try on",
    choices: ["隠す", "捕食者", "基盤", "試着する"],
    correctAnswer: "試着する"
  },
  {
    id: 2183,
    question: "adolescent",
    choices: ["縮小する", "原産の", "基盤", "思春期の"],
    correctAnswer: "思春期の"
  },
  {
    id: 2184,
    question: "carry out",
    choices: ["を成し遂げる", "に帰する", "操る", "隠す"],
    correctAnswer: "を成し遂げる"
  },
  {
    id: 2185,
    question: "ambition",
    choices: ["を打ち明ける，白状する", "まともな", "従う", "野望"],
    correctAnswer: "野望"
  },
  {
    id: 2186,
    question: "scholarship",
    choices: ["誘発する", "奨学金", "に耐える", "に帰する"],
    correctAnswer: "奨学金"
  },
  {
    id: 2187,
    question: "get along with",
    choices: ["とうまくやっていく", "分数", "奨学金", "まるで～かのように"],
    correctAnswer: "とうまくやっていく"
  },
  {
    id: 2188,
    question: "come across",
    choices: ["言及する", "を横切る，出くわす", "さもなければ", "中断する"],
    correctAnswer: "を横切る，出くわす"
  },
  {
    id: 2189,
    question: "remain",
    choices: ["のままである，残る", "名声", "改訂する", "その後の"],
    correctAnswer: "のままである，残る"
  },
  {
    id: 2190,
    question: "emotion",
    choices: ["上司", "単独の", "感情，情熱", "食料不足"],
    correctAnswer: "感情，情熱"
  },
  {
    id: 2191,
    question: "emergency",
    choices: ["分子", "楽観的な", "癖になった", "緊急事態，緊急"],
    correctAnswer: "緊急事態，緊急"
  },
  {
    id: 2192,
    question: "spouse",
    choices: ["持ち出す", "配偶者", "舞い上がる", "祖先，先祖"],
    correctAnswer: "配偶者"
  },
  {
    id: 2193,
    question: "call off",
    choices: ["試着する", "を中止する", "仏教", "期限切れの"],
    correctAnswer: "を中止する"
  },
  {
    id: 2194,
    question: "be willing to",
    choices: ["取り除く", "指紋", "先入観", "する気のある"],
    correctAnswer: "する気のある"
  },
  {
    id: 2195,
    question: "shrink",
    choices: ["まともな", "どうにか切り抜ける", "縮小する", "分子"],
    correctAnswer: "縮小する"
  },
  {
    id: 2196,
    question: "molecule",
    choices: ["思いやり", "さもなければ", "分子", "目的地，行き先"],
    correctAnswer: "分子"
  },
  {
    id: 2197,
    question: "document",
    choices: ["書類", "まるで～かのように", "中断する", "食料品"],
    correctAnswer: "書類"
  },
  {
    id: 2198,
    question: "nap",
    choices: ["を成し遂げる", "引き受ける", "多くとも，せいぜい", "昼寝"],
    correctAnswer: "昼寝"
  },
  {
    id: 2199,
    question: "instead of",
    choices: ["従う", "完全な", "逆の", "のかわりに"],
    correctAnswer: "のかわりに"
  },
  {
    id: 2200,
    question: "assemble",
    choices: ["に対処する", "通路", "料金", "組み立てる"],
    correctAnswer: "組み立てる"
  },
  {
    id: 2201,
    question: "injection",
    choices: ["廃止する", "どうして～", "注射，注入", "断片"],
    correctAnswer: "注射，注入"
  },
  {
    id: 2202,
    question: "endanger",
    choices: ["まともな", "危険にさらす", "従う", "を必要とする，を要求する"],
    correctAnswer: "危険にさらす"
  },
  {
    id: 2203,
    question: "basin",
    choices: ["挑発する", "盆地", "分子", "時々"],
    correctAnswer: "盆地"
  },
  {
    id: 2204,
    question: "suspend",
    choices: ["中古の", "つるす", "視界", "1つずつ，一つ一つ"],
    correctAnswer: "つるす"
  },
  {
    id: 2205,
    question: "stem",
    choices: ["征服する", "幹", "通路", "取るに足らない"],
    correctAnswer: "幹"
  },
  {
    id: 2206,
    question: "hand in",
    choices: ["神聖な，聖なる", "をからかう", "名声", "を提出する"],
    correctAnswer: "を提出する"
  },
  {
    id: 2207,
    question: "be engaged in",
    choices: ["浸す", "に従事している", "元気で", "料金"],
    correctAnswer: "に従事している"
  },
  {
    id: 2208,
    question: "burden",
    choices: ["まともな", "原産の", "従う", "負担，重荷"],
    correctAnswer: "負担，重荷"
  },
  {
    id: 2209,
    question: "a couple of",
    choices: ["編集する", "少数の", "壮大な", "補足，追加"],
    correctAnswer: "少数の"
  },
  {
    id: 2210,
    question: "be well of",
    choices: ["まるで～かのように", "壮大な", "お土産", "元気で"],
    correctAnswer: "元気で"
  },
  {
    id: 2211,
    question: "outcome",
    choices: ["実際のところ", "を中止する", "訴える", "結果"],
    correctAnswer: "結果"
  },
  {
    id: 2212,
    question: "retrieve",
    choices: ["注射，注入", "楽観的な", "取り戻す", "料金"],
    correctAnswer: "取り戻す"
  },
  {
    id: 2213,
    question: "in shape",
    choices: ["先入観", "健康に", "割り当てる", "飲料"],
    correctAnswer: "健康に"
  },
  {
    id: 2214,
    question: "make sense",
    choices: ["などなど", "疲労", "先入観", "意味をなす"],
    correctAnswer: "意味をなす"
  },
  {
    id: 2215,
    question: "tidy",
    choices: ["きちんとした", "徹底した", "結果として，結果～になる", "厳格な"],
    correctAnswer: "きちんとした"
  },
  {
    id: 2216,
    question: "reveal",
    choices: ["を乗りこえる，克服する", "侵食", "運賃", "明らかにする"],
    correctAnswer: "明らかにする"
  },
  {
    id: 2217,
    question: "consist of",
    choices: ["あぶり焼きにする", "豊かにする", "まるで～かのように", "から成り立っている"],
    correctAnswer: "から成り立っている"
  },
  {
    id: 2218,
    question: "afterwards",
    choices: ["その後", "注射，注入", "獰猛な", "寮，大部屋"],
    correctAnswer: "その後"
  },
  {
    id: 2219,
    question: "even if",
    choices: ["楽観的な", "あいまいな", "たとえ～だとしても，仮に～であっても", "から成り立っている"],
    correctAnswer: "たとえ～だとしても，仮に～であっても"
  },
  {
    id: 2220,
    question: "sewage",
    choices: ["選定する", "下水", "消える", "組み立てる"],
    correctAnswer: "下水"
  },
  {
    id: 2221,
    question: "abolish",
    choices: ["に頼る，を当てにする", "廃止する", "舞い上がる", "編集する"],
    correctAnswer: "廃止する"
  },
  {
    id: 2222,
    question: "ugly",
    choices: ["醜い", "現象", "寮，大部屋", "統合する"],
    correctAnswer: "醜い"
  },
  {
    id: 2223,
    question: "get over",
    choices: ["緊急事態，緊急", "選定する", "を申し込む", "を乗りこえる，克服する"],
    correctAnswer: "を乗りこえる，克服する"
  },
  {
    id: 2224,
    question: "modest",
    choices: ["料金", "荒廃させる", "控えめな", "幼稚園"],
    correctAnswer: "控えめな"
  },
  {
    id: 2225,
    question: "bloom",
    choices: ["咲く", "刺激", "少し浸す", "中世の"],
    correctAnswer: "咲く"
  },
  {
    id: 2226,
    question: "holy",
    choices: ["実際のところ", "縮小する", "神聖な，聖なる", "幹"],
    correctAnswer: "神聖な，聖なる"
  },
  {
    id: 2227,
    question: "assign",
    choices: ["基盤", "割り当てる", "選定する", "書類"],
    correctAnswer: "割り当てる"
  },
  {
    id: 2228,
    question: "architecture",
    choices: ["皇帝，天皇", "建築", "取引", "化学"],
    correctAnswer: "建築"
  },
  {
    id: 2229,
    question: "sparkle",
    choices: ["私の知る限り", "試着する", "閃光", "細菌"],
    correctAnswer: "閃光"
  },
  {
    id: 2230,
    question: "How come",
    choices: ["をからかう", "どうして～", "とは対照的に", "小売り"],
    correctAnswer: "どうして～"
  },
  {
    id: 2231,
    question: "at times",
    choices: ["きちんとした", "控えめな", "時々", "うわさ"],
    correctAnswer: "時々"
  },
  {
    id: 2232,
    question: "fragment",
    choices: ["断片", "取引", "緊急事態，緊急", "厳格な"],
    correctAnswer: "断片"
  },
  {
    id: 2233,
    question: "fare",
    choices: ["明らかにする", "もはや～でない", "に帰する", "運賃"],
    correctAnswer: "運賃"
  },
  {
    id: 2234,
    question: "prey",
    choices: ["きちんとした", "浸す", "細菌", "獲物"],
    correctAnswer: "獲物"
  },
  {
    id: 2235,
    question: "devastate",
    choices: ["たとえ～だとしても，仮に～であっても", "で苦しむ，悩まされる", "荒廃させる", "補足，追加"],
    correctAnswer: "荒廃させる"
  },
  {
    id: 2236,
    question: "show up",
    choices: ["不明瞭な", "現れる", "運賃", "腫瘍"],
    correctAnswer: "現れる"
  },
  {
    id: 2237,
    question: "in contrast to",
    choices: ["組み立てる", "とは対照的に", "を必要とする，を要求する", "を乗りこえる，克服する"],
    correctAnswer: "とは対照的に"
  },
  {
    id: 2238,
    question: "nutrition",
    choices: ["突き上げる", "寄付する", "目的地，行き先", "栄養，栄養素"],
    correctAnswer: "栄養，栄養素"
  },
  {
    id: 2239,
    question: "low-income",
    choices: ["気を付ける", "配偶者", "低収入の", "を調べる"],
    correctAnswer: "低収入の"
  },
  {
    id: 2240,
    question: "leak",
    choices: ["延期する", "漏れる", "現象", "逆の"],
    correctAnswer: "漏れる"
  },
  {
    id: 2241,
    question: "exert",
    choices: ["寮，大部屋", "分数", "まるで～かのように", "行使する"],
    correctAnswer: "行使する"
  },
  {
    id: 2242,
    question: "protocol",
    choices: ["分数", "咲く", "儀礼", "弁護士，法律家"],
    correctAnswer: "儀礼"
  },
  {
    id: 2243,
    question: "toxic",
    choices: ["衛生", "侵食", "有毒な", "強く促す，早める"],
    correctAnswer: "有毒な"
  },
  {
    id: 2244,
    question: "documentary",
    choices: ["注射，注入", "負担，重荷", "事実を記録した", "消える"],
    correctAnswer: "事実を記録した"
  },
  {
    id: 2245,
    question: "acute",
    choices: ["鋭角の", "自動販売機", "圧倒する", "書類"],
    correctAnswer: "鋭角の"
  },
  {
    id: 2246,
    question: "prohibit",
    choices: ["壮大な", "徐々に", "禁じる", "真剣な"],
    correctAnswer: "禁じる"
  },
  {
    id: 2247,
    question: "equality",
    choices: ["平等さ", "に頼る，を当てにする", "控えめな", "もぎ取る，成功を掴む"],
    correctAnswer: "平等さ"
  },
  {
    id: 2248,
    question: "organic",
    choices: ["貫く", "儀礼", "無農薬の", "祖先，先祖"],
    correctAnswer: "無農薬の"
  },
  {
    id: 2249,
    question: "formula",
    choices: ["現れる", "原産の", "を寄付する，を寄贈する", "式"],
    correctAnswer: "式"
  },
  {
    id: 2250,
    question: "exclusive",
    choices: ["に対処する", "閉鎖的な", "まともな", "予測する"],
    correctAnswer: "閉鎖的な"
  },
  {
    id: 2251,
    question: "sincere",
    choices: ["誠実な", "分子", "仏教", "衛生"],
    correctAnswer: "誠実な"
  },
  {
    id: 2252,
    question: "vow",
    choices: ["延期する", "分数", "有毒な", "誓い"],
    correctAnswer: "誓い"
  },
  {
    id: 2253,
    question: "in charge of",
    choices: ["に従事している", "の担当をして", "隠す", "を乗りこえる，克服する"],
    correctAnswer: "の担当をして"
  },
  {
    id: 2254,
    question: "intuition",
    choices: ["少数の", "突き上げる", "先入観", "直感"],
    correctAnswer: "直感"
  },
  {
    id: 2255,
    question: "laptop",
    choices: ["分子", "を飼育する，繁殖する", "ノートパソコン", "選定する"],
    correctAnswer: "ノートパソコン"
  },
  {
    id: 2256,
    question: "outstanding",
    choices: ["まるで～かのように", "細胞組織，薄い織物", "配偶者", "並外れた，目立った"],
    correctAnswer: "並外れた，目立った"
  },
  {
    id: 2257,
    question: "tissue",
    choices: ["疲労", "低収入の", "獰猛な", "細胞組織，薄い織物"],
    correctAnswer: "細胞組織，薄い織物"
  },
  {
    id: 2258,
    question: "by means of",
    choices: ["試着する", "取り戻す", "によって，を用いて", "分数"],
    correctAnswer: "によって，を用いて"
  },
  {
    id: 2259,
    question: "layer",
    choices: ["幹", "娯楽", "層", "さもなければ"],
    correctAnswer: "層"
  },
  {
    id: 2260,
    question: "sit up",
    choices: ["負担，重荷", "お土産", "行使する", "まっすぐ座る"],
    correctAnswer: "まっすぐ座る"
  },
  {
    id: 2261,
    question: "explode",
    choices: ["爆発する，破裂する，激増する", "舞い上がる", "意味をなす", "疲労"],
    correctAnswer: "爆発する，破裂する，激増する"
  },
  {
    id: 2262,
    question: "irrigation",
    choices: ["悲しみ", "廃止する", "灌漑", "減らす"],
    correctAnswer: "灌漑"
  },
  {
    id: 2263,
    question: "refrain from",
    choices: ["を成し遂げる", "を控える，を遠慮する", "予測する", "商品"],
    correctAnswer: "を控える，を遠慮する"
  },
  {
    id: 2264,
    question: "a bunch of",
    choices: ["たくさんの，多量の", "奴隷制度", "出血する", "下降する"],
    correctAnswer: "たくさんの，多量の"
  },
  {
    id: 2265,
    question: "altitude",
    choices: ["逆の", "高度", "打ち負かす", "多くとも，せいぜい"],
    correctAnswer: "高度"
  },
  {
    id: 2266,
    question: "humid",
    choices: ["疲労", "湿っぽい、湿度の高い", "醜い", "少数の"],
    correctAnswer: "湿っぽい、湿度の高い"
  },
  {
    id: 2267,
    question: "hemisphere",
    choices: ["半球", "帝国の", "健康に", "補足，追加"],
    correctAnswer: "半球"
  },
  {
    id: 2268,
    question: "salty",
    choices: ["塩辛い", "によれば，に基づいて", "式", "基盤"],
    correctAnswer: "塩辛い"
  },
  {
    id: 2269,
    question: "custom",
    choices: ["分子", "習慣，慣習", "中古の", "熟考する，よく考える"],
    correctAnswer: "習慣，慣習"
  },
  {
    id: 2270,
    question: "award",
    choices: ["目的地，行き先", "通路", "賞", "事務局，たんす"],
    correctAnswer: "賞"
  },
  {
    id: 2271,
    question: "billion",
    choices: ["思春期の", "10億", "先行する", "気を付ける"],
    correctAnswer: "10億"
  },
  {
    id: 2272,
    question: "ashamed",
    choices: ["の担当をして", "直感", "恥じて，恥ずかしくて", "下水"],
    correctAnswer: "恥じて，恥ずかしくて"
  },
  {
    id: 2273,
    question: "definitely",
    choices: ["を必要とする，を要求する", "徹底した", "もちろん，確かに", "見渡す"],
    correctAnswer: "もちろん，確かに"
  },
  {
    id: 2274,
    question: "do away with",
    choices: ["塩辛い", "廃止する", "ごみ", "理性のある，分別のある"],
    correctAnswer: "廃止する"
  },
  {
    id: 2275,
    question: "litter",
    choices: ["先入観", "神聖な，聖なる", "ごみ", "先行する"],
    correctAnswer: "ごみ"
  },
  {
    id: 2276,
    question: "stare at",
    choices: ["をじっと見つめる", "10億", "皇帝，天皇", "割り当てる"],
    correctAnswer: "をじっと見つめる"
  },
  {
    id: 2277,
    question: "invade",
    choices: ["にも関わらず", "をからかう", "侵略する", "少し浸す"],
    correctAnswer: "侵略する"
  },
  {
    id: 2278,
    question: "beat",
    choices: ["もがき苦しむ", "視界", "中世の", "打ち負かす"],
    correctAnswer: "打ち負かす"
  },
  {
    id: 2279,
    question: "stubborn",
    choices: ["を寄付する，を寄贈する", "飢える", "頑固な", "きちんとした"],
    correctAnswer: "頑固な"
  },
  {
    id: 2280,
    question: "settle down",
    choices: ["10億", "隔離", "盆地", "定住する"],
    correctAnswer: "定住する"
  },
  {
    id: 2281,
    question: "harsh",
    choices: ["徐々に", "食料品", "分数", "厳しい"],
    correctAnswer: "厳しい"
  },
  {
    id: 2282,
    question: "prolong",
    choices: ["建築", "廃止する", "征服する", "延長する"],
    correctAnswer: "延長する"
  },
  {
    id: 2283,
    question: "humble",
    choices: ["指し示す", "謙虚な", "分数", "もちろん，確かに"],
    correctAnswer: "謙虚な"
  },
  {
    id: 2284,
    question: "reinforce",
    choices: ["感情，情熱", "強化する", "試着する", "飼いならす"],
    correctAnswer: "強化する"
  },
  {
    id: 2285,
    question: "fragile",
    choices: ["などなど", "豊かにする", "単独の", "もろい"],
    correctAnswer: "もろい"
  },
  {
    id: 2286,
    question: "refuge",
    choices: ["避難", "感情，情熱", "などなど", "を調べる"],
    correctAnswer: "避難"
  },
  {
    id: 2287,
    question: "cut down",
    choices: ["を減らす，削減する", "直感", "化学", "召喚する"],
    correctAnswer: "を減らす，削減する"
  },
  {
    id: 2288,
    question: "bold",
    choices: ["自動販売機", "勇敢な", "侵食", "を中止する"],
    correctAnswer: "勇敢な"
  },
  {
    id: 2289,
    question: "breeze",
    choices: ["建築", "そよ風", "改訂する", "から成り立っている"],
    correctAnswer: "そよ風"
  },
  {
    id: 2290,
    question: "lately",
    choices: ["期限切れの", "神聖な，聖なる", "栄養，栄養素", "最近"],
    correctAnswer: "最近"
  },
  {
    id: 2291,
    question: "tuition",
    choices: ["取引", "授業料，学費", "小売り", "をじっと見つめる"],
    correctAnswer: "授業料，学費"
  },
  {
    id: 2292,
    question: "indicate",
    choices: ["指し示す", "従う", "引き受ける", "に対処する"],
    correctAnswer: "指し示す"
  },
  {
    id: 2293,
    question: "vivid",
    choices: ["引き受ける", "鮮やかな", "ごみ", "を思いつく，を考え出す"],
    correctAnswer: "鮮やかな"
  },
  {
    id: 2294,
    question: "out of stock",
    choices: ["取引", "在庫切れ", "勃発する", "細菌"],
    correctAnswer: "在庫切れ"
  },
  {
    id: 2295,
    question: "comprehend",
    choices: ["従う", "理解する", "を思いつく，を考え出す", "視界"],
    correctAnswer: "理解する"
  },
  {
    id: 2296,
    question: "accumulate",
    choices: ["謙虚な", "で苦しむ，悩まされる", "健康に", "蓄積する"],
    correctAnswer: "蓄積する"
  },
  {
    id: 2297,
    question: "summon",
    choices: ["廃止する", "召喚する", "幼稚園", "あぶり焼きにする"],
    correctAnswer: "召喚する"
  },
  {
    id: 2298,
    question: "acquire",
    choices: ["賞", "北極地方", "生物学", "を身につける"],
    correctAnswer: "を身につける"
  },
  {
    id: 2299,
    question: "pedestrian",
    choices: ["腫瘍", "歩行者", "たとえ～だとしても，仮に～であっても", "つるす"],
    correctAnswer: "歩行者"
  },
  {
    id: 2300,
    question: "restrain",
    choices: ["式", "帝国の", "抑える", "分子"],
    correctAnswer: "抑える"
  }

  ];

  export default questions1;  

