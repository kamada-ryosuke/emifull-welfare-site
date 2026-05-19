export default function Loading() {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-warm-50 px-4">
      <div className="rounded-[30px] bg-white px-7 py-6 text-center shadow-card">
        <p className="text-sm font-bold text-leaf-700">ページを読み込んでいます</p>
        <p className="mt-2 text-xs text-ink/58">少しだけお待ちください。</p>
      </div>
    </main>
  );
}
