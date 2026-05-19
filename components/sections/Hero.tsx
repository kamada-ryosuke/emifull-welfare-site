import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const trustItems = [
  "診断がなくてもOK",
  "見学・相談無料",
  "子どもから大人まで",
  "LINE相談できます"
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fbfeff]">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#fbfeff_0%,#f2fbff_46%,#ffffff_100%)]" />
      <div className="absolute left-1/2 top-[-18rem] -z-20 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-sky/70 blur-3xl" />
      <div className="absolute right-[-16rem] top-12 -z-20 h-[38rem] w-[38rem] rounded-full bg-skyBrand/20 blur-3xl" />
      <div className="absolute bottom-[-18rem] left-[-14rem] -z-20 h-[38rem] w-[38rem] rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto min-h-[calc(100svh-72px)] max-w-[1440px] px-4 pb-12 pt-8 sm:px-6 lg:min-h-[820px] lg:px-8 lg:pb-20 lg:pt-10">
        <div className="absolute inset-x-4 top-[22rem] h-[28rem] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(23,48,64,0.13)] sm:inset-x-8 sm:top-[24rem] sm:h-[34rem] sm:rounded-[3rem] lg:left-[42%] lg:right-8 lg:top-14 lg:h-[720px]">
          <Image
            src="/images/hero-life-01.webp"
            alt="自然光の入る空間で、子どもとEMIFULLスタッフが同じ目線で関わっている様子"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 92vw"
            className="object-cover object-[52%_44%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,254,255,0.72)_0%,rgba(251,254,255,0.22)_38%,rgba(251,254,255,0)_68%),linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.04)_38%,rgba(255,255,255,0.72)_100%)]" />
        </div>

        <div className="absolute left-[-7rem] top-[18rem] hidden h-56 w-56 rounded-full border border-skyBrand/20 lg:block" />
        <div className="absolute bottom-28 right-[28%] hidden h-24 w-24 rounded-full border border-white/80 bg-white/30 backdrop-blur lg:block" />

        <div className="relative z-10 flex min-h-[calc(100svh-112px)] flex-col lg:min-h-[720px]">
          <div className="max-w-[780px] pt-3 sm:pt-10 lg:pt-20">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-leaf-700 sm:text-xs">
              EMIFULL Welfare
            </p>
            <h1 className="mt-6 font-display text-[3.55rem] font-black leading-[1.04] tracking-normal text-ink sm:text-[5.6rem] lg:text-[7.7rem]">
              人生を、
              <br />
              咲かせる
              <br />
              福祉。
            </h1>
            <p className="mt-8 max-w-xl text-lg font-bold leading-9 text-ink/76 sm:text-xl sm:leading-10">
              発達も、学びも、暮らしも。
              <br />
              子どもから大人まで、寄り添い続ける。
            </p>
          </div>

          <div className="mt-[19rem] max-w-xl sm:mt-[24rem] lg:mt-auto lg:pb-8">
            <div className="flex flex-wrap gap-2.5">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/78 px-4 py-2 text-xs font-black text-leaf-800 shadow-[0_10px_28px_rgba(33,112,159,0.08)] ring-1 ring-skyBrand/16 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/consultation" className="min-h-[58px] px-8 text-base">
                まずはお話を聞かせてください
              </Button>
              <Link
                href="/life-stage"
                className="inline-flex min-h-[52px] items-center text-sm font-black text-leaf-800 transition hover:text-leaf-600"
              >
                支援の流れを見る
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 z-10 hidden max-w-xs rounded-[1.6rem] bg-white/78 p-5 text-sm font-bold leading-7 text-ink/72 shadow-[0_18px_50px_rgba(23,48,64,0.11)] backdrop-blur lg:block">
          わかってもらえた。
          <br />
          みとめてもらえた。
          <br />
          その経験が、人生の力になる。
        </div>

        <div className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 text-center text-[11px] font-black uppercase tracking-[0.22em] text-leaf-700/58 sm:block">
          Scroll
          <span className="mx-auto mt-2 block h-10 w-px bg-gradient-to-b from-leaf-500/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
