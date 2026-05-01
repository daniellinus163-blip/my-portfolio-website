import { createClient } from "@supabase/supabase-js";

export async function saveContactSubmission(input: {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}): Promise<{ ok: true } | { ok: false; reason: string }> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url) {
    return { ok: false, reason: "Missing NEXT_PUBLIC_SUPABASE_URL." };
  }

  const key = serviceRole || anon;
  if (!key) {
    return {
      ok: false,
      reason: "Missing Supabase key: add SUPABASE_SERVICE_ROLE_KEY (recommended) or NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    };
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase.from("contact_submissions").insert({
    name: input.name,
    email: input.email,
    whatsapp: input.whatsapp,
    message: input.message,
  });

  if (error) {
    const hint =
      error.code === "PGRST205" || error.message.toLowerCase().includes("could not find")
        ? 'Create table `contact_submissions` by running `supabase/contact_submissions.sql` in the Supabase SQL Editor.'
        : error.message;

    return { ok: false, reason: hint };
  }

  return { ok: true };
}
