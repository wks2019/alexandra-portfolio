import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/content/site-content";

export function Projects() {
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <section id="work" className="bg-secondary/40 py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Demonstration projects
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Applied exercises built to show how I approach a marketing
            problem, end to end.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <Link href={`/work/${project.slug}`} className="keycard group block h-full border border-border/60 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.categories.map((c) => (
                      <Badge key={c} variant="secondary" className="rounded-full font-normal">
                        {c}
                      </Badge>
                    ))}
                  </div>
                  {project.isDemo && (
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Demo
                    </span>
                  )}
                </div>

                <h3 className="mt-5 flex items-center gap-2 font-heading text-xl font-medium">
                  {project.title}
                  <ArrowUpRight className="size-4 text-brass opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 grid gap-3 border-t border-border/60 pt-5 text-sm sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Problem
                    </p>
                    <p className="mt-1 text-foreground/90">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Solution
                    </p>
                    <p className="mt-1 text-foreground/90">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] text-accent-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
