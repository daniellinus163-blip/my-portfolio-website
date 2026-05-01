-- Run once in Supabase → SQL Editor
-- Saves portfolio contact form rows when email (Resend) is not configured.

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  whatsapp text not null,
  message text not null
);

alter table public.contact_submissions
  add column if not exists whatsapp text;

alter table public.contact_submissions enable row level security;

-- Server routes using SUPABASE_SERVICE_ROLE_KEY bypass RLS (recommended).

-- Optional: allow inserts with the anon key from your API route (less ideal than service role).
drop policy if exists "contact_submissions_insert_anon" on public.contact_submissions;
create policy "contact_submissions_insert_anon"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

drop policy if exists "contact_submissions_select_denied_anon" on public.contact_submissions;
create policy "contact_submissions_select_denied_anon"
  on public.contact_submissions
  for select
  to anon
  using (false);

grant usage on schema public to anon;
grant insert on table public.contact_submissions to anon;
