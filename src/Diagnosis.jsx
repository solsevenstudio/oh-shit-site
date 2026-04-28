// src/Diagnosis.jsx
import React from "react";
import { Link } from "react-router-dom";
import PageMeta from "./PageMeta.jsx";

export default function Diagnosis() {
  return (
    <main className="min-h-screen bg-[#0e2a2f] text-white font-sans py-16 px-6">
      <PageMeta
        title="Bowel Cancer Diagnosis — What the Process Actually Looks Like | OH SH!T"
        description="From GP appointment to confirmed diagnosis — what I went through, what surprised me, and what I'd tell anyone starting that journey."
      />
      <article className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <p className="text-sm text-neutral-400 mb-6">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-amber-400">Diagnosis</span>
        </p>

        <h1 className="text-4xl font-serif mb-2">
          What actually happens when they think it might be cancer
        </h1>
        <p className="text-amber-400 font-medium mb-10 text-lg">
          From GP referral to confirmed bowel cancer diagnosis — my experience
        </p>

        <div className="space-y-6 text-neutral-200 leading-relaxed text-lg">
          <p>
            Nobody tells you how slow it feels, and how fast it happens at the same time.
          </p>
          <p>
            After my FIT score came back at over 200, I was placed on a two-week urgent
            referral for a colonoscopy. I had speaking events booked in Manchester and
            Helsinki that month — I cancelled both. I didn't want to be away from home
            when the appointment came in. I didn't want to drag this out any longer than
            necessary.
          </p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">The wait</h2>
          <p>
            Those two weeks were not easy. I alternated between despair, anger and
            numbness. Emma kept telling me to take it one day at a time, and she was
            right — but when I was alone, I found myself desperate to cry and unable to.
            I bought a PlayStation 5. I played Gran Turismo. I went for runs and had
            long, private conversations with myself on the treadmill.
          </p>
          <p>
            I told the tumour it wasn't going to win. I hadn't even confirmed it was
            there yet.
          </p>
          <p>The colonoscopy was booked for December 2024.</p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">The colonoscopy prep</h2>
          <p>
            Nobody warns you about the prep. I'm going to warn you.
          </p>
          <p>
            I couldn't eat or drink for over 24 hours. I took drinks that, I can only
            describe, completely emptied my bowels. And I mean{" "}
            <em>completely</em>. It was undignified. It was unpleasant. And I want you
            to know that, because knowing it's coming is half the battle.
          </p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">What I saw on the screen</h2>
          <p>
            The procedure itself wasn't too bad. I was sedated — though I didn't feel
            much of it — and genuinely only felt someone rummaging around inside me. It
            lasted 20 minutes.
          </p>
          <p>
            What wasn't fine was what appeared on the screen.
          </p>
          <p>
            A black mass with white fatty bits. I knew immediately it wasn't right. I'm
            no doctor, but that image — I'll never forget it. The camera couldn't even
            get past the tumour. That's how we knew how large it was.
          </p>
          <p>
            I said to the man performing the procedure:{" "}
            <em>"That doesn't look good."</em>
          </p>
          <p>He said: <em>"Let's talk about it afterwards."</em></p>
          <p>
            I felt some more instruments go in, and I knew they were taking biopsies.
            Then it was done. I was moved to another room, given biscuits and terrible
            apple juice, and spent a while convincing myself that it couldn't possibly
            be what I thought it was.
          </p>
          <p>I was wrong.</p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">Getting the result</h2>
          <p>
            They called Emma while I was still in recovery and asked her to come and
            collect me. She was fearing the worst before I'd even had time to process it.
          </p>
          <p>We sat down with the doctor. He told us he'd found a tumour that needed to be analysed.</p>
          <blockquote className="border-l-4 border-amber-400 pl-4 italic text-neutral-300 my-4">
            "Shit, I've got cancer?" I said.
          </blockquote>
          <p>
            He said it could be — but we needed the biopsy results to confirm. His one
            piece of practical advice: follow a low-fibre diet. That was the conversation.
          </p>
          <p>
            We drove home. Emma's parents were staying with us that weekend. We told
            them. Then I went upstairs, watched the Liverpool match — I already knew
            the score — and that night, quietly, I cried into my pillow.
          </p>

          <h2 className="text-2xl font-serif text-amber-400 pt-4">The confirmation</h2>
          <p>
            Eighteen days after the colonoscopy, I called the colorectal unit at East
            Surrey Hospital. The nurse explained everything clearly and kindly.
          </p>
          <p>
            I had cancer. I needed bowel surgery. It was described as a 'curative'
            procedure.
          </p>
          <p className="font-semibold text-white">My first feeling was relief.</p>
          <p>
            I know that sounds strange. But waiting to know is its own kind of torture.
            Having a plan — even a hard one — is better than not having a plan. Within
            hours, I had my MRI booked, my surgeon meeting booked, and my surgery
            booked.
          </p>
          <p>The surgery was scheduled for January 2025. Emma's birthday.</p>
          <p>I celebrated with chocolate.</p>

          <div className="bg-white/5 border border-amber-400/30 rounded-xl p-6 mt-8">
            <p className="text-white font-medium mb-2">One thing I'd tell anyone starting this journey</p>
            <p className="text-neutral-300">
              Take someone to every appointment. Every single one. You will not retain
              everything — I know I didn't — and the person next to you will catch what
              you miss. Emma picked up on the detail about the camera not getting past
              the tumour. I was in the room. I didn't register it.
            </p>
          </div>
        </div>

        {/* Internal nav */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/symptoms"
            className="block rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 p-5"
          >
            <div className="text-xs text-neutral-400 mb-1 uppercase tracking-wide">Previous</div>
            <div className="font-semibold text-white">← The symptoms I noticed</div>
          </Link>
          <Link
            to="/what-they-dont-tell-you"
            className="block rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 p-5"
          >
            <div className="text-xs text-neutral-400 mb-1 uppercase tracking-wide">Next</div>
            <div className="font-semibold text-white">What they don't tell you →</div>
          </Link>
        </div>

      </article>
    </main>
  );
}
