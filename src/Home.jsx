import React from "react";

/** Public assets (in /public/assets) */
const coverImg = "/assets/Cover.jpg";
const katImg = "/assets/kat.png";
const kevImg = "/assets/kevin.jpg";
const bowelCancerLogo = "/assets/bowel-cancer-uk-logo.png";
const grcLogo = "/assets/grc-logo.png"; // 

/** Mail + fundraising links */
const BUY_LINK =
  "mailto:david@solsevenstudio.com?subject=OH%20SH!T%20Book%20Order";
const PART2_LINK =
  "mailto:david@solsevenstudio.com?subject=Preorder%20Part%202%20-%20Chemotherapy";
const PART3_LINK =
  "mailto:david@solsevenstudio.com?subject=Express%20interest%20in%20Part%203";
const JUSTGIVING_LINK =
  "https://www.justgiving.com/team/johnbarnesraps#sharePage";

/** --- Book series info (auto-updating for Part 1) --- */
const series = [
  {
    title: "Part 1",
    dateLabel: "30 September 2025",
    releaseDate: new Date("2025-09-30T00:00:00"),
  },
  {
    title: "Part 2 — Chemotherapy",
    dateLabel: "Coming Spring 2026",
  },
  {
    title: "Part 3 — The after effect and challenges",
    dateLabel: "Coming Autumn 2026",
  },
];

function part1Status(now = new Date()) {
  const p1 = series[0];
  return now >= p1.releaseDate
    ? `Released ${p1.dateLabel}`
    : `Releases on ${p1.dateLabel}`;
}

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
      {/* Hero: cover + About the Book (with roadmap) */}
      <section id="top" className="relative py-16 px-4 sm:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Book cover */}
          <div className="mx-auto w-full max-w-sm">
            <img
              src={coverImg}
              alt="Book cover"
              className="w-full rounded-2xl shadow-xl ring-1 ring-white/10"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* About the Book + Roadmap */}
          <div>
            <span className="inline-block mb-3 text-[11px] sm:text-xs tracking-widest uppercase bg-amber-400/15 text-amber-300 px-3 py-1 rounded-full border border-amber-300/30">
              Part One: Diagnosis &amp; Treatment Diaries
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">
              OH SH!T, I’ve Got Bowel Cancer
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 mb-6">
              A raw diary of diagnosis, fear, humour, Liverpool FC, and recovery.
            </p>

            {/* About the Book (your text) */}
            <div className="space-y-4 text-neutral-200 leading-relaxed">
              <p>
                I am David, also known as Dar, a 47-year-old male cancer patient who
                thought I had a bothersome tummy ache. That tummy ache turned out to be
                colorectal cancer.
              </p>
              <p>
                This book documents my journey from feeling poorly to going to the GP
                and ultimately learning that I have descending colon cancer. And all the
                SHIT that brings with it.
              </p>
              <p>
                I started writing diary entries as a form of journalling. At the time, I
                was awaiting my diagnosis, and initially, it served as a simple yet
                powerful tool to help me navigate my overwhelming emotions. Putting my
                thoughts on paper became a sanctuary where I could express my fears and
                hopes freely, supporting my mental health during a time when I felt
                completely out of control.
              </p>
              <p>
                As I progressed through my own experiences, I reflected on how the
                intimate journalling practice profoundly impacted my well-being. It
                helped me articulate feelings I had previously struggled to express,
                fostering a crucial connection to myself during that tumultuous period.
              </p>
              <p>
                Now, as I share these diaries with you, dear reader, I hope it provides
                support and perspective to those facing similar challenges or those
                supporting someone who is. This book is a resource for everyone –
                whether you are facing cancer or supporting a loved one on their
                journey. I sincerely hope that within these pages, you will find
                insights, comfort and understanding about this complex disease and its
                often overwhelming impact on our lives.
              </p>
              <p>
                By shedding light on the realities of cancer, I aim to foster empathy
                and awareness, ultimately reminding us that we are not alone in this
                struggle. Each shared story and lesson learned can be a beacon of hope
                and support during an incredibly challenging time.
              </p>
              <p className="font-semibold text-amber-300">
                A portion of the proceeds from every purchase of the book will be
                donated to Bowel Cancer UK (reg. Charity no: 1071038).
              </p>
            </div>

            {/* Series roadmap (auto-updating) */}
            <div id="roadmap" className="mt-8">
              <h2 className="font-serif text-2xl sm:text-3xl mb-4">
                The OH SH!T Series
              </h2>
              <ul className="space-y-3">
                <li className="bg-white/10 rounded-2xl p-4">
                  <p className="font-semibold">{series[0].title}</p>
                  <p>{part1Status()}</p>
                </li>
                <li className="bg-white/10 rounded-2xl p-4">
                  <p className="font-semibold">{series[1].title}</p>
                  <p>{series[1].dateLabel}</p>
                </li>
                <li className="bg-white/10 rounded-2xl p-4">
                  <p className="font-semibold">{series[2].title}</p>
                  <p>{series[2].dateLabel}</p>
                </li>
              </ul>

              {/* Buttons under roadmap */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href={PART2_LINK}
                  className="flex-1 text-center rounded-xl px-6 py-3 bg-amber-400 text-[#0e2a2f] font-bold hover:bg-amber-300"
                >
                  Preorder Part 2
                </a>
                <a
                  href={PART3_LINK}
                  className="flex-1 text-center rounded-xl px-6 py-3 bg-white/10 text-white font-bold hover:bg-white/20"
                >
                  Express Interest in Part 3
                </a>
              </div>

              <div className="mt-4">
                <a
                  href={JUSTGIVING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center rounded-xl px-6 py-3 bg-pink-600 text-white font-bold hover:bg-pink-500"
                >
                  Support on JustGiving
                </a>
              </div>
            </div>

            <a
              href={BUY_LINK}
              className="mt-6 inline-block rounded-xl px-6 py-3 bg-amber-400 text-[#0e2a2f] font-bold hover:bg-amber-300"
            >
              Buy Now
            </a>
          </div>
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