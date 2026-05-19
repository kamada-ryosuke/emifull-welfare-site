import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { faqs } from "@/data/site";
import { createMetadata } from "@/lib/seo";

const moreFaqs = [
  { q: "受給者証がないと利用できませんか？", a: "多くのサービスでは受給者証が必要です。ただし、取得前の相談や見学は可能です。手続きの流れもご案内します。" },
  { q: "費用はどれくらいかかりますか？", a: "制度に基づく利用者負担があります。世帯状況により上限額が異なるため、相談時に確認します。" },
  { q: "診断がなくても見学できますか？", a: "はい。診断前でも、今の困りごとを伺いながら見学や相談ができます。" },
  { q: "相談支援専門員からの問い合わせもできますか？", a: "可能です。利用希望者の状況に合わせて、対応施設や見学調整についてご相談ください。" }
];

export const metadata = createMetadata({
  title: "よくある質問",
  description: "受給者証、費用、送迎、診断、見学、利用開始など、EMIFULL障がい福祉事業部への相談前によくある質問をまとめました。",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "よくある質問", href: "/faq" }]} />
      <PageHero
        eyebrow="FAQ"
        title="相談前の不安を、少し軽くするために。"
        description="制度や利用開始のことが分からなくても大丈夫です。よくある質問をまとめました。"
        cta="まずは相談してみる"
        href="/consultation"
      />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4">
          {[...faqs, ...moreFaqs].map((faq) => (
            <details key={faq.q} className="group border-t border-leaf-100 py-6">
              <summary className="cursor-pointer list-none text-lg font-black text-ink">
                <span className="mr-2 text-leaf-600">Q.</span>{faq.q}
              </summary>
              <p className="mt-4 text-sm leading-8 text-ink/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
      <RelatedLinks links={[{ label: "相談してみる", href: "/consultation" }, { label: "施設を探す", href: "/facilities" }]} />
    </main>
  );
}
