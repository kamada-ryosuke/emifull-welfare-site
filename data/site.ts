export type Brand = {
  name: string;
  kana?: string;
  stage: string;
  description: string;
  tone: string;
  mood: "play" | "study" | "move" | "work" | "visit" | "home" | "craft";
  scene: string;
  feeling: string;
  emotionalCopy: string;
  palette: string;
};

export type Service = {
  title: string;
  label: string;
  slug: string;
  seoKeyword: string;
  description: string;
  href: string;
  anxiety: string;
  change: string;
  photoMoment: string;
  mood: Brand["mood"];
};

export type FacilityArea = {
  area: string;
  prefecture: string;
  slug: string;
  services: string[];
};

export type Facility = {
  name: string;
  slug: string;
  area: string;
  prefecture: string;
  service: string;
  image: string;
  description: string;
  atmosphere: string;
};

export const consultationItems = [
  {
    title: "子どもの発達相談",
    text: "ことば、生活、集団への不安を一緒に整理します。診断前でも相談できます。",
    href: "/consultation?type=development"
  },
  {
    title: "学校生活相談",
    text: "学校や家庭とは違う居場所、学び方、過ごし方を考えます。",
    href: "/consultation?type=school"
  },
  {
    title: "不登校相談",
    text: "外とつながる小さな一歩を、安心できる場所から一緒に探します。",
    href: "/consultation?type=school-refusal"
  },
  {
    title: "働く相談",
    text: "働く前の練習、役割づくり、日中活動の選び方を相談できます。",
    href: "/consultation?type=work"
  },
  {
    title: "暮らし相談",
    text: "地域の中で自分らしく暮らす住まいと生活の不安を整理します。",
    href: "/consultation?type=living"
  }
];

export const lifeStages = [
  {
    title: "未就学",
    subtitle: "伝わる安心から",
    description: "ことばになる前の気持ちを、遊びと関係づくりの中で受け止めます。",
    services: ["SORATO", "カラダキッズ", "BLOOM"]
  },
  {
    title: "学齢期",
    subtitle: "自分でいられる居場所へ",
    description: "学校や家庭とは違う時間の中で、自分のペースを取り戻します。",
    services: ["UMIE", "カラダキッズ", "BLOOM"]
  },
  {
    title: "思春期",
    subtitle: "未来に触れる経験へ",
    description: "役割や体験を通して、働くことや社会とのつながりを少しずつ考えます。",
    services: ["ジョブカレッジ", "BLOOM"]
  },
  {
    title: "働く",
    subtitle: "社会とつながる",
    description: "作業や日中活動を通して、役に立てた経験と毎日のリズムを育みます。",
    services: ["のじぎく"]
  },
  {
    title: "暮らす",
    subtitle: "帰る場所の安心へ",
    description: "地域の中で自分らしく暮らすための、住まいと生活の安心を支えます。",
    services: ["Hinodeシェアホーム"]
  }
];

export const brands: Brand[] = [
  {
    name: "SORATO",
    kana: "ソラト",
    stage: "未就学",
    description: "遊びを通して、就学前の子どものことばと生活の力を育みます。",
    tone: "遊び・ことば・生活",
    mood: "play",
    scene: "床に座り、木のおもちゃや積み木を囲みながら、同じ目線で関わる時間。",
    feeling: "安心して遊べる",
    emotionalCopy: "伝えたい気持ちを、急がず、遊びの中で待つ。",
    palette: "空色、やわらかな木の色、淡いピンク"
  },
  {
    name: "UMIE",
    kana: "ウミエ",
    stage: "学齢期",
    description: "学びを通して、学齢期の子どもの自分らしく進む力を育みます。",
    tone: "学び・居場所・自分らしさ",
    mood: "study",
    scene: "放課後の光、ノート、少人数で落ち着いて過ごせる居場所。",
    feeling: "自分らしくいられる",
    emotionalCopy: "言えない日も、ここにいていいと思える場所へ。",
    palette: "透明感のあるブルー、白、夕方の光"
  },
  {
    name: "カラダキッズ",
    stage: "未就学から小学生",
    description: "運動を通して、子どもの自信と挑戦する気持ちを育みます。",
    tone: "運動・挑戦・成功体験",
    mood: "move",
    scene: "走る、跳ぶ、笑う。できた瞬間の空気が残る運動の時間。",
    feeling: "もう一回やってみたい",
    emotionalCopy: "からだが動くと、自信も少し動き出す。",
    palette: "空色、青緑、明るい光"
  },
  {
    name: "ジョブカレッジ",
    stage: "中高生",
    description: "体験を通して、中高生の働くために必要な力を育みます。",
    tone: "体験・役割・働く準備",
    mood: "work",
    scene: "PCや作業の手元、役割を持って集中する表情、未来が少し見える時間。",
    feeling: "未来が少し近くなる",
    emotionalCopy: "役に立てた経験が、働く未来を近くする。",
    palette: "深めのブルー、白、落ち着いた木の色"
  },
  {
    name: "BLOOM",
    stage: "園・学校",
    description: "園・学校・家庭をつなぎ、安心できる環境を支えます。",
    tone: "訪問・連携・環境調整",
    mood: "visit",
    scene: "先生や家族との対話、環境を整えるための静かな相談。",
    feeling: "まわりも一緒に支えられる",
    emotionalCopy: "本人だけでなく、まわりの環境もやさしく整える。",
    palette: "白、淡い空色、若葉の色"
  },
  {
    name: "Hinodeシェアホーム",
    stage: "暮らし",
    description: "地域の中で、自分らしく暮らす生活を支えます。",
    tone: "住まい・安心・自立",
    mood: "home",
    scene: "食卓、夜の灯り、生活音のある共有スペース。",
    feeling: "ここで暮らしていける",
    emotionalCopy: "ただいまと言える場所が、毎日を支えてくれる。",
    palette: "夜の青、あたたかな灯り、白"
  },
  {
    name: "のじぎく",
    stage: "大人",
    description: "働く経験を通して、社会とのつながりを育みます。",
    tone: "就労・日中活動・社会参加",
    mood: "craft",
    scene: "作業台、手元、地域とのつながり、役に立てた実感。",
    feeling: "社会とつながる",
    emotionalCopy: "今日の作業が、誰かの役に立つ実感になる。",
    palette: "白、空色、作業台の木の色"
  }
];

