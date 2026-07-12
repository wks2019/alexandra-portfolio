import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on digital marketing, e-commerce and career change, written from the front line of a hospitality-to-marketing pivot.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="container-page pt-16 pb-24 md:pt-24">
        <p className="eyebrow">Blog</p>
        <h1 className="mt-4 max-w-2xl text-balance text-4xl font-medium tracking-tight md:text-5xl">
          Notes from the pivot
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Digital marketing, e-commerce and career change, written as I learn
          it.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="keycard group flex h-full flex-col border border-border/60 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-brass">
                <span>{post.category}</span>
                <span className="text-muted-foreground">
                  {post.readingTime} min read
                </span>
              </div>
              <h2 className="mt-4 font-heading text-xl font-medium leading-snug">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read article
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
