import React from "react";

export default function SubscribeForm() {
  // If redirected back with ?subscribed=1, show a success line
  const isSubscribed =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("subscribed") === "1";

  return (
    <section id="newsletter" className="bg-white/5 py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl mb-4">Stay in the loop</h2>
        <p className="text-neutral-300 mb-6 px-1">
          Want updates on events, speaking, and Part Two? Drop your email below and I’ll ping you when there’s news.
        </p>

        {/* Plain HTML form -> your Vercel API. No JS, no CORS. */}
        <form
          action="/api/subscribe"
          method="GET"
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            name="email"                // IMPORTANT
            type="email"
            required
            placeholder="you@email.com"
            className="w-full sm:w-auto flex-grow rounded-xl px-3 py-2 bg-white/10 border border-white/20 text-white"
          />
          <button
            type="submit"
            className="rounded-xl px-6 py-2 bg-amber-400 text-[#0e2a2f] font-semibold hover:bg-amber-300"
          >
            Subscribe
          </button>
        </form>

        {isSubscribed && (
          <p className="text-green-400 text-sm mt-3">
            🎉 Thanks! You’re on the list.
          </p>
        )}

        <p className="text-neutral-400 text-xs mt-6">
          I’ll email occasionally. Unsubscribe anytime.
        </p>
        <p className="text-neutral-400 text-sm mt-4">
          Media enquiries?{" "}
          <a href="mailto:david@solsevenstudio.com" className="underline underline-offset-4">
            Email
          </a>
        </p>
      </div>
    </section>
  );
}