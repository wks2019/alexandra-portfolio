"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, TrendingUp, Users, MousePointerClick } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/lib/content/site-content";

/* Animated bar chart inside the hero card: a "campaign growth" visual */
const bars = [34, 52, 44, 68, 58, 82, 74, 96];

const metricRows = [
  { icon: Users, label: "Audience reach", value: "+128%" },
  { icon: MousePointerClick, label: "Engagement rate", value: "+64%" },
  { icon: TrendingUp, label: "Conversions", value: "+41%" },
];

export function Hero() {
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

      <div className="container-page grid items-center gap-16 md:grid-cols-[1.05fr_0.95fr]">
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

        {/* Animated campaign dashboard card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="keycard relative mx-auto w-full max-w-md overflow-hidden bg-gradient-to-br from-[#FF6700] via-[#F4530A] to-[#EB4203] p-6 shadow-xl md:p-7"
        >
          {/* Slow pulsing glow */}
          <motion.div
            aria-hidden
            animate={{ opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 40% at 20% 15%, rgba(255,220,170,0.55), transparent), radial-gradient(40% 35% at 85% 80%, rgba(255,255,255,0.25), transparent)",
            }}
          />

          <div className="relative">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-widest text-white/75">
                Campaign Growth
              </p>
              <span className="rounded-full bg-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                Live
              </span>
            </div>

            {/* Animated bars */}
            <div className="mt-6 flex h-32 items-end gap-2.5">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "8%" }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    duration: 0.9,
                    delay: 0.5 + i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex-1 rounded-t-md bg-white/85"
                  style={{ opacity: 0.55 + (i / bars.length) * 0.45 }}
                />
              ))}
            </div>

            {/* Metric rows */}
            <div className="mt-6 space-y-2.5">
              {metricRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + i * 0.15 }}
                  className="flex items-center justify-between rounded-xl bg-white/12 px-4 py-2.5 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2.5 text-sm text-white/90">
                    <row.icon className="size-4 text-white/70" />
                    {row.label}
                  </span>
                  <span className="font-mono text-sm font-medium text-white">
                    {row.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Purpose line inside the card, nothing overlapping it */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="mt-6 border-t border-white/20 pt-4 text-sm italic text-white/85"
            >
              &ldquo;Building authentic connections between brands &amp; the
              communities they serve.&rdquo;
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
