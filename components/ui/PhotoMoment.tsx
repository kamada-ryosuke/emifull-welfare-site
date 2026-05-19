import { cn } from "@/lib/utils";
import type { Brand } from "@/data/site";

type PhotoMomentProps = {
  mood: Brand["mood"];
  label?: string;
  className?: string;
  compact?: boolean;
};

const moodStyles: Record<Brand["mood"], string> = {
  play: "from-warm-200 via-leaf-100 to-white",
  study: "from-sky/70 via-white to-warm-100",
  move: "from-sun/55 via-white to-leaf-100",
  work: "from-warm-300/70 via-white to-sky/55",
  visit: "from-white via-leaf-50 to-sky/55",
  home: "from-warm-200 via-white to-leaf-100",
  craft: "from-warm-300/60 via-white to-leaf-100"
};

export function PhotoMoment({ mood, label, className, compact = false }: PhotoMomentProps) {
  return (
    <div
      className={cn(
        "photo-moment relative overflow-hidden rounded-[32px] bg-gradient-to-br shadow-card",
        moodStyles[mood],
        compact ? "min-h-[148px]" : "min-h-[260px]",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(244,207,112,0.34),transparent_22%),radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.72),transparent_26%)]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(120deg,transparent_0_42%,rgba(255,255,255,0.72)_42%_44%,transparent_44%_100%)]" />
      <Scene mood={mood} compact={compact} />
      {label ? (
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/78 px-4 py-3 text-xs font-bold leading-5 text-leaf-800 shadow-card backdrop-blur">
          {label}
        </div>
      ) : null}
    </div>
  );
}

function Scene({ mood, compact }: { mood: Brand["mood"]; compact: boolean }) {
  const scale = compact ? "scale-75" : "scale-100";

  return (
    <div className={cn("absolute inset-0 origin-bottom-right", scale)}>
      <div className="absolute bottom-10 left-8 h-20 w-28 rounded-[24px] bg-white/54" />
      <div className="absolute bottom-16 left-16 h-3 w-32 rounded-full bg-leaf-600/22" />
      {mood === "play" ? (
        <>
          <div className="absolute bottom-24 left-16 h-16 w-16 rounded-full bg-leaf-500/28" />
          <div className="absolute bottom-28 left-32 h-10 w-10 rounded-xl bg-sun/55 rotate-12" />
          <div className="absolute bottom-20 right-16 h-8 w-24 rounded-full bg-white/70" />
        </>
      ) : null}
      {mood === "study" ? (
        <>
          <div className="absolute bottom-20 left-14 h-24 w-36 rounded-[22px] bg-white/62" />
          <div className="absolute bottom-32 left-24 h-2 w-20 rounded-full bg-leaf-500/35" />
          <div className="absolute bottom-28 left-24 h-2 w-28 rounded-full bg-leaf-500/25" />
          <div className="absolute bottom-24 left-24 h-2 w-16 rounded-full bg-leaf-500/25" />
        </>
      ) : null}
      {mood === "move" ? (
        <>
          <div className="absolute bottom-22 left-20 h-20 w-20 rounded-full border-[10px] border-sun/60" />
          <div className="absolute bottom-20 right-14 h-10 w-28 rounded-full bg-leaf-500/30 rotate-[-10deg]" />
          <div className="absolute bottom-40 right-20 h-5 w-5 rounded-full bg-leaf-600/35" />
        </>
      ) : null}
      {mood === "work" ? (
        <>
          <div className="absolute bottom-20 left-12 h-24 w-40 rounded-[18px] bg-white/70" />
          <div className="absolute bottom-28 left-20 h-12 w-24 rounded-xl bg-leaf-700/18" />
          <div className="absolute bottom-18 right-16 h-2 w-24 rounded-full bg-ink/20" />
        </>
      ) : null}
      {mood === "visit" ? (
        <>
          <div className="absolute bottom-14 left-12 h-36 w-28 rounded-t-[28px] bg-white/58" />
          <div className="absolute bottom-32 right-18 h-14 w-24 rounded-[18px] bg-sky/62" />
          <div className="absolute bottom-22 right-14 h-2 w-24 rounded-full bg-leaf-600/26" />
        </>
      ) : null}
      {mood === "home" ? (
        <>
          <div className="absolute bottom-14 left-12 h-28 w-44 rounded-[24px] bg-white/64" />
          <div className="absolute bottom-28 left-24 h-16 w-24 rounded-t-full bg-sun/26" />
          <div className="absolute bottom-18 right-16 h-12 w-20 rounded-2xl bg-leaf-500/22" />
        </>
      ) : null}
      {mood === "craft" ? (
        <>
          <div className="absolute bottom-16 left-12 h-16 w-44 rounded-[18px] bg-white/66" />
          <div className="absolute bottom-30 left-20 h-4 w-28 rounded-full bg-leaf-700/24 rotate-[-6deg]" />
          <div className="absolute bottom-28 right-18 h-10 w-10 rounded-full bg-sun/48" />
        </>
      ) : null}
    </div>
  );
}
