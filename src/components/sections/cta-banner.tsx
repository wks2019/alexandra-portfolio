import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

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
            <h2 className="relative text-balance font-heading text-3xl font-medium text-white md:text-4xl">
              Let&apos;s Build Something Meaningful
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-white/80">
              Open to entry-level digital marketing roles where I can apply
              customer insight to create high-impact campaigns.
            </p>
            <Link
              href="/#contact"
              className="relative mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-[#C93A02] shadow-lg transition-transform hover:scale-[1.03] hover:shadow-xl"
            >
              Get in Touch <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
