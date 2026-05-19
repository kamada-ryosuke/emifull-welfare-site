import Link from "next/link";
import { consultationItems } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ConsultationSection() {
  return (
    <section className="bg-white py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="First Step"
              title="相談は、答えを決める場所ではありません。"
              description="まだ言葉になっていない不安を、そのまま持ってきてください。"
            />
          </div>
          <p className="max-w-xl text-2xl font-black leading-[1.7] text-ink sm:text-3xl">
            「これくらいで相談していいのかな」
            <br />
            その迷いごと、持ってきてください。
          </p>
        </div>
        <div className="mt-16 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {consultationItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group border-t border-leaf-200 pt-5 transition duration-300 hover:-translate-y-1"
            >
              <span className="text-xs font-black text-leaf-500">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-black leading-[1.45] text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/64">{item.text}</p>
              <p className="mt-6 text-sm font-bold text-leaf-700 opacity-0 transition group-hover:opacity-100">
                相談へ進む
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
