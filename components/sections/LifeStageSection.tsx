import { lifeStages } from "@/data/site";
import { EmotionalImage } from "@/components/ui/EmotionalImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stageImages = [
  "/images/brand-sorato.webp",
  "/images/brand-umie.webp",
  "/images/brand-karada-kids.webp",
  "/images/brand-job-college.webp",
  "/images/brand-hinode.webp"
];

export function LifeStageSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Life Story"
          title="小さな一歩が、次の季節につながっていく。"
          description="未就学から暮らしまで。説明ではなく、時間の流れとして支援を見られるように。"
        />
        <div className="mt-16 grid gap-16">
          {lifeStages.map((stage, index) => (
            <article key={stage.title} className="story-card grid gap-7 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <span className="text-xs font-black tracking-[0.22em] text-leaf-500">
                  0{index + 1} / {stage.subtitle}
                </span>
                <h3 className="mt-5 font-display text-4xl font-black leading-[1.25] text-ink sm:text-6xl">
                  {stage.title}
                </h3>
                <p className="mt-7 max-w-lg text-base leading-9 text-ink/68">
                  {stage.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {stage.services.map((service) => (
                    <span key={service} className="rounded-full bg-leaf-50 px-4 py-2 text-xs font-bold text-leaf-800">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <EmotionalImage
                src={stageImages[index]}
                alt={`${stage.title}の時間を支えるEMIFULLの支援風景`}
                className="min-h-[340px] rounded-[22px] sm:min-h-[440px]"
                label={stage.subtitle}
                sizes="(max-width: 768px) 92vw, 42vw"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
