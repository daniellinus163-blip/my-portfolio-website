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
        className="w-full rounded-lg border border-slate-200/90 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200/60 dark:border-slate-600/80 dark:bg-slate-900/55 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/25"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="w-full rounded-lg border border-slate-200/90 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200/60 dark:border-slate-600/80 dark:bg-slate-900/55 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/25"
      />
      <input
        type="tel"
        name="whatsapp"
        placeholder="Your WhatsApp number (e.g. +2348012345678)"
        required
        className="w-full rounded-lg border border-slate-200/90 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200/60 dark:border-slate-600/80 dark:bg-slate-900/55 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/25"
      />
      <textarea
        name="message"
        placeholder="Tell me about your project"
        rows={5}
        required
        className="w-full rounded-lg border border-slate-200/90 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200/60 dark:border-slate-600/80 dark:bg-slate-900/55 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/25"
      />
      <button
        disabled={submitState === "loading"}
        className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/25 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitState === "loading" ? "Sending..." : "Send Message"}
      </button>
      {message ? (
        <p className={`text-sm ${submitState === "success" ? "text-emerald-700" : "text-rose-600"}`}>{message}</p>
      ) : null}
    </form>
  );
}