export const services: Service[] = [
  {
    title: "児童発達支援",
    label: "ことばと生活の力を育む",
    slug: "jido-hattatsu",
    seoKeyword: "児童発達支援 天理 稲美 加古川",
    description: "就学前の子どもに、遊びと安心できる関係を通して発達の土台をつくります。",
    href: "/services/jido-hattatsu",
    anxiety: "ことばが遅い、集団が苦手、気持ちが伝わりにくい。そんな不安を、まず一緒に受け止めます。",
    change: "わかってもらえた経験が、伝えたい気持ちと生活の自信につながります。",
    photoMoment: "床に座って遊ぶ手元、木のおもちゃ、同じ目線で待つスタッフの距離感。",
    mood: "play"
  },
  {
    title: "放課後等デイサービス",
    label: "安心できる放課後をつくる",
    slug: "houkago-day",
    seoKeyword: "放課後等デイサービス 天理 加古川",
    description: "学校や家庭とは違う居場所で、学び、活動、経験を通して自分らしく進む力を育みます。",
    href: "/services/houkago-day",
    anxiety: "学校生活に疲れる、友だち関係が難しい、自分らしく過ごせる場所がほしい。そんな気持ちに寄り添います。",
    change: "失敗しても大丈夫と思える場所で、少しずつ自分のペースを取り戻します。",
    photoMoment: "放課後の自然光、ノートを囲む会話、ひとりで落ち着ける余白。",
    mood: "study"
  },
  {
    title: "保育所等訪問支援",
    label: "園や学校の環境を支える",
    slug: "hoikusho-houmon",
    seoKeyword: "保育所等訪問支援 加古川 天理 稲美",
    description: "園や学校で安心して過ごせるよう、先生や家庭と連携して環境を整えます。",
    href: "/services/hoikusho-houmon",
    anxiety: "園や学校で困りごとがあるけれど、家庭だけでは解決しづらい。そんな時に、環境ごと支えます。",
    change: "本人への関わりだけでなく、まわりの理解と関わり方が整うことで、過ごしやすさにつながります。",
    photoMoment: "先生との対話、観察メモ、やわらかな相談の距離感。",
    mood: "visit"
  },
  {
    title: "就労準備型支援",
    label: "働く未来に触れる",
    slug: "job-college",
    seoKeyword: "就労準備 放課後等デイサービス 加古川",
    description: "中高生がPCや作業体験を通して、働くために必要な力と役割の実感を育みます。",
    href: "/services/job-college",
    anxiety: "将来が不安、働くイメージが持てない、役割を持つ経験を増やしたい。そんな時期を支えます。",
    change: "できた、役に立てた、認めてもらえた経験が、働く未来への自信になります。",
    photoMoment: "PC作業の手元、役割を持って集中する表情、伴走するスタッフ。",
    mood: "work"
  },
  {
    title: "就労継続支援B型",
    label: "働く経験と社会とのつながり",
    slug: "b-type",
    seoKeyword: "就労継続支援B型 高砂 加古川",
    description: "自分のペースで作業や日中活動に取り組み、社会とのつながりを育みます。",
    href: "/services/b-type",
    anxiety: "自分のペースで働きたい、生活リズムを整えたい、社会とのつながりを持ちたい。そんな思いを支えます。",
    change: "毎日の作業と小さな役割が、習慣と自信につながっていきます。",
    photoMoment: "作業の手元、道具、地域とつながる製作の時間。",
    mood: "craft"
  },
  {
    title: "障がい者グループホーム",
    label: "地域で自分らしく暮らす",
    slug: "group-home",
    seoKeyword: "障がい者グループホーム 天理",
    description: "地域の中で安心して暮らせる住まいと、生活のリズムを支えます。",
    href: "/services/group-home",
    anxiety: "一人暮らしが不安、家族亡きあとが心配、見守りのある暮らしを始めたい。そんな不安を一緒に考えます。",
    change: "帰る場所がある安心が、その人らしい毎日を支えてくれます。",
    photoMoment: "食卓、夜の灯り、自然な会話、生活音のある共有空間。",
    mood: "home"
  }
];

