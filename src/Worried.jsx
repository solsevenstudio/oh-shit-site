// src/Worried.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Worried() {
  return (
    <main className="min-h-screen bg-[#0e2a2f] text-white font-sans py-16 px-6">
      <article className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <p className="text-sm text-neutral-400 mb-6">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-amber-400">Worried?</span>
        </p>

        <h1 className="text-4xl font-serif mb-2">
          Worried it might be bowel cancer?
        </h1>
        <p className="text-amber-400 font-medium mb-10 text-lg">
          Here's where to start
        </p>

        <div className="space-y-6 text-neutral-200 leading-relaxed text-lg">
          <p>
            If you've ended up here in a panic, this page is for you.
          </p>
          <p>
            I know what that panic feels like. I sat with stomach pain for months,
            convinced myself it was IBS, cancelled a GP appointment because I felt a bit
            better, and only went back when the pain returned and I couldn't ignore it
            any longer. By then, I already had a tumour the colonoscopy camera couldn't
            get past.
          </p>
          <p className="font-semibold text-white">Please don't do what I did.</p>

          {/* Steps */}
          <div className="space-y-8 mt-4">

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 text-[#0e2a2f] font-bold flex items-center justify-center text-lg">
                1
              </div>
              <div>
                <h2 className="text-xl font-serif text-white mb-2">Call your GP today — and don't cancel</h2>
                <p className="text-neutral-300">
                  Book the appointment. Go to the appointment. Tell your GP everything,
                  including the embarrassing bits — changes in bowel habits, blood,
                  bloating, a nagging pain in your left side that keeps coming back. All
                  of it.
                </p>
                <p className="text-neutral-300 mt-3">
                  And if you've already booked an appointment and you're feeling a bit
                  better — <strong className="text-white">don't cancel it</strong>. I did
                  that. Don't.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 text-[#0e2a2f] font-bold flex items-center justify-center text-lg">
                2
              </div>
              <div>
                <h2 className="text-xl font-serif text-white mb-2">Ask for a FIT test</h2>
                <p className="text-neutral-300">
                  If your GP is investigating bowel symptoms, they may offer you a FIT
                  (Faecal Immunochemical Test) — a simple stool sample test that checks
                  for blood. A score of 0–5 is normal. Mine came back at over 200. It
                  was the result that changed everything.
                </p>
                <p className="text-neutral-300 mt-3">
                  If you're offered one, take it. If you're not offered one and you
                  think you should be, ask.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 text-[#0e2a2f] font-bold flex items-center justify-center text-lg">
                3
              </div>
              <div>
                <h2 className="text-xl font-serif text-white mb-2">Know your rights on referral</h2>
                <p className="text-neutral-300">
                  If your GP refers you with a suspected cancer referral, you should be
                  seen by a specialist within two weeks. This is called the two-week
                  wait pathway. You can ask your GP whether they've referred you through
                  this route.
                </p>
                <p className="text-neutral-300 mt-3">
                  I cancelled speaking events in Manchester and Helsinki to make sure I
                  was home and available when the call came. It was the right call.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 text-[#0e2a2f] font-bold flex items-center justify-center text-lg">
                4
              </div>
              <div>
                <h2 className="text-xl font-serif text-white mb-2">Call the MDT nurses</h2>
                <p className="text-neutral-300">
                  If you've been referred and you're waiting to hear about your results,
                  the multi-disciplinary team (MDT) nurses at your hospital can be a
                  lifeline. They often have real-time insight into your case. I called
                  them myself, and it was one of the most empowering things I did during
                  a period when I felt completely out of control.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 text-[#0e2a2f] font-bold flex items-center justify-center text-lg">
                5
              </div>
              <div>
                <h2 className="text-xl font-serif text-white mb-2">Go here, not Google</h2>
                <p className="text-neutral-300">
                  I made the mistake of googling survival statistics in the early hours.
                  It does not help. Please trust me on this.
                </p>
                <p className="text-neutral-300 mt-3">Go here instead:</p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href="https://www.bowelcanceruk.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 underline hover:opacity-80 font-medium"
                    >
                      Bowel Cancer UK
                    </a>{" "}
                    — forums, information, and people who have been where you are right now
                  </li>
                  <li>
                    <a
                      href="https://www.macmillan.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 underline hover:opacity-80 font-medium"
                    >
                      Macmillan Cancer Support
                    </a>{" "}
                    — emotional support, financial advice, and local centres staffed by people who know what they're talking about
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 text-[#0e2a2f] font-bold flex items-center justify-center text-lg">
                6
              </div>
              <div>
                <h2 className="text-xl font-serif text-white mb-2">Take someone with you</h2>
                <p className="text-neutral-300">
                  To every appointment. Every single one. You will not retain
                  everything — I know I didn't — and the person next to you will catch
                  what you miss. My wife Emma came to every appointment and saved me
                  more than once.
                </p>
              </div>
            </div>

          </div>

          {/* Closing note */}
          <div className="bg-white/5 border border-amber-400/30 rounded-xl p-6 mt-8">
            <p className="text-neutral-300">
              You don't have to have this figured out. You just have to take the next step.
            </p>
            <p className="text-neutral-300 mt-3">
              Mine was calling the doctor. That led to a FIT test. That led to a
              colonoscopy. That led to a diagnosis, a surgery date, and — eventually —
              a plan. I was terrified of every one of those steps. I took them anyway.
            </p>
            <p className="text-amber-400 font-medium mt-3">You can too. — Dar</p>
          </div>
        </div>

        {/* Internal nav */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/symptoms"
            className="block rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 p-5"
          >
            <div className="text-xs text-neutral-400 mb-1 uppercase tracking-wide">Read Dar's story</div>
            <div className="font-semibold text-white">← The symptoms I noticed</div>
          </Link>
          <Link
            to="/what-they-dont-tell-you"
            className="block rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 p-5"
          >
            <div className="text-xs text-neutral-400 mb-1 uppercase tracking-wide">Also worth reading</div>
            <div className="font-semibold text-white">← What they don't tell you</div>
          </Link>
        </div>

      </article>
    </main>
  );
}
