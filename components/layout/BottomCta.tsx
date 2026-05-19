import Link from "next/link";

const ctas = [
  { label: "LINE相談", sub: "LINE", href: "/consultation?type=line", tone: "primary" },
  { label: "電話相談", sub: "TEL", href: "tel:0000000000", tone: "light" },
  { label: "見学予約", sub: "予約", href: "/consultation?type=visit", tone: "light" },
  { label: "施設検索", sub: "検索", href: "/facilities", tone: "light" }
];

export function BottomCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-skyBrand/20 bg-white/95 px-2 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_34px_rgba(25,105,150,0.12)] backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-4 gap-2">
        {ctas.map((cta) => (
          <Link
            key={cta.label}
            href={cta.href}
            className={
              cta.tone === "primary"
                ? "flex min-h-[58px] flex-col items-center justify-center rounded-2xl bg-leaf-700 px-1 text-center text-white shadow-card transition hover:-translate-y-0.5 active:scale-[0.98]"
                : "flex min-h-[58px] flex-col items-center justify-center rounded-2xl border border-skyBrand/25 bg-white px-1 text-center text-leaf-800 shadow-[0_8px_18px_rgba(33,112,159,0.08)] transition hover:-translate-y-0.5 active:scale-[0.98]"
            }
            aria-label={cta.label}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.08em] opacity-70">{cta.sub}</span>
            <span className="mt-1 text-[12px] font-black leading-none">{cta.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
