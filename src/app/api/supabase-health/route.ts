import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

/**
 * GET /api/supabase-health — verifies env vars load and Supabase responds (does not expose keys).
 */
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !anonKey) {
    return NextResponse.json(
      {
        connected: false,
        reason: "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY",
      },
      { status: 500 },
    );
  }

  try {
    const supabase = createClient(url, anonKey);

    // Lightweight reachability check via Auth API (no DB tables required).
    const authRes = await fetch(`${url.replace(/\/$/, "")}/auth/v1/health`, {
      headers: {
        apikey: anonKey,
      },
      cache: "no-store",
    });

    if (!authRes.ok) {
      const body = await authRes.text().catch(() => "");
      return NextResponse.json(
        {
          connected: false,
          reason: "Supabase Auth health check failed",
          status: authRes.status,
          hint: body.slice(0, 200),
        },
        { status: 502 },
      );
    }

    let authPayload: unknown = null;
    try {
      authPayload = await authRes.json();
    } catch {
      authPayload = null;
    }

    // Confirm client library can talk to project (session fetch is cheap).
    const { error: sessionError } = await supabase.auth.getSession();

    return NextResponse.json({
      connected: true,
      urlHost: new URL(url).host,
      authHealthOk: true,
      authHealthPayload: authPayload,
      sessionCheck: sessionError ? { ok: false, message: sessionError.message } : { ok: true },
    });
  } catch (err) {
    return NextResponse.json(
      {
        connected: false,
        reason: "Network or configuration error",
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 502 },
    );
  }
}
