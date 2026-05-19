import Link from "next/link";
import { facilityAreas } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FacilitySearchSection() {
  return (
    <section className="bg-warm-100 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Area"
            title="近くに相談できる場所がある安心。"
            description="天理、加古川、稲美、高砂のエリアから、通いやすい施設を探せます。"
          />
          <div className="mt-8">
            <Button href="/facilities">施設一覧を見る</Button>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {facilityAreas.map((area) => (
            <Link
              key={area.area}
              href={`/areas/${area.slug}`}
              className="rounded-[26px] bg-white p-6 shadow-[0_16px_40px_rgba(33,112,159,0.08)] transition hover:-translate-y-1"
            >
              <p className="text-sm font-bold text-leaf-600">{area.prefecture}</p>
              <h3 className="mt-2 font-display text-4xl font-black text-ink">{area.area}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-leaf-50 px-3 py-1.5 text-xs font-bold text-ink/70"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <p className="mt-7 text-sm font-bold text-leaf-700">この地域を見る</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
