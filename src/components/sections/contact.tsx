"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site-config";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Let&apos;s talk about the role
          </h2>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Open to conversations about digital marketing, coordinator, or
            junior strategist roles.
          </p>

          <div className="mt-8 space-y-3.5">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 text-sm hover:text-brass"
            >
              <Mail className="size-4 text-brass" /> {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-3 text-sm hover:text-brass"
            >
              <Phone className="size-4 text-brass" /> {SITE.phone}
            </a>
            <p className="flex items-center gap-3 text-sm">
              <MapPin className="size-4 text-brass" /> {SITE.location}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            action={`https://formsubmit.co/${SITE.email}`}
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="keycard space-y-5 border border-border/60 bg-card p-7 md:p-8"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://alexandra-vlasceanu-portfolio.netlify.app/#contact" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" className="mt-1.5" required />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" className="mt-1.5" required />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={5} className="mt-1.5" required />
            </div>

            <Button type="submit" className="w-full rounded-full">
              {submitted ? "Sent!" : "Send Message"}
            </Button>

            {submitted && (
              <p className="text-center text-sm text-primary">
                Message sent. Thank you, I&apos;ll reply within 48 hours.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
