import { Button } from "@/components/ui/Button";

export function RelatedLinks({
  title = "次に見るページ",
  links
}: {
  title?: string;
  links: { label: string; href: string }[];
}) {
  return (
    <section className="bg-warm-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-black text-ink sm:text-3xl">{title}</h2>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {links.map((link, index) => (
            <Button key={link.href} href={link.href} variant={index === 0 ? "primary" : "secondary"}>
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
