import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { facilityAreas, facilities } from "@/data/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return facilityAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = facilityAreas.find((item) => item.slug === slug);
  if (!area) return {};

  return createMetadata({
    title: `${area.area}の障がい福祉サービス`,
    description: `${area.prefecture}${area.area}で児童発達支援、放課後等デイサービス、就労継続支援B型、障がい者グループホームなどをお探しの方へ。EMIFULLが相談から見学まで支えます。`,
    path: `/areas/${area.slug}`
  });
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = facilityAreas.find((item) => item.slug === slug);
  if (!area) notFound();
  const areaFacilities = facilities.filter((facility) => facility.area === area.area);

  const breadcrumbs = [
    { name: "トップ", href: "/" },
    { name: "地域別に探す", href: "/facilities" },
    { name: area.area, href: `/areas/${area.slug}` }
  ];

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow={`${area.prefecture} ${area.area}`}
        title={`${area.area}で相談できるEMIFULLの支援`}
        description={`${area.area}エリアで利用できる支援を、年齢や目的に合わせて整理します。制度名が分からない段階でも、今の不安から相談できます。`}
        cta="この地域で相談する"
        href="/consultation"
      />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[32px] bg-warm-50 p-7 shadow-card">
          <h2 className="text-2xl font-black text-ink">対応サービス</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {area.services.map((service) => (
              <span key={service} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-leaf-800">
                {service}
              </span>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
          {areaFacilities.map((facility) => (
            <a key={facility.slug} href={`/facilities/${facility.slug}`} className="rounded-[28px] bg-warm-50 p-6 shadow-card">
              <p className="text-sm font-bold text-leaf-600">{facility.service}</p>
              <h3 className="mt-2 text-2xl font-black text-ink">{facility.name}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">{facility.description}</p>
            </a>
          ))}
        </div>
      </section>
      <FinalCtaSection />
    </main>
  );
}
