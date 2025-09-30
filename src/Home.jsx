import React from "react";

/** Public assets (in /public/assets) — keep these filenames */
const coverImg      = "/assets/Cover.jpg";
const coverWebp     = "/assets/Cover.webp";
const katImg        = "/assets/kat.png";
const katWebp       = "/assets/kat.webp";
const kevImg        = "/assets/kevin.jpg";
const kevWebp       = "/assets/kevin.webp";
const bowelCancerLogo = "/assets/bowel-cancer-uk-logo.png";
const grcLogo         = "/assets/grc-logo.png";

/** Links (update BUY_LINK later to your product page if needed) */
const BUY_LINK =
  "https://www.itgovernance.co.uk/shop/product/oh-sht-ive-got-bowel-cancer-part-one-diagnosis-and-treatment-diaries";
const JUSTGIVING_LINK =
  "https://www.justgiving.com/team/johnbarnesraps#sharePage";

/** Short diary extracts to preview on the homepage */
const EXTRACTS = [
  {
    title: "Diagnosis",
    quote:
      "As I write these diaries, I have no idea what the ending will be… In Menorca, after my first steak in years, a pain in my left side arrived — and never really left.",
    href: BUY_LINK,
  },
  {
    title: "Running — ‘fuck you, tumour’",
    quote:
      "Boxing Day: 6km. Every step is me telling cancer to do one. Movement became my rebellion and prep for surgery.",
    href: BUY_LINK,
  },
  {
    title: "Surgery day",
    quote:
      "Check-in 07:00. By 11:30 I’m in a gown. Bright lights, screens ready to show my insides… and a knot in my stomach.",
    href: BUY_LINK,
  },
  {
    title: "The ward (and the fart)",
    quote:
      "5,000 steps up and down the ward. Beeps, morphine, and yes — the kind of fart only bowel surgery patients celebrate.",
    href: BUY_LINK,
  },
  {
    title: "Football medicine",
    quote:
      "Dorking on one iPad, Liverpool on the other. For 90 minutes I didn’t think about cancer or the bag on my stomach.",
    href: BUY_LINK,
  },
  {
    title: "What next?",
    quote:
      "Mentally I am scarred — but I’m not alone. This book doesn’t end with ‘The End’; it ends with ‘What next?’",
    href: BUY_LINK,
  },
];

