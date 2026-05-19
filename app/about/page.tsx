import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "EMIFULLについて",
  description:
    "人生を、咲かせつづける福祉。EMIFULL障がい福祉事業部が大切にしている、わかってもらえた・みとめてもらえた経験と、子どもから大人までの伴走支援について。",
  path: "/about"
});

const values = [
  {
    title: "わかろうとする",
    text: "言葉にならない気持ちも、行動の奥にあるねがいも、急がずに受けとめます。"
  },
  {
    title: "みとめる",
    text: "できたことだけでなく、迷ったこと、挑戦したこと、立ち止まった時間も大切にします。"
  },
  {
    title: "つなげる",
    text: "子どもの時間から、大人の働く・暮らす時間まで。支援が切れない安心をつくります。"
  }
];

const journey = [
  "遊ぶ",
  "学ぶ",
  "試す",
  "働く",
  "暮らす"
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fbfeff]">
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "EMIFULLについて", href: "/about" }]} />

      <section className="relative min-h-[calc(100svh-96px)] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(119,200,236,0.24),transparent_34%),linear-gradient(180deg,#fbfeff_0%,#f2fbff_54%,#ffffff_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:min-h-[720px] lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="z-10 max-w-xl pt-8 sm:pt-14 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-leaf-600">
              About EMIFULL
            </p>
            <h1 className="mt-5 font-display text-[2.7rem] font-black leading-[1.22] text-ink sm:text-6xl lg:text-[4.8rem]">
              人生は、
              <br />
              ひとりで
              <br className="hidden sm:block" />
              咲かない。
            </h1>
            <p className="mt-7 max-w-lg text-lg font-bold leading-9 text-ink/78 sm:text-xl">
              わかってもらえた。
              <br />
              みとめてもらえた。
              <br />
              その経験が、人生の力になる。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation" className="min-h-[58px] px-8 text-base">
                まずは相談してみる
              </Button>
              <Button href="/life-stage" variant="secondary" className="min-h-[58px] px-8 text-base">
                支援の流れを見る
              </Button>
            </div>
          </div>

          <div className="relative min-h-[430px] sm:min-h-[560px] lg:min-h-[680px]">
            <div className="absolute right-0 top-0 h-[78%] w-[86%] overflow-hidden rounded-[2.2rem] shadow-[0_28px_80px_rgba(23,48,64,0.14)] sm:rounded-[3rem]">
              <Image
                src="/images/hero-life-01.webp"
                alt="自然光の入る空間で、子どもとスタッフが同じ目線で関わっている様子"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 92vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/54 via-white/10 to-skyBrand/10" />
            </div>
            <div className="absolute bottom-0 left-0 w-[68%] overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_24px_60px_rgba(23,48,64,0.13)] sm:w-[54%] sm:rounded-[2.4rem]">
              <Image
                src="/images/brand-sorato-final.png"
                alt="床に座り、木のおもちゃを囲みながら子どもたちとスタッフが過ごす支援風景"
                width={760}
                height={560}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-[8%] right-[6%] hidden max-w-[220px] rounded-3xl bg-white/82 p-5 text-sm font-bold leading-7 text-ink/74 shadow-card backdrop-blur md:block">
              制度の前に、
              <br />
              その人の時間を見る。
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-3xl font-black leading-[1.65] text-ink sm:text-5xl">
            支援とは、
            <br />
            できることを急がせることではなく、
            <br className="hidden sm:block" />
            その人の中にある力が
            <br />
            ひらく時間を信じること。
          </p>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-skyBrand/45 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(23,48,64,0.12)] sm:rounded-[3rem]">
            <Image
              src="/images/consultation-calm.webp"
              alt="やわらかな光の中で、安心して相談できる距離感の面談風景"
              width={1200}
              height={820}
              className="aspect-[1.08/1] w-full object-cover sm:aspect-[1.35/1]"
            />
          </div>
          <div className="lg:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-leaf-600">
              Philosophy
            </p>
            <h2 className="mt-5 font-display text-3xl font-black leading-[1.45] text-ink sm:text-5xl">
              制度より先に、
              <br />
              人を見る。
            </h2>
            <p className="mt-7 text-base leading-9 text-ink/72 sm:text-lg">
              児童発達支援、放課後等デイサービス、保育所等訪問支援、就労継続支援B型、障がい者グループホーム。
              名前は違っても、根にある想いは同じです。
            </p>
            <p className="mt-6 text-xl font-black leading-10 text-leaf-800">
              その人が、その人らしく進めるように。
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-leaf-600">
              What We Care
            </p>
            <h2 className="mt-5 font-display text-3xl font-black leading-[1.45] text-ink sm:text-5xl">
              大切にしていることは、
              <br />
              いつも少し静かです。
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={[
                  "border-t border-skyBrand/35 pt-7",
                  index === 1 ? "md:mt-16" : "",
                  index === 2 ? "md:mt-32" : ""
                ].join(" ")}
              >
                <span className="text-sm font-black text-skyBrand">0{index + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-black text-ink">
                  {value.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-ink/70">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white via-warm-100 to-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-leaf-600">
                Life Journey
              </p>
              <h2 className="mt-5 font-display text-3xl font-black leading-[1.45] text-ink sm:text-5xl">
                子どもから大人まで。
                <br />
                支援が、途切れない。
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-9 text-ink/70 sm:text-lg">
              遊ぶ時間、学ぶ時間、失敗してもう一度試す時間。
              働くこと、暮らすことへ向かう時間。
              EMIFULLは、その流れを一つの人生として見つめます。
            </p>
          </div>

          <div className="mt-14 overflow-x-auto pb-4">
            <div className="flex min-w-[760px] items-center gap-4">
              {journey.map((item, index) => (
                <div key={item} className="flex flex-1 items-center gap-4">
                  <Link
                    href="/life-stage"
                    className="group flex aspect-square w-full items-center justify-center rounded-full bg-white/86 text-center font-display text-2xl font-black text-ink shadow-card ring-1 ring-skyBrand/20 transition hover:-translate-y-1 hover:bg-leaf-50"
                  >
                    {item}
                  </Link>
                  {index < journey.length - 1 ? (
                    <span className="h-px w-10 bg-skyBrand/55" aria-hidden="true" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-leaf-600">
              For Families
            </p>
            <h2 className="mt-5 font-display text-3xl font-black leading-[1.45] text-ink sm:text-5xl">
              「相談していいのかな」
              <br />
              からで、大丈夫です。
            </h2>
            <p className="mt-7 text-base leading-9 text-ink/72 sm:text-lg">
              診断の有無、受給者証、利用できるサービス。
              はじめは分からないことが多くて当然です。
              今の困りごとを、言葉にするところから一緒に始めます。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation" className="min-h-[58px] px-8 text-base">
                無料で相談する
              </Button>
              <Button href="/facilities" variant="secondary" className="min-h-[58px] px-8 text-base">
                近くの施設を探す
              </Button>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(23,48,64,0.12)] sm:rounded-[3rem] lg:order-2">
            <Image
              src="/images/hero-life-02.webp"
              alt="光の入る空間で、子どもとスタッフが自然な距離感で過ごす様子"
              width={1200}
              height={820}
              className="aspect-[1.05/1] w-full object-cover sm:aspect-[1.25/1]"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-leaf-700 via-leaf-600 to-skyBrand p-8 text-white shadow-[0_30px_90px_rgba(10,111,158,0.22)] sm:rounded-[3rem] sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/76">
              First Step
            </p>
            <h2 className="mt-5 font-display text-3xl font-black leading-[1.45] sm:text-5xl">
              ひとりで抱える前に、
              <br />
              まず話してみてください。
            </h2>
            <p className="mt-7 text-base leading-9 text-white/82 sm:text-lg">
              子どもの発達、学校生活、不登校、働くこと、暮らすこと。
              どの入口からでも大丈夫です。必要な支援へ、こちらで一緒に整理します。
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/consultation" variant="ghost" className="min-h-[58px] bg-white text-leaf-800 hover:bg-white/92">
              相談ページへ
            </Button>
            <Button href="/services" variant="secondary" className="min-h-[58px] border-white/70 bg-transparent text-white hover:bg-white/10">
              サービスを見る
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
