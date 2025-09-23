import React from "react";

/** Public assets (in /public/assets) */
const coverImg = "/assets/Cover.jpg";
const katImg = "/assets/Kat Picture.jpeg";      // ensure extension matches the file in /public/assets
const kevImg = "/assets/Kevin Picture.jpeg";
const bowelCancerLogo = "/assets/Bowel Cancer UK logo.png";
const grcLogo = "/assets/itg-logo-lg.png";

/** Mail link */
const BUY_LINK =
  "mailto:david@solsevenstudio.com?subject=OH%20SH!T%20Book%20Order";

/** Extracts */
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
      {/* Hero */}
      <section id="top" className="relative py-16 px-4 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mx-auto w-full max-w-full sm:max-w-sm">
            <img
              src={coverImg}
              alt="Book cover"
              className="mx-auto w-full rounded-2xl shadow-xl ring-1 ring-white/10"
              loading="eager"
              decoding="async"
            />
          </div>

          <span className="inline-block mt-8 mb-3 text-[11px] sm:text-xs tracking-widest uppercase bg-amber-400/15 text-amber-300 px-3 py-1 rounded-full border border-amber-300/30">
            Part One: Diagnosis &amp; Treatment Diaries
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">
            OH SH!T, I’ve Got Bowel Cancer
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 mb-6 px-1">
            A raw diary of diagnosis, fear, humour, Liverpool FC, and recovery.
          </p>

          <a
            href={BUY_LINK}
            className="inline-block rounded-xl px-6 py-3 bg-amber-400 text-[#0e2a2f] font-bold hover:bg-amber-300"
          >
            Buy Now
          </a>
        </div>
      </section>

      {/* Extracts */}
      <section id="extracts" className="bg-white/5 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-center">
            Extracts from the Diaries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {extracts.map((ex, i) => (
              <article key={i} className="bg-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-amber-300 mb-2">
                  {ex.title}
                </h3>
                <p className="italic text-neutral-200 leading-relaxed">
                  “{ex.quote}”
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={BUY_LINK}
              className="inline-block rounded-xl px-6 py-3 bg-amber-400 text-[#0e2a2f] font-bold hover:bg-amber-300"
            >
              Read the full diaries
            </a>
          </div>
        </div>
      </section>

      {/* Forewords */}
      <section id="forewords" className="bg-white/5 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-center md:text-left">
            Forewords
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white/10 rounded-2xl p-6 text-center">
              <img
                src={katImg}
                alt="Katrina Macdermid"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 object-cover"
                loading="lazy"
                decoding="async"
              />
              <blockquote className="text-neutral-200 leading-relaxed">
                “This isn’t just a record of symptoms and treatments. It’s about
                humanity… If it feels like this for you, you’re not failing —
                you’re human.”
              </blockquote>
              <p className="mt-2 font-semibold">— Katrina Macdermid</p>
            </article>

            <article className="bg-white/10 rounded-2xl p-6 text-center">
              <img
                src={kevImg}
                alt="Kevin Donaghy"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 object-cover"
                loading="lazy"
                decoding="async"
              />
              <blockquote className="text-neutral-200 leading-relaxed">
                “This book isn’t polished PR. It’s about honesty. The messy
                business of carrying on… and the small wins that make survival
                possible.”
              </blockquote>
              <p className="mt-2 font-semibold">— Kevin Donaghy</p>
            </article>
          </div>
        </div>
      </section>

      {/* Supported by */}
      <section
        id="support"
        className="py-14 px-4 bg-white border-y border-black/5"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl mb-6 text-[#0e2a2f]">
            Supported by
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-12 mb-6">
            <img
              src={bowelCancerLogo}
              alt="Bowel Cancer UK"
              className="h-16 sm:h-20 md:h-24 object-contain"
              loading="lazy"
              decoding="async"
            />
            <img
              src={grcLogo}
              alt="GRC Solutions"
              className="h-16 sm:h-20 md:h-24 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <p className="text-[#0e2a2f] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
            A percentage of all profits will be donated to{" "}
            <strong className="underline">Bowel Cancer UK</strong>.
          </p>
        </div>
      </section>

      {/* Stay in the loop */}
      <section id="newsletter" className="bg-white/5 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl mb-4">
            Stay in the loop
          </h2>
          <p className="text-neutral-300 mb-6 px-1">
            Want updates on events, speaking, and Part Two? Drop me a line.
          </p>
          <a
            href="mailto:david@solsevenstudio.com?subject=OH%20SH!T%20Book%20Updates&body=Hi%20David%2C%20please%20keep%20me%20posted%20on%20the%20book%20and%20events.%20Thanks!"
            className="inline-block rounded-xl px-6 py-3 bg-amber-400 text-[#0e2a2f] font-bold hover:bg-amber-300"
          >
            Email me at david@solsevenstudio.com
          </a>
          <p className="text-neutral-400 text-sm mt-4">
            I’ll reply personally and add you to my update list.
          </p>
        </div>
      </section>
    </main>
  );
}