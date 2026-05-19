import { faqs } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="相談前の不安を、少し軽くするために。"
          description="見学や制度のことなど、よくある質問をまとめています。"
          align="center"
        />
        <div className="mt-9 grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-[24px] border border-leaf-100 bg-warm-50 p-5 shadow-card"
            >
              <summary className="cursor-pointer list-none text-base font-black text-ink">
                <span className="mr-2 text-leaf-600">Q.</span>
                {faq.q}
              </summary>
              <p className="mt-4 border-t border-leaf-100 pt-4 text-sm leading-7 text-ink/72">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
