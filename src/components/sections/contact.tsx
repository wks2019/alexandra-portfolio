"use client";

import { useActionState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactMessage, type ContactFormState } from "@/app/actions/contact";
import { SITE } from "@/lib/site-config";

const initialState: ContactFormState = { status: "idle" };

export function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitContactMessage,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

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
            ref={formRef}
            action={formAction}
            className="keycard space-y-5 border border-border/60 bg-card p-7 md:p-8"
            noValidate
          >
            {/* Honeypot — hidden from real users */}
            <div className="hidden">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" className="mt-1.5" required />
              {state.fieldErrors?.name && (
                <p className="mt-1.5 text-xs text-destructive">{state.fieldErrors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" className="mt-1.5" required />
              {state.fieldErrors?.email && (
                <p className="mt-1.5 text-xs text-destructive">{state.fieldErrors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={5} className="mt-1.5" required />
              {state.fieldErrors?.message && (
                <p className="mt-1.5 text-xs text-destructive">{state.fieldErrors.message}</p>
              )}
            </div>

            <Button type="submit" disabled={isPending} className="w-full rounded-full">
              {isPending ? "Sending…" : "Send Message"}
            </Button>

            {state.status === "success" && (
              <p className="text-center text-sm text-primary">
                Message sent — thank you. I&apos;ll reply within 48 hours.
              </p>
            )}
            {state.status === "error" && state.message && (
              <p className="text-center text-sm text-destructive">{state.message}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
