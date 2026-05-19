import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { EmotionalImage } from "@/components/ui/EmotionalImage";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { facilities, faqs, services } from "@/data/site";
import { serviceImages } from "@/lib/imageAssets";
import { breadcrumbJsonLd, createMetadata, serviceJsonLd } from "@/lib/seo";

const serviceDetails: Record<string, { target: string[]; support: string[]; day: string[]; flow: string[]; faq: string[] }> = {
  "jido-hattatsu": {
    target: ["ことばの遅れが気になる", "集団や生活動作に不安がある", "就学前に安心できる経験を増やしたい"],
    support: ["遊びを通した発達支援", "ことば・生活・関係づくりの支援", "保護者との振り返り"],
    day: ["来所・気持ちを整える", "遊びや小集団活動", "片付け・帰りの準備", "保護者へ共有"],
    flow: ["相談", "見学", "受給者証など制度確認", "利用開始"],
    faq: ["診断前でも相談できますか？", "見学だけでも大丈夫ですか？", "送迎はありますか？"]
  },
  "houkago-day": {
    target: ["学校後に安心できる場所がほしい", "友だち関係や学習に不安がある", "学校以外で経験を増やしたい"],
    support: ["学習・活動・体験", "コミュニケーション支援", "学校・家庭との連携"],
    day: ["学校後に来所", "休憩・宿題・活動", "振り返り", "送迎または帰宅"],
    flow: ["相談", "見学・体験", "利用計画の確認", "利用開始"],
    faq: ["不登校でも相談できますか？", "学校との連携はできますか？", "送迎はありますか？"]
  },
  "hoikusho-houmon": {
    target: ["園や学校で困りごとがある", "環境や関わり方を相談したい", "先生・家庭と連携したい"],
    support: ["園・学校への訪問", "環境や関わり方の整理", "先生・家族との共有"],
    day: ["訪問前の確認", "園・学校で観察", "先生との共有", "支援方針の整理"],
    flow: ["相談", "訪問先との調整", "支援計画作成", "訪問開始"],
    faq: ["園や学校への説明も相談できますか？", "家庭だけの相談でも大丈夫ですか？", "利用条件はありますか？"]
  },
  "job-college": {
    target: ["働く未来を少しずつ考えたい", "PCや作業などの経験を積みたい", "役割を持つ経験を増やしたい"],
    support: ["PC・作業体験", "社会性や役割の学び", "働くことへの見通しづくり"],
    day: ["来所・目標確認", "作業・PC活動", "振り返り", "次回につなげる"],
    flow: ["相談", "見学・体験", "利用準備", "利用開始"],
    faq: ["未経験でも大丈夫ですか？", "進路相談もできますか？", "学校と連携できますか？"]
  },
  "b-type": {
    target: ["自分のペースで働きたい", "日中活動のリズムをつくりたい", "社会とのつながりを持ちたい"],
    support: ["軽作業・制作・地域活動", "生活リズムづくり", "役割と自信の積み重ね"],
    day: ["出勤・体調確認", "午前作業", "休憩", "午後作業・振り返り"],
    flow: ["相談", "見学", "体験利用", "利用開始"],
    faq: ["毎日通えなくても大丈夫ですか？", "工賃はありますか？", "見学できますか？"]
  },
  "group-home": {
    target: ["一人暮らしが不安", "家族亡きあとが心配", "見守りのある暮らしを始めたい"],
    support: ["住まいと生活支援", "食事・服薬・生活リズムの見守り", "自分らしい暮らしの相談"],
    day: ["帰宅", "食事・団らん", "夜の見守り", "朝の準備"],
    flow: ["相談", "見学", "体験・条件確認", "入居調整"],
    faq: ["体験入居はできますか？", "夜間の見守りはありますか？", "費用はどのくらいですか？"]
  }
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return createMetadata({
    title: `${service.title} | ${service.label}`,
    description: `${service.description} ${service.seoKeyword}で支援をお探しの方へ。相談・見学まで一緒に整理します。`,
    path: service.href,
    image: serviceImages[services.findIndex((item) => item.slug === slug)]
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const imageIndex = services.findIndex((item) => item.slug === slug);

  if (!service) notFound();

  const details = serviceDetails[service.slug];
  const breadcrumbs = [
    { name: "トップ", href: "/" },
    { name: "サービス", href: "/services" },
    { name: service.title, href: service.href }
  ];
  const relatedFacilities = facilities.filter((facility) => facility.service === service.title || service.slug === "job-college" && facility.service === "就労準備型支援");

  return (
    <main>
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow={service.title}
        title={service.label}
        description={service.description}
        cta="この支援について相談する"
        href="/consultation"
        imageSrc={serviceImages[imageIndex]}
        imageAlt={`${service.title}の支援風景。${service.photoMoment}`}
      />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <EmotionalImage
            src={serviceImages[imageIndex]}
            alt={`${service.title}の空気感。${service.photoMoment}`}
            label={service.photoMoment}
            className="min-h-[420px]"
          />
          <div className="grid gap-5">
            <article className="rounded-[30px] bg-warm-50 p-6 shadow-card">
              <p className="text-sm font-bold text-leaf-600">よくある不安</p>
              <h2 className="mt-2 text-xl font-black text-ink">まず、今の気持ちを受け止めます。</h2>
              <p className="mt-4 text-sm leading-8 text-ink/72">{service.anxiety}</p>
            </article>
            <article className="rounded-[30px] bg-warm-50 p-6 shadow-card">
              <p className="text-sm font-bold text-leaf-600">支援で育つこと</p>
              <h2 className="mt-2 text-xl font-black text-ink">小さな経験が、次の一歩になります。</h2>
              <p className="mt-4 text-sm leading-8 text-ink/72">{service.change}</p>
            </article>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["対象となる方", details.target],
            ["支援内容", details.support],
            ["1日の流れ", details.day],
            ["利用までの流れ", details.flow]
          ].map(([title, items]) => (
            <article key={title as string} className="rounded-[28px] bg-warm-50 p-6 shadow-card">
              <h2 className="text-xl font-black text-ink">{title as string}</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-ink/70">
                {(items as string[]).map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <h2 className="font-display text-3xl font-black text-ink">対応施設</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {(relatedFacilities.length ? relatedFacilities : facilities.slice(0, 3)).map((facility) => (
              <a key={facility.slug} href={`/facilities/${facility.slug}`} className="rounded-[24px] bg-warm-50 p-5 shadow-card">
                <p className="text-sm font-bold text-leaf-600">{facility.prefecture}{facility.area}</p>
                <h3 className="mt-2 text-xl font-black text-ink">{facility.name}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/65">{facility.service}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="font-display text-3xl font-black text-ink">よくある質問</h2>
          <div className="mt-6 grid gap-4">
            {[...details.faq.map((q) => ({ q, a: "状況によって異なります。まずは相談時に今の状態をお聞かせください。" })), ...faqs.slice(0, 2)].slice(0, 4).map((faq) => (
              <details key={faq.q} className="border-t border-leaf-100 py-5">
                <summary className="cursor-pointer list-none text-base font-black text-ink">{faq.q}</summary>
                <p className="mt-3 text-sm leading-8 text-ink/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <RelatedLinks
        links={[
          { label: "相談してみる", href: "/consultation" },
          { label: "近くの施設", href: "/facilities" },
          { label: "よくある質問", href: "/faq" }
        ]}
      />
      <FinalCtaSection />
    </main>
  );
}
