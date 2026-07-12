import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { education } from "@/lib/content/site-content";

export function Education() {
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Education</p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Formal foundations
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {education.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.06}>
              <div className="keycard flex h-full flex-col border border-border/60 bg-card p-6">
                <GraduationCap className="size-6 text-brass" />
                <p className="mt-4 font-mono text-xs text-muted-foreground">
                  {entry.dates}
                </p>
                <h3 className="mt-1.5 font-heading text-lg font-medium leading-snug">
                  {entry.qualification}
                </h3>
                <p className="mt-1 text-sm text-brass">{entry.institution}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {entry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
