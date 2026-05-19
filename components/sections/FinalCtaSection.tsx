import { Button } from "@/components/ui/Button";

export function FinalCtaSection() {
  return (
    <section className="bg-warm-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[36px] bg-white p-7 text-center shadow-soft sm:p-14">
        <p className="text-sm font-bold text-leaf-600">Consultation</p>
        <h2 className="mt-3 font-display text-3xl font-black leading-[1.45] text-ink sm:text-4xl">
          まだ言葉になっていない不安でも、
          <br className="hidden sm:block" />
          相談だけで大丈夫です。
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink/72">
          年齢、地域、今のお困りごとを伺いながら、利用できるサービスや見学先を一緒に整理します。決める前に、まず話すところから始められます。
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/consultation?type=line">LINEで相談する</Button>
          <Button href="/consultation?type=visit" variant="secondary">
            見学を予約する
          </Button>
          <Button href="/facilities" variant="secondary">
            施設を探す
          </Button>
        </div>
      </div>
    </section>
  );
}
