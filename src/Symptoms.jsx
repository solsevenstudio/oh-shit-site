// src/Symptoms.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Symptoms() {
  return (
    <main className="min-h-screen bg-[#0e2a2f] text-white font-sans py-16 px-6">
      <article className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <p className="text-sm text-neutral-400 mb-6">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-amber-400">Symptoms</span>
        </p>

        <h1 className="text-4xl font-serif mb-2">
          The signs I ignored — and the one I couldn't
        </h1>
        <p className="text-amber-400 font-medium mb-10 text-lg">
          Bowel cancer symptoms, in my words, not a checklist
        </p>

        <div className="space-y-6 text-neutral-200 leading-relaxed text-lg">
          <p>
            I didn't think I had cancer.
          </p>
          <p>
            I want to say that clearly, because if you're reading this mid-Google-spiral
            at midnight, you need to know: neither did I. I was 47, training for an
            ultramarathon, eating well, cutting out booze. I was supposed to be fit.
            Healthy. Fine.
          </p>
          <p>
            The stomach pain started in September 2024. We were on holiday in Menorca
            and — after years of not eating red meat — I suddenly craved a steak. I found
            the best steak restaurant I knew, sat down with my wife Emma, and had exactly
            what I wanted.
          </p>
          <p>
            Within hours, I had a pain in my left side and a feeling of 'fullness' that
            didn't leave for a very long time. That was where it began.
          </p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">What I told myself it was</h2>
          <p>
            When we got home, I adjusted my diet. Dropped the alcohol. Cut caffeine.
            Went back to a red-meat-free diet, drank more water, added more fruit and
            veg. I thought I was getting better — so I cancelled the GP appointment I'd
            booked.
          </p>
          <p>
            That's the bit I really want you to sit with.{" "}
            <strong className="text-white">I cancelled the appointment because I'd convinced myself I was fine.</strong>
          </p>
          <p>
            The pain came back during a trip to Glasgow in October. Playing with my
            nephew — nothing intense — but noticeable. Then a Quorn-based meal left me
            in terrible pain that night. I told myself it was IBS. Maybe IBD. Possibly
            an ulcer. Something ordinary. Something fixable.
          </p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">The moment the GP changed everything</h2>
          <p>
            By early November, the pain and discomfort had returned and weren't going
            away. I finally went back to the doctor.
          </p>
          <p>
            She was lovely. She asked me about my symptoms, then examined my stomach.
            As she pressed on my left side, she asked:{" "}
            <em>"Does that hurt?"</em>
          </p>
          <p>
            My initial response was no — but when she released the pressure, something
            shifted. And the look on her face shifted too.
          </p>
          <p>
            In hindsight, that was the moment someone first thought I might have cancer.
            I just didn't know it yet.
          </p>
          <p>
            She told me she needed to do some tests. Stool samples.{" "}
            <em>"While I don't believe you have cancer, we need to check."</em>
          </p>
          <p>That was the first time anyone said the C-word to me.</p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">The FIT test</h2>
          <p>
            The results came back by text message the following Thursday. I was already
            having a bad day.
          </p>
          <blockquote className="border-l-4 border-amber-400 pl-4 italic text-neutral-300 my-4">
            "We need to speak to you urgently about a possible cancer diagnosis."
          </blockquote>
          <p>I nearly fell off my chair.</p>
          <p>
            I'd taken a FIT test — a Faecal Immunochemical Test — which measures blood
            in your stools. I'd never noticed any blood, not once. The acceptable score
            is 0 to 5. I scored over 200.
          </p>
          <p>
            For the first time, the thought that it could actually be cancer landed
            properly. And I started to worry.
          </p>

          <div className="bg-white/5 border border-amber-400/30 rounded-xl p-6 mt-8">
            <p className="text-white font-medium mb-2">A note, from me to you</p>
            <p className="text-neutral-300">
              If any of this sounds familiar — the bloating, the fullness, the pain in
              your left side, the nagging feeling that something isn't right — please go
              to your GP. Don't do what I did and cancel the appointment because you're
              feeling a bit better. Go. The NHS has a full list of{" "}
              <a
                href="https://www.nhs.uk/conditions/bowel-cancer/symptoms/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 underline hover:opacity-80"
              >
                bowel cancer symptoms
              </a>
              . Mine didn't arrive as a neat checklist. They crept up slowly, and I
              found a reason to explain away almost every single one.
            </p>
          </div>
        </div>

        {/* Internal nav */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/diagnosis"
            className="block rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 p-5"
          >
            <div className="text-xs text-neutral-400 mb-1 uppercase tracking-wide">Next</div>
            <div className="font-semibold text-white">What happens at diagnosis →</div>
          </Link>
          <Link
            to="/worried"
            className="block rounded-xl border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400/20 p-5"
          >
            <div className="text-xs text-amber-400 mb-1 uppercase tracking-wide">Worried right now?</div>
            <div className="font-semibold text-white">Here's where to start →</div>
          </Link>
        </div>

      </article>
    </main>
  );
}
