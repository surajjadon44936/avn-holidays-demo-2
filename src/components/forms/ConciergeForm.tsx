"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

interface ConciergeFormProps {
  source?: string;
  className?: string;
  compact?: boolean;
}

export function ConciergeForm({
  source = "website",
  className,
  compact = false,
}: ConciergeFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setMessage("Thank you. Our concierge team will reach out within one business day.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call us directly — we're here to help.");
    }
  }

  const inputClass =
    "w-full border-b border-sand-dark bg-transparent px-0 py-3 text-ink placeholder:text-ink-faint focus:border-pine focus:outline-none transition-colors";

  const labelClass = "block text-xs uppercase tracking-[0.15em] text-ink-muted mb-1";

  if (status === "success") {
    return (
      <div className={cn("rounded-sm border border-pine/20 bg-pine/5 p-8", className)}>
        <p className="font-display text-2xl text-pine">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className={cn("grid gap-6", compact ? "grid-cols-1" : "md:grid-cols-2")}>
        <div>
          <label htmlFor="name" className={labelClass}>Your name</label>
          <input id="name" name="name" type="text" required className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" required className={inputClass} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" required className={inputClass} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="destination" className={labelClass}>Destination / experience</label>
          <input id="destination" name="destination" type="text" className={inputClass} placeholder="e.g. Kerala backwaters, Sikkim" />
        </div>
        {!compact && (
          <>
            <div>
              <label htmlFor="dates" className={labelClass}>Travel dates</label>
              <input id="dates" name="dates" type="text" className={inputClass} placeholder="Flexible or specific dates" />
            </div>
            <div>
              <label htmlFor="partySize" className={labelClass}>Party size</label>
              <input id="partySize" name="partySize" type="text" className={inputClass} placeholder="e.g. 2 adults, 1 child" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="budget" className={labelClass}>Approximate budget</label>
              <input id="budget" name="budget" type="text" className={inputClass} placeholder="Optional — helps us tailor recommendations" />
            </div>
          </>
        )}
        <div className={compact ? "" : "md:col-span-2"}>
          <label htmlFor="message" className={labelClass}>Tell us about your trip</label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 3 : 4}
            className={cn(inputClass, "resize-none")}
            placeholder="Dream destinations, special occasions, preferences..."
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-pine px-8 py-4 text-sm font-medium uppercase tracking-wider text-sand transition-colors hover:bg-pine-dark disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
      >
        {status === "loading" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
