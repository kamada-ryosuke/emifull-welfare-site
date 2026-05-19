export function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-leaf-800 py-32 text-white sm:py-48">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(199,236,250,0.24),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.16),transparent_26%),linear-gradient(180deg,rgba(9,92,132,0.96),rgba(8,71,101,1))]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/48">
          Philosophy
        </p>
        <h2 className="mt-8 max-w-5xl font-display text-4xl font-black leading-[1.55] sm:text-6xl">
          できるようになる前に、
          <br />
          わかってもらえた記憶がある。
        </h2>
        <p className="mt-10 max-w-2xl text-base leading-9 text-white/76 sm:text-lg">
          支援の中心にあるのは、制度ではなく人との関わり。
          その人の中にあるねがいを、急がず、同じ目線で見つけていきます。
        </p>
      </div>
    </section>
  );
}
