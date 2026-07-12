import { Reveal } from "@/components/motion/reveal";
import { skills } from "@/lib/content/site-content";

const categoryStyles: Record<string, string> = {
  Marketing: "text-primary",
  Analytical: "text-brass",
  Interpersonal: "text-muted-foreground",
};

export function Skills() {
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            What I bring to the table
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 8) * 0.04}>
              <div className="keycard flex h-full flex-col justify-between border border-border/60 bg-card p-5 transition-shadow hover:shadow-md">
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${categoryStyles[skill.category]}`}
                >
                  {skill.category}
                </span>
                <span className="mt-4 font-heading text-base font-medium leading-tight">
                  {skill.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
