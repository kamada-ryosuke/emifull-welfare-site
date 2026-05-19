import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FacilitySearchSection } from "@/components/sections/FacilitySearchSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { EmotionalImage } from "@/components/ui/EmotionalImage";
import { facilities } from "@/data/site";
import { createMetadata } from "@/lib/seo";

const targetAgeBySlug: Record<string, string> = {
  "sorato-tenri": "未就学",
  "umie-tenri": "小学生〜高校生",
  "karada-kids-kakogawa": "未就学〜小学生",
  "job-college-kakogawa": "中高生",
  "hinode-sharehome": "大人",
  "nojigiku-takasago": "大人"
};

function targetAge(slug: string) {
  return targetAgeBySlug[slug] ?? "個別に相談";
}

export const metadata = createMetadata({
  title: "施設を探す",
  description:
    "天理、加古川、稲美、高砂のEMIFULL支援拠点を、地域・サービス・対象年齢から探せます。見学だけでも相談できます。",
  path: "/facilities"
});

export default function FacilitiesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "施設を探す", href: "/facilities" }]} />
      <PageHero
        eyebrow="Facilities"
        title="近くで相談できる場所を探す。"
        description="地域、サービス、対象年齢から、今の不安に近い施設へつなぎます。LINE相談・見学予約もこちらから進めます。"
        cta="まず相談する"
        href="/consultation"
        imageSrc="/images/consultation-calm.webp"
        imageAlt="安心して相談できるEMIFULLの支援風景"
      />
      <FacilitySearchSection />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-leaf-600">Facility List</p>
          <h2 className="mt-4 font-display text-3xl font-black text-ink sm:text-5xl">施設一覧</h2>
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => {
              const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${facility.name} ${facility.prefecture}${facility.area}`)}`;

              return (
                <article
                  key={facility.slug}
                  className="rounded-[26px] bg-white p-3 shadow-[0_18px_46px_rgba(33,112,159,0.09)]"
                >
                  <Link href={`/facilities/${facility.slug}`} className="group block">
                    <EmotionalImage
                      src={facility.image}
                      alt={`${facility.name}の支援風景`}
                      className="h-64 rounded-[22px]"
                      sizes="(max-width: 768px) 92vw, 30vw"
                    />
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-leaf-50 px-3 py-1.5 text-xs font-black text-leaf-700">
                          {facility.prefecture}{facility.area}
                        </span>
                        <span className="rounded-full bg-white px-3 py-1.5 text-xs font-black text-leaf-700 ring-1 ring-skyBrand/25">
                          見学相談可
                        </span>
                      </div>
                      <h3 className="mt-4 text-2xl font-black leading-snug text-ink">{facility.name}</h3>
                      <dl className="mt-4 grid gap-2 text-sm leading-7 text-ink/68">
                        <div><dt className="inline font-black text-ink">サービス：</dt><dd className="inline">{facility.service}</dd></div>
                        <div><dt className="inline font-black text-ink">対象年齢：</dt><dd className="inline">{targetAge(facility.slug)}</dd></div>
                        <div><dt className="inline font-black text-ink">空き状況：</dt><dd className="inline">確認中・相談受付中</dd></div>
                      </dl>
                    </div>
                  </Link>
                  <div className="grid gap-2 px-4 pb-4 sm:grid-cols-2">
                    <a
                      href={mapHref}
                      className="flex min-h-12 items-center justify-center rounded-full border border-skyBrand/25 bg-white text-sm font-black text-leaf-800 transition hover:-translate-y-0.5"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GoogleMap
                    </a>
                    <Link
                      href={`/consultation?type=line&facility=${facility.slug}`}
                      className="flex min-h-12 items-center justify-center rounded-full bg-leaf-700 text-sm font-black text-white transition hover:-translate-y-0.5"
                    >
                      LINE相談
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <FinalCtaSection />
    </main>
  );
}
