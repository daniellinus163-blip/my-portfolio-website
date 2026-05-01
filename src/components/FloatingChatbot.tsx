"use client";

import { useState } from "react";

const demoMessages = [
  { sender: "bot", text: "Hi! I am your AI assistant. Want to discuss your project?" },
  { sender: "user", text: "Yes, I need an automation + web app." },
  { sender: "bot", text: "Perfect. I can help design and build it end-to-end." },
];

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {isOpen ? (
        <div className="glass-card mb-3 w-80 rounded-2xl border border-sky-300/40 p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-900">Live AI Chatbot Demo</h4>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full px-2 py-1 text-xs text-slate-600 hover:bg-sky-500/15"
            >
              Close
            </button>
          </div>
          <div className="space-y-2">
            {demoMessages.map((msg, idx) => (
              <p
                key={idx}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-xs leading-relaxed ${
                  msg.sender === "bot"
                    ? "bg-sky-500/15 text-slate-800 ring-1 ring-sky-400/25"
                    : "ml-auto bg-blue-600/10 text-slate-800 ring-1 ring-blue-500/25"
                }`}
              >
                {msg.text}
              </p>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input
              readOnly
              value="Type your message..."
              className="w-full rounded-lg border border-slate-200/90 bg-white/80 px-3 py-2 text-xs text-slate-500 outline-none"
            />
            <button
              type="button"
              className="rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm"
            >
              Send
            </button>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setIsOpen((state) => !state)}
        className="animate-pulse rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/35 transition hover:scale-105"
      >
        AI Chat
      </button>
    </div>
  );
}
