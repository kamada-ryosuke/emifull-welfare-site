import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "EMIFULLについて",
  description:
    "人生を、咲かせつづける福祉。EMIFULL障がい福祉事業部が大切にしている、わかってもらえた・みとめてもらえた経験と、子どもから大人までの伴走支援について。",
  path: "/about"
});

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "EMIFULLについて", href: "/about" }]} />
      <PageHero
        eyebrow="About EMIFULL"
        title="人生を、咲かせつづける福祉。"
        description="わかってもらえた。みとめてもらえた。その経験が、その人の人生を少しずつひらいていく。EMIFULLは、子どもから大人まで切れ目なく寄り添う福祉を目指します。"
        cta="まずは相談してみる"
        href="/consultation"
        imageSrc="/images/hero-life-01.webp"
        imageAlt="自然光の中で子どもとスタッフが同じ目線で関わるEMIFULLの支援風景"
      />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-leaf-600">Philosophy</p>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.45] text-ink">
              制度の前に、
              <br />
              人を見る。
            </h2>
          </div>
          <div className="space-y-8 text-base leading-9 text-ink/72">
            <p>
              EMIFULLが大切にしているのは、できることを急いで増やすことだけではありません。本人の奥にあるねがいを見つけ、失敗や葛藤も含めて、その人の育ちとして受け止めることです。
            </p>
            <p>
              児童発達支援、放課後等デイサービス、保育所等訪問支援、就労継続支援B型、障がい者グループホーム。人生の場面が変わっても、支援が途切れないことを大切にしています。
            </p>
          </div>
        </div>
      </section>
      <RelatedLinks
        links={[
          { label: "ライフステージを見る", href: "/life-stage" },
          { label: "サービスを見る", href: "/services" },
          { label: "相談してみる", href: "/consultation" }
        ]}
      />
    </main>
  );
}
