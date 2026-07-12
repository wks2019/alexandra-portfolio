import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/content/site-content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="container-page pt-16 pb-24 md:pt-20">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {project.categories.map((c) => (
              <Badge key={c} variant="secondary" className="rounded-full font-normal">
                {c}
              </Badge>
            ))}
            {project.isDemo && (
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Class project
              </span>
            )}
          </div>

          <h1 className="mt-4 text-balance font-heading text-3xl font-medium tracking-tight md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="keycard border border-border/60 bg-card p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-brass">
                The Problem
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground/90">
                {project.problem}
              </p>
            </div>
            <div className="keycard border border-border/60 bg-card p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-brass">
                The Solution
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground/90">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Tools Used
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-accent px-3 py-1.5 font-mono text-xs text-accent-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="keycard mt-12 bg-gradient-to-br from-[#FF6700] to-[#EB4203] p-8 text-center">
            <p className="font-heading text-xl text-white">
              Want to see how I&apos;d approach your brand?
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#C93A02] shadow transition-transform hover:scale-[1.03]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
