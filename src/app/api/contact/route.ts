import { saveContactSubmission } from "@/lib/supabaseContact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const whatsappRegex = /^\+?[0-9()\-\s]{7,20}$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const whatsapp = String(body.whatsapp || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !whatsapp || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    if (!whatsappRegex.test(whatsapp)) {
      return NextResponse.json({ message: "Please enter a valid WhatsApp number." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json(
        { message: "Please provide more details in your message." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL?.trim() || "Portfolio Contact <onboarding@resend.dev>";

    // Avoid confusing Supabase errors when Resend is only half-configured on Vercel etc.
    if (!(apiKey && toEmail) && (apiKey || toEmail)) {
      const missing: string[] = [];
      if (!apiKey) missing.push("RESEND_API_KEY");
      if (!toEmail) missing.push("CONTACT_TO_EMAIL");
      return NextResponse.json(
        {
          message:
            `Email sending needs both RESEND_API_KEY and CONTACT_TO_EMAIL on the server. Missing: ${missing.join(", ")}. ` +
            `In Vercel: Project → Settings → Environment Variables → add for Production (and Preview if you test there), then redeploy.`,
        },
        { status: 500 },
      );
    }

    // 1) Email via Resend when configured
    if (apiKey && toEmail) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\n\nMessage:\n${message}`,
        html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
      });

      if (error) {
        console.error("[contact] Resend error:", error);
        return NextResponse.json({ message: "Failed to send email. Please try again." }, { status: 502 });
      }

      return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
    }

    // 2) Fallback: store in Supabase (no inbox email unless you add Resend later)
    const saved = await saveContactSubmission({ name, email, whatsapp, message });
    if (saved.ok) {
      return NextResponse.json(
        {
          message:
            "Message received and saved. If email delivery is not set up yet, check your Supabase table `contact_submissions`.",
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        message:
          "Contact delivery is not configured for this deployment. Add RESEND_API_KEY and CONTACT_TO_EMAIL (Production env on your host), then redeploy—or configure Supabase per supabase/contact_submissions.sql. Server detail: " +
          saved.reason,
      },
      { status: 500 },
    );
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }
}
