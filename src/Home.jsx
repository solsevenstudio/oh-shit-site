import React, { useState, useRef } from "react";
import PageMeta from "./PageMeta.jsx";

/** Public assets (in /public/assets) — keep these filenames */
const coverImg      = "/assets/Cover.jpg";
const coverWebp     = "/assets/Cover.webp";
const cover2Img     = "/assets/Cover-Part2.jpg";
const cover2Webp    = "/assets/Cover-Part2.webp";
const katImg        = "/assets/kat.png";
const katWebp       = "/assets/kat.webp";
const kevImg        = "/assets/kevin.jpg";
const kevWebp       = "/assets/kevin.webp";
const darWebp   = "/assets/dar.webp";
const bowelCancerLogo = "/assets/bowel-cancer-uk-logo.png";
const grcLogo         = "/assets/grc-logo.png";

/** Links */
const BUY_LINK_PART1 =
  "https://www.itgovernance.co.uk/shop/product/oh-sht-ive-got-bowel-cancer-part-one-diagnosis-and-treatment-diaries";
const BUY_LINK_PART2 =
  "https://uk.grcsolutions.io/product/oh-sht-ive-got-bowel-cancer-part-two-in-the-fog-of-chemotherapy";
// Back-compat alias for any remaining references
const BUY_LINK = BUY_LINK_PART1;
const JUSTGIVING_LINK =
  "https://www.justgiving.com/team/johnbarnesraps#sharePage";

/** Short diary extracts to preview on the homepage.
 *  Grouped: Part Two first (newest) then Part One, each in narrative order
 *  so each book tells a coherent mini-story as you read down the strip.
 */
const EXTRACTS = [
  // --- Part Two — In the Fog of Chemotherapy (narrative order) ---
  {
    part: "two",
    title: "Fizzy hands. Frozen eyes.",
    quote:
      "Wrapped up like the SAS, all you could see was my eyes — and even they froze together three times on the walk. Hands, feet, cheeks, even a fizzy right bum cheek. Strawberries fizzed in my mouth.",
    href: BUY_LINK_PART2,
  },
  {
    part: "two",
    title: "The worst day, mentally",
    quote:
      "I’m on the verge of crying. I feel like I’ve gotten old overnight — lost my fitness, lost my spark. And yet — writing to you, the reader, is what pulled me through.",
    href: BUY_LINK_PART2,
  },
  {
    part: "two",
    title: "Aperol Shitz & a creamy curse",
    quote:
      "Orange poop — ‘Aperol Shitz,’ as my friend Sophie christened it. Horrible, stinky, but f&*king triumphant: it felt like clearing the toxins out. Then BBQ chicken pizza betrayed me too. I now physically detest pizza.",
    href: BUY_LINK_PART2,
  },
  {
    part: "two",
    title: "Running the Isle of Wight",
    quote:
      "Six months before diagnosis, I ran 32 miles through the Sussex hills, carrying a tumour I didn’t know was there. When this SH!T is over, I’m coming back — this time to give something back.",
    href: BUY_LINK_PART2,
  },

  // --- Part One — Diagnosis & Treatment Diaries (narrative order) ---
  {
    part: "one",
    title: "Diagnosis",
    quote:
      "As I write these diaries, I have no idea what the ending will be… In Menorca, after my first steak in years, a pain in my left side arrived — and never really left.",
    href: BUY_LINK_PART1,
  },
  {
    part: "one",
    title: "Running — ‘fuck you, tumour’",
    quote:
      "Boxing Day: 6km. Every step is me telling cancer to do one. Movement became my rebellion and prep for surgery.",
    href: BUY_LINK_PART1,
  },
  {
    part: "one",
    title: "The ward (and the fart)",
    quote:
      "5,000 steps up and down the ward. Beeps, morphine, and yes — the kind of fart only bowel surgery patients celebrate.",
    href: BUY_LINK_PART1,
  },
  {
    part: "one",
    title: "Football medicine",
    quote:
      "Dorking on one iPad, Liverpool on the other. For 90 minutes I didn’t think about cancer or the bag on my stomach.",
    href: BUY_LINK_PART1,
  },
  {
    part: "one",
    title: "What next?",
    quote:
      "Mentally I am scarred — but I’m not alone. This book doesn’t end with ‘The End’; it ends with ‘What next?’",
    href: BUY_LINK_PART1,
  },
];

