import { BadgeCheck, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { certifications } from "@/lib/content/site-content";

export function Certifications() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Certifications</p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Verified, current, applied
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.06}>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="keycard group flex h-full flex-col justify-between border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <BadgeCheck className="size-6 text-primary" />
                  <h3 className="mt-4 font-heading text-base font-medium leading-snug">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.provider} · {cert.issueDate}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs text-brass opacity-0 transition-opacity group-hover:opacity-100">
                  View credential <ExternalLink className="size-3.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
