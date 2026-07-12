"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { SITE } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100),
  email: z.string().trim().email("Enter a valid email address."),
  message: z.string().trim().min(10, "Message must be at least 10 characters.").max(2000),
  // Honeypot field — real users never fill this in.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function submitContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as "name" | "email" | "message";
      if (key) fieldErrors[key] = issue.message;
    }
    return { status: "error", fieldErrors, message: "Please check the form." };
  }

  // Honeypot triggered — silently succeed without writing anything.
  if (parsed.data.company) {
    return { status: "success" };
  }

  const { name, email, message } = parsed.data;

  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("contact_messages")
      .insert({ name, email, message });

    if (error) throw error;

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `${SITE.name} Portfolio <notifications@${new URL(SITE.url).hostname}>`,
        to: SITE.email,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: message,
      });
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email me directly.",
    };
  }
}
