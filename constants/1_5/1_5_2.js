const questions2 = [
    {
       id: 1,
        question: "置き換えられる，代わりのある",
        choices: ["replaceable", "irreversible", "interchangeable", "alternative"],
        correctAnswer: "replaceable"
    },
    {
       id: 2,
        question: "火花，きらめき",
        choices: ["flame", "spark", "glow", "shine"],
        correctAnswer: "spark"
    },
    {
       id: 3,
        question: "同情，あわれみ",
        choices: ["mercy", "compassion", "pity", "empathy"],
        correctAnswer: "pity"
    },
    {
       id: 4,
        question: "厳密に，厳しく",
        choices: ["loosely", "roughly", "strictly", "gently"],
        correctAnswer: "strictly"
    },
    {
       id: 5,
        question: "明るく，輝いて",
        choices: ["dimly", "brightly", "dully", "softly"],
        correctAnswer: "brightly"
    },
    {
       id: 6,
        question: "しがみつく，頑張る",
        choices: ["let go", "give up", "hang on", "fall off"],
        correctAnswer: "hang on"
    },
    {
       id: 7,
        question: "を尊敬する",
        choices: ["look down on", "look up to", "disregard", "ignore"],
        correctAnswer: "look up to"
    },
    {
       id: 8,
        question: "思いやりのある，共感的な",
        choices: ["rude", "harsh", "sympathetic", "indifferent"],
        correctAnswer: "sympathetic"
    },
    {
       id: 9,
        question: "最終的に～することになる",
        choices: ["give up", "end up", "turn out", "quit"],
        correctAnswer: "end up"
    },
    {
       id: 10,
        question: "煙突",
        choices: ["chimney", "furnace", "vent", "pipe"],
        correctAnswer: "chimney"
    },
    {
       id: 11,
        question: "気性，かんしゃく",
        choices: ["patience", "temper", "mood", "character"],
        correctAnswer: "temper"
    },
    {
       id: 12,
        question: "口論，口げんか",
        choices: ["discussion", "argument", "quarrel", "debate"],
        correctAnswer: "quarrel"
    },
    {
       id: 13,
        question: "吠える/木の皮",
        choices: ["meow", "roar", "bark", "howl"],
        correctAnswer: "bark"
    },
    {
       id: 14,
        question: "忠誠，誠実",
        choices: ["betrayal", "disloyalty", "faithfulness", "loyalty"],
        correctAnswer: "loyalty"
    },
    {
       id: 15,
        question: "意図，目的",
        choices: ["goal", "intent", "chance", "accident"],
        correctAnswer: "intent"
    },
    {
       id: 16,
        question: "最近，近ごろ",
        choices: ["formerly", "lately", "anciently", "previously"],
        correctAnswer: "lately"
    },
    {
       id: 17,
        question: "に侵入する，を侵略する",
        choices: ["invade", "evade", "rescue", "defend"],
        correctAnswer: "invade"
    },
    {
       id: 18,
        question: "優しい/世話人",
        choices: ["rude", "tender", "harsh", "cruel"],
        correctAnswer: "tender"
    },
    {
       id: 19,
        question: "綿密に計画する，詳細に計画する，地図に精密に示す",
        choices: ["skip", "map out", "forget", "rush"],
        correctAnswer: "map out"
    },
    {
       id: 20,
        question: "自発的な，任意の",
        choices: ["spontaneous", "forced", "reluctant", "compelled"],
        correctAnswer: "spontaneous"
    },
    {
       id: 21,
        question: "を許す，大目に見る",
        choices: ["forgive", "blame", "punish", "accuse"],
        correctAnswer: "forgive"
    },
    {
       id: 22,
        question: "対照的に，これに対して",
        choices: ["similarly", "in contrast", "likewise", "equally"],
        correctAnswer: "in contrast"
    },
    {
       id: 23,
        question: "名声，高名",
        choices: ["fortune", "fame", "honor", "popularity"],
        correctAnswer: "fame"
    },
    {
       id: 24,
        question: "控えめな，謙虚な",
        choices: ["arrogant", "modest", "boastful", "proud"],
        correctAnswer: "modest"
    },
    {
       id: 25,
        question: "親指",
        choices: ["finger", "thumb", "palm", "knuckle"],
        correctAnswer: "thumb"
    },
    {
       id: 26,
        question: "強盗，強盗罪",
        choices: ["burglar", "thief", "robber", "murderer"],
        correctAnswer: "robber"
    },
    {
       id: 27,
        question: "ひどく，ものすごく",
        choices: ["slightly", "terribly", "gently", "mildly"],
        correctAnswer: "terribly"
    },
    {
       id: 28,
        question: "引き出し",
        choices: ["cabinet", "drawer", "closet", "shelf"],
        correctAnswer: "drawer"
    },
    {
       id: 29,
        question: "非公式な，略式の",
        choices: ["official", "informal", "strict", "formal"],
        correctAnswer: "informal"
    },
    {
       id: 30,
        question: "決定的な，結論的な",
        choices: ["inconclusive", "uncertain", "conclusive", "tentative"],
        correctAnswer: "conclusive"
    },
    {
       id: 31,
        question: "肥料，化学肥料",
        choices: ["fertilizer", "pesticide", "herbicide", "compost"],
        correctAnswer: "fertilizer"
    },
    {
       id: 32,
        question: "全体論の，総体的な",
        choices: ["individual", "specific", "holistic", "narrow"],
        correctAnswer: "holistic"
    },
    {
       id: 33,
        question: "心から，真心こめて",
        choices: ["sincerely", "artificially", "insincerely", "falsely"],
        correctAnswer: "sincerely"
    },
    {
       id: 34,
        question: "同情，共感",
        choices: ["sympathy", "apathy", "hatred", "criticism"],
        correctAnswer: "sympathy"
    },
    {
       id: 35,
        question: "軽くたたく，軽く打つ",
        choices: ["hit", "smash", "pat", "punch"],
        correctAnswer: "pat"
    },
    {
       id: 36,
        question: "～するために",
        choices: ["as if", "even though", "in order to", "despite"],
        correctAnswer: "in order to"
    },
    {
       id: 37,
        question: "開拓者，先駆者",
        choices: ["pioneer", "follower", "novice", "amateur"],
        correctAnswer: "pioneer"
    },
    {
       id: 38,
        question: "を直す，修繕する",
        choices: ["mend", "break", "damage", "ruin"],
        correctAnswer: "mend"
    },
    {
       id: 39,
        question: "汚染，汚れ，汚染物",
        choices: ["cleanliness", "pollution", "purity", "hygiene"],
        correctAnswer: "pollution"
    },
    {
       id: 40,
        question: "しっかりと，きつく",
        choices: ["loosely", "tightly", "gently", "softly"],
        correctAnswer: "tightly"
    },
    {
       id: 41,
        question: "残酷な，無慈悲な",
        choices: ["kind", "gentle", "cruel", "merciful"],
        correctAnswer: "cruel"
    },
    {
       id: 42,
        question: "酸素",
        choices: ["oxygen", "carbon", "hydrogen", "nitrogen"],
        correctAnswer: "oxygen"
    },
    {
       id: 43,
        question: "病気などにかかる，罹患する",
        choices: ["come down with", "recover from", "get over", "avoid"],
        correctAnswer: "come down with"
    },
    {
       id: 44,
        question: "拍手，賞賛",
        choices: ["booing", "applause", "whisper", "shout"],
        correctAnswer: "applause"
    },
    {
       id: 45,
        question: "見物人，観客",
        choices: ["spectator", "actor", "performer", "participant"],
        correctAnswer: "spectator"
    },
    {
       id: 46,
        question: "する余裕がある",
        choices: ["afford to", "fail to", "miss out on", "lack"],
        correctAnswer: "afford to"
    },
    {
       id: 47,
        question: "奴隷",
        choices: ["slave", "master", "ruler", "owner"],
        correctAnswer: "slave"
    },
    {
       id: 48,
        question: "借金，負債",
        choices: ["savings", "debt", "profit", "income"],
        correctAnswer: "debt"
    },
    {
       id: 49,
        question: "人に慣れた/飼いならす",
        choices: ["wild", "tame", "ferocious", "untamed"],
        correctAnswer: "tame"
    },
    {
       id: 50,
        question: "白紙の，空白の",
        choices: ["filled", "colored", "blank", "marked"],
        correctAnswer: "blank"
    },
    {
       id: 51,
        question: "全体の，総体的な",
        choices: ["gross", "partial", "small", "limited"],
        correctAnswer: "gross"
    },
    {
       id: 52,
        question: "合間に，その間に",
        choices: ["meantime", "beforehand", "afterward", "suddenly"],
        correctAnswer: "meantime"
    },
    {
       id: 53,
        question: "非実用的な，実行不可能な",
        choices: ["practical", "impractical", "useful", "efficient"],
        correctAnswer: "impractical"
    },
    {
       id: 54,
        question: "たくましい，頑強な",
        choices: ["weak", "fragile", "sturdy", "delicate"],
        correctAnswer: "sturdy"
    },
    {
       id: 55,
        question: "を告白する，白状する",
        choices: ["confess", "hide", "deny", "ignore"],
        correctAnswer: "confess"
    },
    {
       id: 56,
        question: "沈黙，静けさ",
        choices: ["noise", "silence", "chaos", "whisper"],
        correctAnswer: "silence"
    },
    {
       id: 57,
        question: "信じられない，信じがたい",
        choices: ["credible", "incredible", "realistic", "plausible"],
        correctAnswer: "incredible"
    },
    {
       id: 58,
        question: "不快な，不愉快な",
        choices: ["pleasant", "nasty", "delightful", "friendly"],
        correctAnswer: "nasty"
    },
    {
       id: 59,
        question: "封筒",
        choices: ["box", "case", "envelope", "folder"],
        correctAnswer: "envelope"
    },
    {
       id: 60,
        question: "醜い，見苦しい",
        choices: ["beautiful", "ugly", "handsome", "pretty"],
        correctAnswer: "ugly"
    },
    {
       id: 61,
        question: "を廃止する，除く",
        choices: ["establish", "do away with", "create", "build"],
        correctAnswer: "do away with"
    },
    {
       id: 62,
        question: "恐ろしい",
        choices: ["horrible", "wonderful", "pleasant", "enjoyable"],
        correctAnswer: "horrible"
    },
    {
       id: 63,
        question: "飛び込む，急上昇",
        choices: ["crawl", "leap in", "walk in", "step in"],
        correctAnswer: "leap in"
    },
    {
       id: 64,
        question: "せっけん",
        choices: ["shampoo", "soap", "lotion", "conditioner"],
        correctAnswer: "soap"
    },
    {
       id: 65,
        question: "悪意，恨み",
        choices: ["kindness", "spite", "forgiveness", "mercy"],
        correctAnswer: "spite"
    },
    {
       id: 66,
        question: "応接，歓迎",
        choices: ["rejection", "farewell", "reception", "departure"],
        correctAnswer: "reception"
    },
    {
       id: 67,
        question: "気高い，高貴な",
        choices: ["noble", "humble", "ordinary", "lowly"],
        correctAnswer: "noble"
    },
    {
       id: 68,
        question: "容量，容積",
        choices: ["weight", "capacity", "length", "height"],
        correctAnswer: "capacity"
    },
    {
       id: 69,
        question: "を混ぜ合わせる，を混ぜる",
        choices: ["separate", "blend", "divide", "isolate"],
        correctAnswer: "blend"
    },
    {
       id: 70,
        question: "押し込む，詰め込む",
        choices: ["tuck in", "pull out", "spread out", "drag out"],
        correctAnswer: "tuck in"
    },
    {
       id: 71,
        question: "宗教上の，信仰の",
        choices: ["secular", "religious", "worldly", "scientific"],
        correctAnswer: "religious"
    },
    {
       id: 72,
        question: "洗濯物，クリーニング店",
        choices: ["laundry", "dishware", "wardrobe", "cleaner"],
        correctAnswer: "laundry"
    },
    {
       id: 73,
        question: "間隔，合い間",
        choices: ["interval", "constant", "duration", "end"],
        correctAnswer: "interval"
    },
    {
       id: 74,
        question: "から奪う，強奪する",
        choices: ["rob", "give", "return", "lend"],
        correctAnswer: "rob"
    },
    {
       id: 75,
        question: "広大な，莫大な",
        choices: ["tiny", "narrow", "vast", "limited"],
        correctAnswer: "vast"
    },
    {
       id: 76,
        question: "荷物，手荷物",
        choices: ["luggage", "cargo", "freight", "baggage"],
        correctAnswer: "luggage"
    },
    {
       id: 77,
        question: "悲しみ，深い悲しみ",
        choices: ["happiness", "grief", "joy", "relief"],
        correctAnswer: "grief"
    },
    {
       id: 78,
        question: "やかん，湯沸かし",
        choices: ["pot", "pan", "kettle", "cup"],
        correctAnswer: "kettle"
    },
    {
       id: 79,
        question: "群れ，集団",
        choices: ["individual", "flock", "single", "person"],
        correctAnswer: "flock"
    },
    {
       id: 80,
        question: "に夢中になる，騙される，引きつけられる",
        choices: ["fall for", "run away from", "stay away from", "ignore"],
        correctAnswer: "fall for"
    },
    {
       id: 81,
        question: "するように意図する",
        choices: ["decide to", "intend to", "hesitate to", "forget to"],
        correctAnswer: "intend to"
    },
    {
       id: 82,
        question: "冒険",
        choices: ["adventure", "journey", "trip", "voyage"],
        correctAnswer: "adventure"
    },
    {
       id: 83,
        question: "荷車，荷馬車",
        choices: ["wagon", "cart", "trolley", "sleigh"],
        correctAnswer: "cart"
    },
    {
       id: 84,
        question: "地震",
        choices: ["hurricane", "earthquake", "tsunami", "tornado"],
        correctAnswer: "earthquake"
    },
    {
       id: 85,
        question: "優雅さ，洗練",
        choices: ["grace", "rudeness", "clumsiness", "awkwardness"],
        correctAnswer: "grace"
    },
    {
       id: 86,
        question: "貝殻，貝",
        choices: ["shell", "rock", "bone", "scales"],
        correctAnswer: "shell"
    },
    {
       id: 87,
        question: "織物を織る",
        choices: ["sew", "weave", "knit", "embroider"],
        correctAnswer: "weave"
    },
    {
       id: 88,
        question: "自慢する，誇示する",
        choices: ["humble", "boast", "praise", "criticize"],
        correctAnswer: "boast"
    },
    {
       id: 89,
        question: "を取り壊す，打ち倒す",
        choices: ["build up", "knock down", "set up", "put together"],
        correctAnswer: "knock down"
    },
    {
       id: 90,
        question: "包帯，絆創膏，ガーゼ",
        choices: ["bandage", "scarf", "wrap", "tape"],
        correctAnswer: "bandage"
    },
    {
       id: 91,
        question: "その後",
        choices: ["before", "afterward", "meanwhile", "suddenly"],
        correctAnswer: "afterward"
    },
    {
       id: 92,
        question: "に教える，知らせる",
        choices: ["learn", "instruct", "listen", "ignore"],
        correctAnswer: "instruct"
    },
    {
       id: 93,
        question: "飢える，餓死する",
        choices: ["starve", "feast", "snack", "eat"],
        correctAnswer: "starve"
    },
    {
       id: 94,
        question: "地平線，水平線",
        choices: ["horizon", "coast", "border", "boundary"],
        correctAnswer: "horizon"
    },
    {
       id: 95,
        question: "を逮捕する，検挙する",
        choices: ["release", "arrest", "escape", "free"],
        correctAnswer: "arrest"
    },
    {
       id: 96,
        question: "を解雇する，首にする",
        choices: ["hire", "lay off", "recruit", "promote"],
        correctAnswer: "lay off"
    },
    {
       id: 97,
        question: "著名な，名声のある",
        choices: ["unknown", "prestigious", "ordinary", "common"],
        correctAnswer: "prestigious"
    },
    {
       id: 98,
        question: "地理，地理学",
        choices: ["geology", "geography", "astronomy", "meteorology"],
        correctAnswer: "geography"
    },
    {
       id: 99,
        question: "につき，ごとに",
        choices: ["per", "each", "all", "every"],
        correctAnswer: "per"
    },
    {
       id: 100,
        question: "額面通り，表面通りの価値で",
        choices: ["at face value", "deeply", "seriously", "carefully"],
        correctAnswer: "at face value"
    },
    {
       id: 101,
        question: "あばれる，騒ぐ",
        choices: ["calm down", "act up", "stay quiet", "sit still"],
        correctAnswer: "act up"
    },
    {
       id: 102,
        question: "乞食，物乞い",
        choices: ["beggar", "rich person", "merchant", "seller"],
        correctAnswer: "beggar"
    },
    {
       id: 103,
        question: "暖かさ，温もり",
        choices: ["coldness", "warmth", "coolness", "chill"],
        correctAnswer: "warmth"
    },
    {
       id: 104,
        question: "固定させる，安定させる",
        choices: ["destabilize", "stabilize", "shake", "disturb"],
        correctAnswer: "stabilize"
    },
    {
       id: 105,
        question: "牧草地，草原",
        choices: ["desert", "meadow", "forest", "jungle"],
        correctAnswer: "meadow"
    },
    {
       id: 106,
        question: "水で薄める，和らげる",
        choices: ["water down", "strengthen", "concentrate", "intensify"],
        correctAnswer: "water down"
    },
    {
       id: 107,
        question: "噴水，泉",
        choices: ["fountain", "lake", "river", "pond"],
        correctAnswer: "fountain"
    },
    {
       id: 108,
        question: "段階的に廃止する，撤去する",
        choices: ["phase in", "phase out", "install", "establish"],
        correctAnswer: "phase out"
    },
    {
       id: 109,
        question: "薄い，痩せた",
        choices: ["thin", "thick", "fat", "wide"],
        correctAnswer: "thin"
    },
    {
       id: 110,
        question: "交換，置き換わり",
        choices: ["replacement", "original", "prototype", "default"],
        correctAnswer: "replacement"
    },
    {
       id: 111,
        question: "かご，おり",
        choices: ["cage", "box", "crate", "case"],
        correctAnswer: "cage"
    },
    {
       id: 112,
        question: "のそばを通る，通り抜ける",
        choices: ["get past", "stay behind", "stop at", "walk into"],
        correctAnswer: "get past"
    },
    {
       id: 113,
        question: "さらに，さらには",
        choices: ["on the contrary", "what is more", "nevertheless", "however"],
        correctAnswer: "what is more"
    },
    {
       id: 114,
        question: "招待，案内",
        choices: ["invitation", "refusal", "rejection", "denial"],
        correctAnswer: "invitation"
    },
    {
       id: 115,
        question: "容器，入れ物",
        choices: ["bottle", "container", "box", "case"],
        correctAnswer: "container"
    },
    {
       id: 116,
        question: "うらやましい，嫉妬している",
        choices: ["jealous", "proud", "content", "satisfied"],
        correctAnswer: "jealous"
    },
    {
       id: 117,
        question: "大理石，大理石模様",
        choices: ["granite", "marble", "brick", "cement"],
        correctAnswer: "marble"
    },
    {
       id: 118,
        question: "家庭教師，個別指導者",
        choices: ["teacher", "tutor", "professor", "lecturer"],
        correctAnswer: "tutor"
    },
    {
       id: 119,
        question: "を結合させる，団結する",
        choices: ["separate", "unite", "divide", "isolate"],
        correctAnswer: "unite"
    },
    {
       id: 120,
        question: "実質上，実際には，事実上",
        choices: ["in theory", "in substance", "formally", "hypothetically"],
        correctAnswer: "in substance"
    },
    {
       id: 121,
        question: "くし",
        choices: ["brush", "comb", "clip", "scissors"],
        correctAnswer: "comb"
    },
    {
       id: 122,
        question: "創作，作り話",
        choices: ["reality", "fiction", "truth", "fact"],
        correctAnswer: "fiction"
    },
    {
       id: 123,
        question: "赤字で，赤字経営で",
        choices: ["in debt", "in the red", "profitable", "breaking even"],
        correctAnswer: "in the red"
    },
    {
       id: 124,
        question: "率直な，隠さない",
        choices: ["reserved", "frank", "shy", "indirect"],
        correctAnswer: "frank"
    },
    {
       id: 125,
        question: "光景，ありさま",
        choices: ["view", "scene", "spectacle", "landscape"],
        correctAnswer: "spectacle"
    },
    {
       id: 126,
        question: "したがる，熱意を持って",
        choices: ["reluctant to", "eager to", "hesitant to", "unwilling to"],
        correctAnswer: "eager to"
    },
    {
       id: 127,
        question: "に光を放つ，当てる",
        choices: ["shed light on", "keep in the dark", "hide", "obscure"],
        correctAnswer: "shed light on"
    },
    {
       id: 128,
        question: "熱狂的な，熱烈な",
        choices: ["fanatical", "apathetic", "indifferent", "neutral"],
        correctAnswer: "fanatical"
    },
    {
       id: 129,
        question: "接着剤",
        choices: ["glue", "tape", "stapler", "pin"],
        correctAnswer: "glue"
    },
    {
       id: 130,
        question: "勇敢な",
        choices: ["bold", "timid", "cowardly", "shy"],
        correctAnswer: "bold"
    },
    {
       id: 131,
        question: "最後に，ついに",
        choices: ["initially", "ultimately", "temporarily", "briefly"],
        correctAnswer: "ultimately"
    },
    {
       id: 132,
        question: "裏庭",
        choices: ["front yard", "backyard", "garden", "park"],
        correctAnswer: "backyard"
    },
    {
       id: 133,
        question: "あぶり焼き，直火で焼くことにする",
        choices: ["boil", "roast", "steam", "fry"],
        correctAnswer: "roast"
    },
    {
       id: 134,
        question: "きちんとした，整った",
        choices: ["messy", "neat", "untidy", "disorganized"],
        correctAnswer: "neat"
    },
    {
       id: 135,
        question: "に泊まる，宿泊する",
        choices: ["put up at", "check out from", "move out of", "leave"],
        correctAnswer: "put up at"
    },
    {
       id: 136,
        question: "先例を作る，前例を作る",
        choices: ["set a precedent", "break a rule", "ignore a tradition", "disregard history"],
        correctAnswer: "set a precedent"
    },
    {
       id: 137,
        question: "閃光",
        choices: ["flash", "gloom", "shadow", "darkness"],
        correctAnswer: "flash"
    },
    {
       id: 138,
        question: "臓器，器官",
        choices: ["limb", "organ", "bone", "muscle"],
        correctAnswer: "organ"
    },
    {
       id: 139,
        question: "王国",
        choices: ["kingdom", "democracy", "republic", "colony"],
        correctAnswer: "kingdom"
    },
    {
       id: 140,
        question: "目立った，顕著な",
        choices: ["outstanding", "ordinary", "average", "unremarkable"],
        correctAnswer: "outstanding"
    },
    {
       id: 141,
        question: "起き上がる，起床する",
        choices: ["sleep in", "rise and shine", "stay up", "lie down"],
        correctAnswer: "rise and shine"
    },
    {
       id: 142,
        question: "漠然とした，はっきりしない",
        choices: ["clear", "specific", "vague", "precise"],
        correctAnswer: "vague"
    },
    {
       id: 143,
        question: "涙が出る，泣き出す",
        choices: ["hold back tears", "break into tears", "laugh out loud", "stay calm"],
        correctAnswer: "break into tears"
    },
    {
       id: 144,
        question: "足首",
        choices: ["ankle", "wrist", "knee", "elbow"],
        correctAnswer: "ankle"
    },
    {
       id: 145,
        question: "代わりに，それよりも",
        choices: ["instead", "as well", "therefore", "meanwhile"],
        correctAnswer: "instead"
    },
    {
       id: 146,
        question: "印象的な，目立つ",
        choices: ["ordinary", "subtle", "striking", "dull"],
        correctAnswer: "striking"
    },
    {
       id: 147,
        question: "厳しい，過酷な",
        choices: ["gentle", "harsh", "kind", "soft"],
        correctAnswer: "harsh"
    },
    {
       id: 148,
        question: "わざと壊す，故意に破壊する",
        choices: ["construct", "restore", "vandalize", "repair"],
        correctAnswer: "vandalize"
    },
    {
       id: 149,
        question: "本質，真髄",
        choices: ["surface", "essence", "detail", "triviality"],
        correctAnswer: "essence"
    },
    {
       id: 150,
        question: "車を止める，車を停止させる",
        choices: ["speed up", "pull over", "turn around", "drive away"],
        correctAnswer: "pull over"
    },
    {
       id: 151,
        question: "落ち着いて，静かに",
        choices: ["nervously", "calmly", "wildly", "angrily"],
        correctAnswer: "calmly"
    },
    {
       id: 152,
        question: "運よく，幸いにも",
        choices: ["unluckily", "fortunately", "unfortunately", "sadly"],
        correctAnswer: "fortunately"
    },
    {
       id: 153,
        question: "田舎，地方",
        choices: ["city", "countryside", "suburb", "town"],
        correctAnswer: "countryside"
    },
    {
       id: 154,
        question: "見えなくなる，消える",
        choices: ["appear", "vanish", "stay", "emerge"],
        correctAnswer: "vanish"
    },
    {
       id: 155,
        question: "に似ている，と同種である",
        choices: ["be different from", "be akin to", "contrast with", "oppose"],
        correctAnswer: "be akin to"
    },
    {
       id: 156,
        question: "原子，微小分子",
        choices: ["molecule", "atom", "compound", "cell"],
        correctAnswer: "atom"
    },
    {
       id: 157,
        question: "激怒，憤慨",
        choices: ["calmness", "rage", "joy", "happiness"],
        correctAnswer: "rage"
    },
    {
       id: 158,
        question: "誠実な，真剣な",
        choices: ["insincere", "sincere", "fake", "dishonest"],
        correctAnswer: "sincere"
    },
    {
       id: 159,
        question: "年上の，年長の",
        choices: ["elder", "younger", "junior", "minor"],
        correctAnswer: "elder"
    },
    {
       id: 160,
        question: "大会，会議",
        choices: ["meeting", "convention", "class", "session"],
        correctAnswer: "convention"
    },
    {
       id: 161,
        question: "緊急の，急を要する",
        choices: ["urgent", "relaxed", "optional", "slow"],
        correctAnswer: "urgent"
    },
    {
       id: 162,
        question: "手荒く扱う，かき乱す",
        choices: ["treat gently", "rough up", "calm down", "soothe"],
        correctAnswer: "rough up"
    },
    {
       id: 163,
        question: "栄光をたたえる，賛美する",
        choices: ["glorify", "criticize", "ignore", "disregard"],
        correctAnswer: "glorify"
    },
    {
       id: 164,
        question: "階段",
        choices: ["elevator", "stair", "escalator", "ladder"],
        correctAnswer: "stair"
    },
    {
       id: 165,
        question: "地図帳",
        choices: ["atlas", "novel", "dictionary", "encyclopedia"],
        correctAnswer: "atlas"
    },
    {
       id: 166,
        question: "発明",
        choices: ["discovery", "invention", "copy", "tradition"],
        correctAnswer: "invention"
    },
    {
       id: 167,
        question: "と矛盾する，と不一致である",
        choices: ["be congruous with", "be incongruous with", "align with", "match with"],
        correctAnswer: "be incongruous with"
    },
    {
       id: 168,
        question: "うれしい，喜んだ",
        choices: ["delighted", "sad", "angry", "disappointed"],
        correctAnswer: "delighted"
    },
    {
       id: 169,
        question: "行方不明になる，堕落する",
        choices: ["stay on track", "go astray", "follow", "return"],
        correctAnswer: "go astray"
    },
    {
       id: 170,
        question: "を巻き付ける，包む",
        choices: ["unwrap", "wrap", "open", "expose"],
        correctAnswer: "wrap"
    },
    {
       id: 171,
        question: "浅い",
        choices: ["deep", "shallow", "narrow", "wide"],
        correctAnswer: "shallow"
    },
    {
       id: 172,
        question: "茂み，低木",
        choices: ["tree", "bush", "flower", "grass"],
        correctAnswer: "bush"
    },
    {
       id: 173,
        question: "硬い",
        choices: ["soft", "stiff", "flexible", "loose"],
        correctAnswer: "stiff"
    },
    {
       id: 174,
        question: "はっきり分かる，認める",
        choices: ["ignore", "discern", "overlook", "neglect"],
        correctAnswer: "discern"
    },
    {
       id: 175,
        question: "隔離，分離",
        choices: ["separation", "seclusion", "integration", "gathering"],
        correctAnswer: "seclusion"
    },
    {
       id: 176,
        question: "排出，放電/荷を降ろす",
        choices: ["absorption", "discharge", "retention", "containment"],
        correctAnswer: "discharge"
    },
    {
       id: 177,
        question: "前進，進歩",
        choices: ["regression", "progression", "stagnation", "delay"],
        correctAnswer: "progression"
    },
    {
       id: 178,
        question: "小麦",
        choices: ["barley", "wheat", "corn", "rice"],
        correctAnswer: "wheat"
    },
    {
       id: 179,
        question: "疲れた，疲弊した",
        choices: ["energetic", "weary", "rested", "lively"],
        correctAnswer: "weary"
    },
    {
       id: 180,
        question: "財布，ハンドバッグ",
        choices: ["wallet", "purse", "bag", "briefcase"],
        correctAnswer: "purse"
    },
    {
       id: 181,
        question: "非難する，咎める",
        choices: ["praise", "blame", "ignore", "approve"],
        correctAnswer: "blame"
    },
    {
       id: 182,
        question: "雇用，採用",
        choices: ["unemployment", "employment", "firing", "resignation"],
        correctAnswer: "employment"
    },
    {
       id: 183,
        question: "結果として～になる",
        choices: ["result in", "lead to", "cause", "follow"],
        correctAnswer: "result in"
    },
    {
       id: 184,
        question: "運賃，料金",
        choices: ["fee", "fare", "cost", "price"],
        correctAnswer: "fare"
    },
    {
       id: 185,
        question: "会場，場所",
        choices: ["stadium", "venue", "field", "gym"],
        correctAnswer: "venue"
    },
    {
       id: 186,
        question: "考古学の，古典的な",
        choices: ["modern", "archaeological", "futuristic", "contemporary"],
        correctAnswer: "archaeological"
    },
    {
       id: 187,
        question: "障害，障害物",
        choices: ["path", "stumbling block", "gateway", "shortcut"],
        correctAnswer: "stumbling block"
    },
    {
       id: 188,
        question: "冷たさ，寒気",
        choices: ["heat", "chill", "warmth", "humidity"],
        correctAnswer: "chill"
    },
    {
       id: 189,
        question: "を配布する，分配する",
        choices: ["collect", "distribute", "withhold", "store"],
        correctAnswer: "distribute"
    },
    {
       id: 190,
        question: "そよ風，微風",
        choices: ["gale", "breeze", "storm", "hurricane"],
        correctAnswer: "breeze"
    },
    {
       id: 191,
        question: "小包，包み",
        choices: ["letter", "parcel", "envelope", "postcard"],
        correctAnswer: "parcel"
    },
    {
       id: 192,
        question: "縫合する，縫い合わせる",
        choices: ["tear apart", "sew up", "cut", "rip"],
        correctAnswer: "sew up"
    },
    {
       id: 193,
        question: "添える，支える",
        choices: ["knock down", "prop up", "push away", "collapse"],
        correctAnswer: "prop up"
    },
    {
       id: 194,
        question: "に頼る，信じる",
        choices: ["fall back on", "let go of", "ignore", "move away from"],
        correctAnswer: "fall back on"
    },
    {
       id: 195,
        question: "雑草，草取り",
        choices: ["weed", "tree", "flower", "bush"],
        correctAnswer: "weed"
    },
    {
       id: 196,
        question: "を祝福する，に授ける",
        choices: ["curse", "bless", "punish", "ignore"],
        correctAnswer: "bless"
    },
    {
       id: 197,
        question: "を専門にする，に特化する",
        choices: ["generalize", "specialize in", "ignore", "neglect"],
        correctAnswer: "specialize in"
    },
    {
       id: 198,
        question: "頭痛",
        choices: ["fever", "headache", "cough", "stomachache"],
        correctAnswer: "headache"
    },
    {
       id: 199,
        question: "羽根，羽毛",
        choices: ["fur", "feather", "wool", "scale"],
        correctAnswer: "feather"
    },
    {
       id: 200,
        question: "電気，電流",
        choices: ["water", "electricity", "gas", "steam"],
        correctAnswer: "electricity"
    },
    {
       id: 201,
        question: "はしご，踏み台",
        choices: ["stairs", "ladder", "escalator", "ramp"],
        correctAnswer: "ladder"
    },
    {
       id: 202,
        question: "冷凍庫",
        choices: ["fridge", "freezer", "cooler", "icebox"],
        correctAnswer: "freezer"
    },
    {
       id: 203,
        question: "夜明け，暁",
        choices: ["dusk", "dawn", "noon", "sunset"],
        correctAnswer: "dawn"
    },
    {
       id: 204,
        question: "細糸，線条",
        choices: ["fiber", "thread", "filament", "wire"],
        correctAnswer: "filament"
    },
    {
       id: 205,
        question: "する傾向がある，しがちである",
        choices: ["be prone to", "be opposed to", "avoid", "ignore"],
        correctAnswer: "be prone to"
    },
    {
       id: 206,
        question: "を傷つける",
        choices: ["heal", "injure", "recover", "comfort"],
        correctAnswer: "injure"
    },
    {
       id: 207,
        question: "で終わる，の羽目になる",
        choices: ["begin with", "end up with", "continue with", "give up on"],
        correctAnswer: "end up with"
    },
    {
       id: 208,
        question: "泣く，涙を流す",
        choices: ["weep", "laugh", "smile", "grin"],
        correctAnswer: "weep"
    },
    {
       id: 209,
        question: "農民，農夫",
        choices: ["merchant", "peasant", "noble", "warrior"],
        correctAnswer: "peasant"
    },
    {
       id: 210,
        question: "荷物，手荷物",
        choices: ["cargo", "baggage", "shipment", "package"],
        correctAnswer: "baggage"
    },
    {
       id: 211,
        question: "故意の，意図的な",
        choices: ["accidental", "deliberate", "unexpected", "random"],
        correctAnswer: "deliberate"
    },
    {
       id: 212,
        question: "別れる",
        choices: ["get together", "break up", "marry", "reunite"],
        correctAnswer: "break up"
    },
    {
       id: 213,
        question: "無限の，果てしない",
        choices: ["endless", "limited", "finite", "measurable"],
        correctAnswer: "endless"
    },
    {
       id: 214,
        question: "悲観的，悲観主義",
        choices: ["optimism", "pessimism", "happiness", "positivity"],
        correctAnswer: "pessimism"
    },
    {
       id: 215,
        question: "を放つ，放出する",
        choices: ["give off", "absorb", "contain", "withhold"],
        correctAnswer: "give off"
    },
    {
       id: 216,
        question: "と戦う，張り合う",
        choices: ["contend with", "surrender to", "avoid", "escape from"],
        correctAnswer: "contend with"
    },
    {
       id: 217,
        question: "退屈させる，うんざりさせる",
        choices: ["entertain", "bore", "excite", "amuse"],
        correctAnswer: "bore"
    },
    {
       id: 218,
        question: "衝動，例",
        choices: ["urge", "instance", "habit", "impulse"],
        correctAnswer: "instance"
    },
    {
       id: 219,
        question: "悪党，悪者",
        choices: ["hero", "villain", "protagonist", "savior"],
        correctAnswer: "villain"
    },
    {
       id: 220,
        question: "しみったれた，欲深い",
        choices: ["generous", "miserly", "kind", "selfless"],
        correctAnswer: "miserly"
    },
    {
       id: 221,
        question: "失望，期待外れ",
        choices: ["delight", "disappointment", "joy", "success"],
        correctAnswer: "disappointment"
    },
    {
       id: 222,
        question: "むく，剥がす",
        choices: ["peel away", "attach", "stick", "glue"],
        correctAnswer: "peel away"
    },
    {
       id: 223,
        question: "攻撃を受けて，批判を受けて",
        choices: ["under fire", "praised", "protected", "safe"],
        correctAnswer: "under fire"
    },
    {
       id: 224,
        question: "複雑な，込み入った",
        choices: ["simple", "complicated", "easy", "clear"],
        correctAnswer: "complicated"
    },
    {
       id: 225,
        question: "もはや～ない",
        choices: ["still", "no longer", "always", "ever"],
        correctAnswer: "no longer"
    },
    {
       id: 226,
        question: "手首，そで口",
        choices: ["ankle", "wrist", "elbow", "knee"],
        correctAnswer: "wrist"
    },
    {
       id: 227,
        question: "を尊重する，尊敬する",
        choices: ["pay regard to", "ignore", "disrespect", "look down on"],
        correctAnswer: "pay regard to"
    },
    {
       id: 228,
        question: "謝罪，言い訳",
        choices: ["apology", "accusation", "excuse", "blame"],
        correctAnswer: "apology"
    },
    {
       id: 229,
        question: "冷蔵庫，冷却装置",
        choices: ["microwave", "refrigerator", "oven", "stove"],
        correctAnswer: "refrigerator"
    },
    {
       id: 230,
        question: "を根気よく続ける，継続する",
        choices: ["give up", "keep at", "quit", "abandon"],
        correctAnswer: "keep at"
    },
    {
       id: 231,
        question: "を吸う，すする",
        choices: ["inhale", "suck", "blow", "breathe"],
        correctAnswer: "suck"
    },
    {
       id: 232,
        question: "繁殖する，子を産む",
        choices: ["breed", "extinct", "reduce", "weaken"],
        correctAnswer: "breed"
    },
    {
       id: 233,
        question: "を断つ，切る",
        choices: ["connect", "cut off", "continue", "extend"],
        correctAnswer: "cut off"
    },
    {
       id: 234,
        question: "どうしても，なんとしても",
        choices: ["reluctantly", "anyhow", "hesitantly", "timidly"],
        correctAnswer: "anyhow"
    },
    {
       id: 235,
        question: "修道院",
        choices: ["monastery", "cathedral", "church", "temple"],
        correctAnswer: "monastery"
    },
    {
       id: 236,
        question: "跳ねる，跳ね返る",
        choices: ["jump", "bound", "fall", "sink"],
        correctAnswer: "bound"
    },
    {
       id: 237,
        question: "選ぶ，選択する",
        choices: ["decide on", "opt for", "reject", "avoid"],
        correctAnswer: "opt for"
    },
    {
       id: 238,
        question: "をひっくり返す",
        choices: ["turn over", "keep steady", "fix", "support"],
        correctAnswer: "turn over"
    },
    {
       id: 239,
        question: "傾向",
        choices: ["habit", "tendency", "routine", "instinct"],
        correctAnswer: "tendency"
    },
    {
       id: 240,
        question: "どうにか切り抜ける，何とか乗り越える",
        choices: ["get by", "give up", "fail", "retreat"],
        correctAnswer: "get by"
    },
    {
       id: 241,
        question: "出発",
        choices: ["arrival", "departure", "delay", "stay"],
        correctAnswer: "departure"
    },
    {
       id: 242,
        question: "に捧げる，ゆだねる",
        choices: ["ignore", "devote", "waste", "neglect"],
        correctAnswer: "devote"
    },
    {
       id: 243,
        question: "授業料，学費",
        choices: ["tuition fee", "salary", "rent", "insurance"],
        correctAnswer: "tuition fee"
    },
    {
       id: 244,
        question: "ひげ，あごひげ",
        choices: ["moustache", "beard", "eyebrow", "sideburns"],
        correctAnswer: "beard"
    },
    {
       id: 245,
        question: "取り除く，引き抜く",
        choices: ["weed out", "add in", "mix up", "gather"],
        correctAnswer: "weed out"
    },
    {
       id: 246,
        question: "親密さ，親交関係",
        choices: ["intimacy", "distance", "separation", "formality"],
        correctAnswer: "intimacy"
    },
    {
       id: 247,
        question: "あざけるように，からかって",
        choices: ["mockingly", "seriously", "kindly", "respectfully"],
        correctAnswer: "mockingly"
    },
    {
       id: 248,
        question: "幸運な，運の良い",
        choices: ["unlucky", "fortunate", "miserable", "hopeless"],
        correctAnswer: "fortunate"
    },
    {
       id: 249,
        question: "不快な，いやな",
        choices: ["pleasant", "offensive", "enjoyable", "acceptable"],
        correctAnswer: "offensive"
    },
    {
       id: 250,
        question: "間の悪い，都合の悪い",
        choices: ["timely", "inopportune", "convenient", "fitting"],
        correctAnswer: "inopportune"
    },
    {
       id: 251,
        question: "に応じて，に反応して",
        choices: ["in opposition to", "in response to", "regardless of", "despite"],
        correctAnswer: "in response to"
    },
    {
       id: 252,
        question: "すくい取る，くみ上げる",
        choices: ["pour", "scoop up", "spill", "drop"],
        correctAnswer: "scoop up"
    },
    {
       id: 253,
        question: "身を引く，後退する",
        choices: ["stand down", "move forward", "persist", "advance"],
        correctAnswer: "stand down"
    },
    {
       id: 254,
        question: "刷り込む，繰り返し言う",
        choices: ["rub in", "wipe off", "take away", "ignore"],
        correctAnswer: "rub in"
    },
    {
       id: 255,
        question: "急勾配の，傾斜の急な",
        choices: ["flat", "steep", "level", "smooth"],
        correctAnswer: "steep"
    },
    {
       id: 256,
        question: "ねじ",
        choices: ["nail", "screw", "bolt", "pin"],
        correctAnswer: "screw"
    },
    {
       id: 257,
        question: "見送る，見届ける",
        choices: ["see out", "ignore", "turn away", "avoid"],
        correctAnswer: "see out"
    },
    {
       id: 258,
        question: "口ひげ",
        choices: ["beard", "moustache", "sideburns", "eyebrows"],
        correctAnswer: "moustache"
    },
    {
       id: 259,
        question: "革命",
        choices: ["evolution", "revolution", "reform", "change"],
        correctAnswer: "revolution"
    },
    {
       id: 260,
        question: "技術的な，科学技術の",
        choices: ["artistic", "technological", "manual", "primitive"],
        correctAnswer: "technological"
    },
    {
       id: 261,
        question: "忠実な，信念の厳格な",
        choices: ["loyal", "disloyal", "dishonest", "unfaithful"],
        correctAnswer: "loyal"
    },
    {
       id: 262,
        question: "崩壊する，ばらばらに壊れる",
        choices: ["fall apart", "stay intact", "hold together", "remain stable"],
        correctAnswer: "fall apart"
    },
    {
       id: 263,
        question: "小麦粉",
        choices: ["grain", "flour", "rice", "corn"],
        correctAnswer: "flour"
    },
    {
       id: 264,
        question: "花瓶，つぼ",
        choices: ["vase", "bottle", "pot", "jug"],
        correctAnswer: "vase"
    },
    {
       id: 265,
        question: "穀物，穀類",
        choices: ["fruit", "grain", "vegetable", "nut"],
        correctAnswer: "grain"
    },
    {
       id: 266,
        question: "を押しつぶす",
        choices: ["crush", "inflate", "expand", "build"],
        correctAnswer: "crush"
    },
    {
       id: 267,
        question: "丸薬，錠剤",
        choices: ["capsule", "pill", "tablet", "dose"],
        correctAnswer: "pill"
    },
    {
       id: 268,
        question: "寺院，こめかみ，側頭",
        choices: ["cathedral", "temple", "shrine", "mosque"],
        correctAnswer: "temple"
    },
    {
       id: 269,
        question: "致命的な，命にかかわる",
        choices: ["harmless", "deadly", "mild", "safe"],
        correctAnswer: "deadly"
    },
    {
       id: 270,
        question: "乱用，悪用",
        choices: ["proper use", "abuse", "care", "respect"],
        correctAnswer: "abuse"
    },
    {
       id: 271,
        question: "目的地，行き先",
        choices: ["journey", "destination", "route", "departure"],
        correctAnswer: "destination"
    },
    {
       id: 272,
        question: "住宅，居住地",
        choices: ["residence", "office", "factory", "warehouse"],
        correctAnswer: "residence"
    },
    {
       id: 273,
        question: "飛び込む，突進する",
        choices: ["plunge into", "step back", "retreat from", "avoid"],
        correctAnswer: "plunge into"
    },
    {
       id: 274,
        question: "困惑，当惑",
        choices: ["confidence", "embarrassment", "pride", "relief"],
        correctAnswer: "embarrassment"
    },
    {
       id: 275,
        question: "耳を傾ける，熱心に聴く",
        choices: ["all ears", "ignore", "turn away", "close off"],
        correctAnswer: "all ears"
    },
    {
       id: 276,
        question: "現実的な，現実に即した",
        choices: ["idealistic", "realistic", "imaginary", "unreal"],
        correctAnswer: "realistic"
    },
    {
       id: 277,
        question: "を受け継ぐ，相続する",
        choices: ["inherit", "donate", "give away", "lose"],
        correctAnswer: "inherit"
    },
    {
       id: 278,
        question: "発売する，船をおろす",
        choices: ["launch", "cancel", "halt", "delay"],
        correctAnswer: "launch"
    },
    {
       id: 279,
        question: "きちんとした，整った",
        choices: ["tidy", "messy", "cluttered", "disorganized"],
        correctAnswer: "tidy"
    },
    {
       id: 280,
        question: "不確実な，確信を持てない",
        choices: ["certain", "uncertain", "definite", "clear"],
        correctAnswer: "uncertain"
    },
    {
       id: 281,
        question: "ほとんどない",
        choices: ["scarcely", "often", "frequently", "always"],
        correctAnswer: "scarcely"
    },
    {
       id: 282,
        question: "しるし，象徴",
        choices: ["symbol", "token", "clue", "hint"],
        correctAnswer: "token"
    },
    {
       id: 283,
        question: "べたつく，ねばねばした",
        choices: ["sticky", "smooth", "dry", "rough"],
        correctAnswer: "sticky"
    },
    {
       id: 284,
        question: "謝罪する，あやまる",
        choices: ["apologize", "blame", "deny", "accuse"],
        correctAnswer: "apologize"
    },
    {
       id: 285,
        question: "途中の，中間の",
        choices: ["halfway", "complete", "initial", "final"],
        correctAnswer: "halfway"
    },
    {
       id: 286,
        question: "を無視する，通り越す",
        choices: ["pass over", "pay attention to", "focus on", "consider"],
        correctAnswer: "pass over"
    },
    {
       id: 287,
        question: "欠伸をする，あくびをする",
        choices: ["yawn", "snore", "sneeze", "cough"],
        correctAnswer: "yawn"
    },
    {
       id: 288,
        question: "翻訳",
        choices: ["translation", "interpretation", "conversation", "original"],
        correctAnswer: "translation"
    },
    {
       id: 289,
        question: "主張する，主意を表す",
        choices: ["deny", "assert", "hesitate", "ignore"],
        correctAnswer: "assert"
    },
    {
       id: 290,
        question: "意識，知覚",
        choices: ["consciousness", "ignorance", "unawareness", "forgetfulness"],
        correctAnswer: "consciousness"
    },
    {
       id: 291,
        question: "周囲，付近",
        choices: ["center", "surrounding", "inside", "focus"],
        correctAnswer: "surrounding"
    },
    {
       id: 292,
        question: "這う，這って進む",
        choices: ["run", "jump", "crawl", "walk"],
        correctAnswer: "crawl"
    },
    {
       id: 293,
        question: "荒野，未開の地",
        choices: ["city", "wilderness", "village", "suburb"],
        correctAnswer: "wilderness"
    },
    {
       id: 294,
        question: "探偵，刑事，捜査官",
        choices: ["detective", "criminal", "witness", "suspect"],
        correctAnswer: "detective"
    },
    {
       id: 295,
        question: "密閉する，封鎖する",
        choices: ["seal", "open", "release", "uncover"],
        correctAnswer: "seal"
    },
    {
       id: 296,
        question: "測定，計測",
        choices: ["measurement", "estimation", "approximation", "calculation"],
        correctAnswer: "measurement"
    },
    {
       id: 297,
        question: "出発する，立ち去る",
        choices: ["depart", "arrive", "return", "stay"],
        correctAnswer: "depart"
    },
    {
       id: 298,
        question: "決定，決断",
        choices: ["hesitation", "determination", "doubt", "uncertainty"],
        correctAnswer: "determination"
    },
    {
       id: 299,
        question: "に怒る，腹を立てる",
        choices: ["ignore", "take offense at", "laugh at", "accept"],
        correctAnswer: "take offense at"
    },
    {
       id: 300,
        question: "説教する，説く",
        choices: ["preach", "whisper", "shout", "ignore"],
        correctAnswer: "preach"
    },
    {
       id: 301,
        question: "風景",
        choices: ["scenery", "portrait", "architecture", "map"],
        correctAnswer: "scenery"
    },
    {
       id: 302,
        question: "効率性，能力，効率の良さ",
        choices: ["efficiency", "waste", "delay", "slowness"],
        correctAnswer: "efficiency"
    },
    {
       id: 303,
        question: "無駄に，役に立たずに",
        choices: ["successfully", "to no avail", "efficiently", "productively"],
        correctAnswer: "to no avail"
    },
    {
       id: 304,
        question: "具体的に，具体化すると",
        choices: ["abstractly", "in the concrete", "vaguely", "broadly"],
        correctAnswer: "in the concrete"
    },
    {
       id: 305,
        question: "競合他社，競争相手",
        choices: ["companion", "competitor", "partner", "assistant"],
        correctAnswer: "competitor"
    },
    {
       id: 306,
        question: "長引く，続きすぎる",
        choices: ["end quickly", "drag on", "conclude", "finish early"],
        correctAnswer: "drag on"
    },
    {
       id: 307,
        question: "慈悲，あわれみ",
        choices: ["cruelty", "mercy", "revenge", "punishment"],
        correctAnswer: "mercy"
    },
    {
       id: 308,
        question: "違う，異なる",
        choices: ["match", "agree", "differ", "resemble"],
        correctAnswer: "differ"
    },
    {
       id: 309,
        question: "侵害する，侵犯する",
        choices: ["protect", "infringe on", "respect", "defend"],
        correctAnswer: "infringe on"
    },
    {
       id: 310,
        question: "以前は，かつて",
        choices: ["formerly", "currently", "recently", "soon"],
        correctAnswer: "formerly"
    },
    {
       id: 311,
        question: "好ましい，有利な",
        choices: ["unfavorable", "neutral", "favorable", "harmful"],
        correctAnswer: "favorable"
    },
    {
       id: 312,
        question: "縫う，繕う",
        choices: ["cut", "tear", "sew", "split"],
        correctAnswer: "sew"
    },
    {
       id: 313,
        question: "に関係する，にふさわしい",
        choices: ["pertain to", "ignore", "neglect", "separate from"],
        correctAnswer: "pertain to"
    },
    {
       id: 314,
        question: "刺す，突く",
        choices: ["sting", "heal", "press", "brush"],
        correctAnswer: "sting"
    },
    {
       id: 315,
        question: "責任がある，のしかかる，横になる",
        choices: ["lie on", "stand against", "give up on", "rise above"],
        correctAnswer: "lie on"
    },
    {
       id: 316,
        question: "調整，調節",
        choices: ["adjustment", "disorder", "confusion", "mistake"],
        correctAnswer: "adjustment"
    },
    {
       id: 317,
        question: "告白，自白",
        choices: ["confession", "denial", "secrecy", "lie"],
        correctAnswer: "confession"
    },
    {
       id: 318,
        question: "芸術的な",
        choices: ["scientific", "artistic", "mechanical", "technical"],
        correctAnswer: "artistic"
    },
    {
       id: 319,
        question: "化学/化学的な",
        choices: ["physics", "chemistry", "biology", "geology"],
        correctAnswer: "chemistry"
    },
    {
       id: 320,
        question: "煮詰める，結局～になる",
        choices: ["boil down to", "expand on", "stretch out", "simplify"],
        correctAnswer: "boil down to"
    },
    {
       id: 321,
        question: "香り，におい",
        choices: ["scent", "stench", "odor", "smoke"],
        correctAnswer: "scent"
    },
    {
       id: 322,
        question: "邪悪な，悪い",
        choices: ["kind", "good", "wicked", "honest"],
        correctAnswer: "wicked"
    },
    {
       id: 323,
        question: "浮き沈み，上昇と下降",
        choices: ["ups and downs", "stable life", "constant progress", "easy times"],
        correctAnswer: "ups and downs"
    },
    {
       id: 324,
        question: "勝利",
        choices: ["triumph", "defeat", "failure", "loss"],
        correctAnswer: "triumph"
    },
    {
       id: 325,
        question: "AとBを等しくする，AをBと同等にする",
        choices: ["equate A with B", "differentiate A from B", "compare A and B", "contrast A with B"],
        correctAnswer: "equate A with B"
    },
    {
       id: 326,
        question: "正しく，適切に",
        choices: ["correctly", "wrongly", "randomly", "vaguely"],
        correctAnswer: "correctly"
    },
    {
       id: 327,
        question: "を待つ",
        choices: ["await", "ignore", "abandon", "leave"],
        correctAnswer: "await"
    },
    {
       id: 328,
        question: "農業の",
        choices: ["industrial", "agricultural", "urban", "mechanical"],
        correctAnswer: "agricultural"
    },
    {
       id: 329,
        question: "良心，道徳心",
        choices: ["conscience", "greed", "dishonesty", "cruelty"],
        correctAnswer: "conscience"
    },
    {
       id: 330,
        question: "癒す，治す",
        choices: ["harm", "injure", "heal", "damage"],
        correctAnswer: "heal"
    },
    {
       id: 331,
        question: "利益のある，収益性の高い",
        choices: ["profitable", "unprofitable", "worthless", "failing"],
        correctAnswer: "profitable"
    },
    {
       id: 332,
        question: "急ぐ/急ぎ",
        choices: ["haste", "delay", "patience", "leisure"],
        correctAnswer: "haste"
    },
    {
       id: 333,
        question: "弱める，力を失う",
        choices: ["strengthen", "weaken", "enhance", "empower"],
        correctAnswer: "weaken"
    },
    {
       id: 334,
        question: "を訴える，の不平を言う",
        choices: ["complain of", "praise", "compliment", "thank"],
        correctAnswer: "complain of"
    },
    {
       id: 335,
        question: "に似ている",
        choices: ["differ", "contrast", "resemble", "oppose"],
        correctAnswer: "resemble"
    },
    {
       id: 336,
        question: "肉屋",
        choices: ["butcher", "baker", "grocer", "chef"],
        correctAnswer: "butcher"
    },
    {
       id: 337,
        question: "約束，取り決め",
        choices: ["engagement", "cancellation", "postponement", "neglect"],
        correctAnswer: "engagement"
    },
    {
       id: 338,
        question: "最大の分け前，大きすぎる分け前",
        choices: ["the lion's share", "minority", "equal share", "leftover"],
        correctAnswer: "the lion's share"
    },
    {
       id: 339,
        question: "卑しい，粗末な",
        choices: ["luxurious", "humble", "grand", "wealthy"],
        correctAnswer: "humble"
    },
    {
       id: 340,
        question: "寝床に入る，ゆっくり寝る",
        choices: ["wake up early", "sleep in", "stay awake", "get up"],
        correctAnswer: "sleep in"
    },
    {
       id: 341,
        question: "水族館",
        choices: ["aquarium", "museum", "zoo", "park"],
        correctAnswer: "aquarium"
    },
    {
       id: 342,
        question: "溶け合う，調和する",
        choices: ["blend in", "stand out", "clash with", "separate from"],
        correctAnswer: "blend in"
    },
    {
       id: 343,
        question: "無知，無学",
        choices: ["ignorance", "knowledge", "wisdom", "intelligence"],
        correctAnswer: "ignorance"
    },
    {
       id: 344,
        question: "急に燃え上がる，勃発する",
        choices: ["flare up", "die down", "fade away", "calm down"],
        correctAnswer: "flare up"
    },
    {
       id: 345,
        question: "商業，商売",
        choices: ["commerce", "agriculture", "manufacturing", "construction"],
        correctAnswer: "commerce"
    },
    {
       id: 346,
        question: "手をたたく",
        choices: ["clap", "snap", "whistle", "stamp"],
        correctAnswer: "clap"
    },
    {
       id: 347,
        question: "ほこりっぽい",
        choices: ["dusty", "clean", "shiny", "wet"],
        correctAnswer: "dusty"
    },
    {
       id: 348,
        question: "不親切な，薄情な",
        choices: ["kind", "gentle", "unkind", "helpful"],
        correctAnswer: "unkind"
    },
    {
       id: 349,
        question: "舗装路",
        choices: ["pavement", "gravel", "grass", "mud"],
        correctAnswer: "pavement"
    },
    {
       id: 350,
        question: "親指で計測すること，大雑把な方法",
        choices: ["rule of thumb", "precise method", "exact measurement", "scientific calculation"],
        correctAnswer: "rule of thumb"
    },
    {
       id: 351,
        question: "の餌食になる，犠牲になる",
        choices: ["fall prey to", "escape from", "overcome", "resist"],
        correctAnswer: "fall prey to"
    },
    {
       id: 352,
        question: "抑える，抑制する",
        choices: ["restrain", "release", "encourage", "free"],
        correctAnswer: "restrain"
    },
    {
       id: 353,
        question: "帝国の",
        choices: ["imperial", "democratic", "republican", "federal"],
        correctAnswer: "imperial"
    },
    {
       id: 354,
        question: "次第に消える，徐々に消える",
        choices: ["pass off", "stay strong", "remain", "persist"],
        correctAnswer: "pass off"
    },
    {
       id: 355,
        question: "広告，宣伝",
        choices: ["advertisement", "announcement", "warning", "report"],
        correctAnswer: "advertisement"
    },
    {
       id: 356,
        question: "と知り合いになる，交際する",
        choices: ["fall in with", "break up with", "ignore", "avoid"],
        correctAnswer: "fall in with"
    },
    {
       id: 357,
        question: "裏切る，だます",
        choices: ["betray", "support", "protect", "trust"],
        correctAnswer: "betray"
    },
    {
       id: 358,
        question: "腰抜け，臆病者",
        choices: ["coward", "hero", "warrior", "champion"],
        correctAnswer: "coward"
    },
    {
       id: 359,
        question: "従順な，素直な",
        choices: ["obedient", "rebellious", "defiant", "stubborn"],
        correctAnswer: "obedient"
    },
    {
       id: 360,
        question: "を誘拐する",
        choices: ["kidnap", "rescue", "release", "protect"],
        correctAnswer: "kidnap"
    },
    {
       id: 361,
        question: "灰皿",
        choices: ["ashtray", "cup", "bowl", "plate"],
        correctAnswer: "ashtray"
    },
    {
       id: 362,
        question: "として通る，通過する",
        choices: ["pass for", "fail as", "stand out", "be rejected"],
        correctAnswer: "pass for"
    },
    {
       id: 363,
        question: "運搬人",
        choices: ["porter", "driver", "clerk", "manager"],
        correctAnswer: "porter"
    },
    {
       id: 364,
        question: "忠実な，誠実な",
        choices: ["faithful", "dishonest", "unreliable", "disloyal"],
        correctAnswer: "faithful"
    },
    {
       id: 365,
        question: "くぼみ/空洞のある",
        choices: ["hollow", "solid", "dense", "full"],
        correctAnswer: "hollow"
    },
    {
       id: 366,
        question: "結局，最後は",
        choices: ["after all", "in the beginning", "beforehand", "early on"],
        correctAnswer: "after all"
    },
    {
       id: 367,
        question: "隠された，隠秘の",
        choices: ["hidden", "exposed", "obvious", "clear"],
        correctAnswer: "hidden"
    },
    {
       id: 368,
        question: "手足",
        choices: ["limb", "torso", "head", "spine"],
        correctAnswer: "limb"
    },
    {
       id: 369,
        question: "感心，賞賛",
        choices: ["admiration", "criticism", "insult", "ridicule"],
        correctAnswer: "admiration"
    },
    {
       id: 370,
        question: "繁栄，成功",
        choices: ["prosperity", "poverty", "decline", "failure"],
        correctAnswer: "prosperity"
    },
    {
       id: 371,
        question: "熱狂的な，熱烈な",
        choices: ["indifferent", "enthusiastic", "apathetic", "neutral"],
        correctAnswer: "enthusiastic"
    },
    {
       id: 372,
        question: "降伏する，投降する",
        choices: ["resist", "surrender", "fight", "defend"],
        correctAnswer: "surrender"
    },
    {
       id: 373,
        question: "悲惨な，みじめな",
        choices: ["miserable", "joyful", "happy", "delighted"],
        correctAnswer: "miserable"
    },
    {
       id: 374,
        question: "腐る，朽ちる",
        choices: ["decay", "preserve", "protect", "strengthen"],
        correctAnswer: "decay"
    },
    {
       id: 375,
        question: "を囲む，同封する",
        choices: ["exclude", "enclose", "separate", "remove"],
        correctAnswer: "enclose"
    },
    {
       id: 376,
        question: "野心的な，大志を抱く",
        choices: ["humble", "ambitious", "modest", "passive"],
        correctAnswer: "ambitious"
    },
    {
       id: 377,
        question: "の矢面に立つ，まともに受ける",
        choices: ["avoid", "bear the brunt of", "ignore", "dodge"],
        correctAnswer: "bear the brunt of"
    },
    {
       id: 378,
        question: "罪悪感，有罪",
        choices: ["innocence", "guilt", "virtue", "honesty"],
        correctAnswer: "guilt"
    },
    {
       id: 379,
        question: "時折の",
        choices: ["constant", "frequent", "occasional", "regular"],
        correctAnswer: "occasional"
    },
    {
       id: 380,
        question: "負ける，敗北する",
        choices: ["win", "succeed", "take a beating", "triumph"],
        correctAnswer: "take a beating"
    },
    {
       id: 381,
        question: "子犬，幼犬",
        choices: ["kitten", "puppy", "cub", "foal"],
        correctAnswer: "puppy"
    },
    {
       id: 382,
        question: "貪欲な，欲張りの",
        choices: ["generous", "greedy", "selfless", "humble"],
        correctAnswer: "greedy"
    },
    {
       id: 383,
        question: "BについてAを賞賛する，AのBを素晴らしいと思う",
        choices: ["admire A for B", "criticize A for B", "blame A for B", "ignore A for B"],
        correctAnswer: "admire A for B"
    },
    {
       id: 384,
        question: "BにAを授ける，BにAを費やす",
        choices: ["bestow A on B", "steal A from B", "take A from B", "deny A to B"],
        correctAnswer: "bestow A on B"
    },
    {
       id: 385,
        question: "うらやみ，ねたみ",
        choices: ["envy", "admiration", "respect", "affection"],
        correctAnswer: "envy"
    },
    {
       id: 386,
        question: "部分的な，一部の",
        choices: ["complete", "whole", "partial", "entire"],
        correctAnswer: "partial"
    },
    {
       id: 387,
        question: "ひどく，恐ろしく",
        choices: ["awfully", "slightly", "mildly", "gently"],
        correctAnswer: "awfully"
    },
    {
       id: 388,
        question: "同様に，さらに",
        choices: ["by the same token", "on the contrary", "in contrast", "instead"],
        correctAnswer: "by the same token"
    },
    {
       id: 389,
        question: "かみそり",
        choices: ["razor", "scissors", "knife", "blade"],
        correctAnswer: "razor"
    },
    {
       id: 390,
        question: "昼寝，ひと眠り",
        choices: ["nap", "sleep", "rest", "break"],
        correctAnswer: "nap"
    },
    {
       id: 391,
        question: "をうれしがる，喜ぶ",
        choices: ["rejoice", "grieve", "mourn", "lament"],
        correctAnswer: "rejoice"
    },
    {
       id: 392,
        question: "英雄的な，勇ましい",
        choices: ["heroic", "cowardly", "timid", "weak"],
        correctAnswer: "heroic"
    },
    {
       id: 393,
        question: "下降する，降りる",
        choices: ["ascend", "descend", "rise", "increase"],
        correctAnswer: "descend"
    },
    {
       id: 394,
        question: "掛け算する，乗算する",
        choices: ["multiply", "subtract", "divide", "reduce"],
        correctAnswer: "multiply"
    },
    {
       id: 395,
        question: "急ぐ，手早くする",
        choices: ["make haste", "delay", "slow down", "procrastinate"],
        correctAnswer: "make haste"
    },
    {
       id: 396,
        question: "呼び集める，募集する",
        choices: ["drum up", "scatter", "dismiss", "ignore"],
        correctAnswer: "drum up"
    },
    {
       id: 397,
        question: "形成，構成",
        choices: ["formation", "destruction", "ruin", "collapse"],
        correctAnswer: "formation"
    },
    {
       id: 398,
        question: "すなわち，つまり",
        choices: ["namely", "however", "furthermore", "despite"],
        correctAnswer: "namely"
    },
    {
       id: 399,
        question: "強力な，精力のある",
        choices: ["mighty", "weak", "frail", "delicate"],
        correctAnswer: "mighty"
    },
    {
       id: 400,
        question: "飛び出す，出現する",
        choices: ["pop up", "fade away", "disappear", "vanish"],
        correctAnswer: "pop up"
    },
    {
       id: 401,
        question: "一握りの",
        choices: ["abundance", "handful", "plenty", "heap"],
        correctAnswer: "handful"
    },
    {
       id: 402,
        question: "を発音する",
        choices: ["whisper", "pronounce", "mumble", "shout"],
        correctAnswer: "pronounce"
    },
    {
       id: 403,
        question: "頭金として払う，即金で払う",
        choices: ["borrow", "pay down", "save", "invest"],
        correctAnswer: "pay down"
    },
    {
       id: 404,
        question: "受け皿",
        choices: ["plate", "bowl", "saucer", "cup"],
        correctAnswer: "saucer"
    },
    {
       id: 405,
        question: "外に，外部の",
        choices: ["inner", "outer", "internal", "domestic"],
        correctAnswer: "outer"
    },
    {
       id: 406,
        question: "絶望，失望",
        choices: ["hope", "despair", "joy", "relief"],
        correctAnswer: "despair"
    },
    {
       id: 407,
        question: "骨董の，古風な",
        choices: ["modern", "antique", "new", "contemporary"],
        correctAnswer: "antique"
    },
    {
       id: 408,
        question: "栄光，名誉",
        choices: ["shame", "glory", "dishonor", "disgrace"],
        correctAnswer: "glory"
    },
    {
       id: 409,
        question: "巨大な，莫大な",
        choices: ["tiny", "immense", "small", "minor"],
        correctAnswer: "immense"
    },
    {
       id: 410,
        question: "かすかな，ぼんやりした",
        choices: ["bright", "faint", "clear", "obvious"],
        correctAnswer: "faint"
    },
    {
       id: 411,
        question: "侮辱する，はずかしめる",
        choices: ["insult", "praise", "respect", "compliment"],
        correctAnswer: "insult"
    },
    {
       id: 412,
        question: "を予測する，予測する",
        choices: ["forecast", "recall", "ignore", "forget"],
        correctAnswer: "forecast"
    },
    {
       id: 413,
        question: "を噛む",
        choices: ["chew", "lick", "swallow", "suck"],
        correctAnswer: "chew"
    },
    {
       id: 414,
        question: "説明する，を明らかにする",
        choices: ["hide", "set forth", "cover up", "confuse"],
        correctAnswer: "set forth"
    },
    {
       id: 415,
        question: "奨学金，育英資金",
        choices: ["scholarship", "loan", "tuition", "allowance"],
        correctAnswer: "scholarship"
    },
    {
       id: 416,
        question: "致命的な，運命の",
        choices: ["harmless", "fatal", "safe", "benign"],
        correctAnswer: "fatal"
    },
    {
       id: 417,
        question: "返済する，報いる",
        choices: ["repay", "borrow", "steal", "owe"],
        correctAnswer: "repay"
    },
    {
       id: 418,
        question: "を欺く，だます",
        choices: ["deceive", "trust", "assist", "support"],
        correctAnswer: "deceive"
    },
    {
       id: 419,
        question: "森の外へ，困難を脱して",
        choices: ["in danger", "out of the woods", "hopeless", "stuck"],
        correctAnswer: "out of the woods"
    },
    {
       id: 420,
        question: "塩辛い，塩のきいた",
        choices: ["sweet", "salty", "bitter", "sour"],
        correctAnswer: "salty"
    },
    {
       id: 421,
        question: "言い換えれば，他の言葉で言うと",
        choices: ["in contrast", "in other words", "moreover", "nevertheless"],
        correctAnswer: "in other words"
    },
    {
       id: 422,
        question: "率直に，直接的に",
        choices: ["frankly", "indirectly", "secretly", "dishonestly"],
        correctAnswer: "frankly"
    },
    {
       id: 423,
        question: "AにBを引き受けさせる，AにBをやらせる",
        choices: ["land A with B", "free A from B", "give up A for B", "ignore A and B"],
        correctAnswer: "land A with B"
    },
    {
       id: 424,
        question: "痛み",
        choices: ["ache", "comfort", "relief", "ease"],
        correctAnswer: "ache"
    },
    {
       id: 425,
        question: "積極的に，活発に",
        choices: ["passively", "actively", "lethargically", "slowly"],
        correctAnswer: "actively"
    },
    {
       id: 426,
        question: "作曲家",
        choices: ["composer", "conductor", "singer", "writer"],
        correctAnswer: "composer"
    },
    {
       id: 427,
        question: "を延期する，延ばす",
        choices: ["postpone", "advance", "hasten", "schedule"],
        correctAnswer: "postpone"
    },
    {
       id: 428,
        question: "AをBに支給する，発行する",
        choices: ["issue A to B", "take A from B", "deny A to B", "remove A from B"],
        correctAnswer: "issue A to B"
    },
    {
       id: 429,
        question: "その日暮らしで，将来の備えをしないで",
        choices: ["from hand to mouth", "live in luxury", "save for the future", "invest wisely"],
        correctAnswer: "from hand to mouth"
    },
    {
       id: 430,
        question: "記念碑",
        choices: ["monument", "statue", "building", "sign"],
        correctAnswer: "monument"
    },
    {
       id: 431,
        question: "残酷さ，残虐性",
        choices: ["kindness", "cruelty", "mercy", "gentleness"],
        correctAnswer: "cruelty"
    },
    {
       id: 432,
        question: "気がふれる，怒り狂う",
        choices: ["stay calm", "go nuts", "relax", "settle down"],
        correctAnswer: "go nuts"
    },
    {
       id: 433,
        question: "運河",
        choices: ["river", "canal", "lake", "ocean"],
        correctAnswer: "canal"
    },
    {
       id: 434,
        question: "をびっくりさせる，驚かせる",
        choices: ["amaze", "bore", "disappoint", "ignore"],
        correctAnswer: "amaze"
    },
    {
       id: 435,
        question: "を延長する，延ばす",
        choices: ["shorten", "prolong", "cut off", "halt"],
        correctAnswer: "prolong"
    },
    {
       id: 436,
        question: "つぼみ",
        choices: ["flower", "leaf", "bud", "stem"],
        correctAnswer: "bud"
    },
    {
       id: 437,
        question: "憎しみ，憎悪",
        choices: ["love", "hatred", "affection", "kindness"],
        correctAnswer: "hatred"
    },
    {
       id: 438,
        question: "素晴らしい，華やかな",
        choices: ["splendid", "dull", "ordinary", "boring"],
        correctAnswer: "splendid"
    },
    {
       id: 439,
        question: "盆地，たらい",
        choices: ["mountain", "basin", "plateau", "hill"],
        correctAnswer: "basin"
    },
    {
       id: 440,
        question: "出血する，血を流す",
        choices: ["heal", "bleed", "recover", "stop"],
        correctAnswer: "bleed"
    },
    {
       id: 441,
        question: "熟した，熟れた",
        choices: ["raw", "unripe", "ripe", "hard"],
        correctAnswer: "ripe"
    },
    {
       id: 442,
        question: "徹底した，完ぺきな",
        choices: ["thorough", "careless", "incomplete", "shallow"],
        correctAnswer: "thorough"
    },
    {
       id: 443,
        question: "要約/消化する",
        choices: ["digest", "reject", "ignore", "expand"],
        correctAnswer: "digest"
    },
    {
       id: 444,
        question: "ガタガタ鳴る",
        choices: ["rattle", "silent", "hum", "whisper"],
        correctAnswer: "rattle"
    },
    {
       id: 445,
        question: "競技の，運動家の",
        choices: ["athletic", "lazy", "weak", "inactive"],
        correctAnswer: "athletic"
    },
    {
       id: 446,
        question: "歩道，歩行者道",
        choices: ["sidewalk", "road", "highway", "bridge"],
        correctAnswer: "sidewalk"
    },
    {
       id: 447,
        question: "を固定する，締める",
        choices: ["fasten", "loosen", "release", "remove"],
        correctAnswer: "fasten"
    },
    {
       id: 448,
        question: "盛り付ける，配膳する",
        choices: ["dish out", "consume", "take away", "eat"],
        correctAnswer: "dish out"
    },
    {
       id: 449,
        question: "解説者，通訳者",
        choices: ["interpreter", "translator", "journalist", "speaker"],
        correctAnswer: "interpreter"
    },
    {
       id: 450,
        question: "を叱る，に小言を言う",
        choices: ["scold", "praise", "encourage", "compliment"],
        correctAnswer: "scold"
    },
    {
       id: 451,
        question: "支配的な，主要な，優勢な",
        choices: ["ruling", "submissive", "weak", "insignificant"],
        correctAnswer: "ruling"
    },
    {
       id: 452,
        question: "徹底的に，完全に",
        choices: ["thoroughly", "partially", "briefly", "superficially"],
        correctAnswer: "thoroughly"
    },
    {
       id: 453,
        question: "段落，区切り",
        choices: ["paragraph", "sentence", "chapter", "page"],
        correctAnswer: "paragraph"
    },
    {
       id: 454,
        question: "投げ捨てる，縄を解く",
        choices: ["cast off", "hold onto", "keep", "grasp"],
        correctAnswer: "cast off"
    },
    {
       id: 455,
        question: "うぬぼれが強い",
        choices: ["vain", "humble", "modest", "shy"],
        correctAnswer: "vain"
    },
    {
       id: 456,
        question: "素晴らしい",
        choices: ["marvelous", "terrible", "horrible", "ordinary"],
        correctAnswer: "marvelous"
    },
    {
       id: 457,
        question: "を征服する，制圧する",
        choices: ["conquer", "surrender", "lose", "retreat"],
        correctAnswer: "conquer"
    },
    {
       id: 458,
        question: "従う，服従する",
        choices: ["obey", "disobey", "ignore", "resist"],
        correctAnswer: "obey"
    },
    {
       id: 459,
        question: "飛び込む",
        choices: ["dive", "float", "stand", "walk"],
        correctAnswer: "dive"
    },
    {
       id: 460,
        question: "怪我した，傷つけられた",
        choices: ["injured", "healthy", "strong", "fine"],
        correctAnswer: "injured"
    },
    {
       id: 461,
        question: "通り過ぎる，を伝える",
        choices: ["pass by", "pass on", "ignore", "block"],
        correctAnswer: "pass on"
    },
    {
       id: 462,
        question: "口紅",
        choices: ["mascara", "lipstick", "blush", "eyeliner"],
        correctAnswer: "lipstick"
    },
    {
       id: 463,
        question: "陽気に，楽しそうに",
        choices: ["sadly", "merrily", "angrily", "gloomily"],
        correctAnswer: "merrily"
    },
    {
       id: 464,
        question: "悲しみ，悲哀",
        choices: ["joy", "happiness", "sorrow", "delight"],
        correctAnswer: "sorrow"
    },
    {
       id: 465,
        question: "引き換えに，交換として",
        choices: ["in exchange", "instead", "as a result", "because of"],
        correctAnswer: "in exchange"
    },
    {
       id: 466,
        question: "山腹，斜面",
        choices: ["peak", "valley", "hillside", "cliff"],
        correctAnswer: "hillside"
    },
    {
       id: 467,
        question: "急ぐ，急ぎ足で",
        choices: ["hasty", "slow", "careful", "deliberate"],
        correctAnswer: "hasty"
    },
    {
       id: 468,
        question: "余白，へり",
        choices: ["center", "margin", "middle", "core"],
        correctAnswer: "margin"
    },
    {
       id: 469,
        question: "の代わりに，変わって",
        choices: ["in contrast to", "in place of", "along with", "on behalf of"],
        correctAnswer: "in place of"
    },
    {
       id: 470,
        question: "迅速な，速い",
        choices: ["slow", "swift", "gradual", "steady"],
        correctAnswer: "swift"
    },
    {
       id: 471,
        question: "口頭の，口述の",
        choices: ["oral", "written", "textual", "documented"],
        correctAnswer: "oral"
    },
    {
       id: 472,
        question: "過剰に，過度に",
        choices: ["to some extent", "to excess", "in moderation", "barely"],
        correctAnswer: "to excess"
    },
    {
       id: 473,
        question: "大使",
        choices: ["minister", "ambassador", "governor", "president"],
        correctAnswer: "ambassador"
    },
    {
       id: 474,
        question: "濃縮された，集中した",
        choices: ["diluted", "concentrated", "scattered", "spread out"],
        correctAnswer: "concentrated"
    },
    {
       id: 475,
        question: "インフルエンザ",
        choices: ["cold", "flu", "fever", "infection"],
        correctAnswer: "flu"
    },
    {
       id: 476,
        question: "の郊外で，の近郊で",
        choices: ["in the suburbs of", "in the center of", "in the downtown of", "near the beach"],
        correctAnswer: "in the suburbs of"
    },
    {
       id: 477,
        question: "交響曲",
        choices: ["concerto", "symphony", "opera", "sonata"],
        correctAnswer: "symphony"
    },
    {
       id: 478,
        question: "足を踏み入れる",
        choices: ["step back", "tread", "withdraw", "sit"],
        correctAnswer: "tread"
    },
    {
       id: 479,
        question: "急ぐ",
        choices: ["hasten", "delay", "postpone", "hesitate"],
        correctAnswer: "hasten"
    },
    {
       id: 480,
        question: "娯楽，気晴らし",
        choices: ["pastime", "task", "chore", "burden"],
        correctAnswer: "pastime"
    },
    {
       id: 481,
        question: "壮大な",
        choices: ["ordinary", "magnificent", "plain", "modest"],
        correctAnswer: "magnificent"
    },
    {
       id: 482,
        question: "使い走り",
        choices: ["task", "errand", "mission", "duty"],
        correctAnswer: "errand"
    },
    {
       id: 483,
        question: "を通る，通り抜ける",
        choices: ["pass by", "pass through", "go around", "stop at"],
        correctAnswer: "pass through"
    },
    {
       id: 484,
        question: "公平さ",
        choices: ["unfairness", "bias", "fairness", "prejudice"],
        correctAnswer: "fairness"
    },
    {
       id: 485,
        question: "を大目に見る，を考慮に入れる",
        choices: ["make allowance for", "ignore", "reject", "disregard"],
        correctAnswer: "make allowance for"
    },
    {
       id: 486,
        question: "垣根，障壁，障害物",
        choices: ["path", "hedge", "bridge", "road"],
        correctAnswer: "hedge"
    },
    {
       id: 487,
        question: "冷たくされて，無視されて",
        choices: ["welcomed", "included", "out in the cold", "paid attention to"],
        correctAnswer: "out in the cold"
    },
    {
       id: 488,
        question: "辛抱強く，根気よく",
        choices: ["patiently", "eagerly", "hastily", "angrily"],
        correctAnswer: "patiently"
    },
    {
       id: 489,
        question: "群れ，集団",
        choices: ["pack", "herd", "flock", "team"],
        correctAnswer: "herd"
    },
    {
       id: 490,
        question: "立入禁止で，境界線を越えて",
        choices: ["allowed", "out of bounds", "permitted", "safe"],
        correctAnswer: "out of bounds"
    },
    {
       id: 491,
        question: "おおよそ，だいたい",
        choices: ["exactly", "approximately", "precisely", "definitely"],
        correctAnswer: "approximately"
    },
    {
       id: 492,
        question: "肝臓，肝",
        choices: ["heart", "liver", "stomach", "kidney"],
        correctAnswer: "liver"
    },
    {
       id: 493,
        question: "を気に掛けない，気にしない",
        choices: ["be reckless of", "be aware of", "care about", "pay attention to"],
        correctAnswer: "be reckless of"
    },
    {
       id: 494,
        question: "支配的な",
        choices: ["submissive", "dominant", "minor", "weak"],
        correctAnswer: "dominant"
    },
    {
       id: 495,
        question: "縮小する，縮む",
        choices: ["expand", "shrink", "grow", "enlarge"],
        correctAnswer: "shrink"
    },
    {
       id: 496,
        question: "すぐに，直ちに，即座に",
        choices: ["gradually", "instantly", "slowly", "delayed"],
        correctAnswer: "instantly"
    },
    {
       id: 497,
        question: "生物学",
        choices: ["physics", "biology", "chemistry", "geology"],
        correctAnswer: "biology"
    },
    {
       id: 498,
        question: "にエサをやる，(～を)えさとする",
        choices: ["feed on", "starve", "neglect", "abandon"],
        correctAnswer: "feed on"
    },
    {
       id: 499,
        question: "乏しい，不足している",
        choices: ["abundant", "scarce", "plentiful", "sufficient"],
        correctAnswer: "scarce"
    },
    {
       id: 500,
        question: "間近に，接近して",
        choices: ["at close quarters", "from afar", "from a distance", "far away"],
        correctAnswer: "at close quarters"
    },
    {
       id: 501,
        question: "活力",
        choices: ["weakness", "vigor", "fatigue", "laziness"],
        correctAnswer: "vigor"
    },
    {
       id: 502,
        question: "資本主義",
        choices: ["socialism", "capitalism", "communism", "fascism"],
        correctAnswer: "capitalism"
    },
    {
       id: 503,
        question: "征服，克服",
        choices: ["surrender", "defeat", "conquest", "loss"],
        correctAnswer: "conquest"
    },
    {
       id: 504,
        question: "キラキラ輝く，きらめく",
        choices: ["sparkle", "fade", "darken", "dim"],
        correctAnswer: "sparkle"
    },
    {
       id: 505,
        question: "舞台，闘技場",
        choices: ["arena", "hall", "court", "room"],
        correctAnswer: "arena"
    },
    {
       id: 506,
        question: "をつねる，つまむ",
        choices: ["pinch", "pat", "stroke", "rub"],
        correctAnswer: "pinch"
    },
    {
       id: 507,
        question: "に巻き込む，関与させる",
        choices: ["embroil in", "keep out of", "avoid", "ignore"],
        correctAnswer: "embroil in"
    },
    {
       id: 508,
        question: "を達成する，獲得する",
        choices: ["lose", "attain", "fail", "miss"],
        correctAnswer: "attain"
    },
    {
       id: 509,
        question: "の悪口を言う，を悪く言う",
        choices: ["speak ill of", "praise", "compliment", "admire"],
        correctAnswer: "speak ill of"
    },
    {
       id: 510,
        question: "感情的に，情緒的に",
        choices: ["logically", "emotionally", "rationally", "scientifically"],
        correctAnswer: "emotionally"
    },
    {
       id: 511,
        question: "割り当てる，あてがう",
        choices: ["assign", "remove", "reject", "take away"],
        correctAnswer: "assign"
    },
    {
       id: 512,
        question: "下火になる，(騒ぎが)静まる",
        choices: ["die down", "escalate", "rise up", "worsen"],
        correctAnswer: "die down"
    },
    {
       id: 513,
        question: "全体で，結局",
        choices: ["all told", "partially", "incomplete", "halfway"],
        correctAnswer: "all told"
    },
    {
       id: 514,
        question: "風が吹き込む，突然現れる",
        choices: ["blow in", "settle down", "stay still", "disappear"],
        correctAnswer: "blow in"
    },
    {
       id: 515,
        question: "をひく，細かく砕く",
        choices: ["grind", "sharpen", "build", "assemble"],
        correctAnswer: "grind"
    },
    {
       id: 516,
        question: "耕作用すき，すきに似たもの",
        choices: ["shovel", "plow", "hoe", "rake"],
        correctAnswer: "plow"
    },
    {
       id: 517,
        question: "禁じる，禁止する",
        choices: ["allow", "permit", "prohibit", "authorize"],
        correctAnswer: "prohibit"
    },
    {
       id: 518,
        question: "を心に抱く，思う",
        choices: ["conceive", "dismiss", "forget", "neglect"],
        correctAnswer: "conceive"
    },
    {
       id: 519,
        question: "素早く出す，呪文で呼び出す",
        choices: ["conjure up", "destroy", "eliminate", "forget"],
        correctAnswer: "conjure up"
    },
    {
       id: 520,
        question: "いやな，むかつくような",
        choices: ["pleasant", "disgusting", "delightful", "enjoyable"],
        correctAnswer: "disgusting"
    },
    {
       id: 521,
        question: "中世の，時代遅れの",
        choices: ["ancient", "medieval", "modern", "futuristic"],
        correctAnswer: "medieval"
    },
    {
       id: 522,
        question: "聞き出す，誘い出す",
        choices: ["hide", "fish for", "suppress", "ignore"],
        correctAnswer: "fish for"
    },
    {
       id: 523,
        question: "魅惑的な，うっとりさせる",
        choices: ["boring", "fascinating", "dull", "plain"],
        correctAnswer: "fascinating"
    },
    {
       id: 524,
        question: "船着場，波止場",
        choices: ["dock", "harbor", "shore", "beach"],
        correctAnswer: "dock"
    },
    {
       id: 525,
        question: "失敗する，破産する，失敗に終わる",
        choices: ["succeed", "thrive", "go under", "prosper"],
        correctAnswer: "go under"
    },
    {
       id: 526,
        question: "へ退却する/後退",
        choices: ["advance", "retreat", "proceed", "attack"],
        correctAnswer: "retreat"
    },
    {
       id: 527,
        question: "生産性，生産力",
        choices: ["waste", "productivity", "inefficiency", "failure"],
        correctAnswer: "productivity"
    },
    {
       id: 528,
        question: "から取って食べる，情報を得る，採取して利用する",
        choices: ["feed off", "abstain from", "avoid", "reject"],
        correctAnswer: "feed off"
    },
    {
       id: 529,
        question: "輝いた，光沢のある",
        choices: ["shiny", "dull", "matte", "dim"],
        correctAnswer: "shiny"
    },
    {
       id: 530,
        question: "生命体，生物",
        choices: ["organism", "mineral", "object", "machine"],
        correctAnswer: "organism"
    },
    {
       id: 531,
        question: "の種をまく",
        choices: ["sow", "harvest", "reap", "gather"],
        correctAnswer: "sow"
    },
    {
       id: 532,
        question: "買収する，味方に抱き込む",
        choices: ["sell", "buy over", "donate", "steal"],
        correctAnswer: "buy over"
    },
    {
       id: 533,
        question: "勇気のある，勇敢な",
        choices: ["cowardly", "courageous", "fearful", "hesitant"],
        correctAnswer: "courageous"
    },
    {
       id: 534,
        question: "に膝まづく，ひざをつく",
        choices: ["kneel", "stand", "sit", "jump"],
        correctAnswer: "kneel"
    },
    {
       id: 535,
        question: "行列",
        choices: ["crowd", "procession", "gathering", "assembly"],
        correctAnswer: "procession"
    },
    {
       id: 536,
        question: "運び去る，誘拐する",
        choices: ["carry off", "return", "release", "deliver"],
        correctAnswer: "carry off"
    },
    {
       id: 537,
        question: "威厳",
        choices: ["humbleness", "majesty", "insignificance", "simplicity"],
        correctAnswer: "majesty"
    },
    {
       id: 538,
        question: "疑い，疑惑",
        choices: ["trust", "suspicion", "certainty", "confidence"],
        correctAnswer: "suspicion"
    },
    {
       id: 539,
        question: "必死に",
        choices: ["calmly", "desperately", "casually", "indifferently"],
        correctAnswer: "desperately"
    },
    {
       id: 540,
        question: "驚愕させる",
        choices: ["startle", "bore", "comfort", "ignore"],
        correctAnswer: "startle"
    },
    {
       id: 541,
        question: "相続人，跡取り",
        choices: ["heir", "tenant", "owner", "borrower"],
        correctAnswer: "heir"
    },
    {
       id: 542,
        question: "幻覚，思い込み",
        choices: ["reality", "illusion", "fact", "truth"],
        correctAnswer: "illusion"
    },
    {
       id: 543,
        question: "進歩的な，革新的な",
        choices: ["conservative", "progressive", "traditional", "backward"],
        correctAnswer: "progressive"
    },
    {
       id: 544,
        question: "完全な，まったくの",
        choices: ["partial", "utter", "incomplete", "halfway"],
        correctAnswer: "utter"
    },
    {
       id: 545,
        question: "を悲しむ，嘆く",
        choices: ["rejoice", "celebrate", "mourn", "enjoy"],
        correctAnswer: "mourn"
    },
    {
       id: 546,
        question: "グルグルと，うろうろと",
        choices: ["straight ahead", "round and round", "directly", "immediately"],
        correctAnswer: "round and round"
    },
    {
       id: 547,
        question: "単独で，専ら",
        choices: ["together", "solely", "jointly", "mutually"],
        correctAnswer: "solely"
    },
    {
       id: 548,
        question: "落ち着かない，不安な",
        choices: ["at ease", "ill at ease", "relaxed", "confident"],
        correctAnswer: "ill at ease"
    },
    {
       id: 549,
        question: "努力する，励む",
        choices: ["strive", "quit", "give up", "neglect"],
        correctAnswer: "strive"
    },
    {
       id: 550,
        question: "をひったくる",
        choices: ["drop", "snatch", "release", "return"],
        correctAnswer: "snatch"
    },
    {
       id: 551,
        question: "を省略する，省く",
        choices: ["include", "omit", "add", "retain"],
        correctAnswer: "omit"
    },
    {
       id: 552,
        question: "単独の，単一の",
        choices: ["multiple", "sole", "shared", "joint"],
        correctAnswer: "sole"
    },
    {
       id: 553,
        question: "を軽蔑する，さげすむ",
        choices: ["respect", "despise", "admire", "honor"],
        correctAnswer: "despise"
    },
    {
       id: 554,
        question: "従順，服従",
        choices: ["rebellion", "obedience", "defiance", "resistance"],
        correctAnswer: "obedience"
    },
    {
       id: 555,
        question: "退屈",
        choices: ["excitement", "boredom", "fun", "enjoyment"],
        correctAnswer: "boredom"
    },
    {
       id: 556,
        question: "家具を備える",
        choices: ["empty", "furnish", "remove", "vacate"],
        correctAnswer: "furnish"
    },
    {
       id: 557,
        question: "大胆な，図太い",
        choices: ["timid", "daring", "shy", "fearful"],
        correctAnswer: "daring"
    },
    {
       id: 558,
        question: "感謝，称賛",
        choices: ["criticism", "appreciation", "disregard", "neglect"],
        correctAnswer: "appreciation"
    },
    {
       id: 559,
        question: "繁栄する，発展する",
        choices: ["decline", "prosper", "fail", "collapse"],
        correctAnswer: "prosper"
    },
    {
       id: 560,
        question: "バラ色の",
        choices: ["dark", "rosy", "gloomy", "dull"],
        correctAnswer: "rosy"
    },
    {
       id: 561,
        question: "目立つ，際立つ",
        choices: ["noticeable", "hidden", "invisible", "obscure"],
        correctAnswer: "noticeable"
    },
    {
       id: 562,
        question: "素晴らしい",
        choices: ["terrible", "fantastic", "awful", "ordinary"],
        correctAnswer: "fantastic"
    },
    {
       id: 563,
        question: "ずぶ濡れになる，びしょ濡れになる",
        choices: ["stay dry", "get wet to the skin", "keep warm", "remain clean"],
        correctAnswer: "get wet to the skin"
    },
    {
       id: 564,
        question: "鮮やかな",
        choices: ["vivid", "dull", "faded", "pale"],
        correctAnswer: "vivid"
    },
    {
       id: 565,
        question: "とりわけ，最も～ない",
        choices: ["least of all", "most of all", "especially", "above all"],
        correctAnswer: "least of all"
    },
    {
       id: 566,
        question: "残忍な，残酷な",
        choices: ["gentle", "brutal", "kind", "compassionate"],
        correctAnswer: "brutal"
    },
    {
       id: 567,
        question: "変装させる， 見せかける",
        choices: ["disguise", "reveal", "expose", "unmask"],
        correctAnswer: "disguise"
    },
    {
       id: 568,
        question: "相談する，話し合う",
        choices: ["consult", "ignore", "avoid", "neglect"],
        correctAnswer: "consult"
    },
    {
       id: 569,
        question: "欲求不満，落胆",
        choices: ["satisfaction", "frustration", "joy", "success"],
        correctAnswer: "frustration"
    },
    {
       id: 570,
        question: "ずる賢い",
        choices: ["honest", "cunning", "straightforward", "naïve"],
        correctAnswer: "cunning"
    },
    {
       id: 571,
        question: "大騒ぎする，騒ぎ立てる",
        choices: ["make a fuss", "stay quiet", "remain calm", "be silent"],
        correctAnswer: "make a fuss"
    },
    {
       id: 572,
        question: "漏らす，白状する",
        choices: ["let on", "keep secret", "hide", "conceal"],
        correctAnswer: "let on"
    },
    {
       id: 573,
        question: "処方箋，処方",
        choices: ["prescription", "diagnosis", "surgery", "treatment"],
        correctAnswer: "prescription"
    },
    {
       id: 574,
        question: "分子，微量",
        choices: ["particle", "mass", "chunk", "block"],
        correctAnswer: "particle"
    },
    {
       id: 575,
        question: "抱擁/を抱きしめる",
        choices: ["hug", "push", "hit", "ignore"],
        correctAnswer: "hug"
    },
    {
       id: 576,
        question: "ばかげた，道理に合わない",
        choices: ["logical", "absurd", "rational", "reasonable"],
        correctAnswer: "absurd"
    },
    {
       id: 577,
        question: "流れ落ちる，荒廃する",
        choices: ["run down", "build up", "thrive", "rise up"],
        correctAnswer: "run down"
    },
    {
       id: 578,
        question: "を集める，組み立てる",
        choices: ["assemble", "scatter", "disperse", "break apart"],
        correctAnswer: "assemble"
    },
    {
       id: 579,
        question: "欠片を拾う，事態を修復する",
        choices: ["pick up the pieces", "break everything", "leave as it is", "ignore the problem"],
        correctAnswer: "pick up the pieces"
    },
    {
       id: 580,
        question: "拒否，拒絶",
        choices: ["acceptance", "refusal", "approval", "agreement"],
        correctAnswer: "refusal"
    },
    {
       id: 581,
        question: "不確実性，不明確さ",
        choices: ["certainty", "uncertainty", "clarity", "stability"],
        correctAnswer: "uncertainty"
    },
    {
       id: 582,
        question: "隠す，秘密にする",
        choices: ["reveal", "conceal", "expose", "disclose"],
        correctAnswer: "conceal"
    },
    {
       id: 583,
        question: "遠征",
        choices: ["trip", "expedition", "vacation", "retreat"],
        correctAnswer: "expedition"
    },
    {
       id: 584,
        question: "不当な，不公平な",
        choices: ["just", "unjust", "fair", "equitable"],
        correctAnswer: "unjust"
    },
    {
       id: 585,
        question: "悲劇的な，悲劇的",
        choices: ["comic", "tragic", "joyful", "cheerful"],
        correctAnswer: "tragic"
    },
    {
       id: 586,
        question: "を編集する",
        choices: ["write", "edit", "delete", "erase"],
        correctAnswer: "edit"
    },
    {
       id: 587,
        question: "宣言，発表",
        choices: ["silence", "declaration", "secret", "whisper"],
        correctAnswer: "declaration"
    },
    {
       id: 588,
        question: "誓い，誓約",
        choices: ["promise", "vow", "lie", "doubt"],
        correctAnswer: "vow"
    },
    {
       id: 589,
        question: "締める，絞る",
        choices: ["loosen", "tighten", "release", "relax"],
        correctAnswer: "tighten"
    },
    {
       id: 590,
        question: "入り込む，押しかける",
        choices: ["barge in", "walk out", "step back", "sneak away"],
        correctAnswer: "barge in"
    },
    {
       id: 591,
        question: "に耐える，寛大に取り扱う",
        choices: ["reject", "tolerate", "refuse", "banish"],
        correctAnswer: "tolerate"
    },
    {
       id: 592,
        question: "憂鬱な，暗い",
        choices: ["cheerful", "gloomy", "bright", "sunny"],
        correctAnswer: "gloomy"
    },
    {
       id: 593,
        question: "場違いの，不適切な",
        choices: ["appropriate", "out of place", "fitting", "suitable"],
        correctAnswer: "out of place"
    },
    {
       id: 594,
        question: "をつるす，ぶら下げる",
        choices: ["suspend", "drop", "hold", "place"],
        correctAnswer: "suspend"
    },
    {
       id: 595,
        question: "模倣",
        choices: ["original", "imitation", "creation", "invention"],
        correctAnswer: "imitation"
    },
    {
       id: 596,
        question: "取得",
        choices: ["loss", "acquisition", "failure", "removal"],
        correctAnswer: "acquisition"
    },
    {
       id: 597,
        question: "戦士",
        choices: ["warrior", "peacemaker", "civilian", "priest"],
        correctAnswer: "warrior"
    },
    {
       id: 598,
        question: "動詞",
        choices: ["noun", "verb", "adjective", "adverb"],
        correctAnswer: "verb"
    },
    {
       id: 599,
        question: "肉体的に，身体的に",
        choices: ["mentally", "physically", "spiritually", "emotionally"],
        correctAnswer: "physically"
    },
    {
       id: 600,
        question: "優雅な，上品な",
        choices: ["clumsy", "elegant", "awkward", "messy"],
        correctAnswer: "elegant"
    },
    {
       id: 601,
        question: "尊敬できる",
        choices: ["dishonorable", "honorable", "shameful", "corrupt"],
        correctAnswer: "honorable"
    },
    {
       id: 602,
        question: "を期待する，予想する",
        choices: ["ignore", "anticipate", "avoid", "neglect"],
        correctAnswer: "anticipate"
    },
    {
       id: 603,
        question: "めったに，しない",
        choices: ["frequently", "always", "seldom if ever", "regularly"],
        correctAnswer: "seldom if ever"
    },
    {
       id: 604,
        question: "火山，噴火口",
        choices: ["mountain", "volcano", "canyon", "valley"],
        correctAnswer: "volcano"
    },
    {
       id: 605,
        question: "感情，心情",
        choices: ["logic", "sentiment", "reasoning", "rationality"],
        correctAnswer: "sentiment"
    },
    {
       id: 606,
        question: "外泊する，を見落とす",
        choices: ["sleep in", "stay out", "sleep over", "ignore"],
        correctAnswer: "sleep over"
    },
    {
       id: 607,
        question: "厳しく，ひどく",
        choices: ["lightly", "severely", "gently", "softly"],
        correctAnswer: "severely"
    },
    {
       id: 608,
        question: "柔軟な，しなやかな",
        choices: ["rigid", "flexible", "stiff", "unyielding"],
        correctAnswer: "flexible"
    },
    {
       id: 609,
        question: "ごちそう，祝祭",
        choices: ["snack", "feast", "diet", "fast"],
        correctAnswer: "feast"
    },
    {
       id: 610,
        question: "熱心に",
        choices: ["reluctantly", "eagerly", "casually", "indifferently"],
        correctAnswer: "eagerly"
    },
    {
       id: 611,
        question: "舞い上がる",
        choices: ["fall", "soar", "drop", "sink"],
        correctAnswer: "soar"
    },
    {
       id: 612,
        question: "肥沃な，多産の",
        choices: ["barren", "fertile", "dry", "infertile"],
        correctAnswer: "fertile"
    },
    {
       id: 613,
        question: "を除外する，締め出す",
        choices: ["include", "rule out", "accept", "consider"],
        correctAnswer: "rule out"
    },
    {
       id: 614,
        question: "間接の",
        choices: ["direct", "overhead", "immediate", "straight"],
        correctAnswer: "overhead"
    },
    {
       id: 615,
        question: "修正する，変更する",
        choices: ["modify", "preserve", "keep", "ignore"],
        correctAnswer: "modify"
    },
    {
       id: 616,
        question: "怖い",
        choices: ["scary", "funny", "boring", "exciting"],
        correctAnswer: "scary"
    },
    {
       id: 617,
        question: "どっと中に入る，一気に入る",
        choices: ["pile in", "trickle in", "step back", "stay out"],
        correctAnswer: "pile in"
    },
    {
       id: 618,
        question: "理解",
        choices: ["ignorance", "comprehension", "confusion", "misunderstanding"],
        correctAnswer: "comprehension"
    },
    {
       id: 619,
        question: "を試す，十分に試してみる",
        choices: ["give up", "try out", "ignore", "discard"],
        correctAnswer: "try out"
    },
    {
       id: 620,
        question: "皮肉",
        choices: ["sincerity", "irony", "honesty", "truth"],
        correctAnswer: "irony"
    },
    {
       id: 621,
        question: "外科医，手術医",
        choices: ["surgeon", "physician", "dentist", "nurse"],
        correctAnswer: "surgeon"
    },
    {
       id: 622,
        question: "をなめる，をなめてかかる",
        choices: ["lick", "chew", "bite", "swallow"],
        correctAnswer: "lick"
    },
    {
       id: 623,
        question: "避難，保護",
        choices: ["danger", "refuge", "threat", "exposure"],
        correctAnswer: "refuge"
    },
    {
       id: 624,
        question: "お辞儀して退出する，身を引く",
        choices: ["stay in", "bow out", "step forward", "continue"],
        correctAnswer: "bow out"
    },
    {
       id: 625,
        question: "大きさ，かさ",
        choices: ["bulk", "tiny", "smallness", "thinness"],
        correctAnswer: "bulk"
    },
    {
       id: 626,
        question: "皮をむく/皮",
        choices: ["peel", "wrap", "cover", "stick"],
        correctAnswer: "peel"
    },
    {
       id: 627,
        question: "最後に，結局",
        choices: ["firstly", "lastly", "initially", "at first"],
        correctAnswer: "lastly"
    },
    {
       id: 628,
        question: "深く悲しむ，嘆く",
        choices: ["celebrate", "grieve", "cheer", "rejoice"],
        correctAnswer: "grieve"
    },
    {
       id: 629,
        question: "から素早く脱出する，抜け出す",
        choices: ["snap out of", "remain in", "stay stuck in", "continue with"],
        correctAnswer: "snap out of"
    },
    {
       id: 630,
        question: "おでこ，ひたい",
        choices: ["forehead", "chin", "cheek", "jaw"],
        correctAnswer: "forehead"
    },
    {
       id: 631,
        question: "生産的な",
        choices: ["unproductive", "productive", "wasteful", "inefficient"],
        correctAnswer: "productive"
    },
    {
       id: 632,
        question: "通路",
        choices: ["aisle", "wall", "ceiling", "floor"],
        correctAnswer: "aisle"
    },
    {
       id: 633,
        question: "球体，球",
        choices: ["sphere", "cube", "pyramid", "rectangle"],
        correctAnswer: "sphere"
    },
    {
       id: 634,
        question: "すぐに，直ちに",
        choices: ["later", "right off", "eventually", "gradually"],
        correctAnswer: "right off"
    },
    {
       id: 635,
        question: "を保証する",
        choices: ["insure", "doubt", "risk", "neglect"],
        correctAnswer: "insure"
    },
    {
       id: 636,
        question: "密な，密集した",
        choices: ["dense", "thin", "sparse", "scattered"],
        correctAnswer: "dense"
    },
    {
       id: 637,
        question: "に少し浸す",
        choices: ["dip", "dry", "soak", "absorb"],
        correctAnswer: "dip"
    },
    {
       id: 638,
        question: "苦痛，苦悩",
        choices: ["distress", "comfort", "ease", "relief"],
        correctAnswer: "distress"
    },
    {
       id: 639,
        question: "目立つ，突き出た",
        choices: ["prominent", "hidden", "obscure", "invisible"],
        correctAnswer: "prominent"
    },
    {
       id: 640,
        question: "政治家",
        choices: ["statesman", "scientist", "engineer", "artist"],
        correctAnswer: "statesman"
    },
    {
       id: 641,
        question: "を打ち倒す，仰天させる",
        choices: ["bowl over", "lift up", "stand firm", "stay calm"],
        correctAnswer: "bowl over"
    },
    {
       id: 642,
        question: "実験的な，実験の",
        choices: ["experimental", "traditional", "fixed", "unchanging"],
        correctAnswer: "experimental"
    },
    {
       id: 643,
        question: "孤立した，隔離された",
        choices: ["isolated", "connected", "crowded", "included"],
        correctAnswer: "isolated"
    },
    {
       id: 644,
        question: "投げ捨てる，処分する",
        choices: ["cast away", "keep", "hold onto", "preserve"],
        correctAnswer: "cast away"
    },
    {
       id: 645,
        question: "同様に",
        choices: ["likewise", "differently", "contrarily", "oppositely"],
        correctAnswer: "likewise"
    },
    {
       id: 646,
        question: "を当てにする，頼る",
        choices: ["bank on", "ignore", "distrust", "avoid"],
        correctAnswer: "bank on"
    },
    {
       id: 647,
        question: "訴える，訴訟を起こす",
        choices: ["sue", "pardon", "forgive", "release"],
        correctAnswer: "sue"
    },
    {
       id: 648,
        question: "治療",
        choices: ["remedy", "disease", "illness", "infection"],
        correctAnswer: "remedy"
    },
    {
       id: 649,
        question: "電気",
        choices: ["electronics", "mechanics", "chemistry", "biology"],
        correctAnswer: "electronics"
    },
    {
       id: 650,
        question: "流暢な",
        choices: ["fluent", "halting", "hesitant", "stuttering"],
        correctAnswer: "fluent"
    },
    {
       id: 651,
        question: "別れ",
        choices: ["farewell", "greeting", "welcome", "arrival"],
        correctAnswer: "farewell"
    },
    {
       id: 652,
        question: "の証拠に，のしるしとして",
        choices: ["in token of", "in spite of", "apart from", "contrary to"],
        correctAnswer: "in token of"
    },
    {
       id: 653,
        question: "激しい，凶暴な",
        choices: ["fierce", "gentle", "calm", "mild"],
        correctAnswer: "fierce"
    },
    {
       id: 654,
        question: "を振りかける",
        choices: ["sprinkle", "pour", "collect", "absorb"],
        correctAnswer: "sprinkle"
    },
    {
       id: 655,
        question: "打ち勝つ",
        choices: ["prevail", "surrender", "lose", "fail"],
        correctAnswer: "prevail"
    },
    {
       id: 656,
        question: "両手を広げて，心から喜んで",
        choices: ["with open arms", "reluctantly", "hesitantly", "doubtfully"],
        correctAnswer: "with open arms"
    },
    {
       id: 657,
        question: "常連客，保護者",
        choices: ["patron", "customer", "stranger", "passerby"],
        correctAnswer: "patron"
    },
    {
       id: 658,
        question: "を取ってくる",
        choices: ["fetch", "leave", "abandon", "ignore"],
        correctAnswer: "fetch"
    },
    {
       id: 659,
        question: "懇願する，お願いする",
        choices: ["plead", "demand", "order", "command"],
        correctAnswer: "plead"
    },
    {
       id: 660,
        question: "同意，同調",
        choices: ["consensus", "disagreement", "argument", "conflict"],
        correctAnswer: "consensus"
    },
    {
       id: 661,
        question: "疑わしい，怪しい",
        choices: ["suspicious", "trustworthy", "reliable", "innocent"],
        correctAnswer: "suspicious"
    },
    {
       id: 662,
        question: "正確に，綿密に",
        choices: ["accurately", "vaguely", "roughly", "imprecisely"],
        correctAnswer: "accurately"
    },
    {
       id: 663,
        question: "を持っていない，に欠いている",
        choices: ["be devoid of", "be full of", "be rich in", "be abundant in"],
        correctAnswer: "be devoid of"
    },
    {
       id: 664,
        question: "辞任する，辞職する",
        choices: ["resign", "accept", "continue", "remain"],
        correctAnswer: "resign"
    },
    {
       id: 665,
        question: "よごれ",
        choices: ["stain", "cleanliness", "purity", "whiteness"],
        correctAnswer: "stain"
    },
    {
       id: 666,
        question: "得ようと努める，求める",
        choices: ["buck for", "reject", "avoid", "deny"],
        correctAnswer: "buck for"
    },
    {
       id: 667,
        question: "東洋の",
        choices: ["oriental", "western", "northern", "southern"],
        correctAnswer: "oriental"
    },
    {
       id: 668,
        question: "に負債がある，恩義がある",
        choices: ["be indebted to", "be free of", "be independent of", "owe nothing to"],
        correctAnswer: "be indebted to"
    },
    {
       id: 669,
        question: "を溶かす",
        choices: ["dissolve", "freeze", "solidify", "harden"],
        correctAnswer: "dissolve"
    },
    {
       id: 670,
        question: "適度な，適切な，ほどよい",
        choices: ["moderate", "excessive", "extreme", "severe"],
        correctAnswer: "moderate"
    },
    {
       id: 671,
        question: "電子レンジ",
        choices: ["stove", "oven", "microwave", "toaster"],
        correctAnswer: "microwave"
    },
    {
       id: 672,
        question: "不完全な，未完成の",
        choices: ["perfect", "imperfect", "flawless", "complete"],
        correctAnswer: "imperfect"
    },
    {
       id: 673,
        question: "たいまつ",
        choices: ["candle", "lamp", "torch", "bulb"],
        correctAnswer: "torch"
    },
    {
       id: 674,
        question: "使い走りをする，お使いをする",
        choices: ["run errands", "take a break", "stay home", "relax"],
        correctAnswer: "run errands"
    },
    {
       id: 675,
        question: "を整える，手入れする",
        choices: ["trim", "neglect", "ignore", "abandon"],
        correctAnswer: "trim"
    },
    {
       id: 676,
        question: "欠陥，欠点",
        choices: ["quality", "perfection", "defect", "excellence"],
        correctAnswer: "defect"
    },
    {
       id: 677,
        question: "楽観的な，前向きな",
        choices: ["pessimistic", "optimistic", "negative", "hopeless"],
        correctAnswer: "optimistic"
    },
    {
       id: 678,
        question: "評価，査定",
        choices: ["evaluation", "ignorance", "neglect", "disregard"],
        correctAnswer: "evaluation"
    },
    {
       id: 679,
        question: "付き添い，付随",
        choices: ["attendant", "leader", "boss", "manager"],
        correctAnswer: "attendant"
    },
    {
       id: 680,
        question: "ぼろきれ，布切れ",
        choices: ["silk", "rag", "fabric", "cloth"],
        correctAnswer: "rag"
    },
    {
       id: 681,
        question: "肋骨，あばら骨",
        choices: ["rib", "spine", "skull", "hip"],
        correctAnswer: "rib"
    },
    {
       id: 682,
        question: "を凝縮する，濃縮する",
        choices: ["expand", "condense", "widen", "stretch"],
        correctAnswer: "condense"
    },
    {
       id: 683,
        question: "一言で言えば，極めて簡単に言えば",
        choices: ["in a nutshell", "at length", "in detail", "word by word"],
        correctAnswer: "in a nutshell"
    },
    {
       id: 684,
        question: "機転",
        choices: ["wit", "dullness", "clumsiness", "ignorance"],
        correctAnswer: "wit"
    },
    {
       id: 685,
        question: "と密接な関係のある，深く関係した",
        choices: ["be bound up with", "be independent of", "be distant from", "be unrelated to"],
        correctAnswer: "be bound up with"
    },
    {
       id: 686,
        question: "気づいていない",
        choices: ["aware", "unaware", "attentive", "observant"],
        correctAnswer: "unaware"
    },
    {
       id: 687,
        question: "神聖な，神の",
        choices: ["sacred", "ordinary", "common", "profane"],
        correctAnswer: "sacred"
    },
    {
       id: 688,
        question: "忠実に，誠実に",
        choices: ["faithfully", "dishonestly", "carelessly", "inaccurately"],
        correctAnswer: "faithfully"
    },
    {
       id: 689,
        question: "繁栄する，栄える",
        choices: ["flourish", "decline", "fail", "wither"],
        correctAnswer: "flourish"
    },
    {
       id: 690,
        question: "完成，業績",
        choices: ["failure", "accomplishment", "defeat", "neglect"],
        correctAnswer: "accomplishment"
    },
    {
       id: 691,
        question: "控えめに言っても，遠からず",
        choices: ["to say the least", "exaggeratedly", "overstated", "wildly"],
        correctAnswer: "to say the least"
    },
    {
       id: 692,
        question: "勤勉な",
        choices: ["diligent", "lazy", "careless", "negligent"],
        correctAnswer: "diligent"
    },
    {
       id: 693,
        question: "粘土",
        choices: ["sand", "clay", "gravel", "soil"],
        correctAnswer: "clay"
    },
    {
       id: 694,
        question: "を規制する，統制する",
        choices: ["regulate", "abandon", "neglect", "ignore"],
        correctAnswer: "regulate"
    },
    {
       id: 695,
        question: "不幸，災厄",
        choices: ["fortune", "misfortune", "success", "luck"],
        correctAnswer: "misfortune"
    },
    {
       id: 696,
        question: "を禁じる，禁止する",
        choices: ["forbid", "allow", "permit", "authorize"],
        correctAnswer: "forbid"
    },
    {
       id: 697,
        question: "ひらめき，思い付き",
        choices: ["inspiration", "boredom", "fatigue", "dullness"],
        correctAnswer: "inspiration"
    },
    {
       id: 698,
        question: "きらめき，薄明かり",
        choices: ["gleam", "darkness", "shadow", "gloom"],
        correctAnswer: "gleam"
    },
    {
       id: 699,
        question: "保護的な，保護する",
        choices: ["protective", "harmful", "dangerous", "reckless"],
        correctAnswer: "protective"
    },
    {
       id: 700,
        question: "前進の，前進的な",
        choices: ["onward", "backward", "stationary", "regressive"],
        correctAnswer: "onward"
    },
    {
       id: 701,
        question: "の安否を尋ねる，を見舞う",
        choices: ["ask for", "inquire after", "search for", "check out"],
        correctAnswer: "inquire after"
    },
    {
       id: 702,
        question: "莫大に，広大に",
        choices: ["slightly", "immensely", "narrowly", "moderately"],
        correctAnswer: "immensely"
    },
    {
       id: 703,
        question: "排水路に流されて，失われて",
        choices: ["down the drain", "in place", "up in the air", "on track"],
        correctAnswer: "down the drain"
    },
    {
       id: 704,
        question: "早速，即座に",
        choices: ["promptly", "slowly", "hesitantly", "eventually"],
        correctAnswer: "promptly"
    },
    {
       id: 705,
        question: "こぶ，衝突",
        choices: ["bump", "crack", "dent", "chip"],
        correctAnswer: "bump"
    },
    {
       id: 706,
        question: "を覆う，代理となる",
        choices: ["cover for", "ignore", "replace", "move aside"],
        correctAnswer: "cover for"
    },
    {
       id: 707,
        question: "区画，病室",
        choices: ["ward", "room", "section", "department"],
        correctAnswer: "ward"
    },
    {
       id: 708,
        question: "新入生",
        choices: ["freshman", "senior", "graduate", "professor"],
        correctAnswer: "freshman"
    },
    {
       id: 709,
        question: "を精製する",
        choices: ["refine", "pollute", "contaminate", "corrupt"],
        correctAnswer: "refine"
    },
    {
       id: 710,
        question: "薄暗い，ほの暗い",
        choices: ["bright", "dim", "radiant", "shiny"],
        correctAnswer: "dim"
    },
    {
       id: 711,
        question: "再開する，続ける",
        choices: ["resume", "pause", "halt", "suspend"],
        correctAnswer: "resume"
    },
    {
       id: 712,
        question: "永遠の，永遠不変の",
        choices: ["temporary", "eternal", "short-term", "momentary"],
        correctAnswer: "eternal"
    },
    {
       id: 713,
        question: "をすげなく断る，無視する，拒否する",
        choices: ["accept", "brush off", "consider", "acknowledge"],
        correctAnswer: "brush off"
    },
    {
       id: 714,
        question: "に取り付かれる，で頭がいっぱい",
        choices: ["be obsessed with", "be indifferent to", "be bored with", "be relaxed about"],
        correctAnswer: "be obsessed with"
    },
    {
       id: 715,
        question: "植民地の",
        choices: ["colonial", "imperial", "modern", "democratic"],
        correctAnswer: "colonial"
    },
    {
       id: 716,
        question: "算数",
        choices: ["arithmetic", "geometry", "algebra", "calculus"],
        correctAnswer: "arithmetic"
    },
    {
       id: 717,
        question: "を尊重する，尊敬する",
        choices: ["esteem", "ignore", "despise", "mock"],
        correctAnswer: "esteem"
    },
    {
       id: 718,
        question: "通貨，貨幣",
        choices: ["currency", "bank", "money", "credit"],
        correctAnswer: "currency"
    },
    {
       id: 719,
        question: "ばかげた，おかしな",
        choices: ["ridiculous", "serious", "reasonable", "sensible"],
        correctAnswer: "ridiculous"
    },
    {
       id: 720,
        question: "計算，算定",
        choices: ["calculation", "estimation", "assumption", "guesswork"],
        correctAnswer: "calculation"
    },
    {
       id: 721,
        question: "すごい，ものすごい",
        choices: ["terrific", "terrible", "boring", "dull"],
        correctAnswer: "terrific"
    },
    {
       id: 722,
        question: "縫い目",
        choices: ["stitch", "tear", "cut", "hole"],
        correctAnswer: "stitch"
    },
    {
       id: 723,
        question: "牧草，牧草地",
        choices: ["pasture", "desert", "swamp", "forest"],
        correctAnswer: "pasture"
    },
    {
       id: 724,
        question: "について交渉する，話し合う",
        choices: ["bargain for", "ignore", "refuse", "demand"],
        correctAnswer: "bargain for"
    },
    {
       id: 725,
        question: "沸騰してこぼれる，憤慨する",
        choices: ["boil over", "stay calm", "cool down", "freeze"],
        correctAnswer: "boil over"
    },
    {
       id: 726,
        question: "とげ，茨",
        choices: ["thorn", "leaf", "root", "branch"],
        correctAnswer: "thorn"
    },
    {
       id: 727,
        question: "黄昏時",
        choices: ["twilight", "dawn", "noon", "midnight"],
        correctAnswer: "twilight"
    },
    {
       id: 728,
        question: "うめき声",
        choices: ["moan", "shout", "laugh", "cheer"],
        correctAnswer: "moan"
    },
    {
       id: 729,
        question: "不十分な",
        choices: ["lame", "sufficient", "strong", "adequate"],
        correctAnswer: "lame"
    },
    {
       id: 730,
        question: "合法的に，法律上",
        choices: ["legally", "illegally", "wrongly", "unjustly"],
        correctAnswer: "legally"
    },
    {
       id: 731,
        question: "取り外す，休暇を取る",
        choices: ["put on", "have off", "attach", "continue working"],
        correctAnswer: "have off"
    },
    {
       id: 732,
        question: "一見すると，表面上",
        choices: ["seemingly", "definitely", "truly", "clearly"],
        correctAnswer: "seemingly"
    },
    {
       id: 733,
        question: "特異な，非凡な",
        choices: ["ordinary", "singular", "common", "usual"],
        correctAnswer: "singular"
    },
    {
       id: 734,
        question: "を責める，非難する",
        choices: ["condemn", "praise", "approve", "commend"],
        correctAnswer: "condemn"
    },
    {
       id: 735,
        question: "信じられない，信じがたい",
        choices: ["unbelievable", "credible", "realistic", "believable"],
        correctAnswer: "unbelievable"
    },
    {
       id: 736,
        question: "再び続ける，再開する",
        choices: ["pick up the thread", "give up", "stop", "pause"],
        correctAnswer: "pick up the thread"
    },
    {
       id: 737,
        question: "創造性，独創性",
        choices: ["creativity", "imitation", "repetition", "habit"],
        correctAnswer: "creativity"
    },
    {
       id: 738,
        question: "情熱的な，熱情的な",
        choices: ["passionate", "indifferent", "apathetic", "cold"],
        correctAnswer: "passionate"
    },
    {
       id: 739,
        question: "乗り切る，切り抜ける",
        choices: ["tide over", "give up", "surrender", "fail"],
        correctAnswer: "tide over"
    },
    {
       id: 740,
        question: "外交の，外交上の",
        choices: ["diplomatic", "domestic", "local", "national"],
        correctAnswer: "diplomatic"
    },
    {
       id: 741,
        question: "未亡人，夫を亡くした女性",
        choices: ["widow", "bride", "orphan", "divorcee"],
        correctAnswer: "widow"
    },
    {
       id: 742,
        question: "飲み込む，使い尽くす",
        choices: ["swallow up", "spit out", "release", "throw away"],
        correctAnswer: "swallow up"
    },
    {
       id: 743,
        question: "締め切り，期限",
        choices: ["deadline", "extension", "delay", "postponement"],
        correctAnswer: "deadline"
    },
    {
       id: 744,
        question: "を凝視する，熟読する",
        choices: ["pore over", "skim through", "ignore", "glance at"],
        correctAnswer: "pore over"
    },
    {
       id: 745,
        question: "を宣言する，公表する",
        choices: ["proclaim", "conceal", "suppress", "deny"],
        correctAnswer: "proclaim"
    },
    {
       id: 746,
        question: "を拡大する，大きくする",
        choices: ["enlarge", "shrink", "reduce", "minimize"],
        correctAnswer: "enlarge"
    },
    {
       id: 747,
        question: "解決する，しわを伸ばす",
        choices: ["iron out", "create problems", "complicate", "ignore"],
        correctAnswer: "iron out"
    },
    {
       id: 748,
        question: "厳格な，断固とした",
        choices: ["stern", "lenient", "gentle", "easygoing"],
        correctAnswer: "stern"
    },
    {
       id: 749,
        question: "象牙，象牙質の",
        choices: ["ivory", "wood", "stone", "ceramic"],
        correctAnswer: "ivory"
    },
    {
       id: 750,
        question: "出口",
        choices: ["outlet", "entrance", "barrier", "wall"],
        correctAnswer: "outlet"
    },
    {
       id: 751,
        question: "明けても暮れても，毎日毎日",
        choices: ["day in, day out", "once in a while", "occasionally", "rarely"],
        correctAnswer: "day in, day out"
    },
    {
       id: 752,
        question: "を操縦する，かじを取る",
        choices: ["steer", "drift", "lose control", "crash"],
        correctAnswer: "steer"
    },
    {
       id: 753,
        question: "干し草",
        choices: ["hay", "grain", "wheat", "corn"],
        correctAnswer: "hay"
    },
    {
       id: 754,
        question: "直立の，まっすぐな",
        choices: ["erect", "crooked", "bent", "slanted"],
        correctAnswer: "erect"
    },
    {
       id: 755,
        question: "につまずく",
        choices: ["stumble", "balance", "glide", "walk steadily"],
        correctAnswer: "stumble"
    },
    {
       id: 756,
        question: "虫，故障",
        choices: ["bug", "fix", "solution", "correction"],
        correctAnswer: "bug"
    },
    {
       id: 757,
        question: "厳格な，険しい",
        choices: ["grim", "cheerful", "lighthearted", "pleasant"],
        correctAnswer: "grim"
    },
    {
       id: 758,
        question: "大聖堂",
        choices: ["cathedral", "shrine", "chapel", "mosque"],
        correctAnswer: "cathedral"
    },
    {
       id: 759,
        question: "強盗，強盗罪",
        choices: ["robbery", "donation", "gift", "purchase"],
        correctAnswer: "robbery"
    },
    {
       id: 760,
        question: "平手打ち",
        choices: ["slap", "punch", "kick", "hug"],
        correctAnswer: "slap"
    },
    {
       id: 761,
        question: "ぎこちない，不器用な",
        choices: ["awkward", "graceful", "smooth", "elegant"],
        correctAnswer: "awkward"
    },
    {
       id: 762,
        question: "戯れ",
        choices: ["lark", "seriousness", "rigidity", "formality"],
        correctAnswer: "lark"
    },
    {
       id: 763,
        question: "分離，分割",
        choices: ["separation", "union", "combination", "merger"],
        correctAnswer: "separation"
    },
    {
       id: 764,
        question: "化粧",
        choices: ["makeup", "skincare", "cosmetics", "perfume"],
        correctAnswer: "makeup"
    },
    {
       id: 765,
        question: "染料",
        choices: ["dye", "paint", "ink", "stain"],
        correctAnswer: "dye"
    },
    {
       id: 766,
        question: "膨れる，大きくなる",
        choices: ["swell", "shrink", "contract", "reduce"],
        correctAnswer: "swell"
    },
    {
       id: 767,
        question: "と混ざる，交じる",
        choices: ["mingle with", "separate from", "avoid", "exclude"],
        correctAnswer: "mingle with"
    },
    {
       id: 768,
        question: "無農薬の，有機の",
        choices: ["organic", "artificial", "synthetic", "chemical"],
        correctAnswer: "organic"
    },
    {
       id: 769,
        question: "理想的には，申し分なく",
        choices: ["ideally", "practically", "realistically", "approximately"],
        correctAnswer: "ideally"
    },
    {
       id: 770,
        question: "のために，の(利益の)ために",
        choices: ["for the good of", "at the cost of", "against the will of", "in spite of"],
        correctAnswer: "for the good of"
    },
    {
       id: 771,
        question: "ひどく怖がる，恐れる",
        choices: ["dread", "embrace", "welcome", "accept"],
        correctAnswer: "dread"
    },
    {
       id: 772,
        question: "義務づける，強制する",
        choices: ["oblige", "permit", "allow", "excuse"],
        correctAnswer: "oblige"
    },
    {
       id: 773,
        question: "滅びる，死ぬ",
        choices: ["perish", "survive", "flourish", "thrive"],
        correctAnswer: "perish"
    },
    {
       id: 774,
        question: "物置，納屋",
        choices: ["barn", "house", "tent", "warehouse"],
        correctAnswer: "barn"
    },
    {
       id: 775,
        question: "経済学者",
        choices: ["economist", "biologist", "physicist", "chemist"],
        correctAnswer: "economist"
    },
    {
       id: 776,
        question: "楽しい，うれしい",
        choices: ["delightful", "miserable", "gloomy", "dull"],
        correctAnswer: "delightful"
    },
    {
       id: 777,
        question: "を誇張する，大げさに言う",
        choices: ["exaggerate", "understate", "minimize", "downplay"],
        correctAnswer: "exaggerate"
    },
    {
       id: 778,
        question: "理論上は，理論的には",
        choices: ["in the abstract", "in practice", "concretely", "realistically"],
        correctAnswer: "in the abstract"
    },
    {
       id: 779,
        question: "道を譲る，くじける",
        choices: ["give way", "stand firm", "resist", "block"],
        correctAnswer: "give way"
    },
    {
       id: 780,
        question: "継続的な，持続的な",
        choices: ["continuous", "intermittent", "temporary", "occasional"],
        correctAnswer: "continuous"
    },
    {
       id: 781,
        question: "証明された",
        choices: ["proven", "doubtful", "unverified", "uncertain"],
        correctAnswer: "proven"
    },
    {
       id: 782,
        question: "団結，単一",
        choices: ["unity", "division", "conflict", "disunity"],
        correctAnswer: "unity"
    },
    {
       id: 783,
        question: "運命，使命",
        choices: ["destiny", "coincidence", "chance", "luck"],
        correctAnswer: "destiny"
    },
    {
       id: 784,
        question: "休憩，休み",
        choices: ["recess", "work", "continuation", "session"],
        correctAnswer: "recess"
    },
    {
       id: 785,
        question: "保存可能期間，賞味期限",
        choices: ["shelf life", "expiration date", "manufacturing date", "production time"],
        correctAnswer: "shelf life"
    },
    {
       id: 786,
        question: "豊富",
        choices: ["abundance", "scarcity", "lack", "deficiency"],
        correctAnswer: "abundance"
    },
    {
       id: 787,
        question: "引きちぎる，脱ぎ捨てる",
        choices: ["tear off", "put on", "attach", "sew"],
        correctAnswer: "tear off"
    },
    {
       id: 788,
        question: "魔女，魔法使い",
        choices: ["witch", "fairy", "angel", "priestess"],
        correctAnswer: "witch"
    },
    {
       id: 789,
        question: "に資本を投下する，を利用する",
        choices: ["capitalize on", "waste", "ignore", "miss out on"],
        correctAnswer: "capitalize on"
    },
    {
       id: 790,
        question: "栄光のある，名誉ある",
        choices: ["glorious", "shameful", "disgraceful", "dishonorable"],
        correctAnswer: "glorious"
    },
    {
       id: 791,
        question: "湿った",
        choices: ["damp", "dry", "parched", "arid"],
        correctAnswer: "damp"
    },
    {
       id: 792,
        question: "を廃棄する，配置する",
        choices: ["dispose", "retain", "keep", "preserve"],
        correctAnswer: "dispose"
    },
    {
       id: 793,
        question: "受け入れられない",
        choices: ["acceptable", "unacceptable", "permissible", "agreeable"],
        correctAnswer: "unacceptable"
    },
    {
       id: 794,
        question: "温度計",
        choices: ["thermometer", "barometer", "hygrometer", "altimeter"],
        correctAnswer: "thermometer"
    },
    {
       id: 795,
        question: "うめき声，うなり声",
        choices: ["groan", "cheer", "shout", "laugh"],
        correctAnswer: "groan"
    },
    {
       id: 796,
        question: "寝坊する，寝過ごす",
        choices: ["wake up early", "oversleep", "get up on time", "stay awake"],
        correctAnswer: "oversleep"
    },
    {
       id: 797,
        question: "を違反する，破る",
        choices: ["obey", "violate", "follow", "comply with"],
        correctAnswer: "violate"
    },
    {
       id: 798,
        question: "周波数，頻繁さ",
        choices: ["frequency", "rarity", "seldom", "infrequent"],
        correctAnswer: "frequency"
    },
    {
       id: 799,
        question: "激しい苦痛，苦悶",
        choices: ["agony", "comfort", "ease", "relief"],
        correctAnswer: "agony"
    },
    {
       id: 800,
        question: "ぞんざいに扱う，適当に扱う",
        choices: ["trifle with", "cherish", "respect", "appreciate"],
        correctAnswer: "trifle with"
    },
    {
       id: 801,
        question: "を誘惑する",
        choices: ["tempt", "repel", "discourage", "deter"],
        correctAnswer: "tempt"
    },
    {
       id: 802,
        question: "珍しい，滅多にない",
        choices: ["uncommon", "common", "frequent", "usual"],
        correctAnswer: "uncommon"
    },
    {
       id: 803,
        question: "食料不足，飢饉",
        choices: ["famine", "feast", "abundance", "plenty"],
        correctAnswer: "famine"
    },
    {
       id: 804,
        question: "時間に正確な，時間通りの",
        choices: ["punctual", "late", "tardy", "delayed"],
        correctAnswer: "punctual"
    },
    {
       id: 805,
        question: "を扱う，論じる",
        choices: ["deal with", "ignore", "neglect", "avoid"],
        correctAnswer: "deal with"
    },
    {
       id: 806,
        question: "であふれている，に富む",
        choices: ["abound in", "lack", "be scarce in", "run out of"],
        correctAnswer: "abound in"
    },
    {
       id: 807,
        question: "を召喚する，呼び出す",
        choices: ["summon", "dismiss", "banish", "reject"],
        correctAnswer: "summon"
    },
    {
       id: 808,
        question: "きらきら光る",
        choices: ["twinkle", "dull", "fade", "darken"],
        correctAnswer: "twinkle"
    },
    {
       id: 809,
        question: "取っ組み合う，取り組む",
        choices: ["wrestle with", "ignore", "surrender to", "avoid"],
        correctAnswer: "wrestle with"
    },
    {
       id: 810,
        question: "遠吠えする",
        choices: ["howl", "whisper", "bark", "murmur"],
        correctAnswer: "howl"
    },
    {
       id: 811,
        question: "一言一句，文字通りに",
        choices: ["word for word", "roughly", "generally", "approximately"],
        correctAnswer: "word for word"
    },
    {
       id: 812,
        question: "頑固な，固執する",
        choices: ["stubborn", "flexible", "yielding", "cooperative"],
        correctAnswer: "stubborn"
    },
    {
       id: 813,
        question: "温室，ビニールハウス",
        choices: ["greenhouse", "farm", "garden", "barn"],
        correctAnswer: "greenhouse"
    },
    {
       id: 814,
        question: "余命，残りの寿命",
        choices: ["life expectancy", "birth rate", "mortality rate", "fertility rate"],
        correctAnswer: "life expectancy"
    },
    {
       id: 815,
        question: "にお世辞を言う",
        choices: ["flatter", "insult", "criticize", "mock"],
        correctAnswer: "flatter"
    },
    {
       id: 816,
        question: "に生息する，住む",
        choices: ["inhabit", "abandon", "desert", "evacuate"],
        correctAnswer: "inhabit"
    },
    {
       id: 817,
        question: "眉をひそめる/しかめ面",
        choices: ["frown", "smile", "grin", "laugh"],
        correctAnswer: "frown"
    },
    {
       id: 818,
        question: "心理学",
        choices: ["psychology", "sociology", "anthropology", "philosophy"],
        correctAnswer: "psychology"
    },
    {
       id: 819,
        question: "増大する，築き上げる",
        choices: ["build up", "tear down", "reduce", "dismantle"],
        correctAnswer: "build up"
    },
    {
       id: 820,
        question: "用心深い，慎重な",
        choices: ["prudent", "reckless", "careless", "hasty"],
        correctAnswer: "prudent"
    },
    {
       id: 821,
        question: "が乾く，乾燥する",
        choices: ["air out", "soak", "dampen", "wet"],
        correctAnswer: "air out"
    },
    {
       id: 822,
        question: "に欠ける，必要とする",
        choices: ["want for", "have plenty of", "abound in", "be full of"],
        correctAnswer: "want for"
    },
    {
       id: 823,
        question: "本物の，真の",
        choices: ["fake", "genuine", "counterfeit", "fraudulent"],
        correctAnswer: "genuine"
    },
    {
       id: 824,
        question: "導体，指導者",
        choices: ["conductor", "insulator", "follower", "attendant"],
        correctAnswer: "conductor"
    },
    {
       id: 825,
        question: "絶対ではない，必ず，ではない",
        choices: ["certainly", "not absolutely", "definitely", "surely"],
        correctAnswer: "not absolutely"
    },
    {
       id: 826,
        question: "がらくた，半端なもの",
        choices: ["treasure", "odds and ends", "valuables", "antiques"],
        correctAnswer: "odds and ends"
    },
    {
       id: 827,
        question: "出版社",
        choices: ["publisher", "author", "editor", "printer"],
        correctAnswer: "publisher"
    },
    {
       id: 828,
        question: "巻き上げる，終わりにする",
        choices: ["wind up", "start", "continue", "prolong"],
        correctAnswer: "wind up"
    },
    {
       id: 829,
        question: "君主，王",
        choices: ["monarch", "citizen", "subject", "commoner"],
        correctAnswer: "monarch"
    },
    {
       id: 830,
        question: "火炎，炎",
        choices: ["blaze", "smoke", "spark", "fume"],
        correctAnswer: "blaze"
    },
    {
       id: 831,
        question: "かたまり",
        choices: ["heap", "bit", "piece", "fragment"],
        correctAnswer: "heap"
    },
    {
       id: 832,
        question: "を叫ぶ，大声で言う",
        choices: ["exclaim", "whisper", "murmur", "mutter"],
        correctAnswer: "exclaim"
    },
    {
       id: 833,
        question: "すすり泣く，涙声で泣く",
        choices: ["sob", "laugh", "shout", "yell"],
        correctAnswer: "sob"
    },
    {
       id: 834,
        question: "混沌",
        choices: ["chaos", "order", "harmony", "peace"],
        correctAnswer: "chaos"
    },
    {
       id: 835,
        question: "探査，探索",
        choices: ["exploration", "neglect", "ignorance", "avoidance"],
        correctAnswer: "exploration"
    },
    {
       id: 836,
        question: "悪夢",
        choices: ["nightmare", "dream", "fantasy", "illusion"],
        correctAnswer: "nightmare"
    },
    {
       id: 837,
        question: "予約，指定",
        choices: ["reservation", "cancellation", "postponement", "delay"],
        correctAnswer: "reservation"
    },
    {
       id: 838,
        question: "防止，予防",
        choices: ["prevention", "promotion", "encouragement", "exposure"],
        correctAnswer: "prevention"
    },
    {
       id: 839,
        question: "したい気分である，する気になっている",
        choices: ["in the mood for", "against", "unwilling to", "reluctant to"],
        correctAnswer: "in the mood for"
    },
    {
       id: 840,
        question: "を引き受ける，着手する",
        choices: ["undertake", "abandon", "refuse", "neglect"],
        correctAnswer: "undertake"
    },
    {
       id: 841,
        question: "根絶する，一掃する",
        choices: ["root out", "spread", "preserve", "nurture"],
        correctAnswer: "root out"
    },
    {
       id: 842,
        question: "によって，の力で",
        choices: ["by dint of", "despite", "regardless of", "in spite of"],
        correctAnswer: "by dint of"
    },
    {
       id: 843,
        question: "しぶしぶの，気が進まない",
        choices: ["reluctant", "eager", "enthusiastic", "willing"],
        correctAnswer: "reluctant"
    },
    {
       id: 844,
        question: "中立の，公平な",
        choices: ["neutral", "biased", "partial", "one-sided"],
        correctAnswer: "neutral"
    },
    {
       id: 845,
        question: "容易に，お安い御用で",
        choices: ["no sweat", "with difficulty", "struggling", "tough job"],
        correctAnswer: "no sweat"
    },
    {
       id: 846,
        question: "影響力のある，有力な",
        choices: ["influential", "powerless", "insignificant", "weak"],
        correctAnswer: "influential"
    },
    {
       id: 847,
        question: "を減らす，削減する",
        choices: ["cut down", "increase", "expand", "boost"],
        correctAnswer: "cut down"
    },
    {
       id: 848,
        question: "変装した，～したふり",
        choices: ["in disguise", "revealed", "unmasked", "exposed"],
        correctAnswer: "in disguise"
    },
    {
       id: 849,
        question: "青ざめる，血色が悪くなる",
        choices: ["turn pale", "blush", "redden", "darken"],
        correctAnswer: "turn pale"
    },
    {
       id: 850,
        question: "真昼，正午",
        choices: ["midday", "midnight", "dawn", "sunset"],
        correctAnswer: "midday"
    },
    {
       id: 851,
        question: "に知らせる，告げる",
        choices: ["acquaint", "ignore", "conceal", "withhold"],
        correctAnswer: "acquaint"
    },
    {
       id: 852,
        question: "を予期して，見込んで",
        choices: ["in anticipation of", "despite", "regardless of", "without expecting"],
        correctAnswer: "in anticipation of"
    },
    {
       id: 853,
        question: "器具，装置",
        choices: ["apparatus", "furniture", "decoration", "garment"],
        correctAnswer: "apparatus"
    },
    {
       id: 854,
        question: "ゆりかご",
        choices: ["cradle", "crib", "stroller", "cushion"],
        correctAnswer: "cradle"
    },
    {
       id: 855,
        question: "名詞",
        choices: ["noun", "verb", "adjective", "adverb"],
        correctAnswer: "noun"
    },
    {
       id: 856,
        question: "小さな泡，微細な泡",
        choices: ["foam", "bubble", "mist", "droplet"],
        correctAnswer: "foam"
    },
    {
       id: 857,
        question: "忘れっぽい，忘れやすい",
        choices: ["forgetful", "attentive", "mindful", "conscious"],
        correctAnswer: "forgetful"
    },
    {
       id: 858,
        question: "不名誉",
        choices: ["disgrace", "honor", "respect", "glory"],
        correctAnswer: "disgrace"
    },
    {
       id: 859,
        question: "傷跡",
        choices: ["scar", "bruise", "cut", "scratch"],
        correctAnswer: "scar"
    },
    {
       id: 860,
        question: "がっかりした，当ての外れた",
        choices: ["disappointed", "thrilled", "excited", "satisfied"],
        correctAnswer: "disappointed"
    },
    {
       id: 861,
        question: "の跡を辿る，追い詰める",
        choices: ["track down", "lose sight of", "overlook", "ignore"],
        correctAnswer: "track down"
    },
    {
       id: 862,
        question: "食料品",
        choices: ["grocery", "clothing", "furniture", "hardware"],
        correctAnswer: "grocery"
    },
    {
       id: 863,
        question: "王位，王座",
        choices: ["throne", "chair", "crown", "sofa"],
        correctAnswer: "throne"
    },
    {
       id: 864,
        question: "路肩に寄せる",
        choices: ["pullover", "speed up", "keep going", "accelerate"],
        correctAnswer: "pullover"
    },
    {
       id: 865,
        question: "宿，座席",
        choices: ["accommodation", "displacement", "removal", "eviction"],
        correctAnswer: "accommodation"
    },
    {
       id: 866,
        question: "建築家",
        choices: ["architect", "engineer", "designer", "contractor"],
        correctAnswer: "architect"
    },
    {
       id: 867,
        question: "大きく歩く，元気よく歩く",
        choices: ["stride", "stagger", "crawl", "shuffle"],
        correctAnswer: "stride"
    },
    {
       id: 868,
        question: "ミイラ",
        choices: ["mummy", "ghost", "zombie", "skeleton"],
        correctAnswer: "mummy"
    },
    {
       id: 869,
        question: "宿題，課題",
        choices: ["assignment", "exam", "lecture", "break"],
        correctAnswer: "assignment"
    },
    {
       id: 870,
        question: "せっかちな，性急な",
        choices: ["impatient", "calm", "patient", "relaxed"],
        correctAnswer: "impatient"
    },
    {
       id: 871,
        question: "を問い合わせる，尋ねる",
        choices: ["inquire", "ignore", "overlook", "neglect"],
        correctAnswer: "inquire"
    },
    {
       id: 872,
        question: "つぶやく",
        choices: ["murmur", "shout", "scream", "yell"],
        correctAnswer: "murmur"
    },
    {
       id: 873,
        question: "鋭角の，鋭い",
        choices: ["acute", "dull", "blunt", "rounded"],
        correctAnswer: "acute"
    },
    {
       id: 874,
        question: "大学生，学部生",
        choices: ["undergraduate", "graduate", "professor", "researcher"],
        correctAnswer: "undergraduate"
    },
    {
       id: 875,
        question: "に基づく，に頼る",
        choices: ["rest on", "ignore", "disregard", "abandon"],
        correctAnswer: "rest on"
    },
    {
       id: 876,
        question: "侵入，侵略",
        choices: ["invasion", "defense", "protection", "retreat"],
        correctAnswer: "invasion"
    },
    {
       id: 877,
        question: "突入する，侵入する",
        choices: ["plunge", "withdraw", "exit", "retreat"],
        correctAnswer: "plunge"
    },
    {
       id: 878,
        question: "香水，芳香",
        choices: ["perfume", "odor", "stench", "smoke"],
        correctAnswer: "perfume"
    },
    {
       id: 879,
        question: "立ち止まる，停止",
        choices: ["halt", "continue", "move on", "advance"],
        correctAnswer: "halt"
    },
    {
       id: 880,
        question: "生産者，製造者",
        choices: ["provider", "consumer", "buyer", "user"],
        correctAnswer: "provider"
    },
    {
       id: 881,
        question: "いたずら",
        choices: ["mischief", "kindness", "obedience", "seriousness"],
        correctAnswer: "mischief"
    },
    {
       id: 882,
        question: "くしゃみ",
        choices: ["sneeze", "cough", "yawn", "hiccup"],
        correctAnswer: "sneeze"
    },
    {
       id: 883,
        question: "とどろく，吠える",
        choices: ["roar", "whisper", "murmur", "giggle"],
        correctAnswer: "roar"
    },
    {
       id: 884,
        question: "例えば，たとえ… としても",
        choices: ["for instance", "in contrast", "on the contrary", "in the meantime"],
        correctAnswer: "for instance"
    },
    {
       id: 885,
        question: "身を低くする，大きな声を出さずにいる",
        choices: ["keep down", "stand up", "shout out", "rise up"],
        correctAnswer: "keep down"
    },
    {
       id: 886,
        question: "明白に，はっきりと",
        choices: ["plainly", "vaguely", "indistinctly", "obscurely"],
        correctAnswer: "plainly"
    },
    {
       id: 887,
        question: "既定では，初期段階から",
        choices: ["by default", "on purpose", "by accident", "intentionally"],
        correctAnswer: "by default"
    },
    {
       id: 888,
        question: "輸送，発送",
        choices: ["shipping", "storage", "collection", "retrieval"],
        correctAnswer: "shipping"
    },
    {
       id: 889,
        question: "建築",
        choices: ["architecture", "sculpture", "painting", "literature"],
        correctAnswer: "architecture"
    },
    {
       id: 890,
        question: "BにAを与える，負わせる",
        choices: ["inflict A on B", "reward A with B", "offer A to B", "provide A for B"],
        correctAnswer: "inflict A on B"
    },
    {
       id: 891,
        question: "を明らかにする，ふたを取る",
        choices: ["uncover", "hide", "conceal", "cover"],
        correctAnswer: "uncover"
    },
    {
       id: 892,
        question: "大使館",
        choices: ["embassy", "parliament", "court", "ministry"],
        correctAnswer: "embassy"
    },
    {
       id: 893,
        question: "悲観的な",
        choices: ["pessimistic", "optimistic", "hopeful", "cheerful"],
        correctAnswer: "pessimistic"
    },
    {
       id: 894,
        question: "保証，請け合い",
        choices: ["assurance", "doubt", "uncertainty", "hesitation"],
        correctAnswer: "assurance"
    },
    {
       id: 895,
        question: "を評価する，見積もる",
        choices: ["evaluate", "ignore", "underestimate", "misjudge"],
        correctAnswer: "evaluate"
    },
    {
       id: 896,
        question: "を乗り越える，を超える",
        choices: ["pull through", "give up", "surrender", "fail"],
        correctAnswer: "pull through"
    },
    {
       id: 897,
        question: "優雅な，上品な",
        choices: ["graceful", "clumsy", "awkward", "rough"],
        correctAnswer: "graceful"
    },
    {
       id: 898,
        question: "を廃止する，やめる",
        choices: ["abolish", "establish", "introduce", "legalize"],
        correctAnswer: "abolish"
    },
    {
       id: 899,
        question: "にも関わらず，けれども",
        choices: ["in spite of", "because of", "due to", "thanks to"],
        correctAnswer: "in spite of"
    },
    {
       id: 900,
        question: "を彫る",
        choices: ["carve", "paint", "write", "draw"],
        correctAnswer: "carve"
    },
    {
       id: 901,
        question: "機会を逃す，見落とす，見過ごす",
        choices: ["miss out", "catch up", "make the most of", "take advantage of"],
        correctAnswer: "miss out"
    },
    {
       id: 902,
        question: "描く，表現する",
        choices: ["portray", "erase", "conceal", "distort"],
        correctAnswer: "portray"
    },
    {
       id: 903,
        question: "をちらっと見る，垣間見る",
        choices: ["catch a glimpse of", "stare at", "gaze at", "observe"],
        correctAnswer: "catch a glimpse of"
    },
    {
       id: 904,
        question: "著しく，非常に",
        choices: ["remarkably", "slightly", "moderately", "barely"],
        correctAnswer: "remarkably"
    },
    {
       id: 905,
        question: "を超える，超過する",
        choices: ["exceed", "fall short of", "meet", "match"],
        correctAnswer: "exceed"
    },
    {
       id: 906,
        question: "生き返る",
        choices: ["revive", "fade", "perish", "wither"],
        correctAnswer: "revive"
    },
    {
       id: 907,
        question: "から奪う，略奪する",
        choices: ["deprive", "provide", "supply", "equip"],
        correctAnswer: "deprive"
    },
    {
       id: 908,
        question: "叫び声から遠い，からほど遠い",
        choices: ["far cry from", "identical to", "similar to", "close to"],
        correctAnswer: "far cry from"
    },
    {
       id: 909,
        question: "伝説，言い伝え",
        choices: ["legend", "myth", "truth", "fact"],
        correctAnswer: "legend"
    },
    {
       id: 910,
        question: "信じられない，信じがたい",
        choices: ["incredible", "believable", "realistic", "plausible"],
        correctAnswer: "incredible"
    },
    {
       id: 911,
        question: "を追い越す，追いつく",
        choices: ["overtake", "follow", "lag behind", "slow down"],
        correctAnswer: "overtake"
    },
    {
       id: 912,
        question: "無害な",
        choices: ["harmless", "dangerous", "toxic", "harmful"],
        correctAnswer: "harmless"
    },
    {
       id: 913,
        question: "同意する，賛成する",
        choices: ["consent", "oppose", "reject", "deny"],
        correctAnswer: "consent"
    },
    {
       id: 914,
        question: "装飾品，飾り",
        choices: ["ornament", "tool", "gadget", "device"],
        correctAnswer: "ornament"
    },
    {
       id: 915,
        question: "に送る，提出する",
        choices: ["send in", "hold back", "withdraw", "cancel"],
        correctAnswer: "send in"
    },
    {
       id: 916,
        question: "馬鹿",
        choices: ["idiot", "genius", "scholar", "expert"],
        correctAnswer: "idiot"
    },
    {
       id: 917,
        question: "複数の",
        choices: ["plural", "singular", "unique", "sole"],
        correctAnswer: "plural"
    },
    {
       id: 918,
        question: "地方の",
        choices: ["provincial", "urban", "metropolitan", "cosmopolitan"],
        correctAnswer: "provincial"
    },
    {
       id: 919,
        question: "除去，取り除く",
        choices: ["removal", "addition", "insertion", "attachment"],
        correctAnswer: "removal"
    },
    {
       id: 920,
        question: "精神的に，心理的に",
        choices: ["mentally", "physically", "materially", "externally"],
        correctAnswer: "mentally"
    },
    {
       id: 921,
        question: "徐々に取れる，減らす",
        choices: ["work off", "gain", "accumulate", "increase"],
        correctAnswer: "work off"
    },
    {
       id: 922,
        question: "へり，ふち",
        choices: ["brim", "center", "core", "middle"],
        correctAnswer: "brim"
    },
    {
       id: 923,
        question: "住居",
        choices: ["dwelling", "office", "workplace", "factory"],
        correctAnswer: "dwelling"
    },
    {
       id: 924,
        question: "重力，引力",
        choices: ["gravity", "levitation", "buoyancy", "weightlessness"],
        correctAnswer: "gravity"
    },
    {
       id: 925,
        question: "多様な，多種多様な",
        choices: ["diverse", "uniform", "monotonous", "homogeneous"],
        correctAnswer: "diverse"
    },
    {
       id: 926,
        question: "誓約，固い約束",
        choices: ["pledge", "betrayal", "denial", "lie"],
        correctAnswer: "pledge"
    },
    {
       id: 927,
        question: "期待，予想",
        choices: ["anticipation", "disappointment", "surprise", "unawareness"],
        correctAnswer: "anticipation"
    },
    {
       id: 928,
        question: "同時に",
        choices: ["simultaneously", "separately", "consecutively", "individually"],
        correctAnswer: "simultaneously"
    },
    {
       id: 929,
        question: "浸す，浸漬する",
        choices: ["soak", "dry", "evaporate", "dehydrate"],
        correctAnswer: "soak"
    },
    {
       id: 930,
        question: "補足，追加",
        choices: ["supplement", "reduction", "removal", "subtraction"],
        correctAnswer: "supplement"
    },
    {
       id: 931,
        question: "必然的に",
        choices: ["inevitably", "possibly", "doubtfully", "uncertainly"],
        correctAnswer: "inevitably"
    },
    {
       id: 932,
        question: "しゃがむ，かがむ",
        choices: ["crouch", "stand up", "stretch", "rise"],
        correctAnswer: "crouch"
    },
    {
       id: 933,
        question: "枝を出す，手を広げる",
        choices: ["branch out", "narrow down", "contract", "reduce"],
        correctAnswer: "branch out"
    },
    {
       id: 934,
        question: "大量に，豊富に",
        choices: ["in abundance", "in scarcity", "in short supply", "barely"],
        correctAnswer: "in abundance"
    },
    {
       id: 935,
        question: "を裂く，破る",
        choices: ["rip", "sew", "mend", "fix"],
        correctAnswer: "rip"
    },
    {
       id: 936,
        question: "監督，指導者",
        choices: ["supervision", "negligence", "abandonment", "indifference"],
        correctAnswer: "supervision"
    },
    {
       id: 937,
        question: "おどけた，滑稽な",
        choices: ["comical", "serious", "grim", "solemn"],
        correctAnswer: "comical"
    },
    {
       id: 938,
        question: "弁護士，協議",
        choices: ["counsel", "accuser", "defendant", "suspect"],
        correctAnswer: "counsel"
    },
    {
       id: 939,
        question: "でズルをする，裏切る",
        choices: ["cheat on", "be faithful to", "commit to", "stay loyal to"],
        correctAnswer: "cheat on"
    },
    {
       id: 940,
        question: "比喩，隠喩",
        choices: ["metaphor", "literal meaning", "reality", "fact"],
        correctAnswer: "metaphor"
    },
    {
       id: 941,
        question: "補償，賠償",
        choices: ["compensation", "debt", "loss", "forfeiture"],
        correctAnswer: "compensation"
    },
    {
       id: 942,
        question: "失礼な，無礼な",
        choices: ["impolite", "polite", "courteous", "respectful"],
        correctAnswer: "impolite"
    },
    {
       id: 943,
        question: "パン菓子",
        choices: ["pastry", "vegetable", "meat", "fruit"],
        correctAnswer: "pastry"
    },
    {
       id: 944,
        question: "残り，残りもの",
        choices: ["remainder", "whole", "complete", "entire"],
        correctAnswer: "remainder"
    },
    {
       id: 945,
        question: "伝記",
        choices: ["biography", "fiction", "novel", "poetry"],
        correctAnswer: "biography"
    },
    {
       id: 946,
        question: "根気強い，粘り強い",
        choices: ["persistent", "lazy", "careless", "inconsistent"],
        correctAnswer: "persistent"
    },
    {
       id: 947,
        question: "ごみ，がらくた",
        choices: ["rubbish", "treasure", "valuables", "jewel"],
        correctAnswer: "rubbish"
    },
    {
       id: 948,
        question: "恥ずべき",
        choices: ["shameful", "honorable", "noble", "respectable"],
        correctAnswer: "shameful"
    },
    {
       id: 949,
        question: "徐々に押しのける，辛勝する",
        choices: ["edge out", "lose by far", "be defeated", "give up"],
        correctAnswer: "edge out"
    },
    {
       id: 950,
        question: "虚栄心，うぬぼれ",
        choices: ["vanity", "humility", "modesty", "simplicity"],
        correctAnswer: "vanity"
    },
    {
       id: 951,
        question: "審判，審判員",
        choices: ["umpire", "player", "coach", "spectator"],
        correctAnswer: "umpire"
    },
    {
       id: 952,
        question: "強度，強烈さ",
        choices: ["intensity", "weakness", "fragility", "softness"],
        correctAnswer: "intensity"
    },
    {
       id: 953,
        question: "外交官，外交官僚",
        choices: ["diplomat", "soldier", "merchant", "scientist"],
        correctAnswer: "diplomat"
    },
    {
       id: 954,
        question: "するために努力する，するために尽力する",
        choices: ["exert oneself to", "give up on", "neglect to", "avoid doing"],
        correctAnswer: "exert oneself to"
    },
    {
       id: 955,
        question: "海軍の，海軍のもの",
        choices: ["naval", "army", "air force", "police"],
        correctAnswer: "naval"
    },
    {
       id: 956,
        question: "揺さぶる",
        choices: ["sway", "steady", "hold still", "stabilize"],
        correctAnswer: "sway"
    },
    {
       id: 957,
        question: "顕微鏡，測微鏡",
        choices: ["microscope", "telescope", "binoculars", "magnifying glass"],
        correctAnswer: "microscope"
    },
    {
       id: 958,
        question: "探り針",
        choices: ["probe", "needle", "scalpel", "spoon"],
        correctAnswer: "probe"
    },
    {
       id: 959,
        question: "幾何学",
        choices: ["geometry", "algebra", "calculus", "trigonometry"],
        correctAnswer: "geometry"
    },
    {
       id: 960,
        question: "ぼやけた",
        choices: ["fuzzy", "clear", "sharp", "distinct"],
        correctAnswer: "fuzzy"
    },
    {
       id: 961,
        question: "超高層建築物，摩天楼",
        choices: ["skyscraper", "cottage", "hut", "bungalow"],
        correctAnswer: "skyscraper"
    },
    {
       id: 962,
        question: "詐欺，騙し",
        choices: ["deceit", "honesty", "integrity", "truthfulness"],
        correctAnswer: "deceit"
    },
    {
       id: 963,
        question: "反乱，暴動",
        choices: ["rebellion", "obedience", "loyalty", "compliance"],
        correctAnswer: "rebellion"
    },
    {
       id: 964,
        question: "隔離，孤立",
        choices: ["isolation", "integration", "inclusion", "connection"],
        correctAnswer: "isolation"
    },
    {
       id: 965,
        question: "を横たえる，倒す",
        choices: ["lay down", "stand up", "raise", "elevate"],
        correctAnswer: "lay down"
    },
    {
       id: 966,
        question: "尊さ，高貴さ",
        choices: ["nobility", "dishonor", "shame", "disgrace"],
        correctAnswer: "nobility"
    },
    {
       id: 967,
        question: "唾を吐く",
        choices: ["spit", "swallow", "gulp", "sip"],
        correctAnswer: "spit"
    },
    {
       id: 968,
        question: "考え抜く，熟考する",
        choices: ["think out", "ignore", "neglect", "overlook"],
        correctAnswer: "think out"
    },
    {
       id: 969,
        question: "障害物，邪魔",
        choices: ["obstacle", "path", "shortcut", "aid"],
        correctAnswer: "obstacle"
    },
    {
       id: 970,
        question: "議長",
        choices: ["chairperson", "member", "attendee", "spectator"],
        correctAnswer: "chairperson"
    },
    {
       id: 971,
        question: "恥ずかしい，照れる",
        choices: ["embarrassed", "confident", "proud", "bold"],
        correctAnswer: "embarrassed"
    },
    {
       id: 972,
        question: "たっぷりの，たくさんの",
        choices: ["plentiful", "scarce", "limited", "insufficient"],
        correctAnswer: "plentiful"
    },
    {
       id: 973,
        question: "不器用な，ぶざまな",
        choices: ["all thumbs", "skillful", "dexterous", "capable"],
        correctAnswer: "all thumbs"
    },
    {
       id: 974,
        question: "果樹園",
        choices: ["orchard", "garden", "farm", "forest"],
        correctAnswer: "orchard"
    },
    {
       id: 975,
        question: "疲労，疲れ",
        choices: ["fatigue", "energy", "vitality", "strength"],
        correctAnswer: "fatigue"
    },
    {
       id: 976,
        question: "出席，参列",
        choices: ["attendance", "absence", "avoidance", "neglect"],
        correctAnswer: "attendance"
    },
    {
       id: 977,
        question: "遠回りする，立ち寄る",
        choices: ["come around", "go straight", "bypass", "ignore"],
        correctAnswer: "come around"
    },
    {
       id: 978,
        question: "確率",
        choices: ["probability", "certainty", "impossibility", "assumption"],
        correctAnswer: "probability"
    },
    {
       id: 979,
        question: "予測，予想",
        choices: ["prediction", "reality", "fact", "confirmation"],
        correctAnswer: "prediction"
    },
    {
       id: 980,
        question: "所有権",
        choices: ["ownership", "lease", "loan", "rental"],
        correctAnswer: "ownership"
    },
    {
       id: 981,
        question: "方程式",
        choices: ["equation", "inequality", "expression", "calculation"],
        correctAnswer: "equation"
    },
    {
       id: 982,
        question: "会計，計算",
        choices: ["accounting", "marketing", "sales", "logistics"],
        correctAnswer: "accounting"
    },
    {
       id: 983,
        question: "を粉砕する",
        choices: ["shatter", "assemble", "construct", "restore"],
        correctAnswer: "shatter"
    },
    {
       id: 984,
        question: "予備的な，予備の",
        choices: ["preliminary", "final", "definite", "conclusive"],
        correctAnswer: "preliminary"
    },
    {
       id: 985,
        question: "忍耐，がまん",
        choices: ["endurance", "weakness", "failure", "impatience"],
        correctAnswer: "endurance"
    },
    {
       id: 986,
        question: "艦隊",
        choices: ["fleet", "army", "squadron", "battalion"],
        correctAnswer: "fleet"
    },
    {
       id: 987,
        question: "を監督する，延期する",
        choices: ["stand over", "ignore", "neglect", "hurry up"],
        correctAnswer: "stand over"
    },
    {
       id: 988,
        question: "彗星",
        choices: ["comet", "planet", "asteroid", "star"],
        correctAnswer: "comet"
    },
    {
       id: 989,
        question: "居心地の良い，快適な",
        choices: ["cozy", "uncomfortable", "cold", "harsh"],
        correctAnswer: "cozy"
    },
    {
       id: 990,
        question: "憶測，推測",
        choices: ["speculation", "certainty", "fact", "proof"],
        correctAnswer: "speculation"
    },
    {
       id: 991,
        question: "を実行する，遂行する",
        choices: ["execute", "abandon", "neglect", "postpone"],
        correctAnswer: "execute"
    },
    {
       id: 992,
        question: "タイヤがパンクする，パンクしている",
        choices: ["have a flat tire", "inflate a tire", "repair a tire", "check air pressure"],
        correctAnswer: "have a flat tire"
    },
    {
       id: 993,
        question: "傑作，名作",
        choices: ["masterpiece", "failure", "disaster", "flop"],
        correctAnswer: "masterpiece"
    },
    {
       id: 994,
        question: "修道女",
        choices: ["nun", "priest", "monk", "bishop"],
        correctAnswer: "nun"
    },
    {
       id: 995,
        question: "やる気がある，乗り気になっている",
        choices: ["be keen to", "be reluctant to", "avoid doing", "hesitate to"],
        correctAnswer: "be keen to"
    },
    {
       id: 996,
        question: "差別，区別",
        choices: ["discrimination", "equality", "fairness", "justice"],
        correctAnswer: "discrimination"
    },
    {
       id: 997,
        question: "を洗い流す，を洗い落とす",
        choices: ["wash away", "stain", "soak in", "retain"],
        correctAnswer: "wash away"
    },
    {
       id: 998,
        question: "跳ねる，はずむ",
        choices: ["bounce", "sink", "drop", "fall flat"],
        correctAnswer: "bounce"
    },
    {
       id: 999,
        question: "青写真",
        choices: ["blueprint", "sketch", "draft", "scribble"],
        correctAnswer: "blueprint"
    },
    {
       id: 1000,
        question: "を引き起こす，発生させる",
        choices: ["bring about", "prevent", "halt", "delay"],
        correctAnswer: "bring about"
    },
    {
       id: 1001,
        question: "邪魔な，迷惑な",
        choices: ["disturbing", "pleasant", "calming", "soothing"],
        correctAnswer: "disturbing"
    },
    {
       id: 1002,
        question: "注意深い",
        choices: ["attentive", "careless", "negligent", "distracted"],
        correctAnswer: "attentive"
    },
    {
       id: 1003,
        question: "根付く，定着する",
        choices: ["take root", "fade away", "be uprooted", "disappear"],
        correctAnswer: "take root"
    },
    {
       id: 1004,
        question: "をあざ笑う，ばかにする",
        choices: ["mock", "praise", "admire", "respect"],
        correctAnswer: "mock"
    },
    {
       id: 1005,
        question: "AがBだと分かる，認識する",
        choices: ["identify A as B", "confuse A with B", "mistake A for B", "ignore A as B"],
        correctAnswer: "identify A as B"
    },
    {
       id: 1006,
        question: "受付係",
        choices: ["receptionist", "manager", "customer", "janitor"],
        correctAnswer: "receptionist"
    },
    {
       id: 1007,
        question: "身分証明書，身元確認",
        choices: ["identification", "license", "certificate", "passport"],
        correctAnswer: "identification"
    },
    {
       id: 1008,
        question: "獲物，捕食対象",
        choices: ["prey", "hunter", "predator", "attacker"],
        correctAnswer: "prey"
    },
    {
       id: 1009,
        question: "神社，聖堂",
        choices: ["shrine", "church", "temple", "mosque"],
        correctAnswer: "shrine"
    },
    {
       id: 1010,
        question: "独りの，独りぼっちの",
        choices: ["solitary", "social", "companionable", "friendly"],
        correctAnswer: "solitary"
    },
    {
       id: 1011,
        question: "吊り上げる，ジャッキで上げる",
        choices: ["jack up", "lower", "drop", "bring down"],
        correctAnswer: "jack up"
    },
    {
       id: 1012,
        question: "磁気の，磁石の",
        choices: ["magnetic", "electrical", "gravitational", "chemical"],
        correctAnswer: "magnetic"
    },
    {
       id: 1013,
        question: "合図，きっかけ",
        choices: ["cue", "delay", "barrier", "block"],
        correctAnswer: "cue"
    },
    {
       id: 1014,
        question: "をかき混ぜる，素早く進む",
        choices: ["scramble", "organize", "arrange", "settle"],
        correctAnswer: "scramble"
    },
    {
       id: 1015,
        question: "評議員",
        choices: ["councilor", "president", "governor", "mayor"],
        correctAnswer: "councilor"
    },
    {
       id: 1016,
        question: "連合，連盟",
        choices: ["federation", "isolation", "division", "separation"],
        correctAnswer: "federation"
    },
    {
       id: 1017,
        question: "つまり，要するに",
        choices: ["in short", "in detail", "at length", "broadly speaking"],
        correctAnswer: "in short"
    },
    {
       id: 1018,
        question: "安価な，費用のかからない",
        choices: ["inexpensive", "expensive", "costly", "overpriced"],
        correctAnswer: "inexpensive"
    },
    {
       id: 1019,
        question: "天文学者",
        choices: ["astronomer", "biologist", "chemist", "physicist"],
        correctAnswer: "astronomer"
    },
    {
       id: 1020,
        question: "大勢，多く",
        choices: ["multitude", "minority", "few", "scarcity"],
        correctAnswer: "multitude"
    },
    {
       id: 1021,
        question: "木材",
        choices: ["lumber", "metal", "stone", "plastic"],
        correctAnswer: "lumber"
    },
    {
       id: 1022,
        question: "敵意のある，反感を持つ，敵対視する",
        choices: ["hostile", "friendly", "welcoming", "kind"],
        correctAnswer: "hostile"
    },
    {
       id: 1023,
        question: "二ヶ国語話者，バイリンガル",
        choices: ["bilingual", "monolingual", "illiterate", "mute"],
        correctAnswer: "bilingual"
    },
    {
       id: 1024,
        question: "主張，信条，主義",
        choices: ["insistence", "doubt", "hesitation", "uncertainty"],
        correctAnswer: "insistence"
    },
    {
       id: 1025,
        question: "運営の，管理の",
        choices: ["administrative", "technical", "manual", "physical"],
        correctAnswer: "administrative"
    },
    {
       id: 1026,
        question: "階段",
        choices: ["staircase", "corridor", "balcony", "hallway"],
        correctAnswer: "staircase"
    },
    {
       id: 1027,
        question: "継承，相続",
        choices: ["inheritance", "loss", "abandonment", "deprivation"],
        correctAnswer: "inheritance"
    },
    {
       id: 1028,
        question: "正確さ，精密",
        choices: ["accuracy", "error", "mistake", "uncertainty"],
        correctAnswer: "accuracy"
    },
    {
       id: 1029,
        question: "死を伴う",
        choices: ["mortal", "immortal", "eternal", "perpetual"],
        correctAnswer: "mortal"
    },
    {
       id: 1030,
        question: "定期船",
        choices: ["liner", "cargo ship", "submarine", "speedboat"],
        correctAnswer: "liner"
    },
    {
       id: 1031,
        question: "急な，不意の",
        choices: ["abrupt", "gradual", "slow", "steady"],
        correctAnswer: "abrupt"
    },
    {
       id: 1032,
        question: "登録",
        choices: ["registration", "cancellation", "withdrawal", "removal"],
        correctAnswer: "registration"
    },
    {
       id: 1033,
        question: "枯渇，疲労",
        choices: ["exhaustion", "energy", "vitality", "rejuvenation"],
        correctAnswer: "exhaustion"
    },
    {
       id: 1034,
        question: "下に向って叫ぶ，叱りつける",
        choices: ["call down", "praise", "encourage", "cheer up"],
        correctAnswer: "call down"
    },
    {
       id: 1035,
        question: "集団",
        choices: ["cluster", "individual", "isolation", "solitude"],
        correctAnswer: "cluster"
    },
    {
       id: 1036,
        question: "台本，脚本",
        choices: ["script", "novel", "article", "report"],
        correctAnswer: "script"
    },
    {
       id: 1037,
        question: "伝染性の，感染する",
        choices: ["infectious", "harmless", "non-contagious", "benign"],
        correctAnswer: "infectious"
    },
    {
       id: 1038,
        question: "臭い，悪臭",
        choices: ["odor", "fragrance", "aroma", "perfume"],
        correctAnswer: "odor"
    },
    {
       id: 1039,
        question: "広大な，広い",
        choices: ["ample", "narrow", "cramped", "small"],
        correctAnswer: "ample"
    },
    {
       id: 1040,
        question: "装飾用の",
        choices: ["ornamental", "functional", "practical", "utilitarian"],
        correctAnswer: "ornamental"
    },
    {
       id: 1041,
        question: "鈍さ，鈍感",
        choices: ["dullness", "sharpness", "intelligence", "brightness"],
        correctAnswer: "dullness"
    },
    {
       id: 1042,
        question: "指示，指し示すこと",
        choices: ["indication", "uncertainty", "doubt", "guess"],
        correctAnswer: "indication"
    },
    {
       id: 1043,
        question: "証書，証券",
        choices: ["certificate", "receipt", "bill", "invoice"],
        correctAnswer: "certificate"
    },
    {
       id: 1044,
        question: "記憶，思い出",
        choices: ["remembrance", "forgetfulness", "ignorance", "neglect"],
        correctAnswer: "remembrance"
    },
    {
       id: 1045,
        question: "急な動き",
        choices: ["jerk", "flow", "smoothness", "grace"],
        correctAnswer: "jerk"
    },
    {
       id: 1046,
        question: "東洋",
        choices: ["orient", "occident", "west", "Europe"],
        correctAnswer: "orient"
    },
    {
       id: 1047,
        question: "子孫",
        choices: ["offspring", "ancestor", "forefather", "predecessor"],
        correctAnswer: "offspring"
    },
    {
       id: 1048,
        question: "相手",
        choices: ["counterpart", "enemy", "stranger", "opponent"],
        correctAnswer: "counterpart"
    },
    {
       id: 1049,
        question: "事実を記録した",
        choices: ["documentary", "fictional", "fantasy", "mythical"],
        correctAnswer: "documentary"
    },
    {
       id: 1050,
        question: "を削り取る",
        choices: ["scrape", "polish", "smooth", "coat"],
        correctAnswer: "scrape"
    },
    {
       id: 1051,
        question: "を奉納する，捧げる",
        choices: ["dedicate", "neglect", "ignore", "waste"],
        correctAnswer: "dedicate"
    },
    {
       id: 1052,
        question: "宇宙飛行士",
        choices: ["astronaut", "pilot", "sailor", "engineer"],
        correctAnswer: "astronaut"
    },
    {
       id: 1053,
        question: "わんぱくな，いたずらな",
        choices: ["naughty", "obedient", "polite", "well-behaved"],
        correctAnswer: "naughty"
    },
    {
       id: 1054,
        question: "妊娠",
        choices: ["pregnancy", "infertility", "menopause", "sterility"],
        correctAnswer: "pregnancy"
    },
    {
       id: 1055,
        question: "比較できる，比べられる",
        choices: ["comparable", "different", "unique", "opposite"],
        correctAnswer: "comparable"
    },
    {
       id: 1056,
        question: "にたびたび行く",
        choices: ["haunt", "avoid", "neglect", "ignore"],
        correctAnswer: "haunt"
    },
    {
       id: 1057,
        question: "ごみ，価値のないもの",
        choices: ["trash", "treasure", "valuable", "artifact"],
        correctAnswer: "trash"
    },
    {
       id: 1058,
        question: "郊外",
        choices: ["outskirt", "downtown", "city center", "metropolis"],
        correctAnswer: "outskirt"
    },
    {
       id: 1059,
        question: "有効な，根拠のある",
        choices: ["valid", "invalid", "false", "incorrect"],
        correctAnswer: "valid"
    },
    {
       id: 1060,
        question: "舞台裏で，陰で",
        choices: ["behind the scenes", "in public", "out in the open", "in broad daylight"],
        correctAnswer: "behind the scenes"
    },
    {
       id: 1061,
        question: "豊潤な，熟した",
        choices: ["mellow", "bitter", "sour", "harsh"],
        correctAnswer: "mellow"
    },
    {
       id: 1062,
        question: "動物の足",
        choices: ["paw", "hoof", "claw", "tail"],
        correctAnswer: "paw"
    },
    {
       id: 1063,
        question: "遺伝的な，遺伝による",
        choices: ["genetic", "acquired", "learned", "artificial"],
        correctAnswer: "genetic"
    },
    {
       id: 1064,
        question: "刺激",
        choices: ["stimulus", "reaction", "response", "effect"],
        correctAnswer: "stimulus"
    },
    {
       id: 1065,
        question: "壮観な，見事な",
        choices: ["spectacular", "ordinary", "dull", "boring"],
        correctAnswer: "spectacular"
    },
    {
       id: 1066,
        question: "別荘",
        choices: ["villa", "apartment", "cottage", "mansion"],
        correctAnswer: "villa"
    },
    {
       id: 1067,
        question: "肌寒い",
        choices: ["chilly", "warm", "hot", "humid"],
        correctAnswer: "chilly"
    },
    {
       id: 1068,
        question: "湾曲させる",
        choices: ["crook", "straighten", "flatten", "extend"],
        correctAnswer: "crook"
    },
    {
       id: 1069,
        question: "高価な，費用のかかる",
        choices: ["costly", "cheap", "affordable", "inexpensive"],
        correctAnswer: "costly"
    },
    {
       id: 1070,
        question: "粗末な，下等な",
        choices: ["coarse", "fine", "delicate", "soft"],
        correctAnswer: "coarse"
    },
    {
       id: 1071,
        question: "全部買う，買収する",
        choices: ["buy up", "sell off", "give away", "donate"],
        correctAnswer: "buy up"
    },
    {
       id: 1072,
        question: "非難，告発",
        choices: ["accusation", "praise", "compliment", "approval"],
        correctAnswer: "accusation"
    },
    {
       id: 1073,
        question: "取引，処理",
        choices: ["transaction", "dispute", "conflict", "argument"],
        correctAnswer: "transaction"
    },
    {
       id: 1074,
        question: "愚かさ，愚鈍",
        choices: ["stupidity", "intelligence", "brilliance", "wisdom"],
        correctAnswer: "stupidity"
    },
    {
       id: 1075,
        question: "漏れ",
        choices: ["leak", "seal", "containment", "blockage"],
        correctAnswer: "leak"
    },
    {
       id: 1076,
        question: "を押し込む，つめ込む",
        choices: ["tuck", "spread", "extend", "expand"],
        correctAnswer: "tuck"
    },
    {
       id: 1077,
        question: "さえしないで，すらしない",
        choices: ["without so much as", "with great effort", "after careful consideration", "despite many attempts"],
        correctAnswer: "without so much as"
    },
    {
       id: 1078,
        question: "置き棚",
        choices: ["rack", "table", "drawer", "cabinet"],
        correctAnswer: "rack"
    },
    {
       id: 1079,
        question: "を利用する，を活用する",
        choices: ["avail oneself of", "ignore", "reject", "overlook"],
        correctAnswer: "avail oneself of"
    },
    {
       id: 1080,
        question: "ためらい，躊躇",
        choices: ["hesitation", "confidence", "certainty", "assurance"],
        correctAnswer: "hesitation"
    },
    {
       id: 1081,
        question: "効用",
        choices: ["utility", "uselessness", "waste", "inefficiency"],
        correctAnswer: "utility"
    },
    {
       id: 1082,
        question: "その上に，さらに",
        choices: ["furthermore", "however", "nevertheless", "conversely"],
        correctAnswer: "furthermore"
    },
    {
       id: 1083,
        question: "閉鎖的な，内向的な",
        choices: ["exclusive", "inclusive", "open-minded", "welcoming"],
        correctAnswer: "exclusive"
    },
    {
       id: 1084,
        question: "意味する，示す",
        choices: ["signify", "confuse", "obscure", "complicate"],
        correctAnswer: "signify"
    },
    {
       id: 1085,
        question: "上に突き出る，両手を挙げさせる",
        choices: ["stick up", "bend down", "pull in", "lie flat"],
        correctAnswer: "stick up"
    },
    {
       id: 1086,
        question: "排他的に，限定して",
        choices: ["exclusively", "widely", "generally", "broadly"],
        correctAnswer: "exclusively"
    },
    {
       id: 1087,
        question: "多様性，多様化",
        choices: ["diversity", "uniformity", "monotony", "sameness"],
        correctAnswer: "diversity"
    },
    {
       id: 1088,
        question: "音声の，声の",
        choices: ["vocal", "silent", "mute", "soundless"],
        correctAnswer: "vocal"
    },
    {
       id: 1089,
        question: "例外の，まれな",
        choices: ["exceptional", "common", "frequent", "usual"],
        correctAnswer: "exceptional"
    },
    {
       id: 1090,
        question: "おそらく，ほぼ確実に",
        choices: ["in all likelihood", "unlikely", "doubtfully", "improbably"],
        correctAnswer: "in all likelihood"
    },
    {
       id: 1091,
        question: "責任を負えない，無責任な",
        choices: ["irresponsible", "responsible", "reliable", "trustworthy"],
        correctAnswer: "irresponsible"
    },
    {
       id: 1092,
        question: "特有の，独特の",
        choices: ["distinctive", "common", "ordinary", "usual"],
        correctAnswer: "distinctive"
    },
    {
       id: 1093,
        question: "遠くの",
        choices: ["faraway", "near", "close", "adjacent"],
        correctAnswer: "faraway"
    },
    {
       id: 1094,
        question: "軽く吹くこと，一吹き",
        choices: ["puff", "gale", "breeze", "gust"],
        correctAnswer: "puff"
    },
    {
       id: 1095,
        question: "誠意，誠実",
        choices: ["sincerity", "dishonesty", "deception", "insincerity"],
        correctAnswer: "sincerity"
    },
    {
       id: 1096,
        question: "疑いもなく，確かに",
        choices: ["beyond question", "in doubt", "uncertain", "questionable"],
        correctAnswer: "beyond question"
    },
    {
       id: 1097,
        question: "悪意のある，意地悪な",
        choices: ["vicious", "kind", "gentle", "benevolent"],
        correctAnswer: "vicious"
    },
    {
       id: 1098,
        question: "飢餓，餓死",
        choices: ["starvation", "abundance", "prosperity", "sufficiency"],
        correctAnswer: "starvation"
    },
    {
       id: 1099,
        question: "失言，口を滑らせる",
        choices: ["slip of the tongue", "clear speech", "perfect statement", "intentional remark"],
        correctAnswer: "slip of the tongue"
    },
    {
       id: 1100,
        question: "積み重ねる，累積する",
        choices: ["stack", "scatter", "spread", "separate"],
        correctAnswer: "stack"
    },
    {
       id: 1101,
        question: "に頼る，を当てにする",
        choices: ["rely on", "ignore", "neglect", "distrust"],
        correctAnswer: "rely on"
    },
    {
       id: 1102,
        question: "と一緒に，並行して",
        choices: ["alongside", "apart from", "far from", "separately from"],
        correctAnswer: "alongside"
    },
    {
       id: 1103,
        question: "から生じる，から生まれる",
        choices: ["spring from", "end in", "lead to", "result in"],
        correctAnswer: "spring from"
    },
    {
       id: 1104,
        question: "独占，専売",
        choices: ["monopoly", "competition", "variety", "diversity"],
        correctAnswer: "monopoly"
    },
    {
       id: 1105,
        question: "無謀な，向こう見ずな",
        choices: ["reckless", "cautious", "careful", "thoughtful"],
        correctAnswer: "reckless"
    },
    {
       id: 1106,
        question: "AからBを取り去る，奪う",
        choices: ["strip A of B", "give A B", "provide A with B", "add B to A"],
        correctAnswer: "strip A of B"
    },
    {
       id: 1107,
        question: "小売り",
        choices: ["retail", "wholesale", "bulk sale", "import"],
        correctAnswer: "retail"
    },
    {
       id: 1108,
        question: "活用する",
        choices: ["utilize", "waste", "ignore", "neglect"],
        correctAnswer: "utilize"
    },
    {
       id: 1109,
        question: "思い切ってやる，やってみる",
        choices: ["take the plunge", "hesitate", "hold back", "avoid"],
        correctAnswer: "take the plunge"
    },
    {
       id: 1110,
        question: "撤回，撤退",
        choices: ["withdrawal", "engagement", "commitment", "advancement"],
        correctAnswer: "withdrawal"
    },
    {
       id: 1111,
        question: "を開示する，見せる",
        choices: ["disclose", "hide", "conceal", "suppress"],
        correctAnswer: "disclose"
    },
    {
       id: 1112,
        question: "に重点を置く，を重んじる",
        choices: ["put emphasis on", "neglect", "overlook", "ignore"],
        correctAnswer: "put emphasis on"
    },
    {
       id: 1113,
        question: "操り人形，指人形",
        choices: ["puppet", "doll", "statue", "figurine"],
        correctAnswer: "puppet"
    },
    {
       id: 1114,
        question: "を寄せ付けない，引き離す",
        choices: ["hold off", "invite", "welcome", "embrace"],
        correctAnswer: "hold off"
    },
    {
       id: 1115,
        question: "挑発する，引き起こす",
        choices: ["provoke", "calm", "pacify", "suppress"],
        correctAnswer: "provoke"
    },
    {
       id: 1116,
        question: "石の，石の多い",
        choices: ["stony", "soft", "smooth", "mushy"],
        correctAnswer: "stony"
    },
    {
       id: 1117,
        question: "倫理",
        choices: ["ethics", "corruption", "dishonesty", "immorality"],
        correctAnswer: "ethics"
    },
    {
       id: 1118,
        question: "を追い求める，必死になる",
        choices: ["gun for", "avoid", "neglect", "dismiss"],
        correctAnswer: "gun for"
    },
    {
       id: 1119,
        question: "かがむ",
        choices: ["stoop", "stand up", "straighten", "stretch"],
        correctAnswer: "stoop"
    },
    {
       id: 1120,
        question: "を取り戻す，回復する",
        choices: ["regain", "lose", "forget", "surrender"],
        correctAnswer: "regain"
    },
    {
       id: 1121,
        question: "路地",
        choices: ["alley", "highway", "boulevard", "avenue"],
        correctAnswer: "alley"
    },
    {
       id: 1122,
        question: "革新，刷新",
        choices: ["innovation", "tradition", "habit", "routine"],
        correctAnswer: "innovation"
    },
    {
       id: 1123,
        question: "震える，おののく",
        choices: ["shiver", "sweat", "freeze", "calm"],
        correctAnswer: "shiver"
    },
    {
       id: 1124,
        question: "不十分な，不適切な",
        choices: ["inadequate", "sufficient", "appropriate", "adequate"],
        correctAnswer: "inadequate"
    },
    {
       id: 1125,
        question: "遂行",
        choices: ["fulfillment", "failure", "neglect", "abandonment"],
        correctAnswer: "fulfillment"
    },
    {
       id: 1126,
        question: "延長時間，超過時間",
        choices: ["overtime", "deadline", "early shift", "day off"],
        correctAnswer: "overtime"
    },
    {
       id: 1127,
        question: "偉業，業績",
        choices: ["exploit", "mistake", "failure", "misconduct"],
        correctAnswer: "exploit"
    },
    {
       id: 1128,
        question: "故意に，慎重に",
        choices: ["deliberately", "accidentally", "carelessly", "unintentionally"],
        correctAnswer: "deliberately"
    },
    {
       id: 1129,
        question: "男女同権主義者，フェミニスト",
        choices: ["feminist", "chauvinist", "misogynist", "sexist"],
        correctAnswer: "feminist"
    },
    {
       id: 1130,
        question: "切り株",
        choices: ["stump", "branch", "root", "leaf"],
        correctAnswer: "stump"
    },
    {
       id: 1131,
        question: "の出身である，(船が)から来る",
        choices: ["hail from", "depart from", "escape from", "hide from"],
        correctAnswer: "hail from"
    },
    {
       id: 1132,
        question: "を展開する，広げる",
        choices: ["unfold", "fold", "wrap", "compress"],
        correctAnswer: "unfold"
    },
    {
       id: 1133,
        question: "対話",
        choices: ["dialogue", "monologue", "soliloquy", "silence"],
        correctAnswer: "dialogue"
    },
    {
       id: 1134,
        question: "空っぽの，無人の",
        choices: ["vacant", "occupied", "full", "crowded"],
        correctAnswer: "vacant"
    },
    {
       id: 1135,
        question: "商品，必需品",
        choices: ["commodity", "luxury", "artifact", "decoration"],
        correctAnswer: "commodity"
    },
    {
       id: 1136,
        question: "居住の，住居の",
        choices: ["residential", "commercial", "industrial", "public"],
        correctAnswer: "residential"
    },
    {
       id: 1137,
        question: "をピンで留める，押さえつける",
        choices: ["pin down", "release", "lift up", "let go"],
        correctAnswer: "pin down"
    },
    {
       id: 1138,
        question: "会計士，会計係",
        choices: ["accountant", "lawyer", "engineer", "secretary"],
        correctAnswer: "accountant"
    },
    {
       id: 1139,
        question: "無理にさせる",
        choices: ["compel", "convince", "persuade", "encourage"],
        correctAnswer: "compel"
    },
    {
       id: 1140,
        question: "建築の",
        choices: ["architectural", "mechanical", "civil", "electrical"],
        correctAnswer: "architectural"
    },
    {
       id: 1141,
        question: "検査，点検",
        choices: ["inspection", "neglect", "ignorance", "overlook"],
        correctAnswer: "inspection"
    },
    {
       id: 1142,
        question: "特許",
        choices: ["patent", "copyright", "trademark", "license"],
        correctAnswer: "patent"
    },
    {
       id: 1143,
        question: "出入口",
        choices: ["gateway", "wall", "barrier", "blockade"],
        correctAnswer: "gateway"
    },
    {
       id: 1144,
        question: "圧迫する，制圧する",
        choices: ["bear down", "give up", "retreat", "withdraw"],
        correctAnswer: "bear down"
    },
    {
       id: 1145,
        question: "液体，流動体",
        choices: ["fluid", "solid", "gas", "powder"],
        correctAnswer: "fluid"
    },
    {
       id: 1146,
        question: "まともな，ふさわしい",
        choices: ["decent", "inappropriate", "indecent", "rude"],
        correctAnswer: "decent"
    },
    {
       id: 1147,
        question: "を明るくする，光らせる",
        choices: ["brighten", "darken", "dull", "dim"],
        correctAnswer: "brighten"
    },
    {
       id: 1148,
        question: "を改訂する，修正する",
        choices: ["revise", "repeat", "copy", "replicate"],
        correctAnswer: "revise"
    },
    {
       id: 1149,
        question: "熟練した，堪能な",
        choices: ["proficient", "novice", "beginner", "amateur"],
        correctAnswer: "proficient"
    },
    {
       id: 1150,
        question: "を結集する，呼び集める",
        choices: ["rally", "scatter", "separate", "dismiss"],
        correctAnswer: "rally"
    },
    {
       id: 1151,
        question: "に溶け込む，調和する",
        choices: ["fit into", "stand out", "clash with", "oppose"],
        correctAnswer: "fit into"
    },
    {
       id: 1152,
        question: "部外者，第三者",
        choices: ["outsider", "insider", "participant", "member"],
        correctAnswer: "outsider"
    },
    {
       id: 1153,
        question: "行きやすい，便利な",
        choices: ["accessible", "inconvenient", "restricted", "remote"],
        correctAnswer: "accessible"
    },
    {
       id: 1154,
        question: "最後の手段として，切羽詰まって",
        choices: ["as a last resort", "at first", "without hesitation", "as an option"],
        correctAnswer: "as a last resort"
    },
    {
       id: 1155,
        question: "を貫く，に入り込む",
        choices: ["penetrate", "block", "shield", "repel"],
        correctAnswer: "penetrate"
    },
    {
       id: 1156,
        question: "真っ逆さまに，逆さまに",
        choices: ["head over heels", "on the ground", "upright", "flat on one's back"],
        correctAnswer: "head over heels"
    },
    {
       id: 1157,
        question: "収容する",
        choices: ["accommodate", "reject", "refuse", "eject"],
        correctAnswer: "accommodate"
    },
    {
       id: 1158,
        question: "をついばむ，つつく",
        choices: ["peck", "bite", "chew", "gnaw"],
        correctAnswer: "peck"
    },
    {
       id: 1159,
        question: "宇宙船",
        choices: ["spacecraft", "airplane", "submarine", "satellite"],
        correctAnswer: "spacecraft"
    },
    {
       id: 1160,
        question: "にうんざりしている",
        choices: ["be weary of", "be excited about", "be eager for", "look forward to"],
        correctAnswer: "be weary of"
    },
    {
       id: 1161,
        question: "かなり，相当に",
        choices: ["considerably", "slightly", "minimally", "barely"],
        correctAnswer: "considerably"
    },
    {
       id: 1162,
        question: "迷い込む",
        choices: ["stray", "return", "stay", "follow"],
        correctAnswer: "stray"
    },
    {
       id: 1163,
        question: "類似",
        choices: ["resemblance", "difference", "contrast", "opposition"],
        correctAnswer: "resemblance"
    },
    {
       id: 1164,
        question: "制度の，制度上の",
        choices: ["institutional", "individual", "personal", "private"],
        correctAnswer: "institutional"
    },
    {
       id: 1165,
        question: "伝染病",
        choices: ["plague", "cure", "remedy", "health"],
        correctAnswer: "plague"
    },
    {
       id: 1166,
        question: "ひと目見ること",
        choices: ["glimpse", "stare", "examine", "inspect"],
        correctAnswer: "glimpse"
    },
    {
       id: 1167,
        question: "空騒ぎ",
        choices: ["fuss", "calm", "peace", "tranquility"],
        correctAnswer: "fuss"
    },
    {
       id: 1168,
        question: "重要なことに",
        choices: ["importantly", "trivially", "insignificantly", "minimally"],
        correctAnswer: "importantly"
    },
    {
       id: 1169,
        question: "運命づけられる，の運命にある",
        choices: ["be doomed to", "be destined for", "be saved from", "be freed from"],
        correctAnswer: "be doomed to"
    },
    {
       id: 1170,
        question: "を差し込む，挿入する",
        choices: ["insert", "remove", "extract", "withdraw"],
        correctAnswer: "insert"
    },
    {
       id: 1171,
        question: "見せかけ",
        choices: ["pretense", "honesty", "reality", "truth"],
        correctAnswer: "pretense"
    },
    {
       id: 1172,
        question: "本当の，透けるほど薄い",
        choices: ["sheer", "opaque", "thick", "cloudy"],
        correctAnswer: "sheer"
    },
    {
       id: 1173,
        question: "最初に，最初から",
        choices: ["to begin with", "in the end", "after all", "ultimately"],
        correctAnswer: "to begin with"
    },
    {
       id: 1174,
        question: "座標の，同等の/整合する",
        choices: ["coordinate", "disorganize", "misalign", "disturb"],
        correctAnswer: "coordinate"
    },
    {
       id: 1175,
        question: "調べる/検査",
        choices: ["checkup", "ignore", "overlook", "neglect"],
        correctAnswer: "checkup"
    },
    {
       id: 1176,
        question: "拍手する",
        choices: ["applaud", "boo", "hiss", "jeer"],
        correctAnswer: "applaud"
    },
    {
       id: 1177,
        question: "倫理的な",
        choices: ["ethical", "unethical", "immoral", "corrupt"],
        correctAnswer: "ethical"
    },
    {
       id: 1178,
        question: "陰になった，日陰になった",
        choices: ["shady", "sunny", "bright", "illuminated"],
        correctAnswer: "shady"
    },
    {
       id: 1179,
        question: "保存，保護",
        choices: ["preservation", "destruction", "neglect", "abandonment"],
        correctAnswer: "preservation"
    },
    {
       id: 1180,
        question: "錆び，酸化",
        choices: ["rust", "polish", "shine", "clean"],
        correctAnswer: "rust"
    },
    {
       id: 1181,
        question: "柔軟性",
        choices: ["flexibility", "rigidity", "stiffness", "firmness"],
        correctAnswer: "flexibility"
    },
    {
       id: 1182,
        question: "に困窮する，を持っていない",
        choices: ["be destitute of", "be full of", "possess", "have in abundance"],
        correctAnswer: "be destitute of"
    },
    {
       id: 1183,
        question: "処女",
        choices: ["virgin", "widow", "divorcee", "spouse"],
        correctAnswer: "virgin"
    },
    {
       id: 1184,
        question: "条項，節",
        choices: ["clause", "sentence", "phrase", "paragraph"],
        correctAnswer: "clause"
    },
    {
       id: 1185,
        question: "送信する",
        choices: ["transmit", "receive", "block", "intercept"],
        correctAnswer: "transmit"
    },
    {
       id: 1186,
        question: "BのことでAを非難する，咎める",
        choices: ["reproach A for B", "praise A for B", "commend A for B", "forgive A for B"],
        correctAnswer: "reproach A for B"
    },
    {
       id: 1187,
        question: "拒否，避妊",
        choices: ["denial", "acceptance", "approval", "agreement"],
        correctAnswer: "denial"
    },
    {
       id: 1188,
        question: "貴族",
        choices: ["nobleman", "commoner", "peasant", "worker"],
        correctAnswer: "nobleman"
    },
    {
       id: 1189,
        question: "古くさい，新鮮でない",
        choices: ["stale", "fresh", "crisp", "fragrant"],
        correctAnswer: "stale"
    },
    {
       id: 1190,
        question: "に口答えする，言い返す",
        choices: ["talk back to", "agree with", "obey", "listen to"],
        correctAnswer: "talk back to"
    },
    {
       id: 1191,
        question: "落ち込んだ，憂鬱な",
        choices: ["depressed", "happy", "joyful", "cheerful"],
        correctAnswer: "depressed"
    },
    {
       id: 1192,
        question: "探求，探究",
        choices: ["quest", "disinterest", "neglect", "ignorance"],
        correctAnswer: "quest"
    },
    {
       id: 1193,
        question: "を打倒する，転覆する",
        choices: ["overthrow", "establish", "support", "reinforce"],
        correctAnswer: "overthrow"
    },
    {
       id: 1194,
        question: "遠足",
        choices: ["excursion", "commute", "migration", "pilgrimage"],
        correctAnswer: "excursion"
    },
    {
       id: 1195,
        question: "断片",
        choices: ["fragment", "whole", "entirety", "mass"],
        correctAnswer: "fragment"
    },
    {
       id: 1196,
        question: "番犬",
        choices: ["watchdog", "stray dog", "lapdog", "pet"],
        correctAnswer: "watchdog"
    },
    {
       id: 1197,
        question: "禿げた",
        choices: ["bald", "hairy", "furry", "covered"],
        correctAnswer: "bald"
    },
    {
       id: 1198,
        question: "つぶやく",
        choices: ["mutter", "shout", "yell", "declare"],
        correctAnswer: "mutter"
    },
    {
       id: 1199,
        question: "後退する，後ろに下がる",
        choices: ["back off", "move forward", "approach", "advance"],
        correctAnswer: "back off"
    },
    {
       id: 1200,
        question: "尾根",
        choices: ["ridge", "valley", "plateau", "plain"],
        correctAnswer: "ridge"
    },
    {
       id: 1201,
        question: "形容詞，形容する言葉",
        choices: ["adjective", "noun", "verb", "adverb"],
        correctAnswer: "adjective"
    },
    {
       id: 1202,
        question: "に分類する，類別する",
        choices: ["classify", "mix", "combine", "confuse"],
        correctAnswer: "classify"
    },
    {
       id: 1203,
        question: "集団的な",
        choices: ["collective", "individual", "isolated", "separate"],
        correctAnswer: "collective"
    },
    {
       id: 1204,
        question: "協力する，共同する",
        choices: ["cooperate", "compete", "oppose", "argue"],
        correctAnswer: "cooperate"
    },
    {
       id: 1205,
        question: "酒を飲んでいない",
        choices: ["sober", "drunk", "intoxicated", "wasted"],
        correctAnswer: "sober"
    },
    {
       id: 1206,
        question: "挫折させる",
        choices: ["frustrate", "encourage", "motivate", "inspire"],
        correctAnswer: "frustrate"
    },
    {
       id: 1207,
        question: "羨ましい，妬ましい",
        choices: ["envious", "content", "satisfied", "grateful"],
        correctAnswer: "envious"
    },
    {
       id: 1208,
        question: "降りる，身を引く",
        choices: ["step down", "take over", "continue", "persist"],
        correctAnswer: "step down"
    },
    {
       id: 1209,
        question: "協力的な",
        choices: ["cooperative", "stubborn", "hostile", "unwilling"],
        correctAnswer: "cooperative"
    },
    {
       id: 1210,
        question: "寄付，寄贈",
        choices: ["donation", "theft", "fraud", "embezzlement"],
        correctAnswer: "donation"
    },
    {
       id: 1211,
        question: "圧倒する，制圧する",
        choices: ["overwhelm", "underwhelm", "weaken", "simplify"],
        correctAnswer: "overwhelm"
    },
    {
       id: 1212,
        question: "構造上の，構成上の",
        choices: ["structural", "abstract", "random", "spiritual"],
        correctAnswer: "structural"
    },
    {
       id: 1213,
        question: "図書館員",
        choices: ["librarian", "professor", "writer", "publisher"],
        correctAnswer: "librarian"
    },
    {
       id: 1214,
        question: "堅い",
        choices: ["rigid", "soft", "flexible", "malleable"],
        correctAnswer: "rigid"
    },
    {
       id: 1215,
        question: "許可する",
        choices: ["authorize", "forbid", "prohibit", "disallow"],
        correctAnswer: "authorize"
    },
    {
       id: 1216,
        question: "驚異，驚き",
        choices: ["marvel", "boredom", "indifference", "disgust"],
        correctAnswer: "marvel"
    },
    {
       id: 1217,
        question: "を投げ飛ばす",
        choices: ["fling", "place", "drop", "set"],
        correctAnswer: "fling"
    },
    {
       id: 1218,
        question: "伝送",
        choices: ["transmission", "interruption", "blockage", "prevention"],
        correctAnswer: "transmission"
    },
    {
       id: 1219,
        question: "のぞき見る",
        choices: ["peep", "glance", "stare", "ignore"],
        correctAnswer: "peep"
    },
    {
       id: 1220,
        question: "努力する",
        choices: ["endeavor", "neglect", "ignore", "quit"],
        correctAnswer: "endeavor"
    },
    {
       id: 1221,
        question: "うろつく，徘徊する",
        choices: ["hang around", "settle down", "focus on", "stay in"],
        correctAnswer: "hang around"
    },
    {
       id: 1222,
        question: "物理学者",
        choices: ["physicist", "chemist", "biologist", "mathematician"],
        correctAnswer: "physicist"
    },
    {
       id: 1223,
        question: "未熟な，円熟な",
        choices: ["immature", "mature", "wise", "experienced"],
        correctAnswer: "immature"
    },
    {
       id: 1224,
        question: "突発，ぼっ発",
        choices: ["outbreak", "stability", "continuation", "balance"],
        correctAnswer: "outbreak"
    },
    {
       id: 1225,
        question: "原稿",
        choices: ["manuscript", "novel", "article", "report"],
        correctAnswer: "manuscript"
    },
    {
       id: 1226,
        question: "よろめく，よろよろ歩く",
        choices: ["stagger", "walk steadily", "stand firm", "balance"],
        correctAnswer: "stagger"
    },
    {
       id: 1227,
        question: "強く閉める",
        choices: ["slam", "gently close", "unlock", "soften"],
        correctAnswer: "slam"
    },
    {
       id: 1228,
        question: "を流刑にする，追放する",
        choices: ["banish", "welcome", "include", "admit"],
        correctAnswer: "banish"
    },
    {
       id: 1229,
        question: "沼地，湿地",
        choices: ["swamp", "desert", "mountain", "plateau"],
        correctAnswer: "swamp"
    },
    {
       id: 1230,
        question: "に順応する，慣れる，適応する",
        choices: ["conform to", "rebel against", "ignore", "violate"],
        correctAnswer: "conform to"
    },
    {
       id: 1231,
        question: "容量，能力",
        choices: ["capability", "inability", "weakness", "failure"],
        correctAnswer: "capability"
    },
    {
       id: 1232,
        question: "分子",
        choices: ["molecule", "atom", "cell", "particle"],
        correctAnswer: "molecule"
    },
    {
       id: 1233,
        question: "もし～ならば",
        choices: ["what if", "definitely", "certainly", "no doubt"],
        correctAnswer: "what if"
    },
    {
       id: 1234,
        question: "参加，加入",
        choices: ["participation", "exclusion", "withdrawal", "avoidance"],
        correctAnswer: "participation"
    },
    {
       id: 1235,
        question: "学部",
        choices: ["faculty", "student", "curriculum", "library"],
        correctAnswer: "faculty"
    },
    {
       id: 1236,
        question: "を回避する，阻止する",
        choices: ["head off", "allow", "permit", "let through"],
        correctAnswer: "head off"
    },
    {
       id: 1237,
        question: "礼儀，丁重さ",
        choices: ["courtesy", "rudeness", "disrespect", "impoliteness"],
        correctAnswer: "courtesy"
    },
    {
       id: 1238,
        question: "真ん中，中央",
        choices: ["midst", "edge", "border", "periphery"],
        correctAnswer: "midst"
    },
    {
       id: 1239,
        question: "憤る，怒る",
        choices: ["resent", "accept", "tolerate", "forgive"],
        correctAnswer: "resent"
    },
    {
       id: 1240,
        question: "元通りにする",
        choices: ["undo", "finalize", "complete", "finish"],
        correctAnswer: "undo"
    },
    {
       id: 1241,
        question: "若者，少年",
        choices: ["lad", "gentleman", "elder", "infant"],
        correctAnswer: "lad"
    },
    {
       id: 1242,
        question: "を緩める",
        choices: ["loosen", "tighten", "fasten", "secure"],
        correctAnswer: "loosen"
    },
    {
       id: 1243,
        question: "なぞ",
        choices: ["riddle", "fact", "truth", "certainty"],
        correctAnswer: "riddle"
    },
    {
       id: 1244,
        question: "不正行為，腐敗",
        choices: ["corruption", "integrity", "honesty", "justice"],
        correctAnswer: "corruption"
    },
    {
       id: 1245,
        question: "抜き取る，取り除く",
        choices: ["extract", "insert", "implant", "embed"],
        correctAnswer: "extract"
    },
    {
       id: 1246,
        question: "と言えば，に関して",
        choices: ["speaking of which", "despite that", "contrary to", "in contrast"],
        correctAnswer: "speaking of which"
    },
    {
       id: 1247,
        question: "無意識の，潜在意識の",
        choices: ["unconscious", "aware", "conscious", "mindful"],
        correctAnswer: "unconscious"
    },
    {
       id: 1248,
        question: "を再建する，改築する",
        choices: ["rebuild", "destroy", "abandon", "collapse"],
        correctAnswer: "rebuild"
    },
    {
       id: 1249,
        question: "契約で，契約上の",
        choices: ["by contract", "by chance", "by mistake", "by force"],
        correctAnswer: "by contract"
    },
    {
       id: 1250,
        question: "を呪う，悪口を言う",
        choices: ["curse", "bless", "praise", "compliment"],
        correctAnswer: "curse"
    },
    {
       id: 1251,
        question: "卓越、傑出",
        choices: ["prominence", "insignificance", "obscurity", "modesty"],
        correctAnswer: "prominence"
    },
    {
       id: 1252,
        question: "作り話",
        choices: ["fable", "reality", "history", "fact"],
        correctAnswer: "fable"
    },
    {
       id: 1253,
        question: "に有毒な，～に対して毒性を持つ",
        choices: ["toxic to", "harmless to", "beneficial to", "nutritious for"],
        correctAnswer: "toxic to"
    },
    {
       id: 1254,
        question: "賄賂",
        choices: ["bribe", "donation", "gift", "charity"],
        correctAnswer: "bribe"
    },
    {
       id: 1255,
        question: "だらしない，乱雑な",
        choices: ["untidy", "neat", "organized", "clean"],
        correctAnswer: "untidy"
    },
    {
       id: 1256,
        question: "に反して，に逆らって，反対に",
        choices: ["go against", "comply with", "follow", "adhere to"],
        correctAnswer: "go against"
    },
    {
       id: 1257,
        question: "透明な，光を通す",
        choices: ["transparent", "opaque", "cloudy", "blurred"],
        correctAnswer: "transparent"
    },
    {
       id: 1258,
        question: "を巻き上げる，巻く",
        choices: ["roll up", "spread out", "unfold", "lay flat"],
        correctAnswer: "roll up"
    },
    {
       id: 1259,
        question: "全能の",
        choices: ["almighty", "powerless", "weak", "limited"],
        correctAnswer: "almighty"
    },
    {
       id: 1260,
        question: "結局～になる，に帰する",
        choices: ["come down to", "result in", "lead to", "move away from"],
        correctAnswer: "come down to"
    },
    {
       id: 1261,
        question: "後継，次代",
        choices: ["successor", "predecessor", "originator", "ancestor"],
        correctAnswer: "successor"
    },
    {
       id: 1262,
        question: "を頼りにする，信頼する",
        choices: ["look to", "distrust", "ignore", "avoid"],
        correctAnswer: "look to"
    },
    {
       id: 1263,
        question: "したがって，結果として",
        choices: ["hence", "however", "nonetheless", "whereas"],
        correctAnswer: "hence"
    },
    {
       id: 1264,
        question: "めまいがする，くらくらする",
        choices: ["dizzy", "steady", "balanced", "calm"],
        correctAnswer: "dizzy"
    },
    {
       id: 1265,
        question: "腰かけ椅子",
        choices: ["stool", "sofa", "armchair", "bench"],
        correctAnswer: "stool"
    },
    {
       id: 1266,
        question: "迷わせる",
        choices: ["mislead", "guide", "inform", "clarify"],
        correctAnswer: "mislead"
    },
    {
       id: 1267,
        question: "副詞",
        choices: ["adverb", "noun", "verb", "adjective"],
        correctAnswer: "adverb"
    },
    {
       id: 1268,
        question: "現状では，現在のところ",
        choices: ["as it stands", "once modified", "in the past", "as expected"],
        correctAnswer: "as it stands"
    },
    {
       id: 1269,
        question: "腐敗した",
        choices: ["corrupt", "honest", "pure", "fair"],
        correctAnswer: "corrupt"
    },
    {
       id: 1270,
        question: "線を引いて消す，を抹消する",
        choices: ["cross out", "highlight", "underline", "emphasize"],
        correctAnswer: "cross out"
    },
    {
       id: 1271,
        question: "変形，変身",
        choices: ["transformation", "stagnation", "stability", "constancy"],
        correctAnswer: "transformation"
    },
    {
       id: 1272,
        question: "不滅の，不死の",
        choices: ["immortal", "mortal", "temporary", "finite"],
        correctAnswer: "immortal"
    },
    {
       id: 1273,
        question: "宝石",
        choices: ["gem", "rock", "pebble", "grain"],
        correctAnswer: "gem"
    },
    {
       id: 1274,
        question: "太陽，太陽の",
        choices: ["solar", "lunar", "stellar", "terrestrial"],
        correctAnswer: "solar"
    },
    {
       id: 1275,
        question: "仮想の，仮想世界の",
        choices: ["virtual", "real", "tangible", "physical"],
        correctAnswer: "virtual"
    },
    {
       id: 1276,
        question: "理解する，把握する",
        choices: ["comprehend", "misunderstand", "ignore", "overlook"],
        correctAnswer: "comprehend"
    },
    {
       id: 1277,
        question: "しわ",
        choices: ["wrinkle", "smoothness", "crease", "fold"],
        correctAnswer: "wrinkle"
    },
    {
       id: 1278,
        question: "臆病な",
        choices: ["timid", "brave", "bold", "courageous"],
        correctAnswer: "timid"
    },
    {
       id: 1279,
        question: "審査官，試験管",
        choices: ["examiner", "student", "applicant", "candidate"],
        correctAnswer: "examiner"
    },
    {
       id: 1280,
        question: "ざわめく",
        choices: ["buzz", "silence", "hush", "quiet"],
        correctAnswer: "buzz"
    },
    {
       id: 1281,
        question: "無限の，限りない",
        choices: ["infinite", "limited", "finite", "bounded"],
        correctAnswer: "infinite"
    },
    {
       id: 1282,
        question: "永遠に",
        choices: ["eternally", "temporarily", "briefly", "momentarily"],
        correctAnswer: "eternally"
    },
    {
       id: 1283,
        question: "に従って動く，期待に応える",
        choices: ["live up to", "fall short of", "disappoint", "fail"],
        correctAnswer: "live up to"
    },
    {
       id: 1284,
        question: "くちばし",
        choices: ["beak", "wing", "claw", "tail"],
        correctAnswer: "beak"
    },
    {
       id: 1285,
        question: "納税者",
        choices: ["taxpayer", "debtor", "borrower", "spender"],
        correctAnswer: "taxpayer"
    },
    {
       id: 1286,
        question: "熟語",
        choices: ["idiom", "word", "phrase", "sentence"],
        correctAnswer: "idiom"
    },
    {
       id: 1287,
        question: "妨害，中断",
        choices: ["interruption", "continuation", "flow", "uninterrupted"],
        correctAnswer: "interruption"
    },
    {
       id: 1288,
        question: "音節",
        choices: ["syllable", "letter", "word", "sentence"],
        correctAnswer: "syllable"
    },
    {
       id: 1289,
        question: "を回る，回転する",
        choices: ["revolve", "remain", "stay still", "halt"],
        correctAnswer: "revolve"
    },
    {
       id: 1290,
        question: "前提，根拠",
        choices: ["premise", "conclusion", "result", "consequence"],
        correctAnswer: "premise"
    },
    {
       id: 1291,
        question: "論争，議論",
        choices: ["controversy", "agreement", "consensus", "harmony"],
        correctAnswer: "controversy"
    },
    {
       id: 1292,
        question: "繊細に，微妙に",
        choices: ["delicately", "roughly", "harshly", "crudely"],
        correctAnswer: "delicately"
    },
    {
       id: 1293,
        question: "蓄積する，貯蔵する",
        choices: ["accumulate", "spend", "waste", "lose"],
        correctAnswer: "accumulate"
    },
    {
       id: 1294,
        question: "知性，知力",
        choices: ["intellect", "ignorance", "stupidity", "naivety"],
        correctAnswer: "intellect"
    },
    {
       id: 1295,
        question: "を代弁する，の代理で話す，言い表す",
        choices: ["speak for", "ignore", "misrepresent", "deny"],
        correctAnswer: "speak for"
    },
    {
       id: 1296,
        question: "概念，考え",
        choices: ["conception", "misconception", "confusion", "ignorance"],
        correctAnswer: "conception"
    },
    {
       id: 1297,
        question: "降雨量，雨量",
        choices: ["rainfall", "drought", "dry spell", "evaporation"],
        correctAnswer: "rainfall"
    },
    {
       id: 1298,
        question: "骨格",
        choices: ["framework", "detail", "outline", "summary"],
        correctAnswer: "framework"
    },
    {
       id: 1299,
        question: "絶滅",
        choices: ["extinction", "survival", "continuation", "existence"],
        correctAnswer: "extinction"
    },
    {
       id: 1300,
        question: "領域",
        choices: ["realm", "limit", "boundary", "border"],
        correctAnswer: "realm"
    },
    {
       id: 1301,
        question: "有罪とする，罪を宣告する",
        choices: ["convict", "acquit", "release", "pardon"],
        correctAnswer: "convict"
    },
    {
       id: 1302,
        question: "取るに足らない",
        choices: ["trivial", "significant", "important", "crucial"],
        correctAnswer: "trivial"
    },
    {
       id: 1303,
        question: "粛々と，厳粛に",
        choices: ["solemnly", "casually", "playfully", "lightheartedly"],
        correctAnswer: "solemnly"
    },
    {
       id: 1304,
        question: "楕円形の，卵形の",
        choices: ["oval", "circular", "rectangular", "triangular"],
        correctAnswer: "oval"
    },
    {
       id: 1305,
        question: "正統派の",
        choices: ["orthodox", "unconventional", "radical", "alternative"],
        correctAnswer: "orthodox"
    },
    {
       id: 1306,
        question: "母音",
        choices: ["vowel", "consonant", "syllable", "word"],
        correctAnswer: "vowel"
    },
    {
       id: 1307,
        question: "鋳型，型造り/型どる",
        choices: ["mold", "break", "shatter", "crack"],
        correctAnswer: "mold"
    },
    {
       id: 1308,
        question: "誇張",
        choices: ["exaggeration", "understatement", "minimization", "modesty"],
        correctAnswer: "exaggeration"
    },
    {
       id: 1309,
        question: "浸透する，理解される",
        choices: ["sink in", "fade away", "disappear", "wash off"],
        correctAnswer: "sink in"
    },
    {
       id: 1310,
        question: "与える",
        choices: ["render", "take", "deny", "refuse"],
        correctAnswer: "render"
    },
    {
       id: 1311,
        question: "指名，任命",
        choices: ["nomination", "resignation", "dismissal", "expulsion"],
        correctAnswer: "nomination"
    },
    {
       id: 1312,
        question: "証明書，保証書",
        choices: ["warrant", "permit", "license", "document"],
        correctAnswer: "warrant"
    },
    {
       id: 1313,
        question: "未婚の",
        choices: ["maiden", "married", "widowed", "divorced"],
        correctAnswer: "maiden"
    },
    {
       id: 1314,
        question: "大陸の",
        choices: ["continental", "island", "coastal", "peninsular"],
        correctAnswer: "continental"
    },
    {
       id: 1315,
        question: "殺人者",
        choices: ["murderer", "victim", "defendant", "witness"],
        correctAnswer: "murderer"
    },
    {
       id: 1316,
        question: "逃走中の，走っている",
        choices: ["on the run", "stationary", "at rest", "immobile"],
        correctAnswer: "on the run"
    },
    {
       id: 1317,
        question: "無一文の",
        choices: ["penniless", "wealthy", "affluent", "prosperous"],
        correctAnswer: "penniless"
    },
    {
       id: 1318,
        question: "文法の",
        choices: ["grammatical", "illogical", "incoherent", "irrational"],
        correctAnswer: "grammatical"
    },
    {
       id: 1319,
        question: "安心させる",
        choices: ["reassure", "worry", "disturb", "unsettle"],
        correctAnswer: "reassure"
    },
    {
       id: 1320,
        question: "逆説",
        choices: ["paradox", "certainty", "fact", "truth"],
        correctAnswer: "paradox"
    },
    {
       id: 1321,
        question: "賛美歌",
        choices: ["hymn", "anthem", "chant", "melody"],
        correctAnswer: "hymn"
    },
    {
       id: 1322,
        question: "寸法",
        choices: ["dimension", "weight", "volume", "density"],
        correctAnswer: "dimension"
    },
    {
       id: 1323,
        question: "Aを眠らせる，安楽死させる",
        choices: ["put A to sleep", "wake up A", "revive A", "stimulate A"],
        correctAnswer: "put A to sleep"
    },
    {
       id: 1324,
        question: "最大限の，最高の",
        choices: ["utmost", "minimal", "least", "lowest"],
        correctAnswer: "utmost"
    },
    {
       id: 1325,
        question: "上昇",
        choices: ["ascent", "descent", "fall", "decline"],
        correctAnswer: "ascent"
    },
    {
       id: 1326,
        question: "峡谷",
        choices: ["canyon", "valley", "mountain", "cliff"],
        correctAnswer: "canyon"
    },
    {
       id: 1327,
        question: "を引き起こす，を発生させる",
        choices: ["bring on", "prevent", "avoid", "stop"],
        correctAnswer: "bring on"
    },
    {
       id: 1328,
        question: "離陸する，飛び立つ",
        choices: ["lift off", "land", "descend", "touch down"],
        correctAnswer: "lift off"
    },
    {
       id: 1329,
        question: "を無視する，に挑む",
        choices: ["defy", "obey", "comply", "follow"],
        correctAnswer: "defy"
    },
    {
       id: 1330,
        question: "をちくりと刺す",
        choices: ["prick", "stroke", "pat", "rub"],
        correctAnswer: "prick"
    },
    {
       id: 1331,
        question: "明るさ，光沢",
        choices: ["brilliance", "dullness", "darkness", "opacity"],
        correctAnswer: "brilliance"
    },
    {
       id: 1332,
        question: "同情する，共感する",
        choices: ["sympathize", "ignore", "ridicule", "mock"],
        correctAnswer: "sympathize"
    },
    {
       id: 1333,
        question: "のせいで，の理由で",
        choices: ["due to", "despite", "regardless of", "instead of"],
        correctAnswer: "due to"
    },
    {
       id: 1334,
        question: "用心，予防策",
        choices: ["precaution", "negligence", "recklessness", "carelessness"],
        correctAnswer: "precaution"
    },
    {
       id: 1335,
        question: "宝庫，基金",
        choices: ["treasury", "poverty", "debt", "bankruptcy"],
        correctAnswer: "treasury"
    },
    {
       id: 1336,
        question: "裏切り，密告",
        choices: ["betrayal", "loyalty", "faithfulness", "devotion"],
        correctAnswer: "betrayal"
    },
    {
       id: 1337,
        question: "歩き回る",
        choices: ["roam", "stay", "settle", "remain"],
        correctAnswer: "roam"
    },
    {
       id: 1338,
        question: "二週間",
        choices: ["fortnight", "week", "month", "day"],
        correctAnswer: "fortnight"
    },
    {
       id: 1339,
        question: "静寂，静けさ",
        choices: ["stillness", "noise", "chaos", "commotion"],
        correctAnswer: "stillness"
    },
    {
       id: 1340,
        question: "副業，アルバイト",
        choices: ["side job", "full-time job", "career", "profession"],
        correctAnswer: "side job"
    },
    {
       id: 1341,
        question: "獰猛な，残忍な",
        choices: ["savage", "gentle", "kind", "peaceful"],
        correctAnswer: "savage"
    },
    {
       id: 1342,
        question: "を拷問にかける",
        choices: ["torture", "comfort", "soothe", "relieve"],
        correctAnswer: "torture"
    },
    {
       id: 1343,
        question: "に負ける，で死ぬ",
        choices: ["lose out to", "win against", "defeat", "overcome"],
        correctAnswer: "lose out to"
    },
    {
       id: 1344,
        question: "に頼る，を当てにする",
        choices: ["count on", "distrust", "ignore", "neglect"],
        correctAnswer: "count on"
    },
    {
       id: 1345,
        question: "物語，話",
        choices: ["narrative", "fact", "truth", "evidence"],
        correctAnswer: "narrative"
    },
    {
       id: 1346,
        question: "実際",
        choices: ["in fact", "theoretically", "hypothetically", "imaginatively"],
        correctAnswer: "in fact"
    },
    {
       id: 1347,
        question: "軽蔑，さげずみ",
        choices: ["scorn", "respect", "admiration", "praise"],
        correctAnswer: "scorn"
    },
    {
       id: 1348,
        question: "孤児",
        choices: ["orphan", "parent", "guardian", "sibling"],
        correctAnswer: "orphan"
    },
    {
       id: 1349,
        question: "丸く収める，穏便に済ます",
        choices: ["smooth over", "complicate", "aggravate", "escalate"],
        correctAnswer: "smooth over"
    },
    {
       id: 1350,
        question: "安定，平穏，均衡",
        choices: ["stability", "instability", "chaos", "volatility"],
        correctAnswer: "stability"
    },
    {
       id: 1351,
        question: "細菌",
        choices: ["bacteria", "virus", "fungus", "parasite"],
        correctAnswer: "bacteria"
    },
    {
       id: 1352,
        question: "議会の",
        choices: ["parliamentary", "presidential", "dictatorial", "monarchical"],
        correctAnswer: "parliamentary"
    },
    {
       id: 1353,
        question: "資格，能力",
        choices: ["qualification", "incompetence", "incapacity", "inability"],
        correctAnswer: "qualification"
    },
    {
       id: 1354,
        question: "類人猿，大猿",
        choices: ["ape", "monkey", "rodent", "feline"],
        correctAnswer: "ape"
    },
    {
       id: 1355,
        question: "優しさ",
        choices: ["tenderness", "harshness", "rigidity", "coldness"],
        correctAnswer: "tenderness"
    },
    {
       id: 1356,
        question: "適度に，適切に",
        choices: ["moderately", "excessively", "insufficiently", "overwhelmingly"],
        correctAnswer: "moderately"
    },
    {
       id: 1357,
        question: "陽気な，愉快な",
        choices: ["jolly", "gloomy", "sad", "miserable"],
        correctAnswer: "jolly"
    },
    {
       id: 1358,
        question: "固執する",
        choices: ["persist", "give up", "quit", "abandon"],
        correctAnswer: "persist"
    },
    {
       id: 1359,
        question: "を養育する，の世話をする",
        choices: ["foster", "neglect", "abandon", "ignore"],
        correctAnswer: "foster"
    },
    {
       id: 1360,
        question: "薬草",
        choices: ["herb", "weed", "fungus", "mushroom"],
        correctAnswer: "herb"
    },
    {
       id: 1361,
        question: "を動機付ける",
        choices: ["motivate", "discourage", "dissuade", "deter"],
        correctAnswer: "motivate"
    },
    {
       id: 1362,
        question: "をかき混ぜる，刺激する",
        choices: ["stir up", "calm down", "settle", "soothe"],
        correctAnswer: "stir up"
    },
    {
       id: 1363,
        question: "化石",
        choices: ["fossil", "rock", "mineral", "crystal"],
        correctAnswer: "fossil"
    },
    {
       id: 1364,
        question: "理解する，うまくやる",
        choices: ["make out", "misunderstand", "ignore", "overlook"],
        correctAnswer: "make out"
    },
    {
       id: 1365,
        question: "真剣に",
        choices: ["earnestly", "casually", "playfully", "lightly"],
        correctAnswer: "earnestly"
    },
    {
       id: 1366,
        question: "違反，侵害",
        choices: ["violation", "compliance", "obedience", "adherence"],
        correctAnswer: "violation"
    },
    {
       id: 1367,
        question: "始める，開始する",
        choices: ["initiate", "halt", "cease", "stop"],
        correctAnswer: "initiate"
    },
    {
       id: 1368,
        question: "漫画",
        choices: ["cartoon", "novel", "essay", "poem"],
        correctAnswer: "cartoon"
    },
    {
       id: 1369,
        question: "弱った，虚弱な",
        choices: ["feeble", "strong", "sturdy", "robust"],
        correctAnswer: "feeble"
    },
    {
       id: 1370,
        question: "強制的な",
        choices: ["compulsory", "optional", "voluntary", "discretionary"],
        correctAnswer: "compulsory"
    },
    {
       id: 1371,
        question: "迷惑なもの",
        choices: ["nuisance", "pleasure", "joy", "delight"],
        correctAnswer: "nuisance"
    },
    {
       id: 1372,
        question: "騒動",
        choices: ["disturbance", "peace", "calm", "serenity"],
        correctAnswer: "disturbance"
    },
    {
       id: 1373,
        question: "住む，居住する",
        choices: ["reside", "vacate", "leave", "abandon"],
        correctAnswer: "reside"
    },
    {
       id: 1374,
        question: "水蒸気，蒸気",
        choices: ["water vapor", "mist", "fog", "cloud"],
        correctAnswer: "water vapor"
    },
    {
       id: 1375,
        question: "精力的な，元気な",
        choices: ["vigorous", "weak", "feeble", "frail"],
        correctAnswer: "vigorous"
    },
    {
       id: 1376,
        question: "満足",
        choices: ["contentment", "dissatisfaction", "unhappiness", "displeasure"],
        correctAnswer: "contentment"
    },
    {
       id: 1377,
        question: "するつもりである，意図する",
        choices: ["aim to", "avoid", "neglect", "ignore"],
        correctAnswer: "aim to"
    },
    {
       id: 1378,
        question: "消化",
        choices: ["digestion", "ingestion", "excretion", "absorption"],
        correctAnswer: "digestion"
    },
    {
       id: 1379,
        question: "腹立たしい",
        choices: ["irritating", "calming", "soothing", "relaxing"],
        correctAnswer: "irritating"
    },
    {
       id: 1380,
        question: "おもてなし",
        choices: ["hospitality", "rudeness", "disregard", "neglect"],
        correctAnswer: "hospitality"
    },
    {
       id: 1381,
        question: "借りている，未払いの",
        choices: ["owing", "paid", "settled", "cleared"],
        correctAnswer: "owing"
    },
    {
       id: 1382,
        question: "天文学",
        choices: ["astronomy", "geology", "biology", "physics"],
        correctAnswer: "astronomy"
    },
    {
       id: 1383,
        question: "を締め出す，閉め出す",
        choices: ["shut out", "let in", "welcome", "admit"],
        correctAnswer: "shut out"
    },
    {
       id: 1384,
        question: "電子",
        choices: ["electron", "neutron", "proton", "atom"],
        correctAnswer: "electron"
    },
    {
       id: 1385,
        question: "傍観する，見守る",
        choices: ["sit by", "intervene", "participate", "engage"],
        correctAnswer: "sit by"
    },
    {
       id: 1386,
        question: "身震いする，震える",
        choices: ["tremble", "stand still", "calm down", "steady"],
        correctAnswer: "tremble"
    },
    {
       id: 1387,
        question: "しないように",
        choices: ["lest", "so that", "because", "due to"],
        correctAnswer: "lest"
    },
    {
       id: 1388,
        question: "を下取りに出す，下取りする",
        choices: ["trade in", "keep", "retain", "hoard"],
        correctAnswer: "trade in"
    },
    {
       id: 1389,
        question: "に固執する，堅持する",
        choices: ["stick with", "abandon", "give up", "quit"],
        correctAnswer: "stick with"
    },
    {
       id: 1390,
        question: "刑務所に入れる",
        choices: ["imprison", "release", "free", "liberate"],
        correctAnswer: "imprison"
    },
    {
       id: 1391,
        question: "お墓，墓地",
        choices: ["cemetery", "church", "temple", "monument"],
        correctAnswer: "cemetery"
    },
    {
       id: 1392,
        question: "しみ，汚れ",
        choices: ["blot", "cleanliness", "shine", "sparkle"],
        correctAnswer: "blot"
    },
    {
       id: 1393,
        question: "栄養，栄養分，食物",
        choices: ["nutrition", "starvation", "dehydration", "malnutrition"],
        correctAnswer: "nutrition"
    },
    {
       id: 1394,
        question: "軽く食べる",
        choices: ["graze", "devour", "feast", "fast"],
        correctAnswer: "graze"
    },
    {
       id: 1395,
        question: "あえぎ",
        choices: ["gasp", "sigh", "whisper", "murmur"],
        correctAnswer: "gasp"
    },
    {
       id: 1396,
        question: "反乱/反抗する",
        choices: ["revolt", "surrender", "obey", "submit"],
        correctAnswer: "revolt"
    },
    {
       id: 1397,
        question: "奴隷制度",
        choices: ["slavery", "freedom", "liberty", "democracy"],
        correctAnswer: "slavery"
    },
    {
       id: 1398,
        question: "闘争，争い",
        choices: ["strife", "peace", "harmony", "unity"],
        correctAnswer: "strife"
    },
    {
       id: 1399,
        question: "見せびらかす",
        choices: ["show off", "hide", "conceal", "keep secret"],
        correctAnswer: "show off"
    },
    {
       id: 1400,
        question: "分数，小数",
        choices: ["fraction", "whole number", "integer", "equation"],
        correctAnswer: "fraction"
    },
    {
       id: 1401,
        question: "危険，危機",
        choices: ["peril", "safety", "protection", "security"],
        correctAnswer: "peril"
    },
    {
       id: 1402,
        question: "を収穫する，刈る",
        choices: ["reap", "sow", "plant", "scatter"],
        correctAnswer: "reap"
    },
    {
       id: 1403,
        question: "中間の",
        choices: ["intermediate", "beginner", "expert", "advanced"],
        correctAnswer: "intermediate"
    },
    {
       id: 1404,
        question: "神の",
        choices: ["divine", "human", "mortal", "earthly"],
        correctAnswer: "divine"
    },
    {
       id: 1405,
        question: "中古の",
        choices: ["secondhand", "new", "brand-new", "unused"],
        correctAnswer: "secondhand"
    },
    {
       id: 1406,
        question: "を漂白する",
        choices: ["bleach", "stain", "dye", "tarnish"],
        correctAnswer: "bleach"
    },
    {
       id: 1407,
        question: "公務員",
        choices: ["public official", "private employee", "freelancer", "contractor"],
        correctAnswer: "public official"
    },
    {
       id: 1408,
        question: "管理者，行政官",
        choices: ["administrator", "worker", "intern", "assistant"],
        correctAnswer: "administrator"
    },
    {
       id: 1409,
        question: "を混ぜる，一緒にする",
        choices: ["mingle", "separate", "divide", "isolate"],
        correctAnswer: "mingle"
    },
    {
       id: 1410,
        question: "海藻，海草",
        choices: ["seaweed", "kelp", "coral", "plankton"],
        correctAnswer: "seaweed"
    },
    {
       id: 1411,
        question: "見事な，立派な",
        choices: ["admirable", "shameful", "disgraceful", "inferior"],
        correctAnswer: "admirable"
    },
    {
       id: 1412,
        question: "愚かさ，愚劣",
        choices: ["folly", "wisdom", "intelligence", "brilliance"],
        correctAnswer: "folly"
    },
    {
       id: 1413,
        question: "純粋",
        choices: ["purity", "impurity", "pollution", "contamination"],
        correctAnswer: "purity"
    },
    {
       id: 1414,
        question: "習慣的な，常習的な",
        choices: ["habitual", "occasional", "rare", "sporadic"],
        correctAnswer: "habitual"
    },
    {
       id: 1415,
        question: "永続的な，長持ちする",
        choices: ["lasting", "temporary", "short-lived", "brief"],
        correctAnswer: "lasting"
    },
    {
       id: 1416,
        question: "ほうき",
        choices: ["broom", "mop", "vacuum", "brush"],
        correctAnswer: "broom"
    },
    {
       id: 1417,
        question: "恐ろしい",
        choices: ["dreadful", "pleasant", "delightful", "enjoyable"],
        correctAnswer: "dreadful"
    },
    {
       id: 1418,
        question: "男らしい",
        choices: ["manly", "feminine", "childish", "delicate"],
        correctAnswer: "manly"
    },
    {
       id: 1419,
        question: "に敬礼する",
        choices: ["salute", "ignore", "disrespect", "mock"],
        correctAnswer: "salute"
    },
    {
       id: 1420,
        question: "様々な，色々な",
        choices: ["a range of", "a single", "one kind of", "limited"],
        correctAnswer: "a range of"
    },
    {
       id: 1421,
        question: "宿泊",
        choices: ["lodging", "departure", "vacation", "evacuation"],
        correctAnswer: "lodging"
    },
    {
       id: 1422,
        question: "統治，治世",
        choices: ["reign", "rebellion", "revolt", "chaos"],
        correctAnswer: "reign"
    },
    {
       id: 1423,
        question: "生命力，活気",
        choices: ["vitality", "weakness", "fatigue", "lethargy"],
        correctAnswer: "vitality"
    },
    {
       id: 1424,
        question: "傾斜",
        choices: ["inclination", "flatness", "levelness", "balance"],
        correctAnswer: "inclination"
    },
    {
       id: 1425,
        question: "不明瞭な，分かりにくい",
        choices: ["obscure", "clear", "evident", "obvious"],
        correctAnswer: "obscure"
    },
    {
       id: 1426,
        question: "しつこい",
        choices: ["insistent", "casual", "passive", "indifferent"],
        correctAnswer: "insistent"
    },
    {
       id: 1427,
        question: "を与える，加える",
        choices: ["inflict", "withhold", "remove", "take away"],
        correctAnswer: "inflict"
    },
    {
       id: 1428,
        question: "異議，異論",
        choices: ["objection", "agreement", "approval", "acceptance"],
        correctAnswer: "objection"
    },
    {
       id: 1429,
        question: "感謝，謝意",
        choices: ["gratitude", "ingratitude", "resentment", "discontent"],
        correctAnswer: "gratitude"
    },
    {
       id: 1430,
        question: "心のこもった，本心からの",
        choices: ["cordial", "cold", "unfriendly", "hostile"],
        correctAnswer: "cordial"
    },
    {
       id: 1431,
        question: "説得，説得力",
        choices: ["persuasion", "dissuasion", "coercion", "intimidation"],
        correctAnswer: "persuasion"
    },
    {
       id: 1432,
        question: "表現力豊かな，表現に富む",
        choices: ["expressive", "monotone", "dull", "inexpressive"],
        correctAnswer: "expressive"
    },
    {
       id: 1433,
        question: "衛生的な，公衆の",
        choices: ["sanitary", "unsanitary", "filthy", "contaminated"],
        correctAnswer: "sanitary"
    },
    {
       id: 1434,
        question: "分岐する，枝を広げる",
        choices: ["branch off", "merge", "combine", "unite"],
        correctAnswer: "branch off"
    },
    {
       id: 1435,
        question: "ささいなこと",
        choices: ["trifle", "importance", "significance", "priority"],
        correctAnswer: "trifle"
    },
    {
       id: 1436,
        question: "そのままの，手をつけない",
        choices: ["intact", "damaged", "broken", "altered"],
        correctAnswer: "intact"
    },
    {
       id: 1437,
        question: "卒業証書，学位証書",
        choices: ["diploma", "degree", "certificate", "license"],
        correctAnswer: "diploma"
    },
    {
       id: 1438,
        question: "独断的な，教義上の",
        choices: ["dogmatic", "open-minded", "flexible", "tolerant"],
        correctAnswer: "dogmatic"
    },
    {
       id: 1439,
        question: "へそ，へその緒がついていた傷痕",
        choices: ["bellybutton", "navel", "abdomen", "waist"],
        correctAnswer: "bellybutton"
    },
    {
       id: 1440,
        question: "愛国者，愛国主義者",
        choices: ["patriot", "traitor", "oppressor", "invader"],
        correctAnswer: "patriot"
    },
    {
       id: 1441,
        question: "うまく馴染む，溶け込む",
        choices: ["fit in", "stand out", "ignore", "separate"],
        correctAnswer: "fit in"
    },
    {
       id: 1442,
        question: "同志，仲間",
        choices: ["comrade", "enemy", "rival", "opponent"],
        correctAnswer: "comrade"
    },
    {
       id: 1443,
        question: "抵抗する，反抗する",
        choices: ["resistant", "submissive", "obedient", "compliant"],
        correctAnswer: "resistant"
    },
    {
       id: 1444,
        question: "気の利いた",
        choices: ["witty", "dull", "boring", "tedious"],
        correctAnswer: "witty"
    },
    {
       id: 1445,
        question: "教義，信条",
        choices: ["doctrine", "heresy", "myth", "superstition"],
        correctAnswer: "doctrine"
    },
    {
       id: 1446,
        question: "敷居，入り口",
        choices: ["threshold", "door", "gate", "exit"],
        correctAnswer: "threshold"
    },
    {
       id: 1447,
        question: "脈動，脈拍",
        choices: ["pulse", "heartbeat", "rhythm", "tempo"],
        correctAnswer: "pulse"
    },
    {
       id: 1448,
        question: "証言する",
        choices: ["testify", "deny", "contradict", "ignore"],
        correctAnswer: "testify"
    },
    {
       id: 1449,
        question: "発言，発声",
        choices: ["utterance", "silence", "quietness", "whisper"],
        correctAnswer: "utterance"
    },
    {
       id: 1450,
        question: "不適切な，誤った",
        choices: ["improper", "appropriate", "correct", "suitable"],
        correctAnswer: "improper"
    },
    {
       id: 1460,
        question: "譲歩，容認",
        choices: ["concession", "refusal", "denial", "rejection"],
        correctAnswer: "concession"
    },
    {
       id: 1461,
        question: "補助金",
        choices: ["subsidy", "tax", "fee", "loan"],
        correctAnswer: "subsidy"
    },
    {
       id: 1462,
        question: "子会社",
        choices: ["subsidiary", "parent company", "branch", "division"],
        correctAnswer: "subsidiary"
    },
    {
       id: 1463,
        question: "植物の",
        choices: ["botanical", "zoological", "chemical", "astronomical"],
        correctAnswer: "botanical"
    },
    {
       id: 1464,
        question: "領地，領土",
        choices: ["domain", "border", "province", "territory"],
        correctAnswer: "domain"
    },
    {
       id: 1465,
        question: "機密の，内々の",
        choices: ["confidential", "public", "transparent", "open"],
        correctAnswer: "confidential"
    },
    {
       id: 1466,
        question: "発射される",
        choices: ["blast off", "land", "crash", "sink"],
        correctAnswer: "blast off"
    },
    {
       id: 1467,
        question: "をしっかり握る",
        choices: ["clutch", "drop", "release", "loosen"],
        correctAnswer: "clutch"
    },
    {
       id: 1468,
        question: "繁栄する，隆盛する",
        choices: ["thrive", "decline", "fail", "collapse"],
        correctAnswer: "thrive"
    },
    {
       id: 1469,
        question: "積み込む，乗船する",
        choices: ["embark", "disembark", "depart", "dock"],
        correctAnswer: "embark"
    },
    {
       id: 1470,
        question: "風変わりな，変な",
        choices: ["queer", "ordinary", "normal", "usual"],
        correctAnswer: "queer"
    },
    {
       id: 1471,
        question: "を抑圧する，虐げる",
        choices: ["oppress", "liberate", "free", "empower"],
        correctAnswer: "oppress"
    },
    {
       id: 1472,
        question: "助力者",
        choices: ["aide", "enemy", "opponent", "rival"],
        correctAnswer: "aide"
    },
    {
       id: 1473,
        question: "陰謀",
        choices: ["conspiracy", "coincidence", "accident", "truth"],
        correctAnswer: "conspiracy"
    },
    {
       id: 1474,
        question: "軍縮",
        choices: ["disarmament", "armament", "weaponry", "militarization"],
        correctAnswer: "disarmament"
    },
    {
       id: 1475,
        question: "機能的な，機能上の",
        choices: ["functional", "decorative", "useless", "aesthetic"],
        correctAnswer: "functional"
    },
    {
       id: 1476,
        question: "市民の",
        choices: ["civic", "rural", "military", "industrial"],
        correctAnswer: "civic"
    },
    {
       id: 1477,
        question: "差し引く",
        choices: ["subtract", "add", "multiply", "divide"],
        correctAnswer: "subtract"
    },
    {
       id: 1478,
        question: "弱まる，落ちる",
        choices: ["fall away", "increase", "strengthen", "grow"],
        correctAnswer: "fall away"
    },
    {
       id: 1479,
        question: "調和のとれた",
        choices: ["harmonious", "discordant", "chaotic", "unbalanced"],
        correctAnswer: "harmonious"
    },
    {
       id: 1480,
        question: "ずらす，にとって代わる",
        choices: ["displace", "stabilize", "fix", "maintain"],
        correctAnswer: "displace"
    },
    {
       id: 1481,
        question: "垂直の，縦の",
        choices: ["vertical", "horizontal", "flat", "level"],
        correctAnswer: "vertical"
    },
    {
       id: 1482,
        question: "を管理する，治める",
        choices: ["administer", "neglect", "abandon", "mismanage"],
        correctAnswer: "administer"
    },
    {
       id: 1483,
        question: "激怒",
        choices: ["fury", "calmness", "peace", "composure"],
        correctAnswer: "fury"
    },
    {
       id: 1484,
        question: "名声，評判",
        choices: ["prestige", "disgrace", "obscurity", "shame"],
        correctAnswer: "prestige"
    },
    {
       id: 1485,
        question: "落ち度がある，咎められるべき",
        choices: ["at fault", "blameless", "innocent", "faultless"],
        correctAnswer: "at fault"
    },
    {
       id: 1486,
        question: "含む，構成する",
        choices: ["comprise", "exclude", "omit", "remove"],
        correctAnswer: "comprise"
    },
    {
       id: 1487,
        question: "を研究する，を調査する",
        choices: ["look into", "ignore", "neglect", "overlook"],
        correctAnswer: "look into"
    },
    {
       id: 1488,
        question: "親族，親類",
        choices: ["kin", "stranger", "enemy", "outsider"],
        correctAnswer: "kin"
    },
    {
       id: 1489,
        question: "大きさ，規模",
        choices: ["magnitude", "triviality", "insignificance", "tiny"],
        correctAnswer: "magnitude"
    },
    {
       id: 1490,
        question: "永久の",
        choices: ["perpetual", "temporary", "momentary", "brief"],
        correctAnswer: "perpetual"
    },
    {
       id: 1491,
        question: "のろのろ進む",
        choices: ["limp", "rush", "hurry", "sprint"],
        correctAnswer: "limp"
    },
    {
       id: 1492,
        question: "感嘆，叫び",
        choices: ["exclamation", "whisper", "statement", "declaration"],
        correctAnswer: "exclamation"
    },
    {
       id: 1493,
        question: "迷信",
        choices: ["superstition", "fact", "truth", "knowledge"],
        correctAnswer: "superstition"
    },
    {
       id: 1494,
        question: "風変わりな，普通でない",
        choices: ["eccentric", "ordinary", "normal", "common"],
        correctAnswer: "eccentric"
    },
    {
       id: 1495,
        question: "小枝",
        choices: ["twig", "branch", "root", "leaf"],
        correctAnswer: "twig"
    },
    {
       id: 1496,
        question: "簡潔な",
        choices: ["concise", "verbose", "wordy", "lengthy"],
        correctAnswer: "concise"
    },
    {
       id: 1497,
        question: "購読，定期購読",
        choices: ["subscription", "purchase", "membership", "donation"],
        correctAnswer: "subscription"
    },
    {
       id: 1498,
        question: "虐待的な，乱用の",
        choices: ["abusive", "kind", "gentle", "polite"],
        correctAnswer: "abusive"
    },
    {
       id: 1499,
        question: "低周波，低頻度",
        choices: ["low frequency", "high frequency", "rapid waves", "constant waves"],
        correctAnswer: "low frequency"
    },
    {
       id: 1500,
        question: "お世辞，おべっか",
        choices: ["flattery", "criticism", "insult", "honesty"],
        correctAnswer: "flattery"
    },
    {
       id: 1501,
        question: "固定した，確固とした",
        choices: ["steadfast", "unsteady", "wavering", "inconsistent"],
        correctAnswer: "steadfast"
    },
    {
       id: 1502,
        question: "弾力のある，伸縮自在の",
        choices: ["elastic", "rigid", "brittle", "fragile"],
        correctAnswer: "elastic"
    },
    {
       id: 1503,
        question: "を置く，位置させる",
        choices: ["situate", "move", "shift", "displace"],
        correctAnswer: "situate"
    },
    {
       id: 1504,
        question: "外れる，降りる",
        choices: ["drop off", "pick up", "hold on", "stick to"],
        correctAnswer: "drop off"
    },
    {
       id: 1505,
        question: "寛容さ，忍耐力",
        choices: ["tolerance", "impatience", "intolerance", "rigidity"],
        correctAnswer: "tolerance"
    },
    {
       id: 1506,
        question: "AをBに伝染させる，移す",
        choices: ["transmit A to B", "receive A from B", "contain A in B", "prevent A from B"],
        correctAnswer: "transmit A to B"
    },
    {
       id: 1507,
        question: "を朗読する，を暗唱する",
        choices: ["recite", "mumble", "whisper", "ignore"],
        correctAnswer: "recite"
    },
    {
       id: 1508,
        question: "運賃，貨物運送",
        choices: ["freight", "ticket", "fare", "charge"],
        correctAnswer: "freight"
    },
    {
       id: 1509,
        question: "話にならない，不可能な",
        choices: ["out of question", "possible", "negotiable", "plausible"],
        correctAnswer: "out of question"
    },
    {
       id: 1510,
        question: "を殺害する，計画的に殺す",
        choices: ["slay", "rescue", "save", "spare"],
        correctAnswer: "slay"
    },
    {
       id: 1511,
        question: "を見下す，軽視する",
        choices: ["look down on", "respect", "admire", "praise"],
        correctAnswer: "look down on"
    },
    {
       id: 1512,
        question: "豊かにする，裕福にする",
        choices: ["enrich", "impoverish", "weaken", "reduce"],
        correctAnswer: "enrich"
    },
    {
       id: 1513,
        question: "いびきをかく，睡眠中にうるさく呼吸する",
        choices: ["snore", "mumble", "hum", "whisper"],
        correctAnswer: "snore"
    },
    {
       id: 1514,
        question: "ねぐら，巣穴",
        choices: ["den", "nest", "burrow", "cave"],
        correctAnswer: "den"
    },
    {
       id: 1515,
        question: "市街電車，路面電車",
        choices: ["tram", "bus", "train", "subway"],
        correctAnswer: "tram"
    },
    {
       id: 1516,
        question: "やめる，弱まる，止む",
        choices: ["let up", "continue", "persist", "strengthen"],
        correctAnswer: "let up"
    },
    {
       id: 1517,
        question: "を公言する，明言する",
        choices: ["profess", "deny", "conceal", "hide"],
        correctAnswer: "profess"
    },
    {
       id: 1518,
        question: "雪が解ける，雪解けの陽気になる",
        choices: ["thaw", "freeze", "solidify", "harden"],
        correctAnswer: "thaw"
    },
    {
       id: 1519,
        question: "湾岸の，海岸の",
        choices: ["coastal", "inland", "mountainous", "desert"],
        correctAnswer: "coastal"
    },
    {
       id: 1520,
        question: "に発展する，進展する",
        choices: ["grow into", "shrink from", "recede from", "contract to"],
        correctAnswer: "grow into"
    },
    {
       id: 1521,
        question: "注目すべき，重要な",
        choices: ["notable", "insignificant", "ordinary", "minor"],
        correctAnswer: "notable"
    },
    {
       id: 1522,
        question: "AをBの範疇に分ける，AをBとして分類する",
        choices: ["categorize A as B", "exclude A from B", "combine A with B", "separate A from B"],
        correctAnswer: "categorize A as B"
    },
    {
       id: 1523,
        question: "縫い目，継ぎ目",
        choices: ["seam", "tear", "gap", "split"],
        correctAnswer: "seam"
    },
    {
       id: 1524,
        question: "の前に現れる，先立って現れる",
        choices: ["come before", "follow after", "come along", "stay behind"],
        correctAnswer: "come before"
    },
    {
       id: 1525,
        question: "を懇願する",
        choices: ["implore", "demand", "command", "order"],
        correctAnswer: "implore"
    },
    {
       id: 1526,
        question: "哀れな",
        choices: ["pathetic", "impressive", "cheerful", "joyful"],
        correctAnswer: "pathetic"
    },
    {
       id: 1527,
        question: "争う，戦う",
        choices: ["contend", "surrender", "give up", "compromise"],
        correctAnswer: "contend"
    },
    {
       id: 1528,
        question: "亡命，国外追放",
        choices: ["exile", "asylum", "refuge", "shelter"],
        correctAnswer: "exile"
    },
    {
       id: 1529,
        question: "密度，濃度",
        choices: ["density", "thickness", "volume", "mass"],
        correctAnswer: "density"
    },
    {
       id: 1530,
        question: "本来の，固有の",
        choices: ["inherent", "acquired", "external", "borrowed"],
        correctAnswer: "inherent"
    },
    {
       id: 1531,
        question: "を追い払う，排除する",
        choices: ["drive off", "bring in", "invite", "accept"],
        correctAnswer: "drive off"
    },
    {
       id: 1532,
        question: "を困らせる，混乱させる",
        choices: ["perplex", "clarify", "explain", "simplify"],
        correctAnswer: "perplex"
    },
    {
       id: 1533,
        question: "ずるい，陰険な",
        choices: ["sly", "honest", "straightforward", "innocent"],
        correctAnswer: "sly"
    },
    {
       id: 1534,
        question: "国勢調査，人口調査",
        choices: ["census", "survey", "research", "investigation"],
        correctAnswer: "census"
    },
    {
       id: 1535,
        question: "ホッチキス",
        choices: ["stapler", "clip", "tape", "glue"],
        correctAnswer: "stapler"
    },
    {
       id: 1536,
        question: "を舗装する",
        choices: ["pave", "crack", "tear", "dig"],
        correctAnswer: "pave"
    },
    {
       id: 1537,
        question: "食べられる，摂取可能な",
        choices: ["edible", "poisonous", "toxic", "inedible"],
        correctAnswer: "edible"
    },
    {
       id: 1538,
        question: "みすぼらしい",
        choices: ["shabby", "luxurious", "elegant", "refined"],
        correctAnswer: "shabby"
    },
    {
       id: 1539,
        question: "啓示",
        choices: ["revelation", "secret", "mystery", "concealment"],
        correctAnswer: "revelation"
    },
    {
       id: 1540,
        question: "その後は",
        choices: ["thereafter", "beforehand", "previously", "initially"],
        correctAnswer: "thereafter"
    },
    {
       id: 1541,
        question: "時間厳守",
        choices: ["punctuality", "lateness", "tardiness", "delay"],
        correctAnswer: "punctuality"
    },
    {
       id: 1542,
        question: "編集の/社説",
        choices: ["editorial", "headline", "advertisement", "column"],
        correctAnswer: "editorial"
    },
    {
       id: 1543,
        question: "に参加しようとしている，参画しようとしている",
        choices: ["up for", "out of", "against", "away from"],
        correctAnswer: "up for"
    },
    {
       id: 1544,
        question: "商品",
        choices: ["merchandise", "service", "investment", "currency"],
        correctAnswer: "merchandise"
    },
    {
       id: 1545,
        question: "薬剤師",
        choices: ["pharmacist", "chemist", "doctor", "nurse"],
        correctAnswer: "pharmacist"
    },
    {
       id: 1546,
        question: "編み糸",
        choices: ["yarn", "thread", "rope", "string"],
        correctAnswer: "yarn"
    },
    {
       id: 1547,
        question: "上げる，昇進させる",
        choices: ["elevate", "lower", "reduce", "demote"],
        correctAnswer: "elevate"
    },
    {
       id: 1548,
        question: "うがいする",
        choices: ["gargle", "swallow", "drink", "inhale"],
        correctAnswer: "gargle"
    },
    {
       id: 1549,
        question: "絶妙な，見事な",
        choices: ["exquisite", "ordinary", "average", "mediocre"],
        correctAnswer: "exquisite"
    },
    {
       id: 1550,
        question: "を試す，実験する",
        choices: ["experiment with", "avoid", "ignore", "neglect"],
        correctAnswer: "experiment with"
    },
    {
       id: 1551,
        question: "反抗的な，抵抗的な",
        choices: ["rebellious", "obedient", "compliant", "submissive"],
        correctAnswer: "rebellious"
    },
    {
       id: 1552,
        question: "洗剤",
        choices: ["detergent", "soap", "shampoo", "cleaner"],
        correctAnswer: "detergent"
    },
    {
       id: 1553,
        question: "配当，配当金",
        choices: ["dividend", "interest", "salary", "wage"],
        correctAnswer: "dividend"
    },
    {
       id: 1554,
        question: "まえがき，序文",
        choices: ["preface", "conclusion", "chapter", "appendix"],
        correctAnswer: "preface"
    },
    {
       id: 1555,
        question: "を強化する，補強する",
        choices: ["reinforce", "weaken", "diminish", "reduce"],
        correctAnswer: "reinforce"
    },
    {
       id: 1556,
        question: "概念的な，概念の",
        choices: ["conceptual", "physical", "practical", "realistic"],
        correctAnswer: "conceptual"
    },
    {
       id: 1557,
        question: "転落する，倒れる",
        choices: ["tumble", "rise", "stand", "ascend"],
        correctAnswer: "tumble"
    },
    {
       id: 1558,
        question: "と変わらない，同じぐらい悪い",
        choices: ["no better than", "far better than", "slightly worse than", "completely different from"],
        correctAnswer: "no better than"
    },
    {
       id: 1559,
        question: "を熟考する，よく考える",
        choices: ["contemplate", "ignore", "neglect", "disregard"],
        correctAnswer: "contemplate"
    },
    {
       id: 1560,
        question: "をむさぼり食う，がつがつ食う",
        choices: ["devour", "sip", "nibble", "taste"],
        correctAnswer: "devour"
    },
    {
       id: 1561,
        question: "裏切り者，反逆者",
        choices: ["traitor", "patriot", "ally", "supporter"],
        correctAnswer: "traitor"
    },
    {
       id: 1562,
        question: "赤道，赤道線，赤道面",
        choices: ["equator", "pole", "latitude", "longitude"],
        correctAnswer: "equator"
    },
    {
       id: 1563,
        question: "始まる，起こる",
        choices: ["set in", "end", "stop", "pause"],
        correctAnswer: "set in"
    },
    {
       id: 1564,
        question: "財政上の，国庫の",
        choices: ["fiscal", "economic", "monetary", "financial"],
        correctAnswer: "fiscal"
    },
    {
       id: 1565,
        question: "肌を焼く，日焼けする",
        choices: ["tan", "pale", "whiten", "lighten"],
        correctAnswer: "tan"
    },
    {
       id: 1566,
        question: "監督する，管理する",
        choices: ["supervise", "neglect", "ignore", "overlook"],
        correctAnswer: "supervise"
    },
    {
       id: 1567,
        question: "統計的な",
        choices: ["statistical", "random", "unstructured", "informal"],
        correctAnswer: "statistical"
    },
    {
       id: 1568,
        question: "崇拝する，敬愛する",
        choices: ["adore", "dislike", "hate", "despise"],
        correctAnswer: "adore"
    },
    {
       id: 1569,
        question: "を指摘する，指示する",
        choices: ["point out", "ignore", "overlook", "avoid"],
        correctAnswer: "point out"
    },
    {
       id: 1570,
        question: "静脈",
        choices: ["vein", "artery", "nerve", "capillary"],
        correctAnswer: "vein"
    },
    {
       id: 1571,
        question: "指示的な",
        choices: ["directive", "optional", "suggestive", "voluntary"],
        correctAnswer: "directive"
    },
    {
       id: 1572,
        question: "包む，包装する",
        choices: ["envelop", "unwrap", "expose", "reveal"],
        correctAnswer: "envelop"
    },
    {
       id: 1573,
        question: "直径",
        choices: ["diameter", "radius", "circumference", "perimeter"],
        correctAnswer: "diameter"
    },
    {
       id: 1574,
        question: "祭壇",
        choices: ["altar", "pulpit", "shrine", "podium"],
        correctAnswer: "altar"
    },
    {
       id: 1575,
        question: "羽ばたく",
        choices: ["flap", "hover", "glide", "soar"],
        correctAnswer: "flap"
    },
    {
       id: 1576,
        question: "すくい取る",
        choices: ["skim", "pour", "mix", "stir"],
        correctAnswer: "skim"
    },
    {
       id: 1577,
        question: "性的関心，性的志向",
        choices: ["sexuality", "gender", "identity", "preference"],
        correctAnswer: "sexuality"
    },
    {
       id: 1578,
        question: "高度，高さ",
        choices: ["altitude", "depth", "width", "length"],
        correctAnswer: "altitude"
    },
    {
       id: 1579,
        question: "身体障がい者",
        choices: ["cripple", "invalid", "patient", "victim"],
        correctAnswer: "cripple"
    },
    {
       id: 1580,
        question: "天職，職業",
        choices: ["vocation", "hobby", "task", "occupation"],
        correctAnswer: "vocation"
    },
    {
       id: 1581,
        question: "省略",
        choices: ["omission", "inclusion", "expansion", "addition"],
        correctAnswer: "omission"
    },
    {
       id: 1582,
        question: "軍曹",
        choices: ["sergeant", "lieutenant", "general", "colonel"],
        correctAnswer: "sergeant"
    },
    {
       id: 1583,
        question: "服用量",
        choices: ["dose", "intake", "portion", "measurement"],
        correctAnswer: "dose"
    },
    {
       id: 1584,
        question: "小冊子",
        choices: ["brochure", "pamphlet", "magazine", "novel"],
        correctAnswer: "brochure"
    },
    {
       id: 1585,
        question: "控える，慎む",
        choices: ["refrain", "engage", "partake", "indulge"],
        correctAnswer: "refrain"
    },
    {
       id: 1586,
        question: "の重荷になる，負担になる",
        choices: ["weigh on", "lighten", "relieve", "assist"],
        correctAnswer: "weigh on"
    },
    {
       id: 1587,
        question: "偏見，先入観",
        choices: ["bias", "neutrality", "fairness", "objectivity"],
        correctAnswer: "bias"
    },
    {
       id: 1588,
        question: "風刺，皮肉",
        choices: ["satire", "comedy", "drama", "parody"],
        correctAnswer: "satire"
    },
    {
       id: 1589,
        question: "同時の，同時に起こる",
        choices: ["simultaneous", "sequential", "delayed", "alternate"],
        correctAnswer: "simultaneous"
    },
    {
       id: 1590,
        question: "転換，変換",
        choices: ["conversion", "reversal", "distortion", "modification"],
        correctAnswer: "conversion"
    },
    {
       id: 1591,
        question: "始める，追い払う",
        choices: ["kick off", "wrap up", "wind down", "terminate"],
        correctAnswer: "kick off"
    },
    {
       id: 1592,
        question: "給仕，執事",
        choices: ["steward", "chef", "janitor", "host"],
        correctAnswer: "steward"
    },
    {
       id: 1593,
        question: "パンくず",
        choices: ["crumb", "dust", "flake", "chip"],
        correctAnswer: "crumb"
    },
    {
       id: 1594,
        question: "寄付する，金を出す",
        choices: ["chip in", "cash out", "withdraw", "save up"],
        correctAnswer: "chip in"
    },
    {
       id: 1595,
        question: "専門知識",
        choices: ["expertise", "novice", "ignorance", "incompetence"],
        correctAnswer: "expertise"
    },
    {
       id: 1596,
        question: "を考慮に入れる，余裕を持つ",
        choices: ["allow for", "neglect", "overlook", "dismiss"],
        correctAnswer: "allow for"
    },
    {
       id: 1597,
        question: "まぶしい光",
        choices: ["glare", "shine", "beam", "sparkle"],
        correctAnswer: "glare"
    },
    {
       id: 1598,
        question: "採用，受け入れ",
        choices: ["adoption", "rejection", "dismissal", "exclusion"],
        correctAnswer: "adoption"
    },
    {
       id: 1599,
        question: "廃棄",
        choices: ["disposal", "retention", "accumulation", "storage"],
        correctAnswer: "disposal"
    },
    {
       id: 1600,
        question: "超える，勝る",
        choices: ["surpass", "fall behind", "lag", "lose to"],
        correctAnswer: "surpass"
    },
    {
       id: 1601,
        question: "を悔い改める，後悔する",
        choices: ["repent", "boast", "rejoice", "celebrate"],
        correctAnswer: "repent"
    },
    {
       id: 1602,
        question: "くすくす笑う",
        choices: ["giggle", "chuckle", "snicker", "laugh"],
        correctAnswer: "giggle"
    },
    {
       id: 1603,
        question: "確証，確認",
        choices: ["confirmation", "assumption", "guess", "speculation"],
        correctAnswer: "confirmation"
    },
    {
       id: 1604,
        question: "湿気のある，蒸し暑い",
        choices: ["humid", "dry", "arid", "cool"],
        correctAnswer: "humid"
    },
    {
       id: 1605,
        question: "大広間",
        choices: ["saloon", "chamber", "hall", "ballroom"],
        correctAnswer: "saloon"
    },
    {
       id: 1606,
        question: "を書きとらせる",
        choices: ["dictate", "transcribe", "note", "copy"],
        correctAnswer: "dictate"
    },
    {
       id: 1607,
        question: "纏める，結束する",
        choices: ["wrap up", "unfold", "spread out", "expand"],
        correctAnswer: "wrap up"
    },
    {
       id: 1608,
        question: "恐怖，驚き",
        choices: ["fright", "calm", "relaxation", "peace"],
        correctAnswer: "fright"
    },
    {
       id: 1609,
        question: "実行，遂行",
        choices: ["execution", "postponement", "delay", "halt"],
        correctAnswer: "execution"
    },
    {
       id: 1610,
        question: "減少する",
        choices: ["fall off", "increase", "expand", "grow"],
        correctAnswer: "fall off"
    },

    {
       id: 1611,
        question: "織物の",
        choices: ["textile", "fabric", "cloth", "garment"],
        correctAnswer: "textile"
    },
    {
       id: 1612,
        question: "地理的な",
        choices: ["geographical", "topographical", "cartographical", "geometric"],
        correctAnswer: "geographical"
    },
    {
       id: 1613,
        question: "怒り狂った",
        choices: ["furious", "irritated", "annoyed", "calm"],
        correctAnswer: "furious"
    },
    {
       id: 1614,
        question: "夕暮れ，たそがれ",
        choices: ["dusk", "dawn", "noon", "midnight"],
        correctAnswer: "dusk"
    },
    {
       id: 1615,
        question: "君主制",
        choices: ["monarchy", "democracy", "republic", "dictatorship"],
        correctAnswer: "monarchy"
    },
    {
       id: 1616,
        question: "貪欲，強欲",
        choices: ["greed", "generosity", "kindness", "humility"],
        correctAnswer: "greed"
    },
    {
       id: 1617,
        question: "憂うつ，哀愁",
        choices: ["melancholy", "joy", "excitement", "happiness"],
        correctAnswer: "melancholy"
    },
    {
       id: 1618,
        question: "貢ぎ物，感謝",
        choices: ["tribute", "gift", "offering", "donation"],
        correctAnswer: "tribute"
    },
    {
       id: 1619,
        question: "潮の，潮に乗った",
        choices: ["tidal", "marine", "oceanic", "coastal"],
        correctAnswer: "tidal"
    },
    {
       id: 1620,
        question: "低木，かん木",
        choices: ["shrub", "tree", "grass", "bush"],
        correctAnswer: "shrub"
    },
    {
       id: 1621,
        question: "提訴する，訴訟を提出する",
        choices: ["file a suit", "drop a case", "dismiss charges", "settle a case"],
        correctAnswer: "file a suit"
    },
    {
       id: 1622,
        question: "生地",
        choices: ["texture", "pattern", "surface", "material"],
        correctAnswer: "texture"
    },
    {
       id: 1623,
        question: "目前に来ている，間近である",
        choices: ["just around the corner", "far away", "out of sight", "beyond reach"],
        correctAnswer: "just around the corner"
    },
    {
       id: 1624,
        question: "退屈な",
        choices: ["tedious", "exciting", "thrilling", "engaging"],
        correctAnswer: "tedious"
    },
    {
       id: 1625,
        question: "抜本的な，思い切った",
        choices: ["drastic", "moderate", "gradual", "slight"],
        correctAnswer: "drastic"
    },
    {
       id: 1626,
        question: "待機して，キャンセル待ちをして",
        choices: ["on standby", "off duty", "absent", "unavailable"],
        correctAnswer: "on standby"
    },
    {
       id: 1627,
        question: "を誇りにする，自慢する",
        choices: ["take pride in", "feel ashamed of", "be embarrassed by", "hide from"],
        correctAnswer: "take pride in"
    },
    {
       id: 1628,
        question: "官僚，官僚制度",
        choices: ["bureaucracy", "monarchy", "anarchy", "democracy"],
        correctAnswer: "bureaucracy"
    },
    {
       id: 1629,
        question: "群れ",
        choices: ["swarm", "flock", "herd", "pack"],
        correctAnswer: "swarm"
    },
    {
       id: 1630,
        question: "熱っぽい",
        choices: ["feverish", "healthy", "calm", "cool"],
        correctAnswer: "feverish"
    },
    {
       id: 1631,
        question: "預言者",
        choices: ["prophet", "disciple", "follower", "preacher"],
        correctAnswer: "prophet"
    },
    {
       id: 1632,
        question: "刺激，触発",
        choices: ["spur", "obstacle", "hindrance", "blockage"],
        correctAnswer: "spur"
    },
    {
       id: 1633,
        question: "嘆願，請願",
        choices: ["petition", "protest", "declaration", "complaint"],
        correctAnswer: "petition"
    },
    {
       id: 1634,
        question: "を否定する，矛盾する",
        choices: ["contradict", "confirm", "agree with", "support"],
        correctAnswer: "contradict"
    },
    {
       id: 1635,
        question: "にくっつく，接着する",
        choices: ["stick to", "peel off", "detach from", "remove from"],
        correctAnswer: "stick to"
    },
    {
       id: 1636,
        question: "陶器",
        choices: ["pottery", "sculpture", "canvas", "painting"],
        correctAnswer: "pottery"
    },
    {
       id: 1637,
        question: "哀れな，かわいそうな",
        choices: ["pitiful", "joyful", "cheerful", "happy"],
        correctAnswer: "pitiful"
    },
    {
       id: 1638,
        question: "委任する",
        choices: ["delegate", "refuse", "retain", "deny"],
        correctAnswer: "delegate"
    },
    {
       id: 1639,
        question: "ふともも",
        choices: ["thigh", "shin", "calf", "ankle"],
        correctAnswer: "thigh"
    },
    {
       id: 1640,
        question: "やり遂げる，たどり着く",
        choices: ["make it", "give up", "fail", "abandon"],
        correctAnswer: "make it"
    },
    {
       id: 1641,
        question: "を打ち明ける，信用する",
        choices: ["confide", "reveal", "trust", "admit"],
        correctAnswer: "confide"
    },
    {
       id: 1642,
        question: "楽観的な",
        choices: ["easygoing", "pessimistic", "anxious", "stressed"],
        correctAnswer: "easygoing"
    },
    {
       id: 1643,
        question: "から歩いて出る，立ち去る",
        choices: ["walk off with", "run away", "step aside", "leave behind"],
        correctAnswer: "walk off with"
    },
    {
       id: 1644,
        question: "を区別する",
        choices: ["differentiate", "mix up", "confuse", "combine"],
        correctAnswer: "differentiate"
    },
    {
       id: 1645,
        question: "まぶた",
        choices: ["eyelid", "eyebrow", "eyelash", "pupil"],
        correctAnswer: "eyelid"
    },
    {
       id: 1646,
        question: "かまど，暖炉",
        choices: ["furnace", "stove", "chimney", "heater"],
        correctAnswer: "furnace"
    },
    {
       id: 1647,
        question: "に入り込む，合格する",
        choices: ["get into", "drop out", "give up", "fail"],
        correctAnswer: "get into"
    },
    {
       id: 1648,
        question: "悲惨な，惨事の",
        choices: ["disastrous", "fortunate", "successful", "joyful"],
        correctAnswer: "disastrous"
    },
    {
       id: 1649,
        question: "満場一致の，同意見の",
        choices: ["unanimous", "divided", "controversial", "opposed"],
        correctAnswer: "unanimous"
    },
    {
       id: 1650,
        question: "不足，欠乏",
        choices: ["deficiency", "abundance", "plenty", "surplus"],
        correctAnswer: "deficiency"
    },
    {
       id: 1651,
        question: "をそらす，気をそらす",
        choices: ["distract", "focus", "concentrate", "fixate"],
        correctAnswer: "distract"
    },
    {
       id: 1652,
        question: "不快感，違和感",
        choices: ["discomfort", "comfort", "relief", "ease"],
        correctAnswer: "discomfort"
    },
    {
       id: 1653,
        question: "熱心，熱意",
        choices: ["zeal", "apathy", "indifference", "boredom"],
        correctAnswer: "zeal"
    },
    {
       id: 1654,
        question: "刺す，突き刺す",
        choices: ["stab", "cut", "slice", "scratch"],
        correctAnswer: "stab"
    },
    {
       id: 1655,
        question: "BにAを供与する，BにAを提供する",
        choices: ["grant A to B", "lend A to B", "offer A to B", "donate A to B"],
        correctAnswer: "grant A to B"
    },
    {
       id: 1656,
        question: "を起こす，喚起する",
        choices: ["arouse", "suppress", "calm", "ignore"],
        correctAnswer: "arouse"
    },
    {
       id: 1657,
        question: "上昇中で，増加中",
        choices: ["on the rise", "declining", "decreasing", "falling"],
        correctAnswer: "on the rise"
    },
    {
       id: 1658,
        question: "傲慢な，横柄な",
        choices: ["arrogant", "humble", "modest", "shy"],
        correctAnswer: "arrogant"
    },
    {
       id: 1659,
        question: "趣のある",
        choices: ["quaint", "modern", "ordinary", "dull"],
        correctAnswer: "quaint"
    },
    {
       id: 1660,
        question: "を引き抜く，摘む",
        choices: ["pluck", "push", "plant", "place"],
        correctAnswer: "pluck"
    },
    {
       id: 1661,
        question: "高尚な，気品のある",
        choices: ["sublime", "trivial", "ordinary", "basic"],
        correctAnswer: "sublime"
    },
    {
       id: 1662,
        question: "を飾る",
        choices: ["adorn", "strip", "erase", "remove"],
        correctAnswer: "adorn"
    },
    {
       id: 1663,
        question: "受託者，保管人",
        choices: ["trustee", "owner", "tenant", "borrower"],
        correctAnswer: "trustee"
    },
    {
       id: 1664,
        question: "Aを持ち込む，持参する",
        choices: ["bring A in", "take A out", "throw A away", "leave A behind"],
        correctAnswer: "bring A in"
    },
    {
       id: 1665,
        question: "の危険にさらされている",
        choices: ["in danger of", "safe from", "protected from", "free of"],
        correctAnswer: "in danger of"
    },
    {
       id: 1666,
        question: "指示者",
        choices: ["indicator", "follower", "observer", "bystander"],
        correctAnswer: "indicator"
    },
    {
       id: 1667,
        question: "慈悲深い",
        choices: ["merciful", "cruel", "harsh", "strict"],
        correctAnswer: "merciful"
    },
    {
       id: 1668,
        question: "衣装",
        choices: ["outfit", "costume", "attire", "uniform"],
        correctAnswer: "outfit"
    },
    {
       id: 1669,
        question: "公開討論会",
        choices: ["forum", "debate", "conference", "meeting"],
        correctAnswer: "forum"
    },
    {
       id: 1670,
        question: "投影",
        choices: ["projection", "reflection", "mirroring", "shadowing"],
        correctAnswer: "projection"
    },
    {
       id: 1671,
        question: "荒れ果てた",
        choices: ["desolate", "fertile", "lush", "populated"],
        correctAnswer: "desolate"
    },
    {
       id: 1672,
        question: "隔月の",
        choices: ["bimonthly", "biweekly", "annually", "weekly"],
        correctAnswer: "bimonthly"
    },
    {
       id: 1673,
        question: "に沿って，従って，伴って",
        choices: ["along with", "next to", "aside from", "in contrast to"],
        correctAnswer: "along with"
    },
    {
       id: 1674,
        question: "枯れる，しおれる",
        choices: ["wither", "bloom", "grow", "flourish"],
        correctAnswer: "wither"
    },
    {
       id: 1675,
        question: "心を奪う",
        choices: ["enchant", "bore", "repel", "annoy"],
        correctAnswer: "enchant"
    },
    {
       id: 1676,
        question: "匿名の，不明の",
        choices: ["anonymous", "famous", "renowned", "well-known"],
        correctAnswer: "anonymous"
    },
    {
       id: 1677,
        question: "解散，解任",
        choices: ["dismissal", "appointment", "promotion", "hiring"],
        correctAnswer: "dismissal"
    },
    {
       id: 1678,
        question: "責任，責務，義務",
        choices: ["liability", "freedom", "ignorance", "privilege"],
        correctAnswer: "liability"
    },
    {
       id: 1679,
        question: "雄弁な，口達者な",
        choices: ["eloquent", "inarticulate", "silent", "shy"],
        correctAnswer: "eloquent"
    },
    {
       id: 1680,
        question: "瞑想する，熟考する",
        choices: ["meditate", "ignore", "neglect", "hurry"],
        correctAnswer: "meditate"
    },
    {
       id: 1681,
        question: "蒸気，水蒸気",
        choices: ["vapor", "solid", "liquid", "fog"],
        correctAnswer: "vapor"
    },
    {
       id: 1682,
        question: "指紋，拇印",
        choices: ["fingerprint", "footprint", "signature", "handprint"],
        correctAnswer: "fingerprint"
    },
    {
       id: 1683,
        question: "煙霧，煙",
        choices: ["smog", "fog", "haze", "mist"],
        correctAnswer: "smog"
    },
    {
       id: 1684,
        question: "仲直りさせる",
        choices: ["reconcile", "argue", "dispute", "separate"],
        correctAnswer: "reconcile"
    },
    {
       id: 1685,
        question: "潜水艦，水中艇",
        choices: ["submarine", "aircraft", "battleship", "boat"],
        correctAnswer: "submarine"
    },
    {
       id: 1686,
        question: "外皮",
        choices: ["crust", "core", "mantle", "surface"],
        correctAnswer: "crust"
    },
    {
       id: 1687,
        question: "まぶしくする，目をくらませる",
        choices: ["dazzle", "dim", "darken", "blur"],
        correctAnswer: "dazzle"
    },
    {
       id: 1688,
        question: "にも関わらず，それにも関わらず",
        choices: ["regardless of", "because of", "due to", "thanks to"],
        correctAnswer: "regardless of"
    },
    {
       id: 1689,
        question: "超自然的な",
        choices: ["supernatural", "normal", "realistic", "scientific"],
        correctAnswer: "supernatural"
    },
    {
       id: 1690,
        question: "費やす，消費する",
        choices: ["expend", "save", "store", "accumulate"],
        correctAnswer: "expend"
    },
    {
       id: 1691,
        question: "代名詞",
        choices: ["pronoun", "noun", "adjective", "verb"],
        correctAnswer: "pronoun"
    },
    {
       id: 1692,
        question: "それぞれ，別々に",
        choices: ["respectively", "collectively", "together", "simultaneously"],
        correctAnswer: "respectively"
    },
    {
       id: 1693,
        question: "を推定する，仮定する",
        choices: ["presume", "deny", "reject", "ignore"],
        correctAnswer: "presume"
    },
    {
       id: 1694,
        question: "を嘆く，嘆き悲しむ",
        choices: ["lament", "celebrate", "enjoy", "rejoice"],
        correctAnswer: "lament"
    },
    {
       id: 1695,
        question: "を授ける，与える",
        choices: ["bestow", "take", "steal", "remove"],
        correctAnswer: "bestow"
    },
    {
       id: 1696,
        question: "難破，衝突",
        choices: ["wreck", "rescue", "salvage", "float"],
        correctAnswer: "wreck"
    },
    {
       id: 1697,
        question: "適切な，要領を得た",
        choices: ["to the point", "off-topic", "irrelevant", "misleading"],
        correctAnswer: "to the point"
    },
    {
       id: 1698,
        question: "弟子",
        choices: ["disciple", "master", "teacher", "mentor"],
        correctAnswer: "disciple"
    },
    {
       id: 1699,
        question: "投票用紙，選挙票",
        choices: ["ballot", "receipt", "ticket", "license"],
        correctAnswer: "ballot"
    },
    {
       id: 1700,
        question: "木材",
        choices: ["timber", "steel", "concrete", "brick"],
        correctAnswer: "timber"
    },
    {
       id: 1701,
        question: "を運搬する，引っ張る",
        choices: ["haul", "push", "carry", "drag"],
        correctAnswer: "haul"
    },
    {
       id: 1702,
        question: "恐ろしい",
        choices: ["frightful", "peaceful", "pleasant", "delightful"],
        correctAnswer: "frightful"
    },
    {
       id: 1703,
        question: "むかついた",
        choices: ["disgusted", "pleased", "excited", "curious"],
        correctAnswer: "disgusted"
    },
    {
       id: 1704,
        question: "勝る，優れる，上回る",
        choices: ["excel", "fail", "struggle", "decline"],
        correctAnswer: "excel"
    },
    {
       id: 1705,
        question: "牧場",
        choices: ["ranch", "farm", "garden", "zoo"],
        correctAnswer: "ranch"
    },
    {
       id: 1706,
        question: "前菜",
        choices: ["appetizer", "dessert", "main course", "side dish"],
        correctAnswer: "appetizer"
    },
    {
       id: 1707,
        question: "を後援する，後退させる",
        choices: ["back up", "give up", "hold back", "step forward"],
        correctAnswer: "back up"
    },
    {
       id: 1708,
        question: "著名な，身分の高い",
        choices: ["eminent", "unknown", "ordinary", "insignificant"],
        correctAnswer: "eminent"
    },
    {
       id: 1709,
        question: "補償する，償う",
        choices: ["compensate", "neglect", "ignore", "refuse"],
        correctAnswer: "compensate"
    },
    {
       id: 1710,
        question: "を行使する，発揮する",
        choices: ["exert", "suppress", "conceal", "withdraw"],
        correctAnswer: "exert"
    },
    {
       id: 1711,
        question: "死亡者数，死亡率",
        choices: ["mortality", "birthrate", "longevity", "growth"],
        correctAnswer: "mortality"
    },
    {
       id: 1712,
        question: "落胆，失意",
        choices: ["discouragement", "motivation", "happiness", "confidence"],
        correctAnswer: "discouragement"
    },
    {
       id: 1713,
        question: "民話",
        choices: ["folklore", "myth", "legend", "fable"],
        correctAnswer: "folklore"
    },
    {
       id: 1714,
        question: "暴動，騒動",
        choices: ["riot", "protest", "celebration", "ceremony"],
        correctAnswer: "riot"
    },
    {
       id: 1715,
        question: "氷河，ゆっくりと動く氷塊",
        choices: ["glacier", "iceberg", "snowstorm", "hail"],
        correctAnswer: "glacier"
    },
    {
       id: 1716,
        question: "至福，極楽",
        choices: ["bliss", "misery", "trouble", "despair"],
        correctAnswer: "bliss"
    },
    {
       id: 1717,
        question: "認める，譲歩する",
        choices: ["concede", "deny", "reject", "ignore"],
        correctAnswer: "concede"
    },
    {
       id: 1718,
        question: "社交的な，外交的な",
        choices: ["outgoing", "shy", "reserved", "introverted"],
        correctAnswer: "outgoing"
    },
    {
       id: 1719,
        question: "花輪，花冠",
        choices: ["wreath", "bouquet", "garland", "vine"],
        correctAnswer: "wreath"
    },
    {
       id: 1720,
        question: "行き詰らせる，座礁させる",
        choices: ["strand", "float", "rescue", "navigate"],
        correctAnswer: "strand"
    },
    {
       id: 1721,
        question: "緯度，緯線",
        choices: ["latitude", "longitude", "altitude", "hemisphere"],
        correctAnswer: "latitude"
    },
    {
       id: 1722,
        question: "お手本，模範",
        choices: ["role model", "example", "idol", "mentor"],
        correctAnswer: "role model"
    },
    {
       id: 1723,
        question: "を持ち越す，延期する",
        choices: ["hold over", "cancel", "finalize", "confirm"],
        correctAnswer: "hold over"
    },
    {
       id: 1724,
        question: "を積み上げる，積み重ねる，山積みにする，集積する",
        choices: ["pile up", "spread out", "scatter", "dismantle"],
        correctAnswer: "pile up"
    },
    {
       id: 1725,
        question: "正気でない，狂気の",
        choices: ["insane", "rational", "sane", "logical"],
        correctAnswer: "insane"
    },
    {
       id: 1726,
        question: "乱暴，暴行",
        choices: ["outrage", "kindness", "mercy", "forgiveness"],
        correctAnswer: "outrage"
    },
    {
       id: 1727,
        question: "お土産，記念品",
        choices: ["souvenir", "present", "gift", "reward"],
        correctAnswer: "souvenir"
    },
    {
       id: 1728,
        question: "線を引いて消す，を抹消する",
        choices: ["scratch out", "write down", "underline", "highlight"],
        correctAnswer: "scratch out"
    },
    {
       id: 1729,
        question: "動機",
        choices: ["incentive", "goal", "result", "excuse"],
        correctAnswer: "incentive"
    },
    {
       id: 1730,
        question: "を狙っている，が意図されている",
        choices: ["be aimed at", "be ignored by", "be controlled by", "be distracted from"],
        correctAnswer: "be aimed at"
    },
    {
       id: 1731,
        question: "投獄，監禁",
        choices: ["imprisonment", "freedom", "parole", "liberation"],
        correctAnswer: "imprisonment"
    },
    {
       id: 1732,
        question: "降伏する，投降する",
        choices: ["give in", "fight back", "resist", "stand firm"],
        correctAnswer: "give in"
    },
    {
       id: 1733,
        question: "前任者，先任者",
        choices: ["predecessor", "successor", "follower", "colleague"],
        correctAnswer: "predecessor"
    },
    {
       id: 1734,
        question: "誓い，誓約",
        choices: ["oath", "promise", "vow", "commitment"],
        correctAnswer: "oath"
    },
    {
       id: 1735,
        question: "前もって，あらかじめ",
        choices: ["in advance", "afterwards", "simultaneously", "unexpectedly"],
        correctAnswer: "in advance"
    },
    {
       id: 1736,
        question: "該当する",
        choices: ["applicable", "irrelevant", "invalid", "optional"],
        correctAnswer: "applicable"
    },
    {
       id: 1737,
        question: "を捨てる，廃棄する",
        choices: ["discard", "keep", "preserve", "retain"],
        correctAnswer: "discard"
    },
    {
       id: 1738,
        question: "ざわめく",
        choices: ["rustle", "shout", "murmur", "whisper"],
        correctAnswer: "rustle"
    },
    {
       id: 1739,
        question: "全部払う，完済する",
        choices: ["pay off", "owe", "borrow", "delay"],
        correctAnswer: "pay off"
    },
    {
       id: 1740,
        question: "を堅くする，硬化する",
        choices: ["stiffen", "soften", "loosen", "relax"],
        correctAnswer: "stiffen"
    },
    {
       id: 1741,
        question: "書き取り",
        choices: ["dictation", "reading", "listening", "writing"],
        correctAnswer: "dictation"
    },
    {
       id: 1742,
        question: "理論上の，理論に基づいた",
        choices: ["theoretical", "practical", "empirical", "experimental"],
        correctAnswer: "theoretical"
    },
    {
       id: 1743,
        question: "省略，略語",
        choices: ["abbreviation", "extension", "elaboration", "clarification"],
        correctAnswer: "abbreviation"
    },
    {
       id: 1744,
        question: "脅威",
        choices: ["menace", "security", "safety", "protection"],
        correctAnswer: "menace"
    },
    {
       id: 1745,
        question: "えさ",
        choices: ["bait", "food", "meal", "prey"],
        correctAnswer: "bait"
    },
    {
       id: 1746,
        question: "補足物",
        choices: ["complement", "substitute", "replacement", "alternative"],
        correctAnswer: "complement"
    },
    {
       id: 1747,
        question: "にも関わらず，全力でも",
        choices: ["with all", "despite", "regardless", "due to"],
        correctAnswer: "with all"
    },
    {
       id: 1748,
        question: "構成上の",
        choices: ["constitutional", "legal", "judicial", "governmental"],
        correctAnswer: "constitutional"
    },
    {
       id: 1749,
        question: "代数",
        choices: ["algebra", "geometry", "calculus", "trigonometry"],
        correctAnswer: "algebra"
    },
    {
       id: 1750,
        question: "市民権，公民権",
        choices: ["citizenship", "residency", "passport", "visa"],
        correctAnswer: "citizenship"
    },
    {
       id: 1751,
        question: "授与する",
        choices: ["confer", "deny", "revoke", "withdraw"],
        correctAnswer: "confer"
    },
    {
       id: 1752,
        question: "輝き",
        choices: ["splendor", "dullness", "darkness", "obscurity"],
        correctAnswer: "splendor"
    },
    {
       id: 1753,
        question: "その後の，次の",
        choices: ["subsequent", "previous", "preceding", "former"],
        correctAnswer: "subsequent"
    },
    {
       id: 1754,
        question: "控えめな，節度のある",
        choices: ["temperate", "extreme", "reckless", "intemperate"],
        correctAnswer: "temperate"
    },
    {
       id: 1755,
        question: "そっと通り過ぎる，静かに通過する",
        choices: ["slip by", "rush past", "storm through", "burst into"],
        correctAnswer: "slip by"
    },
    {
       id: 1756,
        question: "見習い",
        choices: ["apprentice", "master", "expert", "professional"],
        correctAnswer: "apprentice"
    },
    {
       id: 1757,
        question: "を避ける，からやり過ごす",
        choices: ["get away with", "face up to", "suffer from", "pay for"],
        correctAnswer: "get away with"
    },
    {
       id: 1758,
        question: "から離れる，距離を取る",
        choices: ["stay off", "approach", "engage with", "interact with"],
        correctAnswer: "stay off"
    },
    {
       id: 1759,
        question: "間違い",
        choices: ["lapse", "perfection", "accuracy", "precision"],
        correctAnswer: "lapse"
    },
    {
       id: 1760,
        question: "恐ろしい，手ごわい",
        choices: ["formidable", "weak", "feeble", "fragile"],
        correctAnswer: "formidable"
    },
    {
       id: 1761,
        question: "考える",
        choices: ["deem", "ignore", "reject", "dismiss"],
        correctAnswer: "deem"
    },
    {
       id: 1762,
        question: "迂回の，遠回りの",
        choices: ["roundabout", "direct", "straight", "immediate"],
        correctAnswer: "roundabout"
    },
    {
       id: 1763,
        question: "参加する",
        choices: ["partake", "withdraw", "avoid", "neglect"],
        correctAnswer: "partake"
    },
    {
       id: 1764,
        question: "いつも，いつでも",
        choices: ["all the time", "rarely", "occasionally", "sometimes"],
        correctAnswer: "all the time"
    },
    {
       id: 1765,
        question: "利用する",
        choices: ["avail", "ignore", "discard", "reject"],
        correctAnswer: "avail"
    },
    {
       id: 1766,
        question: "まどろむ，心地よく眠る",
        choices: ["slumber", "wake", "stir", "arouse"],
        correctAnswer: "slumber"
    },
    {
       id: 1767,
        question: "耐える，持ちこたえる",
        choices: ["withstand", "surrender", "collapse", "yield"],
        correctAnswer: "withstand"
    },
    {
       id: 1768,
        question: "正当な",
        choices: ["legitimate", "illegal", "forbidden", "illicit"],
        correctAnswer: "legitimate"
    },
    {
       id: 1769,
        question: "後退する，後ろに下がる",
        choices: ["drop back", "advance", "proceed", "move forward"],
        correctAnswer: "drop back"
    },
    {
       id: 1770,
        question: "料金",
        choices: ["toll", "discount", "fare", "salary"],
        correctAnswer: "toll"
    },
    {
       id: 1771,
        question: "をゆがめる，ねじる",
        choices: ["distort", "clarify", "straighten", "correct"],
        correctAnswer: "distort"
    },
    {
       id: 1772,
        question: "専制政治，圧政",
        choices: ["tyranny", "democracy", "republic", "freedom"],
        correctAnswer: "tyranny"
    },
    {
       id: 1773,
        question: "元帥",
        choices: ["marshal", "captain", "lieutenant", "sergeant"],
        correctAnswer: "marshal"
    },
    {
       id: 1774,
        question: "まつげ",
        choices: ["eyelash", "eyebrow", "pupil", "iris"],
        correctAnswer: "eyelash"
    },
    {
       id: 1775,
        question: "乱雑な",
        choices: ["messy", "tidy", "organized", "neat"],
        correctAnswer: "messy"
    },
    {
       id: 1776,
        question: "一口飲む",
        choices: ["sip", "gulp", "chug", "swallow"],
        correctAnswer: "sip"
    },
    {
       id: 1777,
        question: "乳房，胸",
        choices: ["bosom", "abdomen", "spine", "thigh"],
        correctAnswer: "bosom"
    },
    {
       id: 1778,
        question: "主宰する，司会する",
        choices: ["preside", "follow", "assist", "ignore"],
        correctAnswer: "preside"
    },
    {
       id: 1779,
        question: "視力",
        choices: ["eyesight", "vision", "perception", "sight"],
        correctAnswer: "eyesight"
    },
    {
       id: 1780,
        question: "絨毯，敷き物",
        choices: ["rug", "curtain", "blanket", "mat"],
        correctAnswer: "rug"
    },
    {
       id: 1781,
        question: "用心する，気を付ける",
        choices: ["beware", "ignore", "overlook", "dismiss"],
        correctAnswer: "beware"
    },
    {
       id: 1782,
        question: "を数える，計算する",
        choices: ["reckon", "guess", "estimate", "predict"],
        correctAnswer: "reckon"
    },
    {
       id: 1783,
        question: "抑制，鎮圧",
        choices: ["suppression", "freedom", "liberation", "allowance"],
        correctAnswer: "suppression"
    },
    {
       id: 1784,
        question: "山場を迎える，クライマックスを迎える",
        choices: ["come to a head", "decline", "fade out", "subside"],
        correctAnswer: "come to a head"
    },
    {
       id: 1785,
        question: "歩行者",
        choices: ["pedestrian", "driver", "cyclist", "passenger"],
        correctAnswer: "pedestrian"
    },
    {
       id: 1786,
        question: "頑丈な，太った",
        choices: ["stout", "slim", "frail", "delicate"],
        correctAnswer: "stout"
    },
    {
       id: 1787,
        question: "頭金，手付金",
        choices: ["down payment", "loan", "mortgage", "deposit"],
        correctAnswer: "down payment"
    },
    {
       id: 1788,
        question: "請負業者，契約者",
        choices: ["contractor", "employee", "manager", "supervisor"],
        correctAnswer: "contractor"
    },
    {
       id: 1789,
        question: "惑星の",
        choices: ["planetary", "stellar", "celestial", "astronomical"],
        correctAnswer: "planetary"
    },
    {
       id: 1790,
        question: "およその",
        choices: ["approximate", "precise", "exact", "definite"],
        correctAnswer: "approximate"
    },
    {
       id: 1791,
        question: "残り物，食べ残し",
        choices: ["leftover", "waste", "scrap", "trash"],
        correctAnswer: "leftover"
    },
    {
       id: 1792,
        question: "策定する，計画する",
        choices: ["formulate", "abandon", "neglect", "postpone"],
        correctAnswer: "formulate"
    },
    {
       id: 1793,
        question: "傾斜/傾く",
        choices: ["slant", "tilt", "straighten", "flatten"],
        correctAnswer: "slant"
    },
    {
       id: 1794,
        question: "起用する，遊ぶ",
        choices: ["play at", "give up", "focus on", "ignore"],
        correctAnswer: "play at"
    },
    {
       id: 1795,
        question: "市政の，地方自治の",
        choices: ["municipal", "national", "global", "federal"],
        correctAnswer: "municipal"
    },
    {
       id: 1796,
        question: "下品な",
        choices: ["vulgar", "polite", "elegant", "refined"],
        correctAnswer: "vulgar"
    },
    {
       id: 1797,
        question: "正確さ，精度",
        choices: ["precision", "inaccuracy", "error", "guesswork"],
        correctAnswer: "precision"
    },
    {
       id: 1798,
        question: "論文，論題",
        choices: ["thesis", "novel", "fiction", "poem"],
        correctAnswer: "thesis"
    },
    {
       id: 1799,
        question: "眠い，うとうとしている",
        choices: ["drowsy", "awake", "energetic", "alert"],
        correctAnswer: "drowsy"
    },
    {
       id: 1800,
        question: "絵のような，絵の様に美しい",
        choices: ["picturesque", "ordinary", "plain", "dull"],
        correctAnswer: "picturesque"
    },
    {
       id: 1801,
        question: "忠実な，従順な",
        choices: ["dutiful", "rebellious", "defiant", "stubborn"],
        correctAnswer: "dutiful"
    },
    {
       id: 1802,
        question: "大切にする，希望を抱く",
        choices: ["cherish", "abandon", "discard", "ignore"],
        correctAnswer: "cherish"
    },
    {
       id: 1803,
        question: "に立ち寄る，短時間訪れる",
        choices: ["drop by", "pass by", "stay over", "avoid"],
        correctAnswer: "drop by"
    },
    {
       id: 1804,
        question: "供給者，供給元，仕入先",
        choices: ["supplier", "customer", "buyer", "consumer"],
        correctAnswer: "supplier"
    },
    {
       id: 1805,
        question: "先行する，先に行く",
        choices: ["precede", "follow", "succeed", "replace"],
        correctAnswer: "precede"
    },
    {
       id: 1806,
        question: "鎮圧する，抑制する",
        choices: ["subdue", "provoke", "encourage", "stimulate"],
        correctAnswer: "subdue"
    },
    {
       id: 1807,
        question: "過度に，余分に",
        choices: ["in excess", "moderately", "adequately", "sufficiently"],
        correctAnswer: "in excess"
    },
    {
       id: 1808,
        question: "決定的な，結論的な",
        choices: ["decisive", "indecisive", "uncertain", "tentative"],
        correctAnswer: "decisive"
    },
    {
       id: 1809,
        question: "野蛮人，未開の人々",
        choices: ["barbarian", "civilized", "cultured", "educated"],
        correctAnswer: "barbarian"
    },
    {
       id: 1810,
        question: "見事な，立派な",
        choices: ["superb", "mediocre", "poor", "ordinary"],
        correctAnswer: "superb"
    },
    {
       id: 1811,
        question: "を実行する，実施する",
        choices: ["enforce", "neglect", "ignore", "disregard"],
        correctAnswer: "enforce"
    },
    {
       id: 1812,
        question: "言語学の，言語の",
        choices: ["linguistic", "mathematical", "scientific", "philosophical"],
        correctAnswer: "linguistic"
    },
    {
       id: 1813,
        question: "空っぽ，空いた場所",
        choices: ["vacancy", "fullness", "occupied", "crowded"],
        correctAnswer: "vacancy"
    },
    {
       id: 1814,
        question: "力強い，強い",
        choices: ["forceful", "weak", "feeble", "fragile"],
        correctAnswer: "forceful"
    },
    {
       id: 1815,
        question: "陰気な，暗い",
        choices: ["dismal", "bright", "cheerful", "sunny"],
        correctAnswer: "dismal"
    },
    {
       id: 1816,
        question: "不機嫌な，不機嫌そうな",
        choices: ["sullen", "happy", "joyful", "content"],
        correctAnswer: "sullen"
    },
    {
       id: 1817,
        question: "健康診断，医療診断，照合",
        choices: ["medical checkup", "casual visit", "quick glance", "brief inspection"],
        correctAnswer: "medical checkup"
    },
    {
       id: 1818,
        question: "を無理やり飲み込む，強いて飲み込む，無理に飲み込む",
        choices: ["force down", "spit out", "chew up", "gulp up"],
        correctAnswer: "force down"
    },
    {
       id: 1819,
        question: "支柱，支え",
        choices: ["prop", "collapse", "weakness", "burden"],
        correctAnswer: "prop"
    },
    {
       id: 1820,
        question: "均等に，等しく",
        choices: ["evenly", "unevenly", "randomly", "sporadically"],
        correctAnswer: "evenly"
    },
    {
       id: 1821,
        question: "を見捨てる，突き放す",
        choices: ["forsake", "embrace", "adopt", "support"],
        correctAnswer: "forsake"
    },
    {
       id: 1822,
        question: "詐欺，ごまかし",
        choices: ["fraud", "honesty", "truth", "sincerity"],
        correctAnswer: "fraud"
    },
    {
       id: 1823,
        question: "放棄，遺棄",
        choices: ["abandonment", "commitment", "dedication", "loyalty"],
        correctAnswer: "abandonment"
    },
    {
       id: 1824,
        question: "かゆみ，そう痒",
        choices: ["itch", "rash", "burn", "sting"],
        correctAnswer: "itch"
    },
    {
       id: 1825,
        question: "石膏，ギプス",
        choices: ["plaster", "concrete", "cement", "marble"],
        correctAnswer: "plaster"
    },
    {
       id: 1826,
        question: "予見する，予測する",
        choices: ["foresee", "ignore", "neglect", "overlook"],
        correctAnswer: "foresee"
    },
    {
       id: 1827,
        question: "配布物",
        choices: ["handout", "report", "contract", "brochure"],
        correctAnswer: "handout"
    },
    {
       id: 1828,
        question: "破滅，悪い運命",
        choices: ["doom", "fortune", "blessing", "prosperity"],
        correctAnswer: "doom"
    },
    {
       id: 1829,
        question: "を送る，発送する",
        choices: ["dispatch", "delay", "postpone", "return"],
        correctAnswer: "dispatch"
    },
    {
       id: 1830,
        question: "水星，水星の",
        choices: ["mercury", "venus", "mars", "jupiter"],
        correctAnswer: "mercury"
    },
    {
       id: 1831,
        question: "最終的な，究極的な",
        choices: ["eventual", "temporary", "initial", "provisional"],
        correctAnswer: "eventual"
    },
    {
       id: 1832,
        question: "麻痺させる",
        choices: ["paralyze", "heal", "cure", "revive"],
        correctAnswer: "paralyze"
    },
    {
       id: 1833,
        question: "腐敗する，腐る",
        choices: ["rot", "preserve", "maintain", "refresh"],
        correctAnswer: "rot"
    },
    {
       id: 1834,
        question: "成長する，大きくなる",
        choices: ["grow on", "shrink", "wither", "decline"],
        correctAnswer: "grow on"
    },
    {
       id: 1835,
        question: "苦労して働く，懸命に働く",
        choices: ["toil", "rest", "relax", "idle"],
        correctAnswer: "toil"
    },
    {
       id: 1836,
        question: "を申し立てる，主張する",
        choices: ["allege", "deny", "reject", "disprove"],
        correctAnswer: "allege"
    },
    {
       id: 1837,
        question: "発生",
        choices: ["occurrence", "avoidance", "prevention", "extinction"],
        correctAnswer: "occurrence"
    },
    {
       id: 1838,
        question: "家主",
        choices: ["landlord", "tenant", "guest", "customer"],
        correctAnswer: "landlord"
    },
    {
       id: 1839,
        question: "洗面所",
        choices: ["lavatory", "kitchen", "hallway", "balcony"],
        correctAnswer: "lavatory"
    },
    {
       id: 1840,
        question: "手綱，馬具",
        choices: ["rein", "rope", "leash", "strap"],
        correctAnswer: "rein"
    },
    {
       id: 1841,
        question: "さげずんだ，軽蔑する",
        choices: ["scornful", "respectful", "polite", "courteous"],
        correctAnswer: "scornful"
    },
    {
       id: 1842,
        question: "静かな，平穏な",
        choices: ["tranquil", "chaotic", "noisy", "loud"],
        correctAnswer: "tranquil"
    },
    {
       id: 1843,
        question: "腐った，腐敗した",
        choices: ["rotten", "fresh", "ripe", "healthy"],
        correctAnswer: "rotten"
    },
    {
       id: 1844,
        question: "流す",
        choices: ["flush", "block", "stop", "clog"],
        correctAnswer: "flush"
    },
    {
       id: 1845,
        question: "を雇う，引き受ける，採用する",
        choices: ["take on", "fire", "dismiss", "release"],
        correctAnswer: "take on"
    },
    {
       id: 1846,
        question: "極地の",
        choices: ["polar", "equatorial", "tropical", "temperate"],
        correctAnswer: "polar"
    },
    {
       id: 1847,
        question: "襲撃",
        choices: ["raid", "defense", "protection", "retreat"],
        correctAnswer: "raid"
    },
    {
       id: 1848,
        question: "燃え立つような",
        choices: ["fiery", "cold", "cool", "icy"],
        correctAnswer: "fiery"
    },
    {
       id: 1849,
        question: "優雅な",
        choices: ["gracious", "clumsy", "awkward", "rude"],
        correctAnswer: "gracious"
    },
    {
       id: 1850,
        question: "余剰，余り",
        choices: ["surplus", "shortage", "deficit", "lack"],
        correctAnswer: "surplus"
    },
    {
       id: 1860,
        question: "売りつくす，売却する",
        choices: ["sell out", "stock up", "buy in", "store away"],
        correctAnswer: "sell out"
    },
    {
       id: 1861,
        question: "わな",
        choices: ["snare", "net", "trap", "cage"],
        correctAnswer: "snare"
    },
    {
       id: 1862,
        question: "美辞麗句",
        choices: ["rhetoric", "poetry", "prose", "speech"],
        correctAnswer: "rhetoric"
    },
    {
       id: 1863,
        question: "楽観主義",
        choices: ["optimism", "pessimism", "realism", "fatalism"],
        correctAnswer: "optimism"
    },
    {
       id: 1864,
        question: "駐車場",
        choices: ["parking lot", "garage", "driveway", "roadside"],
        correctAnswer: "parking lot"
    },
    {
       id: 1865,
        question: "AをBと比べる",
        choices: ["compare A to B", "contrast A with B", "equate A with B", "differentiate A from B"],
        correctAnswer: "compare A to B"
    },
    {
       id: 1866,
        question: "廃止，撤廃",
        choices: ["abolition", "establishment", "continuation", "implementation"],
        correctAnswer: "abolition"
    },
    {
       id: 1867,
        question: "今後の",
        choices: ["forthcoming", "past", "delayed", "outdated"],
        correctAnswer: "forthcoming"
    },
    {
       id: 1868,
        question: "正気の，気の確かな",
        choices: ["sane", "insane", "irrational", "delirious"],
        correctAnswer: "sane"
    },
    {
       id: 1869,
        question: "不器用な，ぎこちない",
        choices: ["clumsy", "agile", "graceful", "elegant"],
        correctAnswer: "clumsy"
    },
    {
       id: 1870,
        question: "水素",
        choices: ["hydrogen", "oxygen", "helium", "nitrogen"],
        correctAnswer: "hydrogen"
    },
    {
       id: 1871,
        question: "摩擦，不和",
        choices: ["friction", "harmony", "agreement", "accord"],
        correctAnswer: "friction"
    },
    {
       id: 1872,
        question: "小袋",
        choices: ["pouch", "bag", "case", "wallet"],
        correctAnswer: "pouch"
    },
    {
       id: 1873,
        question: "時代，歴史の節目",
        choices: ["epoch", "era", "century", "decade"],
        correctAnswer: "epoch"
    },
    {
       id: 1874,
        question: "回転",
        choices: ["rotation", "revolution", "cycle", "turn"],
        correctAnswer: "rotation"
    },
    {
       id: 1875,
        question: "関税",
        choices: ["tariff", "tax", "duty", "fee"],
        correctAnswer: "tariff"
    },
    {
       id: 1876,
        question: "うなり声",
        choices: ["growl", "roar", "snarl", "grumble"],
        correctAnswer: "growl"
    },
    {
       id: 1877,
        question: "衝突，対立",
        choices: ["collision", "conflict", "crash", "impact"],
        correctAnswer: "collision"
    },
    {
       id: 1878,
        question: "にも関わらず，けれども",
        choices: ["despite", "because of", "due to", "thanks to"],
        correctAnswer: "despite"
    },
    {
       id: 1879,
        question: "爬虫類",
        choices: ["reptile", "amphibian", "mammal", "bird"],
        correctAnswer: "reptile"
    },
    {
       id: 1880,
        question: "精製，精錬",
        choices: ["refinement", "purification", "distillation", "processing"],
        correctAnswer: "refinement"
    },
    {
       id: 1881,
        question: "直接に，対面で",
        choices: ["in person", "online", "indirectly", "virtually"],
        correctAnswer: "in person"
    },
    {
       id: 1882,
        question: "従って行動する，考える",
        choices: ["conform", "resist", "oppose", "defy"],
        correctAnswer: "conform"
    },
    {
       id: 1883,
        question: "を支持する，を弁護する，を擁護する",
        choices: ["stick up for", "criticize", "reject", "oppose"],
        correctAnswer: "stick up for"
    },
    {
       id: 1884,
        question: "を修正する，改良する",
        choices: ["amend", "abolish", "repeal", "dismiss"],
        correctAnswer: "amend"
    },
    {
       id: 1885,
        question: "を満足させる",
        choices: ["gratify", "dissatisfy", "annoy", "frustrate"],
        correctAnswer: "gratify"
    },
    {
       id: 1886,
        question: "用具，器具",
        choices: ["utensil", "device", "appliance", "tool"],
        correctAnswer: "utensil"
    },
    {
       id: 1887,
        question: "大佐",
        choices: ["colonel", "general", "lieutenant", "sergeant"],
        correctAnswer: "colonel"
    },
    {
       id: 1888,
        question: "沼地，湿地",
        choices: ["marsh", "swamp", "bog", "pond"],
        correctAnswer: "marsh"
    },
    {
       id: 1889,
        question: "家具付きの",
        choices: ["furnished", "unfurnished", "decorated", "renovated"],
        correctAnswer: "furnished"
    },
    {
       id: 1890,
        question: "悪意，敵意",
        choices: ["malice", "kindness", "benevolence", "goodwill"],
        correctAnswer: "malice"
    },
    {
       id: 1891,
        question: "ふ化する",
        choices: ["hatch", "lay", "incubate", "nest"],
        correctAnswer: "hatch"
    },
    {
       id: 1892,
        question: "半島",
        choices: ["peninsula", "island", "continent", "cape"],
        correctAnswer: "peninsula"
    },
    {
       id: 1893,
        question: "仮説，推論",
        choices: ["hypothesis", "theory", "assumption", "conclusion"],
        correctAnswer: "hypothesis"
    },
    {
       id: 1894,
        question: "乏しい，不十分な",
        choices: ["scanty", "abundant", "plentiful", "sufficient"],
        correctAnswer: "scanty"
    },
    {
       id: 1895,
        question: "を寄付する，寄贈する",
        choices: ["donate", "lend", "invest", "sell"],
        correctAnswer: "donate"
    },
    {
       id: 1896,
        question: "棺桶",
        choices: ["coffin", "grave", "tomb", "urn"],
        correctAnswer: "coffin"
    },
    {
       id: 1897,
        question: "外に出す，解放する",
        choices: ["let out", "bring in", "hold back", "take away"],
        correctAnswer: "let out"
    },
    {
       id: 1898,
        question: "加わる，乗り込む",
        choices: ["get in on", "opt out", "back out", "stay away from"],
        correctAnswer: "get in on"
    },
    {
       id: 1899,
        question: "地質学，岩石の科学",
        choices: ["geology", "geography", "meteorology", "astronomy"],
        correctAnswer: "geology"
    },
    {
       id: 1900,
        question: "自慢の，高慢な",
        choices: ["boastful", "humble", "modest", "shy"],
        correctAnswer: "boastful"
    },
    {
       id: 1901,
        question: "順序通りに，整った",
        choices: ["in order", "out of order", "chaotic", "randomly"],
        correctAnswer: "in order"
    },
    {
       id: 1902,
        question: "を信じる，信用する",
        choices: ["believe in", "doubt", "ignore", "suspect"],
        correctAnswer: "believe in"
    },
    {
       id: 1903,
        question: "あざ笑う，嘲笑する",
        choices: ["ridicule", "praise", "respect", "admire"],
        correctAnswer: "ridicule"
    },
    {
       id: 1904,
        question: "先祖，祖先",
        choices: ["forefather", "descendant", "offspring", "heir"],
        correctAnswer: "forefather"
    },
    {
       id: 1905,
        question: "に抵抗する，耐える，反抗する",
        choices: ["stand up to", "give in to", "submit to", "surrender to"],
        correctAnswer: "stand up to"
    },
    {
       id: 1906,
        question: "提出，降伏",
        choices: ["submission", "resistance", "denial", "refusal"],
        correctAnswer: "submission"
    },
    {
       id: 1907,
        question: "説教，説法",
        choices: ["sermon", "speech", "lecture", "homily"],
        correctAnswer: "sermon"
    },
    {
       id: 1908,
        question: "飲料，飲み物",
        choices: ["beverage", "dessert", "meal", "snack"],
        correctAnswer: "beverage"
    },
    {
       id: 1909,
        question: "小石，石ころ",
        choices: ["pebble", "rock", "boulder", "gravel"],
        correctAnswer: "pebble"
    },
    {
       id: 1910,
        question: "処方する，指示する",
        choices: ["prescribe", "diagnose", "administer", "recommend"],
        correctAnswer: "prescribe"
    },
    {
       id: 1911,
        question: "失踪，消滅",
        choices: ["disappearance", "appearance", "emergence", "existence"],
        correctAnswer: "disappearance"
    },
    {
       id: 1912,
        question: "核心",
        choices: ["kernel", "shell", "surface", "exterior"],
        correctAnswer: "kernel"
    },
    {
       id: 1913,
        question: "叱責/をしかる",
        choices: ["reproach", "praise", "commend", "applaud"],
        correctAnswer: "reproach"
    },
    {
       id: 1914,
        question: "を任せる，委ねる",
        choices: ["give over", "take back", "hold on to", "keep"],
        correctAnswer: "give over"
    },
    {
       id: 1915,
        question: "活発な，元気の良い",
        choices: ["brisk", "lethargic", "slow", "sluggish"],
        correctAnswer: "brisk"
    },
    {
       id: 1916,
        question: "言いつける，密告する",
        choices: ["tell on", "cover for", "protect", "ignore"],
        correctAnswer: "tell on"
    },
    {
       id: 1917,
        question: "注意する，気を付ける",
        choices: ["heed", "ignore", "disregard", "overlook"],
        correctAnswer: "heed"
    },
    {
       id: 1918,
        question: "排出，放射",
        choices: ["emission", "absorption", "intake", "reception"],
        correctAnswer: "emission"
    },
    {
       id: 1919,
        question: "やせこけた",
        choices: ["skinny", "plump", "chubby", "fat"],
        correctAnswer: "skinny"
    },
    {
       id: 1920,
        question: "調停者，仲裁者",
        choices: ["mediator", "opponent", "competitor", "rival"],
        correctAnswer: "mediator"
    },
    {
       id: 1921,
        question: "たぶん，おそらく",
        choices: ["presumably", "certainly", "definitely", "unlikely"],
        correctAnswer: "presumably"
    },
    {
       id: 1922,
        question: "寝込む，寝たきりになる，病床にある",
        choices: ["be laid up", "lie down", "take off", "fall apart"],
        correctAnswer: "be laid up"
    },
    {
       id: 1923,
        question: "検体，見本",
        choices: ["specimen", "sample", "example", "model"],
        correctAnswer: "specimen"
    },
    {
       id: 1924,
        question: "停止",
        choices: ["suspension", "continuation", "progress", "movement"],
        correctAnswer: "suspension"
    },
    {
       id: 1925,
        question: "診断，判断",
        choices: ["diagnosis", "analysis", "opinion", "treatment"],
        correctAnswer: "diagnosis"
    },
    {
       id: 1926,
        question: "流行する，受け入れられる",
        choices: ["catch on", "fall behind", "go unnoticed", "disappear"],
        correctAnswer: "catch on"
    },
    {
       id: 1927,
        question: "危険",
        choices: ["hazard", "safety", "protection", "security"],
        correctAnswer: "hazard"
    },
    {
       id: 1928,
        question: "くま手",
        choices: ["rake", "shovel", "broom", "hoe"],
        correctAnswer: "rake"
    },
    {
       id: 1929,
        question: "大きな枝",
        choices: ["bough", "twig", "leaf", "stem"],
        correctAnswer: "bough"
    },
    {
       id: 1930,
        question: "精を出す，全力を尽くす",
        choices: ["buckle down", "give up", "take it easy", "slack off"],
        correctAnswer: "buckle down"
    },
    {
       id: 1931,
        question: "除外",
        choices: ["exclusion", "inclusion", "addition", "expansion"],
        correctAnswer: "exclusion"
    },
    {
       id: 1932,
        question: "AをBから遠ざける",
        choices: ["keep A away from B", "bring A close to B", "let A join B", "push A towards B"],
        correctAnswer: "keep A away from B"
    },
    {
       id: 1933,
        question: "当たり前の事だが，もちろんのことだが，当然のことながら",
        choices: ["not surprisingly", "unexpectedly", "accidentally", "coincidentally"],
        correctAnswer: "not surprisingly"
    },
    {
       id: 1934,
        question: "減らす，減少させる",
        choices: ["lessen", "increase", "expand", "intensify"],
        correctAnswer: "lessen"
    },
    {
       id: 1935,
        question: "信心深い",
        choices: ["pious", "atheistic", "skeptical", "doubtful"],
        correctAnswer: "pious"
    },
    {
       id: 1936,
        question: "を長くする",
        choices: ["lengthen", "shorten", "reduce", "cut"],
        correctAnswer: "lengthen"
    },
    {
       id: 1937,
        question: "を軽く扱う，手軽に扱う，を見くびる",
        choices: ["play down", "exaggerate", "highlight", "emphasize"],
        correctAnswer: "play down"
    },
    {
       id: 1938,
        question: "を断言する，明言する",
        choices: ["affirm", "deny", "question", "doubt"],
        correctAnswer: "affirm"
    },
    {
       id: 1939,
        question: "女性らしい",
        choices: ["feminine", "masculine", "neutral", "unisex"],
        correctAnswer: "feminine"
    },
    {
       id: 1940,
        question: "囲炉裏",
        choices: ["hearth", "fireplace", "stove", "furnace"],
        correctAnswer: "hearth"
    },
    {
       id: 1941,
        question: "消費，経費",
        choices: ["expenditure", "income", "profit", "savings"],
        correctAnswer: "expenditure"
    },
    {
       id: 1942,
        question: "魅惑",
        choices: ["fascination", "boredom", "disgust", "indifference"],
        correctAnswer: "fascination"
    },
    {
       id: 1943,
        question: "同盟を結んでいる，連携している",
        choices: ["allied", "opposed", "neutral", "hostile"],
        correctAnswer: "allied"
    },
    {
       id: 1944,
        question: "独身男性，未婚男性",
        choices: ["bachelor", "husband", "widower", "divorcee"],
        correctAnswer: "bachelor"
    },
    {
       id: 1945,
        question: "肩掛け",
        choices: ["shawl", "scarf", "coat", "cape"],
        correctAnswer: "shawl"
    },
    {
       id: 1946,
        question: "BとしてAに取って代わる，BとしてAの位置を占める",
        choices: ["replace A as B", "succeed A as B", "follow A as B", "remove A as B"],
        correctAnswer: "replace A as B"
    },
    {
       id: 1947,
        question: "対決，対戦",
        choices: ["confrontation", "agreement", "compromise", "reconciliation"],
        correctAnswer: "confrontation"
    },
    {
       id: 1948,
        question: "不平，不満",
        choices: ["grumble", "praise", "compliment", "cheer"],
        correctAnswer: "grumble"
    },
    {
       id: 1949,
        question: "相互作用",
        choices: ["interaction", "separation", "isolation", "detachment"],
        correctAnswer: "interaction"
    },
    {
       id: 1950,
        question: "愛情深い，優しい",
        choices: ["affectionate", "cold", "distant", "indifferent"],
        correctAnswer: "affectionate"
    },
    {
       id: 1951,
        question: "気質",
        choices: ["temperament", "attitude", "behavior", "mood"],
        correctAnswer: "temperament"
    },
    {
       id: 1952,
        question: "汚染する",
        choices: ["pollute", "cleanse", "purify", "sanitize"],
        correctAnswer: "pollute"
    },
    {
       id: 1953,
        question: "かさばった，嵩高な",
        choices: ["bulky", "slim", "compact", "lightweight"],
        correctAnswer: "bulky"
    },
    {
       id: 1954,
        question: "斬新さ，珍しさ",
        choices: ["novelty", "tradition", "habit", "routine"],
        correctAnswer: "novelty"
    },
    {
       id: 1955,
        question: "ごみ，がらくた",
        choices: ["litter", "treasure", "valuable", "gem"],
        correctAnswer: "litter"
    },
    {
       id: 1956,
        question: "の向かいに，対面に，の向かい側",
        choices: ["across from", "next to", "behind", "between"],
        correctAnswer: "across from"
    },
    {
       id: 1957,
        question: "醸造する",
        choices: ["brew", "ferment", "distill", "boil"],
        correctAnswer: "brew"
    },
    {
       id: 1958,
        question: "支える",
        choices: ["brace", "weaken", "destroy", "collapse"],
        correctAnswer: "brace"
    },
    {
       id: 1959,
        question: "速度",
        choices: ["velocity", "distance", "acceleration", "mass"],
        correctAnswer: "velocity"
    },
    {
       id: 1960,
        question: "をけん引する，引く",
        choices: ["tow", "push", "drag", "carry"],
        correctAnswer: "tow"
    },
    {
       id: 1961,
        question: "航空宇宙",
        choices: ["aerospace", "aviation", "astronomy", "engineering"],
        correctAnswer: "aerospace"
    },
    {
       id: 1962,
        question: "苦悩，苦悶",
        choices: ["anguish", "happiness", "joy", "relief"],
        correctAnswer: "anguish"
    },
    {
       id: 1963,
        question: "哲学的な，思索的な",
        choices: ["philosophical", "practical", "technical", "mechanical"],
        correctAnswer: "philosophical"
    },
    {
       id: 1964,
        question: "脱いだままでいる，着ずにいる",
        choices: ["leave off", "put on", "wear out", "take off"],
        correctAnswer: "leave off"
    },
    {
       id: 1965,
        question: "追い払う",
        choices: ["repel", "attract", "invite", "welcome"],
        correctAnswer: "repel"
    },
    {
       id: 1966,
        question: "準拠する",
        choices: ["comply", "disobey", "ignore", "oppose"],
        correctAnswer: "comply"
    },
    {
       id: 1967,
        question: "生息地",
        choices: ["habitat", "house", "environment", "territory"],
        correctAnswer: "habitat"
    },
    {
       id: 1968,
        question: "刑務所，留置所",
        choices: ["lock up", "free zone", "safe house", "residence"],
        correctAnswer: "lock up"
    },
    {
       id: 1969,
        question: "賄賂の授受，贈収賄",
        choices: ["bribery", "honesty", "integrity", "truthfulness"],
        correctAnswer: "bribery"
    },
    {
       id: 1970,
        question: "を引き起こす",
        choices: ["set off", "stop", "delay", "prevent"],
        correctAnswer: "set off"
    },
    {
       id: 1971,
        question: "噴火，爆発",
        choices: ["eruption", "calm", "stability", "peace"],
        correctAnswer: "eruption"
    },
    {
       id: 1972,
        question: "移住",
        choices: ["emigration", "immigration", "colonization", "settlement"],
        correctAnswer: "emigration"
    },
    {
       id: 1973,
        question: "刺繍する",
        choices: ["embroider", "paint", "carve", "knit"],
        correctAnswer: "embroider"
    },
    {
       id: 1974,
        question: "当惑させる",
        choices: ["bewilder", "clarify", "explain", "reassure"],
        correctAnswer: "bewilder"
    },
    {
       id: 1975,
        question: "脊椎，背骨",
        choices: ["spine", "rib", "skull", "pelvis"],
        correctAnswer: "spine"
    },
    {
       id: 1976,
        question: "訴訟",
        choices: ["lawsuit", "agreement", "settlement", "mediation"],
        correctAnswer: "lawsuit"
    },
    {
       id: 1977,
        question: "宣教師，使節",
        choices: ["missionary", "politician", "philosopher", "scientist"],
        correctAnswer: "missionary"
    },
    {
       id: 1978,
        question: "批評，評論",
        choices: ["critique", "praise", "flattery", "commendation"],
        correctAnswer: "critique"
    },
    {
       id: 1979,
        question: "下位の",
        choices: ["subordinate", "superior", "equal", "dominant"],
        correctAnswer: "subordinate"
    },
    {
       id: 1980,
        question: "均整の取れた，比例の",
        choices: ["proportional", "unequal", "irregular", "random"],
        correctAnswer: "proportional"
    },
    {
       id: 1981,
        question: "もろい，壊れやすい",
        choices: ["fragile", "sturdy", "durable", "strong"],
        correctAnswer: "fragile"
    },
    {
       id: 1982,
        question: "正気",
        choices: ["sanity", "madness", "insanity", "craziness"],
        correctAnswer: "sanity"
    },
    {
       id: 1983,
        question: "全国の",
        choices: ["nationwide", "local", "regional", "domestic"],
        correctAnswer: "nationwide"
    },
    {
       id: 1984,
        question: "遺産",
        choices: ["legacy", "fortune", "property", "inheritance"],
        correctAnswer: "legacy"
    },
    {
       id: 1985,
        question: "を突き出す，押す",
        choices: ["shove", "pull", "drag", "lift"],
        correctAnswer: "shove"
    },
    {
       id: 1986,
        question: "調整可能な，順応できる",
        choices: ["adjustable", "fixed", "rigid", "immovable"],
        correctAnswer: "adjustable"
    },
    {
       id: 1987,
        question: "障害のある",
        choices: ["disabled", "healthy", "able-bodied", "fit"],
        correctAnswer: "disabled"
    },
    {
       id: 1988,
        question: "疑似餌",
        choices: ["lure", "bait", "trap", "hook"],
        correctAnswer: "lure"
    },
    {
       id: 1989,
        question: "広がり",
        choices: ["expanse", "compression", "contraction", "narrowness"],
        correctAnswer: "expanse"
    },
    {
       id: 1990,
        question: "を密輸する",
        choices: ["smuggle", "import", "export", "transport"],
        correctAnswer: "smuggle"
    },
    {
       id: 1991,
        question: "を支持する，裏書きする",
        choices: ["endorse", "oppose", "reject", "disapprove"],
        correctAnswer: "endorse"
    },
    {
       id: 1992,
        question: "に必要事項を記入する",
        choices: ["fill out", "leave blank", "erase", "omit"],
        correctAnswer: "fill out"
    },
    {
       id: 1993,
        question: "初心者，新米",
        choices: ["novice", "expert", "master", "veteran"],
        correctAnswer: "novice"
    },
    {
       id: 1994,
        question: "剥奪，取り上げ",
        choices: ["deprivation", "acquisition", "gain", "possession"],
        correctAnswer: "deprivation"
    },
    {
       id: 1995,
        question: "無作為に，手あたり次第に",
        choices: ["at random", "systematically", "logically", "deliberately"],
        correctAnswer: "at random"
    },
    {
       id: 1996,
        question: "違反",
        choices: ["breach", "compliance", "obedience", "adherence"],
        correctAnswer: "breach"
    },
    {
       id: 1997,
        question: "説得力のある，有力な",
        choices: ["compelling", "weak", "unconvincing", "feeble"],
        correctAnswer: "compelling"
    },
    {
       id: 1998,
        question: "目立った，顕著な",
        choices: ["conspicuous", "hidden", "invisible", "obscure"],
        correctAnswer: "conspicuous"
    },
    {
       id: 1999,
        question: "男爵",
        choices: ["baron", "duke", "earl", "prince"],
        correctAnswer: "baron"
    },
    {
       id: 2000,
        question: "急ぎ足，駆け足",
        choices: ["trot", "walk", "stroll", "march"],
        correctAnswer: "trot"
    },
    {
       id: 2001,
        question: "たぶん，おそらく",
        choices: ["supposedly", "definitely", "certainly", "undoubtedly"],
        correctAnswer: "supposedly"
    },
    {
       id: 2002,
        question: "義理の母，義母",
        choices: ["mother-in-law", "stepmother", "grandmother", "aunt"],
        correctAnswer: "mother-in-law"
    },
    {
       id: 2003,
        question: "もろい，か弱い",
        choices: ["frail", "strong", "tough", "sturdy"],
        correctAnswer: "frail"
    },
    {
       id: 2004,
        question: "差し控える",
        choices: ["withhold", "give", "offer", "provide"],
        correctAnswer: "withhold"
    },
    {
       id: 2005,
        question: "にしがみつく，執着する",
        choices: ["hang on to", "let go of", "release", "drop"],
        correctAnswer: "hang on to"
    },
    {
       id: 2006,
        question: "断定的な，肯定的な",
        choices: ["affirmative", "negative", "doubtful", "uncertain"],
        correctAnswer: "affirmative"
    },
    {
       id: 2007,
        question: "配偶者",
        choices: ["spouse", "sibling", "friend", "colleague"],
        correctAnswer: "spouse"
    },
    {
       id: 2008,
        question: "押し通す，芽が出る",
        choices: ["push through", "give up", "abandon", "withdraw"],
        correctAnswer: "push through"
    },
    {
       id: 2009,
        question: "を固める，統合する",
        choices: ["consolidate", "separate", "divide", "weaken"],
        correctAnswer: "consolidate"
    },
    {
       id: 2010,
        question: "屋根裏",
        choices: ["attic", "basement", "garage", "cellar"],
        correctAnswer: "attic"
    },
    {
       id: 2011,
        question: "要点，蝶番",
        choices: ["hinge", "pivot", "axis", "cornerstone"],
        correctAnswer: "hinge"
    },
    {
       id: 2012,
        question: "割り当て，分け前",
        choices: ["quota", "portion", "allotment", "division"],
        correctAnswer: "quota"
    },
    {
       id: 2013,
        question: "支配下に入る，分類される",
        choices: ["fall under", "succumb to", "submit to", "give in to"],
        correctAnswer: "fall under"
    },
    {
       id: 2014,
        question: "信条",
        choices: ["creed", "belief", "doctrine", "principle"],
        correctAnswer: "creed"
    },
    {
       id: 2015,
        question: "寄付する，寄付を送る",
        choices: ["endow", "donate", "contribute", "bequeath"],
        correctAnswer: "endow"
    },
    {
       id: 2016,
        question: "どもる，口ごもる",
        choices: ["stammer", "stutter", "hesitate", "mumble"],
        correctAnswer: "stammer"
    },
    {
       id: 2017,
        question: "不適切な，見当違いの",
        choices: ["irrelevant", "inappropriate", "unrelated", "off-topic"],
        correctAnswer: "irrelevant"
    },
    {
       id: 2018,
        question: "お使いに出す，出前を頼む",
        choices: ["send out for", "order in", "call for", "request"],
        correctAnswer: "send out for"
    },
    {
       id: 2019,
        question: "放射線，放射",
        choices: ["radiation", "emission", "ray", "nuclear"],
        correctAnswer: "radiation"
    },
    {
       id: 2020,
        question: "質問表",
        choices: ["questionnaire", "survey", "poll", "inquiry"],
        correctAnswer: "questionnaire"
    },
    {
       id: 2021,
        question: "現実主義",
        choices: ["realism", "pragmatism", "materialism", "literalism"],
        correctAnswer: "realism"
    },
    {
       id: 2022,
        question: "吹きさらしの，荒涼とした",
        choices: ["bleak", "desolate", "barren", "dreary"],
        correctAnswer: "bleak"
    },
    {
       id: 2023,
        question: "反対の，逆の",
        choices: ["adverse", "contrary", "opposing", "inverse"],
        correctAnswer: "adverse"
    },
    {
       id: 2024,
        question: "を探して，探索して",
        choices: ["in search of", "seeking", "looking for", "pursuing"],
        correctAnswer: "in search of"
    },
    {
       id: 2025,
        question: "月の",
        choices: ["lunar", "celestial", "astronomical", "planetary"],
        correctAnswer: "lunar"
    },
    {
       id: 2026,
        question: "連立，提携",
        choices: ["coalition", "union", "alliance", "confederation"],
        correctAnswer: "coalition"
    },
    {
       id: 2027,
        question: "実を結ばない，結果を出さない",
        choices: ["barren", "infertile", "unproductive", "fruitless"],
        correctAnswer: "barren"
    },
    {
       id: 2028,
        question: "透明性",
        choices: ["transparency", "clarity", "openness", "visibility"],
        correctAnswer: "transparency"
    },
    {
       id: 2029,
        question: "の価値がある，価値が認められる",
        choices: ["count for", "account for", "be worth", "matter"],
        correctAnswer: "count for"
    },
    {
       id: 2030,
        question: "を苦しめる，悩ます",
        choices: ["afflict", "torment", "plague", "trouble"],
        correctAnswer: "afflict"
    },
    {
       id: 2031,
        question: "司教",
        choices: ["bishop", "priest", "cardinal", "clergyman"],
        correctAnswer: "bishop"
    },
    {
       id: 2032,
        question: "明快さ，明瞭",
        choices: ["clarity", "lucidity", "transparency", "precision"],
        correctAnswer: "clarity"
    },
    {
       id: 2033,
        question: "障害，無力",
        choices: ["disability", "incapacity", "impairment", "handicap"],
        correctAnswer: "disability"
    },
    {
       id: 2034,
        question: "嘆願，懇願",
        choices: ["plea", "appeal", "petition", "request"],
        correctAnswer: "plea"
    },
    {
       id: 2035,
        question: "瀬戸際，切羽詰まった状態",
        choices: ["brink", "edge", "verge", "threshold"],
        correctAnswer: "brink"
    },
    {
       id: 2036,
        question: "をまとめる，編集する",
        choices: ["compile", "edit", "collect", "assemble"],
        correctAnswer: "compile"
    },
    {
       id: 2037,
        question: "制限，監禁",
        choices: ["confinement", "restriction", "detention", "imprisonment"],
        correctAnswer: "confinement"
    },
    {
       id: 2038,
        question: "留め金",
        choices: ["clasp", "buckle", "clip", "fastener"],
        correctAnswer: "clasp"
    },
    {
       id: 2039,
        question: "保証内，保険の有効な",
        choices: ["under warranty", "covered", "insured", "protected"],
        correctAnswer: "under warranty"
    },
    {
       id: 2040,
        question: "正直に言うと，実を言うと",
        choices: ["to be honest", "frankly", "honestly", "truthfully"],
        correctAnswer: "to be honest"
    },
    {
       id: 2041,
        question: "起業家",
        choices: ["entrepreneur", "founder", "businessman", "investor"],
        correctAnswer: "entrepreneur"
    },
    {
       id: 2042,
        question: "売上ノルマ，販売割当",
        choices: ["sales quota", "sales target", "revenue goal", "profit margin"],
        correctAnswer: "sales quota"
    },
    {
       id: 2043,
        question: "百科事典",
        choices: ["encyclopedia", "dictionary", "manual", "handbook"],
        correctAnswer: "encyclopedia"
    },
    {
       id: 2044,
        question: "を探る，選りすぐる",
        choices: ["pick through", "sift through", "search for", "dig into"],
        correctAnswer: "pick through"
    },
    {
       id: 2045,
        question: "思いやり，同情",
        choices: ["compassion", "kindness", "empathy", "sympathy"],
        correctAnswer: "compassion"
    },
    {
       id: 2046,
        question: "受取人",
        choices: ["recipient", "receiver", "beneficiary", "accepter"],
        correctAnswer: "recipient"
    },
    {
       id: 2047,
        question: "熱望する，憧れる",
        choices: ["aspire", "desire", "yearn", "long for"],
        correctAnswer: "aspire"
    },
    {
       id: 2048,
        question: "を分ける，分割する，区別する",
        choices: ["split up", "divide", "separate", "distribute"],
        correctAnswer: "split up"
    },
    {
       id: 2049,
        question: "銀河",
        choices: ["galaxy", "universe", "nebula", "cosmos"],
        correctAnswer: "galaxy"
    },
    {
       id: 2050,
        question: "鼻を鳴らす",
        choices: ["snort", "sniff", "grunt", "huff"],
        correctAnswer: "snort"
    },
    {
       id: 2051,
        question: "を訪問する，要求する",
        choices: ["call on", "visit", "request", "approach"],
        correctAnswer: "call on"
    },
    {
       id: 2052,
        question: "真ん中に，の中に",
        choices: ["amid", "among", "within", "inside"],
        correctAnswer: "amid"
    },
    {
       id: 2053,
        question: "湿度，湿気",
        choices: ["humidity", "moisture", "dampness", "condensation"],
        correctAnswer: "humidity"
    },
    {
       id: 2054,
        question: "関連性",
        choices: ["relevance", "connection", "relation", "correlation"],
        correctAnswer: "relevance"
    },
    {
       id: 2055,
        question: "司法の，裁判の",
        choices: ["judicial", "legal", "legislative", "court-related"],
        correctAnswer: "judicial"
    },
    {
       id: 2056,
        question: "絶滅した，滅びた",
        choices: ["extinct", "vanished", "eradicated", "gone"],
        correctAnswer: "extinct"
    },
    {
       id: 2057,
        question: "食いしばる，固く握る",
        choices: ["clench", "grip", "squeeze", "hold tight"],
        correctAnswer: "clench"
    },
    {
       id: 2058,
        question: "統合する，一体化する",
        choices: ["integrate", "merge", "combine", "unify"],
        correctAnswer: "integrate"
    },
    {
       id: 2059,
        question: "同時発生",
        choices: ["coincidence", "simultaneity", "concurrence", "parallelism"],
        correctAnswer: "coincidence"
    },
    {
       id: 2060,
        question: "崩れる，台無しになる",
        choices: ["crash down", "fall apart", "collapse", "break down"],
        correctAnswer: "crash down"
    },
    {
       id: 2061,
        question: "を振る，揺り動かす",
        choices: ["wag", "shake", "sway", "swing"],
        correctAnswer: "wag"
    },
    {
       id: 2062,
        question: "陰謀を企てる",
        choices: ["conspire", "scheme", "plot", "collaborate"],
        correctAnswer: "conspire"
    },
    {
       id: 2063,
        question: "を完成させる，完遂させる",
        choices: ["finish off", "complete", "accomplish", "conclude"],
        correctAnswer: "finish off"
    },
    {
       id: 2064,
        question: "パン生地",
        choices: ["dough", "batter", "paste", "mixture"],
        correctAnswer: "dough"
    },
    {
       id: 2065,
        question: "会合",
        choices: ["congregation", "gathering", "assembly", "meeting"],
        correctAnswer: "congregation"
    },
    {
       id: 2066,
        question: "蓄積",
        choices: ["accumulation", "collection", "gathering", "stockpile"],
        correctAnswer: "accumulation"
    },
    {
       id: 2067,
        question: "風味",
        choices: ["relish", "flavor", "taste", "savor"],
        correctAnswer: "relish"
    },
    {
       id: 2068,
        question: "いじめっ子，弱い者いじめ",
        choices: ["bully", "tyrant", "tormentor", "oppressor"],
        correctAnswer: "bully"
    },
    {
       id: 2069,
        question: "移住",
        choices: ["migration", "emigration", "relocation", "resettlement"],
        correctAnswer: "migration"
    },
    {
       id: 2070,
        question: "寝そべる",
        choices: ["sprawl", "lounge", "recline", "stretch out"],
        correctAnswer: "sprawl"
    },
    {
       id: 2071,
        question: "圧縮する",
        choices: ["compress", "squeeze", "condense", "crush"],
        correctAnswer: "compress"
    },
    {
       id: 2072,
        question: "から生じる，脱皮する",
        choices: ["grow out of", "derive from", "evolve from", "spring from"],
        correctAnswer: "grow out of"
    },
    {
       id: 2073,
        question: "迷信的な",
        choices: ["superstitious", "irrational", "mythical", "illogical"],
        correctAnswer: "superstitious"
    },
    {
       id: 2074,
        question: "老化",
        choices: ["aging", "senility", "maturation", "deterioration"],
        correctAnswer: "aging"
    },
    {
       id: 2075,
        question: "理性のない",
        choices: ["irrational", "unreasonable", "illogical", "absurd"],
        correctAnswer: "irrational"
    },
    {
       id: 2076,
        question: "散歩する",
        choices: ["stroll", "wander", "saunter", "meander"],
        correctAnswer: "stroll"
    },
    {
       id: 2077,
        question: "彫刻家",
        choices: ["sculptor", "artist", "painter", "engraver"],
        correctAnswer: "sculptor"
    },
    {
       id: 2078,
        question: "会議の",
        choices: ["congressional", "legislative", "senatorial", "parliamentary"],
        correctAnswer: "congressional"
    },
    {
       id: 2079,
        question: "これまで，現在まで",
        choices: ["to date", "until now", "so far", "up to now"],
        correctAnswer: "to date"
    },
    {
       id: 2080,
        question: "とげのある",
        choices: ["prickly", "spiky", "thorny", "barbed"],
        correctAnswer: "prickly"
    },
    {
       id: 2081,
        question: "降格，格下げ",
        choices: ["degradation", "demotion", "downgrade", "reduction"],
        correctAnswer: "degradation"
    },
    {
       id: 2082,
        question: "本物の，信頼できる",
        choices: ["authentic", "genuine", "real", "legitimate"],
        correctAnswer: "authentic"
    },
    {
       id: 2083,
        question: "入学する",
        choices: ["enroll", "register", "admit", "enter"],
        correctAnswer: "enroll"
    },
    {
       id: 2084,
        question: "を移植する",
        choices: ["transplant", "graft", "implant", "transfer"],
        correctAnswer: "transplant"
    },
    {
       id: 2085,
        question: "すり",
        choices: ["pickpocket", "thief", "robber", "burglar"],
        correctAnswer: "pickpocket"
    },
    {
       id: 2086,
        question: "貢献者，寄付者",
        choices: ["contributor", "donor", "benefactor", "sponsor"],
        correctAnswer: "contributor"
    },
    {
       id: 2087,
        question: "臨終",
        choices: ["deathbed", "final moments", "last breath", "end stage"],
        correctAnswer: "deathbed"
    },
    {
       id: 2088,
        question: "植物学",
        choices: ["botany", "horticulture", "ecology", "biology"],
        correctAnswer: "botany"
    },
    {
       id: 2089,
        question: "をこすり洗う",
        choices: ["scrub", "scour", "wash", "cleanse"],
        correctAnswer: "scrub"
    },
    {
       id: 2090,
        question: "最初に，元々",
        choices: ["in the first place", "to begin with", "at first", "initially"],
        correctAnswer: "in the first place"
    },
    {
       id: 2091,
        question: "流行性の，伝染性の",
        choices: ["epidemic", "contagious", "infectious", "pandemic"],
        correctAnswer: "epidemic"
    },
    {
       id: 2092,
        question: "監査，会計検査",
        choices: ["audit", "inspection", "review", "examination"],
        correctAnswer: "audit"
    },
    {
       id: 2093,
        question: "均衡，つり合い",
        choices: ["equilibrium", "balance", "stability", "steadiness"],
        correctAnswer: "equilibrium"
    },
    {
       id: 2094,
        question: "を危険にさらす，危うくする",
        choices: ["endanger", "jeopardize", "threaten", "compromise"],
        correctAnswer: "endanger"
    },
    {
       id: 2095,
        question: "儀式",
        choices: ["rite", "ceremony", "ritual", "custom"],
        correctAnswer: "rite"
    },
    {
       id: 2096,
        question: "相棒，仲間",
        choices: ["buddy", "pal", "friend", "companion"],
        correctAnswer: "buddy"
    },
    {
       id: 2097,
        question: "血管，血の管",
        choices: ["blood vessel", "vein", "artery", "capillary"],
        correctAnswer: "blood vessel"
    },
    {
       id: 2098,
        question: "憧れる，慕う",
        choices: ["yearn", "long for", "crave", "desire"],
        correctAnswer: "yearn"
    },
    {
       id: 2099,
        question: "低下する，沈む",
        choices: ["subside", "decline", "sink", "diminish"],
        correctAnswer: "subside"
    },
    {
       id: 2100,
        question: "こっそり動く",
        choices: ["sneak", "creep", "tiptoe", "slip"],
        correctAnswer: "sneak"
    },
    {
       id: 2101,
        question: "親権，管理",
        choices: ["custody", "guardianship", "control", "supervision"],
        correctAnswer: "custody"
    },
    {
       id: 2102,
        question: "小売業者",
        choices: ["retailer", "merchant", "shopkeeper", "vendor"],
        correctAnswer: "retailer"
    },
    {
       id: 2103,
        question: "巡礼者",
        choices: ["pilgrim", "traveler", "nomad", "voyager"],
        correctAnswer: "pilgrim"
    },
    {
       id: 2104,
        question: "火山の",
        choices: ["volcanic", "igneous", "magma-related", "eruptive"],
        correctAnswer: "volcanic"
    },
    {
       id: 2105,
        question: "知らせる，通報する",
        choices: ["notify", "inform", "report", "alert"],
        correctAnswer: "notify"
    },
    {
       id: 2106,
        question: "を刈る",
        choices: ["mow", "trim", "cut", "prune"],
        correctAnswer: "mow"
    },
    {
       id: 2107,
        question: "騒動，混乱，騒ぎ",
        choices: ["turmoil", "chaos", "commotion", "disorder"],
        correctAnswer: "turmoil"
    },
    {
       id: 2108,
        question: "から取れる，外れる",
        choices: ["come off", "detach", "fall off", "separate"],
        correctAnswer: "come off"
    },
    {
       id: 2109,
        question: "贅沢な，無駄遣いの",
        choices: ["extravagant", "luxurious", "lavish", "opulent"],
        correctAnswer: "extravagant"
    },
    {
       id: 2110,
        question: "解剖学",
        choices: ["anatomy", "physiology", "biology", "morphology"],
        correctAnswer: "anatomy"
    },
    {
       id: 2111,
        question: "整列させる，並べる",
        choices: ["array", "align", "organize", "arrange"],
        correctAnswer: "array"
    },
    {
       id: 2112,
        question: "疾風，強風",
        choices: ["gale", "storm", "gust", "squall"],
        correctAnswer: "gale"
    },
    {
       id: 2113,
        question: "を嗅ぐ，におう",
        choices: ["sniff", "smell", "inhale", "breathe in"],
        correctAnswer: "sniff"
    },
    {
       id: 2114,
        question: "可能性，見込み",
        choices: ["likelihood", "probability", "chance", "possibility"],
        correctAnswer: "likelihood"
    },
    {
       id: 2115,
        question: "銀行口座",
        choices: ["bank account", "savings account", "checking account", "deposit account"],
        correctAnswer: "bank account"
    },
    {
       id: 2116,
        question: "原動力",
        choices: ["dynamics", "force", "energy", "momentum"],
        correctAnswer: "dynamics"
    },
    {
       id: 2117,
        question: "人物像",
        choices: ["portfolio", "profile", "biography", "character"],
        correctAnswer: "portfolio"
    },
    {
       id: 2118,
        question: "急いで飲み込む",
        choices: ["gulp", "swallow", "chug", "devour"],
        correctAnswer: "gulp"
    },
    {
       id: 2119,
        question: "冗長な，豊富な，余計な",
        choices: ["redundant", "excessive", "superfluous", "unnecessary"],
        correctAnswer: "redundant"
    },
    {
       id: 2120,
        question: "強化，増強",
        choices: ["reinforcement", "strengthening", "boost", "support"],
        correctAnswer: "reinforcement"
    },
    {
       id: 2121,
        question: "雄弁",
        choices: ["eloquence", "fluency", "rhetoric", "oratory"],
        correctAnswer: "eloquence"
    },
    {
       id: 2122,
        question: "一貫性，一致",
        choices: ["consistency", "coherence", "uniformity", "harmony"],
        correctAnswer: "consistency"
    },
    {
       id: 2123,
        question: "思春期の",
        choices: ["adolescent", "teenage", "youthful", "juvenile"],
        correctAnswer: "adolescent"
    },
    {
       id: 2124,
        question: "異国情緒の，外国の",
        choices: ["exotic", "foreign", "tropical", "unfamiliar"],
        correctAnswer: "exotic"
    },
    {
       id: 2125,
        question: "排出口，通風孔",
        choices: ["vent", "outlet", "duct", "grate"],
        correctAnswer: "vent"
    },
    {
       id: 2126,
        question: "犠牲者，被害者",
        choices: ["casualty", "victim", "fatality", "injured person"],
        correctAnswer: "casualty"
    },
    {
       id: 2127,
        question: "原告",
        choices: ["plaintiff", "prosecutor", "accuser", "complainant"],
        correctAnswer: "plaintiff"
    },
    {
       id: 2128,
        question: "株主",
        choices: ["shareholder", "investor", "stakeholder", "stockholder"],
        correctAnswer: "shareholder"
    },
    {
       id: 2129,
        question: "抑圧的な，横暴な",
        choices: ["oppressive", "tyrannical", "authoritarian", "repressive"],
        correctAnswer: "oppressive"
    },
    {
       id: 2130,
        question: "傷つきやすい",
        choices: ["vulnerable", "fragile", "weak", "susceptible"],
        correctAnswer: "vulnerable"
    },
    {
       id: 2131,
        question: "疑問，質問",
        choices: ["query", "inquiry", "question", "doubt"],
        correctAnswer: "query"
    },
    {
       id: 2132,
        question: "成功した，勝利した",
        choices: ["triumphant", "victorious", "successful", "glorious"],
        correctAnswer: "triumphant"
    },
    {
       id: 2133,
        question: "公民権，市民権",
        choices: ["civil rights", "citizenship", "legal rights", "human rights"],
        correctAnswer: "civil rights"
    },
    {
       id: 2134,
        question: "持ちこたえる，耐える",
        choices: ["hold up", "endure", "persist", "withstand"],
        correctAnswer: "hold up"
    },
    {
       id: 2135,
        question: "自治，自主性",
        choices: ["autonomy", "independence", "self-governance", "sovereignty"],
        correctAnswer: "autonomy"
    },
    {
       id: 2136,
        question: "統合された",
        choices: ["integrated", "unified", "combined", "merged"],
        correctAnswer: "integrated"
    },
    {
       id: 2137,
        question: "混成の，合成の",
        choices: ["composite", "blended", "hybrid", "combined"],
        correctAnswer: "composite"
    },
    {
       id: 2138,
        question: "住人，住民",
        choices: ["dweller", "inhabitant", "resident", "tenant"],
        correctAnswer: "dweller"
    },
    {
       id: 2139,
        question: "廃れる，死に絶えていく",
        choices: ["die out", "fade away", "go extinct", "vanish"],
        correctAnswer: "die out"
    },
    {
       id: 2140,
        question: "期限切れの，満了の",
        choices: ["expire", "terminate", "end", "run out"],
        correctAnswer: "expire"
    },
    {
       id: 2141,
        question: "明らかな，はっきりとした",
        choices: ["explicit", "clear", "obvious", "evident"],
        correctAnswer: "explicit"
    },
    {
       id: 2142,
        question: "いきなり，突然",
        choices: ["out of nowhere", "all of a sudden", "unexpectedly", "abruptly"],
        correctAnswer: "out of nowhere"
    },
    {
       id: 2143,
        question: "首尾一貫した",
        choices: ["coherent", "logical", "consistent", "rational"],
        correctAnswer: "coherent"
    },
    {
       id: 2144,
        question: "容疑のある",
        choices: ["alleged", "suspected", "accused", "claimed"],
        correctAnswer: "alleged"
    },
    {
       id: 2145,
        question: "貴族の",
        choices: ["aristocratic", "noble", "elite", "royal"],
        correctAnswer: "aristocratic"
    },
    {
       id: 2146,
        question: "倹約，節約",
        choices: ["thrift", "frugality", "saving", "economy"],
        correctAnswer: "thrift"
    },
    {
       id: 2147,
        question: "衝突する，ぶつかる",
        choices: ["collide", "crash", "bump into", "smash"],
        correctAnswer: "collide"
    },
    {
       id: 2148,
        question: "姿を現す",
        choices: ["show up", "appear", "arrive", "turn up"],
        correctAnswer: "show up"
    },
    {
       id: 2149,
        question: "有毒な，毒性の，毒のある",
        choices: ["toxic", "poisonous", "harmful", "lethal"],
        correctAnswer: "toxic"
    },
    {
       id: 2150,
        question: "を指摘する，選定する",
        choices: ["designate", "appoint", "assign", "nominate"],
        correctAnswer: "designate"
    },
    {
       id: 2151,
        question: "到着する，片側に寄る",
        choices: ["pull in", "arrive", "stop by", "dock"],
        correctAnswer: "pull in"
    },
    {
       id: 2152,
        question: "引っかける",
        choices: ["hitch", "hook", "attach", "fasten"],
        correctAnswer: "hitch"
    },
    {
       id: 2153,
        question: "にぶつかる，偶然出会う",
        choices: ["run against", "bump into", "collide with", "encounter"],
        correctAnswer: "run against"
    },
    {
       id: 2154,
        question: "戦略的な",
        choices: ["strategic", "tactical", "planned", "calculated"],
        correctAnswer: "strategic"
    },
    {
       id: 2155,
        question: "冷笑する，あざ笑う",
        choices: ["sneer", "smirk", "mock", "scorn"],
        correctAnswer: "sneer"
    },
    {
       id: 2156,
        question: "を起訴する，告訴する",
        choices: ["prosecute", "sue", "indict", "charge"],
        correctAnswer: "prosecute"
    },
    {
       id: 2157,
        question: "暴行，強襲",
        choices: ["assault", "attack", "battery", "strike"],
        correctAnswer: "assault"
    },
    {
       id: 2158,
        question: "板挟み，窮地",
        choices: ["dilemma", "predicament", "quandary", "trouble"],
        correctAnswer: "dilemma"
    },
    {
       id: 2159,
        question: "潜在意識の",
        choices: ["subconscious", "unconscious", "implicit", "instinctive"],
        correctAnswer: "subconscious"
    },
    {
       id: 2160,
        question: "公平，公正",
        choices: ["equity", "fairness", "justice", "impartiality"],
        correctAnswer: "equity"
    },
    {
       id: 2161,
        question: "比喩，たとえ話",
        choices: ["parable", "analogy", "metaphor", "fable"],
        correctAnswer: "parable"
    },
    {
       id: 2162,
        question: "法令",
        choices: ["statute", "law", "regulation", "ordinance"],
        correctAnswer: "statute"
    },
    {
       id: 2163,
        question: "実在，実体",
        choices: ["entity", "being", "existence", "substance"],
        correctAnswer: "entity"
    },
    {
       id: 2164,
        question: "加速する",
        choices: ["accelerate", "speed up", "boost", "hasten"],
        correctAnswer: "accelerate"
    },
    {
       id: 2165,
        question: "荒廃させる，荒らす",
        choices: ["devastate", "destroy", "ruin", "wreck"],
        correctAnswer: "devastate"
    },
    {
       id: 2166,
        question: "と連絡を取り続ける，絶えず連絡する",
        choices: ["stay in touch with", "keep in contact with", "stay connected to", "maintain communication with"],
        correctAnswer: "stay in touch with"
    },
    {
       id: 2167,
        question: "推測する",
        choices: ["speculate", "assume", "guess", "hypothesize"],
        correctAnswer: "speculate"
    },
    {
       id: 2168,
        question: "動揺",
        choices: ["agitation", "unrest", "disturbance", "anxiety"],
        correctAnswer: "agitation"
    },
    {
       id: 2169,
        question: "司法権，裁判権",
        choices: ["jurisdiction", "legal authority", "court power", "sovereignty"],
        correctAnswer: "jurisdiction"
    },
    {
       id: 2170,
        question: "申し立てによると，主張によると",
        choices: ["allegedly", "reportedly", "supposedly", "purportedly"],
        correctAnswer: "allegedly"
    },
    {
       id: 2171,
        question: "不動産，物件",
        choices: ["real estate", "property", "land", "housing"],
        correctAnswer: "real estate"
    },
    {
       id: 2172,
        question: "を水中に入れる，浸す",
        choices: ["submerge", "immerse", "sink", "drown"],
        correctAnswer: "submerge"
    },
    {
       id: 2173,
        question: "を作り替える，を改装する",
        choices: ["make over", "renovate", "redecorate", "remodel"],
        correctAnswer: "make over"
    },
    {
       id: 2174,
        question: "神格",
        choices: ["divinity", "godhood", "holiness", "sacredness"],
        correctAnswer: "divinity"
    },
    {
       id: 2175,
        question: "職人",
        choices: ["artisan", "craftsman", "worker", "blacksmith"],
        correctAnswer: "artisan"
    },
    {
       id: 2176,
        question: "親の",
        choices: ["parental", "maternal", "paternal", "guardian"],
        correctAnswer: "parental"
    },
    {
       id: 2177,
        question: "満足させる，足りる",
        choices: ["suffice", "satisfy", "fulfill", "meet"],
        correctAnswer: "suffice"
    },
    {
       id: 2178,
        question: "強盗，住宅侵入",
        choices: ["burglary", "robbery", "theft", "break-in"],
        correctAnswer: "burglary"
    },
    {
       id: 2179,
        question: "相互作用する，互いに影響を与える",
        choices: ["interact", "communicate", "collaborate", "engage"],
        correctAnswer: "interact"
    },
    {
       id: 2180,
        question: "AをBから防ぐ",
        choices: ["prevent A from B", "protect A against B", "stop A from B", "shield A from B"],
        correctAnswer: "prevent A from B"
    },
    {
       id: 2181,
        question: "点火，発火",
        choices: ["ignition", "combustion", "spark", "kindling"],
        correctAnswer: "ignition"
    },
    {
       id: 2182,
        question: "区切り，部分",
        choices: ["segment", "section", "part", "division"],
        correctAnswer: "segment"
    },
    {
       id: 2183,
        question: "境界",
        choices: ["borderline", "boundary", "limit", "edge"],
        correctAnswer: "borderline"
    },
    {
       id: 2184,
        question: "待ち伏せる",
        choices: ["lurk", "hide", "ambush", "sneak"],
        correctAnswer: "lurk"
    },
    {
       id: 2185,
        question: "最小化する，縮小化する",
        choices: ["minimize", "reduce", "diminish", "shrink"],
        correctAnswer: "minimize"
    },
    {
       id: 2186,
        question: "半球",
        choices: ["hemisphere", "half-globe", "dome", "arc"],
        correctAnswer: "hemisphere"
    },
    {
       id: 2187,
        question: "を投げ捨てる，放り出す，放棄する",
        choices: ["throw off", "discard", "abandon", "toss away"],
        correctAnswer: "throw off"
    },
    {
       id: 2188,
        question: "倉庫",
        choices: ["warehouse", "storage", "depot", "stockroom"],
        correctAnswer: "warehouse"
    },
    {
       id: 2189,
        question: "思いやりのある",
        choices: ["considerate", "thoughtful", "kind", "compassionate"],
        correctAnswer: "considerate"
    },
    {
       id: 2190,
        question: "を追放する，除名する",
        choices: ["expel", "banish", "dismiss", "exclude"],
        correctAnswer: "expel"
    },
    {
       id: 2191,
        question: "風車",
        choices: ["windmill", "turbine", "propeller", "fan"],
        correctAnswer: "windmill"
    },
    {
       id: 2192,
        question: "開業医，専門家",
        choices: ["practitioner", "doctor", "specialist", "consultant"],
        correctAnswer: "practitioner"
    },
    {
       id: 2193,
        question: "を描写する，描く",
        choices: ["depict", "describe", "illustrate", "portray"],
        correctAnswer: "depict"
    },
    {
       id: 2194,
        question: "美的な",
        choices: ["aesthetic", "artistic", "beautiful", "elegant"],
        correctAnswer: "aesthetic"
    },
    {
       id: 2195,
        question: "拘束，強制",
        choices: ["constraint", "restriction", "limitation", "obligation"],
        correctAnswer: "constraint"
    },
    {
       id: 2196,
        question: "を放射する，発する",
        choices: ["emit", "release", "radiate", "discharge"],
        correctAnswer: "emit"
    },
    {
       id: 2197,
        question: "渦巻く，旋回する",
        choices: ["swirl", "twirl", "spin", "rotate"],
        correctAnswer: "swirl"
    },
    {
       id: 2198,
        question: "を推し進める，前進させる",
        choices: ["propel", "drive", "accelerate", "thrust"],
        correctAnswer: "propel"
    },
    {
       id: 2199,
        question: "実質的に，本質的に",
        choices: ["substantially", "significantly", "considerably", "fundamentally"],
        correctAnswer: "substantially"
    },
    {
       id: 2200,
        question: "相関性",
        choices: ["correlation", "association", "connection", "relationship"],
        correctAnswer: "correlation"
    },
    {
       id: 2201,
        question: "威厳をつける",
        choices: ["dignify", "honor", "glorify", "respect"],
        correctAnswer: "dignify"
    },
    {
       id: 2202,
        question: "裏切った，反逆の",
        choices: ["treacherous", "traitorous", "deceptive", "disloyal"],
        correctAnswer: "treacherous"
    },
    {
       id: 2203,
        question: "派閥，党派",
        choices: ["faction", "group", "clique", "coalition"],
        correctAnswer: "faction"
    },
    {
       id: 2204,
        question: "を絡ませる，もつれさせる",
        choices: ["entangle", "twist", "snarl", "intertwine"],
        correctAnswer: "entangle"
    },
    {
       id: 2205,
        question: "光っている，輝く",
        choices: ["luminous", "radiant", "shining", "glowing"],
        correctAnswer: "luminous"
    },
    {
       id: 2206,
        question: "郊外の，郊外型の",
        choices: ["suburban", "rural", "urban", "metropolitan"],
        correctAnswer: "suburban"
    },
    {
       id: 2207,
        question: "夢中で話す",
        choices: ["rave", "babble", "rant", "exclaim"],
        correctAnswer: "rave"
    },
    {
       id: 2208,
        question: "いかだ",
        choices: ["raft", "boat", "canoe", "float"],
        correctAnswer: "raft"
    },
    {
       id: 2209,
        question: "を消す",
        choices: ["extinguish", "put out", "snuff out", "douse"],
        correctAnswer: "extinguish"
    },
    {
       id: 2210,
        question: "序章",
        choices: ["prologue", "introduction", "preface", "foreword"],
        correctAnswer: "prologue"
    },
    {
       id: 2211,
        question: "親交",
        choices: ["communion", "fellowship", "association", "companionship"],
        correctAnswer: "communion"
    },
    {
       id: 2212,
        question: "保釈，保釈金",
        choices: ["bail", "bond", "release", "parole"],
        correctAnswer: "bail"
    },
    {
       id: 2213,
        question: "を支払う，払い戻す",
        choices: ["settle up", "pay off", "reimburse", "refund"],
        correctAnswer: "settle up"
    },
    {
       id: 2214,
        question: "を摂取する，取り入れる",
        choices: ["take in", "consume", "absorb", "ingest"],
        correctAnswer: "take in"
    },
    {
       id: 2215,
        question: "ゴロゴロ鳴る",
        choices: ["rumble", "grumble", "roar", "thunder"],
        correctAnswer: "rumble"
    },
    {
       id: 2216,
        question: "青春期，思春期",
        choices: ["adolescence", "puberty", "youth", "teenage years"],
        correctAnswer: "adolescence"
    },
    {
       id: 2217,
        question: "吐く/嘔吐",
        choices: ["vomit", "puke", "throw up", "retch"],
        correctAnswer: "vomit"
    },
    {
       id: 2218,
        question: "執着する，とりつく",
        choices: ["obsess", "fixate", "preoccupy", "consume"],
        correctAnswer: "obsess"
    },
    {
       id: 2219,
        question: "結局～になる，結果として",
        choices: ["add up to", "result in", "lead to", "end up as"],
        correctAnswer: "add up to"
    },
    {
       id: 2220,
        question: "吹き出る",
        choices: ["gush", "spout", "stream", "burst out"],
        correctAnswer: "gush"
    },
    {
       id: 2221,
        question: "意味のある，有意義な",
        choices: ["meaningful", "significant", "important", "purposeful"],
        correctAnswer: "meaningful"
    },
    {
       id: 2222,
        question: "怠慢な",
        choices: ["negligent", "careless", "lazy", "irresponsible"],
        correctAnswer: "negligent"
    },
    {
       id: 2223,
        question: "を一つにする，統一する",
        choices: ["unify", "combine", "merge", "integrate"],
        correctAnswer: "unify"
    },
    {
       id: 2224,
        question: "AとBを関係づける",
        choices: ["associate A with B", "connect A to B", "link A with B", "relate A to B"],
        correctAnswer: "associate A with B"
    },
    {
       id: 2225,
        question: "投薬，薬剤",
        choices: ["medication", "prescription", "medicine", "treatment"],
        correctAnswer: "medication"
    },
    {
       id: 2226,
        question: "規格",
        choices: ["gauge", "standard", "measurement", "criteria"],
        correctAnswer: "gauge"
    },
    {
       id: 2227,
        question: "虐殺，大量殺戮",
        choices: ["slaughter", "massacre", "genocide", "extermination"],
        correctAnswer: "slaughter"
    },
    {
       id: 2228,
        question: "を横切る，横断する",
        choices: ["traverse", "cross", "go through", "pass"],
        correctAnswer: "traverse"
    },
    {
       id: 2229,
        question: "居酒屋",
        choices: ["tavern", "pub", "bar", "saloon"],
        correctAnswer: "tavern"
    },
    {
       id: 2230,
        question: "さびた",
        choices: ["rusty", "corroded", "oxidized", "decayed"],
        correctAnswer: "rusty"
    },
    {
       id: 2231,
        question: "AをBに依るものとする，AをBとみなす",
        choices: ["attribute A to B", "credit A to B", "assign A to B", "ascribe A to B"],
        correctAnswer: "attribute A to B"
    },
    {
       id: 2232,
        question: "苦しむ",
        choices: ["agonize", "suffer", "struggle", "endure"],
        correctAnswer: "agonize"
    },
    {
       id: 2233,
        question: "大統領職，首相職",
        choices: ["presidency", "leadership", "government", "chairmanship"],
        correctAnswer: "presidency"
    },
    {
       id: 2234,
        question: "二日酔い",
        choices: ["hangover", "intoxication", "withdrawal", "headache"],
        correctAnswer: "hangover"
    },
    {
       id: 2235,
        question: "薬局",
        choices: ["pharmacy", "drugstore", "chemist", "dispensary"],
        correctAnswer: "pharmacy"
    },
    {
       id: 2236,
        question: "Aの気をBからそらす",
        choices: ["distract A from B", "divert A from B", "shift A from B", "mislead A from B"],
        correctAnswer: "distract A from B"
    },
    {
       id: 2237,
        question: "窓口",
        choices: ["wicket", "counter", "booth", "window"],
        correctAnswer: "wicket"
    },
    {
       id: 2238,
        question: "有頂天，大喜び",
        choices: ["rapture", "ecstasy", "bliss", "euphoria"],
        correctAnswer: "rapture"
    },
    {
       id: 2239,
        question: "滑り止め，横滑り",
        choices: ["skid", "slip", "glide", "swerve"],
        correctAnswer: "skid"
    },
    {
       id: 2240,
        question: "を暗殺する",
        choices: ["assassinate", "murder", "kill", "eliminate"],
        correctAnswer: "assassinate"
    },
    {
       id: 2241,
        question: "を利用できる，を利用可能",
        choices: ["have access to", "be able to use", "make use of", "gain entry to"],
        correctAnswer: "have access to"
    },
    {
       id: 2242,
        question: "切望，渇望",
        choices: ["lust", "desire", "craving", "longing"],
        correctAnswer: "lust"
    },
    {
       id: 2243,
        question: "を追跡して，追いかけて",
        choices: ["in pursuit of", "chasing", "following", "tracking"],
        correctAnswer: "in pursuit of"
    },
    {
       id: 2244,
        question: "たくさんいる，多い",
        choices: ["abound", "overflow", "be plentiful", "teem"],
        correctAnswer: "abound"
    },
    {
       id: 2245,
        question: "売春婦",
        choices: ["prostitute", "escort", "call girl", "streetwalker"],
        correctAnswer: "prostitute"
    },
    {
       id: 2246,
        question: "開発中の，開発過程において",
        choices: ["in development", "under construction", "being developed", "in progress"],
        correctAnswer: "in development"
    },
    {
       id: 2247,
        question: "を汚染する，汚す",
        choices: ["contaminate", "pollute", "taint", "infect"],
        correctAnswer: "contaminate"
    },
    {
       id: 2248,
        question: "不安定な，ゆらぎやすい",
        choices: ["unstable", "insecure", "shaky", "unsteady"],
        correctAnswer: "unstable"
    },
    {
       id: 2249,
        question: "の最新状況を把握する，追いつく",
        choices: ["keep up on", "stay updated on", "keep track of", "stay informed about"],
        correctAnswer: "keep up on"
    },
    {
       id: 2250,
        question: "古風な，すたれた",
        choices: ["archaic", "antique", "obsolete", "outdated"],
        correctAnswer: "archaic"
    },
    {
       id: 2251,
        question: "耐久性のある，長持ちする",
        choices: ["durable", "sturdy", "long-lasting", "resilient"],
        correctAnswer: "durable"
    },
    {
       id: 2252,
        question: "言い返す",
        choices: ["retort", "reply", "counter", "rebut"],
        correctAnswer: "retort"
    },
    {
       id: 2253,
        question: "性別，性",
        choices: ["gender", "sex", "identity", "classification"],
        correctAnswer: "gender"
    },
    {
       id: 2254,
        question: "進行中の",
        choices: ["ongoing", "continuing", "in progress", "current"],
        correctAnswer: "ongoing"
    },
    {
       id: 2255,
        question: "やり損なう，うっかり誤る",
        choices: ["slip up", "make a mistake", "blunder", "mess up"],
        correctAnswer: "slip up"
    },
    {
       id: 2256,
        question: "皮肉な，嫌みの",
        choices: ["sarcastic", "ironic", "mocking", "cynical"],
        correctAnswer: "sarcastic"
    },
    {
       id: 2257,
        question: "自然災害，天災",
        choices: ["natural disaster", "calamity", "catastrophe", "environmental hazard"],
        correctAnswer: "natural disaster"
    },
    {
       id: 2258,
        question: "流行",
        choices: ["fad", "trend", "craze", "fashion"],
        correctAnswer: "fad"
    },
    {
       id: 2259,
        question: "類似",
        choices: ["analogy", "comparison", "parallel", "resemblance"],
        correctAnswer: "analogy"
    },
    {
       id: 2260,
        question: "盛り合わせの",
        choices: ["assorted", "mixed", "varied", "combined"],
        correctAnswer: "assorted"
    },
    {
       id: 2261,
        question: "に登録する，に記録する",
        choices: ["register for", "sign up for", "enroll in", "subscribe to"],
        correctAnswer: "register for"
    },
    {
       id: 2262,
        question: "高揚する",
        choices: ["exalt", "uplift", "elevate", "glorify"],
        correctAnswer: "exalt"
    },
    {
       id: 2263,
        question: "誠実さ，誠意",
        choices: ["integrity", "honesty", "sincerity", "truthfulness"],
        correctAnswer: "integrity"
    },
    {
       id: 2264,
        question: "欠点のある",
        choices: ["defective", "faulty", "flawed", "imperfect"],
        correctAnswer: "defective"
    },
    {
       id: 2265,
        question: "の支配下にある，によると",
        choices: ["subject to", "dependent on", "governed by", "controlled by"],
        correctAnswer: "subject to"
    },
    {
       id: 2266,
        question: "達成，到達",
        choices: ["attainment", "achievement", "completion", "realization"],
        correctAnswer: "attainment"
    },
    {
       id: 2267,
        question: "収支を合わせる，つじつまを合わせる",
        choices: ["make ends meet", "balance the budget", "stay afloat", "cover expenses"],
        correctAnswer: "make ends meet"
    },
    {
       id: 2268,
        question: "身震いする",
        choices: ["shudder", "tremble", "shake", "quiver"],
        correctAnswer: "shudder"
    },
    {
       id: 2269,
        question: "を感じる，同情する，を体感する",
        choices: ["feel for", "empathize with", "sympathize with", "relate to"],
        correctAnswer: "feel for"
    },
    {
       id: 2270,
        question: "きちんとした，整然とした",
        choices: ["clean cut", "neat", "tidy", "orderly"],
        correctAnswer: "clean cut"
    },
    {
       id: 2271,
        question: "けいれん",
        choices: ["cramp", "spasm", "twitch", "convulsion"],
        correctAnswer: "cramp"
    },
    {
       id: 2272,
        question: "半狂乱の，狂った",
        choices: ["frantic", "hysterical", "frenzied", "distraught"],
        correctAnswer: "frantic"
    },
    {
       id: 2273,
        question: "をくすぐる",
        choices: ["tickle", "touch", "scratch", "stimulate"],
        correctAnswer: "tickle"
    },
    {
       id: 2274,
        question: "主張，申し立て",
        choices: ["allegation", "claim", "assertion", "statement"],
        correctAnswer: "allegation"
    },
    {
       id: 2275,
        question: "優美さ，精巧さ",
        choices: ["delicacy", "elegance", "fineness", "sophistication"],
        correctAnswer: "delicacy"
    },
    {
       id: 2276,
        question: "電球，蛍光灯",
        choices: ["light bulb", "lamp", "fluorescent light", "LED"],
        correctAnswer: "light bulb"
    },
    {
       id: 2277,
        question: "気絶する，出ていく",
        choices: ["pass out", "faint", "collapse", "blackout"],
        correctAnswer: "pass out"
    },
    {
       id: 2278,
        question: "生態学の",
        choices: ["ecological", "environmental", "biological", "sustainable"],
        correctAnswer: "ecological"
    },
    {
       id: 2279,
        question: "粗末に扱う，酷使する",
        choices: ["kick around", "mistreat", "abuse", "exploit"],
        correctAnswer: "kick around"
    },
    {
       id: 2280,
        question: "をぐいと引く，強く引っ張る",
        choices: ["tug", "pull", "yank", "jerk"],
        correctAnswer: "tug"
    },
    {
       id: 2281,
        question: "皮肉な",
        choices: ["ironic", "sarcastic", "cynical", "mocking"],
        correctAnswer: "ironic"
    },
    {
       id: 2282,
        question: "歌詞/叙情的な",
        choices: ["lyric", "poetic", "melodic", "musical"],
        correctAnswer: "lyric"
    },
    {
       id: 2283,
        question: "口紅",
        choices: ["rouge", "lipstick", "blush", "makeup"],
        correctAnswer: "rouge"
    },
    {
       id: 2284,
        question: "置くこと，配置",
        choices: ["placement", "positioning", "arrangement", "setup"],
        correctAnswer: "placement"
    },
    {
       id: 2285,
        question: "を縛り上げる，束縛する",
        choices: ["tie up", "bind", "restrain", "fasten"],
        correctAnswer: "tie up"
    },
    {
       id: 2286,
        question: "波紋",
        choices: ["ripple", "wave", "undulation", "current"],
        correctAnswer: "ripple"
    },
    {
       id: 2287,
        question: "証言，申し立て",
        choices: ["testimony", "statement", "affidavit", "evidence"],
        correctAnswer: "testimony"
    },
    {
       id: 2288,
        question: "退く",
        choices: ["recede", "retreat", "withdraw", "move back"],
        correctAnswer: "recede"
    },
    {
       id: 2289,
        question: "を確かめる",
        choices: ["ascertain", "verify", "confirm", "determine"],
        correctAnswer: "ascertain"
    },
    {
       id: 2290,
        question: "取るに足らない",
        choices: ["negligible", "insignificant", "trivial", "minor"],
        correctAnswer: "negligible"
    },
    {
       id: 2291,
        question: "互換性のある，両立できる",
        choices: ["compatible", "harmonious", "consistent", "adaptable"],
        correctAnswer: "compatible"
    },
    {
       id: 2292,
        question: "先住民の，土着の",
        choices: ["aboriginal", "native", "indigenous", "primitive"],
        correctAnswer: "aboriginal"
    },
    {
       id: 2293,
        question: "を軽蔑する",
        choices: ["disdain", "scorn", "despise", "contempt"],
        correctAnswer: "disdain"
    },
    {
       id: 2294,
        question: "有限の，限りある",
        choices: ["finite", "limited", "restricted", "bounded"],
        correctAnswer: "finite"
    },
    {
       id: 2295,
        question: "密漁する",
        choices: ["poach", "smuggle", "illegally hunt", "steal"],
        correctAnswer: "poach"
    },
    {
       id: 2296,
        question: "言い換え",
        choices: ["paraphrase", "rewording", "rephrasing", "interpretation"],
        correctAnswer: "paraphrase"
    },
    {
       id: 2297,
        question: "大きく変える，再編する",
        choices: ["shake up", "restructure", "overhaul", "revamp"],
        correctAnswer: "shake up"
    },
    {
       id: 2298,
        question: "しみ，汚れ",
        choices: ["blur", "stain", "smudge", "blemish"],
        correctAnswer: "blur"
    },
    {
       id: 2299,
        question: "予言",
        choices: ["prophecy", "prediction", "forecast", "divination"],
        correctAnswer: "prophecy"
    },
    {
       id: 2300,
        question: "階層，階級",
        choices: ["hierarchy", "ranking", "order", "structure"],
        correctAnswer: "hierarchy"
    },
    {
       id: 2301,
        question: "小数",
        choices: ["decimal", "fraction", "percentage", "numeric"],
        correctAnswer: "decimal"
    },
    {
       id: 2302,
        question: "同等，等価",
        choices: ["par", "equality", "equivalence", "balance"],
        correctAnswer: "par"
    },
    {
       id: 2303,
        question: "ノートパソコン",
        choices: ["laptop", "notebook", "portable computer", "tablet"],
        correctAnswer: "laptop"
    },
    {
       id: 2304,
        question: "航空，飛行",
        choices: ["aviation", "aerospace", "flight", "air travel"],
        correctAnswer: "aviation"
    },
    {
       id: 2305,
        question: "監禁，囚禁",
        choices: ["captivity", "imprisonment", "confinement", "detention"],
        correctAnswer: "captivity"
    },
    {
       id: 2306,
        question: "殺菌した，不妊の",
        choices: ["sterile", "sanitized", "disinfected", "barren"],
        correctAnswer: "sterile"
    },
    {
       id: 2307,
        question: "突破口",
        choices: ["breakthrough", "discovery", "innovation", "advancement"],
        correctAnswer: "breakthrough"
    },
    {
       id: 2308,
        question: "写し，写本",
        choices: ["transcript", "copy", "record", "manuscript"],
        correctAnswer: "transcript"
    },
    {
       id: 2309,
        question: "防臭剤",
        choices: ["deodorant", "antiperspirant", "air freshener", "fragrance"],
        correctAnswer: "deodorant"
    },
    {
       id: 2310,
        question: "自暴自棄，絶望",
        choices: ["desperation", "hopelessness", "despair", "recklessness"],
        correctAnswer: "desperation"
    },
    {
       id: 2311,
        question: "かん高い，金切り声の",
        choices: ["shrill", "piercing", "high-pitched", "screeching"],
        correctAnswer: "shrill"
    },
    {
       id: 2312,
        question: "伝染性の",
        choices: ["contagious", "infectious", "transmissible", "epidemic"],
        correctAnswer: "contagious"
    },
    {
       id: 2313,
        question: "あいまいな，多義の",
        choices: ["ambiguous", "vague", "unclear", "equivocal"],
        correctAnswer: "ambiguous"
    },
    {
       id: 2314,
        question: "人質",
        choices: ["hostage", "captive", "prisoner", "abductee"],
        correctAnswer: "hostage"
    },
    {
       id: 2315,
        question: "を促進する，楽にする",
        choices: ["facilitate", "expedite", "promote", "ease"],
        correctAnswer: "facilitate"
    },
    {
       id: 2316,
        question: "主権者，君主",
        choices: ["sovereign", "monarch", "ruler", "king"],
        correctAnswer: "sovereign"
    },
    {
       id: 2317,
        question: "中毒性",
        choices: ["addiction", "dependence", "obsession", "compulsion"],
        correctAnswer: "addiction"
    },
    {
       id: 2318,
        question: "考慮すると，結局",
        choices: ["on balance", "all things considered", "ultimately", "in the end"],
        correctAnswer: "on balance"
    },
    {
       id: 2319,
        question: "従来，今まで",
        choices: ["hitherto", "until now", "so far", "previously"],
        correctAnswer: "hitherto"
    },
    {
       id: 2320,
        question: "を絞め殺す，窒息させる",
        choices: ["strangle", "suffocate", "choke", "throttle"],
        correctAnswer: "strangle"
    },
    {
       id: 2321,
        question: "迷路",
        choices: ["maze", "labyrinth", "puzzle", "network"],
        correctAnswer: "maze"
    },
    {
       id: 2322,
        question: "小刻みに揺れる，震える",
        choices: ["quiver", "tremble", "shiver", "shake"],
        correctAnswer: "quiver"
    },
    {
       id: 2323,
        question: "上司，長上",
        choices: ["supervisor", "manager", "boss", "chief"],
        correctAnswer: "supervisor"
    },
    {
       id: 2324,
        question: "を保存する，保護する",
        choices: ["conserve", "preserve", "protect", "safeguard"],
        correctAnswer: "conserve"
    },
    {
       id: 2325,
        question: "を養う，養育する",
        choices: ["nurture", "raise", "foster", "care for"],
        correctAnswer: "nurture"
    },
    {
       id: 2326,
        question: "を傾ける，を斜めにする",
        choices: ["tilt", "lean", "incline", "slant"],
        correctAnswer: "tilt"
    },
    {
       id: 2327,
        question: "強壮剤，健康促進剤",
        choices: ["tonic", "stimulant", "elixir", "remedy"],
        correctAnswer: "tonic"
    },
    {
       id: 2328,
        question: "統合，結合",
        choices: ["integration", "merger", "unification", "consolidation"],
        correctAnswer: "integration"
    },
    {
       id: 2329,
        question: "分離，溶解",
        choices: ["dissolution", "separation", "disintegration", "decomposition"],
        correctAnswer: "dissolution"
    },
    {
       id: 2330,
        question: "傲慢",
        choices: ["arrogance", "haughtiness", "pride", "conceit"],
        correctAnswer: "arrogance"
    },
    {
       id: 2331,
        question: "回転する",
        choices: ["rotate", "spin", "revolve", "turn"],
        correctAnswer: "rotate"
    },
    {
       id: 2332,
        question: "部族の",
        choices: ["tribal", "ethnic", "native", "aboriginal"],
        correctAnswer: "tribal"
    },
    {
       id: 2333,
        question: "発狂させる",
        choices: ["craze", "drive insane", "madden", "derange"],
        correctAnswer: "craze"
    },
    {
       id: 2334,
        question: "桟橋",
        choices: ["pier", "dock", "wharf", "jetty"],
        correctAnswer: "pier"
    },
    {
       id: 2335,
        question: "遺物，遺跡",
        choices: ["relic", "artifact", "antique", "remnant"],
        correctAnswer: "relic"
    },
    {
       id: 2336,
        question: "見下して話す，軽蔑して話す",
        choices: ["talk down to", "patronize", "belittle", "demean"],
        correctAnswer: "talk down to"
    },
    {
       id: 2337,
        question: "大気の，空気の",
        choices: ["aerial", "atmospheric", "airborne", "ethereal"],
        correctAnswer: "aerial"
    },
    {
       id: 2338,
        question: "少年の",
        choices: ["juvenile", "youthful", "adolescent", "childish"],
        correctAnswer: "juvenile"
    },
    {
       id: 2339,
        question: "AをBに入れない，AをBに含めない",
        choices: ["keep A out of B", "exclude A from B", "omit A from B", "leave A out of B"],
        correctAnswer: "keep A out of B"
    },
    {
       id: 2340,
        question: "断固たる",
        choices: ["resolute", "determined", "steadfast", "firm"],
        correctAnswer: "resolute"
    },
    {
       id: 2341,
        question: "栄養，滋養",
        choices: ["nourishment", "nutrition", "sustenance", "diet"],
        correctAnswer: "nourishment"
    },
    {
       id: 2342,
        question: "提供者，寄付者",
        choices: ["donor", "contributor", "sponsor", "patron"],
        correctAnswer: "donor"
    },
    {
       id: 2343,
        question: "大当たり",
        choices: ["coup", "success", "triumph", "breakthrough"],
        correctAnswer: "coup"
    },
    {
       id: 2344,
        question: "根底にある",
        choices: ["underlying", "fundamental", "basic", "primary"],
        correctAnswer: "underlying"
    },
    {
       id: 2345,
        question: "を焼き尽くす，を灼き尽くす",
        choices: ["burn out", "scorch", "incinerate", "ignite"],
        correctAnswer: "burn out"
    },
    {
       id: 2346,
        question: "に恥をかかせる",
        choices: ["humiliate", "embarrass", "shame", "disgrace"],
        correctAnswer: "humiliate"
    },
    {
       id: 2347,
        question: "希少さ，珍しさ",
        choices: ["rarity", "scarcity", "uniqueness", "infrequency"],
        correctAnswer: "rarity"
    },
    {
       id: 2348,
        question: "赤らんだ",
        choices: ["reddish", "rosy", "flushed", "pinkish"],
        correctAnswer: "reddish"
    },
    {
       id: 2349,
        question: "吟味して選ぶ，選び抜く",
        choices: ["pick over", "sift through", "sort out", "screen"],
        correctAnswer: "pick over"
    },
    {
       id: 2350,
        question: "合併する，合体する",
        choices: ["merge", "unite", "combine", "integrate"],
        correctAnswer: "merge"
    },
    {
       id: 2351,
        question: "鋭敏な，鋭い",
        choices: ["shrewd", "astute", "keen", "perceptive"],
        correctAnswer: "shrewd"
    },
    {
       id: 2352,
        question: "上塗りする",
        choices: ["glaze", "coat", "varnish", "polish"],
        correctAnswer: "glaze"
    },
    {
       id: 2353,
        question: "教区",
        choices: ["parish", "diocese", "congregation", "district"],
        correctAnswer: "parish"
    },
    {
       id: 2354,
        question: "それによって",
        choices: ["thereby", "thus", "hence", "consequently"],
        correctAnswer: "thereby"
    },
    {
       id: 2355,
        question: "前例のない",
        choices: ["unprecedented", "unparalleled", "novel", "extraordinary"],
        correctAnswer: "unprecedented"
    },
    {
       id: 2356,
        question: "有効性，効果性",
        choices: ["validity", "effectiveness", "efficacy", "authenticity"],
        correctAnswer: "validity"
    },
    {
       id: 2357,
        question: "規範，基準",
        choices: ["norm", "standard", "criterion", "benchmark"],
        correctAnswer: "norm"
    },
    {
       id: 2358,
        question: "行商人",
        choices: ["vendor", "peddler", "merchant", "hawker"],
        correctAnswer: "vendor"
    },
    {
       id: 2359,
        question: "を閉じ込める，隔離する",
        choices: ["close in", "trap", "confine", "enclose"],
        correctAnswer: "close in"
    },
    {
       id: 2360,
        question: "糖尿病，高血糖症",
        choices: ["diabetes", "hyperglycemia", "hypoglycemia", "pancreatitis"],
        correctAnswer: "diabetes"
    },
    {
       id: 2361,
        question: "運動量，運動エネルギー",
        choices: ["momentum", "velocity", "inertia", "acceleration"],
        correctAnswer: "momentum"
    },
    {
       id: 2362,
        question: "を選ぶ，選定する",
        choices: ["opt", "choose", "select", "pick"],
        correctAnswer: "opt"
    },
    {
       id: 2363,
        question: "厚切り，かたまり",
        choices: ["chunk", "lump", "block", "slab"],
        correctAnswer: "chunk"
    },
    {
       id: 2364,
        question: "世俗の，現世の",
        choices: ["secular", "worldly", "earthly", "temporal"],
        correctAnswer: "secular"
    },
    {
       id: 2365,
        question: "特に，とりわけ",
        choices: ["in particular", "especially", "notably", "specifically"],
        correctAnswer: "in particular"
    },
    {
       id: 2366,
        question: "を操る，うまく使う",
        choices: ["manipulate", "control", "handle", "maneuver"],
        correctAnswer: "manipulate"
    },
    {
       id: 2367,
        question: "認可，許可",
        choices: ["sanction", "authorization", "approval", "consent"],
        correctAnswer: "sanction"
    },
    {
       id: 2368,
        question: "点火する，起動する",
        choices: ["fire up", "ignite", "light up", "start up"],
        correctAnswer: "fire up"
    },
    {
       id: 2369,
        question: "を突つく",
        choices: ["poke", "prod", "jab", "nudge"],
        correctAnswer: "poke"
    },
    {
       id: 2370,
        question: "AをBに寄付する",
        choices: ["donate A to B", "contribute A to B", "give A to B", "offer A to B"],
        correctAnswer: "donate A to B"
    },
    {
       id: 2371,
        question: "免疫の，免疫性の",
        choices: ["immune", "resistant", "invulnerable", "impervious"],
        correctAnswer: "immune"
    },
    {
       id: 2372,
        question: "ワクチン",
        choices: ["vaccine", "serum", "antibody", "antigen"],
        correctAnswer: "vaccine"
    },
    {
       id: 2373,
        question: "在庫",
        choices: ["inventory", "stock", "supply", "catalog"],
        correctAnswer: "inventory"
    },
    {
       id: 2374,
        question: "怪奇な，異様な",
        choices: ["grotesque", "bizarre", "macabre", "eerie"],
        correctAnswer: "grotesque"
    },
    {
       id: 2375,
        question: "言説，講演",
        choices: ["discourse", "speech", "lecture", "oration"],
        correctAnswer: "discourse"
    },
    {
       id: 2376,
        question: "催促，注意喚起",
        choices: ["reminder", "alert", "notification", "prompt"],
        correctAnswer: "reminder"
    },
    {
       id: 2377,
        question: "意欲，意志",
        choices: ["willingness", "determination", "resolve", "motivation"],
        correctAnswer: "willingness"
    },
    {
       id: 2378,
        question: "評決",
        choices: ["verdict", "judgment", "decision", "ruling"],
        correctAnswer: "verdict"
    },
    {
       id: 2379,
        question: "栄養素，栄養分",
        choices: ["nutrient", "vitamin", "mineral", "protein"],
        correctAnswer: "nutrient"
    },
    {
       id: 2380,
        question: "症候群",
        choices: ["syndrome", "disorder", "illness", "condition"],
        correctAnswer: "syndrome"
    },
    {
       id: 2381,
        question: "分隊",
        choices: ["squad", "platoon", "unit", "team"],
        correctAnswer: "squad"
    },
    {
       id: 2382,
        question: "信頼性，信用",
        choices: ["credibility", "trustworthiness", "reliability", "integrity"],
        correctAnswer: "credibility"
    },
    {
       id: 2383,
        question: "立法府",
        choices: ["legislature", "parliament", "congress", "assembly"],
        correctAnswer: "legislature"
    },
    {
       id: 2384,
        question: "を読み上げる，すらすら読む",
        choices: ["read off", "recite", "dictate", "articulate"],
        correctAnswer: "read off"
    },
    {
       id: 2385,
        question: "協力，共同",
        choices: ["collaboration", "cooperation", "partnership", "teamwork"],
        correctAnswer: "collaboration"
    },
    {
       id: 2386,
        question: "被告，応答",
        choices: ["respondent", "defendant", "accused", "litigant"],
        correctAnswer: "respondent"
    },
    {
       id: 2387,
        question: "を渡す，手渡す",
        choices: ["hand off", "pass over", "transfer", "deliver"],
        correctAnswer: "hand off"
    },
    {
       id: 2388,
        question: "人種差別",
        choices: ["racism", "discrimination", "prejudice", "segregation"],
        correctAnswer: "racism"
    },
    {
       id: 2389,
        question: "基盤",
        choices: ["infrastructure", "foundation", "framework", "base"],
        correctAnswer: "infrastructure"
    },
    {
       id: 2390,
        question: "主権，統治権",
        choices: ["sovereignty", "autonomy", "authority", "dominion"],
        correctAnswer: "sovereignty"
    },
    {
       id: 2391,
        question: "行動上の，行動の",
        choices: ["behavioral", "conductual", "habitual", "manneristic"],
        correctAnswer: "behavioral"
    },
    {
       id: 2392,
        question: "兄弟姉妹",
        choices: ["sibling", "brother", "sister", "relative"],
        correctAnswer: "sibling"
    },
    {
       id: 2393,
        question: "同意語，類語",
        choices: ["synonym", "equivalent", "alternative", "substitute"],
        correctAnswer: "synonym"
    },
    {
       id: 2394,
        question: "靴ひも",
        choices: ["shoelace", "lace", "string", "strap"],
        correctAnswer: "shoelace"
    },
    {
       id: 2395,
        question: "を確認する，立証する",
        choices: ["verify", "validate", "confirm", "authenticate"],
        correctAnswer: "verify"
    },
    {
       id: 2396,
        question: "峡谷，谷間",
        choices: ["gorge", "canyon", "ravine", "valley"],
        correctAnswer: "gorge"
    },
    {
       id: 2397,
        question: "儀式，信仰",
        choices: ["cult", "ritual", "ceremony", "tradition"],
        correctAnswer: "cult"
    },
    {
       id: 2398,
        question: "素質，才能",
        choices: ["aptitude", "ability", "skill", "competence"],
        correctAnswer: "aptitude"
    },
    {
       id: 2399,
        question: "守銭奴，欲張り",
        choices: ["miser", "hoarder", "stingy person", "greedy"],
        correctAnswer: "miser"
    },
    {
       id: 2400,
        question: "傾斜路",
        choices: ["ramp", "slope", "incline", "gradient"],
        correctAnswer: "ramp"
    },
    {
       id: 2401,
        question: "鉱石",
        choices: ["ore", "mineral", "rock", "metal"],
        correctAnswer: "ore"
    },
    {
       id: 2402,
        question: "を略する，短縮する",
        choices: ["abbreviate", "shorten", "contract", "compress"],
        correctAnswer: "abbreviate"
    },
    {
       id: 2403,
        question: "工夫，創意工夫",
        choices: ["ingenuity", "creativity", "resourcefulness", "innovation"],
        correctAnswer: "ingenuity"
    },
    {
       id: 2404,
        question: "交換する，取り換える",
        choices: ["swap", "exchange", "trade", "barter"],
        correctAnswer: "swap"
    },
    {
       id: 2405,
        question: "はるか遠くに",
        choices: ["afar", "distantly", "remotely", "far away"],
        correctAnswer: "afar"
    },
    {
       id: 2406,
        question: "体を鍛える，うまく行く，解決する",
        choices: ["work out", "exercise", "solve", "manage"],
        correctAnswer: "work out"
    },
    {
       id: 2407,
        question: "類似している",
        choices: ["analogous", "similar", "comparable", "resembling"],
        correctAnswer: "analogous"
    },
    {
       id: 2408,
        question: "を割り当てる，充当する",
        choices: ["allot", "assign", "allocate", "distribute"],
        correctAnswer: "allot"
    },
    {
       id: 2409,
        question: "異議を唱える，反対する",
        choices: ["dissent", "oppose", "disagree", "object"],
        correctAnswer: "dissent"
    },
    {
       id: 2410,
        question: "分岐する，分かれる",
        choices: ["diverge", "separate", "split", "branch"],
        correctAnswer: "diverge"
    },
    {
       id: 2411,
        question: "嫌悪，いや気",
        choices: ["distaste", "disgust", "aversion", "repulsion"],
        correctAnswer: "distaste"
    },
    {
       id: 2412,
        question: "明白な，公然の",
        choices: ["overt", "explicit", "open", "clear"],
        correctAnswer: "overt"
    },
    {
       id: 2413,
        question: "試練，試金石",
        choices: ["ordeal", "trial", "test", "challenge"],
        correctAnswer: "ordeal"
    },
    {
       id: 2414,
        question: "三日月",
        choices: ["crescent", "half-moon", "lunar arc", "waxing moon"],
        correctAnswer: "crescent"
    },
    {
       id: 2415,
        question: "反対に，反対もまた",
        choices: ["vice versa", "conversely", "oppositely", "in reverse"],
        correctAnswer: "vice versa"
    },
    {
       id: 2416,
        question: "数で勝る",
        choices: ["outnumber", "exceed", "overwhelm", "surpass"],
        correctAnswer: "outnumber"
    },
    {
       id: 2417,
        question: "寄せ集める，切り上げる",
        choices: ["round up", "gather", "collect", "summarize"],
        correctAnswer: "round up"
    },
    {
       id: 2418,
        question: "協定，条約",
        choices: ["pact", "treaty", "agreement", "contract"],
        correctAnswer: "pact"
    },
    {
       id: 2419,
        question: "慰め，慰安",
        choices: ["consolation", "comfort", "solace", "relief"],
        correctAnswer: "consolation"
    },
    {
       id: 2420,
        question: "粛清する，浄化する",
        choices: ["purge", "cleanse", "eliminate", "exterminate"],
        correctAnswer: "purge"
    },
    {
       id: 2421,
        question: "ねじれ，ゆがみ",
        choices: ["distortion", "warping", "deformation", "twist"],
        correctAnswer: "distortion"
    },
    {
       id: 2422,
        question: "面接を受ける人",
        choices: ["interviewee", "candidate", "applicant", "job seeker"],
        correctAnswer: "interviewee"
    },
    {
       id: 2423,
        question: "無関心，無感動",
        choices: ["apathy", "indifference", "unconcern", "detachment"],
        correctAnswer: "apathy"
    },
    {
       id: 2424,
        question: "生きてるような，生き写しの",
        choices: ["lifelike", "realistic", "vivid", "authentic"],
        correctAnswer: "lifelike"
    },
    {
       id: 2425,
        question: "乗り継ぎ",
        choices: ["transit", "transfer", "layover", "stopover"],
        correctAnswer: "transit"
    },
    {
       id: 2426,
        question: "不誠実な，不実な",
        choices: ["faithless", "untrustworthy", "disloyal", "treacherous"],
        correctAnswer: "faithless"
    },
    {
       id: 2427,
        question: "激怒させる",
        choices: ["enrage", "infuriate", "provoke", "anger"],
        correctAnswer: "enrage"
    },
    {
       id: 2428,
        question: "居残る，うろうろする",
        choices: ["stick around", "linger", "stay", "remain"],
        correctAnswer: "stick around"
    },
    {
       id: 2429,
        question: "精を出す，努力する",
        choices: ["ply", "work hard", "strive", "endeavor"],
        correctAnswer: "ply"
    },
    {
       id: 2430,
        question: "にゆっくりと入る，スムーズに入る，滞りなく入る",
        choices: ["ease into", "slide into", "adapt to", "transition into"],
        correctAnswer: "ease into"
    },
    {
       id: 2431,
        question: "教義，信条",
        choices: ["dogma", "doctrine", "principle", "creed"],
        correctAnswer: "dogma"
    },
    {
       id: 2432,
        question: "占有者，居住者",
        choices: ["occupant", "resident", "tenant", "inhabitant"],
        correctAnswer: "occupant"
    },
    {
       id: 2433,
        question: "抜粋，引用句",
        choices: ["excerpt", "quotation", "extract", "passage"],
        correctAnswer: "excerpt"
    },
    {
       id: 2434,
        question: "誤った，間違えた",
        choices: ["erroneous", "incorrect", "false", "mistaken"],
        correctAnswer: "erroneous"
    },
    {
       id: 2435,
        question: "包囲",
        choices: ["siege", "blockade", "encirclement", "assault"],
        correctAnswer: "siege"
    },
    {
       id: 2436,
        question: "装飾品",
        choices: ["adornment", "decoration", "ornament", "embellishment"],
        correctAnswer: "adornment"
    },
    {
       id: 2437,
        question: "概念的な，抽象的な",
        choices: ["notional", "abstract", "conceptual", "theoretical"],
        correctAnswer: "notional"
    },
    {
       id: 2438,
        question: "好戦的な，攻撃的な",
        choices: ["militant", "aggressive", "belligerent", "hostile"],
        correctAnswer: "militant"
    },
    {
       id: 2439,
        question: "容器",
        choices: ["bin", "container", "basket", "box"],
        correctAnswer: "bin"
    },
    {
       id: 2440,
        question: "想像もつかない，信じられない",
        choices: ["inconceivable", "unbelievable", "unimaginable", "impossible"],
        correctAnswer: "inconceivable"
    },
    {
       id: 2441,
        question: "Aを実行する，Aを遂行する",
        choices: ["put A into place", "carry out A", "implement A", "execute A"],
        correctAnswer: "put A into place"
    },
    {
       id: 2442,
        question: "たき火",
        choices: ["bonfire", "campfire", "fire pit", "wood fire"],
        correctAnswer: "bonfire"
    },
    {
       id: 2443,
        question: "横に置く，取っておく",
        choices: ["set aside", "reserve", "put away", "save"],
        correctAnswer: "set aside"
    },
    {
       id: 2444,
        question: "巡査，公務員",
        choices: ["constable", "police officer", "guard", "sheriff"],
        correctAnswer: "constable"
    },
    {
       id: 2445,
        question: "墓石",
        choices: ["gravestone", "tombstone", "headstone", "marker"],
        correctAnswer: "gravestone"
    },
    {
       id: 2446,
        question: "に反抗する，対抗する",
        choices: ["rebel against", "oppose", "resist", "defy"],
        correctAnswer: "rebel against"
    },
    {
       id: 2447,
        question: "敵意，憎しみ",
        choices: ["enmity", "hostility", "hatred", "animosity"],
        correctAnswer: "enmity"
    },
    {
       id: 2448,
        question: "慢性的な",
        choices: ["chronic", "persistent", "long-term", "recurring"],
        correctAnswer: "chronic"
    },
    {
       id: 2449,
        question: "前腕部",
        choices: ["forearm", "upper arm", "elbow", "wrist"],
        correctAnswer: "forearm"
    },
    {
       id: 2450,
        question: "を尋問する",
        choices: ["interrogate", "question", "grill", "cross-examine"],
        correctAnswer: "interrogate"
    },
    {
       id: 2451,
        question: "を免除する",
        choices: ["exempt", "excuse", "free", "pardon"],
        correctAnswer: "exempt"
    },
    {
       id: 2452,
        question: "を独占する",
        choices: ["monopolize", "dominate", "control", "own"],
        correctAnswer: "monopolize"
    },
    {
       id: 2453,
        question: "を白状する，告白する",
        choices: ["confess to", "admit", "disclose", "reveal"],
        correctAnswer: "confess to"
    },
    {
       id: 2454,
        question: "吸収する，同化する，取り込む",
        choices: ["assimilate", "absorb", "integrate", "incorporate"],
        correctAnswer: "assimilate"
    },
    {
       id: 2455,
        question: "手伝う，助ける",
        choices: ["help out", "assist", "support", "aid"],
        correctAnswer: "help out"
    },
    {
       id: 2456,
        question: "流行",
        choices: ["vogue", "trend", "fashion", "style"],
        correctAnswer: "vogue"
    },
    {
       id: 2457,
        question: "をつねる，はさむ",
        choices: ["nip", "pinch", "squeeze", "tweak"],
        correctAnswer: "nip"
    },
    {
       id: 2458,
        question: "を調整する，整備する",
        choices: ["tune up", "adjust", "calibrate", "fine-tune"],
        correctAnswer: "tune up"
    },
    {
       id: 2459,
        question: "手を引く，引き下がる",
        choices: ["back down", "retreat", "withdraw", "give up"],
        correctAnswer: "back down"
    },
    {
       id: 2460,
        question: "浸透する",
        choices: ["pervade", "penetrate", "spread", "diffuse"],
        correctAnswer: "pervade"
    },
    {
       id: 2461,
        question: "厳格な",
        choices: ["rigorous", "strict", "stern", "harsh"],
        correctAnswer: "rigorous"
    },
    {
       id: 2462,
        question: "輸血",
        choices: ["transfusion", "blood donation", "infusion", "injection"],
        correctAnswer: "transfusion"
    },
    {
       id: 2463,
        question: "衛生",
        choices: ["hygiene", "cleanliness", "sanitation", "health"],
        correctAnswer: "hygiene"
    },
    {
       id: 2464,
        question: "くつろぐ，リラックスする",
        choices: ["hang out", "chill", "relax", "unwind"],
        correctAnswer: "hang out"
    },
    {
       id: 2465,
        question: "を複製する",
        choices: ["duplicate", "replicate", "copy", "reproduce"],
        correctAnswer: "duplicate"
    },
    {
       id: 2466,
        question: "を修正する",
        choices: ["rectify", "correct", "amend", "fix"],
        correctAnswer: "rectify"
    },
    {
       id: 2467,
        question: "夢中の，有頂天の",
        choices: ["ecstatic", "elated", "overjoyed", "thrilled"],
        correctAnswer: "ecstatic"
    },
    {
       id: 2468,
        question: "即時の，瞬間の",
        choices: ["instantaneous", "immediate", "prompt", "rapid"],
        correctAnswer: "instantaneous"
    },
    {
       id: 2469,
        question: "を祝う，記念する",
        choices: ["commemorate", "celebrate", "honor", "observe"],
        correctAnswer: "commemorate"
    },
    {
       id: 2470,
        question: "うなだれる",
        choices: ["droop", "slump", "wilt", "sag"],
        correctAnswer: "droop"
    },
    {
       id: 2471,
        question: "評判",
        choices: ["repute", "reputation", "fame", "standing"],
        correctAnswer: "repute"
    },
    {
       id: 2472,
        question: "指先",
        choices: ["fingertip", "finger", "nail", "knuckle"],
        correctAnswer: "fingertip"
    },
    {
       id: 2473,
        question: "天体の，天国の",
        choices: ["celestial", "heavenly", "astronomical", "cosmic"],
        correctAnswer: "celestial"
    },
    {
       id: 2474,
        question: "を欲する，切望する",
        choices: ["crave", "desire", "yearn", "long for"],
        correctAnswer: "crave"
    },
    {
       id: 2475,
        question: "沼地",
        choices: ["bog", "swamp", "marsh", "wetland"],
        correctAnswer: "bog"
    },
    {
       id: 2476,
        question: "逸話",
        choices: ["anecdote", "story", "tale", "narrative"],
        correctAnswer: "anecdote"
    },
    {
       id: 2477,
        question: "愛想が良い，感じが良い",
        choices: ["amiable", "friendly", "pleasant", "cheerful"],
        correctAnswer: "amiable"
    },
    {
       id: 2478,
        question: "注入する",
        choices: ["infuse", "inject", "pour in", "instill"],
        correctAnswer: "infuse"
    },
    {
       id: 2479,
        question: "先例，前提",
        choices: ["precedent", "example", "case", "rule"],
        correctAnswer: "precedent"
    },
    {
       id: 2480,
        question: "を推測する",
        choices: ["surmise", "guess", "assume", "infer"],
        correctAnswer: "surmise"
    },
    {
       id: 2481,
        question: "注目に値する，著しい",
        choices: ["noteworthy", "remarkable", "outstanding", "significant"],
        correctAnswer: "noteworthy"
    },
    {
       id: 2482,
        question: "法の執行",
        choices: ["law enforcement", "policing", "legal action", "justice system"],
        correctAnswer: "law enforcement"
    },
    {
       id: 2483,
        question: "争い，競争",
        choices: ["contention", "conflict", "dispute", "competition"],
        correctAnswer: "contention"
    },
    {
       id: 2484,
        question: "を抱きしめる",
        choices: ["cuddle", "hug", "embrace", "snuggle"],
        correctAnswer: "cuddle"
    },
    {
       id: 2485,
        question: "を取り上げる",
        choices: ["take up", "pick up", "adopt", "embrace"],
        correctAnswer: "take up"
    },
    {
       id: 2486,
        question: "公爵夫人",
        choices: ["duchess", "queen", "countess", "lady"],
        correctAnswer: "duchess"
    },
    {
       id: 2487,
        question: "額，歯垢",
        choices: ["plaque", "tablet", "engraving", "trophy"],
        correctAnswer: "plaque"
    },
    {
       id: 2488,
        question: "悪意のある，意地の悪い",
        choices: ["malicious", "spiteful", "vindictive", "mean"],
        correctAnswer: "malicious"
    },
    {
       id: 2489,
        question: "に勝つ，説得する",
        choices: ["win over", "convince", "persuade", "sway"],
        correctAnswer: "win over"
    },
    {
       id: 2490,
        question: "地下鉄",
        choices: ["metro", "subway", "underground", "tube"],
        correctAnswer: "metro"
    },
    {
       id: 2491,
        question: "空中停止する",
        choices: ["hover", "float", "glide", "levitate"],
        correctAnswer: "hover"
    },
    {
       id: 2492,
        question: "軽蔑的な",
        choices: ["contemptuous", "scornful", "disdainful", "derisive"],
        correctAnswer: "contemptuous"
    },
    {
       id: 2493,
        question: "抵抗できない，抑えられない",
        choices: ["irresistible", "overwhelming", "compelling", "uncontrollable"],
        correctAnswer: "irresistible"
    },
    {
       id: 2494,
        question: "融合",
        choices: ["fusion", "blend", "integration", "unification"],
        correctAnswer: "fusion"
    },
    {
       id: 2495,
        question: "述語",
        choices: ["predicate", "verb phrase", "clause", "subject"],
        correctAnswer: "predicate"
    },
    {
       id: 2496,
        question: "食べつくす，使い果たす",
        choices: ["eat up", "consume", "devour", "finish off"],
        correctAnswer: "eat up"
    },
    {
       id: 2497,
        question: "一貫性のない",
        choices: ["incoherent", "disorganized", "illogical", "inconsistent"],
        correctAnswer: "incoherent"
    },
    {
       id: 2498,
        question: "気の散った，注意をそらされた",
        choices: ["distracted", "preoccupied", "unfocused", "absent-minded"],
        correctAnswer: "distracted"
    },
    {
       id: 2499,
        question: "緩んだ，たるんだ",
        choices: ["slack", "loose", "lax", "flabby"],
        correctAnswer: "slack"
    },
    {
       id: 2500,
        question: "浪費",
        choices: ["extravagance", "wastefulness", "luxury", "profligacy"],
        correctAnswer: "extravagance"
    },
    {
       id: 2501,
        question: "不安定な，不確かな",
        choices: ["precarious", "unstable", "uncertain", "shaky"],
        correctAnswer: "precarious"
    },
    {
       id: 2502,
        question: "大破する，くじける",
        choices: ["crack up", "break down", "collapse", "fall apart"],
        correctAnswer: "crack up"
    },
    {
       id: 2503,
        question: "を悩ませる，困らせる",
        choices: ["pester", "bother", "annoy", "irritate"],
        correctAnswer: "pester"
    },
    {
       id: 2504,
        question: "を抑圧する，鎮圧する",
        choices: ["repress", "suppress", "quash", "subdue"],
        correctAnswer: "repress"
    },
    {
       id: 2505,
        question: "に批判的である，否定的な",
        choices: ["be critical of", "disapprove of", "object to", "condemn"],
        correctAnswer: "be critical of"
    },
    {
       id: 2506,
        question: "激痛",
        choices: ["pang", "agony", "sting", "ache"],
        correctAnswer: "pang"
    },
    {
       id: 2507,
        question: "きらめく，光る",
        choices: ["glisten", "sparkle", "shine", "glow"],
        correctAnswer: "glisten"
    },
    {
       id: 2508,
        question: "つなぐ",
        choices: ["moor", "anchor", "tie", "secure"],
        correctAnswer: "moor"
    },
    {
       id: 2509,
        question: "法令",
        choices: ["decree", "law", "statute", "ordinance"],
        correctAnswer: "decree"
    },
    {
       id: 2510,
        question: "検閲官",
        choices: ["censor", "reviewer", "inspector", "moderator"],
        correctAnswer: "censor"
    },
    {
       id: 2511,
        question: "呼び起こす，引き起こす",
        choices: ["evoke", "stimulate", "provoke", "trigger"],
        correctAnswer: "evoke"
    },
    {
       id: 2512,
        question: "波長分布，波長の分布，光の分布",
        choices: ["spectrum", "range", "bandwidth", "frequency"],
        correctAnswer: "spectrum"
    },
    {
       id: 2513,
        question: "厳しい，厳格な",
        choices: ["rigorous", "strict", "harsh", "severe"],
        correctAnswer: "rigorous"
    },
    {
       id: 2514,
        question: "監督者",
        choices: ["superintendent", "overseer", "manager", "supervisor"],
        correctAnswer: "superintendent"
    },
    {
       id: 2515,
        question: "AをBから遠ざける，AをBから隔てる",
        choices: ["distance A from B", "separate A from B", "isolate A from B", "detach A from B"],
        correctAnswer: "distance A from B"
    },
    {
       id: 2516,
        question: "差分の，差別的な",
        choices: ["differential", "discriminatory", "variant", "distinct"],
        correctAnswer: "differential"
    },
    {
       id: 2517,
        question: "推測，憶測",
        choices: ["conjecture", "assumption", "hypothesis", "speculation"],
        correctAnswer: "conjecture"
    },
    {
       id: 2518,
        question: "汚染，汚染物質",
        choices: ["contamination", "pollution", "impurity", "taint"],
        correctAnswer: "contamination"
    },
    {
       id: 2519,
        question: "高度，殿下",
        choices: ["highness", "altitude", "elevation", "eminence"],
        correctAnswer: "highness"
    },
    {
       id: 2520,
        question: "一貫性，結合",
        choices: ["coherence", "consistency", "logicality", "unity"],
        correctAnswer: "coherence"
    },
    {
       id: 2521,
        question: "不吉な，縁起の悪い",
        choices: ["sinister", "ominous", "foreboding", "threatening"],
        correctAnswer: "sinister"
    },
    {
       id: 2522,
        question: "救済，救い",
        choices: ["salvation", "redemption", "deliverance", "rescue"],
        correctAnswer: "salvation"
    },
    {
       id: 2523,
        question: "を断る，拒む",
        choices: ["turn down", "reject", "decline", "refuse"],
        correctAnswer: "turn down"
    },
    {
       id: 2524,
        question: "直感的な",
        choices: ["intuitive", "instinctive", "spontaneous", "automatic"],
        correctAnswer: "intuitive"
    },
    {
       id: 2525,
        question: "節制，禁酒",
        choices: ["temperance", "abstinence", "moderation", "self-restraint"],
        correctAnswer: "temperance"
    },
    {
       id: 2526,
        question: "中絶する，流産する",
        choices: ["abort", "terminate", "miscarry", "cease"],
        correctAnswer: "abort"
    },
    {
       id: 2527,
        question: "母体，原盤",
        choices: ["matrix", "origin", "mold", "framework"],
        correctAnswer: "matrix"
    },
    {
       id: 2528,
        question: "を引き出す，引き起こす",
        choices: ["bring out", "elicit", "extract", "induce"],
        correctAnswer: "bring out"
    },
    {
       id: 2529,
        question: "西洋の",
        choices: ["occidental", "western", "European", "Anglo-Saxon"],
        correctAnswer: "occidental"
    },
    {
       id: 2530,
        question: "に嫌われる，のお気に入りでなくなる",
        choices: ["fall out of favor with", "lose favor with", "become unpopular with", "alienate"],
        correctAnswer: "fall out of favor with"
    },
    {
       id: 2531,
        question: "避難所",
        choices: ["haven", "refuge", "sanctuary", "shelter"],
        correctAnswer: "haven"
    },
    {
       id: 2532,
        question: "聖歌，歌",
        choices: ["chant", "hymn", "psalm", "anthem"],
        correctAnswer: "chant"
    },
    {
       id: 2533,
        question: "素朴な，田舎の",
        choices: ["rustic", "rural", "pastoral", "bucolic"],
        correctAnswer: "rustic"
    },
    {
       id: 2534,
        question: "水生の，水の",
        choices: ["aquatic", "marine", "amphibious", "hydrous"],
        correctAnswer: "aquatic"
    },
    {
       id: 2535,
        question: "側溝，排水溝",
        choices: ["gutter", "drain", "sewer", "ditch"],
        correctAnswer: "gutter"
    },
    {
       id: 2536,
        question: "観測所",
        choices: ["observatory", "station", "watchtower", "monitoring post"],
        correctAnswer: "observatory"
    },
    {
       id: 2537,
        question: "人口の多い",
        choices: ["populous", "densely populated", "crowded", "overpopulated"],
        correctAnswer: "populous"
    },
    {
       id: 2538,
        question: "超音速の",
        choices: ["supersonic", "ultrasonic", "hypersonic", "transonic"],
        correctAnswer: "supersonic"
    },
    {
       id: 2539,
        question: "用務員，建物のメンテナンス等を担当する人",
        choices: ["janitor", "caretaker", "custodian", "maintenance worker"],
        correctAnswer: "janitor"
    },
    {
       id: 2540,
        question: "頭に置いて，考慮して",
        choices: ["in mind", "considering", "taking into account", "keeping in mind"],
        correctAnswer: "in mind"
    },
    {
       id: 2541,
        question: "家禽",
        choices: ["poultry", "fowl", "domestic birds", "livestock"],
        correctAnswer: "poultry"
    },
    {
       id: 2542,
        question: "感覚の",
        choices: ["sensory", "perceptual", "tactile", "neurological"],
        correctAnswer: "sensory"
    },
    {
       id: 2543,
        question: "冷酷な，無慈悲な",
        choices: ["ruthless", "merciless", "brutal", "callous"],
        correctAnswer: "ruthless"
    },
    {
       id: 2544,
        question: "を辞めさせる，躊躇させる",
        choices: ["deter", "discourage", "prevent", "hinder"],
        correctAnswer: "deter"
    },
    {
       id: 2545,
        question: "逆の",
        choices: ["converse", "opposite", "contrary", "reverse"],
        correctAnswer: "converse"
    },
    {
       id: 2546,
        question: "わずか，微量",
        choices: ["jot", "bit", "fraction", "speck"],
        correctAnswer: "jot"
    },
    {
       id: 2547,
        question: "陽気な，明るい",
        choices: ["cheery", "cheerful", "joyful", "merry"],
        correctAnswer: "cheery"
    },
    {
       id: 2548,
        question: "切り込む，干渉する",
        choices: ["cut in", "interrupt", "butt in", "intervene"],
        correctAnswer: "cut in"
    },
    {
       id: 2549,
        question: "職業の，職業上の",
        choices: ["vocational", "occupational", "professional", "career-related"],
        correctAnswer: "vocational"
    },
    {
       id: 2550,
        question: "騒音",
        choices: ["din", "racket", "clamor", "uproar"],
        correctAnswer: "din"
    },
    {
       id: 2551,
        question: "をおびえさせる，脅す",
        choices: ["intimidate", "threaten", "frighten", "bully"],
        correctAnswer: "intimidate"
    },
    {
       id: 2552,
        question: "誠意のない，不誠実な",
        choices: ["insincere", "dishonest", "deceitful", "untruthful"],
        correctAnswer: "insincere"
    },
    {
       id: 2553,
        question: "をふさぐ，遮断する",
        choices: ["obstruct", "block", "impede", "hinder"],
        correctAnswer: "obstruct"
    },
    {
       id: 2554,
        question: "道に迷って",
        choices: ["astray", "lost", "wandering", "off track"],
        correctAnswer: "astray"
    },
    {
       id: 2555,
        question: "を裏切る，約束を破る",
        choices: ["go back on", "betray", "renege", "break one's word"],
        correctAnswer: "go back on"
    },
    {
       id: 2556,
        question: "時代遅れの",
        choices: ["obsolete", "outdated", "antiquated", "old-fashioned"],
        correctAnswer: "obsolete"
    },
    {
       id: 2557,
        question: "泣き叫ぶ",
        choices: ["wail", "sob", "cry out", "lament"],
        correctAnswer: "wail"
    },
    {
       id: 2558,
        question: "うぬぼれた",
        choices: ["conceited", "arrogant", "egotistical", "vain"],
        correctAnswer: "conceited"
    },
    {
       id: 2559,
        question: "衰退，引き潮",
        choices: ["ebb", "decline", "recession", "wane"],
        correctAnswer: "ebb"
    },
    {
       id: 2560,
        question: "士気，風紀",
        choices: ["morale", "spirit", "discipline", "team spirit"],
        correctAnswer: "morale"
    },
    {
       id: 2561,
        question: "を気絶させる",
        choices: ["stun", "knock out", "daze", "shock"],
        correctAnswer: "stun"
    },
    {
       id: 2562,
        question: "を筆記する，複写する",
        choices: ["transcribe", "copy", "record", "reproduce"],
        correctAnswer: "transcribe"
    },
    {
       id: 2563,
        question: "ならず者，ごろつき",
        choices: ["rascal", "scoundrel", "rogue", "villain"],
        correctAnswer: "rascal"
    },
    {
       id: 2564,
        question: "信仰心",
        choices: ["piety", "devotion", "faith", "religiosity"],
        correctAnswer: "piety"
    },
    {
       id: 2565,
        question: "を推論する，推量する",
        choices: ["infer", "deduce", "conclude", "reason"],
        correctAnswer: "infer"
    },
    {
       id: 2566,
        question: "没頭，夢中",
        choices: ["preoccupation", "obsession", "fixation", "engrossment"],
        correctAnswer: "preoccupation"
    },
    {
       id: 2567,
        question: "遺伝，相続",
        choices: ["heredity", "inheritance", "genetics", "lineage"],
        correctAnswer: "heredity"
    },
    {
       id: 2568,
        question: "物々交換する",
        choices: ["barter", "trade", "exchange", "swap"],
        correctAnswer: "barter"
    },
    {
       id: 2569,
        question: "離れて，遠ざかって",
        choices: ["aloof", "distant", "detached", "reserved"],
        correctAnswer: "aloof"
    },
    {
       id: 2570,
        question: "わいせつな，みだらな",
        choices: ["indecent", "obscene", "lewd", "vulgar"],
        correctAnswer: "indecent"
    },
    {
       id: 2571,
        question: "AをBに統合する，AをBに併合する",
        choices: ["integrate A into B", "merge A into B", "combine A with B", "incorporate A into B"],
        correctAnswer: "integrate A into B"
    },
    {
       id: 2572,
        question: "砂利",
        choices: ["gravel", "pebble", "stone", "crushed rock"],
        correctAnswer: "gravel"
    },
    {
       id: 2573,
        question: "思いやりのある，情け深い",
        choices: ["compassionate", "kind", "sympathetic", "empathetic"],
        correctAnswer: "compassionate"
    },
    {
       id: 2574,
        question: "精巧さ",
        choices: ["elaboration", "sophistication", "intricacy", "complexity"],
        correctAnswer: "elaboration"
    },
    {
       id: 2575,
        question: "皮肉な，冷笑的な",
        choices: ["cynical", "sarcastic", "skeptical", "mocking"],
        correctAnswer: "cynical"
    },
    {
       id: 2576,
        question: "脚注",
        choices: ["footnote", "annotation", "commentary", "marginal note"],
        correctAnswer: "footnote"
    },
    {
       id: 2577,
        question: "に従って，一致して，合致して",
        choices: ["in line with", "in accordance with", "consistent with", "matching"],
        correctAnswer: "in line with"
    },
    {
       id: 2578,
        question: "無法な，法律を無視した",
        choices: ["outrageous", "lawless", "unlawful", "criminal"],
        correctAnswer: "outrageous"
    },
    {
       id: 2579,
        question: "摂理",
        choices: ["providence", "fate", "destiny", "divine will"],
        correctAnswer: "providence"
    },
    {
       id: 2580,
        question: "持続可能な",
        choices: ["sustainable", "renewable", "long-lasting", "viable"],
        correctAnswer: "sustainable"
    },
    {
       id: 2581,
        question: "矛盾した，正反対の",
        choices: ["contradictory", "inconsistent", "paradoxical", "conflicting"],
        correctAnswer: "contradictory"
    },
    {
       id: 2582,
        question: "と相容れない，合わない",
        choices: ["conflict with", "clash with", "disagree with", "oppose"],
        correctAnswer: "conflict with"
    },
    {
       id: 2583,
        question: "発見，探知",
        choices: ["detection", "discovery", "identification", "recognition"],
        correctAnswer: "detection"
    },
    {
       id: 2584,
        question: "外科の，外科的な",
        choices: ["surgical", "medical", "operative", "clinical"],
        correctAnswer: "surgical"
    },
    {
       id: 2585,
        question: "炎症，発火",
        choices: ["inflammation", "infection", "swelling", "irritation"],
        correctAnswer: "inflammation"
    },
    {
       id: 2586,
        question: "動員する",
        choices: ["mobilize", "deploy", "activate", "assemble"],
        correctAnswer: "mobilize"
    },
    {
       id: 2587,
        question: "腐敗，汚染",
        choices: ["taint", "contamination", "pollution", "spoilage"],
        correctAnswer: "taint"
    },
    {
       id: 2588,
        question: "断定的な",
        choices: ["assertive", "confident", "forceful", "bold"],
        correctAnswer: "assertive"
    },
    {
       id: 2589,
        question: "台座，基礎",
        choices: ["pedestal", "base", "foundation", "platform"],
        correctAnswer: "pedestal"
    },
    {
       id: 2590,
        question: "弾力，伸縮",
        choices: ["elasticity", "flexibility", "resilience", "stretchability"],
        correctAnswer: "elasticity"
    },
    {
       id: 2591,
        question: "俗人",
        choices: ["layman", "amateur", "novice", "non-expert"],
        correctAnswer: "layman"
    },
    {
       id: 2592,
        question: "授業料，学費",
        choices: ["tuition", "school fee", "college cost", "education expense"],
        correctAnswer: "tuition"
    },
    {
       id: 2593,
        question: "AをBに分類する",
        choices: ["classify A as B", "categorize A as B", "group A into B", "sort A into B"],
        correctAnswer: "classify A as B"
    },
    {
       id: 2594,
        question: "効能のある，効果的な",
        choices: ["potent", "effective", "powerful", "strong"],
        correctAnswer: "potent"
    },
    {
       id: 2595,
        question: "を損なう，弱める",
        choices: ["impair", "weaken", "damage", "diminish"],
        correctAnswer: "impair"
    },
    {
       id: 2596,
        question: "突風",
        choices: ["gust", "blast", "squall", "breeze"],
        correctAnswer: "gust"
    },
    {
       id: 2597,
        question: "半径",
        choices: ["radius", "diameter", "circumference", "perimeter"],
        correctAnswer: "radius"
    },
    {
       id: 2598,
        question: "王朝，王家",
        choices: ["dynasty", "empire", "kingdom", "monarchy"],
        correctAnswer: "dynasty"
    },
    {
       id: 2599,
        question: "立ち寄る，短時間訪れる",
        choices: ["stop by", "drop by", "visit briefly", "come over"],
        correctAnswer: "stop by"
    },
    {
       id: 2600,
        question: "弱体化させる，衰退させる",
        choices: ["undermine", "weaken", "erode", "diminish"],
        correctAnswer: "undermine"
    },
    {
       id: 2601,
        question: "を一掃する，排除する",
        choices: ["clean out", "clear out", "remove", "get rid of"],
        correctAnswer: "clean out"
    },
    {
       id: 2602,
        question: "領地の，封建の",
        choices: ["feudal", "territorial", "medieval", "aristocratic"],
        correctAnswer: "feudal"
    },
    {
       id: 2603,
        question: "休止，休憩",
        choices: ["intermission", "pause", "break", "interval"],
        correctAnswer: "intermission"
    },
    {
       id: 2604,
        question: "を万引きする",
        choices: ["shoplift", "steal", "pilfer", "swipe"],
        correctAnswer: "shoplift"
    },
    {
       id: 2605,
        question: "大通り",
        choices: ["boulevard", "avenue", "highway", "street"],
        correctAnswer: "boulevard"
    },
    {
       id: 2606,
        question: "きちんと片づけた，整えた",
        choices: ["be tidied up", "be organized", "be arranged", "be cleaned up"],
        correctAnswer: "be tidied up"
    },
    {
       id: 2607,
        question: "に投資する",
        choices: ["invest in", "put money into", "finance", "fund"],
        correctAnswer: "invest in"
    },
    {
       id: 2608,
        question: "結局のところ，最終的に",
        choices: ["as it turns out", "in the end", "ultimately", "eventually"],
        correctAnswer: "as it turns out"
    },
    {
       id: 2609,
        question: "を避ける",
        choices: ["shun", "avoid", "evade", "keep away from"],
        correctAnswer: "shun"
    },
    {
       id: 2610,
        question: "のろわれた",
        choices: ["damned", "cursed", "doomed", "accursed"],
        correctAnswer: "damned"
    },
    {
       id: 2611,
        question: "に従って行動する，演じる",
        choices: ["act on", "follow", "perform", "execute"],
        correctAnswer: "act on"
    },
    {
       id: 2612,
        question: "門限",
        choices: ["curfew", "deadline", "restriction", "lockdown"],
        correctAnswer: "curfew"
    },
    {
       id: 2613,
        question: "進歩する，進展する",
        choices: ["make progress", "advance", "develop", "move forward"],
        correctAnswer: "make progress"
    },
    {
       id: 2614,
        question: "螺旋の",
        choices: ["spiral", "twisted", "curved", "circular"],
        correctAnswer: "spiral"
    },
    {
       id: 2615,
        question: "卵黄，黄身",
        choices: ["yolk", "egg white", "shell", "albumen"],
        correctAnswer: "yolk"
    },
    {
       id: 2616,
        question: "を終了する，終わらせる",
        choices: ["terminate", "end", "finish", "cease"],
        correctAnswer: "terminate"
    },
    {
       id: 2617,
        question: "石油",
        choices: ["petroleum", "crude oil", "fuel", "gasoline"],
        correctAnswer: "petroleum"
    },
    {
       id: 2618,
        question: "単調，一本調子",
        choices: ["monotony", "dullness", "tedium", "repetitiveness"],
        correctAnswer: "monotony"
    },
    {
       id: 2619,
        question: "言語学",
        choices: ["linguistics", "philology", "syntax", "grammar"],
        correctAnswer: "linguistics"
    },
    {
       id: 2620,
        question: "を引き換える，買い戻す",
        choices: ["redeem", "exchange", "repurchase", "retrieve"],
        correctAnswer: "redeem"
    },
    {
       id: 2621,
        question: "濃縮",
        choices: ["enrichment", "concentration", "intensification", "purification"],
        correctAnswer: "enrichment"
    },
    {
       id: 2622,
        question: "申込用紙，願書",
        choices: ["application form", "entry form", "registration sheet", "request form"],
        correctAnswer: "application form"
    },
    {
       id: 2623,
        question: "隣接している",
        choices: ["adjacent", "nearby", "bordering", "next to"],
        correctAnswer: "adjacent"
    },
    {
       id: 2624,
        question: "に対する偏見，偏った見方",
        choices: ["biased toward", "prejudiced against", "one-sided", "narrow-minded"],
        correctAnswer: "biased toward"
    },
    {
       id: 2625,
        question: "緊縛，縛り",
        choices: ["bondage", "restraint", "captivity", "confinement"],
        correctAnswer: "bondage"
    },
    {
       id: 2626,
        question: "を激怒させる",
        choices: ["infuriate", "enrage", "anger", "provoke"],
        correctAnswer: "infuriate"
    },
    {
       id: 2627,
        question: "忘却",
        choices: ["oblivion", "forgetfulness", "amnesia", "neglect"],
        correctAnswer: "oblivion"
    },
    {
       id: 2628,
        question: "をふるいにかける",
        choices: ["sift", "filter", "screen", "separate"],
        correctAnswer: "sift"
    },
    {
       id: 2629,
        question: "穏やかな，温和な",
        choices: ["placid", "calm", "serene", "tranquil"],
        correctAnswer: "placid"
    },
    {
       id: 2630,
        question: "を辛抱する，我慢する",
        choices: ["persevere", "endure", "persist", "withstand"],
        correctAnswer: "persevere"
    },
    {
       id: 2631,
        question: "を拡大する，増大する",
        choices: ["amplify", "increase", "expand", "magnify"],
        correctAnswer: "amplify"
    },
    {
       id: 2632,
        question: "備品",
        choices: ["fixture", "equipment", "furniture", "accessory"],
        correctAnswer: "fixture"
    },
    {
       id: 2633,
        question: "破壊的な，破壊力のある",
        choices: ["disruptive", "destructive", "damaging", "devastating"],
        correctAnswer: "disruptive"
    },
    {
       id: 2634,
        question: "を責める，弾劾する",
        choices: ["impeach", "accuse", "charge", "prosecute"],
        correctAnswer: "impeach"
    },
    {
       id: 2635,
        question: "不可解な，説明できない",
        choices: ["inexplicable", "unexplainable", "mysterious", "puzzling"],
        correctAnswer: "inexplicable"
    },
    {
       id: 2636,
        question: "割り当て，配置",
        choices: ["allocation", "distribution", "assignment", "allotment"],
        correctAnswer: "allocation"
    },
    {
       id: 2637,
        question: "偽善者",
        choices: ["hypocrite", "deceiver", "fraud", "impostor"],
        correctAnswer: "hypocrite"
    },
    {
       id: 2638,
        question: "猛吹雪",
        choices: ["blizzard", "snowstorm", "whiteout", "gale"],
        correctAnswer: "blizzard"
    },
    {
       id: 2639,
        question: "寿命，長寿",
        choices: ["longevity", "lifespan", "durability", "permanence"],
        correctAnswer: "longevity"
    },
    {
       id: 2640,
        question: "無効の",
        choices: ["void", "invalid", "null", "canceled"],
        correctAnswer: "void"
    },
    {
       id: 2641,
        question: "祖国",
        choices: ["fatherland", "homeland", "nation", "birthplace"],
        correctAnswer: "fatherland"
    },
    {
       id: 2642,
        question: "を閉じ込める，密封するように閉じる",
        choices: ["lock in", "seal", "trap", "confine"],
        correctAnswer: "lock in"
    },
    {
       id: 2643,
        question: "回想",
        choices: ["reminiscence", "memory", "reflection", "nostalgia"],
        correctAnswer: "reminiscence"
    },
    {
       id: 2644,
        question: "を生じさせる，を引き起こす",
        choices: ["give rise to", "cause", "lead to", "trigger"],
        correctAnswer: "give rise to"
    },
    {
       id: 2645,
        question: "波打つ，急に上がる",
        choices: ["surge", "rise", "increase", "escalate"],
        correctAnswer: "surge"
    },
    {
       id: 2646,
        question: "分詞",
        choices: ["participle", "verb", "adjective", "clause"],
        correctAnswer: "participle"
    },
    {
       id: 2647,
        question: "への障壁，の妨害",
        choices: ["obstacle to", "barrier to", "hindrance to", "block to"],
        correctAnswer: "obstacle to"
    },
    {
       id: 2648,
        question: "貯水池",
        choices: ["reservoir", "lake", "pond", "dam"],
        correctAnswer: "reservoir"
    },
    {
       id: 2649,
        question: "蒸留する",
        choices: ["distill", "filter", "purify", "extract"],
        correctAnswer: "distill"
    },
    {
       id: 2650,
        question: "避難する，逃避する",
        choices: ["evacuate", "flee", "escape", "retreat"],
        correctAnswer: "evacuate"
    },
    {
       id: 2651,
        question: "したたる",
        choices: ["trickle", "drip", "flow", "seep"],
        correctAnswer: "trickle"
    },
    {
       id: 2652,
        question: "とさか",
        choices: ["crest", "comb", "feather", "tuft"],
        correctAnswer: "crest"
    },
    {
       id: 2653,
        question: "汚染物質",
        choices: ["pollutant", "contaminant", "toxin", "waste"],
        correctAnswer: "pollutant"
    },
    {
       id: 2654,
        question: "輪郭",
        choices: ["contour", "outline", "shape", "border"],
        correctAnswer: "contour"
    },
    {
       id: 2655,
        question: "を合計する，要約する",
        choices: ["sum up", "total", "summarize", "conclude"],
        correctAnswer: "sum up"
    },
    {
       id: 2656,
        question: "無関係，見当違い",
        choices: ["irrelevance", "disconnection", "unrelatedness", "misinterpretation"],
        correctAnswer: "irrelevance"
    },
    {
       id: 2657,
        question: "香りのよい，香り高い",
        choices: ["fragrant", "aromatic", "scented", "perfumed"],
        correctAnswer: "fragrant"
    },
    {
       id: 2658,
        question: "定期的な，周期的な",
        choices: ["periodic", "regular", "scheduled", "routine"],
        correctAnswer: "periodic"
    },
    {
       id: 2659,
        question: "暫定の，仮の",
        choices: ["tentative", "provisional", "temporary", "uncertain"],
        correctAnswer: "tentative"
    },
    {
       id: 2660,
        question: "真紅の",
        choices: ["crimson", "scarlet", "ruby", "deep red"],
        correctAnswer: "crimson"
    },
    {
       id: 2661,
        question: "執事",
        choices: ["butler", "servant", "valet", "housekeeper"],
        correctAnswer: "butler"
    },
    {
       id: 2662,
        question: "悪党",
        choices: ["rogue", "villain", "scoundrel", "criminal"],
        correctAnswer: "rogue"
    },
    {
       id: 2663,
        question: "準備の",
        choices: ["preparatory", "preliminary", "introductory", "initial"],
        correctAnswer: "preparatory"
    },
    {
       id: 2664,
        question: "音響の，聴覚の",
        choices: ["acoustic", "sonic", "auditory", "vocal"],
        correctAnswer: "acoustic"
    },
    {
       id: 2665,
        question: "気軽な，気楽な",
        choices: ["lighthearted", "cheerful", "carefree", "jovial"],
        correctAnswer: "lighthearted"
    },
    {
       id: 2666,
        question: "不一致，不和",
        choices: ["discord", "conflict", "disagreement", "disharmony"],
        correctAnswer: "discord"
    },
    {
       id: 2667,
        question: "前方の，前部の",
        choices: ["fore", "front", "frontal", "anterior"],
        correctAnswer: "fore"
    },
    {
       id: 2668,
        question: "群衆，群れ",
        choices: ["throng", "crowd", "horde", "swarm"],
        correctAnswer: "throng"
    },
    {
       id: 2669,
        question: "運転手",
        choices: ["chauffeur", "driver", "cabby", "pilot"],
        correctAnswer: "chauffeur"
    },
    {
       id: 2670,
        question: "週半ば",
        choices: ["midweek", "Wednesday", "middle of the week", "midpoint"],
        correctAnswer: "midweek"
    },
    {
       id: 2671,
        question: "超能力のある",
        choices: ["psychic", "telepathic", "clairvoyant", "medium"],
        correctAnswer: "psychic"
    },
    {
       id: 2672,
        question: "を懇願する",
        choices: ["solicit", "implore", "plead", "beseech"],
        correctAnswer: "solicit"
    },
    {
       id: 2673,
        question: "才能，能力",
        choices: ["flair", "talent", "aptitude", "gift"],
        correctAnswer: "flair"
    },
    {
       id: 2674,
        question: "を発狂させる，激怒させる",
        choices: ["madden", "infuriate", "enrage", "exasperate"],
        correctAnswer: "madden"
    },
    {
       id: 2675,
        question: "骨を折る，苦心する",
        choices: ["painstaking", "arduous", "laborious", "exacting"],
        correctAnswer: "painstaking"
    },
    {
       id: 2676,
        question: "なまぬるい，微温の",
        choices: ["lukewarm", "tepid", "mild", "warm"],
        correctAnswer: "lukewarm"
    },
    {
       id: 2677,
        question: "欠点",
        choices: ["flaw", "defect", "shortcoming", "fault"],
        correctAnswer: "flaw"
    },
    {
       id: 2678,
        question: "投石器",
        choices: ["sling", "catapult", "trebuchet", "slingshot"],
        correctAnswer: "sling"
    },
    {
       id: 2679,
        question: "合法，正当性",
        choices: ["legitimacy", "lawfulness", "validity", "authenticity"],
        correctAnswer: "legitimacy"
    },
    {
       id: 2680,
        question: "を繰り返す",
        choices: ["go over", "repeat", "reiterate", "recap"],
        correctAnswer: "go over"
    },
    {
       id: 2681,
        question: "を見抜く，見通す，透視する",
        choices: ["see through", "discern", "detect", "perceive"],
        correctAnswer: "see through"
    },
    {
       id: 2682,
        question: "暗殺者，刺客",
        choices: ["assassin", "murderer", "hitman", "killer"],
        correctAnswer: "assassin"
    },
    {
       id: 2683,
        question: "羽根飾り",
        choices: ["plume", "feather", "quill", "crest"],
        correctAnswer: "plume"
    },
    {
       id: 2684,
        question: "子孫",
        choices: ["posterity", "descendants", "offspring", "progeny"],
        correctAnswer: "posterity"
    },
    {
       id: 2685,
        question: "精査",
        choices: ["scrutiny", "examination", "inspection", "analysis"],
        correctAnswer: "scrutiny"
    },
    {
       id: 2686,
        question: "延滞した，期限の過ぎた",
        choices: ["overdue", "late", "delinquent", "tardy"],
        correctAnswer: "overdue"
    },
    {
       id: 2687,
        question: "を散らす，拡散する",
        choices: ["diffuse", "disperse", "spread", "distribute"],
        correctAnswer: "diffuse"
    },
    {
       id: 2688,
        question: "を悪化させる",
        choices: ["deteriorate", "worsen", "decline", "degrade"],
        correctAnswer: "deteriorate"
    },
    {
       id: 2689,
        question: "雄大さ，壮大さ",
        choices: ["grandeur", "majesty", "splendor", "magnificence"],
        correctAnswer: "grandeur"
    },
    {
       id: 2690,
        question: "寄生虫，寄生生物",
        choices: ["parasite", "pest", "infestation", "commensal"],
        correctAnswer: "parasite"
    },
    {
       id: 2691,
        question: "を放棄する，中止する",
        choices: ["renounce", "abandon", "forsake", "relinquish"],
        correctAnswer: "renounce"
    },
    {
       id: 2692,
        question: "おかゆ",
        choices: ["porridge", "oatmeal", "congee", "gruel"],
        correctAnswer: "porridge"
    },
    {
       id: 2693,
        question: "今のところ，現状",
        choices: ["at the moment", "currently", "presently", "as of now"],
        correctAnswer: "at the moment"
    },
    {
       id: 2694,
        question: "そり",
        choices: ["sled", "sledge", "sleigh", "toboggan"],
        correctAnswer: "sled"
    },
    {
       id: 2695,
        question: "を誘惑する，魅惑する",
        choices: ["entice", "tempt", "allure", "attract"],
        correctAnswer: "entice"
    },
    {
       id: 2696,
        question: "泥炭",
        choices: ["peat", "moss", "turf", "humus"],
        correctAnswer: "peat"
    },
    {
       id: 2697,
        question: "を進める，出す",
        choices: ["put forth", "present", "offer", "submit"],
        correctAnswer: "put forth"
    },
    {
       id: 2698,
        question: "沈んだ",
        choices: ["sunken", "submerged", "sunk", "descended"],
        correctAnswer: "sunken"
    },
    {
       id: 2699,
        question: "見落とし，過失",
        choices: ["oversight", "mistake", "error", "omission"],
        correctAnswer: "oversight"
    },
    {
       id: 2700,
        question: "急ぎ足，駆け足",
        choices: ["trot", "jog", "run", "sprint"],
        correctAnswer: "trot"
    },
    {
       id: 2701,
        question: "地質学の",
        choices: ["geological", "geographic", "geothermal", "geomorphic"],
        correctAnswer: "geological"
    },
    {
       id: 2702,
        question: "中和する",
        choices: ["neutralize", "counteract", "balance", "dilute"],
        correctAnswer: "neutralize"
    },
    {
       id: 2703,
        question: "至高，覇権",
        choices: ["supremacy", "dominance", "sovereignty", "preeminence"],
        correctAnswer: "supremacy"
    },
    {
       id: 2704,
        question: "登録する，署名する",
        choices: ["sign up", "enroll", "register", "subscribe"],
        correctAnswer: "sign up"
    },
    {
       id: 2705,
        question: "帯電させる",
        choices: ["electrify", "charge", "energize", "shock"],
        correctAnswer: "electrify"
    },
    {
       id: 2706,
        question: "日食",
        choices: ["eclipse", "solar event", "occultation", "transit"],
        correctAnswer: "eclipse"
    },
    {
       id: 2707,
        question: "荒野，野原",
        choices: ["heath", "moor", "prairie", "savanna"],
        correctAnswer: "heath"
    },
    {
       id: 2708,
        question: "恩恵",
        choices: ["boon", "benefit", "blessing", "advantage"],
        correctAnswer: "boon"
    },
    {
       id: 2709,
        question: "大作，壮大な作品",
        choices: ["epic", "saga", "legend", "masterpiece"],
        correctAnswer: "epic"
    },
    {
       id: 2710,
        question: "冗談",
        choices: ["jest", "joke", "prank", "gag"],
        correctAnswer: "jest"
    },
    {
       id: 2711,
        question: "音声の",
        choices: ["phonetic", "auditory", "linguistic", "vocal"],
        correctAnswer: "phonetic"
    },
    {
       id: 2712,
        question: "親知らず，知歯",
        choices: ["wisdom tooth", "molar", "incisor", "canine"],
        correctAnswer: "wisdom tooth"
    },
    {
       id: 2713,
        question: "下水道",
        choices: ["sewer", "drain", "pipeline", "gutter"],
        correctAnswer: "sewer"
    },
    {
       id: 2714,
        question: "鏡板",
        choices: ["pane", "window", "panel", "shield"],
        correctAnswer: "pane"
    },
    {
       id: 2715,
        question: "筋肉質の",
        choices: ["muscular", "brawny", "athletic", "robust"],
        correctAnswer: "muscular"
    },
    {
       id: 2716,
        question: "下宿人",
        choices: ["lodger", "tenant", "boarder", "renter"],
        correctAnswer: "lodger"
    },
    {
       id: 2717,
        question: "再発，反復",
        choices: ["recurrence", "relapse", "repetition", "reappearance"],
        correctAnswer: "recurrence"
    },
    {
       id: 2718,
        question: "懐疑的な，疑い深い",
        choices: ["skeptical", "doubtful", "suspicious", "cynical"],
        correctAnswer: "skeptical"
    },
    {
       id: 2719,
        question: "質素な，倹約な",
        choices: ["frugal", "thrifty", "economical", "modest"],
        correctAnswer: "frugal"
    },
    {
       id: 2720,
        question: "目をくらます",
        choices: ["daze", "stun", "blind", "distract"],
        correctAnswer: "daze"
    },
    {
       id: 2721,
        question: "を予告する，予言する",
        choices: ["foretell", "predict", "prophesy", "anticipate"],
        correctAnswer: "foretell"
    },
    {
       id: 2722,
        question: "移民，移住者",
        choices: ["emigrant", "immigrant", "expatriate", "settler"],
        correctAnswer: "emigrant"
    },
    {
       id: 2723,
        question: "聖域，聖なる場所",
        choices: ["sanctuary", "refuge", "haven", "asylum"],
        correctAnswer: "sanctuary"
    },
    {
       id: 2724,
        question: "生意気な，ずうずうしい",
        choices: ["cheeky", "impudent", "sassy", "bold"],
        correctAnswer: "cheeky"
    },
    {
       id: 2725,
        question: "いたずら，悪ふざけ",
        choices: ["prank", "trick", "hoax", "mischief"],
        correctAnswer: "prank"
    },
    {
       id: 2726,
        question: "素晴らしい",
        choices: ["fabulous", "fantastic", "amazing", "wonderful"],
        correctAnswer: "fabulous"
    },
    {
       id: 2727,
        question: "を分離する，隔離する",
        choices: ["segregate", "isolate", "separate", "partition"],
        correctAnswer: "segregate"
    },
    {
       id: 2728,
        question: "料理",
        choices: ["cuisine", "gastronomy", "dish", "meal"],
        correctAnswer: "cuisine"
    },
    {
       id: 2729,
        question: "流し読みする，ざっと読む，素早く読む",
        choices: ["skim over", "scan", "glance through", "peruse"],
        correctAnswer: "skim over"
    },
    {
       id: 2730,
        question: "保持，維持",
        choices: ["retention", "preservation", "maintenance", "conservation"],
        correctAnswer: "retention"
    },
    {
       id: 2731,
        question: "を成し遂げる，達成する，完成させる",
        choices: ["bring off", "carry out", "achieve", "accomplish"],
        correctAnswer: "bring off"
    },
    {
       id: 2732,
        question: "それによって，それに従って",
        choices: ["whereby", "thereby", "hence", "thus"],
        correctAnswer: "whereby"
    },
    {
       id: 2733,
        question: "仕切り，分割",
        choices: ["partition", "division", "separation", "segregation"],
        correctAnswer: "partition"
    },
    {
       id: 2734,
        question: "疑っている，はっきりしない",
        choices: ["dubious", "skeptical", "uncertain", "doubtful"],
        correctAnswer: "dubious"
    },
    {
       id: 2735,
        question: "陰謀",
        choices: ["intrigue", "conspiracy", "scheme", "plot"],
        correctAnswer: "intrigue"
    },
    {
       id: 2736,
        question: "を魅了する",
        choices: ["captivate", "fascinate", "enchant", "charm"],
        correctAnswer: "captivate"
    },
    {
       id: 2737,
        question: "AをBにさらす",
        choices: ["expose A to B", "subject A to B", "present A to B", "introduce A to B"],
        correctAnswer: "expose A to B"
    },
    {
       id: 2738,
        question: "噴火する",
        choices: ["erupt", "explode", "burst", "detonate"],
        correctAnswer: "erupt"
    },
    {
       id: 2739,
        question: "しがちで，傾向がある",
        choices: ["prone", "inclined", "susceptible", "liable"],
        correctAnswer: "prone"
    },
    {
       id: 2740,
        question: "平らにする，水平にする",
        choices: ["level off", "flatten", "smooth", "even out"],
        correctAnswer: "level off"
    },
    {
       id: 2741,
        question: "だまそうとする，当てにならない",
        choices: ["deceptive", "misleading", "fraudulent", "dishonest"],
        correctAnswer: "deceptive"
    },
    {
       id: 2742,
        question: "を大袈裟にほめる，過大に評価する",
        choices: ["talk up", "exaggerate", "overpraise", "inflate"],
        correctAnswer: "talk up"
    },
    {
       id: 2743,
        question: "に貢献する",
        choices: ["contribute to", "support", "aid", "assist"],
        correctAnswer: "contribute to"
    },
    {
       id: 2744,
        question: "指定，選定",
        choices: ["designation", "appointment", "assignment", "nomination"],
        correctAnswer: "designation"
    },
    {
       id: 2745,
        question: "を逸らす，避ける",
        choices: ["avert", "avoid", "evade", "sidestep"],
        correctAnswer: "avert"
    },
    {
       id: 2746,
        question: "退屈な",
        choices: ["dreary", "dull", "tedious", "monotonous"],
        correctAnswer: "dreary"
    },
    {
       id: 2747,
        question: "保証内，保険の有効な",
        choices: ["under warranty", "covered", "insured", "protected"],
        correctAnswer: "under warranty"
    },
    {
       id: 2748,
        question: "悪臭を放つ",
        choices: ["stink", "reek", "smell bad", "emit odor"],
        correctAnswer: "stink"
    },
    {
       id: 2749,
        question: "熱の，温度に関する",
        choices: ["thermal", "heat-related", "hot", "warm"],
        correctAnswer: "thermal"
    },
    {
       id: 2750,
        question: "欠けている，欠如している",
        choices: ["devoid", "lacking", "without", "absent"],
        correctAnswer: "devoid"
    },
    {
       id: 2751,
        question: "を殴る，たたく",
        choices: ["thump", "hit", "punch", "strike"],
        correctAnswer: "thump"
    },
    {
       id: 2752,
        question: "を模倣する，真似る",
        choices: ["mimic", "imitate", "copy", "replicate"],
        correctAnswer: "mimic"
    },
    {
       id: 2753,
        question: "に制限を加える，限界を与える",
        choices: ["place limitation on", "restrict", "confine", "curtail"],
        correctAnswer: "place limitation on"
    },
    {
       id: 2754,
        question: "貧弱な",
        choices: ["meager", "scanty", "insufficient", "poor"],
        correctAnswer: "meager"
    },
    {
       id: 2755,
        question: "を修理する，決定する，を直す",
        choices: ["fix up", "repair", "restore", "mend"],
        correctAnswer: "fix up"
    },
    {
       id: 2756,
        question: "急流",
        choices: ["torrent", "rapids", "stream", "flood"],
        correctAnswer: "torrent"
    },
    {
       id: 2757,
        question: "進化的な，進化論の",
        choices: ["evolutionary", "biological", "progressive", "genetic"],
        correctAnswer: "evolutionary"
    },
    {
       id: 2758,
        question: "を永続させる",
        choices: ["perpetuate", "sustain", "maintain", "continue"],
        correctAnswer: "perpetuate"
    },
    {
       id: 2759,
        question: "常緑の",
        choices: ["evergreen", "perennial", "lasting", "persistent"],
        correctAnswer: "evergreen"
    },
    {
       id: 2760,
        question: "を叱責する，しかる",
        choices: ["rebuke", "scold", "chide", "reprimand"],
        correctAnswer: "rebuke"
    },
    {
       id: 2761,
        question: "巧妙な扱い，操作",
        choices: ["manipulation", "operation", "control", "handling"],
        correctAnswer: "manipulation"
    },
    {
       id: 2762,
        question: "大虐殺",
        choices: ["holocaust", "massacre", "genocide", "slaughter"],
        correctAnswer: "holocaust"
    },
    {
       id: 2763,
        question: "興奮した",
        choices: ["hectic", "excited", "frantic", "agitated"],
        correctAnswer: "hectic"
    },
    {
       id: 2764,
        question: "眠り込む，眠る",
        choices: ["nod off", "fall asleep", "drift off", "doze"],
        correctAnswer: "nod off"
    },
    {
       id: 2765,
        question: "非難する，批判する",
        choices: ["denounce", "criticize", "condemn", "blame"],
        correctAnswer: "denounce"
    },
    {
       id: 2766,
        question: "負う，招く",
        choices: ["incur", "suffer", "experience", "encounter"],
        correctAnswer: "incur"
    },
    {
       id: 2767,
        question: "樹液",
        choices: ["sap", "resin", "juice", "extract"],
        correctAnswer: "sap"
    },
    {
       id: 2768,
        question: "優勢な，有力な",
        choices: ["predominant", "dominant", "prevalent", "leading"],
        correctAnswer: "predominant"
    },
    {
       id: 2769,
        question: "暫定，中間",
        choices: ["interim", "temporary", "transitional", "provisional"],
        correctAnswer: "interim"
    },
    {
       id: 2770,
        question: "裕福な，富裕な",
        choices: ["affluent", "wealthy", "prosperous", "rich"],
        correctAnswer: "affluent"
    },
    {
       id: 2771,
        question: "信者",
        choices: ["devotee", "follower", "believer", "disciple"],
        correctAnswer: "devotee"
    },
    {
       id: 2772,
        question: "猛勉強する，必死に勉強する",
        choices: ["hit the books", "study hard", "cram", "burn the midnight oil"],
        correctAnswer: "hit the books"
    },
    {
       id: 2773,
        question: "口実，弁解",
        choices: ["pretext", "excuse", "justification", "alibi"],
        correctAnswer: "pretext"
    },
    {
       id: 2774,
        question: "何もしないで，怠けて",
        choices: ["idly", "lazily", "passively", "inactively"],
        correctAnswer: "idly"
    },
    {
       id: 2775,
        question: "後悔，懺悔",
        choices: ["repentance", "remorse", "regret", "contrition"],
        correctAnswer: "repentance"
    },
    {
       id: 2776,
        question: "絶え間ない",
        choices: ["ceaseless", "constant", "unending", "continuous"],
        correctAnswer: "ceaseless"
    },
    {
       id: 2777,
        question: "奇妙な，異様な",
        choices: ["bizarre", "strange", "odd", "peculiar"],
        correctAnswer: "bizarre"
    },
    {
       id: 2778,
        question: "満足，喜び",
        choices: ["gratification", "satisfaction", "pleasure", "contentment"],
        correctAnswer: "gratification"
    },
    {
       id: 2779,
        question: "同窓会",
        choices: ["reunion", "gathering", "homecoming", "meeting"],
        correctAnswer: "reunion"
    },
    {
       id: 2780,
        question: "放射性の",
        choices: ["radioactive", "nuclear", "radiation", "hazardous"],
        correctAnswer: "radioactive"
    },
    {
       id: 2781,
        question: "同族の，血族の",
        choices: ["akin", "related", "similar", "kindred"],
        correctAnswer: "akin"
    },
    {
       id: 2782,
        question: "おとなしい，温和な",
        choices: ["meek", "gentle", "humble", "mild"],
        correctAnswer: "meek"
    },
    {
       id: 2783,
        question: "を清める，浄化する",
        choices: ["purify", "cleanse", "sanctify", "refine"],
        correctAnswer: "purify"
    },
    {
       id: 2784,
        question: "一時解雇",
        choices: ["layoff", "dismissal", "termination", "furlough"],
        correctAnswer: "layoff"
    },
    {
       id: 2785,
        question: "持ち直す，回復する",
        choices: ["bounce back", "recover", "regain", "revive"],
        correctAnswer: "bounce back"
    },
    {
       id: 2786,
        question: "応戦する，やり返す",
        choices: ["fight back", "retaliate", "counterattack", "resist"],
        correctAnswer: "fight back"
    },
    {
       id: 2787,
        question: "違法の，非合法の",
        choices: ["illegitimate", "illegal", "unlawful", "prohibited"],
        correctAnswer: "illegitimate"
    },
    {
       id: 2788,
        question: "尽力，努力",
        choices: ["exertion", "effort", "endeavor", "strain"],
        correctAnswer: "exertion"
    },
    {
       id: 2789,
        question: "致命的な",
        choices: ["lethal", "fatal", "deadly", "mortal"],
        correctAnswer: "lethal"
    },
    {
       id: 2790,
        question: "以前の様に，以前と同等に",
        choices: ["as before", "same as ever", "like before", "unchanged"],
        correctAnswer: "as before"
    },
    {
       id: 2791,
        question: "中央値",
        choices: ["median", "average", "middle", "center"],
        correctAnswer: "median"
    },
    {
       id: 2792,
        question: "非難",
        choices: ["condemnation", "criticism", "blame", "denouncement"],
        correctAnswer: "condemnation"
    },
    {
       id: 2793,
        question: "に属する，分類される",
        choices: ["fall into", "belong to", "be classified as", "fit into"],
        correctAnswer: "fall into"
    },
    {
       id: 2794,
        question: "長い",
        choices: ["lengthy", "long", "extensive", "prolonged"],
        correctAnswer: "lengthy"
    },
    {
       id: 2795,
        question: "軽薄な，いい加減な",
        choices: ["frivolous", "careless", "reckless", "superficial"],
        correctAnswer: "frivolous"
    },
    {
       id: 2796,
        question: "細菌，ばい菌",
        choices: ["germ", "bacteria", "virus", "microbe"],
        correctAnswer: "germ"
    },
    {
       id: 2797,
        question: "脅迫，強制",
        choices: ["compulsion", "coercion", "force", "pressure"],
        correctAnswer: "compulsion"
    },
    {
       id: 2798,
        question: "丸石",
        choices: ["boulder", "rock", "pebble", "stone"],
        correctAnswer: "boulder"
    },
    {
       id: 2799,
        question: "続編，続き",
        choices: ["sequel", "continuation", "follow-up", "next part"],
        correctAnswer: "sequel"
    },
    {
       id: 2800,
        question: "を扇動する，揺り動かす",
        choices: ["agitate", "stir", "provoke", "incite"],
        correctAnswer: "agitate"
    },
    {
       id: 2801,
        question: "に飛びつく，すぐに受け入れる",
        choices: ["jump at", "grab", "accept quickly", "seize"],
        correctAnswer: "jump at"
    },
    {
       id: 2802,
        question: "有形の，手で触れる",
        choices: ["tangible", "physical", "concrete", "real"],
        correctAnswer: "tangible"
    },
    {
       id: 2803,
        question: "に遅れず付いていく",
        choices: ["keep up with", "catch up with", "stay on track", "follow"],
        correctAnswer: "keep up with"
    },
    {
       id: 2804,
        question: "避ける，回避する",
        choices: ["evade", "avoid", "escape", "dodge"],
        correctAnswer: "evade"
    },
    {
       id: 2805,
        question: "ひも",
        choices: ["thong", "string", "cord", "lace"],
        correctAnswer: "thong"
    },
    {
       id: 2806,
        question: "を誘惑する，そそのかす",
        choices: ["seduce", "tempt", "entice", "lure"],
        correctAnswer: "seduce"
    },
    {
       id: 2807,
        question: "罪人",
        choices: ["sinner", "criminal", "culprit", "wrongdoer"],
        correctAnswer: "sinner"
    },
    {
       id: 2808,
        question: "皆殺し，大虐殺",
        choices: ["massacre", "genocide", "slaughter", "holocaust"],
        correctAnswer: "massacre"
    },
    {
       id: 2809,
        question: "もや，かすみ",
        choices: ["haze", "mist", "fog", "smoke"],
        correctAnswer: "haze"
    },
    {
       id: 2810,
        question: "悲痛，苦悩",
        choices: ["woe", "grief", "sorrow", "misery"],
        correctAnswer: "woe"
    },
    {
       id: 2811,
        question: "を熟考する，じっくり考える",
        choices: ["ponder", "consider", "reflect", "contemplate"],
        correctAnswer: "ponder"
    },
    {
       id: 2812,
        question: "利益が上がる，儲かる",
        choices: ["lucrative", "profitable", "gainful", "money-making"],
        correctAnswer: "lucrative"
    },
    {
       id: 2813,
        question: "非論理的な",
        choices: ["illogical", "irrational", "unreasonable", "incoherent"],
        correctAnswer: "illogical"
    },
    {
       id: 2814,
        question: "輝く，光を放つ",
        choices: ["radiant", "shining", "bright", "gleaming"],
        correctAnswer: "radiant"
    },
    {
       id: 2815,
        question: "生まれつきの，先天的な",
        choices: ["inborn", "innate", "natural", "hereditary"],
        correctAnswer: "inborn"
    },
    {
       id: 2816,
        question: "居眠りする",
        choices: ["doze", "nap", "drowse", "sleep lightly"],
        correctAnswer: "doze"
    },
    {
       id: 2817,
        question: "を監督する",
        choices: ["oversee", "supervise", "manage", "direct"],
        correctAnswer: "oversee"
    },
    {
       id: 2818,
        question: "高原，台地",
        choices: ["plateau", "plain", "mesa", "upland"],
        correctAnswer: "plateau"
    },
    {
       id: 2819,
        question: "を引き留める，留め置く",
        choices: ["detain", "hold", "restrain", "confine"],
        correctAnswer: "detain"
    },
    {
       id: 2820,
        question: "AをBと適合させる",
        choices: ["match A with B", "pair A with B", "combine A with B", "adapt A to B"],
        correctAnswer: "match A with B"
    },
    {
       id: 2821,
        question: "取るに足らない，ささいな",
        choices: ["petty", "trivial", "minor", "insignificant"],
        correctAnswer: "petty"
    },
    {
       id: 2822,
        question: "賢明な",
        choices: ["sage", "wise", "intelligent", "prudent"],
        correctAnswer: "sage"
    },
    {
       id: 2823,
        question: "のぞき見る，ちらっとのぞく",
        choices: ["peek", "glance", "spy", "peep"],
        correctAnswer: "peek"
    },
    {
       id: 2824,
        question: "無力な，無気力な",
        choices: ["impotent", "powerless", "weak", "helpless"],
        correctAnswer: "impotent"
    },
    {
       id: 2825,
        question: "を通り抜ける，やり通す",
        choices: ["come through", "get through", "pass through", "survive"],
        correctAnswer: "come through"
    },
    {
       id: 2826,
        question: "失敗に終わる，駄目になる，台無しになる",
        choices: ["fall through", "fail", "collapse", "break down"],
        correctAnswer: "fall through"
    },
    {
       id: 2827,
        question: "独裁",
        choices: ["dictatorship", "autocracy", "tyranny", "despotism"],
        correctAnswer: "dictatorship"
    },
    {
       id: 2828,
        question: "を困惑させる，混乱させる",
        choices: ["confound", "puzzle", "baffle", "bewilder"],
        correctAnswer: "confound"
    },
    {
       id: 2829,
        question: "無秩序，無政府状態",
        choices: ["anarchy", "chaos", "disorder", "lawlessness"],
        correctAnswer: "anarchy"
    },
    {
       id: 2830,
        question: "出発する，去る",
        choices: ["head out", "leave", "depart", "set off"],
        correctAnswer: "head out"
    },
    {
       id: 2831,
        question: "を差し引く，控除する",
        choices: ["deduct", "subtract", "reduce", "withdraw"],
        correctAnswer: "deduct"
    },
    {
       id: 2832,
        question: "灌漑",
        choices: ["irrigation", "watering", "drainage", "hydration"],
        correctAnswer: "irrigation"
    },
    {
       id: 2833,
        question: "爪楊枝",
        choices: ["toothpick", "dental stick", "pick", "floss"],
        correctAnswer: "toothpick"
    },
    {
       id: 2834,
        question: "雪崩",
        choices: ["avalanche", "snow slide", "landslide", "snowslip"],
        correctAnswer: "avalanche"
    },
    {
       id: 2835,
        question: "残留物，残余",
        choices: ["residue", "remains", "leftover", "deposit"],
        correctAnswer: "residue"
    },
    {
       id: 2836,
        question: "を灌漑する，水を引く",
        choices: ["irrigate", "water", "moisten", "hydrate"],
        correctAnswer: "irrigate"
    },
    {
       id: 2837,
        question: "軽率な，無謀な",
        choices: ["imprudent", "reckless", "careless", "rash"],
        correctAnswer: "imprudent"
    },
    {
       id: 2838,
        question: "無数の",
        choices: ["myriad", "countless", "infinite", "numerous"],
        correctAnswer: "myriad"
    },
    {
       id: 2839,
        question: "醜くする",
        choices: ["disfigure", "deform", "scar", "ruin"],
        correctAnswer: "disfigure"
    },
    {
       id: 2840,
        question: "頂点",
        choices: ["pinnacle", "peak", "summit", "apex"],
        correctAnswer: "pinnacle"
    },
    {
       id: 2841,
        question: "植物学者，植物研究者",
        choices: ["botanist", "plant scientist", "herbalist", "horticulturist"],
        correctAnswer: "botanist"
    },
    {
       id: 2842,
        question: "慎重な，分別のある",
        choices: ["discreet", "cautious", "prudent", "thoughtful"],
        correctAnswer: "discreet"
    },
    {
       id: 2843,
        question: "母の",
        choices: ["maternal", "motherly", "nurturing", "parental"],
        correctAnswer: "maternal"
    },
    {
       id: 2844,
        question: "連隊",
        choices: ["regiment", "battalion", "troop", "brigade"],
        correctAnswer: "regiment"
    },
    {
       id: 2845,
        question: "密集，充満",
        choices: ["congestion", "overcrowding", "blockage", "clogging"],
        correctAnswer: "congestion"
    },
    {
       id: 2846,
        question: "薄める，希釈する",
        choices: ["dilute", "weaken", "thin", "water down"],
        correctAnswer: "dilute"
    },
    {
       id: 2847,
        question: "を粉々にする",
        choices: ["crumble", "shatter", "break apart", "pulverize"],
        correctAnswer: "crumble"
    },
    {
       id: 2848,
        question: "相互の",
        choices: ["reciprocal", "mutual", "shared", "correlative"],
        correctAnswer: "reciprocal"
    },
    {
       id: 2849,
        question: "Aを解雇する，自由にする",
        choices: ["let A go", "dismiss", "fire", "release"],
        correctAnswer: "let A go"
    },
    {
       id: 2850,
        question: "対決する，向き合う，立ち向かう",
        choices: ["face off", "confront", "stand against", "challenge"],
        correctAnswer: "face off"
    },
    {
       id: 2851,
        question: "偉業，功績",
        choices: ["feat", "achievement", "accomplishment", "triumph"],
        correctAnswer: "feat"
    },
    {
       id: 2852,
        question: "停車場",
        choices: ["depot", "station", "terminal", "stop"],
        correctAnswer: "depot"
    },
    {
       id: 2853,
        question: "二酸化物",
        choices: ["dioxide", "oxide", "carbon dioxide", "compound"],
        correctAnswer: "dioxide"
    },
    {
       id: 2854,
        question: "地方化する",
        choices: ["localize", "regionalize", "customize", "adapt"],
        correctAnswer: "localize"
    },
    {
       id: 2855,
        question: "普通預金，通常の預金",
        choices: ["saving account", "checking account", "deposit account", "investment account"],
        correctAnswer: "saving account"
    },
    {
       id: 2856,
        question: "自己満足の，独りよがりの",
        choices: ["complacent", "self-satisfied", "arrogant", "conceited"],
        correctAnswer: "complacent"
    },
    {
       id: 2857,
        question: "ひねくれた，強情な",
        choices: ["perverse", "stubborn", "obstinate", "contrary"],
        correctAnswer: "perverse"
    },
    {
       id: 2858,
        question: "ひっくり返る，転覆する",
        choices: ["tip over", "overturn", "capsize", "fall over"],
        correctAnswer: "tip over"
    },
    {
       id: 2859,
        question: "出産，分娩",
        choices: ["childbirth", "delivery", "labor", "birth"],
        correctAnswer: "childbirth"
    },
    {
       id: 2860,
        question: "を壊す，解体する",
        choices: ["break down", "dismantle", "destroy", "decompose"],
        correctAnswer: "break down"
    },
    {
       id: 2861,
        question: "機転",
        choices: ["tact", "skill", "ingenuity", "diplomacy"],
        correctAnswer: "tact"
    },
    {
       id: 2862,
        question: "腫瘍",
        choices: ["tumor", "growth", "cyst", "lump"],
        correctAnswer: "tumor"
    },
    {
       id: 2863,
        question: "しそうである，する可能性が高い",
        choices: ["be likely to", "tend to", "prone to", "inclined to"],
        correctAnswer: "be likely to"
    },
    {
       id: 2864,
        question: "継父，義父",
        choices: ["stepfather", "foster father", "guardian", "adoptive father"],
        correctAnswer: "stepfather"
    },
    {
       id: 2865,
        question: "抽象的",
        choices: ["abstraction", "conceptualization", "generalization", "theory"],
        correctAnswer: "abstraction"
    },
    {
       id: 2866,
        question: "本質的な，基本的な",
        choices: ["intrinsic", "essential", "fundamental", "inherent"],
        correctAnswer: "intrinsic"
    },
    {
       id: 2867,
        question: "時期尚早の，早まった",
        choices: ["premature", "early", "untimely", "hasty"],
        correctAnswer: "premature"
    },
    {
       id: 2868,
        question: "人差し指",
        choices: ["forefinger", "index finger", "pointer finger", "first finger"],
        correctAnswer: "forefinger"
    },
    {
       id: 2869,
        question: "ぬか",
        choices: ["bran", "husk", "chaff", "grain skin"],
        correctAnswer: "bran"
    },
    {
       id: 2870,
        question: "神話",
        choices: ["mythology", "legend", "folklore", "myth"],
        correctAnswer: "mythology"
    },
    {
       id: 2871,
        question: "破壊",
        choices: ["ravage", "destruction", "devastation", "ruin"],
        correctAnswer: "ravage"
    },
    {
       id: 2872,
        question: "に下りる，取り組む",
        choices: ["get down to", "start on", "begin with", "tackle"],
        correctAnswer: "get down to"
    },
    {
       id: 2873,
        question: "腎臓",
        choices: ["kidney", "liver", "pancreas", "gallbladder"],
        correctAnswer: "kidney"
    },
    {
       id: 2874,
        question: "急襲する",
        choices: ["swoop", "raid", "attack", "ambush"],
        correctAnswer: "swoop"
    },
    {
       id: 2875,
        question: "なんでも",
        choices: ["whatsoever", "anything", "whatever", "everything"],
        correctAnswer: "whatsoever"
    },
    {
       id: 2876,
        question: "一緒に行く，共に進む",
        choices: ["come along", "join", "accompany", "go together"],
        correctAnswer: "come along"
    },
    {
       id: 2877,
        question: "おもり",
        choices: ["plummet", "weight", "sink", "ballast"],
        correctAnswer: "plummet"
    },
    {
       id: 2878,
        question: "報道者，使者",
        choices: ["herald", "messenger", "reporter", "announcer"],
        correctAnswer: "herald"
    },
    {
       id: 2879,
        question: "悪名高い，有名な",
        choices: ["notorious", "infamous", "renowned", "well-known"],
        correctAnswer: "notorious"
    },
    {
       id: 2880,
        question: "儀礼",
        choices: ["protocol", "etiquette", "ceremony", "ritual"],
        correctAnswer: "protocol"
    },
    {
       id: 2881,
        question: "を遠ざける",
        choices: ["alienate", "separate", "isolate", "repel"],
        correctAnswer: "alienate"
    },
    {
       id: 2882,
        question: "宇宙の，宙域の",
        choices: ["cosmic", "galactic", "stellar", "astronomical"],
        correctAnswer: "cosmic"
    },
    {
       id: 2883,
        question: "を終わらせる，終了させる",
        choices: ["put an end to", "terminate", "cease", "halt"],
        correctAnswer: "put an end to"
    },
    {
       id: 2884,
        question: "騒動，暴動",
        choices: ["tumult", "riot", "uproar", "commotion"],
        correctAnswer: "tumult"
    },
    {
       id: 2885,
        question: "最後まで演じる，遊ぶ，最後まで続ける",
        choices: ["play out", "carry on", "act out", "persist"],
        correctAnswer: "play out"
    },
    {
       id: 2886,
        question: "回顧，回想",
        choices: ["retrospect", "recollection", "remembrance", "reflection"],
        correctAnswer: "retrospect"
    },
    {
       id: 2887,
        question: "を荷造りする，詰める",
        choices: ["pack up", "bundle up", "wrap up", "gather"],
        correctAnswer: "pack up"
    },
    {
       id: 2888,
        question: "各自で",
        choices: ["apiece", "individually", "separately", "personally"],
        correctAnswer: "apiece"
    },
    {
       id: 2889,
        question: "とうまくやっていく，スムーズに進める",
        choices: ["get on with", "get along with", "deal with", "cooperate with"],
        correctAnswer: "get on with"
    },
    {
       id: 2890,
        question: "平凡な，月並みの",
        choices: ["mediocre", "ordinary", "average", "run-of-the-mill"],
        correctAnswer: "mediocre"
    },
    {
       id: 2891,
        question: "名声",
        choices: ["renown", "fame", "glory", "prestige"],
        correctAnswer: "renown"
    },
    {
       id: 2892,
        question: "複雑さ",
        choices: ["intricacy", "complexity", "complication", "elaborateness"],
        correctAnswer: "intricacy"
    },
    {
       id: 2893,
        question: "楽な",
        choices: ["effortless", "easy", "painless", "smooth"],
        correctAnswer: "effortless"
    },
    {
       id: 2894,
        question: "無駄な",
        choices: ["futile", "pointless", "useless", "fruitless"],
        correctAnswer: "futile"
    },
    {
       id: 2895,
        question: "委託する",
        choices: ["entrust", "assign", "delegate", "authorize"],
        correctAnswer: "entrust"
    },
    {
       id: 2896,
        question: "たくましい，強靭な",
        choices: ["robust", "sturdy", "tough", "strong"],
        correctAnswer: "robust"
    },
    {
       id: 2897,
        question: "干ばつ",
        choices: ["drought", "dry spell", "famine", "aridity"],
        correctAnswer: "drought"
    },
    {
       id: 2898,
        question: "尻を叩く",
        choices: ["spank", "slap", "whack", "hit"],
        correctAnswer: "spank"
    },
    {
       id: 2899,
        question: "保証，保障",
        choices: ["warranty", "guarantee", "assurance", "coverage"],
        correctAnswer: "warranty"
    },
    {
       id: 2900,
        question: "を証明する",
        choices: ["attest", "verify", "confirm", "authenticate"],
        correctAnswer: "attest"
    },
    {
       id: 2901,
        question: "蒸発する",
        choices: ["evaporate", "vaporize", "dry up", "disappear"],
        correctAnswer: "evaporate"
    },
    {
       id: 2902,
        question: "きしむ",
        choices: ["squeak", "creak", "grind", "screech"],
        correctAnswer: "squeak"
    },
    {
       id: 2903,
        question: "引き返す",
        choices: ["retrace", "turn back", "reverse", "return"],
        correctAnswer: "retrace"
    },
    {
       id: 2904,
        question: "表示する，示す",
        choices: ["denote", "indicate", "signify", "represent"],
        correctAnswer: "denote"
    },
    {
       id: 2905,
        question: "悪化させる，劣化させる",
        choices: ["aggravate", "worsen", "exacerbate", "intensify"],
        correctAnswer: "aggravate"
    },
    {
       id: 2906,
        question: "人道的な，人道に基づく",
        choices: ["humane", "compassionate", "merciful", "kind"],
        correctAnswer: "humane"
    },
    {
       id: 2907,
        question: "を噛み砕く",
        choices: ["crunch", "chew", "munch", "bite"],
        correctAnswer: "crunch"
    },
    {
       id: 2908,
        question: "強制的な，強い",
        choices: ["forcible", "coercive", "compelling", "forceful"],
        correctAnswer: "forcible"
    },
    {
       id: 2909,
        question: "刻み目",
        choices: ["nick", "notch", "cut", "scratch"],
        correctAnswer: "nick"
    },
    {
       id: 2910,
        question: "拾い読みする，一部読む",
        choices: ["browse", "skim", "scan", "glance"],
        correctAnswer: "browse"
    },
    {
       id: 2911,
        question: "を逮捕する",
        choices: ["apprehend", "arrest", "detain", "capture"],
        correctAnswer: "apprehend"
    },
    {
       id: 2912,
        question: "裁判所",
        choices: ["tribunal", "court", "judiciary", "magistrate"],
        correctAnswer: "tribunal"
    },
    {
       id: 2913,
        question: "陽気に",
        choices: ["gaily", "cheerfully", "joyfully", "merrily"],
        correctAnswer: "gaily"
    },
    {
       id: 2914,
        question: "を取り戻す，回収する",
        choices: ["retrieve", "reclaim", "recover", "regain"],
        correctAnswer: "retrieve"
    },
    {
       id: 2915,
        question: "再発する，繰り返される",
        choices: ["recur", "repeat", "happen again", "reoccur"],
        correctAnswer: "recur"
    },
    {
       id: 2916,
        question: "用語集",
        choices: ["glossary", "dictionary", "lexicon", "terminology"],
        correctAnswer: "glossary"
    },
    {
       id: 2917,
        question: "連携させる，合併する",
        choices: ["affiliate", "associate", "merge", "partner"],
        correctAnswer: "affiliate"
    },
    {
       id: 2918,
        question: "圧縮，ようやく",
        choices: ["compression", "condensation", "compaction", "compression"],
        correctAnswer: "compression"
    },
    {
       id: 2919,
        question: "兵役，徴兵",
        choices: ["military service", "conscription", "draft", "enlistment"],
        correctAnswer: "military service"
    },
    {
       id: 2920,
        question: "反抗的な，挑戦的な",
        choices: ["defiant", "rebellious", "resistant", "challenging"],
        correctAnswer: "defiant"
    },
    {
       id: 2921,
        question: "菌",
        choices: ["fungus", "bacteria", "microbe", "mold"],
        correctAnswer: "fungus"
    },
    {
       id: 2922,
        question: "即興で作る",
        choices: ["improvise", "ad-lib", "spontaneously create", "extemporize"],
        correctAnswer: "improvise"
    },
    {
       id: 2923,
        question: "鈍い，遅い",
        choices: ["sluggish", "slow", "lethargic", "inactive"],
        correctAnswer: "sluggish"
    },
    {
       id: 2924,
        question: "光沢のある，つやのある",
        choices: ["glossy", "shiny", "polished", "luminous"],
        correctAnswer: "glossy"
    },
    {
       id: 2925,
        question: "称賛する",
        choices: ["acclaim", "praise", "applaud", "commend"],
        correctAnswer: "acclaim"
    },
    {
       id: 2926,
        question: "開始",
        choices: ["commencement", "beginning", "initiation", "start"],
        correctAnswer: "commencement"
    },
    {
       id: 2927,
        question: "こん睡状態",
        choices: ["coma", "unconsciousness", "deep sleep", "stupor"],
        correctAnswer: "coma"
    },
    {
       id: 2928,
        question: "侵害する，つけ込む",
        choices: ["trespass", "intrude", "encroach", "violate"],
        correctAnswer: "trespass"
    },
    {
       id: 2929,
        question: "を召集する",
        choices: ["convene", "assemble", "gather", "call together"],
        correctAnswer: "convene"
    },
    {
       id: 2930,
        question: "破片，残骸",
        choices: ["debris", "wreckage", "fragments", "rubble"],
        correctAnswer: "debris"
    },
    {
       id: 2931,
        question: "捕食者",
        choices: ["predator", "hunter", "carnivore", "stalker"],
        correctAnswer: "predator"
    },
    {
       id: 2932,
        question: "規制，制限",
        choices: ["regulatory", "restrictive", "controlling", "governing"],
        correctAnswer: "regulatory"
    },
    {
       id: 2933,
        question: "を診断する",
        choices: ["diagnose", "determine", "analyze", "identify"],
        correctAnswer: "diagnose"
    },
    {
       id: 2934,
        question: "に位置している，に立っている",
        choices: ["be located in", "situated in", "positioned in", "found in"],
        correctAnswer: "be located in"
    },
    {
       id: 2935,
        question: "を展開する，配置する",
        choices: ["deploy", "position", "station", "arrange"],
        correctAnswer: "deploy"
    },
    {
       id: 2936,
        question: "有給休暇，給与付きの休暇",
        choices: ["paid vacation", "leave", "holiday", "time off"],
        correctAnswer: "paid vacation"
    },
    {
       id: 2937,
        question: "恍惚，夢中",
        choices: ["trance", "ecstasy", "daze", "hypnosis"],
        correctAnswer: "trance"
    },
    {
       id: 2938,
        question: "連続した",
        choices: ["consecutive", "successive", "continuous", "unbroken"],
        correctAnswer: "consecutive"
    },
    {
       id: 2939,
        question: "壊滅的な，破壊的な",
        choices: ["devastating", "destructive", "catastrophic", "ruinous"],
        correctAnswer: "devastating"
    },
    {
       id: 2940,
        question: "収容者，被収容者",
        choices: ["inmate", "prisoner", "detainee", "captive"],
        correctAnswer: "inmate"
    },
    {
       id: 2941,
        question: "説明責任",
        choices: ["accountability", "responsibility", "obligation", "duty"],
        correctAnswer: "accountability"
    },
    {
       id: 2942,
        question: "最小限の，最低限の",
        choices: ["minimal", "least", "smallest", "nominal"],
        correctAnswer: "minimal"
    },
    {
       id: 2943,
        question: "炭水化物",
        choices: ["carbohydrate", "protein", "fat", "fiber"],
        correctAnswer: "carbohydrate"
    },
    {
       id: 2944,
        question: "議員",
        choices: ["legislator", "senator", "congressman", "representative"],
        correctAnswer: "legislator"
    },
    {
       id: 2945,
        question: "想像する，思い描く",
        choices: ["envision", "imagine", "foresee", "visualize"],
        correctAnswer: "envision"
    },
    {
       id: 2946,
        question: "神学",
        choices: ["theology", "philosophy", "religion", "doctrine"],
        correctAnswer: "theology"
    },
    {
       id: 2947,
        question: "を批判する，非難する",
        choices: ["critical of", "disapprove of", "oppose", "condemn"],
        correctAnswer: "critical of"
    },
    {
       id: 2948,
        question: "権限，指令",
        choices: ["mandate", "authority", "command", "directive"],
        correctAnswer: "mandate"
    },
    {
       id: 2949,
        question: "規定者",
        choices: ["regulator", "controller", "supervisor", "administrator"],
        correctAnswer: "regulator"
    },
    {
       id: 2950,
        question: "無償で配る，暴露する",
        choices: ["give away", "donate", "distribute", "reveal"],
        correctAnswer: "give away"
    },
    {
       id: 2951,
        question: "指導者，リーダー",
        choices: ["mentor", "advisor", "coach", "guide"],
        correctAnswer: "mentor"
    },
    {
       id: 2952,
        question: "戦術",
        choices: ["tactic", "strategy", "maneuver", "plan"],
        correctAnswer: "tactic"
    },
    {
       id: 2953,
        question: "年会費，年会料",
        choices: ["annual fee", "membership fee", "subscription", "service charge"],
        correctAnswer: "annual fee"
    },
    {
       id: 2954,
        question: "を制定する，法令化する",
        choices: ["enact", "legislate", "establish", "implement"],
        correctAnswer: "enact"
    },
    {
       id: 2955,
        question: "明確にする",
        choices: ["articulate", "express", "clarify", "explain"],
        correctAnswer: "articulate"
    },
    {
       id: 2956,
        question: "目立つ，注目を集める",
        choices: ["stand out", "be prominent", "be noticeable", "be distinct"],
        correctAnswer: "stand out"
    },
    {
       id: 2957,
        question: "頭蓋骨",
        choices: ["skull", "cranium", "head bone", "braincase"],
        correctAnswer: "skull"
    },
    {
       id: 2958,
        question: "候補者",
        choices: ["nominee", "candidate", "applicant", "contestant"],
        correctAnswer: "nominee"
    },
    {
       id: 2959,
        question: "社会規範",
        choices: ["compliance", "ethics", "rules", "regulations"],
        correctAnswer: "compliance"
    },
    {
       id: 2960,
        question: "原産の，原生の",
        choices: ["indigenous", "native", "aboriginal", "endemic"],
        correctAnswer: "indigenous"
    },
    {
       id: 2961,
        question: "流入",
        choices: ["influx", "arrival", "entry", "inflow"],
        correctAnswer: "influx"
    },
    {
       id: 2962,
        question: "壮観",
        choices: ["pageant", "spectacle", "parade", "display"],
        correctAnswer: "pageant"
    },
    {
       id: 2963,
        question: "認識の",
        choices: ["cognitive", "intellectual", "mental", "perceptual"],
        correctAnswer: "cognitive"
    },
    {
       id: 2964,
        question: "どう猛な，恐ろしい",
        choices: ["ferocious", "fierce", "savage", "brutal"],
        correctAnswer: "ferocious"
    },
    {
       id: 2965,
        question: "を誇張する",
        choices: ["overstate", "exaggerate", "inflate", "embellish"],
        correctAnswer: "overstate"
    },
    {
       id: 2966,
        question: "監視，見守り",
        choices: ["surveillance", "monitoring", "observation", "watching"],
        correctAnswer: "surveillance"
    },
    {
       id: 2967,
        question: "法廷",
        choices: ["courtroom", "court", "tribunal", "judiciary"],
        correctAnswer: "courtroom"
    },
    {
       id: 2968,
        question: "資格のある，適格な",
        choices: ["eligible", "qualified", "suitable", "capable"],
        correctAnswer: "eligible"
    },
    {
       id: 2969,
        question: "を切り開く",
        choices: ["slit", "slice", "cut open", "gash"],
        correctAnswer: "slit"
    },
    {
       id: 2970,
        question: "大暴れ，乱闘",
        choices: ["rampage", "riot", "mayhem", "chaos"],
        correctAnswer: "rampage"
    },
    {
       id: 2971,
        question: "活性化させる",
        choices: ["revitalize", "rejuvenate", "energize", "stimulate"],
        correctAnswer: "revitalize"
    },
    {
       id: 2972,
        question: "ぼやけた",
        choices: ["blurry", "hazy", "unclear", "foggy"],
        correctAnswer: "blurry"
    },
    {
       id: 2973,
        question: "を解散する",
        choices: ["disband", "dissolve", "terminate", "scatter"],
        correctAnswer: "disband"
    },
    {
       id: 2974,
        question: "を妨げる",
        choices: ["impede", "hinder", "obstruct", "interfere"],
        correctAnswer: "impede"
    },
    {
       id: 2975,
        question: "近所，近隣",
        choices: ["vicinity", "neighborhood", "proximity", "surroundings"],
        correctAnswer: "vicinity"
    },
    {
       id: 2976,
        question: "読みやすい",
        choices: ["legible", "readable", "clear", "distinct"],
        correctAnswer: "legible"
    },
    {
       id: 2977,
        question: "意気消沈した",
        choices: ["downcast", "dejected", "gloomy", "melancholic"],
        correctAnswer: "downcast"
    },
    {
       id: 2978,
        question: "を興奮させる，燃え上がらせる",
        choices: ["inflame", "ignite", "arouse", "provoke"],
        correctAnswer: "inflame"
    },
    {
       id: 2979,
        question: "で利益を得る，儲かる",
        choices: ["benefit from", "profit from", "gain from", "advantage from"],
        correctAnswer: "benefit from"
    },
    {
       id: 2980,
        question: "散発的に，まばらに",
        choices: ["sporadically", "occasionally", "intermittently", "rarely"],
        correctAnswer: "sporadically"
    },
    {
       id: 2981,
        question: "反対した",
        choices: ["opposed", "resisted", "disagreed", "objected"],
        correctAnswer: "opposed"
    },
    {
       id: 2982,
        question: "改善した",
        choices: ["improved", "enhanced", "better", "developed"],
        correctAnswer: "improved"
    },
    {
       id: 2983,
        question: "頂上に，の上に",
        choices: ["atop", "on top of", "above", "over"],
        correctAnswer: "atop"
    },
    {
       id: 2984,
        question: "をくじく，捻挫する",
        choices: ["sprain", "twist", "wrench", "strain"],
        correctAnswer: "sprain"
    },
    {
       id: 2985,
        question: "日常的に，いつものように",
        choices: ["routinely", "regularly", "habitually", "frequently"],
        correctAnswer: "routinely"
    },
    {
       id: 2986,
        question: "越えて渡る，越えていく",
        choices: ["cross over", "pass over", "go beyond", "traverse"],
        correctAnswer: "cross over"
    },
    {
       id: 2987,
        question: "教育の，指導的な",
        choices: ["instructional", "educational", "pedagogical", "didactic"],
        correctAnswer: "instructional"
    },
    {
       id: 2988,
        question: "人口統計の，人口統計学の",
        choices: ["demographic", "statistical", "census-related", "population-based"],
        correctAnswer: "demographic"
    },
    {
       id: 2989,
        question: "政治的に",
        choices: ["politically", "governmentally", "diplomatically", "administratively"],
        correctAnswer: "politically"
    },
    {
       id: 2990,
        question: "宮殿のような，豪華な",
        choices: ["palatial", "luxurious", "opulent", "grandiose"],
        correctAnswer: "palatial"
    },
    {
       id: 2991,
        question: "信じられないほど",
        choices: ["incredibly", "unbelievably", "astonishingly", "amazingly"],
        correctAnswer: "incredibly"
    },
    {
       id: 2992,
        question: "地形",
        choices: ["terrain", "landscape", "topography", "geography"],
        correctAnswer: "terrain"
    },
    {
       id: 2993,
        question: "可用性，利用可能性",
        choices: ["availability", "accessibility", "usability", "feasibility"],
        correctAnswer: "availability"
    },
    {
       id: 2994,
        question: "自尊心",
        choices: ["self-esteem", "self-worth", "dignity", "confidence"],
        correctAnswer: "self-esteem"
    },
    {
       id: 2995,
        question: "信頼性",
        choices: ["reliability", "dependability", "trustworthiness", "credibility"],
        correctAnswer: "reliability"
    },
    {
       id: 2996,
        question: "遅れを取り戻す，追いつく，遅延を補う",
        choices: ["catch up", "make up for", "recover", "keep pace with"],
        correctAnswer: "catch up"
    },
    {
       id: 2997,
        question: "革新的な",
        choices: ["innovative", "cutting-edge", "groundbreaking", "progressive"],
        correctAnswer: "innovative"
    },
    {
       id: 2998,
        question: "短期の",
        choices: ["short-term", "temporary", "brief", "transient"],
        correctAnswer: "short-term"
    },
    {
       id: 2999,
        question: "皮肉なことに，逆説的に",
        choices: ["ironically", "sarcastically", "paradoxically", "contradictorily"],
        correctAnswer: "ironically"
    },
    {
       id: 3000,
        question: "擦り切れる，徐々に減る",
        choices: ["wear off", "fade away", "diminish", "erode"],
        correctAnswer: "wear off"
    },
    {
       id: 3001,
        question: "抜け穴、例外や逃げ道",
        choices: ["loophole", "exception", "gap", "escape route"],
        correctAnswer: "loophole"
    },
    {
       id: 3002,
        question: "脱水する，水を抜く",
        choices: ["dehydrate", "desiccate", "dry out", "evaporate"],
        correctAnswer: "dehydrate"
    },
    {
       id: 3003,
        question: "いらだたせる，怒らせる",
        choices: ["annoy", "irritate", "bother", "frustrate"],
        correctAnswer: "annoy"
    },
    {
       id: 3004,
        question: "健全な，健康的な",
        choices: ["wholesome", "healthy", "nutritious", "beneficial"],
        correctAnswer: "wholesome"
    },
    {
       id: 3005,
        question: "控える，慎む",
        choices: ["abstain", "refrain", "avoid", "withhold"],
        correctAnswer: "abstain"
    },
    {
       id: 3006,
        question: "開示",
        choices: ["disclosure", "revelation", "exposure", "announcement"],
        correctAnswer: "disclosure"
    },
    {
       id: 3007,
        question: "燻蒸する",
        choices: ["fumigate", "disinfect", "sanitize", "sterilize"],
        correctAnswer: "fumigate"
    },
    {
       id: 3008,
        question: "を恥ずかしがらせる，を恥じさせる",
        choices: ["embarrass", "humiliate", "shame", "disgrace"],
        correctAnswer: "embarrass"
    },
    {
       id: 3009,
        question: "イライラさせる，怒らせる",
        choices: ["irritate", "annoy", "agitate", "exasperate"],
        correctAnswer: "irritate"
    },
    {
       id: 3010,
        question: "解体する",
        choices: ["tear down", "demolish", "dismantle", "deconstruct"],
        correctAnswer: "tear down"
    },
    {
       id: 3011,
        question: "からかう",
        choices: ["tease", "mock", "ridicule", "taunt"],
        correctAnswer: "tease"
    },
    {
       id: 3012,
        question: "ささやく，を耳打ちする",
        choices: ["whisper", "murmur", "mutter", "hiss"],
        correctAnswer: "whisper"
    },
    {
       id: 3013,
        question: "に対処する，に対応する",
        choices: ["cope with", "deal with", "handle", "manage"],
        correctAnswer: "cope with"
    },
    {
       id: 3014,
        question: "咳払いする",
        choices: ["cough up", "clear throat", "expectorate", "spit out"],
        correctAnswer: "cough up"
    },
    {
       id: 3015,
        question: "恥じて",
        choices: ["ashamed", "embarrassed", "guilty", "humiliated"],
        correctAnswer: "ashamed"
    },
    {
       id: 3016,
        question: "中毒性の、依存性の",
        choices: ["addictive", "habit-forming", "compulsive", "dependent"],
        correctAnswer: "addictive"
    },
    {
       id: 3017,
        question: "衝動，衝力",
        choices: ["impulse", "urge", "instinct", "compulsion"],
        correctAnswer: "impulse"
    },
    {
       id: 3018,
        question: "妊娠",
        choices: ["maternity", "pregnancy", "motherhood", "gestation"],
        correctAnswer: "maternity"
    },
    {
       id: 3019,
        question: "不気味な，気味が悪い",
        choices: ["eerie", "spooky", "creepy", "ghostly"],
        correctAnswer: "eerie"
    },
    {
       id: 3020,
        question: "適切な，ふさわしい",
        choices: ["proper", "suitable", "appropriate", "fitting"],
        correctAnswer: "proper"
    },
    {
       id: 3021,
        question: "従来の，伝統的な",
        choices: ["conventional", "traditional", "customary", "orthodox"],
        correctAnswer: "conventional"
    },
    {
       id: 3022,
        question: "にくっつく",
        choices: ["adhere to", "stick to", "cling to", "attach to"],
        correctAnswer: "adhere to"
    },
    {
       id: 3023,
        question: "作り上げる，でっち上げる",
        choices: ["fabricate", "falsify", "forge", "manufacture"],
        correctAnswer: "fabricate"
    },
    {
       id: 3024,
        question: "扇動する",
        choices: ["instigate", "provoke", "incite", "agitate"],
        correctAnswer: "instigate"
    },
    {
       id: 3025,
        question: "ためらう，躊躇する",
        choices: ["hesitate", "pause", "waver", "doubt"],
        correctAnswer: "hesitate"
    },
    {
       id: 3026,
        question: "を構成する，作曲する",
        choices: ["compose", "constitute", "form", "arrange"],
        correctAnswer: "compose"
    },
    {
       id: 3027,
        question: "財産，資産",
        choices: ["estate", "property", "assets", "inheritance"],
        correctAnswer: "estate"
    },
    {
       id: 3028,
        question: "考え，意見",
        choices: ["notion", "idea", "concept", "belief"],
        correctAnswer: "notion"
    },
    {
       id: 3029,
        question: "明らかにする",
        choices: ["unveil", "reveal", "disclose", "expose"],
        correctAnswer: "unveil"
    },
    {
       id: 3030,
        question: "和らげる，軽減する",
        choices: ["alleviate", "relieve", "ease", "mitigate"],
        correctAnswer: "alleviate"
    },
    {
       id: 3031,
        question: "を中止する",
        choices: ["call off", "cancel", "abort", "halt"],
        correctAnswer: "call off"
    },
    {
       id: 3032,
        question: "漂流/流れる",
        choices: ["drift", "float", "glide", "flow"],
        correctAnswer: "drift"
    },
    {
       id: 3033,
        question: "特徴/を目玉とする",
        choices: ["feature", "characteristic", "highlight", "aspect"],
        correctAnswer: "feature"
    },
    {
       id: 3034,
        question: "敵",
        choices: ["foe", "enemy", "rival", "opponent"],
        correctAnswer: "foe"
    },
    {
       id: 3035,
        question: "変更",
        choices: ["alteration", "modification", "adjustment", "revision"],
        correctAnswer: "alteration"
    },
    {
       id: 3036,
        question: "勃発する",
        choices: ["break out", "erupt", "explode", "flare up"],
        correctAnswer: "break out"
    },
    {
       id: 3037,
        question: "軌道，軌跡",
        choices: ["orbit", "trajectory", "path", "course"],
        correctAnswer: "orbit"
    },
    {
       id: 3038,
        question: "検査する",
        choices: ["inspect", "examine", "analyze", "check"],
        correctAnswer: "inspect"
    },
    {
       id: 3039,
        question: "楽しませる，娯楽を提供する",
        choices: ["amuse", "entertain", "delight", "cheer"],
        correctAnswer: "amuse"
    },
    {
       id: 3040,
        question: "魅力、引力",
        choices: ["charm", "attraction", "charisma", "allure"],
        correctAnswer: "charm"
    },
    {
       id: 3041,
        question: "資産，財産",
        choices: ["asset", "property", "estate", "possession"],
        correctAnswer: "asset"
    },
    {
       id: 3042,
        question: "消える，消えていく",
        choices: ["fade out", "disappear", "vanish", "dissolve"],
        correctAnswer: "fade out"
    },
    {
       id: 3043,
        question: "拡大する，増大する",
        choices: ["magnify", "enlarge", "amplify", "expand"],
        correctAnswer: "magnify"
    },
    {
       id: 3044,
        question: "試合，競技",
        choices: ["bout", "match", "contest", "game"],
        correctAnswer: "bout"
    },
    {
       id: 3045,
        question: "洗練された、高雅な",
        choices: ["sophisticated", "elegant", "refined", "cultured"],
        correctAnswer: "sophisticated"
    },
    {
       id: 3046,
        question: "局",
        choices: ["bureau", "department", "office", "division"],
        correctAnswer: "bureau"
    },
    {
       id: 3047,
        question: "混乱させる",
        choices: ["disrupt", "disturb", "interrupt", "confuse"],
        correctAnswer: "disrupt"
    },
    {
       id: 3048,
        question: "争議/論争する",
        choices: ["dispute", "debate", "argument", "controversy"],
        correctAnswer: "dispute"
    },
    {
       id: 3049,
        question: "友好的な",
        choices: ["amicable", "friendly", "cordial", "harmonious"],
        correctAnswer: "amicable"
    },
    {
       id: 3050,
        question: "芽，新芽",
        choices: ["sprout", "shoot", "bud", "seedling"],
        correctAnswer: "sprout"
    },
    {
       id: 3051,
        question: "を捨て去る，放棄する",
        choices: ["abandon", "discard", "forsake", "desert"],
        correctAnswer: "abandon"
    },
    {
       id: 3052,
        question: "気難しい",
        choices: ["grumpy", "moody", "irritable", "cranky"],
        correctAnswer: "grumpy"
    },
    {
       id: 3053,
        question: "おしゃべり",
        choices: ["chatter", "gossip", "babble", "talk"],
        correctAnswer: "chatter"
    },
    {
       id: 3054,
        question: "不機嫌な",
        choices: ["grouchy", "grumpy", "sullen", "moody"],
        correctAnswer: "grouchy"
    },
    {
       id: 3055,
        question: "関連のある，適切な",
        choices: ["relevant", "related", "pertinent", "applicable"],
        correctAnswer: "relevant"
    },
    {
       id: 3056,
        question: "無罪宣告する、無罪を証明する",
        choices: ["acquit", "exonerate", "pardon", "absolve"],
        correctAnswer: "acquit"
    },
    {
       id: 3057,
        question: "専念/ゆだねる",
        choices: ["commit", "dedicate", "devote", "entrust"],
        correctAnswer: "commit"
    },
    {
       id: 3058,
        question: "止まり木",
        choices: ["perch", "roost", "nest", "branch"],
        correctAnswer: "perch"
    },
    {
       id: 3059,
        question: "無駄に，軽々しく",
        choices: ["in vain", "uselessly", "pointlessly", "futilely"],
        correctAnswer: "in vain"
    },
    {
       id: 3060,
        question: "名目上の、形式上の",
        choices: ["nominal", "token", "symbolic", "titular"],
        correctAnswer: "nominal"
    },
    {
       id: 3061,
        question: "抑える，抑圧する",
        choices: ["suppress", "restrain", "repress", "control"],
        correctAnswer: "suppress"
    },
    {
       id: 3062,
        question: "幹",
        choices: ["stem", "trunk", "branch", "root"],
        correctAnswer: "stem"
    },
    {
       id: 3063,
        question: "半透明の、透けて見える",
        choices: ["translucent", "transparent", "opaque", "glassy"],
        correctAnswer: "translucent"
    },
    {
       id: 3064,
        question: "賢明な",
        choices: ["judicious", "wise", "prudent", "sensible"],
        correctAnswer: "judicious"
    },
    {
       id: 3065,
        question: "軸",
        choices: ["axis", "core", "pivot", "center"],
        correctAnswer: "axis"
    },
    {
       id: 3066,
        question: "がわかる",
        choices: ["figure out", "understand", "comprehend", "realize"],
        correctAnswer: "figure out"
    },
    {
       id: 3067,
        question: "落ち着かせる，安定させる",
        choices: ["soothe", "calm", "ease", "relax"],
        correctAnswer: "soothe"
    },
    {
       id: 3068,
        question: "分，議事録",
        choices: ["minute", "record", "memo", "document"],
        correctAnswer: "minute"
    },
    {
       id: 3069,
        question: "賛歌，賛美歌",
        choices: ["anthem", "hymn", "song", "chorus"],
        correctAnswer: "anthem"
    },
    {
       id: 3070,
        question: "表面的な",
        choices: ["superficial", "shallow", "external", "cosmetic"],
        correctAnswer: "superficial"
    },
    {
       id: 3071,
        question: "奇妙な，変わった",
        choices: ["peculiar", "odd", "strange", "bizarre"],
        correctAnswer: "peculiar"
    },
    {
       id: 3072,
        question: "絞る，押しつぶす",
        choices: ["squeeze", "press", "crush", "compress"],
        correctAnswer: "squeeze"
    },
    {
       id: 3073,
        question: "拡大する，広がる",
        choices: ["expand", "extend", "enlarge", "increase"],
        correctAnswer: "expand"
    },
    {
       id: 3074,
        question: "風刺画",
        choices: ["caricature", "cartoon", "parody", "satire"],
        correctAnswer: "caricature"
    },
    {
       id: 3075,
        question: "実行可能な，可能性のある",
        choices: ["feasible", "possible", "achievable", "practical"],
        correctAnswer: "feasible"
    },
    {
       id: 3076,
        question: "時代遅れの",
        choices: ["outdated", "obsolete", "old-fashioned", "antiquated"],
        correctAnswer: "outdated"
    },
    {
       id: 3077,
        question: "を無視する，放っておく",
        choices: ["neglect", "ignore", "overlook", "disregard"],
        correctAnswer: "neglect"
    },
    {
       id: 3078,
        question: "回避/避ける",
        choices: ["evasion", "avoidance", "escape", "elusion"],
        correctAnswer: "evasion"
    },
    {
       id: 3079,
        question: "揺らぐ、安定していない、ぐらつく",
        choices: ["waver", "hesitate", "falter", "stagger"],
        correctAnswer: "waver"
    },
    {
       id: 3080,
        question: "乗り越える",
        choices: ["surmount", "overcome", "conquer", "prevail"],
        correctAnswer: "surmount"
    },
    {
       id: 3081,
        question: "年代順の",
        choices: ["chronological", "historical", "sequential", "ordered"],
        correctAnswer: "chronological"
    },
    {
       id: 3082,
        question: "忘れっぽい，物忘れの激しい",
        choices: ["oblivious", "forgetful", "unaware", "heedless"],
        correctAnswer: "oblivious"
    },
    {
       id: 3083,
        question: "丈夫な",
        choices: ["hardy", "strong", "robust", "sturdy"],
        correctAnswer: "hardy"
    },
    {
       id: 3084,
        question: "通勤する，取り替える",
        choices: ["commute", "travel", "replace", "substitute"],
        correctAnswer: "commute"
    },
    {
       id: 3085,
        question: "瞬きをする，瞬間を過ごす",
        choices: ["blink", "wink", "squint", "glance"],
        correctAnswer: "blink"
    },
    {
       id: 3086,
        question: "丁寧な",
        choices: ["courteous", "polite", "respectful", "gracious"],
        correctAnswer: "courteous"
    },
    {
       id: 3087,
        question: "暗黙の",
        choices: ["implicit", "tacit", "unstated", "understood"],
        correctAnswer: "implicit"
    },
    {
       id: 3088,
        question: "平凡な，普通の",
        choices: ["mundane", "ordinary", "common", "usual"],
        correctAnswer: "mundane"
    },
    {
       id: 3089,
        question: "区画",
        choices: ["compartment", "section", "division", "segment"],
        correctAnswer: "compartment"
    },
    {
       id: 3090,
        question: "訓戒する，警告する",
        choices: ["admonish", "warn", "caution", "reprimand"],
        correctAnswer: "admonish"
    },
    {
       id: 3091,
        question: "のせいにする，責任を転嫁する",
        choices: ["ascribe", "blame", "attribute", "assign"],
        correctAnswer: "ascribe"
    },
    {
       id: 3092,
        question: "率直な、正直な",
        choices: ["candid", "honest", "frank", "open"],
        correctAnswer: "candid"
    },
    {
       id: 3093,
        question: "樽",
        choices: ["barrel", "cask", "drum", "keg"],
        correctAnswer: "barrel"
    },
    {
       id: 3094,
        question: "目をくらます",
        choices: ["daze", "dazzle", "blind", "stun"],
        correctAnswer: "daze"
    },
    {
       id: 3095,
        question: "を構成する，作曲する",
        choices: ["compose", "construct", "arrange", "orchestrate"],
        correctAnswer: "compose"
    },
    {
       id: 3096,
        question: "手数料，委任状",
        choices: ["commission", "fee", "contract", "assignment"],
        correctAnswer: "commission"
    },
    {
       id: 3097,
        question: "中断する",
        choices: ["hang up", "pause", "halt", "suspend"],
        correctAnswer: "hang up"
    },
    {
       id: 3098,
        question: "調査，研究",
        choices: ["investigation", "analysis", "study", "examination"],
        correctAnswer: "investigation"
    },
    {
       id: 3099,
        question: "臆病な",
        choices: ["cowardly", "timid", "fearful", "nervous"],
        correctAnswer: "cowardly"
    },
    {
       id: 3100,
        question: "停止",
        choices: ["standstill", "halt", "pause", "stop"],
        correctAnswer: "standstill"
    },
    {
       id: 3101,
        question: "弾薬",
        choices: ["ammunition", "bullet", "shell", "cartridge"],
        correctAnswer: "ammunition"
    },
    {
       id: 3102,
        question: "に付き添う，に同行する",
        choices: ["accompany", "escort", "follow", "guide"],
        correctAnswer: "accompany"
    },
    {
       id: 3103,
        question: "和らげる，軽減する",
        choices: ["relieve", "ease", "alleviate", "soothe"],
        correctAnswer: "relieve"
    },
    {
       id: 3104,
        question: "親族，家族",
        choices: ["kinship", "relationship", "family", "ancestry"],
        correctAnswer: "kinship"
    },
    {
       id: 3105,
        question: "群れ，集団",
        choices: ["troop", "group", "herd", "crowd"],
        correctAnswer: "troop"
    },
    {
       id: 3106,
        question: "証明する",
        choices: ["certify", "confirm", "verify", "validate"],
        correctAnswer: "certify"
    },
    {
       id: 3107,
        question: "暴露，さらすこと",
        choices: ["exposure", "revelation", "disclosure", "unveiling"],
        correctAnswer: "exposure"
    },
    {
       id: 3108,
        question: "愛らしい",
        choices: ["adorable", "cute", "charming", "lovely"],
        correctAnswer: "adorable"
    },
    {
       id: 3109,
        question: "褒める，賞賛する",
        choices: ["commend", "praise", "applaud", "laud"],
        correctAnswer: "commend"
    },
    {
       id: 3110,
        question: "微妙な，繊細な",
        choices: ["subtle", "delicate", "fine", "refined"],
        correctAnswer: "subtle"
    },
    {
       id: 3111,
        question: "任命する，指定する",
        choices: ["appoint", "assign", "designate", "nominate"],
        correctAnswer: "appoint"
    },
    {
       id: 3112,
        question: "またがる，乗り越える",
        choices: ["straddle", "span", "cross", "bridge"],
        correctAnswer: "straddle"
    },
    {
       id: 3113,
        question: "礼儀，可否",
        choices: ["propriety", "etiquette", "manners", "decorum"],
        correctAnswer: "propriety"
    },
    {
       id: 3114,
        question: "監査人",
        choices: ["auditor", "inspector", "examiner", "reviewer"],
        correctAnswer: "auditor"
    },
    {
       id: 3115,
        question: "眉をひそめる",
        choices: ["frown upon", "disapprove", "scowl", "grimace"],
        correctAnswer: "frown upon"
    },
    {
       id: 3116,
        question: "を勇気づける，励ます",
        choices: ["encourage", "inspire", "motivate", "cheer up"],
        correctAnswer: "encourage"
    },
    {
       id: 3117,
        question: "入隊する，参加する",
        choices: ["enlist", "join", "recruit", "sign up"],
        correctAnswer: "enlist"
    },
    {
       id: 3118,
        question: "旅程",
        choices: ["itinerary", "schedule", "agenda", "plan"],
        correctAnswer: "itinerary"
    },
    {
       id: 3119,
        question: "耕作する，耕す",
        choices: ["cultivate", "plow", "farm", "till"],
        correctAnswer: "cultivate"
    },
    {
       id: 3120,
        question: "図",
        choices: ["diagram", "chart", "graph", "illustration"],
        correctAnswer: "diagram"
    },
    {
       id: 3121,
        question: "代わりの",
        choices: ["alternate", "substitute", "replacement", "alternative"],
        correctAnswer: "alternate"
    },
    {
       id: 3122,
        question: "見解，見通し",
        choices: ["perspective", "viewpoint", "outlook", "opinion"],
        correctAnswer: "perspective"
    },
    {
       id: 3123,
        question: "見えない，不可視な",
        choices: ["invisible", "hidden", "concealed", "obscured"],
        correctAnswer: "invisible"
    },
    {
       id: 3124,
        question: "懐かしい",
        choices: ["nostalgic", "sentimental", "longing", "wistful"],
        correctAnswer: "nostalgic"
    },
    {
       id: 3125,
        question: "爆発，爆破",
        choices: ["outburst", "explosion", "eruption", "detonation"],
        correctAnswer: "outburst"
    },
    {
       id: 3126,
        question: "不吉な，不運な",
        choices: ["ominous", "sinister", "foreboding", "menacing"],
        correctAnswer: "ominous"
    },
    {
       id: 3127,
        question: "負担，重荷",
        choices: ["burden", "load", "weight", "strain"],
        correctAnswer: "burden"
    },
    {
       id: 3128,
        question: "提唱する，主張する",
        choices: ["advocate", "promote", "support", "endorse"],
        correctAnswer: "advocate"
    },
    {
       id: 3129,
        question: "価値のある",
        choices: ["worthwhile", "valuable", "meaningful", "rewarding"],
        correctAnswer: "worthwhile"
    },
    {
       id: 3130,
        question: "カリカリの，カタい",
        choices: ["crunchy", "crispy", "brittle", "hard"],
        correctAnswer: "crunchy"
    },
    {
       id: 3131,
        question: "改修する，改装する",
        choices: ["renovate", "remodel", "restore", "refurbish"],
        correctAnswer: "renovate"
    },
    {
       id: 3132,
        question: "片付ける",
        choices: ["tidy up", "clean up", "organize", "arrange"],
        correctAnswer: "tidy up"
    },
    {
       id: 3133,
        question: "遵守する",
        choices: ["abide by", "comply with", "follow", "obey"],
        correctAnswer: "abide by"
    },
    {
       id: 3134,
        question: "無知な、知識のない",
        choices: ["clueless", "ignorant", "uninformed", "unaware"],
        correctAnswer: "clueless"
    },
    {
       id: 3135,
        question: "雑多な",
        choices: ["miscellaneous", "various", "assorted", "diverse"],
        correctAnswer: "miscellaneous"
    },
    {
       id: 3136,
        question: "傷",
        choices: ["wound", "injury", "scar", "cut"],
        correctAnswer: "wound"
    },
    {
       id: 3137,
        question: "厳しく叱る，叱責する",
        choices: ["reprimand", "scold", "rebuke", "chastise"],
        correctAnswer: "reprimand"
    },
    {
       id: 3138,
        question: "条約",
        choices: ["treaty", "agreement", "pact", "contract"],
        correctAnswer: "treaty"
    },
    {
       id: 3139,
        question: "効能，効果",
        choices: ["efficacy", "effectiveness", "efficiency", "potency"],
        correctAnswer: "efficacy"
    },
    {
       id: 3140,
        question: "相互の，互いの",
        choices: ["mutual", "reciprocal", "shared", "common"],
        correctAnswer: "mutual"
    },
    {
       id: 3141,
        question: "忠実度",
        choices: ["fidelity", "loyalty", "faithfulness", "devotion"],
        correctAnswer: "fidelity"
    },
    {
       id: 3142,
        question: "分解検査する，分析検査する",
        choices: ["overhaul", "inspect", "examine", "analyze"],
        correctAnswer: "overhaul"
    },
    {
       id: 3143,
        question: "を吸収する，吸い取る",
        choices: ["absorb", "soak up", "assimilate", "ingest"],
        correctAnswer: "absorb"
    },
    {
       id: 3144,
        question: "現れる",
        choices: ["emerge", "appear", "arise", "come out"],
        correctAnswer: "emerge"
    },
    {
       id: 3145,
        question: "妨げる",
        choices: ["hinder", "impede", "obstruct", "prevent"],
        correctAnswer: "hinder"
    },
    {
       id: 3146,
        question: "倒れる",
        choices: ["topple", "collapse", "fall over", "overturn"],
        correctAnswer: "topple"
    },
    {
       id: 3147,
        question: "儀式，式典",
        choices: ["ritual", "ceremony", "rite", "custom"],
        correctAnswer: "ritual"
    },
    {
       id: 3148,
        question: "雑用",
        choices: ["chore", "task", "duty", "job"],
        correctAnswer: "chore"
    },
    {
       id: 3149,
        question: "つぶやく",
        choices: ["mumble", "mutter", "whisper", "grumble"],
        correctAnswer: "mumble"
    },
    {
       id: 3150,
        question: "に帰する",
        choices: ["attribute", "ascribe", "assign", "credit"],
        correctAnswer: "attribute"
    },
    {
       id: 3151,
        question: "調味料",
        choices: ["condiment", "seasoning", "spice", "flavoring"],
        correctAnswer: "condiment"
    },
    {
       id: 3152,
        question: "解決する，を決心する",
        choices: ["resolve", "settle", "determine", "decide"],
        correctAnswer: "resolve"
    },
    {
       id: 3153,
        question: "水膨れ、水疱",
        choices: ["blister", "boil", "bubble", "sore"],
        correctAnswer: "blister"
    },
    {
       id: 3154,
        question: "爆風，突風",
        choices: ["blast", "gust", "shockwave", "explosion"],
        correctAnswer: "blast"
    },
    {
       id: 3155,
        question: "寸前，境界",
        choices: ["verge", "brink", "edge", "threshold"],
        correctAnswer: "verge"
    },
    {
       id: 3156,
        question: "陽気な",
        choices: ["jovial", "cheerful", "merry", "joyful"],
        correctAnswer: "jovial"
    },
    {
       id: 3157,
        question: "吸引",
        choices: ["suction", "vacuum", "inhale", "absorption"],
        correctAnswer: "suction"
    },
    {
       id: 3158,
        question: "妄想",
        choices: ["delusion", "hallucination", "illusion", "fantasy"],
        correctAnswer: "delusion"
    },
    {
       id: 3159,
        question: "等しい，同等の",
        choices: ["equivalent", "equal", "same", "comparable"],
        correctAnswer: "equivalent"
    },
    {
       id: 3160,
        question: "がっかりさせる，失望させる",
        choices: ["dismay", "disappoint", "discourage", "let down"],
        correctAnswer: "dismay"
    },
    {
       id: 3161,
        question: "想定，仮説",
        choices: ["assumption", "hypothesis", "presumption", "theory"],
        correctAnswer: "assumption"
    },
    {
       id: 3162,
        question: "ねじれ/より合わせる",
        choices: ["twist", "coil", "bend", "wrap"],
        correctAnswer: "twist"
    },
    {
       id: 3163,
        question: "改ざんする",
        choices: ["falsify", "forge", "alter", "manipulate"],
        correctAnswer: "falsify"
    },
    {
       id: 3164,
        question: "乱雑にする，乱す",
        choices: ["jumble", "disorganize", "scatter", "mess up"],
        correctAnswer: "jumble"
    },
    {
       id: 3165,
        question: "糸",
        choices: ["thread", "string", "fiber", "yarn"],
        correctAnswer: "thread"
    },
    {
       id: 3166,
        question: "貴族",
        choices: ["aristocrat", "noble", "duke", "lord"],
        correctAnswer: "aristocrat"
    },
    {
       id: 3167,
        question: "一目見る/一目",
        choices: ["glance", "peek", "glimpse", "scan"],
        correctAnswer: "glance"
    },
    {
       id: 3168,
        question: "滑る",
        choices: ["glide", "slide", "slip", "skid"],
        correctAnswer: "glide"
    },
    {
       id: 3169,
        question: "を横切る，出くわす",
        choices: ["come across", "run into", "encounter", "stumble upon"],
        correctAnswer: "come across"
    },
    {
       id: 3170,
        question: "締め付ける",
        choices: ["tighten up", "secure", "fasten", "clamp"],
        correctAnswer: "tighten up"
    },
    {
       id: 3171,
        question: "引用/他人の言葉や文章を取り上げる",
        choices: ["citation", "quote", "reference", "excerpt"],
        correctAnswer: "citation"
    },
    {
       id: 3172,
        question: "換気する",
        choices: ["ventilate", "air out", "refresh", "circulate"],
        correctAnswer: "ventilate"
    },
    {
       id: 3173,
        question: "生存できる，生き抜く",
        choices: ["viable", "survivable", "sustainable", "endurable"],
        correctAnswer: "viable"
    },
    {
       id: 3174,
        question: "多様化する，異なる",
        choices: ["vary", "diversify", "differ", "fluctuate"],
        correctAnswer: "vary"
    },
    {
       id: 3175,
        question: "一時的な",
        choices: ["transient", "temporary", "momentary", "short-lived"],
        correctAnswer: "transient"
    },
    {
       id: 3176,
        question: "危険な",
        choices: ["perilous", "dangerous", "hazardous", "risky"],
        correctAnswer: "perilous"
    },
    {
       id: 3177,
        question: "正面，真正面",
        choices: ["facade", "front", "face", "exterior"],
        correctAnswer: "facade"
    },
    {
       id: 3178,
        question: "連邦の，連邦制の",
        choices: ["federal", "national", "governmental", "central"],
        correctAnswer: "federal"
    },
    {
       id: 3179,
        question: "武装",
        choices: ["armament", "weaponry", "arsenal", "military equipment"],
        correctAnswer: "armament"
    },
    {
       id: 3180,
        question: "浸透する、染み込む、広がる",
        choices: ["permeate", "absorb", "diffuse", "saturate"],
        correctAnswer: "permeate"
    },
    {
       id: 3181,
        question: "戦闘，闘争",
        choices: ["combat", "battle", "conflict", "warfare"],
        correctAnswer: "combat"
    },
    {
       id: 3182,
        question: "かろうじて，やっと",
        choices: ["barely", "hardly", "scarcely", "narrowly"],
        correctAnswer: "barely"
    },
    {
       id: 3183,
        question: "を引き継ぐ/継承",
        choices: ["take over", "inherit", "succeed", "assume"],
        correctAnswer: "take over"
    },
    {
       id: 3184,
        question: "降格",
        choices: ["demotion", "downgrade", "relegation", "degradation"],
        correctAnswer: "demotion"
    },
    {
       id: 3185,
        question: "聞くことのできる",
        choices: ["audible", "hearable", "detectable", "perceptible"],
        correctAnswer: "audible"
    },
    {
       id: 3186,
        question: "観察，観測",
        choices: ["observation", "monitoring", "surveillance", "examination"],
        correctAnswer: "observation"
    },
    {
       id: 3187,
        question: "統一された",
        choices: ["unified", "integrated", "consolidated", "merged"],
        correctAnswer: "unified"
    },
    {
       id: 3188,
        question: "統合する、まとめる",
        choices: ["synthesize", "combine", "integrate", "assemble"],
        correctAnswer: "synthesize"
    },
    {
       id: 3189,
        question: "偏見",
        choices: ["prejudice", "bias", "discrimination", "stereotype"],
        correctAnswer: "prejudice"
    },
    {
       id: 3190,
        question: "軸",
        choices: ["shaft", "axis", "pivot", "spindle"],
        correctAnswer: "shaft"
    },
    {
       id: 3191,
        question: "拭く",
        choices: ["wipe up", "clean", "mop", "scrub"],
        correctAnswer: "wipe up"
    },
    {
       id: 3192,
        question: "つかむ，把握する",
        choices: ["grasp", "grab", "seize", "clutch"],
        correctAnswer: "grasp"
    },
    {
       id: 3193,
        question: "肩をすくめる，無視する",
        choices: ["shrug", "ignore", "dismiss", "neglect"],
        correctAnswer: "shrug"
    },
    {
       id: 3194,
        question: "知人，友人",
        choices: ["acquaintance", "friend", "colleague", "companion"],
        correctAnswer: "acquaintance"
    },
    {
       id: 3195,
        question: "弾力性のある、柔軟な",
        choices: ["resilient", "flexible", "adaptable", "pliable"],
        correctAnswer: "resilient"
    },
    {
       id: 3196,
        question: "区別，相違",
        choices: ["distinction", "difference", "contrast", "divergence"],
        correctAnswer: "distinction"
    },
    {
       id: 3197,
        question: "外見上の，明白な",
        choices: ["apparent", "evident", "obvious", "clear"],
        correctAnswer: "apparent"
    },
    {
       id: 3198,
        question: "適切で，十分な",
        choices: ["adequate", "sufficient", "appropriate", "proper"],
        correctAnswer: "adequate"
    },
    {
       id: 3199,
        question: "にしがみつく",
        choices: ["cling to", "hold onto", "grip", "grasp"],
        correctAnswer: "cling to"
    },
    {
       id: 3200,
        question: "注入する",
        choices: ["inject", "infuse", "administer", "introduce"],
        correctAnswer: "inject"
    },
    {
       id: 3201,
        question: "比率",
        choices: ["ratio", "proportion", "fraction", "percentage"],
        correctAnswer: "ratio"
    },
    {
       id: 3202,
        question: "同盟，協定",
        choices: ["alliance", "coalition", "pact", "treaty"],
        correctAnswer: "alliance"
    },
    {
       id: 3203,
        question: "高級な",
        choices: ["upscale", "luxurious", "premium", "exclusive"],
        correctAnswer: "upscale"
    },
    {
       id: 3204,
        question: "回転軸，中心",
        choices: ["pivot", "axis", "fulcrum", "hub"],
        correctAnswer: "pivot"
    },
    {
       id: 3205,
        question: "頂上，山頂",
        choices: ["summit", "peak", "top", "apex"],
        correctAnswer: "summit"
    },
    {
       id: 3206,
        question: "扱いやすい",
        choices: ["docile", "obedient", "compliant", "manageable"],
        correctAnswer: "docile"
    },
    {
       id: 3207,
        question: "安易な，手軽な",
        choices: ["facile", "easy", "simplistic", "effortless"],
        correctAnswer: "facile"
    },
    {
       id: 3208,
        question: "一致する，調和する",
        choices: ["accord", "agree", "concur", "harmonize"],
        correctAnswer: "accord"
    },
    {
       id: 3209,
        question: "伝える，運ぶ",
        choices: ["convey", "communicate", "transport", "deliver"],
        correctAnswer: "convey"
    },
    {
       id: 3210,
        question: "追い求める，追跡する",
        choices: ["pursue", "chase", "follow", "seek"],
        correctAnswer: "pursue"
    },
    {
       id: 3211,
        question: "と題する，と名づける",
        choices: ["entitle", "name", "label", "designate"],
        correctAnswer: "entitle"
    },
    {
       id: 3212,
        question: "分配する，排出する",
        choices: ["dispense", "distribute", "allocate", "deliver"],
        correctAnswer: "dispense"
    },
    {
       id: 3213,
        question: "署名，サイン",
        choices: ["autograph", "signature", "inscription", "endorsement"],
        correctAnswer: "autograph"
    },
    {
       id: 3214,
        question: "詰め込む",
        choices: ["cram", "stuff", "pack", "fill"],
        correctAnswer: "cram"
    },
    {
       id: 3215,
        question: "をほのめかす，暗示する",
        choices: ["imply", "suggest", "indicate", "hint"],
        correctAnswer: "imply"
    },
    {
       id: 3216,
        question: "骨の折れる，困難な",
        choices: ["arduous", "difficult", "challenging", "strenuous"],
        correctAnswer: "arduous"
    },
    {
       id: 3217,
        question: "即座の，直ちに",
        choices: ["prompt", "immediate", "quick", "instant"],
        correctAnswer: "prompt"
    },
    {
       id: 3218,
        question: "容器，器",
        choices: ["vessel", "container", "receptacle", "casing"],
        correctAnswer: "vessel"
    },
    {
       id: 3219,
        question: "身代金，解放金",
        choices: ["ransom", "bail", "compensation", "bribe"],
        correctAnswer: "ransom"
    },
    {
       id: 3220,
        question: "触れられない",
        choices: ["intangible", "invisible", "untouchable", "immaterial"],
        correctAnswer: "intangible"
    },
    {
       id: 3221,
        question: "評価する，査定する",
        choices: ["assess", "evaluate", "appraise", "analyze"],
        correctAnswer: "assess"
    },
    {
       id: 3222,
        question: "終了，終わり",
        choices: ["termination", "end", "completion", "conclusion"],
        correctAnswer: "termination"
    },
    {
       id: 3223,
        question: "厳格な、厳重な",
        choices: ["austere", "strict", "rigid", "severe"],
        correctAnswer: "austere"
    },
    {
       id: 3224,
        question: "店子",
        choices: ["tenant", "renter", "lodger", "occupant"],
        correctAnswer: "tenant"
    },
    {
       id: 3225,
        question: "直感",
        choices: ["intuition", "instinct", "gut feeling", "perception"],
        correctAnswer: "intuition"
    },
    {
       id: 3226,
        question: "遺産，相続財産",
        choices: ["heritage", "inheritance", "legacy", "bequest"],
        correctAnswer: "heritage"
    },
    {
       id: 3227,
        question: "分極化する",
        choices: ["polarize", "divide", "separate", "split"],
        correctAnswer: "polarize"
    },
    {
       id: 3228,
        question: "派手",
        choices: ["gaudy", "flashy", "showy", "extravagant"],
        correctAnswer: "gaudy"
    },
    {
       id: 3229,
        question: "隆起",
        choices: ["uplift", "elevation", "rise", "ascension"],
        correctAnswer: "uplift"
    },
    {
       id: 3230,
        question: "構成する，組み立てる",
        choices: ["constitute", "compose", "form", "construct"],
        correctAnswer: "constitute"
    },
    {
       id: 3231,
        question: "汚れ",
        choices: ["smudge", "stain", "blemish", "spot"],
        correctAnswer: "smudge"
    },
    {
       id: 3232,
        question: "丸天井，ドーム型の天井",
        choices: ["vault", "dome", "arch", "ceiling"],
        correctAnswer: "vault"
    },
    {
       id: 3233,
        question: "軽減された",
        choices: ["alleviated", "reduced", "relieved", "diminished"],
        correctAnswer: "alleviated"
    },
    {
       id: 3234,
        question: "定義，明確な説明",
        choices: ["definition", "explanation", "meaning", "interpretation"],
        correctAnswer: "definition"
    },
    {
       id: 3235,
        question: "医師，内科医",
        choices: ["physician", "doctor", "surgeon", "clinician"],
        correctAnswer: "physician"
    },
    {
       id: 3236,
        question: "をまねる，に似る",
        choices: ["take after", "resemble", "imitate", "mirror"],
        correctAnswer: "take after"
    },
    {
       id: 3237,
        question: "過剰，超過",
        choices: ["excess", "surplus", "abundance", "overload"],
        correctAnswer: "excess"
    },
    {
       id: 3238,
        question: "左遷する，異動させる",
        choices: ["relegate", "demote", "transfer", "downgrade"],
        correctAnswer: "relegate"
    },
    {
       id: 3239,
        question: "犠牲，捧げ物",
        choices: ["sacrifice", "offering", "devotion", "tribute"],
        correctAnswer: "sacrifice"
    },
    {
       id: 3240,
        question: "気遣い、不安、配慮や心配",
        choices: ["apprehension", "concern", "worry", "anxiety"],
        correctAnswer: "apprehension"
    },
    {
       id: 3241,
        question: "覆うもの，口実",
        choices: ["veil", "cover", "cloak", "excuse"],
        correctAnswer: "veil"
    },
    {
       id: 3242,
        question: "飾る，装飾する",
        choices: ["garnish", "decorate", "adorn", "embellish"],
        correctAnswer: "garnish"
    },
    {
       id: 3243,
        question: "家電，電化製品",
        choices: ["appliance", "device", "gadget", "instrument"],
        correctAnswer: "appliance"
    },
    {
       id: 3244,
        question: "注入する，打ち込む",
        choices: ["instill", "inject", "impart", "infuse"],
        correctAnswer: "instill"
    },
    {
       id: 3245,
        question: "極めて重要な，生命の",
        choices: ["vital", "crucial", "essential", "indispensable"],
        correctAnswer: "vital"
    },
    {
       id: 3246,
        question: "うとうと眠る",
        choices: ["doze off", "nap", "nod off", "sleep lightly"],
        correctAnswer: "doze off"
    },
    {
       id: 3247,
        question: "傾く，寄りかかる",
        choices: ["lean", "tilt", "incline", "bend"],
        correctAnswer: "lean"
    },
    {
       id: 3248,
        question: "急進的な，抜本的な",
        choices: ["radical", "extreme", "fundamental", "drastic"],
        correctAnswer: "radical"
    },
    {
       id: 3249,
        question: "経験する，体験する",
        choices: ["undergo", "experience", "endure", "encounter"],
        correctAnswer: "undergo"
    },
    {
       id: 3250,
        question: "累積的な",
        choices: ["cumulative", "accumulative", "aggregated", "progressive"],
        correctAnswer: "cumulative"
    },
    {
       id: 3251,
        question: "見通し",
        choices: ["outlook", "perspective", "viewpoint", "forecast"],
        correctAnswer: "outlook"
    },
    {
       id: 3252,
        question: "抽象的な，非具体的な",
        choices: ["abstract", "theoretical", "conceptual", "intangible"],
        correctAnswer: "abstract"
    },
    {
       id: 3253,
        question: "現在の，現代の",
        choices: ["contemporary", "modern", "current", "present"],
        correctAnswer: "contemporary"
    },
    {
       id: 3254,
        question: "相手，対象",
        choices: ["opponent", "rival", "adversary", "competitor"],
        correctAnswer: "opponent"
    },
    {
       id: 3255,
        question: "まき散らす、ばらまく",
        choices: ["scatter", "disperse", "spread", "distribute"],
        correctAnswer: "scatter"
    },
    {
       id: 3256,
        question: "原理",
        choices: ["principle", "fundamental", "tenet", "doctrine"],
        correctAnswer: "principle"
    },
    {
       id: 3257,
        question: "崩壊する，つぶれる",
        choices: ["collapse", "fall apart", "crumble", "break down"],
        correctAnswer: "collapse"
    },
    {
       id: 3258,
        question: "倹約な",
        choices: ["thrifty", "economical", "frugal", "prudent"],
        correctAnswer: "thrifty"
    },
    {
       id: 3259,
        question: "信頼，信用",
        choices: ["faith", "trust", "belief", "confidence"],
        correctAnswer: "faith"
    },
    {
       id: 3260,
        question: "偽造",
        choices: ["forgery", "counterfeiting", "fraud", "imitation"],
        correctAnswer: "forgery"
    },
    {
       id: 3261,
        question: "戦術的な",
        choices: ["tactical", "strategic", "operational", "planned"],
        correctAnswer: "tactical"
    },
    {
       id: 3262,
        question: "別れる",
        choices: ["break up", "split", "separate", "part"],
        correctAnswer: "break up"
    },
    {
       id: 3263,
        question: "不可欠な",
        choices: ["essential", "necessary", "crucial", "indispensable"],
        correctAnswer: "essential"
    },
    {
       id: 3264,
        question: "成分",
        choices: ["component", "ingredient", "element", "part"],
        correctAnswer: "component"
    },
    {
       id: 3265,
        question: "混沌とした",
        choices: ["chaotic", "disorderly", "confused", "tumultuous"],
        correctAnswer: "chaotic"
    },
    {
       id: 3266,
        question: "呼び戻す，思い出す",
        choices: ["recall", "remember", "recollect", "bring back"],
        correctAnswer: "recall"
    },
    {
       id: 3267,
        question: "遭遇する，出会う",
        choices: ["encounter", "meet", "come across", "bump into"],
        correctAnswer: "encounter"
    },
    {
       id: 3268,
        question: "冒険的事業、投機的事業",
        choices: ["venture", "enterprise", "undertaking", "initiative"],
        correctAnswer: "venture"
    },
    {
       id: 3269,
        question: "大惨事",
        choices: ["catastrophe", "disaster", "calamity", "tragedy"],
        correctAnswer: "catastrophe"
    },
    {
       id: 3270,
        question: "きつい",
        choices: ["uptight", "tense", "nervous", "rigid"],
        correctAnswer: "uptight"
    },
    {
       id: 3271,
        question: "もつれさせる，絡ませる，混乱させる",
        choices: ["tangle", "snarl", "twist", "entangle"],
        correctAnswer: "tangle"
    },
    {
       id: 3272,
        question: "改善する",
        choices: ["ameliorate", "improve", "enhance", "refine"],
        correctAnswer: "ameliorate"
    },
    {
       id: 3273,
        question: "煮る",
        choices: ["simmer", "boil", "stew", "braise"],
        correctAnswer: "simmer"
    },
    {
       id: 3274,
        question: "結びつけて考える，賛同する",
        choices: ["associate", "connect", "link", "relate"],
        correctAnswer: "associate"
    },
    {
       id: 3275,
        question: "使者、代理人や遣使",
        choices: ["envoy", "delegate", "messenger", "representative"],
        correctAnswer: "envoy"
    },
    {
       id: 3276,
        question: "手招きする",
        choices: ["beckon", "gesture", "signal", "summon"],
        correctAnswer: "beckon"
    },
    {
       id: 3277,
        question: "適当な",
        choices: ["appropriate", "suitable", "proper", "fitting"],
        correctAnswer: "appropriate"
    },
    {
       id: 3278,
        question: "記念品",
        choices: ["memento", "souvenir", "keepsake", "reminder"],
        correctAnswer: "memento"
    },
    {
       id: 3279,
        question: "集まる",
        choices: ["congregate", "gather", "assemble", "rally"],
        correctAnswer: "congregate"
    },
    {
       id: 3280,
        question: "大胆さ",
        choices: ["audacity", "boldness", "courage", "bravery"],
        correctAnswer: "audacity"
    },
    {
       id: 3281,
        question: "恐怖症",
        choices: ["phobia", "fear", "dread", "anxiety"],
        correctAnswer: "phobia"
    },
    {
       id: 3282,
        question: "泥棒",
        choices: ["thief", "burglar", "robber", "pickpocket"],
        correctAnswer: "thief"
    },
    {
       id: 3283,
        question: "永久の、永遠の",
        choices: ["permanent", "eternal", "everlasting", "unending"],
        correctAnswer: "permanent"
    },
    {
       id: 3284,
        question: "保証する，確証する",
        choices: ["assure", "guarantee", "confirm", "secure"],
        correctAnswer: "assure"
    },
    {
       id: 3285,
        question: "同期する",
        choices: ["synchronize", "coordinate", "harmonize", "align"],
        correctAnswer: "synchronize"
    },
    {
       id: 3286,
        question: "吐く",
        choices: ["throw up", "vomit", "retch", "gag"],
        correctAnswer: "throw up"
    },
    {
       id: 3287,
        question: "廃止する，中止する",
        choices: ["repeal", "abolish", "rescind", "annul"],
        correctAnswer: "repeal"
    },
    {
       id: 3288,
        question: "推力",
        choices: ["thrust", "force", "propulsion", "momentum"],
        correctAnswer: "thrust"
    },
    {
       id: 3289,
        question: "つかむ，把握する",
        choices: ["seize", "grab", "clutch", "snatch"],
        correctAnswer: "seize"
    },
    {
       id: 3290,
        question: "を抱きしめる，擁する",
        choices: ["embrace", "hug", "hold", "cuddle"],
        correctAnswer: "embrace"
    },
    {
       id: 3291,
        question: "含み笑い、ほくそ笑い",
        choices: ["chuckle", "giggle", "snicker", "smirk"],
        correctAnswer: "chuckle"
    },
    {
       id: 3292,
        question: "構成",
        choices: ["configuration", "structure", "arrangement", "composition"],
        correctAnswer: "configuration"
    },
    {
       id: 3293,
        question: "格子，格子状",
        choices: ["grate", "lattice", "grid", "mesh"],
        correctAnswer: "grate"
    },
    {
       id: 3294,
        question: "起き上がる",
        choices: ["sit up", "rise", "straighten", "get up"],
        correctAnswer: "sit up"
    },
    {
       id: 3295,
        question: "立ち寄る",
        choices: ["stop over", "drop by", "visit", "pause"],
        correctAnswer: "stop over"
    },
    {
       id: 3296,
        question: "自慢",
        choices: ["brag", "boast", "gloat", "show off"],
        correctAnswer: "brag"
    },
    {
       id: 3297,
        question: "停止状態",
        choices: ["idle", "dormant", "inactive", "still"],
        correctAnswer: "idle"
    },
    {
       id: 3298,
        question: "祖先，先祖",
        choices: ["ancestor", "forefather", "progenitor", "predecessor"],
        correctAnswer: "ancestor"
    },
    {
       id: 3299,
        question: "疲れ果てさせる，消耗させる",
        choices: ["exhaust", "drain", "fatigue", "deplete"],
        correctAnswer: "exhaust"
    },
    {
       id: 3300,
        question: "制限する、限定する",
        choices: ["confine", "restrict", "limit", "constrain"],
        correctAnswer: "confine"
    },
    {
       id: 3301,
        question: "記念",
        choices: ["commemoration", "celebration", "memorial", "remembrance"],
        correctAnswer: "commemoration"
    },
    {
       id: 3302,
        question: "身長，身の丈",
        choices: ["stature", "height", "tallness", "build"],
        correctAnswer: "stature"
    },
    {
       id: 3303,
        question: "吐き気がする",
        choices: ["nauseous", "sick", "queasy", "dizzy"],
        correctAnswer: "nauseous"
    },
    {
       id: 3304,
        question: "支配",
        choices: ["dominance", "control", "authority", "power"],
        correctAnswer: "dominance"
    },
    {
       id: 3305,
        question: "受身の，消極的な",
        choices: ["passive", "inactive", "reserved", "docile"],
        correctAnswer: "passive"
    },
    {
       id: 3306,
        question: "慣れる",
        choices: ["accustom", "adapt", "adjust", "familiarize"],
        correctAnswer: "accustom"
    },
    {
       id: 3307,
        question: "冬眠する",
        choices: ["hibernate", "sleep", "slumber", "dormant"],
        correctAnswer: "hibernate"
    },
    {
       id: 3308,
        question: "入札する",
        choices: ["bid", "offer", "propose", "tender"],
        correctAnswer: "bid"
    },
    {
       id: 3309,
        question: "割り当てる",
        choices: ["allocate", "assign", "distribute", "designate"],
        correctAnswer: "allocate"
    },
    {
       id: 3310,
        question: "言葉の，語句の",
        choices: ["verbal", "spoken", "oral", "linguistic"],
        correctAnswer: "verbal"
    },
    {
       id: 3311,
        question: "幅が狭い，細い",
        choices: ["narrow", "thin", "slim", "tapered"],
        correctAnswer: "narrow"
    },
    {
       id: 3312,
        question: "星座",
        choices: ["constellation", "galaxy", "asterism", "cluster"],
        correctAnswer: "constellation"
    },
    {
       id: 3313,
        question: "詮索好きな",
        choices: ["nosy", "curious", "prying", "intrusive"],
        correctAnswer: "nosy"
    },
    {
       id: 3314,
        question: "進化する，発展する",
        choices: ["evolve", "develop", "progress", "advance"],
        correctAnswer: "evolve"
    },
    {
       id: 3315,
        question: "有能な",
        choices: ["competent", "capable", "efficient", "proficient"],
        correctAnswer: "competent"
    },
    {
       id: 3316,
        question: "共感，感情移入",
        choices: ["empathy", "sympathy", "compassion", "understanding"],
        correctAnswer: "empathy"
    },
    {
       id: 3317,
        question: "詐欺",
        choices: ["scam", "fraud", "deception", "hoax"],
        correctAnswer: "scam"
    },
    {
       id: 3318,
        question: "読み書きのできない",
        choices: ["illiterate", "uneducated", "ignorant", "unschooled"],
        correctAnswer: "illiterate"
    },
    {
       id: 3319,
        question: "恩赦",
        choices: ["amnesty", "pardon", "clemency", "forgiveness"],
        correctAnswer: "amnesty"
    },
    {
       id: 3320,
        question: "を貼り付ける，を貼る",
        choices: ["attach", "stick", "paste", "fasten"],
        correctAnswer: "attach"
    },
    {
       id: 3321,
        question: "寮",
        choices: ["dormitory", "residence", "hostel", "boarding house"],
        correctAnswer: "dormitory"
    },
    {
       id: 3322,
        question: "張る，伸ばす",
        choices: ["strain", "stretch", "tighten", "pull"],
        correctAnswer: "strain"
    },
    {
       id: 3323,
        question: "孤独",
        choices: ["solitude", "isolation", "seclusion", "loneliness"],
        correctAnswer: "solitude"
    },
    {
       id: 3324,
        question: "侵入者",
        choices: ["intruder", "trespasser", "burglar", "invader"],
        correctAnswer: "intruder"
    },
    {
       id: 3325,
        question: "放浪する",
        choices: ["wander", "roam", "drift", "stray"],
        correctAnswer: "wander"
    },
    {
       id: 3326,
        question: "落胆させる",
        choices: ["discourage", "dismay", "dishearten", "depress"],
        correctAnswer: "discourage"
    },
    {
       id: 3327,
        question: "を課す，負わせる",
        choices: ["impose", "enforce", "levy", "inflict"],
        correctAnswer: "impose"
    },
    {
       id: 3328,
        question: "絶対的な，完全な",
        choices: ["absolute", "total", "definitive", "unconditional"],
        correctAnswer: "absolute"
    },
    {
       id: 3329,
        question: "可燃性",
        choices: ["flammable", "combustible", "ignitable", "inflammable"],
        correctAnswer: "flammable"
    },
    {
       id: 3330,
        question: "を取り除く，を排除する",
        choices: ["eliminate", "remove", "eradicate", "exclude"],
        correctAnswer: "eliminate"
    },
    {
       id: 3331,
        question: "爆発させる、破裂させる",
        choices: ["detonate", "explode", "burst", "ignite"],
        correctAnswer: "detonate"
    },
    {
       id: 3332,
        question: "見渡す，展望する",
        choices: ["look over", "scan", "survey", "glance at"],
        correctAnswer: "look over"
    },
    {
       id: 3333,
        question: "目的のない",
        choices: ["aimless", "purposeless", "random", "directionless"],
        correctAnswer: "aimless"
    },
    {
       id: 3334,
        question: "移住する，移転する",
        choices: ["immigrate", "migrate", "relocate", "resettle"],
        correctAnswer: "immigrate"
    },
    {
       id: 3335,
        question: "書庫，保存場所",
        choices: ["archive", "library", "repository", "storage"],
        correctAnswer: "archive"
    },
    {
       id: 3336,
        question: "湾",
        choices: ["gulf", "bay", "inlet", "lagoon"],
        correctAnswer: "gulf"
    },
    {
       id: 3337,
        question: "排出させる，排水をする",
        choices: ["drain", "discharge", "empty", "evacuate"],
        correctAnswer: "drain"
    },
    {
       id: 3338,
        question: "追い出す、排除する",
        choices: ["eject", "expel", "oust", "remove"],
        correctAnswer: "eject"
    },
    {
       id: 3339,
        question: "押し入る",
        choices: ["break in", "intrude", "force entry", "trespass"],
        correctAnswer: "break in"
    },
    {
       id: 3340,
        question: "極悪人の，悪役の",
        choices: ["villainous", "wicked", "evil", "malicious"],
        correctAnswer: "villainous"
    },
    {
       id: 3341,
        question: "優先の，前の",
        choices: ["prior", "previous", "earlier", "preceding"],
        correctAnswer: "prior"
    },
    {
       id: 3342,
        question: "を予想する，を予測する",
        choices: ["predict", "forecast", "anticipate", "prophesy"],
        correctAnswer: "predict"
    },
    {
       id: 3343,
        question: "褒め言葉，賞賛，称賛",
        choices: ["compliment", "praise", "commendation", "flattery"],
        correctAnswer: "compliment"
    },
    {
       id: 3344,
        question: "香り，におい",
        choices: ["scent", "aroma", "fragrance", "odor"],
        correctAnswer: "scent"
    },
    {
       id: 3345,
        question: "脱出する，救済する",
        choices: ["bail out", "rescue", "save", "evacuate"],
        correctAnswer: "bail out"
    },
    {
       id: 3346,
        question: "保持する，維持する",
        choices: ["sustain", "maintain", "preserve", "continue"],
        correctAnswer: "sustain"
    },
    {
       id: 3347,
        question: "を成し遂げる",
        choices: ["carry out", "execute", "accomplish", "complete"],
        correctAnswer: "carry out"
    },
    {
       id: 3348,
        question: "を折る，折りたたむ",
        choices: ["fold", "crease", "bend", "wrap"],
        correctAnswer: "fold"
    },
    {
       id: 3349,
        question: "追い出す、排除する",
        choices: ["eject", "expel", "oust", "remove"],
        correctAnswer: "eject"
    },
    {
       id: 3350,
        question: "切り戻す",
        choices: ["cut back on", "reduce", "trim", "scale down"],
        correctAnswer: "cut back on"
    },
    {
       id: 3351,
        question: "かわす，よける",
        choices: ["dodge", "avoid", "evade", "sidestep"],
        correctAnswer: "dodge"
    },
    {
       id: 3352,
        question: "破産",
        choices: ["bankrupt", "insolvency", "financial ruin", "liquidation"],
        correctAnswer: "bankrupt"
    },
    {
       id: 3353,
        question: "契約，協定",
        choices: ["contract", "agreement", "deal", "pact"],
        correctAnswer: "contract"
    },
    {
       id: 3354,
        question: "正当化する，合理化する",
        choices: ["justify", "explain", "defend", "rationalize"],
        correctAnswer: "justify"
    },
    {
       id: 3355,
        question: "補充する、足りないものを追加する",
        choices: ["replenish", "refill", "stock up", "restore"],
        correctAnswer: "replenish"
    },
    {
       id: 3356,
        question: "課題，困難",
        choices: ["hurdle", "obstacle", "challenge", "barrier"],
        correctAnswer: "hurdle"
    },
    {
       id: 3357,
        question: "入場，入場料",
        choices: ["admission", "entry", "entrance fee", "access"],
        correctAnswer: "admission"
    },
    {
       id: 3358,
        question: "国内の，家庭の",
        choices: ["domestic", "local", "internal", "household"],
        correctAnswer: "domestic"
    },
    {
       id: 3359,
        question: "養う、育てる、支える",
        choices: ["nourish", "feed", "support", "sustain"],
        correctAnswer: "nourish"
    },
    {
       id: 3360,
        question: "緊張",
        choices: ["tension", "stress", "strain", "pressure"],
        correctAnswer: "tension"
    },
    {
       id: 3361,
        question: "対応する，反応する",
        choices: ["correspond", "react", "respond", "match"],
        correctAnswer: "correspond"
    },
    {
       id: 3362,
        question: "広範囲の",
        choices: ["a wide range of", "extensive", "broad spectrum of", "various"],
        correctAnswer: "a wide range of"
    },
    {
       id: 3363,
        question: "目撃者，証人/を目撃する",
        choices: ["witness", "observer", "spectator", "onlooker"],
        correctAnswer: "witness"
    },
    {
       id: 3364,
        question: "原始的な，先史的な",
        choices: ["primitive", "prehistoric", "ancient", "rudimentary"],
        correctAnswer: "primitive"
    },
    {
       id: 3365,
        question: "を認める，認める",
        choices: ["acknowledge", "admit", "accept", "recognize"],
        correctAnswer: "acknowledge"
    },
    {
       id: 3366,
        question: "湾曲させる",
        choices: ["crook", "bend", "twist", "curve"],
        correctAnswer: "crook"
    },
    {
       id: 3367,
        question: "降格する",
        choices: ["demote", "downgrade", "relegate", "reduce"],
        correctAnswer: "demote"
    },
    {
       id: 3368,
        question: "箔，金属の箔",
        choices: ["foil", "sheet", "laminate", "plating"],
        correctAnswer: "foil"
    },
    {
       id: 3369,
        question: "文字化けする",
        choices: ["garble", "corrupt", "distort", "scramble"],
        correctAnswer: "garble"
    },
    {
       id: 3370,
        question: "新郎",
        choices: ["groom", "bridegroom", "fiancé", "husband-to-be"],
        correctAnswer: "groom"
    },
    {
       id: 3371,
        question: "遵守する",
        choices: ["adhere", "comply", "follow", "observe"],
        correctAnswer: "adhere"
    },
    {
       id: 3372,
        question: "絶滅の危機にさらされている",
        choices: ["endangered", "threatened", "vulnerable", "at risk"],
        correctAnswer: "endangered"
    },
    {
       id: 3373,
        question: "講堂",
        choices: ["auditorium", "hall", "theater", "assembly room"],
        correctAnswer: "auditorium"
    },
    {
       id: 3374,
        question: "小うるさい",
        choices: ["fussy", "picky", "finicky", "meticulous"],
        correctAnswer: "fussy"
    },
    {
       id: 3375,
        question: "浸す，没入する",
        choices: ["immerse", "soak", "dip", "submerge"],
        correctAnswer: "immerse"
    },
    {
       id: 3376,
        question: "を控える，慎む",
        choices: ["abstain from", "refrain from", "avoid", "withhold"],
        correctAnswer: "abstain from"
    },
    {
       id: 3377,
        question: "拭く",
        choices: ["swipe", "wipe", "clean", "rub"],
        correctAnswer: "swipe"
    },
    {
       id: 3378,
        question: "露骨な，あからさまな",
        choices: ["blatant", "obvious", "brazen", "flagrant"],
        correctAnswer: "blatant"
    },
    {
       id: 3379,
        question: "追放された，追い出された",
        choices: ["outcast", "exiled", "banished", "ostracized"],
        correctAnswer: "outcast"
    },
    {
       id: 3380,
        question: "のどに詰まらせる",
        choices: ["choke", "gag", "suffocate", "block"],
        correctAnswer: "choke"
    },
    {
       id: 3381,
        question: "新鮮な，さっぱりした",
        choices: ["crisp", "fresh", "refreshing", "breezy"],
        correctAnswer: "crisp"
    },
    {
       id: 3382,
        question: "廊下，通路",
        choices: ["corridor", "hallway", "passage", "aisle"],
        correctAnswer: "corridor"
    },
    {
       id: 3383,
        question: "発生させる，起こす",
        choices: ["generate", "produce", "create", "cause"],
        correctAnswer: "generate"
    },
    {
       id: 3384,
        question: "ずさんな，いい加減な",
        choices: ["sloppy", "careless", "negligent", "messy"],
        correctAnswer: "sloppy"
    },
    {
       id: 3385,
        question: "対立，争い",
        choices: ["conflict", "dispute", "clash", "argument"],
        correctAnswer: "conflict"
    },
    {
       id: 3386,
        question: "陥没する",
        choices: ["cave in", "collapse", "sink", "give way"],
        correctAnswer: "cave in"
    },
    {
       id: 3387,
        question: "信念，確信",
        choices: ["conviction", "belief", "certainty", "faith"],
        correctAnswer: "conviction"
    },
    {
       id: 3388,
        question: "穏やかな",
        choices: ["serene", "calm", "peaceful", "tranquil"],
        correctAnswer: "serene"
    },
    {
       id: 3389,
        question: "束，一揃い",
        choices: ["bundle", "bunch", "pack", "pile"],
        correctAnswer: "bundle"
    },
    {
       id: 3390,
        question: "心付け",
        choices: ["gratuity", "tip", "bonus", "reward"],
        correctAnswer: "gratuity"
    },
    {
       id: 3391,
        question: "注釈",
        choices: ["annotation", "commentary", "explanation", "footnote"],
        correctAnswer: "annotation"
    },
    {
       id: 3392,
        question: "皮肉，嘲笑，冷笑",
        choices: ["sarcasm", "irony", "satire", "mockery"],
        correctAnswer: "sarcasm"
    },
    {
       id: 3393,
        question: "直感，本能，勘",
        choices: ["instinct", "intuition", "gut feeling", "hunch"],
        correctAnswer: "instinct"
    },
    {
       id: 3394,
        question: "緩衝，緩和",
        choices: ["buffer", "cushion", "shock absorber", "barrier"],
        correctAnswer: "buffer"
    },
    {
       id: 3395,
        question: "時代遅れの，古風な",
        choices: ["out of date", "obsolete", "antiquated", "dated"],
        correctAnswer: "out of date"
    },
    {
       id: 3396,
        question: "対立，争い",
        choices: ["conflict", "dispute", "clash", "argument"],
        correctAnswer: "conflict"
    },
    {
       id: 3397,
        question: "差別する",
        choices: ["discriminate", "segregate", "distinguish", "differentiate"],
        correctAnswer: "discriminate"
    },
    {
       id: 3398,
        question: "理性的な，合理的な",
        choices: ["rational", "logical", "reasonable", "sensible"],
        correctAnswer: "rational"
    },
    {
       id: 3399,
        question: "土台，根拠，設立",
        choices: ["foundation", "basis", "groundwork", "establishment"],
        correctAnswer: "foundation"
    },
    {
       id: 3400,
        question: "活気のある",
        choices: ["vibrant", "lively", "energetic", "dynamic"],
        correctAnswer: "vibrant"
    },

];

export default questions2;