/** Smooth scroll helper for in-page anchors */
const go = (id) => (e) => {
  e.preventDefault();
  document
    .querySelector(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/** ---------------------------------------------------------------------
 *  Slide content for each book — rendered inside the carousel below
 *  ------------------------------------------------------------------ */

function PartOneSlide() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="relative md:h-full flex justify-center items-start">
        <picture>
          <source srcSet={coverWebp} type="image/webp" />
          <img
            src={coverImg}
            alt="OH SH!T, I’ve Got Bowel Cancer — Part One book cover"
            width="900"
            height="1200"
            className="w-full md:w-auto md:max-h-[640px] object-contain rounded-xl shadow-lg"
          />
        </picture>
      </div>

      <div className="max-w-xl text-left space-y-4 sm:space-y-5">
        <p className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-300 bg-amber-300/10 border border-amber-300/30 rounded-full px-3 py-1">
          Part One · Diagnosis &amp; Treatment Diaries
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl mb-2">About Part One</h2>

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

        <div className="pt-2">
          <a
            href={BUY_LINK_PART1}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-semibold text-[#0e2a2f] shadow-sm
                       hover:bg-amber-300 transition-colors
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e2a2f]"
          >
            Buy Part One
          </a>
        </div>
      </div>
    </div>
  );
}

function PartTwoSlide() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="relative md:h-full flex justify-center items-start">
        <picture>
          <source srcSet={cover2Webp} type="image/webp" />
          <img
            src={cover2Img}
            alt="OH SH!T, I’ve Got Bowel Cancer — Part Two: In the Fog of Chemotherapy book cover"
            width="900"
            height="1200"
            className="w-full md:w-auto md:max-h-[640px] object-contain rounded-xl shadow-lg"
          />
        </picture>
      </div>

      <div className="max-w-xl text-left space-y-4 sm:space-y-5">
        <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0e2a2f] bg-amber-300 rounded-full px-3 py-1">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0e2a2f]" />
          New · Available Now
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl mb-2">
          Part Two — In the Fog of Chemotherapy
        </h2>

        <p>
          Chemotherapy is weird. One minute you’re fine. The next, your hands are
          fizzing, your jaw won’t open properly, and you’re wondering how on earth
          lovely, innocent pizza has turned against you.
        </p>

        <p>
          <em>In the Fog of Chemotherapy</em> is Part Two of <em>OH SH!T, I’ve Got
          Bowel Cancer</em> — the diaries of a middle-aged man working his way
          through the bit that no one really talks about. The fog. The fatigue.
          The mornings you wake up feeling ten years older than you did the day
          before. The quiet moments of “is this actually worth it?” — and the
          reasons it still is.
        </p>

        <p>
          Some of it is grim. Some of it, hopefully, is oddly funny. There’s a
          chapter called <em>Aperol Shitz</em> — which probably tells you
          everything you need to know.
        </p>

        <p>
          There’s also something I didn’t see coming: using AI to track how I was
          actually feeling. Symptoms, patterns, the stuff that’s easy to lose in
          the fog. It helped more than I expected, so with a fellow patient I’ve
          written up how to do it properly.
        </p>

        <p>
          This isn’t a guide. It’s raw, written from the heart and from inside
          the fog — each entry on the day it happened, not after the fact. If
          you’re going through it, or standing beside someone who is, this might
          help. Or at the very least, it might remind you that you’re not the
          only one thinking: <em>OH SH!T.</em>
        </p>

        <div className="pt-2">
          <a
            href={BUY_LINK_PART2}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-semibold text-[#0e2a2f] shadow-sm
                       hover:bg-amber-300 transition-colors
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e2a2f]"
          >
            Buy Part Two
          </a>
        </div>
      </div>
    </div>
  );
}

/** ---------------------------------------------------------------------
 *  Book carousel: tabs + sliding slides + swipe + dots + arrows
 *  ------------------------------------------------------------------ */

