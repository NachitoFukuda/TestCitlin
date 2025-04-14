const questions2 = [
    {
        id: 1,
        question: "結果として，その結果",
        choices: ["as a result", "on the other hand", "in contrast", "for example"],
        correctAnswer: "as a result"
    },
    {
        id: 2,
        question: "を調べる",
        choices: ["look up", "give up", "take off", "run into"],
        correctAnswer: "look up"
    },
    {
        id: 3,
        question: "利用できる，使用可能な",
        choices: ["available", "necessary", "popular", "limited"],
        correctAnswer: "available"
    },
    {
        id: 4,
        question: "最初は，初めに",
        choices: ["at first", "at last", "in advance", "so far"],
        correctAnswer: "at first"
    },
    {
        id: 5,
        question: "過去に",
        choices: ["in the past", "in the future", "nowadays", "at present"],
        correctAnswer: "in the past"
    },
    {
        id: 6,
        question: "最近，近頃",
        choices: ["nowadays", "once", "long ago", "in the past"],
        correctAnswer: "nowadays"
    },
    {
        id: 7,
        question: "情報",
        choices: ["information", "direction", "material", "communication"],
        correctAnswer: "information"
    },
    {
        id: 8,
        question: "ちょっと立ち寄る, 立ち寄る",
        choices: ["drop by", "call off", "run out", "hold back"],
        correctAnswer: "drop by"
    },
    {
        id: 9,
        question: "得る，獲得する",
        choices: ["gain", "lose", "waste", "remove"],
        correctAnswer: "gain"
    },
    {
        id: 10,
        question: "伝統的な，慣習的な",
        choices: ["traditional", "modern", "innovative", "temporary"],
        correctAnswer: "traditional"
    },
    {
        id: 11,
        question: "質，特性",
        choices: ["quality", "quantity", "size", "range"],
        correctAnswer: "quality"
    },
    {
        id: 12,
        question: "を改善する，改良する",
        choices: ["improve", "worsen", "ignore", "reduce"],
        correctAnswer: "improve"
    },
    {
        id: 13,
        question: "しかしながら，どんなに～でも",
        choices: ["however", "moreover", "therefore", "otherwise"],
        correctAnswer: "however"
    },
    {
        id: 14,
        question: "集める，収集する",
        choices: ["collect", "scatter", "separate", "distribute"],
        correctAnswer: "collect"
    },
    {
        id: 15,
        question: "余分の，特別の",
        choices: ["extra", "ordinary", "less", "minor"],
        correctAnswer: "extra"
    },
    {
        id: 16,
        question: "衣料品，服",
        choices: ["clothing", "furniture", "jewelry", "equipment"],
        correctAnswer: "clothing"
    },
    {
        id: 17,
        question: "心地の良い，快適な",
        choices: ["comfortable", "painful", "rough", "hard"],
        correctAnswer: "comfortable"
    },
    {
        id: 18,
        question: "がっかりさせる，失望させる",
        choices: ["disappoint", "encourage", "satisfy", "excite"],
        correctAnswer: "disappoint"
    },
    {
        id: 19,
        question: "代わりに，その代わり",
        choices: ["instead", "besides", "although", "therefore"],
        correctAnswer: "instead"
    },
    {
        id: 20,
        question: "はじめは，元々は",
        choices: ["originally", "eventually", "lately", "suddenly"],
        correctAnswer: "originally"
    },
    {
        id: 21,
        question: "に参加する，参与する",
        choices: ["take part in", "give up", "put off", "break down"],
        correctAnswer: "take part in"
    },
    {
        id: 22,
        question: "着飾る",
        choices: ["dress up", "put on", "take off", "wear out"],
        correctAnswer: "dress up"
    },
    {
        id: 23,
        question: "確かに，間違いなく",
        choices: ["certainly", "probably", "possibly", "hopefully"],
        correctAnswer: "certainly"
    },
    {
        id: 24,
        question: "見つけ出す",
        choices: ["find out", "run into", "look up", "give away"],
        correctAnswer: "find out"
    },
    {
        id: 25,
        question: "を探索する",
        choices: ["search for", "look after", "check out", "run out of"],
        correctAnswer: "search for"
    },
    {
        id: 26,
        question: "を思いつく，を考え出す",
        choices: ["come up with", "figure out", "give up", "work on"],
        correctAnswer: "come up with"
    },
    {
        id: 27,
        question: "会社",
        choices: ["company", "industry", "corporation", "business"],
        correctAnswer: "company"
    },
    {
        id: 28,
        question: "詳細，詳しく説明する",
        choices: ["details", "summary", "content", "overview"],
        correctAnswer: "details"
    },
    {
        id: 29,
        question: "溶ける，を溶かす",
        choices: ["melt", "freeze", "boil", "evaporate"],
        correctAnswer: "melt"
    },
    {
        id: 30,
        question: "方向，方角",
        choices: ["direction", "destination", "route", "location"],
        correctAnswer: "direction"
    },
    {
        id: 31,
        question: "怪我，負傷",
        choices: ["injury", "illness", "disease", "pain"],
        correctAnswer: "injury"
    },
    {
        id: 32,
        question: "沈黙",
        choices: ["silence", "noise", "sound", "whisper"],
        correctAnswer: "silence"
    },
    {
        id: 33,
        question: "狭い，締まった",
        choices: ["tight", "loose", "soft", "wide"],
        correctAnswer: "tight"
    },
    {
        id: 34,
        question: "を守る，保護する",
        choices: ["protect", "attack", "ignore", "destroy"],
        correctAnswer: "protect"
    },
    {
        id: 35,
        question: "鋭い，先鋭的な",
        choices: ["sharp", "dull", "flat", "round"],
        correctAnswer: "sharp"
    },
    {
        id: 36,
        question: "背後に，後方に",
        choices: ["behind", "in front of", "above", "beside"],
        correctAnswer: "behind"
    },
    {
        id: 37,
        question: "面倒，迷惑をかける",
        choices: ["bother", "help", "please", "satisfy"],
        correctAnswer: "bother"
    },
    {
        id: 38,
        question: "緊急，急ぎ",
        choices: ["emergency", "disaster", "accident", "incident"],
        correctAnswer: "emergency"
    },
    {
        id: 39,
        question: "を浪費する/浪費，廃棄物",
        choices: ["waste", "save", "use", "collect"],
        correctAnswer: "waste"
    },
    {
        id: 40,
        question: "量，額",
        choices: ["amount", "price", "number", "weight"],
        correctAnswer: "amount"
    },
    {
        id: 41,
        question: "有利，利点",
        choices: ["advantage", "disadvantage", "problem", "obstacle"],
        correctAnswer: "advantage"
    },
    {
        id: 42,
        question: "物体，実体",
        choices: ["object", "subject", "concept", "idea"],
        correctAnswer: "object"
    },
    {
        id: 43,
        question: "足し算する，合計する",
        choices: ["add", "subtract", "divide", "multiply"],
        correctAnswer: "add"
    },
    {
        id: 44,
        question: "表面，水面",
        choices: ["surface", "depth", "bottom", "core"],
        correctAnswer: "surface"
    },
    {
        id: 45,
        question: "を破壊する，を壊す",
        choices: ["destroy", "create", "build", "repair"],
        correctAnswer: "destroy"
    },
    {
        id: 46,
        question: "知識，学識",
        choices: ["knowledge", "information", "education", "wisdom"],
        correctAnswer: "knowledge"
    },
    {
        id: 47,
        question: "をし続ける，続ける",
        choices: ["continue", "stop", "pause", "quit"],
        correctAnswer: "continue"
    },
    {
        id: 48,
        question: "即座に，直ちに",
        choices: ["immediately", "eventually", "gradually", "slowly"],
        correctAnswer: "immediately"
    },
    {
        id: 49,
        question: "正確な/を訂正する",
        choices: ["correct", "wrong", "mistaken", "false"],
        correctAnswer: "correct"
    },
    {
        id: 50,
        question: "政府，行政府，内閣",
        choices: ["government", "company", "organization", "society"],
        correctAnswer: "government"
    },
    {
        id: 51,
        question: "を上げる，持ち上げる",
        choices: ["raise", "lower", "drop", "push"],
        correctAnswer: "raise"
    },
    {
        id: 52,
        question: "を傷つける",
        choices: ["hurt", "heal", "cure", "recover"],
        correctAnswer: "hurt"
    },
    {
        id: 53,
        question: "実験，試み",
        choices: ["experiment", "experience", "test", "observation"],
        correctAnswer: "experiment"
    },
    {
        id: 54,
        question: "失敗する，うまくいかない",
        choices: ["fail", "succeed", "achieve", "pass"],
        correctAnswer: "fail"
    },
    {
        id: 55,
        question: "材料，原料",
        choices: ["material", "product", "ingredient", "object"],
        correctAnswer: "material"
    },
    {
        id: 56,
        question: "最近，このごろ",
        choices: ["recently", "long ago", "once", "rarely"],
        correctAnswer: "recently"
    },
    {
        id: 57,
        question: "を広げる，広がる",
        choices: ["spread", "shrink", "fold", "narrow"],
        correctAnswer: "spread"
    },
    {
        id: 58,
        question: "交通，運輸",
        choices: ["traffic", "commute", "transport", "shipment"],
        correctAnswer: "traffic"
    },
    {
        id: 59,
        question: "現代的な，現代の",
        choices: ["modern", "ancient", "historical", "traditional"],
        correctAnswer: "modern"
    },
    {
        id: 60,
        question: "を減らす",
        choices: ["reduce", "increase", "expand", "enlarge"],
        correctAnswer: "reduce"
    },
    {
        id: 61,
        question: "距離，間隔",
        choices: ["distance", "length", "height", "depth"],
        correctAnswer: "distance"
    },
    {
        id: 62,
        question: "機会，好機",
        choices: ["opportunity", "chance", "situation", "moment"],
        correctAnswer: "opportunity"
    },
    {
        id: 63,
        question: "活動",
        choices: ["activity", "action", "event", "work"],
        correctAnswer: "activity"
    },
    {
        id: 64,
        question: "外国で，外国へ",
        choices: ["abroad", "overseas", "international", "domestic"],
        correctAnswer: "abroad"
    },
    {
        id: 65,
        question: "より好む，好む",
        choices: ["prefer", "like", "choose", "select"],
        correctAnswer: "prefer"
    },
    {
        id: 66,
        question: "言及する，参照する",
        choices: ["mention", "refer", "state", "comment"],
        correctAnswer: "mention"
    },
    {
        id: 67,
        question: "だけれども，しかし",
        choices: ["although", "however", "but", "despite"],
        correctAnswer: "although"
    },
    {
        id: 68,
        question: "気候，天候",
        choices: ["climate", "weather", "season", "temperature"],
        correctAnswer: "climate"
    },
    {
        id: 69,
        question: "状態，条件，情勢",
        choices: ["condition", "situation", "status", "circumstance"],
        correctAnswer: "condition"
    },
    {
        id: 70,
        question: "印象，感じ",
        choices: ["impression", "opinion", "expression", "thought"],
        correctAnswer: "impression"
    },
    {
        id: 71,
        question: "項目，要点",
        choices: ["item", "point", "subject", "chapter"],
        correctAnswer: "item"
    },
    {
        id: 72,
        question: "利益，もうけ",
        choices: ["profit", "gain", "income", "benefit"],
        correctAnswer: "profit"
    },
    {
        id: 73,
        question: "調査/を見渡す",
        choices: ["survey", "research", "examine", "analyze"],
        correctAnswer: "survey"
    },
    {
        id: 74,
        question: "沈む，沈没する",
        choices: ["sink", "drown", "fall", "drop"],
        correctAnswer: "sink"
    },
    {
        id: 75,
        question: "病気，疾患",
        choices: ["illness", "disease", "injury", "pain"],
        correctAnswer: "illness"
    },
    {
        id: 76,
        question: "風味，味",
        choices: ["flavor", "taste", "scent", "spice"],
        correctAnswer: "flavor"
    },
    {
        id: 77,
        question: "専門家",
        choices: ["expert", "professional", "teacher", "scientist"],
        correctAnswer: "expert"
    },
    {
        id: 78,
        question: "を借りる，を借用する",
        choices: ["borrow", "rent", "lend", "use"],
        correctAnswer: "borrow"
    },
    {
        id: 79,
        question: "気づく/通知",
        choices: ["notice", "realize", "observe", "see"],
        correctAnswer: "notice"
    },
    {
        id: 80,
        question: "やめる，中止する",
        choices: ["quit", "stop", "cancel", "pause"],
        correctAnswer: "quit"
    },
    {
        id: 81,
        question: "馬鹿な，愚かな",
        choices: ["silly", "stupid", "foolish", "crazy"],
        correctAnswer: "silly"
    },
    {
        id: 82,
        question: "裕福な，豊かな",
        choices: ["wealthy", "rich", "affluent", "prosperous"],
        correctAnswer: "wealthy"
    },
    {
        id: 83,
        question: "振る舞う，立ち振舞う",
        choices: ["behave", "act", "respond", "move"],
        correctAnswer: "behave"
    },
    {
        id: 84,
        question: "減少する，を減らす/減少",
        choices: ["decrease", "reduce", "decline", "drop"],
        correctAnswer: "decrease"
    },
    {
        id: 85,
        question: "を分割する，分ける",
        choices: ["divide", "separate", "split", "cut"],
        correctAnswer: "divide"
    },
    {
        id: 86,
        question: "を無視する，見逃す",
        choices: ["ignore", "overlook", "neglect", "avoid"],
        correctAnswer: "ignore"
    },
    {
        id: 87,
        question: "を判断する/裁判官",
        choices: ["judge", "decide", "determine", "assess"],
        correctAnswer: "judge"
    },
    {
        id: 88,
        question: "を組織する，を編成する",
        choices: ["organize", "arrange", "manage", "prepare"],
        correctAnswer: "organize"
    },
    {
        id: 89,
        question: "を克服する，乗り越える",
        choices: ["overcome", "conquer", "defeat", "solve"],
        correctAnswer: "overcome"
    },
    {
        id: 90,
        question: "幅が狭い，細い",
        choices: ["narrow", "thin", "small", "short"],
        correctAnswer: "narrow"
    },
    {
        id: 91,
        question: "引きつける，魅了する",
        choices: ["attract", "charm", "invite", "interest"],
        correctAnswer: "attract"
    },
    {
        id: 92,
        question: "呼吸をする",
        choices: ["breathe", "inhale", "exhale", "sigh"],
        correctAnswer: "breathe"
    },
    {
        id: 93,
        question: "を混乱させる，区別がつかない",
        choices: ["confuse", "disturb", "misunderstand", "trick"],
        correctAnswer: "confuse"
    },
    {
        id: 94,
        question: "を取っておく，を保管する",
        choices: ["reserve", "store", "keep", "hold"],
        correctAnswer: "reserve"
    },
    {
        id: 95,
        question: "眠っている，寝ている",
        choices: ["asleep", "awake", "resting", "lying"],
        correctAnswer: "asleep"
    },
    {
        id: 96,
        question: "神経質な，びくびくして",
        choices: ["nervous", "anxious", "worried", "afraid"],
        correctAnswer: "nervous"
    },
    {
        id: 97,
        question: "について議論する，検討する",
        choices: ["discuss", "debate", "talk about", "explain"],
        correctAnswer: "discuss"
    },
    {
        id: 98,
        question: "めったに～ない，稀に",
        choices: ["rarely", "seldom", "occasionally", "hardly"],
        correctAnswer: "rarely"
    },
    {
        id: 99,
        question: "のおかげで，感謝して",
        choices: ["thanks to", "because of", "due to", "as a result of"],
        correctAnswer: "thanks to"
    },
    {
        id: 100,
        question: "ともかく",
        choices: ["anyway", "however", "although", "therefore"],
        correctAnswer: "anyway"
    },
    {
        id: 101,
        question: "するまでには",
        choices: ["by the time", "until", "as soon as", "when"],
        correctAnswer: "by the time"
    },
    {
        id: 102,
        question: "特に，とりわけ",
        choices: ["in particular", "especially", "specifically", "generally"],
        correctAnswer: "in particular"
    },
    {
        id: 103,
        question: "を引き継ぐ, 継承",
        choices: ["take over", "hand over", "give in", "pass away"],
        correctAnswer: "take over"
    },
    {
        id: 104,
        question: "追加として，さらに",
        choices: ["in addition", "moreover", "besides", "therefore"],
        correctAnswer: "in addition"
    },
    {
        id: 105,
        question: "で満たされている，充実している",
        choices: ["be filled with", "be full of", "be crowded with", "be surrounded by"],
        correctAnswer: "be filled with"
    },
    {
        id: 106,
        question: "～だけれども，～であるのに",
        choices: ["even though", "although", "despite", "however"],
        correctAnswer: "even though"
    },
    {
        id: 107,
        question: "冷蔵庫",
        choices: ["refrigerator", "freezer", "microwave", "oven"],
        correctAnswer: "refrigerator"
    },
    {
        id: 108,
        question: "などなど",
        choices: ["and so on", "etc.", "such as", "like that"],
        correctAnswer: "and so on"
    },
    {
        id: 109,
        question: "多くとも，せいぜい",
        choices: ["at most", "at least", "at best", "at worst"],
        correctAnswer: "at most"
    },
    {
        id: 110,
        question: "お願いをする",
        choices: ["do me a favor", "ask for help", "make a request", "give me a hand"],
        correctAnswer: "do me a favor"
    },
    {
        id: 111,
        question: "とうまくやっていく",
        choices: ["get along with", "get used to", "get over", "get into"],
        correctAnswer: "get along with"
    },
    {
        id: 112,
        question: "取り戻す",
        choices: ["get back", "take back", "bring back", "go back"],
        correctAnswer: "get back"
    },
    {
        id: 113,
        question: "にも関わらず，けれども",
        choices: ["in spite of", "despite", "although", "even though"],
        correctAnswer: "in spite of"
    },
    {
        id: 114,
        question: "を心に留めておく",
        choices: ["keep in mind", "take note of", "remember", "be aware of"],
        correctAnswer: "keep in mind"
    },
    {
        id: 115,
        question: "道の途中で",
        choices: ["on the way to", "on my way", "along the road", "heading to"],
        correctAnswer: "on the way to"
    },
    {
        id: 116,
        question: "置く",
        choices: ["put down", "lay down", "set down", "drop off"],
        correctAnswer: "put down"
    },
    {
        id: 117,
        question: "に頼る，を当てにする",
        choices: ["rely on", "depend on", "trust", "count on"],
        correctAnswer: "rely on"
    },
    {
        id: 118,
        question: "を使い果たす，使い尽くす",
        choices: ["run out of", "use up", "consume", "deplete"],
        correctAnswer: "run out of"
    },
    {
        id: 119,
        question: "これまでは",
        choices: ["so far", "until now", "up to now", "by now"],
        correctAnswer: "so far"
    },
    {
        id: 120,
        question: "に訴える",
        choices: ["appeal to", "call for", "plead with", "ask for"],
        correctAnswer: "appeal to"
    },
    {
        id: 121,
        question: "同様に，その上",
        choices: ["as well", "too", "also", "moreover"],
        correctAnswer: "as well"
    },
    {
        id: 122,
        question: "～が上手である",
        choices: ["be good at", "be skilled in", "be talented at", "be excellent at"],
        correctAnswer: "be good at"
    },
    {
        id: 123,
        question: "に対して責任がある",
        choices: ["be responsible for", "be in charge of", "take care of", "be accountable for"],
        correctAnswer: "be responsible for"
    },
    {
        id: 124,
        question: "を中止する",
        choices: ["call off", "cancel", "stop", "postpone"],
        correctAnswer: "call off"
    },
    {
        id: 125,
        question: "万一に備えて，予防するために",
        choices: ["in case", "just in case", "if necessary", "as a precaution"],
        correctAnswer: "in case"
    },
    {
        id: 126,
        question: "平均して，平均値で",
        choices: ["on average", "on the whole", "mostly", "generally"],
        correctAnswer: "on average"
    },
    {
        id: 127,
        question: "歩いて",
        choices: ["on foot", "by walking", "by foot", "walking"],
        correctAnswer: "on foot"
    },
    {
        id: 128,
        question: "故障して",
        choices: ["out of order", "broken", "not working", "malfunctioning"],
        correctAnswer: "out of order"
    },
    {
        id: 129,
        question: "故意に，わざと",
        choices: ["on purpose", "deliberately", "intentionally", "knowingly"],
        correctAnswer: "on purpose"
    },
    {
        id: 130,
        question: "離れている，距離がある",
        choices: ["stay away from", "keep away from", "avoid", "step back from"],
        correctAnswer: "stay away from"
    },
    {
        id: 131,
        question: "で苦しむ，悩まされる",
        choices: ["suffer from", "struggle with", "endure", "bear"],
        correctAnswer: "suffer from"
    },
    {
        id: 132,
        question: "謝る，謝罪する",
        choices: ["apologize", "say sorry", "excuse oneself", "admit fault"],
        correctAnswer: "apologize"
    },
    {
        id: 133,
        question: "に成功する",
        choices: ["succeed in", "achieve", "accomplish", "triumph"],
        correctAnswer: "succeed in"
    },
    {
        id: 134,
        question: "結局，最終的に",
        choices: ["after all", "in the end", "eventually", "finally"],
        correctAnswer: "after all"
    },
    {
        id: 135,
        question: "に人気がある",
        choices: ["be popular with", "be famous for", "be known for", "be liked by"],
        correctAnswer: "be popular with"
    },
    {
        id: 140,
        question: "前もって",
        choices: ["in advance", "beforehand", "earlier", "prior to"],
        correctAnswer: "in advance"
    },
    {
        id: 141,
        question: "急いで",
        choices: ["in a hurry", "in a rush", "quickly", "right away"],
        correctAnswer: "in a hurry"
    },
    {
        id: 142,
        question: "に参加する，に加わる",
        choices: ["participate in", "take part in", "join", "attend"],
        correctAnswer: "participate in"
    },
    {
        id: 143,
        question: "遅かれ早かれ",
        choices: ["sooner or later", "eventually", "someday", "in the end"],
        correctAnswer: "sooner or later"
    },
    {
        id: 144,
        question: "試着する",
        choices: ["try on", "put on", "wear", "fit"],
        correctAnswer: "try on"
    },
    {
        id: 145,
        question: "に似ている，類似している",
        choices: ["similar to", "close to", "alike", "equal to"],
        correctAnswer: "similar to"
    },
    {
        id: 146,
        question: "見せびらかす",
        choices: ["show off", "boast", "display", "exhibit"],
        correctAnswer: "show off"
    },
    {
        id: 147,
        question: "断る",
        choices: ["turn down", "reject", "decline", "refuse"],
        correctAnswer: "turn down"
    },
    {
        id: 148,
        question: "書き込む，記入する",
        choices: ["fill out", "write down", "sign up", "put in"],
        correctAnswer: "fill out"
    },
    {
        id: 149,
        question: "主に，ほとんど",
        choices: ["mostly", "mainly", "largely", "entirely"],
        correctAnswer: "mostly"
    },
    {
        id: 150,
        question: "を掘る，採掘する",
        choices: ["dig", "mine", "drill", "shovel"],
        correctAnswer: "dig"
    },
    {
        id: 151,
        question: "筋肉，筋力",
        choices: ["muscle", "strength", "power", "force"],
        correctAnswer: "muscle"
    },
    {
        id: 152,
        question: "を噛む，かじる",
        choices: ["bite", "chew", "gnaw", "nibble"],
        correctAnswer: "bite"
    },
    {
        id: 153,
        question: "を扱う，待遇する",
        choices: ["treat", "handle", "manage", "deal with"],
        correctAnswer: "treat"
    },
    {
        id: 154,
        question: "むしろ，どちらかといえば",
        choices: ["rather", "instead", "on the contrary", "preferably"],
        correctAnswer: "rather"
    },
    {
        id: 155,
        question: "明らかに，明確に",
        choices: ["apparently", "clearly", "obviously", "evidently"],
        correctAnswer: "apparently"
    },
    {
        id: 156,
        question: "を費やす，使う",
        choices: ["spend", "use", "consume", "expend"],
        correctAnswer: "spend"
    },
    {
        id: 157,
        question: "を発見する，見つける",
        choices: ["discover", "find", "detect", "identify"],
        correctAnswer: "discover"
    },
    {
        id: 158,
        question: "発見，見つけること",
        choices: ["discovery", "invention", "exploration", "observation"],
        correctAnswer: "discovery"
    },
    {
        id: 159,
        question: "到着，到達",
        choices: ["arrival", "departure", "destination", "coming"],
        correctAnswer: "arrival"
    },
    {
        id: 160,
        question: "程度，度",
        choices: ["degree", "level", "extent", "scale"],
        correctAnswer: "degree"
    },
    {
        id: 161,
        question: "を達成する，到達する",
        choices: ["achieve", "reach", "complete", "succeed"],
        correctAnswer: "achieve"
    },
    {
        id: 162,
        question: "態度，姿勢",
        choices: ["attitude", "behavior", "manner", "approach"],
        correctAnswer: "attitude"
    },
    {
        id: 163,
        question: "を説明する，を解説する",
        choices: ["explain", "describe", "clarify", "define"],
        correctAnswer: "explain"
    },
    {
        id: 164,
        question: "を設立する，創設する",
        choices: ["establish", "found", "create", "set up"],
        correctAnswer: "establish"
    },
    {
        id: 165,
        question: "税金，税収",
        choices: ["tax", "income", "fine", "fee"],
        correctAnswer: "tax"
    },
    {
        id: 166,
        question: "信念，信条",
        choices: ["belief", "faith", "conviction", "opinion"],
        correctAnswer: "belief"
    },
    {
        id: 167,
        question: "実証する，証明する",
        choices: ["demonstrate", "prove", "show", "exhibit"],
        correctAnswer: "demonstrate"
    },
    {
        id: 168,
        question: "古代の，大昔の",
        choices: ["ancient", "historical", "old-fashioned", "medieval"],
        correctAnswer: "ancient"
    },
    {
        id: 169,
        question: "正式な，公式の",
        choices: ["formal", "official", "ceremonial", "traditional"],
        correctAnswer: "formal"
    },
    {
        id: 170,
        question: "を許可する，許す",
        choices: ["allow", "permit", "approve", "authorize"],
        correctAnswer: "allow"
    },
    {
        id: 171,
        question: "記事，論文",
        choices: ["article", "report", "paper", "column"],
        correctAnswer: "article"
    },
    {
        id: 172,
        question: "を含む，が入っている",
        choices: ["contain", "include", "consist of", "involve"],
        correctAnswer: "contain"
    },
    {
        id: 173,
        question: "温度，気温",
        choices: ["temperature", "climate", "degree", "heat"],
        correctAnswer: "temperature"
    },
    {
        id: 174,
        question: "共通の，共同の",
        choices: ["common", "universal", "general", "public"],
        correctAnswer: "common"
    },
    {
        id: 175,
        question: "を意味する，を示す",
        choices: ["mean", "signify", "represent", "indicate"],
        correctAnswer: "mean"
    },
    {
        id: 176,
        question: "ほとんどない，少ない",
        choices: ["hardly", "barely", "scarcely", "rarely"],
        correctAnswer: "hardly"
    },
    {
        id: 177,
        question: "できない，不能である",
        choices: ["unable", "incapable", "powerless", "helpless"],
        correctAnswer: "unable"
    },
    {
        id: 178,
        question: "議論，口論",
        choices: ["argument", "debate", "discussion", "dispute"],
        correctAnswer: "argument"
    },
    {
        id: 179,
        question: "祖先，先祖",
        choices: ["ancestor", "forefather", "predecessor", "heritage"],
        correctAnswer: "ancestor"
    },
    {
        id: 180,
        question: "資本，首都",
        choices: ["capital", "city", "investment", "center"],
        correctAnswer: "capital"
    },
    {
        id: 181,
        question: "災害，災難",
        choices: ["disaster", "tragedy", "catastrophe", "accident"],
        correctAnswer: "disaster"
    },
    {
        id: 182,
        question: "高さ，高度",
        choices: ["height", "altitude", "elevation", "level"],
        correctAnswer: "height"
    },
    {
        id: 183,
        question: "理想，目指すべき状態",
        choices: ["ideal", "goal", "vision", "objective"],
        correctAnswer: "ideal"
    },
    {
        id: 184,
        question: "人気，流行",
        choices: ["popularity", "fame", "trend", "recognition"],
        correctAnswer: "popularity"
    },
    {
        id: 185,
        question: "吹く，吹き飛ばす",
        choices: ["blow", "breeze", "gust", "whistle"],
        correctAnswer: "blow"
    },
    {
        id: 186,
        question: "決定，結論",
        choices: ["decision", "conclusion", "judgment", "resolution"],
        correctAnswer: "decision"
    },
    {
        id: 187,
        question: "代理人，代表者",
        choices: ["agent", "representative", "delegate", "broker"],
        correctAnswer: "agent"
    },
    {
        id: 188,
        question: "をほめる/賞賛",
        choices: ["praise", "compliment", "applaud", "admire"],
        correctAnswer: "praise"
    },
    {
        id: 189,
        question: "を罰する，懲らしめる",
        choices: ["punish", "penalize", "discipline", "reprimand"],
        correctAnswer: "punish"
    },
    {
        id: 190,
        question: "化学物質/化学の",
        choices: ["chemical", "toxic", "substance", "solution"],
        correctAnswer: "chemical"
    },
    {
        id: 191,
        question: "否定の，拒否",
        choices: ["negative", "denial", "rejection", "opposition"],
        correctAnswer: "negative"
    },
    {
        id: 192,
        question: "成り立つ，構成する",
        choices: ["consist", "compose", "form", "make up"],
        correctAnswer: "consist"
    },
    {
        id: 193,
        question: "を批評する，を評価する",
        choices: ["criticize", "review", "judge", "evaluate"],
        correctAnswer: "criticize"
    },
    {
        id: 194,
        question: "輸入する，直輸入する",
        choices: ["import", "export", "bring in", "acquire"],
        correctAnswer: "import"
    },
    {
        id: 195,
        question: "を促進する，を推進する",
        choices: ["promote", "encourage", "advance", "boost"],
        correctAnswer: "promote"
    },
    {
        id: 196,
        question: "回復する，元に戻る",
        choices: ["recover", "heal", "restore", "regain"],
        correctAnswer: "recover"
    },
    {
        id: 197,
        question: "解き放つ，解放する",
        choices: ["release", "set free", "liberate", "unleash"],
        correctAnswer: "release"
    },
    {
        id: 198,
        question: "を翻訳する，通訳する",
        choices: ["translate", "interpret", "convert", "adapt"],
        correctAnswer: "translate"
    },
    {
        id: 199,
        question: "警告する，警戒する",
        choices: ["warn", "alert", "caution", "notify"],
        correctAnswer: "warn"
    },
    {
        id: 200,
        question: "子供時代，幼少期",
        choices: ["childhood", "youth", "infancy", "adolescence"],
        correctAnswer: "childhood"
    },
    {
        id: 201,
        question: "考えること，意見",
        choices: ["thought", "idea", "opinion", "concept"],
        correctAnswer: "thought"
    },
    {
        id: 202,
        question: "を成し遂げる，完成する",
        choices: ["accomplish", "achieve", "complete", "succeed"],
        correctAnswer: "accomplish"
    },
    {
        id: 203,
        question: "を結合させる，合同する",
        choices: ["combine", "merge", "unite", "connect"],
        correctAnswer: "combine"
    },
    {
        id: 204,
        question: "不満を言う，不平を言う",
        choices: ["complain", "grumble", "protest", "criticize"],
        correctAnswer: "complain"
    },
    {
        id: 205,
        question: "特に好きな，お気に入りの",
        choices: ["favorite", "preferred", "best", "special"],
        correctAnswer: "favorite"
    },
    {
        id: 206,
        question: "責任がある，責任が伴う",
        choices: ["responsible", "accountable", "liable", "in charge"],
        correctAnswer: "responsible"
    },
    {
        id: 207,
        question: "ごく小さい，微小な",
        choices: ["tiny", "small", "minute", "petite"],
        correctAnswer: "tiny"
    },
    {
        id: 208,
        question: "を下に見る",
        choices: ["look down on", "disrespect", "undervalue", "belittle"],
        correctAnswer: "look down on"
    },
    {
        id: 209,
        question: "を取り除く，除去する",
        choices: ["get rid of", "eliminate", "remove", "dispose of"],
        correctAnswer: "get rid of"
    },
    {
        id: 210,
        question: "の代わりに，代わって",
        choices: ["instead of", "in place of", "as a substitute for", "alternatively"],
        correctAnswer: "instead of"
    },
    {
        id: 211,
        question: "たくさんの",
        choices: ["plenty of", "a lot of", "many", "numerous"],
        correctAnswer: "plenty of"
    },
    {
        id: 212,
        question: "腹",
        choices: ["stomach", "belly", "abdomen", "gut"],
        correctAnswer: "stomach"
    },
    {
        id: 213,
        question: "未来像",
        choices: ["vision", "future", "goal", "dream"],
        correctAnswer: "vision"
    },
    {
        id: 214,
        question: "拡張，拡大，増幅",
        choices: ["expansion", "growth", "extension", "development"],
        correctAnswer: "expansion"
    },
    {
        id: 215,
        question: "発生する，起こる",
        choices: ["occur", "happen", "take place", "arise"],
        correctAnswer: "occur"
    },
    {
        id: 216,
        question: "実に，全く",
        choices: ["indeed", "truly", "certainly", "surely"],
        correctAnswer: "indeed"
    },
    {
        id: 217,
        question: "解決法，解明",
        choices: ["solution", "answer", "resolution", "fix"],
        correctAnswer: "solution"
    },
    {
        id: 218,
        question: "容易さ，気楽さ",
        choices: ["ease", "comfort", "simplicity", "relaxation"],
        correctAnswer: "ease"
    },
    {
        id: 219,
        question: "を選出する",
        choices: ["elect", "vote", "appoint", "choose"],
        correctAnswer: "elect"
    },
    {
        id: 220,
        question: "単位，員数",
        choices: ["unit", "section", "division", "part"],
        correctAnswer: "unit"
    },
    {
        id: 221,
        question: "事実",
        choices: ["fact", "truth", "reality", "information"],
        correctAnswer: "fact"
    },
    {
        id: 222,
        question: "教育の，教授の",
        choices: ["educational", "academic", "learning", "instructional"],
        correctAnswer: "educational"
    },
    {
        id: 223,
        question: "やり方，方法",
        choices: ["manner", "method", "way", "style"],
        correctAnswer: "manner"
    },
    {
        id: 224,
        question: "苦しみ，悩み",
        choices: ["suffering", "pain", "agony", "distress"],
        correctAnswer: "suffering"
    },
    {
        id: 225,
        question: "重要な，決定的な",
        choices: ["crucial", "essential", "critical", "vital"],
        correctAnswer: "crucial"
    },
    {
        id: 226,
        question: "を引き裂く，を裂く",
        choices: ["tear", "rip", "shred", "split"],
        correctAnswer: "tear"
    },
    {
        id: 227,
        question: "統治する，支配する",
        choices: ["govern", "rule", "control", "administer"],
        correctAnswer: "govern"
    },
    {
        id: 228,
        question: "執行，実施",
        choices: ["enforcement", "implementation", "execution", "application"],
        correctAnswer: "enforcement"
    },
    {
        id: 229,
        question: "頭脳，脳",
        choices: ["brain", "mind", "intellect", "cognition"],
        correctAnswer: "brain"
    },
    {
        id: 230,
        question: "才能のある",
        choices: ["talented", "gifted", "skilled", "capable"],
        correctAnswer: "talented"
    },
    {
        id: 231,
        question: "研究/研究する",
        choices: ["research", "study", "investigation", "analysis"],
        correctAnswer: "research"
    },
    {
        id: 232,
        question: "しっかりした，堅い",
        choices: ["firm", "solid", "sturdy", "stable"],
        correctAnswer: "firm"
    },
    {
        id: 233,
        question: "共同社会，共同体",
        choices: ["community", "society", "neighborhood", "group"],
        correctAnswer: "community"
    },
    {
        id: 234,
        question: "力，勢い",
        choices: ["force", "strength", "power", "might"],
        correctAnswer: "force"
    },
    {
        id: 235,
        question: "過去の，終わった",
        choices: ["past", "former", "previous", "earlier"],
        correctAnswer: "past"
    },
    {
        id: 236,
        question: "正しい，正確な",
        choices: ["right", "correct", "accurate", "true"],
        correctAnswer: "right"
    },
    {
        id: 237,
        question: "印象的な，鮮烈な",
        choices: ["impressive", "remarkable", "memorable", "extraordinary"],
        correctAnswer: "impressive"
    },
    {
        id: 238,
        question: "給与，報酬",
        choices: ["salary", "wage", "income", "earnings"],
        correctAnswer: "salary"
    },
    {
        id: 239,
        question: "を扱う，分配する",
        choices: ["deal", "handle", "distribute", "manage"],
        correctAnswer: "deal"
    },
    {
        id: 240,
        question: "即座の",
        choices: ["prompt", "instant", "immediate", "quick"],
        correctAnswer: "prompt"
    },
    {
        id: 241,
        question: "Aにさせる",
        choices: ["let A do", "make A do", "allow A to do", "force A to do"],
        correctAnswer: "let A do"
    },
    {
        id: 242,
        question: "投票する/投票権",
        choices: ["vote", "elect", "ballot", "poll"],
        correctAnswer: "vote"
    },
    {
        id: 243,
        question: "社長，大統領",
        choices: ["president", "CEO", "chairman", "leader"],
        correctAnswer: "president"
    },
    {
        id: 244,
        question: "範囲，幅",
        choices: ["range", "scope", "extent", "area"],
        correctAnswer: "range"
    },
    {
        id: 245,
        question: "極めて重要な，生命の",
        choices: ["vital", "crucial", "essential", "important"],
        correctAnswer: "vital"
    },
    {
        id: 246,
        question: "財産，資産",
        choices: ["estate", "property", "wealth", "assets"],
        correctAnswer: "estate"
    },
    {
        id: 247,
        question: "責任，義務",
        choices: ["responsibility", "duty", "obligation", "liability"],
        correctAnswer: "responsibility"
    },
    {
        id: 248,
        question: "未知の，未明らかな",
        choices: ["unknown", "unfamiliar", "mysterious", "hidden"],
        correctAnswer: "unknown"
    },
    {
        id: 249,
        question: "給付金",
        choices: ["grant", "subsidy", "fund", "scholarship"],
        correctAnswer: "grant"
    },
    {
        id: 250,
        question: "知覚する，感じる",
        choices: ["perceive", "sense", "recognize", "notice"],
        correctAnswer: "perceive"
    },
    {
        id: 251,
        question: "特に，格段に",
        choices: ["especially", "particularly", "notably", "significantly"],
        correctAnswer: "especially"
    },
    {
        id: 252,
        question: "顧客",
        choices: ["client", "customer", "consumer", "buyer"],
        correctAnswer: "client"
    },
    {
        id: 253,
        question: "不可解な，不思議な",
        choices: ["mysterious", "strange", "odd", "unusual"],
        correctAnswer: "mysterious"
    },
    {
        id: 254,
        question: "鋼鉄，鉄",
        choices: ["steel", "iron", "metal", "alloy"],
        correctAnswer: "steel"
    },
    {
        id: 255,
        question: "概念，観念",
        choices: ["concept", "idea", "theory", "principle"],
        correctAnswer: "concept"
    },
    {
        id: 256,
        question: "にも関わらず，けれども",
        choices: ["nevertheless", "however", "despite", "although"],
        correctAnswer: "nevertheless"
    },
    {
        id: 257,
        question: "に帰する",
        choices: ["attribute", "ascribe", "refer", "relate"],
        correctAnswer: "attribute"
    },
    {
        id: 258,
        question: "を妨げる，予防する",
        choices: ["prevent", "avoid", "prohibit", "block"],
        correctAnswer: "prevent"
    },
    {
        id: 259,
        question: "製造元，製造業者",
        choices: ["manufacturer", "producer", "factory", "supplier"],
        correctAnswer: "manufacturer"
    },
    {
        id: 260,
        question: "効果，影響，結果",
        choices: ["effect", "impact", "result", "consequence"],
        correctAnswer: "effect"
    },
    {
        id: 261,
        question: "100万",
        choices: ["million", "billion", "thousand", "trillion"],
        correctAnswer: "million"
    },
    {
        id: 262,
        question: "遭遇する，出会う",
        choices: ["encounter", "meet", "come across", "face"],
        correctAnswer: "encounter"
    },
    {
        id: 263,
        question: "告発する，告発",
        choices: ["accuse", "charge", "blame", "prosecute"],
        correctAnswer: "accuse"
    },
    {
        id: 264,
        question: "簡単に，手短に",
        choices: ["briefly", "shortly", "concisely", "quickly"],
        correctAnswer: "briefly"
    },
    {
        id: 265,
        question: "いわゆる，通称",
        choices: ["so-called", "supposed", "alleged", "named"],
        correctAnswer: "so-called"
    },
    {
        id: 266,
        question: "地球の，世界の",
        choices: ["global", "worldwide", "international", "universal"],
        correctAnswer: "global"
    },
    {
        id: 267,
        question: "によると，との情報によれば",
        choices: ["according to", "based on", "as per", "depending on"],
        correctAnswer: "according to"
    },
    {
        id: 268,
        question: "不足，欠乏",
        choices: ["lack", "shortage", "scarcity", "deficiency"],
        correctAnswer: "lack"
    },
    {
        id: 269,
        question: "論文，随筆",
        choices: ["essay", "article", "report", "composition"],
        correctAnswer: "essay"
    },
    {
        id: 270,
        question: "に近づく，接近する",
        choices: ["approach", "come near", "reach", "advance"],
        correctAnswer: "approach"
    },
    {
        id: 271,
        question: "我慢する，を圧迫する",
        choices: ["bear", "endure", "tolerate", "suffer"],
        correctAnswer: "bear"
    },
    {
        id: 272,
        question: "当然の，自然の",
        choices: ["natural", "obvious", "logical", "expected"],
        correctAnswer: "natural"
    },
    {
        id: 273,
        question: "機関，運営",
        choices: ["administration", "organization", "management", "government"],
        correctAnswer: "administration"
    },
    {
        id: 274,
        question: "聴衆，観客",
        choices: ["audience", "spectator", "viewer", "crowd"],
        correctAnswer: "audience"
    },
    {
        id: 275,
        question: "生産，製造",
        choices: ["production", "manufacturing", "creation", "output"],
        correctAnswer: "production"
    },
    {
        id: 276,
        question: "に資格を与える，認可する",
        choices: ["qualify", "certify", "authorize", "approve"],
        correctAnswer: "qualify"
    },
    {
        id: 277,
        question: "意図，目的",
        choices: ["intention", "purpose", "goal", "aim"],
        correctAnswer: "intention"
    },
    {
        id: 278,
        question: "以前は，前もって",
        choices: ["previously", "beforehand", "earlier", "formerly"],
        correctAnswer: "previously"
    },
    {
        id: 279,
        question: "言語，言葉",
        choices: ["language", "speech", "communication", "dialect"],
        correctAnswer: "language"
    },
    {
        id: 280,
        question: "料金",
        choices: ["fee", "charge", "fare", "cost"],
        correctAnswer: "fee"
    },
    {
        id: 281,
        question: "もない",
        choices: ["nor", "neither", "none", "not"],
        correctAnswer: "nor"
    },
    {
        id: 282,
        question: "交渉，話し合い",
        choices: ["negotiation", "discussion", "agreement", "bargain"],
        correctAnswer: "negotiation"
    },
    {
        id: 283,
        question: "自動車，乗用車",
        choices: ["automobile", "vehicle", "car", "transport"],
        correctAnswer: "automobile"
    },
    {
        id: 284,
        question: "ほこり，塵",
        choices: ["dust", "dirt", "powder", "ash"],
        correctAnswer: "dust"
    },
    {
        id: 285,
        question: "極端に，過度に",
        choices: ["extremely", "excessively", "intensely", "greatly"],
        correctAnswer: "extremely"
    },
    {
        id: 286,
        question: "こだま，反響",
        choices: ["echo", "resonance", "reflection", "reverberation"],
        correctAnswer: "echo"
    },
    {
        id: 287,
        question: "詳細の，具体的な",
        choices: ["detailed", "specific", "precise", "accurate"],
        correctAnswer: "detailed"
    },
    {
        id: 288,
        question: "最大，最大の",
        choices: ["maximum", "peak", "greatest", "highest"],
        correctAnswer: "maximum"
    },
    {
        id: 289,
        question: "フライパン",
        choices: ["pan", "pot", "wok", "skillet"],
        correctAnswer: "pan"
    },
    {
        id: 290,
        question: "改善，改良",
        choices: ["improvement", "enhancement", "progress", "development"],
        correctAnswer: "improvement"
    },
    {
        id: 291,
        question: "天才，才人",
        choices: ["genius", "talent", "brilliance", "mastermind"],
        correctAnswer: "genius"
    },
    {
        id: 292,
        question: "信用，信頼",
        choices: ["credit", "trust", "reputation", "faith"],
        correctAnswer: "credit"
    },
    {
        id: 293,
        question: "借金，負債",
        choices: ["debt", "loan", "deficit", "obligation"],
        correctAnswer: "debt"
    },
    {
        id: 294,
        question: "資源，資産",
        choices: ["resource", "asset", "supply", "material"],
        correctAnswer: "resource"
    },
    {
        id: 295,
        question: "治療，療法",
        choices: ["therapy", "treatment", "cure", "healing"],
        correctAnswer: "therapy"
    },
    {
        id: 296,
        question: "一目見る/一目",
        choices: ["glance", "peek", "stare", "gaze"],
        correctAnswer: "glance"
    },
    {
        id: 297,
        question: "保管場所，倉庫",
        choices: ["storage", "warehouse", "depot", "supply room"],
        correctAnswer: "storage"
    },
    {
        id: 298,
        question: "学術の，大学の",
        choices: ["academic", "scholarly", "educational", "intellectual"],
        correctAnswer: "academic"
    },
    {
        id: 299,
        question: "を許可する，を認める",
        choices: ["permit", "allow", "authorize", "grant"],
        correctAnswer: "permit"
    },
    {
        id: 300,
        question: "心配する，に関係する",
        choices: ["concern", "worry", "relate", "affect"],
        correctAnswer: "concern"
    },
    {
        id: 301,
        question: "張る，伸ばす",
        choices: ["strain", "stretch", "pull", "extend"],
        correctAnswer: "strain"
    },
    {
        id: 302,
        question: "役割，職務",
        choices: ["role", "position", "duty", "task"],
        correctAnswer: "role"
    },
    {
        id: 303,
        question: "どこにも，どこにでも",
        choices: ["nowhere", "anywhere", "everywhere", "somewhere"],
        correctAnswer: "nowhere"
    },
    {
        id: 304,
        question: "最近の，新しい",
        choices: ["recent", "current", "modern", "latest"],
        correctAnswer: "recent"
    },
    {
        id: 305,
        question: "友達，仲間",
        choices: ["mate", "friend", "companion", "partner"],
        correctAnswer: "mate"
    },
    {
        id: 306,
        question: "を区別する，識別する",
        choices: ["distinguish", "differentiate", "recognize", "identify"],
        correctAnswer: "distinguish"
    },
    {
        id: 307,
        question: "洗練された，高雅な",
        choices: ["sophisticated", "elegant", "refined", "cultured"],
        correctAnswer: "sophisticated"
    },
    {
        id: 308,
        question: "気持ちが動揺した，ひっくり返す",
        choices: ["upset", "disturbed", "shaken", "troubled"],
        correctAnswer: "upset"
    },
    {
        id: 309,
        question: "を阻害する，(人の)邪魔をする",
        choices: ["disturb", "interrupt", "bother", "hinder"],
        correctAnswer: "disturb"
    },
    {
        id: 310,
        question: "に投資する，資本をつぎ込む",
        choices: ["invest", "fund", "finance", "support"],
        correctAnswer: "invest"
    },
    {
        id: 311,
        question: "激しい，熱心な",
        choices: ["intense", "fierce", "strong", "powerful"],
        correctAnswer: "intense"
    },
    {
        id: 312,
        question: "退職する，引退する",
        choices: ["retire", "resign", "quit", "withdraw"],
        correctAnswer: "retire"
    },
    {
        id: 313,
        question: "野生動物，野生生物",
        choices: ["wildlife", "nature", "fauna", "habitat"],
        correctAnswer: "wildlife"
    },
    {
        id: 314,
        question: "礼儀正しい，丁寧な",
        choices: ["polite", "courteous", "respectful", "mannerly"],
        correctAnswer: "polite"
    },
    {
        id: 315,
        question: "を楽しませる",
        choices: ["entertain", "amuse", "delight", "please"],
        correctAnswer: "entertain"
    },
    {
        id: 316,
        question: "競争",
        choices: ["competition", "contest", "rivalry", "race"],
        correctAnswer: "competition"
    },
    {
        id: 317,
        question: "問い合わせ，質問",
        choices: ["inquiry", "question", "request", "investigation"],
        correctAnswer: "inquiry"
    },
    {
        id: 318,
        question: "期間，周期",
        choices: ["period", "term", "duration", "interval"],
        correctAnswer: "period"
    },
    {
        id: 319,
        question: "縛りつける，束ねる",
        choices: ["bind", "tie", "fasten", "secure"],
        correctAnswer: "bind"
    },
    {
        id: 320,
        question: "ある，確信している",
        choices: ["certain", "sure", "definite", "positive"],
        correctAnswer: "certain"
    },
    {
        id: 321,
        question: "乗客，客",
        choices: ["passenger", "traveler", "commuter", "visitor"],
        correctAnswer: "passenger"
    },
    {
        id: 322,
        question: "振る舞い，態度",
        choices: ["behavior", "conduct", "manner", "approach"],
        correctAnswer: "behavior"
    },
    {
        id: 323,
        question: "一方で，他方で",
        choices: ["meanwhile", "however", "instead", "besides"],
        correctAnswer: "meanwhile"
    },
    {
        id: 324,
        question: "稼ぐ，得る",
        choices: ["earn", "gain", "receive", "acquire"],
        correctAnswer: "earn"
    },
    {
        id: 325,
        question: "入る，入場する",
        choices: ["enter", "access", "go into", "step in"],
        correctAnswer: "enter"
    },
    {
        id: 326,
        question: "複雑な，複合の",
        choices: ["complex", "complicated", "intricate", "detailed"],
        correctAnswer: "complex"
    },
    {
        id: 327,
        question: "さらに，その上",
        choices: ["moreover", "furthermore", "besides", "in addition"],
        correctAnswer: "moreover"
    },
    {
        id: 328,
        question: "構造，建造物",
        choices: ["structure", "construction", "framework", "building"],
        correctAnswer: "structure"
    },
    {
        id: 329,
        question: "いらだたせる，怒らせる",
        choices: ["annoy", "irritate", "bother", "frustrate"],
        correctAnswer: "annoy"
    },
    {
        id: 330,
        question: "方向，方角",
        choices: ["direction", "orientation", "path", "route"],
        correctAnswer: "direction"
    },
    {
        id: 331,
        question: "影響，影響力，波及/影響を及ぼす",
        choices: ["influence", "effect", "impact", "control"],
        correctAnswer: "influence"
    },
    {
        id: 332,
        question: "素早く，迅速に",
        choices: ["rapidly", "quickly", "instantly", "promptly"],
        correctAnswer: "rapidly"
    },
    {
        id: 333,
        question: "詳細，具体的な情報",
        choices: ["detail", "information", "explanation", "account"],
        correctAnswer: "detail"
    },
    {
        id: 334,
        question: "文化，教養",
        choices: ["culture", "tradition", "heritage", "civilization"],
        correctAnswer: "culture"
    },
    {
        id: 335,
        question: "優先の，前の",
        choices: ["prior", "previous", "former", "earlier"],
        correctAnswer: "prior"
    },
    {
        id: 336,
        question: "首にする，火をつける/火，火事",
        choices: ["fire", "dismiss", "ignite", "light"],
        correctAnswer: "fire"
    },
    {
        id: 337,
        question: "評価，査定",
        choices: ["assessment", "evaluation", "rating", "review"],
        correctAnswer: "assessment"
    },
    {
        id: 338,
        question: "に従事して，忙しくして",
        choices: ["engaged", "occupied", "involved", "busy"],
        correctAnswer: "engaged"
    },
    {
        id: 339,
        question: "後悔する/後悔，遺憾",
        choices: ["regret", "remorse", "guilt", "sorrow"],
        correctAnswer: "regret"
    },
    {
        id: 340,
        question: "言い訳，弁解/を許す",
        choices: ["excuse", "justification", "apology", "reason"],
        correctAnswer: "excuse"
    },
    {
        id: 341,
        question: "裁判所，法廷",
        choices: ["court", "tribunal", "judiciary", "bench"],
        correctAnswer: "court"
    },
    {
        id: 342,
        question: "を解決する，解消する",
        choices: ["solve", "resolve", "settle", "fix"],
        correctAnswer: "solve"
    },
    {
        id: 343,
        question: "を脅かす",
        choices: ["threaten", "intimidate", "menace", "bully"],
        correctAnswer: "threaten"
    },
    {
        id: 344,
        question: "に可能にさせる",
        choices: ["enable", "allow", "empower", "facilitate"],
        correctAnswer: "enable"
    },
    {
        id: 345,
        question: "残念なことに，不幸にも",
        choices: ["unfortunately", "regrettably", "sadly", "unluckily"],
        correctAnswer: "unfortunately"
    },
    {
        id: 346,
        question: "表現，表示",
        choices: ["representation", "expression", "demonstration", "illustration"],
        correctAnswer: "representation"
    },
    {
        id: 347,
        question: "手続き，手順",
        choices: ["procedure", "process", "protocol", "method"],
        correctAnswer: "procedure"
    },
    {
        id: 348,
        question: "期待，予想",
        choices: ["expectation", "anticipation", "assumption", "belief"],
        correctAnswer: "expectation"
    },
    {
        id: 349,
        question: "資産，財産",
        choices: ["asset", "property", "wealth", "estate"],
        correctAnswer: "asset"
    },
    {
        id: 350,
        question: "投げ捨てる，捨てる",
        choices: ["dump", "discard", "dispose of", "throw away"],
        correctAnswer: "dump"
    },
    {
        id: 351,
        question: "市民，国民",
        choices: ["citizen", "resident", "inhabitant", "national"],
        correctAnswer: "citizen"
    },
    {
        id: 352,
        question: "職業，仕事",
        choices: ["occupation", "job", "career", "profession"],
        correctAnswer: "occupation"
    },
    {
        id: 353,
        question: "を元に戻す，を修復する",
        choices: ["restore", "recover", "repair", "renovate"],
        correctAnswer: "restore"
    },
    {
        id: 354,
        question: "重要性，意義",
        choices: ["significance", "importance", "value", "meaning"],
        correctAnswer: "significance"
    },
    {
        id: 355,
        question: "流れる，流す",
        choices: ["flow", "run", "stream", "circulate"],
        correctAnswer: "flow"
    },
    {
        id: 356,
        question: "失敗，挫折",
        choices: ["failure", "defeat", "setback", "loss"],
        correctAnswer: "failure"
    },
    {
        id: 357,
        question: "収益，稼ぎ",
        choices: ["earnings", "income", "revenue", "profit"],
        correctAnswer: "earnings"
    },
    {
        id: 358,
        question: "病気，疾患",
        choices: ["disease", "illness", "sickness", "disorder"],
        correctAnswer: "disease"
    },
    {
        id: 359,
        question: "同僚，仲間",
        choices: ["peer", "colleague", "companion", "associate"],
        correctAnswer: "peer"
    },
    {
        id: 360,
        question: "戦略，戦術",
        choices: ["strategy", "tactic", "plan", "approach"],
        correctAnswer: "strategy"
    },
    {
        id: 361,
        question: "目立った，際立った",
        choices: ["remarkable", "notable", "outstanding", "significant"],
        correctAnswer: "remarkable"
    },
    {
        id: 362,
        question: "かかと，きびす",
        choices: ["heel", "sole", "toe", "ankle"],
        correctAnswer: "heel"
    },
    {
        id: 363,
        question: "絶対に，確実に",
        choices: ["definitely", "certainly", "absolutely", "surely"],
        correctAnswer: "definitely"
    },
    {
        id: 364,
        question: "ふつうの，いつもの",
        choices: ["ordinary", "usual", "common", "typical"],
        correctAnswer: "ordinary"
    },
    {
        id: 365,
        question: "を孤立させる，隔離する",
        choices: ["isolate", "separate", "confine", "quarantine"],
        correctAnswer: "isolate"
    },
    {
        id: 366,
        question: "競争力のある，競争による",
        choices: ["competitive", "rival", "challenging", "aggressive"],
        correctAnswer: "competitive"
    },
    {
        id: 367,
        question: "進歩，前進",
        choices: ["progress", "advancement", "development", "growth"],
        correctAnswer: "progress"
    },
    {
        id: 368,
        question: "典型的な，代表的な",
        choices: ["typical", "standard", "usual", "common"],
        correctAnswer: "typical"
    },
    {
        id: 369,
        question: "競争する，争う",
        choices: ["compete", "contest", "battle", "challenge"],
        correctAnswer: "compete"
    },
    {
        id: 370,
        question: "暴行，攻撃",
        choices: ["assault", "attack", "aggression", "offense"],
        correctAnswer: "assault"
    },
    {
        id: 371,
        question: "信念，確信",
        choices: ["conviction", "belief", "certainty", "assurance"],
        correctAnswer: "conviction"
    },
    {
        id: 372,
        question: "ひどい，恐ろしい",
        choices: ["terrible", "horrible", "awful", "frightening"],
        correctAnswer: "terrible"
    },
    {
        id: 373,
        question: "請求書，勘定書",
        choices: ["bill", "invoice", "receipt", "statement"],
        correctAnswer: "bill"
    },
    {
        id: 374,
        question: "痛み，苦痛",
        choices: ["pain", "ache", "suffering", "agony"],
        correctAnswer: "pain"
    },
    {
        id: 375,
        question: "を強調する，力説する",
        choices: ["emphasize", "stress", "highlight", "underline"],
        correctAnswer: "emphasize"
    },
    {
        id: 376,
        question: "天候，天気",
        choices: ["weather", "climate", "forecast", "condition"],
        correctAnswer: "weather"
    },
    {
        id: 377,
        question: "移民，移住者",
        choices: ["immigrant", "migrant", "refugee", "settler"],
        correctAnswer: "immigrant"
    },
    {
        id: 378,
        question: "を解釈する，受け取る",
        choices: ["interpret", "understand", "analyze", "explain"],
        correctAnswer: "interpret"
    },
    {
        id: 379,
        question: "厚い，肥厚な",
        choices: ["thick", "dense", "broad", "heavy"],
        correctAnswer: "thick"
    },
    {
        id: 380,
        question: "商人，販売者",
        choices: ["merchant", "trader", "dealer", "vendor"],
        correctAnswer: "merchant"
    },
    {
        id: 381,
        question: "物理学，物理科学",
        choices: ["physics", "science", "mechanics", "engineering"],
        correctAnswer: "physics"
    },
    {
        id: 382,
        question: "引き金，誘因",
        choices: ["trigger", "cause", "stimulus", "spark"],
        correctAnswer: "trigger"
    },
    {
        id: 383,
        question: "状態，身分",
        choices: ["status", "position", "rank", "condition"],
        correctAnswer: "status"
    },
    {
        id: 384,
        question: "の価値がある，（～するに）値する",
        choices: ["worth", "valuable", "deserving", "merit"],
        correctAnswer: "worth"
    },
    {
        id: 385,
        question: "関係性，相互作用",
        choices: ["relation", "connection", "link", "association"],
        correctAnswer: "relation"
    },
    {
        id: 386,
        question: "後に，以後",
        choices: ["later", "afterward", "subsequently", "eventually"],
        correctAnswer: "later"
    },
    {
        id: 387,
        question: "政治の",
        choices: ["political", "governmental", "diplomatic", "legislative"],
        correctAnswer: "political"
    },
    {
        id: 388,
        question: "真実，事実",
        choices: ["truth", "fact", "reality", "verity"],
        correctAnswer: "truth"
    },
    {
        id: 389,
        question: "部分的に，一部分",
        choices: ["partly", "partially", "somewhat", "incompletely"],
        correctAnswer: "partly"
    },
    {
        id: 390,
        question: "を観察する，を監視する",
        choices: ["observe", "monitor", "examine", "inspect"],
        correctAnswer: "observe"
    },
    {
        id: 391,
        question: "流れ，水流",
        choices: ["stream", "flow", "current", "wave"],
        correctAnswer: "stream"
    },
    {
        id: 392,
        question: "反対する，抵抗する",
        choices: ["oppose", "resist", "protest", "reject"],
        correctAnswer: "oppose"
    },
    {
        id: 393,
        question: "かなり，相当に",
        choices: ["quite", "fairly", "moderately", "considerably"],
        correctAnswer: "quite"
    },
    {
        id: 394,
        question: "意識して，気をつけて",
        choices: ["conscious", "aware", "attentive", "mindful"],
        correctAnswer: "conscious"
    },
    {
        id: 395,
        question: "意図する，意図して",
        choices: ["intend", "plan", "aim", "design"],
        correctAnswer: "intend"
    },
    {
        id: 396,
        question: "操作，作用",
        choices: ["operation", "function", "procedure", "process"],
        correctAnswer: "operation"
    },
    {
        id: 397,
        question: "を推薦する，を勧める",
        choices: ["recommend", "suggest", "advise", "propose"],
        correctAnswer: "recommend"
    },
    {
        id: 398,
        question: "特徴，特性/を目玉とする",
        choices: ["feature", "characteristic", "aspect", "trait"],
        correctAnswer: "feature"
    },
    {
        id: 399,
        question: "考慮，考察",
        choices: ["consideration", "deliberation", "reflection", "examination"],
        correctAnswer: "consideration"
    },
    {
        id: 400,
        question: "食事，食事療法",
        choices: ["diet", "nutrition", "meal", "regimen"],
        correctAnswer: "diet"
    },
    {
        id: 401,
        question: "恐怖，怖さ",
        choices: ["horror", "fear", "terror", "fright"],
        correctAnswer: "horror"
    },
    {
        id: 402,
        question: "人口，国民",
        choices: ["population", "citizens", "residents", "inhabitants"],
        correctAnswer: "population"
    },
    {
        id: 403,
        question: "必然的に，必ず",
        choices: ["necessarily", "inevitably", "certainly", "unavoidably"],
        correctAnswer: "necessarily"
    },
    {
        id: 404,
        question: "同意する，承認する",
        choices: ["agree", "consent", "approve", "accept"],
        correctAnswer: "agree"
    },
    {
        id: 405,
        question: "どちらか，いずれか",
        choices: ["whether", "either", "or", "whichever"],
        correctAnswer: "whether"
    },
    {
        id: 406,
        question: "分析，解析",
        choices: ["analysis", "examination", "assessment", "evaluation"],
        correctAnswer: "analysis"
    },
    {
        id: 407,
        question: "対立，争い",
        choices: ["conflict", "dispute", "argument", "struggle"],
        correctAnswer: "conflict"
    },
    {
        id: 408,
        question: "極端な，過激な",
        choices: ["extreme", "radical", "intense", "severe"],
        correctAnswer: "extreme"
    },
    {
        id: 409,
        question: "どこでも，どの場所でも",
        choices: ["wherever", "anywhere", "everywhere", "nowhere"],
        correctAnswer: "wherever"
    },
    {
        id: 410,
        question: "情報源，原因",
        choices: ["source", "origin", "reference", "root"],
        correctAnswer: "source"
    },
    {
        id: 411,
        question: "目標，目的",
        choices: ["objective", "goal", "target", "aim"],
        correctAnswer: "objective"
    },
    {
        id: 412,
        question: "田舎の，農村の",
        choices: ["rural", "countryside", "suburban", "remote"],
        correctAnswer: "rural"
    },
    {
        id: 413,
        question: "見出し，表題",
        choices: ["headline", "title", "heading", "caption"],
        correctAnswer: "headline"
    },
    {
        id: 414,
        question: "分析者",
        choices: ["analyst", "examiner", "evaluator", "researcher"],
        correctAnswer: "analyst"
    },
    {
        id: 415,
        question: "標識，印，合図",
        choices: ["sign", "symbol", "mark", "signal"],
        correctAnswer: "sign"
    },
    {
        id: 416,
        question: "手がかり，糸口",
        choices: ["clue", "hint", "lead", "key"],
        correctAnswer: "clue"
    },
    {
        id: 417,
        question: "議論の的になる，論争上の",
        choices: ["controversial", "debatable", "disputed", "questionable"],
        correctAnswer: "controversial"
    },
    {
        id: 418,
        question: "だとわかる，実現する",
        choices: ["realize", "recognize", "understand", "achieve"],
        correctAnswer: "realize"
    },
    {
        id: 419,
        question: "を取り囲む，を包囲する",
        choices: ["surround", "enclose", "encircle", "cover"],
        correctAnswer: "surround"
    },
    {
        id: 420,
        question: "手数料，委任状",
        choices: ["commission", "fee", "charge", "authorization"],
        correctAnswer: "commission"
    },
    {
        id: 421,
        question: "求める，捜し出す",
        choices: ["seek", "search", "pursue", "explore"],
        correctAnswer: "seek"
    },
    {
        id: 422,
        question: "独立した，自立した",
        choices: ["independent", "self-sufficient", "autonomous", "free"],
        correctAnswer: "independent"
    },
    {
        id: 423,
        question: "提案した，提供した",
        choices: ["proposed", "suggested", "offered", "recommended"],
        correctAnswer: "proposed"
    },
    {
        id: 424,
        question: "国際的な，国際レベルの",
        choices: ["international", "global", "worldwide", "foreign"],
        correctAnswer: "international"
    },
    {
        id: 425,
        question: "幾つかの，いくらかの",
        choices: ["several", "some", "a few", "various"],
        correctAnswer: "several"
    },
    {
        id: 426,
        question: "理論，学説",
        choices: ["theory", "hypothesis", "concept", "principle"],
        correctAnswer: "theory"
    },
    {
        id: 427,
        question: "仲間，友人",
        choices: ["fellow", "companion", "colleague", "partner"],
        correctAnswer: "fellow"
    },
    {
        id: 428,
        question: "年配の，高齢の",
        choices: ["elderly", "aged", "senior", "old"],
        correctAnswer: "elderly"
    },
    {
        id: 429,
        question: "拡張，展開",
        choices: ["extension", "expansion", "enlargement", "growth"],
        correctAnswer: "extension"
    },
    {
        id: 430,
        question: "適切な，ふさわしい",
        choices: ["proper", "appropriate", "suitable", "correct"],
        correctAnswer: "proper"
    },
    {
        id: 431,
        question: "強調する，(さらに)高める",
        choices: ["enhance", "boost", "improve", "emphasize"],
        correctAnswer: "enhance"
    },
    {
        id: 432,
        question: "～を越えたところに，～を超えた場所に",
        choices: ["beyond", "past", "over", "above"],
        correctAnswer: "beyond"
    },
    {
        id: 433,
        question: "から便りがある，連絡をもらう",
        choices: ["hear from", "get in touch with", "receive news from", "be contacted by"],
        correctAnswer: "hear from"
    },
    {
        id: 434,
        question: "期限の，納期の",
        choices: ["due", "expected", "scheduled", "pending"],
        correctAnswer: "due"
    },
    {
        id: 435,
        question: "既存の，現存の",
        choices: ["existing", "current", "present", "available"],
        correctAnswer: "existing"
    },
    {
        id: 436,
        question: "拡大する，広がる",
        choices: ["expand", "extend", "increase", "grow"],
        correctAnswer: "expand"
    },
    {
        id: 437,
        question: "間違い，誤った",
        choices: ["wrong", "incorrect", "false", "mistaken"],
        correctAnswer: "wrong"
    },
    {
        id: 438,
        question: "反逆者，造反者",
        choices: ["rebel", "revolutionary", "insurgent", "opponent"],
        correctAnswer: "rebel"
    },
    {
        id: 439,
        question: "を患う，苦しむ",
        choices: ["suffer", "endure", "experience", "bear"],
        correctAnswer: "suffer"
    },
    {
        id: 440,
        question: "以内で",
        choices: ["within", "inside", "in", "under"],
        correctAnswer: "within"
    },
    {
        id: 441,
        question: "味，風味/な味がする",
        choices: ["taste", "flavor", "scent", "aroma"],
        correctAnswer: "taste"
    },
    {
        id: 442,
        question: "民主主義者，民主派",
        choices: ["democrat", "liberal", "republican", "activist"],
        correctAnswer: "democrat"
    },
    {
        id: 443,
        question: "個人的に，本人自ら",
        choices: ["personally", "individually", "privately", "myself"],
        correctAnswer: "personally"
    },
    {
        id: 444,
        question: "至るところに，終始",
        choices: ["throughout", "all over", "everywhere", "around"],
        correctAnswer: "throughout"
    },
    {
        id: 445,
        question: "保存/を保存する",
        choices: ["preserve", "protect", "maintain", "conserve"],
        correctAnswer: "preserve"
    },
    {
        id: 446,
        question: "かしこい，知能の高い",
        choices: ["intelligent", "smart", "clever", "wise"],
        correctAnswer: "intelligent"
    },
    {
        id: 447,
        question: "滑る，滑走する",
        choices: ["slide", "glide", "slip", "skid"],
        correctAnswer: "slide"
    },
    {
        id: 448,
        question: "人気のある，評判の良い",
        choices: ["popular", "famous", "well-known", "liked"],
        correctAnswer: "popular"
    },
    {
        id: 449,
        question: "殺人，凶行",
        choices: ["murder", "homicide", "assassination", "killing"],
        correctAnswer: "murder"
    },
    {
        id: 450,
        question: "出席する，付き添う",
        choices: ["attend", "participate", "join", "be present"],
        correctAnswer: "attend"
    },
    {
        id: 451,
        question: "常に，いつも",
        choices: ["constantly", "always", "continuously", "regularly"],
        correctAnswer: "constantly"
    },
    {
        id: 452,
        question: "漂流，流れる",
        choices: ["drift", "float", "flow", "wander"],
        correctAnswer: "drift"
    },
    {
        id: 453,
        question: "結果",
        choices: ["result", "outcome", "consequence", "effect"],
        correctAnswer: "result"
    },
    {
        id: 454,
        question: "優先度，優越性",
        choices: ["priority", "importance", "ranking", "precedence"],
        correctAnswer: "priority"
    },
    {
        id: 455,
        question: "継目，関節",
        choices: ["joint", "connection", "link", "bond"],
        correctAnswer: "joint"
    },
    {
        id: 456,
        question: "観察者，視聴者，監視人",
        choices: ["viewer", "observer", "spectator", "watcher"],
        correctAnswer: "viewer"
    },
    {
        id: 457,
        question: "衛星，人工衛星",
        choices: ["satellite", "orbit", "moon", "planet"],
        correctAnswer: "satellite"
    },
    {
        id: 458,
        question: "遠く離れた, 遠隔の",
        choices: ["distant", "remote", "faraway", "isolated"],
        correctAnswer: "distant"
    },
    {
        id: 459,
        question: "配達，送付",
        choices: ["delivery", "shipment", "transport", "dispatch"],
        correctAnswer: "delivery"
    },
    {
        id: 460,
        question: "心配して，不安な",
        choices: ["anxious", "worried", "nervous", "uneasy"],
        correctAnswer: "anxious"
    },
    {
        id: 461,
        question: "の方へ，向かって",
        choices: ["towards", "to", "in the direction of", "against"],
        correctAnswer: "towards"
    },
    {
        id: 462,
        question: "従業員，社員",
        choices: ["employee", "worker", "staff", "personnel"],
        correctAnswer: "employee"
    },
    {
        id: 463,
        question: "重要な，大切な",
        choices: ["significant", "important", "essential", "critical"],
        correctAnswer: "significant"
    },
    {
        id: 464,
        question: "特定の，明確な",
        choices: ["particular", "specific", "distinct", "definite"],
        correctAnswer: "particular"
    },
    {
        id: 465,
        question: "拾う",
        choices: ["pick up", "grab", "collect", "lift"],
        correctAnswer: "pick up"
    },
    {
        id: 466,
        question: "批判，評価",
        choices: ["criticism", "evaluation", "review", "assessment"],
        correctAnswer: "criticism"
    },
    {
        id: 467,
        question: "現れる，出現する",
        choices: ["appear", "show up", "emerge", "come into view"],
        correctAnswer: "appear"
    },
    {
        id: 468,
        question: "許可，認可",
        choices: ["permission", "authorization", "consent", "approval"],
        correctAnswer: "permission"
    },
    {
        id: 469,
        question: "ウイルス，病原体",
        choices: ["virus", "bacteria", "germ", "pathogen"],
        correctAnswer: "virus"
    },
    {
        id: 470,
        question: "を否定する，拒否する",
        choices: ["deny", "reject", "refuse", "decline"],
        correctAnswer: "deny"
    },
    {
        id: 471,
        question: "貴重な，価値のある",
        choices: ["valuable", "precious", "priceless", "worthwhile"],
        correctAnswer: "valuable"
    },
    {
        id: 472,
        question: "包括的な，理解力のある",
        choices: ["comprehensive", "thorough", "detailed", "complete"],
        correctAnswer: "comprehensive"
    },
    {
        id: 473,
        question: "まで，至る",
        choices: ["till", "until", "up to", "through"],
        correctAnswer: "till"
    },
    {
        id: 474,
        question: "適切に，適当に",
        choices: ["properly", "correctly", "appropriately", "adequately"],
        correctAnswer: "properly"
    },
    {
        id: 475,
        question: "傷つきやすい，繊細",
        choices: ["vulnerable", "sensitive", "fragile", "defenseless"],
        correctAnswer: "vulnerable"
    },
    {
        id: 476,
        question: "直接，直接的に",
        choices: ["directly", "straight", "immediately", "right away"],
        correctAnswer: "directly"
    },
    {
        id: 477,
        question: "占める，取る",
        choices: ["occupy", "take up", "hold", "inhabit"],
        correctAnswer: "occupy"
    },
    {
        id: 478,
        question: "好奇心が強い，探究心が強い",
        choices: ["curious", "inquisitive", "interested", "eager"],
        correctAnswer: "curious"
    },
    {
        id: 479,
        question: "多様化する，異なる",
        choices: ["vary", "differ", "change", "fluctuate"],
        correctAnswer: "vary"
    },
    {
        id: 480,
        question: "じっと見つめる",
        choices: ["stare", "gaze", "glance", "peek"],
        correctAnswer: "stare"
    },
    {
        id: 481,
        question: "10年間",
        choices: ["decade", "century", "millennium", "era"],
        correctAnswer: "decade"
    },
    {
        id: 482,
        question: "武装した，装備した",
        choices: ["armed", "equipped", "prepared", "fortified"],
        correctAnswer: "armed"
    },
    {
        id: 483,
        question: "の様に見える，思われる",
        choices: ["seem", "appear", "look like", "resemble"],
        correctAnswer: "seem"
    },
    {
        id: 484,
        question: "運命，宿命",
        choices: ["fate", "destiny", "fortune", "luck"],
        correctAnswer: "fate"
    },
    {
        id: 485,
        question: "を納得させる，説得する",
        choices: ["convince", "persuade", "assure", "influence"],
        correctAnswer: "convince"
    },
    {
        id: 486,
        question: "犯罪の，違法の",
        choices: ["criminal", "illegal", "unlawful", "felonious"],
        correctAnswer: "criminal"
    },
    {
        id: 487,
        question: "安定した，安泰な",
        choices: ["stable", "steady", "secure", "firm"],
        correctAnswer: "stable"
    },
    {
        id: 488,
        question: "裸の，無防備な",
        choices: ["naked", "bare", "exposed", "unprotected"],
        correctAnswer: "naked"
    },
    {
        id: 489,
        question: "ユダヤ人，ユダヤ教徒",
        choices: ["Jewish", "Christian", "Muslim", "Hindu"],
        correctAnswer: "Jewish"
    },
    {
        id: 490,
        question: "上院，上院議会",
        choices: ["senate", "parliament", "congress", "assembly"],
        correctAnswer: "senate"
    },
    {
        id: 491,
        question: "隠す，隠れる",
        choices: ["hide", "conceal", "cover", "bury"],
        correctAnswer: "hide"
    },
    {
        id: 492,
        question: "回復，復元",
        choices: ["recovery", "restoration", "healing", "regeneration"],
        correctAnswer: "recovery"
    },
    {
        id: 493,
        question: "拘束，束縛",
        choices: ["bond", "tie", "connection", "attachment"],
        correctAnswer: "bond"
    },
    {
        id: 494,
        question: "肖像画，顔の絵",
        choices: ["portrait", "painting", "illustration", "sketch"],
        correctAnswer: "portrait"
    },
    {
        id: 495,
        question: "介在，仲裁",
        choices: ["intervention", "mediation", "arbitration", "interference"],
        correctAnswer: "intervention"
    },
    {
        id: 496,
        question: "一貫した，矛盾のない",
        choices: ["consistent", "coherent", "logical", "steady"],
        correctAnswer: "consistent"
    },
    {
        id: 497,
        question: "捜査官，探偵",
        choices: ["investigator", "detective", "inspector", "examiner"],
        correctAnswer: "investigator"
    },
    {
        id: 498,
        question: "通常は，普通に",
        choices: ["normally", "usually", "regularly", "ordinarily"],
        correctAnswer: "normally"
    },
    {
        id: 499,
        question: "を締めくくる，終える",
        choices: ["conclude", "finish", "complete", "end"],
        correctAnswer: "conclude"
    },
    {
        id: 500,
        question: "よく知られた，有名な",
        choices: ["well-known", "famous", "renowned", "recognized"],
        correctAnswer: "well-known"
    },
    {
        id: 501,
        question: "発展，発達，開発",
        choices: ["development", "progress", "growth", "advancement"],
        correctAnswer: "development"
    },
    {
        id: 502,
        question: "願望/切望する",
        choices: ["desire", "wish", "aspiration", "longing"],
        correctAnswer: "desire"
    },
    {
        id: 503,
        question: "おそらく，大抵",
        choices: ["probably", "likely", "possibly", "presumably"],
        correctAnswer: "probably"
    },
    {
        id: 504,
        question: "反応する，と返答する",
        choices: ["respond", "reply", "react", "answer"],
        correctAnswer: "respond"
    },
    {
        id: 505,
        question: "関与，関わり合い",
        choices: ["involvement", "participation", "engagement", "association"],
        correctAnswer: "involvement"
    },
    {
        id: 506,
        question: "大臣，牧師",
        choices: ["minister", "pastor", "clergyman", "official"],
        correctAnswer: "minister"
    },
    {
        id: 507,
        question: "当て布，布切れ",
        choices: ["patch", "piece", "fabric", "cloth"],
        correctAnswer: "patch"
    },
    {
        id: 508,
        question: "会長",
        choices: ["chairman", "president", "director", "leader"],
        correctAnswer: "chairman"
    },
    {
        id: 509,
        question: "民族の，民族特有の",
        choices: ["ethnic", "cultural", "racial", "tribal"],
        correctAnswer: "ethnic"
    },
    {
        id: 510,
        question: "ひざ，膝小僧",
        choices: ["lap", "knee", "thigh", "leg"],
        correctAnswer: "lap"
    },
    {
        id: 511,
        question: "を参考にする，参照する",
        choices: ["refer", "consult", "mention", "cite"],
        correctAnswer: "refer"
    },
    {
        id: 512,
        question: "を修理する，修繕する",
        choices: ["repair", "fix", "restore", "mend"],
        correctAnswer: "repair"
    },
    {
        id: 513,
        question: "現在の，現行の",
        choices: ["current", "present", "ongoing", "existing"],
        correctAnswer: "current"
    },
    {
        id: 514,
        question: "明らかに，明白に",
        choices: ["obviously", "clearly", "evidently", "plainly"],
        correctAnswer: "obviously"
    },
    {
        id: 515,
        question: "天井，屋根",
        choices: ["ceiling", "roof", "top", "upper limit"],
        correctAnswer: "ceiling"
    },
    {
        id: 516,
        question: "哲学者",
        choices: ["philosopher", "thinker", "scholar", "intellectual"],
        correctAnswer: "philosopher"
    },
    {
        id: 517,
        question: "自殺，自害",
        choices: ["suicide", "self-harm", "self-destruction", "taking one's life"],
        correctAnswer: "suicide"
    },
    {
        id: 518,
        question: "社会の，共同体の",
        choices: ["social", "community", "public", "collective"],
        correctAnswer: "social"
    },
    {
        id: 519,
        question: "潜在的な，潜伏している",
        choices: ["potential", "latent", "hidden", "dormant"],
        correctAnswer: "potential"
    },
    {
        id: 520,
        question: "合計",
        choices: ["sum", "total", "amount", "addition"],
        correctAnswer: "sum"
    },
    {
        id: 521,
        question: "描く，引っ張る",
        choices: ["draw", "sketch", "pull", "drag"],
        correctAnswer: "draw"
    },
    {
        id: 522,
        question: "ごつごつした，粗い",
        choices: ["rough", "coarse", "rugged", "harsh"],
        correctAnswer: "rough"
    },
    {
        id: 523,
        question: "基本的な，基礎の",
        choices: ["fundamental", "basic", "elementary", "primary"],
        correctAnswer: "fundamental"
    },
    {
        id: 524,
        question: "協会，連合",
        choices: ["association", "organization", "union", "league"],
        correctAnswer: "association"
    },
    {
        id: 525,
        question: "産出する，生ずる",
        choices: ["yield", "produce", "generate", "harvest"],
        correctAnswer: "yield"
    },
    {
        id: 526,
        question: "政治家，政府要人",
        choices: ["politician", "leader", "minister", "governor"],
        correctAnswer: "politician"
    },
    {
        id: 527,
        question: "部門，課",
        choices: ["department", "division", "section", "unit"],
        correctAnswer: "department"
    },
    {
        id: 528,
        question: "手のひら，（動物の）前足の裏",
        choices: ["palm", "hand", "paw", "sole"],
        correctAnswer: "palm"
    },
    {
        id: 529,
        question: "現象，事象",
        choices: ["phenomenon", "event", "occurrence", "incident"],
        correctAnswer: "phenomenon"
    },
    {
        id: 530,
        question: "を認める，入ることを許す",
        choices: ["admit", "accept", "allow", "acknowledge"],
        correctAnswer: "admit"
    },
    {
        id: 531,
        question: "極めて重要な，非常に大事な",
        choices: ["critical", "crucial", "essential", "vital"],
        correctAnswer: "critical"
    },
    {
        id: 532,
        question: "のど，咽喉",
        choices: ["throat", "neck", "larynx", "windpipe"],
        correctAnswer: "throat"
    },
    {
        id: 533,
        question: "に適合させる，調整する",
        choices: ["adapt", "adjust", "modify", "tailor"],
        correctAnswer: "adapt"
    },
    {
        id: 534,
        question: "主として，主に",
        choices: ["largely", "mainly", "primarily", "mostly"],
        correctAnswer: "largely"
    },
    {
        id: 535,
        question: "に属する，所属する",
        choices: ["belong", "be part of", "associate with", "relate to"],
        correctAnswer: "belong"
    },
    {
        id: 536,
        question: "試み，試練",
        choices: ["attempt", "trial", "effort", "endeavor"],
        correctAnswer: "attempt"
    },
    {
        id: 537,
        question: "感銘を与える，感動させる",
        choices: ["impress", "inspire", "amaze", "influence"],
        correctAnswer: "impress"
    },
    {
        id: 538,
        question: "を提出する，に服従する",
        choices: ["submit", "offer", "surrender", "present"],
        correctAnswer: "submit"
    },
    {
        id: 539,
        question: "退屈した，つまらない",
        choices: ["bored", "dull", "tedious", "uninterested"],
        correctAnswer: "bored"
    },
    {
        id: 540,
        question: "電気の，電力の",
        choices: ["electric", "electrical", "powered", "charged"],
        correctAnswer: "electric"
    },
    {
        id: 541,
        question: "発達した文明をもつ，教養の高い",
        choices: ["civilized", "advanced", "cultured", "educated"],
        correctAnswer: "civilized"
    },
    {
        id: 542,
        question: "戦闘，闘争",
        choices: ["combat", "battle", "fight", "conflict"],
        correctAnswer: "combat"
    },
    {
        id: 543,
        question: "破壊，壊滅",
        choices: ["destruction", "devastation", "demolition", "ruin"],
        correctAnswer: "destruction"
    },
    {
        id: 544,
        question: "と同盟する，連合する",
        choices: ["ally", "unite", "partner with", "join forces"],
        correctAnswer: "ally"
    },
    {
        id: 545,
        question: "同様に，一様に",
        choices: ["similarly", "likewise", "equally", "in the same way"],
        correctAnswer: "similarly"
    },
    {
        id: 546,
        question: "完全な，全部の",
        choices: ["complete", "entire", "whole", "full"],
        correctAnswer: "complete"
    },
    {
        id: 547,
        question: "複雑な，繁雑な",
        choices: ["complicated", "complex", "difficult", "intricate"],
        correctAnswer: "complicated"
    },
    {
        id: 548,
        question: "狂った，狂気じみた",
        choices: ["mad", "insane", "crazy", "lunatic"],
        correctAnswer: "mad"
    },
    {
        id: 549,
        question: "ひどく嫌う，深く憎む",
        choices: ["hate", "detest", "despise", "loathe"],
        correctAnswer: "hate"
    },
    {
        id: 550,
        question: "都会の，市内の",
        choices: ["urban", "metropolitan", "city-based", "municipal"],
        correctAnswer: "urban"
    },
    {
        id: 551,
        question: "評判，評価",
        choices: ["reputation", "fame", "recognition", "status"],
        correctAnswer: "reputation"
    },
    {
        id: 552,
        question: "段階，レベル",
        choices: ["phase", "stage", "step", "level"],
        correctAnswer: "phase"
    },
    {
        id: 553,
        question: "哲学",
        choices: ["philosophy", "ideology", "belief", "doctrine"],
        correctAnswer: "philosophy"
    },
    {
        id: 554,
        question: "撮影，射撃",
        choices: ["shooting", "filming", "photography", "firing"],
        correctAnswer: "shooting"
    },
    {
        id: 555,
        question: "を含む，内包する",
        choices: ["include", "contain", "involve", "encompass"],
        correctAnswer: "include"
    },
    {
        id: 556,
        question: "中間の，中央の",
        choices: ["medium", "middle", "average", "intermediate"],
        correctAnswer: "medium"
    },
    {
        id: 557,
        question: "現在の，現代の",
        choices: ["contemporary", "modern", "current", "recent"],
        correctAnswer: "contemporary"
    },
    {
        id: 558,
        question: "陪審員，審査員",
        choices: ["jury", "panel", "committee", "board"],
        correctAnswer: "jury"
    },
    {
        id: 559,
        question: "巨大な，広大な",
        choices: ["huge", "massive", "gigantic", "enormous"],
        correctAnswer: "huge"
    },
    {
        id: 560,
        question: "死ぬ，亡くなる",
        choices: ["die", "pass away", "decease", "expire"],
        correctAnswer: "die"
    },
    {
        id: 561,
        question: "を検査する，調査する",
        choices: ["examine", "inspect", "analyze", "investigate"],
        correctAnswer: "examine"
    },
    {
        id: 562,
        question: "要素，元素",
        choices: ["element", "component", "factor", "ingredient"],
        correctAnswer: "element"
    },
    {
        id: 563,
        question: "主に，もっぱら",
        choices: ["mainly", "primarily", "chiefly", "predominantly"],
        correctAnswer: "mainly"
    },
    {
        id: 564,
        question: "成功，達成",
        choices: ["success", "achievement", "victory", "accomplishment"],
        correctAnswer: "success"
    },
    {
        id: 565,
        question: "存在する，実在する",
        choices: ["exist", "occur", "be", "survive"],
        correctAnswer: "exist"
    },
    {
        id: 566,
        question: "穏やかな，物柔らかな",
        choices: ["gentle", "mild", "soft", "calm"],
        correctAnswer: "gentle"
    },
    {
        id: 567,
        question: "特定の時，行事，祭典",
        choices: ["occasion", "event", "ceremony", "festival"],
        correctAnswer: "occasion"
    },
    {
        id: 568,
        question: "に付き添う，に同行する",
        choices: ["accompany", "escort", "attend", "follow"],
        correctAnswer: "accompany"
    },
    {
        id: 569,
        question: "実質的に，事実上",
        choices: ["virtually", "practically", "essentially", "effectively"],
        correctAnswer: "virtually"
    },
    {
        id: 570,
        question: "を撤回する，引き下がる/引き出す",
        choices: ["withdraw", "retreat", "remove", "retract"],
        correctAnswer: "withdraw"
    },
    {
        id: 571,
        question: "余暇，自由時間",
        choices: ["leisure", "free time", "spare time", "recreation"],
        correctAnswer: "leisure"
    },
    {
        id: 572,
        question: "代表者，代理人",
        choices: ["representative", "delegate", "agent", "spokesperson"],
        correctAnswer: "representative"
    },
    {
        id: 573,
        question: "塊，大部分",
        choices: ["mass", "bulk", "heap", "pile"],
        correctAnswer: "mass"
    },
    {
        id: 574,
        question: "正直な",
        choices: ["honest", "truthful", "sincere", "frank"],
        correctAnswer: "honest"
    },
    {
        id: 575,
        question: "をほのめかす，暗示する",
        choices: ["imply", "suggest", "indicate", "hint"],
        correctAnswer: "imply"
    },
    {
        id: 576,
        question: "混合物，複合体",
        choices: ["mixture", "blend", "combination", "compound"],
        correctAnswer: "mixture"
    },
    {
        id: 577,
        question: "気づいている，知っている",
        choices: ["aware", "conscious", "mindful", "informed"],
        correctAnswer: "aware"
    },
    {
        id: 578,
        question: "装置，仕掛け",
        choices: ["device", "gadget", "instrument", "appliance"],
        correctAnswer: "device"
    },
    {
        id: 579,
        question: "代理，代わり",
        choices: ["deputy", "substitute", "proxy", "stand-in"],
        correctAnswer: "deputy"
    },
    {
        id: 580,
        question: "においがする，臭いがする",
        choices: ["smell", "scent", "odor", "aroma"],
        correctAnswer: "smell"
    },
    {
        id: 581,
        question: "全体的な，全部の",
        choices: ["overall", "general", "total", "comprehensive"],
        correctAnswer: "overall"
    },
    {
        id: 582,
        question: "習慣，慣例",
        choices: ["custom", "tradition", "habit", "practice"],
        correctAnswer: "custom"
    },
    {
        id: 583,
        question: "転がる, 転ぶ",
        choices: ["roll", "tumble", "rotate", "spin"],
        correctAnswer: "roll"
    },
    {
        id: 584,
        question: "暴露，さらすこと",
        choices: ["exposure", "disclosure", "revelation", "unveiling"],
        correctAnswer: "exposure"
    },
    {
        id: 585,
        question: "期間，専門用語",
        choices: ["term", "period", "duration", "expression"],
        correctAnswer: "term"
    },
    {
        id: 586,
        question: "産業，工業",
        choices: ["industry", "manufacturing", "business", "commerce"],
        correctAnswer: "industry"
    },
    {
        id: 587,
        question: "さもなければ",
        choices: ["otherwise", "or else", "if not", "alternatively"],
        correctAnswer: "otherwise"
    },
    {
        id: 588,
        question: "電子の，電子式の",
        choices: ["electronic", "digital", "technological", "automated"],
        correctAnswer: "electronic"
    },
    {
        id: 589,
        question: "自慢に思って，誇らしげな",
        choices: ["proud", "confident", "boastful", "satisfied"],
        correctAnswer: "proud"
    },
    {
        id: 590,
        question: "仕事，職業",
        choices: ["task", "job", "duty", "assignment"],
        correctAnswer: "task"
    },
    {
        id: 591,
        question: "集中，専念",
        choices: ["concentration", "focus", "attention", "dedication"],
        correctAnswer: "concentration"
    },
    {
        id: 592,
        question: "討論，議論",
        choices: ["debate", "discussion", "argument", "dialogue"],
        correctAnswer: "debate"
    },
    {
        id: 593,
        question: "を提案する，勧める",
        choices: ["suggest", "recommend", "propose", "advise"],
        correctAnswer: "suggest"
    },
    {
        id: 594,
        question: "を引き出す，取り出す",
        choices: ["derive", "extract", "obtain", "gain"],
        correctAnswer: "derive"
    },
    {
        id: 595,
        question: "芝生，草地",
        choices: ["lawn", "grass", "field", "meadow"],
        correctAnswer: "lawn"
    },
    {
        id: 596,
        question: "を構成する，作曲する",
        choices: ["compose", "form", "create", "construct"],
        correctAnswer: "compose"
    },
    {
        id: 597,
        question: "反応する，返答する",
        choices: ["react", "respond", "reply", "answer"],
        correctAnswer: "react"
    },
    {
        id: 598,
        question: "比率，割合",
        choices: ["proportion", "ratio", "percentage", "fraction"],
        correctAnswer: "proportion"
    },
    {
        id: 599,
        question: "自信のある，確信している",
        choices: ["confident", "assured", "certain", "secure"],
        correctAnswer: "confident"
    },
    {
        id: 600,
        question: "製造している",
        choices: ["manufacturing", "producing", "constructing", "assembling"],
        correctAnswer: "manufacturing"
    },
    {
        id: 601,
        question: "掛け算する，乗算する",
        choices: ["multiple", "multiply", "times", "factor"],
        correctAnswer: "multiply"
    },
    {
        id: 602,
        question: "たんす，チェスト",
        choices: ["chest", "dresser", "cabinet", "wardrobe"],
        correctAnswer: "chest"
    },
    {
        id: 603,
        question: "権威，権力",
        choices: ["authority", "power", "influence", "control"],
        correctAnswer: "authority"
    },
    {
        id: 604,
        question: "生き物，生物",
        choices: ["creature", "being", "organism", "animal"],
        correctAnswer: "creature"
    },
    {
        id: 605,
        question: "身につけている，着用している",
        choices: ["wear", "put on", "dress", "carry"],
        correctAnswer: "wear"
    },
    {
        id: 606,
        question: "誓う，宣誓する",
        choices: ["swear", "pledge", "vow", "promise"],
        correctAnswer: "swear"
    },
    {
        id: 607,
        question: "生存/生き延びる",
        choices: ["survival", "existence", "persistence", "endurance"],
        correctAnswer: "survival"
    },
    {
        id: 608,
        question: "魅力的な，興味をそそる",
        choices: ["attractive", "appealing", "charming", "engaging"],
        correctAnswer: "attractive"
    },
    {
        id: 609,
        question: "統合，一致",
        choices: ["union", "integration", "merger", "consolidation"],
        correctAnswer: "union"
    },
    {
        id: 610,
        question: "囚人，受刑者",
        choices: ["prisoner", "inmate", "convict", "detainee"],
        correctAnswer: "prisoner"
    },
    {
        id: 611,
        question: "見ること，視力",
        choices: ["sight", "vision", "view", "gaze"],
        correctAnswer: "sight"
    },
    {
        id: 612,
        question: "明らかにする，明示する",
        choices: ["expose", "reveal", "disclose", "unveil"],
        correctAnswer: "expose"
    },
    {
        id: 613,
        question: "それゆえ，だから",
        choices: ["therefore", "thus", "hence", "consequently"],
        correctAnswer: "therefore"
    },
    {
        id: 614,
        question: "検察官，検事",
        choices: ["prosecutor", "district attorney", "lawyer", "prosecuting attorney"],
        correctAnswer: "prosecutor"
    },
    {
        id: 615,
        question: "現在の，出席して",
        choices: ["present", "current", "attending", "available"],
        correctAnswer: "present"
    },
    {
        id: 616,
        question: "出版物，刊行物",
        choices: ["publication", "journal", "magazine", "newspaper"],
        correctAnswer: "publication"
    },
    {
        id: 617,
        question: "面白みのない，鈍い",
        choices: ["dull", "boring", "tedious", "uninteresting"],
        correctAnswer: "dull"
    },
    {
        id: 618,
        question: "局面，側面，表情",
        choices: ["aspect", "side", "angle", "feature"],
        correctAnswer: "aspect"
    },
    {
        id: 619,
        question: "助言，忠告",
        choices: ["advice", "guidance", "recommendation", "suggestion"],
        correctAnswer: "advice"
    },
    {
        id: 620,
        question: "公平な，平等な",
        choices: ["fair", "just", "impartial", "equitable"],
        correctAnswer: "fair"
    },
    {
        id: 621,
        question: "～経由で",
        choices: ["via", "through", "by way of", "using"],
        correctAnswer: "via"
    },
    {
        id: 622,
        question: "市長，町長",
        choices: ["mayor", "governor", "chief", "leader"],
        correctAnswer: "mayor"
    },
    {
        id: 623,
        question: "失う，無くす",
        choices: ["lose", "misplace", "forfeit", "drop"],
        correctAnswer: "lose"
    },
    {
        id: 624,
        question: "判断",
        choices: ["judgement", "decision", "assessment", "evaluation"],
        correctAnswer: "judgement"
    },
    {
        id: 625,
        question: "観察者，傍観者",
        choices: ["observer", "spectator", "witness", "onlooker"],
        correctAnswer: "observer"
    },
    {
        id: 626,
        question: "言葉，舌",
        choices: ["tongue", "language", "speech", "dialect"],
        correctAnswer: "tongue"
    },
    {
        id: 627,
        question: "被告人，告発される人",
        choices: ["defendant", "accused", "suspect", "culprit"],
        correctAnswer: "defendant"
    },
    {
        id: 628,
        question: "を手で扱う，に対処する/取っ手",
        choices: ["handle", "deal with", "grip", "manage"],
        correctAnswer: "handle"
    },
    {
        id: 629,
        question: "成分",
        choices: ["component", "ingredient", "element", "part"],
        correctAnswer: "component"
    },
    {
        id: 630,
        question: "を宣言する，公表する",
        choices: ["declare", "announce", "proclaim", "state"],
        correctAnswer: "declare"
    },
    {
        id: 631,
        question: "絞る，押しつぶす",
        choices: ["squeeze", "press", "crush", "compress"],
        correctAnswer: "squeeze"
    },
    {
        id: 632,
        question: "を維持する，保つ",
        choices: ["maintain", "sustain", "keep", "preserve"],
        correctAnswer: "maintain"
    },
    {
        id: 633,
        question: "一節，節分",
        choices: ["passage", "section", "excerpt", "paragraph"],
        correctAnswer: "passage"
    },
    {
        id: 634,
        question: "苦い，えぐい",
        choices: ["bitter", "sour", "harsh", "astringent"],
        correctAnswer: "bitter"
    },
    {
        id: 635,
        question: "誰を",
        choices: ["whom", "who", "whose", "which"],
        correctAnswer: "whom"
    },
    {
        id: 636,
        question: "割る，裂く",
        choices: ["split", "divide", "break", "separate"],
        correctAnswer: "split"
    },
    {
        id: 637,
        question: "可能性がある，才能のある",
        choices: ["capable", "competent", "talented", "skilled"],
        correctAnswer: "capable"
    },
    {
        id: 638,
        question: "習慣，慣行",
        choices: ["habit", "custom", "practice", "routine"],
        correctAnswer: "habit"
    },
    {
        id: 639,
        question: "具体的な，明確な",
        choices: ["concrete", "definite", "tangible", "clear"],
        correctAnswer: "concrete"
    },
    {
        id: 640,
        question: "残りの，残余の",
        choices: ["remaining", "leftover", "surplus", "residual"],
        correctAnswer: "remaining"
    },
    {
        id: 641,
        question: "依存する，頼る",
        choices: ["depend", "rely", "trust", "lean"],
        correctAnswer: "depend"
    },
    {
        id: 642,
        question: "依存している，頼っている",
        choices: ["dependent", "reliant", "submissive", "attached"],
        correctAnswer: "dependent"
    },
    {
        id: 643,
        question: "とても…なので",
        choices: ["so that", "such that", "in order that", "as a result"],
        correctAnswer: "so that"
    },
    {
        id: 644,
        question: "だと主張する，感情的に論じる",
        choices: ["argue", "debate", "assert", "claim"],
        correctAnswer: "argue"
    },
    {
        id: 645,
        question: "結果，影響",
        choices: ["consequence", "result", "outcome", "impact"],
        correctAnswer: "consequence"
    },
    {
        id: 646,
        question: "結果，成果",
        choices: ["outcome", "result", "conclusion", "consequence"],
        correctAnswer: "outcome"
    },
    {
        id: 647,
        question: "遺産，相続財産",
        choices: ["heritage", "inheritance", "legacy", "estate"],
        correctAnswer: "heritage"
    },
    {
        id: 648,
        question: "を禁止する/禁止",
        choices: ["ban", "prohibit", "forbid", "restrict"],
        correctAnswer: "ban"
    },
    {
        id: 649,
        question: "主人，支配人",
        choices: ["master", "owner", "boss", "leader"],
        correctAnswer: "master"
    },
    {
        id: 650,
        question: "生物学上の，生物的な",
        choices: ["biological", "organic", "genetic", "natural"],
        correctAnswer: "biological"
    },
    {
        id: 651,
        question: "投票者，選挙人",
        choices: ["voter", "elector", "citizen", "balloter"],
        correctAnswer: "voter"
    },
    {
        id: 652,
        question: "風景，眺め",
        choices: ["landscape", "scenery", "view", "sight"],
        correctAnswer: "landscape"
    },
    {
        id: 653,
        question: "瞬間，瞬時",
        choices: ["moment", "instant", "second", "flash"],
        correctAnswer: "moment"
    },
    {
        id: 654,
        question: "時折，稀に",
        choices: ["occasionally", "sometimes", "rarely", "infrequently"],
        correctAnswer: "occasionally"
    },
    {
        id: 655,
        question: "実用的な，有用な",
        choices: ["practical", "useful", "efficient", "effective"],
        correctAnswer: "practical"
    },
    {
        id: 656,
        question: "を拭く，拭き取る",
        choices: ["wipe", "clean", "rub", "erase"],
        correctAnswer: "wipe"
    },
    {
        id: 657,
        question: "伝統，慣習",
        choices: ["tradition", "custom", "heritage", "practice"],
        correctAnswer: "tradition"
    },
    {
        id: 658,
        question: "事柄，問題",
        choices: ["affair", "matter", "issue", "case"],
        correctAnswer: "affair"
    },
    {
        id: 659,
        question: "褒美，報酬",
        choices: ["reward", "prize", "compensation", "benefit"],
        correctAnswer: "reward"
    },
    {
        id: 660,
        question: "賞",
        choices: ["award", "prize", "trophy", "medal"],
        correctAnswer: "award"
    },
    {
        id: 661,
        question: "目的，目標",
        choices: ["purpose", "goal", "aim", "objective"],
        correctAnswer: "purpose"
    },
    {
        id: 662,
        question: "を集める，収集する",
        choices: ["gather", "collect", "assemble", "accumulate"],
        correctAnswer: "gather"
    },
    {
        id: 663,
        question: "尊敬，敬意",
        choices: ["respect", "honor", "admiration", "esteem"],
        correctAnswer: "respect"
    },
    {
        id: 664,
        question: "宣伝する，広告する",
        choices: ["advertise", "promote", "market", "publicize"],
        correctAnswer: "advertise"
    },
    {
        id: 665,
        question: "結局は，やがて",
        choices: ["eventually", "finally", "ultimately", "sooner or later"],
        correctAnswer: "eventually"
    },
    {
        id: 666,
        question: "承認，認可",
        choices: ["approval", "authorization", "consent", "endorsement"],
        correctAnswer: "approval"
    },
    {
        id: 667,
        question: "到着する，辿り着く",
        choices: ["reach", "arrive", "get to", "approach"],
        correctAnswer: "reach"
    },
    {
        id: 668,
        question: "心配して，恐れて",
        choices: ["afraid", "worried", "anxious", "fearful"],
        correctAnswer: "afraid"
    },
    {
        id: 669,
        question: "商業の，商取引の",
        choices: ["commercial", "business", "corporate", "economic"],
        correctAnswer: "commercial"
    },
    {
        id: 670,
        question: "有害な，害のある",
        choices: ["harmful", "toxic", "dangerous", "detrimental"],
        correctAnswer: "harmful"
    },
    {
        id: 671,
        question: "提案，案",
        choices: ["suggestion", "proposal", "recommendation", "advice"],
        correctAnswer: "suggestion"
    },
    {
        id: 672,
        question: "対照，比較",
        choices: ["contrast", "comparison", "difference", "distinction"],
        correctAnswer: "contrast"
    },
    {
        id: 673,
        question: "石炭，炭",
        choices: ["coal", "charcoal", "coke", "fuel"],
        correctAnswer: "coal"
    },
    {
        id: 674,
        question: "本部，中心",
        choices: ["headquarters", "center", "base", "main office"],
        correctAnswer: "headquarters"
    },
    {
        id: 675,
        question: "を吸収する，吸い取る",
        choices: ["absorb", "soak", "consume", "assimilate"],
        correctAnswer: "absorb"
    },
    {
        id: 676,
        question: "提案，勧告",
        choices: ["proposal", "suggestion", "recommendation", "plan"],
        correctAnswer: "proposal"
    },
    {
        id: 677,
        question: "消費者，利用者",
        choices: ["consumer", "customer", "buyer", "user"],
        correctAnswer: "consumer"
    },
    {
        id: 678,
        question: "由緒のある，歴史に残る",
        choices: ["historic", "legendary", "notable", "significant"],
        correctAnswer: "historic"
    },
    {
        id: 679,
        question: "追い求める，追跡する",
        choices: ["pursue", "chase", "seek", "follow"],
        correctAnswer: "pursue"
    },
    {
        id: 680,
        question: "即座の",
        choices: ["immediate", "instant", "urgent", "direct"],
        correctAnswer: "immediate"
    },
    {
        id: 681,
        question: "膝",
        choices: ["knee", "leg", "thigh", "shin"],
        correctAnswer: "knee"
    },
    {
        id: 682,
        question: "適用する，応用する",
        choices: ["apply", "use", "implement", "enforce"],
        correctAnswer: "apply"
    },
    {
        id: 683,
        question: "存在，実在",
        choices: ["existence", "being", "presence", "reality"],
        correctAnswer: "existence"
    },
    {
        id: 684,
        question: "を退出させる",
        choices: ["dismiss", "expel", "remove", "discharge"],
        correctAnswer: "dismiss"
    },
    {
        id: 685,
        question: "地方の，地域の",
        choices: ["regional", "local", "district", "provincial"],
        correctAnswer: "regional"
    },
    {
        id: 686,
        question: "戦争，衝突",
        choices: ["war", "conflict", "battle", "combat"],
        correctAnswer: "war"
    },
    {
        id: 687,
        question: "要因，原因",
        choices: ["factor", "cause", "reason", "element"],
        correctAnswer: "factor"
    },
    {
        id: 688,
        question: "絶え間ない，一定の",
        choices: ["constant", "continuous", "steady", "unchanging"],
        correctAnswer: "constant"
    },
    {
        id: 689,
        question: "を勇気づける，励ます",
        choices: ["encourage", "motivate", "inspire", "cheer"],
        correctAnswer: "encourage"
    },
    {
        id: 690,
        question: "祈り，礼拝",
        choices: ["prayer", "worship", "blessing", "devotion"],
        correctAnswer: "prayer"
    },
    {
        id: 691,
        question: "前方へ，前に",
        choices: ["forward", "ahead", "in front", "onward"],
        correctAnswer: "forward"
    },
    {
        id: 692,
        question: "原理",
        choices: ["principle", "theory", "law", "fundamental"],
        correctAnswer: "principle"
    },
    {
        id: 693,
        question: "支援者，後援者",
        choices: ["supporter", "advocate", "follower", "ally"],
        correctAnswer: "supporter"
    },
    {
        id: 694,
        question: "を刺激する，元気づける",
        choices: ["stimulate", "excite", "provoke", "boost"],
        correctAnswer: "stimulate"
    },
    {
        id: 695,
        question: "住所，居住地",
        choices: ["address", "location", "residence", "place"],
        correctAnswer: "address"
    },
    {
        id: 696,
        question: "受け入れる，受け取る",
        choices: ["accept", "receive", "adopt", "agree"],
        correctAnswer: "accept"
    },
    {
        id: 697,
        question: "を増やす，増大させる",
        choices: ["increase", "expand", "raise", "boost"],
        correctAnswer: "increase"
    },
    {
        id: 698,
        question: "に思い出させる，に気付かせる",
        choices: ["remind", "recall", "notify", "warn"],
        correctAnswer: "remind"
    },
    {
        id: 699,
        question: "証拠",
        choices: ["proof", "evidence", "confirmation", "verification"],
        correctAnswer: "proof"
    },
    {
        id: 700,
        question: "適当な",
        choices: ["appropriate", "suitable", "proper", "correct"],
        correctAnswer: "appropriate"
    },
    {
        id: 701,
        question: "値する，価値がある",
        choices: ["deserve", "earn", "merit", "be worthy of"],
        correctAnswer: "deserve"
    },
    {
        id: 702,
        question: "設立，創立",
        choices: ["establishment", "foundation", "creation", "institution"],
        correctAnswer: "establishment"
    },
    {
        id: 703,
        question: "定義，明確な説明",
        choices: ["definition", "explanation", "interpretation", "clarification"],
        correctAnswer: "definition"
    },
    {
        id: 704,
        question: "経済の，財政の",
        choices: ["economic", "financial", "monetary", "commercial"],
        correctAnswer: "economic"
    },
    {
        id: 705,
        question: "紹介する，引き合わす",
        choices: ["introduce", "present", "acquaint", "refer"],
        correctAnswer: "introduce"
    },
    {
        id: 706,
        question: "伝える，運ぶ",
        choices: ["convey", "deliver", "transfer", "communicate"],
        correctAnswer: "convey"
    },
    {
        id: 707,
        question: "共同，提携",
        choices: ["partnership", "collaboration", "alliance", "cooperation"],
        correctAnswer: "partnership"
    },
    {
        id: 708,
        question: "弁護士，代理人",
        choices: ["attorney", "lawyer", "advocate", "counsel"],
        correctAnswer: "attorney"
    },
    {
        id: 709,
        question: "索引，目次",
        choices: ["index", "table of contents", "catalog", "list"],
        correctAnswer: "index"
    },
    {
        id: 710,
        question: "状況，環境",
        choices: ["circumstance", "situation", "condition", "context"],
        correctAnswer: "circumstance"
    },
    {
        id: 711,
        question: "会話，対話",
        choices: ["conversation", "dialogue", "discussion", "talk"],
        correctAnswer: "conversation"
    },
    {
        id: 712,
        question: "詩人，作詩者",
        choices: ["poet", "writer", "author", "lyricist"],
        correctAnswer: "poet"
    },
    {
        id: 713,
        question: "工芸，技能",
        choices: ["craft", "art", "skill", "technique"],
        correctAnswer: "craft"
    },
    {
        id: 714,
        question: "をこぼす，溢れる",
        choices: ["spill", "pour", "leak", "overflow"],
        correctAnswer: "spill"
    },
    {
        id: 715,
        question: "拒絶する，断る",
        choices: ["reject", "decline", "refuse", "deny"],
        correctAnswer: "reject"
    },
    {
        id: 716,
        question: "州，地方",
        choices: ["province", "region", "district", "territory"],
        correctAnswer: "province"
    },
    {
        id: 717,
        question: "入場，入場料",
        choices: ["admission", "entry", "acceptance", "entrance fee"],
        correctAnswer: "admission"
    },
    {
        id: 718,
        question: "消費，消費高",
        choices: ["consumption", "usage", "expenditure", "utilization"],
        correctAnswer: "consumption"
    },
    {
        id: 719,
        question: "司教，教会の指導者",
        choices: ["bishop", "priest", "clergyman", "minister"],
        correctAnswer: "bishop"
    },
    {
        id: 720,
        question: "燃料",
        choices: ["fuel", "gas", "oil", "energy"],
        correctAnswer: "fuel"
    },
    {
        id: 721,
        question: "推測する，予想する",
        choices: ["guess", "predict", "assume", "estimate"],
        correctAnswer: "guess"
    },
    {
        id: 722,
        question: "経済，節約",
        choices: ["economy", "finance", "budget", "market"],
        correctAnswer: "economy"
    },
    {
        id: 723,
        question: "を組み立てる，建設する",
        choices: ["construct", "build", "assemble", "erect"],
        correctAnswer: "construct"
    },
    {
        id: 724,
        question: "支援，手伝い",
        choices: ["assistance", "help", "support", "aid"],
        correctAnswer: "assistance"
    },
    {
        id: 725,
        question: "実施する/道具，手段",
        choices: ["implement", "carry out", "execute", "enforce"],
        correctAnswer: "implement"
    },
    {
        id: 726,
        question: "頂上，頂点",
        choices: ["peak", "summit", "top", "pinnacle"],
        correctAnswer: "peak"
    },
    {
        id: 727,
        question: "彫刻，彫像",
        choices: ["sculpture", "statue", "carving", "engraving"],
        correctAnswer: "sculpture"
    },
    {
        id: 728,
        question: "様々な，多様な",
        choices: ["various", "diverse", "multiple", "different"],
        correctAnswer: "various"
    },
    {
        id: 729,
        question: "症状，兆候",
        choices: ["symptom", "sign", "indication", "manifestation"],
        correctAnswer: "symptom"
    },
    {
        id: 730,
        question: "部族，種族",
        choices: ["tribe", "clan", "ethnic group", "community"],
        correctAnswer: "tribe"
    },
    {
        id: 731,
        question: "農業，耕作",
        choices: ["agriculture", "farming", "cultivation", "agribusiness"],
        correctAnswer: "agriculture"
    },
    {
        id: 732,
        question: "販売業者，売り手",
        choices: ["dealer", "merchant", "trader", "vendor"],
        correctAnswer: "dealer"
    },
    {
        id: 733,
        question: "と異なって，とは違って",
        choices: ["unlike", "different from", "contrary to", "distinct from"],
        correctAnswer: "unlike"
    },
    {
        id: 734,
        question: "を発明する，創造する",
        choices: ["invent", "create", "develop", "innovate"],
        correctAnswer: "invent"
    },
    {
        id: 735,
        question: "条約",
        choices: ["treaty", "agreement", "pact", "accord"],
        correctAnswer: "treaty"
    },
    {
        id: 736,
        question: "信頼，信用",
        choices: ["trust", "faith", "confidence", "belief"],
        correctAnswer: "trust"
    },
    {
        id: 737,
        question: "指示，指導",
        choices: ["instruction", "guidance", "direction", "order"],
        correctAnswer: "instruction"
    },
    {
        id: 738,
        question: "喜劇，茶番",
        choices: ["comedy", "humor", "satire", "farce"],
        correctAnswer: "comedy"
    },
    {
        id: 739,
        question: "絶対に，必ず",
        choices: ["absolutely", "definitely", "certainly", "undoubtedly"],
        correctAnswer: "absolutely"
    },
    {
        id: 740,
        question: "同盟，協定",
        choices: ["alliance", "coalition", "partnership", "confederation"],
        correctAnswer: "alliance"
    },
    {
        id: 741,
        question: "法律，制度",
        choices: ["law", "legislation", "rule", "regulation"],
        correctAnswer: "law"
    },
    {
        id: 742,
        question: "邪悪な，悪しき",
        choices: ["evil", "wicked", "sinister", "malevolent"],
        correctAnswer: "evil"
    },
    {
        id: 743,
        question: "小部屋，個室",
        choices: ["chamber", "room", "compartment", "cell"],
        correctAnswer: "chamber"
    },
    {
        id: 744,
        question: "だと思う，と仮定する",
        choices: ["suppose", "assume", "presume", "think"],
        correctAnswer: "suppose"
    },
    {
        id: 745,
        question: "を発達させる，を開発する",
        choices: ["develop", "advance", "grow", "expand"],
        correctAnswer: "develop"
    },
    {
        id: 746,
        question: "覚えている，を思い出す",
        choices: ["remember", "recall", "retain", "memorize"],
        correctAnswer: "remember"
    },
    {
        id: 747,
        question: "と題する，と名づける",
        choices: ["entitle", "name", "call", "designate"],
        correctAnswer: "entitle"
    },
    {
        id: 748,
        question: "かなり，相当に",
        choices: ["significantly", "considerably", "notably", "substantially"],
        correctAnswer: "significantly"
    },
    {
        id: 749,
        question: "自信，信頼",
        choices: ["confidence", "assurance", "trust", "certainty"],
        correctAnswer: "confidence"
    },
    {
        id: 750,
        question: "国の，国民の",
        choices: ["national", "domestic", "public", "state"],
        correctAnswer: "national"
    },
    {
        id: 751,
        question: "する時はいつでも，する際は常に",
        choices: ["whenever", "anytime", "each time", "every time"],
        correctAnswer: "whenever"
    },
    {
        id: 752,
        question: "突進する，急ぐ，急ぎ",
        choices: ["rush", "hurry", "dash", "sprint"],
        correctAnswer: "rush"
    },
    {
        id: 753,
        question: "雌の，女性の",
        choices: ["female", "woman", "lady", "girl"],
        correctAnswer: "female"
    },
    {
        id: 754,
        question: "同一性，一致性",
        choices: ["identity", "uniqueness", "sameness", "individuality"],
        correctAnswer: "identity"
    },
    {
        id: 755,
        question: "独立，自立",
        choices: ["independence", "freedom", "autonomy", "self-sufficiency"],
        correctAnswer: "independence"
    },
    {
        id: 756,
        question: "試合，競技",
        choices: ["match", "game", "competition", "contest"],
        correctAnswer: "match"
    },
    {
        id: 757,
        question: "固定する，固める",
        choices: ["fix", "fasten", "secure", "attach"],
        correctAnswer: "fix"
    },
    {
        id: 758,
        question: "協力，共同作業",
        choices: ["cooperation", "collaboration", "teamwork", "partnership"],
        correctAnswer: "cooperation"
    },
    {
        id: 759,
        question: "連立，連合",
        choices: ["coalition", "alliance", "union", "confederation"],
        correctAnswer: "coalition"
    },
    {
        id: 760,
        question: "を検出する",
        choices: ["detect", "identify", "discover", "recognize"],
        correctAnswer: "detect"
    },
    {
        id: 761,
        question: "内部の，内側の",
        choices: ["interior", "inside", "inner", "internal"],
        correctAnswer: "interior"
    },
    {
        id: 762,
        question: "を変える，を改変する",
        choices: ["alter", "change", "modify", "adjust"],
        correctAnswer: "alter"
    },
    {
        id: 763,
        question: "退職，引退",
        choices: ["retirement", "resignation", "withdrawal", "pension"],
        correctAnswer: "retirement"
    },
    {
        id: 764,
        question: "敏感な，感じやすい",
        choices: ["sensitive", "delicate", "responsive", "emotional"],
        correctAnswer: "sensitive"
    },
    {
        id: 765,
        question: "返答する，応答する",
        choices: ["reply", "respond", "answer", "react"],
        correctAnswer: "reply"
    },
    {
        id: 766,
        question: "反対，対立",
        choices: ["opposition", "resistance", "conflict", "disagreement"],
        correctAnswer: "opposition"
    },
    {
        id: 767,
        question: "を輸出する，輸送する",
        choices: ["export", "ship", "sell abroad", "send out"],
        correctAnswer: "export"
    },
    {
        id: 768,
        question: "心理学者，精神科学者",
        choices: ["psychologist", "psychiatrist", "therapist", "counselor"],
        correctAnswer: "psychologist"
    },
    {
        id: 769,
        question: "年金，老後の資金",
        choices: ["pension", "retirement fund", "annuity", "social security"],
        correctAnswer: "pension"
    },
    {
        id: 770,
        question: "特派員",
        choices: ["correspondent", "reporter", "journalist", "news agent"],
        correctAnswer: "correspondent"
    },
    {
        id: 771,
        question: "職務，関税",
        choices: ["duty", "responsibility", "task", "obligation"],
        correctAnswer: "duty"
    },
    {
        id: 772,
        question: "を貼り付ける，を貼る",
        choices: ["attach", "stick", "affix", "fasten"],
        correctAnswer: "attach"
    },
    {
        id: 773,
        question: "人格，性格",
        choices: ["personality", "character", "trait", "nature"],
        correctAnswer: "personality"
    },
    {
        id: 774,
        question: "十分に，完全に",
        choices: ["fully", "completely", "entirely", "totally"],
        correctAnswer: "fully"
    },
    {
        id: 775,
        question: "計画，企画",
        choices: ["scheme", "plan", "strategy", "blueprint"],
        correctAnswer: "scheme"
    },
    {
        id: 776,
        question: "導入する，導く",
        choices: ["install", "introduce", "set up", "implement"],
        correctAnswer: "install"
    },
    {
        id: 777,
        question: "材料，原料，成分",
        choices: ["ingredient", "component", "element", "substance"],
        correctAnswer: "ingredient"
    },
    {
        id: 778,
        question: "洪水，氾濫",
        choices: ["flood", "overflow", "deluge", "inundation"],
        correctAnswer: "flood"
    },
    {
        id: 779,
        question: "人々，群衆",
        choices: ["folk", "people", "community", "crowd"],
        correctAnswer: "folk"
    },
    {
        id: 780,
        question: "選挙，投票",
        choices: ["election", "vote", "poll", "referendum"],
        correctAnswer: "election"
    },
    {
        id: 781,
        question: "にも関わらず，けれども",
        choices: ["despite", "although", "even though", "regardless of"],
        correctAnswer: "despite"
    },
    {
        id: 782,
        question: "革命，変革",
        choices: ["revolution", "rebellion", "revolt", "overthrow"],
        correctAnswer: "revolution"
    },
    {
        id: 783,
        question: "昇進，進級",
        choices: ["promotion", "advancement", "elevation", "progress"],
        correctAnswer: "promotion"
    },
    {
        id: 784,
        question: "産業の，工業の",
        choices: ["industrial", "manufacturing", "commercial", "economic"],
        correctAnswer: "industrial"
    },
    {
        id: 785,
        question: "劇的な，感動的な",
        choices: ["dramatic", "exciting", "thrilling", "intense"],
        correctAnswer: "dramatic"
    },
    {
        id: 786,
        question: "傾く，寄りかかる",
        choices: ["lean", "tilt", "bend", "rest"],
        correctAnswer: "lean"
    },
    {
        id: 787,
        question: "展示，展覧",
        choices: ["exhibition", "display", "showcase", "exposition"],
        correctAnswer: "exhibition"
    },
    {
        id: 788,
        question: "妥協，和解",
        choices: ["compromise", "settlement", "agreement", "negotiation"],
        correctAnswer: "compromise"
    },
    {
        id: 789,
        question: "心配，不安",
        choices: ["anxiety", "worry", "concern", "apprehension"],
        correctAnswer: "anxiety"
    },
    {
        id: 790,
        question: "関連のある，適切な",
        choices: ["relevant", "related", "appropriate", "applicable"],
        correctAnswer: "relevant"
    },
    {
        id: 791,
        question: "観察，観測",
        choices: ["observation", "examination", "inspection", "monitoring"],
        correctAnswer: "observation"
    },
    {
        id: 792,
        question: "部長，支配人",
        choices: ["manager", "supervisor", "director", "executive"],
        correctAnswer: "manager"
    },
    {
        id: 793,
        question: "負かす，打ち破る",
        choices: ["defeat", "overcome", "conquer", "crush"],
        correctAnswer: "defeat"
    },
    {
        id: 794,
        question: "手術，外科",
        choices: ["surgery", "operation", "procedure", "treatment"],
        correctAnswer: "surgery"
    },
    {
        id: 795,
        question: "反応，反響",
        choices: ["reaction", "response", "feedback", "reply"],
        correctAnswer: "reaction"
    },
    {
        id: 796,
        question: "を捨て去る，放棄する",
        choices: ["abandon", "give up", "discard", "forsake"],
        correctAnswer: "abandon"
    },
    {
        id: 797,
        question: "危機，困難",
        choices: ["crisis", "emergency", "disaster", "hardship"],
        correctAnswer: "crisis"
    },
    {
        id: 798,
        question: "快適さ/慰める",
        choices: ["comfort", "ease", "relief", "support"],
        correctAnswer: "comfort"
    },
    {
        id: 799,
        question: "賢い，賢明な",
        choices: ["wise", "intelligent", "smart", "thoughtful"],
        correctAnswer: "wise"
    },
    {
        id: 800,
        question: "保持する",
        choices: ["sustain", "maintain", "preserve", "retain"],
        correctAnswer: "sustain"
    },
    {
        id: 801,
        question: "雇う，採用する",
        choices: ["hire", "employ", "recruit", "appoint"],
        correctAnswer: "hire"
    },
    {
        id: 802,
        question: "滑る",
        choices: ["slip", "slide", "glide", "skid"],
        correctAnswer: "slip"
    },
    {
        id: 803,
        question: "完全に，全く",
        choices: ["entirely", "totally", "completely", "wholly"],
        correctAnswer: "entirely"
    },
    {
        id: 804,
        question: "完全に，全く",
        choices: ["totally", "entirely", "fully", "absolutely"],
        correctAnswer: "totally"
    },
    {
        id: 805,
        question: "広範な，広い範囲の",
        choices: ["extensive", "widespread", "comprehensive", "vast"],
        correctAnswer: "extensive"
    },
    {
        id: 806,
        question: "を表す，を代表する",
        choices: ["represent", "symbolize", "stand for", "indicate"],
        correctAnswer: "represent"
    },
    {
        id: 807,
        question: "を受理する，受け取る",
        choices: ["receive", "accept", "obtain", "collect"],
        correctAnswer: "receive"
    },
    {
        id: 808,
        question: "雇う，採用する",
        choices: ["employ", "hire", "engage", "recruit"],
        correctAnswer: "employ"
    },
    {
        id: 809,
        question: "つるす，掛ける",
        choices: ["hang", "suspend", "attach", "drape"],
        correctAnswer: "hang"
    },
    {
        id: 810,
        question: "文脈，背景",
        choices: ["context", "background", "situation", "framework"],
        correctAnswer: "context"
    },
    {
        id: 811,
        question: "有名な，著名な",
        choices: ["famous", "renowned", "well-known", "notable"],
        correctAnswer: "famous"
    },
    {
        id: 812,
        question: "想定，仮説",
        choices: ["assumption", "hypothesis", "presumption", "belief"],
        correctAnswer: "assumption"
    },
    {
        id: 813,
        question: "非難，料金，管理/に請求する",
        choices: ["charge", "accuse", "fee", "bill"],
        correctAnswer: "charge"
    },
    {
        id: 814,
        question: "文明，文明社会",
        choices: ["civilization", "culture", "society", "development"],
        correctAnswer: "civilization"
    },
    {
        id: 815,
        question: "援助/助ける",
        choices: ["aid", "help", "assist", "support"],
        correctAnswer: "aid"
    },
    {
        id: 816,
        question: "投票，選挙",
        choices: ["poll", "vote", "election", "referendum"],
        correctAnswer: "poll"
    },
    {
        id: 817,
        question: "科学の，理科の",
        choices: ["scientific", "technical", "empirical", "academic"],
        correctAnswer: "scientific"
    },
    {
        id: 818,
        question: "楽しみ，喜び",
        choices: ["pleasure", "joy", "delight", "satisfaction"],
        correctAnswer: "pleasure"
    },
    {
        id: 819,
        question: "嫌がる，嫌い",
        choices: ["dislike", "hate", "detest", "abhor"],
        correctAnswer: "dislike"
    },
    {
        id: 820,
        question: "環境，状況",
        choices: ["environment", "surroundings", "setting", "circumstances"],
        correctAnswer: "environment"
    },
    {
        id: 821,
        question: "女友達，女の友人",
        choices: ["girlfriend", "female friend", "companion", "partner"],
        correctAnswer: "girlfriend"
    },
    {
        id: 822,
        question: "海岸，沿岸地域",
        choices: ["coast", "shore", "beach", "seaside"],
        correctAnswer: "coast"
    },
    {
        id: 823,
        question: "進化，発展",
        choices: ["evolution", "development", "growth", "progress"],
        correctAnswer: "evolution"
    },
    {
        id: 824,
        question: "呼び戻す，思い出す",
        choices: ["recall", "remember", "recollect", "bring back"],
        correctAnswer: "recall"
    },
    {
        id: 825,
        question: "同意，賛成",
        choices: ["agreement", "consent", "approval", "accord"],
        correctAnswer: "agreement"
    },
    {
        id: 826,
        question: "州，郡",
        choices: ["county", "province", "district", "region"],
        correctAnswer: "county"
    },
    {
        id: 827,
        question: "国家，国土",
        choices: ["nation", "country", "state", "republic"],
        correctAnswer: "nation"
    },
    {
        id: 828,
        question: "交渉する，協議する",
        choices: ["negotiate", "bargain", "discuss", "settle"],
        correctAnswer: "negotiate"
    },
    {
        id: 829,
        question: "深さ",
        choices: ["depth", "deepness", "profoundness", "extent"],
        correctAnswer: "depth"
    },
    {
        id: 830,
        question: "音楽家",
        choices: ["musician", "composer", "performer", "artist"],
        correctAnswer: "musician"
    },
    {
        id: 831,
        question: "脅威，危機",
        choices: ["threat", "danger", "risk", "hazard"],
        correctAnswer: "threat"
    },
    {
        id: 832,
        question: "を変える，を改変する",
        choices: ["transform", "change", "convert", "alter"],
        correctAnswer: "transform"
    },
    {
        id: 833,
        question: "方法，手段",
        choices: ["method", "way", "approach", "technique"],
        correctAnswer: "method"
    },
    {
        id: 834,
        question: "刑務所，拘置所",
        choices: ["jail", "prison", "detention center", "correctional facility"],
        correctAnswer: "jail"
    },
    {
        id: 835,
        question: "大学，大学校",
        choices: ["university", "college", "academy", "institution"],
        correctAnswer: "university"
    },
    {
        id: 836,
        question: "原始的な，先史的な",
        choices: ["primitive", "ancient", "prehistoric", "rudimentary"],
        correctAnswer: "primitive"
    },
    {
        id: 837,
        question: "現れる",
        choices: ["emerge", "appear", "show up", "arise"],
        correctAnswer: "emerge"
    },
    {
        id: 838,
        question: "身体の，肉体の",
        choices: ["physical", "bodily", "corporeal", "tangible"],
        correctAnswer: "physical"
    },
    {
        id: 839,
        question: "誤った，間違った",
        choices: ["false", "incorrect", "wrong", "inaccurate"],
        correctAnswer: "false"
    },
    {
        id: 840,
        question: "目立たせる",
        choices: ["highlight", "emphasize", "stress", "spotlight"],
        correctAnswer: "highlight"
    },
    {
        id: 841,
        question: "を推定する，評価する",
        choices: ["estimate", "assess", "evaluate", "calculate"],
        correctAnswer: "estimate"
    },
    {
        id: 842,
        question: "理性のある",
        choices: ["reasonable", "rational", "logical", "sensible"],
        correctAnswer: "reasonable"
    },
    {
        id: 843,
        question: "効率のいい，効率的な",
        choices: ["efficient", "productive", "effective", "competent"],
        correctAnswer: "efficient"
    },
    {
        id: 844,
        question: "主導権，自発性",
        choices: ["initiative", "leadership", "self-motivation", "determination"],
        correctAnswer: "initiative"
    },
    {
        id: 845,
        question: "推薦，推奨",
        choices: ["recommendation", "suggestion", "advice", "endorsement"],
        correctAnswer: "recommendation"
    },
    {
        id: 846,
        question: "による，準じて",
        choices: ["according", "in accordance with", "depending on", "based on"],
        correctAnswer: "according"
    },
    {
        id: 847,
        question: "含み，裏の意味",
        choices: ["implication", "meaning", "suggestion", "connotation"],
        correctAnswer: "implication"
    },
    {
        id: 848,
        question: "めったに～しない，稀に",
        choices: ["seldom", "rarely", "hardly", "scarcely"],
        correctAnswer: "seldom"
    },
    {
        id: 849,
        question: "妊娠している，妊娠中の",
        choices: ["pregnant", "expecting", "with child", "gestating"],
        correctAnswer: "pregnant"
    },
    {
        id: 850,
        question: "社会，共同体",
        choices: ["society", "community", "culture", "civilization"],
        correctAnswer: "society"
    },
    {
        id: 851,
        question: "息，呼吸",
        choices: ["breath", "respiration", "inhale", "exhale"],
        correctAnswer: "breath"
    },
    {
        id: 852,
        question: "雇用者，雇い主",
        choices: ["employer", "boss", "manager", "supervisor"],
        correctAnswer: "employer"
    },
    {
        id: 853,
        question: "広告，宣伝",
        choices: ["advertising", "promotion", "marketing", "publicity"],
        correctAnswer: "advertising"
    },
    {
        id: 854,
        question: "装置，設備",
        choices: ["equipment", "device", "appliance", "gear"],
        correctAnswer: "equipment"
    },
    {
        id: 855,
        question: "宇宙，宙域",
        choices: ["universe", "cosmos", "galaxy", "space"],
        correctAnswer: "universe"
    },
    {
        id: 856,
        question: "追加，付加",
        choices: ["addition", "supplement", "increase", "expansion"],
        correctAnswer: "addition"
    },
    {
        id: 857,
        question: "目に見える, 可視的",
        choices: ["visible", "apparent", "clear", "perceptible"],
        correctAnswer: "visible"
    },
    {
        id: 858,
        question: "意見，考え",
        choices: ["opinion", "view", "belief", "perspective"],
        correctAnswer: "opinion"
    },
    {
        id: 859,
        question: "断る，拒否する",
        choices: ["decline", "reject", "refuse", "deny"],
        correctAnswer: "decline"
    },
    {
        id: 860,
        question: "男性，雄",
        choices: ["male", "man", "masculine", "gentleman"],
        correctAnswer: "male"
    },
    {
        id: 861,
        question: "どうにか，何とか",
        choices: ["somehow", "in some way", "one way or another", "by some means"],
        correctAnswer: "somehow"
    },
    {
        id: 862,
        question: "適合する，合致する",
        choices: ["suit", "match", "fit", "align"],
        correctAnswer: "suit"
    },
    {
        id: 863,
        question: "後者の，後半の",
        choices: ["latter", "last", "final", "second"],
        correctAnswer: "latter"
    },
    {
        id: 864,
        question: "単に，ただ",
        choices: ["merely", "only", "simply", "just"],
        correctAnswer: "merely"
    },
    {
        id: 865,
        question: "出現，外見",
        choices: ["appearance", "look", "aspect", "outward"],
        correctAnswer: "appearance"
    },
    {
        id: 866,
        question: "かなり，公平に",
        choices: ["fairly", "reasonably", "moderately", "equally"],
        correctAnswer: "fairly"
    },
    {
        id: 867,
        question: "章，区切り",
        choices: ["chapter", "section", "part", "unit"],
        correctAnswer: "chapter"
    },
    {
        id: 868,
        question: "近くの，隣近所の",
        choices: ["nearby", "close", "adjacent", "neighboring"],
        correctAnswer: "nearby"
    },
    {
        id: 869,
        question: "決着させる，解決する",
        choices: ["settle", "resolve", "conclude", "finalize"],
        correctAnswer: "settle"
    },
    {
        id: 870,
        question: "に寄付する，捧げる",
        choices: ["contribute", "donate", "offer", "give"],
        correctAnswer: "contribute"
    },
    {
        id: 871,
        question: "外国の，海外の",
        choices: ["foreign", "international", "overseas", "external"],
        correctAnswer: "foreign"
    },
    {
        id: 872,
        question: "延びる，延長する",
        choices: ["extend", "prolong", "lengthen", "expand"],
        correctAnswer: "extend"
    },
    {
        id: 873,
        question: "政策，方針",
        choices: ["policy", "strategy", "plan", "guideline"],
        correctAnswer: "policy"
    },
    {
        id: 874,
        question: "対処する，処理する",
        choices: ["cope", "deal with", "handle", "manage"],
        correctAnswer: "cope"
    },
    {
        id: 875,
        question: "宗教，信仰",
        choices: ["religion", "faith", "belief", "spirituality"],
        correctAnswer: "religion"
    },
    {
        id: 876,
        question: "結論，最終的な判断",
        choices: ["conclusion", "decision", "judgment", "verdict"],
        correctAnswer: "conclusion"
    },
    {
        id: 877,
        question: "扱い，処理",
        choices: ["treatment", "handling", "management", "care"],
        correctAnswer: "treatment"
    },
    {
        id: 878,
        question: "代替物，代案",
        choices: ["alternative", "substitute", "option", "replacement"],
        correctAnswer: "alternative"
    },
    {
        id: 879,
        question: "反対の，裏側の",
        choices: ["reverse", "opposite", "contrary", "inverse"],
        correctAnswer: "reverse"
    },
    {
        id: 880,
        question: "前の，以前の",
        choices: ["former", "previous", "past", "earlier"],
        correctAnswer: "former"
    },
    {
        id: 881,
        question: "犠牲者，被害者",
        choices: ["victim", "casualty", "sufferer", "injured"],
        correctAnswer: "victim"
    },
    {
        id: 882,
        question: "区別，相違",
        choices: ["distinction", "difference", "contrast", "disparity"],
        correctAnswer: "distinction"
    },
    {
        id: 883,
        question: "研究室，研究所",
        choices: ["lab", "laboratory", "research center", "testing facility"],
        correctAnswer: "lab"
    },
    {
        id: 884,
        question: "文学の，文芸の",
        choices: ["literary", "academic", "artistic", "scholarly"],
        correctAnswer: "literary"
    },
    {
        id: 885,
        question: "双子，二卵性双生児",
        choices: ["twin", "double", "duo", "pair"],
        correctAnswer: "twin"
    },
    {
        id: 886,
        question: "我慢強い，患者",
        choices: ["patient", "tolerant", "enduring", "sufferer"],
        correctAnswer: "patient"
    },
    {
        id: 887,
        question: "状態，状況",
        choices: ["state", "condition", "status", "situation"],
        correctAnswer: "state"
    },
    {
        id: 888,
        question: "永遠に，ずっと",
        choices: ["forever", "eternally", "permanently", "endlessly"],
        correctAnswer: "forever"
    },
    {
        id: 889,
        question: "を提案する，申し出る",
        choices: ["propose", "suggest", "offer", "recommend"],
        correctAnswer: "propose"
    },
    {
        id: 890,
        question: "楽しい，愉快な",
        choices: ["pleasant", "enjoyable", "delightful", "agreeable"],
        correctAnswer: "pleasant"
    },
    {
        id: 891,
        question: "中身，内容，目次",
        choices: ["content", "substance", "material", "subject matter"],
        correctAnswer: "content"
    },
    {
        id: 892,
        question: "命令，指令",
        choices: ["order", "command", "instruction", "directive"],
        correctAnswer: "order"
    },
    {
        id: 893,
        question: "より優れた，優越な",
        choices: ["superior", "better", "excellent", "outstanding"],
        correctAnswer: "superior"
    },
    {
        id: 894,
        question: "のふりをする，に成りすます",
        choices: ["pretend", "act", "feign", "fake"],
        correctAnswer: "pretend"
    },
    {
        id: 895,
        question: "他に類を見ない，唯一の",
        choices: ["unique", "one of a kind", "unparalleled", "distinctive"],
        correctAnswer: "unique"
    },
    {
        id: 896,
        question: "準備，用意",
        choices: ["preparation", "arrangement", "planning", "setup"],
        correctAnswer: "preparation"
    },
    {
        id: 897,
        question: "余裕がある，ゆとりがある",
        choices: ["afford", "manage", "spare", "sustain"],
        correctAnswer: "afford"
    },
    {
        id: 898,
        question: "会議，集会",
        choices: ["congress", "conference", "assembly", "summit"],
        correctAnswer: "congress"
    },
    {
        id: 899,
        question: "核の，中心の",
        choices: ["nuclear", "central", "core", "fundamental"],
        correctAnswer: "nuclear"
    },
    {
        id: 900,
        question: "に関して，について",
        choices: ["regarding", "concerning", "about", "with respect to"],
        correctAnswer: "regarding"
    },
    {
        id: 901,
        question: "政党，党派",
        choices: ["party", "political group", "faction", "organization"],
        correctAnswer: "party"
    },
    {
        id: 902,
        question: "財政，財務",
        choices: ["finance", "budgeting", "economics", "monetary affairs"],
        correctAnswer: "finance"
    },
    {
        id: 903,
        question: "財政の，財務に関する",
        choices: ["financial", "economic", "monetary", "fiscal"],
        correctAnswer: "financial"
    },
    {
        id: 904,
        question: "かしこく",
        choices: ["intelligently", "wisely", "cleverly", "shrewdly"],
        correctAnswer: "intelligently"
    },
    {
        id: 905,
        question: "を述べる，描写する",
        choices: ["describe", "explain", "depict", "portray"],
        correctAnswer: "describe"
    },
    {
        id: 906,
        question: "操作する，操る",
        choices: ["operate", "control", "handle", "manage"],
        correctAnswer: "operate"
    },
    {
        id: 907,
        question: "を抱きしめる，擁する",
        choices: ["embrace", "hug", "hold", "welcome"],
        correctAnswer: "embrace"
    },
    {
        id: 908,
        question: "抵抗，反対",
        choices: ["resistance", "opposition", "defiance", "objection"],
        correctAnswer: "resistance"
    },
    {
        id: 909,
        question: "12の",
        choices: ["dozen", "twelve", "set of twelve", "pack of twelve"],
        correctAnswer: "dozen"
    },
    {
        id: 910,
        question: "廊下，通路",
        choices: ["corridor", "hallway", "passage", "aisle"],
        correctAnswer: "corridor"
    },
    {
        id: 911,
        question: "背景，背後",
        choices: ["background", "history", "context", "setting"],
        correctAnswer: "background"
    },
    {
        id: 912,
        question: "叩く，打つ",
        choices: ["strike", "hit", "beat", "smash"],
        correctAnswer: "strike"
    },
    {
        id: 913,
        question: "教育する，訓練する",
        choices: ["educate", "teach", "train", "instruct"],
        correctAnswer: "educate"
    },
    {
        id: 914,
        question: "織物，布地",
        choices: ["fabric", "cloth", "textile", "material"],
        correctAnswer: "fabric"
    },
    {
        id: 915,
        question: "事務員，社員",
        choices: ["clerk", "worker", "assistant", "secretary"],
        correctAnswer: "clerk"
    },
    {
        id: 916,
        question: "証拠，証明",
        choices: ["evidence", "proof", "confirmation", "verification"],
        correctAnswer: "evidence"
    },
    {
        id: 917,
        question: "に集中する",
        choices: ["concentrate", "focus", "pay attention to", "direct"],
        correctAnswer: "concentrate"
    },
    {
        id: 918,
        question: "資金調達，資本集め",
        choices: ["funding", "financing", "investment", "capital raising"],
        correctAnswer: "funding"
    },
    {
        id: 919,
        question: "普通でない，異常な",
        choices: ["extraordinary", "unusual", "exceptional", "remarkable"],
        correctAnswer: "extraordinary"
    },
    {
        id: 920,
        question: "民間人，一般市民",
        choices: ["civilian", "citizen", "non-combatant", "public"],
        correctAnswer: "civilian"
    },
    {
        id: 921,
        question: "歴史，過去",
        choices: ["history", "past", "heritage", "chronicle"],
        correctAnswer: "history"
    },
    {
        id: 922,
        question: "持続，保全",
        choices: ["maintenance", "preservation", "sustainability", "upkeep"],
        correctAnswer: "maintenance"
    },
    {
        id: 923,
        question: "信頼，信用",
        choices: ["faith", "trust", "confidence", "belief"],
        correctAnswer: "faith"
    },
    {
        id: 924,
        question: "よく似た，類似の",
        choices: ["alike", "similar", "comparable", "resembling"],
        correctAnswer: "alike"
    },
    {
        id: 925,
        question: "文法，文法規則",
        choices: ["grammar", "syntax", "linguistics", "rules"],
        correctAnswer: "grammar"
    },
    {
        id: 926,
        question: "乗り物，車",
        choices: ["vehicle", "car", "transport", "automobile"],
        correctAnswer: "vehicle"
    },
    {
        id: 927,
        question: "のままである，残る",
        choices: ["remain", "stay", "continue", "persist"],
        correctAnswer: "remain"
    },
    {
        id: 928,
        question: "利益/に利益をもたらす",
        choices: ["benefit", "advantage", "profit", "gain"],
        correctAnswer: "benefit"
    },
    {
        id: 929,
        question: "長さ，延長",
        choices: ["length", "extent", "distance", "duration"],
        correctAnswer: "length"
    },
    {
        id: 930,
        question: "炭素，炭素素子",
        choices: ["carbon", "charcoal", "graphite", "element"],
        correctAnswer: "carbon"
    },
    {
        id: 931,
        question: "役に立つ，有用な",
        choices: ["useful", "helpful", "beneficial", "practical"],
        correctAnswer: "useful"
    },
    {
        id: 932,
        question: "太った，肥満した",
        choices: ["fat", "obese", "chubby", "overweight"],
        correctAnswer: "fat"
    },
    {
        id: 933,
        question: "供給，支給",
        choices: ["provision", "supply", "distribution", "allocation"],
        correctAnswer: "provision"
    },
    {
        id: 934,
        question: "教科，主題",
        choices: ["subject", "topic", "course", "discipline"],
        correctAnswer: "subject"
    },
    {
        id: 935,
        question: "地域，領域",
        choices: ["region", "area", "zone", "territory"],
        correctAnswer: "region"
    },
    {
        id: 936,
        question: "境界，限界",
        choices: ["boundary", "border", "limit", "edge"],
        correctAnswer: "boundary"
    },
    {
        id: 937,
        question: "を自分のものにする，を取り入れる",
        choices: ["adopt", "embrace", "accept", "incorporate"],
        correctAnswer: "adopt"
    },
    {
        id: 938,
        question: "知恵，賢明さ",
        choices: ["wisdom", "intelligence", "insight", "knowledge"],
        correctAnswer: "wisdom"
    },
    {
        id: 939,
        question: "表現する，を言い表す",
        choices: ["express", "convey", "articulate", "communicate"],
        correctAnswer: "express"
    },
    {
        id: 940,
        question: "れんが，れんが状のもの",
        choices: ["brick", "tile", "stone", "block"],
        correctAnswer: "brick"
    },
    {
        id: 941,
        question: "創造，創作",
        choices: ["creation", "innovation", "invention", "production"],
        correctAnswer: "creation"
    },
    {
        id: 942,
        question: "を出迎える，に挨拶する",
        choices: ["greet", "welcome", "salute", "acknowledge"],
        correctAnswer: "greet"
    },
    {
        id: 943,
        question: "を妨げる，を阻害する",
        choices: ["block", "hinder", "obstruct", "prevent"],
        correctAnswer: "block"
    },
    {
        id: 944,
        question: "逃れる，脱走する",
        choices: ["escape", "flee", "run away", "evade"],
        correctAnswer: "escape"
    },
    {
        id: 945,
        question: "を手に入れる，を獲得する",
        choices: ["obtain", "acquire", "gain", "secure"],
        correctAnswer: "obtain"
    },
    {
        id: 946,
        question: "次第に，だんだんに",
        choices: ["gradually", "slowly", "progressively", "step by step"],
        correctAnswer: "gradually"
    },
    {
        id: 947,
        question: "明白な，明瞭な",
        choices: ["obvious", "clear", "evident", "apparent"],
        correctAnswer: "obvious"
    },
    {
        id: 948,
        question: "罪のない，無罪の",
        choices: ["innocent", "guiltless", "blameless", "pure"],
        correctAnswer: "innocent"
    },
    {
        id: 949,
        question: "分布，配分",
        choices: ["distribution", "allocation", "dispersion", "spreading"],
        correctAnswer: "distribution"
    },
    {
        id: 950,
        question: "正確に，正確で",
        choices: ["exactly", "precisely", "accurately", "correctly"],
        correctAnswer: "exactly"
    },
    {
        id: 951,
        question: "大陸，陸地",
        choices: ["continent", "landmass", "mainland", "territory"],
        correctAnswer: "continent"
    },
    {
        id: 952,
        question: "武器，兵器",
        choices: ["arms", "weapons", "firearms", "artillery"],
        correctAnswer: "arms"
    },
    {
        id: 953,
        question: "調合する，調合品を作る",
        choices: ["compound", "mix", "blend", "combine"],
        correctAnswer: "compound"
    },
    {
        id: 954,
        question: "公共の，共有の",
        choices: ["public", "common", "communal", "open"],
        correctAnswer: "public"
    },
    {
        id: 955,
        question: "気づき，認識",
        choices: ["awareness", "consciousness", "realization", "perception"],
        correctAnswer: "awareness"
    },
    {
        id: 956,
        question: "を取り除く，を除去する",
        choices: ["remove", "eliminate", "delete", "get rid of"],
        correctAnswer: "remove"
    },
    {
        id: 957,
        question: "相手，対象",
        choices: ["opponent", "rival", "adversary", "competitor"],
        correctAnswer: "opponent"
    },
    {
        id: 958,
        question: "近所，近隣",
        choices: ["neighborhood", "vicinity", "area", "locality"],
        correctAnswer: "neighborhood"
    },
    {
        id: 959,
        question: "一方で",
        choices: ["while", "whereas", "on the other hand", "meanwhile"],
        correctAnswer: "while"
    },
    {
        id: 960,
        question: "議会，会議",
        choices: ["council", "assembly", "committee", "board"],
        correctAnswer: "council"
    },
    {
        id: 961,
        question: "適した，好都合な",
        choices: ["suitable", "appropriate", "convenient", "proper"],
        correctAnswer: "suitable"
    },
    {
        id: 962,
        question: "秘書，秘書官",
        choices: ["secretary", "assistant", "clerk", "administrator"],
        correctAnswer: "secretary"
    },
    {
        id: 963,
        question: "参加する，出席する",
        choices: ["participate", "attend", "join", "engage"],
        correctAnswer: "participate"
    },
    {
        id: 964,
        question: "政治，政策",
        choices: ["politics", "policy", "government", "diplomacy"],
        correctAnswer: "politics"
    },
    {
        id: 965,
        question: "正確な，的確な",
        choices: ["accurate", "precise", "correct", "exact"],
        correctAnswer: "accurate"
    },
    {
        id: 966,
        question: "麻薬，薬",
        choices: ["drug", "medicine", "narcotic", "substance"],
        correctAnswer: "drug"
    },
    {
        id: 967,
        question: "奇妙な，異常な",
        choices: ["strange", "odd", "unusual", "peculiar"],
        correctAnswer: "strange"
    },
    {
        id: 968,
        question: "従来の，伝統的な",
        choices: ["conventional", "traditional", "customary", "established"],
        correctAnswer: "conventional"
    },
    {
        id: 969,
        question: "組織，団体，協会",
        choices: ["organization", "association", "institution", "foundation"],
        correctAnswer: "organization"
    },
    {
        id: 970,
        question: "やけくその，軽率な",
        choices: ["desperate", "reckless", "frantic", "rash"],
        correctAnswer: "desperate"
    },
    {
        id: 971,
        question: "道徳の，道徳的な",
        choices: ["moral", "ethical", "righteous", "virtuous"],
        correctAnswer: "moral"
    },
    {
        id: 972,
        question: "知的な，知識に関する",
        choices: ["intellectual", "scholarly", "academic", "rational"],
        correctAnswer: "intellectual"
    },
    {
        id: 973,
        question: "強調，重視",
        choices: ["emphasis", "stress", "importance", "highlight"],
        correctAnswer: "emphasis"
    },
    {
        id: 974,
        question: "特に，とりわけ",
        choices: ["particularly", "especially", "notably", "specifically"],
        correctAnswer: "particularly"
    },
    {
        id: 975,
        question: "創設者，創立者",
        choices: ["founder", "creator", "originator", "establisher"],
        correctAnswer: "founder"
    },
    {
        id: 976,
        question: "について考える，だと見なす",
        choices: ["consider", "regard", "contemplate", "view"],
        correctAnswer: "consider"
    },
    {
        id: 977,
        question: "感情の，情緒の",
        choices: ["emotional", "sentimental", "affective", "passionate"],
        correctAnswer: "emotional"
    },
    {
        id: 978,
        question: "感染",
        choices: ["infection", "contagion", "disease", "virus"],
        correctAnswer: "infection"
    },
    {
        id: 979,
        question: "を見分ける，識別する",
        choices: ["identify", "recognize", "distinguish", "determine"],
        correctAnswer: "identify"
    },
    {
        id: 980,
        question: "要求，需要/を要求する",
        choices: ["demand", "request", "need", "claim"],
        correctAnswer: "demand"
    },
    {
        id: 981,
        question: "与えられた，授与された",
        choices: ["given", "awarded", "provided", "granted"],
        correctAnswer: "given"
    },
    {
        id: 982,
        question: "遷移，変遷",
        choices: ["transition", "shift", "change", "evolution"],
        correctAnswer: "transition"
    },
    {
        id: 983,
        question: "著者，作者",
        choices: ["author", "writer", "novelist", "journalist"],
        correctAnswer: "author"
    },
    {
        id: 984,
        question: "かなりの，相当な",
        choices: ["considerable", "significant", "substantial", "notable"],
        correctAnswer: "considerable"
    },
    {
        id: 985,
        question: "を卒業する，を修了する",
        choices: ["graduate", "complete", "finish", "advance"],
        correctAnswer: "graduate"
    },
    {
        id: 986,
        question: "行為，行動",
        choices: ["conduct", "behavior", "action", "deed"],
        correctAnswer: "conduct"
    },
    {
        id: 987,
        question: "群衆，大衆",
        choices: ["crowd", "gathering", "mob", "throng"],
        correctAnswer: "crowd"
    },
    {
        id: 988,
        question: "自然，天然",
        choices: ["nature", "environment", "wilderness", "ecology"],
        correctAnswer: "nature"
    },
    {
        id: 989,
        question: "広い，拡大する",
        choices: ["broad", "wide", "extensive", "spacious"],
        correctAnswer: "broad"
    },
    {
        id: 990,
        question: "医師，内科医",
        choices: ["physician", "doctor", "surgeon", "medic"],
        correctAnswer: "physician"
    },
    {
        id: 991,
        question: "を説得する，口説き落とす",
        choices: ["persuade", "convince", "influence", "urge"],
        correctAnswer: "persuade"
    },
    {
        id: 992,
        question: "達成，成就",
        choices: ["achievement", "accomplishment", "success", "attainment"],
        correctAnswer: "achievement"
    },
    {
        id: 993,
        question: "目撃者，証人/を目撃する",
        choices: ["witness", "observer", "spectator", "testifier"],
        correctAnswer: "witness"
    },
    {
        id: 994,
        question: "直面する/顔",
        choices: ["face", "confront", "deal with", "encounter"],
        correctAnswer: "face"
    },
    {
        id: 995,
        question: "焦点，中心",
        choices: ["focus", "concentration", "emphasis", "attention"],
        correctAnswer: "focus"
    },
    {
        id: 996,
        question: "連邦の，連邦制の",
        choices: ["federal", "national", "central", "state"],
        correctAnswer: "federal"
    },
    {
        id: 997,
        question: "結びつけて考える，賛同する",
        choices: ["associate", "link", "connect", "relate"],
        correctAnswer: "associate"
    },
    {
        id: 998,
        question: "ねらいをつける，狙う",
        choices: ["aim", "target", "focus", "intend"],
        correctAnswer: "aim"
    },
    {
        id: 999,
        question: "赤字，欠損",
        choices: ["deficit", "loss", "shortfall", "debt"],
        correctAnswer: "deficit"
    },
    {
        id: 1000,
        question: "行動主義者，活動家",
        choices: ["activist", "advocate", "campaigner", "reformer"],
        correctAnswer: "activist"
    },
    {
        id: 1001,
        question: "最初の，初めての",
        choices: ["primary", "initial", "first", "original"],
        correctAnswer: "primary"
    },
    {
        id: 1002,
        question: "喜び，歓喜",
        choices: ["joy", "happiness", "delight", "pleasure"],
        correctAnswer: "joy"
    },
    {
        id: 1003,
        question: "検査官，監査人",
        choices: ["inspector", "examiner", "supervisor", "auditor"],
        correctAnswer: "inspector"
    },
    {
        id: 1004,
        question: "実際に，現実に",
        choices: ["actually", "really", "in fact", "truly"],
        correctAnswer: "actually"
    },
    {
        id: 1005,
        question: "前の，以前の",
        choices: ["previous", "former", "prior", "earlier"],
        correctAnswer: "previous"
    },
    {
        id: 1006,
        question: "変化，変動",
        choices: ["variation", "change", "fluctuation", "difference"],
        correctAnswer: "variation"
    },
    {
        id: 1007,
        question: "馬鹿な，愚かな",
        choices: ["stupid", "foolish", "dumb", "unwise"],
        correctAnswer: "stupid"
    },
    {
        id: 1008,
        question: "貧困，貧乏，困窮",
        choices: ["poverty", "destitution", "hardship", "need"],
        correctAnswer: "poverty"
    },
    {
        id: 1009,
        question: "訴える，告発する，告訴する",
        choices: ["appeal", "accuse", "charge", "prosecute"],
        correctAnswer: "appeal"
    },
    {
        id: 1010,
        question: "物質，実態",
        choices: ["substance", "matter", "material", "element"],
        correctAnswer: "substance"
    },
    {
        id: 1011,
        question: "規制，規定",
        choices: ["regulation", "rule", "law", "guideline"],
        correctAnswer: "regulation"
    },
    {
        id: 1012,
        question: "裸の，露出の",
        choices: ["bare", "naked", "exposed", "uncovered"],
        correctAnswer: "bare"
    },
    {
        id: 1013,
        question: "目を覚ましている，覚醒している",
        choices: ["awake", "alert", "conscious", "aware"],
        correctAnswer: "awake"
    },
    {
        id: 1014,
        question: "疑う，だと思う",
        choices: ["suspect", "doubt", "question", "mistrust"],
        correctAnswer: "suspect"
    },
    {
        id: 1015,
        question: "電池，蓄電池",
        choices: ["battery", "cell", "accumulator", "power source"],
        correctAnswer: "battery"
    },
    {
        id: 1016,
        question: "所得，収入",
        choices: ["income", "salary", "earnings", "revenue"],
        correctAnswer: "income"
    },
    {
        id: 1017,
        question: "欠点，短所",
        choices: ["fault", "defect", "flaw", "weakness"],
        correctAnswer: "fault"
    },
    {
        id: 1018,
        question: "組織",
        choices: ["tissue", "structure", "system", "framework"],
        correctAnswer: "tissue"
    },
    {
        id: 1019,
        question: "他人，他者",
        choices: ["stranger", "foreigner", "outsider", "visitor"],
        correctAnswer: "stranger"
    },
    {
        id: 1020,
        question: "高価な，費用のかかる",
        choices: ["expensive", "costly", "pricey", "overpriced"],
        correctAnswer: "expensive"
    },
    {
        id: 1021,
        question: "違い，差分",
        choices: ["difference", "distinction", "contrast", "variation"],
        correctAnswer: "difference"
    },
    {
        id: 1022,
        question: "割合，比率",
        choices: ["percentage", "rate", "proportion", "fraction"],
        correctAnswer: "percentage"
    },
    {
        id: 1023,
        question: "自身の，自分自身の",
        choices: ["own", "personal", "individual", "private"],
        correctAnswer: "own"
    },
    {
        id: 1024,
        question: "短い，短時間の",
        choices: ["brief", "short", "concise", "quick"],
        correctAnswer: "brief"
    },
    {
        id: 1025,
        question: "役に立たない，むだな",
        choices: ["useless", "worthless", "pointless", "ineffective"],
        correctAnswer: "useless"
    },
    {
        id: 1026,
        question: "を予想する，を予測する",
        choices: ["predict", "forecast", "anticipate", "project"],
        correctAnswer: "predict"
    },
    {
        id: 1027,
        question: "人事，職員",
        choices: ["personnel", "staff", "employees", "workforce"],
        correctAnswer: "personnel"
    },
    {
        id: 1028,
        question: "突然の，急な",
        choices: ["sudden", "abrupt", "unexpected", "swift"],
        correctAnswer: "sudden"
    },
    {
        id: 1029,
        question: "を移す，を転送する",
        choices: ["transfer", "relocate", "shift", "move"],
        correctAnswer: "transfer"
    },
    {
        id: 1030,
        question: "固い，固形の",
        choices: ["solid", "hard", "firm", "dense"],
        correctAnswer: "solid"
    },
    {
        id: 1031,
        question: "混乱，錯乱，無秩序",
        choices: ["mess", "chaos", "disorder", "clutter"],
        correctAnswer: "mess"
    },
    {
        id: 1032,
        question: "逃げる，逃走する",
        choices: ["flee", "escape", "run away", "evade"],
        correctAnswer: "flee"
    },
    {
        id: 1033,
        question: "排出させる，排水をする",
        choices: ["drain", "empty", "release", "discharge"],
        correctAnswer: "drain"
    },
    {
        id: 1034,
        question: "ことば",
        choices: ["remark", "comment", "statement", "observation"],
        correctAnswer: "remark"
    },
    {
        id: 1035,
        question: "講義",
        choices: ["lecture", "talk", "speech", "presentation"],
        correctAnswer: "lecture"
    },
    {
        id: 1036,
        question: "解決，決意",
        choices: ["resolution", "decision", "determination", "solution"],
        correctAnswer: "resolution"
    },
    {
        id: 1037,
        question: "砂漠，乾燥地帯",
        choices: ["desert", "wasteland", "arid land", "dune"],
        correctAnswer: "desert"
    },
    {
        id: 1038,
        question: "提唱する，主張する",
        choices: ["advocate", "support", "promote", "recommend"],
        correctAnswer: "advocate"
    },
    {
        id: 1039,
        question: "賭ける，博打をする",
        choices: ["bet", "wager", "gamble", "stake"],
        correctAnswer: "bet"
    },
    {
        id: 1040,
        question: "特有の，独特の",
        choices: ["characteristic", "distinctive", "unique", "typical"],
        correctAnswer: "characteristic"
    },
    {
        id: 1041,
        question: "教育，指導",
        choices: ["education", "teaching", "instruction", "training"],
        correctAnswer: "education"
    },
    {
        id: 1042,
        question: "なんでも，何もかも",
        choices: ["whatever", "anything", "everything", "whichever"],
        correctAnswer: "whatever"
    },
    {
        id: 1043,
        question: "原因/の原因となる",
        choices: ["cause", "reason", "source", "origin"],
        correctAnswer: "cause"
    },
    {
        id: 1044,
        question: "約束，委託",
        choices: ["commitment", "promise", "engagement", "pledge"],
        correctAnswer: "commitment"
    },
    {
        id: 1045,
        question: "供給",
        choices: ["supply", "provision", "distribution", "delivery"],
        correctAnswer: "supply"
    },
    {
        id: 1046,
        question: "一時的な，短期的な",
        choices: ["temporary", "short-term", "transitory", "brief"],
        correctAnswer: "temporary"
    },
    {
        id: 1047,
        question: "を含む，を巻き込む",
        choices: ["involve", "include", "engage", "contain"],
        correctAnswer: "involve"
    },
    {
        id: 1048,
        question: "食事，食事療法",
        choices: ["meal", "food", "diet", "cuisine"],
        correctAnswer: "meal"
    },
    {
        id: 1049,
        question: "を取り換える，を交換する",
        choices: ["replace", "substitute", "exchange", "swap"],
        correctAnswer: "replace"
    },
    {
        id: 1050,
        question: "表現，言い回し",
        choices: ["expression", "phrase", "statement", "utterance"],
        correctAnswer: "expression"
    },
    {
        id: 1051,
        question: "投資家，投資者",
        choices: ["investor", "financier", "capitalist", "stockholder"],
        correctAnswer: "investor"
    },
    {
        id: 1052,
        question: "人間，人間性",
        choices: ["humanity", "mankind", "humankind", "human nature"],
        correctAnswer: "humanity"
    },
    {
        id: 1053,
        question: "大多数，多数派",
        choices: ["majority", "most", "bulk", "dominance"],
        correctAnswer: "majority"
    },
    {
        id: 1054,
        question: "を所有する",
        choices: ["possess", "own", "hold", "have"],
        correctAnswer: "possess"
    },
    {
        id: 1055,
        question: "寄付，貢献",
        choices: ["contribution", "donation", "offering", "aid"],
        correctAnswer: "contribution"
    },
    {
        id: 1056,
        question: "頻繁に, たびたび",
        choices: ["frequently", "often", "regularly", "repeatedly"],
        correctAnswer: "frequently"
    },
    {
        id: 1057,
        question: "肩をすくめる，無視する",
        choices: ["shrug", "ignore", "dismiss", "neglect"],
        correctAnswer: "shrug"
    },
    {
        id: 1058,
        question: "操作者，操縦者",
        choices: ["operator", "controller", "technician", "pilot"],
        correctAnswer: "operator"
    },
    {
        id: 1059,
        question: "わずかに，少し",
        choices: ["slightly", "marginally", "somewhat", "minimally"],
        correctAnswer: "slightly"
    },
    {
        id: 1060,
        question: "解釈，通訳",
        choices: ["interpretation", "explanation", "understanding", "translation"],
        correctAnswer: "interpretation"
    },
    {
        id: 1061,
        question: "頼る，依存する",
        choices: ["rely", "depend", "trust", "count on"],
        correctAnswer: "rely"
    },
    {
        id: 1062,
        question: "削減，減少",
        choices: ["reduction", "decrease", "cutback", "diminution"],
        correctAnswer: "reduction"
    },
    {
        id: 1063,
        question: "全部の，すべての",
        choices: ["whole", "entire", "complete", "total"],
        correctAnswer: "whole"
    },
    {
        id: 1064,
        question: "を購入する/購入",
        choices: ["purchase", "buy", "acquire", "obtain"],
        correctAnswer: "purchase"
    },
    {
        id: 1065,
        question: "頂上，山頂",
        choices: ["summit", "peak", "top", "apex"],
        correctAnswer: "summit"
    },
    {
        id: 1066,
        question: "地獄，奈落",
        choices: ["hell", "underworld", "abyss", "inferno"],
        correctAnswer: "hell"
    },
    {
        id: 1067,
        question: "典型的に，一般的に",
        choices: ["typically", "commonly", "generally", "ordinarily"],
        correctAnswer: "typically"
    },
    {
        id: 1068,
        question: "を賞賛する，を賛美する",
        choices: ["admire", "praise", "appreciate", "respect"],
        correctAnswer: "admire"
    },
    {
        id: 1069,
        question: "文学，文芸",
        choices: ["literature", "fiction", "writing", "poetry"],
        correctAnswer: "literature"
    },
    {
        id: 1070,
        question: "問題，（雑誌などの）号",
        choices: ["issue", "problem", "edition", "topic"],
        correctAnswer: "issue"
    },
    {
        id: 1071,
        question: "家賃，賃料",
        choices: ["rent", "lease", "rental fee", "housing cost"],
        correctAnswer: "rent"
    },
    {
        id: 1072,
        question: "広範囲に，多くの範囲に",
        choices: ["widely", "broadly", "extensively", "far-reaching"],
        correctAnswer: "widely"
    },
    {
        id: 1073,
        question: "満足，充足",
        choices: ["satisfaction", "contentment", "gratification", "pleasure"],
        correctAnswer: "satisfaction"
    },
    {
        id: 1074,
        question: "心配させる，心配する",
        choices: ["worry", "concern", "stress", "fret"],
        correctAnswer: "worry"
    },
    {
        id: 1075,
        question: "こする，さする",
        choices: ["rub", "scrub", "wipe", "polish"],
        correctAnswer: "rub"
    },
    {
        id: 1076,
        question: "完全に，全く",
        choices: ["completely", "entirely", "totally", "fully"],
        correctAnswer: "completely"
    },
    {
        id: 1077,
        question: "消える，見えなくなる",
        choices: ["disappear", "vanish", "fade", "evaporate"],
        correctAnswer: "disappear"
    },
    {
        id: 1078,
        question: "膨張，拡大",
        choices: ["inflation", "expansion", "growth", "enlargement"],
        correctAnswer: "inflation"
    },
    {
        id: 1079,
        question: "たぶん，おそらく",
        choices: ["maybe", "perhaps", "probably", "possibly"],
        correctAnswer: "maybe"
    },
    {
        id: 1080,
        question: "計算する，算出する",
        choices: ["calculate", "compute", "estimate", "reckon"],
        correctAnswer: "calculate"
    },
    {
        id: 1081,
        question: "を決める，を定める",
        choices: ["determine", "decide", "define", "establish"],
        correctAnswer: "determine"
    },
    {
        id: 1082,
        question: "メキシコの，メキシコ系の",
        choices: ["Mexican", "Latino", "Spanish", "Hispanic"],
        correctAnswer: "Mexican"
    },
    {
        id: 1083,
        question: "収穫物，作物",
        choices: ["crop", "harvest", "yield", "produce"],
        correctAnswer: "crop"
    },
    {
        id: 1084,
        question: "起訴，告訴",
        choices: ["prosecution", "lawsuit", "indictment", "litigation"],
        correctAnswer: "prosecution"
    },
    {
        id: 1085,
        question: "つま先，足の指",
        choices: ["toe", "foot", "heel", "ankle"],
        correctAnswer: "toe"
    },
    {
        id: 1086,
        question: "つかむ，把握する",
        choices: ["seize", "grasp", "grab", "clutch"],
        correctAnswer: "seize"
    },
    {
        id: 1087,
        question: "想像，仮想",
        choices: ["imagination", "fantasy", "creativity", "vision"],
        correctAnswer: "imagination"
    },
    {
        id: 1088,
        question: "知事，州知事",
        choices: ["governor", "mayor", "president", "leader"],
        correctAnswer: "governor"
    },
    {
        id: 1089,
        question: "好奇心，探究心",
        choices: ["curiosity", "interest", "wonder", "inquiring mind"],
        correctAnswer: "curiosity"
    },
    {
        id: 1090,
        question: "上がる，昇る",
        choices: ["rise", "ascend", "increase", "climb"],
        correctAnswer: "rise"
    },
    {
        id: 1091,
        question: "尾，尾部",
        choices: ["tail", "end", "rear", "back"],
        correctAnswer: "tail"
    },
    {
        id: 1092,
        question: "を除いて，除外して",
        choices: ["except", "excluding", "besides", "apart from"],
        correctAnswer: "except"
    },
    {
        id: 1093,
        question: "横たわる，寝転ぶ",
        choices: ["lie", "recline", "rest", "stretch out"],
        correctAnswer: "lie"
    },
    {
        id: 1094,
        question: "紐，糸",
        choices: ["string", "thread", "cord", "rope"],
        correctAnswer: "string"
    },
    {
        id: 1095,
        question: "任命する，指定する",
        choices: ["appoint", "assign", "designate", "nominate"],
        correctAnswer: "appoint"
    },
    {
        id: 1096,
        question: "軍隊，兵力",
        choices: ["military", "army", "troops", "forces"],
        correctAnswer: "military"
    },
    {
        id: 1097,
        question: "会議，対話",
        choices: ["conference", "meeting", "summit", "discussion"],
        correctAnswer: "conference"
    },
    {
        id: 1098,
        question: "説明，解説",
        choices: ["explanation", "clarification", "description", "interpretation"],
        correctAnswer: "explanation"
    },
    {
        id: 1099,
        question: "雰囲気，気候",
        choices: ["atmosphere", "mood", "environment", "climate"],
        correctAnswer: "atmosphere"
    },
    {
        id: 1100,
        question: "向かって，のほうへ",
        choices: ["toward", "in the direction of", "to", "facing"],
        correctAnswer: "toward"
    },
    {
        id: 1101,
        question: "都合がよい，便利な",
        choices: ["convenient", "handy", "useful", "practical"],
        correctAnswer: "convenient"
    },
    {
        id: 1102,
        question: "試験，実験",
        choices: ["examination", "test", "experiment", "assessment"],
        correctAnswer: "examination"
    },
    {
        id: 1103,
        question: "種類，類",
        choices: ["sort", "type", "category", "kind"],
        correctAnswer: "sort"
    },
    {
        id: 1104,
        question: "強く，激しく",
        choices: ["strongly", "intensely", "firmly", "forcefully"],
        correctAnswer: "strongly"
    },
    {
        id: 1105,
        question: "を恐れる，恐がる/恐れ",
        choices: ["fear", "dread", "terror", "anxiety"],
        correctAnswer: "fear"
    },
    {
        id: 1106,
        question: "能力，力量",
        choices: ["ability", "capability", "competence", "skill"],
        correctAnswer: "ability"
    },
    {
        id: 1107,
        question: "重さ，体重",
        choices: ["weight", "mass", "heft", "burden"],
        correctAnswer: "weight"
    },
    {
        id: 1108,
        question: "除く，排除する",
        choices: ["exclude", "omit", "eliminate", "remove"],
        correctAnswer: "exclude"
    },
    {
        id: 1109,
        question: "しつけ，規律",
        choices: ["discipline", "order", "control", "training"],
        correctAnswer: "discipline"
    },
    {
        id: 1110,
        question: "分かち合う/分け前",
        choices: ["share", "divide", "split", "distribute"],
        correctAnswer: "share"
    },
    {
        id: 1111,
        question: "潜在的に，可能性として",
        choices: ["potentially", "possibly", "hypothetically", "likely"],
        correctAnswer: "potentially"
    },
    {
        id: 1112,
        question: "程度，大きさ",
        choices: ["extent", "scale", "size", "degree"],
        correctAnswer: "extent"
    },
    {
        id: 1113,
        question: "議論，討論",
        choices: ["discussion", "debate", "argument", "talk"],
        correctAnswer: "discussion"
    },
    {
        id: 1114,
        question: "移住，定住",
        choices: ["settlement", "colonization", "residence", "establishment"],
        correctAnswer: "settlement"
    },
    {
        id: 1115,
        question: "非常に大きい，極端に大きい",
        choices: ["enormous", "huge", "immense", "gigantic"],
        correctAnswer: "enormous"
    },
    {
        id: 1116,
        question: "存在，存在感",
        choices: ["presence", "existence", "appearance", "being"],
        correctAnswer: "presence"
    },
    {
        id: 1117,
        question: "効果的な，有用な",
        choices: ["effective", "efficient", "successful", "useful"],
        correctAnswer: "effective"
    },
    {
        id: 1118,
        question: "急速な，急激な",
        choices: ["rapid", "fast", "swift", "quick"],
        correctAnswer: "rapid"
    },
    {
        id: 1119,
        question: "土台，根拠",
        choices: ["basis", "foundation", "groundwork", "principle"],
        correctAnswer: "basis"
    },
    {
        id: 1120,
        question: "司令官，指揮官",
        choices: ["commander", "general", "officer", "chief"],
        correctAnswer: "commander"
    },
    {
        id: 1121,
        question: "急進的な，抜本的な",
        choices: ["radical", "extreme", "revolutionary", "drastic"],
        correctAnswer: "radical"
    },
    {
        id: 1122,
        question: "個人の，個々の",
        choices: ["individual", "personal", "independent", "private"],
        correctAnswer: "individual"
    },
    {
        id: 1123,
        question: "日誌，日記",
        choices: ["journal", "diary", "log", "notebook"],
        correctAnswer: "journal"
    },
    {
        id: 1124,
        question: "を避ける，を回避する",
        choices: ["avoid", "evade", "escape", "prevent"],
        correctAnswer: "avoid"
    },
    {
        id: 1125,
        question: "くい，掛け金",
        choices: ["stake", "bet", "wager", "investment"],
        correctAnswer: "stake"
    },
    {
        id: 1126,
        question: "ひょっとすると，もしかしたら",
        choices: ["possibly", "perhaps", "maybe", "probably"],
        correctAnswer: "possibly"
    },
    {
        id: 1127,
        question: "暴力，乱暴",
        choices: ["violence", "aggression", "brutality", "force"],
        correctAnswer: "violence"
    },
    {
        id: 1128,
        question: "起こりそうな，可能性がある",
        choices: ["likely", "probable", "possible", "expected"],
        correctAnswer: "likely"
    },
    {
        id: 1129,
        question: "娯楽，楽しみ",
        choices: ["entertainment", "amusement", "recreation", "leisure"],
        correctAnswer: "entertainment"
    },
    {
        id: 1130,
        question: "反対の，向こう側の",
        choices: ["opposite", "contrary", "reverse", "opposing"],
        correctAnswer: "opposite"
    },
    {
        id: 1131,
        question: "地域，地区",
        choices: ["district", "region", "area", "zone"],
        correctAnswer: "district"
    },
    {
        id: 1132,
        question: "国内の，家庭の",
        choices: ["domestic", "internal", "national", "household"],
        correctAnswer: "domestic"
    },
    {
        id: 1133,
        question: "投げる，放る",
        choices: ["pitch", "throw", "toss", "hurl"],
        correctAnswer: "pitch"
    },
    {
        id: 1134,
        question: "歴史上の，過去の",
        choices: ["historical", "ancient", "past", "traditional"],
        correctAnswer: "historical"
    },
    {
        id: 1135,
        question: "弾丸",
        choices: ["bullet", "shot", "projectile", "round"],
        correctAnswer: "bullet"
    },
    {
        id: 1136,
        question: "収益，所得",
        choices: ["revenue", "income", "profit", "earnings"],
        correctAnswer: "revenue"
    },
    {
        id: 1137,
        question: "民主主義，民主制度",
        choices: ["democracy", "republic", "government", "liberalism"],
        correctAnswer: "democracy"
    },
    {
        id: 1138,
        question: "立法，法制定",
        choices: ["legislation", "law-making", "statute", "policy"],
        correctAnswer: "legislation"
    },
    {
        id: 1139,
        question: "胸部，胸",
        choices: ["breast", "chest", "torso", "pectoral"],
        correctAnswer: "breast"
    },
    {
        id: 1140,
        question: "現実の，事実の",
        choices: ["actual", "real", "true", "factual"],
        correctAnswer: "actual"
    },
    {
        id: 1141,
        question: "強く望んでいる，切望している",
        choices: ["eager", "enthusiastic", "keen", "desperate"],
        correctAnswer: "eager"
    },
    {
        id: 1142,
        question: "可能な，実現可能な",
        choices: ["possible", "feasible", "achievable", "doable"],
        correctAnswer: "possible"
    },
    {
        id: 1143,
        question: "ことわざ",
        choices: ["proverb", "saying", "aphorism", "adage"],
        correctAnswer: "proverb"
    },
    {
        id: 1144,
        question: "心理的な，精神的な",
        choices: ["psychological", "mental", "emotional", "cognitive"],
        correctAnswer: "psychological"
    },
    {
        id: 1145,
        question: "難民，避難者",
        choices: ["refugee", "migrant", "asylum seeker", "displaced person"],
        correctAnswer: "refugee"
    },
    {
        id: 1146,
        question: "起源，由来",
        choices: ["origin", "source", "beginning", "foundation"],
        correctAnswer: "origin"
    },
    {
        id: 1147,
        question: "を輸送する，を運搬する",
        choices: ["transport", "deliver", "ship", "move"],
        correctAnswer: "transport"
    },
    {
        id: 1148,
        question: "考え，意見",
        choices: ["notion", "idea", "concept", "opinion"],
        correctAnswer: "notion"
    },
    {
        id: 1149,
        question: "最初は，初めて",
        choices: ["initially", "firstly", "at first", "originally"],
        correctAnswer: "initially"
    },
    {
        id: 1150,
        question: "疑い，疑問",
        choices: ["doubt", "suspicion", "uncertainty", "hesitation"],
        correctAnswer: "doubt"
    },
    {
        id: 1151,
        question: "ため息をつく，溜め息をつく",
        choices: ["sigh", "exhale", "breathe out", "groan"],
        correctAnswer: "sigh"
    },
    {
        id: 1152,
        question: "実験室，研究所",
        choices: ["laboratory", "lab", "research center", "testing facility"],
        correctAnswer: "laboratory"
    },
    {
        id: 1153,
        question: "喜び，歓喜",
        choices: ["delight", "joy", "happiness", "pleasure"],
        correctAnswer: "delight"
    },
    {
        id: 1154,
        question: "まもなく，近々",
        choices: ["shortly", "soon", "in a moment", "before long"],
        correctAnswer: "shortly"
    },
    {
        id: 1155,
        question: "普遍的な，万能の",
        choices: ["universal", "global", "widespread", "all-encompassing"],
        correctAnswer: "universal"
    },
    {
        id: 1156,
        question: "確かに",
        choices: ["surely", "certainly", "definitely", "undoubtedly"],
        correctAnswer: "surely"
    },
    {
        id: 1157,
        question: "労働，労働者",
        choices: ["labor", "work", "employment", "job"],
        correctAnswer: "labor"
    },
    {
        id: 1158,
        question: "全体の，全部の",
        choices: ["entire", "whole", "complete", "total"],
        correctAnswer: "entire"
    },
    {
        id: 1159,
        question: "血，血液",
        choices: ["blood", "plasma", "fluid", "lifeblood"],
        correctAnswer: "blood"
    },
    {
        id: 1160,
        question: "かなと思う",
        choices: ["wonder", "ponder", "consider", "question"],
        correctAnswer: "wonder"
    },
    {
        id: 1161,
        question: "起こる，現れる",
        choices: ["arise", "occur", "happen", "emerge"],
        correctAnswer: "arise"
    },
    {
        id: 1162,
        question: "合体させる，統合する",
        choices: ["incorporate", "integrate", "merge", "unify"],
        correctAnswer: "incorporate"
    },
    {
        id: 1163,
        question: "単なる，ただの",
        choices: ["mere", "only", "just", "simple"],
        correctAnswer: "mere"
    },
    {
        id: 1164,
        question: "議題",
        choices: ["agenda", "topic", "schedule", "plan"],
        correctAnswer: "agenda"
    },
    {
        id: 1165,
        question: "恐怖，恐れ",
        choices: ["terror", "fear", "horror", "panic"],
        correctAnswer: "terror"
    },
    {
        id: 1166,
        question: "真に，正確に",
        choices: ["truly", "really", "genuinely", "precisely"],
        correctAnswer: "truly"
    },
    {
        id: 1167,
        question: "必要な",
        choices: ["necessary", "essential", "required", "vital"],
        correctAnswer: "necessary"
    },
    {
        id: 1168,
        question: "科学，自然科学",
        choices: ["science", "biology", "physics", "chemistry"],
        correctAnswer: "science"
    },
    {
        id: 1169,
        question: "親切な行為，好意",
        choices: ["favor", "kindness", "help", "assistance"],
        correctAnswer: "favor"
    },
    {
        id: 1170,
        question: "不況，後退",
        choices: ["recession", "depression", "downturn", "slump"],
        correctAnswer: "recession"
    },
    {
        id: 1171,
        question: "航空機，飛行機",
        choices: ["aircraft", "plane", "jet", "airliner"],
        correctAnswer: "aircraft"
    },
    {
        id: 1172,
        question: "刑務所",
        choices: ["prison", "jail", "penitentiary", "correctional facility"],
        correctAnswer: "prison"
    },
    {
        id: 1173,
        question: "～周年，記念日",
        choices: ["anniversary", "celebration", "commemoration", "jubilee"],
        correctAnswer: "anniversary"
    },
    {
        id: 1174,
        question: "可能性，実現性",
        choices: ["possibility", "potential", "probability", "chance"],
        correctAnswer: "possibility"
    },
    {
        id: 1175,
        question: "連続，継続",
        choices: ["sequence", "series", "continuation", "order"],
        correctAnswer: "sequence"
    },
    {
        id: 1176,
        question: "かすかな，わずかの",
        choices: ["slight", "subtle", "minimal", "faint"],
        correctAnswer: "slight"
    },
    {
        id: 1177,
        question: "顧客，お客様",
        choices: ["customer", "client", "consumer", "buyer"],
        correctAnswer: "customer"
    },
    {
        id: 1178,
        question: "情報を与える，に知らせる",
        choices: ["inform", "notify", "tell", "report"],
        correctAnswer: "inform"
    },
    {
        id: 1179,
        question: "違法の，不正な",
        choices: ["illegal", "unlawful", "illicit", "prohibited"],
        correctAnswer: "illegal"
    },
    {
        id: 1180,
        question: "調査，研究",
        choices: ["investigation", "research", "inquiry", "analysis"],
        correctAnswer: "investigation"
    },
    {
        id: 1181,
        question: "落ち込み，不景気",
        choices: ["depression", "melancholy", "slump", "recession"],
        correctAnswer: "depression"
    },
    {
        id: 1182,
        question: "問題，困ったこと",
        choices: ["matter", "issue", "problem", "difficulty"],
        correctAnswer: "matter"
    },
    {
        id: 1183,
        question: "でない限り，除いて",
        choices: ["unless", "except", "without", "apart from"],
        correctAnswer: "unless"
    },
    {
        id: 1184,
        question: "必要性，必須",
        choices: ["necessity", "requirement", "need", "essential"],
        correctAnswer: "necessity"
    },
    {
        id: 1185,
        question: "最高の，至高の",
        choices: ["supreme", "ultimate", "greatest", "highest"],
        correctAnswer: "supreme"
    },
    {
        id: 1186,
        question: "厳しい，厳格な",
        choices: ["severe", "harsh", "strict", "rigid"],
        correctAnswer: "severe"
    },
    {
        id: 1187,
        question: "血の，血液の",
        choices: ["bloody", "gory", "bloodstained", "crimson"],
        correctAnswer: "bloody"
    },
    {
        id: 1188,
        question: "離れて，遠くに",
        choices: ["apart", "separate", "distant", "away"],
        correctAnswer: "apart"
    },
    {
        id: 1189,
        question: "投げる，放る",
        choices: ["cast", "throw", "toss", "hurl"],
        correctAnswer: "cast"
    },
    {
        id: 1190,
        question: "航空会社，航空業者",
        choices: ["airline", "carrier", "aviation company", "air transport"],
        correctAnswer: "airline"
    },
    {
        id: 1191,
        question: "取引",
        choices: ["trading", "commerce", "exchange", "business"],
        correctAnswer: "trading"
    },
    {
        id: 1192,
        question: "小道，細道",
        choices: ["path", "trail", "route", "track"],
        correctAnswer: "path"
    },
    {
        id: 1193,
        question: "感謝する，ありがたがる",
        choices: ["appreciate", "thank", "acknowledge", "value"],
        correctAnswer: "appreciate"
    },
    {
        id: 1194,
        question: "裂け目，ひび",
        choices: ["crack", "fracture", "gap", "split"],
        correctAnswer: "crack"
    },
    {
        id: 1195,
        question: "ためらう，躊躇する",
        choices: ["hesitate", "pause", "waver", "delay"],
        correctAnswer: "hesitate"
    },
    {
        id: 1196,
        question: "反対の，逆の",
        choices: ["contrary", "opposite", "reverse", "counter"],
        correctAnswer: "contrary"
    },
    {
        id: 1197,
        question: "依存している，依存状態",
        choices: ["depending", "relying", "counting on", "trusting"],
        correctAnswer: "depending"
    },
    {
        id: 1198,
        question: "家族，世帯",
        choices: ["household", "family", "home", "residence"],
        correctAnswer: "household"
    },
    {
        id: 1199,
        question: "笑い，笑顔",
        choices: ["laughter", "giggle", "chuckle", "smile"],
        correctAnswer: "laughter"
    },
    {
        id: 1200,
        question: "十代，少年期",
        choices: ["teenager", "adolescent", "youth", "juvenile"],
        correctAnswer: "teenager"
    },
    {
        id: 1201,
        question: "犯罪，罪行",
        choices: ["crime", "offense", "violation", "felony"],
        correctAnswer: "crime"
    },
    {
        id: 1202,
        question: "怖がらせる，恐れさせる",
        choices: ["frighten", "scare", "intimidate", "terrify"],
        correctAnswer: "frighten"
    },
    {
        id: 1203,
        question: "四半期，四分期",
        choices: ["quarter", "trimester", "segment", "division"],
        correctAnswer: "quarter"
    },
    {
        id: 1204,
        question: "抵当，担保",
        choices: ["mortgage", "loan", "debt", "collateral"],
        correctAnswer: "mortgage"
    },
    {
        id: 1205,
        question: "を指し示す",
        choices: ["indicate", "point out", "show", "denote"],
        correctAnswer: "indicate"
    },
    {
        id: 1206,
        question: "打撃，衝撃",
        choices: ["stroke", "blow", "hit", "impact"],
        correctAnswer: "stroke"
    },
    {
        id: 1207,
        question: "不足，欠乏",
        choices: ["shortage", "deficiency", "lack", "scarcity"],
        correctAnswer: "shortage"
    },
    {
        id: 1208,
        question: "探索する，調査する",
        choices: ["explore", "investigate", "search", "examine"],
        correctAnswer: "explore"
    },
    {
        id: 1209,
        question: "財産，所有物",
        choices: ["property", "asset", "estate", "possession"],
        correctAnswer: "property"
    },
    {
        id: 1210,
        question: "凍る，氷結",
        choices: ["freeze", "solidify", "chill", "frost"],
        correctAnswer: "freeze"
    },
    {
        id: 1211,
        question: "綿密に，詳細に",
        choices: ["closely", "carefully", "thoroughly", "meticulously"],
        correctAnswer: "closely"
    },
    {
        id: 1212,
        question: "冒険的事業，投機的事業",
        choices: ["venture", "enterprise", "risk", "expedition"],
        correctAnswer: "venture"
    },
    {
        id: 1213,
        question: "かなり，相当に",
        choices: ["pretty", "fairly", "considerably", "moderately"],
        correctAnswer: "pretty"
    },
    {
        id: 1214,
        question: "銀行口座",
        choices: ["account", "bank account", "deposit", "fund"],
        correctAnswer: "account"
    },
    {
        id: 1215,
        question: "内部の，内側の",
        choices: ["internal", "inside", "inward", "domestic"],
        correctAnswer: "internal"
    },
    {
        id: 1216,
        question: "端，縁",
        choices: ["edge", "border", "boundary", "rim"],
        correctAnswer: "edge"
    },
    {
        id: 1217,
        question: "環境の，自然環境の",
        choices: ["environmental", "ecological", "green", "sustainable"],
        correctAnswer: "environmental"
    },
    {
        id: 1218,
        question: "たくさん，多く",
        choices: ["plenty", "abundance", "wealth", "large amount"],
        correctAnswer: "plenty"
    },
    {
        id: 1219,
        question: "修正，改訂",
        choices: ["amendment", "revision", "modification", "correction"],
        correctAnswer: "amendment"
    },
    {
        id: 1220,
        question: "繊維，糸",
        choices: ["fiber", "thread", "strand", "filament"],
        correctAnswer: "fiber"
    },
    {
        id: 1221,
        question: "いくぶん，いくらか",
        choices: ["somewhat", "slightly", "moderately", "partially"],
        correctAnswer: "somewhat"
    },
    {
        id: 1222,
        question: "制限，限定",
        choices: ["restriction", "limitation", "constraint", "regulation"],
        correctAnswer: "restriction"
    },
];

export default questions2;