"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/lib/content/site-content";

const floatingCards = [
  { label: "Guest satisfaction", value: "98%", position: "top-6 -left-6 md:-left-14" },
  { label: "Organic growth", value: "+142%", position: "bottom-10 -right-4 md:-right-16" },
  { label: "Years in service", value: "10+", position: "top-1/2 -right-10 md:-right-20" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, rgba(176,141,87,0.16), transparent), radial-gradient(50% 40% at 10% 30%, rgba(23,66,59,0.10), transparent)",
        }}
      />

      <div className="container-page grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-balance text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[3.4rem]"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-balance text-lg text-muted-foreground"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href={hero.primaryCta.href}
              className={buttonVariants({ size: "lg", className: "rounded-full px-6" })}
            >
              {hero.primaryCta.label}
              <ArrowRight className="ml-1 size-4" />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "rounded-full px-6",
              })}
            >
              <Download className="mr-1 size-4" />
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="keycard relative h-full w-full overflow-hidden bg-gradient-to-br from-primary via-primary to-[#0F2E28] shadow-xl"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(45% 35% at 25% 20%, rgba(176,141,87,0.5), transparent)",
              }}
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary-foreground/70">
                Now Boarding
              </p>
              <p className="mt-1 font-heading text-lg text-primary-foreground">
                Digital Marketing
              </p>
            </div>
          </motion.div>

          {floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              className={`keycard absolute w-36 border border-border/60 bg-card p-3.5 shadow-lg ${card.position}`}
            >
              <p className="font-mono text-xl font-medium text-primary">
                {card.value}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {card.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
