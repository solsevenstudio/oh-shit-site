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

      {/* Forewords */}
<section id="forewords" className="bg-[#0e2a2f] py-14 px-4">
  <div className="max-w-5xl mx-auto">
    <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-center">Forewords</h2>

    <div className="grid gap-8 md:grid-cols-2">
      {/* Katrina */}
      <article className="bg-white/10 rounded-2xl p-6 shadow">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={katImg}
            alt="Katrina Macdermid"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">Katrina Macdermid</p>
            <p className="text-sm text-neutral-300">Foreword</p>
          </div>
        </div>
        <blockquote className="italic text-neutral-200">
          “This isn’t just a record of symptoms and treatments. It’s about humanity…
          If it feels like this for you, you’re not failing — you’re human.”
        </blockquote>
      </article>

      {/* Kevin */}
      <article className="bg-white/10 rounded-2xl p-6 shadow">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={kevImg}
            alt="Kevin Donaghy"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">Kevin Donaghy</p>
            <p className="text-sm text-neutral-300">Foreword</p>
          </div>
        </div>
        <blockquote className="italic text-neutral-200">
          “This book isn’t polished PR. It’s about honesty — the messy business
          of carrying on, and the small wins that make survival possible.”
        </blockquote>
      </article>
    </div>
  </div>
</section>

     {/* Supported by */}
<section id="support" className="bg-white py-14 px-4">
  <div className="max-w-5xl mx-auto text-center text-[#0e2a2f]">
    <h2 className="font-serif text-2xl sm:text-3xl mb-8">Supported by</h2>
    <div className="flex flex-wrap items-center justify-center gap-10">
      <img src={bowelCancerLogo} alt="Bowel Cancer UK" className="h-16 md:h-20 object-contain" />
      <img src={grcLogo} alt="IT Governance" className="h-16 md:h-20 object-contain" />
    </div>
    <p className="mt-6 text-sm text-[#0e2a2f]/70">
      A percentage of profits are being donated to Bowel Cancer UK.
    </p>
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