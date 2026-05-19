import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-[52px] items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold leading-none transition focus:outline-none focus:ring-4 focus:ring-leaf-200 active:scale-[0.99]",
        variant === "primary" &&
          "bg-leaf-700 text-white shadow-card hover:bg-leaf-800",
        variant === "secondary" &&
          "border border-leaf-600 bg-white text-leaf-800 hover:bg-leaf-50",
        variant === "ghost" &&
          "bg-warm-100 text-leaf-800 hover:bg-warm-200",
        className
      )}
    >
      {children}
    </Link>
  );
}
