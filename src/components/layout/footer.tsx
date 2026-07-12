import Link from "next/link";
import { ExternalLink, Lock, Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-heading text-xl">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            {SITE.description}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Connect</p>
          <ul className="space-y-2.5">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="size-4" /> {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="size-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-6">
        <div className="container-page flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <Lock className="size-3.5" /> Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
