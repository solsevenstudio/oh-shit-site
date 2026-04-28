// src/WhatTheyDontTellYou.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function WhatTheyDontTellYou() {
  return (
    <main className="min-h-screen bg-[#0e2a2f] text-white font-sans py-16 px-6">
      <article className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <p className="text-sm text-neutral-400 mb-6">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-amber-400">What They Don't Tell You</span>
        </p>

        <h1 className="text-4xl font-serif mb-2">
          What they don't tell you
        </h1>
        <p className="text-amber-400 font-medium mb-10 text-lg">
          The stuff I had to figure out on my own
        </p>

        <div className="space-y-6 text-neutral-200 leading-relaxed text-lg">
          <p>
            The medical information is out there. The NHS has it. Macmillan has it.
            Bowel Cancer UK has it. This page isn't that.
          </p>
          <p>This is the stuff I had to figure out on my own.</p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">The colonoscopy prep is the worst part of the colonoscopy</h2>
          <p>
            Everyone talks about the procedure. Nobody talks about the 24+ hours
            beforehand where you can't eat, can't drink, and take something that strips
            your bowels completely bare. It's undignified. It's unpleasant. But it is
            survivable, and knowing it's coming is half the battle.
          </p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">The FIT test result can come by text message</h2>
          <p>
            Mine did. On a Thursday afternoon. Already a bad day. I was completely
            unprepared for the words{" "}
            <em>"We need to speak to you urgently about a possible cancer diagnosis"</em>{" "}
            on my phone screen. If you're waiting for FIT test results, ask your surgery
            how they'll contact you. I wish I had.
          </p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">"I'm sure it'll be an anxious day" will make it an anxious day</h2>
          <p>
            When I was heading into my first chemotherapy session, I was actually calm —
            genuinely relaxed. Then the messages arrived.{" "}
            <em>"I'm sure you're nervous."</em>{" "}
            <em>"Bet you're anxious!"</em>
          </p>
          <p>I immediately became anxious.</p>
          <p>
            The people who sent those messages are wonderful, and they meant every word
            kindly. But if you're supporting someone going through this, sometimes the
            most helpful thing is a simple <em>"thinking of you"</em> rather than naming
            the emotion you think they should be feeling.
          </p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">The waiting is a specific kind of hell — and it even has a name</h2>
          <p>
            Scanxiety. The anxiety that builds in the days and weeks between scans and
            results. I'd lie there alternating between optimism and terror, and then
            catch myself googling survival statistics at 2am.
          </p>
          <p>
            Do not do that.
          </p>
          <p>
            Go to Bowel Cancer UK's forums instead. Go to Macmillan. Talk to people
            who've been through it. I found this far more helpful than anything Google
            served up.
          </p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">You need to call the MDT nurses</h2>
          <p>
            The multi-disciplinary team (MDT) nurses often know more about your case
            status than anyone else. Someone in an online forum suggested I call them
            directly — so I did. They told me I might be on the agenda for the following
            morning's meeting and to call back the next day.
          </p>
          <p>
            That one phone call gave me back a sense of control that I hadn't felt in
            weeks. Call them.
          </p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">Take someone to every appointment</h2>
          <p>
            I thought I was listening. I wasn't — not fully. Emma caught something
            crucial that I completely missed: that the camera during the colonoscopy
            hadn't even been able to get past the tumour, giving us a sense of its size.
            I was in the room. I heard the surgeon say it. I didn't register it.
          </p>
          <p>Take someone. Let them listen when you can't.</p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">The financial hit is real, and no one prepares you for it</h2>
          <p>
            I'm self-employed. My surgery was in January. I had no idea how long my
            recovery would take, whether I'd need chemotherapy, or how we'd pay the
            bills. I eventually found help through a Macmillan local centre, who
            connected me with Citizens Advice — they helped me understand my options
            around income and insurance.
          </p>
          <p>
            If you're self-employed, please reach out to them early. Don't wait until
            you're panicking.
          </p>
          <p>
            <a
              href="https://www.bowelcanceruk.org.uk/how-we-can-help/family-friends-carers-support/money/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 underline hover:opacity-80"
            >
              Bowel Cancer UK's financial support page
            </a>{" "}
            is also worth bookmarking.
          </p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">And sometimes you just forget — and that's okay</h2>
          <p>
            About three weeks after my diagnosis, I spent a morning at Dorking Wanderers
            FC — I'm a partner of the club — doing a penalty shootout against the
            first-team goalkeeper. I won. And for two hours, I forgot I had cancer.
          </p>
          <p>
            It was the first time I'd genuinely laughed since finding out.
          </p>
          <p>Hold onto those moments. They matter more than almost anything.</p>
        </div>

        {/* Internal nav */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/diagnosis"
            className="block rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 p-5"
          >
            <div className="text-xs text-neutral-400 mb-1 uppercase tracking-wide">Previous</div>
            <div className="font-semibold text-white">← What happens at diagnosis</div>
          </Link>
          <Link
            to="/worried"
            className="block rounded-xl border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400/20 p-5"
          >
            <div className="text-xs text-amber-400 mb-1 uppercase tracking-wide">Next</div>
            <div className="font-semibold text-white">Worried right now? Here's what to do →</div>
          </Link>
        </div>

      </article>
    </main>
  );
}
