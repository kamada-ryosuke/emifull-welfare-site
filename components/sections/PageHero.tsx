import { Button } from "@/components/ui/Button";
import { EmotionalImage } from "@/components/ui/EmotionalImage";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
  href,
  imageSrc = "/images/consultation-calm.webp",
  imageAlt = "自然光の中で安心して相談できる空気を感じる場面"
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-warm-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(244,207,112,0.22),transparent_26%),radial-gradient(circle_at_84%_16%,rgba(191,220,232,0.28),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-leaf-600">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl font-black leading-[1.35] text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-9 text-ink/72 sm:text-lg">
            {description}
          </p>
          {cta && href ? (
            <div className="mt-8">
              <Button href={href}>{cta}</Button>
            </div>
          ) : null}
        </div>
        <EmotionalImage
          src={imageSrc}
          alt={imageAlt}
          label="説明ではなく、空気で伝えるビジュアル。"
          className="min-h-[320px] lg:min-h-[420px]"
          priority
        />
      </div>
    </section>
  );
}
