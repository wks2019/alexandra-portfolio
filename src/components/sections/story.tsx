import { Reveal } from "@/components/motion/reveal";
import { storyTimeline } from "@/lib/content/site-content";

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">The Story</p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            From Hospitality to Digital Marketing
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Ten years of reading people. Now reading data — with the same
            instinct for what matters.
          </p>
        </Reveal>

        <div className="relative mt-16 max-w-2xl">
          <div
            aria-hidden
            className="absolute left-[27px] top-2 bottom-2 w-px bg-border md:left-[35px]"
          />
          <ol className="space-y-10">
            {storyTimeline.map((entry, i) => (
              <Reveal key={entry.year} delay={i * 0.06}>
                <li className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-brass/40 bg-card font-mono text-xs text-brass md:size-[70px] md:text-sm">
                    {entry.year}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-heading text-lg font-medium">
                      {entry.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground md:text-base">
                      {entry.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
