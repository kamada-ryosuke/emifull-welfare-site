import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { EmotionalImage } from "@/components/ui/EmotionalImage";
import { createMetadata } from "@/lib/seo";

const brandDetails = [
  {
    name: "SORATO",
    href: "/brands/sorato",
    image: "/images/brand-sorato.webp",
    age: "未就学",
    feature: "遊び・ことば・生活",
    support: "遊びを通して、就学前の子どものことばと生活の力を育みます。",
    mood: "木のおもちゃ、自然光、安心して遊べるぬくもり。"
  },
  {
    name: "UMIE",
    href: "/brands/umie",
    image: "/images/brand-umie.webp",
    age: "小学生〜高校生",
    feature: "学び・居場所・自分らしさ",
    support: "学びを通して、学齢期の子どもの自分らしく進む力を育みます。",
    mood: "放課後の光、少人数、ゆっくり話せる静けさ。"
  },
  {
    name: "カラダキッズ",
    href: "/brands/karada-kids",
    image: "/images/brand-karada-kids.webp",
    age: "未就学〜小学生",
    feature: "運動・挑戦・自信",
    support: "運動を通して、子どもの自信と挑戦する気持ちを育みます。",
    mood: "風、動き、ジャンプ、挑戦したあとの笑い声。"
  },
  {
    name: "ジョブカレッジ",
    href: "/brands/job-college",
    image: "/images/brand-job-college.webp",
    age: "中高生",
    feature: "体験・役割・働く準備",
    support: "体験を通して、中高生の働くために必要な力を育みます。",
    mood: "集中する手元、会話、役に立てた実感。"
  },
  {
    name: "BLOOM",
    href: "/brands/bloom",
    image: "/images/consultation-calm.webp",
    age: "園・学校",
    feature: "訪問・連携・環境調整",
    support: "園・学校・家庭をつなぎ、安心できる環境を一緒に整えます。",
    mood: "相談しやすい距離感、やわらかな対話。"
  },
  {
    name: "Hinodeシェアホーム",
    href: "/brands/hinode-sharehome",
    image: "/images/brand-hinode.webp",
    age: "大人",
    feature: "暮らし・安心・地域",
    support: "安心できる暮らしを通して、自分らしく生活していく力を育みます。",
    mood: "食卓、夜の灯り、帰る場所の安心。"
  },
  {
    name: "のじぎく",
    href: "/brands/nojigiku",
    image: "/images/brand-nojigiku.webp",
    age: "大人",
    feature: "作業・習慣・社会参加",
    support: "働く経験を通して、自分らしく社会と関わる力を育みます。",
    mood: "作業の手元、地域、ありがとうが聞こえそうな空気。"
  }
];

export const metadata = createMetadata({
  title: "ブランド一覧",
  description:
    "SORATO、UMIE、カラダキッズ、ジョブカレッジ、BLOOM、Hinodeシェアホーム、のじぎく。EMIFULL障がい福祉事業部の各ブランドを紹介します。",
  path: "/brands"
});

export default function BrandsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "ブランド", href: "/brands" }]} />
      <PageHero
        eyebrow="Brands"
        title="その人の時間に合う、支援の空気を選ぶ。"
        description="対象年齢、支援内容、雰囲気から、今の不安に近いブランドを探せます。"
        cta="相談してみる"
        href="/consultation"
        imageSrc="/images/hero-life-01.webp"
        imageAlt="EMIFULLの支援ブランドを感じる自然光の支援風景"
      />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {brandDetails.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="group rounded-[26px] bg-white p-3 shadow-[0_18px_46px_rgba(33,112,159,0.09)] transition hover:-translate-y-1"
            >
              <EmotionalImage
                src={brand.image}
                alt={`${brand.name}の支援風景`}
                className="h-72 rounded-[22px]"
                sizes="(max-width: 768px) 92vw, 30vw"
              />
              <div className="p-4">
                <p className="text-xs font-black text-leaf-600">{brand.age}</p>
                <h2 className="mt-2 text-2xl font-black text-ink">{brand.name}</h2>
                <div className="mt-5 grid gap-3 text-sm leading-7 text-ink/68">
                  <p><span className="font-black text-ink">特徴：</span>{brand.feature}</p>
                  <p><span className="font-black text-ink">対応内容：</span>{brand.support}</p>
                  <p><span className="font-black text-ink">雰囲気：</span>{brand.mood}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <RelatedLinks links={[{ label: "サービスを見る", href: "/services" }, { label: "施設を探す", href: "/facilities" }, { label: "相談してみる", href: "/consultation" }]} />
    </main>
  );
}
