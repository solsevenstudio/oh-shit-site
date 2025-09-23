// src/SubscribeForm.jsx
import React from "react";

export default function SubscribeForm() {
  return (
    <section id="newsletter" className="bg-white/5 py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl mb-4">Stay in the loop</h2>
        <p className="text-neutral-300 mb-6 px-1">
          Want updates on events, speaking, and Part Two? Drop your email below and I’ll ping you when there’s news.
        </p>

        {/* Plain Mailchimp HTML form (styled with your Tailwind classes) */}
        <form
          action="https://solsevenstudio.us20.list-manage.com/subscribe/post?u=defbb93410f7ef85725de88b1&id=0520fdc9c0&f_id=00807deef0"
          method="post"
          target="_blank"     // opens Mailchimp confirm in a new tab; remove if you prefer a redirect
          noValidate
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          {/* Required hidden MC fields */}
          <input type="hidden" name="u" value="defbb93410f7ef85725de88b1" />
          <input type="hidden" name="id" value="0520fdc9c0" />
          <input type="hidden" name="f_id" value="00807deef0" />

          {/* Visible email field */}
          <input
            type="email"
            name="EMAIL"   // Mailchimp expects EMAIL (caps)
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

          {/* Honeypot (spam trap) — keep exactly this name */}
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input type="text" name="b_defbb93410f7ef85725de88b1_0520fdc9c0" tabIndex="-1" defaultValue="" />
          </div>
        </form>

        <p className="text-neutral-400 text-xs mt-6">
          I’ll email occasionally. Unsubscribe anytime.
        </p>
        <p className="text-neutral-400 text-sm mt-4">
          Media enquiries? <a href="mailto:david@solsevenstudio.com" className="underline underline-offset-4">Email</a>
        </p>
      </div>
    </section>
  );
}