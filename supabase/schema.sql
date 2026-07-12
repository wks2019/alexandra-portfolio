-- ============================================================
-- Alexandra Vlasceanu Portfolio — CMS Schema
-- Run in the Supabase SQL editor. Idempotent (safe to re-run).
-- ============================================================

create extension if not exists "pgcrypto";

-- ---------- Singleton content (one row each) ----------
create table if not exists hero_content (
  id int primary key default 1,
  eyebrow text not null default '',
  headline text not null default '',
  subheadline text not null default '',
  primary_cta_label text not null default '',
  primary_cta_href text not null default '',
  secondary_cta_label text not null default '',
  secondary_cta_href text not null default '',
  hero_image_url text,
  background_artwork_url text,
  updated_at timestamptz not null default now(),
  constraint singleton check (id = 1)
);

create table if not exists about_content (
  id int primary key default 1,
  title text not null default '',
  body text not null default '',
  story text not null default '',
  updated_at timestamptz not null default now(),
  constraint singleton check (id = 1)
);

create table if not exists contact_content (
  id int primary key default 1,
  phone text,
  email text,
  linkedin_url text,
  location text,
  cv_url text,
  calendly_url text,
  socials jsonb not null default '{}',
  updated_at timestamptz not null default now(),
  constraint singleton check (id = 1)
);

-- ---------- Repeating content ----------
create table if not exists timeline_entries (
  id uuid primary key default gen_random_uuid(),
  year text not null,
  title text not null,
  description text not null,
  display_order int not null default 0
);

create table if not exists skills (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null check (category in ('Marketing', 'Analytical', 'Interpersonal')),
  display_order int not null default 0
);

create table if not exists statistics (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  value text not null,
  display_order int not null default 0
);

create table if not exists experience_entries (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  role text not null,
  start_date text not null,
  end_date text not null,
  description text not null default '',
  achievements text[] not null default '{}',
  transferable_skills text[] not null default '{}',
  images text[] not null default '{}',
  display_order int not null default 0
);

create table if not exists education_entries (
  id uuid primary key default gen_random_uuid(),
  institution text not null,
  qualification text not null,
  dates text not null,
  description text not null default '',
  logo_url text,
  display_order int not null default 0
);

create table if not exists certifications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  provider text not null,
  issue_date text not null,
  credential_url text,
  image_url text,
  display_order int not null default 0
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null,
  problem text not null default '',
  solution text not null default '',
  tools text[] not null default '{}',
  images text[] not null default '{}',
  before_image_url text,
  after_image_url text,
  video_url text,
  website_url text,
  github_url text,
  categories text[] not null default '{}',
  seo_tags text[] not null default '{}',
  featured boolean not null default false,
  is_demo boolean not null default true,
  display_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  cover_image_url text,
  content text not null default '',
  excerpt text,
  seo_title text,
  seo_description text,
  categories text[] not null default '{}',
  tags text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft', 'published', 'scheduled')),
  published_at timestamptz,
  reading_time_minutes int,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  company text not null,
  photo_url text,
  quote text not null,
  rating int not null default 5 check (rating between 1 and 5),
  display_order int not null default 0
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  status text not null default 'unread' check (status in ('unread', 'read', 'archived')),
  created_at timestamptz not null default now()
);

create table if not exists media_library (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  storage_path text not null,
  mime_type text not null,
  folder text not null default 'uncategorized',
  size_bytes bigint,
  created_at timestamptz not null default now()
);

-- ---------- Row Level Security ----------
-- Public (anon) can read published content. Only authenticated
-- admin users (there is exactly one) can write anywhere.

alter table hero_content enable row level security;
alter table about_content enable row level security;
alter table contact_content enable row level security;
alter table timeline_entries enable row level security;
alter table skills enable row level security;
alter table statistics enable row level security;
alter table experience_entries enable row level security;
alter table education_entries enable row level security;
alter table certifications enable row level security;
alter table projects enable row level security;
alter table blog_posts enable row level security;
alter table testimonials enable row level security;
alter table contact_messages enable row level security;
alter table media_library enable row level security;

-- Public read policies
create policy "public read hero" on hero_content for select using (true);
create policy "public read about" on about_content for select using (true);
create policy "public read contact info" on contact_content for select using (true);
create policy "public read timeline" on timeline_entries for select using (true);
create policy "public read skills" on skills for select using (true);
create policy "public read statistics" on statistics for select using (true);
create policy "public read experience" on experience_entries for select using (true);
create policy "public read education" on education_entries for select using (true);
create policy "public read certifications" on certifications for select using (true);
create policy "public read projects" on projects for select using (true);
create policy "public read published posts" on blog_posts for select using (status = 'published');
create policy "public read testimonials" on testimonials for select using (true);

-- Authenticated (admin) full access
create policy "admin write hero" on hero_content for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write about" on about_content for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write contact" on contact_content for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write timeline" on timeline_entries for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write skills" on skills for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write statistics" on statistics for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write experience" on experience_entries for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write education" on education_entries for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write certifications" on certifications for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write projects" on projects for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write posts" on blog_posts for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write testimonials" on testimonials for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin read messages" on contact_messages for select using (auth.role() = 'authenticated');
create policy "admin update messages" on contact_messages for update using (auth.role() = 'authenticated');
create policy "admin write media" on media_library for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- Public can INSERT a contact message (the form), never read/update
create policy "public submit contact" on contact_messages for insert with check (true);

-- ---------- Storage bucket for media library ----------
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "public read media bucket" on storage.objects
  for select using (bucket_id = 'media');
create policy "admin write media bucket" on storage.objects
  for all using (bucket_id = 'media' and auth.role() = 'authenticated')
  with check (bucket_id = 'media' and auth.role() = 'authenticated');
