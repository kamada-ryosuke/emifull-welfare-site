"use client";

import Image from "next/image";
import { blurDataURL } from "@/lib/imageAssets";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/ui/LogoMark";

type EmotionalImageProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function EmotionalImage({
  src,
  alt,
  label,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 92vw, 44vw"
}: EmotionalImageProps) {
  return (
    <figure className={cn("photo-moment relative overflow-hidden bg-warm-100 shadow-card", className)}>
      <Image
        loader={({ src }) => `.${src}`}
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={blurDataURL}
        className={cn("object-cover", imageClassName)}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(38,51,44,0.1))]" />
      <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-1.5 bg-white/58 px-2.5 py-1.5 text-skyBrand shadow-card backdrop-blur">
        <LogoMark className="h-5 w-7" />
        <span className="text-[10px] font-black tracking-[0.12em]">EMIFULL</span>
      </div>
      {label ? (
        <figcaption className="absolute bottom-4 left-4 right-4 bg-white/76 px-4 py-3 text-xs font-bold leading-5 text-leaf-800 shadow-card backdrop-blur">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
