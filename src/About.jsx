import React from "react";

const authorImg = "/assets/david.jpg"; 
export default function About() {
  return (
    <main className="min-h-screen bg-[#0e2a2f] text-white font-sans py-16 px-6">
      <article className="max-w-4xl mx-auto">
        {/* Avatar */}
        <img
          src={authorImg}
          alt="David Barrow"
          className="mx-auto w-40 h-40 rounded-full shadow-lg mb-6 object-cover"
        />

        {/* Title */}
        <h1 className="text-4xl font-serif text-center mb-4">About the Author</h1>

        {/* Intro */}
        <p className="text-lg text-neutral-300 leading-relaxed text-center mb-8">
          I’m David Barrow — ITIL Master, consultant, writer, runner, Liverpool fan,
          and now, cancer survivor. <em>OH SH!T, I’ve Got Bowel Cancer</em> began as
          a raw diary from diagnosis through surgery and recovery. I wrote it for
          anyone who needs honesty, humour, and hope when life gets loud.
        </p>

        {/* Body copy */}
        <div className="space-y-6 text-neutral-200 leading-relaxed">
          <p>
            I’ve spent more than 30 years in Service Management, helping teams
            deliver work that actually serves people. When bowel cancer arrived,
            all that “process” met something messier: fear, fatigue, and the
            relentless business of getting through a day. Writing helped me make
            sense of it — and keep moving.
          </p>
          <p>
            The book is not medical advice. It’s a human record: the diagnosis,
            the waiting rooms, the runs that said “f*** you, tumour”, the
            ward walks, the big fart (surgery people know), and the football that
            gave me 90 minutes of not thinking about cancer.
          </p>
          <p>
            A percentage of profits is donated to <strong>Bowel Cancer UK</strong>.
            If this book helps one person feel less alone, that’s a win worth
            publishing.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="mailto:david@solsevenstudio.com?subject=Media%20/%20Speaking%20enquiry"
            className="inline-block rounded-xl px-6 py-3 bg-amber-400 text-[#0e2a2f] font-bold hover:bg-amber-300"
          >
            Media / speaking enquiries
          </a>
          <p className="text-neutral-400 text-sm mt-3">
            Prefer Twitter/LinkedIn? Add links here later.
          </p>
        </div>
      </article>
    </main>
  );
}