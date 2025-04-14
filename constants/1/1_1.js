const questions1 = [
    { 
        id: 1,
        question: "diplomatic",
        choices: ["外交の", "政治的な", "商業の", "軍事的な"],
        correctAnswer: "外交の"
     },
     { 
        id: 2,
        question: "alongside",
        choices: ["と一緒に", "反対に", "近くで", "遠くに"],
        correctAnswer: "と一緒に"
     },
     { 
        id: 3,
        question: "narrative",
        choices: ["物語", "詩", "記事", "報告"],
        correctAnswer: "物語"
     },
     { 
        id: 4,
        question: "contamination",
        choices: ["汚染", "清潔", "防止", "消毒"],
        correctAnswer: "汚染"
     },
     { 
        id: 5,
        question: "stark",
        choices: ["正真正銘の", "偽りの", "混合の", "不明瞭な"],
        correctAnswer: "正真正銘の"
     },
     { 
        id: 6,
        question: "refusal",
        choices: ["拒否", "承認", "同意", "歓迎"],
        correctAnswer: "拒否"
     },
     { 
        id: 7,
        question: "doctrine",
        choices: ["教義", "法律", "原則", "習慣"],
        correctAnswer: "教義"
     },
     { 
        id: 8,
        question: "organic",
        choices: ["無農薬の", "人工の", "化学的な", "工業的な"],
        correctAnswer: "無農薬の"
     },
     { 
        id: 9,
        question: "hypothesis",
        choices: ["仮説", "理論", "事実", "証拠"],
        correctAnswer: "仮説"
     },
     { 
        id: 10,
        question: "evolutionary",
        choices: ["進化的な", "退化的な", "瞬間的な", "不変の"],
        correctAnswer: "進化的な"
     },
     { 
        id: 11,
        question: "archaeological",
        choices: ["考古学の", "歴史的な", "現代的な", "科学的な"],
        correctAnswer: "考古学の"
     },
     { 
        id: 12,
        question: "subsequent",
        choices: ["その後の", "以前の", "同時の", "無関係の"],
        correctAnswer: "その後の"
     },
     { 
        id: 13,
        question: "contractor",
        choices: ["請負業者", "社員", "顧客", "監督者"],
        correctAnswer: "請負業者"
     },
     { 
        id: 14,
        question: "skeptical",
        choices: ["懐疑的な", "信じやすい", "楽観的な", "確信している"],
        correctAnswer: "懐疑的な"
     },
     { 
        id: 15,
        question: "bribery",
        choices: ["賄賂の授受", "正当な支払い", "契約", "誠実さ"],
        correctAnswer: "賄賂の授受"
     },
     { 
        id: 16,
        question: "treadmill",
        choices: ["ルームランナー", "エレベーター", "トレーニングマット", "自転車"],
        correctAnswer: "ルームランナー"
     },
     { 
        id: 17,
        question: "resume",
        choices: ["再開する", "終了する", "省略する", "拒否する"],
        correctAnswer: "再開する"
     },
     { 
        id: 18,
        question: "hierarchical",
        choices: ["階層的な", "平等な", "無秩序な", "一律の"],
        correctAnswer: "階層的な"
     },
     { 
        id: 19,
        question: "nourishment",
        choices: ["栄養", "装飾", "清掃", "労働"],
        correctAnswer: "栄養"
     },
     { 
        id: 20,
        question: "credibility",
        choices: ["信頼性", "疑惑", "作り話", "誤解"],
        correctAnswer: "信頼性"
     },
     { 
        id: 21,
        question: "dissent",
        choices: ["異議を唱える", "同意する", "称賛する", "賛成する"],
        correctAnswer: "異議を唱える"
     },
     { 
        id: 22,
        question: "proliferation",
        choices: ["拡散", "縮小", "停止", "制限"],
        correctAnswer: "拡散"
     },
     { 
        id: 23,
        question: "controversy",
        choices: ["論争", "合意", "平和", "称賛"],
        correctAnswer: "論争"
     },
     { 
        id: 24,
        question: "sympathetic",
        choices: ["思いやりのある", "冷淡な", "無関心な", "攻撃的な"],
        correctAnswer: "思いやりのある"
     },
     { 
        id: 25,
        question: "round up",
        choices: ["寄せ集める", "解散させる", "省略する", "削減する"],
        correctAnswer: "寄せ集める"
     },
     { 
        id: 26,
        question: "supposedly",
        choices: ["たぶん", "確実に", "絶対に", "明確に"],
        correctAnswer: "たぶん"
     },
     { 
        id: 27,
        question: "patriotism",
        choices: ["愛国心", "中立", "無関心", "反逆"],
        correctAnswer: "愛国心"
     },
     { 
        id: 28,
        question: "disappearance",
        choices: ["失踪", "発見", "出現", "再会"],
        correctAnswer: "失踪"
     },
     { 
        id: 29,
        question: "tragic",
        choices: ["悲劇的な", "喜ばしい", "幸運な", "楽観的な"],
        correctAnswer: "悲劇的な"
     },
     { 
        id: 30,
        question: "implant",
        choices: ["植え付ける", "取り除く", "破壊する", "失う"],
        correctAnswer: "植え付ける"
     },
     { 
        id: 31,
        question: "accounting",
        choices: ["会計", "料理", "運動", "旅行"],
        correctAnswer: "会計"
     },
     { 
        id: 32,
        question: "bout",
        choices: ["試合", "休憩", "敗北", "練習"],
        correctAnswer: "試合"
     },
     { 
        id: 33,
        question: "hold over",
        choices: ["延期する", "終了する", "中止する", "却下する"],
        correctAnswer: "延期する"
     },
     { 
        id: 34,
        question: "biased toward",
        choices: ["に対する偏見", "公平な", "中立的な", "賛同する"],
        correctAnswer: "に対する偏見"
     },
     { 
        id: 35,
        question: "puppy",
        choices: ["子犬", "成犬", "子猫", "鳥"],
        correctAnswer: "子犬"
     },
     { 
        id: 36,
        question: "semester",
        choices: ["学期", "休日", "休憩時間", "試験"],
        correctAnswer: "学期"
     },
     { 
        id: 37,
        question: "refund",
        choices: ["払い戻す", "支払う", "借りる", "請求する"],
        correctAnswer: "払い戻す"
     },
     { 
        id: 38,
        question: "diabetes",
        choices: ["糖尿病", "高血圧", "風邪", "胃炎"],
        correctAnswer: "糖尿病"
     },
     { 
        id: 39,
        question: "organ",
        choices: ["臓器", "骨", "筋肉", "血管"],
        correctAnswer: "臓器"
     },
     { 
        id: 40,
        question: "prod",
        choices: ["突く", "避ける", "隠す", "捨てる"],
        correctAnswer: "突く"
     },
     { 
        id: 41,
        question: "drawback",
        choices: ["欠点", "利点", "改善点", "特権"],
        correctAnswer: "欠点"
     },
     { 
        id: 42,
        question: "prospective",
        choices: ["予測される", "確定した", "過去の", "不確実な"],
        correctAnswer: "予測される"
     },
     { 
        id: 43,
        question: "pay off",
        choices: ["全部払う", "借りる", "節約する", "免除される"],
        correctAnswer: "全部払う"
     },
     { 
        id: 44,
        question: "exclusively",
        choices: ["排他的に", "一般的に", "自由に", "適当に"],
        correctAnswer: "排他的に"
     },
     { 
        id: 45,
        question: "dosage",
        choices: ["投与量", "治療法", "病状", "診断"],
        correctAnswer: "投与量"
     },
     { 
        id: 46,
        question: "epic",
        choices: ["大作", "短編", "随筆", "詩"],
        correctAnswer: "大作"
     },
     { 
        id: 47,
        question: "consistently",
        choices: ["一貫して", "時々", "不規則に", "偶然に"],
        correctAnswer: "一貫して"
     },
     { 
        id: 48,
        question: "believe in",
        choices: ["を信じる", "疑う", "避ける", "拒否する"],
        correctAnswer: "を信じる"
     },
     { 
        id: 49,
        question: "commerce",
        choices: ["商業", "教育", "農業", "医療"],
        correctAnswer: "商業"
     },
     { 
        id: 50,
        question: "segment",
        choices: ["区切り", "全体", "開始", "終了"],
        correctAnswer: "区切り"
     },
     { 
        id: 51,
        question: "plebiscite",
        choices: ["国民投票", "裁判", "条約", "議会"],
        correctAnswer: "国民投票"
     },
     { 
        id: 52,
        question: "pack up",
        choices: ["を荷造りする", "を開封する", "を片付ける", "を放棄する"],
        correctAnswer: "を荷造りする"
     },
     { 
        id: 53,
        question: "make ends meet",
        choices: ["収支を合わせる", "借金をする", "浪費する", "貯金する"],
        correctAnswer: "収支を合わせる"
     },
     { 
        id: 54,
        question: "put A aside",
        choices: ["Aを脇に置く", "Aを持ち続ける", "Aを深く考える", "Aを破棄する"],
        correctAnswer: "Aを脇に置く"
     },
     { 
        id: 55,
        question: "conception",
        choices: ["概念", "誤解", "拒否", "創造"],
        correctAnswer: "概念"
     },
     { 
        id: 56,
        question: "empathy",
        choices: ["共感", "無関心", "疑念", "分析"],
        correctAnswer: "共感"
     },
     { 
        id: 57,
        question: "in hope of",
        choices: ["へ希望を抱いて", "を諦めて", "を批判して", "を恐れて"],
        correctAnswer: "へ希望を抱いて"
     },
     { 
        id: 58,
        question: "conscience",
        choices: ["良心", "犯罪", "無感覚", "虚偽"],
        correctAnswer: "良心"
     },
     { 
        id: 59,
        question: "bias",
        choices: ["偏見", "公平", "無関心", "許容"],
        correctAnswer: "偏見"
     },
     { 
        id: 60,
        question: "organism",
        choices: ["生命体", "鉱物", "化学物質", "機械"],
        correctAnswer: "生命体"
     },
     { 
        id: 61,
        question: "work out",
        choices: ["体を鍛える", "放棄する", "諦める", "失敗する"],
        correctAnswer: "体を鍛える"
     },
     { 
        id: 62,
        question: "enzyme",
        choices: ["酵素", "ビタミン", "細胞", "血液"],
        correctAnswer: "酵素"
     },
     { 
        id: 63,
        question: "circumvent",
        choices: ["出し抜く", "受け入れる", "従う", "断念する"],
        correctAnswer: "出し抜く"
     },
     { 
        id: 64,
        question: "be tidied up",
        choices: ["きちんと片づけた", "乱雑な", "放置された", "汚れた"],
        correctAnswer: "きちんと片づけた"
     },
     { 
        id: 65,
        question: "clot",
        choices: ["固まり", "液体", "気体", "泡"],
        correctAnswer: "固まり"
     },
     { 
        id: 66,
        question: "behavioral",
        choices: ["行動上の", "物理的な", "精神的な", "科学的な"],
        correctAnswer: "行動上の"
     },
     { 
        id: 67,
        question: "foremost",
        choices: ["主要な", "二流の", "不明確な", "不必要な"],
        correctAnswer: "主要な"
     },
     { 
        id: 68,
        question: "catalyst",
        choices: ["触媒", "障害", "中断", "終了"],
        correctAnswer: "触媒"
     },
     { 
        id: 69,
        question: "guilt",
        choices: ["罪悪感", "無罪", "幸福", "成功"],
        correctAnswer: "罪悪感"
     },
     { 
        id: 70,
        question: "smooth over",
        choices: ["丸く収める", "拡大する", "悪化させる", "論争を引き起こす"],
        correctAnswer: "丸く収める"
     },
     { 
        id: 71,
        question: "seemingly",
        choices: ["一見すると", "確実に", "完全に", "断定的に"],
        correctAnswer: "一見すると"
     },
     { 
        id: 72,
        question: "dilemma",
        choices: ["板挟み", "成功", "決断", "安心"],
        correctAnswer: "板挟み"
     },
     { 
        id: 73,
        question: "scarcity",
        choices: ["不足", "過剰", "十分", "安定"],
        correctAnswer: "不足"
     },
     { 
        id: 74,
        question: "counterfeit",
        choices: ["偽造する", "本物にする", "修理する", "合法化する"],
        correctAnswer: "偽造する"
     },
     { 
        id: 75,
        question: "perish",
        choices: ["滅びる", "繁栄する", "増加する", "発展する"],
        correctAnswer: "滅びる"
     },
     { 
        id: 76,
        question: "expulsion",
        choices: ["排除", "受け入れ", "促進", "招待"],
        correctAnswer: "排除"
     },
     { 
        id: 77,
        question: "weed",
        choices: ["雑草", "木", "花", "作物"],
        correctAnswer: "雑草"
     },
     { 
        id: 78,
        question: "roll up",
        choices: ["を巻き上げる", "を平らにする", "を放棄する", "を閉じる"],
        correctAnswer: "を巻き上げる"
     },
     { 
        id: 79,
        question: "obey",
        choices: ["従う", "反抗する", "避ける", "無視する"],
        correctAnswer: "従う"
     },
     { 
        id: 80,
        question: "prey",
        choices: ["獲物", "捕食者", "味方", "保護者"],
        correctAnswer: "獲物"
     },
     { 
        id: 81,
        question: "nobility",
        choices: ["尊さ", "卑しさ", "平凡さ", "冷酷さ"],
        correctAnswer: "尊さ"
     },
     { 
        id: 82,
        question: "inherent",
        choices: ["本来の", "外部の", "人工の", "偶然の"],
        correctAnswer: "本来の"
     },
     { 
        id: 83,
        question: "fertile",
        choices: ["肥沃な", "不毛の", "乾燥した", "貧しい"],
        correctAnswer: "肥沃な"
     },
     { 
        id: 84,
        question: "assimilation",
        choices: ["同化", "拒絶", "独立", "混乱"],
        correctAnswer: "同化"
     },
     { 
        id: 85,
        question: "removal",
        choices: ["除去", "追加", "維持", "拡大"],
        correctAnswer: "除去"
     },
     { 
        id: 86,
        question: "petition",
        choices: ["嘆願", "命令", "抗議", "決定"],
        correctAnswer: "嘆願"
     },
     { 
        id: 87,
        question: "reception",
        choices: ["応接", "送別", "拒絶", "解散"],
        correctAnswer: "応接"
     },
     { 
        id: 88,
        question: "conceal",
        choices: ["隠す", "見せる", "公開する", "強調する"],
        correctAnswer: "隠す"
     },
     { 
        id: 89,
        question: "compliant",
        choices: ["従順な", "反抗的な", "無関心な", "独立した"],
        correctAnswer: "従順な"
     },
     { 
        id: 90,
        question: "residence",
        choices: ["住宅", "公園", "道路", "工場"],
        correctAnswer: "住宅"
     },
     { 
        id: 91,
        question: "protective",
        choices: ["保護的な", "攻撃的な", "無関心な", "破壊的な"],
        correctAnswer: "保護的な"
     },
     { 
        id: 92,
        question: "initiate",
        choices: ["始める", "終える", "避ける", "破棄する"],
        correctAnswer: "始める"
     },
     { 
        id: 93,
        question: "rebellion",
        choices: ["反乱", "服従", "停戦", "合意"],
        correctAnswer: "反乱"
     },
     { 
        id: 94,
        question: "convent",
        choices: ["修道院", "城", "宮殿", "市場"],
        correctAnswer: "修道院"
     },
     { 
        id: 95,
        question: "in person",
        choices: ["直接に", "間接的に", "オンラインで", "匿名で"],
        correctAnswer: "直接に"
     },
     { 
        id: 96,
        question: "sympathize",
        choices: ["同情する", "批判する", "軽蔑する", "疑う"],
        correctAnswer: "同情する"
     },
     { 
        id: 97,
        question: "provoke",
        choices: ["挑発する", "鎮める", "避ける", "和らげる"],
        correctAnswer: "挑発する"
     },
     { 
        id: 98,
        question: "give rise to",
        choices: ["を生じさせる", "を防ぐ", "を排除する", "を抑える"],
        correctAnswer: "を生じさせる"
     },
     { 
        id: 99,
        question: "philosophical",
        choices: ["哲学的な", "実務的な", "感情的な", "軽薄な"],
        correctAnswer: "哲学的な"
     },
     { 
        id: 100,
        question: "reminder",
        choices: ["催促", "命令", "無視", "拒否"],
        correctAnswer: "催促"
     },
     { 
        id: 101,
        question: "disappointment",
        choices: ["失望", "成功", "感動", "希望"],
        correctAnswer: "失望"
     },
     { 
        id: 102,
        question: "ridicule",
        choices: ["あざ笑う", "称賛する", "無視する", "擁護する"],
        correctAnswer: "あざ笑う"
     },
     { 
        id: 103,
        question: "benevolent",
        choices: ["慈悲深い", "冷酷な", "無関心な", "攻撃的な"],
        correctAnswer: "慈悲深い"
     },
     { 
        id: 104,
        question: "communal",
        choices: ["共同の", "個人的な", "秘密の", "独占的な"],
        correctAnswer: "共同の"
     },
     { 
        id: 105,
        question: "compensation",
        choices: ["補償", "罰則", "拒否", "損害"],
        correctAnswer: "補償"
     },
     { 
        id: 106,
        question: "destitute",
        choices: ["貧困の", "裕福な", "成功した", "快適な"],
        correctAnswer: "貧困の"
     },
     { 
        id: 107,
        question: "misfortune",
        choices: ["不幸", "幸運", "成功", "歓喜"],
        correctAnswer: "不幸"
     },
     { 
        id: 108,
        question: "level off",
        choices: ["平らにする", "傾ける", "盛り上げる", "破壊する"],
        correctAnswer: "平らにする"
     },
     { 
        id: 109,
        question: "sinful",
        choices: ["罪深い", "純粋な", "正直な", "清潔な"],
        correctAnswer: "罪深い"
     },
     { 
        id: 110,
        question: "routinely",
        choices: ["日常的に", "偶然に", "珍しく", "突発的に"],
        correctAnswer: "日常的に"
     },
     { 
        id: 111,
        question: "medieval",
        choices: ["中世の", "未来的な", "古代の", "近代の"],
        correctAnswer: "中世の"
     },
     { 
        id: 112,
        question: "appreciation",
        choices: ["感謝", "軽蔑", "無視", "不満"],
        correctAnswer: "感謝"
     },
     { 
        id: 113,
        question: "rule out",
        choices: ["を除外する", "を追加する", "を強調する", "を支持する"],
        correctAnswer: "を除外する"
     },
     { 
        id: 114,
        question: "hang on to",
        choices: ["にしがみつく", "を手放す", "を忘れる", "を捨てる"],
        correctAnswer: "にしがみつく"
     },
     { 
        id: 115,
        question: "exploit",
        choices: ["偉業", "失敗", "疑惑", "悪事"],
        correctAnswer: "偉業"
     },
     { 
        id: 116,
        question: "warrant",
        choices: ["証明書", "契約書", "遺言書", "請求書"],
        correctAnswer: "証明書"
     },
     { 
        id: 117,
        question: "multitude",
        choices: ["大勢", "少数", "単独", "特定の人"],
        correctAnswer: "大勢"
     },
     { 
        id: 118,
        question: "designation",
        choices: ["指定", "削除", "拒絶", "無視"],
        correctAnswer: "指定"
     },
     { 
        id: 119,
        question: "solely",
        choices: ["単独で", "複数で", "共同で", "多数で"],
        correctAnswer: "単独で"
     },
     { 
        id: 120,
        question: "mother-in-law",
        choices: ["義理の母", "実の母", "叔母", "義理の姉"],
        correctAnswer: "義理の母"
     },
     { 
        id: 121,
        question: "captivity",
        choices: ["監禁", "自由", "解放", "逃亡"],
        correctAnswer: "監禁"
     },
     { 
        id: 122,
        question: "forcible",
        choices: ["強制的な", "自然な", "自主的な", "消極的な"],
        correctAnswer: "強制的な"
     },
     { 
        id: 123,
        question: "fall under",
        choices: ["支配下に入る", "独立する", "解放される", "反抗する"],
        correctAnswer: "支配下に入る"
     },
     { 
        id: 124,
        question: "on the rise",
        choices: ["上昇中で", "低下中で", "安定して", "横ばいで"],
        correctAnswer: "上昇中で"
     },
     { 
        id: 125,
        question: "ancestral",
        choices: ["先祖の", "未来の", "若い", "現在の"],
        correctAnswer: "先祖の"
     },
     { 
        id: 126,
        question: "in place of",
        choices: ["の代わりに", "と同時に", "のせいで", "の後に"],
        correctAnswer: "の代わりに"
     },
     { 
        id: 127,
        question: "ruling",
        choices: ["支配的な", "従属的な", "中立的な", "劣勢の"],
        correctAnswer: "支配的な"
     },
     { 
        id: 128,
        question: "favorable",
        choices: ["好ましい", "不利な", "危険な", "嫌われる"],
        correctAnswer: "好ましい"
     },
     { 
        id: 129,
        question: "expedite",
        choices: ["促進する", "遅らせる", "中断する", "放棄する"],
        correctAnswer: "促進する"
     },
     { 
        id: 130,
        question: "low frequency",
        choices: ["低周波", "高周波", "中周波", "変動波"],
        correctAnswer: "低周波"
     },
     { 
        id: 131,
        question: "harsh",
        choices: ["厳しい", "穏やかな", "柔らかい", "優しい"],
        correctAnswer: "厳しい"
     },
     { 
        id: 132,
        question: "repay",
        choices: ["返済する", "借りる", "盗む", "忘れる"],
        correctAnswer: "返済する"
     },
     { 
        id: 133,
        question: "inadequate",
        choices: ["不十分な", "十分な", "完璧な", "適切な"],
        correctAnswer: "不十分な"
     },
     { 
        id: 134,
        question: "pull in",
        choices: ["到着する", "出発する", "遅延する", "故障する"],
        correctAnswer: "到着する"
     },
     { 
        id: 135,
        question: "surgeon",
        choices: ["外科医", "看護師", "薬剤師", "研究者"],
        correctAnswer: "外科医"
     },
     { 
        id: 136,
        question: "tutor",
        choices: ["家庭教師", "教授", "生徒", "学長"],
        correctAnswer: "家庭教師"
     },
     { 
        id: 137,
        question: "surrender",
        choices: ["降伏する", "攻撃する", "逃亡する", "抵抗する"],
        correctAnswer: "降伏する"
     },
     { 
        id: 138,
        question: "undergraduate",
        choices: ["大学生", "教授", "高校生", "院生"],
        correctAnswer: "大学生"
     },
     { 
        id: 139,
        question: "conspicuous",
        choices: ["目立った", "目立たない", "隠れた", "地味な"],
        correctAnswer: "目立った"
     },
     { 
        id: 140,
        question: "comprise",
        choices: ["含む", "排除する", "除外する", "減少する"],
        correctAnswer: "含む"
     },
     { 
        id: 141,
        question: "put forth",
        choices: ["を進める", "を拒否する", "を隠す", "を止める"],
        correctAnswer: "を進める"
     },
     { 
        id: 142,
        question: "spur",
        choices: ["刺激", "停滞", "遅延", "無関心"],
        correctAnswer: "刺激"
     },
     { 
        id: 143,
        question: "renovate",
        choices: ["改修する", "破壊する", "放棄する", "削除する"],
        correctAnswer: "改修する"
     },
     { 
        id: 144,
        question: "idealization",
        choices: ["理想化", "現実化", "批判", "軽視"],
        correctAnswer: "理想化"
     },
     { 
        id: 145,
        question: "integrate",
        choices: ["統合する", "分離する", "排除する", "縮小する"],
        correctAnswer: "統合する"
     },
     { 
        id: 146,
        question: "decay",
        choices: ["腐る", "成長する", "改善する", "修復する"],
        correctAnswer: "腐る"
     },
     { 
        id: 147,
        question: "spite",
        choices: ["悪意", "優しさ", "同情", "公平さ"],
        correctAnswer: "悪意"
     },
     { 
        id: 148,
        question: "cynical",
        choices: ["皮肉な", "誠実な", "楽観的な", "情熱的な"],
        correctAnswer: "皮肉な"
     },
     { 
        id: 149,
        question: "bleak",
        choices: ["吹きさらしの", "快適な", "温暖な", "賑やかな"],
        correctAnswer: "吹きさらしの"
     },
     { 
        id: 150,
        question: "devastation",
        choices: ["荒廃", "発展", "建設", "修復"],
        correctAnswer: "荒廃"
     },
     { 
        id: 151,
        question: "keep up on",
        choices: ["の最新状況を把握する", "を無視する", "を拒絶する", "を後回しにする"],
        correctAnswer: "の最新状況を把握する"
     },
     { 
        id: 152,
        question: "portray",
        choices: ["描く", "破壊する", "無視する", "捨てる"],
        correctAnswer: "描く"
     },
     { 
        id: 153,
        question: "dread",
        choices: ["ひどく怖がる", "楽しみにする", "歓迎する", "期待する"],
        correctAnswer: "ひどく怖がる"
     },
     { 
        id: 154,
        question: "evoke",
        choices: ["呼び起こす", "抑える", "無視する", "拒否する"],
        correctAnswer: "呼び起こす"
     },
     { 
        id: 155,
        question: "come down with",
        choices: ["病気などにかかる", "回復する", "治療する", "避ける"],
        correctAnswer: "病気などにかかる"
     },
     { 
        id: 156,
        question: "crisp",
        choices: ["新鮮な", "古くなった", "濁った", "不快な"],
        correctAnswer: "新鮮な"
     },
     { 
        id: 157,
        question: "loyalty",
        choices: ["忠誠", "裏切り", "無関心", "敵意"],
        correctAnswer: "忠誠"
     },
     { 
        id: 158,
        question: "tyranny",
        choices: ["専制政治", "民主主義", "公平性", "自由"],
        correctAnswer: "専制政治"
     },
     { 
        id: 159,
        question: "minimal",
        choices: ["最小限の", "最大限の", "豊富な", "過剰な"],
        correctAnswer: "最小限の"
     },
     { 
        id: 160,
        question: "adoption",
        choices: ["採用", "拒否", "破棄", "疑問"],
        correctAnswer: "採用"
     },
     { 
        id: 161,
        question: "inheritance",
        choices: ["継承", "放棄", "破壊", "拒絶"],
        correctAnswer: "継承"
     },
     { 
        id: 162,
        question: "reside",
        choices: ["住む", "離れる", "旅行する", "放浪する"],
        correctAnswer: "住む"
     },
     { 
        id: 163,
        question: "blend in",
        choices: ["溶け合う", "対立する", "分離する", "目立つ"],
        correctAnswer: "溶け合う"
     },
     { 
        id: 164,
        question: "moderately",
        choices: ["適度に", "過度に", "不十分に", "極端に"],
        correctAnswer: "適度に"
     },
     { 
        id: 165,
        question: "comprehend",
        choices: ["理解する", "誤解する", "無視する", "混乱する"],
        correctAnswer: "理解する"
     },
     { 
        id: 166,
        question: "formidable",
        choices: ["恐ろしい", "弱い", "無害な", "安心できる"],
        correctAnswer: "恐ろしい"
     },
     { 
        id: 167,
        question: "magnitude",
        choices: ["大きさ", "小ささ", "軽さ", "単純さ"],
        correctAnswer: "大きさ"
     },
     { 
        id: 168,
        question: "sexuality",
        choices: ["性的関心", "無関心", "経済活動", "政治"],
        correctAnswer: "性的関心"
     },
     { 
        id: 169,
        question: "paramount",
        choices: ["最高の", "無関係な", "低レベルの", "不必要な"],
        correctAnswer: "最高の"
     },
     { 
        id: 170,
        question: "discord",
        choices: ["不一致", "調和", "平和", "団結"],
        correctAnswer: "不一致"
     },
     { 
        id: 171,
        question: "continuation",
        choices: ["継続", "中断", "終了", "放棄"],
        correctAnswer: "継続"
     },
     { 
        id: 172,
        question: "violation",
        choices: ["違反", "遵守", "保護", "許可"],
        correctAnswer: "違反"
     },
     { 
        id: 173,
        question: "surpass",
        choices: ["超える", "劣る", "等しい", "減少する"],
        correctAnswer: "超える"
     },
     { 
        id: 174,
        question: "ape",
        choices: ["類人猿", "魚", "鳥", "昆虫"],
        correctAnswer: "類人猿"
     },
     { 
        id: 175,
        question: "geology",
        choices: ["地質学", "生物学", "化学", "物理学"],
        correctAnswer: "地質学"
     },
     { 
        id: 176,
        question: "tonic",
        choices: ["強壮剤", "毒薬", "鎮痛剤", "麻酔薬"],
        correctAnswer: "強壮剤"
     },
     { 
        id: 177,
        question: "scarce",
        choices: ["乏しい", "豊富な", "一般的な", "普通の"],
        correctAnswer: "乏しい"
     },
     { 
        id: 178,
        question: "elevate",
        choices: ["上げる", "下げる", "固定する", "無視する"],
        correctAnswer: "上げる"
     },
     { 
        id: 179,
        question: "stick with",
        choices: ["に固執する", "を捨てる", "を忘れる", "を疑う"],
        correctAnswer: "に固執する"
     },
     { 
        id: 180,
        question: "nitrogen",
        choices: ["窒素", "酸素", "水素", "炭素"],
        correctAnswer: "窒素"
     },
     { 
        id: 181,
        question: "spectacular",
        choices: ["壮観な", "地味な", "普通の", "平凡な"],
        correctAnswer: "壮観な"
     },
     { 
        id: 182,
        question: "epoch",
        choices: ["時代", "瞬間", "過去", "未来"],
        correctAnswer: "時代"
     },
     { 
        id: 183,
        question: "thermal",
        choices: ["熱の", "冷たい", "電気の", "磁気の"],
        correctAnswer: "熱の"
     },
     { 
        id: 184,
        question: "hold up",
        choices: ["持ちこたえる", "崩壊する", "逃げる", "終わる"],
        correctAnswer: "持ちこたえる"
     },
     { 
        id: 185,
        question: "ironically",
        choices: ["皮肉なことに", "明確に", "論理的に", "直感的に"],
        correctAnswer: "皮肉なことに"
     },
     { 
        id: 186,
        question: "instructive",
        choices: ["有益な", "無意味な", "退屈な", "混乱した"],
        correctAnswer: "有益な"
     },
     { 
        id: 187,
        question: "infectious",
        choices: ["伝染性の", "無害な", "安全な", "消毒された"],
        correctAnswer: "伝染性の"
     },
     { 
        id: 188,
        question: "metabolism",
        choices: ["代謝", "消化", "循環", "神経"],
        correctAnswer: "代謝"
     },
     { 
        id: 189,
        question: "weaken",
        choices: ["弱める", "強くする", "改善する", "加速する"],
        correctAnswer: "弱める"
     },
     { 
        id: 190,
        question: "unstable",
        choices: ["不安定な", "安定した", "固まった", "静かな"],
        correctAnswer: "不安定な"
     },
     { 
        id: 191,
        question: "jump at",
        choices: ["に飛びつく", "を拒否する", "を避ける", "を軽視する"],
        correctAnswer: "に飛びつく"
     },
     { 
        id: 192,
        question: "sincere",
        choices: ["誠実な", "偽りの", "軽薄な", "無関心な"],
        correctAnswer: "誠実な"
     },
     { 
        id: 193,
        question: "awkward",
        choices: ["ぎこちない", "自然な", "優雅な", "流暢な"],
        correctAnswer: "ぎこちない"
     },
     { 
        id: 194,
        question: "plead",
        choices: ["懇願する", "命令する", "叱る", "拒絶する"],
        correctAnswer: "懇願する"
     },
     { 
        id: 195,
        question: "multinational",
        choices: ["多国籍の", "国内の", "地域限定の", "単一の"],
        correctAnswer: "多国籍の"
     },
     { 
        id: 196,
        question: "tolerant",
        choices: ["寛容な", "排他的な", "厳格な", "不寛容な"],
        correctAnswer: "寛容な"
     },
     { 
        id: 197,
        question: "wilderness",
        choices: ["荒野", "都市", "庭園", "農地"],
        correctAnswer: "荒野"
     },
     { 
        id: 198,
        question: "stand over",
        choices: ["を監督する", "を放置する", "を中止する", "を急ぐ"],
        correctAnswer: "を監督する"
     },
     { 
        id: 199,
        question: "microbial",
        choices: ["微生物の", "化学的な", "物理的な", "金属の"],
        correctAnswer: "微生物の"
     },
     { 
        id: 200,
        question: "ivory",
        choices: ["象牙", "木材", "鉄", "石"],
        correctAnswer: "象牙"
     },
     { 
        id: 201,
        question: "hold out",
        choices: ["持ちこたえる", "放棄する", "負ける", "諦める"],
        correctAnswer: "持ちこたえる"
     },
     { 
        id: 202,
        question: "prohibit",
        choices: ["禁じる", "許可する", "推奨する", "促進する"],
        correctAnswer: "禁じる"
     },
     { 
        id: 203,
        question: "slaughter",
        choices: ["虐殺", "保護", "救助", "治療"],
        correctAnswer: "虐殺"
     },
     { 
        id: 204,
        question: "disastrous",
        choices: ["悲惨な", "成功した", "楽観的な", "明るい"],
        correctAnswer: "悲惨な"
     },
     { 
        id: 205,
        question: "eruption",
        choices: ["噴火", "沈静", "凍結", "崩壊"],
        correctAnswer: "噴火"
     },
     { 
        id: 206,
        question: "pick over",
        choices: ["吟味して選ぶ", "捨てる", "無視する", "隠す"],
        correctAnswer: "吟味して選ぶ"
     },
     { 
        id: 207,
        question: "under warranty",
        choices: ["保証期間中", "保証なし", "使用不可", "期限切れ"],
        correctAnswer: "保証期間中"
     },
     { 
        id: 208,
        question: "profitable",
        choices: ["利益のある", "損失のある", "無意味な", "価値のない"],
        correctAnswer: "利益のある"
     },
     { 
        id: 209,
        question: "durable",
        choices: ["耐久性のある", "壊れやすい", "一時的な", "柔らかい"],
        correctAnswer: "耐久性のある"
     },
     { 
        id: 210,
        question: "warranty",
        choices: ["保証", "契約", "命令", "請求"],
        correctAnswer: "保証"
     },
     { 
        id: 211,
        question: "dismissal",
        choices: ["解散", "採用", "昇進", "承認"],
        correctAnswer: "解散"
     },
     { 
        id: 212,
        question: "administrative",
        choices: ["運営の", "技術の", "感情的な", "創造的な"],
        correctAnswer: "運営の"
     },
     { 
        id: 213,
        question: "replicate",
        choices: ["複製する", "破壊する", "変更する", "隠す"],
        correctAnswer: "複製する"
     },
     { 
        id: 214,
        question: "sue",
        choices: ["訴える", "守る", "解放する", "無視する"],
        correctAnswer: "訴える"
     },
     { 
        id: 215,
        question: "burglar",
        choices: ["強盗", "警察", "目撃者", "裁判官"],
        correctAnswer: "強盗"
     },
     { 
        id: 216,
        question: "mortality",
        choices: ["死亡率", "出生率", "健康", "繁栄"],
        correctAnswer: "死亡率"
     },
     { 
        id: 217,
        question: "hierarchy",
        choices: ["階層", "平等", "自由", "分裂"],
        correctAnswer: "階層"
     },
     { 
        id: 218,
        question: "feasible",
        choices: ["実行可能な", "不可能な", "難解な", "無意味な"],
        correctAnswer: "実行可能な"
     },
     { 
        id: 219,
        question: "density",
        choices: ["密度", "希薄", "空洞", "透明"],
        correctAnswer: "密度"
     },
     { 
        id: 220,
        question: "squalor",
        choices: ["不潔", "清潔", "快適", "美しい"],
        correctAnswer: "不潔"
     },
     { 
        id: 221,
        question: "cramped",
        choices: ["狭苦しい", "広々とした", "快適な", "自由な"],
        correctAnswer: "狭苦しい"
     },
     { 
        id: 222,
        question: "adverse",
        choices: ["反対の", "同意の", "有利な", "協力的な"],
        correctAnswer: "反対の"
     },
     { 
        id: 223,
        question: "exclusive",
        choices: ["閉鎖的な", "開放的な", "一般的な", "普通の"],
        correctAnswer: "閉鎖的な"
     },
     { 
        id: 224,
        question: "put an end to",
        choices: ["を終わらせる", "を始める", "を継続する", "を強化する"],
        correctAnswer: "を終わらせる"
     },
     { 
        id: 225,
        question: "edible",
        choices: ["食べられる", "毒性のある", "食用不可", "硬すぎる"],
        correctAnswer: "食べられる"
     },
     { 
        id: 226,
        question: "envelop",
        choices: ["包む", "壊す", "分離する", "見せる"],
        correctAnswer: "包む"
     },
     { 
        id: 227,
        question: "sustenance",
        choices: ["食糧", "衣服", "乗り物", "道具"],
        correctAnswer: "食糧"
     },
     { 
        id: 228,
        question: "aptly",
        choices: ["適切に", "不適切に", "無計画に", "無意味に"],
        correctAnswer: "適切に"
     },
     { 
        id: 229,
        question: "premature",
        choices: ["時期尚早の", "適時の", "遅すぎる", "完全な"],
        correctAnswer: "時期尚早の"
     },
     { 
        id: 230,
        question: "clean cut",
        choices: ["きちんとした", "乱雑な", "無秩序な", "粗末な"],
        correctAnswer: "きちんとした"
     },
     { 
        id: 231,
        question: "parasite",
        choices: ["寄生虫", "細菌", "ウイルス", "植物"],
        correctAnswer: "寄生虫"
     },
     { 
        id: 232,
        question: "ugly",
        choices: ["醜い", "美しい", "普通の", "華やかな"],
        correctAnswer: "醜い"
     },
     { 
        id: 233,
        question: "deliberate",
        choices: ["故意の", "偶然の", "自然の", "予想外の"],
        correctAnswer: "故意の"
     },
     { 
        id: 234,
        question: "smear",
        choices: ["塗る", "拭く", "乾かす", "削る"],
        correctAnswer: "塗る"
     },
     { 
        id: 235,
        question: "wedge",
        choices: ["くさび", "円柱", "球体", "立方体"],
        correctAnswer: "くさび"
     },
     { 
        id: 236,
        question: "despicable",
        choices: ["卑劣な", "誠実な", "正直な", "善良な"],
        correctAnswer: "卑劣な"
     },
     { 
        id: 237,
        question: "stab",
        choices: ["刺す", "殴る", "投げる", "蹴る"],
        correctAnswer: "刺す"
     },
     { 
        id: 238,
        question: "anecdotal",
        choices: ["逸話の", "科学的な", "正確な", "歴史的な"],
        correctAnswer: "逸話の"
     },
     { 
        id: 239,
        question: "whitewash",
        choices: ["しっくい", "絵の具", "木材", "鉄"],
        correctAnswer: "しっくい"
     },
     { 
        id: 240,
        question: "appalling",
        choices: ["ぞっとするような", "安心する", "魅力的な", "楽しい"],
        correctAnswer: "ぞっとするような"
     },
     { 
        id: 241,
        question: "fraternity",
        choices: ["友愛", "敵意", "孤独", "対立"],
        correctAnswer: "友愛"
     },
     { 
        id: 242,
        question: "supplant",
        choices: ["取って代わる", "維持する", "削除する", "保存する"],
        correctAnswer: "取って代わる"
     },
     { 
        id: 243,
        question: "multiply",
        choices: ["掛け算する", "割り算する", "引き算する", "足し算する"],
        correctAnswer: "掛け算する"
     },
     { 
        id: 244,
        question: "intrinsic",
        choices: ["本質的な", "表面的な", "不要な", "追加的な"],
        correctAnswer: "本質的な"
     },
     { 
        id: 245,
        question: "diagnosis",
        choices: ["診断", "治療", "予防", "回復"],
        correctAnswer: "診断"
     },
     { 
        id: 246,
        question: "cosmic",
        choices: ["宇宙の", "地球の", "海の", "地下の"],
        correctAnswer: "宇宙の"
     },
     { 
        id: 247,
        question: "progressive",
        choices: ["進歩的な", "保守的な", "静的な", "逆行的な"],
        correctAnswer: "進歩的な"
     },
     { 
        id: 248,
        question: "willingness",
        choices: ["意欲", "無関心", "嫌悪", "拒絶"],
        correctAnswer: "意欲"
     },
     { 
        id: 249,
        question: "strictly",
        choices: ["厳密に", "適当に", "優しく", "ゆるく"],
        correctAnswer: "厳密に"
     },
     { 
        id: 250,
        question: "integrity",
        choices: ["誠実さ", "不正", "欺瞞", "裏切り"],
        correctAnswer: "誠実さ"
     },
     { 
        id: 251,
        question: "microscope",
        choices: ["顕微鏡", "望遠鏡", "カメラ", "拡大鏡"],
        correctAnswer: "顕微鏡"
     },
     { 
        id: 252,
        question: "array",
        choices: ["整列させる", "散乱させる", "破壊する", "混乱させる"],
        correctAnswer: "整列させる"
     },
     { 
        id: 253,
        question: "evade",
        choices: ["避ける", "追う", "捕まえる", "固執する"],
        correctAnswer: "避ける"
     },
     { 
        id: 254,
        question: "pile in",
        choices: ["どっと中に入る", "出て行く", "静かに入る", "順番に並ぶ"],
        correctAnswer: "どっと中に入る"
     },
     { 
        id: 255,
        question: "overwhelm",
        choices: ["圧倒する", "支配する", "無視する", "軽視する"],
        correctAnswer: "圧倒する"
     },
     { 
        id: 256,
        question: "hunch",
        choices: ["直感", "計画", "理論", "証拠"],
        correctAnswer: "直感"
     },
     { 
        id: 257,
        question: "morbid",
        choices: ["病的な", "健康的な", "活発な", "陽気な"],
        correctAnswer: "病的な"
     },
     { 
        id: 258,
        question: "forensic",
        choices: ["法廷の", "科学的な", "心理的な", "経済的な"],
        correctAnswer: "法廷の"
     },
     { 
        id: 259,
        question: "convict",
        choices: ["有罪とする", "無罪にする", "保釈する", "釈放する"],
        correctAnswer: "有罪とする"
     },
     { 
        id: 260,
        question: "ply",
        choices: ["精を出す", "怠ける", "避ける", "忘れる"],
        correctAnswer: "精を出す"
     },
     { 
        id: 261,
        question: "forefront",
        choices: ["最前部", "後方", "中央", "側面"],
        correctAnswer: "最前部"
     },
     { 
        id: 262,
        question: "unconscious",
        choices: ["無意識の", "意識的な", "明瞭な", "論理的な"],
        correctAnswer: "無意識の"
     },
     { 
        id: 263,
        question: "staunch",
        choices: ["堅い", "柔らかい", "脆弱な", "不安定な"],
        correctAnswer: "堅い"
     },
     { 
        id: 264,
        question: "exploration",
        choices: ["探査", "放棄", "破壊", "消滅"],
        correctAnswer: "探査"
     },
     { 
        id: 265,
        question: "hasty",
        choices: ["急ぐ", "慎重な", "遅い", "確実な"],
        correctAnswer: "急ぐ"
     },
     { 
        id: 266,
        question: "hostile",
        choices: ["敵意のある", "友好的な", "協力的な", "穏やかな"],
        correctAnswer: "敵意のある"
     },
     { 
        id: 267,
        question: "pile up",
        choices: ["を積み上げる", "を削る", "を減らす", "を破壊する"],
        correctAnswer: "を積み上げる"
     },
     { 
        id: 268,
        question: "provider",
        choices: ["生産者", "消費者", "買い手", "受取人"],
        correctAnswer: "生産者"
     },
     { 
        id: 269,
        question: "prestige",
        choices: ["名声", "無名", "悪評", "無視"],
        correctAnswer: "名声"
     },
     { 
        id: 270,
        question: "liver",
        choices: ["肝臓", "腎臓", "心臓", "肺"],
        correctAnswer: "肝臓"
     },
     { 
        id: 271,
        question: "catch up",
        choices: ["遅れを取り戻す", "遅れる", "停滞する", "諦める"],
        correctAnswer: "遅れを取り戻す"
     },
     { 
        id: 272,
        question: "reimbursement",
        choices: ["返済", "借金", "投資", "支出"],
        correctAnswer: "返済"
     },
     { 
        id: 273,
        question: "resent",
        choices: ["憤る", "感謝する", "祝う", "楽しむ"],
        correctAnswer: "憤る"
     },
     { 
        id: 274,
        question: "frankly",
        choices: ["率直に", "曖昧に", "間接的に", "慎重に"],
        correctAnswer: "率直に"
     },
     { 
        id: 275,
        question: "envious",
        choices: ["羨ましい", "満足している", "無関心な", "気にしない"],
        correctAnswer: "羨ましい"
     },
     { 
        id: 276,
        question: "face off",
        choices: ["対決する", "逃げる", "妥協する", "避ける"],
        correctAnswer: "対決する"
     },
     { 
        id: 277,
        question: "fraction",
        choices: ["分数", "整数", "無限", "負数"],
        correctAnswer: "分数"
     },
     { 
        id: 278,
        question: "browse",
        choices: ["拾い読みする", "熟読する", "暗記する", "作成する"],
        correctAnswer: "拾い読みする"
     },
     { 
        id: 279,
        question: "seal",
        choices: ["密閉する", "開ける", "破壊する", "分解する"],
        correctAnswer: "密閉する"
     },
     { 
        id: 280,
        question: "norm",
        choices: ["規範", "例外", "矛盾", "混乱"],
        correctAnswer: "規範"
     },
     { 
        id: 281,
        question: "naval",
        choices: ["海軍の", "陸軍の", "空軍の", "宇宙軍の"],
        correctAnswer: "海軍の"
     },
     { 
        id: 282,
        question: "speak for",
        choices: ["を代弁する", "を沈黙する", "を妨害する", "を批判する"],
        correctAnswer: "を代弁する"
     },
     { 
        id: 283,
        question: "versatile",
        choices: ["多才な", "単純な", "不器用な", "限定的な"],
        correctAnswer: "多才な"
     },
     { 
        id: 284,
        question: "surveillance",
        choices: ["監視", "放置", "無視", "自由"],
        correctAnswer: "監視"
     },
     { 
        id: 285,
        question: "submarine",
        choices: ["潜水艦", "戦闘機", "戦車", "宇宙船"],
        correctAnswer: "潜水艦"
     },
     { 
        id: 286,
        question: "grain",
        choices: ["穀物", "野菜", "果物", "魚"],
        correctAnswer: "穀物"
     },
     { 
        id: 287,
        question: "prediction",
        choices: ["予測", "回想", "無視", "記録"],
        correctAnswer: "予測"
     },
     { 
        id: 288,
        question: "rust",
        choices: ["錆び", "磨き", "光沢", "新鮮さ"],
        correctAnswer: "錆び"
     },
     { 
        id: 289,
        question: "consult",
        choices: ["相談する", "命令する", "批判する", "避ける"],
        correctAnswer: "相談する"
     },
     { 
        id: 290,
        question: "pill",
        choices: ["丸薬", "粉薬", "液体薬", "注射"],
        correctAnswer: "丸薬"
     },
     { 
        id: 291,
        question: "potent",
        choices: ["効能のある", "無効な", "鈍い", "薄い"],
        correctAnswer: "効能のある"
     },
     { 
        id: 292,
        question: "esoteric",
        choices: ["秘儀の", "一般的な", "明白な", "日常的な"],
        correctAnswer: "秘儀の"
     },
     { 
        id: 293,
        question: "remarkably",
        choices: ["著しく", "少し", "まったく", "普通に"],
        correctAnswer: "著しく"
     },
     { 
        id: 294,
        question: "inspiration",
        choices: ["ひらめき", "混乱", "遅延", "計算"],
        correctAnswer: "ひらめき"
     },
     { 
        id: 295,
        question: "comparable",
        choices: ["比較できる", "比較できない", "同じ", "不変の"],
        correctAnswer: "比較できる"
     },
     { 
        id: 296,
        question: "supplier",
        choices: ["供給者", "消費者", "管理者", "購入者"],
        correctAnswer: "供給者"
     },
     { 
        id: 297,
        question: "supervisor",
        choices: ["上司", "部下", "新入社員", "顧客"],
        correctAnswer: "上司"
     },
     { 
        id: 298,
        question: "peg",
        choices: ["くぎ", "ひも", "バネ", "ガラス"],
        correctAnswer: "くぎ"
     },
     { 
        id: 299,
        question: "regardless of",
        choices: ["に関係なく", "に応じて", "に対して", "に従って"],
        correctAnswer: "に関係なく"
     },
     { 
        id: 300,
        question: "tighten",
        choices: ["締める", "緩める", "外す", "曲げる"],
        correctAnswer: "締める"
     },
     { 
        id: 301,
        question: "force down",
        choices: ["を無理やり飲み込む", "を捨てる", "を削減する", "を売る"],
        correctAnswer: "を無理やり飲み込む"
     },
     { 
        id: 302,
        question: "ambitious",
        choices: ["野心的な", "消極的な", "無関心な", "受動的な"],
        correctAnswer: "野心的な"
     },
     { 
        id: 303,
        question: "quest",
        choices: ["探求", "破壊", "回避", "拒否"],
        correctAnswer: "探求"
     },
     { 
        id: 304,
        question: "see through",
        choices: ["を見抜く", "を信じる", "を守る", "を避ける"],
        correctAnswer: "を見抜く"
     },
     { 
        id: 305,
        question: "mundane",
        choices: ["平凡な", "特別な", "珍しい", "幻想的な"],
        correctAnswer: "平凡な"
     },
     { 
        id: 306,
        question: "stay in touch with",
        choices: ["と連絡を取り続ける", "を忘れる", "を拒否する", "を失う"],
        correctAnswer: "と連絡を取り続ける"
     },
     { 
        id: 307,
        question: "logistics",
        choices: ["調達路", "停滞", "破棄", "浪費"],
        correctAnswer: "調達路"
     },
     { 
        id: 308,
        question: "vicinity",
        choices: ["近所", "遠方", "海外", "未開地"],
        correctAnswer: "近所"
     },
     { 
        id: 309,
        question: "throw off",
        choices: ["を投げ捨てる", "を拾う", "を保管する", "を受け入れる"],
        correctAnswer: "を投げ捨てる"
     },
     { 
        id: 310,
        question: "eternal",
        choices: ["永遠の", "一時的な", "短期間の", "限られた"],
        correctAnswer: "永遠の"
     },
     { 
        id: 311,
        question: "mandatory",
        choices: ["強制的な", "任意の", "自由な", "例外的な"],
        correctAnswer: "強制的な"
     },
     { 
        id: 312,
        question: "diversity",
        choices: ["多様性", "単一性", "独占", "単調さ"],
        correctAnswer: "多様性"
     },
     { 
        id: 313,
        question: "go under",
        choices: ["失敗する", "成功する", "安定する", "復活する"],
        correctAnswer: "失敗する"
     },
     { 
        id: 314,
        question: "not surprisingly",
        choices: ["当たり前の事だが", "驚くべきことに", "例外的に", "偶然に"],
        correctAnswer: "当たり前の事だが"
     },
     { 
        id: 315,
        question: "linguistic",
        choices: ["言語学の", "数学の", "物理の", "化学の"],
        correctAnswer: "言語学の"
     },
     { 
        id: 316,
        question: "availability",
        choices: ["可用性", "不可能性", "制限", "禁止"],
        correctAnswer: "可用性"
     },
     { 
        id: 317,
        question: "latitude",
        choices: ["緯度", "経度", "標高", "海抜"],
        correctAnswer: "緯度"
     },
     { 
        id: 318,
        question: "equator",
        choices: ["赤道", "北極", "南極", "経線"],
        correctAnswer: "赤道"
     },
     { 
        id: 319,
        question: "boast",
        choices: ["自慢する", "隠す", "忘れる", "譲る"],
        correctAnswer: "自慢する"
     },
     { 
        id: 320,
        question: "rainfall",
        choices: ["降雨量", "温度", "風速", "湿度"],
        correctAnswer: "降雨量"
     },
     { 
        id: 321,
        question: "diverse",
        choices: ["多様な", "単一の", "限定的な", "特殊な"],
        correctAnswer: "多様な"
     },
     { 
        id: 322,
        question: "barren",
        choices: ["実を結ばない", "豊かな", "成長する", "生産的な"],
        correctAnswer: "実を結ばない"
     },
     { 
        id: 323,
        question: "brink",
        choices: ["瀬戸際", "成功", "安定", "楽観"],
        correctAnswer: "瀬戸際"
     },
     { 
        id: 324,
        question: "take on",
        choices: ["を雇う", "を解雇する", "を拒否する", "を避ける"],
        correctAnswer: "を雇う"
     },
     { 
        id: 325,
        question: "turmoil",
        choices: ["騒動", "平和", "静寂", "調和"],
        correctAnswer: "騒動"
     },
     { 
        id: 326,
        question: "brutality",
        choices: ["残忍性", "優しさ", "慈悲", "温厚さ"],
        correctAnswer: "残忍性"
     },
     { 
        id: 327,
        question: "prosper",
        choices: ["繁栄する", "衰退する", "停滞する", "縮小する"],
        correctAnswer: "繁栄する"
     },
     { 
        id: 328,
        question: "successive",
        choices: ["連続する", "途切れる", "単発の", "例外的な"],
        correctAnswer: "連続する"
     },
     { 
        id: 329,
        question: "mold",
        choices: ["鋳型", "液体", "布地", "木材"],
        correctAnswer: "鋳型"
     },
     { 
        id: 330,
        question: "fall through",
        choices: ["失敗に終わる", "成功する", "発展する", "前進する"],
        correctAnswer: "失敗に終わる"
     },
     { 
        id: 331,
        question: "conform to",
        choices: ["に順応する", "に反抗する", "を避ける", "を無視する"],
        correctAnswer: "に順応する"
     },
     { 
        id: 332,
        question: "stability",
        choices: ["安定", "不安定", "変動", "崩壊"],
        correctAnswer: "安定"
     },
     { 
        id: 333,
        question: "insistence",
        choices: ["主張", "疑問", "放棄", "撤回"],
        correctAnswer: "主張"
     },
     { 
        id: 334,
        question: "toxic",
        choices: ["有毒な", "無害な", "安全な", "健康的な"],
        correctAnswer: "有毒な"
     },
     { 
        id: 335,
        question: "stand up to",
        choices: ["に抵抗する", "に従う", "を避ける", "を無視する"],
        correctAnswer: "に抵抗する"
     },
     { 
        id: 336,
        question: "excel",
        choices: ["勝る", "劣る", "等しい", "失敗する"],
        correctAnswer: "勝る"
     },
     { 
        id: 337,
        question: "spectrum",
        choices: ["波長分布", "電流", "温度", "圧力"],
        correctAnswer: "波長分布"
     },
     { 
        id: 338,
        question: "detrimental",
        choices: ["有害な", "有益な", "安全な", "無害な"],
        correctAnswer: "有害な"
     },
     { 
        id: 339,
        question: "modulate",
        choices: ["調整する", "破壊する", "固定する", "無視する"],
        correctAnswer: "調整する"
     },
     { 
        id: 340,
        question: "moderate",
        choices: ["適度な", "過剰な", "不足した", "極端な"],
        correctAnswer: "適度な"
     },
     { 
        id: 341,
        question: "downright",
        choices: ["徹底的な", "曖昧な", "消極的な", "適当な"],
        correctAnswer: "徹底的な"
     },
     { 
        id: 342,
        question: "bring off",
        choices: ["を成し遂げる", "を失敗する", "を遅らせる", "を中断する"],
        correctAnswer: "を成し遂げる"
     },
     { 
        id: 343,
        question: "hedge",
        choices: ["垣根", "道", "橋", "扉"],
        correctAnswer: "垣根"
     },
     { 
        id: 344,
        question: "fall for",
        choices: ["に夢中になる", "を避ける", "を拒否する", "を疑う"],
        correctAnswer: "に夢中になる"
     },
     { 
        id: 345,
        question: "interact",
        choices: ["相互作用する", "無視する", "対立する", "避ける"],
        correctAnswer: "相互作用する"
     },
     { 
        id: 346,
        question: "correctly",
        choices: ["正しく", "誤って", "適当に", "いい加減に"],
        correctAnswer: "正しく"
     },
     { 
        id: 347,
        question: "precision",
        choices: ["正確さ", "不正確さ", "適当さ", "不安定さ"],
        correctAnswer: "正確さ"
     },
     { 
        id: 348,
        question: "synthesis",
        choices: ["統合", "分解", "除外", "分裂"],
        correctAnswer: "統合"
     },
     { 
        id: 349,
        question: "accessible",
        choices: ["行きやすい", "遠い", "閉鎖的な", "困難な"],
        correctAnswer: "行きやすい"
     },
     { 
        id: 350,
        question: "register for",
        choices: ["に登録する", "を削除する", "を中止する", "を避ける"],
        correctAnswer: "に登録する"
     },
     { 
        id: 351,
        question: "foresee",
        choices: ["予見する", "無視する", "忘れる", "拒否する"],
        correctAnswer: "予見する"
     },
     { 
        id: 352,
        question: "optimistic",
        choices: ["楽観的な", "悲観的な", "冷淡な", "疑い深い"],
        correctAnswer: "楽観的な"
     },
     { 
        id: 353,
        question: "envision",
        choices: ["想像する", "拒否する", "見逃す", "忘れる"],
        correctAnswer: "想像する"
     },
     { 
        id: 354,
        question: "resistant",
        choices: ["抵抗する", "従順な", "脆弱な", "無関心な"],
        correctAnswer: "抵抗する"
     },
     { 
        id: 355,
        question: "weigh on",
        choices: ["の重荷になる", "を支える", "を軽くする", "を増やす"],
        correctAnswer: "の重荷になる"
     },
     { 
        id: 356,
        question: "allay",
        choices: ["和らげる", "悪化させる", "強める", "加速する"],
        correctAnswer: "和らげる"
     },
     { 
        id: 357,
        question: "feel for",
        choices: ["同情する", "無視する", "怒る", "軽蔑する"],
        correctAnswer: "同情する"
     },
     { 
        id: 358,
        question: "eradicate",
        choices: ["根絶する", "促進する", "増やす", "保存する"],
        correctAnswer: "根絶する"
     },
     { 
        id: 359,
        question: "unintended",
        choices: ["意図しない", "計画的な", "確実な", "予定通りの"],
        correctAnswer: "意図しない"
     },
     { 
        id: 360,
        question: "supervision",
        choices: ["監督", "服従", "放置", "混乱"],
        correctAnswer: "監督"
     },
     { 
        id: 361,
        question: "play out",
        choices: ["最後まで演じる", "中止する", "途中で諦める", "無視する"],
        correctAnswer: "最後まで演じる"
     },
     { 
        id: 362,
        question: "mentally",
        choices: ["精神的に", "肉体的に", "視覚的に", "経済的に"],
        correctAnswer: "精神的に"
     },
     { 
        id: 363,
        question: "dent",
        choices: ["へこみ", "傷", "穴", "塊"],
        correctAnswer: "へこみ"
     },
     { 
        id: 364,
        question: "noticeable",
        choices: ["目立つ", "隠れる", "曖昧な", "不明瞭な"],
        correctAnswer: "目立つ"
     },
     { 
        id: 365,
        question: "rebellious",
        choices: ["反抗的な", "従順な", "静かな", "協力的な"],
        correctAnswer: "反抗的な"
     },
     { 
        id: 366,
        question: "outrageous",
        choices: ["無法な", "合法的な", "控えめな", "穏やかな"],
        correctAnswer: "無法な"
     },
     { 
        id: 367,
        question: "nasty",
        choices: ["不快な", "心地よい", "楽しい", "優雅な"],
        correctAnswer: "不快な"
     },
     { 
        id: 368,
        question: "pull over",
        choices: ["車を止める", "車を発進させる", "車を壊す", "車を飛ばす"],
        correctAnswer: "車を止める"
     },
     { 
        id: 369,
        question: "greenhouse",
        choices: ["温室", "森林", "洞窟", "湖"],
        correctAnswer: "温室"
     },
     { 
        id: 370,
        question: "bandage",
        choices: ["包帯", "注射", "薬品", "手術"],
        correctAnswer: "包帯"
     },
     { 
        id: 371,
        question: "pat",
        choices: ["軽くたたく", "強く押す", "握る", "擦る"],
        correctAnswer: "軽くたたく"
     },
     { 
        id: 372,
        question: "soak",
        choices: ["浸す", "乾かす", "こする", "吹く"],
        correctAnswer: "浸す"
     },
     { 
        id: 373,
        question: "eventual",
        choices: ["最終的な", "一時的な", "不確実な", "例外的な"],
        correctAnswer: "最終的な"
     },
     { 
        id: 374,
        question: "aim to",
        choices: ["するつもりである", "避ける", "放棄する", "無視する"],
        correctAnswer: "するつもりである"
     },
     { 
        id: 375,
        question: "gross",
        choices: ["全体の", "部分的な", "細かい", "個別の"],
        correctAnswer: "全体の"
     },
     { 
        id: 376,
        question: "affluent",
        choices: ["裕福な", "貧しい", "普通の", "制限された"],
        correctAnswer: "裕福な"
     },
     { 
        id: 377,
        question: "imperfect",
        choices: ["不完全", "完璧な", "優れた", "理想的な"],
        correctAnswer: "不完全"
     },
     { 
        id: 378,
        question: "measurement",
        choices: ["測定", "推測", "見積もり", "概念"],
        correctAnswer: "測定"
     },
     { 
        id: 379,
        question: "substantially",
        choices: ["実質的に", "わずかに", "誤って", "部分的に"],
        correctAnswer: "実質的に"
     },
     { 
        id: 380,
        question: "disruptive",
        choices: ["破壊的な", "建設的な", "調和のとれた", "穏やかな"],
        correctAnswer: "破壊的な"
     },
     { 
        id: 381,
        question: "inmate",
        choices: ["収容者", "看守", "訪問者", "教師"],
        correctAnswer: "収容者"
     },
     { 
        id: 382,
        question: "differently",
        choices: ["異なって", "同じように", "明確に", "控えめに"],
        correctAnswer: "異なって"
     },
     { 
        id: 383,
        question: "wrap up",
        choices: ["纏める", "分解する", "延長する", "破壊する"],
        correctAnswer: "纏める"
     },
     { 
        id: 384,
        question: "childbirth",
        choices: ["出産", "死亡", "成長", "結婚"],
        correctAnswer: "出産"
     },
     { 
        id: 385,
        question: "tell on",
        choices: ["言いつける", "隠す", "励ます", "褒める"],
        correctAnswer: "言いつける"
     },
     { 
        id: 386,
        question: "midwife",
        choices: ["助産婦", "看護師", "薬剤師", "外科医"],
        correctAnswer: "助産婦"
     },
     { 
        id: 387,
        question: "predecessor",
        choices: ["前任者", "後継者", "部下", "管理者"],
        correctAnswer: "前任者"
     },
     { 
        id: 388,
        question: "discomfort",
        choices: ["不快感", "安心", "満足", "幸運"],
        correctAnswer: "不快感"
     },
     { 
        id: 389,
        question: "pull through",
        choices: ["を乗り越える", "を諦める", "を避ける", "を失敗する"],
        correctAnswer: "を乗り越える"
     },
     { 
        id: 390,
        question: "heal",
        choices: ["癒す", "悪化させる", "破壊する", "見捨てる"],
        correctAnswer: "癒す"
     },
     { 
        id: 391,
        question: "embarrassed",
        choices: ["恥ずかしい", "誇らしい", "自信に満ちた", "落ち着いた"],
        correctAnswer: "恥ずかしい"
     },
     { 
        id: 392,
        question: "herd",
        choices: ["群れ", "個体", "単独", "捕食者"],
        correctAnswer: "群れ"
     },
     { 
        id: 393,
        question: "suburban",
        choices: ["郊外の", "都市の", "田舎の", "工業の"],
        correctAnswer: "郊外の"
     },
     { 
        id: 394,
        question: "placid",
        choices: ["穏やかな", "荒々しい", "冷たい", "動揺した"],
        correctAnswer: "穏やかな"
     },
     { 
        id: 395,
        question: "bounce back",
        choices: ["持ち直す", "倒れる", "消える", "止まる"],
        correctAnswer: "持ち直す"
     },
     { 
        id: 396,
        question: "bliss",
        choices: ["至福", "悲劇", "恐怖", "混乱"],
        correctAnswer: "至福"
     },
     { 
        id: 397,
        question: "cross out",
        choices: ["線を引いて消す", "追加する", "強調する", "保存する"],
        correctAnswer: "線を引いて消す"
     },
     { 
        id: 398,
        question: "entice",
        choices: ["誘惑する", "避ける", "警告する", "冷静にする"],
        correctAnswer: "誘惑する"
     },
     { 
        id: 399,
        question: "provocative",
        choices: ["挑発的な", "保守的な", "温厚な", "控えめな"],
        correctAnswer: "挑発的な"
     },
     { 
        id: 400,
        question: "passionate",
        choices: ["情熱的な", "冷淡な", "無関心な", "消極的な"],
        correctAnswer: "情熱的な"
     },
     { 
        id: 401,
        question: "feminist",
        choices: ["男女同権主義者", "差別主義者", "独裁者", "自由主義者"],
        correctAnswer: "男女同権主義者"
     },
     { 
        id: 402,
        question: "extract",
        choices: ["抜き取る", "埋め込む", "隠す", "補う"],
        correctAnswer: "抜き取る"
     },
     { 
        id: 403,
        question: "elicit",
        choices: ["引き出す", "抑える", "拒否する", "削減する"],
        correctAnswer: "引き出す"
     },
     { 
        id: 404,
        question: "deprivation",
        choices: ["剥奪", "提供", "寄付", "補償"],
        correctAnswer: "剥奪"
     },
     { 
        id: 405,
        question: "confession",
        choices: ["告白", "否定", "隠蔽", "嘘"],
        correctAnswer: "告白"
     },
     { 
        id: 406,
        question: "cascade",
        choices: ["小滝", "大河", "湖", "池"],
        correctAnswer: "小滝"
     },
     { 
        id: 407,
        question: "erroneous",
        choices: ["誤った", "正確な", "明確な", "真実の"],
        correctAnswer: "誤った"
     },
     { 
        id: 408,
        question: "pass off",
        choices: ["次第に消える", "激しくなる", "拡大する", "明確になる"],
        correctAnswer: "次第に消える"
     },
     { 
        id: 409,
        question: "testimony",
        choices: ["証言", "推測", "憶測", "仮説"],
        correctAnswer: "証言"
     },
     { 
        id: 410,
        question: "paranoia",
        choices: ["妄想症", "冷静さ", "理性", "判断力"],
        correctAnswer: "妄想症"
     },
     { 
        id: 411,
        question: "gutter",
        choices: ["側溝", "屋根", "橋", "道路"],
        correctAnswer: "側溝"
     },
     { 
        id: 412,
        question: "settle up",
        choices: ["を支払う", "を借りる", "を免除する", "を隠す"],
        correctAnswer: "を支払う"
     },
     { 
        id: 413,
        question: "denounce",
        choices: ["非難する", "賞賛する", "無視する", "擁護する"],
        correctAnswer: "非難する"
     },
     { 
        id: 414,
        question: "tacit",
        choices: ["暗黙の", "明示的な", "声高な", "誤解された"],
        correctAnswer: "暗黙の"
     },
     { 
        id: 415,
        question: "consent",
        choices: ["同意する", "拒否する", "疑う", "反対する"],
        correctAnswer: "同意する"
     },
     { 
        id: 416,
        question: "witch",
        choices: ["魔女", "王女", "巫女", "天使"],
        correctAnswer: "魔女"
     },
     { 
        id: 417,
        question: "give in",
        choices: ["降伏する", "抵抗する", "逃げる", "挑戦する"],
        correctAnswer: "降伏する"
     },
     { 
        id: 418,
        question: "subdue",
        choices: ["鎮圧する", "奨励する", "強化する", "拡散する"],
        correctAnswer: "鎮圧する"
     },
     { 
        id: 419,
        question: "coerce",
        choices: ["強制する", "説得する", "要求する", "依頼する"],
        correctAnswer: "強制する"
     },
     { 
        id: 420,
        question: "crusade",
        choices: ["聖戦", "革命", "選挙", "協定"],
        correctAnswer: "聖戦"
     },
     { 
        id: 421,
        question: "allegedly",
        choices: ["申し立てによると", "確実に", "疑わしく", "誤って"],
        correctAnswer: "申し立てによると"
     },
     { 
        id: 422,
        question: "shady",
        choices: ["陰になった", "明るい", "開けた", "透明な"],
        correctAnswer: "陰になった"
     },
     { 
        id: 423,
        question: "intimidation",
        choices: ["脅迫", "交渉", "賞賛", "許可"],
        correctAnswer: "脅迫"
     },
     { 
        id: 424,
        question: "deceit",
        choices: ["詐欺", "誠実さ", "透明性", "正義"],
        correctAnswer: "詐欺"
     },
     { 
        id: 425,
        question: "ail",
        choices: ["苦しめる", "喜ばせる", "守る", "回復する"],
        correctAnswer: "苦しめる"
     },
     { 
        id: 426,
        question: "assert",
        choices: ["主張する", "否定する", "誤る", "無視する"],
        correctAnswer: "主張する"
     },
     { 
        id: 427,
        question: "rampage",
        choices: ["大暴れ", "冷静さ", "慎重さ", "平和"],
        correctAnswer: "大暴れ"
     },
     { 
        id: 428,
        question: "mentor",
        choices: ["指導者", "学習者", "敵対者", "観察者"],
        correctAnswer: "指導者"
     },
     { 
        id: 429,
        question: "confrontation",
        choices: ["対決", "協力", "和解", "中立"],
        correctAnswer: "対決"
     },
     { 
        id: 430,
        question: "presidency",
        choices: ["大統領職", "議員職", "市民権", "公務"],
        correctAnswer: "大統領職"
     },
     { 
        id: 431,
        question: "brush off",
        choices: ["をすげなく断る", "を歓迎する", "を調査する", "を保存する"],
        correctAnswer: "をすげなく断る"
     },
     { 
        id: 432,
        question: "purge",
        choices: ["粛清する", "拡張する", "保存する", "緩和する"],
        correctAnswer: "粛清する"
     },
     { 
        id: 433,
        question: "dire",
        choices: ["悲惨な", "楽観的な", "祝福された", "明るい"],
        correctAnswer: "悲惨な"
     },
     { 
        id: 434,
        question: "unethical",
        choices: ["非倫理的な", "道徳的な", "公平な", "誠実な"],
        correctAnswer: "非倫理的な"
     },
     { 
        id: 435,
        question: "neutral",
        choices: ["中立の", "偏った", "攻撃的な", "敵対的な"],
        correctAnswer: "中立の"
     },
     { 
        id: 436,
        question: "abominable",
        choices: ["忌まわしい", "素晴らしい", "魅力的な", "称賛される"],
        correctAnswer: "忌まわしい"
     },
     { 
        id: 437,
        question: "stick up for",
        choices: ["を支持する", "を非難する", "を拒絶する", "を攻撃する"],
        correctAnswer: "を支持する"
     },
     { 
        id: 438,
        question: "exquisite",
        choices: ["絶妙な", "普通の", "粗雑な", "平凡な"],
        correctAnswer: "絶妙な"
     },
     { 
        id: 439,
        question: "incremental",
        choices: ["増加の", "減少の", "停滞の", "逆転の"],
        correctAnswer: "増加の"
     },
     { 
        id: 440,
        question: "validity",
        choices: ["有効性", "無効性", "曖昧さ", "疑念"],
        correctAnswer: "有効性"
     },
     { 
        id: 441,
        question: "discrepancy",
        choices: ["不一致", "一致", "整合", "調和"],
        correctAnswer: "不一致"
     },
     { 
        id: 442,
        question: "fix up",
        choices: ["を修理する", "を破壊する", "を放棄する", "を変更する"],
        correctAnswer: "を修理する"
     },
     { 
        id: 443,
        question: "momentum",
        choices: ["運動量", "静止", "停滞", "減速"],
        correctAnswer: "運動量"
     },
     { 
        id: 444,
        question: "rue",
        choices: ["後悔する", "満足する", "祝う", "誇る"],
        correctAnswer: "後悔する"
     },
     { 
        id: 445,
        question: "nutrient",
        choices: ["栄養素", "毒素", "不純物", "廃棄物"],
        correctAnswer: "栄養素"
     },
     { 
        id: 446,
        question: "absorption",
        choices: ["吸収", "蒸発", "分離", "消失"],
        correctAnswer: "吸収"
     },
     { 
        id: 447,
        question: "physically",
        choices: ["肉体的に", "精神的に", "理論的に", "抽象的に"],
        correctAnswer: "肉体的に"
     },
     { 
        id: 448,
        question: "thrive",
        choices: ["繁栄する", "衰退する", "停止する", "縮小する"],
        correctAnswer: "繁栄する"
     },
     { 
        id: 449,
        question: "notable",
        choices: ["注目すべき", "平凡な", "無関係な", "隠れた"],
        correctAnswer: "注目すべき"
     },
     { 
        id: 450,
        question: "geography",
        choices: ["地理", "数学", "物理", "文学"],
        correctAnswer: "地理"
     },
     { 
        id: 451,
        question: "foam",
        choices: ["小さな泡", "塩", "炎", "霧"],
        correctAnswer: "小さな泡"
     },
     { 
        id: 452,
        question: "duration",
        choices: ["持続時間", "開始", "中断", "終了"],
        correctAnswer: "持続時間"
     },
     { 
        id: 453,
        question: "determination",
        choices: ["決定", "混乱", "迷い", "無関心"],
        correctAnswer: "決定"
     },
     { 
        id: 454,
        question: "reign",
        choices: ["統治", "崩壊", "革命", "停滞"],
        correctAnswer: "統治"
     },
     { 
        id: 455,
        question: "footing",
        choices: ["足場", "不安定", "危険", "衝撃"],
        correctAnswer: "足場"
     },
     { 
        id: 456,
        question: "continuous",
        choices: ["継続的な", "断続的な", "短期間の", "中断された"],
        correctAnswer: "継続的な"
     },
     { 
        id: 457,
        question: "demographic",
        choices: ["人口統計の", "気象の", "経済の", "歴史の"],
        correctAnswer: "人口統計の"
     },
     { 
        id: 458,
        question: "explicit",
        choices: ["明らかな", "曖昧な", "抽象的な", "隠れた"],
        correctAnswer: "明らかな"
     },
     { 
        id: 459,
        question: "along with",
        choices: ["に沿って", "から離れて", "に逆らって", "の外側で"],
        correctAnswer: "に沿って"
     },
     { 
        id: 460,
        question: "lessen",
        choices: ["減らす", "増やす", "強化する", "拡張する"],
        correctAnswer: "減らす"
     },
     { 
        id: 461,
        question: "portal",
        choices: ["正門", "壁", "小道", "屋根"],
        correctAnswer: "正門"
     },
     { 
        id: 462,
        question: "repeatedly",
        choices: ["繰り返し", "一度だけ", "偶然に", "まれに"],
        correctAnswer: "繰り返し"
     },
     { 
        id: 463,
        question: "harry",
        choices: ["うるさく悩ます", "静かにさせる", "安心させる", "励ます"],
        correctAnswer: "うるさく悩ます"
     },
     { 
        id: 464,
        question: "forbidden",
        choices: ["禁じられた", "許可された", "推奨された", "必要な"],
        correctAnswer: "禁じられた"
     },
     { 
        id: 465,
        question: "disturbing",
        choices: ["邪魔な", "心地よい", "楽しい", "平和な"],
        correctAnswer: "邪魔な"
     },
     { 
        id: 466,
        question: "par",
        choices: ["同等", "不均衡", "不一致", "例外"],
        correctAnswer: "同等"
     },
     { 
        id: 467,
        question: "across from",
        choices: ["の向かいに", "の隣に", "の上に", "の下に"],
        correctAnswer: "の向かいに"
     },
     { 
        id: 468,
        question: "heath",
        choices: ["荒野", "森", "湖", "川"],
        correctAnswer: "荒野"
     },
     { 
        id: 469,
        question: "chemistry",
        choices: ["化学", "物理", "数学", "生物"],
        correctAnswer: "化学"
     },
     { 
        id: 470,
        question: "malignant",
        choices: ["悪意のある", "善良な", "温厚な", "無害な"],
        correctAnswer: "悪意のある"
     },
     { 
        id: 471,
        question: "carcinogen",
        choices: ["発がん物質", "抗酸化物質", "消毒液", "ビタミン"],
        correctAnswer: "発がん物質"
     },
     { 
        id: 472,
        question: "accumulate",
        choices: ["蓄積する", "消費する", "削減する", "放棄する"],
        correctAnswer: "蓄積する"
     },
     { 
        id: 473,
        question: "evacuate",
        choices: ["避難する", "居住する", "留まる", "固執する"],
        correctAnswer: "避難する"
     },
     { 
        id: 474,
        question: "threshold",
        choices: ["閾値", "上限", "最低値", "中央値"],
        correctAnswer: "閾値"
     },
     { 
        id: 475,
        question: "invaluable",
        choices: ["貴重な", "価値のない", "一般的な", "安価な"],
        correctAnswer: "貴重な"
     },
     { 
        id: 476,
        question: "miss out",
        choices: ["機会を逃す", "成功する", "獲得する", "達成する"],
        correctAnswer: "機会を逃す"
     },
     { 
        id: 477,
        question: "ubiquitous",
        choices: ["至る所に存在する", "限定的な", "隠れた", "まれな"],
        correctAnswer: "至る所に存在する"
     },
     { 
        id: 478,
        question: "burn out",
        choices: ["燃え尽きる", "成長する", "蓄積する", "安定する"],
        correctAnswer: "燃え尽きる"
     },
     { 
        id: 479,
        question: "formulate",
        choices: ["策定する", "解体する", "拒否する", "回避する"],
        correctAnswer: "策定する"
     },
     { 
        id: 480,
        question: "feed off",
        choices: ["情報を得る", "浪費する", "無視する", "破壊する"],
        correctAnswer: "情報を得る"
     },
     { 
        id: 481,
        question: "hidden",
        choices: ["隠された", "明らかな", "公開された", "目立つ"],
        correctAnswer: "隠された"
     },
     { 
        id: 482,
        question: "botanist",
        choices: ["植物学者", "天文学者", "物理学者", "考古学者"],
        correctAnswer: "植物学者"
     },
     { 
        id: 483,
        question: "diplomat",
        choices: ["外交官", "軍人", "商人", "医者"],
        correctAnswer: "外交官"
     },
     { 
        id: 484,
        question: "skim over",
        choices: ["流し読みする", "熟読する", "書き写す", "暗記する"],
        correctAnswer: "流し読みする"
     },
     { 
        id: 485,
        question: "denote",
        choices: ["表示する", "消去する", "回避する", "変換する"],
        correctAnswer: "表示する"
     },
     { 
        id: 486,
        question: "notorious",
        choices: ["悪名高い", "無名の", "尊敬される", "誠実な"],
        correctAnswer: "悪名高い"
     },
     { 
        id: 487,
        question: "monarch",
        choices: ["君主", "平民", "兵士", "役人"],
        correctAnswer: "君主"
     },
     { 
        id: 488,
        question: "faction",
        choices: ["派閥", "単独", "敵対者", "無関係"],
        correctAnswer: "派閥"
     },
     { 
        id: 489,
        question: "animosity",
        choices: ["敵意", "友好", "愛情", "協力"],
        correctAnswer: "敵意"
     },
     { 
        id: 490,
        question: "undermine",
        choices: ["弱体化させる", "強化する", "保護する", "促進する"],
        correctAnswer: "弱体化させる"
     },
     { 
        id: 491,
        question: "ballot",
        choices: ["投票用紙", "契約書", "証明書", "領収書"],
        correctAnswer: "投票用紙"
     },
     { 
        id: 492,
        question: "liability",
        choices: ["責任", "権利", "利益", "自由"],
        correctAnswer: "責任"
     },
     { 
        id: 493,
        question: "successor",
        choices: ["後継", "前任者", "補佐", "敵対者"],
        correctAnswer: "後継"
     },
     { 
        id: 494,
        question: "aggravate",
        choices: ["悪化させる", "改善する", "癒す", "修復する"],
        correctAnswer: "悪化させる"
     },
     { 
        id: 495,
        question: "signify",
        choices: ["意味する", "隠す", "軽視する", "誤解する"],
        correctAnswer: "意味する"
     },
     { 
        id: 496,
        question: "loyal",
        choices: ["忠実な", "裏切り者の", "冷淡な", "反抗的な"],
        correctAnswer: "忠実な"
     },
     { 
        id: 497,
        question: "fortunate",
        choices: ["幸運な", "不幸な", "不運な", "厳しい"],
        correctAnswer: "幸運な"
     },
     { 
        id: 498,
        question: "giant",
        choices: ["巨大な", "小さな", "短い", "細かい"],
        correctAnswer: "巨大な"
     },
     { 
        id: 499,
        question: "collision",
        choices: ["衝突", "分裂", "離散", "調和"],
        correctAnswer: "衝突"
     },
     { 
        id: 500,
        question: "compelling",
        choices: ["説得力のある", "疑わしい", "軽薄な", "虚偽の"],
        correctAnswer: "説得力のある"
     },
     { 
        id: 501,
        question: "critical of",
        choices: ["を批判する", "を賞賛する", "を無視する", "を支持する"],
        correctAnswer: "を批判する"
     },
     { 
        id: 502,
        question: "plunge",
        choices: ["突入する", "撤退する", "横ばいになる", "避ける"],
        correctAnswer: "突入する"
     },
     { 
        id: 503,
        question: "lava",
        choices: ["溶岩", "氷", "砂", "水"],
        correctAnswer: "溶岩"
     },
     { 
        id: 504,
        question: "devastating",
        choices: ["壊滅的な", "建設的な", "改善された", "穏やかな"],
        correctAnswer: "壊滅的な"
     },
     { 
        id: 505,
        question: "partial",
        choices: ["部分的な", "完全な", "誤った", "不完全な"],
        correctAnswer: "部分的な"
     },
     { 
        id: 506,
        question: "in line with",
        choices: ["に従って", "に逆らって", "から離れて", "に対して"],
        correctAnswer: "に従って"
     },
     { 
        id: 507,
        question: "surge",
        choices: ["急に上がる", "減少する", "安定する", "静かになる"],
        correctAnswer: "急に上がる"
     },
     { 
        id: 508,
        question: "adamant",
        choices: ["断固たる", "柔軟な", "不確かな", "変わりやすい"],
        correctAnswer: "断固たる"
     },
     { 
        id: 509,
        question: "sole",
        choices: ["単独の", "複数の", "共通の", "複雑な"],
        correctAnswer: "単独の"
     },
     { 
        id: 510,
        question: "consensus",
        choices: ["同意", "対立", "拒否", "衝突"],
        correctAnswer: "同意"
     },
     { 
        id: 511,
        question: "rein",
        choices: ["手綱", "鞍", "鎖", "網"],
        correctAnswer: "手綱"
     },
     { 
        id: 512,
        question: "exorbitant",
        choices: ["法外な", "妥当な", "控えめな", "合理的な"],
        correctAnswer: "法外な"
     },
     { 
        id: 513,
        question: "depletion",
        choices: ["枯渇", "蓄積", "補充", "増加"],
        correctAnswer: "枯渇"
     },
     { 
        id: 514,
        question: "split up",
        choices: ["を分ける", "を結合する", "を拡大する", "を統一する"],
        correctAnswer: "を分ける"
     },
     { 
        id: 515,
        question: "regulatory",
        choices: ["規制", "自由な", "自発的な", "制約のない"],
        correctAnswer: "規制"
     },
     { 
        id: 516,
        question: "thoroughly",
        choices: ["徹底的に", "部分的に", "適当に", "控えめに"],
        correctAnswer: "徹底的に"
     },
     { 
        id: 517,
        question: "genetic",
        choices: ["遺伝的な", "環境的な", "人工的な", "化学的な"],
        correctAnswer: "遺伝的な"
     },
     { 
        id: 518,
        question: "indigenous",
        choices: ["原産の", "外来の", "人工的な", "移植された"],
        correctAnswer: "原産の"
     },
     { 
        id: 519,
        question: "realistic",
        choices: ["現実的な", "幻想的な", "非現実的な", "抽象的な"],
        correctAnswer: "現実的な"
     },
     { 
        id: 520,
        question: "allied",
        choices: ["同盟を結んでいる", "敵対している", "無関係の", "独立した"],
        correctAnswer: "同盟を結んでいる"
     },
     { 
        id: 521,
        question: "let up",
        choices: ["弱まる", "強くなる", "悪化する", "加速する"],
        correctAnswer: "弱まる"
     },
     { 
        id: 522,
        question: "volcano",
        choices: ["火山", "湖", "山脈", "平原"],
        correctAnswer: "火山"
     },
     { 
        id: 523,
        question: "cozy",
        choices: ["居心地の良い", "冷たい", "不快な", "騒がしい"],
        correctAnswer: "居心地の良い"
     },
     { 
        id: 524,
        question: "stubborn",
        choices: ["頑固な", "柔軟な", "優しい", "気まぐれな"],
        correctAnswer: "頑固な"
     },
     { 
        id: 525,
        question: "neat",
        choices: ["きちんとした", "乱雑な", "汚れた", "混沌とした"],
        correctAnswer: "きちんとした"
     },
     { 
        id: 526,
        question: "ease into",
        choices: ["にゆっくりと入る", "急いで入る", "拒否する", "避ける"],
        correctAnswer: "にゆっくりと入る"
     },
     { 
        id: 527,
        question: "tidy",
        choices: ["きちんとした", "乱雑な", "散らかった", "不安定な"],
        correctAnswer: "きちんとした"
     },
     { 
        id: 528,
        question: "play down",
        choices: ["を軽く扱う", "を強調する", "を誇張する", "を拡大する"],
        correctAnswer: "を軽く扱う"
     },
     { 
        id: 529,
        question: "surgical",
        choices: ["外科の", "内科の", "精神的な", "薬理的な"],
        correctAnswer: "外科の"
     },
     { 
        id: 530,
        question: "go against",
        choices: ["に反して", "に従って", "に同意して", "を支持して"],
        correctAnswer: "に反して"
     },
     { 
        id: 531,
        question: "instantly",
        choices: ["すぐに", "ゆっくりと", "最終的に", "徐々に"],
        correctAnswer: "すぐに"
     },
     { 
        id: 532,
        question: "sting",
        choices: ["刺す", "舐める", "噛む", "包む"],
        correctAnswer: "刺す"
     },
     { 
        id: 533,
        question: "sunburn",
        choices: ["日焼け", "凍傷", "切り傷", "湿疹"],
        correctAnswer: "日焼け"
     },
     { 
        id: 534,
        question: "add up to",
        choices: ["結局～になる", "減少する", "削除する", "増やす"],
        correctAnswer: "結局～になる"
     },
     { 
        id: 535,
        question: "venerable",
        choices: ["由緒ある", "普通の", "若々しい", "新しい"],
        correctAnswer: "由緒ある"
     },
     { 
        id: 536,
        question: "play up",
        choices: ["を重視する", "を軽視する", "を避ける", "を削除する"],
        correctAnswer: "を重視する"
     },
     { 
        id: 537,
        question: "assimilate",
        choices: ["吸収する", "拒絶する", "忘れる", "避ける"],
        correctAnswer: "吸収する"
     },
     { 
        id: 538,
        question: "terminology",
        choices: ["用語", "方程式", "概念", "習慣"],
        correctAnswer: "用語"
     },
     { 
        id: 539,
        question: "vault",
        choices: ["丸天井", "地下室", "壁", "床"],
        correctAnswer: "丸天井"
     },
     { 
        id: 540,
        question: "indicative",
        choices: ["表示する", "隠す", "消す", "削除する"],
        correctAnswer: "表示する"
     },
     { 
        id: 541,
        question: "hang out",
        choices: ["くつろぐ", "忙しくする", "働く", "避ける"],
        correctAnswer: "くつろぐ"
     },
     { 
        id: 542,
        question: "dilute",
        choices: ["薄める", "濃縮する", "増やす", "乾燥させる"],
        correctAnswer: "薄める"
     },
     { 
        id: 543,
        question: "by contract",
        choices: ["契約で", "法律で", "偶然に", "口頭で"],
        correctAnswer: "契約で"
     },
     { 
        id: 544,
        question: "suitor",
        choices: ["求婚者", "証人", "敵対者", "詐欺師"],
        correctAnswer: "求婚者"
     },
     { 
        id: 545,
        question: "endear",
        choices: ["慕わせる", "嫌わせる", "避ける", "忘れる"],
        correctAnswer: "慕わせる"
     },
     { 
        id: 546,
        question: "opportune",
        choices: ["好機の", "不適切な", "曖昧な", "不利な"],
        correctAnswer: "好機の"
     },
     { 
        id: 547,
        question: "proverbial",
        choices: ["ことわざの", "非公式の", "疑わしい", "偽りの"],
        correctAnswer: "ことわざの"
     },
     { 
        id: 548,
        question: "fall into",
        choices: ["に属する", "を避ける", "を拒否する", "を離れる"],
        correctAnswer: "に属する"
     },
     { 
        id: 549,
        question: "wry",
        choices: ["ゆがんだ", "まっすぐな", "美しい", "整った"],
        correctAnswer: "ゆがんだ"
     },
     { 
        id: 550,
        question: "shaggy",
        choices: ["毛深い", "なめらかな", "清潔な", "短髪の"],
        correctAnswer: "毛深い"
     },
     { 
        id: 551,
        question: "drag on",
        choices: ["長引く", "終わる", "短縮する", "中止する"],
        correctAnswer: "長引く"
     },
     { 
        id: 552,
        question: "imperative",
        choices: ["命令的な", "優柔不断な", "曖昧な", "自由な"],
        correctAnswer: "命令的な"
     },
     { 
        id: 553,
        question: "life expectancy",
        choices: ["余命", "死亡率", "誕生率", "成人年齢"],
        correctAnswer: "余命"
     },
     { 
        id: 554,
        question: "ornate",
        choices: ["華やかな", "地味な", "質素な", "無装飾の"],
        correctAnswer: "華やかな"
     },
     { 
        id: 555,
        question: "drive off",
        choices: ["を追い払う", "を歓迎する", "を引き寄せる", "を誘う"],
        correctAnswer: "を追い払う"
     },
     { 
        id: 556,
        question: "molest",
        choices: ["悩ます", "助ける", "励ます", "慰める"],
        correctAnswer: "悩ます"
     },
     { 
        id: 557,
        question: "carry through",
        choices: ["やり通す", "諦める", "中止する", "失敗する"],
        correctAnswer: "やり通す"
     },
     { 
        id: 558,
        question: "maritime",
        choices: ["海事の", "陸上の", "空中の", "宇宙の"],
        correctAnswer: "海事の"
     },
     { 
        id: 559,
        question: "finish off",
        choices: ["を完成させる", "を放棄する", "を途中でやめる", "を削除する"],
        correctAnswer: "を完成させる"
     },
     { 
        id: 560,
        question: "ascend",
        choices: ["昇る", "降りる", "停止する", "後退する"],
        correctAnswer: "昇る"
     },
     { 
        id: 561,
        question: "stand down",
        choices: ["身を引く", "前進する", "主張する", "立ち向かう"],
        correctAnswer: "身を引く"
     },
     { 
        id: 562,
        question: "rant",
        choices: ["怒鳴り立てる", "静かに話す", "ささやく", "歌う"],
        correctAnswer: "怒鳴り立てる"
     },
     { 
        id: 563,
        question: "blatant",
        choices: ["露骨な", "控えめな", "秘密の", "曖昧な"],
        correctAnswer: "露骨な"
     },
     { 
        id: 564,
        question: "lay off",
        choices: ["を解雇する", "を昇進させる", "を採用する", "を褒める"],
        correctAnswer: "を解雇する"
     },
     { 
        id: 565,
        question: "plausible",
        choices: ["もっともらしい", "疑わしい", "不可能な", "誇張された"],
        correctAnswer: "もっともらしい"
     },
     { 
        id: 566,
        question: "reaffirm",
        choices: ["再確認する", "拒否する", "変更する", "取り消す"],
        correctAnswer: "再確認する"
     },
     { 
        id: 567,
        question: "delve",
        choices: ["掘り下げる", "表面的に見る", "省略する", "放棄する"],
        correctAnswer: "掘り下げる"
     },
     { 
        id: 568,
        question: "excerpt",
        choices: ["抜粋", "全文", "要約", "翻訳"],
        correctAnswer: "抜粋"
     },
     { 
        id: 569,
        question: "timidity",
        choices: ["臆病", "大胆さ", "自信", "勇敢さ"],
        correctAnswer: "臆病"
     },
     { 
        id: 570,
        question: "coarse",
        choices: ["粗末な", "精密な", "柔らかい", "繊細な"],
        correctAnswer: "粗末な"
     },
     { 
        id: 571,
        question: "amass",
        choices: ["蓄える", "消費する", "放棄する", "破壊する"],
        correctAnswer: "蓄える"
     },
     { 
        id: 572,
        question: "flaunt",
        choices: ["誇示する", "隠す", "控える", "忘れる"],
        correctAnswer: "誇示する"
     },
     { 
        id: 573,
        question: "yeast",
        choices: ["酵母", "酸", "塩", "砂糖"],
        correctAnswer: "酵母"
     },
     { 
        id: 574,
        question: "frolic",
        choices: ["戯れる", "怒る", "悲しむ", "怯える"],
        correctAnswer: "戯れる"
     },
     { 
        id: 575,
        question: "procedural",
        choices: ["手続きの", "偶発的な", "即興の", "非公式の"],
        correctAnswer: "手続きの"
     },
     { 
        id: 576,
        question: "momentous",
        choices: ["重大な", "些細な", "日常的な", "無意味な"],
        correctAnswer: "重大な"
     },
     { 
        id: 577,
        question: "counterclockwise",
        choices: ["反時計回りの", "時計回りの", "直線的な", "水平な"],
        correctAnswer: "反時計回りの"
     },
     { 
        id: 578,
        question: "frosty",
        choices: ["凍えるような", "暖かい", "湿った", "涼しい"],
        correctAnswer: "凍えるような"
     },
     { 
        id: 579,
        question: "garner",
        choices: ["集める", "捨てる", "忘れる", "拒否する"],
        correctAnswer: "集める"
     },
     { 
        id: 580,
        question: "grow into",
        choices: ["に発展する", "縮小する", "消える", "停止する"],
        correctAnswer: "に発展する"
     },
     { 
        id: 581,
        question: "light bulb",
        choices: ["電球", "ランプ", "懐中電灯", "炎"],
        correctAnswer: "電球"
     },
     { 
        id: 582,
        question: "bogus",
        choices: ["偽の", "本物の", "正確な", "合法の"],
        correctAnswer: "偽の"
     },
     { 
        id: 583,
        question: "horrify",
        choices: ["怖がらせる", "落ち着かせる", "喜ばせる", "笑わせる"],
        correctAnswer: "怖がらせる"
     },
     { 
        id: 584,
        question: "prevent A from B",
        choices: ["AをBから防ぐ", "AをBに導く", "AをBに促進する", "AをBと交換する"],
        correctAnswer: "AをBから防ぐ"
     },
     { 
        id: 585,
        question: "trilogy",
        choices: ["三部作", "二部作", "五部作", "単独作品"],
        correctAnswer: "三部作"
     },
     { 
        id: 586,
        question: "dreadful",
        choices: ["恐ろしい", "素晴らしい", "平凡な", "明るい"],
        correctAnswer: "恐ろしい"
     },
     { 
        id: 587,
        question: "bemoan",
        choices: ["嘆く", "喜ぶ", "祝う", "無視する"],
        correctAnswer: "嘆く"
     },
     { 
        id: 588,
        question: "deflect",
        choices: ["そらせる", "貫く", "強める", "保持する"],
        correctAnswer: "そらせる"
     },
     { 
        id: 589,
        question: "turbulence",
        choices: ["乱気流", "静寂", "穏やかさ", "停滞"],
        correctAnswer: "乱気流"
     },
     { 
        id: 590,
        question: "vista",
        choices: ["眺望", "暗闇", "閉鎖", "洞窟"],
        correctAnswer: "眺望"
     },
     { 
        id: 591,
        question: "reliant",
        choices: ["頼っている", "独立している", "疑わしい", "不確かな"],
        correctAnswer: "頼っている"
     },
     { 
        id: 592,
        question: "pollute",
        choices: ["汚染する", "浄化する", "保存する", "修復する"],
        correctAnswer: "汚染する"
     },
     { 
        id: 593,
        question: "binary",
        choices: ["二の", "三の", "四の", "単一の"],
        correctAnswer: "二の"
     },
     { 
        id: 594,
        question: "phony",
        choices: ["偽物の", "本物の", "確実な", "信頼できる"],
        correctAnswer: "偽物の"
     },
     { 
        id: 595,
        question: "shake up",
        choices: ["大きく変える", "安定させる", "維持する", "修正する"],
        correctAnswer: "大きく変える"
     },
     { 
        id: 596,
        question: "hoist",
        choices: ["揚げる", "下ろす", "壊す", "縮小する"],
        correctAnswer: "揚げる"
     },
     { 
        id: 597,
        question: "innate",
        choices: ["生まれつきの", "学習による", "後天的な", "習慣的な"],
        correctAnswer: "生まれつきの"
     },
     { 
        id: 598,
        question: "colloquial",
        choices: ["口語の", "書き言葉の", "正式な", "古風な"],
        correctAnswer: "口語の"
     },
     { 
        id: 599,
        question: "abduct",
        choices: ["拉致する", "解放する", "保護する", "見送る"],
        correctAnswer: "拉致する"
     },
     { 
        id: 600,
        question: "inaugural",
        choices: ["就任の", "最終の", "一時的な", "暫定的な"],
        correctAnswer: "就任の"
     },
     { 
        id: 601,
        question: "act on",
        choices: ["に従って行動する", "無視する", "拒否する", "誤解する"],
        correctAnswer: "に従って行動する"
     },
     { 
        id: 602,
        question: "aquatic",
        choices: ["水生の", "陸生の", "空気中の", "地下の"],
        correctAnswer: "水生の"
     },
     { 
        id: 603,
        question: "stunning",
        choices: ["驚くような", "平凡な", "地味な", "退屈な"],
        correctAnswer: "驚くような"
     },
     { 
        id: 604,
        question: "lag",
        choices: ["遅れる", "進む", "急加速する", "安定する"],
        correctAnswer: "遅れる"
     },
     { 
        id: 605,
        question: "unison",
        choices: ["一致", "対立", "衝突", "矛盾"],
        correctAnswer: "一致"
     },
     { 
        id: 606,
        question: "pastoral",
        choices: ["羊飼いの", "都市の", "工業の", "科学的な"],
        correctAnswer: "羊飼いの"
     },
     { 
        id: 607,
        question: "launder",
        choices: ["洗濯する", "汚す", "乾かす", "燃やす"],
        correctAnswer: "洗濯する"
     },
     { 
        id: 608,
        question: "authoritative",
        choices: ["権威ある", "信用できない", "無名の", "未確認の"],
        correctAnswer: "権威ある"
     },
     { 
        id: 609,
        question: "impart",
        choices: ["与える", "奪う", "隠す", "拒否する"],
        correctAnswer: "与える"
     },
     { 
        id: 610,
        question: "crunch",
        choices: ["噛み砕く", "磨く", "溶かす", "固める"],
        correctAnswer: "噛み砕く"
     },
     { 
        id: 611,
        question: "tentative",
        choices: ["暫定の", "確定の", "最終的な", "正式な"],
        correctAnswer: "暫定の"
     },
     { 
        id: 612,
        question: "revamp",
        choices: ["改修する", "破壊する", "削除する", "放棄する"],
        correctAnswer: "改修する"
     },
     { 
        id: 613,
        question: "flex",
        choices: ["曲げる", "伸ばす", "固定する", "割る"],
        correctAnswer: "曲げる"
     },
     { 
        id: 614,
        question: "transcription",
        choices: ["転写", "削除", "変換", "消去"],
        correctAnswer: "転写"
     },
     { 
        id: 615,
        question: "convertible",
        choices: ["形を変えられる", "固定された", "限定された", "変化しない"],
        correctAnswer: "形を変えられる"
     },
     { 
        id: 616,
        question: "water vapor",
        choices: ["水蒸気", "氷", "雨", "霧"],
        correctAnswer: "水蒸気"
     },
     { 
        id: 617,
        question: "colossal",
        choices: ["巨大な", "小さな", "細かい", "狭い"],
        correctAnswer: "巨大な"
     },
     { 
        id: 618,
        question: "revitalize",
        choices: ["活性化させる", "衰退させる", "破壊する", "放棄する"],
        correctAnswer: "活性化させる"
     },
     { 
        id: 619,
        question: "thee",
        choices: ["汝を", "彼を", "私を", "彼女を"],
        correctAnswer: "汝を"
     },
     { 
        id: 620,
        question: "stub",
        choices: ["使い残り", "新品", "完全なもの", "全体"],
        correctAnswer: "使い残り"
     },
     { 
        id: 621,
        question: "ulcer",
        choices: ["潰瘍", "発疹", "青あざ", "切り傷"],
        correctAnswer: "潰瘍"
     },
     { 
        id: 622,
        question: "indistinct",
        choices: ["不明瞭な", "明確な", "正確な", "はっきりとした"],
        correctAnswer: "不明瞭な"
     },
     { 
        id: 623,
        question: "divulge",
        choices: ["漏らす", "秘密にする", "抑える", "偽る"],
        correctAnswer: "漏らす"
     },
     { 
        id: 624,
        question: "keep A company",
        choices: ["Aに同行する", "Aを避ける", "Aを無視する", "Aを拒否する"],
        correctAnswer: "Aに同行する"
     },
     { 
        id: 625,
        question: "hollow",
        choices: ["空洞のある", "満たされた", "固い", "重い"],
        correctAnswer: "空洞のある"
     },
     { 
        id: 626,
        question: "drop back",
        choices: ["後退する", "前進する", "固まる", "飛び込む"],
        correctAnswer: "後退する"
     },
     { 
        id: 627,
        question: "outcast",
        choices: ["追放された", "歓迎された", "信頼された", "必要とされた"],
        correctAnswer: "追放された"
     },
     { 
        id: 628,
        question: "prudent",
        choices: ["用心深い", "無謀な", "軽率な", "感情的な"],
        correctAnswer: "用心深い"
     },
     { 
        id: 629,
        question: "debilitate",
        choices: ["衰弱させる", "強化する", "回復させる", "安定させる"],
        correctAnswer: "衰弱させる"
     },
     { 
        id: 630,
        question: "insinuate",
        choices: ["ほのめかす", "明言する", "否定する", "証明する"],
        correctAnswer: "ほのめかす"
     },
     { 
        id: 631,
        question: "rub in",
        choices: ["刷り込む", "忘れさせる", "拭き取る", "削除する"],
        correctAnswer: "刷り込む"
     },
     { 
        id: 632,
        question: "oblivious",
        choices: ["忘れっぽい", "鋭敏な", "注意深い", "慎重な"],
        correctAnswer: "忘れっぽい"
     },
     { 
        id: 633,
        question: "traction",
        choices: ["牽引", "放棄", "減速", "切断"],
        correctAnswer: "牽引"
     },
     { 
        id: 634,
        question: "with all",
        choices: ["にも関わらず", "それに従って", "同時に", "完全に"],
        correctAnswer: "にも関わらず"
     },
     { 
        id: 635,
        question: "ruthlessly",
        choices: ["冷酷に", "優しく", "誠実に", "慎重に"],
        correctAnswer: "冷酷に"
     },
     { 
        id: 636,
        question: "scour",
        choices: ["こすり洗う", "磨かない", "乾燥させる", "放置する"],
        correctAnswer: "こすり洗う"
     },
     { 
        id: 637,
        question: "genial",
        choices: ["親切で愛想のよい", "冷淡な", "疑わしい", "短気な"],
        correctAnswer: "親切で愛想のよい"
     },
     { 
        id: 638,
        question: "substantive",
        choices: ["実質的な", "抽象的な", "不確実な", "空虚な"],
        correctAnswer: "実質的な"
     },
     { 
        id: 639,
        question: "repeal",
        choices: ["廃止する", "制定する", "追加する", "強化する"],
        correctAnswer: "廃止する"
     },
     { 
        id: 640,
        question: "sloppy",
        choices: ["ずさんな", "几帳面な", "正確な", "整理された"],
        correctAnswer: "ずさんな"
     },
     { 
        id: 641,
        question: "tie up",
        choices: ["を縛り上げる", "を解放する", "を忘れる", "を破壊する"],
        correctAnswer: "を縛り上げる"
     },
     { 
        id: 642,
        question: "lamentable",
        choices: ["哀れな", "幸せな", "誇らしい", "満足した"],
        correctAnswer: "哀れな"
     },
     { 
        id: 643,
        question: "interrogate",
        choices: ["尋問する", "祝う", "賞賛する", "助ける"],
        correctAnswer: "尋問する"
     },
     { 
        id: 644,
        question: "episcopal",
        choices: ["監督の", "庶民の", "政治的な", "商業的な"],
        correctAnswer: "監督の"
     },
     { 
        id: 645,
        question: "treason",
        choices: ["反逆", "忠誠", "信頼", "協力"],
        correctAnswer: "反逆"
     },
     { 
        id: 646,
        question: "dainty",
        choices: ["上品な", "荒々しい", "鈍い", "粗末な"],
        correctAnswer: "上品な"
     },
     { 
        id: 647,
        question: "dizzy",
        choices: ["めまいがする", "目が覚める", "元気が出る", "落ち着く"],
        correctAnswer: "めまいがする"
     },
     { 
        id: 648,
        question: "concoct",
        choices: ["練る", "壊す", "排除する", "見捨てる"],
        correctAnswer: "練る"
     },
     { 
        id: 649,
        question: "run against",
        choices: ["にぶつかる", "を避ける", "を支持する", "を賞賛する"],
        correctAnswer: "にぶつかる"
     },
     { 
        id: 650,
        question: "scuttle",
        choices: ["急いで行く", "ゆっくり進む", "止まる", "後退する"],
        correctAnswer: "急いで行く"
     },
     { 
        id: 651,
        question: "loose",
        choices: ["緩い", "きつい", "固定された", "頑丈な"],
        correctAnswer: "緩い"
     },
     { 
        id: 652,
        question: "get on with",
        choices: ["とうまくやっていく", "争う", "避ける", "無視する"],
        correctAnswer: "とうまくやっていく"
     },
     { 
        id: 653,
        question: "admonish",
        choices: ["訓戒する", "賞賛する", "無視する", "支援する"],
        correctAnswer: "訓戒する"
     },
     { 
        id: 654,
        question: "in pursuit of",
        choices: ["を追跡して", "を無視して", "を放棄して", "を制止して"],
        correctAnswer: "を追跡して"
     },
     { 
        id: 655,
        question: "questionable",
        choices: ["疑わしい", "確実な", "明白な", "正確な"],
        correctAnswer: "疑わしい"
     },
     { 
        id: 656,
        question: "haughty",
        choices: ["高慢な", "謙虚な", "親切な", "優しい"],
        correctAnswer: "高慢な"
     },
     { 
        id: 657,
        question: "experiment with",
        choices: ["を試す", "を拒否する", "を停止する", "を削除する"],
        correctAnswer: "を試す"
     },
     { 
        id: 658,
        question: "hefty",
        choices: ["重い", "軽い", "小さい", "細い"],
        correctAnswer: "重い"
     },
     { 
        id: 659,
        question: "soothing",
        choices: ["和らげる", "悪化させる", "強化する", "拡大する"],
        correctAnswer: "和らげる"
     },
     { 
        id: 660,
        question: "commend",
        choices: ["褒める", "非難する", "軽視する", "攻撃する"],
        correctAnswer: "褒める"
     },
     { 
        id: 661,
        question: "chasten",
        choices: ["懲らしめる", "奨励する", "褒める", "避ける"],
        correctAnswer: "懲らしめる"
     },
     { 
        id: 662,
        question: "liken",
        choices: ["例える", "対立する", "否定する", "誤解する"],
        correctAnswer: "例える"
     },
     { 
        id: 663,
        question: "spring up",
        choices: ["突然現れる", "消える", "ゆっくり現れる", "隠れる"],
        correctAnswer: "突然現れる"
     },
     { 
        id: 664,
        question: "facile",
        choices: ["安易な", "困難な", "複雑な", "重要な"],
        correctAnswer: "安易な"
     },
     { 
        id: 665,
        question: "intuitive",
        choices: ["直感的な", "論理的な", "分析的な", "難解な"],
        correctAnswer: "直感的な"
     },
     { 
        id: 666,
        question: "capitalize",
        choices: ["大文字にする", "小さくする", "消す", "変更しない"],
        correctAnswer: "大文字にする"
     },
     { 
        id: 667,
        question: "folly",
        choices: ["愚かな", "賢明な", "論理的な", "慎重な"],
        correctAnswer: "愚かな"
     },
     { 
        id: 668,
        question: "fend",
        choices: ["避ける", "受け入れる", "促進する", "従う"],
        correctAnswer: "避ける"
     },
     { 
        id: 669,
        question: "coalesce",
        choices: ["合体する", "分裂する", "削除する", "無視する"],
        correctAnswer: "合体する"
     },
     { 
        id: 670,
        question: "alleviate",
        choices: ["和らげる", "悪化させる", "拡張する", "抑える"],
        correctAnswer: "和らげる"
     },
     { 
        id: 671,
        question: "exhale",
        choices: ["吐き出す", "吸い込む", "抑える", "蓄積する"],
        correctAnswer: "吐き出す"
     },
     { 
        id: 672,
        question: "slip by",
        choices: ["そっと通り過ぎる", "目立つ", "停止する", "躊躇する"],
        correctAnswer: "そっと通り過ぎる"
     },
     { 
        id: 673,
        question: "enigmatic",
        choices: ["謎めいた", "明白な", "単純な", "平凡な"],
        correctAnswer: "謎めいた"
     },
     { 
        id: 674,
        question: "gnaw",
        choices: ["かじる", "蹴る", "押す", "握る"],
        correctAnswer: "かじる"
     },
     { 
        id: 675,
        question: "inter",
        choices: ["埋葬する", "発掘する", "保存する", "展示する"],
        correctAnswer: "埋葬する"
     },
     { 
        id: 676,
        question: "loathe",
        choices: ["嫌う", "好む", "尊敬する", "擁護する"],
        correctAnswer: "嫌う"
     },
     { 
        id: 677,
        question: "real estate",
        choices: ["不動産", "株式", "債券", "契約書"],
        correctAnswer: "不動産"
     },
     { 
        id: 678,
        question: "venue",
        choices: ["現場", "計画", "手順", "方法"],
        correctAnswer: "現場"
     },
     { 
        id: 679,
        question: "cardinal",
        choices: ["主要な", "副次的な", "取るに足らない", "不必要な"],
        correctAnswer: "主要な"
     },
     { 
        id: 680,
        question: "lousy",
        choices: ["ひどい", "素晴らしい", "魅力的な", "興味深い"],
        correctAnswer: "ひどい"
     },
     { 
        id: 681,
        question: "resurrect",
        choices: ["復活させる", "破壊する", "消去する", "減少させる"],
        correctAnswer: "復活させる"
     },
     { 
        id: 682,
        question: "nestle",
        choices: ["寄り添う", "遠ざかる", "無視する", "離れる"],
        correctAnswer: "寄り添う"
     },
     { 
        id: 683,
        question: "temperament",
        choices: ["気質", "外見", "職業", "年齢"],
        correctAnswer: "気質"
     },
     { 
        id: 684,
        question: "dismay",
        choices: ["がっかりさせる", "喜ばせる", "励ます", "慰める"],
        correctAnswer: "がっかりさせる"
     },
     { 
        id: 685,
        question: "abort",
        choices: ["中絶する", "成功させる", "完成させる", "延長する"],
        correctAnswer: "中絶する"
     },
     { 
        id: 686,
        question: "elusive",
        choices: ["捉えどころのない", "明確な", "確実な", "具体的な"],
        correctAnswer: "捉えどころのない"
     },
     { 
        id: 687,
        question: "neurotic",
        choices: ["神経症の", "落ち着いた", "穏やかな", "安定した"],
        correctAnswer: "神経症の"
     },
     { 
        id: 688,
        question: "confound",
        choices: ["混乱させる", "整理する", "明確にする", "解決する"],
        correctAnswer: "混乱させる"
     },
     { 
        id: 689,
        question: "step down",
        choices: ["降りる", "昇進する", "継続する", "増強する"],
        correctAnswer: "降りる"
     },
     { 
        id: 690,
        question: "tenure",
        choices: ["任期", "地位", "学歴", "役職"],
        correctAnswer: "任期"
     },
     { 
        id: 691,
        question: "laughable",
        choices: ["失笑を買った", "尊敬される", "感動的な", "真剣な"],
        correctAnswer: "失笑を買った"
     },
     { 
        id: 692,
        question: "rebel against",
        choices: ["に反抗する", "に従う", "を支援する", "を信頼する"],
        correctAnswer: "に反抗する"
     },
     { 
        id: 693,
        question: "statistic",
        choices: ["統計", "数学", "言語", "物理"],
        correctAnswer: "統計"
     },
     { 
        id: 694,
        question: "clockwise",
        choices: ["時計回りに", "反時計回りに", "直線的に", "逆さまに"],
        correctAnswer: "時計回りに"
     },
     { 
        id: 695,
        question: "curtail",
        choices: ["削減する", "増加する", "拡大する", "延長する"],
        correctAnswer: "削減する"
     },
     { 
        id: 696,
        question: "entrust",
        choices: ["委託する", "奪う", "無視する", "否定する"],
        correctAnswer: "委託する"
     },
     { 
        id: 697,
        question: "catastrophic",
        choices: ["破滅的な", "成功した", "安定した", "平和な"],
        correctAnswer: "破滅的な"
     },
     { 
        id: 698,
        question: "fire up",
        choices: ["点火する", "消す", "冷却する", "中止する"],
        correctAnswer: "点火する"
     },
     { 
        id: 699,
        question: "come along",
        choices: ["一緒に行く", "置いていく", "無視する", "立ち去る"],
        correctAnswer: "一緒に行く"
     },
     { 
        id: 700,
        question: "injurious",
        choices: ["有害な", "無害な", "安全な", "利益のある"],
        correctAnswer: "有害な"
     },
     { 
        id: 701,
        question: "back off",
        choices: ["後退する", "前進する", "立ち向かう", "攻撃する"],
        correctAnswer: "後退する"
     },
     { 
        id: 702,
        question: "sign up",
        choices: ["登録する", "削除する", "無視する", "変更する"],
        correctAnswer: "登録する"
     },
     { 
        id: 703,
        question: "complementary",
        choices: ["補完的な", "対立的な", "矛盾する", "異なる"],
        correctAnswer: "補完的な"
     },
     { 
        id: 704,
        question: "nasal",
        choices: ["鼻の", "耳の", "目の", "手の"],
        correctAnswer: "鼻の"
     },
     { 
        id: 705,
        question: "drawl",
        choices: ["ゆっくり話す", "早口で話す", "ささやく", "叫ぶ"],
        correctAnswer: "ゆっくり話す"
     },
     { 
        id: 706,
        question: "dietary",
        choices: ["食事の", "運動の", "学問の", "娯楽の"],
        correctAnswer: "食事の"
     },
     { 
        id: 707,
        question: "peripheral",
        choices: ["周辺の", "中心の", "主要な", "限定された"],
        correctAnswer: "周辺の"
     },
     { 
        id: 708,
        question: "crumple",
        choices: ["くしゃくしゃにする", "滑らかにする", "整理する", "保護する"],
        correctAnswer: "くしゃくしゃにする"
     },
     { 
        id: 709,
        question: "prolong",
        choices: ["延ばす", "短縮する", "止める", "減らす"],
        correctAnswer: "延ばす"
     },
     { 
        id: 710,
        question: "out of question",
        choices: ["話にならない", "可能な", "簡単な", "当然の"],
        correctAnswer: "話にならない"
     },
     { 
        id: 711,
        question: "heave",
        choices: ["盛り上がる", "縮小する", "沈む", "崩れる"],
        correctAnswer: "盛り上がる"
     },
     { 
        id: 712,
        question: "molecular",
        choices: ["分子の", "原子の", "細胞の", "巨大な"],
        correctAnswer: "分子の"
     },
     { 
        id: 713,
        question: "gingerly",
        choices: ["極めて慎重に", "大胆に", "無謀に", "軽率に"],
        correctAnswer: "極めて慎重に"
     },
     { 
        id: 714,
        question: "giddy",
        choices: ["めまいがする", "落ち着いた", "安定した", "冷静な"],
        correctAnswer: "めまいがする"
     },
     { 
        id: 715,
        question: "nomadic",
        choices: ["遊牧の", "定住の", "都市の", "静止した"],
        correctAnswer: "遊牧の"
     },
     { 
        id: 716,
        question: "recoup",
        choices: ["取り戻す", "失う", "放棄する", "減少する"],
        correctAnswer: "取り戻す"
     },
     { 
        id: 717,
        question: "strenuous",
        choices: ["努力を要する", "簡単な", "楽な", "軽い"],
        correctAnswer: "努力を要する"
     },
     { 
        id: 718,
        question: "demolish",
        choices: ["取り壊す", "建設する", "修理する", "維持する"],
        correctAnswer: "取り壊す"
     },
     { 
        id: 719,
        question: "scratch out",
        choices: ["消す", "書く", "増やす", "強調する"],
        correctAnswer: "消す"
     },
     { 
        id: 720,
        question: "meticulous",
        choices: ["細心の", "無神経な", "ずさんな", "大雑把な"],
        correctAnswer: "細心の"
     },
     { 
        id: 721,
        question: "acquaint",
        choices: ["知らせる", "隠す", "誤解させる", "混乱させる"],
        correctAnswer: "知らせる"
     },
     { 
        id: 722,
        question: "treatise",
        choices: ["論文", "詩", "小説", "新聞"],
        correctAnswer: "論文"
     },
     { 
        id: 723,
        question: "oust",
        choices: ["追い払う", "迎え入れる", "歓迎する", "支援する"],
        correctAnswer: "追い払う"
     },
     { 
        id: 724,
        question: "empirical",
        choices: ["経験に基づいた", "理論的な", "抽象的な", "仮説的な"],
        correctAnswer: "経験に基づいた"
     },
     { 
        id: 725,
        question: "confiscate",
        choices: ["没収する", "提供する", "寄付する", "返還する"],
        correctAnswer: "没収する"
     },
     { 
        id: 726,
        question: "fall away",
        choices: ["弱まる", "増加する", "成長する", "拡大する"],
        correctAnswer: "弱まる"
     },
     { 
        id: 727,
        question: "startling",
        choices: ["驚くべき", "平凡な", "退屈な", "予測可能な"],
        correctAnswer: "驚くべき"
     },
     { 
        id: 728,
        question: "be aimed at",
        choices: ["を狙っている", "を無視する", "を避ける", "を批判する"],
        correctAnswer: "を狙っている"
     },
     { 
        id: 729,
        question: "discrete",
        choices: ["個別の", "統一された", "関連する", "連続的な"],
        correctAnswer: "個別の"
     },
     { 
        id: 730,
        question: "termination",
        choices: ["終了", "開始", "延長", "中断"],
        correctAnswer: "終了"
     },
     { 
        id: 731,
        question: "mull",
        choices: ["良く考える", "無視する", "忘れる", "急ぐ"],
        correctAnswer: "良く考える"
     },
     { 
        id: 732,
        question: "overhaul",
        choices: ["分解検査する", "無視する", "短縮する", "改悪する"],
        correctAnswer: "分解検査する"
     },
     { 
        id: 733,
        question: "obligate",
        choices: ["義務づける", "免除する", "削除する", "拒否する"],
        correctAnswer: "義務づける"
     },
     { 
        id: 734,
        question: "wretch",
        choices: ["みじめな人", "成功者", "裕福な人", "幸運な人"],
        correctAnswer: "みじめな人"
     },
     { 
        id: 735,
        question: "ardent",
        choices: ["熱心な", "冷淡な", "消極的な", "無関心な"],
        correctAnswer: "熱心な"
     },
     { 
        id: 736,
        question: "run down",
        choices: ["流れ落ちる", "上昇する", "改善する", "活性化する"],
        correctAnswer: "流れ落ちる"
     },
     { 
        id: 737,
        question: "innermost",
        choices: ["奥底の", "表面的な", "浅い", "明るい"],
        correctAnswer: "奥底の"
     },
     { 
        id: 738,
        question: "volatile",
        choices: ["揮発性の", "安定した", "鈍い", "不変の"],
        correctAnswer: "揮発性の"
     },
     { 
        id: 739,
        question: "beguile",
        choices: ["惑わす", "説得する", "安心させる", "論破する"],
        correctAnswer: "惑わす"
     },
     { 
        id: 740,
        question: "come down to",
        choices: ["結局～になる", "避ける", "変更する", "発展する"],
        correctAnswer: "結局～になる"
     },
     { 
        id: 741,
        question: "impoverished",
        choices: ["貧しい", "裕福な", "安定した", "繁栄した"],
        correctAnswer: "貧しい"
     },
     { 
        id: 742,
        question: "veto",
        choices: ["拒否権", "承認", "提案", "支持"],
        correctAnswer: "拒否権"
     },
     { 
        id: 743,
        question: "arduous",
        choices: ["骨の折れる", "容易な", "単純な", "楽な"],
        correctAnswer: "骨の折れる"
     },
     { 
        id: 744,
        question: "crafty",
        choices: ["狡猾な", "誠実な", "正直な", "無邪気な"],
        correctAnswer: "狡猾な"
     },
     { 
        id: 745,
        question: "ferocious",
        choices: ["どう猛な", "穏やかな", "優しい", "静かな"],
        correctAnswer: "どう猛な"
     },
     { 
        id: 746,
        question: "bureaucratic",
        choices: ["官僚的な", "自由な", "非公式な", "柔軟な"],
        correctAnswer: "官僚的な"
     },
     { 
        id: 747,
        question: "construe",
        choices: ["解釈する", "誤解する", "無視する", "拒否する"],
        correctAnswer: "解釈する"
     },
     { 
        id: 748,
        question: "derivative",
        choices: ["派生した", "元の", "独創的な", "唯一の"],
        correctAnswer: "派生した"
     },
     { 
        id: 749,
        question: "mystic",
        choices: ["神秘的な", "明白な", "論理的な", "現実的な"],
        correctAnswer: "神秘的な"
     },
     { 
        id: 750,
        question: "magnify",
        choices: ["拡大する", "縮小する", "削減する", "弱める"],
        correctAnswer: "拡大する"
     },
     { 
        id: 751,
        question: "impending",
        choices: ["起こりそうな", "確定した", "終了した", "不可能な"],
        correctAnswer: "起こりそうな"
     },
     { 
        id: 752,
        question: "gallant",
        choices: ["勇敢な", "臆病な", "弱い", "慎重な"],
        correctAnswer: "勇敢な"
     },
     { 
        id: 753,
        question: "appease",
        choices: ["なだめる", "怒らせる", "無視する", "煽る"],
        correctAnswer: "なだめる"
     },
     { 
        id: 754,
        question: "reverberate",
        choices: ["反響する", "静まる", "停止する", "消える"],
        correctAnswer: "反響する"
     },
     { 
        id: 755,
        question: "groundless",
        choices: ["根拠のない", "証拠のある", "正確な", "具体的な"],
        correctAnswer: "根拠のない"
     },
     { 
        id: 756,
        question: "invincible",
        choices: ["無敵の", "弱い", "壊れやすい", "負けやすい"],
        correctAnswer: "無敵の"
     },
     { 
        id: 757,
        question: "deficient",
        choices: ["欠乏した", "十分な", "豊富な", "完全な"],
        correctAnswer: "欠乏した"
     },
     { 
        id: 758,
        question: "pass for",
        choices: ["として通る", "拒絶される", "疑われる", "見逃される"],
        correctAnswer: "として通る"
     },
     { 
        id: 759,
        question: "singular",
        choices: ["特異な", "一般的な", "普通の", "平凡な"],
        correctAnswer: "特異な"
     },
     { 
        id: 760,
        question: "indifferent",
        choices: ["無関心な", "熱心な", "興味深い", "積極的な"],
        correctAnswer: "無関心な"
     },
     { 
        id: 761,
        question: "devolve",
        choices: ["譲り渡す", "保持する", "削除する", "変えない"],
        correctAnswer: "譲り渡す"
     },
     { 
        id: 762,
        question: "emanate",
        choices: ["発する", "吸収する", "隠す", "拒否する"],
        correctAnswer: "発する"
     },
     { 
        id: 763,
        question: "inconspicuous",
        choices: ["目立たない", "顕著な", "明るい", "派手な"],
        correctAnswer: "目立たない"
     },
     { 
        id: 764,
        question: "pediatric",
        choices: ["小児科の", "老人医療の", "外科の", "精神医学の"],
        correctAnswer: "小児科の"
     },
     { 
        id: 765,
        question: "wartime",
        choices: ["戦時", "平和時", "休日", "休戦期間"],
        correctAnswer: "戦時"
     },
     { 
        id: 766,
        question: "pristine",
        choices: ["元の", "変更された", "破損した", "汚れた"],
        correctAnswer: "元の"
     },
     { 
        id: 767,
        question: "incompetent",
        choices: ["無能な", "優秀な", "有能な", "卓越した"],
        correctAnswer: "無能な"
     },
     { 
        id: 768,
        question: "bask",
        choices: ["日向ぼっこする", "避ける", "隠れる", "冷える"],
        correctAnswer: "日向ぼっこする"
     },
     { 
        id: 769,
        question: "duplicate",
        choices: ["複製する", "破壊する", "削除する", "無視する"],
        correctAnswer: "複製する"
     },
     { 
        id: 770,
        question: "definitive",
        choices: ["決定的な", "曖昧な", "不確実な", "一時的な"],
        correctAnswer: "決定的な"
     },
     { 
        id: 771,
        question: "treachery",
        choices: ["裏切り", "忠誠", "信頼", "友情"],
        correctAnswer: "裏切り"
     },
     { 
        id: 772,
        question: "hamper",
        choices: ["妨げる", "助ける", "促進する", "解決する"],
        correctAnswer: "妨げる"
     },
     { 
        id: 773,
        question: "back down",
        choices: ["手を引く", "主張する", "進む", "継続する"],
        correctAnswer: "手を引く"
     },
     { 
        id: 774,
        question: "stern",
        choices: ["厳しい", "優しい", "寛容な", "穏やかな"],
        correctAnswer: "厳しい"
     },
     { 
        id: 775,
        question: "chide",
        choices: ["叱る", "褒める", "励ます", "支持する"],
        correctAnswer: "叱る"
     },
     { 
        id: 776,
        question: "crackle",
        choices: ["パチパチと音をたてる", "静かにする", "滑らかにする", "消音する"],
        correctAnswer: "パチパチと音をたてる"
     },
     { 
        id: 777,
        question: "peek",
        choices: ["ちらっと覗く", "じっくり見る", "隠す", "無視する"],
        correctAnswer: "ちらっと覗く"
     },
     { 
        id: 778,
        question: "obsolete",
        choices: ["時代遅れの", "最新の", "進歩的な", "革新的な"],
        correctAnswer: "時代遅れの"
     },
     { 
        id: 779,
        question: "proportionate",
        choices: ["比例した", "不均等な", "不釣り合いな", "無関係な"],
        correctAnswer: "比例した"
     },
     { 
        id: 780,
        question: "viable",
        choices: ["生存できる", "不可能な", "不安定な", "危険な"],
        correctAnswer: "生存できる"
     },
     { 
        id: 781,
        question: "grate",
        choices: ["格子", "窓", "壁", "天井"],
        correctAnswer: "格子"
     },
     { 
        id: 782,
        question: "bank on",
        choices: ["を当てにする", "を疑う", "を避ける", "を軽視する"],
        correctAnswer: "を当てにする"
     },
     { 
        id: 783,
        question: "neutralize",
        choices: ["中和する", "強化する", "削減する", "増大する"],
        correctAnswer: "中和する"
     },
     { 
        id: 784,
        question: "graceful",
        choices: ["優雅な", "無作法な", "不器用な", "荒々しい"],
        correctAnswer: "優雅な"
     },
     { 
        id: 785,
        question: "fall off",
        choices: ["減少する", "増加する", "拡張する", "安定する"],
        correctAnswer: "減少する"
     },
     { 
        id: 786,
        question: "look down on",
        choices: ["を見下す", "を尊敬する", "を賞賛する", "を支援する"],
        correctAnswer: "を見下す"
     },
     { 
        id: 787,
        question: "stingy",
        choices: ["けちな", "寛大な", "気前の良い", "惜しまない"],
        correctAnswer: "けちな"
     },
     { 
        id: 788,
        question: "jab",
        choices: ["突き刺す", "撫でる", "削る", "曲げる"],
        correctAnswer: "突き刺す"
     },
     { 
        id: 789,
        question: "dusky",
        choices: ["薄暗い", "明るい", "鮮やかな", "派手な"],
        correctAnswer: "薄暗い"
     },
     { 
        id: 790,
        question: "subdivision",
        choices: ["細分化", "統合", "削除", "拡張"],
        correctAnswer: "細分化"
     },
     { 
        id: 791,
        question: "focal",
        choices: ["焦点の", "周辺の", "無関係な", "不明瞭な"],
        correctAnswer: "焦点の"
     },
     { 
        id: 792,
        question: "shun",
        choices: ["避ける", "歓迎する", "受け入れる", "支援する"],
        correctAnswer: "避ける"
     },
     { 
        id: 793,
        question: "wig",
        choices: ["カツラ", "帽子", "布", "手袋"],
        correctAnswer: "カツラ"
     },
     { 
        id: 794,
        question: "discernible",
        choices: ["識別できる", "曖昧な", "不確かな", "不可視の"],
        correctAnswer: "識別できる"
     },
     { 
        id: 795,
        question: "exhilarate",
        choices: ["陽気にさせる", "落ち込ませる", "混乱させる", "無視する"],
        correctAnswer: "陽気にさせる"
     },
     { 
        id: 796,
        question: "customary",
        choices: ["慣習的な", "革新的な", "新奇な", "偶発的な"],
        correctAnswer: "慣習的な"
     },
     { 
        id: 797,
        question: "stick around",
        choices: ["居残る", "立ち去る", "逃げる", "避ける"],
        correctAnswer: "居残る"
     },
     { 
        id: 798,
        question: "stuffed",
        choices: ["詰め込んだ", "空の", "軽い", "無関係な"],
        correctAnswer: "詰め込んだ"
     },
     { 
        id: 799,
        question: "mince",
        choices: ["刻む", "丸ごと食べる", "潰す", "焼く"],
        correctAnswer: "刻む"
     },
     { 
        id: 800,
        question: "statutory",
        choices: ["法定の", "任意の", "自由な", "不確定な"],
        correctAnswer: "法定の"
     },
     { 
        id: 801,
        question: "role model",
        choices: ["お手本", "敵", "競争相手", "部下"],
        correctAnswer: "お手本"
     },
     { 
        id: 802,
        question: "obstruct",
        choices: ["邪魔する", "助ける", "促進する", "修正する"],
        correctAnswer: "邪魔する"
     },
     { 
        id: 803,
        question: "stature",
        choices: ["身長", "体重", "年齢", "血圧"],
        correctAnswer: "身長"
     },
     { 
        id: 804,
        question: "talk down to",
        choices: ["見下して話す", "尊敬して話す", "フレンドリーに話す", "無視する"],
        correctAnswer: "見下して話す"
     },
     { 
        id: 805,
        question: "recurring",
        choices: ["繰り返し", "一度だけの", "偶発的な", "突発的な"],
        correctAnswer: "繰り返し"
     },
     { 
        id: 806,
        question: "ignite",
        choices: ["点火する", "消火する", "冷やす", "抑える"],
        correctAnswer: "点火する"
     },
     { 
        id: 807,
        question: "make progress",
        choices: ["進歩する", "後退する", "停滞する", "終了する"],
        correctAnswer: "進歩する"
     },
     { 
        id: 808,
        question: "lose out to",
        choices: ["に負ける", "勝つ", "圧勝する", "無視する"],
        correctAnswer: "に負ける"
     },
     { 
        id: 809,
        question: "ominous",
        choices: ["不吉な", "幸運な", "楽観的な", "有望な"],
        correctAnswer: "不吉な"
     },
     { 
        id: 810,
        question: "mitigate",
        choices: ["和らげる", "悪化させる", "増強する", "強める"],
        correctAnswer: "和らげる"
     },
     { 
        id: 811,
        question: "vicar",
        choices: ["牧師", "医者", "弁護士", "教師"],
        correctAnswer: "牧師"
     },
     { 
        id: 812,
        question: "collateral",
        choices: ["並び合った", "単独の", "分離した", "独立した"],
        correctAnswer: "並び合った"
     },
     { 
        id: 813,
        question: "semantic",
        choices: ["意味論の", "数学の", "歴史の", "地理の"],
        correctAnswer: "意味論の"
     },
     { 
        id: 814,
        question: "disquiet",
        choices: ["不穏な", "安定した", "落ち着いた", "確定した"],
        correctAnswer: "不穏な"
     },
     { 
        id: 815,
        question: "hale",
        choices: ["元気な", "弱った", "病気の", "衰えた"],
        correctAnswer: "元気な"
     },
     { 
        id: 816,
        question: "muse",
        choices: ["深く考える", "すぐ決断する", "忘れる", "疑う"],
        correctAnswer: "深く考える"
     },
     { 
        id: 817,
        question: "autonomous",
        choices: ["自律的な", "従属的な", "依存する", "指示待ちの"],
        correctAnswer: "自律的な"
     },
     { 
        id: 818,
        question: "give over",
        choices: ["を任せる", "を放棄する", "を拒否する", "を独占する"],
        correctAnswer: "を任せる"
     },
     { 
        id: 819,
        question: "gloat",
        choices: ["満足げに眺める", "無関心に見る", "批判する", "避ける"],
        correctAnswer: "満足げに眺める"
     },
     { 
        id: 820,
        question: "retaliate",
        choices: ["報復する", "許す", "逃げる", "隠れる"],
        correctAnswer: "報復する"
     },
     { 
        id: 821,
        question: "relinquish",
        choices: ["放棄する", "保持する", "守る", "回収する"],
        correctAnswer: "放棄する"
     },
     { 
        id: 822,
        question: "superfluous",
        choices: ["余計な", "必要な", "不可欠な", "重要な"],
        correctAnswer: "余計な"
     },
     { 
        id: 823,
        question: "make over",
        choices: ["を作り替える", "を放棄する", "を削除する", "を無視する"],
        correctAnswer: "を作り替える"
     },
     { 
        id: 824,
        question: "stop A from doing B",
        choices: ["AがBすることを止める", "AがBするのを促す", "AがBするのを奨励する", "AがBするのを支援する"],
        correctAnswer: "AがBすることを止める"
     },
     { 
        id: 825,
        question: "scoff",
        choices: ["嘲笑する", "尊敬する", "認める", "擁護する"],
        correctAnswer: "嘲笑する"
     },
     { 
        id: 826,
        question: "cringe",
        choices: ["すくむ", "勇敢になる", "前進する", "抵抗する"],
        correctAnswer: "すくむ"
     },
     { 
        id: 827,
        question: "pissed",
        choices: ["腹を立てた", "喜んでいる", "冷静な", "満足している"],
        correctAnswer: "腹を立てた"
     },
     { 
        id: 828,
        question: "despite",
        choices: ["にも関わらず", "だからこそ", "しかし", "それに加えて"],
        correctAnswer: "にも関わらず"
     },
     { 
        id: 829,
        question: "benign",
        choices: ["良性の", "悪性の", "危険な", "不吉な"],
        correctAnswer: "良性の"
     },
     { 
        id: 830,
        question: "bring on",
        choices: ["を引き起こす", "を防ぐ", "を避ける", "を鎮める"],
        correctAnswer: "を引き起こす"
     },
     { 
        id: 831,
        question: "inflammatory",
        choices: ["炎症性の", "鎮静の", "冷却の", "中立の"],
        correctAnswer: "炎症性の"
     },
     { 
        id: 832,
        question: "wharf",
        choices: ["波止場", "道路", "駅", "橋"],
        correctAnswer: "波止場"
     },
     { 
        id: 833,
        question: "press for",
        choices: ["をせがむ", "を拒否する", "を避ける", "を緩める"],
        correctAnswer: "をせがむ"
     },
     { 
        id: 834,
        question: "shear",
        choices: ["刈り取る", "植える", "育てる", "維持する"],
        correctAnswer: "刈り取る"
     },
     { 
        id: 835,
        question: "incumbent",
        choices: ["責務がある", "自由である", "免除されている", "権限がない"],
        correctAnswer: "責務がある"
     },
     { 
        id: 836,
        question: "wistful",
        choices: ["もの悲しい", "楽しい", "愉快な", "明るい"],
        correctAnswer: "もの悲しい"
     },
     { 
        id: 837,
        question: "disgraceful",
        choices: ["恥ずかしい", "誇らしい", "敬うべき", "素晴らしい"],
        correctAnswer: "恥ずかしい"
     },
     { 
        id: 838,
        question: "invest in",
        choices: ["に投資する", "を無視する", "を消費する", "を節約する"],
        correctAnswer: "に投資する"
     },
     { 
        id: 839,
        question: "sinister",
        choices: ["不吉な", "幸運な", "縁起の良い", "明るい"],
        correctAnswer: "不吉な"
     },
     { 
        id: 840,
        question: "sprout",
        choices: ["芽", "根", "葉", "枝"],
        correctAnswer: "芽"
     },
     { 
        id: 841,
        question: "fraudulent",
        choices: ["詐欺", "誠実な", "信用できる", "公正な"],
        correctAnswer: "詐欺"
     },
     { 
        id: 842,
        question: "improvise",
        choices: ["即興で作る", "計画的に作る", "慎重に設計する", "準備する"],
        correctAnswer: "即興で作る"
     },
     { 
        id: 843,
        question: "turnaround",
        choices: ["方向転換", "停滞", "縮小", "安定"],
        correctAnswer: "方向転換"
     },
     { 
        id: 844,
        question: "contentious",
        choices: ["論争好きな", "穏やかな", "控えめな", "非対立的な"],
        correctAnswer: "論争好きな"
     },
     { 
        id: 845,
        question: "sag",
        choices: ["たるむ", "引き締まる", "伸びる", "膨らむ"],
        correctAnswer: "たるむ"
     },
     { 
        id: 846,
        question: "eat up",
        choices: ["食べつくす", "少し食べる", "避ける", "残す"],
        correctAnswer: "食べつくす"
     },
     { 
        id: 847,
        question: "entreat",
        choices: ["懇願する", "拒否する", "避ける", "命令する"],
        correctAnswer: "懇願する"
     },
     { 
        id: 848,
        question: "gastric",
        choices: ["胃の", "肺の", "肝臓の", "腎臓の"],
        correctAnswer: "胃の"
     },
     { 
        id: 849,
        question: "revoke",
        choices: ["取り消す", "承認する", "発行する", "更新する"],
        correctAnswer: "取り消す"
     },
     { 
        id: 850,
        question: "branch off",
        choices: ["分岐する", "直進する", "縮小する", "統合する"],
        correctAnswer: "分岐する"
     },
     { 
        id: 851,
        question: "coax",
        choices: ["説き伏せる", "拒否する", "無視する", "誤解する"],
        correctAnswer: "説き伏せる"
     },
     { 
        id: 852,
        question: "illicit",
        choices: ["不法の", "合法の", "公正な", "認可された"],
        correctAnswer: "不法の"
     },
     { 
        id: 853,
        question: "cut off",
        choices: ["を断つ", "を延長する", "を保つ", "を増やす"],
        correctAnswer: "を断つ"
     },
     { 
        id: 854,
        question: "briskly",
        choices: ["活発に", "ゆっくりと", "慎重に", "静かに"],
        correctAnswer: "活発に"
     },
     { 
        id: 855,
        question: "languish",
        choices: ["弱る", "強くなる", "成長する", "繁栄する"],
        correctAnswer: "弱る"
     },
     { 
        id: 856,
        question: "avenge",
        choices: ["仇を討つ", "許す", "支援する", "避ける"],
        correctAnswer: "仇を討つ"
     },
     { 
        id: 857,
        question: "divisive",
        choices: ["不和の生じた", "統一された", "友好的な", "調和のとれた"],
        correctAnswer: "不和の生じた"
     },
     { 
        id: 858,
        question: "diminutive",
        choices: ["とても小さな", "巨大な", "普通の", "壮大な"],
        correctAnswer: "とても小さな"
     },
     { 
        id: 859,
        question: "beckon",
        choices: ["手招きする", "避ける", "叱る", "否定する"],
        correctAnswer: "手招きする"
     },
     { 
        id: 860,
        question: "elude",
        choices: ["逃げる", "追う", "捕まえる", "保護する"],
        correctAnswer: "逃げる"
     },
     { 
        id: 861,
        question: "enclose",
        choices: ["囲む", "解放する", "放置する", "無視する"],
        correctAnswer: "囲む"
     },
     { 
        id: 862,
        question: "espouse",
        choices: ["支持する", "反対する", "避ける", "疑う"],
        correctAnswer: "支持する"
     },
     { 
        id: 863,
        question: "imminent",
        choices: ["差し迫った", "遠い", "予測不可能な", "無関係な"],
        correctAnswer: "差し迫った"
     },
     { 
        id: 864,
        question: "quash",
        choices: ["鎮圧する", "促進する", "奨励する", "維持する"],
        correctAnswer: "鎮圧する"
     },
     { 
        id: 865,
        question: "get into",
        choices: ["に入り込む", "を避ける", "を諦める", "を忘れる"],
        correctAnswer: "に入り込む"
     },
     { 
        id: 866,
        question: "toddler",
        choices: ["幼児", "成人", "老人", "青年"],
        correctAnswer: "幼児"
     },
     { 
        id: 867,
        question: "peddle",
        choices: ["行商する", "貯蔵する", "隠す", "拒否する"],
        correctAnswer: "行商する"
     },
     { 
        id: 868,
        question: "relegate",
        choices: ["左遷する", "昇進させる", "賞賛する", "引き上げる"],
        correctAnswer: "左遷する"
     },
     { 
        id: 869,
        question: "waterfall",
        choices: ["滝", "湖", "川", "池"],
        correctAnswer: "滝"
     },
     { 
        id: 870,
        question: "warden",
        choices: ["監視員", "犯罪者", "観光客", "指導者"],
        correctAnswer: "監視員"
     },
     { 
        id: 871,
        question: "mediocre",
        choices: ["平凡な", "卓越した", "特別な", "異常な"],
        correctAnswer: "平凡な"
     },
     { 
        id: 872,
        question: "derail",
        choices: ["脱線させる", "軌道に戻す", "支援する", "強化する"],
        correctAnswer: "脱線させる"
     },
     { 
        id: 873,
        question: "inflame",
        choices: ["燃え上がらせる", "鎮める", "冷却する", "抑える"],
        correctAnswer: "燃え上がらせる"
     },
     { 
        id: 874,
        question: "urine",
        choices: ["尿", "血液", "汗", "唾液"],
        correctAnswer: "尿"
     },
     { 
        id: 875,
        question: "watershed",
        choices: ["分水領", "谷", "山脈", "平野"],
        correctAnswer: "分水領"
     },
     { 
        id: 876,
        question: "intermediary",
        choices: ["仲介の", "対立する", "独立した", "競争的な"],
        correctAnswer: "仲介の"
     },
     { 
        id: 877,
        question: "ultraviolet",
        choices: ["紫外線の", "赤外線の", "可視光の", "放射線の"],
        correctAnswer: "紫外線の"
     },
     { 
        id: 878,
        question: "wary",
        choices: ["警戒している", "無防備な", "楽観的な", "軽率な"],
        correctAnswer: "警戒している"
     },
     { 
        id: 879,
        question: "dish out",
        choices: ["盛り付ける", "片付ける", "捨てる", "溶かす"],
        correctAnswer: "盛り付ける"
     },
     { 
        id: 880,
        question: "vigorously",
        choices: ["精力的に", "弱々しく", "怠惰に", "ゆっくりと"],
        correctAnswer: "精力的に"
     },
     { 
        id: 881,
        question: "tint",
        choices: ["色合い", "形状", "光", "影"],
        correctAnswer: "色合い"
     },
     { 
        id: 882,
        question: "nudge",
        choices: ["軽くつつく", "強く押す", "殴る", "投げる"],
        correctAnswer: "軽くつつく"
     },
     { 
        id: 883,
        question: "quarrelsome",
        choices: ["議論好きな", "平和的な", "静かな", "優しい"],
        correctAnswer: "議論好きな"
     },
     { 
        id: 884,
        question: "creepy",
        choices: ["気味悪い", "魅力的な", "安心できる", "和やかな"],
        correctAnswer: "気味悪い"
     },
     { 
        id: 885,
        question: "fragmentary",
        choices: ["断片的な", "完全な", "詳細な", "統一された"],
        correctAnswer: "断片的な"
     },
     { 
        id: 886,
        question: "sorely",
        choices: ["ひどく", "軽く", "穏やかに", "弱く"],
        correctAnswer: "ひどく"
     },
     { 
        id: 887,
        question: "vocational",
        choices: ["職業の", "趣味の", "学問的な", "娯楽の"],
        correctAnswer: "職業の"
     },
     { 
        id: 888,
        question: "set aside",
        choices: ["横に置く", "放棄する", "壊す", "組み立てる"],
        correctAnswer: "横に置く"
     },
     { 
        id: 889,
        question: "eschew",
        choices: ["避ける", "追いかける", "受け入れる", "賞賛する"],
        correctAnswer: "避ける"
     },
     { 
        id: 890,
        question: "disguise",
        choices: ["変装させる", "暴露する", "維持する", "誇示する"],
        correctAnswer: "変装させる"
     },
     { 
        id: 891,
        question: "usher",
        choices: ["案内係", "監督", "訪問者", "観客"],
        correctAnswer: "案内係"
     },
     { 
        id: 892,
        question: "scattered",
        choices: ["散らばった", "整然とした", "規則的な", "集中した"],
        correctAnswer: "散らばった"
     },
     { 
        id: 893,
        question: "jumble",
        choices: ["乱雑にする", "整理する", "磨く", "統一する"],
        correctAnswer: "乱雑にする"
     },
     { 
        id: 894,
        question: "dormant",
        choices: ["休眠中の", "活発な", "速い", "明白な"],
        correctAnswer: "休眠中の"
     },
     { 
        id: 895,
        question: "corrupt",
        choices: ["不正行為をする", "正直である", "公平である", "道徳的である"],
        correctAnswer: "不正行為をする"
     },
     { 
        id: 896,
        question: "crackdown",
        choices: ["取り締まり", "許可", "奨励", "放置"],
        correctAnswer: "取り締まり"
     },
     { 
        id: 897,
        question: "malaise",
        choices: ["不快感", "快適さ", "安心", "幸福"],
        correctAnswer: "不快感"
     },
     { 
        id: 898,
        question: "bigotry",
        choices: ["偏屈", "公平さ", "柔軟性", "中立"],
        correctAnswer: "偏屈"
     },
     { 
        id: 899,
        question: "fanatic",
        choices: ["狂信者", "冷静な人", "無関心な人", "慎重な人"],
        correctAnswer: "狂信者"
     },
     { 
        id: 900,
        question: "stash",
        choices: ["隠しておく", "公開する", "捨てる", "交換する"],
        correctAnswer: "隠しておく"
     },
     { 
        id: 901,
        question: "reconnaissance",
        choices: ["偵察", "探索", "攻撃", "撤退"],
        correctAnswer: "偵察"
     },
     { 
        id: 902,
        question: "proclamation",
        choices: ["宣言", "秘密", "否定", "制限"],
        correctAnswer: "宣言"
     },
     { 
        id: 903,
        question: "inhibitor",
        choices: ["抑制する人", "促進する人", "無関係な人", "支持者"],
        correctAnswer: "抑制する人"
     },
     { 
        id: 904,
        question: "to the point",
        choices: ["適切な", "無関係な", "誇張した", "過度な"],
        correctAnswer: "適切な"
     },
     { 
        id: 905,
        question: "rancor",
        choices: ["怨恨", "友情", "信頼", "愛情"],
        correctAnswer: "怨恨"
     },
     { 
        id: 906,
        question: "transcribe",
        choices: ["複写する", "消去する", "破壊する", "削減する"],
        correctAnswer: "複写する"
     },
     { 
        id: 907,
        question: "catch on",
        choices: ["流行する", "廃れる", "無視される", "忘れられる"],
        correctAnswer: "流行する"
     },
     { 
        id: 908,
        question: "rift",
        choices: ["切れ目", "つながり", "補強", "修復"],
        correctAnswer: "切れ目"
     },
     { 
        id: 909,
        question: "chant",
        choices: ["単調な歌", "激しい音楽", "静かなメロディ", "クラシック音楽"],
        correctAnswer: "単調な歌"
     },
     { 
        id: 910,
        question: "edifice",
        choices: ["建築物", "芸術作品", "小物", "家具"],
        correctAnswer: "建築物"
     },
     { 
        id: 911,
        question: "rectitude",
        choices: ["実直さ", "不誠実さ", "狡猾さ", "軽率さ"],
        correctAnswer: "実直さ"
     },
     { 
        id: 912,
        question: "puddle",
        choices: ["水たまり", "湖", "川", "海"],
        correctAnswer: "水たまり"
     },
     { 
        id: 913,
        question: "flurry",
        choices: ["突風", "穏やかな風", "微風", "無風"],
        correctAnswer: "突風"
     },
     { 
        id: 914,
        question: "take A away from B",
        choices: ["BからAを取る", "AをBに与える", "AとBを交換する", "BにAを加える"],
        correctAnswer: "BからAを取る"
     },
     { 
        id: 915,
        question: "quartet",
        choices: ["四人組", "三人組", "五人組", "二人組"],
        correctAnswer: "四人組"
     },
     { 
        id: 916,
        question: "prelude",
        choices: ["前触れ", "結末", "本題", "後日談"],
        correctAnswer: "前触れ"
     },
     { 
        id: 917,
        question: "penchant",
        choices: ["強い好み", "嫌悪", "無関心", "冷淡"],
        correctAnswer: "強い好み"
     },
     { 
        id: 918,
        question: "skew",
        choices: ["斜めの", "まっすぐな", "均整のとれた", "対称的な"],
        correctAnswer: "斜めの"
     },
     { 
        id: 919,
        question: "read off",
        choices: ["を読み上げる", "黙読する", "忘れる", "無視する"],
        correctAnswer: "を読み上げる"
     },
     { 
        id: 920,
        question: "on the run",
        choices: ["逃走中の", "静止している", "安全な", "保護された"],
        correctAnswer: "逃走中の"
     },
     { 
        id: 921,
        question: "ensemble",
        choices: ["全体的効果", "個別の影響", "一部の要素", "分断された部分"],
        correctAnswer: "全体的効果"
     },
     { 
        id: 922,
        question: "remedy",
        choices: ["治療法", "病気", "症状", "予防策"],
        correctAnswer: "治療法"
     },
     { 
        id: 923,
        question: "rout",
        choices: ["敗走", "勝利", "成功", "発展"],
        correctAnswer: "敗走"
     },
     { 
        id: 924,
        question: "saving account",
        choices: ["普通預金", "借金", "ローン", "投資口座"],
        correctAnswer: "普通預金"
     },
     { 
        id: 925,
        question: "resurrection",
        choices: ["復活", "消滅", "終焉", "停止"],
        correctAnswer: "復活"
     },
     { 
        id: 926,
        question: "frost",
        choices: ["霜", "雨", "雪", "風"],
        correctAnswer: "霜"
     },
     { 
        id: 927,
        question: "locus",
        choices: ["座標", "速度", "時間", "質量"],
        correctAnswer: "座標"
     },
     { 
        id: 928,
        question: "fatality",
        choices: ["死者", "生存者", "回復者", "無傷者"],
        correctAnswer: "死者"
     },
     { 
        id: 929,
        question: "pathology",
        choices: ["病理学", "生態学", "物理学", "化学"],
        correctAnswer: "病理学"
     },
     { 
        id: 930,
        question: "whirl",
        choices: ["渦巻く", "静止する", "直進する", "減速する"],
        correctAnswer: "渦巻く"
     },
     { 
        id: 931,
        question: "evasion",
        choices: ["回避", "対決", "受け入れ", "許容"],
        correctAnswer: "回避"
     },
     { 
        id: 932,
        question: "fallacy",
        choices: ["誤信", "真実", "確信", "知識"],
        correctAnswer: "誤信"
     },
     { 
        id: 933,
        question: "marrow",
        choices: ["骨髄", "皮膚", "筋肉", "神経"],
        correctAnswer: "骨髄"
     },
     { 
        id: 934,
        question: "hiatus",
        choices: ["隙間", "連続", "充填", "結合"],
        correctAnswer: "隙間"
     },
     { 
        id: 935,
        question: "convergence",
        choices: ["収束", "分散", "拡散", "崩壊"],
        correctAnswer: "収束"
     },
     { 
        id: 936,
        question: "rebuff",
        choices: ["拒絶", "受け入れ", "歓迎", "承認"],
        correctAnswer: "拒絶"
     },
     { 
        id: 937,
        question: "coffer",
        choices: ["金庫", "財布", "バッグ", "棚"],
        correctAnswer: "金庫"
     },
     { 
        id: 938,
        question: "cohort",
        choices: ["軍隊", "敵軍", "孤立した人", "指導者"],
        correctAnswer: "軍隊"
     },
     { 
        id: 939,
        question: "retaliation",
        choices: ["報復", "和解", "謝罪", "降伏"],
        correctAnswer: "報復"
     },
     { 
        id: 940,
        question: "hyperbole",
        choices: ["誇張", "事実", "控えめな表現", "誤解"],
        correctAnswer: "誇張"
     },
     { 
        id: 941,
        question: "bower",
        choices: ["木陰", "草原", "岩場", "沼地"],
        correctAnswer: "木陰"
     },
     { 
        id: 942,
        question: "sanitation",
        choices: ["衛生", "汚染", "不潔", "病気"],
        correctAnswer: "衛生"
     },
     { 
        id: 943,
        question: "pilgrimage",
        choices: ["巡礼", "冒険", "戦争", "旅行"],
        correctAnswer: "巡礼"
     },
     { 
        id: 944,
        question: "outskirt",
        choices: ["郊外", "都市", "中心地", "住宅地"],
        correctAnswer: "郊外"
     },
     { 
        id: 945,
        question: "wince",
        choices: ["ひるむ", "進む", "笑う", "喜ぶ"],
        correctAnswer: "ひるむ"
     },
     { 
        id: 946,
        question: "crate",
        choices: ["箱", "瓶", "袋", "皿"],
        correctAnswer: "箱"
     },
     { 
        id: 947,
        question: "neutron",
        choices: ["中性子", "電子", "陽子", "分子"],
        correctAnswer: "中性子"
     },
     { 
        id: 948,
        question: "testimonial",
        choices: ["証明書", "契約書", "請求書", "領収書"],
        correctAnswer: "証明書"
     },
     { 
        id: 949,
        question: "set in",
        choices: ["始まる", "終わる", "遅れる", "中止する"],
        correctAnswer: "始まる"
     },
     { 
        id: 950,
        question: "gala",
        choices: ["祭り", "会議", "選挙", "法廷"],
        correctAnswer: "祭り"
     },
     { 
        id: 951,
        question: "provide A with B",
        choices: ["AにBを供給する", "AからBを奪う", "AとBを交換する", "AをBで満たす"],
        correctAnswer: "AにBを供給する"
     },
     { 
        id: 952,
        question: "what if",
        choices: ["もし～ならば", "絶対に", "まさか", "すでに"],
        correctAnswer: "もし～ならば"
     },
     { 
        id: 953,
        question: "clump",
        choices: ["木立ち", "砂漠", "湖", "草原"],
        correctAnswer: "木立ち"
     },
     { 
        id: 954,
        question: "perimeter",
        choices: ["周囲", "中心", "上空", "内部"],
        correctAnswer: "周囲"
     },
     { 
        id: 955,
        question: "repository",
        choices: ["倉庫", "公園", "学校", "住宅"],
        correctAnswer: "倉庫"
     },
     { 
        id: 956,
        question: "buffer",
        choices: ["緩衝", "加速", "衝突", "破壊"],
        correctAnswer: "緩衝"
     },
     { 
        id: 957,
        question: "courtship",
        choices: ["求愛", "敵対", "戦争", "拒絶"],
        correctAnswer: "求愛"
     },
     { 
        id: 958,
        question: "turn down",
        choices: ["を断る", "を受け入れる", "を強化する", "を促進する"],
        correctAnswer: "を断る"
     },
     { 
        id: 959,
        question: "hand off",
        choices: ["を渡す", "を奪う", "を保管する", "を破棄する"],
        correctAnswer: "を渡す"
     },
     { 
        id: 960,
        question: "shackle",
        choices: ["手錠", "首輪", "帽子", "靴"],
        correctAnswer: "手錠"
     },
     { 
        id: 961,
        question: "prank",
        choices: ["いたずら", "演説", "論争", "実験"],
        correctAnswer: "いたずら"
     },
     { 
        id: 962,
        question: "shut out",
        choices: ["を締め出す", "を歓迎する", "を呼び込む", "を拡大する"],
        correctAnswer: "を締め出す"
     },
     { 
        id: 963,
        question: "contribute to",
        choices: ["に貢献する", "を妨げる", "を軽視する", "を無視する"],
        correctAnswer: "に貢献する"
     },
     { 
        id: 964,
        question: "look to",
        choices: ["を頼りにする", "を無視する", "を疑う", "を批判する"],
        correctAnswer: "を頼りにする"
     },
     { 
        id: 965,
        question: "antipathy",
        choices: ["反感", "愛情", "共感", "尊敬"],
        correctAnswer: "反感"
     },
     { 
        id: 966,
        question: "configure",
        choices: ["構成", "破壊", "削除", "拒否"],
        correctAnswer: "構成"
     },
     { 
        id: 967,
        question: "libel",
        choices: ["名誉毀損", "賞賛", "信頼", "名声"],
        correctAnswer: "名誉毀損"
     },
     { 
        id: 968,
        question: "enactment",
        choices: ["立法", "廃止", "無効", "混乱"],
        correctAnswer: "立法"
     },
     { 
        id: 969,
        question: "accreditation",
        choices: ["認定", "拒否", "誤解", "偽造"],
        correctAnswer: "認定"
     },
     { 
        id: 970,
        question: "invader",
        choices: ["侵略者", "防衛者", "外交官", "学者"],
        correctAnswer: "侵略者"
     },
     { 
        id: 971,
        question: "caliber",
        choices: ["口径", "長さ", "高さ", "厚み"],
        correctAnswer: "口径"
     },
     { 
        id: 972,
        question: "set off",
        choices: ["を引き起こす", "を止める", "を防ぐ", "を抑える"],
        correctAnswer: "を引き起こす"
     },
     { 
        id: 973,
        question: "get by",
        choices: ["どうにか切り抜ける", "失敗する", "立ち止まる", "迷う"],
        correctAnswer: "どうにか切り抜ける"
     },
     { 
        id: 974,
        question: "lighthouse",
        choices: ["灯台", "教会", "城", "塔"],
        correctAnswer: "灯台"
     },
     { 
        id: 975,
        question: "give off",
        choices: ["を放つ", "を吸収する", "を無視する", "を閉じ込める"],
        correctAnswer: "を放つ"
     },
     { 
        id: 976,
        question: "hang around",
        choices: ["うろつく", "急ぐ", "隠れる", "走る"],
        correctAnswer: "うろつく"
     },
     { 
        id: 977,
        question: "connoisseur",
        choices: ["鑑定家", "初心者", "見習い", "素人"],
        correctAnswer: "鑑定家"
     },
     { 
        id: 978,
        question: "masculinity",
        choices: ["男らしさ", "女性らしさ", "中性的", "幼さ"],
        correctAnswer: "男らしさ"
     },
     { 
        id: 979,
        question: "glee",
        choices: ["歓喜", "悲しみ", "恐れ", "怒り"],
        correctAnswer: "歓喜"
     },
     { 
        id: 980,
        question: "pseudonym",
        choices: ["偽名", "本名", "芸名", "肩書"],
        correctAnswer: "偽名"
     },
     { 
        id: 981,
        question: "bane",
        choices: ["悩みの種", "解決策", "幸福", "希望"],
        correctAnswer: "悩みの種"
     },
     { 
        id: 982,
        question: "goad",
        choices: ["つき棒", "槍", "盾", "刀"],
        correctAnswer: "つき棒"
     },
     { 
        id: 983,
        question: "abbey",
        choices: ["修道院", "宮殿", "市場", "学校"],
        correctAnswer: "修道院"
     },
     { 
        id: 984,
        question: "wobble",
        choices: ["ぐらぐらする", "安定する", "固定する", "伸びる"],
        correctAnswer: "ぐらぐらする"
     },
     { 
        id: 985,
        question: "opus",
        choices: ["作品", "道具", "技術", "仕事"],
        correctAnswer: "作品"
     },
     { 
        id: 986,
        question: "quip",
        choices: ["警句", "冗談", "謎", "怒声"],
        correctAnswer: "警句"
     },
     { 
        id: 987,
        question: "swoon",
        choices: ["気絶", "歓喜", "緊張", "不安"],
        correctAnswer: "気絶"
     },
     { 
        id: 988,
        question: "bring out",
        choices: ["を引き出す", "を隠す", "を中断する", "を忘れる"],
        correctAnswer: "を引き出す"
     },
     { 
        id: 989,
        question: "hub",
        choices: ["中心部", "端", "外れ", "境界"],
        correctAnswer: "中心部"
     },
     { 
        id: 990,
        question: "plume",
        choices: ["飾り羽根", "帽子", "靴", "鞄"],
        correctAnswer: "飾り羽根"
     },
     { 
        id: 991,
        question: "feud",
        choices: ["確執", "友情", "協力", "支援"],
        correctAnswer: "確執"
     },
     { 
        id: 992,
        question: "cornerstone",
        choices: ["礎石", "天井", "扉", "柱"],
        correctAnswer: "礎石"
     },
     { 
        id: 993,
        question: "petal",
        choices: ["花弁", "茎", "根", "葉"],
        correctAnswer: "花弁"
     },
     { 
        id: 994,
        question: "pass on",
        choices: ["通り過ぎる", "止まる", "逆走する", "戻る"],
        correctAnswer: "通り過ぎる"
     },
     { 
        id: 995,
        question: "screech",
        choices: ["金切り声", "囁き声", "普通の話し声", "無言"],
        correctAnswer: "金切り声"
     },
     { 
        id: 996,
        question: "consolation",
        choices: ["慰め", "批判", "拒絶", "困惑"],
        correctAnswer: "慰め"
     },
     { 
        id: 997,
        question: "twitch",
        choices: ["ぐいと引く", "そっと置く", "押し出す", "包む"],
        correctAnswer: "ぐいと引く"
     },
     { 
        id: 998,
        question: "affirmation",
        choices: ["断言", "疑問", "拒否", "沈黙"],
        correctAnswer: "断言"
     },
     { 
        id: 999,
        question: "ramification",
        choices: ["分岐", "直線", "統合", "消失"],
        correctAnswer: "分岐"
     },
     { 
        id: 1000,
        question: "go over",
        choices: ["を繰り返す", "を省略する", "を無視する", "を中止する"],
        correctAnswer: "を繰り返す"
     },
     { 
        id: 1001,
        question: "entrepreneurship",
        choices: ["起業家精神", "消費者意識", "労働者の権利", "政治的影響"],
        correctAnswer: "起業家精神"
     },
     { 
        id: 1002,
        question: "entourage",
        choices: ["側近", "敵対者", "部下", "取引先"],
        correctAnswer: "側近"
     },
     { 
        id: 1003,
        question: "heresy",
        choices: ["異説", "正統な意見", "伝統的信念", "標準的見解"],
        correctAnswer: "異説"
     },
     { 
        id: 1004,
        question: "precursor",
        choices: ["前触れ", "結果", "補足", "後継"],
        correctAnswer: "前触れ"
     },
     { 
        id: 1005,
        question: "maverick",
        choices: ["異端者", "保守派", "常識人", "伝統主義者"],
        correctAnswer: "異端者"
     },
     { 
        id: 1006,
        question: "misgiving",
        choices: ["懸念", "安心", "自信", "確信"],
        correctAnswer: "懸念"
     },
     { 
        id: 1007,
        question: "sit in",
        choices: ["座り込む", "立ち去る", "進む", "投票する"],
        correctAnswer: "座り込む"
     },
     { 
        id: 1008,
        question: "nausea",
        choices: ["吐き気", "安堵", "幸福感", "興奮"],
        correctAnswer: "吐き気"
     },
     { 
        id: 1009,
        question: "overture",
        choices: ["序曲", "本編", "後奏", "予告"],
        correctAnswer: "序曲"
     },
     { 
        id: 1010,
        question: "place limitation on",
        choices: ["に制限を加える", "を拡大する", "を削除する", "を無効にする"],
        correctAnswer: "に制限を加える"
     },
     { 
        id: 1011,
        question: "abdomen",
        choices: ["腹部", "心臓", "肝臓", "脳"],
        correctAnswer: "腹部"
     },
     { 
        id: 1012,
        question: "down payment",
        choices: ["頭金", "賃金", "借金", "利益"],
        correctAnswer: "頭金"
     },
     { 
        id: 1013,
        question: "anemia",
        choices: ["貧血症", "糖尿病", "高血圧", "心臓病"],
        correctAnswer: "貧血症"
     },
     { 
        id: 1014,
        question: "tip over",
        choices: ["ひっくり返る", "安定する", "固まる", "浮かぶ"],
        correctAnswer: "ひっくり返る"
     },
     { 
        id: 1015,
        question: "clean out",
        choices: ["を一掃する", "を埋める", "を増やす", "を無視する"],
        correctAnswer: "を一掃する"
     },
     { 
        id: 1016,
        question: "contrition",
        choices: ["悔み", "誇り", "喜び", "満足"],
        correctAnswer: "悔み"
     },
     { 
        id: 1017,
        question: "specter",
        choices: ["妖怪", "天使", "英雄", "学者"],
        correctAnswer: "妖怪"
     },
     { 
        id: 1018,
        question: "ferocity",
        choices: ["凶暴性", "優しさ", "平和", "沈着"],
        correctAnswer: "凶暴性"
     },
     { 
        id: 1019,
        question: "stitch",
        choices: ["一編み", "布", "糸", "針"],
        correctAnswer: "一編み"
     },
     { 
        id: 1020,
        question: "law enforcement",
        choices: ["法の執行", "法の廃止", "法の改正", "法の違反"],
        correctAnswer: "法の執行"
     },
     { 
        id: 1021,
        question: "rigor",
        choices: ["厳格", "寛大", "柔軟", "穏和"],
        correctAnswer: "厳格"
     },
     { 
        id: 1022,
        question: "tad",
        choices: ["ちびっ子", "大人", "老人", "巨人"],
        correctAnswer: "ちびっ子"
     },
     { 
        id: 1023,
        question: "take up",
        choices: ["を取り上げる", "を放棄する", "を譲る", "を避ける"],
        correctAnswer: "を取り上げる"
     },
     { 
        id: 1024,
        question: "gall",
        choices: ["憎しみ", "愛情", "尊敬", "友情"],
        correctAnswer: "憎しみ"
     },
     { 
        id: 1025,
        question: "caveat",
        choices: ["警告", "助言", "賞賛", "励まし"],
        correctAnswer: "警告"
     },
     { 
        id: 1026,
        question: "fang",
        choices: ["牙", "爪", "翼", "耳"],
        correctAnswer: "牙"
     },
     { 
        id: 1027,
        question: "trade in",
        choices: ["を下取りに出す", "を捨てる", "を盗む", "を閉じ込める"],
        correctAnswer: "を下取りに出す"
     },
     { 
        id: 1028,
        question: "mason",
        choices: ["石工", "農家", "大工", "漁師"],
        correctAnswer: "石工"
     },
     { 
        id: 1029,
        question: "sheen",
        choices: ["光沢", "影", "汚れ", "霧"],
        correctAnswer: "光沢"
     },
     { 
        id: 1030,
        question: "succumb",
        choices: ["屈する", "抵抗する", "勝つ", "克服する"],
        correctAnswer: "屈する"
     },
     { 
        id: 1031,
        question: "archipelago",
        choices: ["群島", "砂漠", "大陸", "半島"],
        correctAnswer: "群島"
     },
     { 
        id: 1032,
        question: "trudge",
        choices: ["とぼとぼ歩く", "走る", "飛ぶ", "忍び足で歩く"],
        correctAnswer: "とぼとぼ歩く"
     },
     { 
        id: 1033,
        question: "incompetence",
        choices: ["無能", "才能", "器用さ", "知識"],
        correctAnswer: "無能"
     },
     { 
        id: 1034,
        question: "asteroid",
        choices: ["小惑星", "彗星", "衛星", "流星"],
        correctAnswer: "小惑星"
     },
     { 
        id: 1035,
        question: "broom",
        choices: ["ほうき", "雑巾", "モップ", "バケツ"],
        correctAnswer: "ほうき"
     },
     { 
        id: 1036,
        question: "porcelain",
        choices: ["磁器", "金属", "木材", "ガラス"],
        correctAnswer: "磁器"
     },
     { 
        id: 1037,
        question: "torso",
        choices: ["胴体", "頭", "脚", "手"],
        correctAnswer: "胴体"
     },
     { 
        id: 1038,
        question: "repercussion",
        choices: ["反響", "沈黙", "終了", "無視"],
        correctAnswer: "反響"
     },
     { 
        id: 1039,
        question: "slouch",
        choices: ["前かがみ", "背筋を伸ばす", "跳ねる", "座る"],
        correctAnswer: "前かがみ"
     },
     { 
        id: 1040,
        question: "milieu",
        choices: ["環境", "障害", "目標", "規則"],
        correctAnswer: "環境"
     },
     { 
        id: 1041,
        question: "communique",
        choices: ["公式発表", "秘密", "噂", "個人的な意見"],
        correctAnswer: "公式発表"
     },
     { 
        id: 1042,
        question: "in search of",
        choices: ["を探して", "を避けて", "を捨てて", "を見逃して"],
        correctAnswer: "を探して"
     },
     { 
        id: 1043,
        question: "homage",
        choices: ["敬意", "侮辱", "批判", "拒絶"],
        correctAnswer: "敬意"
     },
     { 
        id: 1044,
        question: "hump",
        choices: ["こぶ", "谷", "平地", "坂"],
        correctAnswer: "こぶ"
     },
     { 
        id: 1045,
        question: "efficacy",
        choices: ["効能", "副作用", "無効", "浪費"],
        correctAnswer: "効能"
     },
     { 
        id: 1046,
        question: "ballpark",
        choices: ["概算", "精密な数値", "最小値", "最大値"],
        correctAnswer: "概算"
     },
     { 
        id: 1047,
        question: "plaza",
        choices: ["大広場", "通り", "ビル", "駐車場"],
        correctAnswer: "大広場"
     },
     { 
        id: 1048,
        question: "clout",
        choices: ["影響力", "弱さ", "無関係", "軽視"],
        correctAnswer: "影響力"
     },
     { 
        id: 1049,
        question: "stay off",
        choices: ["から離れる", "に近づく", "に頼る", "に執着する"],
        correctAnswer: "から離れる"
     },
     { 
        id: 1050,
        question: "excursion",
        choices: ["遠足", "仕事", "試験", "会議"],
        correctAnswer: "遠足"
     },
     { 
        id: 1051,
        question: "hoax",
        choices: ["悪ふざけ", "真実", "誤報", "調査"],
        correctAnswer: "悪ふざけ"
     },
     { 
        id: 1052,
        question: "rapprochement",
        choices: ["和睦", "戦争", "対立", "抗争"],
        correctAnswer: "和睦"
     },
     { 
        id: 1053,
        question: "vindicate",
        choices: ["疑いを晴らす", "告発する", "非難する", "誤解する"],
        correctAnswer: "疑いを晴らす"
     },
     { 
        id: 1054,
        question: "anesthesia",
        choices: ["麻酔", "解毒剤", "興奮剤", "鎮痛剤"],
        correctAnswer: "麻酔"
     },
     { 
        id: 1055,
        question: "mourning",
        choices: ["喪中", "結婚", "誕生", "祝賀"],
        correctAnswer: "喪中"
     },
     { 
        id: 1056,
        question: "barracks",
        choices: ["兵舎", "学校", "病院", "寺院"],
        correctAnswer: "兵舎"
     },
     { 
        id: 1057,
        question: "wield",
        choices: ["振り回す", "隠す", "壊す", "避ける"],
        correctAnswer: "振り回す"
     },
     { 
        id: 1058,
        question: "lift off",
        choices: ["離陸する", "着陸する", "転落する", "滑る"],
        correctAnswer: "離陸する"
     },
     { 
        id: 1059,
        question: "crescent",
        choices: ["三日月", "満月", "太陽", "星"],
        correctAnswer: "三日月"
     },
     { 
        id: 1060,
        question: "fragmentation",
        choices: ["断片化", "統合", "成長", "結合"],
        correctAnswer: "断片化"
     },
     { 
        id: 1061,
        question: "enigma",
        choices: ["不可解なこと", "明確なこと", "単純なこと", "予測可能なこと"],
        correctAnswer: "不可解なこと"
     },
     { 
        id: 1062,
        question: "sabotage",
        choices: ["妨害行為", "支援", "改善", "促進"],
        correctAnswer: "妨害行為"
     },
     { 
        id: 1063,
        question: "excavation",
        choices: ["発掘", "破壊", "建築", "埋葬"],
        correctAnswer: "発掘"
     },
     { 
        id: 1064,
        question: "get away with",
        choices: ["を避ける", "を成功させる", "を達成する", "を克服する"],
        correctAnswer: "を避ける"
     },
     { 
        id: 1065,
        question: "pick through",
        choices: ["を探る", "を片付ける", "を無視する", "をまとめる"],
        correctAnswer: "を探る"
     },
     { 
        id: 1066,
        question: "trip up",
        choices: ["をつまづかせる", "を持ち上げる", "をサポートする", "を隠す"],
        correctAnswer: "をつまづかせる"
     },
     { 
        id: 1067,
        question: "gazette",
        choices: ["官報", "日記", "報告書", "小説"],
        correctAnswer: "官報"
     },
     { 
        id: 1068,
        question: "casket",
        choices: ["小箱", "大皿", "金庫", "ロッカー"],
        correctAnswer: "小箱"
     },
     { 
        id: 1069,
        question: "talk up",
        choices: ["を大袈裟にほめる", "を軽視する", "を批判する", "を省略する"],
        correctAnswer: "を大袈裟にほめる"
     },
     { 
        id: 1070,
        question: "mirage",
        choices: ["蜃気楼", "嵐", "津波", "霧"],
        correctAnswer: "蜃気楼"
     },
     { 
        id: 1071,
        question: "put in",
        choices: ["取り付ける", "取り除く", "壊す", "停止する"],
        correctAnswer: "取り付ける"
     },
     { 
        id: 1072,
        question: "handout",
        choices: ["配布物", "試験", "契約書", "名刺"],
        correctAnswer: "配布物"
     },
     { 
        id: 1073,
        question: "in danger of",
        choices: ["の危険にさらされている", "の安全が確保されている", "の保護下にある", "の成功を保証されている"],
        correctAnswer: "の危険にさらされている"
     },
     { 
        id: 1074,
        question: "bribe",
        choices: ["賄賂", "税金", "報酬", "借金"],
        correctAnswer: "賄賂"
     },
     { 
        id: 1075,
        question: "pantry",
        choices: ["食料品室", "浴室", "書斎", "ガレージ"],
        correctAnswer: "食料品室"
     },
     { 
        id: 1076,
        question: "psycho",
        choices: ["精神病患者", "科学者", "作家", "医者"],
        correctAnswer: "精神病患者"
     },
     { 
        id: 1077,
        question: "benefactor",
        choices: ["恩人", "敵", "批評家", "競争相手"],
        correctAnswer: "恩人"
     },
     { 
        id: 1078,
        question: "optics",
        choices: ["光学", "音響学", "医学", "経済学"],
        correctAnswer: "光学"
     },
     { 
        id: 1079,
        question: "assortment",
        choices: ["詰め合わせ", "空箱", "分類", "破片"],
        correctAnswer: "詰め合わせ"
     },
     { 
        id: 1080,
        question: "garland",
        choices: ["花飾り", "杖", "靴", "帯"],
        correctAnswer: "花飾り"
     },
     { 
        id: 1081,
        question: "grid",
        choices: ["格子", "曲線", "三角形", "円形"],
        correctAnswer: "格子"
     },
     { 
        id: 1082,
        question: "sabbath",
        choices: ["安息日", "祭日", "休日", "平日"],
        correctAnswer: "安息日"
     },
     { 
        id: 1083,
        question: "even out",
        choices: ["平らになる", "急増する", "崩壊する", "変動する"],
        correctAnswer: "平らになる"
     },
     { 
        id: 1084,
        question: "oracle",
        choices: ["神のお告げ", "犯罪", "歴史", "法則"],
        correctAnswer: "神のお告げ"
     },
     { 
        id: 1085,
        question: "subject to",
        choices: ["の支配下にある", "独立している", "影響を受けない", "制約がない"],
        correctAnswer: "の支配下にある"
     },
     { 
        id: 1086,
        question: "corpus",
        choices: ["文書資料の集成", "建築物", "山脈", "人口"],
        correctAnswer: "文書資料の集成"
     },
     { 
        id: 1087,
        question: "median",
        choices: ["中央の", "極端な", "端の", "小さい"],
        correctAnswer: "中央の"
     },
     { 
        id: 1088,
        question: "plagiarism",
        choices: ["盗用", "発明", "創作", "翻訳"],
        correctAnswer: "盗用"
     },
     { 
        id: 1089,
        question: "quagmire",
        choices: ["泥沼", "砂漠", "氷山", "森林"],
        correctAnswer: "泥沼"
     },
     { 
        id: 1090,
        question: "coercion",
        choices: ["強制", "自由", "選択", "交渉"],
        correctAnswer: "強制"
     },
     { 
        id: 1091,
        question: "crack up",
        choices: ["大破する", "成功する", "成長する", "回復する"],
        correctAnswer: "大破する"
     },
     { 
        id: 1092,
        question: "smirk",
        choices: ["にやにや笑う", "泣く", "怒る", "驚く"],
        correctAnswer: "にやにや笑う"
     },
     { 
        id: 1093,
        question: "carcass",
        choices: ["死骸", "生物", "幼虫", "植物"],
        correctAnswer: "死骸"
     },
     { 
        id: 1094,
        question: "deterioration",
        choices: ["悪化", "改善", "安定", "強化"],
        correctAnswer: "悪化"
     },
     { 
        id: 1095,
        question: "ark",
        choices: ["箱舟", "城", "寺院", "神殿"],
        correctAnswer: "箱舟"
     },
     { 
        id: 1096,
        question: "ovation",
        choices: ["熱烈な歓迎", "無視", "批判", "中断"],
        correctAnswer: "熱烈な歓迎"
     },
     { 
        id: 1097,
        question: "ailment",
        choices: ["病気", "健康", "体力", "休息"],
        correctAnswer: "病気"
     },
     { 
        id: 1098,
        question: "burglary",
        choices: ["強盗", "詐欺", "交渉", "契約"],
        correctAnswer: "強盗"
     },
     { 
        id: 1099,
        question: "jihad",
        choices: ["聖戦", "平和条約", "選挙", "交易"],
        correctAnswer: "聖戦"
     },
     { 
        id: 1100,
        question: "laureate",
        choices: ["受賞者", "観客", "批評家", "主催者"],
        correctAnswer: "受賞者"
     },
     { 
        id: 1101,
        question: "stud",
        choices: ["種馬", "子牛", "山羊", "羊"],
        correctAnswer: "種馬"
     },
     { 
        id: 1102,
        question: "annuity",
        choices: ["年金", "給与", "賞与", "貯金"],
        correctAnswer: "年金"
     },
     { 
        id: 1103,
        question: "keep up with",
        choices: ["に遅れず付いていく", "を無視する", "を諦める", "を軽視する"],
        correctAnswer: "に遅れず付いていく"
     },
     { 
        id: 1104,
        question: "horde",
        choices: ["遊牧民族", "都市住民", "貴族", "軍人"],
        correctAnswer: "遊牧民族"
     },
     { 
        id: 1105,
        question: "bravado",
        choices: ["虚勢", "勇気", "誠実", "謙虚"],
        correctAnswer: "虚勢"
     },
     { 
        id: 1106,
        question: "orphanage",
        choices: ["孤児院", "老人ホーム", "病院", "学校"],
        correctAnswer: "孤児院"
     },
     { 
        id: 1107,
        question: "surcharge",
        choices: ["追加料金", "割引", "返金", "税金"],
        correctAnswer: "追加料金"
     },
     { 
        id: 1108,
        question: "stepfather",
        choices: ["継父", "兄", "叔父", "祖父"],
        correctAnswer: "継父"
     },
     { 
        id: 1109,
        question: "impunity",
        choices: ["免責", "罰則", "制裁", "逮捕"],
        correctAnswer: "免責"
     },
     { 
        id: 1110,
        question: "give away",
        choices: ["無償で配る", "隠す", "修理する", "壊す"],
        correctAnswer: "無償で配る"
     },
     { 
        id: 1111,
        question: "patrician",
        choices: ["貴族", "農民", "兵士", "職人"],
        correctAnswer: "貴族"
     },
     { 
        id: 1112,
        question: "supremacy",
        choices: ["最高", "最低", "標準", "一般的"],
        correctAnswer: "最高"
     },
     { 
        id: 1113,
        question: "cove",
        choices: ["入り江", "山", "湖", "森"],
        correctAnswer: "入り江"
     },
     { 
        id: 1114,
        question: "pulp",
        choices: ["果肉", "皮", "種", "茎"],
        correctAnswer: "果肉"
     },
     { 
        id: 1115,
        question: "debtor",
        choices: ["債務者", "貸し手", "銀行", "投資家"],
        correctAnswer: "債務者"
     },
     { 
        id: 1116,
        question: "outburst",
        choices: ["爆発", "冷静", "沈黙", "減退"],
        correctAnswer: "爆発"
     },
     { 
        id: 1117,
        question: "banquet",
        choices: ["宴会", "会議", "試験", "選挙"],
        correctAnswer: "宴会"
     },
     { 
        id: 1118,
        question: "head out",
        choices: ["出発する", "帰宅する", "休憩する", "停止する"],
        correctAnswer: "出発する"
     },
     { 
        id: 1119,
        question: "decency",
        choices: ["良識", "愚行", "無責任", "無礼"],
        correctAnswer: "良識"
     },
     { 
        id: 1120,
        question: "outage",
        choices: ["停電", "通信障害", "洪水", "停滞"],
        correctAnswer: "停電"
     },
     { 
        id: 1121,
        question: "snag",
        choices: ["突起", "平地", "穴", "坂"],
        correctAnswer: "突起"
     },
     { 
        id: 1122,
        question: "furrow",
        choices: ["溝", "丘", "川", "湖"],
        correctAnswer: "溝"
     },
     { 
        id: 1123,
        question: "grow on",
        choices: ["成長する", "縮小する", "消滅する", "固まる"],
        correctAnswer: "成長する"
     },
     { 
        id: 1124,
        question: "doctorate",
        choices: ["博士号", "学士号", "修士号", "高校卒業証書"],
        correctAnswer: "博士号"
     },
     { 
        id: 1125,
        question: "scourge",
        choices: ["むち", "祝福", "賞賛", "治療"],
        correctAnswer: "むち"
     },
     { 
        id: 1126,
        question: "midday",
        choices: ["正午", "深夜", "朝方", "夕方"],
        correctAnswer: "正午"
     },
     { 
        id: 1127,
        question: "come before",
        choices: ["の前に現れる", "後に続く", "無視する", "跳ばす"],
        correctAnswer: "の前に現れる"
     },
     { 
        id: 1128,
        question: "tenor",
        choices: ["進路", "目標", "阻害", "縮小"],
        correctAnswer: "進路"
     },
     { 
        id: 1129,
        question: "probation",
        choices: ["試用期間", "永続的契約", "免職", "解雇"],
        correctAnswer: "試用期間"
     },
     { 
        id: 1130,
        question: "felon",
        choices: ["重罪犯人", "証人", "弁護士", "警察官"],
        correctAnswer: "重罪犯人"
     },
     { 
        id: 1131,
        question: "hygiene",
        choices: ["衛生", "不潔", "混乱", "放棄"],
        correctAnswer: "衛生"
     },
     { 
        id: 1132,
        question: "furor",
        choices: ["激怒", "喜び", "落ち着き", "冷静"],
        correctAnswer: "激怒"
     },
     { 
        id: 1133,
        question: "pigment",
        choices: ["顔料", "化学薬品", "繊維", "樹脂"],
        correctAnswer: "顔料"
     },
     { 
        id: 1134,
        question: "swagger",
        choices: ["いばって歩く", "急いで走る", "静かに座る", "慎重に歩く"],
        correctAnswer: "いばって歩く"
     },
     { 
        id: 1135,
        question: "what is more",
        choices: ["さらに", "しかし", "なぜなら", "それにもかかわらず"],
        correctAnswer: "さらに"
     },
     { 
        id: 1136,
        question: "blackout",
        choices: ["停電", "暴風", "大雨", "地震"],
        correctAnswer: "停電"
     },
     { 
        id: 1137,
        question: "graveyard",
        choices: ["墓地", "公園", "市場", "駅"],
        correctAnswer: "墓地"
     },
     { 
        id: 1138,
        question: "cognition",
        choices: ["認知", "忘却", "混乱", "排除"],
        correctAnswer: "認知"
     },
     { 
        id: 1139,
        question: "tense",
        choices: ["時制", "音程", "速さ", "気温"],
        correctAnswer: "時制"
     },
     { 
        id: 1140,
        question: "protagonist",
        choices: ["主人公", "悪役", "脇役", "監督"],
        correctAnswer: "主人公"
     },
     { 
        id: 1141,
        question: "graft",
        choices: ["接ぎ木", "根", "枝", "種"],
        correctAnswer: "接ぎ木"
     },
     { 
        id: 1142,
        question: "noun",
        choices: ["名詞", "動詞", "形容詞", "副詞"],
        correctAnswer: "名詞"
     },
     { 
        id: 1143,
        question: "rodent",
        choices: ["齧歯類", "爬虫類", "両生類", "魚類"],
        correctAnswer: "齧歯類"
     },
     { 
        id: 1144,
        question: "relapse",
        choices: ["再発", "完治", "進化", "発展"],
        correctAnswer: "再発"
     },
     { 
        id: 1145,
        question: "lock in",
        choices: ["を閉じ込める", "を解放する", "を押し出す", "を動かす"],
        correctAnswer: "を閉じ込める"
     },
     { 
        id: 1146,
        question: "conundrum",
        choices: ["難問", "単純な問題", "易しい課題", "明白な事実"],
        correctAnswer: "難問"
     },
     { 
        id: 1147,
        question: "debacle",
        choices: ["総崩れ", "大成功", "安定", "改善"],
        correctAnswer: "総崩れ"
     },
     { 
        id: 1148,
        question: "fall back on",
        choices: ["に頼る", "を拒否する", "を見捨てる", "を攻撃する"],
        correctAnswer: "に頼る"
     },
     { 
        id: 1149,
        question: "phantom",
        choices: ["幻影", "現実", "物理的存在", "確証"],
        correctAnswer: "幻影"
     },
     { 
        id: 1150,
        question: "stagnation",
        choices: ["停滞", "成長", "発展", "活性化"],
        correctAnswer: "停滞"
     },
     { 
        id: 1151,
        question: "jeopardy",
        choices: ["危機", "安全", "安定", "幸福"],
        correctAnswer: "危機"
     },
     { 
        id: 1152,
        question: "fetus",
        choices: ["胎児", "成人", "老人", "赤ちゃん"],
        correctAnswer: "胎児"
     },
     { 
        id: 1153,
        question: "quantum",
        choices: ["量子", "波動", "磁力", "電子"],
        correctAnswer: "量子"
     },
     { 
        id: 1154,
        question: "moth",
        choices: ["蛾", "蝶", "カブトムシ", "クモ"],
        correctAnswer: "蛾"
     },
     { 
        id: 1155,
        question: "incarceration",
        choices: ["投獄", "釈放", "解放", "逃亡"],
        correctAnswer: "投獄"
     },
     { 
        id: 1156,
        question: "count on",
        choices: ["に頼る", "を疑う", "を避ける", "を諦める"],
        correctAnswer: "に頼る"
     },
     { 
        id: 1157,
        question: "sling",
        choices: ["つり縄", "棒", "鎖", "鞭"],
        correctAnswer: "つり縄"
     },
     { 
        id: 1158,
        question: "predicament",
        choices: ["苦境", "幸運", "快適", "成功"],
        correctAnswer: "苦境"
     },
     { 
        id: 1159,
        question: "magistrate",
        choices: ["行政長官", "警察官", "弁護士", "市民"],
        correctAnswer: "行政長官"
     },
     { 
        id: 1160,
        question: "stealth",
        choices: ["内密", "公然", "堂々", "公式"],
        correctAnswer: "内密"
     },
     { 
        id: 1161,
        question: "borough",
        choices: ["自治区", "州", "県", "国"],
        correctAnswer: "自治区"
     },
     { 
        id: 1162,
        question: "infringement",
        choices: ["侵害", "保護", "改善", "促進"],
        correctAnswer: "侵害"
     },
     { 
        id: 1163,
        question: "arthritis",
        choices: ["関節炎", "胃炎", "皮膚病", "頭痛"],
        correctAnswer: "関節炎"
     },
     { 
        id: 1164,
        question: "squadron",
        choices: ["戦隊", "商隊", "村", "王国"],
        correctAnswer: "戦隊"
     },
     { 
        id: 1165,
        question: "stir up",
        choices: ["をかき混ぜる", "を冷やす", "を投げる", "を破壊する"],
        correctAnswer: "をかき混ぜる"
     },
     { 
        id: 1166,
        question: "burrow",
        choices: ["隠れ場所", "公開広場", "城壁", "市場"],
        correctAnswer: "隠れ場所"
     },
     { 
        id: 1167,
        question: "heyday",
        choices: ["全盛期", "衰退期", "初期", "終焉"],
        correctAnswer: "全盛期"
     },
     { 
        id: 1168,
        question: "coroner",
        choices: ["検死官", "弁護士", "医師", "研究者"],
        correctAnswer: "検死官"
     },
     { 
        id: 1169,
        question: "lookout",
        choices: ["警戒", "安心", "怠慢", "無関心"],
        correctAnswer: "警戒"
     },
     { 
        id: 1170,
        question: "pass over",
        choices: ["を無視する", "を採用する", "を修正する", "を強調する"],
        correctAnswer: "を無視する"
     },
     { 
        id: 1171,
        question: "dearth",
        choices: ["欠乏", "豊富", "余剰", "追加"],
        correctAnswer: "欠乏"
     },
     { 
        id: 1172,
        question: "cut in",
        choices: ["切り込む", "放置する", "修復する", "装飾する"],
        correctAnswer: "切り込む"
     },
     { 
        id: 1173,
        question: "decor",
        choices: ["装飾", "建築", "計画", "事務"],
        correctAnswer: "装飾"
     },
     { 
        id: 1174,
        question: "hypertension",
        choices: ["高血圧", "低血圧", "正常血圧", "動脈硬化"],
        correctAnswer: "高血圧"
     },
     { 
        id: 1175,
        question: "rationale",
        choices: ["理論的根拠", "感情的反応", "不確定な意見", "直感的な判断"],
        correctAnswer: "理論的根拠"
     },
     { 
        id: 1176,
        question: "reflex",
        choices: ["反射", "意思決定", "無視", "感情"],
        correctAnswer: "反射"
     },
     { 
        id: 1177,
        question: "mounting",
        choices: ["取り付け", "破壊", "撤去", "移動"],
        correctAnswer: "取り付け"
     },
     { 
        id: 1178,
        question: "blast off",
        choices: ["発射される", "着陸する", "爆発する", "壊れる"],
        correctAnswer: "発射される"
     },
     { 
        id: 1179,
        question: "renegade",
        choices: ["反逆者", "指導者", "守護者", "中立者"],
        correctAnswer: "反逆者"
     },
     { 
        id: 1180,
        question: "defamation",
        choices: ["名誉毀損", "賞賛", "推薦", "表彰"],
        correctAnswer: "名誉毀損"
     },
     { 
        id: 1181,
        question: "incest",
        choices: ["近親相姦", "結婚", "友情", "同居"],
        correctAnswer: "近親相姦"
     },
     { 
        id: 1182,
        question: "pass out",
        choices: ["気絶する", "目を覚ます", "集中する", "動き出す"],
        correctAnswer: "気絶する"
     },
     { 
        id: 1183,
        question: "swoop",
        choices: ["急降下する", "上昇する", "停止する", "旋回する"],
        correctAnswer: "急降下する"
     },
     { 
        id: 1184,
        question: "roster",
        choices: ["当番表", "契約書", "報告書", "履歴書"],
        correctAnswer: "当番表"
     },
     { 
        id: 1185,
        question: "biopsy",
        choices: ["生体組織検査", "血液検査", "CTスキャン", "予防接種"],
        correctAnswer: "生体組織検査"
     },
     { 
        id: 1186,
        question: "paramedic",
        choices: ["救急救命士", "外科医", "薬剤師", "看護師"],
        correctAnswer: "救急救命士"
     },
     { 
        id: 1187,
        question: "breadth",
        choices: ["幅", "高さ", "長さ", "重さ"],
        correctAnswer: "幅"
     },
     { 
        id: 1188,
        question: "firearm",
        choices: ["銃器", "刀剣", "盾", "槍"],
        correctAnswer: "銃器"
     },
     { 
        id: 1189,
        question: "foreground",
        choices: ["前景", "背景", "側面", "天井"],
        correctAnswer: "前景"
     },
     { 
        id: 1190,
        question: "scar",
        choices: ["傷跡", "出血", "かさぶた", "骨折"],
        correctAnswer: "傷跡"
     },
     { 
        id: 1191,
        question: "acquittal",
        choices: ["無罪放免", "有罪判決", "逮捕", "尋問"],
        correctAnswer: "無罪放免"
     },
     { 
        id: 1192,
        question: "adultery",
        choices: ["姦通", "結婚", "友情", "家族愛"],
        correctAnswer: "姦通"
     },
     { 
        id: 1193,
        question: "thermometer",
        choices: ["温度計", "時計", "気圧計", "湿度計"],
        correctAnswer: "温度計"
     },
     { 
        id: 1194,
        question: "rampart",
        choices: ["城壁", "橋", "塔", "水門"],
        correctAnswer: "城壁"
     },
     { 
        id: 1195,
        question: "sire",
        choices: ["雄親", "雌親", "幼虫", "仔馬"],
        correctAnswer: "雄親"
     },
     { 
        id: 1196,
        question: "jug",
        choices: ["水差し", "ボウル", "カップ", "皿"],
        correctAnswer: "水差し"
     },
     { 
        id: 1197,
        question: "intolerance",
        choices: ["不寛容", "理解", "許容", "調和"],
        correctAnswer: "不寛容"
     },
     { 
        id: 1198,
        question: "axe",
        choices: ["斧", "ナイフ", "槍", "ハンマー"],
        correctAnswer: "斧"
     },
     { 
        id: 1199,
        question: "larva",
        choices: ["幼虫", "成虫", "蛹", "卵"],
        correctAnswer: "幼虫"
     },
     { 
        id: 1200,
        question: "statesman",
        choices: ["政治家", "学者", "兵士", "裁判官"],
        correctAnswer: "政治家"
     },
     { 
        id: 1201,
        question: "rendezvous",
        choices: ["待ち合わせ", "別れ", "対立", "旅行"],
        correctAnswer: "待ち合わせ"
     },
     { 
        id: 1202,
        question: "caravan",
        choices: ["隊", "村", "軍", "店"],
        correctAnswer: "隊"
     },
     { 
        id: 1203,
        question: "thug",
        choices: ["刺客", "商人", "農民", "医師"],
        correctAnswer: "刺客"
     },
     { 
        id: 1204,
        question: "break down",
        choices: ["を壊す", "を修理する", "を飾る", "を建てる"],
        correctAnswer: "を壊す"
     },
     { 
        id: 1205,
        question: "cultivation",
        choices: ["栽培", "収穫", "植林", "伐採"],
        correctAnswer: "栽培"
     },
     { 
        id: 1206,
        question: "stronghold",
        choices: ["拠点", "家", "市場", "公園"],
        correctAnswer: "拠点"
     },
     { 
        id: 1207,
        question: "leash",
        choices: ["ひも", "袋", "箱", "網"],
        correctAnswer: "ひも"
     },
     { 
        id: 1208,
        question: "take in",
        choices: ["を摂取する", "を吐き出す", "を捨てる", "を放出する"],
        correctAnswer: "を摂取する"
     },
     { 
        id: 1209,
        question: "atheism",
        choices: ["無神論", "多神教", "一神教", "仏教"],
        correctAnswer: "無神論"
     },
     { 
        id: 1210,
        question: "ransom",
        choices: ["身代金", "税金", "借金", "預金"],
        correctAnswer: "身代金"
     },
     { 
        id: 1211,
        question: "adjective",
        choices: ["形容詞", "動詞", "名詞", "副詞"],
        correctAnswer: "形容詞"
     },
     { 
        id: 1212,
        question: "fluke",
        choices: ["まぐれ当たり", "確実な成功", "偶然の失敗", "予想された結果"],
        correctAnswer: "まぐれ当たり"
     },
     { 
        id: 1213,
        question: "guise",
        choices: ["外観", "本質", "感情", "意図"],
        correctAnswer: "外観"
     },
     { 
        id: 1214,
        question: "propensity",
        choices: ["傾向", "拒否", "停止", "衰退"],
        correctAnswer: "傾向"
     },
     { 
        id: 1215,
        question: "squeal",
        choices: ["悲鳴を上げる", "笑う", "囁く", "沈黙する"],
        correctAnswer: "悲鳴を上げる"
     },
     { 
        id: 1216,
        question: "homicide",
        choices: ["殺人", "窃盗", "暴行", "詐欺"],
        correctAnswer: "殺人"
     },
     { 
        id: 1217,
        question: "in use",
        choices: ["使用中の", "廃止された", "修理中の", "未使用の"],
        correctAnswer: "使用中の"
     },
     { 
        id: 1218,
        question: "thyroid",
        choices: ["甲状腺", "腎臓", "肝臓", "脳"],
        correctAnswer: "甲状腺"
     },
     { 
        id: 1219,
        question: "replace A as B",
        choices: ["BとしてAに取って代わる", "AをBに与える", "AをBから排除する", "AとBを交換する"],
        correctAnswer: "BとしてAに取って代わる"
     },
     { 
        id: 1220,
        question: "cache",
        choices: ["貯蔵庫", "刑務所", "図書館", "礼拝堂"],
        correctAnswer: "貯蔵庫"
     },
     { 
        id: 1221,
        question: "due to",
        choices: ["のせいで", "の代わりに", "の影響を受けて", "の目的で"],
        correctAnswer: "のせいで"
     },
     { 
        id: 1222,
        question: "moderation",
        choices: ["節度", "浪費", "過剰", "混乱"],
        correctAnswer: "節度"
     },
     { 
        id: 1223,
        question: "push through",
        choices: ["押し通す", "撤回する", "遅らせる", "無視する"],
        correctAnswer: "押し通す"
     },
     { 
        id: 1224,
        question: "stockpile",
        choices: ["備蓄", "浪費", "欠乏", "放棄"],
        correctAnswer: "備蓄"
     },
     { 
        id: 1225,
        question: "flagship",
        choices: ["旗艦", "巡洋艦", "駆逐艦", "戦艦"],
        correctAnswer: "旗艦"
     },
     { 
        id: 1226,
        question: "go back on",
        choices: ["を裏切る", "を約束する", "を尊重する", "を補強する"],
        correctAnswer: "を裏切る"
     },
     { 
        id: 1227,
        question: "hypocrite",
        choices: ["偽善者", "正直者", "学者", "裁判官"],
        correctAnswer: "偽善者"
     },
     { 
        id: 1228,
        question: "battalion",
        choices: ["大隊", "小隊", "巡査", "市民"],
        correctAnswer: "大隊"
     },
     { 
        id: 1229,
        question: "meteor",
        choices: ["流星", "衛星", "彗星", "惑星"],
        correctAnswer: "流星"
     },
     { 
        id: 1230,
        question: "informant",
        choices: ["通報者", "容疑者", "警官", "弁護士"],
        correctAnswer: "通報者"
     },
     { 
        id: 1231,
        question: "retina",
        choices: ["網膜", "鼓膜", "心膜", "肺胞"],
        correctAnswer: "網膜"
     },
     { 
        id: 1232,
        question: "attribute A to B",
        choices: ["AをBに依るものとする", "AをBと交換する", "AをBに提供する", "AをBに禁止する"],
        correctAnswer: "AをBに依るものとする"
     },
     { 
        id: 1233,
        question: "soothe",
        choices: ["落ち着かせる", "興奮させる", "混乱させる", "刺激する"],
        correctAnswer: "落ち着かせる"
     },
     { 
        id: 1234,
        question: "abduction",
        choices: ["拉致", "救助", "取引", "寄付"],
        correctAnswer: "拉致"
     },
     { 
        id: 1235,
        question: "cliche",
        choices: ["決まり文句", "新しい言葉", "造語", "専門用語"],
        correctAnswer: "決まり文句"
     },
     { 
        id: 1236,
        question: "kinship",
        choices: ["親族", "敵意", "孤独", "友人関係"],
        correctAnswer: "親族"
     },
     { 
        id: 1237,
        question: "respite",
        choices: ["一休み", "持続", "過労", "混乱"],
        correctAnswer: "一休み"
     },
     { 
        id: 1238,
        question: "snarl",
        choices: ["唸る", "笑う", "囁く", "叫ぶ"],
        correctAnswer: "唸る"
     },
     { 
        id: 1239,
        question: "gloom",
        choices: ["暗がり", "明るさ", "希望", "楽しみ"],
        correctAnswer: "暗がり"
     },
     { 
        id: 1240,
        question: "centerpiece",
        choices: ["最重要", "付随的なもの", "不必要なもの", "装飾"],
        correctAnswer: "最重要"
     },
     { 
        id: 1241,
        question: "platoon",
        choices: ["小隊", "軍艦", "基地", "将軍"],
        correctAnswer: "小隊"
     },
     { 
        id: 1242,
        question: "pollen",
        choices: ["花粉", "種子", "茎", "葉"],
        correctAnswer: "花粉"
     },
     { 
        id: 1243,
        question: "inception",
        choices: ["始まり", "終わり", "中間", "継続"],
        correctAnswer: "始まり"
     },
     { 
        id: 1244,
        question: "genealogy",
        choices: ["系譜", "化学", "地理", "物理"],
        correctAnswer: "系譜"
     },
     { 
        id: 1245,
        question: "insurgency",
        choices: ["反乱", "投票", "外交", "和平"],
        correctAnswer: "反乱"
     },
     { 
        id: 1246,
        question: "plaster",
        choices: ["石膏", "コンクリート", "砂", "木材"],
        correctAnswer: "石膏"
     },
     { 
        id: 1247,
        question: "remorse",
        choices: ["後悔", "幸福", "安心", "自信"],
        correctAnswer: "後悔"
     },
     { 
        id: 1248,
        question: "cupboard",
        choices: ["食器棚", "ベッド", "椅子", "机"],
        correctAnswer: "食器棚"
     },
     { 
        id: 1249,
        question: "go about",
        choices: ["歩き回る", "座り込む", "食べる", "眠る"],
        correctAnswer: "歩き回る"
     },
     { 
        id: 1250,
        question: "curator",
        choices: ["学芸員", "作家", "詩人", "編集者"],
        correctAnswer: "学芸員"
     },
     { 
        id: 1251,
        question: "paste",
        choices: ["のり", "水", "砂糖", "塩"],
        correctAnswer: "のり"
     },
     { 
        id: 1252,
        question: "show up",
        choices: ["姿を現す", "隠れる", "消える", "休む"],
        correctAnswer: "姿を現す"
     },
     { 
        id: 1253,
        question: "refinery",
        choices: ["精製所", "学校", "病院", "図書館"],
        correctAnswer: "精製所"
     },
     { 
        id: 1254,
        question: "iceberg",
        choices: ["氷山", "島", "川", "湖"],
        correctAnswer: "氷山"
     },
     { 
        id: 1255,
        question: "savior",
        choices: ["救い主", "敵", "傍観者", "評論家"],
        correctAnswer: "救い主"
     },
     { 
        id: 1256,
        question: "prostitution",
        choices: ["売春", "結婚", "職業", "学問"],
        correctAnswer: "売春"
     },
     { 
        id: 1257,
        question: "crap",
        choices: ["くだらないもの", "価値あるもの", "宝物", "重要なもの"],
        correctAnswer: "くだらないもの"
     },
     { 
        id: 1258,
        question: "hive",
        choices: ["ミツバチの巣箱", "鳥の巣", "魚の群れ", "犬の小屋"],
        correctAnswer: "ミツバチの巣箱"
     },
     { 
        id: 1259,
        question: "pediatrician",
        choices: ["小児科医", "外科医", "歯科医", "眼科医"],
        correctAnswer: "小児科医"
     },
     { 
        id: 1260,
        question: "irresistible",
        choices: ["抵抗できない", "簡単に拒否できる", "無関心な", "気にしない"],
        correctAnswer: "抵抗できない"
     },
     { 
        id: 1261,
        question: "vain",
        choices: ["うぬぼれが強い", "謙虚な", "誠実な", "慎ましい"],
        correctAnswer: "うぬぼれが強い"
     },
     { 
        id: 1262,
        question: "sum up",
        choices: ["を合計する", "を無視する", "を削減する", "を変更する"],
        correctAnswer: "を合計する"
     },
     { 
        id: 1263,
        question: "decipher",
        choices: ["解読する", "暗号化する", "削除する", "捨てる"],
        correctAnswer: "解読する"
     },
     { 
        id: 1264,
        question: "exhort",
        choices: ["勧める", "拒否する", "疑う", "批判する"],
        correctAnswer: "勧める"
     },
     { 
        id: 1265,
        question: "hearten",
        choices: ["元気づける", "落胆させる", "混乱させる", "驚かせる"],
        correctAnswer: "元気づける"
     },
     { 
        id: 1266,
        question: "shitty",
        choices: ["くだらない", "素晴らしい", "驚くべき", "感動的な"],
        correctAnswer: "くだらない"
     },
     { 
        id: 1267,
        question: "side job",
        choices: ["副業", "本業", "休職", "引退"],
        correctAnswer: "副業"
     },
     { 
        id: 1268,
        question: "no better than",
        choices: ["と変わらない", "優れている", "劣っている", "対照的な"],
        correctAnswer: "と変わらない"
     },
     { 
        id: 1269,
        question: "instill",
        choices: ["注入する", "放出する", "除去する", "破壊する"],
        correctAnswer: "注入する"
     },
     { 
        id: 1270,
        question: "intractable",
        choices: ["手に負えない", "制御しやすい", "簡単に扱える", "素直な"],
        correctAnswer: "手に負えない"
     },
     { 
        id: 1271,
        question: "negate",
        choices: ["無効にする", "強化する", "改善する", "促進する"],
        correctAnswer: "無効にする"
     },
     { 
        id: 1272,
        question: "faulty",
        choices: ["欠点のある", "完璧な", "理想的な", "正常な"],
        correctAnswer: "欠点のある"
     },
     { 
        id: 1273,
        question: "murky",
        choices: ["陰気な", "明るい", "透き通った", "楽観的な"],
        correctAnswer: "陰気な"
     },
     { 
        id: 1274,
        question: "whiff",
        choices: ["ほのかな匂い", "強い臭い", "無臭", "煙"],
        correctAnswer: "ほのかな匂い"
     },
     { 
        id: 1275,
        question: "analogous",
        choices: ["類似の", "異なる", "対照的な", "矛盾する"],
        correctAnswer: "類似の"
     },
     { 
        id: 1276,
        question: "disgruntled",
        choices: ["不満な", "満足している", "幸福な", "落ち着いた"],
        correctAnswer: "不満な"
     },
     { 
        id: 1277,
        question: "idyllic",
        choices: ["のどかな", "騒がしい", "緊迫した", "恐ろしい"],
        correctAnswer: "のどかな"
     },
     { 
        id: 1278,
        question: "receptive",
        choices: ["受容性のある", "拒絶する", "否定的な", "排他的な"],
        correctAnswer: "受容性のある"
     },
     { 
        id: 1279,
        question: "laud",
        choices: ["称賛する", "非難する", "軽視する", "中傷する"],
        correctAnswer: "称賛する"
     },
     { 
        id: 1280,
        question: "military service",
        choices: ["兵役", "教育", "医療", "商業"],
        correctAnswer: "兵役"
     },
     { 
        id: 1281,
        question: "perennial",
        choices: ["一年中続く", "一時的な", "短命な", "希少な"],
        correctAnswer: "一年中続く"
     },
     { 
        id: 1282,
        question: "fraternal",
        choices: ["兄弟の", "敵対的な", "孤独な", "競争的な"],
        correctAnswer: "兄弟の"
     },
     { 
        id: 1283,
        question: "overt",
        choices: ["明白な", "隠された", "曖昧な", "偽の"],
        correctAnswer: "明白な"
     },
     { 
        id: 1284,
        question: "precocious",
        choices: ["早熟の", "未熟な", "晩成の", "遅咲きの"],
        correctAnswer: "早熟の"
     },
     { 
        id: 1285,
        question: "utilization",
        choices: ["利用", "浪費", "放棄", "破棄"],
        correctAnswer: "利用"
     },
     { 
        id: 1286,
        question: "conjure",
        choices: ["唱えて呼ぶ", "忘れる", "拒絶する", "静かにする"],
        correctAnswer: "唱えて呼ぶ"
     },
     { 
        id: 1287,
        question: "galvanize",
        choices: ["電流を流す", "冷却する", "停止させる", "遅らせる"],
        correctAnswer: "電流を流す"
     },
     { 
        id: 1288,
        question: "garnish",
        choices: ["飾る", "破壊する", "取り除く", "無視する"],
        correctAnswer: "飾る"
     },
     { 
        id: 1289,
        question: "existential",
        choices: ["実存の", "架空の", "非現実的な", "理論的な"],
        correctAnswer: "実存の"
     },
     { 
        id: 1290,
        question: "advise A on B",
        choices: ["AにBについて助言する", "AをBに推薦する", "AをBから排除する", "AをBに従わせる"],
        correctAnswer: "AにBについて助言する"
     },
     { 
        id: 1291,
        question: "ascribe",
        choices: ["のせいにする", "褒める", "励ます", "奨励する"],
        correctAnswer: "のせいにする"
     },
     { 
        id: 1292,
        question: "vengeance",
        choices: ["復讐", "許し", "仲直り", "和解"],
        correctAnswer: "復讐"
     },
     { 
        id: 1293,
        question: "brash",
        choices: ["せっかちな", "慎重な", "穏やかな", "無気力な"],
        correctAnswer: "せっかちな"
     },
     { 
        id: 1294,
        question: "goofy",
        choices: ["間抜けな", "賢い", "洗練された", "機知に富んだ"],
        correctAnswer: "間抜けな"
     },
     { 
        id: 1295,
        question: "implacable",
        choices: ["和解しにくい", "寛容な", "協力的な", "柔軟な"],
        correctAnswer: "和解しにくい"
     },
     { 
        id: 1296,
        question: "poignant",
        choices: ["強烈な", "穏やかな", "淡泊な", "控えめな"],
        correctAnswer: "強烈な"
     },
     { 
        id: 1297,
        question: "deterrent",
        choices: ["抑止する", "促進する", "奨励する", "助長する"],
        correctAnswer: "抑止する"
     },
     { 
        id: 1298,
        question: "take pride in",
        choices: ["を誇りにする", "を恥じる", "を隠す", "を後悔する"],
        correctAnswer: "を誇りにする"
     },
     { 
        id: 1299,
        question: "just around the corner",
        choices: ["目前に来ている", "遠く離れている", "不確定な", "過去の話"],
        correctAnswer: "目前に来ている"
     },
     { 
        id: 1300,
        question: "pertinent",
        choices: ["関係がある", "無関係な", "重要でない", "不必要な"],
        correctAnswer: "関係がある"
     },
     { 
        id: 1301,
        question: "punitive",
        choices: ["懲罰的な", "報酬の", "寛容な", "慈悲深い"],
        correctAnswer: "懲罰的な"
     },
     { 
        id: 1302,
        question: "disband",
        choices: ["解散する", "集結する", "拡大する", "継続する"],
        correctAnswer: "解散する"
     },
     { 
        id: 1303,
        question: "lofty",
        choices: ["高尚な", "低俗な", "卑しい", "平凡な"],
        correctAnswer: "高尚な"
     },
     { 
        id: 1304,
        question: "glowing",
        choices: ["白熱した", "冷静な", "鈍感な", "沈黙の"],
        correctAnswer: "白熱した"
     },
     { 
        id: 1305,
        question: "therein",
        choices: ["その中に", "外部に", "上部に", "下部に"],
        correctAnswer: "その中に"
     },
     { 
        id: 1306,
        question: "cerebral",
        choices: ["脳の", "心臓の", "肺の", "肝臓の"],
        correctAnswer: "脳の"
     },
     { 
        id: 1307,
        question: "abet",
        choices: ["扇動する", "制止する", "静める", "止める"],
        correctAnswer: "扇動する"
     },
     { 
        id: 1308,
        question: "vanguard",
        choices: ["前衛", "追随者", "後方支援", "最後尾"],
        correctAnswer: "前衛"
     },
     { 
        id: 1309,
        question: "adjoining",
        choices: ["隣の", "遠くの", "孤立した", "断絶した"],
        correctAnswer: "隣の"
     },
     { 
        id: 1310,
        question: "eerie",
        choices: ["不気味な", "陽気な", "明るい", "可愛らしい"],
        correctAnswer: "不気味な"
     },
     { 
        id: 1311,
        question: "stagnant",
        choices: ["停滞している", "流動的な", "活動的な", "急成長する"],
        correctAnswer: "停滞している"
     },
     { 
        id: 1312,
        question: "contingent",
        choices: ["起こりうる", "確定的な", "不可能な", "架空の"],
        correctAnswer: "起こりうる"
     },
     { 
        id: 1313,
        question: "latent",
        choices: ["潜在している", "明白な", "顕著な", "露出した"],
        correctAnswer: "潜在している"
     },
     { 
        id: 1314,
        question: "prescribed",
        choices: ["所定の", "自由な", "未定の", "仮の"],
        correctAnswer: "所定の"
     },
     { 
        id: 1315,
        question: "staggering",
        choices: ["千鳥足の", "安定した", "しっかりした", "整然とした"],
        correctAnswer: "千鳥足の"
     },
     { 
        id: 1316,
        question: "as it stands",
        choices: ["現状では", "将来的には", "過去の時点で", "理論的には"],
        correctAnswer: "現状では"
     },
     { 
        id: 1317,
        question: "daring",
        choices: ["大胆な", "臆病な", "慎重な", "控えめな"],
        correctAnswer: "大胆な"
     },
     { 
        id: 1318,
        question: "wreckage",
        choices: ["残骸", "完全な形", "未使用品", "新品"],
        correctAnswer: "残骸"
     },
     { 
        id: 1319,
        question: "flop",
        choices: ["ばったり倒れる", "立ち上がる", "飛び跳ねる", "静止する"],
        correctAnswer: "ばったり倒れる"
     },
     { 
        id: 1320,
        question: "incite",
        choices: ["扇動する", "落ち着かせる", "静める", "抑制する"],
        correctAnswer: "扇動する"
     },
     { 
        id: 1321,
        question: "pursuant",
        choices: ["に従って", "に逆らって", "に関係なく", "無視して"],
        correctAnswer: "に従って"
     },
     { 
        id: 1322,
        question: "warhead",
        choices: ["弾頭", "弾薬庫", "装甲", "通信機"],
        correctAnswer: "弾頭"
     },
     { 
        id: 1323,
        question: "interdisciplinary",
        choices: ["学際的な", "専門的な", "個別的な", "単一分野の"],
        correctAnswer: "学際的な"
     },
     { 
        id: 1324,
        question: "scathing",
        choices: ["痛烈な", "優しい", "穏やかな", "控えめな"],
        correctAnswer: "痛烈な"
     },
     { 
        id: 1325,
        question: "tyrant",
        choices: ["暴君", "民主主義者", "慈善家", "平和主義者"],
        correctAnswer: "暴君"
     },
     { 
        id: 1326,
        question: "astute",
        choices: ["鋭い", "鈍い", "愚かな", "遅い"],
        correctAnswer: "鋭い"
     },
     { 
        id: 1327,
        question: "on average",
        choices: ["平均して", "最大で", "最小で", "例外的に"],
        correctAnswer: "平均して"
     },
     { 
        id: 1328,
        question: "orbital",
        choices: ["軌道の", "地上の", "地下の", "空気の"],
        correctAnswer: "軌道の"
     },
     { 
        id: 1329,
        question: "alias",
        choices: ["別名は", "本名は", "偽名は", "正体不明"],
        correctAnswer: "別名は"
     },
     { 
        id: 1330,
        question: "fumble",
        choices: ["手探りする", "器用に扱う", "正確に操作する", "スムーズに動かす"],
        correctAnswer: "手探りする"
     },
     { 
        id: 1331,
        question: "whirlwind",
        choices: ["旋風", "静かな風", "穏やかな天気", "雨"],
        correctAnswer: "旋風"
     },
     { 
        id: 1332,
        question: "detach",
        choices: ["切り離す", "固定する", "統合する", "接続する"],
        correctAnswer: "切り離す"
     },
     { 
        id: 1333,
        question: "unjust",
        choices: ["不当な", "公平な", "合法的な", "適正な"],
        correctAnswer: "不当な"
     },
     { 
        id: 1334,
        question: "textual",
        choices: ["本文の", "図の", "映像の", "音声の"],
        correctAnswer: "本文の"
     },
     { 
        id: 1335,
        question: "sleek",
        choices: ["滑らかな", "ざらざらした", "荒い", "ぼんやりした"],
        correctAnswer: "滑らかな"
     },
     { 
        id: 1336,
        question: "amply",
        choices: ["広々と", "狭く", "短く", "少しだけ"],
        correctAnswer: "広々と"
     },
     { 
        id: 1337,
        question: "makeshift",
        choices: ["その場しのぎの", "恒久的な", "確定的な", "正式な"],
        correctAnswer: "その場しのぎの"
     },
     { 
        id: 1338,
        question: "in order",
        choices: ["順序通りに", "無秩序に", "乱雑に", "未整理で"],
        correctAnswer: "順序通りに"
     },
     { 
        id: 1339,
        question: "unconventional",
        choices: ["型破りな", "伝統的な", "一般的な", "標準的な"],
        correctAnswer: "型破りな"
     },
     { 
        id: 1340,
        question: "writ",
        choices: ["令状", "手紙", "証明書", "契約書"],
        correctAnswer: "令状"
     },
     { 
        id: 1341,
        question: "hesitant",
        choices: ["ためらった", "決断力のある", "積極的な", "迅速な"],
        correctAnswer: "ためらった"
     },
     { 
        id: 1342,
        question: "introspective",
        choices: ["内省的な", "外向的な", "社交的な", "活発な"],
        correctAnswer: "内省的な"
     },
     { 
        id: 1343,
        question: "obscene",
        choices: ["卑猥な", "上品な", "礼儀正しい", "慎ましい"],
        correctAnswer: "卑猥な"
     },
     { 
        id: 1344,
        question: "apprehend",
        choices: ["捕らえる", "解放する", "見逃す", "忘れる"],
        correctAnswer: "捕らえる"
     },
     { 
        id: 1345,
        question: "gasp",
        choices: ["息をのむ", "笑う", "叫ぶ", "沈黙する"],
        correctAnswer: "息をのむ"
     },
     { 
        id: 1346,
        question: "expatriate",
        choices: ["自国を離れる", "帰国する", "定住する", "移民を受け入れる"],
        correctAnswer: "自国を離れる"
     },
     { 
        id: 1347,
        question: "dim",
        choices: ["薄暗い", "明るい", "輝く", "はっきりした"],
        correctAnswer: "薄暗い"
     },
     { 
        id: 1348,
        question: "heterosexual",
        choices: ["異性愛の", "同性愛の", "無性愛の", "全性愛の"],
        correctAnswer: "異性愛の"
     },
     { 
        id: 1349,
        question: "exult",
        choices: ["喜ぶ", "悲しむ", "怒る", "落胆する"],
        correctAnswer: "喜ぶ"
     },
     { 
        id: 1350,
        question: "coy",
        choices: ["恥ずかしいふりをした", "大胆な", "積極的な", "自信満々な"],
        correctAnswer: "恥ずかしいふりをした"
     },
     { 
        id: 1351,
        question: "heady",
        choices: ["せっかちな", "落ち着いた", "冷静な", "慎重な"],
        correctAnswer: "せっかちな"
     },
     { 
        id: 1352,
        question: "embroil",
        choices: ["巻き込む", "避ける", "拒絶する", "遠ざける"],
        correctAnswer: "巻き込む"
     },
     { 
        id: 1353,
        question: "affective",
        choices: ["優しい", "冷酷な", "冷淡な", "無関心な"],
        correctAnswer: "優しい"
     },
     { 
        id: 1354,
        question: "keep A out of B",
        choices: ["AをBに入れない", "AをBに含める", "AをBに関与させる", "AをBに組み込む"],
        correctAnswer: "AをBに入れない"
     },
     { 
        id: 1355,
        question: "bipolar",
        choices: ["二極ある", "単一の", "不安定な", "分裂した"],
        correctAnswer: "二極ある"
     },
     { 
        id: 1356,
        question: "bullish",
        choices: ["頑固な", "柔軟な", "寛容な", "冷静な"],
        correctAnswer: "頑固な"
     },
     { 
        id: 1357,
        question: "adrift",
        choices: ["漂流して", "固定された", "安定した", "計画的な"],
        correctAnswer: "漂流して"
     },
     { 
        id: 1358,
        question: "overblown",
        choices: ["誇張された", "控えめな", "適切な", "過小評価された"],
        correctAnswer: "誇張された"
     },
     { 
        id: 1359,
        question: "aforementioned",
        choices: ["前述の", "新しい", "無関係な", "後述の"],
        correctAnswer: "前述の"
     },
     { 
        id: 1360,
        question: "come off",
        choices: ["から取れる", "取り付ける", "固定する", "つなげる"],
        correctAnswer: "から取れる"
     },
     { 
        id: 1361,
        question: "glean",
        choices: ["集める", "捨てる", "隠す", "壊す"],
        correctAnswer: "集める"
     },
     { 
        id: 1362,
        question: "brandish",
        choices: ["振り回す", "片付ける", "無視する", "壊す"],
        correctAnswer: "振り回す"
     },
     { 
        id: 1363,
        question: "abdominal",
        choices: ["腹部の", "頭部の", "足の", "手の"],
        correctAnswer: "腹部の"
     },
     { 
        id: 1364,
        question: "curt",
        choices: ["そっけない", "優しい", "親切な", "温厚な"],
        correctAnswer: "そっけない"
     },
     { 
        id: 1365,
        question: "talk over",
        choices: ["相談する", "無視する", "叫ぶ", "強制する"],
        correctAnswer: "相談する"
     },
     { 
        id: 1366,
        question: "annul",
        choices: ["無効にする", "成立させる", "促進する", "改善する"],
        correctAnswer: "無効にする"
     },
     { 
        id: 1367,
        question: "forlorn",
        choices: ["孤独な", "活発な", "騒がしい", "楽しい"],
        correctAnswer: "孤独な"
     },
     { 
        id: 1368,
        question: "annex",
        choices: ["添付する", "削除する", "拒絶する", "分離する"],
        correctAnswer: "添付する"
     },
     { 
        id: 1369,
        question: "tawdry",
        choices: ["安っぽい", "高級な", "上品な", "貴重な"],
        correctAnswer: "安っぽい"
     },
     { 
        id: 1370,
        question: "terrestrial",
        choices: ["地球上の", "宇宙の", "海底の", "地下の"],
        correctAnswer: "地球上の"
     },
     { 
        id: 1371,
        question: "whim",
        choices: ["気まぐれ", "計画的", "決断力のある", "冷静な"],
        correctAnswer: "気まぐれ"
     },
     { 
        id: 1372,
        question: "celestial",
        choices: ["天体の", "地上の", "地下の", "海の"],
        correctAnswer: "天体の"
     },
     { 
        id: 1373,
        question: "rampant",
        choices: ["自由奔放な", "制御された", "抑制された", "大人しい"],
        correctAnswer: "自由奔放な"
     },
     { 
        id: 1374,
        question: "devious",
        choices: ["遠回りの", "直線的な", "一直線の", "シンプルな"],
        correctAnswer: "遠回りの"
     },
     { 
        id: 1375,
        question: "quirky",
        choices: ["風変わりな", "普通の", "標準的な", "平凡な"],
        correctAnswer: "風変わりな"
     },
     { 
        id: 1376,
        question: "sardonic",
        choices: ["冷笑的な", "真面目な", "心温まる", "励ますような"],
        correctAnswer: "冷笑的な"
     },
     { 
        id: 1377,
        question: "close in",
        choices: ["を閉じ込める", "解放する", "追い出す", "広げる"],
        correctAnswer: "を閉じ込める"
     },
     { 
        id: 1378,
        question: "corroborate",
        choices: ["裏付ける", "否定する", "歪曲する", "避ける"],
        correctAnswer: "裏付ける"
     },
     { 
        id: 1379,
        question: "confess to",
        choices: ["を白状する", "隠す", "逃げる", "弁解する"],
        correctAnswer: "を白状する"
     },
     { 
        id: 1380,
        question: "intestinal",
        choices: ["腸の", "心臓の", "肝臓の", "肺の"],
        correctAnswer: "腸の"
     },
     { 
        id: 1381,
        question: "retrospective",
        choices: ["回顧的な", "未来志向の", "進歩的な", "斬新な"],
        correctAnswer: "回顧的な"
     },
     { 
        id: 1382,
        question: "sleazy",
        choices: ["低級な", "高級な", "洗練された", "知的な"],
        correctAnswer: "低級な"
     },
     { 
        id: 1383,
        question: "forestall",
        choices: ["先んずる", "後回しにする", "遅れる", "避ける"],
        correctAnswer: "先んずる"
     },
     { 
        id: 1384,
        question: "forgo",
        choices: ["差し控える", "積極的に取る", "貪る", "求める"],
        correctAnswer: "差し控える"
     },
     { 
        id: 1385,
        question: "canine",
        choices: ["犬の", "猫の", "馬の", "鳥の"],
        correctAnswer: "犬の"
     },
     { 
        id: 1386,
        question: "bring A in",
        choices: ["Aを持ち込む", "Aを捨てる", "Aを取り除く", "Aを避ける"],
        correctAnswer: "Aを持ち込む"
     },
     { 
        id: 1387,
        question: "savvy",
        choices: ["分かる", "混乱する", "忘れる", "誤解する"],
        correctAnswer: "分かる"
     },
     { 
        id: 1388,
        question: "antiquated",
        choices: ["時代遅れの", "最新の", "進歩的な", "新しい"],
        correctAnswer: "時代遅れの"
     },
     { 
        id: 1389,
        question: "resilient",
        choices: ["弾力性のある", "脆弱な", "壊れやすい", "不安定な"],
        correctAnswer: "弾力性のある"
     },
     { 
        id: 1390,
        question: "audacious",
        choices: ["大胆な", "臆病な", "慎重な", "消極的な"],
        correctAnswer: "大胆な"
     },
     { 
        id: 1391,
        question: "austere",
        choices: ["厳格な", "甘い", "緩い", "優雅な"],
        correctAnswer: "厳格な"
     },
     { 
        id: 1392,
        question: "fluorescent",
        choices: ["蛍光の", "暗い", "光を吸収する", "透明な"],
        correctAnswer: "蛍光の"
     },
     { 
        id: 1393,
        question: "outstrip",
        choices: ["追い越す", "遅れる", "並ぶ", "止まる"],
        correctAnswer: "追い越す"
     },
     { 
        id: 1394,
        question: "hum",
        choices: ["鼻歌を歌う", "叫ぶ", "ささやく", "話す"],
        correctAnswer: "鼻歌を歌う"
     },
     { 
        id: 1395,
        question: "whimsical",
        choices: ["気まぐれな", "論理的な", "堅実な", "冷静な"],
        correctAnswer: "気まぐれな"
     },
     { 
        id: 1396,
        question: "extol",
        choices: ["絶賛する", "非難する", "無視する", "隠す"],
        correctAnswer: "絶賛する"
     },
     { 
        id: 1397,
        question: "drizzle",
        choices: ["霧雨が降る", "大雨が降る", "雪が降る", "風が吹く"],
        correctAnswer: "霧雨が降る"
     },
     { 
        id: 1398,
        question: "vandalism",
        choices: ["破壊行為", "修理", "保護", "整備"],
        correctAnswer: "破壊行為"
     },
     { 
        id: 1399,
        question: "retarded",
        choices: ["発達の遅れた", "優れた", "急速に成長する", "発展した"],
        correctAnswer: "発達の遅れた"
     },
     { 
        id: 1400,
        question: "abrupt",
        choices: ["突然の", "予測できる", "計画的な", "段階的な"],
        correctAnswer: "突然の"
     },
     { 
        id: 1401,
        question: "arcane",
        choices: ["不可思議な", "単純な", "分かりやすい", "明白な"],
        correctAnswer: "不可思議な"
     },
     { 
        id: 1402,
        question: "neural",
        choices: ["神経の", "骨の", "血液の", "筋肉の"],
        correctAnswer: "神経の"
     },
     { 
        id: 1403,
        question: "vile",
        choices: ["下劣な", "高貴な", "善良な", "正直な"],
        correctAnswer: "下劣な"
     },
     { 
        id: 1404,
        question: "solemn",
        choices: ["厳粛な", "軽薄な", "冗談めいた", "気軽な"],
        correctAnswer: "厳粛な"
     },
     { 
        id: 1405,
        question: "translucent",
        choices: ["半透明の", "不透明な", "完全に透明な", "曇った"],
        correctAnswer: "半透明の"
     },
     { 
        id: 1406,
        question: "degenerate",
        choices: ["退化する", "発展する", "向上する", "強化する"],
        correctAnswer: "退化する"
     },
     { 
        id: 1407,
        question: "obliterate",
        choices: ["抹消する", "保存する", "記録する", "示す"],
        correctAnswer: "抹消する"
     },
     { 
        id: 1408,
        question: "falter",
        choices: ["ためらう", "自信を持つ", "断言する", "すぐに決める"],
        correctAnswer: "ためらう"
     },
     { 
        id: 1409,
        question: "in excess",
        choices: ["過度に", "適度に", "不足して", "ちょうどよく"],
        correctAnswer: "過度に"
     },
     { 
        id: 1410,
        question: "brazen",
        choices: ["厚かましい", "謙虚な", "礼儀正しい", "控えめな"],
        correctAnswer: "厚かましい"
     },
     { 
        id: 1411,
        question: "fluffy",
        choices: ["フワフワした", "硬い", "鋭い", "平らな"],
        correctAnswer: "フワフワした"
     },
     { 
        id: 1412,
        question: "faded",
        choices: ["色あせた", "鮮やかな", "新しい", "光沢のある"],
        correctAnswer: "色あせた"
     },
     { 
        id: 1413,
        question: "civil rights",
        choices: ["公民権", "個人の趣味", "経済問題", "政治体制"],
        correctAnswer: "公民権"
     },
     { 
        id: 1414,
        question: "inundate",
        choices: ["水浸しにする", "乾燥させる", "冷却する", "燃やす"],
        correctAnswer: "水浸しにする"
     },
     { 
        id: 1415,
        question: "meander",
        choices: ["蛇行する", "一直線に進む", "急速に進む", "止まる"],
        correctAnswer: "蛇行する"
     },
     { 
        id: 1416,
        question: "paid vacation",
        choices: ["有給休暇", "無給休暇", "長時間労働", "解雇"],
        correctAnswer: "有給休暇"
     },
     { 
        id: 1417,
        question: "luxurious",
        choices: ["豪華な", "質素な", "簡素な", "慎ましい"],
        correctAnswer: "豪華な"
     },
     { 
        id: 1418,
        question: "putative",
        choices: ["推定の", "確定的な", "疑いのある", "信頼できる"],
        correctAnswer: "推定の"
     },
     { 
        id: 1419,
        question: "sanguine",
        choices: ["楽天的な", "悲観的な", "不安な", "疑わしい"],
        correctAnswer: "楽天的な"
     },
     { 
        id: 1420,
        question: "entrench",
        choices: ["防御する", "攻撃する", "開放する", "放棄する"],
        correctAnswer: "防御する"
     },
     { 
        id: 1421,
        question: "deride",
        choices: ["あざ笑う", "尊敬する", "驚く", "憂う"],
        correctAnswer: "あざ笑う"
     },
     { 
        id: 1422,
        question: "sort out",
        choices: ["分類する", "混ぜる", "捨てる", "蓄える"],
        correctAnswer: "分類する"
     },
     { 
        id: 1423,
        question: "volatility",
        choices: ["揮発性", "安定性", "重量", "透明度"],
        correctAnswer: "揮発性"
     },
     { 
        id: 1424,
        question: "flinch",
        choices: ["尻込みする", "積極的になる", "進む", "無視する"],
        correctAnswer: "尻込みする"
     },
     { 
        id: 1425,
        question: "vindication",
        choices: ["弁護", "非難", "攻撃", "放棄"],
        correctAnswer: "弁護"
     },
     { 
        id: 1426,
        question: "medical checkup",
        choices: ["健康診断", "手術", "薬の処方", "リハビリ"],
        correctAnswer: "健康診断"
     },
     { 
        id: 1427,
        question: "diabetic",
        choices: ["糖尿病の", "低血圧の", "健康的な", "貧血の"],
        correctAnswer: "糖尿病の"
     },
     { 
        id: 1428,
        question: "incendiary",
        choices: ["放火の", "冷却の", "凍結の", "消火の"],
        correctAnswer: "放火の"
     },
     { 
        id: 1429,
        question: "be likely to",
        choices: ["しそうである", "避ける", "不可能である", "確実でない"],
        correctAnswer: "しそうである"
     },
     { 
        id: 1430,
        question: "town twinning",
        choices: ["姉妹都市提携", "都市開発", "観光促進", "公共事業"],
        correctAnswer: "姉妹都市提携"
     },
     { 
        id: 1431,
        question: "vernacular",
        choices: ["固有の", "一般的な", "輸入された", "特殊な"],
        correctAnswer: "固有の"
     },
     { 
        id: 1432,
        question: "adjacent",
        choices: ["隣接している", "遠く離れた", "内部の", "孤立した"],
        correctAnswer: "隣接している"
     },
     { 
        id: 1433,
        question: "nominal",
        choices: ["名目上の", "具体的な", "実質的な", "極端な"],
        correctAnswer: "名目上の"
     },
     { 
        id: 1434,
        question: "opaque",
        choices: ["不透明な", "透明な", "半透明の", "光を通す"],
        correctAnswer: "不透明な"
     },
     { 
        id: 1435,
        question: "scrupulous",
        choices: ["良心的な", "無責任な", "不誠実な", "強欲な"],
        correctAnswer: "良心的な"
     },
     { 
        id: 1436,
        question: "nourish",
        choices: ["養う", "奪う", "破壊する", "拒絶する"],
        correctAnswer: "養う"
     },
     { 
        id: 1437,
        question: "crappy",
        choices: ["安っぽい", "高価な", "豪華な", "洗練された"],
        correctAnswer: "安っぽい"
     },
     { 
        id: 1438,
        question: "drench",
        choices: ["ずぶぬれにする", "乾燥させる", "熱する", "冷却する"],
        correctAnswer: "ずぶぬれにする"
     },
     { 
        id: 1439,
        question: "overstate",
        choices: ["誇張する", "控えめに言う", "適切に説明する", "省略する"],
        correctAnswer: "誇張する"
     },
     { 
        id: 1440,
        question: "narrow down A to B",
        choices: ["AをBに限定する", "AをBから増やす", "AをBと比較する", "AをBに拡大する"],
        correctAnswer: "AをBに限定する"
     },
     { 
        id: 1441,
        question: "insidious",
        choices: ["陰湿な", "誠実な", "公平な", "無害な"],
        correctAnswer: "陰湿な"
     },
     { 
        id: 1442,
        question: "lush",
        choices: ["青々とした", "乾燥した", "貧弱な", "しおれた"],
        correctAnswer: "青々とした"
     },
     { 
        id: 1443,
        question: "send out for",
        choices: ["お使いに出す", "自ら行く", "交換する", "返品する"],
        correctAnswer: "お使いに出す"
     },
     { 
        id: 1444,
        question: "grow out of",
        choices: ["から生じる", "縮小する", "減少する", "避ける"],
        correctAnswer: "から生じる"
     },
     { 
        id: 1445,
        question: "devoid",
        choices: ["欠けている", "満ちている", "余剰がある", "豊富な"],
        correctAnswer: "欠けている"
     },
     { 
        id: 1446,
        question: "condone",
        choices: ["大目に見る", "処罰する", "禁止する", "非難する"],
        correctAnswer: "大目に見る"
     },
     { 
        id: 1447,
        question: "arid",
        choices: ["乾燥した", "湿った", "氷のような", "霧の多い"],
        correctAnswer: "乾燥した"
     },
     { 
        id: 1448,
        question: "deft",
        choices: ["器用な", "不器用な", "遅い", "ぎこちない"],
        correctAnswer: "器用な"
     },
     { 
        id: 1449,
        question: "nimble",
        choices: ["機敏な", "鈍い", "遅い", "重たい"],
        correctAnswer: "機敏な"
     },
     { 
        id: 1450,
        question: "auditory",
        choices: ["聴覚の", "視覚の", "触覚の", "味覚の"],
        correctAnswer: "聴覚の"
     },
     { 
        id: 1451,
        question: "accrue",
        choices: ["発生する", "消滅する", "停止する", "減少する"],
        correctAnswer: "発生する"
     },
     { 
        id: 1452,
        question: "dearly",
        choices: ["心から", "適当に", "表面的に", "冷たく"],
        correctAnswer: "心から"
     },
     { 
        id: 1453,
        question: "ostensibly",
        choices: ["表向きは", "秘密裏に", "誠実に", "本音で"],
        correctAnswer: "表向きは"
     },
     { 
        id: 1454,
        question: "incompatible",
        choices: ["非互換の", "互換性のある", "適応する", "協調的な"],
        correctAnswer: "非互換の"
     },
     { 
        id: 1455,
        question: "obsessive",
        choices: ["強迫観念のある", "穏やかな", "気楽な", "冷静な"],
        correctAnswer: "強迫観念のある"
     },
     { 
        id: 1456,
        question: "prodigious",
        choices: ["驚異的な", "普通の", "平凡な", "小規模な"],
        correctAnswer: "驚異的な"
     },
     { 
        id: 1457,
        question: "fickle",
        choices: ["気まぐれな", "安定した", "計画的な", "規則正しい"],
        correctAnswer: "気まぐれな"
     },
     { 
        id: 1458,
        question: "inscribe",
        choices: ["刻む", "消す", "削る", "無視する"],
        correctAnswer: "刻む"
     },
     { 
        id: 1459,
        question: "ambivalent",
        choices: ["相反する感情のある", "一貫した", "単純な", "決断力のある"],
        correctAnswer: "相反する感情のある"
     },
     { 
        id: 1460,
        question: "canny",
        choices: ["抜け目のない", "騙されやすい", "誠実な", "単純な"],
        correctAnswer: "抜け目のない"
     },
     { 
        id: 1461,
        question: "deplete",
        choices: ["枯渇させる", "蓄える", "補充する", "増加させる"],
        correctAnswer: "枯渇させる"
     },
     { 
        id: 1462,
        question: "charred",
        choices: ["黒焦げになった", "新鮮な", "未調理の", "冷たい"],
        correctAnswer: "黒焦げになった"
     },
     { 
        id: 1463,
        question: "disparate",
        choices: ["異なる", "同一の", "似ている", "近しい"],
        correctAnswer: "異なる"
     },
     { 
        id: 1464,
        question: "put A into place",
        choices: ["Aを実行する", "Aを削除する", "Aを延期する", "Aを拒否する"],
        correctAnswer: "Aを実行する"
     },
     { 
        id: 1465,
        question: "turn away",
        choices: ["追い返す", "歓迎する", "呼び寄せる", "保護する"],
        correctAnswer: "追い返す"
     },
     { 
        id: 1466,
        question: "hideous",
        choices: ["恐ろしい", "美しい", "可愛い", "平凡な"],
        correctAnswer: "恐ろしい"
     },
     { 
        id: 1467,
        question: "irate",
        choices: ["怒った", "冷静な", "悲しんでいる", "楽しんでいる"],
        correctAnswer: "怒った"
     },
     { 
        id: 1468,
        question: "capitulate",
        choices: ["降伏する", "攻撃する", "交渉する", "支配する"],
        correctAnswer: "降伏する"
     },
     { 
        id: 1469,
        question: "cull",
        choices: ["間引く", "増やす", "放置する", "無視する"],
        correctAnswer: "間引く"
     },
     { 
        id: 1470,
        question: "limit A to B",
        choices: ["AをBに限定する", "AをBに拡大する", "AをBから削除する", "AをBから解放する"],
        correctAnswer: "AをBに限定する"
     },
     { 
        id: 1471,
        question: "speculative",
        choices: ["思索的な", "断定的な", "具体的な", "明白な"],
        correctAnswer: "思索的な"
     },
     { 
        id: 1472,
        question: "vet",
        choices: ["獣医", "医師", "教師", "科学者"],
        correctAnswer: "獣医"
     },
     { 
        id: 1473,
        question: "frigid",
        choices: ["極寒の", "温暖な", "暑い", "湿った"],
        correctAnswer: "極寒の"
     },
     { 
        id: 1474,
        question: "push A back",
        choices: ["Aを遅らせる", "Aを早める", "Aを強化する", "Aを許可する"],
        correctAnswer: "Aを遅らせる"
     },
     { 
        id: 1475,
        question: "flounder",
        choices: ["もがく", "進む", "踊る", "休む"],
        correctAnswer: "もがく"
     },
     { 
        id: 1476,
        question: "leisurely",
        choices: ["のんびりした", "急いだ", "忙しい", "慌ただしい"],
        correctAnswer: "のんびりした"
     },
     { 
        id: 1477,
        question: "align",
        choices: ["揃える", "曲げる", "無視する", "崩す"],
        correctAnswer: "揃える"
     },
     { 
        id: 1478,
        question: "hit the books",
        choices: ["猛勉強する", "読書を楽しむ", "リラックスする", "遊ぶ"],
        correctAnswer: "猛勉強する"
     },
     { 
        id: 1479,
        question: "affiliated",
        choices: ["提携した", "独立した", "無関係な", "敵対的な"],
        correctAnswer: "提携した"
     },
     { 
        id: 1480,
        question: "gild",
        choices: ["金を塗る", "洗う", "削る", "磨く"],
        correctAnswer: "金を塗る"
     },
     { 
        id: 1481,
        question: "fit A with B",
        choices: ["AにBを備え付ける", "AをBから取り除く", "AをBに交換する", "AをBに合わせる"],
        correctAnswer: "AにBを備え付ける"
     },
     { 
        id: 1482,
        question: "upheaval",
        choices: ["隆起", "沈降", "静止", "安定"],
        correctAnswer: "隆起"
     },
     { 
        id: 1483,
        question: "contemplative",
        choices: ["瞑想的な", "騒がしい", "社交的な", "活動的な"],
        correctAnswer: "瞑想的な"
     },
     { 
        id: 1484,
        question: "dissipate",
        choices: ["散らす", "集める", "凝縮する", "増やす"],
        correctAnswer: "散らす"
     },
     { 
        id: 1485,
        question: "respiratory",
        choices: ["呼吸の", "消化の", "循環の", "神経の"],
        correctAnswer: "呼吸の"
     },
     { 
        id: 1486,
        question: "hasten",
        choices: ["急がせる", "遅らせる", "安定させる", "休ませる"],
        correctAnswer: "急がせる"
     },
     { 
        id: 1487,
        question: "amidst",
        choices: ["の中で", "の外で", "の上で", "の隣で"],
        correctAnswer: "の中で"
     },
     { 
        id: 1488,
        question: "parking lot",
        choices: ["駐車場", "公園", "広場", "交差点"],
        correctAnswer: "駐車場"
     },
     { 
        id: 1489,
        question: "trinity",
        choices: ["三位一体", "四つ組", "五角形", "二つ組"],
        correctAnswer: "三位一体"
     },
     { 
        id: 1490,
        question: "infringe",
        choices: ["侵害する", "保護する", "許可する", "強化する"],
        correctAnswer: "侵害する"
     },
     { 
        id: 1491,
        question: "state of the art",
        choices: ["最先端の", "古風な", "基本的な", "過去の"],
        correctAnswer: "最先端の"
     },
     { 
        id: 1492,
        question: "wrath",
        choices: ["激怒", "冷静", "喜び", "驚き"],
        correctAnswer: "激怒"
     },
     { 
        id: 1493,
        question: "dazzling",
        choices: ["眩しい", "暗い", "陰気な", "鈍い"],
        correctAnswer: "眩しい"
     },
     { 
        id: 1494,
        question: "ghastly",
        choices: ["恐ろしい", "楽しい", "安心する", "明るい"],
        correctAnswer: "恐ろしい"
     },
     { 
        id: 1495,
        question: "intimately",
        choices: ["親密に", "遠くに", "軽く", "疎遠に"],
        correctAnswer: "親密に"
     },
     { 
        id: 1496,
        question: "in particular",
        choices: ["特に", "普通は", "たまに", "適当に"],
        correctAnswer: "特に"
     },
     { 
        id: 1497,
        question: "genteel",
        choices: ["上品な", "粗野な", "乱暴な", "下品な"],
        correctAnswer: "上品な"
     },
     { 
        id: 1498,
        question: "addictive",
        choices: ["中毒性の", "安全な", "退屈な", "有害な"],
        correctAnswer: "中毒性の"
     },
     { 
        id: 1499,
        question: "rabid",
        choices: ["狂った", "穏やかな", "冷静な", "落ち着いた"],
        correctAnswer: "狂った"
     },
     { 
        id: 1500,
        question: "clinch",
        choices: ["折り曲げて留める", "解放する", "放置する", "削除する"],
        correctAnswer: "折り曲げて留める"
     },
     { 
        id: 1501,
        question: "malign",
        choices: ["有害な", "無害な", "中立の", "役に立つ"],
        correctAnswer: "有害な"
     },
     { 
        id: 1502,
        question: "quintessential",
        choices: ["典型的な", "特殊な", "異常な", "奇抜な"],
        correctAnswer: "典型的な"
     },
     { 
        id: 1503,
        question: "loot",
        choices: ["戦利品", "寄付金", "贈り物", "手土産"],
        correctAnswer: "戦利品"
     },
     { 
        id: 1504,
        question: "martian",
        choices: ["火星の", "月の", "地球の", "宇宙の"],
        correctAnswer: "火星の"
     },
     { 
        id: 1505,
        question: "womb",
        choices: ["子宮", "心臓", "肺", "肝臓"],
        correctAnswer: "子宮"
     },
     { 
        id: 1506,
        question: "admirable",
        choices: ["見事な", "平凡な", "ひどい", "普通の"],
        correctAnswer: "見事な"
     },
     { 
        id: 1507,
        question: "acquit",
        choices: ["無罪宣告する", "有罪判決を下す", "追放する", "懲罰する"],
        correctAnswer: "無罪宣告する"
     },
     { 
        id: 1508,
        question: "be laid up",
        choices: ["寝込む", "健康になる", "元気になる", "歩き回る"],
        correctAnswer: "寝込む"
     },
     { 
        id: 1509,
        question: "fret",
        choices: ["いらいらする", "落ち着く", "喜ぶ", "安心する"],
        correctAnswer: "いらいらする"
     },
     { 
        id: 1510,
        question: "count for",
        choices: ["の価値がある", "無価値である", "誤ったものである", "疑問のある"],
        correctAnswer: "の価値がある"
     },
     { 
        id: 1511,
        question: "fervent",
        choices: ["熱烈な", "冷淡な", "怠惰な", "不機嫌な"],
        correctAnswer: "熱烈な"
     },
     { 
        id: 1512,
        question: "touchy",
        choices: ["過敏な", "無関心な", "楽観的な", "鈍感な"],
        correctAnswer: "過敏な"
     },
     { 
        id: 1513,
        question: "file a suit",
        choices: ["提訴する", "示談する", "撤回する", "和解する"],
        correctAnswer: "提訴する"
     },
     { 
        id: 1514,
        question: "humiliating",
        choices: ["屈辱的な", "誇らしい", "楽しい", "心地よい"],
        correctAnswer: "屈辱的な"
     },
     { 
        id: 1515,
        question: "lavish",
        choices: ["気前の良い", "倹約的な", "冷酷な", "無関心な"],
        correctAnswer: "気前の良い"
     },
     { 
        id: 1516,
        question: "in development",
        choices: ["開発中の", "完成した", "破棄された", "保留中の"],
        correctAnswer: "開発中の"
     },
     { 
        id: 1517,
        question: "disposable",
        choices: ["使い捨ての", "再利用可能な", "高価な", "耐久性のある"],
        correctAnswer: "使い捨ての"
     },
     { 
        id: 1518,
        question: "grope",
        choices: ["模索する", "確信する", "否定する", "拒絶する"],
        correctAnswer: "模索する"
     },
     { 
        id: 1519,
        question: "collegiate",
        choices: ["大学の", "高校の", "社会の", "専門学校の"],
        correctAnswer: "大学の"
     },
     { 
        id: 1520,
        question: "insatiable",
        choices: ["貪欲な", "満足した", "慎ましい", "無関心な"],
        correctAnswer: "貪欲な"
     },
     { 
        id: 1521,
        question: "err",
        choices: ["誤る", "正す", "改善する", "修正する"],
        correctAnswer: "誤る"
     },
     { 
        id: 1522,
        question: "futile",
        choices: ["無駄な", "効果的な", "役立つ", "有益な"],
        correctAnswer: "無駄な"
     },
     { 
        id: 1523,
        question: "motley",
        choices: ["雑多な", "均一な", "単純な", "整理された"],
        correctAnswer: "雑多な"
     },
     { 
        id: 1524,
        question: "noteworthy",
        choices: ["注目に値する", "平凡な", "取るに足らない", "無名の"],
        correctAnswer: "注目に値する"
     },
     { 
        id: 1525,
        question: "lunge",
        choices: ["突進", "後退", "静止", "停止"],
        correctAnswer: "突進"
     },
     { 
        id: 1526,
        question: "brutally",
        choices: ["残酷に", "優しく", "穏やかに", "柔らかく"],
        correctAnswer: "残酷に"
     },
     { 
        id: 1527,
        question: "detonate",
        choices: ["爆発させる", "消火する", "鎮火する", "静める"],
        correctAnswer: "爆発させる"
     },
     { 
        id: 1528,
        question: "intrude",
        choices: ["侵入する", "退出する", "迎え入れる", "許可する"],
        correctAnswer: "侵入する"
     },
     { 
        id: 1529,
        question: "raucous",
        choices: ["騒々しい", "静かな", "穏やかな", "控えめな"],
        correctAnswer: "騒々しい"
     },
     { 
        id: 1530,
        question: "mortify",
        choices: ["悔しがらせる", "誇りに思わせる", "喜ばせる", "安心させる"],
        correctAnswer: "悔しがらせる"
     },
     { 
        id: 1531,
        question: "infest",
        choices: ["はびこる", "滅びる", "衰退する", "消える"],
        correctAnswer: "はびこる"
     },
     { 
        id: 1532,
        question: "tuberculosis",
        choices: ["結核", "インフルエンザ", "肝炎", "骨折"],
        correctAnswer: "結核"
     },
     { 
        id: 1533,
        question: "coronary",
        choices: ["冠状動脈の", "消化器官の", "神経系の", "筋肉の"],
        correctAnswer: "冠状動脈の"
     },
     { 
        id: 1534,
        question: "exacerbate",
        choices: ["悪化させる", "改善する", "癒す", "治療する"],
        correctAnswer: "悪化させる"
     },
     { 
        id: 1535,
        question: "horribly",
        choices: ["恐ろしく", "楽しく", "安心して", "喜ばしく"],
        correctAnswer: "恐ろしく"
     },
     { 
        id: 1536,
        question: "make it",
        choices: ["やり遂げる", "諦める", "放棄する", "失敗する"],
        correctAnswer: "やり遂げる"
     },
     { 
        id: 1537,
        question: "momentarily",
        choices: ["瞬時に", "ゆっくりと", "長時間", "絶えず"],
        correctAnswer: "瞬時に"
     },
     { 
        id: 1538,
        question: "loom",
        choices: ["ぼんやり現れる", "消える", "はっきり見える", "目立たない"],
        correctAnswer: "ぼんやり現れる"
     },
     { 
        id: 1539,
        question: "nibble",
        choices: ["少しずつ食べる", "がつがつ食べる", "投げ捨てる", "完全に食べる"],
        correctAnswer: "少しずつ食べる"
     },
     { 
        id: 1540,
        question: "vice versa",
        choices: ["反対もまた", "特に関係ない", "例外として", "無関係に"],
        correctAnswer: "反対もまた"
     },
     { 
        id: 1541,
        question: "verification",
        choices: ["立証", "推測", "否定", "削除"],
        correctAnswer: "立証"
     },
     { 
        id: 1542,
        question: "deserving",
        choices: ["値する", "無価値な", "関係ない", "余分な"],
        correctAnswer: "値する"
     },
     { 
        id: 1543,
        question: "impromptu",
        choices: ["即座に", "慎重に", "計画的に", "ゆっくりと"],
        correctAnswer: "即座に"
     },
     { 
        id: 1544,
        question: "show off",
        choices: ["見せびらかす", "控えめにする", "無視する", "遠慮する"],
        correctAnswer: "見せびらかす"
     },
     { 
        id: 1545,
        question: "insofar",
        choices: ["その範囲で", "どこでも", "制限なく", "無関係に"],
        correctAnswer: "その範囲で"
     },
     { 
        id: 1546,
        question: "ooze",
        choices: ["にじみ出る", "乾燥する", "蒸発する", "吸収する"],
        correctAnswer: "にじみ出る"
     },
     { 
        id: 1547,
        question: "ballistic",
        choices: ["弾道の", "固定の", "静止した", "予測不能な"],
        correctAnswer: "弾道の"
     },
     { 
        id: 1548,
        question: "greasy",
        choices: ["脂っこい", "さっぱりした", "乾燥した", "清潔な"],
        correctAnswer: "脂っこい"
     },
     { 
        id: 1549,
        question: "crash down",
        choices: ["崩れる", "上昇する", "安定する", "改善する"],
        correctAnswer: "崩れる"
     },
     { 
        id: 1550,
        question: "engulf",
        choices: ["飲み込む", "吐き出す", "放出する", "逃がす"],
        correctAnswer: "飲み込む"
     },
     { 
        id: 1551,
        question: "ceremonial",
        choices: ["儀式上の", "非公式の", "日常の", "即興の"],
        correctAnswer: "儀式上の"
     },
     { 
        id: 1552,
        question: "prodigy",
        choices: ["天才", "普通の人", "凡人", "怠け者"],
        correctAnswer: "天才"
     },
     { 
        id: 1553,
        question: "provisional",
        choices: ["暫定的な", "確定した", "無意味な", "不要な"],
        correctAnswer: "暫定的な"
     },
     { 
        id: 1554,
        question: "extremist",
        choices: ["過激派", "温厚な人", "冷静な人", "控えめな人"],
        correctAnswer: "過激派"
     },
     { 
        id: 1555,
        question: "numb",
        choices: ["麻痺した", "鋭敏な", "敏感な", "動きやすい"],
        correctAnswer: "麻痺した"
     },
     { 
        id: 1556,
        question: "expose A to B",
        choices: ["AをBにさらす", "AをBから守る", "AをBに隠す", "AをBに届ける"],
        correctAnswer: "AをBにさらす"
     },
     { 
        id: 1557,
        question: "wee",
        choices: ["ちっぽけな", "巨大な", "広大な", "標準的な"],
        correctAnswer: "ちっぽけな"
     },
     { 
        id: 1558,
        question: "worthy",
        choices: ["価値のある", "無駄な", "取るに足らない", "平凡な"],
        correctAnswer: "価値のある"
     },
     { 
        id: 1559,
        question: "aggregate",
        choices: ["集める", "分散する", "隠す", "取り除く"],
        correctAnswer: "集める"
     },
     { 
        id: 1560,
        question: "nightly",
        choices: ["夜間の", "昼間の", "午後の", "明るい"],
        correctAnswer: "夜間の"
     },
     { 
        id: 1561,
        question: "overshadow",
        choices: ["暗くする", "明るくする", "目立たせる", "強調する"],
        correctAnswer: "暗くする"
     },
     { 
        id: 1562,
        question: "application form",
        choices: ["申込用紙", "報告書", "領収書", "契約書"],
        correctAnswer: "申込用紙"
     },
     { 
        id: 1563,
        question: "eject",
        choices: ["追い出す", "歓迎する", "引き入れる", "保護する"],
        correctAnswer: "追い出す"
     },
     { 
        id: 1564,
        question: "warren",
        choices: ["飼育場", "農場", "市場", "貯蔵庫"],
        correctAnswer: "飼育場"
     },
     { 
        id: 1565,
        question: "lurch",
        choices: ["よろめき", "安定", "直立", "整然"],
        correctAnswer: "よろめき"
     },
     { 
        id: 1566,
        question: "spooky",
        choices: ["不気味な", "楽しい", "明るい", "爽やかな"],
        correctAnswer: "不気味な"
     },
     { 
        id: 1567,
        question: "apprehensive",
        choices: ["心配した", "安心した", "確信した", "楽観的な"],
        correctAnswer: "心配した"
     },
     { 
        id: 1568,
        question: "gear up",
        choices: ["準備を整える", "混乱する", "躊躇する", "放棄する"],
        correctAnswer: "準備を整える"
     },
     { 
        id: 1569,
        question: "classy",
        choices: ["上品な", "下品な", "雑な", "平凡な"],
        correctAnswer: "上品な"
     },
     { 
        id: 1570,
        question: "consummate",
        choices: ["完ぺきな", "未熟な", "欠陥のある", "発展途上の"],
        correctAnswer: "完ぺきな"
     },
     { 
        id: 1571,
        question: "esteem",
        choices: ["尊重する", "軽視する", "無視する", "侮辱する"],
        correctAnswer: "尊重する"
     },
     { 
        id: 1572,
        question: "glib",
        choices: ["口達者な", "無口な", "鈍い", "話下手な"],
        correctAnswer: "口達者な"
     },
     { 
        id: 1573,
        question: "in mind",
        choices: ["頭に置いて", "忘れて", "無視して", "排除して"],
        correctAnswer: "頭に置いて"
     },
     { 
        id: 1574,
        question: "demur",
        choices: ["異議を唱える", "同意する", "賛成する", "称賛する"],
        correctAnswer: "異議を唱える"
     },
     { 
        id: 1575,
        question: "inadvertently",
        choices: ["うっかりと", "慎重に", "故意に", "計画的に"],
        correctAnswer: "うっかりと"
     },
     { 
        id: 1576,
        question: "burly",
        choices: ["たくましい", "ひ弱な", "小柄な", "繊細な"],
        correctAnswer: "たくましい"
     },
     { 
        id: 1577,
        question: "ragged",
        choices: ["ぼろぼろの", "新品の", "きちんとした", "綺麗な"],
        correctAnswer: "ぼろぼろの"
     },
     { 
        id: 1578,
        question: "malicious",
        choices: ["悪意のある", "善良な", "優しい", "親切な"],
        correctAnswer: "悪意のある"
     },
     { 
        id: 1579,
        question: "clueless",
        choices: ["無知な", "知識豊富な", "賢い", "博学な"],
        correctAnswer: "無知な"
     },
     { 
        id: 1580,
        question: "fetal",
        choices: ["胎児の", "成人の", "老齢の", "生まれたばかりの"],
        correctAnswer: "胎児の"
     },
     { 
        id: 1581,
        question: "rife",
        choices: ["流行して", "廃れた", "稀な", "珍しい"],
        correctAnswer: "流行して"
     },
     { 
        id: 1582,
        question: "depose",
        choices: ["免職する", "昇進させる", "任命する", "採用する"],
        correctAnswer: "免職する"
     },
     { 
        id: 1583,
        question: "indelible",
        choices: ["消えない", "一時的な", "すぐに消える", "薄れる"],
        correctAnswer: "消えない"
     },
     { 
        id: 1584,
        question: "proprietary",
        choices: ["所有者の", "一般公開の", "無料の", "共有の"],
        correctAnswer: "所有者の"
     },
     { 
        id: 1585,
        question: "impeach",
        choices: ["弾劾する", "支持する", "擁護する", "称賛する"],
        correctAnswer: "弾劾する"
     },
     { 
        id: 1586,
        question: "nod off",
        choices: ["眠り込む", "目を覚ます", "活動的になる", "動き回る"],
        correctAnswer: "眠り込む"
     },
     { 
        id: 1587,
        question: "indispensable",
        choices: ["欠かせない", "不要な", "代替可能な", "無意味な"],
        correctAnswer: "欠かせない"
     },
     { 
        id: 1588,
        question: "glossy",
        choices: ["光沢のある", "くすんだ", "マットな", "色褪せた"],
        correctAnswer: "光沢のある"
     },
     { 
        id: 1589,
        question: "leach",
        choices: ["ろ過する", "汚染する", "詰まらせる", "染み込ませる"],
        correctAnswer: "ろ過する"
     },
     { 
        id: 1590,
        question: "disparage",
        choices: ["見下す", "尊敬する", "称賛する", "評価する"],
        correctAnswer: "見下す"
     },
     { 
        id: 1591,
        question: "be critical of",
        choices: ["批判的である", "称賛する", "賛同する", "支持する"],
        correctAnswer: "批判的である"
     },
     { 
        id: 1592,
        question: "glut",
        choices: ["満たす", "不足する", "枯渇する", "減少する"],
        correctAnswer: "満たす"
     },
     { 
        id: 1593,
        question: "sumptuous",
        choices: ["贅沢な", "質素な", "安価な", "普通の"],
        correctAnswer: "贅沢な"
     },
     { 
        id: 1594,
        question: "abrasive",
        choices: ["すり減らす", "増やす", "滑らかにする", "整える"],
        correctAnswer: "すり減らす"
     },
     { 
        id: 1595,
        question: "debase",
        choices: ["堕落させる", "向上させる", "改善する", "強化する"],
        correctAnswer: "堕落させる"
     },
     { 
        id: 1596,
        question: "stunned",
        choices: ["驚いた", "冷静な", "無関心な", "無表情な"],
        correctAnswer: "驚いた"
     },
     { 
        id: 1597,
        question: "equitable",
        choices: ["公平な", "偏った", "不平等な", "一方的な"],
        correctAnswer: "公平な"
     },
     { 
        id: 1598,
        question: "contraceptive",
        choices: ["避妊の", "妊娠促進の", "育児の", "不妊の"],
        correctAnswer: "避妊の"
     },
     { 
        id: 1599,
        question: "salient",
        choices: ["顕著な", "目立たない", "ぼんやりした", "隠れた"],
        correctAnswer: "顕著な"
     },
     { 
        id: 1600,
        question: "mend",
        choices: ["繕う", "壊す", "捨てる", "放置する"],
        correctAnswer: "繕う"
     },
     { 
        id: 1601,
        question: "vantage",
        choices: ["有利", "不利", "普通", "危険"],
        correctAnswer: "有利"
     },
     { 
        id: 1602,
        question: "clandestine",
        choices: ["内密の", "公然の", "目立つ", "堂々とした"],
        correctAnswer: "内密の"
     },
     { 
        id: 1603,
        question: "cobble",
        choices: ["修繕する", "壊す", "放棄する", "見逃す"],
        correctAnswer: "修繕する"
     },
     { 
        id: 1604,
        question: "candid",
        choices: ["率直な", "曖昧な", "遠回しな", "控えめな"],
        correctAnswer: "率直な"
     },
     { 
        id: 1605,
        question: "insurgent",
        choices: ["暴動を起こした", "平和的な", "従順な", "冷静な"],
        correctAnswer: "暴動を起こした"
     },
     { 
        id: 1606,
        question: "hurtle",
        choices: ["急いで行く", "ゆっくり進む", "止まる", "待つ"],
        correctAnswer: "急いで行く"
     },
     { 
        id: 1607,
        question: "optic",
        choices: ["目の", "耳の", "手の", "足の"],
        correctAnswer: "目の"
     },
     { 
        id: 1608,
        question: "serpent",
        choices: ["蛇", "猫", "犬", "馬"],
        correctAnswer: "蛇"
     },
     { 
        id: 1609,
        question: "synthesize",
        choices: ["統合する", "分解する", "排除する", "削減する"],
        correctAnswer: "統合する"
     },
     { 
        id: 1610,
        question: "fill out",
        choices: ["記入する", "削除する", "修正する", "省略する"],
        correctAnswer: "記入する"
     },
     { 
        id: 1611,
        question: "dementia",
        choices: ["認知症", "風邪", "骨折", "アレルギー"],
        correctAnswer: "認知症"
     },
     { 
        id: 1612,
        question: "garrison",
        choices: ["駐屯地", "病院", "学校", "図書館"],
        correctAnswer: "駐屯地"
     },
     { 
        id: 1613,
        question: "threaten A with extinction",
        choices: ["Aを絶滅の危機にさらす", "Aを保護する", "Aを増やす", "Aを守る"],
        correctAnswer: "Aを絶滅の危機にさらす"
     },
     { 
        id: 1614,
        question: "injunction",
        choices: ["差し止め", "許可", "促進", "推奨"],
        correctAnswer: "差し止め"
     },
     { 
        id: 1615,
        question: "contaminant",
        choices: ["汚染物質", "清浄物", "薬品", "食品"],
        correctAnswer: "汚染物質"
     },
     { 
        id: 1616,
        question: "do away with",
        choices: ["廃止する", "開始する", "強化する", "増やす"],
        correctAnswer: "廃止する"
     },
     { 
        id: 1617,
        question: "quarry",
        choices: ["採石場", "市場", "牧場", "畑"],
        correctAnswer: "採石場"
     },
     { 
        id: 1618,
        question: "from scratch",
        choices: ["最初から", "途中から", "終わりに", "突然に"],
        correctAnswer: "最初から"
     },
     { 
        id: 1619,
        question: "infusion",
        choices: ["注入", "排出", "乾燥", "除去"],
        correctAnswer: "注入"
     },
     { 
        id: 1620,
        question: "realtor",
        choices: ["不動産業者", "医者", "弁護士", "教師"],
        correctAnswer: "不動産業者"
     },
     { 
        id: 1621,
        question: "benefit from",
        choices: ["で利益を得る", "損をする", "無視する", "避ける"],
        correctAnswer: "で利益を得る"
     },
     { 
        id: 1622,
        question: "head off",
        choices: ["回避する", "直面する", "突進する", "受け入れる"],
        correctAnswer: "回避する"
     },
     { 
        id: 1623,
        question: "barrage",
        choices: ["弾幕", "沈黙", "静寂", "単発"],
        correctAnswer: "弾幕"
     },
     { 
        id: 1624,
        question: "defection",
        choices: ["離反", "忠誠", "維持", "継続"],
        correctAnswer: "離反"
     },
     { 
        id: 1625,
        question: "spate",
        choices: ["多数", "少数", "単数", "皆無"],
        correctAnswer: "多数"
     },
     { 
        id: 1626,
        question: "brethren",
        choices: ["義兄弟", "敵", "他人", "競争相手"],
        correctAnswer: "義兄弟"
     },
     { 
        id: 1627,
        question: "clutter",
        choices: ["乱雑", "整理整頓", "整然", "規律"],
        correctAnswer: "乱雑"
     },
     { 
        id: 1628,
        question: "thump",
        choices: ["強く打つ", "軽く触れる", "撫でる", "引っ張る"],
        correctAnswer: "強く打つ"
     },
     { 
        id: 1629,
        question: "civility",
        choices: ["礼儀正しさ", "無礼", "粗野", "失礼"],
        correctAnswer: "礼儀正しさ"
     },
     { 
        id: 1630,
        question: "moss",
        choices: ["苔", "花", "草", "木"],
        correctAnswer: "苔"
     },
     { 
        id: 1631,
        question: "ordinance",
        choices: ["条例", "法律", "規則", "憲法"],
        correctAnswer: "条例"
     },
     { 
        id: 1632,
        question: "buyout",
        choices: ["買占め", "節約", "売却", "投資"],
        correctAnswer: "買占め"
     },
     { 
        id: 1633,
        question: "leukemia",
        choices: ["白血病", "肺炎", "糖尿病", "関節炎"],
        correctAnswer: "白血病"
     },
     { 
        id: 1634,
        question: "oxide",
        choices: ["酸化物", "水分", "アルカリ", "炭水化物"],
        correctAnswer: "酸化物"
     },
     { 
        id: 1635,
        question: "up front",
        choices: ["前もって", "後から", "途中で", "最初から"],
        correctAnswer: "前もって"
     },
     { 
        id: 1636,
        question: "pore",
        choices: ["細孔", "しわ", "筋肉", "血管"],
        correctAnswer: "細孔"
     },
     { 
        id: 1637,
        question: "negligence",
        choices: ["怠慢", "注意", "熱心", "努力"],
        correctAnswer: "怠慢"
     },
     { 
        id: 1638,
        question: "loophole",
        choices: ["抜け穴", "壁", "防御", "規律"],
        correctAnswer: "抜け穴"
     },
     { 
        id: 1639,
        question: "braille",
        choices: ["点字", "手話", "筆記", "暗号"],
        correctAnswer: "点字"
     },
     { 
        id: 1640,
        question: "proliferate",
        choices: ["増殖する", "減少する", "枯れる", "分裂する"],
        correctAnswer: "増殖する"
     },
     { 
        id: 1641,
        question: "tamper",
        choices: ["改ざんする", "守る", "修理する", "回避する"],
        correctAnswer: "改ざんする"
     },
     { 
        id: 1642,
        question: "lexicon",
        choices: ["語彙", "文法", "言語", "会話"],
        correctAnswer: "語彙"
     },
     { 
        id: 1643,
        question: "perjury",
        choices: ["偽証", "証言", "告白", "宣言"],
        correctAnswer: "偽証"
     },
     { 
        id: 1644,
        question: "diarrhea",
        choices: ["下痢", "風邪", "胃炎", "腹痛"],
        correctAnswer: "下痢"
     },
     { 
        id: 1645,
        question: "frankly speaking",
        choices: ["率直に言うと", "控えめに言うと", "隠して言うと", "遠回しに言うと"],
        correctAnswer: "率直に言うと"
     },
     { 
        id: 1646,
        question: "berth",
        choices: ["寝台", "座席", "客室", "待合室"],
        correctAnswer: "寝台"
     },
     { 
        id: 1647,
        question: "perpetrate",
        choices: ["犯す", "守る", "計画する", "予測する"],
        correctAnswer: "犯す"
     },
     { 
        id: 1648,
        question: "kick off",
        choices: ["始める", "終わる", "続ける", "減速する"],
        correctAnswer: "始める"
     },
     { 
        id: 1649,
        question: "purport",
        choices: ["趣旨", "感想", "意見", "反論"],
        correctAnswer: "趣旨"
     },
     { 
        id: 1650,
        question: "waver",
        choices: ["揺らぐ", "固まる", "安定する", "確立する"],
        correctAnswer: "揺らぐ"
     },
     { 
        id: 1651,
        question: "luncheon",
        choices: ["昼食", "朝食", "夕食", "夜食"],
        correctAnswer: "昼食"
     },
     { 
        id: 1652,
        question: "espionage",
        choices: ["スパイ活動", "政治活動", "学問研究", "経済発展"],
        correctAnswer: "スパイ活動"
     },
     { 
        id: 1653,
        question: "genesis",
        choices: ["起源", "結末", "途中", "要点"],
        correctAnswer: "起源"
     },
     { 
        id: 1654,
        question: "janitor",
        choices: ["用務員", "医者", "教師", "警察官"],
        correctAnswer: "用務員"
     },
     { 
        id: 1655,
        question: "alumnus",
        choices: ["卒業生", "新入生", "在校生", "教師"],
        correctAnswer: "卒業生"
     },
     { 
        id: 1656,
        question: "antidote",
        choices: ["解毒剤", "薬品", "治療", "感染"],
        correctAnswer: "解毒剤"
     },
     { 
        id: 1657,
        question: "commandment",
        choices: ["命令", "希望", "助言", "仮説"],
        correctAnswer: "命令"
     },
     { 
        id: 1658,
        question: "wane",
        choices: ["欠ける", "増える", "変化する", "継続する"],
        correctAnswer: "欠ける"
     },
     { 
        id: 1659,
        question: "booty",
        choices: ["戦利品", "負債", "財産", "義務"],
        correctAnswer: "戦利品"
     },
     { 
        id: 1660,
        question: "abyss",
        choices: ["深淵", "丘", "山", "平地"],
        correctAnswer: "深淵"
     },
     { 
        id: 1661,
        question: "subvert",
        choices: ["覆す", "強化する", "修正する", "拒絶する"],
        correctAnswer: "覆す"
     },
     { 
        id: 1662,
        question: "cynic",
        choices: ["皮肉屋", "楽観主義者", "批評家", "哲学者"],
        correctAnswer: "皮肉屋"
     },
     { 
        id: 1663,
        question: "electrode",
        choices: ["電極", "抵抗", "電池", "発電機"],
        correctAnswer: "電極"
     },
     { 
        id: 1664,
        question: "drop by",
        choices: ["立ち寄る", "完全に訪れる", "通り過ぎる", "引っ越す"],
        correctAnswer: "立ち寄る"
     },
     { 
        id: 1665,
        question: "sexist",
        choices: ["男女差別主義者", "平等主義者", "女性解放論者", "教育者"],
        correctAnswer: "男女差別主義者"
     },
     { 
        id: 1666,
        question: "choreographer",
        choices: ["振付師", "ダンサー", "作曲家", "監督"],
        correctAnswer: "振付師"
     },
     { 
        id: 1667,
        question: "collusion",
        choices: ["共謀", "競争", "対立", "協力"],
        correctAnswer: "共謀"
     },
     { 
        id: 1668,
        question: "gradient",
        choices: ["勾配", "速度", "圧力", "方向"],
        correctAnswer: "勾配"
     },
     { 
        id: 1669,
        question: "proffer",
        choices: ["差し出す", "拒否する", "奪う", "省く"],
        correctAnswer: "差し出す"
     },
     { 
        id: 1670,
        question: "stutter",
        choices: ["口ごもる", "流暢に話す", "怒鳴る", "歌う"],
        correctAnswer: "口ごもる"
     },
     { 
        id: 1671,
        question: "lore",
        choices: ["伝承", "法律", "科学", "戦術"],
        correctAnswer: "伝承"
     },
     { 
        id: 1672,
        question: "as a whole",
        choices: ["全体の", "部分的な", "細かい", "断片的な"],
        correctAnswer: "全体の"
     },
     { 
        id: 1673,
        question: "culmination",
        choices: ["絶頂", "衰退", "開始", "中断"],
        correctAnswer: "絶頂"
     },
     { 
        id: 1674,
        question: "attrition",
        choices: ["消耗", "蓄積", "保存", "向上"],
        correctAnswer: "消耗"
     },
     { 
        id: 1675,
        question: "cross over",
        choices: ["越えて渡る", "戻る", "停止する", "隠れる"],
        correctAnswer: "越えて渡る"
     },
     { 
        id: 1676,
        question: "disparity",
        choices: ["相違", "一致", "類似", "調整"],
        correctAnswer: "相違"
     },
     { 
        id: 1677,
        question: "combustion",
        choices: ["燃焼", "冷却", "消滅", "分解"],
        correctAnswer: "燃焼"
     },
     { 
        id: 1678,
        question: "permeate",
        choices: ["浸透する", "跳ね返る", "固定する", "蒸発する"],
        correctAnswer: "浸透する"
     },
     { 
        id: 1679,
        question: "sob",
        choices: ["すすり泣く", "笑う", "怒る", "叫ぶ"],
        correctAnswer: "すすり泣く"
     },
     { 
        id: 1680,
        question: "glitch",
        choices: ["小さな欠陥", "大きな問題", "新発明", "修正"],
        correctAnswer: "小さな欠陥"
     },
     { 
        id: 1681,
        question: "levee",
        choices: ["堤防", "橋", "船", "水門"],
        correctAnswer: "堤防"
     },
     { 
        id: 1682,
        question: "sanctity",
        choices: ["尊厳", "軽蔑", "憤怒", "敵意"],
        correctAnswer: "尊厳"
     },
     { 
        id: 1683,
        question: "wreak",
        choices: ["浴びせる", "拒否する", "避ける", "拭う"],
        correctAnswer: "浴びせる"
     },
     { 
        id: 1684,
        question: "wilt",
        choices: ["しおれる", "育つ", "増強する", "成長する"],
        correctAnswer: "しおれる"
     },
     { 
        id: 1685,
        question: "paralysis",
        choices: ["麻痺", "活性化", "加速", "増加"],
        correctAnswer: "麻痺"
     },
     { 
        id: 1686,
        question: "pass up",
        choices: ["逃す", "つかむ", "利用する", "拡張する"],
        correctAnswer: "逃す"
     },
     { 
        id: 1687,
        question: "reprimand",
        choices: ["懲戒", "賞賛", "推薦", "協力"],
        correctAnswer: "懲戒"
     },
     { 
        id: 1688,
        question: "die out",
        choices: ["廃れる", "広まる", "生まれる", "発展する"],
        correctAnswer: "廃れる"
     },
     { 
        id: 1689,
        question: "rapport",
        choices: ["信頼関係", "誤解", "対立", "無関心"],
        correctAnswer: "信頼関係"
     },
     { 
        id: 1690,
        question: "plywood",
        choices: ["合板", "金属板", "石板", "陶器"],
        correctAnswer: "合板"
     },
     { 
        id: 1691,
        question: "apprehension",
        choices: ["不安", "希望", "安心", "期待"],
        correctAnswer: "不安"
     },
     { 
        id: 1692,
        question: "raider",
        choices: ["急襲者", "防衛者", "支援者", "観察者"],
        correctAnswer: "急襲者"
     },
     { 
        id: 1693,
        question: "nook",
        choices: ["隅", "中央", "入口", "広場"],
        correctAnswer: "隅"
     },
     { 
        id: 1694,
        question: "genus",
        choices: ["属", "種", "群", "科"],
        correctAnswer: "属"
     },
     { 
        id: 1695,
        question: "secession",
        choices: ["離脱", "結合", "統一", "承認"],
        correctAnswer: "離脱"
     },
     { 
        id: 1696,
        question: "peter",
        choices: ["細くなる", "広がる", "太くなる", "増加する"],
        correctAnswer: "細くなる"
     },
     { 
        id: 1697,
        question: "relive",
        choices: ["追体験する", "忘れる", "拒否する", "変更する"],
        correctAnswer: "追体験する"
     },
     { 
        id: 1698,
        question: "stand out",
        choices: ["目立つ", "隠れる", "縮小する", "消える"],
        correctAnswer: "目立つ"
     },
     { 
        id: 1699,
        question: "help out",
        choices: ["手伝う", "無視する", "対立する", "混乱させる"],
        correctAnswer: "手伝う"
     },
     { 
        id: 1700,
        question: "scurry",
        choices: ["せかせか動く", "のんびりする", "停止する", "後退する"],
        correctAnswer: "せかせか動く"
     },
     { 
        id: 1701,
        question: "reverence",
        choices: ["敬意", "軽蔑", "反感", "無関心"],
        correctAnswer: "敬意"
     },
     { 
        id: 1702,
        question: "shortfall",
        choices: ["不足", "余剰", "完全", "満足"],
        correctAnswer: "不足"
     },
     { 
        id: 1703,
        question: "ex-husband",
        choices: ["元夫", "現在の夫", "友人", "叔父"],
        correctAnswer: "元夫"
     },
     { 
        id: 1704,
        question: "pull down",
        choices: ["取り壊す", "建設する", "修理する", "強化する"],
        correctAnswer: "取り壊す"
     },
     { 
        id: 1705,
        question: "preoccupation",
        choices: ["没頭", "分散", "気晴らし", "不注意"],
        correctAnswer: "没頭"
     },
     { 
        id: 1706,
        question: "luster",
        choices: ["光沢", "粗さ", "影", "暗闇"],
        correctAnswer: "光沢"
     },
     { 
        id: 1707,
        question: "notation",
        choices: ["表記", "暗号", "翻訳", "記憶"],
        correctAnswer: "表記"
     },
     { 
        id: 1708,
        question: "patronage",
        choices: ["後援", "批判", "中傷", "拒絶"],
        correctAnswer: "後援"
     },
     { 
        id: 1709,
        question: "mess up",
        choices: ["台無しにする", "成功させる", "整理する", "修正する"],
        correctAnswer: "台無しにする"
     },
     { 
        id: 1710,
        question: "penetration",
        choices: ["貫通", "回避", "転換", "停止"],
        correctAnswer: "貫通"
     },
     { 
        id: 1711,
        question: "proprietor",
        choices: ["所有者", "借主", "訪問者", "代理人"],
        correctAnswer: "所有者"
     },
     { 
        id: 1712,
        question: "come through",
        choices: ["を通り抜ける", "止まる", "取り消す", "反対する"],
        correctAnswer: "を通り抜ける"
     },
     { 
        id: 1713,
        question: "sinus",
        choices: ["湾曲", "直線", "平坦", "滑らか"],
        correctAnswer: "湾曲"
     },
     { 
        id: 1714,
        question: "clamor",
        choices: ["喧噪", "静寂", "沈黙", "安定"],
        correctAnswer: "喧噪"
     },
     { 
        id: 1715,
        question: "acronym",
        choices: ["頭字語", "略語", "外来語", "隠語"],
        correctAnswer: "頭字語"
     },
     { 
        id: 1716,
        question: "resonant",
        choices: ["共鳴する", "反発する", "無関係な", "鈍感な"],
        correctAnswer: "共鳴する"
     },
     { 
        id: 1717,
        question: "bandit",
        choices: ["盗賊", "警官", "商人", "探検家"],
        correctAnswer: "盗賊"
     },
     { 
        id: 1718,
        question: "at the moment",
        choices: ["今のところ", "過去", "未来", "無期限"],
        correctAnswer: "今のところ"
     },
     { 
        id: 1719,
        question: "discontent",
        choices: ["不満", "満足", "幸福", "興奮"],
        correctAnswer: "不満"
     },
     { 
        id: 1720,
        question: "unearth",
        choices: ["発掘する", "埋める", "隠す", "放棄する"],
        correctAnswer: "発掘する"
     },
     { 
        id: 1721,
        question: "replenish",
        choices: ["補充する", "減らす", "置き換える", "無視する"],
        correctAnswer: "補充する"
     },
     { 
        id: 1722,
        question: "skirmish",
        choices: ["小競り合い", "大戦争", "平和条約", "協議"],
        correctAnswer: "小競り合い"
     },
     { 
        id: 1723,
        question: "gust",
        choices: ["突風", "穏やかな風", "霧", "嵐"],
        correctAnswer: "突風"
     },
     { 
        id: 1724,
        question: "wisdom tooth",
        choices: ["親知らず", "乳歯", "犬歯", "前歯"],
        correctAnswer: "親知らず"
     },
     { 
        id: 1725,
        question: "as yet",
        choices: ["今のところ", "いつか", "すでに", "直後"],
        correctAnswer: "今のところ"
     },
     { 
        id: 1726,
        question: "primate",
        choices: ["霊長類", "爬虫類", "昆虫", "魚類"],
        correctAnswer: "霊長類"
     },
     { 
        id: 1727,
        question: "handcuff",
        choices: ["手錠", "鎖", "縄", "ロープ"],
        correctAnswer: "手錠"
     },
     { 
        id: 1728,
        question: "hoof",
        choices: ["蹄", "牙", "羽", "角"],
        correctAnswer: "蹄"
     },
     { 
        id: 1729,
        question: "revel",
        choices: ["楽しむ", "嫌がる", "困惑する", "無視する"],
        correctAnswer: "楽しむ"
     },
     { 
        id: 1730,
        question: "out of nowhere",
        choices: ["いきなり", "徐々に", "計画的に", "予想通り"],
        correctAnswer: "いきなり"
     },
     { 
        id: 1731,
        question: "citation",
        choices: ["引用", "略語", "造語", "筆記"],
        correctAnswer: "引用"
     },
     { 
        id: 1732,
        question: "complexion",
        choices: ["顔色", "目の色", "髪の色", "身長"],
        correctAnswer: "顔色"
     },
     { 
        id: 1733,
        question: "tout",
        choices: ["うるさく勧誘する", "無関心でいる", "断る", "疑う"],
        correctAnswer: "うるさく勧誘する"
     },
     { 
        id: 1734,
        question: "fiat",
        choices: ["命令", "提案", "疑問", "批判"],
        correctAnswer: "命令"
     },
     { 
        id: 1735,
        question: "quell",
        choices: ["鎮める", "強める", "無視する", "促進する"],
        correctAnswer: "鎮める"
     },
     { 
        id: 1736,
        question: "envoy",
        choices: ["使者", "裏切者", "旅人", "盗賊"],
        correctAnswer: "使者"
     },
     { 
        id: 1737,
        question: "fodder",
        choices: ["飼料", "水", "空気", "土"],
        correctAnswer: "飼料"
     },
     { 
        id: 1738,
        question: "comptroller",
        choices: ["会計監査官", "医者", "教師", "弁護士"],
        correctAnswer: "会計監査官"
     },
     { 
        id: 1739,
        question: "speaking of which",
        choices: ["と言えば", "にも関わらず", "それにもかかわらず", "逆に"],
        correctAnswer: "と言えば"
     },
     { 
        id: 1740,
        question: "excise",
        choices: ["物品税", "免税", "軽減税", "増税"],
        correctAnswer: "物品税"
     },
     { 
        id: 1741,
        question: "bank account",
        choices: ["銀行口座", "暗証番号", "クレジットカード", "ローン"],
        correctAnswer: "銀行口座"
     },
     { 
        id: 1742,
        question: "punctuate",
        choices: ["句読点をつける", "誤字を直す", "翻訳する", "省略する"],
        correctAnswer: "句読点をつける"
     },
     { 
        id: 1743,
        question: "continuum",
        choices: ["連続体", "中断", "停止", "空白"],
        correctAnswer: "連続体"
     },
     { 
        id: 1744,
        question: "hand out",
        choices: ["配布する", "回収する", "拒否する", "隠す"],
        correctAnswer: "配布する"
     },
     { 
        id: 1745,
        question: "diaper",
        choices: ["おむつ", "ガーゼ", "靴下", "帽子"],
        correctAnswer: "おむつ"
     },
     { 
        id: 1746,
        question: "wear off",
        choices: ["擦り切れる", "強くなる", "増える", "厚くなる"],
        correctAnswer: "擦り切れる"
     },
     { 
        id: 1747,
        question: "ferment",
        choices: ["発酵体", "燃焼体", "消化物", "化学物質"],
        correctAnswer: "発酵体"
     },
     { 
        id: 1748,
        question: "pleading",
        choices: ["嘆願", "拒絶", "批判", "決定"],
        correctAnswer: "嘆願"
     },
     { 
        id: 1749,
        question: "scum",
        choices: ["薄皮", "厚皮", "硬い皮", "光沢"],
        correctAnswer: "薄皮"
     },
     { 
        id: 1750,
        question: "puncture",
        choices: ["穴を空ける", "磨く", "増やす", "膨らませる"],
        correctAnswer: "穴を空ける"
     },
     { 
        id: 1751,
        question: "fledgling",
        choices: ["駆け出し", "熟練者", "賢者", "伝説"],
        correctAnswer: "駆け出し"
     },
     { 
        id: 1752,
        question: "patriarch",
        choices: ["家長", "子供", "使用人", "部下"],
        correctAnswer: "家長"
     },
     { 
        id: 1753,
        question: "public official",
        choices: ["公務員", "事業家", "兵士", "聖職者"],
        correctAnswer: "公務員"
     },
     { 
        id: 1754,
        question: "mower",
        choices: ["芝刈り機", "車", "掃除機", "送風機"],
        correctAnswer: "芝刈り機"
     },
     { 
        id: 1755,
        question: "compare A to B",
        choices: ["AをBと比べる", "AをBから削除する", "AをBに混ぜる", "AをBに売る"],
        correctAnswer: "AをBと比べる"
     },
     { 
        id: 1756,
        question: "iteration",
        choices: ["反復", "省略", "停止", "逆転"],
        correctAnswer: "反復"
     },
     { 
        id: 1757,
        question: "paraphrase",
        choices: ["言い換え", "翻訳", "削除", "発音"],
        correctAnswer: "言い換え"
     },
     { 
        id: 1758,
        question: "revulsion",
        choices: ["嫌悪", "憧れ", "尊敬", "親しみ"],
        correctAnswer: "嫌悪"
     },
     { 
        id: 1759,
        question: "beacon",
        choices: ["のろし", "暗号", "箱", "鍵"],
        correctAnswer: "のろし"
     },
     { 
        id: 1760,
        question: "rectangle",
        choices: ["長方形", "三角形", "円形", "六角形"],
        correctAnswer: "長方形"
     },
     { 
        id: 1761,
        question: "tarnish",
        choices: ["曇らせる", "磨く", "強化する", "分解する"],
        correctAnswer: "曇らせる"
     },
     { 
        id: 1762,
        question: "defiance",
        choices: ["反抗", "服従", "同意", "援助"],
        correctAnswer: "反抗"
     },
     { 
        id: 1763,
        question: "blister",
        choices: ["水膨れ", "打撲", "骨折", "火傷"],
        correctAnswer: "水膨れ"
     },
     { 
        id: 1764,
        question: "chuckle",
        choices: ["含み笑い", "大爆笑", "ため息", "怒鳴り声"],
        correctAnswer: "含み笑い"
     },
     { 
        id: 1765,
        question: "conflagration",
        choices: ["大火災", "小火", "花火", "煙"],
        correctAnswer: "大火災"
     },
     { 
        id: 1766,
        question: "sham",
        choices: ["見せかけ", "現実", "本物", "完全"],
        correctAnswer: "見せかけ"
     },
     { 
        id: 1767,
        question: "glimmer",
        choices: ["かすかな光", "強い光", "暗闇", "炎"],
        correctAnswer: "かすかな光"
     },
     { 
        id: 1768,
        question: "onslaught",
        choices: ["猛攻撃", "撤退", "防衛", "交渉"],
        correctAnswer: "猛攻撃"
     },
     { 
        id: 1769,
        question: "back up",
        choices: ["後援する", "攻撃する", "忘れる", "削除する"],
        correctAnswer: "後援する"
     },
     { 
        id: 1770,
        question: "arson",
        choices: ["放火", "強盗", "詐欺", "誘拐"],
        correctAnswer: "放火"
     },
     { 
        id: 1771,
        question: "euphemism",
        choices: ["婉曲表現", "直訳", "悪口", "略語"],
        correctAnswer: "婉曲表現"
     },
     { 
        id: 1772,
        question: "overdose",
        choices: ["過剰摂取", "絶食", "普通の量", "少量摂取"],
        correctAnswer: "過剰摂取"
     },
     { 
        id: 1773,
        question: "yawn",
        choices: ["欠伸をする", "泣く", "叫ぶ", "笑う"],
        correctAnswer: "欠伸をする"
     },
     { 
        id: 1774,
        question: "altruism",
        choices: ["利他主義", "利己主義", "競争主義", "独占主義"],
        correctAnswer: "利他主義"
     },
     { 
        id: 1775,
        question: "enclave",
        choices: ["飛び地", "首都", "村", "島"],
        correctAnswer: "飛び地"
     },
     { 
        id: 1776,
        question: "buckle down",
        choices: ["精を出す", "サボる", "文句を言う", "寝る"],
        correctAnswer: "精を出す"
     },
     { 
        id: 1777,
        question: "endemic",
        choices: ["風土病", "伝染病", "治療法", "免疫"],
        correctAnswer: "風土病"
     },
     { 
        id: 1778,
        question: "sit by",
        choices: ["傍観する", "参加する", "拒絶する", "干渉する"],
        correctAnswer: "傍観する"
     },
     { 
        id: 1779,
        question: "integrate A into B",
        choices: ["AをBに統合する", "AをBに分解する", "AをBから削除する", "AをBと比較する"],
        correctAnswer: "AをBに統合する"
     },
     { 
        id: 1780,
        question: "splice",
        choices: ["組み継ぎする", "切り離す", "破壊する", "分裂する"],
        correctAnswer: "組み継ぎする"
     },
     { 
        id: 1781,
        question: "emblem",
        choices: ["象徴", "風景", "記号", "契約"],
        correctAnswer: "象徴"
     },
     { 
        id: 1782,
        question: "farce",
        choices: ["茶番", "悲劇", "叙事詩", "寓話"],
        correctAnswer: "茶番"
     },
     { 
        id: 1783,
        question: "foray",
        choices: ["不意打ち", "防御", "撤退", "報復"],
        correctAnswer: "不意打ち"
     },
     { 
        id: 1784,
        question: "bundle",
        choices: ["束", "箱", "皿", "袋"],
        correctAnswer: "束"
     },
     { 
        id: 1785,
        question: "compliment",
        choices: ["褒め言葉", "侮辱", "嘲笑", "批判"],
        correctAnswer: "褒め言葉"
     },
     { 
        id: 1786,
        question: "finesse",
        choices: ["巧妙な処理", "乱暴な対処", "直感", "鈍感"],
        correctAnswer: "巧妙な処理"
     },
     { 
        id: 1787,
        question: "fume",
        choices: ["臭い煙", "清涼な空気", "水蒸気", "霧"],
        correctAnswer: "臭い煙"
     },
     { 
        id: 1788,
        question: "squander",
        choices: ["浪費する", "節約する", "蓄える", "収集する"],
        correctAnswer: "浪費する"
     },
     { 
        id: 1789,
        question: "tame",
        choices: ["飼い慣らされた", "野生の", "暴力的な", "凶暴な"],
        correctAnswer: "飼い慣らされた"
     },
     { 
        id: 1790,
        question: "absurdity",
        choices: ["不条理", "合理性", "論理的", "明確性"],
        correctAnswer: "不条理"
     },
     { 
        id: 1791,
        question: "break through",
        choices: ["突破する", "崩壊する", "後退する", "撤退する"],
        correctAnswer: "突破する"
     },
     { 
        id: 1792,
        question: "smite",
        choices: ["強打する", "撫でる", "擦る", "支える"],
        correctAnswer: "強打する"
     },
     { 
        id: 1793,
        question: "lobe",
        choices: ["耳たぶ", "鼻", "目", "髪"],
        correctAnswer: "耳たぶ"
     },
     { 
        id: 1794,
        question: "scribble",
        choices: ["落書きする", "清書する", "編集する", "削除する"],
        correctAnswer: "落書きする"
     },
     { 
        id: 1795,
        question: "banter",
        choices: ["冗談", "説教", "批判", "怒号"],
        correctAnswer: "冗談"
     },
     { 
        id: 1796,
        question: "tangle",
        choices: ["もつれさせる", "整理する", "伸ばす", "巻く"],
        correctAnswer: "もつれさせる"
     },
     { 
        id: 1797,
        question: "asylum",
        choices: ["亡命", "帰国", "服役", "入院"],
        correctAnswer: "亡命"
     },
     { 
        id: 1798,
        question: "transmit A to B",
        choices: ["AをBに伝染させる", "AをBに郵送する", "AをBに見せる", "AをBに保管する"],
        correctAnswer: "AをBに伝染させる"
     },
     { 
        id: 1799,
        question: "grudge",
        choices: ["恨み", "感謝", "信頼", "愛情"],
        correctAnswer: "恨み"
     },
     { 
        id: 1800,
        question: "slick",
        choices: ["滑らかな", "粗い", "ざらざらした", "硬い"],
        correctAnswer: "滑らかな"
     },
     { 
        id: 1801,
        question: "herald",
        choices: ["使者", "敵", "労働者", "犯罪者"],
        correctAnswer: "使者"
     },
     { 
        id: 1802,
        question: "revile",
        choices: ["悪口を言う", "称賛する", "支援する", "賞賛する"],
        correctAnswer: "悪口を言う"
     },
     { 
        id: 1803,
        question: "ambush",
        choices: ["待ち伏せ", "護衛", "見送り", "避難"],
        correctAnswer: "待ち伏せ"
     },
     { 
        id: 1804,
        question: "parity",
        choices: ["同等", "不均衡", "格差", "支配"],
        correctAnswer: "同等"
     },
     { 
        id: 1805,
        question: "strew",
        choices: ["ばらまく", "回収する", "隠す", "遮断する"],
        correctAnswer: "ばらまく"
     },
     { 
        id: 1806,
        question: "replace A with B",
        choices: ["AをBに置き換える", "AをBに付け足す", "AをBに変更する", "AをBから削除する"],
        correctAnswer: "AをBに置き換える"
     },
     { 
        id: 1807,
        question: "bastion",
        choices: ["要塞", "庭園", "学校", "家"],
        correctAnswer: "要塞"
     },
     { 
        id: 1808,
        question: "deal in",
        choices: ["取り扱う", "隠す", "破棄する", "封印する"],
        correctAnswer: "取り扱う"
     },
     { 
        id: 1809,
        question: "complicity",
        choices: ["共犯", "無関係", "通報", "嫌疑"],
        correctAnswer: "共犯"
     },
     { 
        id: 1810,
        question: "renounce",
        choices: ["放棄する", "取得する", "達成する", "利用する"],
        correctAnswer: "放棄する"
     },
     { 
        id: 1811,
        question: "extradition",
        choices: ["引き渡し", "拘束", "禁止", "排除"],
        correctAnswer: "引き渡し"
     },
     { 
        id: 1812,
        question: "brawl",
        choices: ["乱闘", "談話", "合意", "平和"],
        correctAnswer: "乱闘"
     },
     { 
        id: 1813,
        question: "clientele",
        choices: ["依頼人", "商売敵", "従業員", "監督者"],
        correctAnswer: "依頼人"
     },
     { 
        id: 1814,
        question: "reinstate",
        choices: ["復帰させる", "解雇する", "削除する", "延期する"],
        correctAnswer: "復帰させる"
     },
     { 
        id: 1815,
        question: "grant A to B",
        choices: ["BにAを供与する", "AをBに奪う", "BをAに隠す", "AをBに返品する"],
        correctAnswer: "BにAを供与する"
     },
     { 
        id: 1816,
        question: "live up to",
        choices: ["に従って動く", "に反抗する", "を拒否する", "を軽視する"],
        correctAnswer: "に従って動く"
     },
     { 
        id: 1817,
        question: "ascent",
        choices: ["上昇", "下降", "停滞", "横移動"],
        correctAnswer: "上昇"
     },
     { 
        id: 1818,
        question: "gorge",
        choices: ["峡谷", "高原", "湿地", "湖"],
        correctAnswer: "峡谷"
     },
     { 
        id: 1819,
        question: "solace",
        choices: ["慰め", "苦痛", "不安", "悩み"],
        correctAnswer: "慰め"
     },
     { 
        id: 1820,
        question: "stop by",
        choices: ["立ち寄る", "通り過ぎる", "隠れる", "飛び越える"],
        correctAnswer: "立ち寄る"
     },
     { 
        id: 1821,
        question: "knack",
        choices: ["こつ", "欠点", "不注意", "誤解"],
        correctAnswer: "こつ"
     },
     { 
        id: 1822,
        question: "retribution",
        choices: ["報復", "許し", "誤解", "和解"],
        correctAnswer: "報復"
     },
     { 
        id: 1823,
        question: "sludge",
        choices: ["汚泥", "浄水", "氷河", "清流"],
        correctAnswer: "汚泥"
     },
     { 
        id: 1824,
        question: "contingency",
        choices: ["不測の事態", "確定事項", "予定", "予測可能な出来事"],
        correctAnswer: "不測の事態"
     },
     { 
        id: 1825,
        question: "registry",
        choices: ["登記", "削除", "未登録", "放棄"],
        correctAnswer: "登記"
     },
     { 
        id: 1826,
        question: "acumen",
        choices: ["洞察力", "無知", "軽率さ", "怠惰"],
        correctAnswer: "洞察力"
     },
     { 
        id: 1827,
        question: "wrangle",
        choices: ["口論する", "無視する", "賛成する", "協力する"],
        correctAnswer: "口論する"
     },
     { 
        id: 1828,
        question: "associate A with B",
        choices: ["AとBを関係づける", "AをBと対立させる", "AをBから切り離す", "AをBと比較する"],
        correctAnswer: "AとBを関係づける"
     },
     { 
        id: 1829,
        question: "anarchy",
        choices: ["無秩序", "統制", "平穏", "厳格なルール"],
        correctAnswer: "無秩序"
     },
     { 
        id: 1830,
        question: "labyrinth",
        choices: ["迷宮", "直線道路", "平地", "丘陵"],
        correctAnswer: "迷宮"
     },
     { 
        id: 1831,
        question: "let A go",
        choices: ["Aを解雇する", "Aを昇進させる", "Aを拘束する", "Aを採用する"],
        correctAnswer: "Aを解雇する"
     },
     { 
        id: 1832,
        question: "smother",
        choices: ["窒息させる", "活気づける", "成長させる", "解放する"],
        correctAnswer: "窒息させる"
     },
     { 
        id: 1833,
        question: "diffusion",
        choices: ["拡散", "集中", "制限", "遮断"],
        correctAnswer: "拡散"
     },
     { 
        id: 1834,
        question: "blight",
        choices: ["疫病", "健康", "繁栄", "回復"],
        correctAnswer: "疫病"
     },
     { 
        id: 1835,
        question: "foyer",
        choices: ["休憩室", "厨房", "書斎", "地下室"],
        correctAnswer: "休憩室"
     },
     { 
        id: 1836,
        question: "subversive",
        choices: ["破壊する", "補強する", "修復する", "守る"],
        correctAnswer: "破壊する"
     },
     { 
        id: 1837,
        question: "impediment",
        choices: ["障害", "助長", "加速", "解決策"],
        correctAnswer: "障害"
     },
     { 
        id: 1838,
        question: "pawn",
        choices: ["抵当", "財産", "利益", "損失"],
        correctAnswer: "抵当"
     },
     { 
        id: 1839,
        question: "payroll",
        choices: ["給与", "課税", "罰金", "融資"],
        correctAnswer: "給与"
     },
     { 
        id: 1840,
        question: "quirk",
        choices: ["変な癖", "常識", "礼儀", "規範"],
        correctAnswer: "変な癖"
     },
     { 
        id: 1841,
        question: "curfew",
        choices: ["門限", "自由時間", "集合時間", "終業時刻"],
        correctAnswer: "門限"
     },
     { 
        id: 1842,
        question: "pamper",
        choices: ["甘やかす", "鍛える", "無視する", "制限する"],
        correctAnswer: "甘やかす"
     },
     { 
        id: 1843,
        question: "stoke",
        choices: ["燃料をくべる", "冷やす", "捨てる", "湿らせる"],
        correctAnswer: "燃料をくべる"
     },
     { 
        id: 1844,
        question: "at hand",
        choices: ["手元に", "遠くに", "忘れ去られて", "手の届かない所に"],
        correctAnswer: "手元に"
     },
     { 
        id: 1845,
        question: "disintegration",
        choices: ["崩壊", "成長", "改善", "統合"],
        correctAnswer: "崩壊"
     },
     { 
        id: 1846,
        question: "impasse",
        choices: ["行き詰まり", "進展", "成功", "突破"],
        correctAnswer: "行き詰まり"
     },
     { 
        id: 1847,
        question: "rendition",
        choices: ["演出", "批判", "隠蔽", "排除"],
        correctAnswer: "演出"
     },
     { 
        id: 1848,
        question: "persecute",
        choices: ["迫害する", "擁護する", "助ける", "無視する"],
        correctAnswer: "迫害する"
     },
     { 
        id: 1849,
        question: "bounty",
        choices: ["寛大", "狭量", "貧弱", "厳格"],
        correctAnswer: "寛大"
     },
     { 
        id: 1850,
        question: "hindsight",
        choices: ["後知恵", "予測", "直感", "感覚"],
        correctAnswer: "後知恵"
     },
     { 
        id: 1851,
        question: "avatar",
        choices: ["権化", "幻影", "仮説", "幻想"],
        correctAnswer: "権化"
     },
     { 
        id: 1852,
        question: "brat",
        choices: ["小僧", "貴族", "学者", "聖人"],
        correctAnswer: "小僧"
     },
     { 
        id: 1853,
        question: "jettison",
        choices: ["放棄", "取得", "保護", "蓄積"],
        correctAnswer: "放棄"
     },
     { 
        id: 1854,
        question: "taunt",
        choices: ["罵倒する", "励ます", "褒める", "感謝する"],
        correctAnswer: "罵倒する"
     },
     { 
        id: 1855,
        question: "wiggle",
        choices: ["ぴくぴく動かす", "静止する", "固定する", "伸ばす"],
        correctAnswer: "ぴくぴく動かす"
     },
     { 
        id: 1856,
        question: "allusion",
        choices: ["暗示", "直接的発言", "命令", "宣言"],
        correctAnswer: "暗示"
     },
     { 
        id: 1857,
        question: "procurement",
        choices: ["調達", "浪費", "放棄", "拒絶"],
        correctAnswer: "調達"
     },
     { 
        id: 1858,
        question: "aberration",
        choices: ["脱線行為", "正当性", "規律", "常識"],
        correctAnswer: "脱線行為"
     },
     { 
        id: 1859,
        question: "backlash",
        choices: ["激しい反発", "支持", "称賛", "賛同"],
        correctAnswer: "激しい反発"
     },
     { 
        id: 1860,
        question: "euphoria",
        choices: ["陶酔", "落胆", "冷静", "無感動"],
        correctAnswer: "陶酔"
     },
     { 
        id: 1861,
        question: "end up",
        choices: ["最終的に～することになる", "途中で辞める", "迷う", "考え直す"],
        correctAnswer: "最終的に～することになる"
     },
     { 
        id: 1862,
        question: "eligibility",
        choices: ["適格性", "不適格", "違法性", "不確実"],
        correctAnswer: "適格性"
     },
     { 
        id: 1863,
        question: "sewage",
        choices: ["下水", "清水", "雨水", "蒸留水"],
        correctAnswer: "下水"
     },
     { 
        id: 1864,
        question: "dictum",
        choices: ["意見", "命令", "沈黙", "詩"],
        correctAnswer: "意見"
     },
     { 
        id: 1865,
        question: "manure",
        choices: ["肥料", "種", "木材", "雑草"],
        correctAnswer: "肥料"
     },
     { 
        id: 1866,
        question: "populace",
        choices: ["民衆", "貴族", "権力者", "管理者"],
        correctAnswer: "民衆"
     },
     { 
        id: 1867,
        question: "bedrock",
        choices: ["岩盤", "砂地", "粘土層", "泥沼"],
        correctAnswer: "岩盤"
     },
     { 
        id: 1868,
        question: "distance A from B",
        choices: ["AをBから遠ざける", "AをBに近づける", "AとBを統合する", "AをBと比べる"],
        correctAnswer: "AをBから遠ざける"
     },
     { 
        id: 1869,
        question: "centennial",
        choices: ["100年祭", "10年記念", "1世紀", "50年祭"],
        correctAnswer: "100年祭"
     },
     { 
        id: 1870,
        question: "stint",
        choices: ["切り詰める", "浪費する", "増やす", "広げる"],
        correctAnswer: "切り詰める"
     },
     { 
        id: 1871,
        question: "omen",
        choices: ["前兆", "結果", "原因", "終わり"],
        correctAnswer: "前兆"
     },
     { 
        id: 1872,
        question: "teem",
        choices: ["群がる", "散らばる", "消える", "減る"],
        correctAnswer: "群がる"
     },
     { 
        id: 1873,
        question: "picket",
        choices: ["くい", "旗", "石", "杭"],
        correctAnswer: "くい"
     },
     { 
        id: 1874,
        question: "acknowledgement",
        choices: ["承認", "否定", "回避", "変更"],
        correctAnswer: "承認"
     },
     { 
        id: 1875,
        question: "straddle",
        choices: ["またがる", "避ける", "越えられない", "横切る"],
        correctAnswer: "またがる"
     },
     { 
        id: 1876,
        question: "chasm",
        choices: ["裂け目", "高台", "川", "丘"],
        correctAnswer: "裂け目"
     },
     { 
        id: 1877,
        question: "complacency",
        choices: ["自己満足", "謙虚", "不満", "批判"],
        correctAnswer: "自己満足"
     },
     { 
        id: 1878,
        question: "pedigree",
        choices: ["血統", "職歴", "趣味", "教育"],
        correctAnswer: "血統"
     },
     { 
        id: 1879,
        question: "adversity",
        choices: ["逆境", "幸運", "成功", "栄光"],
        correctAnswer: "逆境"
     },
     { 
        id: 1880,
        question: "believe it or not",
        choices: ["信じられるかどうか", "確実に", "誤解なく", "必然的に"],
        correctAnswer: "信じられるかどうか"
     },
     { 
        id: 1881,
        question: "heap",
        choices: ["塊", "点", "線", "影"],
        correctAnswer: "塊"
     },
     { 
        id: 1882,
        question: "rationality",
        choices: ["合理性", "感情", "直感", "幻想"],
        correctAnswer: "合理性"
     },
     { 
        id: 1883,
        question: "at random",
        choices: ["無作為に", "順番に", "整理して", "分類して"],
        correctAnswer: "無作為に"
     },
     { 
        id: 1884,
        question: "blood vessel",
        choices: ["血管", "骨", "筋肉", "神経"],
        correctAnswer: "血管"
     },
     { 
        id: 1885,
        question: "philanthropy",
        choices: ["博愛", "自愛", "利己", "怠慢"],
        correctAnswer: "博愛"
     },
     { 
        id: 1886,
        question: "look into",
        choices: ["を調査する", "を見逃す", "を無視する", "を推測する"],
        correctAnswer: "を調査する"
     },
     { 
        id: 1887,
        question: "cynicism",
        choices: ["皮肉", "感謝", "尊敬", "信頼"],
        correctAnswer: "皮肉"
     },
     { 
        id: 1888,
        question: "mitigation",
        choices: ["緩和", "増幅", "強化", "悪化"],
        correctAnswer: "緩和"
     },
     { 
        id: 1889,
        question: "morgue",
        choices: ["遺体安置所", "病院", "墓地", "博物館"],
        correctAnswer: "遺体安置所"
     },
     { 
        id: 1890,
        question: "pod",
        choices: ["さや", "花", "木の幹", "葉"],
        correctAnswer: "さや"
     },
     { 
        id: 1891,
        question: "leave off",
        choices: ["着るのをやめる", "脱ぐ", "持ち上げる", "拾う"],
        correctAnswer: "着るのをやめる"
     },
     { 
        id: 1892,
        question: "alienation",
        choices: ["疎外", "統合", "受け入れ", "親しみ"],
        correctAnswer: "疎外"
     },
     { 
        id: 1893,
        question: "corporal",
        choices: ["伍長", "将軍", "司令官", "隊長"],
        correctAnswer: "伍長"
     },
     { 
        id: 1894,
        question: "up for",
        choices: ["に参加しようとしている", "諦める", "避ける", "忘れる"],
        correctAnswer: "に参加しようとしている"
     },
     { 
        id: 1895,
        question: "funk",
        choices: ["臆病", "勇敢", "大胆", "強気"],
        correctAnswer: "臆病"
     },
     { 
        id: 1896,
        question: "deluge",
        choices: ["大洪水", "小雨", "霧", "雪"],
        correctAnswer: "大洪水"
     },
     { 
        id: 1897,
        question: "intestine",
        choices: ["腸", "胃", "心臓", "肝臓"],
        correctAnswer: "腸"
     },
     { 
        id: 1898,
        question: "match A with B",
        choices: ["AをBと適合させる", "AをBと比較する", "AをBに反対させる", "AをBと分離する"],
        correctAnswer: "AをBと適合させる"
     },
     { 
        id: 1899,
        question: "liturgy",
        choices: ["典礼", "祈り", "読経", "説法"],
        correctAnswer: "典礼"
     },
     { 
        id: 1900,
        question: "sarcasm",
        choices: ["皮肉", "感謝", "賛美", "励まし"],
        correctAnswer: "皮肉"
     },
     { 
        id: 1901,
        question: "anthem",
        choices: ["賛歌", "詩", "物語", "論文"],
        correctAnswer: "賛歌"
     },
     { 
        id: 1902,
        question: "demolition",
        choices: ["解体", "建設", "修理", "増築"],
        correctAnswer: "解体"
     },
     { 
        id: 1903,
        question: "propagate",
        choices: ["広める", "減少させる", "隠す", "制限する"],
        correctAnswer: "広める"
     },
     { 
        id: 1904,
        question: "romp",
        choices: ["ふざけ回る", "静かに過ごす", "働く", "考える"],
        correctAnswer: "ふざけ回る"
     },
     { 
        id: 1905,
        question: "obituary",
        choices: ["死亡記事", "誕生日記事", "結婚記事", "入学記事"],
        correctAnswer: "死亡記事"
     },
     { 
        id: 1906,
        question: "adjunct",
        choices: ["付属物", "主要物", "中心", "本体"],
        correctAnswer: "付属物"
     },
     { 
        id: 1907,
        question: "crusader",
        choices: ["十字軍", "兵士", "商人", "農民"],
        correctAnswer: "十字軍"
     },
     { 
        id: 1908,
        question: "seminary",
        choices: ["神学校", "裁判所", "市役所", "博物館"],
        correctAnswer: "神学校"
     },
     { 
        id: 1909,
        question: "exaggeration",
        choices: ["誇張", "正確な表現", "簡潔な説明", "省略"],
        correctAnswer: "誇張"
     },
     { 
        id: 1910,
        question: "back out",
        choices: ["取り消す", "進む", "達成する", "追加する"],
        correctAnswer: "取り消す"
     },
     { 
        id: 1911,
        question: "impetus",
        choices: ["運動力", "停滞", "静止", "減速"],
        correctAnswer: "運動力"
     },
     { 
        id: 1912,
        question: "compilation",
        choices: ["編集", "削除", "混乱", "無視"],
        correctAnswer: "編集"
     },
     { 
        id: 1913,
        question: "semiconductor",
        choices: ["半導体", "金属", "プラスチック", "木材"],
        correctAnswer: "半導体"
     },
     { 
        id: 1914,
        question: "gut",
        choices: ["腸", "心臓", "肺", "脳"],
        correctAnswer: "腸"
     },
     { 
        id: 1915,
        question: "measles",
        choices: ["麻疹", "風邪", "インフルエンザ", "胃炎"],
        correctAnswer: "麻疹"
     },
     { 
        id: 1916,
        question: "smuggler",
        choices: ["密輸業者", "警察官", "商人", "銀行員"],
        correctAnswer: "密輸業者"
     },
     { 
        id: 1917,
        question: "miscarriage",
        choices: ["流産", "成功", "達成", "完了"],
        correctAnswer: "流産"
     },
     { 
        id: 1918,
        question: "bystander",
        choices: ["傍観者", "参加者", "指導者", "支援者"],
        correctAnswer: "傍観者"
     },
     { 
        id: 1919,
        question: "epicenter",
        choices: ["震源地", "山頂", "谷底", "平野"],
        correctAnswer: "震源地"
     },
     { 
        id: 1920,
        question: "improvisation",
        choices: ["即興", "計画", "準備", "分析"],
        correctAnswer: "即興"
     },
     { 
        id: 1921,
        question: "lineage",
        choices: ["系統", "単体", "分類", "区別"],
        correctAnswer: "系統"
     },
     { 
        id: 1922,
        question: "recourse",
        choices: ["依頼", "拒否", "自立", "支配"],
        correctAnswer: "依頼"
     },
     { 
        id: 1923,
        question: "replace A by B",
        choices: ["AをBで置き換える", "AをBに保存する", "AをBと比べる", "AをBに似せる"],
        correctAnswer: "AをBで置き換える"
     },
     { 
        id: 1924,
        question: "foreman",
        choices: ["親方", "弟子", "見習い", "従業員"],
        correctAnswer: "親方"
     },
     { 
        id: 1925,
        question: "rupture",
        choices: ["破裂", "修復", "補修", "改善"],
        correctAnswer: "破裂"
     },
     { 
        id: 1926,
        question: "spurn",
        choices: ["追い払う", "受け入れる", "支援する", "迎え入れる"],
        correctAnswer: "追い払う"
     },
     { 
        id: 1927,
        question: "hepatitis",
        choices: ["肝炎", "胃炎", "腸炎", "風邪"],
        correctAnswer: "肝炎"
     },
     { 
        id: 1928,
        question: "classify A as B",
        choices: ["AをBに分類する", "AをBと比較する", "AをBに結びつける", "AをBに保存する"],
        correctAnswer: "AをBに分類する"
     },
     { 
        id: 1929,
        question: "pun",
        choices: ["駄じゃれ", "比喩", "皮肉", "直訳"],
        correctAnswer: "駄じゃれ"
     },
     { 
        id: 1930,
        question: "as it turns out",
        choices: ["結局のところ", "計画通り", "予定変更", "決定的に"],
        correctAnswer: "結局のところ"
     },
     { 
        id: 1931,
        question: "hallucination",
        choices: ["幻覚", "現実", "夢", "空想"],
        correctAnswer: "幻覚"
     },
     { 
        id: 1932,
        question: "arithmetic",
        choices: ["算数", "幾何学", "代数", "統計"],
        correctAnswer: "算数"
     },
     { 
        id: 1933,
        question: "pitfall",
        choices: ["落とし穴", "橋", "階段", "通路"],
        correctAnswer: "落とし穴"
     },
     { 
        id: 1934,
        question: "stunt",
        choices: ["発育を妨げる", "加速させる", "伸ばす", "促進する"],
        correctAnswer: "発育を妨げる"
     },
     { 
        id: 1935,
        question: "menopause",
        choices: ["閉経", "思春期", "妊娠", "成長"],
        correctAnswer: "閉経"
     },
     { 
        id: 1936,
        question: "inhibition",
        choices: ["禁止", "許可", "促進", "解放"],
        correctAnswer: "禁止"
     },
     { 
        id: 1937,
        question: "to be honest",
        choices: ["正直に言うと", "実際には", "一般的に", "秘密に"],
        correctAnswer: "正直に言うと"
     },
     { 
        id: 1938,
        question: "litigation",
        choices: ["訴訟", "契約", "投資", "和解"],
        correctAnswer: "訴訟"
     },
     { 
        id: 1939,
        question: "hull",
        choices: ["外皮", "エンジン", "帆", "操縦室"],
        correctAnswer: "外皮"
     },
     { 
        id: 1940,
        question: "exposition",
        choices: ["展示会", "会議", "討論会", "試験"],
        correctAnswer: "展示会"
     },
     { 
        id: 1941,
        question: "euthanasia",
        choices: ["安楽死", "延命治療", "リハビリ", "手術"],
        correctAnswer: "安楽死"
     },
     { 
        id: 1942,
        question: "lunatic",
        choices: ["精神異常者", "天才", "哲学者", "医者"],
        correctAnswer: "精神異常者"
     },
     { 
        id: 1943,
        question: "obscenity",
        choices: ["わいせつ", "道徳", "礼儀", "品位"],
        correctAnswer: "わいせつ"
     },
     { 
        id: 1944,
        question: "manifesto",
        choices: ["宣言書", "手紙", "報告書", "契約書"],
        correctAnswer: "宣言書"
     },
     { 
        id: 1945,
        question: "absentee",
        choices: ["欠席者", "参加者", "指導者", "招待者"],
        correctAnswer: "欠席者"
     },
     { 
        id: 1946,
        question: "locale",
        choices: ["現場", "机", "地図", "施設"],
        correctAnswer: "現場"
     },
     { 
        id: 1947,
        question: "manslaughter",
        choices: ["過失致死", "殺人", "強盗", "詐欺"],
        correctAnswer: "過失致死"
     },
     { 
        id: 1948,
        question: "insurrection",
        choices: ["暴動", "祭り", "儀式", "競争"],
        correctAnswer: "暴動"
     },
     { 
        id: 1949,
        question: "enclosure",
        choices: ["包囲", "開放", "通路", "広場"],
        correctAnswer: "包囲"
     },
     { 
        id: 1950,
        question: "allow for",
        choices: ["を考慮に入れる", "を排除する", "を無視する", "を受け入れる"],
        correctAnswer: "を考慮に入れる"
     },
     { 
        id: 1951,
        question: "placate",
        choices: ["なだめる", "怒らせる", "煽る", "拒絶する"],
        correctAnswer: "なだめる"
     },
     { 
        id: 1952,
        question: "funnel",
        choices: ["漏斗", "ボトル", "グラス", "皿"],
        correctAnswer: "漏斗"
     },
     { 
        id: 1953,
        question: "kettle",
        choices: ["やかん", "鍋", "フライパン", "お皿"],
        correctAnswer: "やかん"
     },
     { 
        id: 1954,
        question: "pertain",
        choices: ["関係する", "分離する", "忘れる", "隠す"],
        correctAnswer: "関係する"
     },
     { 
        id: 1955,
        question: "malpractice",
        choices: ["不正行為", "誠実な行動", "適切な処理", "成功"],
        correctAnswer: "不正行為"
     },
     { 
        id: 1956,
        question: "dual citizenship",
        choices: ["二重国籍", "単一国籍", "無国籍", "仮の国籍"],
        correctAnswer: "二重国籍"
     },
     { 
        id: 1957,
        question: "outpatient",
        choices: ["外来患者", "入院患者", "看護師", "医者"],
        correctAnswer: "外来患者"
     },
     { 
        id: 1958,
        question: "secede",
        choices: ["離脱する", "参加する", "従う", "支持する"],
        correctAnswer: "離脱する"
     },
     { 
        id: 1959,
        question: "whack",
        choices: ["打つ", "持ち上げる", "投げる", "抱える"],
        correctAnswer: "打つ"
     },
     { 
        id: 1960,
        question: "calculus",
        choices: ["結石", "骨", "細胞", "血管"],
        correctAnswer: "結石"
     },
     { 
        id: 1961,
        question: "inoculation",
        choices: ["予防接種", "感染", "薬剤", "治療"],
        correctAnswer: "予防接種"
     },
     { 
        id: 1962,
        question: "chip in",
        choices: ["寄付する", "節約する", "浪費する", "借りる"],
        correctAnswer: "寄付する"
     },
     { 
        id: 1963,
        question: "piracy",
        choices: ["海賊行為", "合法貿易", "密輸", "正規販売"],
        correctAnswer: "海賊行為"
     },
     { 
        id: 1964,
        question: "truce",
        choices: ["休戦", "戦争", "攻撃", "侵略"],
        correctAnswer: "休戦"
     },
     { 
        id: 1965,
        question: "ruckus",
        choices: ["大騒ぎ", "静寂", "平和", "調和"],
        correctAnswer: "大騒ぎ"
     },
     { 
        id: 1966,
        question: "cardiovascular",
        choices: ["心血管の", "消化器の", "神経の", "筋肉の"],
        correctAnswer: "心血管の"
     },
     { 
        id: 1967,
        question: "surrogate",
        choices: ["代理人", "指導者", "敵", "協力者"],
        correctAnswer: "代理人"
     },
     { 
        id: 1968,
        question: "vial",
        choices: ["ガラス瓶", "カップ", "容器", "ボウル"],
        correctAnswer: "ガラス瓶"
     },
     { 
        id: 1969,
        question: "conglomerate",
        choices: ["密集した", "散在した", "分離した", "個別の"],
        correctAnswer: "密集した"
     },
     { 
        id: 1970,
        question: "palatable",
        choices: ["美味しい", "まずい", "苦い", "酸っぱい"],
        correctAnswer: "美味しい"
     },
     { 
        id: 1971,
        question: "get in on",
        choices: ["加わる", "逃げる", "拒否する", "忘れる"],
        correctAnswer: "加わる"
     },
     { 
        id: 1972,
        question: "tepid",
        choices: ["生ぬるい", "熱い", "冷たい", "熱烈な"],
        correctAnswer: "生ぬるい"
     },
     { 
        id: 1973,
        question: "annihilate",
        choices: ["全滅させる", "復活させる", "維持する", "増やす"],
        correctAnswer: "全滅させる"
     },
     { 
        id: 1974,
        question: "gruesome",
        choices: ["ぞっとする", "楽しい", "嬉しい", "興奮する"],
        correctAnswer: "ぞっとする"
     },
     { 
        id: 1975,
        question: "precarious",
        choices: ["不安定な", "安定した", "確実な", "安全な"],
        correctAnswer: "不安定な"
     },
     { 
        id: 1976,
        question: "cervical",
        choices: ["頸部の", "胸部の", "腹部の", "脚部の"],
        correctAnswer: "頸部の"
     },
     { 
        id: 1977,
        question: "symmetry",
        choices: ["対称", "不均衡", "歪み", "不規則"],
        correctAnswer: "対称"
     },
     { 
        id: 1978,
        question: "treasurer",
        choices: ["会計係", "社長", "秘書", "エンジニア"],
        correctAnswer: "会計係"
     },
     { 
        id: 1979,
        question: "mural",
        choices: ["壁の", "天井の", "床の", "窓の"],
        correctAnswer: "壁の"
     },
     { 
        id: 1980,
        question: "in fact",
        choices: ["実際", "仮に", "推測では", "もしも"],
        correctAnswer: "実際"
     },
     { 
        id: 1981,
        question: "consecrate",
        choices: ["奉献する", "廃棄する", "拒絶する", "非難する"],
        correctAnswer: "奉献する"
     },
     { 
        id: 1982,
        question: "bloated",
        choices: ["むくんだ", "痩せた", "引き締まった", "細い"],
        correctAnswer: "むくんだ"
     },
     { 
        id: 1983,
        question: "extradite",
        choices: ["引き渡す", "受け入れる", "保護する", "無視する"],
        correctAnswer: "引き渡す"
     },
     { 
        id: 1984,
        question: "complimentary",
        choices: ["無料の", "有料の", "高価な", "限定の"],
        correctAnswer: "無料の"
     },
     { 
        id: 1985,
        question: "corrosive",
        choices: ["腐食性の", "防腐の", "強化する", "安全な"],
        correctAnswer: "腐食性の"
     },
     { 
        id: 1986,
        question: "defiant",
        choices: ["反抗的な", "従順な", "協力的な", "友好的な"],
        correctAnswer: "反抗的な"
     },
     { 
        id: 1987,
        question: "palpable",
        choices: ["さわれる", "見えない", "透明な", "不明瞭な"],
        correctAnswer: "さわれる"
     },
     { 
        id: 1988,
        question: "muffle",
        choices: ["包む", "破る", "壊す", "外す"],
        correctAnswer: "包む"
     },
     { 
        id: 1989,
        question: "generalized",
        choices: ["一般化された", "特定の", "具体的な", "限定された"],
        correctAnswer: "一般化された"
     },
     { 
        id: 1990,
        question: "tinge",
        choices: ["色合い", "透明感", "濃淡", "模様"],
        correctAnswer: "色合い"
     },
     { 
        id: 1991,
        question: "glisten",
        choices: ["輝く", "曇る", "隠れる", "消える"],
        correctAnswer: "輝く"
     },
     { 
        id: 1992,
        question: "exacting",
        choices: ["厳しい", "優しい", "穏やか", "緩やか"],
        correctAnswer: "厳しい"
     },
     { 
        id: 1993,
        question: "hang on",
        choices: ["しがみつく", "離れる", "逃げる", "忘れる"],
        correctAnswer: "しがみつく"
     },
     { 
        id: 1994,
        question: "flagrant",
        choices: ["極悪非道の", "慈悲深い", "優しい", "平凡な"],
        correctAnswer: "極悪非道の"
     },
     { 
        id: 1995,
        question: "nuptial",
        choices: ["婚礼の", "葬儀の", "宗教の", "戦争の"],
        correctAnswer: "婚礼の"
     },
     { 
        id: 1996,
        question: "best for",
        choices: ["～にとって最良の", "最悪の", "無関係な", "問題のある"],
        correctAnswer: "～にとって最良の"
     },
     { 
        id: 1997,
        question: "predatory",
        choices: ["肉食の", "草食の", "雑食の", "無害な"],
        correctAnswer: "肉食の"
     },
     { 
        id: 1998,
        question: "impaired",
        choices: ["障害のある", "完全な", "健全な", "回復した"],
        correctAnswer: "障害のある"
     },
     { 
        id: 1999,
        question: "obnoxious",
        choices: ["不愉快な", "魅力的な", "親切な", "愛らしい"],
        correctAnswer: "不愉快な"
     },
     { 
        id: 2000,
        question: "stalwart",
        choices: ["堅固な", "もろい", "柔軟な", "弱い"],
        correctAnswer: "堅固な"
     },
     { 
        id: 2001,
        question: "lock up",
        choices: ["刑務所", "学校", "病院", "図書館"],
        correctAnswer: "刑務所"
     },
     { 
        id: 2002,
        question: "stately",
        choices: ["風格のある", "軽薄な", "控えめな", "地味な"],
        correctAnswer: "風格のある"
     },
     { 
        id: 2003,
        question: "shoddy",
        choices: ["見掛け倒しの", "本物の", "上質の", "堅固な"],
        correctAnswer: "見掛け倒しの"
     },
     { 
        id: 2004,
        question: "radiant",
        choices: ["輝く", "くすんだ", "暗い", "影のある"],
        correctAnswer: "輝く"
     },
     { 
        id: 2005,
        question: "glint",
        choices: ["きらめく", "濁る", "ぼやける", "暗くなる"],
        correctAnswer: "きらめく"
     },
     { 
        id: 2006,
        question: "infrared",
        choices: ["赤外線の", "紫外線の", "可視光の", "電波の"],
        correctAnswer: "赤外線の"
     },
     { 
        id: 2007,
        question: "requisite",
        choices: ["必要な", "不要な", "余計な", "無関係な"],
        correctAnswer: "必要な"
     },
     { 
        id: 2008,
        question: "toxic to",
        choices: ["～に有毒な", "無害な", "健康的な", "栄養のある"],
        correctAnswer: "～に有毒な"
     },
     { 
        id: 2009,
        question: "autistic",
        choices: ["自閉症の", "健常な", "元気な", "活発な"],
        correctAnswer: "自閉症の"
     },
     { 
        id: 2010,
        question: "flit",
        choices: ["すいすい飛ぶ", "落ちる", "止まる", "消える"],
        correctAnswer: "すいすい飛ぶ"
     },
     { 
        id: 2011,
        question: "gregarious",
        choices: ["群生した", "孤立した", "個体の", "単独の"],
        correctAnswer: "群生した"
     },
     { 
        id: 2012,
        question: "in advance",
        choices: ["前もって", "直後に", "突然", "遅れて"],
        correctAnswer: "前もって"
     },
     { 
        id: 2013,
        question: "majestic",
        choices: ["雄大な", "小さな", "狭い", "地味な"],
        correctAnswer: "雄大な"
     },
     { 
        id: 2014,
        question: "exuberant",
        choices: ["あふれんばかりの", "沈んだ", "無関心な", "冷静な"],
        correctAnswer: "あふれんばかりの"
     },
     { 
        id: 2015,
        question: "elucidate",
        choices: ["解明する", "隠す", "誤解する", "歪める"],
        correctAnswer: "解明する"
     },
     { 
        id: 2016,
        question: "waiver",
        choices: ["免除", "契約", "義務", "約束"],
        correctAnswer: "免除"
     },
     { 
        id: 2017,
        question: "ailing",
        choices: ["病んでいる", "健康な", "強い", "活発な"],
        correctAnswer: "病んでいる"
     },
     { 
        id: 2018,
        question: "perverse",
        choices: ["ひねくれた", "素直な", "純粋な", "真面目な"],
        correctAnswer: "ひねくれた"
     },
     { 
        id: 2019,
        question: "vogue",
        choices: ["流行", "廃れたもの", "伝統", "古風"],
        correctAnswer: "流行"
     },
     { 
        id: 2020,
        question: "venom",
        choices: ["毒", "薬", "栄養", "水"],
        correctAnswer: "毒"
     },
     { 
        id: 2021,
        question: "ethereal",
        choices: ["空気の様に軽やかな", "重厚な", "固い", "鈍重な"],
        correctAnswer: "空気の様に軽やかな"
     },
     { 
        id: 2022,
        question: "interpretive",
        choices: ["解釈の", "創造の", "決定の", "記録の"],
        correctAnswer: "解釈の"
     },
     { 
        id: 2023,
        question: "let out",
        choices: ["外に出す", "閉じ込める", "隠す", "しまう"],
        correctAnswer: "外に出す"
     },
     { 
        id: 2024,
        question: "ultimatum",
        choices: ["最終通告", "提案", "要望", "お願い"],
        correctAnswer: "最終通告"
     },
     { 
        id: 2025,
        question: "cardiac",
        choices: ["心臓の", "脳の", "胃の", "肝臓の"],
        correctAnswer: "心臓の"
     },
     { 
        id: 2026,
        question: "zest",
        choices: ["熱意", "無関心", "冷静", "退屈"],
        correctAnswer: "熱意"
     },
     { 
        id: 2027,
        question: "posh",
        choices: ["豪華な", "安っぽい", "普通の", "粗末な"],
        correctAnswer: "豪華な"
     },
     { 
        id: 2028,
        question: "appellate",
        choices: ["上訴の", "判決の", "刑罰の", "裁定の"],
        correctAnswer: "上訴の"
     },
     { 
        id: 2029,
        question: "conflict with",
        choices: ["と相容れない", "調和する", "一致する", "適合する"],
        correctAnswer: "と相容れない"
     },
     { 
        id: 2030,
        question: "boldly",
        choices: ["大胆に", "慎重に", "臆病に", "消極的に"],
        correctAnswer: "大胆に"
     },
     { 
        id: 2031,
        question: "for once",
        choices: ["今回だけ", "毎回", "繰り返し", "いつも"],
        correctAnswer: "今回だけ"
     },
     { 
        id: 2032,
        question: "atone",
        choices: ["償う", "奪う", "許す", "拒む"],
        correctAnswer: "償う"
     },
     { 
        id: 2033,
        question: "obese",
        choices: ["肥満体の", "痩せた", "細身の", "普通の"],
        correctAnswer: "肥満体の"
     },
     { 
        id: 2034,
        question: "fluctuate",
        choices: ["変動する", "安定する", "固まる", "固定する"],
        correctAnswer: "変動する"
     },
     { 
        id: 2035,
        question: "defunct",
        choices: ["消滅した", "存続する", "活動的な", "運営中の"],
        correctAnswer: "消滅した"
     },
     { 
        id: 2036,
        question: "incarcerate",
        choices: ["投獄する", "釈放する", "解放する", "救出する"],
        correctAnswer: "投獄する"
     },
     { 
        id: 2037,
        question: "lax",
        choices: ["手ぬるい", "厳格な", "正確な", "厳しい"],
        correctAnswer: "手ぬるい"
     },
     { 
        id: 2038,
        question: "grueling",
        choices: ["厳しい", "楽な", "簡単な", "優しい"],
        correctAnswer: "厳しい"
     },
     { 
        id: 2039,
        question: "supple",
        choices: ["柔軟な", "硬直した", "固い", "頑固な"],
        correctAnswer: "柔軟な"
     },
     { 
        id: 2040,
        question: "fall out of favor with",
        choices: ["に嫌われる", "に好かれる", "に認められる", "に評価される"],
        correctAnswer: "に嫌われる"
     },
     { 
        id: 2041,
        question: "idiosyncratic",
        choices: ["特異な", "普通の", "一般的な", "平均的な"],
        correctAnswer: "特異な"
     },
     { 
        id: 2042,
        question: "perceptual",
        choices: ["知覚の", "論理の", "計算の", "推測の"],
        correctAnswer: "知覚の"
     },
     { 
        id: 2043,
        question: "sparse",
        choices: ["希薄な", "密集した", "濃厚な", "豊富な"],
        correctAnswer: "希薄な"
     },
     { 
        id: 2044,
        question: "sectarian",
        choices: ["宗派の", "非宗教の", "一般的な", "政治的な"],
        correctAnswer: "宗派の"
     },
     { 
        id: 2045,
        question: "categorize A as B",
        choices: ["AをBとして分類する", "AをBから除外する", "AをBに適用する", "AをBに変更する"],
        correctAnswer: "AをBとして分類する"
     },
     { 
        id: 2046,
        question: "tenuous",
        choices: ["薄い", "厚い", "濃い", "強い"],
        correctAnswer: "薄い"
     },
     { 
        id: 2047,
        question: "stalemate",
        choices: ["行き詰まり", "進展", "成功", "成長"],
        correctAnswer: "行き詰まり"
     },
     { 
        id: 2048,
        question: "whereabouts",
        choices: ["どの辺りに", "なぜ", "どうやって", "いつ"],
        correctAnswer: "どの辺りに"
     },
     { 
        id: 2049,
        question: "antagonize",
        choices: ["敵に回す", "味方にする", "協力する", "和解する"],
        correctAnswer: "敵に回す"
     },
     { 
        id: 2050,
        question: "gobble",
        choices: ["がつがつ食べる", "ゆっくり食べる", "少しずつ食べる", "味わう"],
        correctAnswer: "がつがつ食べる"
     },
     { 
        id: 2051,
        question: "belligerent",
        choices: ["好戦的な", "平和的な", "消極的な", "温和な"],
        correctAnswer: "好戦的な"
     },
     { 
        id: 2052,
        question: "lubricate",
        choices: ["潤滑させる", "乾燥させる", "こすり取る", "凍らせる"],
        correctAnswer: "潤滑させる"
     },
     { 
        id: 2053,
        question: "vigilant",
        choices: ["警戒した", "油断した", "無防備な", "無関心な"],
        correctAnswer: "警戒した"
     },
     { 
        id: 2054,
        question: "distraught",
        choices: ["取り乱した", "冷静な", "落ち着いた", "安定した"],
        correctAnswer: "取り乱した"
     },
     { 
        id: 2055,
        question: "exorcise",
        choices: ["厄払いする", "呪う", "避ける", "隠す"],
        correctAnswer: "厄払いする"
     },
     { 
        id: 2056,
        question: "synonymous",
        choices: ["同義の", "反対の", "類似の", "無関係の"],
        correctAnswer: "同義の"
     },
     { 
        id: 2057,
        question: "sporadic",
        choices: ["散発的な", "連続的な", "継続的な", "規則的な"],
        correctAnswer: "散発的な"
     },
     { 
        id: 2058,
        question: "bode",
        choices: ["予言する", "記録する", "忘れる", "伝える"],
        correctAnswer: "予言する"
     },
     { 
        id: 2059,
        question: "zinc",
        choices: ["亜鉛", "鉄", "銅", "鉛"],
        correctAnswer: "亜鉛"
     },
     { 
        id: 2060,
        question: "dogged",
        choices: ["頑固な", "柔軟な", "適応力のある", "優しい"],
        correctAnswer: "頑固な"
     },
     { 
        id: 2061,
        question: "inept",
        choices: ["不適当な", "適切な", "適合する", "有能な"],
        correctAnswer: "不適当な"
     },
     { 
        id: 2062,
        question: "ventilation",
        choices: ["換気", "冷却", "圧縮", "閉鎖"],
        correctAnswer: "換気"
     },
     { 
        id: 2063,
        question: "on balance",
        choices: ["考慮すると", "対立して", "公平に", "不利に"],
        correctAnswer: "考慮すると"
     },
     { 
        id: 2064,
        question: "taut",
        choices: ["ぴんと張ってある", "たるんでいる", "緩んでいる", "曲がっている"],
        correctAnswer: "ぴんと張ってある"
     },
     { 
        id: 2065,
        question: "jostle",
        choices: ["押し合う", "支える", "避ける", "譲る"],
        correctAnswer: "押し合う"
     },
     { 
        id: 2066,
        question: "stellar",
        choices: ["星の", "地球の", "太陽の", "水の"],
        correctAnswer: "星の"
     },
     { 
        id: 2067,
        question: "exude",
        choices: ["滲み出させる", "吸収する", "固める", "乾燥させる"],
        correctAnswer: "滲み出させる"
     },
     { 
        id: 2068,
        question: "thorn",
        choices: ["とげ", "花", "茎", "葉"],
        correctAnswer: "とげ"
     },
     { 
        id: 2069,
        question: "stick to",
        choices: ["にくっつく", "離れる", "分裂する", "避ける"],
        correctAnswer: "にくっつく"
     },
     { 
        id: 2070,
        question: "attentive",
        choices: ["注意深い", "無関心な", "鈍感な", "怠慢な"],
        correctAnswer: "注意深い"
     },
     { 
        id: 2071,
        question: "outwit",
        choices: ["出し抜く", "騙される", "信じる", "従う"],
        correctAnswer: "出し抜く"
     },
     { 
        id: 2072,
        question: "blurt",
        choices: ["うっかり話す", "黙る", "繰り返す", "隠す"],
        correctAnswer: "うっかり話す"
     },
     { 
        id: 2073,
        question: "encroach",
        choices: ["侵入する", "撤退する", "防ぐ", "遮る"],
        correctAnswer: "侵入する"
     },
     { 
        id: 2074,
        question: "as before",
        choices: ["以前の様に", "新しく", "異なって", "変化して"],
        correctAnswer: "以前の様に"
     },
     { 
        id: 2075,
        question: "engender",
        choices: ["醸し出す", "排除する", "避ける", "抑制する"],
        correctAnswer: "醸し出す"
     },
     { 
        id: 2076,
        question: "condescend",
        choices: ["謙遜する", "威張る", "見下す", "軽視する"],
        correctAnswer: "謙遜する"
     },
     { 
        id: 2077,
        question: "on standby",
        choices: ["待機して", "進行中で", "停止して", "拒否して"],
        correctAnswer: "待機して"
     },
     { 
        id: 2078,
        question: "distract A from B",
        choices: ["Aの気をBからそらす", "AをBに集中させる", "AをBに誘導する", "AをBに夢中にさせる"],
        correctAnswer: "Aの気をBからそらす"
     },
     { 
        id: 2079,
        question: "pulmonary",
        choices: ["肺の", "肝臓の", "脳の", "心臓の"],
        correctAnswer: "肺の"
     },
     { 
        id: 2080,
        question: "notoriously",
        choices: ["悪名高く", "評判良く", "無名で", "静かに"],
        correctAnswer: "悪名高く"
     },
     { 
        id: 2081,
        question: "detract",
        choices: ["損なう", "改善する", "支える", "強化する"],
        correctAnswer: "損なう"
     },
     { 
        id: 2082,
        question: "remedial",
        choices: ["治療する", "悪化させる", "破壊する", "変形する"],
        correctAnswer: "治療する"
     },
     { 
        id: 2083,
        question: "trivia",
        choices: ["些細な事", "重要な事", "秘密", "深刻な問題"],
        correctAnswer: "些細な事"
     },
     { 
        id: 2084,
        question: "discretionary",
        choices: ["任意の", "必須の", "強制的な", "規定された"],
        correctAnswer: "任意の"
     },
     { 
        id: 2085,
        question: "pessimistic",
        choices: ["悲観的な", "楽観的な", "中立的な", "冷静な"],
        correctAnswer: "悲観的な"
     },
     { 
        id: 2086,
        question: "inside out",
        choices: ["裏返しに", "表向きに", "正しい向きで", "逆さまに"],
        correctAnswer: "裏返しに"
     },
     { 
        id: 2087,
        question: "pseudo",
        choices: ["偽りの", "本物の", "信頼できる", "確かな"],
        correctAnswer: "偽りの"
     },
     { 
        id: 2088,
        question: "antecedent",
        choices: ["先行する", "後に続く", "同時発生する", "無関係の"],
        correctAnswer: "先行する"
     },
     { 
        id: 2089,
        question: "fleeting",
        choices: ["つかの間の", "永続する", "遅い", "変わらない"],
        correctAnswer: "つかの間の"
     },
     { 
        id: 2090,
        question: "harrowing",
        choices: ["悲惨な", "喜ばしい", "普通の", "退屈な"],
        correctAnswer: "悲惨な"
     },
     { 
        id: 2091,
        question: "tantalizing",
        choices: ["じれったい", "満足できる", "単純な", "退屈な"],
        correctAnswer: "じれったい"
     },
     { 
        id: 2092,
        question: "walk off with",
        choices: ["から歩いて出る", "持ち帰る", "追いかける", "忘れる"],
        correctAnswer: "から歩いて出る"
     },
     { 
        id: 2093,
        question: "culinary",
        choices: ["料理の", "医学の", "科学の", "技術の"],
        correctAnswer: "料理の"
     },
     { 
        id: 2094,
        question: "natural disaster",
        choices: ["自然災害", "人工災害", "事故", "戦争"],
        correctAnswer: "自然災害"
     },
     { 
        id: 2095,
        question: "accentuate",
        choices: ["強調する", "ぼやかす", "軽視する", "抑える"],
        correctAnswer: "強調する"
     },
     { 
        id: 2096,
        question: "sordid",
        choices: ["むさ苦しい", "綺麗な", "整然とした", "清潔な"],
        correctAnswer: "むさ苦しい"
     },
     { 
        id: 2097,
        question: "pilfer",
        choices: ["くすねる", "贈る", "探す", "集める"],
        correctAnswer: "くすねる"
     },
     { 
        id: 2098,
        question: "assail",
        choices: ["暴行する", "助ける", "守る", "避ける"],
        correctAnswer: "暴行する"
     },
     { 
        id: 2099,
        question: "airborne",
        choices: ["空輸の", "地上の", "水中の", "地下の"],
        correctAnswer: "空輸の"
     },
     { 
        id: 2100,
        question: "keep A away from B",
        choices: ["AをBから遠ざける", "AをBに近づける", "AをBに向かわせる", "AをBと混ぜる"],
        correctAnswer: "AをBから遠ざける"
     },
     { 
        id: 2101,
        question: "fragrant",
        choices: ["香ばしい", "臭い", "無臭の", "嫌な匂いの"],
        correctAnswer: "香ばしい"
     },
     { 
        id: 2102,
        question: "innocuous",
        choices: ["無害の", "危険な", "毒性のある", "有害な"],
        correctAnswer: "無害の"
     },
     { 
        id: 2103,
        question: "eclectic",
        choices: ["折衷の", "特定の", "単一の", "固定された"],
        correctAnswer: "折衷の"
     },
     { 
        id: 2104,
        question: "trajectory",
        choices: ["軌道", "目的", "出発点", "停止点"],
        correctAnswer: "軌道"
     },
     { 
        id: 2105,
        question: "jut",
        choices: ["突き出す", "引っ込む", "消える", "曲がる"],
        correctAnswer: "突き出す"
     },
     { 
        id: 2106,
        question: "converse",
        choices: ["話す", "黙る", "書く", "考える"],
        correctAnswer: "話す"
     },
     { 
        id: 2107,
        question: "relentlessly",
        choices: ["容赦なく", "穏やかに", "優しく", "ゆっくりと"],
        correctAnswer: "容赦なく"
     },
     { 
        id: 2108,
        question: "a range of",
        choices: ["様々な", "限られた", "一つの", "同じ"],
        correctAnswer: "様々な"
     },
     { 
        id: 2109,
        question: "distorted",
        choices: ["歪んだ", "真っ直ぐな", "整った", "滑らかな"],
        correctAnswer: "歪んだ"
     },
     { 
        id: 2110,
        question: "tumultuous",
        choices: ["騒然とした", "静かな", "落ち着いた", "穏やかな"],
        correctAnswer: "騒然とした"
     },
     { 
        id: 2111,
        question: "kick around",
        choices: ["粗末に扱う", "大切にする", "育てる", "無視する"],
        correctAnswer: "粗末に扱う"
     },
     { 
        id: 2112,
        question: "accede",
        choices: ["同意する", "拒否する", "議論する", "避ける"],
        correctAnswer: "同意する"
     },
     { 
        id: 2113,
        question: "annual fee",
        choices: ["年会費", "月会費", "入会費", "登録料"],
        correctAnswer: "年会費"
     },
     { 
        id: 2114,
        question: "markedly",
        choices: ["著しく", "わずかに", "控えめに", "ほとんど"],
        correctAnswer: "著しく"
     },
     { 
        id: 2115,
        question: "hilarious",
        choices: ["滑稽な", "悲しい", "退屈な", "深刻な"],
        correctAnswer: "滑稽な"
     },
     { 
        id: 2116,
        question: "veritable",
        choices: ["真実の", "疑わしい", "誤った", "不明瞭な"],
        correctAnswer: "真実の"
     },
     { 
        id: 2117,
        question: "jeer",
        choices: ["冷やかす", "称賛する", "無視する", "励ます"],
        correctAnswer: "冷やかす"
     },
     { 
        id: 2118,
        question: "comatose",
        choices: ["昏睡状態の", "活発な", "意識がある", "元気な"],
        correctAnswer: "昏睡状態の"
     },
     { 
        id: 2119,
        question: "lewd",
        choices: ["淫らな", "純粋な", "上品な", "控えめな"],
        correctAnswer: "淫らな"
     },
     { 
        id: 2120,
        question: "gloomy",
        choices: ["暗い", "明るい", "派手な", "鮮やかな"],
        correctAnswer: "暗い"
     },
     { 
        id: 2121,
        question: "spontaneously",
        choices: ["自発的に", "強制的に", "偶然に", "予定通りに"],
        correctAnswer: "自発的に"
     },
     { 
        id: 2122,
        question: "vigil",
        choices: ["寝ずの番", "昼寝", "休息", "無関心"],
        correctAnswer: "寝ずの番"
     },
     { 
        id: 2123,
        question: "contravene",
        choices: ["違反する", "遵守する", "支持する", "調整する"],
        correctAnswer: "違反する"
     },
     { 
        id: 2124,
        question: "soaring",
        choices: ["舞い上がる", "落ちる", "停滞する", "沈む"],
        correctAnswer: "舞い上がる"
     },
     { 
        id: 2125,
        question: "impeccable",
        choices: ["申し分のない", "不完全な", "誤りのある", "曖昧な"],
        correctAnswer: "申し分のない"
     },
     { 
        id: 2126,
        question: "laudable",
        choices: ["称賛に値する", "非難される", "ありふれた", "平凡な"],
        correctAnswer: "称賛に値する"
     },
     { 
        id: 2127,
        question: "patriarchal",
        choices: ["家長の", "民主的な", "平等な", "女性中心の"],
        correctAnswer: "家長の"
     },
     { 
        id: 2128,
        question: "dour",
        choices: ["陰気な", "陽気な", "明るい", "楽しげな"],
        correctAnswer: "陰気な"
     },
     { 
        id: 2129,
        question: "slip up",
        choices: ["やり損なう", "成功する", "慎重に進める", "うまくやる"],
        correctAnswer: "やり損なう"
     },
     { 
        id: 2130,
        question: "tangled",
        choices: ["もつれた", "整った", "解けた", "シンプルな"],
        correctAnswer: "もつれた"
     },
     { 
        id: 2131,
        question: "headlong",
        choices: ["真っ逆さまに", "ゆっくりと", "慎重に", "注意深く"],
        correctAnswer: "真っ逆さまに"
     },
     { 
        id: 2132,
        question: "corrode",
        choices: ["腐食する", "強化する", "保護する", "修復する"],
        correctAnswer: "腐食する"
     },
     { 
        id: 2133,
        question: "speck",
        choices: ["斑点", "大きな傷", "線", "跡"],
        correctAnswer: "斑点"
     },
     { 
        id: 2134,
        question: "transmitter",
        choices: ["送信機", "受信機", "アンテナ", "スピーカー"],
        correctAnswer: "送信機"
     },
     { 
        id: 2135,
        question: "spree",
        choices: ["酒宴", "断食", "瞑想", "休養"],
        correctAnswer: "酒宴"
     },
     { 
        id: 2136,
        question: "outspoken",
        choices: ["率直な", "遠慮がちな", "控えめな", "口数の少ない"],
        correctAnswer: "率直な"
     },
     { 
        id: 2137,
        question: "hark",
        choices: ["聞く", "見る", "話す", "無視する"],
        correctAnswer: "聞く"
     },
     { 
        id: 2138,
        question: "tarp",
        choices: ["防水シート", "毛布", "カーテン", "布団"],
        correctAnswer: "防水シート"
     },
     { 
        id: 2139,
        question: "germinate",
        choices: ["発芽する", "枯れる", "散る", "縮む"],
        correctAnswer: "発芽する"
     },
     { 
        id: 2140,
        question: "get down to",
        choices: ["取り組む", "避ける", "無視する", "離れる"],
        correctAnswer: "取り組む"
     },
     { 
        id: 2141,
        question: "quadruple",
        choices: ["4倍の", "3倍の", "2倍の", "5倍の"],
        correctAnswer: "4倍の"
     },
     { 
        id: 2142,
        question: "scant",
        choices: ["乏しい", "豊富な", "適度な", "十分な"],
        correctAnswer: "乏しい"
     },
     { 
        id: 2143,
        question: "instigate",
        choices: ["扇動する", "抑制する", "沈静化する", "支持する"],
        correctAnswer: "扇動する"
     },
     { 
        id: 2144,
        question: "burst into",
        choices: ["乱入する", "退出する", "注意する", "放棄する"],
        correctAnswer: "乱入する"
     },
     { 
        id: 2145,
        question: "affable",
        choices: ["親しみの持てる", "冷たい", "厳しい", "不親切な"],
        correctAnswer: "親しみの持てる"
     },
     { 
        id: 2146,
        question: "in detail",
        choices: ["詳細に", "簡潔に", "適当に", "略して"],
        correctAnswer: "詳細に"
     },
     { 
        id: 2147,
        question: "cumbersome",
        choices: ["面倒な", "楽な", "便利な", "簡単な"],
        correctAnswer: "面倒な"
     },
     { 
        id: 2148,
        question: "be located in",
        choices: ["に位置している", "を移動する", "を消去する", "を修正する"],
        correctAnswer: "に位置している"
     },
     { 
        id: 2149,
        question: "strident",
        choices: ["かん高い", "低い", "優しい", "穏やかな"],
        correctAnswer: "かん高い"
     },
     { 
        id: 2150,
        question: "uproar",
        choices: ["大騒ぎ", "静寂", "冷静", "穏やかさ"],
        correctAnswer: "大騒ぎ"
     },
     { 
        id: 2151,
        question: "flawless",
        choices: ["完璧な", "欠陥のある", "不完全な", "壊れた"],
        correctAnswer: "完璧な"
     },
     { 
        id: 2152,
        question: "adept",
        choices: ["熟達した", "未熟な", "下手な", "素人の"],
        correctAnswer: "熟達した"
     },
     { 
        id: 2153,
        question: "bulky",
        choices: ["かさばった", "小さな", "コンパクトな", "薄い"],
        correctAnswer: "かさばった"
     },
     { 
        id: 2154,
        question: "glitter",
        choices: ["きらきら輝く", "曇る", "暗くなる", "色褪せる"],
        correctAnswer: "きらきら輝く"
     },
     { 
        id: 2155,
        question: "intrepid",
        choices: ["勇敢な", "臆病な", "慎重な", "弱気な"],
        correctAnswer: "勇敢な"
     },
     { 
        id: 2156,
        question: "impersonate",
        choices: ["役を演じる", "見逃す", "偽装する", "無視する"],
        correctAnswer: "役を演じる"
     },
     { 
        id: 2157,
        question: "lisp",
        choices: ["舌足らずに発音する", "流暢に話す", "黙る", "正しく発音する"],
        correctAnswer: "舌足らずに発音する"
     },
     { 
        id: 2158,
        question: "taint",
        choices: ["腐敗", "清潔", "輝き", "美しさ"],
        correctAnswer: "腐敗"
     },
     { 
        id: 2159,
        question: "deceptive",
        choices: ["だまそうとする", "信頼できる", "正直な", "誠実な"],
        correctAnswer: "だまそうとする"
     },
     { 
        id: 2160,
        question: "contextual",
        choices: ["文脈上の", "独立した", "無関係な", "抽象的な"],
        correctAnswer: "文脈上の"
     },
     { 
        id: 2161,
        question: "grandiose",
        choices: ["壮大な", "小規模な", "地味な", "平凡な"],
        correctAnswer: "壮大な"
     },
     { 
        id: 2162,
        question: "meager",
        choices: ["貧弱な", "豊富な", "十分な", "多量の"],
        correctAnswer: "貧弱な"
     },
     { 
        id: 2163,
        question: "anew",
        choices: ["新たに", "過去に", "前と同じく", "変わらず"],
        correctAnswer: "新たに"
     },
     { 
        id: 2164,
        question: "conceivable",
        choices: ["考えられる", "不可能な", "信じがたい", "想像できない"],
        correctAnswer: "考えられる"
     },
     { 
        id: 2165,
        question: "verbally",
        choices: ["口頭で", "文書で", "沈黙で", "ジェスチャーで"],
        correctAnswer: "口頭で"
     },
     { 
        id: 2166,
        question: "pacify",
        choices: ["なだめる", "怒らせる", "煽る", "刺激する"],
        correctAnswer: "なだめる"
     },
     { 
        id: 2167,
        question: "turbulent",
        choices: ["荒れ狂った", "穏やかな", "安定した", "静かな"],
        correctAnswer: "荒れ狂った"
     },
     { 
        id: 2168,
        question: "peruse",
        choices: ["熟読する", "軽く読む", "飛ばし読む", "無視する"],
        correctAnswer: "熟読する"
     },
     { 
        id: 2169,
        question: "erratic",
        choices: ["不安定な", "安定した", "予測可能な", "規則的な"],
        correctAnswer: "不安定な"
     },
     { 
        id: 2170,
        question: "smug",
        choices: ["独り善がり", "謙虚な", "控えめな", "慎重な"],
        correctAnswer: "独り善がり"
     },
     {
        id: 2171,
        question: "congregate",
        choices: ["集まる", "分散する", "増加する", "減少する"],
         correctAnswer: "集まる"
      },
      {
        id: 2172,
        question: "cower",
        choices: ["縮み上がる", "飛び上がる", "堂々とする", "走る"],
         correctAnswer: "縮み上がる"
      },
      {
        id: 2173,
        question: "torrent",
        choices: ["急流", "静水", "湖", "池"],
         correctAnswer: "急流"
      },
      {
        id: 2174,
        question: "uncanny",
        choices: ["不気味な", "明るい", "普通の", "楽しい"],
         correctAnswer: "不気味な"
      },
      {
        id: 2175,
        question: "manifest",
        choices: ["明白な", "曖昧な", "隠れた", "秘密の"],
         correctAnswer: "明白な"
      },
      {
        id: 2176,
        question: "abhor",
        choices: ["嫌悪する", "愛する", "尊敬する", "無視する"],
         correctAnswer: "嫌悪する"
      },
      {
        id: 2177,
        question: "call on",
        choices: ["を訪問する", "を避ける", "を無視する", "を破壊する"],
         correctAnswer: "を訪問する"
      },
      {
        id: 2178,
        question: "moot",
        choices: ["議論する", "決定する", "無視する", "削除する"],
         correctAnswer: "議論する"
      },
      {
        id: 2179,
        question: "have access to",
        choices: ["を利用できる", "を放棄する", "を避ける", "を破壊する"],
         correctAnswer: "を利用できる"
      },
      {
        id: 2180,
        question: "tremor",
        choices: ["震動", "静止", "鈍化", "膨張"],
         correctAnswer: "震動"
      },
      {
        id: 2181,
        question: "squabble",
        choices: ["つまらない口論", "大きな争い", "平和", "妥協"],
         correctAnswer: "つまらない口論"
      },
      {
        id: 2182,
        question: "wand",
        choices: ["杖", "剣", "鎌", "槍"],
         correctAnswer: "杖"
      },
      {
        id: 2183,
        question: "hydraulic",
        choices: ["油圧の", "電気の", "空気の", "磁気の"],
         correctAnswer: "油圧の"
      },
      {
        id: 2184,
        question: "buoyant",
        choices: ["浮力のある", "沈む", "軽い", "重い"],
         correctAnswer: "浮力のある"
      },
      {
        id: 2185,
        question: "sales quota",
        choices: ["売上ノルマ", "売上税", "売上目標", "売上減少"],
         correctAnswer: "売上ノルマ"
      },
      {
        id: 2186,
        question: "dissect",
        choices: ["解剖する", "縫合する", "削る", "組み立てる"],
         correctAnswer: "解剖する"
      },
      {
        id: 2187,
        question: "seductive",
        choices: ["魅惑的な", "冷たい", "鈍い", "恐ろしい"],
         correctAnswer: "魅惑的な"
      },
      {
        id: 2188,
        question: "stringent",
        choices: ["厳格な", "寛容な", "優しい", "楽観的な"],
         correctAnswer: "厳格な"
      },
      {
        id: 2189,
        question: "overdue",
        choices: ["延滞した", "早期の", "即時の", "遅延なし"],
         correctAnswer: "延滞した"
      },
      {
        id: 2190,
        question: "ablaze",
        choices: ["燃え立っている", "冷たい", "湿っている", "暗い"],
         correctAnswer: "燃え立っている"
      },
      {
        id: 2191,
        question: "aggrieved",
        choices: ["感情を害した", "喜んだ", "無関心な", "幸福な"],
         correctAnswer: "感情を害した"
      },
      {
        id: 2192,
        question: "jagged",
        choices: ["角立った", "滑らかな", "平らな", "柔らかい"],
         correctAnswer: "角立った"
      },
      {
        id: 2193,
        question: "rustic",
        choices: ["田舎の", "都会の", "現代的な", "高級な"],
         correctAnswer: "田舎の"
      },
      {
        id: 2194,
        question: "gritty",
        choices: ["砂の入った", "滑らかな", "清潔な", "柔らかい"],
         correctAnswer: "砂の入った"
      },
      {
        id: 2195,
        question: "flimsy",
        choices: ["薄っぺらな", "頑丈な", "重厚な", "強固な"],
         correctAnswer: "薄っぺらな"
      },
      {
        id: 2196,
        question: "heartfelt",
        choices: ["心からの", "無関心な", "偽りの", "冷淡な"],
         correctAnswer: "心からの"
      },
      {
        id: 2197,
        question: "at fault",
        choices: ["落ち度がある", "完璧な", "問題なし", "称賛される"],
         correctAnswer: "落ち度がある"
      },
      {
        id: 2198,
        question: "boisterous",
        choices: ["騒々しい", "静かな", "穏やかな", "優雅な"],
         correctAnswer: "騒々しい"
      },
      {
        id: 2199,
        question: "play at",
        choices: ["起用する", "避ける", "諦める", "隠す"],
         correctAnswer: "起用する"
      },
      {
        id: 2200,
        question: "whore",
        choices: ["売春婦", "貴婦人", "修道女", "女王"],
         correctAnswer: "売春婦"
      },
      {
        id: 2201,
        question: "enunciate",
        choices: ["明瞭に発音する", "誤る", "書く", "聞く"],
         correctAnswer: "明瞭に発音する"
      },
      {
        id: 2202,
        question: "conciliate",
        choices: ["調停する", "激怒させる", "無視する", "断る"],
         correctAnswer: "調停する"
      },
      {
        id: 2203,
        question: "sulfur",
        choices: ["硫黄", "炭素", "水素", "酸素"],
         correctAnswer: "硫黄"
      },
      {
        id: 2204,
        question: "mashed",
        choices: ["つぶした", "焼いた", "凍った", "乾燥した"],
         correctAnswer: "つぶした"
      },
      {
        id: 2205,
        question: "sink in",
        choices: ["浸透する", "乾燥する", "蒸発する", "漂う"],
         correctAnswer: "浸透する"
      },
      {
        id: 2206,
        question: "prolific",
        choices: ["多産の", "貧弱な", "稀な", "鈍い"],
         correctAnswer: "多産の"
      },
      {
        id: 2207,
        question: "ashore",
        choices: ["岸へ", "海へ", "空へ", "地下へ"],
         correctAnswer: "岸へ"
      },
      {
        id: 2208,
        question: "insulate",
        choices: ["絶縁する", "結合する", "導電する", "冷やす"],
         correctAnswer: "絶縁する"
      },
      {
        id: 2209,
        question: "concerted",
        choices: ["申し合わせた", "偶然の", "混乱した", "断片的な"],
         correctAnswer: "申し合わせた"
      },
      {
        id: 2210,
        question: "dilate",
        choices: ["膨張する", "収縮する", "破裂する", "硬化する"],
         correctAnswer: "膨張する"
      },
      {
        id: 2211,
        question: "munch",
        choices: ["むしゃむしゃ食べる", "飲み込む", "吐き出す", "砕く"],
         correctAnswer: "むしゃむしゃ食べる"
      },
      {
        id: 2212,
        question: "to date",
        choices: ["これまで", "これから", "一度もない", "未来に"],
         correctAnswer: "これまで"
      },
      {
        id: 2213,
        question: "terse",
        choices: ["簡潔な", "冗長な", "詳細な", "曖昧な"],
         correctAnswer: "簡潔な"
      },
      {
        id: 2214,
        question: "wayward",
        choices: ["わがままな", "従順な", "慎重な", "誠実な"],
         correctAnswer: "わがままな"
      },
      {
        id: 2215,
        question: "come to a head",
        choices: ["山場を迎える", "始まる", "終わる", "中断する"],
         correctAnswer: "山場を迎える"
      },
      {
        id: 2216,
        question: "eclipse",
        choices: ["日食", "流星", "彗星", "月面着陸"],
         correctAnswer: "日食"
      },
      {
        id: 2217,
        question: "transient",
        choices: ["一時的な", "永続的な", "不変の", "頑固な"],
         correctAnswer: "一時的な"
      },
      {
        id: 2218,
        question: "come into",
        choices: ["に入る", "に出る", "に触れる", "に近づく"],
         correctAnswer: "に入る"
      },
      {
        id: 2219,
        question: "nonpartisan",
        choices: ["無所属の", "党派の", "政治的な", "保守的な"],
         correctAnswer: "無所属の"
      },
      {
        id: 2220,
        question: "inexorable",
        choices: ["容赦ない", "優しい", "柔軟な", "甘い"],
         correctAnswer: "容赦ない"
      },
      {
        id: 2221,
        question: "intently",
        choices: ["熱心に", "気まぐれに", "怠惰に", "冷静に"],
         correctAnswer: "熱心に"
      },
      {
        id: 2222,
        question: "zealot",
        choices: ["熱狂者", "冷静な人", "無関心な人", "控えめな人"],
         correctAnswer: "熱狂者"
      },
      {
        id: 2223,
        question: "preposterous",
        choices: ["途方もない", "常識的な", "控えめな", "地味な"],
         correctAnswer: "途方もない"
      },
      {
        id: 2224,
        question: "rectangular",
        choices: ["長方形の", "円形の", "三角形の", "不定形の"],
         correctAnswer: "長方形の"
      },
      {
        id: 2225,
        question: "unanimously",
        choices: ["全会一致で", "一部の賛成で", "反対多数で", "無効票で"],
         correctAnswer: "全会一致で"
      },
      {
        id: 2226,
        question: "tenet",
        choices: ["主義", "理論", "疑念", "提案"],
         correctAnswer: "主義"
      },
      {
        id: 2227,
        question: "tier",
        choices: ["段", "点", "穴", "面"],
         correctAnswer: "段"
      },
      {
        id: 2228,
        question: "moribund",
        choices: ["瀕死の", "活発な", "健康的な", "元気な"],
         correctAnswer: "瀕死の"
      },
      {
        id: 2229,
        question: "ludicrous",
        choices: ["ばかげた", "真面目な", "合理的な", "有益な"],
         correctAnswer: "ばかげた"
      },
      {
        id: 2230,
        question: "squint",
        choices: ["斜視", "直視", "遠視", "近視"],
         correctAnswer: "斜視"
      },
      {
        id: 2231,
        question: "intravenous",
        choices: ["静脈内の", "動脈の", "筋肉の", "骨の"],
         correctAnswer: "静脈内の"
      },
      {
        id: 2232,
        question: "sedative",
        choices: ["鎮静効果のある", "興奮作用のある", "刺激的な", "目覚める"],
         correctAnswer: "鎮静効果のある"
      },
      {
        id: 2233,
        question: "divergent",
        choices: ["分岐した", "収束した", "直線的な", "回転する"],
         correctAnswer: "分岐した"
      },
      {
        id: 2234,
        question: "prenatal",
        choices: ["出生前の", "出生後の", "青年期の", "老年期の"],
         correctAnswer: "出生前の"
      },
      {
        id: 2235,
        question: "recalcitrant",
        choices: ["反抗的な", "従順な", "親切な", "冷静な"],
         correctAnswer: "反抗的な"
      },
      {
        id: 2236,
        question: "avid",
        choices: ["熱心な", "怠惰な", "冷淡な", "無関心な"],
         correctAnswer: "熱心な"
      },
      {
        id: 2237,
        question: "glum",
        choices: ["ふさぎ込んだ", "陽気な", "快活な", "希望に満ちた"],
         correctAnswer: "ふさぎ込んだ"
      },
      {
        id: 2238,
        question: "daunt",
        choices: ["脅す", "励ます", "守る", "慰める"],
         correctAnswer: "脅す"
      },
      {
        id: 2239,
        question: "beget",
        choices: ["子供を授かる", "捨てる", "避ける", "殺す"],
         correctAnswer: "子供を授かる"
      },
      {
        id: 2240,
        question: "acclaim",
        choices: ["称賛する", "非難する", "軽蔑する", "無視する"],
         correctAnswer: "称賛する"
      },
      {
        id: 2241,
        question: "evocative",
        choices: ["呼び起こした", "忘れさせる", "冷淡な", "控えめな"],
         correctAnswer: "呼び起こした"
      },
      {
        id: 2242,
        question: "hapless",
        choices: ["不運な", "幸運な", "楽観的な", "自信満々の"],
         correctAnswer: "不運な"
      },
      {
        id: 2243,
        question: "stigma",
        choices: ["汚名", "栄誉", "誇り", "祝福"],
         correctAnswer: "汚名"
      },
      {
        id: 2244,
        question: "suspense",
        choices: ["不確かな状態", "確実な状況", "落ち着いた状態", "終結した状態"],
         correctAnswer: "不確かな状態"
      },
      {
        id: 2245,
        question: "exploratory",
        choices: ["探検の", "確定的な", "定住の", "計画的な"],
         correctAnswer: "探検の"
      },
      {
        id: 2246,
        question: "delusional",
        choices: ["妄想的な", "現実的な", "論理的な", "明確な"],
         correctAnswer: "妄想的な"
      },
      {
        id: 2247,
        question: "bequeath",
        choices: ["遺言で譲る", "借りる", "破棄する", "忘れる"],
         correctAnswer: "遺言で譲る"
      },
      {
        id: 2248,
        question: "genital",
        choices: ["生殖の", "脳の", "胃の", "皮膚の"],
         correctAnswer: "生殖の"
      },
      {
        id: 2249,
        question: "drab",
        choices: ["単調な", "派手な", "刺激的な", "華やかな"],
         correctAnswer: "単調な"
      },
      {
        id: 2250,
        question: "all the time",
        choices: ["いつも", "時々", "めったにない", "一度もない"],
         correctAnswer: "いつも"
      },
      {
        id: 2251,
        question: "confederate",
        choices: ["連合した", "孤立した", "分裂した", "中立の"],
         correctAnswer: "連合した"
      },
      {
        id: 2252,
        question: "apiece",
        choices: ["一つに付き", "二つずつ", "まとめて", "不規則に"],
         correctAnswer: "一つに付き"
      },
      {
        id: 2253,
        question: "gush",
        choices: ["湧き出る", "枯れる", "冷却する", "蒸発する"],
         correctAnswer: "湧き出る"
      },
      {
        id: 2254,
        question: "temper",
        choices: ["気性", "体型", "気候", "流行"],
         correctAnswer: "気性"
      },
      {
        id: 2255,
        question: "dislodge",
        choices: ["無理に押しのける", "固定する", "受け入れる", "適応する"],
         correctAnswer: "無理に押しのける"
      },
      {
        id: 2256,
        question: "split off A from B",
        choices: ["AをBから切り離す", "AをBと結びつける", "AをBに追加する", "AをBに統合する"],
         correctAnswer: "AをBから切り離す"
      },
      {
        id: 2257,
        question: "oscillate",
        choices: ["振動する", "静止する", "固まる", "消滅する"],
         correctAnswer: "振動する"
      },
      {
        id: 2258,
        question: "douse",
        choices: ["ずぶぬれにする", "乾燥させる", "加熱する", "冷凍する"],
         correctAnswer: "ずぶぬれにする"
      },
      {
        id: 2259,
        question: "put A to sleep",
        choices: ["Aを眠らせる", "Aを目覚めさせる", "Aを活性化する", "Aを覚醒させる"],
         correctAnswer: "Aを眠らせる"
      },
      {
        id: 2260,
        question: "unilateral",
        choices: ["片側の", "両側の", "対称的な", "均等な"],
         correctAnswer: "片側の"
      },
      {
        id: 2261,
        question: "extricate",
        choices: ["救い出す", "閉じ込める", "放棄する", "避ける"],
         correctAnswer: "救い出す"
      },
      {
        id: 2262,
        question: "idiotic",
        choices: ["ばかげた", "賢い", "真面目な", "控えめな"],
         correctAnswer: "ばかげた"
      },
      {
        id: 2263,
        question: "dissident",
        choices: ["反体制派の", "保守的な", "従順な", "政府寄りの"],
         correctAnswer: "反体制派の"
      },
      {
        id: 2264,
        question: "in the first place",
        choices: ["最初に", "途中で", "最後に", "適当に"],
         correctAnswer: "最初に"
      },
      {
        id: 2265,
        question: "call it a day",
        choices: ["終わる", "始める", "延期する", "継続する"],
         correctAnswer: "終わる"
      },
      {
        id: 2266,
        question: "expound",
        choices: ["解説する", "隠す", "誤解させる", "省略する"],
         correctAnswer: "解説する"
      },
      {
        id: 2267,
        question: "alluring",
        choices: ["魅惑的な", "退屈な", "不快な", "怖い"],
         correctAnswer: "魅惑的な"
      },
      {
        id: 2268,
        question: "manageable",
        choices: ["扱いやすい", "制御不能な", "厄介な", "重い"],
         correctAnswer: "扱いやすい"
      },
      {
        id: 2269,
        question: "rowdy",
        choices: ["乱暴な", "おとなしい", "優雅な", "冷静な"],
         correctAnswer: "乱暴な"
      },
      {
        id: 2270,
        question: "fight back",
        choices: ["応戦する", "逃げる", "降参する", "避ける"],
         correctAnswer: "応戦する"
      },
      {
        id: 2271,
        question: "cede",
        choices: ["譲る", "奪う", "無視する", "奨励する"],
         correctAnswer: "譲る"
      },
      {
        id: 2272,
        question: "impinge",
        choices: ["衝突する", "避ける", "滑る", "溶ける"],
         correctAnswer: "衝突する"
      },
      {
        id: 2273,
        question: "varsity",
        choices: ["代表", "初心者", "一般人", "観客"],
         correctAnswer: "代表"
      },
      {
        id: 2274,
        question: "stained",
        choices: ["汚れた", "清潔な", "新品の", "曇った"],
         correctAnswer: "汚れた"
      },
      {
        id: 2275,
        question: "horrendous",
        choices: ["恐ろしい", "普通の", "無害な", "美しい"],
         correctAnswer: "恐ろしい"
      },
      {
        id: 2276,
        question: "combine A with B",
        choices: ["AとBを組み合わせる", "AとBを分離する", "AをBから取り除く", "AをBの代わりにする"],
         correctAnswer: "AとBを組み合わせる"
      },
      {
        id: 2277,
        question: "improbable",
        choices: ["ありそうもない", "確実な", "避けられない", "明白な"],
         correctAnswer: "ありそうもない"
      },
      {
        id: 2278,
        question: "pernicious",
        choices: ["有害な", "無害な", "安全な", "役立つ"],
         correctAnswer: "有害な"
      },
      {
        id: 2279,
        question: "constrict",
        choices: ["狭める", "広げる", "分ける", "増やす"],
         correctAnswer: "狭める"
      },
      {
        id: 2280,
        question: "circumscribe",
        choices: ["取り巻く", "開放する", "削除する", "移動する"],
         correctAnswer: "取り巻く"
      },
      {
        id: 2281,
        question: "swollen",
        choices: ["腫れた", "細い", "小さい", "健康な"],
         correctAnswer: "腫れた"
      },
      {
        id: 2282,
        question: "blare",
        choices: ["鳴り響かせる", "静める", "消す", "止める"],
         correctAnswer: "鳴り響かせる"
      },
      {
        id: 2283,
        question: "abiding",
        choices: ["永続的な", "短期間の", "一時的な", "変わりやすい"],
         correctAnswer: "永続的な"
      },
      {
        id: 2284,
        question: "back-to-back",
        choices: ["背中合わせに", "顔を向けて", "横並びに", "交差して"],
         correctAnswer: "背中合わせに"
      },
      {
        id: 2285,
        question: "regal",
        choices: ["王者らしい", "普通の", "卑屈な", "地味な"],
         correctAnswer: "王者らしい"
      },
      {
        id: 2286,
        question: "thirst",
        choices: ["渇き", "満腹", "快適", "冷却"],
         correctAnswer: "渇き"
      },
      {
        id: 2287,
        question: "tally",
        choices: ["集計", "削除", "無視", "軽視"],
         correctAnswer: "集計"
      },
      {
        id: 2288,
        question: "vigor",
        choices: ["活力", "疲労", "無気力", "倦怠"],
         correctAnswer: "活力"
      },
      {
        id: 2289,
        question: "flamboyant",
        choices: ["色鮮やかな", "地味な", "目立たない", "暗い"],
         correctAnswer: "色鮮やかな"
      },
      {
        id: 2290,
        question: "point out",
        choices: ["を指摘する", "を無視する", "を誤解する", "を見逃す"],
         correctAnswer: "を指摘する"
      },
      {
        id: 2291,
        question: "nostalgic",
        choices: ["懐かしい", "冷淡な", "新しい", "無関心な"],
         correctAnswer: "懐かしい"
      },
      {
        id: 2292,
        question: "tenacious",
        choices: ["粘り強い", "諦めやすい", "短気な", "消極的な"],
         correctAnswer: "粘り強い"
      },
      {
        id: 2293,
        question: "lurid",
        choices: ["赤く輝いた", "暗い", "透明な", "青白い"],
         correctAnswer: "赤く輝いた"
      },
      {
        id: 2294,
        question: "sluggish",
        choices: ["鈍い", "速い", "機敏な", "活発な"],
         correctAnswer: "鈍い"
      },
      {
        id: 2295,
        question: "donate A to B",
        choices: ["AをBに寄付する", "AをBに借りる", "AをBに隠す", "AをBから取り上げる"],
         correctAnswer: "AをBに寄付する"
      },
      {
        id: 2296,
        question: "profane",
        choices: ["不敬の", "神聖な", "清らかな", "敬虔な"],
         correctAnswer: "不敬の"
      },
      {
        id: 2297,
        question: "intertwine",
        choices: ["絡み合わせる", "引き離す", "切り取る", "避ける"],
         correctAnswer: "絡み合わせる"
      },
      {
        id: 2298,
        question: "devout",
        choices: ["信心深い", "無宗教の", "怠惰な", "不信心な"],
         correctAnswer: "信心深い"
      },
      {
        id: 2299,
        question: "supernova",
        choices: ["超新星", "小惑星", "流星", "月"],
         correctAnswer: "超新星"
      },
      {
        id: 2300,
        question: "null",
        choices: ["無効の", "有効な", "許容される", "正当な"],
         correctAnswer: "無効の"
      },
      {
        id: 2301,
        question: "rueful",
        choices: ["悔んでいる", "誇らしい", "無関心な", "楽観的な"],
         correctAnswer: "悔んでいる"
      },
      {
        id: 2302,
        question: "insolvent",
        choices: ["支払い不能の", "裕福な", "堅実な", "安定した"],
         correctAnswer: "支払い不能の"
      },
      {
        id: 2303,
        question: "whine",
        choices: ["鼻を鳴らす声", "叫び声", "静寂", "笑い声"],
         correctAnswer: "鼻を鳴らす声"
      },
      {
        id: 2304,
        question: "forthright",
        choices: ["単刀直入の", "曖昧な", "控えめな", "間接的な"],
         correctAnswer: "単刀直入の"
      },
      {
        id: 2305,
        question: "gleam",
        choices: ["きらめく", "暗くなる", "濁る", "ぼやける"],
         correctAnswer: "きらめく"
      },
      {
        id: 2306,
        question: "wellness",
        choices: ["健康", "病気", "倦怠感", "衰弱"],
         correctAnswer: "健康"
      },
      {
        id: 2307,
        question: "disproportionate",
        choices: ["不均衡な", "均等な", "整った", "適切な"],
         correctAnswer: "不均衡な"
      },
      {
        id: 2308,
        question: "edify",
        choices: ["啓発する", "堕落させる", "混乱させる", "怠ける"],
         correctAnswer: "啓発する"
      },
      {
        id: 2309,
        question: "efface",
        choices: ["拭い去る", "記憶する", "残す", "強調する"],
         correctAnswer: "拭い去る"
      },
      {
        id: 2310,
        question: "plump",
        choices: ["ふっくらした", "やせ細った", "筋肉質の", "硬い"],
         correctAnswer: "ふっくらした"
      },
      {
        id: 2311,
        question: "hemorrhage",
        choices: ["出血", "骨折", "打撲", "炎症"],
         correctAnswer: "出血"
      },
      {
        id: 2312,
        question: "incinerator",
        choices: ["焼却炉", "冷蔵庫", "給湯器", "換気扇"],
         correctAnswer: "焼却炉"
      },
      {
        id: 2313,
        question: "javelin",
        choices: ["投げやり", "弓", "剣", "盾"],
         correctAnswer: "投げやり"
      },
      {
        id: 2314,
        question: "outlay",
        choices: ["支出", "収入", "利益", "節約"],
         correctAnswer: "支出"
      },
      {
        id: 2315,
        question: "deterrence",
        choices: ["抑止", "促進", "奨励", "容認"],
         correctAnswer: "抑止"
      },
      {
        id: 2316,
        question: "prowess",
        choices: ["武勇", "臆病", "平和", "不安"],
         correctAnswer: "武勇"
      },
      {
        id: 2317,
        question: "conduit",
        choices: ["導管", "障害物", "堤防", "道路"],
         correctAnswer: "導管"
      },
      {
        id: 2318,
        question: "forte",
        choices: ["十八番", "苦手", "普通", "不得意"],
         correctAnswer: "十八番"
      },
      {
        id: 2319,
        question: "pomp",
        choices: ["華やかさ", "質素", "簡素", "地味"],
         correctAnswer: "華やかさ"
      },
      {
        id: 2320,
        question: "mane",
        choices: ["たてがみ", "爪", "羽", "牙"],
         correctAnswer: "たてがみ"
      },
      {
        id: 2321,
         question: "approximation",
         choices: ["近似", "正確な値", "誤り", "概念"],
         correctAnswer: "近似"
       },
       {
        id: 2322,
         question: "kudos",
         choices: ["称賛", "批判", "侮辱", "沈黙"],
         correctAnswer: "称賛"
       },
       {
        id: 2323,
         question: "pull together",
         choices: ["力を結集する", "分裂する", "競争する", "無視する"],
         correctAnswer: "力を結集する"
       },
       {
        id: 2324,
         question: "swindle",
         choices: ["騙す", "助ける", "保護する", "譲る"],
         correctAnswer: "騙す"
       },
       {
        id: 2325,
         question: "rostrum",
         choices: ["演壇", "机", "座席", "棚"],
         correctAnswer: "演壇"
       },
       {
        id: 2326,
         question: "ruffle",
         choices: ["波立たせる", "滑らかにする", "磨く", "固める"],
         correctAnswer: "波立たせる"
       },
       {
        id: 2327,
         question: "exasperation",
         choices: ["憤慨", "喜び", "冷静", "無関心"],
         correctAnswer: "憤慨"
       },
       {
        id: 2328,
         question: "gusto",
         choices: ["大きな喜び", "悲しみ", "無関心", "疲労"],
         correctAnswer: "大きな喜び"
       },
       {
        id: 2329,
         question: "abstinence",
         choices: ["禁欲", "放縦", "自由", "享楽"],
         correctAnswer: "禁欲"
       },
       {
        id: 2330,
         question: "place a ban on",
         choices: ["を禁止する", "を許可する", "を推奨する", "を促進する"],
         correctAnswer: "を禁止する"
       },
       {
        id: 2331,
         question: "fiasco",
         choices: ["大失態", "成功", "勝利", "発展"],
         correctAnswer: "大失態"
       },
       {
        id: 2332,
         question: "merriment",
         choices: ["陽気な騒ぎ", "沈黙", "悲しみ", "混乱"],
         correctAnswer: "陽気な騒ぎ"
       },
       {
        id: 2333,
         question: "cadence",
         choices: ["韻律", "沈黙", "散文", "単語"],
         correctAnswer: "韻律"
       },
       {
        id: 2334,
         question: "drudgery",
         choices: ["骨折り仕事", "楽な仕事", "短期間の仕事", "気楽な職業"],
         correctAnswer: "骨折り仕事"
       },
       {
        id: 2335,
         question: "eddy",
         choices: ["渦", "直流", "湖", "池"],
         correctAnswer: "渦"
       },
       {
        id: 2336,
         question: "totter",
         choices: ["よろめく", "走る", "滑る", "転ぶ"],
         correctAnswer: "よろめく"
       },
       {
        id: 2337,
         question: "sell out",
         choices: ["売りつくす", "買い足す", "増やす", "隠す"],
         correctAnswer: "売りつくす"
       },
       {
        id: 2338,
         question: "atheist",
         choices: ["無神論者", "信仰者", "僧侶", "司祭"],
         correctAnswer: "無神論者"
       },
       {
        id: 2339,
         question: "cordon",
         choices: ["非常線", "自由通行", "広場", "道"],
         correctAnswer: "非常線"
       },
       {
        id: 2340,
         question: "superimpose",
         choices: ["重ね合わせる", "取り除く", "削る", "分ける"],
         correctAnswer: "重ね合わせる"
       },
       {
        id: 2341,
         question: "rejuvenate",
         choices: ["若返らせる", "老化させる", "弱らせる", "放置する"],
         correctAnswer: "若返らせる"
       },
       {
        id: 2342,
         question: "sequester",
         choices: ["隔離する", "接触させる", "混ぜる", "保護する"],
         correctAnswer: "隔離する"
       },
       {
        id: 2343,
         question: "tune up",
         choices: ["を調整する", "を壊す", "を無視する", "を捨てる"],
         correctAnswer: "を調整する"
       },
       {
        id: 2344,
         question: "carousel",
         choices: ["メリーゴーランド", "観覧車", "ジェットコースター", "バンジージャンプ"],
         correctAnswer: "メリーゴーランド"
       },
       {
        id: 2345,
         question: "mortuary",
         choices: ["遺体", "生存者", "病院", "看護師"],
         correctAnswer: "遺体"
       },
       {
        id: 2346,
         question: "armpit",
         choices: ["脇の下", "膝", "足の裏", "肘"],
         correctAnswer: "脇の下"
       },
       {
        id: 2347,
         question: "pillage",
         choices: ["略奪", "寄付", "交換", "分配"],
         correctAnswer: "略奪"
       },
       {
        id: 2348,
         question: "rudder",
         choices: ["舵", "帆", "エンジン", "ブレーキ"],
         correctAnswer: "舵"
       },
       {
        id: 2349,
         question: "obstacle to",
         choices: ["への障壁", "への近道", "への協力", "への支持"],
         correctAnswer: "への障壁"
       },
       {
        id: 2350,
         question: "parchment",
         choices: ["羊皮紙", "普通の紙", "段ボール", "ガラス板"],
         correctAnswer: "羊皮紙"
       },
       {
        id: 2351,
         question: "pedagogy",
         choices: ["教育学", "哲学", "心理学", "言語学"],
         correctAnswer: "教育学"
       },
       {
        id: 2352,
         question: "brevity",
         choices: ["簡潔さ", "冗長さ", "詳細さ", "長時間"],
         correctAnswer: "簡潔さ"
       },
       {
        id: 2353,
         question: "saliva",
         choices: ["唾液", "血液", "汗", "涙"],
         correctAnswer: "唾液"
       },
       {
        id: 2354,
         question: "fit in",
         choices: ["うまく馴染む", "浮く", "離れる", "嫌われる"],
         correctAnswer: "うまく馴染む"
       },
       {
        id: 2355,
         question: "secrete",
         choices: ["分泌する", "吸収する", "固める", "除去する"],
         correctAnswer: "分泌する"
       },
       {
        id: 2356,
         question: "brunt",
         choices: ["矛先", "防御", "援助", "回避"],
         correctAnswer: "矛先"
       },
       {
        id: 2357,
         question: "dame",
         choices: ["貴婦人", "召使い", "一般人", "農民"],
         correctAnswer: "貴婦人"
       },
       {
        id: 2358,
         question: "ruminate",
         choices: ["反芻する", "急ぐ", "寝る", "忘れる"],
         correctAnswer: "反芻する"
       },
       {
        id: 2359,
         question: "muck",
         choices: ["肥やし", "砂", "水", "灰"],
         correctAnswer: "肥やし"
       },
       {
        id: 2360,
         question: "convalescence",
         choices: ["回復期", "発症期", "悪化", "安定"],
         correctAnswer: "回復期"
       },
       {
        id: 2361,
         question: "restitution",
         choices: ["返却", "盗難", "損害", "紛失"],
         correctAnswer: "返却"
       },
       {
        id: 2362,
         question: "longitude",
         choices: ["経度", "緯度", "高度", "深度"],
         correctAnswer: "経度"
       },
       {
        id: 2363,
         question: "insecticide",
         choices: ["殺虫剤", "肥料", "除草剤", "防腐剤"],
         correctAnswer: "殺虫剤"
       },
       {
        id: 2364,
         question: "drop off",
         choices: ["外れる", "拾う", "追加する", "固める"],
         correctAnswer: "外れる"
       },
       {
        id: 2365,
         question: "physiology",
         choices: ["生理学", "心理学", "解剖学", "生態学"],
         correctAnswer: "生理学"
       },
       {
        id: 2366,
         question: "cubicle",
         choices: ["小部屋", "大広間", "倉庫", "劇場"],
         correctAnswer: "小部屋"
       },
       {
        id: 2367,
         question: "make out",
         choices: ["理解する", "誤解する", "避ける", "放棄する"],
         correctAnswer: "理解する"
       },
       {
        id: 2368,
         question: "acne",
         choices: ["にきび", "しわ", "そばかす", "あざ"],
         correctAnswer: "にきび"
       },
       {
        id: 2369,
         question: "froth",
         choices: ["あぶく", "水滴", "氷", "灰"],
         correctAnswer: "あぶく"
       },
       {
        id: 2370,
         question: "roost",
         choices: ["ねぐら", "巣箱", "檻", "草原"],
         correctAnswer: "ねぐら"
       },
       {
        id: 2371,
         question: "anteroom",
         choices: ["控え室", "寝室", "台所", "物置"],
         correctAnswer: "控え室"
       },
       {
        id: 2372,
         question: "antic",
         choices: ["ふざけた", "真面目な", "静かな", "厳格な"],
         correctAnswer: "ふざけた"
       },
       {
        id: 2373,
         question: "offshoot",
         choices: ["支流", "主流", "本体", "中心"],
         correctAnswer: "支流"
       },
       {
        id: 2374,
         question: "trample",
         choices: ["踏み付ける", "撫でる", "拾う", "避ける"],
         correctAnswer: "踏み付ける"
       },
       {
        id: 2375,
         question: "ovary",
         choices: ["卵巣", "子宮", "腎臓", "肝臓"],
         correctAnswer: "卵巣"
       },
       {
        id: 2376,
         question: "lie on",
         choices: ["責任がある", "逃げる", "休む", "支持する"],
         correctAnswer: "責任がある"
       },
       {
        id: 2377,
         question: "snip",
         choices: ["はさみで切る", "縫う", "貼る", "破る"],
         correctAnswer: "はさみで切る"
       },
       {
        id: 2378,
         question: "ploy",
         choices: ["策略", "偶然", "運命", "誤解"],
         correctAnswer: "策略"
       },
       {
        id: 2379,
         question: "a touch of",
         choices: ["ほんの少しの", "大量の", "すべての", "無関係の"],
         correctAnswer: "ほんの少しの"
       },
       {
        id: 2380,
         question: "destitution",
         choices: ["貧困", "裕福", "贅沢", "成功"],
         correctAnswer: "貧困"
       },
       {
        id: 2381,
         question: "before long",
         choices: ["まもなく", "ずっと後で", "既に", "決して"],
         correctAnswer: "まもなく"
       },
       {
        id: 2382,
         question: "pang",
         choices: ["激痛", "軽い痛み", "快感", "くすぐったさ"],
         correctAnswer: "激痛"
       },
       {
        id: 2383,
         question: "pendulum",
         choices: ["振り子", "時計", "歯車", "針"],
         correctAnswer: "振り子"
       },
       {
        id: 2384,
         question: "in prospect",
         choices: ["予期されて", "不明瞭な", "予測不能な", "決定済みの"],
         correctAnswer: "予期されて"
       },
       {
        id: 2385,
         question: "for the rest",
         choices: ["残りについては", "最初から", "全体的に", "特定の部分のみ"],
         correctAnswer: "残りについては"
       },
       {
        id: 2386,
         question: "waft",
         choices: ["漂わせる", "沈める", "固定する", "押し込む"],
         correctAnswer: "漂わせる"
       },
       {
        id: 2387,
         question: "condolence",
         choices: ["お悔み", "祝賀", "お礼", "賞賛"],
         correctAnswer: "お悔み"
       },
       {
        id: 2388,
         question: "ointment",
         choices: ["軟膏", "粉薬", "注射", "包帯"],
         correctAnswer: "軟膏"
       },
       {
        id: 2389,
         question: "torment",
         choices: ["苦しめる", "喜ばせる", "楽しませる", "慰める"],
         correctAnswer: "苦しめる"
       },
       {
        id: 2390,
         question: "without so much as doing",
         choices: ["さえしないで", "たくさんして", "無理にして", "やりすぎて"],
         correctAnswer: "さえしないで"
       },
       {
        id: 2391,
         question: "infringe on",
         choices: ["侵害する", "強化する", "支配する", "守る"],
         correctAnswer: "侵害する"
       },
       {
        id: 2392,
         question: "cant",
         choices: ["うわべの言葉", "正直な言葉", "感謝の言葉", "賞賛の言葉"],
         correctAnswer: "うわべの言葉"
       },
       {
        id: 2393,
         question: "bran",
         choices: ["ふすま", "小麦粉", "砂糖", "酵母"],
         correctAnswer: "ふすま"
       },
       {
        id: 2394,
         question: "assailant",
         choices: ["加害者", "被害者", "仲裁者", "目撃者"],
         correctAnswer: "加害者"
       },
       {
        id: 2395,
         question: "frugality",
         choices: ["倹約", "浪費", "贅沢", "無駄遣い"],
         correctAnswer: "倹約"
       },
       {
        id: 2396,
         question: "congratulate on",
         choices: ["祝う", "非難する", "隠す", "避ける"],
         correctAnswer: "祝う"
       },
       {
        id: 2397,
         question: "convince A of B",
         choices: ["BについてAを納得させる", "AにBを与える", "AからBを奪う", "BにAを推薦する"],
         correctAnswer: "BについてAを納得させる"
       },
       {
        id: 2398,
         question: "repellent",
         choices: ["虫よけ", "肥料", "消毒液", "染料"],
         correctAnswer: "虫よけ"
       },
       {
        id: 2399,
         question: "thrash",
         choices: ["打ち据える", "抱きしめる", "軽く叩く", "無視する"],
         correctAnswer: "打ち据える"
       },
       {
        id: 2400,
         question: "vouch",
         choices: ["保証する", "否定する", "隠す", "疑う"],
         correctAnswer: "保証する"
       },
       {
        id: 2401,
         question: "be badly off",
         choices: ["貧乏している", "裕福である", "安定している", "余裕がある"],
         correctAnswer: "貧乏している"
       },
       {
        id: 2402,
         question: "carnage",
         choices: ["虐殺", "祝福", "和解", "保護"],
         correctAnswer: "虐殺"
       },
       {
        id: 2403,
         question: "flare up",
         choices: ["急に燃え上がる", "鎮火する", "冷える", "消える"],
         correctAnswer: "急に燃え上がる"
       },
       {
        id: 2404,
         question: "naught",
         choices: ["無価値", "貴重", "重要", "役立つ"],
         correctAnswer: "無価値"
       },
       {
        id: 2405,
         question: "quay",
         choices: ["ふ頭", "橋", "山", "田畑"],
         correctAnswer: "ふ頭"
       },
       {
        id: 2406,
         question: "haphazard",
         choices: ["偶然", "計画的", "確実", "整理された"],
         correctAnswer: "偶然"
       },
       {
        id: 2407,
         question: "calamity",
         choices: ["災害", "平和", "繁栄", "成功"],
         correctAnswer: "災害"
       },
       {
        id: 2408,
         question: "buttocks",
         choices: ["臀部", "手", "足", "頭"],
         correctAnswer: "臀部"
       },
       {
        id: 2409,
         question: "learn by heart",
         choices: ["暗記する", "忘れる", "推測する", "聞くだけにする"],
         correctAnswer: "暗記する"
       },
       {
        id: 2410,
         question: "reiterate",
         choices: ["繰り返し言う", "黙る", "誤解する", "削除する"],
         correctAnswer: "繰り返し言う"
       },
       {
        id: 2411,
         question: "angst",
         choices: ["不安", "喜び", "平静", "希望"],
         correctAnswer: "不安"
       },
       {
        id: 2412,
         question: "pay regard to",
         choices: ["を尊重する", "を無視する", "を軽蔑する", "を非難する"],
         correctAnswer: "を尊重する"
       },
       {
        id: 2413,
         question: "cadre",
         choices: ["幹部集団", "労働者", "初心者", "学者"],
         correctAnswer: "幹部集団"
       },
       {
        id: 2414,
         question: "at the sacrifice of",
         choices: ["の犠牲によって", "の助けを借りて", "の支えを受けて", "の影響で"],
         correctAnswer: "の犠牲によって"
       },
       {
        id: 2415,
         question: "reimburse",
         choices: ["弁償する", "借りる", "盗む", "拒否する"],
         correctAnswer: "弁償する"
       },
       {
        id: 2416,
         question: "expand on",
         choices: ["について詳しく話す", "について要約する", "について触れない", "について省略する"],
         correctAnswer: "について詳しく話す"
       },
       {
        id: 2417,
         question: "just as well",
         choices: ["差し支えない", "悪影響がある", "許されない", "問題がある"],
         correctAnswer: "差し支えない"
       },
       {
        id: 2418,
         question: "twirl",
         choices: ["くるくる回る", "滑る", "止まる", "転ぶ"],
         correctAnswer: "くるくる回る"
       },
       {
        id: 2419,
         question: "in the midst of",
         choices: ["の真っただ中", "の終わりに", "の前に", "の後に"],
         correctAnswer: "の真っただ中"
       },
       {
        id: 2420,
         question: "insomnia",
         choices: ["不眠症", "過眠症", "夢遊病", "睡眠充足"],
         correctAnswer: "不眠症"
       },
       {
        id: 2421,
         question: "consider A as B",
         choices: ["AをBと見なす", "AをBから遠ざける", "AをBと無関係とする", "AをBに変える"],
         correctAnswer: "AをBと見なす"
       },
       {
        id: 2422,
         question: "tell off",
         choices: ["小言を言う", "褒める", "無視する", "祝う"],
         correctAnswer: "小言を言う"
       },
       {
        id: 2423,
         question: "decadence",
         choices: ["退廃", "繁栄", "発展", "改善"],
         correctAnswer: "退廃"
       },
       {
        id: 2424,
         question: "as it happens",
         choices: ["それが起こるとき", "それが終わったとき", "それが失敗したとき", "それが記録されたとき"],
         correctAnswer: "それが起こるとき"
       },
       {
        id: 2425,
         question: "incongruity",
         choices: ["違和感", "調和", "一致", "一貫性"],
         correctAnswer: "違和感"
       },
       {
        id: 2426,
         question: "bring down",
         choices: ["降ろす", "持ち上げる", "守る", "強化する"],
         correctAnswer: "降ろす"
       },
       {
        id: 2427,
         question: "colitis",
         choices: ["大腸炎", "胃炎", "腎炎", "肺炎"],
         correctAnswer: "大腸炎"
       },
       {
        id: 2428,
         question: "and yet",
         choices: ["それなのに", "それゆえに", "それによって", "それとともに"],
         correctAnswer: "それなのに"
       },
       {
        id: 2429,
         question: "protrude",
         choices: ["突き出る", "沈む", "縮む", "へこむ"],
         correctAnswer: "突き出る"
       },
       {
        id: 2430,
         question: "bet on",
         choices: ["に賭ける", "を失う", "を譲る", "を避ける"],
         correctAnswer: "に賭ける"
       },
       {
        id: 2431,
         question: "right off",
         choices: ["すぐに", "ゆっくりと", "慎重に", "長い間"],
         correctAnswer: "すぐに"
       },
       {
        id: 2432,
         question: "squirt",
         choices: ["噴出する", "吸収する", "蒸発する", "凍る"],
         correctAnswer: "噴出する"
       },
       {
        id: 2433,
         question: "interlude",
         choices: ["間奏", "前奏", "後奏", "主旋律"],
         correctAnswer: "間奏"
       },
       {
        id: 2434,
         question: "worlds apart",
         choices: ["別世界の", "似通った", "ほぼ同じ", "一致する"],
         correctAnswer: "別世界の"
       },
       {
        id: 2435,
         question: "pounce",
         choices: ["飛び掛かる", "逃げる", "滑る", "隠れる"],
         correctAnswer: "飛び掛かる"
       },
       {
        id: 2436,
         question: "premonition",
         choices: ["予感", "確信", "忘却", "疑念"],
         correctAnswer: "予感"
       },
       {
        id: 2437,
         question: "bruise",
         choices: ["あざ", "傷", "出血", "発疹"],
         correctAnswer: "あざ"
       },
       {
        id: 2438,
         question: "carve up",
         choices: ["切り分ける", "組み立てる", "隠す", "飾る"],
         correctAnswer: "切り分ける"
       },
       {
        id: 2439,
         question: "doldrums",
         choices: ["無風地帯", "台風地帯", "砂漠", "湿地"],
         correctAnswer: "無風地帯"
       },
       {
        id: 2440,
         question: "illustrate A with B",
         choices: ["BでAを描く", "AでBを消す", "BでAを壊す", "BでAを隠す"],
         correctAnswer: "BでAを描く"
       },
       {
        id: 2441,
         question: "ostracism",
         choices: ["排斥", "受け入れ", "称賛", "感謝"],
         correctAnswer: "排斥"
       },
       {
        id: 2442,
         question: "domicile",
         choices: ["住居", "職場", "倉庫", "市場"],
         correctAnswer: "住居"
       },
       {
        id: 2443,
         question: "consignment",
         choices: ["委託", "購入", "破棄", "寄付"],
         correctAnswer: "委託"
       },
       {
        id: 2444,
         question: "hemp",
         choices: ["麻", "木材", "綿", "シルク"],
         correctAnswer: "麻"
       },
       {
        id: 2445,
         question: "bromide",
         choices: ["臭化物", "酸化物", "硫黄", "炭素"],
         correctAnswer: "臭化物"
       },
       {
        id: 2446,
         question: "beef up",
         choices: ["強化する", "縮小する", "放棄する", "削減する"],
         correctAnswer: "強化する"
       },
       {
        id: 2447,
         question: "reproach A for B",
         choices: ["BのことでAを非難する", "AをBのために称賛する", "AをBのことで支援する", "AをBと比較する"],
         correctAnswer: "BのことでAを非難する"
       },
       {
        id: 2448,
         question: "bronchitis",
         choices: ["気管支炎", "胃炎", "腎炎", "皮膚炎"],
         correctAnswer: "気管支炎"
       },
       {
        id: 2449,
         question: "osteoporosis",
         choices: ["骨粗鬆症", "関節炎", "糖尿病", "肝硬変"],
         correctAnswer: "骨粗鬆症"
       },
       {
        id: 2450,
         question: "take a beating",
         choices: ["負ける", "勝つ", "逃げる", "引き分ける"],
         correctAnswer: "負ける"
       },
       {
        id: 2451,
         question: "boon",
         choices: ["恩恵", "災難", "負担", "危険"],
         correctAnswer: "恩恵"
       },
       {
        id: 2452,
         question: "in one's absence",
         choices: ["不在中に", "出席している間", "帰宅後", "旅行中"],
         correctAnswer: "不在中に"
       },
       {
        id: 2453,
         question: "confetti",
         choices: ["紙吹雪", "花火", "リボン", "風船"],
         correctAnswer: "紙吹雪"
       },
       {
        id: 2454,
         question: "articulation",
         choices: ["調音", "沈黙", "誤発音", "書記"],
         correctAnswer: "調音"
       },
       {
        id: 2455,
         question: "stow",
         choices: ["詰め込む", "取り除く", "磨く", "乾燥させる"],
         correctAnswer: "詰め込む"
       },
       {
        id: 2456,
         question: "debit",
         choices: ["借り方", "貸し方", "現金", "収益"],
         correctAnswer: "借り方"
       },
       {
        id: 2457,
         question: "split the bill",
         choices: ["割り勘をする", "全額払う", "請求を避ける", "割引する"],
         correctAnswer: "割り勘をする"
       },
       {
        id: 2458,
         question: "slip A's mind",
         choices: ["Aがうっかり忘れる", "Aを思い出す", "Aを記録する", "Aを強調する"],
         correctAnswer: "Aがうっかり忘れる"
       },
       {
        id: 2459,
         question: "recompense",
         choices: ["報いる", "罰する", "無視する", "断る"],
         correctAnswer: "報いる"
       },
       {
        id: 2460,
         question: "altercation",
         choices: ["口論", "合意", "協力", "沈黙"],
         correctAnswer: "口論"
       },
       {
        id: 2461,
         question: "chaff",
         choices: ["もみ殻", "米", "小麦粉", "砂糖"],
         correctAnswer: "もみ殻"
       },
       {
        id: 2462,
         question: "compare A with B",
         choices: ["AとBを比較する", "AをBと区別する", "AをBと交換する", "AをBから取り除く"],
         correctAnswer: "AとBを比較する"
       },
       {
        id: 2463,
         question: "profusion",
         choices: ["豊富", "不足", "減少", "貧困"],
         correctAnswer: "豊富"
       },
       {
        id: 2464,
         question: "decorum",
         choices: ["礼儀正しさ", "無礼", "乱暴", "傲慢"],
         correctAnswer: "礼儀正しさ"
       },
       {
        id: 2465,
         question: "fiddle",
         choices: ["バイオリン", "ピアノ", "ドラム", "フルート"],
         correctAnswer: "バイオリン"
       },
       {
        id: 2466,
         question: "in haste",
         choices: ["急いで", "ゆっくりと", "慎重に", "無計画に"],
         correctAnswer: "急いで"
       },
       {
        id: 2467,
         question: "gaunt",
         choices: ["やせこけた", "ふっくらした", "健康的な", "頑丈な"],
         correctAnswer: "やせこけた"
       },
       {
        id: 2468,
         question: "periscope",
         choices: ["潜望鏡", "顕微鏡", "望遠鏡", "双眼鏡"],
         correctAnswer: "潜望鏡"
       },
       {
        id: 2469,
         question: "be destitute of",
         choices: ["に困窮する", "を持ちすぎている", "を必要としない", "を十分に持っている"],
         correctAnswer: "に困窮する"
       },
       {
        id: 2470,
         question: "plod",
         choices: ["とぼとぼ歩く", "駆け抜ける", "飛び跳ねる", "すばやく進む"],
         correctAnswer: "とぼとぼ歩く"
       },
       {
        id: 2471,
         question: "plethora",
         choices: ["過多", "不足", "適量", "軽量"],
         correctAnswer: "過多"
       },
       {
        id: 2472,
         question: "prognosis",
         choices: ["予後", "診断", "治療", "症状"],
         correctAnswer: "予後"
       },
       {
        id: 2473,
         question: "at worst",
         choices: ["最悪の場合", "最高の場合", "通常時", "無関係"],
         correctAnswer: "最悪の場合"
       },
       {
        id: 2474,
         question: "ring a bell",
         choices: ["思い出させる", "驚かせる", "関心を持たせる", "無視する"],
         correctAnswer: "思い出させる"
       },
       {
        id: 2475,
         question: "immersion",
         choices: ["没入", "回避", "集中", "断念"],
         correctAnswer: "没入"
       },
       {
        id: 2476,
         question: "unfurl",
         choices: ["広げる", "折りたたむ", "隠す", "封じる"],
         correctAnswer: "広げる"
       },
       {
        id: 2477,
         question: "chauvinism",
         choices: ["愛国心", "無関心", "利己主義", "反乱"],
         correctAnswer: "愛国心"
       },
       {
        id: 2478,
         question: "plumb",
         choices: ["おもり", "糸", "棒", "測定器"],
         correctAnswer: "おもり"
       },
       {
        id: 2479,
         question: "oneness",
         choices: ["一体感", "分裂", "対立", "孤立"],
         correctAnswer: "一体感"
       },
       {
        id: 2480,
         question: "boil down to",
         choices: ["結局～になる", "増加する", "発展する", "停滞する"],
         correctAnswer: "結局～になる"
       },
       {
        id: 2481,
         question: "embankment",
         choices: ["堤防", "道路", "橋", "壁"],
         correctAnswer: "堤防"
       },
       {
        id: 2482,
         question: "in years",
         choices: ["年間で", "数時間で", "数分で", "一瞬で"],
         correctAnswer: "年間で"
       },
       {
        id: 2483,
         question: "for the benefit of",
         choices: ["のために", "の代わりに", "の影響で", "の邪魔になって"],
         correctAnswer: "のために"
       },
       {
        id: 2484,
         question: "on bail",
         choices: ["保釈中の", "投獄された", "逃亡中の", "服役中の"],
         correctAnswer: "保釈中の"
       },
       {
        id: 2485,
         question: "sleep in",
         choices: ["ゆっくり寝る", "早起きする", "徹夜する", "休まず働く"],
         correctAnswer: "ゆっくり寝る"
       },
       {
        id: 2486,
         question: "itinerary",
         choices: ["旅程", "宿泊施設", "旅行費", "出発地"],
         correctAnswer: "旅程"
       },
       {
        id: 2487,
         question: "alive and well",
         choices: ["健在で", "絶滅して", "失われて", "変化して"],
         correctAnswer: "健在で"
       },
       {
        id: 2488,
         question: "beggar",
         choices: ["乞食", "貴族", "商人", "役人"],
         correctAnswer: "乞食"
       },
       {
        id: 2489,
         question: "welsh",
         choices: ["踏み倒す", "補償する", "与える", "守る"],
         correctAnswer: "踏み倒す"
       },
       {
        id: 2490,
         question: "corroboration",
         choices: ["確証", "疑問", "誤解", "推測"],
         correctAnswer: "確証"
       },
       {
        id: 2491,
         question: "canteen",
         choices: ["売店", "学校", "病院", "工場"],
         correctAnswer: "売店"
       },
       {
        id: 2492,
         question: "furlough",
         choices: ["休暇", "解雇", "昇進", "転職"],
         correctAnswer: "休暇"
       },
       {
        id: 2493,
         question: "step in",
         choices: ["介入する", "退く", "避ける", "譲る"],
         correctAnswer: "介入する"
       },
       {
        id: 2494,
         question: "egalitarian",
         choices: ["平等主義者", "独裁者", "革命家", "保守主義者"],
         correctAnswer: "平等主義者"
       },
       {
        id: 2495,
         question: "take A for granted",
         choices: ["Aを当然と思う", "Aを大切にする", "Aを疑う", "Aを避ける"],
         correctAnswer: "Aを当然と思う"
       },
       {
        id: 2496,
         question: "in so far as",
         choices: ["する限りにおいて", "それにもかかわらず", "それに対して", "その後"],
         correctAnswer: "する限りにおいて"
       },
       {
        id: 2497,
         question: "filibuster",
         choices: ["議事妨害", "投票", "決議", "承認"],
         correctAnswer: "議事妨害"
       },
       {
        id: 2498,
         question: "cavern",
         choices: ["洞窟", "丘", "川", "湖"],
         correctAnswer: "洞窟"
       },
       {
        id: 2499,
         question: "barrow",
         choices: ["手押し車", "荷車", "トラック", "自転車"],
         correctAnswer: "手押し車"
       },
       {
        id: 2500,
         question: "pentagon",
         choices: ["五角形", "四角形", "六角形", "三角形"],
         correctAnswer: "五角形"
       },
       {
        id: 2501,
         question: "neurosis",
         choices: ["神経症", "精神病", "過労", "うつ病"],
         correctAnswer: "神経症"
       },
       {
        id: 2502,
         question: "hegemony",
         choices: ["覇権", "民主主義", "平等", "協調"],
         correctAnswer: "覇権"
       },
       {
        id: 2503,
         question: "propulsion",
         choices: ["推進", "減速", "停止", "遅延"],
         correctAnswer: "推進"
       },
       {
        id: 2504,
         question: "subjugate",
         choices: ["征服する", "解放する", "支援する", "尊重する"],
         correctAnswer: "征服する"
       },
       {
        id: 2505,
         question: "biceps",
         choices: ["上腕二頭筋", "大腿四頭筋", "腹直筋", "僧帽筋"],
         correctAnswer: "上腕二頭筋"
       },
       {
        id: 2506,
         question: "iniquity",
         choices: ["不正", "誠実", "公正", "道徳"],
         correctAnswer: "不正"
       },
       {
        id: 2507,
         question: "succumb to",
         choices: ["に負ける", "に勝つ", "を克服する", "を避ける"],
         correctAnswer: "に負ける"
       },
       {
        id: 2508,
         question: "ransack",
         choices: ["捜しまわる", "整理する", "隠す", "保管する"],
         correctAnswer: "捜しまわる"
       },
       {
        id: 2509,
         question: "tear down",
         choices: ["解体する", "建てる", "補修する", "強化する"],
         correctAnswer: "解体する"
       },
       {
        id: 2510,
         question: "with open arms",
         choices: ["両手を広げて", "慎重に", "無関心に", "冷たく"],
         correctAnswer: "両手を広げて"
       },
       {
        id: 2511,
         question: "under construction",
         choices: ["建設中で", "完成済み", "解体中", "改装中"],
         correctAnswer: "建設中で"
       },
       {
        id: 2512,
         question: "in dispute",
         choices: ["論争中の", "解決済みの", "無関係な", "明確な"],
         correctAnswer: "論争中の"
       },
       {
        id: 2513,
         question: "pan out",
         choices: ["成功する", "失敗する", "避ける", "中止する"],
         correctAnswer: "成功する"
       },
       {
        id: 2514,
         question: "get wet to the skin",
         choices: ["ずぶ濡れになる", "乾燥する", "暑くなる", "冷える"],
         correctAnswer: "ずぶ濡れになる"
       },
       {
        id: 2515,
         question: "recrimination",
         choices: ["非難し返す", "称賛する", "仲裁する", "無視する"],
         correctAnswer: "非難し返す"
       },
       {
        id: 2516,
         question: "encryption",
         choices: ["暗号化", "解読", "削除", "復元"],
         correctAnswer: "暗号化"
       },
       {
        id: 2517,
         question: "true to life",
         choices: ["写実的", "幻想的", "抽象的", "非現実的"],
         correctAnswer: "写実的"
       },
       {
        id: 2518,
         question: "genotype",
         choices: ["遺伝子型", "染色体", "細胞核", "DNA配列"],
         correctAnswer: "遺伝子型"
       },
       {
        id: 2519,
         question: "autism",
         choices: ["自閉症", "躁うつ病", "統合失調症", "過敏症"],
         correctAnswer: "自閉症"
       },
       {
        id: 2520,
         question: "on the subject of",
         choices: ["に関して", "を超えて", "と無関係に", "を避けて"],
         correctAnswer: "に関して"
       },
       {
        id: 2521,
         question: "inquire of",
         choices: ["を問い合わせる", "を断る", "を受け入れる", "を隠す"],
         correctAnswer: "を問い合わせる"
       },
       {
        id: 2522,
         question: "promontory",
         choices: ["岬", "湖", "山", "丘"],
         correctAnswer: "岬"
       },
       {
        id: 2523,
         question: "curio",
         choices: ["骨董品", "新品", "普通の家具", "家庭用品"],
         correctAnswer: "骨董品"
       },
       {
        id: 2524,
         question: "diction",
         choices: ["言い回し", "無言", "書き言葉", "音楽"],
         correctAnswer: "言い回し"
       },
       {
        id: 2525,
         question: "take pains",
         choices: ["苦労する", "怠ける", "楽しむ", "避ける"],
         correctAnswer: "苦労する"
       },
       {
        id: 2526,
         question: "under consideration",
         choices: ["検討中の", "確定した", "終了した", "不可能な"],
         correctAnswer: "検討中の"
       },
       {
        id: 2527,
         question: "esophagus",
         choices: ["食道", "胃", "腎臓", "肝臓"],
         correctAnswer: "食道"
       },
       {
        id: 2528,
         question: "speak well of",
         choices: ["の事を良く言う", "の事を悪く言う", "無視する", "批判する"],
         correctAnswer: "の事を良く言う"
       },
       {
        id: 2529,
         question: "rut",
         choices: ["轍", "谷", "丘", "山頂"],
         correctAnswer: "轍"
       },
       {
        id: 2530,
         question: "hermit",
         choices: ["世捨て人", "社会人", "旅行者", "指導者"],
         correctAnswer: "世捨て人"
       },
       {
        id: 2531,
         question: "lathe",
         choices: ["旋盤", "のこぎり", "ドリル", "プレス機"],
         correctAnswer: "旋盤"
       },
       {
        id: 2532,
         question: "precipice",
         choices: ["絶壁", "丘", "平地", "谷"],
         correctAnswer: "絶壁"
       },
       {
        id: 2533,
         question: "out and about",
         choices: ["出歩いて", "家にこもって", "疲れて", "迷子になって"],
         correctAnswer: "出歩いて"
       },
       {
        id: 2534,
         question: "epitome",
         choices: ["典型", "例外", "失敗", "例示"],
         correctAnswer: "典型"
       },
       {
        id: 2535,
         question: "gait",
         choices: ["歩行", "走行", "跳躍", "停止"],
         correctAnswer: "歩行"
       },
       {
        id: 2536,
         question: "rump",
         choices: ["臀部", "背中", "腕", "頭"],
         correctAnswer: "臀部"
       },
       {
        id: 2537,
         question: "accomplice",
         choices: ["共犯者", "目撃者", "被害者", "警察"],
         correctAnswer: "共犯者"
       },
       {
        id: 2538,
         question: "beyond question",
         choices: ["疑いもなく", "疑わしい", "未確定の", "矛盾した"],
         correctAnswer: "疑いもなく"
       },
       {
        id: 2539,
         question: "exponent",
         choices: ["解説者", "批評家", "作家", "裁判官"],
         correctAnswer: "解説者"
       },
       {
        id: 2540,
         question: "puberty",
         choices: ["思春期", "老年期", "幼年期", "成熟期"],
         correctAnswer: "思春期"
       },
       {
        id: 2541,
         question: "squeak",
         choices: ["きしむ", "滑る", "跳ねる", "砕ける"],
         correctAnswer: "きしむ"
       },
       {
        id: 2542,
         question: "buy out",
         choices: ["買い取る", "売却する", "交渉する", "避ける"],
         correctAnswer: "買い取る"
       },
       {
        id: 2543,
         question: "introspection",
         choices: ["内省", "外見", "観察", "評論"],
         correctAnswer: "内省"
       },
       {
        id: 2544,
         question: "owing to",
         choices: ["のために", "のせいで", "にもかかわらず", "に対して"],
         correctAnswer: "のために"
       },
       {
        id: 2545,
         question: "pick up the pieces",
         choices: ["事態を修復する", "分解する", "放棄する", "破壊する"],
         correctAnswer: "事態を修復する"
       },
       {
        id: 2546,
         question: "fall in with",
         choices: ["と知り合いになる", "と絶交する", "無視する", "対立する"],
         correctAnswer: "と知り合いになる"
       },
       {
        id: 2547,
         question: "crony",
         choices: ["旧友", "敵", "同僚", "上司"],
         correctAnswer: "旧友"
       },
       {
        id: 2548,
         question: "iron out",
         choices: ["解決する", "問題を起こす", "避ける", "混乱させる"],
         correctAnswer: "解決する"
       },
       {
        id: 2549,
         question: "blow in",
         choices: ["突然現れる", "逃げる", "帰る", "飛び立つ"],
         correctAnswer: "突然現れる"
       },
       {
        id: 2550,
         question: "emissary",
         choices: ["密偵", "一般市民", "裁判官", "王"],
         correctAnswer: "密偵"
       },
       {
        id: 2551,
         question: "fable",
         choices: ["寓話", "歴史書", "小説", "記事"],
         correctAnswer: "寓話"
       },
       {
        id: 2552,
         question: "ratification",
         choices: ["批准", "反対", "中止", "無効化"],
         correctAnswer: "批准"
       },
       {
        id: 2553,
         question: "sleep on",
         choices: ["決定を一日延ばす", "すぐ決断する", "忘れる", "拒否する"],
         correctAnswer: "決定を一日延ばす"
       },
       {
        id: 2554,
         question: "fade away",
         choices: ["消えていく", "現れる", "増加する", "復活する"],
         correctAnswer: "消えていく"
       },
       {
        id: 2555,
         question: "pique",
         choices: ["憤慨させる", "喜ばせる", "慰める", "無視する"],
         correctAnswer: "憤慨させる"
       },
       {
        id: 2556,
         question: "gain on",
         choices: ["追い上げる", "遅れる", "放棄する", "縮小する"],
         correctAnswer: "追い上げる"
       },
       {
        id: 2557,
         question: "escapade",
         choices: ["いたずら", "計画", "策略", "対策"],
         correctAnswer: "いたずら"
       },
       {
        id: 2558,
         question: "mischief",
         choices: ["いたずら", "善行", "礼儀", "支援"],
         correctAnswer: "いたずら"
       },
       {
        id: 2559,
         question: "forgery",
         choices: ["偽造", "本物", "真正", "正当性"],
         correctAnswer: "偽造"
       },
       {
        id: 2560,
         question: "in doubt",
         choices: ["疑って", "確信して", "無関心で", "納得して"],
         correctAnswer: "疑って"
       },
       {
        id: 2561,
         question: "take root",
         choices: ["根付く", "消える", "抜ける", "揺れる"],
         correctAnswer: "根付く"
       },
       {
        id: 2562,
         question: "shell out",
         choices: ["支払う", "節約する", "回収する", "拒否する"],
         correctAnswer: "支払う"
       },
       {
        id: 2563,
         question: "whimper",
         choices: ["しくしく泣く", "笑う", "叫ぶ", "無視する"],
         correctAnswer: "しくしく泣く"
       },
       {
        id: 2564,
         question: "rebuttal",
         choices: ["反論", "同意", "質問", "証拠"],
         correctAnswer: "反論"
       },
       {
        id: 2565,
         question: "in a million",
         choices: ["最高の", "一般的な", "平均的な", "無価値な"],
         correctAnswer: "最高の"
       },
       {
        id: 2566,
         question: "pass through",
         choices: ["を通る", "避ける", "停止する", "逃げる"],
         correctAnswer: "を通る"
       },
       {
        id: 2567,
         question: "retract",
         choices: ["撤回する", "強調する", "発表する", "肯定する"],
         correctAnswer: "撤回する"
       },
       {
        id: 2568,
         question: "make for",
         choices: ["へ向かう", "遠ざかる", "無視する", "拒否する"],
         correctAnswer: "へ向かう"
       },
       {
        id: 2569,
         question: "die of",
         choices: ["で死ぬ", "生き残る", "回復する", "助かる"],
         correctAnswer: "で死ぬ"
       },
       {
        id: 2570,
         question: "be devoid of",
         choices: ["を持っていない", "満たされている", "豊富にある", "溢れている"],
         correctAnswer: "を持っていない"
       },
       {
        id: 2571,
         question: "elation",
         choices: ["得意げ", "落胆", "不安", "憂鬱"],
         correctAnswer: "得意げ"
       },
       {
        id: 2572,
         question: "hatchet",
         choices: ["手斧", "のこぎり", "ハンマー", "ナイフ"],
         correctAnswer: "手斧"
       },
       {
        id: 2573,
         question: "infertility",
         choices: ["不妊", "妊娠", "生殖能力", "出産"],
         correctAnswer: "不妊"
       },
       {
        id: 2574,
         question: "provocation",
         choices: ["挑発", "平和", "和解", "鎮静"],
         correctAnswer: "挑発"
       },
       {
        id: 2575,
         question: "high and low",
         choices: ["あらゆる人達", "特定の人々", "富裕層", "貧困層"],
         correctAnswer: "あらゆる人達"
       },
       {
        id: 2576,
         question: "be weary of",
         choices: ["にうんざりしている", "楽しんでいる", "熱心である", "感謝している"],
         correctAnswer: "にうんざりしている"
       },
       {
        id: 2577,
         question: "node",
         choices: ["節", "葉", "茎", "根"],
         correctAnswer: "節"
       },
       {
        id: 2578,
         question: "dune",
         choices: ["砂丘", "山", "川", "谷"],
         correctAnswer: "砂丘"
       },
       {
        id: 2579,
         question: "circumference",
         choices: ["外周", "中心", "直径", "半径"],
         correctAnswer: "外周"
       },
       {
        id: 2580,
         question: "with A start",
         choices: ["はっとして", "のんびりと", "落ち着いて", "慎重に"],
         correctAnswer: "はっとして"
       },
       {
        id: 2581,
         question: "infatuation",
         choices: ["夢中", "無関心", "嫌悪", "冷静"],
         correctAnswer: "夢中"
       },
       {
        id: 2582,
         question: "mulch",
         choices: ["根覆い", "茎", "葉", "枝"],
         correctAnswer: "根覆い"
       },
       {
        id: 2583,
         question: "for life",
         choices: ["一生の", "短期間の", "一時的な", "断続的な"],
         correctAnswer: "一生の"
       },
       {
        id: 2584,
         question: "parson",
         choices: ["牧師", "医者", "教師", "裁判官"],
         correctAnswer: "牧師"
       },
       {
        id: 2585,
         question: "inflict A on B",
         choices: ["BにAを与える", "AをBから奪う", "AをBに求める", "AをBに隠す"],
         correctAnswer: "BにAを与える"
       },
       {
        id: 2586,
         question: "malady",
         choices: ["病気", "健康", "幸福", "平穏"],
         correctAnswer: "病気"
       },
       {
        id: 2587,
         question: "pellet",
         choices: ["小粒", "塊", "粉末", "液体"],
         correctAnswer: "小粒"
       },
       {
        id: 2588,
         question: "oddly enough",
         choices: ["奇妙なことに", "普通のことに", "当然のことに", "無関係なことに"],
         correctAnswer: "奇妙なことに"
       },
       {
        id: 2589,
         question: "transpire",
         choices: ["蒸発する", "凝縮する", "溶ける", "凍る"],
         correctAnswer: "蒸発する"
       },
       {
        id: 2590,
         question: "amity",
         choices: ["親善", "敵意", "競争", "無関心"],
         correctAnswer: "親善"
       },
       {
        id: 2591,
         question: "dichotomy",
         choices: ["二分法", "統一", "混合", "不一致"],
         correctAnswer: "二分法"
       },
       {
        id: 2592,
         question: "in a second",
         choices: ["すぐに", "ゆっくりと", "長時間で", "決して"],
         correctAnswer: "すぐに"
       },
       {
        id: 2593,
         question: "dike",
         choices: ["堤防", "橋", "道路", "川"],
         correctAnswer: "堤防"
       },
       {
        id: 2594,
         question: "nomad",
         choices: ["遊牧民", "定住者", "農民", "労働者"],
         correctAnswer: "遊牧民"
       },
       {
        id: 2595,
         question: "caprice",
         choices: ["気まぐれ", "計画性", "意図", "信念"],
         correctAnswer: "気まぐれ"
       },
       {
        id: 2596,
         question: "recuperate",
         choices: ["回復する", "悪化する", "低下する", "失う"],
         correctAnswer: "回復する"
       },
       {
        id: 2597,
         question: "manipulator",
         choices: ["操縦者", "観察者", "批評家", "無関係者"],
         correctAnswer: "操縦者"
       },
       {
        id: 2598,
         question: "break the news",
         choices: ["悲報を伝える", "良い知らせを伝える", "秘密を守る", "うわさを広める"],
         correctAnswer: "悲報を伝える"
       },
       {
        id: 2599,
         question: "proscribe",
         choices: ["禁ずる", "許可する", "推奨する", "容認する"],
         correctAnswer: "禁ずる"
       },
       {
        id: 2600,
         question: "ethos",
         choices: ["気風", "混乱", "不安", "規則"],
         correctAnswer: "気風"
       },
       {
        id: 2601,
         question: "hole up",
         choices: ["冬眠する", "外出する", "走り回る", "活動する"],
         correctAnswer: "冬眠する"
       },
       {
        id: 2602,
         question: "dung",
         choices: ["糞", "草", "水", "砂"],
         correctAnswer: "糞"
       },
       {
        id: 2603,
         question: "tell A apart",
         choices: ["Aを区別する", "Aを混同する", "Aを無視する", "Aを消す"],
         correctAnswer: "Aを区別する"
       },
       {
        id: 2604,
         question: "orator",
         choices: ["講演者", "聴衆", "作家", "翻訳者"],
         correctAnswer: "講演者"
       },
       {
        id: 2605,
         question: "fission",
         choices: ["分裂", "融合", "消滅", "誕生"],
         correctAnswer: "分裂"
       },
       {
        id: 2606,
         question: "as much as to say",
         choices: ["と言わんばかりに", "無関係に", "明確に", "疑問を持ちながら"],
         correctAnswer: "と言わんばかりに"
       },
       {
        id: 2607,
         question: "resurgence",
         choices: ["復活", "衰退", "終了", "停止"],
         correctAnswer: "復活"
       },
       {
        id: 2608,
         question: "cutback",
         choices: ["削減", "増加", "維持", "改良"],
         correctAnswer: "削減"
       },
       {
        id: 2609,
         question: "forfeit",
         choices: ["没収", "賞与", "寄付", "譲渡"],
         correctAnswer: "没収"
       },
       {
        id: 2610,
         question: "anorexia",
         choices: ["拒食症", "過食症", "食欲旺盛", "健康"],
         correctAnswer: "拒食症"
       },
       {
        id: 2611,
         question: "work off",
         choices: ["徐々に取れる", "蓄積する", "増加する", "抑える"],
         correctAnswer: "徐々に取れる"
       },
       {
        id: 2612,
         question: "aviary",
         choices: ["鳥小屋", "犬小屋", "牛舎", "豚舎"],
         correctAnswer: "鳥小屋"
       },
       {
        id: 2613,
         question: "migraine",
         choices: ["偏頭痛", "腹痛", "咳", "発熱"],
         correctAnswer: "偏頭痛"
       },
       {
        id: 2614,
         question: "crevice",
         choices: ["隙間", "穴", "山", "谷"],
         correctAnswer: "隙間"
       },
       {
        id: 2615,
         question: "quarantine",
         choices: ["隔離", "統合", "釈放", "自由"],
         correctAnswer: "隔離"
       },
       {
        id: 2616,
         question: "raze",
         choices: ["跡形もなく破壊する", "修復する", "保護する", "建設する"],
         correctAnswer: "跡形もなく破壊する"
       },
       {
        id: 2617,
         question: "break into tears",
         choices: ["泣き出す", "笑い出す", "怒る", "驚く"],
         correctAnswer: "泣き出す"
       },
       {
        id: 2618,
         question: "cistern",
         choices: ["貯水槽", "湖", "川", "池"],
         correctAnswer: "貯水槽"
       },
       {
        id: 2619,
         question: "wrest",
         choices: ["もぎ取る", "譲る", "守る", "補強する"],
         correctAnswer: "もぎ取る"
       },
       {
        id: 2620,
         question: "draw into",
         choices: ["引き込む", "押し出す", "避ける", "逃がす"],
         correctAnswer: "引き込む"
       },
       {
        id: 2621,
         question: "innuendo",
         choices: ["暗示", "明言", "発表", "否定"],
         correctAnswer: "暗示"
       },
       {
        id: 2622,
         question: "jubilee",
         choices: ["記念祭", "悲劇", "葬儀", "訓練"],
         correctAnswer: "記念祭"
       },
       {
        id: 2623,
         question: "lagoon",
         choices: ["環礁", "川", "湖", "池"],
         correctAnswer: "環礁"
       },
       {
        id: 2624,
         question: "by dint of",
         choices: ["によって", "にもかかわらず", "と無関係に", "の代わりに"],
         correctAnswer: "によって"
       },
       {
        id: 2625,
         question: "mutiny",
         choices: ["反乱", "従順", "協力", "服従"],
         correctAnswer: "反乱"
       },
       {
        id: 2626,
         question: "rummage",
         choices: ["かき回して探す", "整理する", "保管する", "片付ける"],
         correctAnswer: "かき回して探す"
       },
       {
        id: 2627,
         question: "aperture",
         choices: ["隙間", "壁", "床", "屋根"],
         correctAnswer: "隙間"
       },
       {
        id: 2628,
         question: "in addition to",
         choices: ["に加えて", "の前に", "の後に", "の代わりに"],
         correctAnswer: "に加えて"
       },
       {
        id: 2629,
         question: "take leave of",
         choices: ["と告別する", "歓迎する", "避ける", "拒否する"],
         correctAnswer: "と告別する"
       },
       {
        id: 2630,
         question: "twitter",
         choices: ["さえずる", "叫ぶ", "鳴く", "吠える"],
         correctAnswer: "さえずる"
       },
       {
        id: 2631,
         question: "crash into",
         choices: ["衝突する", "避ける", "逃げる", "飛び立つ"],
         correctAnswer: "衝突する"
       },
       {
        id: 2632,
         question: "amends",
         choices: ["償い", "報復", "罰則", "放棄"],
         correctAnswer: "償い"
       },
       {
        id: 2633,
         question: "billow",
         choices: ["うねり", "静けさ", "安定", "沈黙"],
         correctAnswer: "うねり"
       },
       {
        id: 2634,
         question: "revere",
         choices: ["尊敬する", "軽蔑する", "疑う", "侮辱する"],
         correctAnswer: "尊敬する"
       },
       {
        id: 2635,
         question: "citadel",
         choices: ["城塞", "寺院", "市場", "船舶"],
         correctAnswer: "城塞"
       },
       {
        id: 2636,
         question: "carry over",
         choices: ["持ち越す", "削除する", "短縮する", "忘れる"],
         correctAnswer: "持ち越す"
       },
       {
        id: 2637,
         question: "hearsay",
         choices: ["伝聞", "証拠", "真実", "決定"],
         correctAnswer: "伝聞"
       },
       {
        id: 2638,
         question: "repudiate",
         choices: ["否認する", "認める", "受け入れる", "確定する"],
         correctAnswer: "否認する"
       },
       {
        id: 2639,
         question: "remission",
         choices: ["免除", "義務", "制限", "加重"],
         correctAnswer: "免除"
       },
       {
        id: 2640,
         question: "hedonism",
         choices: ["快楽主義", "禁欲主義", "社会主義", "道徳主義"],
         correctAnswer: "快楽主義"
       },
       {
        id: 2641,
         question: "under cover",
         choices: ["内密に", "公然と", "無関係に", "慎重に"],
         correctAnswer: "内密に"
       },
       {
        id: 2642,
         question: "least of all",
         choices: ["とりわけ", "最も～ない", "普通に", "例外的に"],
         correctAnswer: "とりわけ"
       },
       {
        id: 2643,
         question: "cot",
         choices: ["小屋", "宮殿", "塔", "橋"],
         correctAnswer: "小屋"
       },
       {
        id: 2644,
         question: "denunciation",
         choices: ["非難", "称賛", "擁護", "支持"],
         correctAnswer: "非難"
       },
       {
        id: 2645,
         question: "ascribe A to B",
         choices: ["AをBに帰する", "AをBから分ける", "AをBと比較する", "AをBに隠す"],
         correctAnswer: "AをBに帰する"
       },
       {
        id: 2646,
         question: "make allowance for",
         choices: ["を大目に見る", "を厳しくする", "を排除する", "を避ける"],
         correctAnswer: "を大目に見る"
       },
       {
        id: 2647,
         question: "plaid",
         choices: ["格子柄", "単色", "花柄", "幾何学模様"],
         correctAnswer: "格子柄"
       },
       {
        id: 2648,
         question: "hold still",
         choices: ["止まる", "歩く", "走る", "飛ぶ"],
         correctAnswer: "止まる"
       },
       {
        id: 2649,
         question: "apex",
         choices: ["頂上", "底辺", "中心", "側面"],
         correctAnswer: "頂上"
       },
       {
        id: 2650,
         question: "barley",
         choices: ["大麦", "小麦", "米", "とうもろこし"],
         correctAnswer: "大麦"
       },
       {
        id: 2651,
         question: "claustrophobia",
         choices: ["閉所恐怖症", "高所恐怖症", "広場恐怖症", "社交不安"],
         correctAnswer: "閉所恐怖症"
       },
       {
        id: 2652,
         question: "out of order",
         choices: ["故障中で", "正常に動作する", "改良された", "最新の"],
         correctAnswer: "故障中で"
       },
       {
        id: 2653,
         question: "confederation",
         choices: ["連合", "独立", "対立", "分裂"],
         correctAnswer: "連合"
       },
       {
        id: 2654,
         question: "and the like",
         choices: ["など", "それとは異なる", "例外", "特定のもの"],
         correctAnswer: "など"
       },
       {
        id: 2655,
         question: "ledger",
         choices: ["原簿", "請求書", "契約書", "証明書"],
         correctAnswer: "原簿"
       },
       {
        id: 2656,
         question: "weed out",
         choices: ["取り除く", "増やす", "隠す", "強化する"],
         correctAnswer: "取り除く"
       },
       {
        id: 2657,
         question: "municipality",
         choices: ["自治体", "企業", "銀行", "工場"],
         correctAnswer: "自治体"
       },
       {
        id: 2658,
         question: "pick up the thread",
         choices: ["再び続ける", "終わる", "中止する", "削除する"],
         correctAnswer: "再び続ける"
       },
       {
        id: 2659,
         question: "duchy",
         choices: ["公国", "王国", "共和国", "都市国家"],
         correctAnswer: "公国"
       },
       {
        id: 2660,
         question: "hang over",
         choices: ["持ち越される", "終了する", "拒否される", "忘れられる"],
         correctAnswer: "持ち越される"
       },
       {
        id: 2661,
         question: "moratorium",
         choices: ["猶予", "即決", "執行", "罰則"],
         correctAnswer: "猶予"
       },
       {
        id: 2662,
         question: "kick back",
         choices: ["逆襲する", "逃げる", "隠れる", "放棄する"],
         correctAnswer: "逆襲する"
       },
       {
        id: 2663,
         question: "bile",
         choices: ["胆汁", "血液", "リンパ液", "涙"],
         correctAnswer: "胆汁"
       },
       {
        id: 2664,
         question: "now and again",
         choices: ["時々", "常に", "まったくない", "例外的に"],
         correctAnswer: "時々"
       },
       {
        id: 2665,
         question: "classify A into B",
         choices: ["AをBに分類する", "AをBに統合する", "AをBに分割する", "AをBと混ぜる"],
         correctAnswer: "AをBに分類する"
       },
       {
        id: 2666,
         question: "brute",
         choices: ["畜生", "天才", "勇者", "学者"],
         correctAnswer: "畜生"
       },
       {
        id: 2667,
         question: "out of the picture",
         choices: ["目立たない", "重要である", "中心にいる", "支配的である"],
         correctAnswer: "目立たない"
       },
       {
        id: 2668,
         question: "conservatory",
         choices: ["温室", "図書館", "博物館", "学校"],
         correctAnswer: "温室"
       },
       {
        id: 2669,
         question: "roll in",
         choices: ["たくさん入る", "減少する", "消える", "ゆっくり来る"],
         correctAnswer: "たくさん入る"
       },
       {
        id: 2670,
         question: "eat away",
         choices: ["食い荒らす", "成長する", "保護する", "保存する"],
         correctAnswer: "食い荒らす"
       },
       {
        id: 2671,
         question: "supersede",
         choices: ["取って代わる", "受け入れる", "補助する", "強化する"],
         correctAnswer: "取って代わる"
       },
       {
        id: 2672,
         question: "turn pale",
         choices: ["青ざめる", "赤くなる", "黒くなる", "明るくなる"],
         correctAnswer: "青ざめる"
       },
       {
        id: 2673,
         question: "fluff",
         choices: ["綿毛", "木", "金属", "ガラス"],
         correctAnswer: "綿毛"
       },
       {
        id: 2674,
         question: "at close quarters",
         choices: ["間近に", "遠くから", "適度な距離で", "不明瞭に"],
         correctAnswer: "間近に"
       },
       {
        id: 2675,
         question: "tantalize",
         choices: ["じらす", "喜ばせる", "慰める", "褒める"],
         correctAnswer: "じらす"
       },
       {
        id: 2676,
         question: "tend to",
         choices: ["する傾向がある", "避ける", "拒否する", "停止する"],
         correctAnswer: "する傾向がある"
       },
       {
        id: 2677,
         question: "at the end of the day",
         choices: ["最終的に", "途中で", "予測不能に", "偶然に"],
         correctAnswer: "最終的に"
       },
       {
        id: 2678,
         question: "devolution",
         choices: ["委譲", "独占", "抑制", "否認"],
         correctAnswer: "委譲"
       },
       {
        id: 2679,
         question: "fall behind",
         choices: ["遅れる", "追い越す", "加速する", "支配する"],
         correctAnswer: "遅れる"
       },
       {
        id: 2680,
         question: "pedestal",
         choices: ["台座", "壁", "屋根", "床"],
         correctAnswer: "台座"
       },
       {
        id: 2681,
         question: "reverie",
         choices: ["夢想", "現実", "驚き", "恐怖"],
         correctAnswer: "夢想"
       },
       {
        id: 2682,
         question: "dream on",
         choices: ["夢を見続ける", "現実を受け入れる", "忘れる", "断念する"],
         correctAnswer: "夢を見続ける"
       },
       {
        id: 2683,
         question: "forage",
         choices: ["飼料", "穀物", "野菜", "水"],
         correctAnswer: "飼料"
       },
       {
        id: 2684,
         question: "murmur",
         choices: ["ささやき", "叫び声", "沈黙", "議論"],
         correctAnswer: "ささやき"
       },
       {
        id: 2685,
         question: "panacea",
         choices: ["万能薬", "毒薬", "食品", "ビタミン"],
         correctAnswer: "万能薬"
       },
       {
        id: 2686,
         question: "welter",
         choices: ["転がりまわる", "静止する", "浮かぶ", "飛ぶ"],
         correctAnswer: "転がりまわる"
       },
       {
        id: 2687,
         question: "set at",
         choices: ["評価する", "否定する", "避ける", "忘れる"],
         correctAnswer: "評価する"
       },
       {
        id: 2688,
         question: "consternation",
         choices: ["驚き", "退屈", "怒り", "喜び"],
         correctAnswer: "驚き"
       },
       {
        id: 2689,
         question: "reprieve",
         choices: ["猶予する", "即決する", "制限する", "無視する"],
         correctAnswer: "猶予する"
       },
       {
        id: 2690,
         question: "watch over",
         choices: ["見守る", "攻撃する", "無視する", "忘れる"],
         correctAnswer: "見守る"
       },
       {
        id: 2691,
         question: "presage",
         choices: ["予兆", "説明", "疑念", "解釈"],
         correctAnswer: "予兆"
       },
       {
        id: 2692,
         question: "pore over",
         choices: ["を熟読する", "を無視する", "を避ける", "を削除する"],
         correctAnswer: "を熟読する"
       },
       {
        id: 2693,
         question: "prerequisite",
         choices: ["前提条件", "例外", "補助", "追加条件"],
         correctAnswer: "前提条件"
       },
       {
        id: 2694,
         question: "accolade",
         choices: ["栄誉", "罰則", "無視", "非難"],
         correctAnswer: "栄誉"
       },
       {
        id: 2695,
         question: "chlorine",
         choices: ["塩素", "酸素", "水素", "窒素"],
         correctAnswer: "塩素"
       },
       {
        id: 2696,
         question: "environs",
         choices: ["周辺", "中心", "内部", "遠方"],
         correctAnswer: "周辺"
       },
       {
        id: 2697,
         question: "be reckless of",
         choices: ["を気に掛けない", "を慎重に扱う", "を重視する", "を気にする"],
         correctAnswer: "を気に掛けない"
       },
       {
        id: 2698,
         question: "ligament",
         choices: ["靱帯", "筋肉", "骨", "血管"],
         correctAnswer: "靱帯"
       },
       {
        id: 2699,
         question: "cheat on",
         choices: ["でずるをする", "誠実である", "守る", "信用する"],
         correctAnswer: "でずるをする"
       },
       {
        id: 2700,
         question: "whet",
         choices: ["研ぐ", "磨く", "折る", "削る"],
         correctAnswer: "研ぐ"
       },
       {
        id: 2701,
         question: "avail oneself of",
         choices: ["を利用する", "を避ける", "を忘れる", "を逃す"],
         correctAnswer: "を利用する"
       },
       {
        id: 2702,
         question: "keep down",
         choices: ["身を低くする", "大声を出す", "立ち上がる", "隠れる"],
         correctAnswer: "身を低くする"
       },
       {
        id: 2703,
         question: "crux",
         choices: ["核心", "周辺", "詳細", "疑問"],
         correctAnswer: "核心"
       },
       {
        id: 2704,
         question: "squirm",
         choices: ["身もだえる", "立ち止まる", "歩く", "飛ぶ"],
         correctAnswer: "身もだえる"
       },
       {
        id: 2705,
         question: "canister",
         choices: ["金属容器", "木箱", "ガラス瓶", "プラスチック袋"],
         correctAnswer: "金属容器"
       },
       {
        id: 2706,
         question: "delineation",
         choices: ["輪郭の描写", "削除", "変更", "圧縮"],
         correctAnswer: "輪郭の描写"
       },
       {
        id: 2707,
         question: "pity",
         choices: ["同情", "無関心", "怒り", "疑念"],
         correctAnswer: "同情"
       },
       {
        id: 2708,
         question: "have a clue",
         choices: ["手がかりがある", "見当がつかない", "混乱する", "忘れる"],
         correctAnswer: "手がかりがある"
       },
       {
        id: 2709,
         question: "trifle with",
         choices: ["ぞんざいに扱う", "慎重に扱う", "尊敬する", "分析する"],
         correctAnswer: "ぞんざいに扱う"
       },
       {
        id: 2710,
         question: "avarice",
         choices: ["貪欲", "謙虚", "誠実", "無欲"],
         correctAnswer: "貪欲"
       },
       {
        id: 2711,
         question: "peal",
         choices: ["鐘の響き", "静寂", "叫び声", "足音"],
         correctAnswer: "鐘の響き"
       },
       {
        id: 2712,
         question: "clear away",
         choices: ["取り除く", "散らかす", "蓄積する", "作り直す"],
         correctAnswer: "取り除く"
       },
       {
        id: 2713,
         question: "strip A of B",
         choices: ["AからBを取り去る", "AにBを与える", "AをBに変える", "AとBを組み合わせる"],
         correctAnswer: "AからBを取り去る"
       },
       {
        id: 2714,
         question: "faucet",
         choices: ["蛇口", "排水口", "ポンプ", "バケツ"],
         correctAnswer: "蛇口"
       },
       {
        id: 2715,
         question: "recoil",
         choices: ["後ずさりする", "前進する", "跳ねる", "固まる"],
         correctAnswer: "後ずさりする"
       },
       {
        id: 2716,
         question: "embroidery",
         choices: ["刺繍", "編み物", "染色", "織物"],
         correctAnswer: "刺繍"
       },
       {
        id: 2717,
         question: "run off",
         choices: ["流出する", "溜まる", "吸収する", "蓄積する"],
         correctAnswer: "流出する"
       },
       {
        id: 2718,
         question: "in diameter",
         choices: ["直径で", "半径で", "長さで", "面積で"],
         correctAnswer: "直径で"
       },
       {
        id: 2719,
         question: "lair",
         choices: ["隠れ家", "城", "塔", "市場"],
         correctAnswer: "隠れ家"
       },
       {
        id: 2720,
         question: "poke fun at",
         choices: ["をからかう", "を称賛する", "を無視する", "を避ける"],
         correctAnswer: "をからかう"
       },
       {
        id: 2721,
         question: "lesion",
         choices: ["傷害", "治癒", "健康", "保護"],
         correctAnswer: "傷害"
       },
       {
        id: 2722,
         question: "arbitration",
         choices: ["仲裁", "紛争", "対立", "無視"],
         correctAnswer: "仲裁"
       },
       {
        id: 2723,
         question: "interfere in",
         choices: ["に干渉する", "を尊重する", "を避ける", "を支持する"],
         correctAnswer: "に干渉する"
       },
       {
        id: 2724,
         question: "get past",
         choices: ["のそばを通る", "を追い越す", "を避ける", "を止める"],
         correctAnswer: "のそばを通る"
       },
       {
        id: 2725,
         question: "slacken",
         choices: ["速度を落とす", "速度を上げる", "停止する", "強化する"],
         correctAnswer: "速度を落とす"
       },
       {
        id: 2726,
         question: "go after",
         choices: ["を追いかける", "を避ける", "を無視する", "を諦める"],
         correctAnswer: "を追いかける"
       },
       {
        id: 2727,
         question: "sterilize",
         choices: ["殺菌する", "汚染する", "保存する", "増殖させる"],
         correctAnswer: "殺菌する"
       },
       {
        id: 2728,
         question: "phase out",
         choices: ["段階的に廃止する", "新しく導入する", "急激に変更する", "無視する"],
         correctAnswer: "段階的に廃止する"
       },
       {
        id: 2729,
         question: "attire",
         choices: ["服装", "家具", "装飾", "道具"],
         correctAnswer: "服装"
       },
       {
        id: 2730,
         question: "rouse",
         choices: ["目を覚まさせる", "眠らせる", "静める", "避ける"],
         correctAnswer: "目を覚まさせる"
       },
       {
        id: 2731,
         question: "scowl",
         choices: ["顔をしかめる", "笑う", "無表情でいる", "うなずく"],
         correctAnswer: "顔をしかめる"
       },
       {
        id: 2732,
         question: "connotation",
         choices: ["言外の意味", "明白な意味", "辞書の定義", "翻訳"],
         correctAnswer: "言外の意味"
       },
       {
        id: 2733,
         question: "recluse",
         choices: ["世捨て人", "社交的な人", "指導者", "旅行者"],
         correctAnswer: "世捨て人"
       },
       {
        id: 2734,
         question: "cataclysm",
         choices: ["激変", "停滞", "成長", "改善"],
         correctAnswer: "激変"
       },
       {
        id: 2735,
         question: "conformity",
         choices: ["適合", "反対", "違反", "抵抗"],
         correctAnswer: "適合"
       },
       {
        id: 2736,
         question: "repulse",
         choices: ["追い払う", "受け入れる", "歓迎する", "助ける"],
         correctAnswer: "追い払う"
       },
       {
        id: 2737,
         question: "iris",
         choices: ["虹彩", "網膜", "角膜", "視神経"],
         correctAnswer: "虹彩"
       },
       {
        id: 2738,
         question: "pull into",
         choices: ["引き入れる", "押し出す", "避ける", "離れる"],
         correctAnswer: "引き入れる"
       },
       {
        id: 2739,
         question: "blasphemy",
         choices: ["冒涜", "信仰", "尊敬", "称賛"],
         correctAnswer: "冒涜"
       },
       {
        id: 2740,
         question: "come to a halt",
         choices: ["一旦停止する", "継続する", "加速する", "放棄する"],
         correctAnswer: "一旦停止する"
       },
       {
        id: 2741,
         question: "fiend",
         choices: ["悪魔", "天使", "聖人", "英雄"],
         correctAnswer: "悪魔"
       },
       {
        id: 2742,
         question: "magnate",
         choices: ["有力者", "貧困者", "平民", "無名の人"],
         correctAnswer: "有力者"
       },
       {
        id: 2743,
         question: "muzzle",
         choices: ["鼻口部", "尾", "足", "耳"],
         correctAnswer: "鼻口部"
       },
       {
        id: 2744,
         question: "chivalry",
         choices: ["騎士道", "無法", "暴力", "自由"],
         correctAnswer: "騎士道"
       },
       {
        id: 2745,
         question: "husk",
         choices: ["殻", "種", "果肉", "根"],
         correctAnswer: "殻"
       },
       {
        id: 2746,
         question: "in contrast with",
         choices: ["とは対照的に", "に類似して", "と一致して", "に従って"],
         correctAnswer: "とは対照的に"
       },
       {
        id: 2747,
         question: "matrimony",
         choices: ["結婚", "離婚", "独身", "友情"],
         correctAnswer: "結婚"
       },
       {
        id: 2748,
         question: "prostrate",
         choices: ["腹ばいになった", "立っている", "座っている", "横になっている"],
         correctAnswer: "腹ばいになった"
       },
       {
        id: 2749,
         question: "around the clock",
         choices: ["一日中", "昼間のみ", "夜間のみ", "時々"],
         correctAnswer: "一日中"
       },
       {
        id: 2750,
         question: "wring",
         choices: ["絞る", "拭く", "乾かす", "破る"],
         correctAnswer: "絞る"
       },
       {
        id: 2751,
         question: "adage",
         choices: ["格言", "質問", "冗談", "疑問"],
         correctAnswer: "格言"
       },
       {
        id: 2752,
         question: "matron",
         choices: ["既婚の女性", "未婚の女性", "男性", "子供"],
         correctAnswer: "既婚の女性"
       },
       {
        id: 2753,
         question: "turn out for",
         choices: ["に向かう", "を避ける", "を無視する", "を拒否する"],
         correctAnswer: "に向かう"
       },
       {
        id: 2754,
         question: "divergence",
         choices: ["分岐", "統合", "混合", "一致"],
         correctAnswer: "分岐"
       },
       {
        id: 2755,
         question: "caricature",
         choices: ["風刺画", "肖像画", "風景画", "抽象画"],
         correctAnswer: "風刺画"
       },
       {
        id: 2756,
         question: "entrust A to B",
         choices: ["AをBに委託する", "AをBから取り上げる", "AをBと共有する", "AをBに売る"],
         correctAnswer: "AをBに委託する"
       },
       {
        id: 2757,
         question: "cataract",
         choices: ["瀑布", "湖", "川", "山"],
         correctAnswer: "瀑布"
       },
       {
        id: 2758,
         question: "pay down",
         choices: ["頭金として払う", "借りる", "節約する", "投資する"],
         correctAnswer: "頭金として払う"
       },
       {
        id: 2759,
         question: "seethe",
         choices: ["沸騰する", "冷える", "凍る", "蒸発する"],
         correctAnswer: "沸騰する"
       },
       {
        id: 2760,
         question: "yet again",
         choices: ["再び", "初めて", "滅多に", "決して"],
         correctAnswer: "再び"
       },
       {
        id: 2761,
         question: "armistice",
         choices: ["休戦", "戦争", "紛争", "攻撃"],
         correctAnswer: "休戦"
       },
       {
        id: 2762,
         question: "set forth",
         choices: ["説明する", "隠す", "中止する", "削除する"],
         correctAnswer: "説明する"
       },
       {
        id: 2763,
         question: "incursion",
         choices: ["侵入", "退却", "防御", "撤退"],
         correctAnswer: "侵入"
       },
       {
        id: 2764,
         question: "cryptic",
         choices: ["秘密の", "明確な", "公開された", "目立つ"],
         correctAnswer: "秘密の"
       },
       {
        id: 2765,
         question: "pert",
         choices: ["生意気な", "礼儀正しい", "大人しい", "控えめな"],
         correctAnswer: "生意気な"
       },
       {
        id: 2766,
         question: "agile",
         choices: ["機敏な", "鈍い", "遅い", "弱い"],
         correctAnswer: "機敏な"
       },
       {
        id: 2767,
         question: "insipid",
         choices: ["味のない", "辛い", "甘い", "濃い"],
         correctAnswer: "味のない"
       },
       {
        id: 2768,
         question: "catch A's eye",
         choices: ["Aの目を引く", "Aを無視する", "Aを避ける", "Aを忘れる"],
         correctAnswer: "Aの目を引く"
       },
       {
        id: 2769,
         question: "sleep over",
         choices: ["外泊する", "自宅にいる", "昼寝する", "寝坊する"],
         correctAnswer: "外泊する"
       },
       {
        id: 2770,
         question: "interminable",
         choices: ["果てしない", "短い", "限定された", "区切られた"],
         correctAnswer: "果てしない"
       },
       {
        id: 2771,
         question: "anterior",
         choices: ["前部の", "後部の", "側面の", "中央の"],
         correctAnswer: "前部の"
       },
       {
        id: 2772,
         question: "no sweat",
         choices: ["容易に", "難しく", "苦労して", "複雑に"],
         correctAnswer: "容易に"
       },
       {
        id: 2773,
         question: "legible",
         choices: ["読みやすい", "判読不能な", "細かい", "抽象的な"],
         correctAnswer: "読みやすい"
       },
       {
        id: 2774,
         question: "stench",
         choices: ["悪臭", "香り", "匂い", "香水"],
         correctAnswer: "悪臭"
       },
       {
        id: 2775,
         question: "slough",
         choices: ["ぬかるみ", "砂地", "草原", "岩場"],
         correctAnswer: "ぬかるみ"
       },
       {
        id: 2776,
         question: "inert",
         choices: ["不活性の", "活動的な", "敏捷な", "積極的な"],
         correctAnswer: "不活性の"
       },
       {
        id: 2777,
         question: "saturation",
         choices: ["飽和", "不足", "吸収", "拡散"],
         correctAnswer: "飽和"
       },
       {
        id: 2778,
         question: "put through",
         choices: ["やり遂げる", "中断する", "失敗する", "避ける"],
         correctAnswer: "やり遂げる"
       },
       {
        id: 2779,
         question: "diagonal",
         choices: ["対角線の", "水平の", "垂直の", "曲線の"],
         correctAnswer: "対角線の"
       },
       {
        id: 2780,
         question: "ever since",
         choices: ["それ以来", "それ以前", "たまに", "短期間"],
         correctAnswer: "それ以来"
       },
       {
        id: 2781,
         question: "insolent",
         choices: ["横柄な", "礼儀正しい", "親切な", "謙虚な"],
         correctAnswer: "横柄な"
       },
       {
        id: 2782,
         question: "perfunctory",
         choices: ["形式的な", "徹底的な", "詳細な", "慎重な"],
         correctAnswer: "形式的な"
       },
       {
        id: 2783,
         question: "diffident",
         choices: ["自信のない", "大胆な", "積極的な", "傲慢な"],
         correctAnswer: "自信のない"
       },
       {
        id: 2784,
         question: "screw up",
         choices: ["失敗する", "成功する", "慎重に行う", "向上する"],
         correctAnswer: "失敗する"
       },
       {
        id: 2785,
         question: "haggard",
         choices: ["やつれた", "元気な", "健康的な", "生き生きとした"],
         correctAnswer: "やつれた"
       },
       {
        id: 2786,
         question: "fall on",
         choices: ["降りかかる", "避ける", "通過する", "飛び越える"],
         correctAnswer: "降りかかる"
       },
       {
        id: 2787,
         question: "be applicable to",
         choices: ["に当てはまる", "に当てはまらない", "に無関係", "に反する"],
         correctAnswer: "に当てはまる"
       },
       {
        id: 2788,
         question: "shed light on",
         choices: ["に光を放つ", "に影を落とす", "を隠す", "を誤解する"],
         correctAnswer: "に光を放つ"
       },
       {
        id: 2789,
         question: "whisker",
         choices: ["頬ひげ", "まつ毛", "髪の毛", "爪"],
         correctAnswer: "頬ひげ"
       },
       {
        id: 2790,
         question: "sprig",
         choices: ["小枝", "幹", "葉", "根"],
         correctAnswer: "小枝"
       },
       {
        id: 2791,
         question: "point up",
         choices: ["強調する", "隠す", "誤解する", "ぼやかす"],
         correctAnswer: "強調する"
       },
       {
        id: 2792,
         question: "precipitous",
         choices: ["切り立った", "なだらかな", "低い", "広がった"],
         correctAnswer: "切り立った"
       },
       {
        id: 2793,
         question: "without reserve",
         choices: ["遠慮せず", "慎重に", "控えめに", "曖昧に"],
         correctAnswer: "遠慮せず"
       },
       {
        id: 2794,
         question: "be distinguished for",
         choices: ["名高い", "無名の", "一般的な", "隠された"],
         correctAnswer: "名高い"
       },
       {
        id: 2795,
         question: "demure",
         choices: ["控えめな", "派手な", "積極的な", "騒々しい"],
         correctAnswer: "控えめな"
       },
       {
        id: 2796,
         question: "leave out",
         choices: ["を省略する", "を追加する", "を強調する", "を拡張する"],
         correctAnswer: "を省略する"
       },
       {
        id: 2797,
         question: "judicious",
         choices: ["賢明な", "愚かな", "無計画な", "直感的な"],
         correctAnswer: "賢明な"
       },
       {
        id: 2798,
         question: "obtrusive",
         choices: ["押しつけがましい", "控えめな", "目立たない", "無害な"],
         correctAnswer: "押しつけがましい"
       },
       {
        id: 2799,
         question: "get over with",
         choices: ["を乗り越える", "を避ける", "を諦める", "を延期する"],
         correctAnswer: "を乗り越える"
       },
       {
        id: 2800,
         question: "shin",
         choices: ["すね", "腕", "太もも", "足首"],
         correctAnswer: "すね"
       },
       {
        id: 2801,
         question: "adjust A to B",
         choices: ["AをBに合わせる", "AをBから切り離す", "AをBと交換する", "AをBに無視する"],
         correctAnswer: "AをBに合わせる"
       },
       {
        id: 2802,
         question: "asunder",
         choices: ["バラバラに", "まとまって", "繋がって", "密接に"],
         correctAnswer: "バラバラに"
       },
       {
        id: 2803,
         question: "brittle",
         choices: ["壊れやすい", "頑丈な", "柔軟な", "強固な"],
         correctAnswer: "壊れやすい"
       },
       {
        id: 2804,
         question: "specious",
         choices: ["見掛け倒しの", "本物の", "確実な", "堅実な"],
         correctAnswer: "見掛け倒しの"
       },
       {
        id: 2805,
         question: "sheath",
         choices: ["鞘", "剣", "刃", "柄"],
         correctAnswer: "鞘"
       },
       {
        id: 2806,
         question: "polemic",
         choices: ["論争の", "平和的な", "調和のとれた", "単調な"],
         correctAnswer: "論争の"
       },
       {
        id: 2807,
         question: "write out",
         choices: ["書きつくす", "書き始める", "読む", "翻訳する"],
         correctAnswer: "書きつくす"
       },
       {
        id: 2808,
         question: "furry",
         choices: ["毛皮の", "滑らかな", "固い", "鋭い"],
         correctAnswer: "毛皮の"
       },
       {
        id: 2809,
         question: "smudge",
         choices: ["汚れ", "清潔", "光", "跡"],
         correctAnswer: "汚れ"
       },
       {
        id: 2810,
         question: "buy off",
         choices: ["お金で解決する", "貯金する", "投資する", "交渉する"],
         correctAnswer: "お金で解決する"
       },
       {
        id: 2811,
         question: "jack up",
         choices: ["吊り上げる", "押し下げる", "固定する", "破壊する"],
         correctAnswer: "吊り上げる"
       },
       {
        id: 2812,
         question: "sew up",
         choices: ["縫合する", "切断する", "修理する", "溶接する"],
         correctAnswer: "縫合する"
       },
       {
        id: 2813,
         question: "condescending",
         choices: ["恩着せがましい", "親切な", "公平な", "無関心な"],
         correctAnswer: "恩着せがましい"
       },
       {
        id: 2814,
         question: "copious",
         choices: ["豊富な", "貧しい", "少量の", "限られた"],
         correctAnswer: "豊富な"
       },
       {
        id: 2815,
         question: "talk back to",
         choices: ["に口答えする", "に賛成する", "に従う", "に感謝する"],
         correctAnswer: "に口答えする"
       },
       {
        id: 2816,
         question: "callous",
         choices: ["硬くなった", "柔らかい", "冷たい", "温かい"],
         correctAnswer: "硬くなった"
       },
       {
        id: 2817,
         question: "incandescent",
         choices: ["白熱の", "冷たい", "暗い", "曇った"],
         correctAnswer: "白熱の"
       },
       {
        id: 2818,
         question: "rest on",
         choices: ["に基づく", "を避ける", "を隠す", "を超える"],
         correctAnswer: "に基づく"
       },
       {
        id: 2819,
         question: "tantrum",
         choices: ["かんしゃく", "笑顔", "冷静", "穏やかさ"],
         correctAnswer: "かんしゃく"
       },
       {
        id: 2820,
         question: "an eye for an eye",
         choices: ["目には目を", "許す", "無視する", "逃げる"],
         correctAnswer: "目には目を"
       },
       {
        id: 2821,
         question: "slander",
         choices: ["中傷", "称賛", "評価", "賛辞"],
         correctAnswer: "中傷"
       },
       {
        id: 2822,
         question: "infallible",
         choices: ["間違いのない", "疑わしい", "不確実な", "不完全な"],
         correctAnswer: "間違いのない"
       },
       {
        id: 2823,
         question: "crop up",
         choices: ["突然現れる", "消える", "安定する", "減少する"],
         correctAnswer: "突然現れる"
       },
       {
        id: 2824,
         question: "stallion",
         choices: ["種馬", "子馬", "牝馬", "牛"],
         correctAnswer: "種馬"
       },
       {
        id: 2825,
         question: "ponderous",
         choices: ["重々しい", "軽快な", "速い", "柔軟な"],
         correctAnswer: "重々しい"
       },
       {
        id: 2826,
         question: "shoal",
         choices: ["浅瀬", "深海", "山", "丘"],
         correctAnswer: "浅瀬"
       },
       {
        id: 2827,
         question: "thatch",
         choices: ["わら", "木材", "レンガ", "金属"],
         correctAnswer: "わら"
       },
       {
        id: 2828,
         question: "be apt to",
         choices: ["しがちである", "避ける", "防ぐ", "止める"],
         correctAnswer: "しがちである"
       },
       {
        id: 2829,
         question: "engage in",
         choices: ["に従事する", "から離れる", "を避ける", "を終える"],
         correctAnswer: "に従事する"
       },
       {
        id: 2830,
         question: "soggy",
         choices: ["水浸しの", "乾燥した", "硬い", "冷たい"],
         correctAnswer: "水浸しの"
       },
       {
        id: 2831,
         question: "impassive",
         choices: ["無表情の", "感情豊かな", "怒りっぽい", "楽しそうな"],
         correctAnswer: "無表情の"
       },
       {
        id: 2832,
         question: "tenement",
         choices: ["長屋", "城", "屋敷", "宮殿"],
         correctAnswer: "長屋"
       },
       {
        id: 2833,
         question: "stay put",
         choices: ["元のままで", "移動する", "消える", "変化する"],
         correctAnswer: "元のままで"
       },
       {
        id: 2834,
         question: "give A credit for B",
         choices: ["BについてAを信用する", "AのBを疑う", "BについてAを批判する", "AをBと無関係にする"],
         correctAnswer: "BについてAを信用する"
       },
       {
        id: 2835,
         question: "day in, day out",
         choices: ["毎日毎日", "時々", "一度だけ", "年に一度"],
         correctAnswer: "毎日毎日"
       },
       {
        id: 2836,
         question: "capricious",
         choices: ["気まぐれな", "計画的な", "慎重な", "一貫した"],
         correctAnswer: "気まぐれな"
       },
       {
        id: 2837,
         question: "impertinent",
         choices: ["生意気な", "礼儀正しい", "控えめな", "親切な"],
         correctAnswer: "生意気な"
       },
       {
        id: 2838,
         question: "lateral",
         choices: ["側面の", "上部の", "中央の", "背面の"],
         correctAnswer: "側面の"
       },
       {
        id: 2839,
         question: "hit it off",
         choices: ["仲良くやる", "争う", "誤解する", "無視する"],
         correctAnswer: "仲良くやる"
       },
       {
        id: 2840,
         question: "sieve",
         choices: ["ふるい", "ボウル", "鍋", "容器"],
         correctAnswer: "ふるい"
       },
       {
        id: 2841,
         question: "take offense at",
         choices: ["に怒る", "に感謝する", "に興味を持つ", "を無視する"],
         correctAnswer: "に怒る"
       },
       {
        id: 2842,
         question: "talon",
         choices: ["爪", "羽", "くちばし", "尾"],
         correctAnswer: "爪"
       },
       {
        id: 2843,
         question: "out of hand",
         choices: ["手に負えなくなって", "簡単に処理できる", "問題がない", "整理されている"],
         correctAnswer: "手に負えなくなって"
       },
       {
        id: 2844,
         question: "cranky",
         choices: ["気難しい", "陽気な", "おとなしい", "優しい"],
         correctAnswer: "気難しい"
       },
       {
        id: 2845,
         question: "wash up",
         choices: ["顔や手を洗う", "散らかす", "服を汚す", "寝る"],
         correctAnswer: "顔や手を洗う"
       },
       {
        id: 2846,
         question: "ingenious",
         choices: ["器用な", "不器用な", "鈍感な", "粗雑な"],
         correctAnswer: "器用な"
       },
       {
        id: 2847,
         question: "disheveled",
         choices: ["乱れた", "整った", "清潔な", "新品の"],
         correctAnswer: "乱れた"
       },
       {
        id: 2848,
         question: "renal",
         choices: ["腎臓の", "心臓の", "肺の", "肝臓の"],
         correctAnswer: "腎臓の"
       },
       {
        id: 2849,
         question: "vector",
         choices: ["ベクトル", "三角形", "円", "線"],
         correctAnswer: "ベクトル"
       },
       {
        id: 2850,
         question: "be doomed to",
         choices: ["運命づけられる", "予期しない", "避けられる", "無関係である"],
         correctAnswer: "運命づけられる"
       },
       {
        id: 2851,
         question: "carry off",
         choices: ["運び去る", "置いておく", "放棄する", "持ち込む"],
         correctAnswer: "運び去る"
       },
       {
        id: 2852,
         question: "lucid",
         choices: ["明快な", "曖昧な", "難解な", "混乱した"],
         correctAnswer: "明快な"
       },
       {
        id: 2853,
         question: "go to extremes",
         choices: ["極端に行く", "ほどほどにする", "中立を保つ", "慎重になる"],
         correctAnswer: "極端に行く"
       },
       {
        id: 2854,
         question: "pagan",
         choices: ["異教の", "正統派の", "無神論の", "伝統的な"],
         correctAnswer: "異教の"
       },
       {
        id: 2855,
         question: "trough",
         choices: ["水桶", "井戸", "水道", "湖"],
         correctAnswer: "水桶"
       },
       {
        id: 2856,
         question: "spore",
         choices: ["胞子", "種", "根", "茎"],
         correctAnswer: "胞子"
       },
       {
        id: 2857,
         question: "think better of",
         choices: ["よく考える", "すぐに決める", "見過ごす", "忘れる"],
         correctAnswer: "よく考える"
       },
       {
        id: 2858,
         question: "glaring",
         choices: ["ぎらぎら輝く", "薄暗い", "穏やかな", "曇った"],
         correctAnswer: "ぎらぎら輝く"
       },
       {
        id: 2859,
         question: "ambient",
         choices: ["周囲の", "中心の", "上部の", "内部の"],
         correctAnswer: "周囲の"
       },
       {
        id: 2860,
         question: "intrusive",
         choices: ["煩わしい", "無関係な", "心地よい", "穏やかな"],
         correctAnswer: "煩わしい"
       },
       {
        id: 2861,
         question: "porous",
         choices: ["穴の多い", "滑らかな", "硬い", "防水の"],
         correctAnswer: "穴の多い"
       },
       {
        id: 2862,
         question: "at a premium",
         choices: ["特別に", "標準的に", "通常の価格で", "無料で"],
         correctAnswer: "特別に"
       },
       {
        id: 2863,
         question: "acrid",
         choices: ["刺激的な", "甘い", "柔らかい", "鈍い"],
         correctAnswer: "刺激的な"
       },
       {
        id: 2864,
         question: "under the table",
         choices: ["こっそりと", "公然と", "公式に", "正々堂々と"],
         correctAnswer: "こっそりと"
       },
       {
        id: 2865,
         question: "build out",
         choices: ["構築する", "破壊する", "縮小する", "取り壊す"],
         correctAnswer: "構築する"
       },
       {
        id: 2866,
         question: "egregious",
         choices: ["悪質な", "普通の", "ささいな", "軽微な"],
         correctAnswer: "悪質な"
       },
       {
        id: 2867,
         question: "write off",
         choices: ["すぐに書く", "消去する", "計算する", "署名する"],
         correctAnswer: "すぐに書く"
       },
       {
        id: 2868,
         question: "peevish",
         choices: ["気難しい", "温和な", "陽気な", "無関心な"],
         correctAnswer: "気難しい"
       },
       {
        id: 2869,
         question: "fastidious",
         choices: ["気難しい", "寛大な", "単純な", "軽率な"],
         correctAnswer: "気難しい"
       },
       {
        id: 2870,
         question: "omnivorous",
         choices: ["雑食の", "肉食の", "草食の", "絶食の"],
         correctAnswer: "雑食の"
       },
       {
        id: 2871,
         question: "scruffy",
         choices: ["みすぼらしい", "きちんとした", "清潔な", "豪華な"],
         correctAnswer: "みすぼらしい"
       },
       {
        id: 2872,
         question: "swine",
         choices: ["豚", "牛", "馬", "鳥"],
         correctAnswer: "豚"
       },
       {
        id: 2873,
         question: "kinetic",
         choices: ["運動の", "静止の", "冷却の", "電気の"],
         correctAnswer: "運動の"
       },
       {
        id: 2874,
         question: "cursory",
         choices: ["大ざっぱな", "丁寧な", "詳細な", "慎重な"],
         correctAnswer: "大ざっぱな"
       },
       {
        id: 2875,
         question: "pull the plug",
         choices: ["停止させる", "開始する", "加速する", "強化する"],
         correctAnswer: "停止させる"
       },
       {
        id: 2876,
         question: "rapt",
         choices: ["没頭した", "退屈した", "無関心な", "不満げな"],
         correctAnswer: "没頭した"
       },
       {
        id: 2877,
         question: "surrender to",
         choices: ["に降伏する", "を支配する", "を避ける", "を否定する"],
         correctAnswer: "に降伏する"
       },
       {
        id: 2878,
         question: "slapstick",
         choices: ["ドタバタ喜劇", "悲劇", "歴史劇", "恋愛劇"],
         correctAnswer: "ドタバタ喜劇"
       },
       {
        id: 2879,
         question: "zenith",
         choices: ["頂点", "谷", "底辺", "側面"],
         correctAnswer: "頂点"
       },
       {
        id: 2880,
         question: "to be frank",
         choices: ["率直に言って", "遠回しに言うと", "曖昧に言うと", "控えめに言うと"],
         correctAnswer: "率直に言って"
       },
       {
        id: 2881,
         question: "dilapidated",
         choices: ["老朽化した", "新築の", "綺麗な", "頑丈な"],
         correctAnswer: "老朽化した"
       },
       {
        id: 2882,
         question: "hardy",
         choices: ["丈夫な", "壊れやすい", "もろい", "脆弱な"],
         correctAnswer: "丈夫な"
       },
       {
        id: 2883,
         question: "malevolent",
         choices: ["悪意のある", "善意のある", "無関心な", "優しい"],
         correctAnswer: "悪意のある"
       },
       {
        id: 2884,
         question: "syndicate",
         choices: ["企業連合", "独占企業", "小規模企業", "家族経営"],
         correctAnswer: "企業連合"
       },
       {
        id: 2885,
         question: "tether",
         choices: ["綱", "鎖", "紐", "棒"],
         correctAnswer: "綱"
       },
       {
        id: 2886,
         question: "transgression",
         choices: ["違反", "順守", "規則", "服従"],
         correctAnswer: "違反"
       },
       {
        id: 2887,
         question: "derive from",
         choices: ["から派生する", "に依存する", "を拒否する", "を制限する"],
         correctAnswer: "から派生する"
       },
       {
        id: 2888,
         question: "ostentatious",
         choices: ["派手な", "地味な", "簡素な", "控えめな"],
         correctAnswer: "派手な"
       },
       {
        id: 2889,
         question: "with a vengeance",
         choices: ["すさまじい勢いで", "穏やかに", "緩やかに", "控えめに"],
         correctAnswer: "すさまじい勢いで"
       },
       {
        id: 2890,
         question: "ruddy",
         choices: ["血色の良い", "青白い", "くすんだ", "黒ずんだ"],
         correctAnswer: "血色の良い"
       },
       {
        id: 2891,
         question: "frivolous",
         choices: ["軽薄な", "真面目な", "堅実な", "慎重な"],
         correctAnswer: "軽薄な"
       },
       {
        id: 2892,
         question: "miscellaneous",
         choices: ["雑多な", "統一された", "単純な", "同種の"],
         correctAnswer: "雑多な"
       },
       {
        id: 2893,
         question: "stricture",
         choices: ["非難", "称賛", "無視", "擁護"],
         correctAnswer: "非難"
       },
       {
        id: 2894,
         question: "depraved",
         choices: ["堕落した", "高潔な", "誠実な", "純粋な"],
         correctAnswer: "堕落した"
       },
       {
        id: 2895,
         question: "let off",
         choices: ["降ろす", "拾う", "受け取る", "避ける"],
         correctAnswer: "降ろす"
       },
       {
        id: 2896,
         question: "petite",
         choices: ["小柄な", "大柄な", "普通の", "肥満の"],
         correctAnswer: "小柄な"
       },
       {
        id: 2897,
         question: "end up with",
         choices: ["で終わる", "始まる", "途中で止まる", "避ける"],
         correctAnswer: "で終わる"
       },
       {
        id: 2898,
         question: "kill oneself",
         choices: ["自殺する", "元気になる", "生き生きする", "落ち着く"],
         correctAnswer: "自殺する"
       },
       {
        id: 2899,
         question: "out in the cold",
         choices: ["冷たくされて", "歓迎されて", "仲間入りして", "注目されて"],
         correctAnswer: "冷たくされて"
       },
       {
        id: 2900,
         question: "let on",
         choices: ["漏らす", "隠す", "誇張する", "軽視する"],
         correctAnswer: "漏らす"
       },
       {
        id: 2901,
         question: "susceptibility",
         choices: ["感受性", "鈍感さ", "無関心", "耐性"],
         correctAnswer: "感受性"
       },
       {
        id: 2902,
         question: "abhorrent",
         choices: ["忌まわしい", "魅力的な", "普通の", "楽しい"],
         correctAnswer: "忌まわしい"
       },
       {
        id: 2903,
         question: "dingy",
         choices: ["薄汚い", "輝く", "鮮やかな", "豪華な"],
         correctAnswer: "薄汚い"
       },
       {
        id: 2904,
         question: "exert oneself to",
         choices: ["努力する", "諦める", "手を抜く", "避ける"],
         correctAnswer: "努力する"
       },
       {
        id: 2905,
         question: "zero in on",
         choices: ["に的を絞る", "回避する", "ぼやかす", "変更する"],
         correctAnswer: "に的を絞る"
       },
       {
        id: 2906,
         question: "go nuts",
         choices: ["怒り狂う", "冷静になる", "落ち着く", "無関心になる"],
         correctAnswer: "怒り狂う"
       },
       {
        id: 2907,
         question: "shard",
         choices: ["破片", "全体", "塊", "影"],
         correctAnswer: "破片"
       },
       {
        id: 2908,
         question: "drum up",
         choices: ["呼び集める", "隠す", "分散させる", "拒否する"],
         correctAnswer: "呼び集める"
       },
       {
        id: 2909,
         question: "sprite",
         choices: ["妖精", "悪魔", "幽霊", "巨人"],
         correctAnswer: "妖精"
       },
       {
        id: 2910,
         question: "impetuous",
         choices: ["猛烈な", "穏やかな", "冷静な", "慎重な"],
         correctAnswer: "猛烈な"
       },
       {
        id: 2911,
         question: "bite on",
         choices: ["に真剣に取り組む", "無視する", "放棄する", "忘れる"],
         correctAnswer: "に真剣に取り組む"
       },
       {
        id: 2912,
         question: "noxious",
         choices: ["有害な", "無害な", "役に立つ", "健康的な"],
         correctAnswer: "有害な"
       },
       {
        id: 2913,
         question: "drink in",
         choices: ["吸収する", "拒否する", "吐き出す", "消去する"],
         correctAnswer: "吸収する"
       },
       {
        id: 2914,
         question: "tort",
         choices: ["不法行為", "合法行為", "無罪", "誤解"],
         correctAnswer: "不法行為"
       },
       {
        id: 2915,
         question: "deplorable",
         choices: ["嘆かわしい", "素晴らしい", "楽しい", "喜ばしい"],
         correctAnswer: "嘆かわしい"
       },
       {
        id: 2916,
         question: "sprightly",
         choices: ["快活な", "無気力な", "落ち着いた", "怠惰な"],
         correctAnswer: "快活な"
       },
       {
        id: 2917,
         question: "smack",
         choices: ["ピシャリと打つこと", "軽く触れる", "避ける", "抑える"],
         correctAnswer: "ピシャリと打つこと"
       },
       {
        id: 2918,
         question: "gullible",
         choices: ["騙されやすい", "用心深い", "疑い深い", "理性的な"],
         correctAnswer: "騙されやすい"
       },
       {
        id: 2919,
         question: "facetious",
         choices: ["ふざけた", "真剣な", "礼儀正しい", "厳粛な"],
         correctAnswer: "ふざけた"
       },
       {
        id: 2920,
         question: "boil over",
         choices: ["沸騰してこぼれる", "冷める", "固まる", "落ち着く"],
         correctAnswer: "沸騰してこぼれる"
       },
       {
        id: 2921,
         question: "tenancy",
         choices: ["借地権", "所有権", "使用権", "契約"],
         correctAnswer: "借地権"
       },
       {
        id: 2922,
         question: "be incongruous with",
         choices: ["と矛盾する", "と一致する", "と調和する", "と無関係"],
         correctAnswer: "と矛盾する"
       },
       {
        id: 2923,
         question: "ostensible",
         choices: ["表向きの", "本当の", "秘密の", "不明確な"],
         correctAnswer: "表向きの"
       },
       {
        id: 2924,
         question: "go into effect",
         choices: ["発行される", "中止される", "延期される", "終了する"],
         correctAnswer: "発行される"
       },
       {
        id: 2925,
         question: "so as to",
         choices: ["するように", "しないように", "回避するために", "無関係に"],
         correctAnswer: "するように"
       },
       {
        id: 2926,
         question: "bear down",
         choices: ["圧迫する", "引き下げる", "避ける", "支える"],
         correctAnswer: "圧迫する"
       },
       {
        id: 2927,
         question: "seldom if ever",
         choices: ["めったにしない", "頻繁にする", "時々する", "必ずする"],
         correctAnswer: "めったにしない"
       },
       {
        id: 2928,
         question: "antarctic",
         choices: ["南極の", "北極の", "赤道の", "温帯の"],
         correctAnswer: "南極の"
       },
       {
        id: 2929,
         question: "plenary",
         choices: ["最大限の", "部分的な", "縮小された", "制限のある"],
         correctAnswer: "最大限の"
       },
       {
        id: 2930,
         question: "sedentary",
         choices: ["座りがちな", "活動的な", "歩き回る", "外出の多い"],
         correctAnswer: "座りがちな"
       },
       {
        id: 2931,
         question: "hear out",
         choices: ["最後まで聞く", "途中で遮る", "誤解する", "話をやめる"],
         correctAnswer: "最後まで聞く"
       },
       {
        id: 2932,
         question: "rumor has it that",
         choices: ["噂によると", "確実に", "正式に", "科学的に"],
         correctAnswer: "噂によると"
       },
       {
        id: 2933,
         question: "chaste",
         choices: ["純潔な", "不道徳な", "軽薄な", "無礼な"],
         correctAnswer: "純潔な"
       },
       {
        id: 2934,
         question: "fish for",
         choices: ["聞き出す", "与える", "隠す", "誤解する"],
         correctAnswer: "聞き出す"
       },
       {
        id: 2935,
         question: "anthropological",
         choices: ["人類学の", "動物学の", "社会学の", "物理学の"],
         correctAnswer: "人類学の"
       },
       {
        id: 2936,
         question: "by coincidence",
         choices: ["偶然に", "必然的に", "計画的に", "意図的に"],
         correctAnswer: "偶然に"
       },
       {
        id: 2937,
         question: "equestrian",
         choices: ["馬術の", "航海の", "飛行の", "登山の"],
         correctAnswer: "馬術の"
       },
       {
        id: 2938,
         question: "omniscient",
         choices: ["全知の", "無知の", "部分的に知っている", "特定の知識を持つ"],
         correctAnswer: "全知の"
       },
       {
        id: 2939,
         question: "solvent",
         choices: ["溶媒", "固体", "気体", "金属"],
         correctAnswer: "溶媒"
       },
       {
        id: 2940,
         question: "topography",
         choices: ["地形学", "気象学", "生物学", "宇宙学"],
         correctAnswer: "地形学"
       },
       {
        id: 2941,
         question: "buck for",
         choices: ["得ようと努める", "拒否する", "無視する", "放棄する"],
         correctAnswer: "得ようと努める"
       },
       {
        id: 2942,
         question: "lusty",
         choices: ["元気な", "疲れた", "弱々しい", "無気力な"],
         correctAnswer: "元気な"
       },
       {
        id: 2943,
         question: "kick out",
         choices: ["追い出す", "迎え入れる", "無視する", "保護する"],
         correctAnswer: "追い出す"
       },
       {
        id: 2944,
         question: "vulgarity",
         choices: ["下品", "上品", "洗練", "優雅"],
         correctAnswer: "下品"
       },
       {
        id: 2945,
         question: "pedantic",
         choices: ["学者ぶった", "無知な", "素朴な", "実用的な"],
         correctAnswer: "学者ぶった"
       },
       {
        id: 2946,
         question: "set A apart",
         choices: ["Aを離す", "Aを結びつける", "Aを統合する", "Aを拡大する"],
         correctAnswer: "Aを離す"
       },
       {
        id: 2947,
         question: "prodigal",
         choices: ["浪費した", "倹約する", "節約する", "貧乏な"],
         correctAnswer: "浪費した"
       },
       {
        id: 2948,
         question: "make do with",
         choices: ["で間に合わせる", "手放す", "避ける", "強化する"],
         correctAnswer: "で間に合わせる"
       },
       {
        id: 2949,
         question: "wad",
         choices: ["柔らかい塊", "固い塊", "液体", "気体"],
         correctAnswer: "柔らかい塊"
       },
       {
        id: 2950,
         question: "fraught",
         choices: ["いっぱいの", "空っぽの", "少量の", "軽微な"],
         correctAnswer: "いっぱいの"
       },
       {
        id: 2951,
         question: "do A harm",
         choices: ["Aに害を及ぼす", "Aを助ける", "Aを強化する", "Aを保護する"],
         correctAnswer: "Aに害を及ぼす"
       },
       {
        id: 2952,
         question: "somber",
         choices: ["憂鬱な", "陽気な", "明るい", "快活な"],
         correctAnswer: "憂鬱な"
       },
       {
        id: 2953,
         question: "flabby",
         choices: ["たるんだ", "引き締まった", "硬い", "強固な"],
         correctAnswer: "たるんだ"
       },
       {
        id: 2954,
         question: "quarrel with",
         choices: ["とけんかする", "と仲良くする", "と協力する", "と合意する"],
         correctAnswer: "とけんかする"
       },
       {
        id: 2955,
         question: "scruple",
         choices: ["良心の呵責", "冷酷さ", "無関心", "無神経さ"],
         correctAnswer: "良心の呵責"
       },
       {
        id: 2956,
         question: "pensive",
         choices: ["物思いに沈んだ", "無邪気な", "明るい", "軽率な"],
         correctAnswer: "物思いに沈んだ"
       },
       {
        id: 2957,
         question: "primordial",
         choices: ["原始的な", "最新の", "進化した", "複雑な"],
         correctAnswer: "原始的な"
       },
       {
        id: 2958,
         question: "spurious",
         choices: ["偽の", "本物の", "信頼できる", "真正の"],
         correctAnswer: "偽の"
       },
       {
        id: 2959,
         question: "immaterial",
         choices: ["重要でない", "重要な", "決定的な", "必要不可欠な"],
         correctAnswer: "重要でない"
       },
       {
        id: 2960,
         question: "sediment",
         choices: ["堆積物", "気体", "液体", "結晶"],
         correctAnswer: "堆積物"
       },
       {
        id: 2961,
         question: "bottom out",
         choices: ["底をつく", "上昇する", "加速する", "成長する"],
         correctAnswer: "底をつく"
       },
       {
        id: 2962,
         question: "cast away",
         choices: ["投げ捨てる", "拾う", "保管する", "修復する"],
         correctAnswer: "投げ捨てる"
       },
       {
        id: 2963,
         question: "ancillary",
         choices: ["付属の", "主要な", "独立した", "主流の"],
         correctAnswer: "付属の"
       },
       {
        id: 2964,
         question: "feeble",
         choices: ["弱々しい", "強い", "頑丈な", "活発な"],
         correctAnswer: "弱々しい"
       },
       {
        id: 2965,
         question: "sonic",
         choices: ["音の", "光の", "電気の", "熱の"],
         correctAnswer: "音の"
       },
       {
        id: 2966,
         question: "stenographer",
         choices: ["速記者", "編集者", "作家", "翻訳者"],
         correctAnswer: "速記者"
       },
       {
        id: 2967,
         question: "put up at",
         choices: ["に泊まる", "に到着する", "から出発する", "を避ける"],
         correctAnswer: "に泊まる"
       },
       {
        id: 2968,
         question: "hoarse",
         choices: ["しわがれ声の", "滑らかな声の", "高音の", "響く声の"],
         correctAnswer: "しわがれ声の"
       },
       {
        id: 2969,
         question: "a bunch of",
         choices: ["たくさんの", "少量の", "単数の", "限定的な"],
         correctAnswer: "たくさんの"
       },
       {
        id: 2970,
         question: "opinionated",
         choices: ["頑固な", "柔軟な", "開放的な", "適応力のある"],
         correctAnswer: "頑固な"
       },
       {
        id: 2971,
         question: "be distinct from",
         choices: ["とは異なっている", "と同じ", "と融合している", "と無関係"],
         correctAnswer: "とは異なっている"
       },
       {
        id: 2972,
         question: "emeritus",
         choices: ["名誉の", "現職の", "退職の", "無関係の"],
         correctAnswer: "名誉の"
       },
       {
        id: 2973,
         question: "canonical",
         choices: ["正規の", "非公式の", "疑わしい", "間違った"],
         correctAnswer: "正規の"
       },
       {
        id: 2974,
         question: "in consequence",
         choices: ["結果として", "原因として", "偶然に", "無関係に"],
         correctAnswer: "結果として"
       },
       {
        id: 2975,
         question: "xenophobia",
         choices: ["外国人恐怖症", "多文化共生", "寛容さ", "友好関係"],
         correctAnswer: "外国人恐怖症"
       },
       {
        id: 2976,
         question: "senile",
         choices: ["老年の", "若年の", "未成年の", "成熟した"],
         correctAnswer: "老年の"
       },
       {
        id: 2977,
         question: "spruce",
         choices: ["気の利いた", "だらしない", "ぼんやりした", "無関心な"],
         correctAnswer: "気の利いた"
       },
       {
        id: 2978,
         question: "make haste",
         choices: ["急ぐ", "遅れる", "落ち着く", "避ける"],
         correctAnswer: "急ぐ"
       },
       {
        id: 2979,
         question: "pharmaceutical",
         choices: ["医薬品の", "建築の", "電気の", "機械の"],
         correctAnswer: "医薬品の"
       },
       {
        id: 2980,
         question: "first and last",
         choices: ["総じて", "例外として", "特定の場合のみ", "個別に"],
         correctAnswer: "総じて"
       },
       {
        id: 2981,
         question: "in disguise",
         choices: ["変装した", "本物の", "正体を現した", "そのままの姿で"],
         correctAnswer: "変装した"
       },
       {
        id: 2982,
         question: "tummy",
         choices: ["おなか", "頭", "足", "腕"],
         correctAnswer: "おなか"
       },
       {
        id: 2983,
         question: "seismic",
         choices: ["地震の", "気象の", "水圧の", "火山の"],
         correctAnswer: "地震の"
       },
       {
        id: 2984,
         question: "petulant",
         choices: ["拗ねた", "陽気な", "楽観的な", "控えめな"],
         correctAnswer: "拗ねた"
       },
       {
        id: 2985,
         question: "privy",
         choices: ["内情に通じた", "無関係な", "外部の", "秘密の"],
         correctAnswer: "内情に通じた"
       },
       {
        id: 2986,
         question: "upholstery",
         choices: ["室内装飾", "建築資材", "服飾", "美術品"],
         correctAnswer: "室内装飾"
       },
       {
        id: 2987,
         question: "ecstatic",
         choices: ["夢中の", "退屈な", "冷静な", "無関心な"],
         correctAnswer: "夢中の"
       },
       {
        id: 2988,
         question: "sap",
         choices: ["樹液", "根", "葉", "幹"],
         correctAnswer: "樹液"
       },
       {
        id: 2989,
         question: "incredulous",
         choices: ["疑い深い", "信じやすい", "素直な", "確信している"],
         correctAnswer: "疑い深い"
       },
       {
        id: 2990,
         question: "to excess",
         choices: ["過剰に", "適度に", "不足して", "最小限に"],
         correctAnswer: "過剰に"
       },
       {
        id: 2991,
         question: "pungent",
         choices: ["舌や鼻を刺激する", "甘い", "無味の", "無臭の"],
         correctAnswer: "舌や鼻を刺激する"
       },
       {
        id: 2992,
         question: "scuffle",
         choices: ["乱闘", "議論", "討論", "和解"],
         correctAnswer: "乱闘"
       },
       {
        id: 2993,
         question: "for real",
         choices: ["本物の", "偽物の", "仮想の", "模造の"],
         correctAnswer: "本物の"
       },
       {
        id: 2994,
         question: "wipe out",
         choices: ["を一掃する", "を修復する", "を保存する", "を隠す"],
         correctAnswer: "を一掃する"
       },
       {
        id: 2995,
         question: "drink to",
         choices: ["を祝って飲む", "を批判する", "を避ける", "を拒否する"],
         correctAnswer: "を祝って飲む"
       },
       {
        id: 2996,
         question: "garish",
         choices: ["飾り立てた", "地味な", "洗練された", "控えめな"],
         correctAnswer: "飾り立てた"
       },
       {
        id: 2997,
         question: "reciprocal",
         choices: ["相互の", "一方的な", "対照的な", "無関係な"],
         correctAnswer: "相互の"
       },
       {
        id: 2998,
         question: "languid",
         choices: ["だるい", "活発な", "元気な", "俊敏な"],
         correctAnswer: "だるい"
       },
       {
        id: 2999,
         question: "despotic",
         choices: ["専制的な", "民主的な", "協力的な", "優しい"],
         correctAnswer: "専制的な"
       },
       {
        id: 3000,
         question: "come away",
         choices: ["から離れていく", "近づく", "くっつく", "融合する"],
         correctAnswer: "から離れていく"
       },
       {
        id: 3001,
         question: "nonchalant",
         choices: ["無関心な", "熱心な", "敏感な", "興奮した"],
         correctAnswer: "無関心な"
       },
       {
        id: 3002,
         question: "bashful",
         choices: ["内気な", "大胆な", "図々しい", "陽気な"],
         correctAnswer: "内気な"
       },
       {
        id: 3003,
         question: "brusque",
         choices: ["無愛想な", "親切な", "丁寧な", "礼儀正しい"],
         correctAnswer: "無愛想な"
       },
       {
        id: 3004,
         question: "spit it out",
         choices: ["白状する", "黙る", "誤魔化す", "隠す"],
         correctAnswer: "白状する"
       },
       {
        id: 3005,
         question: "serum",
         choices: ["血清", "赤血球", "白血球", "骨髄"],
         correctAnswer: "血清"
       },
       {
        id: 3006,
         question: "veterinarian",
         choices: ["獣医", "医師", "薬剤師", "研究者"],
         correctAnswer: "獣医"
       },
       {
        id: 3007,
         question: "sluice",
         choices: ["水門", "川", "湖", "滝"],
         correctAnswer: "水門"
       },
       {
        id: 3008,
         question: "take the plunge",
         choices: ["思い切ってやる", "躊躇する", "避ける", "後悔する"],
         correctAnswer: "思い切ってやる"
       },
       {
        id: 3009,
         question: "hazy",
         choices: ["霞んだ", "晴れた", "明瞭な", "鮮やかな"],
         correctAnswer: "霞んだ"
       },
       {
        id: 3010,
         question: "jovial",
         choices: ["陽気な", "陰気な", "落ち着いた", "怒りっぽい"],
         correctAnswer: "陽気な"
       },
       {
        id: 3011,
         question: "bear the brunt of",
         choices: ["の矢面に立つ", "を避ける", "を支配する", "を助長する"],
         correctAnswer: "の矢面に立つ"
       },
       {
        id: 3012,
         question: "rise and fall",
         choices: ["上下する", "固定される", "消える", "拡大する"],
         correctAnswer: "上下する"
       },
       {
        id: 3013,
         question: "tentacle",
         choices: ["触手", "鱗", "羽", "爪"],
         correctAnswer: "触手"
       },
       {
        id: 3014,
         question: "be liable to",
         choices: ["責任がある", "自由である", "免除される", "無関係である"],
         correctAnswer: "責任がある"
       },
       {
        id: 3015,
         question: "be in for",
         choices: ["に直面しそうな", "を避ける", "を楽しむ", "を支配する"],
         correctAnswer: "に直面しそうな"
       },
       {
        id: 3016,
         question: "effervescent",
         choices: ["発泡性の", "沈殿する", "無気泡の", "固体の"],
         correctAnswer: "発泡性の"
       },
       {
        id: 3017,
         question: "sedate",
         choices: ["落ち着いた", "興奮した", "激しい", "不安な"],
         correctAnswer: "落ち着いた"
       },
       {
        id: 3018,
         question: "perpendicular",
         choices: ["直立した", "傾いた", "曲がった", "水平な"],
         correctAnswer: "直立した"
       },
       {
        id: 3019,
         question: "think much of",
         choices: ["を尊重する", "を軽視する", "を無視する", "を批判する"],
         correctAnswer: "を尊重する"
       },
       {
        id: 3020,
         question: "on the occasion of",
         choices: ["に際して", "の前に", "の後に", "の代わりに"],
         correctAnswer: "に際して"
       },
       {
        id: 3021,
         question: "thimble",
         choices: ["指ぬき", "針", "糸", "ボタン"],
         correctAnswer: "指ぬき"
       },
       {
        id: 3022,
         question: "clerical",
         choices: ["事務職の", "肉体労働の", "芸術的な", "科学的な"],
         correctAnswer: "事務職の"
       },
       {
        id: 3023,
         question: "on hand",
         choices: ["近くに", "遠くに", "未確認で", "消失して"],
         correctAnswer: "近くに"
       },
       {
        id: 3024,
         question: "put it briefly",
         choices: ["簡単に言うと", "長々と説明すると", "曖昧にすると", "省略せずに言うと"],
         correctAnswer: "簡単に言うと"
       },
       {
        id: 3025,
         question: "tang",
         choices: ["ぴりっとした味", "甘い味", "無味", "滑らかな味"],
         correctAnswer: "ぴりっとした味"
       },
       {
        id: 3026,
         question: "be disappointed at",
         choices: ["にがっかりして", "に満足して", "に驚いて", "に熱中して"],
         correctAnswer: "にがっかりして"
       },
       {
        id: 3027,
         question: "all thumbs",
         choices: ["手先が不器用な", "器用な", "上手な", "経験豊富な"],
         correctAnswer: "手先が不器用な"
       },
       {
        id: 3028,
         question: "spire",
         choices: ["尖塔", "門", "橋", "城"],
         correctAnswer: "尖塔"
       },
       {
        id: 3029,
         question: "arable",
         choices: ["耕作可能な", "不毛な", "砂漠の", "岩だらけの"],
         correctAnswer: "耕作可能な"
       },
       {
        id: 3030,
         question: "convict of",
         choices: ["で有罪判決とする", "で無罪とする", "を免除する", "を釈放する"],
         correctAnswer: "で有罪判決とする"
       },
       {
        id: 3031,
         question: "associate with",
         choices: ["と関連付ける", "と切り離す", "と敵対する", "と無関係である"],
         correctAnswer: "と関連付ける"
       },
       {
        id: 3032,
         question: "uterus",
         choices: ["子宮", "肺", "腎臓", "胃"],
         correctAnswer: "子宮"
       },
       {
        id: 3033,
         question: "slovenly",
         choices: ["だらしない", "きちんとした", "整然とした", "清潔な"],
         correctAnswer: "だらしない"
       },
       {
        id: 3034,
         question: "make an end of",
         choices: ["で済ませる", "始める", "継続する", "拡大する"],
         correctAnswer: "で済ませる"
       },
       {
        id: 3035,
         question: "omnipotent",
         choices: ["全能の", "無力な", "部分的に強い", "特定の力を持つ"],
         correctAnswer: "全能の"
       },
       {
        id: 3036,
         question: "smallpox",
         choices: ["天然痘", "インフルエンザ", "麻疹", "風疹"],
         correctAnswer: "天然痘"
       },
       {
        id: 3037,
         question: "close call",
         choices: ["間一髪", "確実な勝利", "完全な失敗", "安定した状況"],
         correctAnswer: "間一髪"
       },
       {
        id: 3038,
         question: "synopsis",
         choices: ["あらすじ", "詳細な説明", "完全版", "未公開部分"],
         correctAnswer: "あらすじ"
       },
       {
        id: 3039,
         question: "turnpike",
         choices: ["有料高速道路", "歩道", "鉄道", "橋"],
         correctAnswer: "有料高速道路"
       },
       {
        id: 3040,
         question: "litigant",
         choices: ["係争中の", "勝訴した", "敗訴した", "和解した"],
         correctAnswer: "係争中の"
       },
       {
        id: 3041,
         question: "tandem",
         choices: ["縦に並んで", "横に並んで", "一列に", "混在して"],
         correctAnswer: "縦に並んで"
       },
       {
        id: 3042,
         question: "be faithful to",
         choices: ["に忠義を尽くす", "を裏切る", "を軽視する", "を無視する"],
         correctAnswer: "に忠義を尽くす"
       },
       {
        id: 3043,
         question: "be prone to",
         choices: ["する傾向がある", "しない傾向がある", "無関係である", "避ける"],
         correctAnswer: "する傾向がある"
       },
       {
        id: 3044,
         question: "insurmountable",
         choices: ["乗り越えられない", "簡単に克服できる", "無関係な", "軽視できる"],
         correctAnswer: "乗り越えられない"
       },
       {
        id: 3045,
         question: "despondent",
         choices: ["落胆した", "喜んでいる", "冷静な", "無関心な"],
         correctAnswer: "落胆した"
       },
       {
        id: 3046,
         question: "hold on to",
         choices: ["にすがりつく", "を手放す", "を避ける", "を軽視する"],
         correctAnswer: "にすがりつく"
       },
       {
        id: 3047,
         question: "plaintive",
         choices: ["哀れな", "喜ばしい", "力強い", "陽気な"],
         correctAnswer: "哀れな"
       },
       {
        id: 3048,
         question: "volition",
         choices: ["意志", "感情", "無関心", "運命"],
         correctAnswer: "意志"
       },
       {
        id: 3049,
         question: "stare at",
         choices: ["をじっと見つめる", "を無視する", "を避ける", "をそらす"],
         correctAnswer: "をじっと見つめる"
       },
       {
        id: 3050,
         question: "tear off",
         choices: ["引きちぎる", "くっつける", "修理する", "整える"],
         correctAnswer: "引きちぎる"
       },
       {
        id: 3051,
         question: "sacrilegious",
         choices: ["罰当たりの", "神聖な", "敬虔な", "無関係な"],
         correctAnswer: "罰当たりの"
       },
       {
        id: 3052,
         question: "ephemeral",
         choices: ["はかない", "永続する", "強固な", "重要な"],
         correctAnswer: "はかない"
       },
       {
        id: 3053,
         question: "urn",
         choices: ["骨壷", "花瓶", "杯", "鉢"],
         correctAnswer: "骨壷"
       },
       {
        id: 3054,
         question: "come in contact with",
         choices: ["と接触する", "を避ける", "と無関係である", "を監視する"],
         correctAnswer: "と接触する"
       },
       {
        id: 3055,
         question: "up in the air",
         choices: ["漠然とした", "明確な", "確実な", "固定された"],
         correctAnswer: "漠然とした"
       },
       {
        id: 3056,
         question: "onerous",
         choices: ["厄介な", "簡単な", "楽な", "気軽な"],
         correctAnswer: "厄介な"
       },
       {
        id: 3057,
         question: "docile",
         choices: ["扱いやすい", "頑固な", "強情な", "手に負えない"],
         correctAnswer: "扱いやすい"
       },
       {
        id: 3058,
         question: "oblique",
         choices: ["斜めの", "直立した", "水平の", "曲がった"],
         correctAnswer: "斜めの"
       },
       {
        id: 3059,
         question: "touch off",
         choices: ["発射させる", "停止する", "中断する", "放棄する"],
         correctAnswer: "発射させる"
       },
       {
        id: 3060,
         question: "thesaurus",
         choices: ["知識の宝庫", "辞書", "百科事典", "物理法則"],
         correctAnswer: "知識の宝庫"
       },
       {
        id: 3061,
         question: "in a passion",
         choices: ["情熱を持って", "冷静に", "無関心に", "慎重に"],
         correctAnswer: "情熱を持って"
       },
       {
        id: 3062,
         question: "furtive",
         choices: ["こそこそした", "堂々とした", "自信に満ちた", "強引な"],
         correctAnswer: "こそこそした"
       },
       {
        id: 3063,
         question: "schematic",
         choices: ["概略図の", "詳細な", "装飾的な", "無関係な"],
         correctAnswer: "概略図の"
       },
       {
        id: 3064,
         question: "elaborate on",
         choices: ["を詳しく述べる", "を省略する", "を誤解する", "を軽視する"],
         correctAnswer: "を詳しく述べる"
       },
       {
        id: 3065,
         question: "syntax",
         choices: ["構文", "文法", "語彙", "発音"],
         correctAnswer: "構文"
       },
       {
        id: 3066,
         question: "tens of thousands",
         choices: ["何万もの", "数百の", "数千の", "数十の"],
         correctAnswer: "何万もの"
       },
       {
        id: 3067,
         question: "ease up",
         choices: ["緩む", "強まる", "固くなる", "厳しくなる"],
         correctAnswer: "緩む"
       },
       {
        id: 3068,
         question: "in the mood for",
         choices: ["したい気分である", "避けたい気分である", "興味がない", "無関心である"],
         correctAnswer: "したい気分である"
       },
       {
        id: 3069,
         question: "sortie",
         choices: ["出撃", "退却", "防御", "停戦"],
         correctAnswer: "出撃"
       },
       {
        id: 3070,
         question: "intermittent",
         choices: ["間欠的な", "継続的な", "固定された", "断固たる"],
         correctAnswer: "間欠的な"
       },
       {
        id: 3071,
         question: "torpedo",
         choices: ["魚雷", "戦艦", "銃弾", "爆弾"],
         correctAnswer: "魚雷"
       },
       {
        id: 3072,
         question: "confide in",
         choices: ["信じる", "疑う", "軽視する", "避ける"],
         correctAnswer: "信じる"
       },
       {
        id: 3073,
         question: "catch a glimpse of",
         choices: ["をちらっと見る", "をじっと見る", "を見逃す", "を避ける"],
         correctAnswer: "をちらっと見る"
       },
       {
        id: 3074,
         question: "dignified",
         choices: ["威厳のある", "軽薄な", "控えめな", "無関係な"],
         correctAnswer: "威厳のある"
       },
       {
        id: 3075,
         question: "wicker",
         choices: ["小枝", "葉", "根", "幹"],
         correctAnswer: "小枝"
       },
       {
        id: 3076,
         question: "be proficient in",
         choices: ["に精通している", "に無知である", "を避ける", "を誤解する"],
         correctAnswer: "に精通している"
       },
       {
        id: 3077,
         question: "assertive",
         choices: ["断定的な", "曖昧な", "慎重な", "控えめな"],
         correctAnswer: "断定的な"
       },
       {
        id: 3078,
         question: "dos and don'ts",
         choices: ["規則集", "自由な行動", "警告", "罰則"],
         correctAnswer: "規則集"
       },
       {
        id: 3079,
         question: "subsistence",
         choices: ["生計", "贅沢", "浪費", "余剰"],
         correctAnswer: "生計"
       },
       {
        id: 3080,
         question: "illiterate",
         choices: ["文盲の", "学識のある", "読書好きな", "知的な"],
         correctAnswer: "文盲の"
       },
       {
        id: 3081,
         question: "bound for",
         choices: ["行きの", "帰りの", "停滞する", "予定のない"],
         correctAnswer: "行きの"
       },
       {
        id: 3082,
         question: "sleigh",
         choices: ["そり", "船", "馬車", "自転車"],
         correctAnswer: "そり"
       },
       {
        id: 3083,
         question: "wart",
         choices: ["いぼ", "ほくろ", "傷", "シミ"],
         correctAnswer: "いぼ"
       },
       {
        id: 3084,
         question: "amenable",
         choices: ["従順な", "反抗的な", "自立した", "疑念を持つ"],
         correctAnswer: "従順な"
       },
       {
        id: 3085,
         question: "antiseptic",
         choices: ["殺菌の", "汚染された", "不潔な", "刺激の強い"],
         correctAnswer: "殺菌の"
       },
       {
        id: 3086,
         question: "derisive",
         choices: ["嘲笑的な", "尊敬の念を持つ", "親切な", "礼儀正しい"],
         correctAnswer: "嘲笑的な"
       },
       {
        id: 3087,
         question: "seclude",
         choices: ["引きこもらせる", "公表する", "開示する", "歓迎する"],
         correctAnswer: "引きこもらせる"
       },
       {
        id: 3088,
         question: "in anticipation of",
         choices: ["を予期して", "を無視して", "を終えて", "を除外して"],
         correctAnswer: "を予期して"
       },
       {
        id: 3089,
         question: "sorcerer",
         choices: ["魔術師", "戦士", "僧侶", "医師"],
         correctAnswer: "魔術師"
       },
       {
        id: 3090,
         question: "serene",
         choices: ["穏やかな", "嵐のような", "激しい", "騒がしい"],
         correctAnswer: "穏やかな"
       },
       {
        id: 3091,
         question: "abject",
         choices: ["卑劣な", "高潔な", "誠実な", "謙虚な"],
         correctAnswer: "卑劣な"
       },
       {
        id: 3092,
         question: "walk away with",
         choices: ["と一緒に歩いて出る", "を投げ捨てる", "を避ける", "を盗む"],
         correctAnswer: "と一緒に歩いて出る"
       },
       {
        id: 3093,
         question: "bow out",
         choices: ["身を引く", "前進する", "攻撃する", "積極的になる"],
         correctAnswer: "身を引く"
       },
       {
        id: 3094,
         question: "far cry from",
         choices: ["からほど遠い", "に近い", "そっくりな", "似通った"],
         correctAnswer: "からほど遠い"
       },
       {
        id: 3095,
         question: "stratum",
         choices: ["地層", "空気層", "氷河", "岩石"],
         correctAnswer: "地層"
       },
       {
        id: 3096,
         question: "vagabond",
         choices: ["放浪者", "定住者", "労働者", "学者"],
         correctAnswer: "放浪者"
       },
       {
        id: 3097,
         question: "ring out",
         choices: ["鳴り響く", "静かにする", "消音する", "かすかに聞こえる"],
         correctAnswer: "鳴り響く"
       },
       {
        id: 3098,
         question: "sewerage",
         choices: ["下水", "飲料水", "鉱泉水", "雨水"],
         correctAnswer: "下水"
       },
       {
        id: 3099,
         question: "go overboard",
         choices: ["極端に走る", "慎重になる", "冷静になる", "控えめにする"],
         correctAnswer: "極端に走る"
       },
       {
        id: 3100,
         question: "tableau",
         choices: ["心を打つ描写", "詳細な分析", "曖昧な説明", "軽視された話題"],
         correctAnswer: "心を打つ描写"
       },
       {
        id: 3101,
         question: "stupor",
         choices: ["昏迷", "活気", "興奮", "目覚め"],
         correctAnswer: "昏迷"
       },
       {
        id: 3102,
         question: "free of charge",
         choices: ["無料で", "有料で", "割引価格で", "高額で"],
         correctAnswer: "無料で"
       },
       {
        id: 3103,
         question: "seedling",
         choices: ["苗木", "成木", "根", "花"],
         correctAnswer: "苗木"
       },
       {
        id: 3104,
         question: "compulsory",
         choices: ["強制的な", "自由な", "自発的な", "随意の"],
         correctAnswer: "強制的な"
       },
       {
        id: 3105,
         question: "in recognition of",
         choices: ["の認識で", "の無視で", "の拒絶で", "の回避で"],
         correctAnswer: "の認識で"
       },
       {
        id: 3106,
         question: "lean over",
         choices: ["寄りかかる", "立ち上がる", "倒れる", "伸びる"],
         correctAnswer: "寄りかかる"
       },
       {
        id: 3107,
         question: "keep at",
         choices: ["を根気よく続ける", "をすぐやめる", "を放棄する", "を避ける"],
         correctAnswer: "を根気よく続ける"
       },
       {
        id: 3108,
         question: "posthumous",
         choices: ["死後の", "生前の", "同時の", "早期の"],
         correctAnswer: "死後の"
       },
       {
        id: 3109,
         question: "lethargic",
         choices: ["無気力な", "活発な", "元気な", "興奮した"],
         correctAnswer: "無気力な"
       },
       {
        id: 3110,
         question: "conciliatory",
         choices: ["調停的な", "攻撃的な", "敵対的な", "冷淡な"],
         correctAnswer: "調停的な"
       },
       {
        id: 3111,
         question: "thoroughfare",
         choices: ["幹線道路", "小道", "行き止まり", "住宅街"],
         correctAnswer: "幹線道路"
       },
       {
        id: 3112,
         question: "take A into consideration",
         choices: ["Aを考慮に入れる", "Aを無視する", "Aを拒絶する", "Aを削除する"],
         correctAnswer: "Aを考慮に入れる"
       },
       {
        id: 3113,
         question: "typhoid",
         choices: ["腸チフス", "インフルエンザ", "風邪", "麻疹"],
         correctAnswer: "腸チフス"
       },
       {
        id: 3114,
         question: "syringe",
         choices: ["注射器", "体温計", "消毒液", "包帯"],
         correctAnswer: "注射器"
       },
       {
        id: 3115,
         question: "submit A to B",
         choices: ["AをBに提出する", "AをBから受け取る", "AをBに渡さない", "AをBに破棄する"],
         correctAnswer: "AをBに提出する"
       },
       {
        id: 3116,
         question: "stubble",
         choices: ["無精ひげ", "髪の毛", "眉毛", "まつげ"],
         correctAnswer: "無精ひげ"
       },
       {
        id: 3117,
         question: "eviction",
         choices: ["立ち退き", "入居", "保護", "契約"],
         correctAnswer: "立ち退き"
       },
       {
        id: 3118,
         question: "demarcation",
         choices: ["境界", "合併", "統一", "破壊"],
         correctAnswer: "境界"
       },
       {
        id: 3119,
         question: "diva",
         choices: ["女性歌手", "男性歌手", "指揮者", "作曲家"],
         correctAnswer: "女性歌手"
       },
       {
        id: 3120,
         question: "lay in",
         choices: ["蓄える", "使い果たす", "捨てる", "削減する"],
         correctAnswer: "蓄える"
       },
       {
        id: 3121,
         question: "culminate",
         choices: ["最高潮に達する", "減退する", "消滅する", "下降する"],
         correctAnswer: "最高潮に達する"
       },
       {
        id: 3122,
         question: "from top to bottom",
         choices: ["上から下まで", "部分的に", "表面的に", "局所的に"],
         correctAnswer: "上から下まで"
       },
       {
        id: 3123,
         question: "close out",
         choices: ["締め切る", "開放する", "延長する", "再開する"],
         correctAnswer: "締め切る"
       },
       {
        id: 3124,
         question: "deference",
         choices: ["尊敬", "軽蔑", "侮辱", "無関心"],
         correctAnswer: "尊敬"
       },
       {
        id: 3125,
         question: "bail out",
         choices: ["脱出する", "閉じ込める", "放棄する", "固執する"],
         correctAnswer: "脱出する"
       },
       {
        id: 3126,
         question: "plop",
         choices: ["ボチャンと落ちる", "静かに置く", "拾い上げる", "そっと移動する"],
         correctAnswer: "ボチャンと落ちる"
       },
       {
        id: 3127,
         question: "procrastinate",
         choices: ["先延ばしにする", "即座に行う", "積極的に進める", "素早く決める"],
         correctAnswer: "先延ばしにする"
       },
       {
        id: 3128,
         question: "flora",
         choices: ["植物群", "動物群", "鉱物群", "微生物群"],
         correctAnswer: "植物群"
       },
       {
        id: 3129,
         question: "futility",
         choices: ["無益", "有益", "効果的", "成功"],
         correctAnswer: "無益"
       },
       {
        id: 3130,
         question: "sticking point",
         choices: ["障害", "解決策", "突破口", "進展"],
         correctAnswer: "障害"
       },
       {
        id: 3131,
         question: "abomination",
         choices: ["憎悪", "愛情", "尊敬", "関心"],
         correctAnswer: "憎悪"
       },
       {
        id: 3132,
         question: "be alien to",
         choices: ["と調和せずに", "と完全に一致して", "と親密で", "と無関係で"],
         correctAnswer: "と調和せずに"
       },
       {
        id: 3133,
         question: "compost",
         choices: ["混合物", "液体", "金属", "岩石"],
         correctAnswer: "混合物"
       },
       {
        id: 3134,
         question: "surmise",
         choices: ["推測する", "確信する", "否定する", "避ける"],
         correctAnswer: "推測する"
       },
       {
        id: 3135,
         question: "coddle",
         choices: ["甘やかす", "厳しくする", "避ける", "拒否する"],
         correctAnswer: "甘やかす"
       },
       {
        id: 3136,
         question: "hand down",
         choices: ["を伝える", "を隠す", "を破壊する", "を削除する"],
         correctAnswer: "を伝える"
       },
       {
        id: 3137,
         question: "constipation",
         choices: ["便秘", "下痢", "胃痛", "頭痛"],
         correctAnswer: "便秘"
       },
       {
        id: 3138,
         question: "fix on",
         choices: ["を固定する", "を取り外す", "を避ける", "を破壊する"],
         correctAnswer: "を固定する"
       },
       {
        id: 3139,
         question: "whittle",
         choices: ["削ぐ", "磨く", "拡大する", "破壊する"],
         correctAnswer: "削ぐ"
       },
       {
        id: 3140,
         question: "vouch for",
         choices: ["を保証する", "を疑う", "を隠す", "を批判する"],
         correctAnswer: "を保証する"
       },
       {
        id: 3141,
         question: "tranquilize",
         choices: ["静める", "興奮させる", "攻撃する", "避ける"],
         correctAnswer: "静める"
       },
       {
        id: 3142,
         question: "when it comes to",
         choices: ["のことになると", "を無視すると", "を避けると", "を確定すると"],
         correctAnswer: "のことになると"
       },
       {
        id: 3143,
         question: "writhe",
         choices: ["身もだえる", "じっとする", "喜ぶ", "笑う"],
         correctAnswer: "身もだえる"
       },
       {
        id: 3144,
         question: "up to now",
         choices: ["今まで", "これから", "過去の", "未来の"],
         correctAnswer: "今まで"
       },
       {
        id: 3145,
         question: "admonition",
         choices: ["訓戒", "称賛", "無視", "無関心"],
         correctAnswer: "訓戒"
       },
       {
        id: 3146,
         question: "diatribe",
         choices: ["痛烈な非難", "称賛", "激励", "同意"],
         correctAnswer: "痛烈な非難"
       },
       {
        id: 3147,
         question: "hiccup",
         choices: ["しゃっくり", "くしゃみ", "あくび", "せき"],
         correctAnswer: "しゃっくり"
       },
       {
        id: 3148,
         question: "add up",
         choices: ["足し合わせる", "引き算する", "割り算する", "掛け算する"],
         correctAnswer: "足し合わせる"
       },
       {
        id: 3149,
         question: "warble",
         choices: ["さえずる", "叫ぶ", "沈黙する", "つぶやく"],
         correctAnswer: "さえずる"
       },
       {
        id: 3150,
         question: "bargain for",
         choices: ["について交渉する", "について避ける", "について諦める", "について誤解する"],
         correctAnswer: "について交渉する"
       },
       {
        id: 3151,
         question: "voluptuous",
         choices: ["官能的な", "禁欲的な", "地味な", "単調な"],
         correctAnswer: "官能的な"
       },
       {
        id: 3152,
         question: "embellish",
         choices: ["飾る", "破壊する", "無視する", "削除する"],
         correctAnswer: "飾る"
       },
       {
        id: 3153,
         question: "underpin",
         choices: ["下から支える", "壊す", "避ける", "誤解する"],
         correctAnswer: "下から支える"
       },
       {
        id: 3154,
         question: "blunder",
         choices: ["大失敗", "成功", "改善", "進歩"],
         correctAnswer: "大失敗"
       },
       {
        id: 3155,
         question: "dispensary",
         choices: ["診療所", "学校", "工場", "銀行"],
         correctAnswer: "診療所"
       },
       {
        id: 3156,
         question: "din",
         choices: ["騒音", "静けさ", "静寂", "沈黙"],
         correctAnswer: "騒音"
       },
       {
        id: 3157,
         question: "cinch",
         choices: ["有力候補", "無関係な人", "失敗者", "弱者"],
         correctAnswer: "有力候補"
       },
       {
        id: 3158,
         question: "go in for",
         choices: ["に参加する", "を避ける", "を無視する", "を拒否する"],
         correctAnswer: "に参加する"
       },
       {
        id: 3159,
         question: "be obsessed with",
         choices: ["に取り付かれる", "を無関心である", "を避ける", "を忘れる"],
         correctAnswer: "に取り付かれる"
       },
       {
        id: 3160,
         question: "epilepsy",
         choices: ["てんかん", "糖尿病", "高血圧", "風邪"],
         correctAnswer: "てんかん"
       },
       {
        id: 3161,
         question: "first and foremost",
         choices: ["まず第一に", "最後に", "途中で", "まったく関係なく"],
         correctAnswer: "まず第一に"
       },
       {
        id: 3162,
         question: "be worthy to",
         choices: ["に値する", "価値がない", "避けるべき", "疑問がある"],
         correctAnswer: "に値する"
       },
       {
        id: 3163,
         question: "dishevel",
         choices: ["振り乱す", "整える", "磨く", "片付ける"],
         correctAnswer: "振り乱す"
       },
       {
        id: 3164,
         question: "map out",
         choices: ["綿密に計画する", "適当に済ませる", "見直しする", "誤解する"],
         correctAnswer: "綿密に計画する"
       },
       {
        id: 3165,
         question: "lug",
         choices: ["力を込めて引く", "軽く押す", "放棄する", "持ち上げる"],
         correctAnswer: "力を込めて引く"
       },
       {
        id: 3166,
         question: "pull off",
         choices: ["もぎ取る", "くっつける", "見失う", "放置する"],
         correctAnswer: "もぎ取る"
       },
       {
        id: 3167,
         question: "be keen to",
         choices: ["やる気がある", "無関心である", "消極的である", "疑っている"],
         correctAnswer: "やる気がある"
       },
       {
        id: 3168,
         question: "meddle",
         choices: ["お節介を焼く", "放っておく", "避ける", "関心を持たない"],
         correctAnswer: "お節介を焼く"
       },
       {
        id: 3169,
         question: "from A to Z",
         choices: ["最初から最後まで", "途中まで", "一部のみ", "限定的に"],
         correctAnswer: "最初から最後まで"
       },
       {
        id: 3170,
         question: "by the same token",
         choices: ["同様に", "反対に", "独立して", "無関係に"],
         correctAnswer: "同様に"
       },
       {
        id: 3171,
         question: "contagion",
         choices: ["伝染", "治療", "予防", "免疫"],
         correctAnswer: "伝染"
       },
       {
        id: 3172,
         question: "rebuke",
         choices: ["叱責する", "褒める", "許す", "容認する"],
         correctAnswer: "叱責する"
       },
       {
        id: 3173,
         question: "exclamation",
         choices: ["感嘆", "疑念", "批判", "冷淡"],
         correctAnswer: "感嘆"
       },
       {
        id: 3174,
         question: "cash in",
         choices: ["現金に変える", "投資する", "節約する", "浪費する"],
         correctAnswer: "現金に変える"
       },
       {
        id: 3175,
         question: "purr",
         choices: ["のどを鳴らす", "叫ぶ", "沈黙する", "ささやく"],
         correctAnswer: "のどを鳴らす"
       },
       {
        id: 3176,
         question: "slit",
         choices: ["切り開く", "縫い合わせる", "補強する", "接続する"],
         correctAnswer: "切り開く"
       },
       {
        id: 3177,
         question: "come around",
         choices: ["遠回りする", "急ぐ", "直進する", "立ち止まる"],
         correctAnswer: "遠回りする"
       },
       {
        id: 3178,
         question: "expropriate",
         choices: ["没収する", "寄付する", "貸し出す", "返却する"],
         correctAnswer: "没収する"
       },
       {
        id: 3179,
         question: "contrivance",
         choices: ["工夫", "無計画", "破壊", "失敗"],
         correctAnswer: "工夫"
       },
       {
        id: 3180,
         question: "bear out",
         choices: ["裏付ける", "否定する", "軽視する", "誤解する"],
         correctAnswer: "裏付ける"
       },
       {
        id: 3181,
         question: "feat",
         choices: ["偉業", "失敗", "誤算", "迷惑"],
         correctAnswer: "偉業"
       },
       {
        id: 3182,
         question: "enshrine",
         choices: ["祀る", "破壊する", "軽視する", "無視する"],
         correctAnswer: "祀る"
       },
       {
        id: 3183,
         question: "unkempt",
         choices: ["もじゃもじゃの", "整った", "清潔な", "整理された"],
         correctAnswer: "もじゃもじゃの"
       },
       {
        id: 3184,
         question: "land A with B",
         choices: ["AにBを引き受けさせる", "AをBから遠ざける", "AをBに紹介する", "AをBに譲る"],
         correctAnswer: "AにBを引き受けさせる"
       },
       {
        id: 3185,
         question: "cavalier",
         choices: ["騎士", "商人", "農民", "詐欺師"],
         correctAnswer: "騎士"
       },
       {
        id: 3186,
         question: "abstain from",
         choices: ["を控える", "を好む", "を奨励する", "を推進する"],
         correctAnswer: "を控える"
       },
       {
        id: 3187,
         question: "for the good of",
         choices: ["のために", "の邪魔になって", "の代わりに", "のせいで"],
         correctAnswer: "のために"
       },
       {
        id: 3188,
         question: "eulogy",
         choices: ["賛辞", "批判", "侮辱", "否定"],
         correctAnswer: "賛辞"
       },
       {
        id: 3189,
         question: "go through with",
         choices: ["で通り抜ける", "で立ち止まる", "で撤退する", "で回避する"],
         correctAnswer: "で通り抜ける"
       },
       {
        id: 3190,
         question: "look through",
         choices: ["に目を通す", "を避ける", "を無視する", "を削除する"],
         correctAnswer: "に目を通す"
       },
       {
        id: 3191,
         question: "be inferior to",
         choices: ["より劣って", "より優れて", "同等で", "無関係で"],
         correctAnswer: "より劣って"
       },
       {
        id: 3192,
         question: "beyond number",
         choices: ["数えきれないほど", "限られた", "少数の", "決まった数の"],
         correctAnswer: "数えきれないほど"
       },
       {
        id: 3193,
         question: "imposition",
         choices: ["課税", "免税", "撤廃", "控除"],
         correctAnswer: "課税"
       },
       {
        id: 3194,
         question: "wacky",
         choices: ["突飛な", "普通の", "地味な", "控えめな"],
         correctAnswer: "突飛な"
       },
       {
        id: 3195,
         question: "pout",
         choices: ["口をとがらせる", "微笑む", "大声で叫ぶ", "うつむく"],
         correctAnswer: "口をとがらせる"
       },
       {
        id: 3196,
         question: "abound in",
         choices: ["であふれている", "不足している", "枯渇している", "稀である"],
         correctAnswer: "であふれている"
       },
       {
        id: 3197,
         question: "voluble",
         choices: ["おしゃべりな", "無口な", "控えめな", "静かな"],
         correctAnswer: "おしゃべりな"
       },
       {
        id: 3198,
         question: "at home with",
         choices: ["慣れて", "苦手で", "無関心で", "回避して"],
         correctAnswer: "慣れて"
       },
       {
        id: 3199,
         question: "off duty",
         choices: ["非番の", "勤務中の", "警戒中の", "忙しい"],
         correctAnswer: "非番の"
       },
       {
        id: 3200,
         question: "in one's presence",
         choices: ["目の前で", "離れた場所で", "電話越しで", "秘密裏に"],
         correctAnswer: "目の前で"
       },
       {
        id: 3201,
         question: "wheedle",
         choices: ["上手い言葉で誘う", "命令する", "拒絶する", "威圧する"],
         correctAnswer: "上手い言葉で誘う"
       },
       {
        id: 3202,
         question: "in an instant",
         choices: ["瞬時に", "ゆっくりと", "数時間後に", "後日"],
         correctAnswer: "瞬時に"
       },
       {
        id: 3203,
         question: "implode",
         choices: ["内部破壊する", "外部爆発する", "膨張する", "ゆっくり崩れる"],
         correctAnswer: "内部破壊する"
       },
       {
        id: 3204,
         question: "inculcate",
         choices: ["教え込む", "忘れさせる", "削除する", "避ける"],
         correctAnswer: "教え込む"
       },
       {
        id: 3205,
         question: "foreclose",
         choices: ["除外する", "含める", "改善する", "追加する"],
         correctAnswer: "除外する"
       },
       {
        id: 3206,
         question: "be addicted to",
         choices: ["の中毒になる", "を嫌う", "を避ける", "を克服する"],
         correctAnswer: "の中毒になる"
       },
       {
        id: 3207,
         question: "avenger",
         choices: ["復讐者", "平和主義者", "犠牲者", "仲裁者"],
         correctAnswer: "復讐者"
       },
       {
        id: 3208,
         question: "bridle",
         choices: ["手綱", "馬車", "鞍", "綱"],
         correctAnswer: "手綱"
       },
       {
        id: 3209,
         question: "hide out",
         choices: ["隠れる", "堂々とする", "公表する", "目立つ"],
         correctAnswer: "隠れる"
       },
       {
        id: 3210,
         question: "dreary",
         choices: ["悲しくさせる", "元気づける", "励ます", "楽しませる"],
         correctAnswer: "悲しくさせる"
       },
       {
        id: 3211,
         question: "on edge",
         choices: ["イライラして", "落ち着いて", "無関心で", "のんびりして"],
         correctAnswer: "イライラして"
       },
       {
        id: 3212,
         question: "make a fuss",
         choices: ["大騒ぎする", "沈黙する", "冷静でいる", "避ける"],
         correctAnswer: "大騒ぎする"
       },
       {
        id: 3213,
         question: "stigmatize",
         choices: ["汚名を着せる", "称賛する", "許す", "励ます"],
         correctAnswer: "汚名を着せる"
       },
       {
        id: 3214,
         question: "strain",
         choices: ["引っ張る", "押し込む", "避ける", "固定する"],
         correctAnswer: "引っ張る"
       },
       {
        id: 3215,
         question: "complain of",
         choices: ["を訴える", "を賞賛する", "を忘れる", "を無視する"],
         correctAnswer: "を訴える"
       },
       {
        id: 3216,
         question: "appall",
         choices: ["ぞっとさせる", "和らげる", "励ます", "元気づける"],
         correctAnswer: "ぞっとさせる"
       },
       {
        id: 3217,
         question: "postulate",
         choices: ["仮定する", "確証する", "削除する", "無視する"],
         correctAnswer: "仮定する"
       },
       {
        id: 3218,
         question: "assure A of B",
         choices: ["BのAを保証する", "BのAを疑う", "BのAを軽視する", "BのAを否定する"],
         correctAnswer: "BのAを保証する"
       },
       {
        id: 3219,
         question: "excruciate",
         choices: ["苦しめる", "癒す", "励ます", "楽しませる"],
         correctAnswer: "苦しめる"
       },
       {
        id: 3220,
         question: "mother tongue",
         choices: ["母国語", "第二言語", "外国語", "専門用語"],
         correctAnswer: "母国語"
       },
       {
        id: 3221,
         question: "bog",
         choices: ["沼地", "川", "湖", "山"],
         correctAnswer: "沼地"
       },
       {
        id: 3222,
         question: "at ease",
         choices: ["気楽に", "緊張して", "落ち込んで", "不安で"],
         correctAnswer: "気楽に"
       },
       {
        id: 3223,
         question: "in the abstract",
         choices: ["理論上は", "実際には", "個人的には", "経験上は"],
         correctAnswer: "理論上は"
       },
       {
        id: 3224,
         question: "carcinoma",
         choices: ["がん", "風邪", "炎症", "感染症"],
         correctAnswer: "がん"
       },
       {
        id: 3225,
         question: "no offense",
         choices: ["悪気はなく", "攻撃的に", "皮肉を込めて", "強引に"],
         correctAnswer: "悪気はなく"
       },
       {
        id: 3226,
         question: "herbicide",
         choices: ["除草剤", "殺虫剤", "肥料", "消毒剤"],
         correctAnswer: "除草剤"
       },
       {
        id: 3227,
         question: "in the affirmative",
         choices: ["肯定の", "否定の", "曖昧な", "疑問の"],
         correctAnswer: "肯定の"
       },
       {
        id: 3228,
         question: "convulsion",
         choices: ["けいれん", "咳", "くしゃみ", "息切れ"],
         correctAnswer: "けいれん"
       },
       {
        id: 3229,
         question: "legitimize",
         choices: ["正当化する", "否定する", "禁止する", "制限する"],
         correctAnswer: "正当化する"
       },
       {
        id: 3230,
         question: "puke",
         choices: ["吐く", "食べる", "飲み込む", "咀嚼する"],
         correctAnswer: "吐く"
       },
       {
        id: 3231,
         question: "as is",
         choices: ["そのまま", "修正後", "変更後", "削除後"],
         correctAnswer: "そのまま"
       },
       {
        id: 3232,
         question: "can afford to do",
         choices: ["する余裕がある", "する必要がある", "する権利がある", "する義務がある"],
         correctAnswer: "する余裕がある"
       },
       {
        id: 3233,
         question: "in due time",
         choices: ["やがて", "今すぐ", "すでに", "決して"],
         correctAnswer: "やがて"
       },
       {
        id: 3234,
         question: "deviate",
         choices: ["逸脱する", "従う", "受け入れる", "強化する"],
         correctAnswer: "逸脱する"
       },
       {
        id: 3235,
         question: "pulverize",
         choices: ["粉砕する", "統合する", "保護する", "結びつける"],
         correctAnswer: "粉砕する"
       },
       {
        id: 3236,
         question: "gun for",
         choices: ["を追い求める", "を避ける", "を軽視する", "を放棄する"],
         correctAnswer: "を追い求める"
       },
       {
        id: 3237,
         question: "balm",
         choices: ["香油", "粉末", "液体", "固体"],
         correctAnswer: "香油"
       },
       {
        id: 3238,
         question: "apathy",
         choices: ["無関心", "熱意", "注意", "好奇心"],
         correctAnswer: "無関心"
       },
       {
        id: 3239,
         question: "lean on",
         choices: ["に寄りかかる", "を避ける", "を押す", "を倒す"],
         correctAnswer: "に寄りかかる"
       },
       {
        id: 3240,
         question: "blob",
         choices: ["柔らかく小さい塊", "大きな岩", "細い棒", "薄い紙"],
         correctAnswer: "柔らかく小さい塊"
       },
       {
        id: 3241,
         question: "on second thought",
         choices: ["考え直してみると", "最初の考え通り", "すぐに決断して", "迷いながら"],
         correctAnswer: "考え直してみると"
       },
       {
        id: 3242,
         question: "impel",
         choices: ["駆り立てる", "抑制する", "防止する", "排除する"],
         correctAnswer: "駆り立てる"
       },
       {
        id: 3243,
         question: "blurb",
         choices: ["推薦広告", "批判記事", "ニュース速報", "長編記事"],
         correctAnswer: "推薦広告"
       },
       {
        id: 3244,
         question: "wheeze",
         choices: ["息を切らす", "大声で叫ぶ", "静かにする", "ため息をつく"],
         correctAnswer: "息を切らす"
       },
       {
        id: 3245,
         question: "notify A of B",
         choices: ["AにBを通知する", "AにBを隠す", "AにBを忘れさせる", "AにBを拒否する"],
         correctAnswer: "AにBを通知する"
       },
       {
        id: 3246,
         question: "cessation",
         choices: ["中止", "継続", "開始", "加速"],
         correctAnswer: "中止"
       },
       {
        id: 3247,
         question: "in excess of",
         choices: ["より過度に", "未満で", "ぴったり", "ほぼ"],
         correctAnswer: "より過度に"
       },
       {
        id: 3248,
         question: "allegiance",
         choices: ["忠誠", "裏切り", "無関心", "軽蔑"],
         correctAnswer: "忠誠"
       },
       {
        id: 3249,
         question: "brothel",
         choices: ["売春宿", "居酒屋", "旅館", "劇場"],
         correctAnswer: "売春宿"
       },
       {
        id: 3250,
         question: "groin",
         choices: ["鼠径部", "膝", "肘", "背中"],
         correctAnswer: "鼠径部"
       },
       {
        id: 3251,
         question: "at no time",
         choices: ["決して～しない", "たまに", "頻繁に", "常に"],
         correctAnswer: "決して～しない"
       },
       {
        id: 3252,
         question: "apprenticeship",
         choices: ["見習い", "独立", "引退", "管理職"],
         correctAnswer: "見習い"
       },
       {
        id: 3253,
         question: "originate in",
         choices: ["に端を発する", "に終わる", "を避ける", "を継続する"],
         correctAnswer: "に端を発する"
       },
       {
        id: 3254,
         question: "crotch",
         choices: ["股", "膝", "足首", "肘"],
         correctAnswer: "股"
       },
       {
        id: 3255,
         question: "pretend to do",
         choices: ["するふりをする", "実行する", "失敗する", "避ける"],
         correctAnswer: "するふりをする"
       },
       {
        id: 3256,
         question: "take A by surprise",
         choices: ["Aを驚かせる", "Aを怒らせる", "Aを慰める", "Aを避ける"],
         correctAnswer: "Aを驚かせる"
       },
       {
        id: 3257,
         question: "in a vacuum",
         choices: ["真空で", "密閉空間で", "大気中で", "水中で"],
         correctAnswer: "真空で"
       },
       {
        id: 3258,
         question: "audacity",
         choices: ["大胆さ", "臆病さ", "慎重さ", "消極性"],
         correctAnswer: "大胆さ"
       },
       {
        id: 3259,
         question: "embezzle",
         choices: ["横領する", "寄付する", "報酬を与える", "投資する"],
         correctAnswer: "横領する"
       },
       {
        id: 3260,
         question: "ellipse",
         choices: ["楕円", "円", "直線", "三角形"],
         correctAnswer: "楕円"
       },
       {
        id: 3261,
         question: "rise and shine",
         choices: ["起き上がる", "横になる", "寝続ける", "眠る"],
         correctAnswer: "起き上がる"
       },
       {
        id: 3262,
         question: "critter",
         choices: ["生き物", "道具", "食品", "乗り物"],
         correctAnswer: "生き物"
       },
       {
        id: 3263,
         question: "blatantly",
         choices: ["露骨に", "控えめに", "こっそりと", "秘密裏に"],
         correctAnswer: "露骨に"
       },
       {
        id: 3264,
         question: "glare at",
         choices: ["睨みつける", "微笑む", "驚く", "避ける"],
         correctAnswer: "睨みつける"
       },
       {
        id: 3265,
         question: "blanch",
         choices: ["漂白する", "染める", "加熱する", "冷凍する"],
         correctAnswer: "漂白する"
       },
       {
        id: 3266,
         question: "flip-flop",
         choices: ["サンダル", "ブーツ", "スニーカー", "ハイヒール"],
         correctAnswer: "サンダル"
       },
       {
        id: 3267,
         question: "roundup",
         choices: ["切り上げる", "分ける", "切り下げる", "避ける"],
         correctAnswer: "切り上げる"
       },
       {
        id: 3268,
         question: "nullify",
         choices: ["無効にする", "強化する", "正当化する", "改善する"],
         correctAnswer: "無効にする"
       },
       {
        id: 3269,
         question: "irk",
         choices: ["いらいらさせる", "落ち着かせる", "喜ばせる", "励ます"],
         correctAnswer: "いらいらさせる"
       },
       {
        id: 3270,
         question: "thrifty",
         choices: ["倹約な", "浪費する", "気前が良い", "無駄遣いする"],
         correctAnswer: "倹約な"
       },
       {
        id: 3271,
         question: "annotation",
         choices: ["注釈", "無記述", "削除", "略語"],
         correctAnswer: "注釈"
       },
       {
        id: 3272,
         question: "beseech",
         choices: ["懇願する", "命令する", "否定する", "疑う"],
         correctAnswer: "懇願する"
       },
       {
        id: 3273,
         question: "halfway house",
         choices: ["中盤", "最終地点", "出発点", "休憩所"],
         correctAnswer: "中盤"
       },
       {
        id: 3274,
         question: "chronology",
         choices: ["年表", "地図", "辞書", "物理法則"],
         correctAnswer: "年表"
       },
       {
        id: 3275,
         question: "hesitate to",
         choices: ["をためらう", "をすぐにする", "を確信する", "を優先する"],
         correctAnswer: "をためらう"
       },
       {
        id: 3276,
         question: "usurp",
         choices: ["奪う", "譲る", "共有する", "放棄する"],
         correctAnswer: "奪う"
       },
       {
        id: 3277,
         question: "agitate",
         choices: ["かき立てる", "落ち着かせる", "避ける", "拒絶する"],
         correctAnswer: "かき立てる"
       },
       {
        id: 3278,
         question: "spring from",
         choices: ["から生じる", "から離れる", "を無視する", "を抑える"],
         correctAnswer: "から生じる"
       },
       {
        id: 3279,
         question: "commotion",
         choices: ["騒動", "静寂", "沈黙", "整然とした状態"],
         correctAnswer: "騒動"
       },
       {
        id: 3280,
         question: "on principle",
         choices: ["原則として", "例外として", "曖昧に", "個人的に"],
         correctAnswer: "原則として"
       },
       {
        id: 3281,
         question: "emancipate",
         choices: ["解放する", "拘束する", "避ける", "抑制する"],
         correctAnswer: "解放する"
       },
       {
        id: 3282,
         question: "crank up",
         choices: ["刺激する", "停止する", "弱める", "回避する"],
         correctAnswer: "刺激する"
       },
       {
        id: 3283,
         question: "rumble",
         choices: ["ゴロゴロ鳴る", "静かにする", "ささやく", "叫ぶ"],
         correctAnswer: "ゴロゴロ鳴る"
       },
       {
        id: 3284,
         question: "regurgitate",
         choices: ["吐き戻す", "飲み込む", "食べる", "噛む"],
         correctAnswer: "吐き戻す"
       },
       {
        id: 3285,
         question: "visceral",
         choices: ["内臓の", "骨の", "皮膚の", "筋肉の"],
         correctAnswer: "内臓の"
       },
       {
        id: 3286,
         question: "put emphasis on",
         choices: ["に重点を置く", "軽視する", "無視する", "削除する"],
         correctAnswer: "に重点を置く"
       },
       {
        id: 3287,
         question: "jingle",
         choices: ["リンリン鳴らす", "ガタガタ揺れる", "静かにする", "叩く"],
         correctAnswer: "リンリン鳴らす"
       },
       {
        id: 3288,
         question: "contention",
         choices: ["争い", "平和", "合意", "妥協"],
         correctAnswer: "争い"
       },
       {
        id: 3289,
         question: "gratuity",
         choices: ["心付け", "借金", "投資", "罰金"],
         correctAnswer: "心付け"
       },
       {
        id: 3290,
         question: "sneak up on",
         choices: ["忍び寄る", "逃げる", "見失う", "避ける"],
         correctAnswer: "忍び寄る"
       },
       {
        id: 3291,
         question: "creak",
         choices: ["キーキー鳴る", "静かにする", "叫ぶ", "反響する"],
         correctAnswer: "キーキー鳴る"
       },
       {
        id: 3292,
         question: "quench",
         choices: ["渇きをいやす", "燃え上がる", "助長する", "避ける"],
         correctAnswer: "渇きをいやす"
       },
       {
        id: 3293,
         question: "fling",
         choices: ["投げる", "拾う", "押す", "つかむ"],
         correctAnswer: "投げる"
       },
       {
        id: 3294,
         question: "be suitable for",
         choices: ["に適している", "に不適切である", "に無関係である", "に依存する"],
         correctAnswer: "に適している"
       },
       {
        id: 3295,
         question: "teeter",
         choices: ["ぶらぶらする", "安定する", "止まる", "回転する"],
         correctAnswer: "ぶらぶらする"
       },
       {
        id: 3296,
         question: "finery",
         choices: ["華美な装飾", "簡素な服装", "汚れた服", "ぼろぼろの布"],
         correctAnswer: "華美な装飾"
       },
       {
        id: 3297,
         question: "admire A for B",
         choices: ["BについてAを賞賛する", "Aを避ける", "Aを批判する", "BについてAを軽視する"],
         correctAnswer: "BについてAを賞賛する"
       },
       {
        id: 3298,
         question: "cleave",
         choices: ["割る", "接着する", "曲げる", "削る"],
         correctAnswer: "割る"
       },
       {
        id: 3299,
         question: "in all probability",
         choices: ["十中八九", "全く可能性がない", "50%の確率で", "可能性は低い"],
         correctAnswer: "十中八九"
       },
       {
        id: 3300,
         question: "fabrication",
         choices: ["製作", "破壊", "削除", "改変"],
         correctAnswer: "製作"
       },
       {
        id: 3301,
         question: "be indebted to",
         choices: ["に負債がある", "無関係である", "無関心である", "反対する"],
         correctAnswer: "に負債がある"
       },
       {
        id: 3302,
         question: "drool",
         choices: ["よだれを垂らす", "くしゃみをする", "せきをする", "口を閉じる"],
         correctAnswer: "よだれを垂らす"
       },
       {
        id: 3303,
         question: "amputation",
         choices: ["切断", "接続", "移植", "修復"],
         correctAnswer: "切断"
       },
       {
        id: 3304,
         question: "not necessarily",
         choices: ["必ずしも～ない", "必ず", "間違いなく", "絶対に"],
         correctAnswer: "必ずしも～ない"
       },
       {
        id: 3305,
         question: "vascular",
         choices: ["管の", "骨の", "皮膚の", "筋肉の"],
         correctAnswer: "管の"
       },
       {
        id: 3306,
         question: "wrestle with",
         choices: ["取っ組み合う", "避ける", "逃げる", "静かにする"],
         correctAnswer: "取っ組み合う"
       },
       {
        id: 3307,
         question: "at face value",
         choices: ["額面通り", "疑わしく", "裏読みして", "誤解して"],
         correctAnswer: "額面通り"
       },
       {
        id: 3308,
         question: "transitory",
         choices: ["一時的な", "恒久的な", "永遠の", "変わらない"],
         correctAnswer: "一時的な"
       },
       {
        id: 3309,
         question: "put A into practice",
         choices: ["Aを実践する", "Aを避ける", "Aを計画する", "Aを否定する"],
         correctAnswer: "Aを実践する"
       },
       {
        id: 3310,
         question: "prowl",
         choices: ["うろつく", "隠れる", "急ぐ", "静かにする"],
         correctAnswer: "うろつく"
       },
       {
        id: 3311,
         question: "once and for all",
         choices: ["これを最後に", "時々", "何度も", "一時的に"],
         correctAnswer: "これを最後に"
       },
       {
        id: 3312,
         question: "resuscitate",
         choices: ["蘇生させる", "放棄する", "弱らせる", "削除する"],
         correctAnswer: "蘇生させる"
       },
       {
        id: 3313,
         question: "stick up for",
         choices: ["を支持する", "を攻撃する", "を批判する", "を無視する"],
         correctAnswer: "を支持する"
       },
       {
        id: 3314,
         question: "concordance",
         choices: ["一致", "対立", "矛盾", "不調和"],
         correctAnswer: "一致"
       },
       {
        id: 3315,
         question: "emancipation",
         choices: ["解放", "束縛", "抑圧", "制限"],
         correctAnswer: "解放"
       },
       {
        id: 3316,
         question: "down to earth",
         choices: ["分別のある", "夢見がちな", "非現実的な", "風変わりな"],
         correctAnswer: "分別のある"
       },
       {
        id: 3317,
         question: "gaffe",
         choices: ["失策", "成功", "工夫", "改善"],
         correctAnswer: "失策"
       },
       {
        id: 3318,
         question: "enumerate",
         choices: ["列挙する", "省略する", "忘れる", "排除する"],
         correctAnswer: "列挙する"
       },
       {
        id: 3319,
         question: "crack down",
         choices: ["厳しく取り締まる", "許可する", "奨励する", "無視する"],
         correctAnswer: "厳しく取り締まる"
       },
       {
        id: 3320,
         question: "hip to",
         choices: ["に気づいている", "に無関心である", "を誤解する", "を避ける"],
         correctAnswer: "に気づいている"
       },
      {
        id: 3321,
        question: "water down",
        choices: ["水で薄める", "濃縮する", "凍結する", "蒸発させる"],
         correctAnswer: "水で薄める"
      },
      {
        id: 3322,
        question: "mutilate",
        choices: ["切断する", "修復する", "改良する", "再生する"],
         correctAnswer: "切断する"
      },
      {
        id: 3323,
        question: "stop off",
        choices: ["途中下車する", "急行する", "目的地に直行する", "道を間違える"],
         correctAnswer: "途中下車する"
      },
      {
        id: 3324,
        question: "by force",
        choices: ["力ずくで", "穏やかに", "自然に", "協力して"],
         correctAnswer: "力ずくで"
      },
      {
        id: 3325,
        question: "head over heels",
        choices: ["真っ逆さまに", "ゆっくりと", "慎重に", "落ち着いて"],
         correctAnswer: "真っ逆さまに"
      },
      {
        id: 3326,
        question: "perforate",
        choices: ["穴を空ける", "ふさぐ", "埋める", "厚くする"],
         correctAnswer: "穴を空ける"
      },
      {
        id: 3327,
        question: "no less than",
        choices: ["と同じほど", "より少ない", "より多い", "と関係ない"],
         correctAnswer: "と同じほど"
      },
      {
        id: 3328,
        question: "scamper",
        choices: ["ふざけ回る", "静かに歩く", "座る", "休む"],
         correctAnswer: "ふざけ回る"
      },
      {
        id: 3329,
        question: "tardy",
        choices: ["遅れた", "迅速な", "時間通りの", "計画的な"],
         correctAnswer: "遅れた"
      },
      {
        id: 3330,
        question: "mingle with",
        choices: ["と混ざる", "を分ける", "を整理する", "を避ける"],
         correctAnswer: "と混ざる"
      },
      {
        id: 3331,
        question: "repatriate",
        choices: ["送還する", "迎え入れる", "無視する", "隠す"],
         correctAnswer: "送還する"
      },
      {
        id: 3332,
        question: "enthrall",
        choices: ["魅了する", "退屈させる", "怒らせる", "忘れさせる"],
         correctAnswer: "魅了する"
      },
      {
        id: 3333,
        question: "crucifixion",
        choices: ["はりつけ", "昇進", "救済", "感謝"],
         correctAnswer: "はりつけ"
      },
      {
        id: 3334,
        question: "crypt",
        choices: ["地下室", "屋根裏", "リビングルーム", "庭"],
         correctAnswer: "地下室"
      },
      {
        id: 3335,
        question: "denigrate",
        choices: ["侮辱する", "賞賛する", "支持する", "尊敬する"],
         correctAnswer: "侮辱する"
      },
      {
        id: 3336,
        question: "grail",
        choices: ["聖杯", "剣", "盾", "王冠"],
         correctAnswer: "聖杯"
      },
      {
        id: 3337,
        question: "at intervals",
        choices: ["飛び飛びに", "絶え間なく", "ずっと", "一度だけ"],
         correctAnswer: "飛び飛びに"
      },
      {
        id: 3338,
        question: "have a flat tire",
        choices: ["タイヤがパンクする", "タイヤを交換する", "車を修理する", "ガソリンを入れる"],
         correctAnswer: "タイヤがパンクする"
      },
      {
        id: 3339,
        question: "amplitude",
        choices: ["広さ", "高さ", "狭さ", "深さ"],
         correctAnswer: "広さ"
      },
      {
        id: 3340,
        question: "make matters worse",
        choices: ["問題を悪化させる", "問題を解決する", "問題を避ける", "問題を整理する"],
         correctAnswer: "問題を悪化させる"
      },
      {
        id: 3341,
        question: "virile",
        choices: ["男らしい", "女性らしい", "幼稚な", "年老いた"],
         correctAnswer: "男らしい"
      },
      {
        id: 3342,
        question: "budge",
        choices: ["少し動く", "固まる", "壊れる", "停止する"],
         correctAnswer: "少し動く"
      },
      {
        id: 3343,
        question: "filth",
        choices: ["汚物", "清潔", "装飾", "純粋"],
         correctAnswer: "汚物"
      },
      {
        id: 3344,
        question: "chastise",
        choices: ["懲らしめる", "褒める", "慰める", "励ます"],
         correctAnswer: "懲らしめる"
      },
      {
        id: 3345,
        question: "fart",
        choices: ["おならをする", "くしゃみをする", "咳をする", "歌う"],
         correctAnswer: "おならをする"
      },
      {
        id: 3346,
        question: "to death",
        choices: ["死ぬまで", "一時的に", "長期間", "数時間"],
         correctAnswer: "死ぬまで"
      },
      {
        id: 3347,
        question: "sputter",
        choices: ["唾を飛ばして喋る", "静かに話す", "怒鳴る", "囁く"],
         correctAnswer: "唾を飛ばして喋る"
      },
      {
        id: 3348,
        question: "come out with",
        choices: ["を見せる", "を隠す", "を修正する", "を取り消す"],
         correctAnswer: "を見せる"
      },
      {
        id: 3349,
        question: "become of",
        choices: ["となる", "失敗する", "避ける", "忘れる"],
         correctAnswer: "となる"
      },
      {
        id: 3350,
        question: "ensconce",
        choices: ["快適に座る", "立ち去る", "逃げる", "歩く"],
         correctAnswer: "快適に座る"
      },
      {
        id: 3351,
        question: "saunter",
        choices: ["ぶらつく", "走る", "立ち止まる", "隠れる"],
         correctAnswer: "ぶらつく"
      },
      {
        id: 3352,
        question: "hang in",
        choices: ["頑張る", "諦める", "避ける", "逃げる"],
         correctAnswer: "頑張る"
      },
      {
        id: 3353,
        question: "conform A to B",
        choices: ["AをBに合わせる", "AをBから分離する", "AをBと区別する", "AをBに反対する"],
         correctAnswer: "AをBに合わせる"
      },
      {
        id: 3354,
        question: "unequivocal",
        choices: ["明確な", "不明確な", "あいまいな", "疑わしい"],
         correctAnswer: "明確な"
      },
      {
        id: 3355,
        question: "build A into B",
        choices: ["AをBに組み入れる", "AをBから排除する", "AをBと交換する", "AをBに反対する"],
         correctAnswer: "AをBに組み入れる"
      },
      {
        id: 3356,
        question: "loiter",
        choices: ["ぶらぶら歩く", "走る", "急ぐ", "止まる"],
         correctAnswer: "ぶらぶら歩く"
      },
      {
        id: 3357,
        question: "be akin to",
        choices: ["に似ている", "に対立する", "に無関係である", "に反対する"],
         correctAnswer: "に似ている"
      },
      {
        id: 3358,
        question: "pervade",
        choices: ["染み込む", "乾燥する", "飛び散る", "凝縮する"],
         correctAnswer: "染み込む"
      },
      {
        id: 3359,
        question: "stupendous",
        choices: ["途方もない", "普通の", "小さい", "平凡な"],
         correctAnswer: "途方もない"
      },
      {
        id: 3360,
        question: "arousal",
        choices: ["覚醒", "眠気", "休息", "退屈"],
         correctAnswer: "覚醒"
      },
      {
        id: 3361,
        question: "concentrate A on B",
        choices: ["AをBに集中させる", "AをBから離す", "AをBに分散する", "AをBに無関係にする"],
         correctAnswer: "AをBに集中させる"
      },
      {
        id: 3362,
        question: "discomfiture",
        choices: ["挫折", "成功", "前進", "向上"],
         correctAnswer: "挫折"
      },
      {
        id: 3363,
        question: "in succession",
        choices: ["連続して", "途中で", "断続的に", "まれに"],
         correctAnswer: "連続して"
      },
      {
        id: 3364,
        question: "tie into",
        choices: ["結び付ける", "切り離す", "無視する", "否定する"],
         correctAnswer: "結び付ける"
      },
      {
        id: 3365,
        question: "detest",
        choices: ["忌み嫌う", "好む", "許容する", "賞賛する"],
         correctAnswer: "忌み嫌う"
      },
      {
        id: 3366,
        question: "consent to",
        choices: ["に納得する", "を否定する", "を疑う", "を避ける"],
         correctAnswer: "に納得する"
      },
      {
        id: 3367,
        question: "pick up the tab",
        choices: ["勘定を払う", "支払いを拒否する", "借金する", "割り勘にする"],
         correctAnswer: "勘定を払う"
      },
      {
        id: 3368,
        question: "gird",
        choices: ["締める", "緩める", "切る", "開ける"],
         correctAnswer: "締める"
      },
      {
        id: 3369,
        question: "aegis",
        choices: ["保護", "攻撃", "批判", "放棄"],
         correctAnswer: "保護"
      },
      {
        id: 3370,
        question: "either way",
        choices: ["どちらにしても", "片方だけ", "一方的に", "どちらも関係ない"],
         correctAnswer: "どちらにしても"
      },
      {
        id: 3371,
        question: "absolve",
        choices: ["免除する", "課す", "禁止する", "強制する"],
         correctAnswer: "免除する"
      },
      {
        id: 3372,
        question: "be obliged to",
        choices: ["義務を負う", "自由である", "放棄する", "回避する"],
         correctAnswer: "義務を負う"
      },
      {
        id: 3373,
        question: "faze",
        choices: ["心を騒がせる", "安心させる", "無視する", "沈静化する"],
         correctAnswer: "心を騒がせる"
      },
      {
        id: 3374,
        question: "prohibit A from doing",
        choices: ["Aがすることを禁止する", "Aに許可する", "Aに奨励する", "Aに求める"],
         correctAnswer: "Aがすることを禁止する"
      },
      {
        id: 3375,
        question: "fruition",
        choices: ["結実", "失敗", "崩壊", "減少"],
         correctAnswer: "結実"
      },
      {
        id: 3376,
        question: "epitomize",
        choices: ["縮める", "拡張する", "分裂する", "破壊する"],
         correctAnswer: "縮める"
      },
      {
        id: 3377,
        question: "buttock",
        choices: ["臀部", "腕", "首", "足"],
         correctAnswer: "臀部"
      },
      {
        id: 3378,
        question: "uncouth",
        choices: ["粗野な", "上品な", "礼儀正しい", "繊細な"],
         correctAnswer: "粗野な"
      },
      {
        id: 3379,
        question: "reminiscent",
        choices: ["思い出させる", "忘れさせる", "無関係な", "誤解を生む"],
         correctAnswer: "思い出させる"
      },
      {
        id: 3380,
        question: "mesmerize",
        choices: ["魅了する", "退屈させる", "無視する", "避ける"],
         correctAnswer: "魅了する"
      },
      {
        id: 3381,
        question: "not absolutely",
        choices: ["絶対ではない", "確実に", "間違いなく", "絶対的に"],
         correctAnswer: "絶対ではない"
      },
      {
        id: 3382,
        question: "hone",
        choices: ["砥石", "剣", "槍", "盾"],
         correctAnswer: "砥石"
      },
      {
        id: 3383,
        question: "belittle",
        choices: ["見くびる", "称賛する", "評価する", "励ます"],
         correctAnswer: "見くびる"
      },
      {
        id: 3384,
        question: "aptitude",
        choices: ["適性", "無能", "無関心", "無感覚"],
         correctAnswer: "適性"
      },
      {
        id: 3385,
        question: "belie",
        choices: ["食い違う", "一致する", "支配する", "調和する"],
         correctAnswer: "食い違う"
      },
      {
        id: 3386,
        question: "in a bad temper",
        choices: ["不機嫌に", "上機嫌で", "楽観的に", "冷静に"],
         correctAnswer: "不機嫌に"
      },
      {
        id: 3387,
        question: "in focus",
        choices: ["焦点があっている", "ぼやけている", "ずれている", "関係ない"],
         correctAnswer: "焦点があっている"
      },
      {
        id: 3388,
        question: "gist",
        choices: ["要旨", "詳細", "補足", "矛盾"],
         correctAnswer: "要旨"
      },
      {
        id: 3389,
        question: "have a tendency to",
        choices: ["する傾向がある", "避ける", "気にしない", "無関心である"],
         correctAnswer: "する傾向がある"
      },
      {
        id: 3390,
        question: "coop",
        choices: ["鳥かご", "犬小屋", "水槽", "洞窟"],
         correctAnswer: "鳥かご"
      },
      {
        id: 3391,
        question: "touch down",
        choices: ["着陸する", "離陸する", "停止する", "旋回する"],
         correctAnswer: "着陸する"
      },
      {
        id: 3392,
        question: "consummation",
        choices: ["完結", "中断", "始まり", "廃止"],
         correctAnswer: "完結"
      },
      {
        id: 3393,
        question: "allegory",
        choices: ["たとえ話", "命令", "予言", "暗示"],
         correctAnswer: "たとえ話"
      },
      {
        id: 3394,
        question: "antigen",
        choices: ["抗原", "抗体", "細胞", "酵素"],
         correctAnswer: "抗原"
      },
      {
        id: 3395,
        question: "sojourn",
        choices: ["短期滞在する", "永住する", "旅行する", "引っ越す"],
         correctAnswer: "短期滞在する"
      },
      {
        id: 3396,
        question: "commit suicide",
        choices: ["自殺する", "結婚する", "卒業する", "避難する"],
         correctAnswer: "自殺する"
      },
      {
        id: 3397,
        question: "pertain to",
        choices: ["に関係する", "無関係である", "避ける", "疑う"],
         correctAnswer: "に関係する"
      },
      {
        id: 3398,
        question: "colt",
        choices: ["子馬", "狼", "鹿", "子猫"],
         correctAnswer: "子馬"
      },
      {
        id: 3399,
        question: "at one's disposal",
        choices: ["自由に", "制限されて", "禁止されて", "強制されて"],
         correctAnswer: "自由に"
      },
      {
        id: 3400,
        question: "projectile",
        choices: ["発射される", "落ちる", "固定される", "沈む"],
         correctAnswer: "発射される"
      },
      {
        id: 3401,
        question: "at length",
        choices: ["長い間", "短時間", "すぐに", "頻繁に"],
         correctAnswer: "長い間"
      },
      {
        id: 3402,
        question: "blemish",
        choices: ["傷", "輝き", "清潔", "装飾"],
         correctAnswer: "傷"
      },
      {
        id: 3403,
        question: "deadlock",
        choices: ["行き詰まり", "成功", "解決", "進展"],
         correctAnswer: "行き詰まり"
      },
      {
        id: 3404,
        question: "equate A with B",
        choices: ["AとBを等しくする", "AとBを区別する", "AとBを混同する", "AとBを無関係にする"],
         correctAnswer: "AとBを等しくする"
      },
      {
        id: 3405,
        question: "speak ill of",
        choices: ["の悪口を言う", "の良い話をする", "の話を避ける", "の意見を求める"],
         correctAnswer: "の悪口を言う"
      },
      {
        id: 3406,
        question: "exchequer",
        choices: ["国庫", "市場", "銀行", "取引所"],
         correctAnswer: "国庫"
      },
      {
        id: 3407,
        question: "in parallel",
        choices: ["並行して", "逆方向に", "交差して", "単独で"],
         correctAnswer: "並行して"
      },
      {
        id: 3408,
        question: "allele",
        choices: ["対立遺伝子", "DNA鎖", "RNA", "染色体"],
         correctAnswer: "対立遺伝子"
      },
      {
        id: 3409,
        question: "allot",
        choices: ["割り当てる", "奪う", "変更する", "拒否する"],
         correctAnswer: "割り当てる"
      },
      {
        id: 3410,
        question: "exonerate",
        choices: ["無罪放免する", "有罪とする", "罰する", "疑う"],
         correctAnswer: "無罪放免する"
      },
      {
        id: 3411,
        question: "nag",
        choices: ["小言を言う", "褒める", "無視する", "励ます"],
         correctAnswer: "小言を言う"
      },
      {
        id: 3412,
        question: "get hold of",
        choices: ["を手に入れる", "を捨てる", "を拒否する", "を無視する"],
         correctAnswer: "を手に入れる"
      },
      {
        id: 3413,
        question: "honk",
        choices: ["警笛", "囁き", "爆音", "沈黙"],
         correctAnswer: "警笛"
      },
      {
        id: 3414,
        question: "imbue",
        choices: ["吹き込む", "奪う", "削る", "変える"],
         correctAnswer: "吹き込む"
      },
      {
        id: 3415,
        question: "good for nothing",
        choices: ["何の役にも立たない", "才能がある", "優秀な", "有能な"],
         correctAnswer: "何の役にも立たない"
      },
      {
        id: 3416,
        question: "catch on with",
        choices: ["に追いつく", "を逃す", "を避ける", "を疑う"],
         correctAnswer: "に追いつく"
      },
      {
        id: 3417,
        question: "rescind",
        choices: ["取り消す", "承認する", "更新する", "適用する"],
         correctAnswer: "取り消す"
      },
      {
        id: 3418,
        question: "broach",
        choices: ["先の尖ったもの", "平たいもの", "曲がったもの", "壊れたもの"],
         correctAnswer: "先の尖ったもの"
      },
      {
        id: 3419,
        question: "behind the scenes",
        choices: ["舞台裏で", "公然と", "明るみに出て", "見えない所で"],
         correctAnswer: "舞台裏で"
      },
      {
        id: 3420,
        question: "lurk",
        choices: ["潜む", "逃げる", "歩く", "隠れない"],
         correctAnswer: "潜む"
      },
      {
        id: 3421,
        question: "be identical to",
        choices: ["と同一である", "と異なる", "と無関係である", "と区別される"],
         correctAnswer: "と同一である"
      },
      {
        id: 3422,
        question: "conjure up",
        choices: ["素早く出す", "破壊する", "消去する", "無視する"],
         correctAnswer: "素早く出す"
      },
      {
        id: 3423,
        question: "redress",
        choices: ["矯正する", "悪化させる", "改悪する", "混乱させる"],
         correctAnswer: "矯正する"
      },
      {
        id: 3424,
        question: "rustle",
        choices: ["さらさら音を立てる", "静かにする", "無音にする", "止める"],
         correctAnswer: "さらさら音を立てる"
      },
      {
        id: 3425,
        question: "the lion's share",
        choices: ["最大の分け前", "小さな部分", "公平な分け前", "少量"],
         correctAnswer: "最大の分け前"
      },
      {
        id: 3426,
        question: "backdrop",
        choices: ["背景幕", "前景", "中心", "側面"],
         correctAnswer: "背景幕"
      },
      {
        id: 3427,
        question: "rule of thumb",
        choices: ["大雑把な方法", "厳密な計算", "計画的な手法", "不正確な推測"],
         correctAnswer: "大雑把な方法"
      },
      {
        id: 3428,
        question: "resonate",
        choices: ["反響する", "吸収する", "無音になる", "減少する"],
         correctAnswer: "反響する"
      },
      {
        id: 3429,
        question: "round and round",
        choices: ["グルグルと", "まっすぐに", "止まって", "横に移動して"],
         correctAnswer: "グルグルと"
      },
      {
        id: 3430,
        question: "aquifer",
        choices: ["帯水層", "砂漠", "山脈", "平野"],
         correctAnswer: "帯水層"
      },
      {
        id: 3431,
        question: "cartilage",
        choices: ["軟骨", "靭帯", "腱", "筋肉"],
         correctAnswer: "軟骨"
      },
      {
        id: 3432,
        question: "reminisce",
        choices: ["思い出話をする", "忘れる", "秘密にする", "否定する"],
         correctAnswer: "思い出話をする"
      },
      {
        id: 3433,
        question: "succulent",
        choices: ["多液の", "乾燥した", "酸っぱい", "無味の"],
         correctAnswer: "多液の"
      },
      {
        id: 3434,
        question: "herein",
        choices: ["この場所で", "外部で", "後で", "以前に"],
         correctAnswer: "この場所で"
      },
      {
        id: 3435,
        question: "unscrupulous",
        choices: ["悪質な", "正直な", "誠実な", "公平な"],
         correctAnswer: "悪質な"
      },
      {
        id: 3436,
        question: "hand in hand with",
        choices: ["手を取り合って", "敵対して", "遠ざかって", "無関係に"],
         correctAnswer: "手を取り合って"
      },
      {
        id: 3437,
        question: "all told",
        choices: ["全体で", "部分的に", "例外を除いて", "ある程度"],
         correctAnswer: "全体で"
      },
      {
        id: 3438,
        question: "renege",
        choices: ["誓いに背く", "約束を守る", "信頼する", "実行する"],
         correctAnswer: "誓いに背く"
      },
      {
        id: 3439,
        question: "take heart",
        choices: ["勢い付く", "落胆する", "無視する", "諦める"],
         correctAnswer: "勢い付く"
      },
      {
        id: 3440,
        question: "vanquish",
        choices: ["征服する", "敗北する", "避ける", "同盟する"],
         correctAnswer: "征服する"
      },
      {
        id: 3441,
        question: "to some degree",
        choices: ["ある程度", "全く", "ほとんど", "全然"],
         correctAnswer: "ある程度"
      },
      {
        id: 3442,
        question: "exemplar",
        choices: ["模範", "例外", "誤り", "失敗"],
         correctAnswer: "模範"
      },
      {
        id: 3443,
        question: "decimate",
        choices: ["殺す", "守る", "回復する", "治療する"],
         correctAnswer: "殺す"
      },
      {
        id: 3444,
        question: "figment",
        choices: ["作りごと", "事実", "証拠", "歴史"],
         correctAnswer: "作りごと"
      },
      {
        id: 3445,
        question: "run errands",
        choices: ["使い走りをする", "怠ける", "休憩する", "逃げる"],
         correctAnswer: "使い走りをする"
      },
      {
        id: 3446,
        question: "inquire after",
        choices: ["の安否を尋ねる", "叱る", "拒否する", "疑う"],
         correctAnswer: "の安否を尋ねる"
      },
      {
        id: 3447,
        question: "echelon",
        choices: ["梯形編成", "単独行動", "バラバラな状態", "対立関係"],
         correctAnswer: "梯形編成"
      },
      {
        id: 3448,
        question: "as far as A is concerned",
        choices: ["Aに関する限りでは", "Aと無関係に", "Aを除いて", "Aを無視して"],
         correctAnswer: "Aに関する限りでは"
      },
      {
        id: 3449,
        question: "epiphany",
        choices: ["悟り", "疑問", "誤解", "混乱"],
         correctAnswer: "悟り"
      },
      {
        id: 3450,
        question: "wriggle",
        choices: ["体をくねらせる", "飛び跳ねる", "歩く", "倒れる"],
         correctAnswer: "体をくねらせる"
      },
      {
        id: 3451,
        question: "brook",
        choices: ["小川", "湖", "海", "砂漠"],
         correctAnswer: "小川"
      },
      {
        id: 3452,
        question: "crease",
        choices: ["折り目", "穴", "汚れ", "線"],
         correctAnswer: "折り目"
      },
      {
        id: 3453,
        question: "duchess",
        choices: ["公爵夫人", "王子", "女王", "姫"],
         correctAnswer: "公爵夫人"
      },
      {
        id: 3454,
        question: "in abundance",
        choices: ["大量に", "少しだけ", "ほとんどない", "皆無"],
         correctAnswer: "大量に"
      },
      {
        id: 3455,
        question: "sundry",
        choices: ["雑多な", "単一の", "整理された", "分類された"],
         correctAnswer: "雑多な"
      },
      {
        id: 3456,
        question: "debunk",
        choices: ["正体を暴露する", "称賛する", "誤解する", "認める"],
         correctAnswer: "正体を暴露する"
      },
      {
        id: 3457,
        question: "camaraderie",
        choices: ["仲間意識", "対立", "敵意", "孤独"],
         correctAnswer: "仲間意識"
      },
      {
        id: 3458,
        question: "be innocent of",
        choices: ["無罪の", "有罪の", "犯罪者の", "罰せられる"],
         correctAnswer: "無罪の"
      },
      {
        id: 3459,
        question: "exhortation",
        choices: ["勧め", "拒否", "強制", "避難"],
         correctAnswer: "勧め"
      },
      {
        id: 3460,
        question: "quaver",
        choices: ["震える", "安定する", "強くなる", "止まる"],
         correctAnswer: "震える"
      },
      {
        id: 3461,
        question: "acupuncture",
        choices: ["鍼", "薬", "治療", "診断"],
         correctAnswer: "鍼"
      },
      {
        id: 3462,
        question: "way to go",
        choices: ["良い調子", "悪化", "停滞", "失敗"],
         correctAnswer: "良い調子"
      },
      {
        id: 3463,
        question: "barge in",
        choices: ["入り込む", "立ち去る", "避ける", "遅れる"],
         correctAnswer: "入り込む"
      },
      {
        id: 3464,
        question: "veer",
        choices: ["方向を変える", "維持する", "固定する", "直進する"],
         correctAnswer: "方向を変える"
      },
      {
        id: 3465,
        question: "pull up to",
        choices: ["追いつく", "遅れる", "離れる", "止まる"],
         correctAnswer: "追いつく"
      },
      {
        id: 3466,
        question: "canopy",
        choices: ["天蓋", "床", "壁", "柱"],
         correctAnswer: "天蓋"
      },
      {
        id: 3467,
        question: "subterranean",
        choices: ["地下の", "地上の", "高所の", "海上の"],
         correctAnswer: "地下の"
      },
      {
        id: 3468,
        question: "keep abreast of",
        choices: ["を常に把握している", "を無視する", "を見失う", "を避ける"],
         correctAnswer: "を常に把握している"
      },
      {
        id: 3469,
        question: "surly",
        choices: ["不機嫌な", "陽気な", "親しみやすい", "落ち着いた"],
         correctAnswer: "不機嫌な"
      },
      {
        id: 3470,
        question: "pelt",
        choices: ["投げて攻撃する", "守る", "避ける", "捨てる"],
         correctAnswer: "投げて攻撃する"
      },
      {
        id: 3471,
        question: "be about to do",
        choices: ["やろうとしている", "やめる", "忘れる", "避ける"],
         correctAnswer: "やろうとしている"
      },
      {
        id: 3472,
        question: "set a precedent",
        choices: ["先例を作る", "忘れる", "妨害する", "廃止する"],
         correctAnswer: "先例を作る"
      },
      {
        id: 3473,
        question: "artifice",
        choices: ["巧みさ", "愚鈍", "無知", "単純さ"],
         correctAnswer: "巧みさ"
      },
      {
        id: 3474,
        question: "on the decline",
        choices: ["衰退中の", "成長中の", "安定している", "ピークにある"],
         correctAnswer: "衰退中の"
      },
      {
        id: 3475,
        question: "exponentially",
        choices: ["指数関数的に", "直線的に", "ゆっくりと", "一定の割合で"],
         correctAnswer: "指数関数的に"
      },
      {
        id: 3476,
        question: "slither",
        choices: ["するする滑る", "跳ぶ", "転ぶ", "止まる"],
         correctAnswer: "するする滑る"
      },
      {
        id: 3477,
        question: "daub",
        choices: ["塗りつぶす", "拭く", "削る", "刻む"],
         correctAnswer: "塗りつぶす"
      },
      {
        id: 3478,
        question: "eavesdrop",
        choices: ["盗聴する", "聞き逃す", "無視する", "話しかける"],
         correctAnswer: "盗聴する"
      },
      {
        id: 3479,
        question: "compunction",
        choices: ["良心の呵責", "冷淡", "図太さ", "無関心"],
         correctAnswer: "良心の呵責"
      },
      {
        id: 3480,
        question: "berate",
        choices: ["叱りつける", "褒める", "避ける", "和らげる"],
         correctAnswer: "叱りつける"
      },
      {
        id: 3481,
        question: "chew on",
        choices: ["かじりつく", "飲み込む", "吐き出す", "避ける"],
         correctAnswer: "かじりつく"
      },
      {
        id: 3482,
        question: "exhilarating",
        choices: ["爽快にさせる", "落胆させる", "退屈な", "無感動な"],
         correctAnswer: "爽快にさせる"
      },
      {
        id: 3483,
        question: "affliction",
        choices: ["苦痛", "快楽", "幸福", "癒し"],
         correctAnswer: "苦痛"
      },
      {
        id: 3484,
        question: "bard",
        choices: ["吟遊詩人", "王様", "騎士", "奴隷"],
         correctAnswer: "吟遊詩人"
      },
      {
        id: 3485,
        question: "bear fruit",
        choices: ["実を結ぶ", "失敗する", "枯れる", "諦める"],
         correctAnswer: "実を結ぶ"
      },
      {
        id: 3486,
        question: "succinct",
        choices: ["簡潔な", "長々しい", "曖昧な", "詳細な"],
         correctAnswer: "簡潔な"
      },
      {
        id: 3487,
        question: "benevolence",
        choices: ["慈悲", "冷酷", "無関心", "敵意"],
         correctAnswer: "慈悲"
      },
      {
        id: 3488,
        question: "dally",
        choices: ["弄ぶ", "真剣にする", "拒否する", "急ぐ"],
         correctAnswer: "弄ぶ"
      },
      {
        id: 3489,
        question: "concussion",
        choices: ["脳震盪", "骨折", "内出血", "打撲"],
         correctAnswer: "脳震盪"
      },
      {
        id: 3490,
        question: "wear and tear",
        choices: ["磨耗", "修理", "新品", "再利用"],
         correctAnswer: "磨耗"
      },
      {
        id: 3491,
        question: "to no purpose",
        choices: ["何の目的もなく", "明確な意図を持って", "計画的に", "効果的に"],
         correctAnswer: "何の目的もなく"
      },
      {
        id: 3492,
        question: "tremulous",
        choices: ["震えた", "安定した", "強固な", "無感動な"],
         correctAnswer: "震えた"
      },
      {
        id: 3493,
        question: "at issue",
        choices: ["問題の", "解決済みの", "無関係の", "確定した"],
         correctAnswer: "問題の"
      },
      {
        id: 3494,
        question: "loud and clear",
        choices: ["はっきりと", "曖昧に", "小声で", "隠れて"],
         correctAnswer: "はっきりと"
      },
      {
        id: 3495,
        question: "extortion",
        choices: ["恐喝", "善行", "寄付", "奨励"],
         correctAnswer: "恐喝"
      },
      {
        id: 3496,
        question: "fortress",
        choices: ["要塞", "寺院", "学校", "公園"],
         correctAnswer: "要塞"
      },
      {
        id: 3497,
        question: "concomitant",
        choices: ["付随する", "独立した", "重要な", "避けられる"],
         correctAnswer: "付随する"
      },
      {
        id: 3498,
        question: "black out",
        choices: ["消灯する", "明るくする", "強調する", "表示する"],
         correctAnswer: "消灯する"
      },
      {
        id: 3499,
        question: "diverge",
        choices: ["分岐する", "統合する", "集まる", "一致する"],
         correctAnswer: "分岐する"
      },
      {
        id: 3500,
        question: "ship out",
        choices: ["出荷する", "受け取る", "保持する", "返品する"],
         correctAnswer: "出荷する"
      },
      {
        id: 3501,
        question: "claimant",
        choices: ["申立人", "裁判官", "被告", "証人"],
         correctAnswer: "申立人"
      },
      {
        id: 3502,
        question: "gill",
        choices: ["えら", "ひれ", "羽根", "爪"],
         correctAnswer: "えら"
      },
      {
        id: 3503,
        question: "in vogue",
        choices: ["流行している", "廃れている", "古臭い", "定番の"],
         correctAnswer: "流行している"
      },
      {
        id: 3504,
        question: "ingest",
        choices: ["摂取する", "吐き出す", "消化する", "吸収しない"],
         correctAnswer: "摂取する"
      },
      {
        id: 3505,
        question: "stick up",
        choices: ["上に突き出る", "沈む", "崩れる", "横に倒れる"],
         correctAnswer: "上に突き出る"
      },
      {
        id: 3506,
        question: "constellation",
        choices: ["星座", "惑星", "流星", "衛星"],
         correctAnswer: "星座"
      },
      {
        id: 3507,
        question: "be qualified to",
        choices: ["の資格がある", "不適格である", "免除される", "関係がない"],
         correctAnswer: "の資格がある"
      },
      {
        id: 3508,
        question: "heirloom",
        choices: ["家宝", "家具", "雑貨", "道具"],
         correctAnswer: "家宝"
      },
      {
        id: 3509,
        question: "doze",
        choices: ["居眠りをする", "深く眠る", "目を覚ます", "活動する"],
         correctAnswer: "居眠りをする"
      },
      {
        id: 3510,
        question: "on trial",
        choices: ["試用中で", "正式採用", "保証付き", "確定済み"],
         correctAnswer: "試用中で"
      },
      {
        id: 3511,
        question: "cuddle",
        choices: ["抱きしめる", "叩く", "避ける", "投げる"],
         correctAnswer: "抱きしめる"
      },
      {
        id: 3512,
        question: "enjoin",
        choices: ["命じる", "勧める", "拒否する", "放棄する"],
         correctAnswer: "命じる"
      },
      {
        id: 3513,
        question: "amnesia",
        choices: ["健忘症", "不眠症", "精神疾患", "神経症"],
         correctAnswer: "健忘症"
      },
      {
        id: 3514,
        question: "capitalize on",
        choices: ["を利用する", "を浪費する", "を避ける", "を拒否する"],
         correctAnswer: "を利用する"
      },
      {
        id: 3515,
        question: "chum",
        choices: ["仲良し", "敵", "上司", "他人"],
         correctAnswer: "仲良し"
      },
      {
        id: 3516,
        question: "be vulnerable to",
        choices: ["に弱い", "に強い", "に無関心", "に影響されない"],
         correctAnswer: "に弱い"
      },
      {
        id: 3517,
        question: "all in one",
        choices: ["全て含んで", "分割して", "排除して", "制限して"],
         correctAnswer: "全て含んで"
      },
      {
        id: 3518,
        question: "oftentimes",
        choices: ["しばしば", "めったに", "一度だけ", "全くない"],
         correctAnswer: "しばしば"
      },
      {
        id: 3519,
        question: "promulgate",
        choices: ["公布する", "否定する", "破棄する", "隠す"],
         correctAnswer: "公布する"
      },
      {
        id: 3520,
        question: "in a nutshell",
        choices: ["一言で言えば", "詳細に説明すると", "曖昧に言うと", "間接的に言うと"],
         correctAnswer: "一言で言えば"
      },
      {
        id: 3521,
        question: "glide",
        choices: ["滑る", "止まる", "跳ねる", "落ちる"],
         correctAnswer: "滑る"
      },
      {
        id: 3522,
        question: "forget oneself",
        choices: ["我を忘れる", "自分を見つめ直す", "冷静になる", "自制する"],
         correctAnswer: "我を忘れる"
      },
      {
        id: 3523,
        question: "confluence",
        choices: ["合流", "分岐", "独立", "分裂"],
         correctAnswer: "合流"
      },
      {
        id: 3524,
        question: "scold A for B",
        choices: ["BのことでAを叱る", "AにBを褒める", "AにBを与える", "AにBを伝える"],
         correctAnswer: "BのことでAを叱る"
      },
      {
        id: 3525,
        question: "in radius",
        choices: ["半径で", "直径で", "円周で", "中心で"],
         correctAnswer: "半径で"
      },
      {
        id: 3526,
        question: "smolder",
        choices: ["燻る", "燃え上がる", "消火する", "爆発する"],
         correctAnswer: "燻る"
      },
      {
        id: 3527,
        question: "rank and file",
        choices: ["兵卒", "将軍", "貴族", "商人"],
         correctAnswer: "兵卒"
      },
      {
        id: 3528,
        question: "infatuate",
        choices: ["夢中にする", "嫌悪させる", "無関心にする", "退屈させる"],
         correctAnswer: "夢中にする"
      },
      {
        id: 3529,
        question: "venerate",
        choices: ["崇拝する", "軽蔑する", "無視する", "拒絶する"],
         correctAnswer: "崇拝する"
      },
      {
        id: 3530,
        question: "operate on",
        choices: ["を運営する", "を破壊する", "を閉鎖する", "を阻止する"],
         correctAnswer: "を運営する"
      },
      {
        id: 3531,
        question: "under fire",
        choices: ["攻撃を受けて", "安全な", "賛美されて", "休戦中で"],
         correctAnswer: "攻撃を受けて"
      },
      {
        id: 3532,
        question: "hereby",
        choices: ["ここに", "そこに", "どこでも", "どこにもない"],
         correctAnswer: "ここに"
      },
      {
        id: 3533,
        question: "extoll",
        choices: ["称える", "非難する", "軽視する", "無視する"],
         correctAnswer: "称える"
      },
      {
        id: 3534,
        question: "starve to death",
        choices: ["飢え死にする", "病死する", "事故死する", "戦死する"],
         correctAnswer: "飢え死にする"
      },
      {
        id: 3535,
        question: "fiduciary",
        choices: ["受託者", "借金取り", "詐欺師", "商人"],
         correctAnswer: "受託者"
      },
      {
        id: 3536,
        question: "trite",
        choices: ["ありふれた", "斬新な", "独特な", "奇抜な"],
         correctAnswer: "ありふれた"
      },
      {
        id: 3537,
        question: "conjecture",
        choices: ["推測", "確信", "証拠", "論理"],
         correctAnswer: "推測"
      },
      {
        id: 3538,
        question: "rectify",
        choices: ["修正する", "悪化させる", "維持する", "放置する"],
         correctAnswer: "修正する"
      },
      {
        id: 3539,
        question: "annexation",
        choices: ["付加", "削除", "統合", "分割"],
         correctAnswer: "付加"
      },
      {
        id: 3540,
        question: "by default",
        choices: ["既定では", "意図的に", "例外として", "強制的に"],
         correctAnswer: "既定では"
      },
      {
        id: 3541,
        question: "cramp",
        choices: ["けいれん", "骨折", "打撲", "脱臼"],
         correctAnswer: "けいれん"
      },
      {
        id: 3542,
        question: "heterogeneity",
        choices: ["異種", "均一性", "規則性", "類似性"],
         correctAnswer: "異種"
      },
      {
        id: 3543,
        question: "binge",
        choices: ["どんちゃん騒ぎ", "静寂", "節制", "断食"],
         correctAnswer: "どんちゃん騒ぎ"
      },
      {
        id: 3544,
        question: "deity",
        choices: ["神", "悪魔", "司祭", "僧侶"],
         correctAnswer: "神"
      },
      {
        id: 3545,
        question: "fissure",
        choices: ["亀裂", "平面", "丘", "谷"],
         correctAnswer: "亀裂"
      },
      {
        id: 3546,
        question: "give way",
        choices: ["道を譲る", "強く主張する", "攻撃する", "対抗する"],
         correctAnswer: "道を譲る"
      },
      {
        id: 3547,
        question: "up-to-date",
        choices: ["最新の", "古い", "時代遅れの", "修正が必要な"],
         correctAnswer: "最新の"
      },
      {
        id: 3548,
        question: "ill at ease",
        choices: ["落ち着かない", "安心している", "冷静な", "快適な"],
         correctAnswer: "落ち着かない"
      },
      {
        id: 3549,
        question: "wean",
        choices: ["離乳させる", "授乳する", "育てる", "甘やかす"],
         correctAnswer: "離乳させる"
      },
      {
        id: 3550,
        question: "shrivel",
        choices: ["萎ませる", "膨らませる", "延ばす", "強化する"],
         correctAnswer: "萎ませる"
      },
      {
        id: 3551,
        question: "glutton",
        choices: ['食いしん坊', '倹約家', '働き者', '怠け者'],
         correctAnswer: "食いしん坊"
    },
    {
        id: 3552,
        question: "for the purpose of",
        choices: ['の目的で', 'の結果として', 'の代わりに', 'の前に'],
         correctAnswer: "の目的で"
    },
    {
        id: 3553,
        question: "up to speed",
        choices: ['事情を理解している', '速く走る', '疲れている', '新しい技術を学ぶ'],
         correctAnswer: "事情を理解している"
    },
    {
        id: 3554,
        question: "dab",
        choices: ['軽くたたく', '激しくたたく', '強く押す', '引っ掻く'],
         correctAnswer: "軽くたたく"
    },
    {
        id: 3555,
        question: "heretic",
        choices: ['異端者', '聖職者', '信者', '伝道者'],
         correctAnswer: "異端者"
    },
    {
        id: 3556,
        question: "want for",
        choices: ['に欠ける', 'を求める', 'を拒否する', 'を提供する'],
         correctAnswer: "に欠ける"
    },
    {
        id: 3557,
        question: "hypnosis",
        choices: ['催眠', '睡眠', '覚醒', '幻覚'],
         correctAnswer: "催眠"
    },
    {
        id: 3558,
        question: "fixate",
        choices: ['定着させる', '取り除く', '広げる', '分解する'],
         correctAnswer: "定着させる"
    },
    {
        id: 3559,
        question: "inquire into",
        choices: ['を取り調べる', 'を無視する', 'を受け入れる', 'を報告する'],
         correctAnswer: "を取り調べる"
    },
    {
        id: 3560,
        question: "derelict",
        choices: ['浮浪者', '労働者', '地主', '貴族'],
         correctAnswer: "浮浪者"
    },
    {
        id: 3561,
        question: "acquiescence",
        choices: ['黙認', '反論', '支持', '拒絶'],
         correctAnswer: "黙認"
    },
    {
        id: 3562,
        question: "none the less",
        choices: ['それでもなお', 'それによって', 'それ以外', 'それにも関わらず'],
         correctAnswer: "それでもなお"
    },
    {
        id: 3563,
        question: "extrapolate",
        choices: ['推定する', '計算する', '検証する', '削除する'],
         correctAnswer: "推定する"
    },
    {
        id: 3564,
        question: "irrespective of",
        choices: ['に関わりなく', 'に従って', 'に対して', 'に沿って'],
         correctAnswer: "に関わりなく"
    },
    {
        id: 3565,
        question: "live through",
        choices: ['生き延びる', '忘れ去る', '隠れる', '捨て去る'],
         correctAnswer: "生き延びる"
    },
    {
        id: 3566,
        question: "fortitude",
        choices: ['不屈の精神', '臆病', '冷酷', '不正'],
         correctAnswer: "不屈の精神"
    },
    {
        id: 3567,
        question: "sulk",
        choices: ['拗ねる', '怒る', '喜ぶ', '泣く'],
         correctAnswer: "拗ねる"
    },
    {
        id: 3568,
        question: "in conclusion",
        choices: ['結論として', '途中で', '初めに', '逆に'],
         correctAnswer: "結論として"
    },
    {
        id: 3569,
        question: "dribble",
        choices: ['滴る', '止まる', '吸収する', '乾く'],
         correctAnswer: "滴る"
    },
    {
        id: 3570,
        question: "out of the woods",
        choices: ['困難を脱して', '森の中で', '未知の状態で', '迷っている'],
         correctAnswer: "困難を脱して"
    },
    {
        id: 3571,
        question: "elucidation",
        choices: ['解明', '誤解', '削除', '回避'],
         correctAnswer: "解明"
    },
    {
        id: 3572,
        question: "buy up",
        choices: ['全部買う', '売り払う', '借りる', '貸す'],
         correctAnswer: "全部買う"
    },
    {
        id: 3573,
        question: "foundry",
        choices: ['鋳造所', '農場', '工場', '研究所'],
         correctAnswer: "鋳造所"
    },
    {
        id: 3574,
        question: "snap out of",
        choices: ['から素早く脱出する', '落ち込む', '留まる', '集中する'],
         correctAnswer: "から素早く脱出する"
    },
    {
        id: 3575,
        question: "apparition",
        choices: ['亡霊', '奇跡', '光', '影'],
         correctAnswer: "亡霊"
    },
    {
        id: 3576,
        question: "in a breath",
        choices: ['一息で', 'ゆっくりと', '突然', '静かに'],
         correctAnswer: "一息で"
    },
    {
        id: 3577,
        question: "annotate",
        choices: ['注釈を付ける', '削除する', '複製する', '翻訳する'],
         correctAnswer: "注釈を付ける"
    },
    {
        id: 3578,
        question: "hook up",
        choices: ['つなぐ', '切り離す', '落とす', '拾う'],
         correctAnswer: "つなぐ"
    },
    {
        id: 3579,
        question: "alloy",
        choices: ['合金', '鉱石', '金属', '宝石'],
         correctAnswer: "合金"
    },
    {
        id: 3580,
        question: "baloney",
        choices: ['たわ言', '真実', '重要な話', '説明'],
         correctAnswer: "たわ言"
    },
    {
        id: 3581,
        question: "acrimony",
        choices: ['辛辣さ', '優しさ', '冷静さ', '温厚さ'],
         correctAnswer: "辛辣さ"
    },
    {
        id: 3582,
        question: "leer",
        choices: ['横目', '正面の視線', 'うつむく', '目をそらす'],
         correctAnswer: "横目"
    },
    {
        id: 3583,
        question: "indemnity",
        choices: ['補償', '罰金', '契約', '負債'],
         correctAnswer: "補償"
    },
    {
        id: 3584,
        question: "top off",
        choices: ['仕上げをする', '中断する', '修正する', '削る'],
         correctAnswer: "仕上げをする"
    },
    {
        id: 3585,
        question: "hackneyed",
        choices: ['使い古した', '新しい', '独創的な', '斬新な'],
         correctAnswer: "使い古した"
    },
    {
        id: 3586,
        question: "out of bounds",
        choices: ['立入禁止で', '制限内で', '指定区域内で', '範囲内で'],
         correctAnswer: "立入禁止で"
    },
    {
        id: 3587,
        question: "entrenched",
        choices: ['定着した', '変化しやすい', '短命な', '不安定な'],
         correctAnswer: "定着した"
    },
    {
        id: 3588,
        question: "gubernatorial",
        choices: ['総督の', '国王の', '議員の', '貴族の'],
         correctAnswer: "総督の"
    },
    {
        id: 3589,
        question: "free up",
        choices: ['解放する', '固定する', '削除する', '制限する'],
         correctAnswer: "解放する"
    },
    {
        id: 3590,
        question: "pancreatic",
        choices: ['膵臓の', '腎臓の', '肝臓の', '心臓の'],
         correctAnswer: "膵臓の"
    },
    {
        id: 3591,
        question: "fretting",
        choices: ['イライラしている', '落ち着いている', '冷静な', '無関心な'],
         correctAnswer: "イライラしている"
    },
    {
        id: 3592,
        question: "trot out",
        choices: ['持ち出す', '隠す', '否定する', '拒否する'],
         correctAnswer: "持ち出す"
    },
    {
        id: 3593,
        question: "prosaic",
        choices: ['散文の', '詩的な', '創造的な', '劇的な'],
         correctAnswer: "散文の"
    },
    {
        id: 3594,
        question: "word for word",
        choices: ['一言一句', '要約して', '省略して', '意訳して'],
         correctAnswer: "一言一句"
    },
    {
        id: 3595,
        question: "kindred",
        choices: ['親族', '友人', '敵', '隣人'],
         correctAnswer: "親族"
    },
    {
        id: 3596,
        question: "as A as ever",
        choices: ['いつものようにAな', '例外的にAな', '異常にAな', '珍しくAな'],
         correctAnswer: "いつものようにAな"
    },
    {
        id: 3597,
        question: "draw out",
        choices: ['引き抜く', '押し込む', '縮める', '短縮する'],
         correctAnswer: "引き抜く"
    },
    {
        id: 3598,
        question: "apathetic",
        choices: ['無関心な', '熱心な', '積極的な', '感情的な'],
         correctAnswer: "無関心な"
    },
    {
        id: 3599,
        question: "hardly, before",
        choices: ['ほとんど、前にしたことがない', '頻繁に行う', 'すぐに対応する', '慎重に計画する'],
         correctAnswer: "ほとんど、前にしたことがない"
    },
    {
        id: 3600,
        question: "repentance",
        choices: ['懺悔', '自慢', '称賛', '批判'],
         correctAnswer: "懺悔"
    },
    {
        id: 3601,
        question: "pop in",
        choices: ['飛び込む', '出る', '隠れる', '歩く'],
         correctAnswer: "飛び込む"
    },
    {
        id: 3602,
        question: "rafter",
        choices: ['垂木', '柱', '梁', '屋根'],
         correctAnswer: "垂木"
    },
    {
        id: 3603,
        question: "back down on",
        choices: ['撤回する', '主張する', '強く押し出す', '維持する'],
         correctAnswer: "撤回する"
    },
    {
        id: 3604,
        question: "call down",
        choices: ['下に向かって叫ぶ', '褒める', '助言する', '祝う'],
         correctAnswer: "下に向かって叫ぶ"
    },
    {
        id: 3605,
        question: "auspicious",
        choices: ['縁起の良い', '不吉な', '怪しい', '疑わしい'],
         correctAnswer: "縁起の良い"
    },
    {
        id: 3606,
        question: "lay down",
        choices: ['を横たえる', '立てる', '押し込む', '回収する'],
         correctAnswer: "を横たえる"
    },
    {
        id: 3607,
        question: "prerogative",
        choices: ['特権', '義務', '責任', '制約'],
         correctAnswer: "特権"
    },
    {
        id: 3608,
        question: "leeway",
        choices: ['進路のずれ', '直線の道', '狭い道', '通行止め'],
         correctAnswer: "進路のずれ"
    },
    {
        id: 3609,
        question: "bestow A on B",
        choices: ['BにAを授ける', 'BからAを奪う', 'BとAを交換する', 'BをAに変える'],
         correctAnswer: "BにAを授ける"
    },
    {
        id: 3610,
        question: "on the brink of",
        choices: ['の危機に瀕して', 'の最中で', 'の終わりに', 'の後で'],
         correctAnswer: "の危機に瀕して"
    },
    {
        id: 3611,
        question: "the bottom line",
        choices: ['最低限', '最高水準', '平均値', '目標値'],
         correctAnswer: "最低限"
    },
    {
        id: 3612,
        question: "primacy",
        choices: ['優位性', '劣勢', '均衡', '無関係'],
         correctAnswer: "優位性"
    },
    {
        id: 3613,
        question: "flippant",
        choices: ['軽薄な', '真剣な', '誠実な', '堅実な'],
         correctAnswer: "軽薄な"
    },
    {
        id: 3614,
        question: "as a last resort",
        choices: ['最後の手段として', '最初の選択肢として', '途中で', '回避策として'],
         correctAnswer: "最後の手段として"
    },
    {
        id: 3615,
        question: "valor",
        choices: ['武勇', '臆病', '平和', '慎重'],
         correctAnswer: "武勇"
    },
    {
        id: 3616,
        question: "branch out",
        choices: ['手を広げる', '縮小する', '撤退する', '統合する'],
         correctAnswer: "手を広げる"
    },
    {
        id: 3617,
        question: "shroud",
        choices: ['覆い', '透明なもの', '支え', '布団'],
         correctAnswer: "覆い"
    },
    {
        id: 3618,
        question: "be consistent with",
        choices: ['に首尾一貫している', '矛盾している', '適していない', '対立している'],
         correctAnswer: "に首尾一貫している"
    },
    {
        id: 3619,
        question: "take delight in",
        choices: ['喜びを得る', '嫌悪する', '無視する', '軽視する'],
         correctAnswer: "喜びを得る"
    },
    {
        id: 3620,
        question: "inscrutable",
        choices: ['不可解な', '明白な', '分かりやすい', '単純な'],
         correctAnswer: "不可解な"
    },
    {
        id: 3621,
        question: "prim",
        choices: ['きちんとした', '乱雑な', '汚れた', '無造作な'],
         correctAnswer: "きちんとした"
    },
    {
        id: 3622,
        question: "valet",
        choices: ['係員', '客', '訪問者', '助手'],
         correctAnswer: "係員"
    },
    {
        id: 3623,
        question: "vignette",
        choices: ['飾り模様', '文章', '壁紙', '旗'],
         correctAnswer: "飾り模様"
    },
    {
        id: 3624,
        question: "ebriate",
        choices: ['興奮させる', '落ち着かせる', '鎮静する', '抑える'],
         correctAnswer: "興奮させる"
    },
    {
        id: 3625,
        question: "lithe",
        choices: ['しなやかな', '硬い', '鈍い', 'ぎこちない'],
         correctAnswer: "しなやかな"
    },
    {
        id: 3626,
        question: "catch up on",
        choices: ['に追い付く', '逃げる', '避ける', '離れる'],
         correctAnswer: "に追い付く"
    },
    {
        id: 3627,
        question: "ecclesiastical",
        choices: ['教会の', '軍事の', '法律の', '医療の'],
         correctAnswer: "教会の"
    },
    {
        id: 3628,
        question: "lenient",
        choices: ['寛大な', '厳格な', '冷酷な', '厳しい'],
         correctAnswer: "寛大な"
    },
    {
        id: 3629,
        question: "obdurate",
        choices: ['頑固な', '柔軟な', '寛容な', '適応力のある'],
         correctAnswer: "頑固な"
    },
    {
        id: 3630,
        question: "spell out",
        choices: ['綴りを書く', '略す', '削除する', '省略する'],
         correctAnswer: "綴りを書く"
    },
    {
        id: 3631,
        question: "submissive",
        choices: ['従順な', '反抗的な', '攻撃的な', '独立した'],
         correctAnswer: "従順な"
    },
    {
        id: 3632,
        question: "compete with",
        choices: ['と競争する', '協力する', '無視する', '避ける'],
         correctAnswer: "と競争する"
    },
    {
        id: 3633,
        question: "spearhead",
        choices: ['先陣', '追随者', '防衛者', '監視者'],
         correctAnswer: "先陣"
    },
    {
        id: 3634,
        question: "direct A to B",
        choices: ['AをBへ誘導する', 'AをBから遠ざける', 'AとBを分ける', 'AをBに送る'],
         correctAnswer: "AをBへ誘導する"
    },
    {
        id: 3635,
        question: "estranged",
        choices: ['疎遠になった', '親密な', '密接な', '強い絆のある'],
         correctAnswer: "疎遠になった"
    },
    {
        id: 3636,
        question: "burst into laughter",
        choices: ['どっと笑い出す', '泣き出す', '沈黙する', '考え込む'],
         correctAnswer: "どっと笑い出す"
    },
    {
        id: 3637,
        question: "cast off",
        choices: ['投げ捨てる', '拾う', '守る', '手に入れる'],
         correctAnswer: "投げ捨てる"
    },
    {
        id: 3638,
        question: "irrepressible",
        choices: ['抑えきれない', '制御できる', '静かな', '穏やかな'],
         correctAnswer: "抑えきれない"
    },
    {
        id: 3639,
        question: "genially",
        choices: ['和やかに', '冷たく', '厳しく', '暗く'],
         correctAnswer: "和やかに"
    },
    {
        id: 3640,
        question: "locomotive",
        choices: ['機関車', '車', 'バス', '自転車'],
         correctAnswer: "機関車"
    },
    {
        id: 3641,
        question: "drink up",
        choices: ['飲み干す', '注ぐ', 'こぼす', '捨てる'],
         correctAnswer: "飲み干す"
    },
    {
        id: 3642,
        question: "triad",
        choices: ['三人組', '四人組', '二人組', '五人組'],
         correctAnswer: "三人組"
    },
    {
        id: 3643,
        question: "vat",
        choices: ['おけ', 'ボウル', 'カップ', 'バケツ'],
         correctAnswer: "おけ"
    },
    {
        id: 3644,
        question: "retorted",
        choices: ['言い返した', '沈黙した', '納得した', '受け入れた'],
         correctAnswer: "言い返した"
    },
    {
        id: 3645,
        question: "stumbling block",
        choices: ['障害', '助け', '道しるべ', '目標'],
         correctAnswer: "障害"
    },
    {
        id: 3646,
        question: "nil",
        choices: ['無', '一', '百', '全て'],
         correctAnswer: "無"
    },
    {
        id: 3647,
        question: "expedient",
        choices: ['都合の良い', '不便な', '遅い', '無駄な'],
         correctAnswer: "都合の良い"
    },
    {
        id: 3648,
        question: "utensil",
        choices: ['器具', '食品', '布', '液体'],
         correctAnswer: "器具"
    },
    {
        id: 3649,
        question: "extemporaneous",
        choices: ['即席の', '計画的な', '慎重な', '準備された'],
         correctAnswer: "即席の"
    },
    {
        id: 3650,
        question: "indolent",
        choices: ['怠惰な', '勤勉な', '努力する', '意欲的な'],
         correctAnswer: "怠惰な"
    },
    {
        id: 3651,
        question: "preponderance",
        choices: ['優勢', '劣勢', '均衡', '中立'],
         correctAnswer: "優勢"
    },
    {
        id: 3652,
        question: "do an injustice to",
        choices: ['誤解する', '正しく評価する', '賞賛する', '支持する'],
         correctAnswer: "誤解する"
    },
    {
        id: 3653,
        question: "sinew",
        choices: ['腱', '骨', '皮膚', '血管'],
         correctAnswer: "腱"
    },
    {
        id: 3654,
        question: "appalled",
        choices: ['不安でいっぱいの', '安心した', '喜んだ', '落ち着いた'],
         correctAnswer: "不安でいっぱいの"
    },
    {
        id: 3655,
        question: "humdrum",
        choices: ['平凡な', '独特な', '派手な', '珍しい'],
         correctAnswer: "平凡な"
    },
    {
        id: 3656,
        question: "nascent",
        choices: ['初期の', '完成した', '消滅した', '終わった'],
         correctAnswer: "初期の"
    },
    {
        id: 3657,
        question: "put down",
        choices: ['下へ降ろす', '持ち上げる', '拾い上げる', '保存する'],
         correctAnswer: "下へ降ろす"
    },
    {
        id: 3658,
        question: "frantic",
        choices: ['気が狂ったような', '冷静な', '落ち着いた', '穏やかな'],
         correctAnswer: "気が狂ったような"
    },
    {
        id: 3659,
        question: "fall victim to",
        choices: ['の犠牲になる', '成功する', '助かる', '逃げる'],
         correctAnswer: "の犠牲になる"
    },
    {
        id: 3660,
        question: "vicarious",
        choices: ['想像して感じた', '直接経験した', '無関心な', '無感情な'],
         correctAnswer: "想像して感じた"
    },
    {
        id: 3661,
        question: "sit back",
        choices: ['深く座る', '立ち上がる', '前に出る', '走る'],
         correctAnswer: "深く座る"
    },
    {
        id: 3662,
        question: "wind up",
        choices: ['終わりにする', '始める', '続ける', '再開する'],
         correctAnswer: "終わりにする"
    },
    {
        id: 3663,
        question: "spatula",
        choices: ['へら', 'ナイフ', 'スプーン', 'フォーク'],
         correctAnswer: "へら"
    },
    {
        id: 3664,
        question: "filial",
        choices: ['子の', '親の', '友人の', '兄弟の'],
         correctAnswer: "子の"
    },
    {
        id: 3665,
        question: "one and only",
        choices: ['たった一つだけ', 'いくつかの', '多くの', 'すべての'],
         correctAnswer: "たった一つだけ"
    },
    {
        id: 3666,
        question: "preemptive",
        choices: ['先制の', '受動的な', '防御的な', '慎重な'],
         correctAnswer: "先制の"
    },
    {
        id: 3667,
        question: "trident",
        choices: ['三つ又の鉾', '剣', '盾', '槍'],
         correctAnswer: "三つ又の鉾"
    },
    {
        id: 3668,
        question: "in the suburbs of",
        choices: ['の郊外で', 'の中心で', 'の内部で', 'の端で'],
         correctAnswer: "の郊外で"
    },
    {
        id: 3669,
        question: "laity",
        choices: ['信徒たち', '聖職者たち', '学者たち', '兵士たち'],
         correctAnswer: "信徒たち"
    },
    {
        id: 3670,
        question: "serviceman",
        choices: ['軍人', '医者', '教師', '商人'],
         correctAnswer: "軍人"
    },
    {
      id: 3671,
     question: "in the middle of nowhere",
      choices: ['辺ぴな所に', '都会に', '混雑した場所に', '観光地に'],
      correctAnswer: "辺ぴな所に"
  },
  {
      id: 3672,
     question: "valiant",
      choices: ['勇敢な', '臆病な', '弱気な', '慎重な'],
      correctAnswer: "勇敢な"
  },
  {
      id: 3673,
     question: "intangible",
      choices: ['触れられない', '触れる', '明確な', '具体的な'],
      correctAnswer: "触れられない"
  },
  {
      id: 3674,
     question: "check up on",
      choices: ['調べる', '無視する', '忘れる', 'やめる'],
      correctAnswer: "調べる"
  },
  {
      id: 3675,
     question: "vestige",
      choices: ['痕跡', '完全なもの', '未来', '変化'],
      correctAnswer: "痕跡"
  },
  {
      id: 3676,
     question: "incongruous",
      choices: ['一致しない', '調和する', '適合する', '合致する'],
      correctAnswer: "一致しない"
  },
  {
      id: 3677,
     question: "be crowded with",
      choices: ['混んでいる', '空いている', '閑散としている', '快適な'],
      correctAnswer: "混んでいる"
  },
  {
      id: 3678,
     question: "residual",
      choices: ['残りの', '完全な', '最初の', 'すべての'],
      correctAnswer: "残りの"
  },
  {
      id: 3679,
     question: "be obliged to do",
      choices: ['する義務がある', '自由に選べる', 'やらなくてよい', '避けられる'],
      correctAnswer: "する義務がある"
  },
  {
      id: 3680,
     question: "to no avail",
      choices: ['無駄に', '成功して', '有益に', '役立つ'],
      correctAnswer: "無駄に"
  },
  {
      id: 3681,
     question: "live out",
      choices: ['生き延びる', '終わる', '忘れる', '逃げる'],
      correctAnswer: "生き延びる"
  },
  {
      id: 3682,
     question: "rigorous",
      choices: ['厳格な', '緩やかな', '優しい', '適当な'],
      correctAnswer: "厳格な"
  },
  {
      id: 3683,
     question: "auxiliary",
      choices: ['補助の', '主要な', '最重要の', '第一の'],
      correctAnswer: "補助の"
  },
  {
      id: 3684,
     question: "draw back",
      choices: ['引き戻す', '押し進める', '固定する', '確定する'],
      correctAnswer: "引き戻す"
  },
  {
      id: 3685,
     question: "aboveboard",
      choices: ['公明正大な', '隠された', '不正な', '疑わしい'],
      correctAnswer: "公明正大な"
  },
  {
      id: 3686,
     question: "ask A out",
      choices: ['誘い出す', '拒絶する', '忘れる', '避ける'],
      correctAnswer: "誘い出す"
  },
  {
      id: 3687,
     question: "bump into",
      choices: ['偶然会う', '避ける', '計画的に会う', '見逃す'],
      correctAnswer: "偶然会う"
  },
  {
      id: 3688,
     question: "vivacious",
      choices: ['快活な', '暗い', '退屈な', '内向的な'],
      correctAnswer: "快活な"
  },
  {
      id: 3689,
     question: "gluttonous",
      choices: ['食いしん坊の', '少食な', '控えめな', '繊細な'],
      correctAnswer: "食いしん坊の"
  },
  {
      id: 3690,
     question: "nothing much",
      choices: ['特に何もない', 'たくさんある', 'とても重要', '膨大な量'],
      correctAnswer: "特に何もない"
  },
  {
      id: 3691,
     question: "ball up",
      choices: ['混乱する', '整理する', '解決する', '落ち着く'],
      correctAnswer: "混乱する"
  },
  {
      id: 3692,
     question: "ravage",
      choices: ['破壊', '修復', '改善', '補強'],
      correctAnswer: "破壊"
  },
  {
      id: 3693,
     question: "nocturnal",
      choices: ['夜行性の', '昼行性の', '休眠する', '日中活動の'],
      correctAnswer: "夜行性の"
  },
  {
      id: 3694,
     question: "might as well do",
      choices: ['するかもしれない', '絶対しない', '避ける', '禁止される'],
      correctAnswer: "するかもしれない"
  },
  {
      id: 3695,
     question: "kiln",
      choices: ['窯', '冷蔵庫', '倉庫', '棚'],
      correctAnswer: "窯"
  },
  {
      id: 3696,
     question: "ten to one",
      choices: ['十中八九', '一か八か', 'ゼロか百か', 'ありえない'],
      correctAnswer: "十中八九"
  },
  {
      id: 3697,
     question: "abridged",
      choices: ['要約された', '拡張された', '詳細な', '完全な'],
      correctAnswer: "要約された"
  },
  {
      id: 3698,
     question: "follow through",
      choices: ['最後までやり遂げる', '途中でやめる', '無視する', '延期する'],
      correctAnswer: "最後までやり遂げる"
  },
  {
      id: 3699,
     question: "monastic",
      choices: ['修道院の', '世俗的な', '現代的な', '自由な'],
      correctAnswer: "修道院の"
  },
  {
      id: 3700,
     question: "quite a bit",
      choices: ['たくさんの', '少しの', 'わずかな', 'ほとんどない'],
      correctAnswer: "たくさんの"
  },
    {
        id: 3701,
        question: "overtly",
        choices: ['あからさまに', '秘密裏に', '控えめに', '隠れて'],
         correctAnswer: "あからさまに"
    },
    {
        id: 3702,
        question: "edge out",
        choices: ['徐々に押しのける', '急速に支配する', '完全に排除する', '無視する'],
         correctAnswer: "徐々に押しのける"
    },
    {
        id: 3703,
        question: "truant",
        choices: ['不登校', '成績優秀者', '優等生', '教師'],
         correctAnswer: "不登校"
    },
    {
        id: 3704,
        question: "give of",
        choices: ['分け与える', '受け取る', '隠す', '拒否する'],
         correctAnswer: "分け与える"
    },
    {
        id: 3705,
        question: "on the verge of",
        choices: ['寸前で', '終わった後で', '途中で', '遠い未来で'],
         correctAnswer: "寸前で"
    },
    {
        id: 3706,
        question: "daft",
        choices: ['まぬけの', '聡明な', '知的な', '冷静な'],
         correctAnswer: "まぬけの"
    },
    {
        id: 3707,
        question: "urbane",
        choices: ['洗練された', '無作法な', '粗野な', '乱暴な'],
         correctAnswer: "洗練された"
    },
    {
        id: 3708,
        question: "vigilante",
        choices: ['自警団員', '犯罪者', '政治家', '役人'],
         correctAnswer: "自警団員"
    },
    {
        id: 3709,
        question: "foolhardy",
        choices: ['無鉄砲な', '慎重な', '思慮深い', '計画的な'],
         correctAnswer: "無鉄砲な"
    },
    {
        id: 3710,
        question: "level out",
        choices: ['平らげる', '傾ける', '高くする', '尖らせる'],
         correctAnswer: "平らげる"
    },
    {
        id: 3711,
        question: "memorabilia",
        choices: ['記憶に値する事柄', '忘れやすい事柄', '秘密の情報', '架空の話'],
         correctAnswer: "記憶に値する事柄"
    },
    {
        id: 3712,
        question: "be versed in",
        choices: ['に精通している', 'に無関心である', 'に無知である', 'に戸惑っている'],
         correctAnswer: "に精通している"
    },
    {
        id: 3713,
        question: "mint",
        choices: ['造幣局', '銀行', '宝石店', '市場'],
         correctAnswer: "造幣局"
    },
    {
        id: 3714,
        question: "infirm",
        choices: ['虚弱な', '頑丈な', '健康な', '活発な'],
         correctAnswer: "虚弱な"
    },
    {
        id: 3715,
        question: "take cover",
        choices: ['隠れる', '突撃する', '逃げる', '出て行く'],
         correctAnswer: "隠れる"
    },
    {
        id: 3716,
        question: "issue A to B",
        choices: ['AをBに支給する', 'AをBに要求する', 'AをBから取り上げる', 'AをBに渡さない'],
         correctAnswer: "AをBに支給する"
    },
    {
        id: 3717,
        question: "rabies",
        choices: ['狂犬病', '風邪', '食中毒', 'インフルエンザ'],
         correctAnswer: "狂犬病"
    },
    {
        id: 3718,
        question: "stead",
        choices: ['代わり', '主役', '中心', '端'],
         correctAnswer: "代わり"
    },
    {
        id: 3719,
        question: "at a standstill",
        choices: ['停止中の', '急成長中の', '拡大中の', '活発な'],
         correctAnswer: "停止中の"
    },
    {
        id: 3720,
        question: "lattice",
        choices: ['格子', '壁', '屋根', '柱'],
         correctAnswer: "格子"
    },
    {
        id: 3721,
        question: "interstellar",
        choices: ['星間の', '地球上の', '大気圏内の', '海洋の'],
         correctAnswer: "星間の"
    },
    {
        id: 3722,
        question: "watch one's step",
        choices: ['足元を見る', '飛び跳ねる', '急いで進む', '後ろ向きに歩く'],
         correctAnswer: "足元を見る"
    },
    {
        id: 3723,
        question: "from hand to mouth",
        choices: ['その日暮らしで', '豊かに生活して', '貯金して', '慎重に計画して'],
         correctAnswer: "その日暮らしで"
    },
    {
        id: 3724,
        question: "exponential",
        choices: ['指数関数的な', '直線的な', '減少する', '安定した'],
         correctAnswer: "指数関数的な"
    },
    {
        id: 3725,
        question: "in token of",
        choices: ['の証拠に', 'の反対として', 'の代わりに', 'の否定として'],
         correctAnswer: "の証拠に"
    },
    {
        id: 3726,
        question: "awry",
        choices: ['歪んで', '真っ直ぐで', '整然として', '均一に'],
         correctAnswer: "歪んで"
    },
    {
        id: 3727,
        question: "in all likelihood",
        choices: ['おそらく', '絶対にない', '不可能な', '疑わしい'],
         correctAnswer: "おそらく"
    },
    {
        id: 3728,
        question: "coarsely",
        choices: ['粗雑に', '丁寧に', '慎重に', '繊細に'],
         correctAnswer: "粗雑に"
    },
    {
        id: 3729,
        question: "incision",
        choices: ['切開', '感染', '治癒', '消毒'],
         correctAnswer: "切開"
    },
    {
        id: 3730,
        question: "minion",
        choices: ['子分', '上司', '権力者', '指導者'],
         correctAnswer: "子分"
    },
    {
        id: 3731,
        question: "queasy",
        choices: ['吐き気のする', '元気な', '空腹な', '快適な'],
         correctAnswer: "吐き気のする"
    },
    {
        id: 3732,
        question: "stamp out",
        choices: ['踏み消す', '育てる', '拡大する', '守る'],
         correctAnswer: "踏み消す"
    },
    {
        id: 3733,
        question: "onus",
        choices: ['重荷', '軽い負担', '自由', '楽しみ'],
         correctAnswer: "重荷"
    },
    {
        id: 3734,
        question: "look beyond",
        choices: ['視野を広げる', '制限する', '無視する', '隠す'],
         correctAnswer: "視野を広げる"
    },
    {
        id: 3735,
        question: "duly",
        choices: ['正当に', '不正に', '無作為に', '無計画に'],
         correctAnswer: "正当に"
    },
    {
        id: 3736,
        question: "to all appearances",
        choices: ['どう見ても', '隠れて', '疑わしく', '秘密裏に'],
         correctAnswer: "どう見ても"
    },
    {
        id: 3737,
        question: "wanton",
        choices: ['理由のない', '慎重な', '冷静な', '一貫した'],
         correctAnswer: "理由のない"
    },
    {
        id: 3738,
        question: "kerosene",
        choices: ['灯油', 'ガソリン', '水', 'アルコール'],
         correctAnswer: "灯油"
    },
    {
        id: 3739,
        question: "pull away from",
        choices: ['から引き離す', '引き寄せる', '受け入れる', '強く結びつく'],
         correctAnswer: "から引き離す"
    },
    {
        id: 3740,
        question: "faltered",
        choices: ['行き詰まった', '前進した', '成功した', '強化した'],
         correctAnswer: "行き詰まった"
    },
    {
        id: 3741,
        question: "refrain from",
        choices: ['を控える', 'を楽しむ', 'を促進する', 'を奨励する'],
         correctAnswer: "を控える"
    },
    {
        id: 3742,
        question: "in obedience to",
        choices: ['従順で', '反抗して', '無関係に', '逆らって'],
         correctAnswer: "従順で"
    },
    {
        id: 3743,
        question: "solstice",
        choices: ['至点', '分点', '赤道', '極点'],
         correctAnswer: "至点"
    },
    {
        id: 3744,
        question: "profanity",
        choices: ['冒涜', '神聖さ', '敬意', '礼儀正しさ'],
         correctAnswer: "冒涜"
    },
    {
        id: 3745,
        question: "come in handy",
        choices: ['助けになる', '不要である', '邪魔になる', '無駄である'],
         correctAnswer: "助けになる"
    },
    {
        id: 3746,
        question: "contractual",
        choices: ['契約上の', '違法の', '即興の', '任意の'],
         correctAnswer: "契約上の"
    },
    {
        id: 3747,
        question: "be into",
        choices: ['に夢中になる', 'を嫌う', 'を避ける', 'に無関心'],
         correctAnswer: "に夢中になる"
    },
    {
        id: 3748,
        question: "talisman",
        choices: ['お守り', '呪い', '道具', '手紙'],
         correctAnswer: "お守り"
    },
    {
        id: 3749,
        question: "at large",
        choices: ['自由で', '拘束されて', '隠れて', '限定されて'],
         correctAnswer: "自由で"
    },
    {
        id: 3750,
        question: "shelf life",
        choices: ['保存可能期間', '賞味期限切れ', '新品', '流行'],
         correctAnswer: "保存可能期間"
    },
    {
        id: 3751,
        question: "rejoinder",
        choices: ['返答', '沈黙', '質問', '声明'],
         correctAnswer: "返答"
    },
    {
        id: 3752,
        question: "culpable",
        choices: ['過失のある', '無罪の', '誠実な', '正当な'],
         correctAnswer: "過失のある"
    },
    {
        id: 3753,
        question: "mayhem",
        choices: ['大混乱', '平和', '秩序', '冷静さ'],
         correctAnswer: "大混乱"
    },
    {
        id: 3754,
        question: "ulterior",
        choices: ['隠された', '明白な', '目立つ', '単純な'],
         correctAnswer: "隠された"
    },
    {
        id: 3755,
        question: "cordial",
        choices: ['心のこもった', '冷たい', '形式的な', '無関心な'],
         correctAnswer: "心のこもった"
    },
    {
        id: 3756,
        question: "hinge on",
        choices: ['決定する', '避ける', '拒否する', '無視する'],
         correctAnswer: "決定する"
    },
    {
        id: 3757,
        question: "memento",
        choices: ['記念品', '破損品', '無価値なもの', '使い捨て'],
         correctAnswer: "記念品"
    },
    {
        id: 3758,
        question: "kitty",
        choices: ['子猫', '犬', '鳥', '馬'],
         correctAnswer: "子猫"
    },
    {
        id: 3759,
        question: "reckoning",
        choices: ['計算', '予測', '直感', '誤算'],
         correctAnswer: "計算"
    },
    {
        id: 3760,
        question: "to the full",
        choices: ['いっぱいに', '少しだけ', '適度に', '部分的に'],
         correctAnswer: "いっぱいに"
    },
    {
        id: 3761,
        question: "quandary",
        choices: ['難局', '簡単な問題', '成功', '幸運'],
         correctAnswer: "難局"
    },
    {
        id: 3762,
        question: "leaden",
        choices: ['鉛の', '軽い', '柔らかい', '透明な'],
         correctAnswer: "鉛の"
    },
    {
        id: 3763,
        question: "militantly",
        choices: ['好戦的に', '平和的に', '慎重に', '消極的に'],
         correctAnswer: "好戦的に"
    },
    {
        id: 3764,
        question: "as A as any",
        choices: ['Aで誰にも劣らず', 'Aで最も劣る', 'Aで例外的に', 'Aで異常に'],
         correctAnswer: "Aで誰にも劣らず"
    },
    {
        id: 3765,
        question: "melancholy",
        choices: ['憂鬱', '喜び', '興奮', '楽しみ'],
         correctAnswer: "憂鬱"
    },
    {
        id: 3766,
        question: "go astray",
        choices: ['行方不明になる', '見つかる', '成功する', '安心する'],
         correctAnswer: "行方不明になる"
    },
    {
        id: 3767,
        question: "daunting",
        choices: ['ひるんでいる', '勇敢な', '積極的な', '自信満々な'],
         correctAnswer: "ひるんでいる"
    },
    {
        id: 3768,
        question: "mumps",
        choices: ['おたふく風邪', '風邪', 'インフルエンザ', 'はしか'],
         correctAnswer: "おたふく風邪"
    },
    {
        id: 3769,
        question: "glacial",
        choices: ['氷河の', '火山の', '温暖な', '砂漠の'],
         correctAnswer: "氷河の"
    },
    {
        id: 3770,
        question: "protocol",
        choices: ['外交儀礼', '秘密文書', '戦略', '法律'],
         correctAnswer: "外交儀礼"
    },
    {
        id: 3771,
        question: "at the cost of",
        choices: ['の代償を払って', '無料で', '得をして', '簡単に'],
         correctAnswer: "の代償を払って"
    },
    {
        id: 3772,
        question: "ditto",
        choices: ['同上', '異なる', '追加', '削除'],
         correctAnswer: "同上"
    },
    {
        id: 3773,
        question: "plumage",
        choices: ['羽毛', '皮膚', '骨', '牙'],
         correctAnswer: "羽毛"
    },
    {
        id: 3774,
        question: "sidekick",
        choices: ['相棒', '敵', '上司', '教師'],
         correctAnswer: "相棒"
    },
    {
        id: 3775,
        question: "menial",
        choices: ['くだらない', '重要な', '価値のある', '高貴な'],
         correctAnswer: "くだらない"
    },
    {
        id: 3776,
        question: "blithe",
        choices: ['軽快な', '重い', '悲しい', '鈍い'],
         correctAnswer: "軽快な"
    },
    {
        id: 3777,
        question: "sentry",
        choices: ['衛兵', '医師', '技師', '政治家'],
         correctAnswer: "衛兵"
    },
    {
        id: 3778,
        question: "rind",
        choices: ['外皮', '果肉', '種', '茎'],
         correctAnswer: "外皮"
    },
    {
        id: 3779,
        question: "be oblivious of",
        choices: ['忘れがちな', '覚えている', '慎重な', '注意深い'],
         correctAnswer: "忘れがちな"
    },
    {
        id: 3780,
        question: "throng",
        choices: ['群衆', '少人数', '個人', '独立'],
         correctAnswer: "群衆"
    },
    {
        id: 3781,
        question: "veal",
        choices: ['子牛の肉', '豚肉', '鶏肉', '魚肉'],
         correctAnswer: "子牛の肉"
    },
    {
        id: 3782,
        question: "none the more",
        choices: ['それでもなお', 'それ以外', 'それにも関わらず', 'それどころか'],
         correctAnswer: "それでもなお"
    },
    {
        id: 3783,
        question: "downcast",
        choices: ['意気消沈した', '元気な', '明るい', '楽観的な'],
         correctAnswer: "意気消沈した"
    },
    {
        id: 3784,
        question: "provided that",
        choices: ['である限り', '例外なく', '禁止されて', '必要なく'],
         correctAnswer: "である限り"
    },
    {
        id: 3785,
        question: "be bent on",
        choices: ['熱心で', '無関心で', '嫌悪して', '拒否して'],
         correctAnswer: "熱心で"
    },
    {
        id: 3786,
        question: "drag out",
        choices: ['引き出す', '隠す', '短縮する', '削除する'],
         correctAnswer: "引き出す"
    },
    {
        id: 3787,
        question: "blurry",
        choices: ['ぼやけた', '鮮明な', 'くっきりした', '明るい'],
         correctAnswer: "ぼやけた"
    },
    {
        id: 3788,
        question: "in large",
        choices: ['大規模に', '小規模に', '部分的に', '個別に'],
         correctAnswer: "大規模に"
    },
    {
        id: 3789,
        question: "kiosk",
        choices: ['売店', '大規模店舗', '工場', '劇場'],
         correctAnswer: "売店"
    },
    {
        id: 3790,
        question: "pelvis",
        choices: ['骨盤', '脊椎', '肋骨', '肩甲骨'],
         correctAnswer: "骨盤"
    },
    {
        id: 3791,
        question: "sultry",
        choices: ['蒸し暑い', '寒い', '乾燥した', '涼しい'],
         correctAnswer: "蒸し暑い"
    },
    {
        id: 3792,
        question: "satchel",
        choices: ['学生かばん', '財布', 'リュック', 'スーツケース'],
         correctAnswer: "学生かばん"
    },
    {
        id: 3793,
        question: "piecemeal",
        choices: ['少しずつ', '一度に', '完全に', 'すぐに'],
         correctAnswer: "少しずつ"
    },
    {
        id: 3794,
        question: "insufferable",
        choices: ['我慢できない', '耐えられる', '快適な', '楽しい'],
         correctAnswer: "我慢できない"
    },
    {
        id: 3795,
        question: "come up with",
        choices: ['を思いつく', 'を忘れる', 'を捨てる', 'を拒否する'],
         correctAnswer: "を思いつく"
    },
    {
        id: 3796,
        question: "fall prey to",
        choices: ['の餌食になる', 'を克服する', 'を避ける', 'を支配する'],
         correctAnswer: "の餌食になる"
    },
    {
        id: 3797,
        question: "back away",
        choices: ['後退する', '進む', '急ぐ', '隠れる'],
         correctAnswer: "後退する"
    },
    {
        id: 3798,
        question: "impervious",
        choices: ['通さない', '吸収する', '壊れやすい', '軽い'],
         correctAnswer: "通さない"
    },
    {
        id: 3799,
        question: "extrovert",
        choices: ['外向的な', '内向的な', '消極的な', '慎重な'],
         correctAnswer: "外向的な"
    },
    {
        id: 3800,
        question: "ravine",
        choices: ['渓谷', '平地', '丘', '草原'],
         correctAnswer: "渓谷"
    },
    {
        id: 3801,
        question: "posterior",
        choices: ['後部の', '前部の', '中央の', '上部の'],
         correctAnswer: "後部の"
    },
    {
        id: 3802,
        question: "tempestuous",
        choices: ['大嵐の', '穏やかな', '静かな', '快晴の'],
         correctAnswer: "大嵐の"
    },
    {
        id: 3803,
        question: "frugal",
        choices: ['質素な', '贅沢な', '派手な', '無駄遣いの多い'],
         correctAnswer: "質素な"
    },
    {
        id: 3804,
        question: "delirious",
        choices: ['錯乱した', '冷静な', '慎重な', '正気な'],
         correctAnswer: "錯乱した"
    },
    {
        id: 3805,
        question: "mirth",
        choices: ['陽気', '悲しみ', '怒り', '冷静さ'],
         correctAnswer: "陽気"
    },
    {
        id: 3806,
        question: "prospectus",
        choices: ['目論見書', '契約書', '手紙', '日記'],
         correctAnswer: "目論見書"
    },
    {
        id: 3807,
        question: "isotope",
        choices: ['同位元素', '化合物', '分子', '原子'],
         correctAnswer: "同位元素"
    },
    {
        id: 3808,
        question: "painstaking",
        choices: ['骨の折れる', '簡単な', '速やかな', '楽しい'],
         correctAnswer: "骨の折れる"
    },
    {
        id: 3809,
        question: "be bound up with",
        choices: ['と密接な関係のある', '無関係な', '対立している', '異なる'],
         correctAnswer: "と密接な関係のある"
    },
    {
        id: 3810,
        question: "payload",
        choices: ['有効荷重', '無駄な荷物', '手荷物', '軽量品'],
         correctAnswer: "有効荷重"
    },
    {
        id: 3811,
        question: "ups and downs",
        choices: ['浮き沈み', '安定', '停滞', '急上昇'],
         correctAnswer: "浮き沈み"
    },
    {
        id: 3812,
        question: "shank",
        choices: ['すね', '腕', '背中', '指'],
         correctAnswer: "すね"
    },
    {
        id: 3813,
        question: "be impatient with",
        choices: ['イライラして', '落ち着いて', '喜んで', '冷静に'],
         correctAnswer: "イライラして"
    },
    {
        id: 3814,
        question: "bowl over",
        choices: ['を打ち倒す', 'を支える', 'を引き上げる', 'を安定させる'],
         correctAnswer: "を打ち倒す"
    },
    {
        id: 3815,
        question: "incubation",
        choices: ['ふ化', '孵化失敗', '腐敗', '硬化'],
         correctAnswer: "ふ化"
    },
    {
        id: 3816,
        question: "mockery",
        choices: ['嘲り', '尊敬', '称賛', '感謝'],
         correctAnswer: "嘲り"
    },
    {
        id: 3817,
        question: "down the road",
        choices: ['この先', '今すぐ', '過去', '目の前'],
         correctAnswer: "この先"
    },
    {
        id: 3818,
        question: "in substance",
        choices: ['実質上', '表面的に', '不確かに', '仮想的に'],
         correctAnswer: "実質上"
    },
    {
        id: 3819,
        question: "monoxide",
        choices: ['一酸化物', '二酸化物', '酸素', '窒素'],
         correctAnswer: "一酸化物"
    },
    {
        id: 3820,
        question: "paradigm",
        choices: ['規範', '逸脱', '異例', '例外'],
         correctAnswer: "規範"
    },
    {
        id: 3821,
        question: "glance at",
        choices: ['一瞥する', 'じっと見る', '探す', '見失う'],
         correctAnswer: "一瞥する"
    },
    {
        id: 3822,
        question: "muffled",
        choices: ['音を殺した', '大きな', 'はっきりした', '高音の'],
         correctAnswer: "音を殺した"
    },
    {
        id: 3823,
        question: "moat",
        choices: ['堀', '橋', '湖', '川'],
         correctAnswer: "堀"
    },
    {
        id: 3824,
        question: "precept",
        choices: ['戒律', '例外', '誤解', '仮説'],
         correctAnswer: "戒律"
    },
    {
        id: 3825,
        question: "contemptible",
        choices: ['軽蔑的な', '尊敬すべき', '称賛すべき', '名誉ある'],
         correctAnswer: "軽蔑的な"
    },
    {
        id: 3826,
        question: "adroit",
        choices: ['器用な', '不器用な', '鈍い', '遅い'],
         correctAnswer: "器用な"
    },
    {
        id: 3827,
        question: "effusive",
        choices: ['感情むき出しの', '冷静な', '控えめな', '無表情な'],
         correctAnswer: "感情むき出しの"
    },
    {
        id: 3828,
        question: "by any chance",
        choices: ['もしかして', '絶対に', '確実に', '決して'],
         correctAnswer: "もしかして"
    },
    {
        id: 3829,
        question: "pastime",
        choices: ['気晴らし', '仕事', '責務', '学業'],
         correctAnswer: "気晴らし"
    },
    {
        id: 3830,
        question: "praise A for B",
        choices: ['AをBについて賞賛する', 'AをBで非難する', 'AをBから遠ざける', 'AをBに変える'],
         correctAnswer: "AをBについて賞賛する"
    },
    {
        id: 3831,
        question: "think out",
        choices: ['考え抜く', '思いつく', '忘れる', '流す'],
         correctAnswer: "考え抜く"
    },
    {
        id: 3832,
        question: "piety",
        choices: ['信仰心', '無信仰', '冷淡', '迷信'],
         correctAnswer: "信仰心"
    },
    {
        id: 3833,
        question: "moniker",
        choices: ['名前', '住所', '職業', '性別'],
         correctAnswer: "名前"
    },
    {
        id: 3834,
        question: "tear up",
        choices: ['引き裂く', '修理する', '繋ぎ合わせる', '保持する'],
         correctAnswer: "引き裂く"
    },
    {
        id: 3835,
        question: "complicit",
        choices: ['共犯の', '無関係の', '被害者の', '目撃者の'],
         correctAnswer: "共犯の"
    },
    {
        id: 3836,
        question: "quorum",
        choices: ['定数', '変数', '方程式', '無効値'],
         correctAnswer: "定数"
    },
    {
        id: 3837,
        question: "in the red",
        choices: ['赤字で', '黒字で', '安定して', '利益を上げて'],
         correctAnswer: "赤字で"
    },
    {
        id: 3838,
        question: "wavelength",
        choices: ['波長', '周波数', '振幅', '強度'],
         correctAnswer: "波長"
    },
    {
        id: 3839,
        question: "take pity on",
        choices: ['に同情する', 'を見下す', 'をからかう', 'を無視する'],
         correctAnswer: "に同情する"
    },
    {
        id: 3840,
        question: "haphazardly",
        choices: ['偶然に', '計画的に', '慎重に', '整然と'],
         correctAnswer: "偶然に"
    },
    {
        id: 3841,
        question: "attend on",
        choices: ['に参加する', 'を避ける', 'を無視する', 'を断る'],
         correctAnswer: "に参加する"
    },
    {
        id: 3842,
        question: "clairvoyant",
        choices: ['千里眼の', '鈍感な', '無関心な', '悲観的な'],
         correctAnswer: "千里眼の"
    },
    {
        id: 3843,
        question: "break the ice",
        choices: ['話の口火を切る', '話をやめる', '冷静になる', '距離をとる'],
         correctAnswer: "話の口火を切る"
    },
    {
        id: 3844,
        question: "desolate",
        choices: ['荒涼とした', '豊かな', '賑やかな', '温暖な'],
         correctAnswer: "荒涼とした"
    },
    {
        id: 3845,
        question: "up for grabs",
        choices: ['容易に手に入る', '難しい', '限定された', '封鎖された'],
         correctAnswer: "容易に手に入る"
    },
    {
        id: 3846,
        question: "tycoon",
        choices: ['大物', '一般人', '子供', '初心者'],
         correctAnswer: "大物"
    },
    {
        id: 3847,
        question: "magnanimous",
        choices: ['寛大な', '冷酷な', '小心な', '厳格な'],
         correctAnswer: "寛大な"
    },
    {
        id: 3848,
        question: "threadbare",
        choices: ['着古した', '新品の', '豪華な', '派手な'],
         correctAnswer: "着古した"
    },
    {
        id: 3849,
        question: "improve on",
        choices: ['を改善する', 'を悪化させる', 'を無視する', 'を廃止する'],
         correctAnswer: "を改善する"
    },
    {
        id: 3850,
        question: "strictly speaking",
        choices: ['厳密に言えば', '曖昧に言えば', '広義で言えば', '例外的に言えば'],
         correctAnswer: "厳密に言えば"
    },
    {
        id: 3851,
        question: "be incapable of",
        choices: ['出来ない', '可能な', '簡単な', '得意な'],
         correctAnswer: "出来ない"
    },
    {
        id: 3852,
        question: "variegated",
        choices: ['まだら模様の', '単色の', '透明な', '光沢のある'],
         correctAnswer: "まだら模様の"
    },
    {
        id: 3853,
        question: "juxtaposition",
        choices: ['並置', '分離', '独立', '対立'],
         correctAnswer: "並置"
    },
    {
        id: 3854,
        question: "to say the least",
        choices: ['控えめに言っても', '大げさに言うと', '全く言えない', '誤解して言うと'],
         correctAnswer: "控えめに言っても"
    },
    {
        id: 3855,
        question: "irksome",
        choices: ['退屈な', '楽しい', '刺激的な', '魅力的な'],
         correctAnswer: "退屈な"
    },
    {
        id: 3856,
        question: "keep an eye on",
        choices: ['を見ておく', 'を忘れる', 'を無視する', 'を避ける'],
         correctAnswer: "を見ておく"
    },
    {
        id: 3857,
        question: "schism",
        choices: ['分裂', '統合', '協力', '同盟'],
         correctAnswer: "分裂"
    },
    {
        id: 3858,
        question: "sagacious",
        choices: ['賢い', '愚かな', '鈍感な', '無知な'],
         correctAnswer: "賢い"
    },
    {
        id: 3859,
        question: "set back",
        choices: ['後退する', '前進する', '加速する', '終了する'],
         correctAnswer: "後退する"
    },
    {
        id: 3860,
        question: "struggle with",
        choices: ['と闘う', 'と協力する', 'を無視する', 'を擁護する'],
         correctAnswer: "と闘う"
    },
    {
        id: 3861,
        question: "indulgent",
        choices: ['寛大な', '厳しい', '冷酷な', '無関心な'],
         correctAnswer: "寛大な"
    },
    {
        id: 3862,
        question: "morsel",
        choices: ['一口', '大盛り', '完全な食事', '欠片'],
         correctAnswer: "一口"
    },
    {
        id: 3863,
        question: "impudent",
        choices: ['厚かましい', '控えめな', '礼儀正しい', '慎重な'],
         correctAnswer: "厚かましい"
    },
    {
        id: 3864,
        question: "go places",
        choices: ['遊びまわる', '引きこもる', '働きすぎる', '疲れる'],
         correctAnswer: "遊びまわる"
    },
    {
        id: 3865,
        question: "negligent",
        choices: ['怠慢な', '几帳面な', '勤勉な', '慎重な'],
         correctAnswer: "怠慢な"
    },
    {
        id: 3866,
        question: "cough up",
        choices: ['咳払いする', '黙る', 'ささやく', '叫ぶ'],
         correctAnswer: "咳払いする"
    },
    {
        id: 3867,
        question: "repressive",
        choices: ['抑圧的な', '自由な', '寛容な', '解放的な'],
         correctAnswer: "抑圧的な"
    },
    {
        id: 3868,
        question: "be appropriate to",
        choices: ['にふさわしい', 'に不適切な', 'に無関係な', 'に違反する'],
         correctAnswer: "にふさわしい"
    },
    {
        id: 3869,
        question: "mercenary",
        choices: ['金目当ての', '無欲な', '慈善的な', '誠実な'],
         correctAnswer: "金目当ての"
    },
    {
        id: 3870,
        question: "serendipity",
        choices: ['思わぬ物を偶然に発見すること', '計画的発見', '意図的な創造', '失敗'],
         correctAnswer: "思わぬ物を偶然に発見すること"
    },
    {
        id: 3871,
        question: "cut out for",
        choices: ['に向いている', 'に不適切な', 'に無関心な', 'に反対している'],
         correctAnswer: "に向いている"
    },
    {
        id: 3872,
        question: "underhand",
        choices: ['秘密の', '公然の', '誠実な', '正直な'],
         correctAnswer: "秘密の"
    },
    {
        id: 3873,
        question: "hard of hearing",
        choices: ['難聴の', '耳の良い', '聴覚過敏の', '耳鳴りのある'],
         correctAnswer: "難聴の"
    },
    {
        id: 3874,
        question: "concave",
        choices: ['凹面の', '凸面の', '平らな', '滑らかな'],
         correctAnswer: "凹面の"
    },
    {
        id: 3875,
        question: "nutty",
        choices: ['木の実の多い', '酸っぱい', '辛い', '塩辛い'],
         correctAnswer: "木の実の多い"
    },
    {
        id: 3876,
        question: "at the outset",
        choices: ['最初に', '最後に', '途中で', '予期せず'],
         correctAnswer: "最初に"
    },
    {
        id: 3877,
        question: "chubby",
        choices: ['ぽっちゃりした', '痩せた', '筋肉質な', '細い'],
         correctAnswer: "ぽっちゃりした"
    },
    {
        id: 3878,
        question: "keep in",
        choices: ['抑える', '解放する', '取り除く', '強調する'],
         correctAnswer: "抑える"
    },
    {
        id: 3879,
        question: "grim",
        choices: ['険しい', '穏やかな', '楽観的な', '和やかな'],
         correctAnswer: "険しい"
    },
    {
        id: 3880,
        question: "be devoted to",
        choices: ['に専念した', 'に無関心な', 'に反対する', 'に不適切な'],
         correctAnswer: "に専念した"
    },
    {
        id: 3881,
        question: "quizzical",
        choices: ['訝しげな', '確信に満ちた', '喜ばしい', '無関心な'],
         correctAnswer: "訝しげな"
    },
    {
        id: 3882,
        question: "palliative",
        choices: ['緩和的な', '悪化させる', '破壊的な', '無効な'],
         correctAnswer: "緩和的な"
    },
    {
        id: 3883,
        question: "sclerosis",
        choices: ['硬化', '柔軟性', '収縮', '拡大'],
         correctAnswer: "硬化"
    },
    {
        id: 3884,
        question: "discerning",
        choices: ['洞察力のある', '鈍感な', '無知な', '怠惰な'],
         correctAnswer: "洞察力のある"
    },
    {
        id: 3885,
        question: "penitence",
        choices: ['懺悔', '誇り', '自信', '開き直り'],
         correctAnswer: "懺悔"
    },
    {
        id: 3886,
        question: "penance",
        choices: ['苦行', '娯楽', '休息', '自由'],
         correctAnswer: "苦行"
    },
    {
        id: 3887,
        question: "vested",
        choices: ['既得の', '奪われた', '制限された', '一時的な'],
         correctAnswer: "既得の"
    },
    {
        id: 3888,
        question: "bountiful",
        choices: ['気前の良い', 'ケチな', '貧しい', '無関心な'],
         correctAnswer: "気前の良い"
    },
    {
        id: 3889,
        question: "gaze at",
        choices: ['を見つめている', 'を見逃す', 'をそらす', 'を避ける'],
         correctAnswer: "を見つめている"
    },
    {
        id: 3890,
        question: "morose",
        choices: ['不機嫌な', '陽気な', '穏やかな', '親しみやすい'],
         correctAnswer: "不機嫌な"
    },
    {
        id: 3891,
        question: "squalid",
        choices: ['むさ苦しい', '清潔な', '整然とした', '華やかな'],
         correctAnswer: "むさ苦しい"
    },
    {
        id: 3892,
        question: "vote for",
        choices: ['に賛成する', 'に反対する', 'を拒否する', 'を避ける'],
         correctAnswer: "に賛成する"
    },
    {
        id: 3893,
        question: "sod",
        choices: ['芝', '土', '砂', '石'],
         correctAnswer: "芝"
    },
    {
        id: 3894,
        question: "take up with",
        choices: ['と仲良くなる', 'と対立する', 'と縁を切る', 'を避ける'],
         correctAnswer: "と仲良くなる"
    },
    {
        id: 3895,
        question: "roll out",
        choices: ['製品投入する', '回収する', '撤去する', '廃止する'],
         correctAnswer: "製品投入する"
    },
    {
        id: 3896,
        question: "upshot",
        choices: ['結果', '原因', '途中経過', '予測'],
         correctAnswer: "結果"
    },
    {
        id: 3897,
        question: "wash out",
        choices: ['洗い流す', '染み込む', '固まる', '蒸発する'],
         correctAnswer: "洗い流す"
    },
    {
        id: 3898,
        question: "potency",
        choices: ['効力', '無力', '失敗', '弱点'],
         correctAnswer: "効力"
    },
    {
        id: 3899,
        question: "sullen",
        choices: ['不機嫌な', '快活な', '朗らかな', '活発な'],
         correctAnswer: "不機嫌な"
    },
    {
        id: 3900,
        question: "oscillation",
        choices: ['発振', '静止', '直線運動', '固定'],
         correctAnswer: "発振"
    },
    {
        id: 3901,
        question: "reparation",
        choices: ['賠償', '損害', '攻撃', '犯罪'],
         correctAnswer: "賠償"
    },
    {
        id: 3902,
        question: "be reluctant to",
        choices: ['気が進まない', '喜んでする', '積極的な', '楽しみにする'],
         correctAnswer: "気が進まない"
    },
    {
        id: 3903,
        question: "precedence",
        choices: ['優先', '劣後', '平等', '無関係'],
         correctAnswer: "優先"
    },
    {
        id: 3904,
        question: "rubric",
        choices: ['注釈', '削除', '誤解', '改訂'],
         correctAnswer: "注釈"
    },
    {
        id: 3905,
        question: "starch",
        choices: ['でんぷん', '砂糖', '脂肪', 'タンパク質'],
         correctAnswer: "でんぷん"
    },
    {
        id: 3906,
        question: "impend",
        choices: ['差し迫った', '遠い', '無関係な', '延期された'],
         correctAnswer: "差し迫った"
    },
    {
        id: 3907,
        question: "odds and ends",
        choices: ['がらくた', '貴重品', '新品', '価値のあるもの'],
         correctAnswer: "がらくた"
    },
    {
        id: 3908,
        question: "steal the show",
        choices: ['話題をさらう', '影が薄くなる', '無視される', '忘れられる'],
         correctAnswer: "話題をさらう"
    },
    {
        id: 3909,
        question: "polyglot",
        choices: ['数ヶ国語に通じている人', '一ヶ国語のみ話せる人', '文盲', '翻訳機'],
         correctAnswer: "数ヶ国語に通じている人"
    },
    {
        id: 3910,
        question: "averse",
        choices: ['嫌っている', '好んでいる', '無関心な', '夢中になっている'],
         correctAnswer: "嫌っている"
    },
    {
        id: 3911,
        question: "stand to reason",
        choices: ['筋が通る', '不合理である', '無意味である', '誤解される'],
         correctAnswer: "筋が通る"
    },
    {
        id: 3912,
        question: "tide over",
        choices: ['乗り切る', '失敗する', '放棄する', '避ける'],
         correctAnswer: "乗り切る"
    },
    {
        id: 3913,
        question: "knell",
        choices: ['鐘の音', '太鼓の音', '警報', '笛の音'],
         correctAnswer: "鐘の音"
    },
    {
        id: 3914,
        question: "schema",
        choices: ['図解', '文章', '対話', '論文'],
         correctAnswer: "図解"
    },
    {
        id: 3915,
        question: "head on",
        choices: ['正面から', '回避して', '横から', '背後から'],
         correctAnswer: "正面から"
    },
    {
        id: 3916,
        question: "abreast",
        choices: ['横に並んで', '縦に並んで', 'ばらばらに', '離れて'],
         correctAnswer: "横に並んで"
    },
    {
        id: 3917,
        question: "down the drain",
        choices: ['失われて', '節約して', '蓄積して', '管理して'],
         correctAnswer: "失われて"
    },
    {
        id: 3918,
        question: "shingle",
        choices: ['こけら板', '床板', '壁紙', '屋根瓦'],
         correctAnswer: "こけら板"
    },
    {
        id: 3919,
        question: "around the corner",
        choices: ['間もなく', '遠くに', 'ありえない', '不可能な'],
         correctAnswer: "間もなく"
    },
    {
        id: 3920,
        question: "fussy",
        choices: ['小うるさい', '静かな', '無口な', '無関心な'],
         correctAnswer: "小うるさい"
    },
    {
        id: 3921,
        question: "contend with",
        choices: ['と戦う', 'と協力する', 'と妥協する', 'を避ける'],
         correctAnswer: "と戦う"
    },
    {
        id: 3922,
        question: "visage",
        choices: ['顔', '手', '足', '背中'],
         correctAnswer: "顔"
    },
    {
        id: 3923,
        question: "obstetrician",
        choices: ['産科医', '外科医', '内科医', '薬剤師'],
         correctAnswer: "産科医"
    },
    {
        id: 3924,
        question: "serve up",
        choices: ['食卓に出す', '片付ける', '取り除く', '捨てる'],
         correctAnswer: "食卓に出す"
    },
    {
        id: 3925,
        question: "tuft",
        choices: ['ふさ', '糸', '針', '布'],
         correctAnswer: "ふさ"
    },
    {
        id: 3926,
        question: "lie with",
        choices: ['の役目である', 'に反対する', 'を支持する', 'を放棄する'],
         correctAnswer: "の役目である"
    },
    {
        id: 3927,
        question: "saline",
        choices: ['塩気のある', '甘い', '苦い', '酸っぱい'],
         correctAnswer: "塩気のある"
    },
    {
        id: 3928,
        question: "servile",
        choices: ['奴隷の', '自由な', '自主的な', '独立した'],
         correctAnswer: "奴隷の"
    },
    {
        id: 3929,
        question: "altruistic",
        choices: ['利他的な', '自己中心的な', '冷酷な', '無関心な'],
         correctAnswer: "利他的な"
    },
    {
        id: 3930,
        question: "fence in",
        choices: ['を囲い込む', 'を解放する', 'を隠す', 'を捨てる'],
         correctAnswer: "を囲い込む"
    },
    {
        id: 3931,
        question: "root out",
        choices: ['根絶する', '育てる', '拡大する', '奨励する'],
         correctAnswer: "根絶する"
    },
    {
        id: 3932,
        question: "inveterate",
        choices: ['常習的な', '偶発的な', '一時的な', '軽微な'],
         correctAnswer: "常習的な"
    },
    {
        id: 3933,
        question: "loosen up",
        choices: ['緩める', '固める', '強く締める', '増強する'],
         correctAnswer: "緩める"
    },
    {
        id: 3934,
        question: "have off",
        choices: ['休暇を取る', '仕事をする', '延期する', '中止する'],
         correctAnswer: "休暇を取る"
    },
    {
        id: 3935,
        question: "rudimentary",
        choices: ['初歩的な', '高度な', '複雑な', '革新的な'],
         correctAnswer: "初歩的な"
    },
    {
        id: 3936,
        question: "rub off",
        choices: ['こすり落とす', '塗る', '加える', '装飾する'],
         correctAnswer: "こすり落とす"
    },
    {
        id: 3937,
        question: "buy over",
        choices: ['買収する', '売却する', '拒否する', '無視する'],
         correctAnswer: "買収する"
    },
    {
        id: 3938,
        question: "embroil in",
        choices: ['に巻き込む', 'を避ける', 'を助ける', 'を軽視する'],
         correctAnswer: "に巻き込む"
    },
    {
        id: 3939,
        question: "pliant",
        choices: ['しなやかな', '硬い', '折れやすい', '壊れやすい'],
         correctAnswer: "しなやかな"
    },
    {
        id: 3940,
        question: "meek",
        choices: ['おとなしい', '攻撃的な', '強気な', '無礼な'],
         correctAnswer: "おとなしい"
    },
    {
        id: 3941,
        question: "beware of",
        choices: ['注意する', '無視する', '賞賛する', '避ける'],
         correctAnswer: "注意する"
    },
    {
        id: 3942,
        question: "taciturn",
        choices: ['無口の', 'おしゃべりな', '陽気な', '社交的な'],
         correctAnswer: "無口の"
    },
    {
        id: 3943,
        question: "out of place",
        choices: ['場違いの', '適切な', '必要な', 'ぴったりの'],
         correctAnswer: "場違いの"
    },
    {
        id: 3944,
        question: "marquee",
        choices: ['テント', '窓', '壁', '床'],
         correctAnswer: "テント"
    },
    {
        id: 3945,
        question: "insist on",
        choices: ['を主張する', 'を諦める', 'を拒否する', 'を避ける'],
         correctAnswer: "を主張する"
    },
    {
        id: 3946,
        question: "montage",
        choices: ['合成写真', '絵画', '彫刻', '手書き文字'],
         correctAnswer: "合成写真"
    },
    {
        id: 3947,
        question: "tacky",
        choices: ['べとついた', '乾燥した', '固い', '滑らかな'],
         correctAnswer: "べとついた"
    },
    {
        id: 3948,
        question: "interfere with",
        choices: ['に干渉する', 'を助ける', 'を避ける', 'を放置する'],
         correctAnswer: "に干渉する"
    },
    {
        id: 3949,
        question: "vociferous",
        choices: ['騒々しい', '静かな', '穏やかな', '優雅な'],
         correctAnswer: "騒々しい"
    },
    {
        id: 3950,
        question: "swallow up",
        choices: ['飲み込む', '吐き出す', '分配する', '拡散する'],
         correctAnswer: "飲み込む"
    },
    {
        id: 3951,
        question: "padlock",
        choices: ['南京錠', 'ドアノブ', '金庫', '窓枠'],
         correctAnswer: "南京錠"
    },
    {
        id: 3952,
        question: "entrust A with B",
        choices: ['AにBを委託する', 'AからBを奪う', 'AとBを交換する', 'AにBを隠す'],
         correctAnswer: "AにBを委託する"
    },
    {
        id: 3953,
        question: "hail from",
        choices: ['の出身である', 'を避ける', 'に移住する', 'に帰省する'],
         correctAnswer: "の出身である"
    },
    {
        id: 3954,
        question: "overcast",
        choices: ['曇った', '晴れた', '快晴の', '風の強い'],
         correctAnswer: "曇った"
    },
    {
        id: 3955,
        question: "slip of the tongue",
        choices: ['失言', '発言ミス', '正確な発言', '沈黙'],
         correctAnswer: "失言"
    },
    {
        id: 3956,
        question: "parochial",
        choices: ['狭い', '広い', '開放的な', '高尚な'],
         correctAnswer: "狭い"
    },
    {
        id: 3957,
        question: "all ears",
        choices: ['耳を傾ける', '無関心でいる', '耳をふさぐ', '騒音を立てる'],
         correctAnswer: "耳を傾ける"
    },
    {
        id: 3958,
        question: "spasm",
        choices: ['けいれん', '安定', '硬直', '弛緩'],
         correctAnswer: "けいれん"
    },
    {
        id: 3959,
        question: "pompous",
        choices: ['尊大な', '謙虚な', '親しみやすい', '控えめな'],
         correctAnswer: "尊大な"
    },
    {
        id: 3960,
        question: "draw a line",
        choices: ['線を引く', '消す', 'ぼかす', '繋ぐ'],
         correctAnswer: "線を引く"
    },
    {
        id: 3961,
        question: "vehement",
        choices: ['猛烈な', '穏やかな', '静かな', '抑制された'],
         correctAnswer: "猛烈な"
    },
    {
        id: 3962,
        question: "periphery",
        choices: ['周辺', '中心', '最前線', '後部'],
         correctAnswer: "周辺"
    },
    {
        id: 3963,
        question: "take steps",
        choices: ['対策を打つ', '放置する', '中止する', '無視する'],
         correctAnswer: "対策を打つ"
    },
    {
        id: 3964,
        question: "complacent",
        choices: ['自己満足の', '自己嫌悪の', '不満の', '謙虚な'],
         correctAnswer: "自己満足の"
    },
    {
        id: 3965,
        question: "live off",
        choices: ['で生計を立てる', 'で借金をする', 'で浪費する', 'で貯金をする'],
         correctAnswer: "で生計を立てる"
    },
    {
        id: 3966,
        question: "membrane",
        choices: ['膜', '骨', '皮膚', '血管'],
         correctAnswer: "膜"
    },
    {
        id: 3967,
        question: "nepotism",
        choices: ['縁故主義', '公平主義', '実力主義', '差別主義'],
         correctAnswer: "縁故主義"
    },
    {
        id: 3968,
        question: "out of the ordinary",
        choices: ['並外れた', '普通の', '一般的な', '控えめな'],
         correctAnswer: "並外れた"
    },
    {
        id: 3969,
        question: "illegible",
        choices: ['判読不能の', '読みやすい', '整った', '規則的な'],
         correctAnswer: "判読不能の"
    },
    {
        id: 3970,
        question: "in the concrete",
        choices: ['具体的に', '抽象的に', '比喩的に', '曖昧に'],
         correctAnswer: "具体的に"
    },
    {
        id: 3971,
        question: "tactile",
        choices: ['触角の', '視覚の', '聴覚の', '嗅覚の'],
         correctAnswer: "触角の"
    },
    {
        id: 3972,
        question: "predisposition",
        choices: ['素因', '結果', '影響', '副作用'],
         correctAnswer: "素因"
    },
    {
        id: 3973,
        question: "scribe",
        choices: ['書記', '編集者', '教授', '発明家'],
         correctAnswer: "書記"
    },
    {
        id: 3974,
        question: "manic",
        choices: ['躁病の', '鬱病の', '冷静な', '慎重な'],
         correctAnswer: "躁病の"
    },
    {
        id: 3975,
        question: "modality",
        choices: ['法性', '直感', '比喩', '疑念'],
         correctAnswer: "法性"
    },
    {
        id: 3976,
        question: "unscathed",
        choices: ['無傷の', '負傷した', '汚れた', '損傷した'],
         correctAnswer: "無傷の"
    },
    {
        id: 3977,
        question: "vale",
        choices: ['谷', '丘', '山', '湖'],
         correctAnswer: "谷"
    },
    {
        id: 3978,
        question: "diabolic",
        choices: ['悪魔のような', '天使のような', '優雅な', '美しい'],
         correctAnswer: "悪魔のような"
    },
    {
        id: 3979,
        question: "instantaneous",
        choices: ['瞬時の', '遅い', '徐々に', '予測可能な'],
         correctAnswer: "瞬時の"
    },
    {
        id: 3980,
        question: "yank someone's chain",
        choices: ['人をからかう', '励ます', '尊敬する', '支援する'],
         correctAnswer: "人をからかう"
    },
    {
        id: 3981,
        question: "tetanus",
        choices: ['破傷風', 'インフルエンザ', '肺炎', '腸炎'],
         correctAnswer: "破傷風"
    },
    {
        id: 3982,
        question: "contrived",
        choices: ['わざとらしい', '自然な', '控えめな', '誠実な'],
         correctAnswer: "わざとらしい"
    },
    {
        id: 3983,
        question: "meticulously",
        choices: ['細心の注意を払って', '大雑把に', '無計画に', '乱雑に'],
         correctAnswer: "細心の注意を払って"
    },
    {
        id: 3984,
        question: "hedge bets",
        choices: ['賭けを保険する', '無謀に賭ける', '全部を投資する', '何もしない'],
         correctAnswer: "賭けを保険する"
    },
    {
        id: 3985,
        question: "pinnacle",
        choices: ['頂点', '底', '中間', '低地'],
         correctAnswer: "頂点"
    },
    {
        id: 3986,
        question: "quadrant",
        choices: ['四分円', '五角形', '三角形', '長方形'],
         correctAnswer: "四分円"
    },
    {
        id: 3987,
        question: "inadvertent",
        choices: ['不注意な', '慎重な', '意図的な', '思慮深い'],
         correctAnswer: "不注意な"
    },
    {
        id: 3988,
        question: "pathological",
        choices: ['病理学の', '心理学の', '哲学の', '生物学の'],
         correctAnswer: "病理学の"
    },
    {
        id: 3989,
        question: "euphoric",
        choices: ['陶酔している', '落ち込んでいる', '冷静な', '絶望的な'],
         correctAnswer: "陶酔している"
    },
    {
        id: 3990,
        question: "circumspect",
        choices: ['慎重な', '軽率な', '大胆な', '無謀な'],
         correctAnswer: "慎重な"
    },
    {
        id: 3991,
        question: "inlet",
        choices: ['入り江', '山', '湖', '谷'],
         correctAnswer: "入り江"
    },
    {
        id: 3992,
        question: "subservient",
        choices: ['役立って', '無関係な', '対立する', '独立した'],
         correctAnswer: "役立って"
    },
    {
        id: 3993,
        question: "walk on eggshells",
        choices: ['非常に慎重に行動する', '無頓着に行動する', '大胆に動く', '注意を払わない'],
         correctAnswer: "非常に慎重に行動する"
    },
    {
        id: 3994,
        question: "molten",
        choices: ['溶けた', '凍った', '硬化した', '乾燥した'],
         correctAnswer: "溶けた"
    },
    {
        id: 3995,
        question: "opulent",
        choices: ['豊富な', '貧しい', '不足している', '希少な'],
         correctAnswer: "豊富な"
    },
    {
        id: 3996,
        question: "diligently",
        choices: ['精を出して', '怠けて', '適当に', '軽く'],
         correctAnswer: "精を出して"
    },
    {
        id: 3997,
        question: "remuneration",
        choices: ['報酬', '罰金', '支出', '借金'],
         correctAnswer: "報酬"
    },
    {
        id: 3998,
        question: "distal",
        choices: ['末端の', '中央の', '最上部の', '内側の'],
         correctAnswer: "末端の"
    },
    {
        id: 3999,
        question: "immaculate",
        choices: ['真っ白な', '汚れた', '色褪せた', 'くすんだ'],
         correctAnswer: "真っ白な"
    },
    {
        id: 4000,
        question: "maiden",
        choices: ['乙女', '老婆', '少年', '赤ん坊'],
         correctAnswer: "乙女"
    },
    {
        id: 4001,
        question: "whirlpool",
        choices: ['渦巻', '波', '風', '潮流'],
         correctAnswer: "渦巻"
    },
    {
        id: 4002,
        question: "banal",
        choices: ['平凡な', '珍しい', '特別な', '風変わりな'],
         correctAnswer: "平凡な"
    },
    {
        id: 4003,
        question: "bilateral",
        choices: ['両側の', '片側の', '中心の', '不規則な'],
         correctAnswer: "両側の"
    },
    {
        id: 4004,
        question: "indignation",
        choices: ['憤慨', '喜び', '悲しみ', '冷静'],
         correctAnswer: "憤慨"
    },
    {
        id: 4005,
        question: "ignoble",
        choices: ['下劣な', '高貴な', '尊敬される', '上品な'],
         correctAnswer: "下劣な"
    },
    {
        id: 4006,
        question: "nebulous",
        choices: ['漠然とした', '明確な', '具体的な', '分かりやすい'],
         correctAnswer: "漠然とした"
    },
    {
        id: 4007,
        question: "renunciation",
        choices: ['放棄', '獲得', '保持', '増加'],
         correctAnswer: "放棄"
    },
    {
        id: 4008,
        question: "skid",
        choices: ['横滑り', '加速', '停止', '直進'],
         correctAnswer: "横滑り"
    },
    {
        id: 4009,
        question: "resplendent",
        choices: ['華やかな', '地味な', '控えめな', '目立たない'],
         correctAnswer: "華やかな"
    },
    {
        id: 4010,
        question: "tripod",
        choices: ['三脚', '二脚', '四脚', '一本足'],
         correctAnswer: "三脚"
    },
    {
        id: 4011,
        question: "intact",
        choices: ['そのままの', '壊れた', '修復済み', '部分的な'],
         correctAnswer: "そのままの"
    },
    {
        id: 4012,
        question: "relish",
        choices: ['風味', '無味', '苦味', '刺激'],
         correctAnswer: "風味"
    },
    {
        id: 4013,
        question: "decrepit",
        choices: ['老朽化した', '新築の', '頑丈な', '丈夫な'],
         correctAnswer: "老朽化した"
    },
    {
        id: 4014,
        question: "peddler",
        choices: ['行商人', '商社', '製造業者', '農家'],
         correctAnswer: "行商人"
    },
    {
        id: 4015,
        question: "jump on the bandwagon",
        choices: ['流行に乗る', '流行を無視する', '流行を作る', '流行を拒む'],
         correctAnswer: "流行に乗る"
    },
    {
        id: 4016,
        question: "yolk",
        choices: ['卵黄', '卵白', '殻', '薄皮'],
         correctAnswer: "卵黄"
    },
    {
        id: 4017,
        question: "suffrage",
        choices: ['投票', '拒否', '否認', '沈黙'],
         correctAnswer: "投票"
    },
    {
        id: 4018,
        question: "assiduous",
        choices: ['勤勉な', '怠惰な', '無関心な', '消極的な'],
         correctAnswer: "勤勉な"
    },
    {
        id: 4019,
        question: "promiscuous",
        choices: ['乱雑な', '整然とした', '厳格な', '几帳面な'],
         correctAnswer: "乱雑な"
    },
    {
        id: 4020,
        question: "widget",
        choices: ['機械装置', '家具', '衣服', '食品'],
         correctAnswer: "機械装置"
    },
    {
        id: 4021,
        question: "replete",
        choices: ['堪能した', '空腹の', '不足した', '貧しい'],
         correctAnswer: "堪能した"
    },
    {
        id: 4022,
        question: "juvenile",
        choices: ['少年の', '老人の', '成人の', '幼児の'],
         correctAnswer: "少年の"
    },
    {
        id: 4023,
        question: "mire",
        choices: ['湿原', '山岳', '都市', '海岸'],
         correctAnswer: "湿原"
    },
    {
        id: 4024,
        question: "take something with a grain of salt",
        choices: ['懐疑的に', '信じ込む', 'すぐに受け入れる', '全く無視する'],
         correctAnswer: "懐疑的に"
    },
    {
        id: 4025,
        question: "bereaved",
        choices: ['先立たれた', '生存している', '健康な', '若々しい'],
         correctAnswer: "先立たれた"
    },
    {
        id: 4026,
        question: "engross",
        choices: ['注意を向け集中させる', '無関心でいる', '怠ける', '避ける'],
         correctAnswer: "注意を向け集中させる"
    },
    {
        id: 4027,
        question: "toy with",
        choices: ['いじくる', '壊す', '避ける', '無視する'],
         correctAnswer: "いじくる"
    },
    {
        id: 4028,
        question: "undue",
        choices: ['過度の', '適度な', '少なすぎる', '十分な'],
         correctAnswer: "過度の"
    },
    {
        id: 4029,
        question: "zodiac",
        choices: ['干支', '星座', '惑星', '神話'],
         correctAnswer: "干支"
    },
    {
        id: 4030,
        question: "amphibian",
        choices: ['両生類の', '哺乳類の', '爬虫類の', '鳥類の'],
         correctAnswer: "両生類の"
    },
    {
        id: 4031,
        question: "extant",
        choices: ['現存の', '消滅した', '幻の', '偽物の'],
         correctAnswer: "現存の"
    },
    {
        id: 4032,
        question: "heinous",
        choices: ['凶悪な', '穏やかな', '優雅な', '無害な'],
         correctAnswer: "凶悪な"
    },
    {
        id: 4033,
        question: "sheepishly",
        choices: ['気弱な手段で', '大胆に', '積極的に', '威圧的に'],
         correctAnswer: "気弱な手段で"
    },
    {
        id: 4034,
        question: "materialism",
        choices: ['唯物論', '精神主義', '宗教信仰', '哲学的観念'],
         correctAnswer: "唯物論"
    },
    {
        id: 4035,
        question: "size up",
        choices: ['評価する', '無視する', '減少させる', '強調する'],
         correctAnswer: "評価する"
    },
    {
        id: 4036,
        question: "thumb a ride",
        choices: ['ヒッチハイクする', '歩く', '電車に乗る', 'バスを使う'],
         correctAnswer: "ヒッチハイクする"
    },
    {
        id: 4037,
        question: "transcendent",
        choices: ['卓越した', '普通の', '平凡な', '並みの'],
         correctAnswer: "卓越した"
    },
    {
        id: 4038,
        question: "foolproof",
        choices: ['誰にでも理解できる', '複雑な', '誤解しやすい', '困難な'],
         correctAnswer: "誰にでも理解できる"
    },
    {
        id: 4039,
        question: "rasp",
        choices: ['やすり', 'ハンマー', 'ドライバー', 'ノコギリ'],
         correctAnswer: "やすり"
    },
    {
        id: 4040,
        question: "untenable",
        choices: ['耐えられない', '許容できる', '持ちこたえる', '維持可能な'],
         correctAnswer: "耐えられない"
    },
    {
        id: 4041,
        question: "lay down the law",
        choices: ['法則を定める', '法律を廃止する', '法律を破る', '規則を無視する'],
         correctAnswer: "法則を定める"
    },
    {
        id: 4042,
        question: "agrarian",
        choices: ['農地の', '都市の', '工業の', '無関係な'],
         correctAnswer: "農地の"
    },
    {
        id: 4043,
        question: "chronically",
        choices: ['慢性的に', '一時的に', '急激に', '偶然に'],
         correctAnswer: "慢性的に"
    },
    {
        id: 4044,
        question: "tactful",
        choices: ['機転の利く', '無神経な', '冷淡な', '鈍感な'],
         correctAnswer: "機転の利く"
    },
    {
        id: 4045,
        question: "snippet",
        choices: ['切れ端', '全体', '厚み', 'まとまり'],
         correctAnswer: "切れ端"
    },
    {
        id: 4046,
        question: "caustic",
        choices: ['腐食性の', '無害な', '穏やかな', '安全な'],
         correctAnswer: "腐食性の"
    },
    {
        id: 4047,
        question: "derogatory",
        choices: ['軽蔑的な', '賞賛の', '励ましの', '中立の'],
         correctAnswer: "軽蔑的な"
    },
    {
        id: 4048,
        question: "treacherous",
        choices: ['背いた', '忠実な', '誠実な', '信用できる'],
         correctAnswer: "背いた"
    },
    {
        id: 4049,
        question: "passbook",
        choices: ['通帳', '財布', '契約書', '手紙'],
         correctAnswer: "通帳"
    },
    {
        id: 4050,
        question: "proviso",
        choices: ['但し書き', '結論', '前提', '約束'],
         correctAnswer: "但し書き"
    },
    {
        id: 4051,
        question: "pallid",
        choices: ['蒼白な', '血色の良い', '健康的な', '赤みのある'],
         correctAnswer: "蒼白な"
    },
    {
        id: 4052,
        question: "vindictive",
        choices: ['執念深い', '寛容な', '優しい', '思いやりのある'],
         correctAnswer: "執念深い"
    },
    {
        id: 4053,
        question: "ruefully",
        choices: ['悲しそうに', '楽しそうに', '無関心に', '怒りながら'],
         correctAnswer: "悲しそうに"
    },
    {
        id: 4054,
        question: "rogue",
        choices: ['悪党', '正義の味方', '市民', '警察'],
         correctAnswer: "悪党"
    },
    {
        id: 4055,
        question: "inquisitive",
        choices: ['詮索好きの', '無関心な', '冷淡な', '控えめな'],
         correctAnswer: "詮索好きの"
    },
    {
        id: 4056,
        question: "semen",
        choices: ['精液', '血液', '汗', '涙'],
         correctAnswer: "精液"
    },
    {
        id: 4057,
        question: "fitful",
        choices: ['気まぐれな', '安定した', '確実な', '慎重な'],
         correctAnswer: "気まぐれな"
    },
    {
        id: 4058,
        question: "vacuous",
        choices: ['空虚な', '満たされた', '具体的な', '実用的な'],
         correctAnswer: "空虚な"
    },
    {
        id: 4059,
        question: "resurgent",
        choices: ['再び盛り返す', '衰退する', '変わらない', '減少する'],
         correctAnswer: "再び盛り返す"
    },
    {
        id: 4060,
        question: "harangue",
        choices: ['長い演説をする', '黙る', '簡単に話す', '無言でいる'],
         correctAnswer: "長い演説をする"
    },
    {
        id: 4061,
        question: "truncate",
        choices: ['切り詰める', '拡張する', '増やす', '変更する'],
         correctAnswer: "切り詰める"
    },
    {
        id: 4062,
        question: "cut to the chase",
        choices: ['要点にすぐに入る', '遠回しに話す', '冗長に話す', '説明を省く'],
         correctAnswer: "要点にすぐに入る"
    },
    {
        id: 4063,
        question: "zephyr",
        choices: ['そよ風', '嵐', '突風', '台風'],
         correctAnswer: "そよ風"
    },
    {
        id: 4064,
        question: "have a whale of a time",
        choices: ['楽しい時を過ごす', '退屈な時間を過ごす', '辛い経験をする', '困難を経験する'],
         correctAnswer: "楽しい時を過ごす"
    },
    {
        id: 4065,
        question: "juxtapose",
        choices: ['並置する', '分ける', '避ける', '区別する'],
         correctAnswer: "並置する"
    },
    {
        id: 4066,
        question: "crass",
        choices: ['鈍感な', '敏感な', '礼儀正しい', '洗練された'],
         correctAnswer: "鈍感な"
    },
    {
        id: 4067,
        question: "dogmatic",
        choices: ['教条的な', '柔軟な', '受け身な', '気まぐれな'],
         correctAnswer: "教条的な"
    },
    {
        id: 4068,
        question: "obfuscate",
        choices: ['わかりにくくする', '明確にする', '単純化する', '補足する'],
         correctAnswer: "わかりにくくする"
    },
    {
        id: 4069,
        question: "on a wing and a prayer",
        choices: ['危険で不確実な状況で', '安全な状況で', '計画的に', '慎重に行動して'],
         correctAnswer: "危険で不確実な状況で"
    },
    {
        id: 4070,
        question: "sacrosanct",
        choices: ['神聖視される', '軽視される', '無視される', '疑われる'],
         correctAnswer: "神聖視される"
    },
    {
        id: 4071,
        question: "lackluster",
        choices: ['無気力な', '活気のある', '輝く', '魅力的な'],
         correctAnswer: "無気力な"
    },
    {
        id: 4072,
        question: "iconoclast",
        choices: ['偶像破壊者', '伝統を守る人', '改革者', '支持者'],
         correctAnswer: "偶像破壊者"
    },
    {
        id: 4073,
        question: "xenophile",
        choices: ['外国人愛好者', '外国人嫌い', '閉鎖的な人', '伝統主義者'],
         correctAnswer: "外国人愛好者"
    },
    {
        id: 4074,
        question: "nefarious",
        choices: ['邪悪な', '善良な', '正直な', '誠実な'],
         correctAnswer: "邪悪な"
    },
    {
        id: 4075,
        question: "fallacious",
        choices: ['誤った', '正確な', '論理的な', '確実な'],
         correctAnswer: "誤った"
    },
    {
        id: 4076,
        question: "jubilant",
        choices: ['歓喜に満ちた', '悲しみに沈んだ', '落ち込んだ', '冷静な'],
         correctAnswer: "歓喜に満ちた"
    },
    {
        id: 4077,
        question: "veracity",
        choices: ['真実', '嘘', '誤解', '不正確'],
         correctAnswer: "真実"
    },
    {
        id: 4078,
        question: "ferret out",
        choices: ['探し出す', '隠す', '見逃す', '忘れる'],
         correctAnswer: "探し出す"
    },
    {
        id: 4079,
        question: "virtuoso",
        choices: ['名人', '初心者', '学習者', '未熟者'],
         correctAnswer: "名人"
    },
    {
        id: 4080,
        question: "dawdle",
        choices: ['ぐずぐずする', '素早く動く', '決断する', '行動する'],
         correctAnswer: "ぐずぐずする"
    },
    {
        id: 4081,
        question: "yeasty",
        choices: ['発酵する', '腐敗する', '固まる', '停止する'],
         correctAnswer: "発酵する"
    },
    {
        id: 4082,
        question: "knave",
        choices: ['悪党', '善人', '正直者', '英雄'],
         correctAnswer: "悪党"
    },
    {
        id: 4083,
        question: "ebullient",
        choices: ['元気いっぱいの', '冷静な', '控えめな', 'おとなしい'],
         correctAnswer: "元気いっぱいの"
    },
    {
        id: 4084,
        question: "pugnacious",
        choices: ['好戦的な', '平和的な', '無害な', '優しい'],
         correctAnswer: "好戦的な"
    },
    {
        id: 4085,
        question: "solemnity",
        choices: ['厳粛', '軽薄', '陽気', '愉快'],
         correctAnswer: "厳粛"
    },
    {
        id: 4086,
        question: "invigorate",
        choices: ['活気づける', '弱める', '疲れさせる', '抑える'],
         correctAnswer: "活気づける"
    },
    {
        id: 4087,
        question: "litigate",
        choices: ['訴訟する', '和解する', '避ける', '解決する'],
         correctAnswer: "訴訟する"
    },
    {
        id: 4088,
        question: "querulous",
        choices: ['不平を言う', '満足する', '静かにする', '楽しむ'],
         correctAnswer: "不平を言う"
    },
    {
        id: 4089,
        question: "obstinate",
        choices: ['頑固な', '柔軟な', '順応性のある', '理解しやすい'],
         correctAnswer: "頑固な"
    },
    {
        id: 4090,
        question: "sanctimonious",
        choices: ['偽善的な', '誠実な', '控えめな', '謙虚な'],
         correctAnswer: "偽善的な"
    },
    {
        id: 4091,
        question: "rambunctious",
        choices: ['やかましい', '静かな', '落ち着いた', '冷静な'],
         correctAnswer: "やかましい"
    },
    {
        id: 4092,
        question: "unflappable",
        choices: ['動じない', '慌てる', '臆病な', '衝動的な'],
         correctAnswer: "動じない"
    },
    {
        id: 4093,
        question: "verbose",
        choices: ['冗長な', '簡潔な', '要点を押さえた', '短い'],
         correctAnswer: "冗長な"
    },
    {
        id: 4094,
        question: "beleaguer",
        choices: ['包囲する', '解放する', '助ける', '支援する'],
         correctAnswer: "包囲する"
    },
    {
        id: 4095,
        question: "put up with",
        choices: ['我慢する', '拒絶する', '歓迎する', '受け入れる'],
         correctAnswer: "我慢する"
    },
    {
        id: 4096,
        question: "quibble",
        choices: ['あら探し', '称賛', '感謝', '賛同'],
         correctAnswer: "あら探し"
    },
    {
        id: 4097,
        question: "knoll",
        choices: ['小丘', '山', '谷', '崖'],
         correctAnswer: "小丘"
    },
    {
        id: 4098,
        question: "gerrymander",
        choices: ['選挙区を操作する', '公平に決める', '無視する', '制限する'],
         correctAnswer: "選挙区を操作する"
    },
    {
        id: 4099,
        question: "iconoclastic",
        choices: ['偶像破壊的な', '保守的な', '伝統的な', '順応的な'],
         correctAnswer: "偶像破壊的な"
    },
    {
        id: 4100,
        question: "horticulture",
        choices: ['園芸', '建築', '工業', '料理'],
         correctAnswer: "園芸"
    },
    {
        id: 4101,
        question: "hone in on",
        choices: ['特定の対象に集中する', '分散する', '避ける', '無視する'],
         correctAnswer: "特定の対象に集中する"
    },
    {
        id: 4102,
        question: "calumny",
        choices: ['誹謗', '賞賛', '励まし', '尊敬'],
         correctAnswer: "誹謗"
    },
    {
        id: 4103,
        question: "bellicose",
        choices: ['好戦的な', '平和的な', '優しい', '穏やかな'],
         correctAnswer: "好戦的な"
    },
    {
        id: 4104,
        question: "loquacious",
        choices: ['おしゃべりな', '無口な', '静かな', '控えめな'],
         correctAnswer: "おしゃべりな"
    },
    {
        id: 4105,
        question: "neophyte",
        choices: ['初心者', '熟練者', '専門家', '達人'],
         correctAnswer: "初心者"
    },
    {
        id: 4106,
        question: "quixotic",
        choices: ['非現実的な', '現実的な', '論理的な', '計画的な'],
         correctAnswer: "非現実的な"
    },
    {
        id: 4107,
        question: "spill the beans",
        choices: ['秘密を漏らす', '秘密を守る', '嘘をつく', '隠す'],
         correctAnswer: "秘密を漏らす"
    },
    {
        id: 4108,
        question: "winsome",
        choices: ['魅力的な', '退屈な', '地味な', '無愛想な'],
         correctAnswer: "魅力的な"
    },
    {
        id: 4109,
        question: "rake over the coals",
        choices: ['厳しく叱責する', '褒める', '励ます', '無視する'],
         correctAnswer: "厳しく叱責する"
    },
    {
        id: 4110,
        question: "vexation",
        choices: ['悔しさ', '満足感', '喜び', '安心感'],
         correctAnswer: "悔しさ"
    },
    {
        id: 4111,
        question: "feign",
        choices: ['偽る', '正直に話す', '真実を伝える', '事実を述べる'],
         correctAnswer: "偽る"
    },
    {
        id: 4112,
        question: "mete out",
        choices: ['分配する', '奪う', '増やす', '減らす'],
         correctAnswer: "分配する"
    },
    {
        id: 4113,
        question: "vacillate",
        choices: ['ためらう', '決断する', '突き進む', '積極的に行動する'],
         correctAnswer: "ためらう"
    },
    {
        id: 4114,
        question: "pull someone's leg",
        choices: ['冗談でからかう', '真剣に話す', '脅す', '侮辱する'],
         correctAnswer: "冗談でからかう"
    },
    {
        id: 4115,
        question: "opulence",
        choices: ['富裕', '貧困', '普通', '不足'],
         correctAnswer: "富裕"
    },
    {
        id: 4116,
        question: "torpid",
        choices: ['不活発な', '活動的な', '速い', '活発な'],
         correctAnswer: "不活発な"
    },
    {
        id: 4117,
        question: "let the cat out of the bag",
        choices: ['秘密を漏らす', '秘密を守る', '嘘をつく', '隠す'],
         correctAnswer: "秘密を漏らす"
    },
    {
        id: 4118,
        question: "zestful",
        choices: ['精力的な', '退屈な', '怠惰な', '無関心な'],
         correctAnswer: "精力的な"
    },
    {
        id: 4119,
        question: "malleable",
        choices: ['柔軟な', '頑固な', '硬直した', '固定化した'],
         correctAnswer: "柔軟な"
    },
    {
        id: 4120,
        question: "ardor",
        choices: ['情熱', '冷淡', '無関心', '消極的'],
         correctAnswer: "情熱"
    },
    {
        id: 4121,
        question: "cut down on",
        choices: ['削減する', '増やす', '維持する', '強化する'],
         correctAnswer: "削減する"
    },
    {
        id: 4122,
        question: "abnegation",
        choices: ['自己否定', '自己肯定', '自己主張', '自己満足'],
         correctAnswer: "自己否定"
    },
    {
        id: 4123,
        question: "lament",
        choices: ['嘆く', '喜ぶ', '無視する', '祝う'],
         correctAnswer: "嘆く"
    },
    {
        id: 4124,
        question: "yeoman",
        choices: ['忠実な働き手', '貴族', '学者', '商人'],
         correctAnswer: "忠実な働き手"
    },
    {
        id: 4125,
        question: "grapple with",
        choices: ['取り組む', '避ける', '放棄する', '軽視する'],
         correctAnswer: "取り組む"
    },
    {
        id: 4126,
        question: "garrulous",
        choices: ['おしゃべりな', '無口な', '控えめな', '冷静な'],
         correctAnswer: "おしゃべりな"
    },
    {
        id: 4127,
        question: "obviate",
        choices: ['取り除く', '加える', '隠す', '支援する'],
         correctAnswer: "取り除く"
    },
    {
        id: 4128,
        question: "bilk",
        choices: ['だます', '信頼する', '助ける', '守る'],
         correctAnswer: "だます"
    },
    {
        id: 4129,
        question: "jocose",
        choices: ['ふざけた', '真剣な', '厳粛な', '悲しい'],
         correctAnswer: "ふざけた"
    },
    {
        id: 4130,
        question: "yonder",
        choices: ['向こう側の', '近くの', '手元の', '狭い'],
         correctAnswer: "向こう側の"
    },
    {
        id: 4131,
        question: "dodge a bullet",
        choices: ['危機を回避する', '危険に陥る', '失敗する', '勇敢に立ち向かう'],
         correctAnswer: "危機を回避する"
    },
    {
        id: 4132,
        question: "cavalcade",
        choices: ['馬車の行列', '軍隊', '市場', '楽団'],
         correctAnswer: "馬車の行列"
    },
    {
        id: 4133,
        question: "hubris",
        choices: ['傲慢', '謙虚', '優しさ', '誠実'],
         correctAnswer: "傲慢"
    },
    {
        id: 4134,
        question: "malice",
        choices: ['悪意', '善意', '無関心', '慈悲'],
         correctAnswer: "悪意"
    },
    {
        id: 4135,
        question: "ravenous",
        choices: ['飢えた', '満腹の', '興味のない', '冷静な'],
         correctAnswer: "飢えた"
    },
    {
        id: 4136,
        question: "chalk up to",
        choices: ['帰する', '否定する', '拒否する', '誇示する'],
         correctAnswer: "帰する"
    },
    {
        id: 4137,
        question: "nebula",
        choices: ['星雲', '隕石', '惑星', '銀河'],
         correctAnswer: "星雲"
    },
    {
        id: 4138,
        question: "allay fears",
        choices: ['恐怖を和らげる', '恐怖を増す', '無視する', '助長する'],
         correctAnswer: "恐怖を和らげる"
    },
    {
        id: 4139,
        question: "fit as a fiddle",
        choices: ['非常に健康で元気', '病気がち', '怠惰な', '疲れやすい'],
         correctAnswer: "非常に健康で元気"
    },
    {
        id: 4140,
        question: "on the fence",
        choices: ['決断を保留する', '即決する', '迷わない', 'すぐに選択する'],
         correctAnswer: "決断を保留する"
    },
    {
        id: 4141,
        question: "emaciated",
        choices: ['やつれた', '健康的な', '太った', '筋肉質な'],
         correctAnswer: "やつれた"
    },
    {
        id: 4142,
        question: "at the drop of a hat",
        choices: ['すぐに', '時間をかけて', '後回しにして', '避ける'],
         correctAnswer: "すぐに"
    },
    {
        id: 4143,
        question: "gauche",
        choices: ['ぎこちない', '洗練された', '滑らかな', '優雅な'],
         correctAnswer: "ぎこちない"
    },
    {
        id: 4144,
        question: "enervate",
        choices: ['弱める', '強化する', '育成する', '促進する'],
         correctAnswer: "弱める"
    },
    {
        id: 4145,
        question: "brush aside",
        choices: ['無視する', '考慮する', '尊重する', '大切にする'],
         correctAnswer: "無視する"
    },
    {
        id: 4146,
        question: "flabbergast",
        choices: ['驚かせる', '落ち着かせる', '混乱させる', '穏やかにする'],
         correctAnswer: "驚かせる"
    },
    {
        id: 4147,
        question: "mawkish",
        choices: ['感傷的な', '冷淡な', '鈍感な', '理性的な'],
         correctAnswer: "感傷的な"
    },
    {
        id: 4148,
        question: "sully",
        choices: ['汚す', '清める', '美しくする', '輝かせる'],
         correctAnswer: "汚す"
    },
    {
        id: 4149,
        question: "guffaw",
        choices: ['大笑いする', '静かに笑う', '冷笑する', '微笑む'],
         correctAnswer: "大笑いする"
    },
    {
        id: 4150,
        question: "queue",
        choices: ['列を作る', '割り込む', '避ける', '無視する'],
         correctAnswer: "列を作る"
    },
    {
        id: 4151,
        question: "profuse",
        choices: ['豊富な', '不足した', 'まばらな', '限定的な'],
         correctAnswer: "豊富な"
    },
    {
        id: 4152,
        question: "quash rumors",
        choices: ['噂を抑制する', '噂を広める', '噂を無視する', '噂を楽しむ'],
         correctAnswer: "噂を抑制する"
    },
    {
        id: 4153,
        question: "indomitable",
        choices: ['屈しない', '脆弱な', '従順な', '不安定な'],
         correctAnswer: "屈しない"
    },
    {
        id: 4154,
        question: "augment",
        choices: ['増やす', '減らす', '抑える', '無視する'],
         correctAnswer: "増やす"
    },
    {
        id: 4155,
        question: "jargon",
        choices: ['専門用語', '標準語', '日常語', '俗語'],
         correctAnswer: "専門用語"
    },
    {
        id: 4156,
        question: "keep something at bay",
        choices: ['何かを抑える', '何かを招く', '何かを広める', '何かを無視する'],
         correctAnswer: "何かを抑える"
    },
    {
        id: 4157,
        question: "zeppelin",
        choices: ['飛行船', 'ジェット機', '気球', 'ヘリコプター'],
         correctAnswer: "飛行船"
    },
    {
        id: 4158,
        question: "vituperate",
        choices: ['激しく非難する', '称賛する', '冷静に話す', '議論を避ける'],
         correctAnswer: "激しく非難する"
    },
    {
        id: 4159,
        question: "serrated",
        choices: ['ギザギザの', '滑らかな', '丸い', '直線的な'],
         correctAnswer: "ギザギザの"
    },
    {
        id: 4160,
        question: "abate",
        choices: ['減少する', '増加する', '維持する', '抑える'],
         correctAnswer: "減少する"
    },
    {
        id: 4161,
        question: "trepidation",
        choices: ['恐れ', '安心', '勇気', '無関心'],
         correctAnswer: "恐れ"
    },
    {
        id: 4162,
        question: "vehemently",
        choices: ['激しく', '穏やかに', '静かに', '控えめに'],
         correctAnswer: "激しく"
    },
    {
        id: 4163,
        question: "cacophony",
        choices: ['不協和音', '調和のとれた音', '静寂', '快音'],
         correctAnswer: "不協和音"
    },
    {
        id: 4164,
        question: "effigy",
        choices: ['肖像', '風景画', '抽象画', '記号'],
         correctAnswer: "肖像"
    },
    {
        id: 4165,
        question: "fallible",
        choices: ['誤りやすい', '正確な', '完璧な', '信頼できる'],
         correctAnswer: "誤りやすい"
    },
    {
        id: 4166,
        question: "hedonistic",
        choices: ['快楽主義的', '禁欲的', '堅実な', '保守的'],
         correctAnswer: "快楽主義的"
    },
    {
        id: 4167,
        question: "juggernaut",
        choices: ['押し寄せる大勢力', '小規模な組織', '穏やかな流れ', '停滞'],
         correctAnswer: "押し寄せる大勢力"
    },
    {
        id: 4168,
        question: "laconic",
        choices: ['簡潔な', '冗長な', '詳しい', '複雑な'],
         correctAnswer: "簡潔な"
    },
    {
        id: 4169,
        question: "nip something in the bud",
        choices: ['初めのうちに何かを抑止する', '何かを後回しにする', '問題を大きくする', '気にしない'],
         correctAnswer: "初めのうちに何かを抑止する"
    },
    {
        id: 4170,
        question: "parsimonious",
        choices: ['けちな', '気前の良い', '浪費する', '無関心な'],
         correctAnswer: "けちな"
    },
    {
        id: 4171,
        question: "surreptitious",
        choices: ['秘密裏の', '公然の', '堂々とした', '正々堂々とした'],
         correctAnswer: "秘密裏の"
    },
    {
        id: 4172,
        question: "yearn",
        choices: ['切望する', '無関心でいる', '拒否する', '避ける'],
         correctAnswer: "切望する"
    },
    {
        id: 4173,
        question: "abdicate",
        choices: ['退位する', '就任する', '留まる', '昇進する'],
         correctAnswer: "退位する"
    },
    {
        id: 4174,
        question: "stave off",
        choices: ['避ける', '受け入れる', '歓迎する', '促進する'],
         correctAnswer: "避ける"
    },
    {
        id: 4175,
        question: "calamitous",
        choices: ['災害の', '幸福な', '穏やかな', '平和な'],
         correctAnswer: "災害の"
    },
    {
        id: 4176,
        question: "dauntless",
        choices: ['恐れ知らず', '臆病な', '慎重な', '控えめな'],
         correctAnswer: "恐れ知らず"
    },
    {
        id: 4177,
        question: "idiosyncrasy",
        choices: ['特異性', '一般性', '標準的な性質', '伝統的な特徴'],
         correctAnswer: "特異性"
    },
    {
        id: 4178,
        question: "narcissistic",
        choices: ['自己愛的な', '謙虚な', '利他的な', '思いやりのある'],
         correctAnswer: "自己愛的な"
    },
    {
        id: 4179,
        question: "quaint",
        choices: ['風変わりな', '現代的な', '普通の', '平凡な'],
         correctAnswer: "風変わりな"
    },
    {
        id: 4180,
        question: "xenophobic",
        choices: ['外国人恐怖症', '外国人に寛容な', '多文化主義的', '国際的な'],
         correctAnswer: "外国人恐怖症"
    },
    {
        id: 4181,
        question: "jockey for position",
        choices: ['位置を取り合う', '協力する', '譲る', '避ける'],
         correctAnswer: "位置を取り合う"
    },
    {
        id: 4182,
        question: "yield",
        choices: ['産出する', '拒否する', '減少させる', '浪費する'],
         correctAnswer: "産出する"
    },
    {
        id: 4183,
        question: "zeal",
        choices: ['熱意', '冷淡', '無関心', '退屈'],
         correctAnswer: "熱意"
    },
    {
        id: 4184,
        question: "belabor",
        choices: ['冗長に述べる', '簡潔に話す', '省略する', '無視する'],
         correctAnswer: "冗長に述べる"
    },
    {
        id: 4185,
        question: "fabricate",
        choices: ['作り上げる', '破壊する', '削除する', '無視する'],
         correctAnswer: "作り上げる"
    },
    {
        id: 4186,
        question: "halcyon",
        choices: ['穏やかな', '荒れた', '激しい', '乱れた'],
         correctAnswer: "穏やかな"
    },
    {
        id: 4187,
        question: "obtuse",
        choices: ['鈍感な', '鋭い', '賢い', '直感的な'],
         correctAnswer: "鈍感な"
    },
    {
        id: 4188,
        question: "tantamount",
        choices: ['同等の', '異なる', '下位の', '上位の'],
         correctAnswer: "同等の"
    },
    {
        id: 4189,
        question: "umbrage",
        choices: ['立腹', '満足', '喜び', '安心'],
         correctAnswer: "立腹"
    },
    {
        id: 4190,
        question: "twist someone's arm",
        choices: ['強く説得する', '遠慮する', '見逃す', '拒否する'],
         correctAnswer: "強く説得する"
    },
    {
        id: 4191,
        question: "yawp",
        choices: ['大声で叫ぶ', '静かに話す', '囁く', '無言でいる'],
         correctAnswer: "大声で叫ぶ"
    },
    {
        id: 4192,
        question: "convoluted",
        choices: ['複雑な', '単純な', '明瞭な', '簡潔な'],
         correctAnswer: "複雑な"
    },
    {
        id: 4193,
        question: "nip in the bud",
        choices: ['初期に阻止する', '促進する', '広める', '拡大する'],
         correctAnswer: "初期に阻止する"
    },
    {
        id: 4194,
        question: "dexterous",
        choices: ['器用な', '不器用な', 'ぎこちない', '無関心な'],
         correctAnswer: "器用な"
    },
    {
        id: 4195,
        question: "ignominy",
        choices: ['恥辱', '名誉', '尊敬', '誇り'],
         correctAnswer: "恥辱"
    },
    {
        id: 4196,
        question: "lackadaisical",
        choices: ['元気のない', '活発な', 'エネルギッシュな', '意欲的な'],
         correctAnswer: "元気のない"
    },
    {
        id: 4197,
        question: "bite the bullet",
        choices: ['勇気を振り絞る', '逃げる', '怠ける', '避ける'],
         correctAnswer: "勇気を振り絞る"
    },
    {
        id: 4198,
        question: "mendacious",
        choices: ['嘘つきの', '誠実な', '正直な', '信頼できる'],
         correctAnswer: "嘘つきの"
    },
    {
        id: 4199,
        question: "paucity",
        choices: ['少なさ', '豊富さ', '過剰', '大量'],
         correctAnswer: "少なさ"
    },
    {
        id: 4200,
        question: "stymie",
        choices: ['妨害する', '助ける', '支援する', '許可する'],
         correctAnswer: "妨害する"
    },
    {
        id: 4201,
        question: "unctuous",
        choices: ['へつらう', '率直な', '誠実な', '控えめな'],
         correctAnswer: "へつらう"
    },
    {
        id: 4202,
        question: "yoke",
        choices: ['くびき', '自由', '解放', '自立'],
         correctAnswer: "くびき"
    },
    {
        id: 4203,
        question: "aberrant",
        choices: ['異常な', '標準的な', '伝統的な', '普通の'],
         correctAnswer: "異常な"
    },
    {
        id: 4204,
        question: "deleterious",
        choices: ['有害な', '無害な', '安全な', '有益な'],
         correctAnswer: "有害な"
    },
    {
        id: 4205,
        question: "exasperate",
        choices: ['いら立たせる', '落ち着かせる', '安心させる', '励ます'],
         correctAnswer: "いら立たせる"
    },
    {
        id: 4206,
        question: "miss the boat",
        choices: ['機会を逃す', '成功する', '適切なタイミングをつかむ', '迅速に行動する'],
         correctAnswer: "機会を逃す"
    },
    {
        id: 4207,
        question: "histrionic",
        choices: ['演技が過剰な', '控えめな', '冷静な', '落ち着いた'],
         correctAnswer: "演技が過剰な"
    },
    {
        id: 4208,
        question: "ineffable",
        choices: ['言葉で言い表せない', '説明しやすい', '明瞭な', '単純な'],
         correctAnswer: "言葉で言い表せない"
    },
    {
        id: 4209,
        question: "kindle",
        choices: ['着火する', '消火する', '冷やす', '無視する'],
         correctAnswer: "着火する"
    },
    {
        id: 4210,
        question: "obstreperous",
        choices: ['騒々しい', '静かな', '落ち着いた', '穏やかな'],
         correctAnswer: "騒々しい"
    },
    {
        id: 4211,
        question: "throw in the towel",
        choices: ['降参する', '戦い続ける', '挑戦する', '勝利する'],
         correctAnswer: "降参する"
    },
    {
        id: 4212,
        question: "sycophantic",
        choices: ['おべっか使いの', '正直な', '率直な', '謙虚な'],
         correctAnswer: "おべっか使いの"
    },
    {
        id: 4213,
        question: "fend off",
        choices: ['防ぐ', '受け入れる', '迎える', '助ける'],
         correctAnswer: "防ぐ"
    },
    {
        id: 4214,
        question: "zealous",
        choices: ['熱心な', '無関心な', '冷静な', '退屈な'],
         correctAnswer: "熱心な"
    },
    {
        id: 4215,
        question: "diaphanous",
        choices: ['透明な', '不透明な', '厚い', '堅固な'],
         correctAnswer: "透明な"
    },
    {
        id: 4216,
        question: "immutable",
        choices: ['不変の', '変わりやすい', '不安定な', '柔軟な'],
         correctAnswer: "不変の"
    },
    {
        id: 4217,
        question: "labyrinthine",
        choices: ['迷路のような', '単純な', '明快な', '直線的な'],
         correctAnswer: "迷路のような"
    },
    {
        id: 4218,
        question: "palpitate",
        choices: ['動悸する', '停止する', '落ち着く', '安定する'],
         correctAnswer: "動悸する"
    },
    {
        id: 4219,
        question: "rhapsodize",
        choices: ['熱狂的に語る', '冷静に話す', '軽視する', '批判する'],
         correctAnswer: "熱狂的に語る"
    },
    {
        id: 4220,
        question: "vainglorious",
        choices: ['自己過剰な', '謙虚な', '思慮深い', '控えめな'],
         correctAnswer: "自己過剰な"
    },
    {
        id: 4221,
        question: "yore",
        choices: ['昔', '未来', '現在', '近年'],
         correctAnswer: "昔"
    },
    {
        id: 4222,
        question: "ignominious",
        choices: ['恥ずべき', '誇らしい', '賞賛される', '名誉ある'],
         correctAnswer: "恥ずべき"
    },
    {
        id: 4223,
        question: "jocular",
        choices: ['冗談好きな', '真面目な', '厳格な', '冷淡な'],
         correctAnswer: "冗談好きな"
    },
    {
        id: 4224,
        question: "smell a rat",
        choices: ['うさんくさいと感じる', '信じ込む', '納得する', '無視する'],
         correctAnswer: "うさんくさいと感じる"
    },
    {
        id: 4225,
        question: "wily",
        choices: ['ずる賢い', '誠実な', '率直な', '正直な'],
         correctAnswer: "ずる賢い"
    },
    {
        id: 4226,
        question: "abstain",
        choices: ['控える', '積極的に行動する', '楽しむ', '推奨する'],
         correctAnswer: "控える"
    },
    {
        id: 4227,
        question: "cavort",
        choices: ['はね回る', 'じっとする', '座る', '寝る'],
         correctAnswer: "はね回る"
    },
    {
        id: 4228,
        question: "feral",
        choices: ['野生の', '飼いならされた', '優しい', '人懐っこい'],
         correctAnswer: "野生の"
    },
    {
        id: 4229,
        question: "hew",
        choices: ['切り倒す', '育てる', '助ける', '救う'],
         correctAnswer: "切り倒す"
    },
    {
        id: 4230,
        question: "impede",
        choices: ['妨げる', '促進する', '支援する', '助ける'],
         correctAnswer: "妨げる"
    },
    {
        id: 4231,
        question: "squander opportunities",
        choices: ['機会を無駄にする', '機会を生かす', '成功する', '慎重に行動する'],
         correctAnswer: "機会を無駄にする"
    },
    {
        id: 4232,
        question: "lilt",
        choices: ['軽快なリズム', '不協和音', '重い音', '沈んだ音'],
         correctAnswer: "軽快なリズム"
    },
    {
        id: 4233,
        question: "paltry",
        choices: ['取るに足らない', '価値のある', '重要な', '高価な'],
         correctAnswer: "取るに足らない"
    },
    {
        id: 4234,
        question: "vex",
        choices: ['困惑させる', '安心させる', '喜ばせる', '穏やかにする'],
         correctAnswer: "困惑させる"
    },
    {
        id: 4235,
        question: "pass the buck",
        choices: ['責任を転嫁する', '責任を負う', '謝罪する', '認める'],
         correctAnswer: "責任を転嫁する"
    },
    {
        id: 4236,
        question: "xylophone",
        choices: ['木琴', 'ピアノ', 'バイオリン', 'トランペット'],
         correctAnswer: "木琴"
    },
    {
        id: 4237,
        question: "bedraggled",
        choices: ['ぼろぼろの', '清潔な', '輝いている', '新品の'],
         correctAnswer: "ぼろぼろの"
    },
    {
        id: 4238,
        question: "cajole",
        choices: ['なだめる', '脅す', '無視する', '冷たくあしらう'],
         correctAnswer: "なだめる"
    },
    {
        id: 4239,
        question: "equivocate",
        choices: ['あいまいに言う', '率直に話す', '正確に伝える', '単刀直入に話す'],
         correctAnswer: "あいまいに言う"
    },
    {
        id: 4240,
        question: "up in arms",
        choices: ['怒って', '喜んで', '満足して', '冷静に'],
         correctAnswer: "怒って"
    },
    {
        id: 4241,
        question: "gesticulate",
        choices: ['身振り手振りで話す', '無言で話す', '静かに話す', '無表情で話す'],
         correctAnswer: "身振り手振りで話す"
    },
    {
        id: 4242,
        question: "hobnob",
        choices: ['親しく交際する', '避ける', '無視する', '冷淡に接する'],
         correctAnswer: "親しく交際する"
    },
    {
        id: 4243,
        question: "imbibe",
        choices: ['飲む', '吐く', '拒否する', '乾燥させる'],
         correctAnswer: "飲む"
    },
    {
        id: 4244,
        question: "maelstrom",
        choices: ['大渦', '穏やかな流れ', '静寂', '停滞'],
         correctAnswer: "大渦"
    },
    {
        id: 4245,
        question: "palliate",
        choices: ['緩和する', '悪化させる', '無視する', '強化する'],
         correctAnswer: "緩和する"
    },
    {
        id: 4246,
        question: "yelp",
        choices: ['高い鳴き声', '低い声', 'ささやき', '無音'],
         correctAnswer: "高い鳴き声"
    },
    {
        id: 4247,
        question: "bluster",
        choices: ['大ぼらを吹く', '静かに話す', '優しく話す', '理性的に話す'],
         correctAnswer: "大ぼらを吹く"
    },
    {
        id: 4248,
        question: "effulgent",
        choices: ['輝かしい', '暗い', '鈍い', '陰気な'],
         correctAnswer: "輝かしい"
    },
    {
        id: 4249,
        question: "macabre",
        choices: ['恐ろしい', '楽しい', '面白い', '快適な'],
         correctAnswer: "恐ろしい"
    },
    {
        id: 4250,
        question: "obsequious",
        choices: ['へつらいの', '率直な', '正直な', '独立した'],
         correctAnswer: "へつらいの"
    },
    {
        id: 4251,
        question: "x marks the spot",
        choices: ['目印', '誤り', '不明確な場所', '隠れた場所'],
         correctAnswer: "目印"
    },
    {
        id: 4252,
        question: "wan",
        choices: ['青白い', '健康的な', '元気な', '活発な'],
         correctAnswer: "青白い"
    },
    {
        id: 4253,
        question: "hit the hay",
        choices: ['寝る', '起きる', '働く', '運動する'],
         correctAnswer: "寝る"
    },
    {
        id: 4254,
        question: "abysmal",
        choices: ['奈落のような', '普通の', '素晴らしい', 'ありふれた'],
         correctAnswer: "奈落のような"
    },
    {
        id: 4255,
        question: "jejune",
        choices: ['子供っぽい', '成熟した', '洗練された', '大人びた'],
         correctAnswer: "子供っぽい"
    },
    {
        id: 4256,
        question: "keep at bay",
        choices: ['距離を保つ', '近づく', '受け入れる', '進める'],
         correctAnswer: "距離を保つ"
    },
    {
        id: 4257,
        question: "rapacious",
        choices: ['強欲な', '寛大な', '優しい', '控えめな'],
         correctAnswer: "強欲な"
    },
    {
        id: 4258,
        question: "get a kick out of something",
        choices: ['楽しむ', '退屈する', '嫌がる', '無関心でいる'],
         correctAnswer: "楽しむ"
    },
    {
        id: 4259,
        question: "abscond",
        choices: ['逃亡する', '留まる', '隠れる', '受け入れる'],
         correctAnswer: "逃亡する"
    },
    {
        id: 4260,
        question: "bereft",
        choices: ['奪われた', '満たされた', '豊かな', '余裕のある'],
         correctAnswer: "奪われた"
    },
    {
        id: 4261,
        question: "decadent",
        choices: ['堕落した', '健全な', '誠実な', '向上した'],
         correctAnswer: "堕落した"
    },
    {
        id: 4262,
        question: "feckless",
        choices: ['無気力な', '精力的な', '有能な', '頼りがいのある'],
         correctAnswer: "無気力な"
    },
    {
        id: 4263,
        question: "grotesque",
        choices: ['奇怪な', '普通の', '整った', '美しい'],
         correctAnswer: "奇怪な"
    },
    {
        id: 4264,
        question: "recumbent",
        choices: ['横たわる', '立ち上がる', '歩く', '座る'],
         correctAnswer: "横たわる"
    },
    {
        id: 4265,
        question: "give in to",
        choices: ['屈する', '抵抗する', '拒否する', '立ち向かう'],
         correctAnswer: "屈する"
    },
    {
        id: 4266,
        question: "mull over",
        choices: ['熟考する', '即決する', '避ける', '忘れる'],
         correctAnswer: "熟考する"
    },
    {
        id: 4267,
        question: "xenolith",
        choices: ['岩石中の異質鉱物', '純粋な鉱石', '人工鉱石', '加工済み鉱石'],
         correctAnswer: "岩石中の異質鉱物"
    },
    {
        id: 4268,
        question: "hermetic",
        choices: ['密封された', '開放的な', '通気性のある', '広がる'],
         correctAnswer: "密封された"
    },
    {
        id: 4269,
        question: "voracious",
        choices: ['貪欲な', '満足する', '控えめな', '慎重な'],
         correctAnswer: "貪欲な"
    },
    {
        id: 4270,
        question: "sniff out",
        choices: ['見つけ出す', '無視する', '避ける', '捨てる'],
         correctAnswer: "見つけ出す"
    },
    {
        id: 4271,
        question: "holistic",
        choices: ['全体論的な', '部分的な', '細かい', '分割的な'],
         correctAnswer: "全体論的な"
    },
    {
        id: 4272,
        question: "in the nick of time",
        choices: ['ぎりぎりのところで', '早すぎる', '遅すぎる', '余裕を持って'],
         correctAnswer: "ぎりぎりのところで"
    },
    {
        id: 4273,
        question: "ambiguous",
        choices: ['曖昧な', '明確な', '単純な', '直線的な'],
         correctAnswer: "曖昧な"
    },
    {
        id: 4274,
        question: "tangible",
        choices: ['具体的な', '抽象的な', '目に見えない', '理論的な'],
         correctAnswer: "具体的な"
    },
    {
        id: 4275,
        question: "cunning",
        choices: ['狡猾な', '誠実な', '正直な', '率直な'],
         correctAnswer: "狡猾な"
    },
    {
        id: 4276,
        question: "adulation",
        choices: ['お世辞', '批判', '軽蔑', '侮辱'],
         correctAnswer: "お世辞"
    },
    {
        id: 4277,
        question: "inanimate",
        choices: ['無生物の', '生きている', '活動的な', '動きのある'],
         correctAnswer: "無生物の"
    },
    {
        id: 4278,
        question: "incorrigible",
        choices: ['非常に悪い', '改善可能な', '向上できる', '修正しやすい'],
         correctAnswer: "非常に悪い"
    },
    {
        id: 4279,
        question: "vapid",
        choices: ['抜けた', '濃厚な', '風味豊かな', '活気のある'],
         correctAnswer: "抜けた"
    },
    {
        id: 4280,
        question: "xenial",
        choices: ['接待上の', '冷淡な', '敵対的な', '無関心な'],
         correctAnswer: "接待上の"
    },

];

export default questions1;  