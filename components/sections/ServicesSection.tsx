import Link from "next/link";
import { services } from "@/data/site";
import { EmotionalImage } from "@/components/ui/EmotionalImage";
import { serviceImages } from "@/lib/imageAssets";

export function ServicesSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-leaf-600">
              Support
            </p>
            <h2 className="mt-5 font-display text-3xl font-black leading-[1.35] text-ink sm:text-5xl">
              制度名ではなく、
              <br />
              今の不安から選べます。
            </h2>
          </div>
          <p className="max-w-xl text-base leading-9 text-ink/66">
            児・放から働く・暮らす支援まで、加古川、稲美、天理、高砂の地域に合わせて相談できます。
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group grid gap-6 transition duration-300 hover:-translate-y-1 ${
                index === 0 || index === 5 ? "lg:col-span-2 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" : ""
              }`}
            >
              <EmotionalImage
                src={serviceImages[index]}
                alt={`${service.title}の支援風景。${service.photoMoment}`}
                className={index === 0 || index === 5 ? "min-h-[360px] rounded-[22px] lg:min-h-[500px]" : "min-h-[300px] rounded-[22px]"}
                sizes={index === 0 || index === 5 ? "(max-width: 768px) 92vw, 58vw" : "(max-width: 768px) 92vw, 42vw"}
              />
              <div className="border-t border-leaf-100 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-leaf-600">{service.label}</p>
                <h3 className="mt-3 font-display text-3xl font-black leading-[1.35] text-ink">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-md text-base font-bold leading-8 text-ink/72">
                  {service.change}
                </p>
                <p className="mt-7 text-sm font-bold text-leaf-700">
                  詳しく見る
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