function BookCarousel() {
  const [active, setActive] = useState(0);
  const total = 2;
  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const touchStartX = useRef(null);
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) next(); else prev();
  };

  const tabBase =
    "px-4 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400";
  const tabActive = "bg-amber-400 text-[#0e2a2f]";
  const tabIdle = "bg-white/5 text-white border border-white/15 hover:bg-white/10";

  return (
    <section id="books" className="px-6 py-14 sm:py-16 md:py-24 max-w-6xl mx-auto">
      {/* Tabs */}
      <div role="tablist" aria-label="Book series" className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          type="button"
          role="tab"
          aria-selected={active === 0}
          aria-controls="slide-part-one"
          onClick={() => setActive(0)}
          className={`${tabBase} ${active === 0 ? tabActive : tabIdle}`}
        >
          Part One
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={active === 1}
          aria-controls="slide-part-two"
          onClick={() => setActive(1)}
          className={`${tabBase} ${active === 1 ? tabActive : tabIdle} inline-flex items-center gap-2`}
        >
          Part Two
          <span
            className={`text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 ${
              active === 1 ? "bg-[#0e2a2f] text-amber-300" : "bg-amber-400 text-[#0e2a2f]"
            }`}
          >
            New
          </span>
        </button>
      </div>

      {/* Carousel viewport */}
      <div
        className="relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out items-start"
          style={{ transform: `translateX(-${active * 100}%)` }}
          aria-live="polite"
        >
          <div
            id="slide-part-one"
            role="tabpanel"
            aria-labelledby="tab-part-one"
            aria-hidden={active !== 0}
            className="w-full flex-shrink-0 px-1"
          >
            <PartOneSlide />
          </div>
          <div
            id="slide-part-two"
            role="tabpanel"
            aria-labelledby="tab-part-two"
            aria-hidden={active !== 1}
            className="w-full flex-shrink-0 px-1"
          >
            <PartTwoSlide />
          </div>
        </div>
      </div>

      {/* Controls: prev / dots / next */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous book"
          className="hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="flex gap-2" role="group" aria-label="Carousel position">
          {[0, 1].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show book ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              className={`h-2.5 w-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                active === i ? "bg-amber-400" : "bg-white/20 hover:bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next book"
          className="hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Charity note — applies to all books */}
      <p className="mt-10 mx-auto max-w-2xl text-center bg-amber-100/10 border border-amber-400/30 text-amber-100 px-4 py-3 rounded-lg font-medium leading-relaxed">
        A portion of the proceeds from every purchase will be donated to{" "}
        <span className="font-bold">Bowel Cancer UK</span>{" "}
        <span className="italic">(reg. Charity no: 1071038)</span>.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-[#0e2a2f] text-white">
      <PageMeta
        title="OH SH!T, I've Got Bowel Cancer | David Barrow"
        description="A raw, honest diary of a bowel cancer diagnosis, surgery and chemotherapy by David Barrow. Written for anyone who needs honesty, humour and hope."
      />
      {/* Book carousel — Part One / Part Two */}
      <BookCarousel />

      {/* Podcast feature */}
      <section className="px-6 py-10 bg-[#0a2228]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex-shrink-0 text-5xl">🎙</div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">As heard on The Graft Podcast</div>
              <h2 className="font-serif text-xl sm:text-2xl text-white mb-2">
                "The Fittest I'd Ever Been — Then I Got Bowel Cancer | GRAFT According to Dar Barrow"
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Dar was training for ultramarathons when he was diagnosed with stage 3B bowel cancer.
                Host Ben Glimmerveen talks to him about diagnosis, surgery, chemotherapy — and why
                fitness is no substitute for listening to your body.
              </p>
              <blockquote className="border-l-4 border-amber-400 pl-4 mb-6">
                <p className="text-neutral-200 italic leading-relaxed">
                  "When public speaker Dar Barrow went on holiday to Menorca, the last thing he expected
                  was to come home with bowel cancer. Fit, healthy, having just run an ultra marathon —
                  he had no symptoms, no warning signs."
                </p>
                <footer className="text-amber-400 text-sm font-semibold mt-2">— The Graft Podcast</footer>
              </blockquote>

              <div className="rounded-xl overflow-hidden border border-white/10 mb-4">
                <iframe
                  src="https://open.spotify.com/embed/episode/41TVhA2SSDgeCwCLGiJwfE?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Graft Podcast: The Fittest I'd Ever Been — Then I Got Bowel Cancer"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://open.spotify.com/episode/41TVhA2SSDgeCwCLGiJwfE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[#1DB954] text-white text-sm font-semibold hover:opacity-90"
                >
                  🎵 Watch on Spotify
                </a>
                <a
                  href="https://podcasts.apple.com/ie/podcast/the-fittest-id-ever-been-then-i-got-bowel-cancer/id1811506979?i=1000732918438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[#9333EA] text-white text-sm font-semibold hover:opacity-90"
                >
                  🎙 Apple Podcasts
                </a>
              </div>
            </div>
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
          {EXTRACTS.map((item, i) => {
            const isTwo = item.part === "two";
            const pillClass = isTwo
              ? "bg-amber-400 text-[#0e2a2f]"
              : "bg-white/10 text-amber-300 border border-amber-300/30";
            const pillLabel = isTwo ? "Part Two" : "Part One";
            const cta = isTwo ? "Read in Part Two" : "Read in Part One";
            return (
              <article
                key={i}
                className="bg-white/10 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`text-[10px] uppercase tracking-wider font-semibold rounded-full px-2 py-0.5 ${pillClass}`}
                  >
                    {pillLabel}
                  </span>
                  {isTwo && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold rounded-full px-2 py-0.5 bg-[#0e2a2f] text-amber-300 border border-amber-300/40">
                      New
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <div className="h-px w-10 bg-white/15 mb-4"></div>
                <p className="italic text-neutral-200 mb-5">“{item.quote}”</p>

                <a
                  href={item.href || BUY_LINK_PART1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 rounded-lg px-4 py-2 border border-white/20 text-white hover:bg-white/10 self-start"
                >
                  {cta} <span aria-hidden>→</span>
                </a>
              </article>
            );
          })}
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
                  <span>Part 1 — Diagnosis &amp; Treatment Diaries — Released September 30th 2025</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 mt-0.5">📗</span>
                  <span>Part 2 — In the Fog of Chemotherapy — <strong className="text-amber-300">Available now</strong></span>
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
                  href={BUY_LINK_PART2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-[#0e2a2f] shadow-sm
                             hover:bg-amber-300 transition-colors
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e2a2f]"
                >
                  Buy Part Two
                </a>

                <a
                  href="#newsletter"
                  onClick={go("#newsletter")}
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 shadow-sm
                             hover:bg-amber-300/15 transition-colors
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e2a2f]"
                >
                  Register your interest in Part 3
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

      {/* Review nudge */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-8">
            <div className="text-3xl mb-4">⭐</div>
            <h2 className="font-serif text-2xl sm:text-3xl mb-3 text-white">
              Already read the book?
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Reviews on Amazon make an enormous difference — they help the book reach the people
              who need it most. If you've read Part One or Part Two and it meant something to you,
              even two honest sentences would help more than you know.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.amazon.co.uk/review/create-review/?asin=1787785777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0e2a2f] hover:bg-amber-300 transition-colors"
              >
                Review Part One on Amazon
              </a>
              <a
                href="https://www.amazon.co.uk/review/create-review/?asin=1787786161"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400/40 bg-transparent px-5 py-3 text-sm font-semibold text-amber-400 hover:bg-amber-400/10 transition-colors"
              >
                Review Part Two on Amazon
              </a>
            </div>
            <p className="text-neutral-500 text-xs mt-4">
              You'll need to be logged into your Amazon account to leave a review.
            </p>
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
          <p className="text-neutral-300 mb-3 px-1">Want updates on events, speaking, and Part Three?</p>
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
{/* --- Podcasts & Clips -------------------------------------------------- */}
<section className="px-6 py-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="font-serif text-2xl sm:text-3xl mb-2">Podcasts & Clips</h2>
    <p className="text-neutral-400 mb-6">
      Featuring <span className="text-amber-400 font-semibold">The Graft Podcast</span>, October 2025
    </p>

    {/* Spotify – simple, reliable card */}
    <a
      href="https://open.spotify.com/episode/41TVhA2SSDgeCwCLGiJwfE?si=79e181adaa024edb"
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-10 rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
      aria-label="Open The Graft Podcast episode on Spotify"
    >
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-[#1DB954] flex items-center justify-center text-[#0e2a2f] font-bold">
          ♪
        </div>
        <div className="flex-1">
          <div className="font-semibold">The Graft Podcast — OH SH!T, I’ve Got Bowel Cancer</div>
          <div className="text-sm text-neutral-400">Listen on Spotify</div>
        </div>
        <span className="text-sm px-3 py-1 rounded-lg bg-amber-400 text-[#0e2a2f] font-semibold">
          Open
        </span>
      </div>
    </a>

{/* Two short clips (embedded video with posters) */}
<div className="grid gap-6 sm:grid-cols-2">
  <article className="bg-white/5 rounded-xl border border-white/10 p-4">
    <h3 className="font-semibold mb-3">He couldn’t leave the hospital until he’d done this</h3>
    <video
      controls
      playsInline
      preload="metadata"
      poster="/assets/clips/farts.jpg"
      className="w-full rounded-lg"
    >
      <source src="/assets/clips/farts.mp4" type="video/mp4" />
      Sorry, your browser doesn’t support embedded video.
    </video>
  </article>

  <article className="bg-white/5 rounded-xl border border-white/10 p-4">
    <h3 className="font-semibold mb-3">1 in 17 men will be diagnosed with this</h3>
    <video
      controls
      playsInline
      preload="metadata"
      poster="/assets/clips/1in17.jpg"
      className="w-full rounded-lg"
    >
      <source src="/assets/clips/1in17.mp4" type="video/mp4" />
      Sorry, your browser doesn’t support embedded video.
    </video>
  </article>
</div>
  </div>
</section>
{/* ---------------------------------------------------------------------- */}
    </main>
  );
}
