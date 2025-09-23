import React from "react";

/** Public assets (in /public/assets) */
const coverImg = "/assets/Cover.jpg";
const katImg = "/assets/kat.png";
const kevImg = "/assets/kevin.jpg";
const bowelCancerLogo = "/assets/bowel-cancer-uk-logo.png";
const grcLogo = "/assets/grc-logo.png";

const extracts = [
  {
    title: "Diagnosis",
    quote:
      "As I write these diaries, I have no idea what the ending will be… In Menorca, after my first steak in years, a pain in my left side arrived — and never really left.",
  },
  {
    title: "Running — ‘fuck you, tumour’",
    quote:
      "Boxing Day: 6km. Every step is me telling cancer to do one. Movement became my rebellion and prep for surgery.",
  },
  {
    title: "Surgery day",
    quote:
      "Check-in 07:00. By 11:30 I’m in a gown. Bright lights, screens ready to show my insides… and a knot in my stomach.",
  },
  {
    title: "The ward (and the fart)",
    quote:
      "5,000 steps up and down the ward. Beeps, morphine, and yes — the kind of fart only bowel surgery patients celebrate.",
  },
  {
    title: "Football medicine",
    quote:
      "Dorking on one iPad, Liverpool on the other. For 90 minutes I didn’t think about cancer or the bag on my stomach.",
  },
  {
    title: "What next?",
    quote:
      "Mentally I am scarred — but I’m not alone. This book doesn’t end with ‘The End’; it ends with ‘What next?’",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="top" className="relative py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={coverImg}
            alt="Book cover"
            className="mx-auto max-w-sm mb-8 rounded-2xl shadow-lg"
          />
          <p className="uppercase tracking-wide text-amber-400 font-semibold mb-2">
            Part One: Diagnosis & Treatment Diaries
          </p>
          <h1 className="font-serif text-4xl mb-4">
            OH SH!T, I’ve Got Bowel Cancer
          </h1>
          <p className="text-lg text-neutral-300 mb-6">
            A raw diary of diagnosis, fear, humour, Liverpool FC, and recovery.
          </p>
        </div>
      </section>

      {/* Extracts */}
      <section className="bg-white/5 py-14 px-4">
        <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
          {extracts.map((ex, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#123] p-6 shadow hover:shadow-lg"
            >
              <h3 className="font-serif text-xl text-amber-400 mb-2">
                {ex.title}
              </h3>
              <p className="text-neutral-200 italic">“{ex.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photos */}
      <section className="bg-[#0e2a2f] py-14 px-4">
        <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
          <img
            src={katImg}
            alt="Katrina"
            className="rounded-2xl shadow-lg"
          />
          <img
            src={kevImg}
            alt="Kevin"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Logos */}
      <section className="bg-white/5 py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8">
          <img src={bowelCancerLogo} alt="Bowel Cancer UK" className="h-12" />
          <img src={grcLogo} alt="IT Governance" className="h-12" />
        </div>
      </section>

      {/* Stay in the loop - Mailchimp */}
      <section id="newsletter" className="bg-white/5 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl mb-4">
            Stay in the loop
          </h2>
          <p className="text-neutral-300 mb-6 px-1">
            Want updates on events, speaking, and Part Two? Drop your email
            below and I’ll ping you when there’s news.
          </p>

          <form
            action="https://solsevenstudio.us20.list-manage.com/subscribe/post?u=defbb93410f7ef85725de88b1&amp;id=0520fdc9c0&amp;f_id=00807deef0"
            method="post"
            target="_blank"
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              name="EMAIL"
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

          <p className="text-neutral-400 text-xs mt-6">
            I’ll email occasionally. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  );
}