import { Reveal } from "@/components/motion/reveal";
import { whyHireCards } from "@/lib/content/site-content";

export function WhyHire() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Why Hire Alexandra</p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Why Employers Value My Background
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyHireCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.05}>
              <div className="keycard h-full border border-border/60 bg-card p-6">
                <span className="font-mono text-xs text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
