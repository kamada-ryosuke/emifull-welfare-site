import { Button } from "@/components/ui/Button";
import { EmotionalImage } from "@/components/ui/EmotionalImage";

const trustItems = [
  "診断がなくてもOK",
  "見学・相談無料",
  "子どもから大人まで対応",
  "LINE相談可能"
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(242,251,255,0.98),rgba(255,255,255,0.9)_52%,rgba(255,255,255,1)_100%)]" />
      <div className="absolute right-[-12rem] top-[-16rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-sky/70 blur-3xl" />
      <div className="absolute left-[-10rem] top-36 -z-10 h-[24rem] w-[24rem] rounded-full bg-white blur-3xl" />

      <div className="relative px-4 pb-14 pt-7 sm:px-6 sm:pb-20 lg:px-8 lg:pt-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:min-h-[760px] lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
          <div className="relative z-20 max-w-xl pt-5 sm:pt-10 lg:pt-0">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-leaf-700">
              EMIFULL Welfare
            </p>
            <h1 className="mt-5 font-display text-[2.75rem] font-black leading-[1.13] text-ink sm:text-6xl lg:text-[5.2rem]">
              人生を、
              <br />
              咲かせつづける
              <br className="sm:hidden" />
              福祉。
            </h1>
            <p className="mt-6 text-base font-bold leading-8 text-ink/72 sm:text-lg sm:leading-9">
              発達、学び、働く、暮らす。EMIFULLは、子どもから大人まで一人ひとりの人生に寄り添います。
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-skyBrand/25 bg-white/80 px-3.5 py-2 text-xs font-black text-leaf-800 shadow-[0_8px_22px_rgba(33,112,159,0.07)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[22px] bg-white/82 p-4 shadow-[0_18px_45px_rgba(33,112,159,0.12)] backdrop-blur sm:p-5">
              <p className="font-display text-2xl font-black leading-snug text-ink">
                まずは相談してください。
              </p>
              <p className="mt-2 text-sm font-bold leading-7 text-ink/65">
                小さな違和感の段階でも大丈夫です。見学だけ、LINEでの相談だけでも受け付けています。
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Button href="/consultation?type=line" className="w-full">
                  LINEで相談する
                </Button>
                <Button href="/consultation?type=visit" variant="secondary" className="w-full">
                  見学を予約する
                </Button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[410px] sm:min-h-[560px] lg:min-h-[720px]">
            <EmotionalImage
              src="/images/hero-life-01.webp"
              alt="自然光の入る室内で、複数の子どもとEMIFULLスタッフが床に座って関わる支援風景"
              className="absolute inset-0 rounded-[24px] shadow-soft lg:rounded-[34px]"
              imageClassName="object-[52%_45%]"
              priority
              sizes="(max-width: 768px) 92vw, 58vw"
            />
            <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.16)_38%,rgba(255,255,255,0.82)_100%)] lg:rounded-[34px]" />
            <div className="absolute bottom-5 left-4 right-4 max-w-md rounded-[22px] bg-white/88 p-5 shadow-soft backdrop-blur sm:bottom-8 sm:left-8 sm:right-auto sm:p-6">
              <p className="font-display text-2xl font-black leading-[1.45] text-ink sm:text-3xl">
                わかってもらえた。
                <br />
                みとめてもらえた。
              </p>
              <p className="mt-3 text-sm font-bold leading-7 text-leaf-800">
                その経験が、人生の力になる。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
