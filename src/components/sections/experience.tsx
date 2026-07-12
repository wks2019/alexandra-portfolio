import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/content/site-content";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            A decade of hospitality, translated
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Not job descriptions — the skills underneath them.
          </p>
        </Reveal>

        <div className="mt-14 space-y-5">
          {experience
            .slice()
            .sort((a, b) => a.order - b.order)
            .map((entry, i) => (
              <Reveal key={entry.id} delay={i * 0.05}>
                <div className="keycard grid gap-4 border border-border/60 bg-card p-6 md:grid-cols-[1fr_2fr] md:p-8">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {entry.startDate} — {entry.endDate}
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-medium">
                      {entry.role}
                    </h3>
                    <p className="text-sm text-brass">{entry.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {entry.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.transferableSkills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="rounded-full font-normal"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
