type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-leaf-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-2xl font-bold leading-[1.45] text-ink sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-ink/75 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
