"use client";

import { Button } from "@/components/ui/Button";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="bg-warm-50 px-4 py-24 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-[38px] bg-white p-8 text-center shadow-soft sm:p-12">
        <p className="text-sm font-bold text-leaf-600">Error</p>
        <h1 className="mt-4 font-display text-3xl font-black leading-[1.45] text-ink sm:text-4xl">
          読み込みに失敗しました。
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-ink/72">
          時間をおいてもう一度お試しください。急ぎの相談は相談ページから確認できます。
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-leaf-700 px-6 py-3 text-sm font-bold text-white shadow-card transition hover:bg-leaf-800 focus:outline-none focus:ring-4 focus:ring-leaf-200"
          >
            もう一度読み込む
          </button>
          <Button href="/consultation" variant="secondary">まずは相談してみる</Button>
        </div>
      </section>
    </main>
  );
}
