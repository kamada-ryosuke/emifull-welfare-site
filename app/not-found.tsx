import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="bg-warm-50 px-4 py-24 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-[38px] bg-white p-8 text-center shadow-soft sm:p-12">
        <p className="text-sm font-bold text-leaf-600">404</p>
        <h1 className="mt-4 font-display text-3xl font-black leading-[1.45] text-ink sm:text-4xl">
          ページが見つかりませんでした。
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-ink/72">
          探していた情報が見つからない場合も、相談窓口から一緒に整理できます。
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">トップへ戻る</Button>
          <Button href="/consultation" variant="secondary">まずは相談してみる</Button>
        </div>
      </section>
    </main>
  );
}
