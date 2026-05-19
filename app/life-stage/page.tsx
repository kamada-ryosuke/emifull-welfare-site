import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EmotionalImage } from "@/components/ui/EmotionalImage";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { createMetadata } from "@/lib/seo";

const images = [
  "/images/brand-sorato.webp",
  "/images/brand-umie.webp",
  "/images/brand-job-college.webp",
  "/images/brand-nojigiku.webp",
  "/images/brand-hinode.webp"
];

const lifeStages = [
  {
    title: "未就学",
    subtitle: "ことば・生活・安心の土台",
    description: "ことば・生活・安心の土台を育てる。遊びや関わりの中で、伝えたい気持ちを少しずつ育みます。",
    services: ["児童発達支援", "SORATO", "カラダキッズ", "BLOOM"]
  },
  {
    title: "学齢期",
    subtitle: "学び・関わり・自分らしさ",
    description: "学び・関わり・自分らしさを育てる。学校や家庭とは違う居場所で、自分のペースを取り戻します。",
    services: ["放課後等デイサービス", "UMIE", "カラダキッズ", "BLOOM"]
  },
  {
    title: "思春期",
    subtitle: "将来につながる経験と自信",
    description: "将来につながる経験と自信を育てる。体験や役割を通して、働く未来へ向かう力を育みます。",
    services: ["ジョブカレッジ", "就労準備型放デイ"]
  },
  {
    title: "働く",
    subtitle: "社会とのつながり",
    description: "働く経験を積み重ね、社会とのつながりへ。作業や日中活動を通して、役に立てた実感を育みます。",
    services: ["就労継続支援B型", "のじぎく"]
  },
  {
    title: "暮らし",
    subtitle: "安心できる暮らし",
    description: "安心できる暮らしと、自分らしい生活へ。地域の中で帰る場所がある安心を支えます。",
    services: ["障がいグループホーム", "Hinodeシェアホーム"]
  }
];

export const metadata = createMetadata({
  title: "ライフステージから見る支援",
  description:
    "未就学、学齢期、思春期、大人の働く、大人の暮らし。EMIFULLの切れ目ない支援を人生の流れから整理します。",
  path: "/life-stage"
});

export default function LifeStagePage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "ライフステージ", href: "/life-stage" }]} />
      <PageHero
        eyebrow="Life Stage"
        title="今だけでなく、その先の人生まで。"
        description="未就学、学齢期、思春期、働く、暮らす。年齢や制度で分けるのではなく、人生の流れとして支援を見られるページです。"
        cta="相談して整理する"
        href="/consultation"
        imageSrc="/images/brand-umie.webp"
        imageAlt="放課後の光の中で自分のペースを取り戻す支援風景"
      />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16">
          {lifeStages.map((stage, index) => (
            <article key={stage.title} className="grid gap-8 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
              <div className={index % 2 ? "lg:order-2" : undefined}>
                <p className="text-xs font-bold tracking-[0.2em] text-leaf-600">0{index + 1} / {stage.subtitle}</p>
                <h2 className="mt-4 font-display text-4xl font-black text-ink sm:text-5xl">{stage.title}</h2>
                <p className="mt-6 max-w-xl text-base leading-9 text-ink/70">{stage.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {stage.services.map((service) => (
                    <Link key={service} href="/services" className="rounded-full bg-leaf-50 px-4 py-2 text-xs font-bold text-leaf-800">
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
              <EmotionalImage src={images[index]} alt={`${stage.title}の支援風景`} className="min-h-[340px] rounded-[22px]" />
            </article>
          ))}
        </div>
      </section>
      <RelatedLinks links={[{ label: "サービスを見る", href: "/services" }, { label: "施設を探す", href: "/facilities" }, { label: "相談してみる", href: "/consultation" }]} />
    </main>
  );
}
