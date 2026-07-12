"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { hero as heroFallback } from "@/lib/content/site-content";
import { useLiveSingleton } from "@/hooks/use-live-content";
import type { HeroContent } from "@/lib/types";

export function Hero() {
  const hero = useLiveSingleton<HeroContent>("hero_content", heroFallback, (r) => ({
    eyebrow: String(r.eyebrow ?? heroFallback.eyebrow),
    headline: String(r.headline ?? heroFallback.headline),
    subheadline: String(r.subheadline ?? heroFallback.subheadline),
    primaryCta: { label: String(r.primary_cta_label || heroFallback.primaryCta.label), href: String(r.primary_cta_href || heroFallback.primaryCta.href) },
    secondaryCta: { label: String(r.secondary_cta_label || heroFallback.secondaryCta.label), href: String(r.secondary_cta_href || heroFallback.secondaryCta.href) },
  }));
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, rgba(255,127,80,0.22), transparent), radial-gradient(50% 40% at 10% 30%, rgba(255,103,0,0.12), transparent)",
        }}
      />

      <div className="container-page grid items-center gap-6 md:grid-cols-[1.05fr_0.95fr]">
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

        {/* Portfolio collage, blended into the cream background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative -mr-6 md:-mr-10"
        >
          <Image
            src="/hero-collage.jpg"
            alt="Alexandra Vlasceanu's digital marketing portfolio slides, laid out as a collage"
            width={1500}
            height={1228}
            priority
            className="h-auto w-[112%] max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
