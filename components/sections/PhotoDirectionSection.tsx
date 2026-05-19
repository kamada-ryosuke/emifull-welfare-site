import { EmotionalImage } from "@/components/ui/EmotionalImage";

const moments = [
  {
    title: "手元",
    text: "できた瞬間は、表情だけでなく手元にも残ります。",
    src: "/images/brand-nojigiku.webp"
  },
  {
    title: "会話",
    text: "正面の笑顔より、隣で話している距離感を大切にします。",
    src: "/images/brand-umie.webp"
  },
  {
    title: "暮らし",
    text: "食卓や窓の光から、ここで暮らせる安心を伝えます。",
    src: "/images/brand-hinode.webp"
  }
];

export function PhotoDirectionSection() {
  return (
    <section className="bg-white py-28 sm:py-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <EmotionalImage
            src="/images/brand-umie.webp"
            alt="自然光の中で支援者と子どもが会話するEMIFULLの空気感"
            className="min-h-[440px] rounded-[18px] lg:min-h-[640px]"
            sizes="(max-width: 768px) 92vw, 48vw"
          />
          <div className="lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-leaf-600">
              Atmosphere
            </p>
            <h2 className="mt-6 font-display text-4xl font-black leading-[1.45] text-ink sm:text-6xl">
              人の温度は、
              <br />
              日常の一瞬にあらわれる。
            </h2>
            <p className="mt-8 max-w-md text-base leading-9 text-ink/66">
              写真で見せたいのは、施設ではなく関わり。朝の光、空気、隣で話している距離感を大切にします。
            </p>
          </div>
        </div>
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {moments.map((moment) => (
            <article key={moment.title}>
              <EmotionalImage
                src={moment.src}
                alt={`${moment.title}を感じるEMIFULLのビジュアル`}
                className="min-h-[300px] rounded-[18px]"
              />
              <div className="pt-6">
                <h3 className="text-xl font-black text-ink">{moment.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{moment.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
