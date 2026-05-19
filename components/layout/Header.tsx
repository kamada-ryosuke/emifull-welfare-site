"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/LogoMark";

const navItems = [
  { label: "EMIFULLについて", href: "/about" },
  { label: "サービス", href: "/services" },
  { label: "施設を探す", href: "/facilities" },
  { label: "相談する", href: "/consultation" },
  { label: "採用情報", href: "/recruit" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-skyBrand/20 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-h-12 items-center gap-3" aria-label="トップへ戻る">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-card">
            <LogoMark className="h-7 w-9" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black text-leaf-800">EMIFULL</span>
            <span className="block text-xs font-bold text-ink/70">障がい福祉事業部</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="グローバルナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-ink/75 transition hover:text-leaf-700"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/consultation?type=line" className="min-h-11 px-5 py-2.5">
            まずは相談
          </Button>
        </nav>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-skyBrand/25 bg-white text-leaf-800 shadow-[0_8px_20px_rgba(33,112,159,0.08)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-skyBrand/20 bg-white px-4 py-4 lg:hidden">
          <nav className="grid gap-2" aria-label="スマホメニュー">
            <Link
              href="/consultation?type=line"
              className="rounded-2xl bg-leaf-700 px-4 py-4 text-sm font-black text-white shadow-card"
              onClick={() => setOpen(false)}
            >
              LINEで相談する
            </Link>
            <Link
              href="/consultation?type=visit"
              className="rounded-2xl bg-leaf-50 px-4 py-4 text-sm font-black text-leaf-800"
              onClick={() => setOpen(false)}
            >
              見学を予約する
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl bg-white px-4 py-3.5 text-sm font-bold text-ink shadow-[0_8px_22px_rgba(33,112,159,0.07)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
