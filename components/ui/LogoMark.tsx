import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 90"
      aria-hidden="true"
      className={cn("h-8 w-10 text-skyBrand", className)}
      fill="none"
    >
      <path
        d="M20 56c24 10 57 0 64-23 5-15-6-25-23-19-29 10-42 66-5 72 24 4 43-10 54-31"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="92" cy="30" r="6" fill="currentColor" />
    </svg>
  );
}
