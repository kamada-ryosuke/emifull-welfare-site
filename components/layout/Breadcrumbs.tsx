import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="パンくず" className="bg-warm-50 px-4 pt-6 sm:px-6 lg:px-8">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 text-xs font-bold text-ink/58">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-leaf-800">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-leaf-800">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
