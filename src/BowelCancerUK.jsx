// src/BowelCancerUK.jsx
import React from "react";
import PageMeta from "./PageMeta.jsx";

/** Public assets */
const coverImg     = "/assets/Cover.jpg";
const coverWebp    = "/assets/Cover.webp";
const cover2Img    = "/assets/Cover-Part2.jpg";
const cover2Webp   = "/assets/Cover-Part2.webp";
const bowelCancerLogo = "/assets/bowel-cancer-uk-logo.png";

/** Links */
const BUY_LINK_PART1 =
  "https://www.itgovernance.co.uk/shop/product/oh-sht-ive-got-bowel-cancer-part-one-diagnosis-and-treatment-diaries";
const BUY_LINK_PART2 =
  "https://uk.grcsolutions.io/product/oh-sht-ive-got-bowel-cancer-part-two-in-the-fog-of-chemotherapy";
const JUSTGIVING_LINK = "https://www.justgiving.com/team/johnbarnesraps#sharePage";
const BOWEL_CANCER_UK_LINK = "https://www.bowelcanceruk.org.uk/";
const SCREENING_LINK =
  "https://www.bowelcanceruk.org.uk/about-bowel-cancer/screening/";

/** Smooth scroll helper for in-page anchors */
const scrollTo = (id) => (e) => {
  e.preventDefault();
  document
    .querySelector(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const TABS = [
  { href: "#about", label: "About" },
  { href: "#fundraiser", label: "The Run" },
  { href: "#books", label: "The Books" },
  { href: "#awareness", label: "Awareness" },
];

export default function BowelCancerUK() {
  return (
    <main className="bg-[#0e2a2f] text-white">
      <PageMeta
        title="Supporting Bowel Cancer UK | OH SH!T, I've Got Bowel Cancer"
        description="A percentage of every copy of OH SH!T, I've Got Bowel Cancer goes to Bowel Cancer UK. Plus the Isle of Wight 107km run that has raised over £3,500 for the charity."
      />

      {/* Page tabs (jump links) — at the very top so visible immediately */}
      <nav
        aria-label="Sections on this page"
        className="px-6 py-4 border-b border-white/10 bg-[#0a2228]"
      >
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {TABS.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              onClick={scrollTo(tab.href)}
              className="px-4 py-2 rounded-full text-sm font-semibold bg-white/5 text-white border border-white/15 hover:bg-amber-400 hover:text-[#0e2a2f] hover:border-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {tab.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-14 sm:py-20 bg-gradient-to-b from-[#0a2228] to-[#0e2a2f]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="inline-block text-xs font-semibold tracking-wider uppercase text-amber-300 bg-amber-300/10 border border-amber-300/30 rounded-full px-3 py-1 mb-6">
            Supporting Bowel Cancer UK
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl mb-5 leading-tight">
            <span className="text-white">OH SH!T </span>
            <span className="text-amber-400">×</span>
            <span className="text-white"> Bowel Cancer UK</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            A percentage of profits from every copy of{" "}
            <em>OH SH!T, I&rsquo;ve Got Bowel Cancer</em> &mdash; Parts One &amp;
            Two &mdash; is donated to Bowel Cancer UK, the UK&rsquo;s leading bowel
            cancer charity.
          </p>

          {/* Logo */}
          <div className="flex justify-center mt-10">
            <div className="bg-white rounded-xl p-5 shadow">
              <img
                src={bowelCancerLogo}
                alt="Bowel Cancer UK"
                className="h-24 sm:h-28 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Bowel Cancer UK + Luke Squires quote */}
      <section id="about" className="px-6 py-12 bg-[#12343b] scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl mb-10 text-center">
            About Bowel Cancer UK
          </h2>

          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            {/* About */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col">
              <p className="text-neutral-100 leading-relaxed mb-4 text-lg">
                We&rsquo;re the UK&rsquo;s leading bowel cancer charity. We&rsquo;re
                determined to save lives and improve the quality of life of
                everyone affected by bowel cancer.
              </p>
              <p className="text-amber-200 leading-relaxed font-medium text-lg">
                Our vision is a future where nobody dies of the disease.
              </p>
              <div className="mt-auto pt-6">
                <a
                  href={BOWEL_CANCER_UK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 transition-colors"
                >
                  Visit Bowel Cancer UK <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            {/* Luke Squires quote */}
            <article className="bg-white/10 rounded-2xl p-6 sm:p-8 shadow border border-white/10 flex flex-col">
              <div
                className="font-serif text-5xl text-amber-300 leading-none mb-2"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote className="italic text-neutral-100 leading-relaxed mb-6">
                We&rsquo;re very touched David has chosen to support Bowel Cancer
                UK through this compassionate book. Every effort to share
                personal experiences and raise awareness makes a real difference
                to people affected by bowel cancer. The money raised from this
                special book will help us to continue funding our vital services
                and lifesaving research.
              </blockquote>
              <footer className="mt-auto pt-4 border-t border-white/10">
                <p className="font-semibold text-white mt-3">Luke Squires</p>
                <p className="text-sm text-neutral-300">
                  Director of Fundraising, Bowel Cancer UK
                </p>
              </footer>
            </article>
          </div>
        </div>
      </section>

      {/* Isle of Wight — completed */}
      <section id="fundraiser" className="px-6 py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-400/10 to-amber-500/5 p-8 sm:p-12">
            <div className="text-center mb-6">
              <p className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-300 bg-amber-400/15 border border-amber-300/40 rounded-full px-3 py-1 mb-4">
                Done · Dusted · Done it
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl mb-3 text-white">
                Isle of Wight &mdash; 107 km, on foot, for Bowel Cancer UK
              </h2>
              <p className="text-neutral-200 max-w-2xl mx-auto leading-relaxed">
                Six months before diagnosis, I ran 50 km through the Sussex
                hills, carrying a tumour I didn&rsquo;t know was there. After
                surgery, after chemotherapy, after the fog finally lifted &mdash; I
                came back to give something back.
              </p>
            </div>

            {/* Big stat */}
            <div className="my-10 text-center">
              <div className="text-xs uppercase tracking-widest text-amber-300 mb-2 font-semibold">
                Raised so far for Bowel Cancer UK
              </div>
              <div className="font-serif text-6xl sm:text-7xl font-bold text-amber-400 leading-none">
                £3,500
                <span className="text-3xl sm:text-4xl text-amber-300/80">+</span>
              </div>
              <div className="text-neutral-300 mt-3">
                and the JustGiving page is still open &mdash; every pound counts.
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={JUSTGIVING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-[#0e2a2f] shadow-sm hover:bg-amber-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e2a2f]"
              >
                Donate via JustGiving
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The books */}
      <section id="books" className="px-6 py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl mb-3 text-center">
            A percentage of every copy goes to Bowel Cancer UK
          </h2>
          <p className="text-neutral-300 text-center max-w-2xl mx-auto mb-12">
            Two books. Two halves of the same story. Both supporting the work of
            Bowel Cancer UK with every copy sold.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Part One */}
            <article className="bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col">
              <div className="flex justify-center mb-5">
                <picture>
                  <source srcSet={coverWebp} type="image/webp" />
                  <img
                    src={coverImg}
                    alt="OH SH!T, I've Got Bowel Cancer — Part One book cover"
                    className="max-h-80 object-contain rounded-lg shadow-lg"
                  />
                </picture>
              </div>
              <p className="inline-block self-center text-xs font-semibold tracking-widest uppercase text-amber-300 bg-amber-300/10 border border-amber-300/30 rounded-full px-3 py-1 mb-3">
                Part One
              </p>
              <h3 className="font-serif text-xl text-center mb-2">
                Diagnosis &amp; Treatment Diaries
              </h3>
              <p className="text-neutral-300 text-sm text-center mb-5 leading-relaxed">
                The first half of the story &mdash; diagnosis, surgery, and finding
                a way through.
              </p>
              <a
                href={BUY_LINK_PART1}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex justify-center items-center rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-semibold text-[#0e2a2f] hover:bg-amber-300 transition-colors"
              >
                Buy Part One
              </a>
            </article>

            {/* Part Two */}
            <article className="bg-white/5 rounded-2xl border border-amber-400/30 p-6 flex flex-col">
              <div className="flex justify-center mb-5">
                <picture>
                  <source srcSet={cover2Webp} type="image/webp" />
                  <img
                    src={cover2Img}
                    alt="OH SH!T, I've Got Bowel Cancer — Part Two: In the Fog of Chemotherapy book cover"
                    className="max-h-80 object-contain rounded-lg shadow-lg"
                  />
                </picture>
              </div>
              <p className="inline-flex items-center gap-2 self-center text-xs font-semibold tracking-widest uppercase text-[#0e2a2f] bg-amber-300 rounded-full px-3 py-1 mb-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0e2a2f]" />
                Part Two · New
              </p>
              <h3 className="font-serif text-xl text-center mb-2">
                In the Fog of Chemotherapy
              </h3>
              <p className="text-neutral-300 text-sm text-center mb-5 leading-relaxed">
                Chemotherapy. The fog. The fizzy hands. The bit nobody talks
                about.
              </p>
              <a
                href={BUY_LINK_PART2}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex justify-center items-center rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-semibold text-[#0e2a2f] hover:bg-amber-300 transition-colors"
              >
                Buy Part Two
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* 1 in 17 / advocacy */}
      <section id="awareness" className="px-6 py-16 bg-[#0a2228] scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <div className="text-center">
              <div className="font-serif text-5xl sm:text-6xl font-bold text-amber-400 mb-3">
                1 in 17
              </div>
              <p className="text-lg text-white font-semibold">
                men will be diagnosed with bowel cancer.
              </p>
              <p className="text-neutral-300 mt-3 leading-relaxed">
                It&rsquo;s the second-biggest cancer killer in the UK. It&rsquo;s
                also one of the most survivable &mdash; if caught early.
              </p>
            </div>

            <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-amber-300 text-sm uppercase tracking-wider mb-2">
                  If you&rsquo;re 50&ndash;74
                </h3>
                <p className="text-neutral-200 leading-relaxed">
                  The NHS sends a free home test kit through the post every two
                  years. It takes five minutes. It has no dignity to protect.
                  Please &mdash; do it.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-amber-300 text-sm uppercase tracking-wider mb-2">
                  If you&rsquo;re under 50
                </h3>
                <p className="text-neutral-200 leading-relaxed">
                  Symptoms can be subtle. Bleeding, change in habit, persistent
                  pain &mdash; if anything feels off, see your GP. Don&rsquo;t
                  wait. I was as fit as I&rsquo;d ever been, and I had no idea.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href={SCREENING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 transition-colors text-sm"
              >
                Learn about screening at Bowel Cancer UK{" "}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl mb-4">Want to help?</h2>
          <p className="text-neutral-300 mb-8 leading-relaxed">
            Three ways, all of them welcome. Buy a copy. Donate to the
            JustGiving page. Or share this page with someone who needs to read
            it.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={JUSTGIVING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-semibold text-[#0e2a2f] hover:bg-amber-300 transition-colors"
            >
              Donate via JustGiving
            </a>
            <a
              href={BUY_LINK_PART2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Buy Part Two
            </a>
            <a
              href={BOWEL_CANCER_UK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Visit Bowel Cancer UK
            </a>
          </div>
          <p className="text-neutral-500 text-xs mt-6">
            Bowel Cancer UK is a registered charity (Charity No: 1071038).
          </p>
        </div>
      </section>
    </main>
  );
}
