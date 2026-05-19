import { consultationItems } from "@/data/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { createMetadata } from "@/lib/seo";

const contactRoutes = [
  { title: "LINE相談", text: "まずは気軽に聞きたい方。短い文章で大丈夫です。", href: "/consultation?type=line" },
  { title: "電話相談", text: "直接話して確認したい方。正式番号は公開前に設定します。", href: "tel:0000000000" },
  { title: "見学予約", text: "実際に雰囲気を見たい方。希望エリアとサービスをお知らせください。", href: "/consultation?type=visit" },
  { title: "施設検索", text: "近くの事業所を先に探したい方。地域から選べます。", href: "/facilities" },
  { title: "フォーム相談", text: "状況を少し整理して送りたい方。後日担当者が確認します。", href: "#form" }
];

export const metadata = createMetadata({
  title: "まずは相談してみる",
  description:
    "子どもの発達、学校生活、不登校、働くこと、暮らしのこと。制度やサービスが分からない段階からEMIFULLへ相談できます。",
  path: "/consultation",
  image: "/images/consultation-calm.webp"
});

export default function ConsultationPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "まずは相談してみる", href: "/consultation" }]} />
      <PageHero
        eyebrow="Consultation"
        title="相談だけでも、大丈夫です。"
        description="制度が分からない、どの施設が合うか分からない。そんな段階から、今のお困りごとを一緒に整理します。"
        imageSrc="/images/consultation-calm.webp"
        imageAlt="安心して相談できる自然光の相談風景"
      />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-warm-50 p-6 shadow-soft sm:p-10">
          <p className="text-sm font-bold text-leaf-600">Choose Contact</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-[1.45] text-ink">
            今の気持ちに近い入口を選んでください。
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {contactRoutes.map((item) => (
              <a key={item.title} href={item.href} className="rounded-[24px] bg-white p-5 shadow-card transition hover:-translate-y-1">
                <h3 className="text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/66">{item.text}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
          {consultationItems.map((item) => (
            <article key={item.title} className="rounded-[30px] bg-warm-50 p-6 shadow-card">
              <h2 className="text-xl font-black text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/72">{item.text}</p>
            </article>
          ))}
        </div>

        <form id="form" className="mx-auto mt-12 max-w-4xl rounded-[38px] bg-white p-6 shadow-soft sm:p-10" aria-label="相談フォーム">
          <p className="text-sm font-bold text-leaf-600">Consultation Form</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-[1.45] text-ink">
            まずは、今の状況を少しだけ聞かせてください。
          </h2>
          <p className="mt-4 text-sm leading-7 text-ink/64">
            このフォームは静的HTML版の仮UIです。公開時は送信先フォームまたは外部フォームURLを設定してください。
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-ink">
              お名前
              <input className="min-h-12 rounded-2xl border border-leaf-100 bg-warm-50 px-4 text-base font-medium outline-none focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100" name="name" autoComplete="name" required />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              連絡先メール
              <input className="min-h-12 rounded-2xl border border-leaf-100 bg-warm-50 px-4 text-base font-medium outline-none focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100" name="email" type="email" autoComplete="email" required />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
              相談したいこと
              <select className="min-h-12 rounded-2xl border border-leaf-100 bg-warm-50 px-4 text-base font-medium outline-none focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100" name="type" defaultValue="">
                <option value="" disabled>近いものを選んでください</option>
                {consultationItems.map((item) => (
                  <option key={item.title}>{item.title}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
              今のお困りごと
              <textarea className="min-h-36 rounded-2xl border border-leaf-100 bg-warm-50 px-4 py-3 text-base font-medium leading-8 outline-none focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100" name="message" />
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-leaf-700 px-6 py-3 text-sm font-bold text-white shadow-card transition hover:bg-leaf-800 focus:outline-none focus:ring-4 focus:ring-leaf-200 sm:w-auto"
          >
            相談内容を送信する
          </button>
        </form>
      </section>
      <FinalCtaSection />
    </main>
  );
}
