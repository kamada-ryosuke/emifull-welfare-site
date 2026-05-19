import { Button } from "@/components/ui/Button";
import { EmotionalImage } from "@/components/ui/EmotionalImage";

export function RecruitSection() {
  return (
    <section className="relative overflow-hidden bg-leaf-800 py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,71,101,1),rgba(10,111,158,0.78)),radial-gradient(circle_at_82%_20%,rgba(199,236,250,0.22),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
        <div className="lg:pr-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">
            Recruit
          </p>
          <h2 className="mt-5 font-display text-4xl font-black leading-[1.35] sm:text-6xl">
            誰かの“できた”を
            <br />
            人生の力に変える仕事。
          </h2>
          <p className="mt-7 max-w-xl text-base leading-9 text-white/78">
            教えるより先に、わかろうとする。信じて、待って、一緒に喜ぶ。EMIFULLは、支援観に共感する仲間を大切にします。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/recruit" variant="ghost">
              採用情報を見る
            </Button>
            <Button href="/consultation?type=recruit" variant="secondary">
              カジュアル面談
            </Button>
          </div>
        </div>
        <EmotionalImage
          src="/images/recruit-team.webp"
          alt="支援観に共感して働くEMIFULLスタッフのチーム風景"
          className="min-h-[430px] rounded-[22px] lg:min-h-[600px]"
          sizes="(max-width: 768px) 92vw, 54vw"
        />
      </div>
    </section>
  );
}
