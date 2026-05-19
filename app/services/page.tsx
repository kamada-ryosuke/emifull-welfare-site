import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "サービス一覧",
  description:
    "児童発達支援、放課後等デイサービス、保育所等訪問支援、就労継続支援B型、障がい者グループホームまで、人生の流れに沿ってEMIFULLの支援を紹介します。",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "サービス", href: "/services" }]} />
      <PageHero
        eyebrow="Services"
        title="制度名ではなく、今の不安から支援を選ぶ。"
        description="発達、学び、園・学校、働く、暮らす。今必要な支援と、その先につながる支援を見つけやすく整理しています。"
        cta="相談して整理する"
        href="/consultation"
      />
      <ServicesSection />
      <FinalCtaSection />
    </main>
  );
}
