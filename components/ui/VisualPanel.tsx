import { EmotionalImage } from "@/components/ui/EmotionalImage";

export function VisualPanel() {
  return (
    <div className="hero-visual relative min-h-[460px] overflow-hidden rounded-[40px] bg-warm-100 shadow-soft sm:min-h-[560px]">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(248,244,234,0.2),rgba(230,240,223,0.85)),radial-gradient(circle_at_28%_18%,rgba(244,207,112,0.46),transparent_28%),radial-gradient(circle_at_76%_16%,rgba(191,220,232,0.8),transparent_30%)]" />
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(120deg,transparent_0_46%,rgba(255,255,255,0.55)_46%_48%,transparent_48%_100%)]" />

      <EmotionalImage
        src="/images/hero-life-01.webp"
        alt="木漏れ日の中で子どもと大人が近い距離で過ごす、人生に寄り添う支援の空気"
        className="photo-card-main absolute left-5 top-8 h-64 w-[70%] sm:left-8 sm:h-72"
        label="床に座って、ことばになる前の気持ちを受け止める距離。"
        priority
        sizes="(max-width: 768px) 68vw, 38vw"
      />
      <EmotionalImage
        src="/images/brand-umie.webp"
        alt="放課後の静かな部屋でノートを前に自分のペースで過ごす時間"
        className="absolute right-4 top-36 h-44 w-[48%] sm:right-8 sm:top-40"
        label="放課後、少し力を抜ける居場所。"
        sizes="(max-width: 768px) 48vw, 26vw"
      />
      <EmotionalImage
        src="/images/brand-job-college.webp"
        alt="PCと作業メモに向かう手元、役割を持つ静かな時間"
        className="absolute bottom-24 left-7 h-44 w-[54%] sm:left-10"
        label="役割を持つ、静かな手元の時間。"
        sizes="(max-width: 768px) 54vw, 28vw"
      />

      <div className="absolute bottom-8 right-5 max-w-[62%] rounded-[28px] bg-white/88 p-5 shadow-card backdrop-blur sm:right-8">
        <p className="text-sm font-black text-leaf-800">相談していいと思える場所へ</p>
        <p className="mt-2 text-xs leading-6 text-ink/68">
          日常の小さな表情、手元、会話から、その人らしい一歩を見つけます。
        </p>
      </div>

      <div className="leaf leaf-1" />
      <div className="leaf leaf-2" />
      <div className="leaf leaf-3" />
    </div>
  );
}
