import React, { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // ✅ Your actual Google Apps Script Web App URL
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbwqlpzgaLV9776R2ZztOcaW19Z6ev69f6k78gVZ2bLp8JW7vfL86le_gUyLEq63_KKP/exec";

      // Send the email straight to Apps Script
      const response = await fetch(scriptUrl + "?email=" + encodeURIComponent(email));

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="newsletter" className="bg-white/5 py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl mb-4">
          Stay in the loop
        </h2>
        <p className="text-neutral-300 mb-6 px-1">
          Want updates on events, speaking, and Part Two? Drop your email below
          and I’ll ping you when there’s news.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@email.com"
            className="w-full sm:w-auto flex-grow rounded-xl px-3 py-2 bg-white/10 border border-white/20 text-white"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-xl px-6 py-2 bg-amber-400 text-[#0e2a2f] font-semibold hover:bg-amber-300 disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Subscribe"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-400 text-sm mt-3">
            🎉 Thanks! You’re on the list.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">
            ❌ Oops, something went wrong. Try again?
          </p>
        )}

        <p className="text-neutral-400 text-xs mt-6">
          I’ll email occasionally. Unsubscribe anytime.
        </p>
        <p className="text-neutral-400 text-sm mt-4">
          Media enquiries?{" "}
          <a
            href="mailto:david@solsevenstudio.com"
            className="underline underline-offset-4"
          >
            Email
          </a>
        </p>
      </div>
    </section>
  );
}