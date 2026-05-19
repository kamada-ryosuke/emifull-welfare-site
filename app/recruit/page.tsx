import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { RecruitSection } from "@/components/sections/RecruitSection";
import { createMetadata } from "@/lib/seo";

const recruitBlocks = [
  ["EMIFULLで働く意味", "できることを増やすだけでなく、わかってもらえた経験を人生の力に変える仕事です。"],
  ["大切にしている支援観", "教える前に、わかろうとする。急がせず、待ち、本人のねがいを一緒に見つけます。"],
  ["未経験でも安心な研修", "制度、記録、関わり方、現場同行を段階的に学べる研修体制を整えます。"],
  ["職種紹介", "児童指導員、保育士、支援員、サービス管理責任者、相談・運営職などを想定しています。"],
  ["働く環境", "チームで相談し、ひとりで抱え込まない現場づくりを大切にします。"],
  ["キャリア", "児・放、就労、暮らしの支援を横断し、支援者としての視野を広げられます。"]
];

export const metadata = createMetadata({
  title: "採用情報",
  description:
    "EMIFULLの採用は、支援観への共感を大切にしています。誰かの“できた”を人生の力に変える仕事を一緒にしませんか。",
  path: "/recruit",
  image: "/images/recruit-team.webp"
});

export default function RecruitPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "採用情報", href: "/recruit" }]} />
      <PageHero
        eyebrow="Recruit"
        title="支援する人も、人として成長できる場所へ。"
        description="EMIFULLが大切にしている支援を、ぜひ知ってください。募集条件だけではなく、目の前の人をわかろうとする姿勢に共感して出会う採用を目指します。"
        cta="カジュアル面談へ"
        href="/consultation?type=recruit"
        imageSrc="/images/recruit-team.webp"
        imageAlt="支援観に共感して働くEMIFULLスタッフのチーム風景"
      />
      <RecruitSection />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {recruitBlocks.map(([title, text]) => (
            <article key={title} className="rounded-[32px] bg-warm-50 p-7 shadow-card">
              <h2 className="text-2xl font-black text-ink">{title}</h2>
              <p className="mt-4 text-sm leading-8 text-ink/72">{text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-3 rounded-[38px] bg-warm-50 p-7 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="text-sm font-bold text-leaf-600">Entry</p>
            <h2 className="mt-2 font-display text-3xl font-black text-ink">まずは話を聞いてみたい方へ。</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="/consultation?type=recruit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-leaf-700 px-6 py-3 text-sm font-bold text-white">
              カジュアル面談
            </a>
            <a href="/consultation?type=entry" className="inline-flex min-h-12 items-center justify-center rounded-full border border-leaf-600 bg-white px-6 py-3 text-sm font-bold text-leaf-800">
              応募相談
            </a>
          </div>
        </div>
      </section>
      <FinalCtaSection />
    </main>
  );
}
