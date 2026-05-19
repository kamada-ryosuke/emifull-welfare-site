import Link from "next/link";

const serviceLinks = [
  { label: "児童発達支援", href: "/services/jido-hattatsu" },
  { label: "放課後等デイサービス", href: "/services/houkago-day" },
  { label: "保育所等訪問支援", href: "/services/hoikusho-houmon" },
  { label: "障がい者グループホーム", href: "/services/group-home" },
  { label: "就労継続支援B型", href: "/services/b-type" }
];

export function Footer() {
  return (
    <footer className="bg-leaf-800 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-black">EMIFULL 障がい福祉事業部</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
            発達、学び、働く、暮らす。子どもから大人まで、一人ひとりの人生に寄り添う福祉を届けます。
          </p>
          <p className="mt-5 text-xs leading-6 text-white/55">
            電話番号・LINE URL・所在地は公開前に正式情報へ差し替えてください。
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-white/60">サービス</p>
          <div className="mt-4 grid gap-3">
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/85">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-white/60">相談・行動</p>
          <div className="mt-4 grid gap-3 text-sm text-white/85">
            <Link href="/consultation?type=line">LINE相談</Link>
            <Link href="tel:0000000000">電話相談</Link>
            <Link href="/consultation?type=visit">見学予約</Link>
            <Link href="/facilities">施設を探す</Link>
            <Link href="/recruit">採用情報</Link>
            <Link href="/faq">よくある質問</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/55">
        © EMIFULL Welfare Division
      </div>
    </footer>
  );
}
