import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { EmotionalImage } from "@/components/ui/EmotionalImage";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { facilities } from "@/data/site";
import { breadcrumbJsonLd, createMetadata, localBusinessJsonLd } from "@/lib/seo";

const detailBySlug: Record<string, { age: string; hours: string; pickup: string; feature: string[]; recommend: string[]; day: string[]; flow: string[]; brandHref: string }> = {
  "sorato-tenri": {
    age: "未就学",
    hours: "確認中",
    pickup: "お問い合わせください",
    feature: ["遊びを通したことばと生活の支援", "床に座って同じ目線で関わる支援", "保護者との振り返り"],
    recommend: ["ことばの遅れが気になる", "集団参加に不安がある", "就学前に安心できる経験を増やしたい"],
    day: ["来所", "自由遊び・小集団活動", "片付け", "保護者へ共有"],
    flow: ["相談", "見学", "制度確認", "利用開始"],
    brandHref: "/brands/sorato"
  },
  "umie-tenri": {
    age: "小学生〜高校生",
    hours: "確認中",
    pickup: "お問い合わせください",
    feature: ["放課後の第3の居場所づくり", "学びと経験の支援", "学校・家庭との連携"],
    recommend: ["学校後に安心できる場所がほしい", "不登校や登校しぶりがある", "自分のペースで過ごしたい"],
    day: ["学校後に来所", "休憩・学習", "活動・体験", "振り返り"],
    flow: ["相談", "見学・体験", "利用計画確認", "利用開始"],
    brandHref: "/brands/umie"
  },
  "karada-kids-kakogawa": {
    age: "未就学〜小学生",
    hours: "確認中",
    pickup: "お問い合わせください",
    feature: ["運動を通した自信づくり", "挑戦する気持ちの支援", "日常生活につながる身体づくり"],
    recommend: ["体を動かす経験を増やしたい", "自信をつけたい", "集団活動に慣れたい"],
    day: ["来所", "ウォーミングアップ", "運動プログラム", "振り返り"],
    flow: ["相談", "見学", "体験", "利用開始"],
    brandHref: "/brands/karada-kids"
  },
  "job-college-kakogawa": {
    age: "中高生",
    hours: "確認中",
    pickup: "お問い合わせください",
    feature: ["PCや作業体験", "役割を持つ経験", "働く未来への見通しづくり"],
    recommend: ["将来が不安", "働く練習をしたい", "役に立てた経験を増やしたい"],
    day: ["来所・目標確認", "PC・作業活動", "振り返り", "次回の準備"],
    flow: ["相談", "見学・体験", "利用準備", "利用開始"],
    brandHref: "/brands/job-college"
  },
  "hinode-sharehome": {
    age: "大人",
    hours: "生活支援のため確認中",
    pickup: "対象外",
    feature: ["地域で暮らす住まいの支援", "食事・服薬・生活リズムの見守り", "安心できる帰る場所づくり"],
    recommend: ["一人暮らしが不安", "家族亡きあとが心配", "見守りのある暮らしを始めたい"],
    day: ["帰宅", "食事・団らん", "夜の見守り", "朝の準備"],
    flow: ["相談", "見学", "体験・条件確認", "入居調整"],
    brandHref: "/brands/hinode-sharehome"
  },
  "nojigiku-takasago": {
    age: "大人",
    hours: "確認中",
    pickup: "お問い合わせください",
    feature: ["軽作業・制作活動", "生活リズムづくり", "社会とのつながりづくり"],
    recommend: ["自分のペースで働きたい", "日中活動を探している", "社会とのつながりを持ちたい"],
    day: ["出勤・体調確認", "午前作業", "休憩", "午後作業・振り返り"],
    flow: ["相談", "見学", "体験利用", "利用開始"],
    brandHref: "/brands/nojigiku"
  }
};

export function generateStaticParams() {
  return facilities.map((facility) => ({ slug: facility.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const facility = facilities.find((item) => item.slug === slug);
  if (!facility) return {};

  return createMetadata({
    title: `${facility.name} | ${facility.area}の${facility.service}`,
    description: `${facility.description} ${facility.prefecture}${facility.area}で${facility.service}をお探しの方へ。見学だけでも相談できます。`,
    path: `/facilities/${facility.slug}`,
    image: facility.image
  });
}

export default async function FacilityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const facility = facilities.find((item) => item.slug === slug);
  if (!facility) notFound();
  const detail = detailBySlug[facility.slug];

  const breadcrumbs = [
    { name: "トップ", href: "/" },
    { name: "施設を探す", href: "/facilities" },
    { name: facility.name, href: `/facilities/${facility.slug}` }
  ];
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${facility.name} ${facility.prefecture}${facility.area}`)}`;

  return (
    <main>
      <JsonLd data={localBusinessJsonLd(facility)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow={`${facility.prefecture}${facility.area} / ${facility.service}`}
        title={facility.name}
        description={facility.description}
        cta="この施設を見学する"
        href={`/consultation?type=visit&facility=${facility.slug}`}
        imageSrc={facility.image}
        imageAlt={`${facility.name}の支援風景。${facility.atmosphere}`}
      />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <EmotionalImage
            src={facility.image}
            alt={`${facility.name}の空気感を伝える場面`}
            label={facility.atmosphere}
            className="min-h-[380px]"
          />
          <div className="rounded-[30px] bg-warm-50 p-7 shadow-card">
            <h2 className="text-2xl font-black text-ink">施設情報</h2>
            <dl className="mt-6 grid gap-4 text-sm">
              {[
                ["サービス種別", facility.service],
                ["対象年齢", detail.age],
                ["所在地", `${facility.prefecture}${facility.area}（詳細住所は確認中）`],
                ["電話番号", "確認中"],
                ["営業時間", detail.hours],
                ["送迎有無", detail.pickup],
                ["空き状況", "お問い合わせください"]
              ].map(([term, value]) => (
                <div key={term}>
                  <dt className="font-bold text-leaf-700">{term}</dt>
                  <dd className="mt-1 text-ink/72">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a href={mapHref} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center rounded-full border border-skyBrand/25 bg-white text-sm font-black text-leaf-800">
                GoogleMap
              </a>
              <a href={detail.brandHref} className="flex min-h-12 items-center justify-center rounded-full bg-leaf-700 text-sm font-black text-white">
                関連ブランド
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["支援の特徴", detail.feature],
            ["こんな方におすすめ", detail.recommend],
            ["1日の流れ", detail.day],
            ["利用までの流れ", detail.flow]
          ].map(([title, items]) => (
            <article key={title as string} className="rounded-[28px] bg-warm-50 p-6 shadow-card">
              <h2 className="text-xl font-black text-ink">{title as string}</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-ink/70">
                {(items as string[]).map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <FinalCtaSection />
    </main>
  );
}
