"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Plus, Trash2, Save } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Row = Record<string, unknown> & { id: string | number };

/* Field definitions per table. type: text | textarea | array */
const TABLES: Record<
  string,
  {
    label: string;
    orderBy?: string;
    requiredField: string;
    fields: { key: string; label: string; type: "text" | "textarea" | "array" }[];
  }
> = {
  timeline_entries: {
    label: "Story Timeline",
    orderBy: "display_order",
    requiredField: "title",
    fields: [
      { key: "year", label: "Year", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ],
  },
  experience_entries: {
    label: "Experience",
    orderBy: "display_order",
    requiredField: "role",
    fields: [
      { key: "company", label: "Company", type: "text" },
      { key: "role", label: "Role", type: "text" },
      { key: "start_date", label: "Start", type: "text" },
      { key: "end_date", label: "End", type: "text" },
      { key: "description", label: "Summary", type: "textarea" },
      { key: "transferable_skills", label: "Transferable skills (comma-separated)", type: "array" },
    ],
  },
  education_entries: {
    label: "Education",
    orderBy: "display_order",
    requiredField: "qualification",
    fields: [
      { key: "institution", label: "Institution", type: "text" },
      { key: "qualification", label: "Qualification", type: "text" },
      { key: "dates", label: "Dates", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ],
  },
  certifications: {
    label: "Certifications",
    orderBy: "display_order",
    requiredField: "name",
    fields: [
      { key: "name", label: "Name", type: "text" },
      { key: "provider", label: "Provider", type: "text" },
      { key: "issue_date", label: "Issue date", type: "text" },
      { key: "credential_url", label: "Credential link", type: "text" },
    ],
  },
};

function HeroEditor() {
  const supabase = createClient();
  const [form, setForm] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    supabase
      .from("hero_content")
      .select("*")
      .eq("id", 1)
      .single()
      .then(({ data }) => {
        if (data) setForm(data as Record<string, string>);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function save() {
    setStatus("Saving…");
    const { error } = await supabase
      .from("hero_content")
      .upsert({ ...form, id: 1, updated_at: new Date().toISOString() });
    setStatus(error ? `Error: ${error.message}` : "Saved");
  }

  const fields = [
    ["eyebrow", "Eyebrow (small label above headline)"],
    ["headline", "Headline"],
    ["subheadline", "Subheadline"],
    ["primary_cta_label", "Primary button label"],
    ["secondary_cta_label", "Secondary button label"],
  ] as const;

  return (
    <div className="keycard space-y-4 border border-border/60 bg-card p-6">
      {fields.map(([key, label]) => (
        <div key={key}>
          <Label>{label}</Label>
          {key === "subheadline" ? (
            <Textarea
              rows={3}
              className="mt-1.5"
              value={form[key] ?? ""}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            />
          ) : (
            <Input
              className="mt-1.5"
              value={form[key] ?? ""}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            />
          )}
        </div>
      ))}
      <div className="flex items-center gap-3">
        <Button onClick={save} className="rounded-full">
          <Save className="mr-1.5 size-4" /> Save Hero
        </Button>
        <span className="text-sm text-muted-foreground">{status}</span>
      </div>
    </div>
  );
}

function TableEditor({ table }: { table: keyof typeof TABLES }) {
  const cfg = TABLES[table];
  const supabase = createClient();
  const [rows, setRows] = useState<Row[]>([]);
  const [status, setStatus] = useState("");

  const load = useCallback(async () => {
    const { data } = await supabase
      .from(table)
      .select("*")
      .order(cfg.orderBy ?? "id", { ascending: true });
    setRows((data as Row[]) ?? []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);

  useEffect(() => {
    load();
  }, [load]);

  function updateField(id: Row["id"], key: string, value: string, type: string) {
    setRows((rs) =>
      rs.map((r) =>
        r.id === id
          ? { ...r, [key]: type === "array" ? value.split(",").map((s) => s.trim()).filter(Boolean) : value }
          : r
      )
    );
  }

  function isDraft(id: Row["id"]) {
    return String(id).startsWith("draft-");
  }

  async function saveRow(row: Row) {
    const requiredValue = String(row[cfg.requiredField] ?? "").trim();
    if (!requiredValue) {
      setStatus(
        `Error: "${cfg.fields.find((f) => f.key === cfg.requiredField)?.label}" is required before saving.`
      );
      return;
    }
    setStatus("Saving…");
    if (isDraft(row.id)) {
      const { id, ...rest } = row;
      void id;
      const { error } = await supabase.from(table).insert(rest);
      setStatus(error ? `Error: ${error.message}` : "Saved");
      if (!error) load();
    } else {
      const { error } = await supabase.from(table).upsert(row);
      setStatus(error ? `Error: ${error.message}` : "Saved");
    }
  }

  async function deleteRow(id: Row["id"]) {
    if (isDraft(id)) {
      setRows((rs) => rs.filter((r) => r.id !== id));
      return;
    }
    if (!confirm("Delete this entry?")) return;
    await supabase.from(table).delete().eq("id", id);
    load();
  }

  function addRow() {
    const draft: Row = {
      id: `draft-${Date.now()}`,
      display_order: rows.length + 1,
    };
    for (const f of cfg.fields) draft[f.key] = f.type === "array" ? [] : "";
    setRows((rs) => [...rs, draft]);
    setStatus("");
  }

  return (
    <div className="space-y-5">
      {rows.map((row) => (
        <div key={String(row.id)} className="keycard space-y-3 border border-border/60 bg-card p-5">
          {cfg.fields.map((f) => {
            const raw = row[f.key];
            const value = f.type === "array" && Array.isArray(raw) ? raw.join(", ") : String(raw ?? "");
            return (
              <div key={f.key}>
                <Label className="text-xs">{f.label}</Label>
                {f.type === "textarea" ? (
                  <Textarea
                    rows={2}
                    className="mt-1"
                    value={value}
                    onChange={(e) => updateField(row.id, f.key, e.target.value, f.type)}
                  />
                ) : (
                  <Input
                    className="mt-1"
                    value={value}
                    onChange={(e) => updateField(row.id, f.key, e.target.value, f.type)}
                  />
                )}
              </div>
            );
          })}
          <div className="flex items-center gap-2 pt-1">
            <Button size="sm" onClick={() => saveRow(row)} className="rounded-full">
              <Save className="mr-1 size-3.5" /> Save
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => deleteRow(row.id)}
              className="rounded-full text-destructive"
            >
              <Trash2 className="mr-1 size-3.5" /> Delete
            </Button>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={addRow} className="rounded-full">
          <Plus className="mr-1.5 size-4" /> Add entry
        </Button>
        <span className="text-sm text-muted-foreground">{status}</span>
      </div>
    </div>
  );
}

function MessagesViewer() {
  const supabase = createClient();
  const [messages, setMessages] = useState<Row[]>([]);

  useEffect(() => {
    supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setMessages((data as Row[]) ?? []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (messages.length === 0)
    return <p className="text-sm text-muted-foreground">No messages yet.</p>;

  return (
    <div className="space-y-4">
      {messages.map((m) => (
        <div key={String(m.id)} className="keycard border border-border/60 bg-card p-5">
          <div className="flex items-center justify-between">
            <p className="font-medium">{String(m.name)}</p>
            <p className="font-mono text-xs text-muted-foreground">
              {new Date(String(m.created_at)).toLocaleString("en-GB")}
            </p>
          </div>
          <p className="text-sm text-brass">{String(m.email)}</p>
          <p className="mt-2 text-sm text-foreground/90">{String(m.message)}</p>
        </div>
      ))}
    </div>
  );
}

export default function AdminPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace("/admin/login");
      } else {
        setReady(true);
      }
    });
  }, [router]);

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  if (!ready)
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Checking session…</p>
      </main>
    );

  return (
    <main className="container-page py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-medium">Content Manager</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Edit your portfolio. Changes appear on the site within a minute.
          </p>
        </div>
        <Button variant="outline" onClick={signOut} className="rounded-full">
          <LogOut className="mr-1.5 size-4" /> Sign out
        </Button>
      </div>

      <Tabs defaultValue="hero" className="mt-8">
        <TabsList className="flex-wrap">
          <TabsTrigger value="hero">Hero</TabsTrigger>
          <TabsTrigger value="timeline_entries">Timeline</TabsTrigger>
          <TabsTrigger value="experience_entries">Experience</TabsTrigger>
          <TabsTrigger value="education_entries">Education</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="hero" className="mt-6">
          <HeroEditor />
        </TabsContent>
        {(Object.keys(TABLES) as (keyof typeof TABLES)[]).map((t) => (
          <TabsContent key={t} value={t} className="mt-6">
            <TableEditor table={t} />
          </TabsContent>
        ))}
        <TabsContent value="messages" className="mt-6">
          <MessagesViewer />
        </TabsContent>
      </Tabs>
    </main>
  );
}
