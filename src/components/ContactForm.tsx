"use client";

import { FormEvent, useRef, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("loading");
    setMessage("");

    const formEl = formRef.current ?? event.currentTarget;
    const formData = new FormData(formEl);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      whatsapp: String(formData.get("whatsapp") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message: string };
      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      setSubmitState("success");
      setMessage("Message sent successfully. I will get back to you soon.");
      formRef.current?.reset();
    } catch (error) {
      setSubmitState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <form ref={formRef} className="space-y-4" onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="w-full rounded-xl border-2 border-rose-200 bg-white/95 px-4 py-3 text-sm font-bold text-[#2a1218] outline-none transition placeholder:font-bold placeholder:text-[#351820] focus:border-[#be123c] focus:ring-2 focus:ring-rose-200"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="w-full rounded-xl border-2 border-rose-200 bg-white/95 px-4 py-3 text-sm font-bold text-[#2a1218] outline-none transition placeholder:font-bold placeholder:text-[#351820] focus:border-[#be123c] focus:ring-2 focus:ring-rose-200"
      />
      <input
        type="tel"
        name="whatsapp"
        placeholder="Your WhatsApp number (e.g. +2348012345678)"
        required
        className="w-full rounded-xl border-2 border-rose-200 bg-white/95 px-4 py-3 text-sm font-bold text-[#2a1218] outline-none transition placeholder:font-bold placeholder:text-[#351820] focus:border-[#be123c] focus:ring-2 focus:ring-rose-200"
      />
      <textarea
        name="message"
        placeholder="Tell me about your project"
        rows={5}
        required
        className="w-full rounded-xl border-2 border-rose-200 bg-white/95 px-4 py-3 text-sm font-bold text-[#2a1218] outline-none transition placeholder:font-bold placeholder:text-[#351820] focus:border-[#be123c] focus:ring-2 focus:ring-rose-200"
      />
      <button
        disabled={submitState === "loading"}
        className="btn-primary rounded-full px-6 py-3 text-sm text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitState === "loading" ? "Sending..." : "Send Message"}
      </button>
      {message ? (
        <p className={`text-sm ${submitState === "success" ? "text-emerald-700" : "text-[#be123c]"}`}>{message}</p>
      ) : null}
    </form>
  );
}
