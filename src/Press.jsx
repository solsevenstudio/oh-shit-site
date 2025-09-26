import React from "react";
import { FaDownload, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaFileArchive } from "react-icons/fa";

const coverHiRes = "/assets/Cover.jpg";          // use your highest-res cover here
const authorHeadshot = "/assets/david.jpg";      // optional (drop a headshot into public/assets/david.jpg)

export default function Press() {
  return (
    <main className="min-h-screen bg-[#0e2a2f] text-white font-sans py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-serif mb-2">Press & Media</h1>
          <p className="text-neutral-300">
            Media assets, short bios, and pull quotes for reviews and coverage.
          </p>
        </header>

        {/* Downloads */}
        <section className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white/10 rounded-2xl p-6">
            <h2 className="font-semibold mb-3">Book Cover (hi-res)</h2>
            <img src={coverHiRes} alt="Book cover" className="rounded-xl mb-4 shadow" />
            <a
              href={coverHiRes}
              download
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-amber-400 text-[#0e2a2f] font-semibold hover:bg-amber-300"
            >
              <FaDownload size={18} />
              Download JPG
            </a>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h2 className="font-semibold mb-3">Author Photo</h2>
            <div className="aspect-square bg-white/5 rounded-xl grid place-items-center mb-4 overflow-hidden">
              {authorHeadshot ? (
                <img src={authorHeadshot} alt="David Barrow" className="w-full h-full object-cover" />
              ) : (
                <p className="text-neutral-400 text-sm px-4 text-center">
                  Drop a headshot at <code>/public/assets/david.jpg</code> to show it here.
                </p>
              )}
            </div>
            <a
              href={authorHeadshot}
              download
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-amber-400 text-[#0e2a2f] font-semibold hover:bg-amber-300"
            >
              <FaDownload size={18} />
              Download JPG
            </a>
          </div>
        </section>

        {/* Bios */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl mb-4">Bios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Short (35–50 words)</h3>
              <p className="text-neutral-200">
                David Barrow is a consultant, writer, and cancer survivor. His book, <em>OH SH!T, I’ve Got Bowel Cancer</em>,
                is a raw diary of diagnosis, surgery, football, and recovery. A percentage of profits supports Bowel Cancer UK.
              </p>
            </article>
            <article className="bg-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Medium (90–120 words)</h3>
              <p className="text-neutral-200">
                With 30+ years in Service Management, David Barrow brings humanity and humour to tough topics. His book,
                <em> OH SH!T, I’ve Got Bowel Cancer</em>, began as a diary through diagnosis, running-as-rebellion,
                surgery, ward walks, and the small wins that make survival possible. It’s not medical advice—it’s a human record.
                Profits support Bowel Cancer UK.
              </p>
            </article>
          </div>
        </section>

        {/* Pull quotes */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl mb-4">Pull Quotes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white/10 rounded-2xl p-6 text-neutral-200 italic leading-relaxed">
              “This isn’t just a record of symptoms and treatments. It’s about humanity… If it feels like this for you,
              you’re not failing — you’re human.” — <span className="not-italic font-semibold">Katrina Macdermid</span>
            </blockquote>
            <blockquote className="bg-white/10 rounded-2xl p-6 text-neutral-200 italic leading-relaxed">
              “This book isn’t polished PR. It’s about honesty. The messy business of carrying on… and the small wins
              that make survival possible.” — <span className="not-italic font-semibold">Kevin Donaghy</span>
            </blockquote>
          </div>
          <p className="text-neutral-400 text-sm mt-3">
            Please attribute quotes to the speakers above and reference the book title on first use.
          </p>
        </section>

{/* One-click press kit */}
<section className="mb-14">
  <h2 className="font-serif text-2xl mb-4">Press Kit (ZIP)</h2>
  <p className="text-neutral-300 mb-4">
    Download everything in one go: cover (hi-res), author headshot, and a 1-page press note.
  </p>
  <a
  href="/assets/_presskit/presskit.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-xl px-6 py-3 bg-amber-400 text-[#0e2a2f] font-bold hover:bg-amber-300"
>
  Download Press Kit
</a>
</section>

        {/* Contact */}
        <section className="text-center">
          <a
            href="mailto:david@solsevenstudio.com?subject=Media%20Enquiry"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-amber-400 text-[#0e2a2f] font-bold hover:bg-amber-300"
          >
            <FaEnvelope size={18} />
            Media Enquiries
          </a>
          <a
            href="https://www.linkedin.com/in/davidbarrowsolsevenstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 ml-3 border border-white/20 rounded-xl hover:bg-white/5"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
          <p className="text-neutral-400 text-sm mt-4">
            For review copies or interviews, email David directly.
          </p>
        </section>
      </div>
    </main>
  );
}