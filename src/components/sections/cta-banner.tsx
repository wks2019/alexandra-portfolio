import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="keycard relative overflow-hidden bg-gradient-to-br from-[#FF6700] to-[#EB4203] px-8 py-16 text-center md:px-16 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 60% at 85% 20%, rgba(255,220,180,0.3), transparent), radial-gradient(40% 50% at 15% 80%, rgba(255,255,255,0.12), transparent)",
              }}
            />
            <h2 className="relative text-balance font-heading text-3xl font-medium text-primary-foreground md:text-4xl">
              Let&apos;s Build Something Meaningful
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-primary-foreground/75">
              Open to entry-level digital marketing roles where I can apply customer insight to create high-impact campaigns.
            </p>
            <Link
              href="/#contact"
              className={buttonVariants({
                size: "lg",
                className:
                  "relative mt-8 rounded-full bg-white px-7 text-[#EB4203] hover:bg-white/90",
              })}
            >
              Get in Touch <ArrowRight className="ml-1 size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
