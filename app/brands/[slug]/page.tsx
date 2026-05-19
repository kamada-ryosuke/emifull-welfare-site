import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { EmotionalImage } from "@/components/ui/EmotionalImage";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { brands, facilities } from "@/data/site";
import { brandImages } from "@/lib/imageAssets";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const brandPages = [
  {
    slug: "sorato",
    name: "SORATO",
    axis: "発達保障を土台に、子どものねがいを大事にする。安心できる関係と楽しい遊びを通して、自分の気持ちを言葉にしていく過程を大切にします。",
    children: "遊びたい、伝えたい、やってみたい気持ちを急がず受け止めます。",
    family: "ご家庭での困りごとを一緒に整理し、日々の小さな変化を共有します。",
    region: "園や関係機関と連携し、生活の場で安心して過ごせる環境を支えます。",
    facilities: ["SORATOてんり"]
  },
  {
    slug: "umie",
    name: "UMIE",
    axis: "学校や家庭とは違う第3の居場所をつくる。葛藤や失敗も含めた経験を重ねながら育つ過程を大切にします。",
    children: "自分のペースで過ごし、言えない気持ちも安心して置ける時間をつくります。",
    family: "学校生活や家庭での不安を一緒に整理し、無理のない次の一歩を考えます。",
    region: "学校や相談支援専門員と連携し、暮らし全体で支えられる関係をつくります。",
    facilities: ["UMIEてんり"]
  },
  {
    slug: "karada-kids",
    name: "カラダキッズ",
    axis: "運動を通して子どものねがいに寄り添う。自信を積み重ね、日常生活につながる力を育みます。",
    children: "ジャンプ、走る、挑戦する。できた経験をからだ全体で感じられる時間をつくります。",
    family: "運動面だけでなく、生活や自信の変化も一緒に見ていきます。",
    region: "園や学校生活につながる身体の使い方や参加のしやすさを支えます。",
    facilities: ["カラダキッズかこがわ"]
  },
  {
    slug: "job-college",
    name: "ジョブカレッジ",
    axis: "働く未来につながる学びを積み重ねる。「できた」「役に立てた」「認めてもらえた」経験を大切にします。",
    children: "PCや作業を通して、役割を持つことや社会とつながる感覚を育てます。",
    family: "進路や将来への不安を一緒に整理し、今からできる経験を考えます。",
    region: "学校、地域、就労支援とつながりながら、将来の選択肢を広げます。",
    facilities: ["ジョブカレッジかこがわ"]
  },
  {
    slug: "bloom",
    name: "BLOOM",
    axis: "園・学校・家庭をつなぎ、本人が安心して過ごせる環境を整えることを大切にします。",
    children: "本人が普段過ごす場所で、困りごとの背景を丁寧に見立てます。",
    family: "家庭だけで抱え込まないよう、関係者との橋渡しを行います。",
    region: "園、学校、関係機関と連携し、支援が日常へつながるようにします。",
    facilities: ["各施設から訪問支援"]
  },
  {
    slug: "hinode-sharehome",
    name: "Hinodeシェアホーム",
    axis: "地域の中で、自分らしく暮らす生活を支える。安心できる帰る場所を大切にします。",
    children: "生活者としての本人のペース、選択、安心を尊重します。",
    family: "家族亡きあとや一人暮らしの不安を、段階的に相談できます。",
    region: "地域の中で暮らし続けるための関係づくりを支えます。",
    facilities: ["Hinodeシェアホーム"]
  },
  {
    slug: "nojigiku",
    name: "のじぎく",
    axis: "働く経験を通して、社会とのつながりを育む。毎日の習慣と役割を大切にします。",
    children: "利用者一人ひとりのペースを尊重し、作業の中で役割を見つけます。",
    family: "日中活動や働くことへの不安を一緒に整理します。",
    region: "地域の仕事や人とのつながりを通して、社会参加を支えます。",
    facilities: ["のじぎく"]
  }
];

export function generateStaticParams() {
  return brandPages.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = brandPages.find((item) => item.slug === slug);
  const brand = page ? brands.find((item) => item.name === page.name) : undefined;
  if (!page || !brand) return {};

  return createMetadata({
    title: `${brand.name} | ${brand.description}`,
    description: `${brand.description} ${page.axis}`,
    path: `/brands/${page.slug}`,
    image: brandImages[brand.name]
  });
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = brandPages.find((item) => item.slug === slug);
  const brand = page ? brands.find((item) => item.name === page.name) : undefined;

  if (!page || !brand) notFound();

  const breadcrumbs = [
    { name: "トップ", href: "/" },
    { name: "ブランド", href: "/brands" },
    { name: brand.name, href: `/brands/${page.slug}` }
  ];
  const relatedFacilities = facilities.filter((facility) => page.facilities.includes(facility.name));

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow={brand.stage}
        title={brand.name}
        description={brand.description}
        cta="このブランドについて相談する"
        href="/consultation"
        imageSrc={brandImages[brand.name]}
        imageAlt={`${brand.name}の支援風景。${brand.scene}`}
      />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-leaf-600">Brand Message</p>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.4] text-ink">
              {brand.emotionalCopy}
            </h2>
          </div>
          <div className="grid gap-5">
            {[
              ["外向けブランド文", brand.description],
              ["支援軸", page.axis],
              ["こども・利用者に対して", page.children],
              ["保護者・家族に対して", page.family],
              ["地域に対して", page.region]
            ].map(([title, text]) => (
              <article key={title} className="rounded-[28px] bg-warm-50 p-6 shadow-card">
                <h3 className="text-lg font-black text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-8 text-ink/72">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <h2 className="font-display text-3xl font-black text-ink">対応施設</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {page.facilities.map((facility) => (
              <span key={facility} className="rounded-full bg-leaf-50 px-4 py-2 text-sm font-bold text-leaf-800">
                {facility}
              </span>
            ))}
          </div>
          {relatedFacilities.length ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedFacilities.map((facility) => (
                <a key={facility.slug} href={`/facilities/${facility.slug}`} className="grid gap-5 rounded-[26px] bg-warm-50 p-4 shadow-card">
                  <EmotionalImage src={facility.image} alt={`${facility.name}の支援風景`} className="h-64 rounded-[20px]" />
                  <div className="px-2 pb-2">
                    <p className="text-sm font-bold text-leaf-600">{facility.prefecture}{facility.area}</p>
                    <h3 className="mt-2 text-2xl font-black text-ink">{facility.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <RelatedLinks
        links={[
          { label: "サービスを見る", href: "/services" },
          { label: "近くの施設", href: "/facilities" },
          { label: "相談してみる", href: "/consultation" }
        ]}
      />
    </main>
  );
}