/** Smooth scroll helper for in-page anchors */
const go = (id) => (e) => {
  e.preventDefault();
  document
    .querySelector(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Home() {
  return (
    <main className="bg-[#0e2a2f] text-white">
      {/* Hero: cover + About the Book */}
      <section className="px-6 py-14 sm:py-16 md:py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Book cover — WEBP + fallback */}
          <div className="relative md:h-full flex justify-center items-start">
            <picture>
              <source srcSet={coverWebp} type="image/webp" />
              <img
                src={coverImg}
                alt="OH SH!T, I’ve Got Bowel Cancer book cover"
                width="900"
                height="1200"
                className="w-full md:w-auto md:max-h-[640px] object-contain rounded-xl shadow-lg"
              />
            </picture>
          </div>

          {/* About the Book */}
          <div className="max-w-xl text-left space-y-4 sm:space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl mb-2">About the Book</h2>

            <p>
              I am David, also known as Dar, a 47-year-old male cancer patient who
              thought I had a bothersome tummy ache.
            </p>

            <p>
              <strong><em>That tummy ache turned out to be colorectal cancer.</em></strong>
            </p>

            <p>
              This book documents my journey from feeling poorly to going to the GP
              and ultimately learning that I have descending colon cancer. And all
              the SH!T that brings with it.
            </p>

            <p>
              I started writing diary entries as a form of journalling while I was
              waiting for my diagnosis. At first, it was just a way to let the fear
              and uncertainty out of my head and onto the page.
            </p>

            <p>
              Over time, those scribbles became something more — a way to put words
              to feelings I’d struggled to express and to stay connected to myself
              during a turbulent period.
            </p>

            <p>
              Now, as I share these diaries with you, I hope they offer support,
              perspective, and maybe even a little strength to anyone walking a
              similar path — whether you’re facing cancer yourself or standing beside
              someone who is.
            </p>

            {/* Charity highlight */}
            <p className="mt-4 bg-amber-100/10 border border-amber-400/30 text-amber-100 px-4 py-3 rounded-lg font-medium leading-relaxed">
              A portion of the proceeds from every purchase will be donated to{" "}
              <span className="font-bold">Bowel Cancer UK</span>{" "}
              <span className="italic">(reg. Charity no: 1071038)</span>.
            </p>

            {/*
            Optional inline Buy button — keep commented until wanted here
            <a
              href={BUY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 shadow-sm
                         hover:bg-amber-300/15 transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e2a2f]"
            >
              Buy the Book
            </a>
            */}
          </div>
        </div>
      </section>

      {/* Extracts from the diary */}
      <section id="extracts" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-center">
            Extracts from the diary
          </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXTRACTS.map((item, i) => (
            <article
              key={i}
              className="bg-white/10 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <div className="h-px w-10 bg-white/15 mb-4"></div>
              <p className="italic text-neutral-200 mb-5">“{item.quote}”</p>

              <a
                href={item.href || BUY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 border border-white/20 text-white hover:bg-white/10"
              >
                Read the full diary <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* The OH SH!T Diaries */}
      <section id="diaries" className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="h-1 w-full bg-gradient-to-r from-amber-400/70 via-amber-300/70 to-amber-400/70" />

            <div className="p-6 sm:p-8">
              <h3 className="font-serif text-2xl sm:text-3xl mb-6 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                The OH SH!T Diaries
              </h3>

              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 mt-0.5">📘</span>
                  <span>Part 1 — Released September 30th 2025</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 mt-0.5">✍️</span>
                  <span>Part 2 — Chemotherapy — Coming Spring 2026</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 mt-0.5">🌱</span>
                  <span>The After Effect &amp; Challenges — Coming Autumn 2026</span>
                </li>
              </ul>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#newsletter"
                  onClick={go("#newsletter")}
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 shadow-sm
                             hover:bg-amber-300/15 transition-colors
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e2a2f]"
                >
                  Register your interest in Parts 2 and 3
                </a>

                <a
                  href={JUSTGIVING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 shadow-sm
                             hover:bg-amber-300/15 transition-colors
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e2a2f]"
                >
                  Donate via JustGiving
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forewords */}
      <section id="forewords" className="bg-[#12343b] px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-center">Forewords</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Katrina */}
            <article className="bg-white/10 rounded-2xl p-6 shadow">
              <div className="flex items-center gap-4 mb-4">
                <picture>
                  <source srcSet={katWebp} type="image/webp" />
                  <img
                    src={katImg}
                    alt="Katrina Macdermid"
                    loading="lazy"
                    width="80"
                    height="80"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </picture>
                <div>
                  <p className="font-semibold">Katrina Macdermid</p>
                  <p className="text-sm text-neutral-300">Foreword</p>
                </div>
              </div>
              <blockquote className="italic text-neutral-200">
                “This isn’t just a record of symptoms and treatments. It’s about
                humanity… If it feels like this for you, you’re not failing — you’re
                human.”
              </blockquote>
            </article>

            {/* Kevin */}
            <article className="bg-white/10 rounded-2xl p-6 shadow">
              <div className="flex items-center gap-4 mb-4">
                <picture>
                  <source srcSet={kevWebp} type="image/webp" />
                  <img
                    src={kevImg}
                    alt="Kevin Donaghy"
                    loading="lazy"
                    width="80"
                    height="80"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </picture>
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

      {/* Supported by: white panel + larger logos */}
      <section id="support" className="bg-[#0e2a2f] px-6 py-14">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-serif text-2xl sm:text-3xl mb-6">Supported By</h3>
          <div className="bg-white rounded-xl p-6 inline-flex justify-center gap-10 items-center flex-wrap shadow">
            <img
              src={bowelCancerLogo}
              alt="Bowel Cancer UK"
              className="h-30 md:h-34 object-contain"
            />
            <img
              src={grcLogo}
              alt="GRC"
              className="h-16 md:h-20 object-contain"
            />
          </div>
          <p className="mt-6 text-sm text-white font-medium">
            A percentage of profits are being donated to Bowel Cancer UK (Charity No: 1071038).
          </p>
        </div>
      </section>

      {/* Stay in the loop (Mailchimp) */}
      <section id="newsletter" className="bg-white/5 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl mb-4">Stay in the loop</h2>

          {/* split into 3 readable lines */}
          <p className="text-neutral-300 mb-3 px-1">Want updates on events, speaking, and Part Two?</p>
          <p className="text-neutral-300 mb-3 px-1">Drop your email below.</p>
          <p className="text-neutral-300 mb-6 px-1">I’ll ping you when there’s news.</p>

          <form
            action="https://solsevenstudio.us20.list-manage.com/subscribe/post?u=defbb93410f7ef85725de88b1&id=0520fdc9c0&f_id=00807deef0"
            method="post"
            target="_blank"
            noValidate
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              name="EMAIL"
              required
              placeholder="you@email.com"
              className="w-full sm:w-auto flex-grow rounded-xl px-3 py-2 bg-white/10 border border-white/20 text-white"
            />
            {/* Mailchimp honeypot */}
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              <input
                type="text"
                name="b_defbb93410f7ef85725de88b1_0520fdc9c0"
                tabIndex="-1"
                defaultValue=""
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-xl border border-white/15 bg-amber-400 px-6 py-2 text-sm font-semibold text-[#0e2a2f] shadow-sm
                         hover:bg-amber-300 transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e2a2f]"
            >
              Subscribe
            </button>
          </form>

          <p className="text-neutral-400 text-xs mt-6">
            By subscribing you agree to receive occasional updates. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  );
}