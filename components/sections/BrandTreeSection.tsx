import { brands } from "@/data/site";
import { EmotionalImage } from "@/components/ui/EmotionalImage";
import { brandImages } from "@/lib/imageAssets";

export function BrandTreeSection() {
  return (
    <section className="relative overflow-hidden bg-warm-50 py-28 sm:py-44">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(226,246,254,0.74),rgba(255,255,255,1))]" />
      <div className="absolute right-[-16rem] top-20 h-[34rem] w-[34rem] rounded-full bg-sky/50 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-leaf-600">
              Brand Tree
            </p>
            <h2 className="mt-6 font-display text-4xl font-black leading-[1.35] text-ink sm:text-6xl">
              ひとつの幹から、
              <br />
              いくつもの季節へ。
            </h2>
            <p className="mt-8 max-w-md text-base leading-9 text-ink/68">
              根にあるのは、わかってもらえた経験。そこから遊び、学び、働く、暮らすへ枝が伸びていきます。
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {brands.map((brand, index) => (
              <article
                key={brand.name}
                className={`brand-leaf ${index % 2 === 1 ? "sm:translate-y-16" : ""}`}
              >
                <EmotionalImage
                  src={brandImages[brand.name]}
                  alt={`${brand.name}の空気感。${brand.scene}`}
                  className="h-72 rounded-[18px]"
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
                <p className="mt-6 text-xs font-bold tracking-[0.16em] text-leaf-600">
                  {brand.stage}
                </p>
                <h3 className="mt-2 text-2xl font-black text-ink">{brand.name}</h3>
                <p className="mt-4 text-base font-black leading-8 text-ink/82">
                  {brand.emotionalCopy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