export const facilityAreas: FacilityArea[] = [
  { area: "天理", prefecture: "奈良県", slug: "tenri", services: ["児童発達支援", "放課後等デイサービス", "障がい者グループホーム"] },
  { area: "加古川", prefecture: "兵庫県", slug: "kakogawa", services: ["就労準備型支援", "保育所等訪問支援", "運動特化型支援"] },
  { area: "稲美", prefecture: "兵庫県", slug: "inami", services: ["児童発達支援", "保育所等訪問支援"] },
  { area: "高砂", prefecture: "兵庫県", slug: "takasago", services: ["就労継続支援B型"] }
];

export const facilities: Facility[] = [
  {
    name: "SORATOてんり",
    slug: "sorato-tenri",
    area: "天理",
    prefecture: "奈良県",
    service: "児童発達支援",
    image: "/images/brand-sorato.webp",
    description: "遊びを通して、ことばと生活の力を育む児童発達支援です。",
    atmosphere: "床に座り、同じ目線で遊びながら、安心して気持ちを表せる時間を大切にします。"
  },
  {
    name: "UMIEてんり",
    slug: "umie-tenri",
    area: "天理",
    prefecture: "奈良県",
    service: "放課後等デイサービス",
    image: "/images/brand-umie.webp",
    description: "学校や家庭とは違う第3の居場所として、学びと経験を支えます。",
    atmosphere: "少人数で落ち着きながら、自分のペースで過ごせる放課後の空気を大切にします。"
  },
  {
    name: "カラダキッズかこがわ",
    slug: "karada-kids-kakogawa",
    area: "加古川",
    prefecture: "兵庫県",
    service: "運動特化型支援",
    image: "/images/brand-karada-kids.webp",
    description: "運動を通して、子どもの自信と挑戦する気持ちを育みます。",
    atmosphere: "できた瞬間の表情、もう一回やってみたい気持ちを大切にします。"
  },
  {
    name: "ジョブカレッジかこがわ",
    slug: "job-college-kakogawa",
    area: "加古川",
    prefecture: "兵庫県",
    service: "就労準備型支援",
    image: "/images/brand-job-college.webp",
    description: "中高生が働く未来に触れ、役割を持つ経験を積み重ねます。",
    atmosphere: "PCや作業体験を通して、役に立てた実感と未来への見通しを育てます。"
  },
  {
    name: "Hinodeシェアホーム",
    slug: "hinode-sharehome",
    area: "天理",
    prefecture: "奈良県",
    service: "障がい者グループホーム",
    image: "/images/brand-hinode.webp",
    description: "地域の中で、自分らしく暮らす生活を支えるグループホームです。",
    atmosphere: "食卓、夜の灯り、ただいまと言える暮らしの安心を大切にします。"
  },
  {
    name: "のじぎく",
    slug: "nojigiku-takasago",
    area: "高砂",
    prefecture: "兵庫県",
    service: "就労継続支援B型",
    image: "/images/brand-nojigiku.webp",
    description: "働く経験を通して、社会とのつながりと毎日のリズムを育みます。",
    atmosphere: "作業の手元、役割、ありがとうが聞こえるような日中活動を大切にします。"
  }
];

export const faqs = [
  {
    q: "診断がなくても相談できますか？",
    a: "はい。診断前でも、見学や相談は可能です。今のお困りごとを伺い、必要な支援や次の進め方を一緒に整理します。"
  },
  {
    q: "見学だけでも大丈夫ですか？",
    a: "大丈夫です。実際の雰囲気を見てから考えたい方も多くいらっしゃいます。無理な利用案内は行いません。"
  },
  {
    q: "利用までの流れが分からなくても相談できますか？",
    a: "はい。受給者証や手続きについても、分かる範囲でご案内します。必要に応じて相談支援専門員とも連携します。"
  },
  {
    q: "送迎はありますか？",
    a: "施設や地域、利用時間によって異なります。各施設ページまたは相談時にご確認ください。"
  }
];
