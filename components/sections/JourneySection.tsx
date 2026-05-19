export function JourneySection() {
  return (
    <section className="relative overflow-hidden bg-warm-50 py-28 sm:py-44">
      <div className="absolute left-[12%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-leaf-300/45 to-transparent lg:block" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr]">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-leaf-600">
            Life With EMIFULL
          </p>
          <div>
            <h2 className="max-w-4xl font-display text-4xl font-black leading-[1.55] text-ink sm:text-6xl">
              遊ぶ日。
              <br />
              うまくいかない日。
              <br />
              誰かの役に立てた日。
            </h2>
            <p className="mt-10 max-w-xl text-base leading-9 text-ink/66">
              その一つひとつが、人生の根を少しずつ深くしていきます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
