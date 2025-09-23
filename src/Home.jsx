import React from "react";

/** Public assets (in /public/assets) — keep filenames exactly as below */
const coverImg = "/assets/Cover.jpg";
const katImg = "/assets/kat.png";
const kevImg = "/assets/kevin.jpg";
const bowelCancerLogo = "/assets/bowel-cancer-uk-logo.png";
const grcLogo = "/assets/grc-logo.png";

/** Links */
const BUY_LINK = "https://itgovernancepublishing.co.uk/product/oh-shit-ive-got-bowel-cancer";
/* Mailchimp hosted form (from your embed footer): opens Mailchimp, guaranteed to add to your Audience */
const MC_HOSTED_FORM = ""https://solsevenstudio.us20.list-manage.com/subscribe?u=defbb93410f7ef85725de88b1&id=0520fdc9c0";
const JUSTGIVING_LINK =
  "https://www.justgiving.com/team/johnbarnesraps#sharePage";

export default function Home() {
  return (
    <main className="bg-[#0e2a2f] text-white">
      {/* Hero: cover + About the Book */}
      <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src={coverImg}
            alt="OH SH!T, I’ve Got Bowel Cancer book cover"
            className="w-full md:w-1/3 rounded-xl shadow-lg"
          />
          <div className="max-w-xl text-left space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl mb-2">About the Book</h2>
            <p>
              I am David, also known as Dar, a 47-year-old male cancer patient who thought I had a bothersome tummy ache.
              That tummy ache turned out to be colorectal cancer.
            </p>
            <p>
              This book documents my journey from feeling poorly to going to the GP and ultimately learning that I have
              descending colon cancer. And all the SHIT that brings with it.
            </p>
            <p>
              I started writing diary entries as a form of journalling. At the time, I was awaiting my diagnosis, and
              initially, it served as a simple yet powerful tool to help me navigate my overwhelming emotions.
            </p>
            <p>
              As I progressed, that practice helped me articulate feelings I’d struggled to express, fostering a crucial
              connection to myself during a tumultuous period.
            </p>
            <p>
              Now, as I share these diaries with you, I hope it provides support and perspective to those facing similar
              challenges or supporting someone who is.
            </p>

            {/* Roadmap + Express Interest (opens Mailchimp hosted page) */}
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-serif text-xl mb-2">Roadmap</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>📘 Part 1 – Released September 30th 2025</li>
                <li>💉 Part 2 – Chemotherapy – Coming Spring 2026</li>
                <li>🌱 Part 3 – The After Effect and Challenges – Coming Autumn 2026</li>
              </ul>
              <a
                href={MC_HOSTED_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 rounded-xl px-6 py-3 bg-emerald-400 text-[#0e2a2f] font-bold hover:bg-emerald-300"
              >
                Express Interest in Part 3
              </a>
            </div>

            <p>
              A portion of the proceeds from every purchase will be donated to Bowel Cancer UK (reg. Charity no: 1071038).
            </p>
            <a
              href={BUY_LINK}
              className="inline-block rounded-xl px-6 py-3 bg-amber-400 text-[#0e2a2f] font-bold hover:bg-amber-300 mt-2"
            >
              Buy the Book
            </a>
          </div>
        </div>
      </section>
<a
  href={JUSTGIVING_LINK}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-xl px-6 py-3 border border-white/40 text-white hover:bg-white/10 mt-3"
>
  Donate via JustGiving
</a>

      {/* Forewords: small portraits + quotes */}
      <section id="forewords" className="bg-[#12343b] px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-center">Forewords</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Katrina */}
            <article className="bg-white/10 rounded-2xl p-6 shadow">
              <div className="flex items-center gap-4 mb-4">
                <img src={katImg} alt="Katrina Macdermid" className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Katrina Macdermid</p>
                  <p className="text-sm text-neutral-300">Foreword</p>
                </div>
              </div>
              <blockquote className="italic text-neutral-200">
                “This isn’t just a record of symptoms and treatments. It’s about humanity… If it feels like this for you,
                you’re not failing — you’re human.”
              </blockquote>
            </article>

            {/* Kevin */}
            <article className="bg-white/10 rounded-2xl p-6 shadow">
              <div className="flex items-center gap-4 mb-4">
                <img src={kevImg} alt="Kevin Donaghy" className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Kevin Donaghy</p>
                  <p className="text-sm text-neutral-300">Foreword</p>
                </div>
              </div>
              <blockquote className="italic text-neutral-200">
                “This book isn’t polished PR. It’s about honesty — the messy business of carrying on, and the small wins
                that make survival possible.”
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* Supported by: white panel + larger logos */}
      <section id="support" className="bg-white text-[#0e2a2f] px-6 py-14">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-serif text-2xl sm:text-3xl mb-6">Supported By</h3>
          <div className="flex justify-center gap-10 items-center flex-wrap">
            <img src={bowelCancerLogo} alt="Bowel Cancer UK" className="h-16 md:h-20 object-contain" />
            <img src={grcLogo} alt="GRC" className="h-16 md:h-20 object-contain" />
          </div>
          <p className="mt-6 text-sm text-[#0e2a2f]/70">
            A percentage of profits are being donated to Bowel Cancer UK.
          </p>
        </div>
      </section>

      {/* Newsletter (Mailchimp form component already works on site; leaving section minimal here if you use it elsewhere) */}
    </main>
  );
}