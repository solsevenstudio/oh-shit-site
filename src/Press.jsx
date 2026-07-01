// src/Press.jsx
import React from "react";
import PageMeta from "./PageMeta.jsx";

export default function Press() {
  return (
    <main className="bg-[#0e2a2f] text-white">
      <PageMeta
        title="Press & Media | OH SH!T, I've Got Bowel Cancer"
        description="Press coverage, media enquiries and speaking opportunities for David Barrow, author of OH SH!T, I've Got Bowel Cancer."
      />
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl mb-8">Press &amp; Media</h1>
          <p className="text-neutral-300 mb-10">
            Media assets, short bios, and pull quotes for reviews and coverage.
          </p>

          {/* --- Assets ----------------------------------------------------- */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Part One cover */}
            <article className="bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col">
              <h2 className="font-semibold mb-3">Part One — Book Cover (hi-res)</h2>
              <img
                src="/assets/Cover.webp"
                alt="OH SH!T, I’ve Got Bowel Cancer — Part One book cover"
                className="w-full rounded-lg border border-white/10"
                loading="lazy"
              />
              <a
                href="/assets/Cover.webp"
                download
                className="mt-4 inline-flex items-center rounded-xl bg-amber-400 text-[#0e2a2f] px-4 py-2 font-semibold hover:bg-amber-300 self-start"
              >
                ⬇ Download Part One Cover
              </a>
            </article>

            {/* Part Two cover */}
            <article className="bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col">
              <h2 className="font-semibold mb-3">Part Two — Book Cover (hi-res)</h2>
              <picture>
                <source srcSet="/assets/Cover-Part2.webp" type="image/webp" />
                <img
                  src="/assets/Cover-Part2.jpg"
                  alt="OH SH!T, I’ve Got Bowel Cancer — Part Two: In the Fog of Chemotherapy book cover"
                  className="w-full rounded-lg border border-white/10"
                  loading="lazy"
                />
              </picture>
              <a
                href="/assets/Cover-Part2.jpg"
                download
                className="mt-4 inline-flex items-center rounded-xl bg-amber-400 text-[#0e2a2f] px-4 py-2 font-semibold hover:bg-amber-300 self-start"
              >
                ⬇ Download Part Two Cover
              </a>
            </article>

            {/* Author photo */}
            <article className="bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col">
              <h2 className="font-semibold mb-3">Author Photo</h2>
              <img
                src="/assets/Dar.jpg"
                alt="David Barrow"
                className="w-full rounded-lg border border-white/10"
                loading="lazy"
              />
              <a
                href="/assets/Dar.jpg"
                download
                className="mt-4 inline-flex items-center rounded-xl bg-amber-400 text-[#0e2a2f] px-4 py-2 font-semibold hover:bg-amber-300 self-start"
              >
                ⬇ Download Author Photo
              </a>
            </article>
          </div>

          {/* --- Podcasts & Clips ------------------------------------------ */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl sm:text-3xl mb-6">Podcasts &amp; Clips</h2>

            {/* Graft Podcast — latest episode (chapter two: chemotherapy) */}
            <div className="mb-10 bg-white/5 rounded-2xl border border-white/10 p-6">
              <div className="mb-1 text-xs uppercase tracking-wider text-amber-400 font-semibold">The Graft Podcast — Latest</div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-3">
                "What Nobody Tells You About Life After Cancer Surgery"
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-5">
                Dar returns to Graft for chapter two: chemotherapy. The conversation covers the side
                effects nobody warns you about, from frozen eyes and fizzy hands to the complete collapse
                of taste, the worst mental health day of his life arriving on an ordinary dog walk, the
                NHS helpline he ignored until he needed it, and what recovery actually feels like at 80%
                physically and 60% mentally. Plus the 107km Isle of Wight challenge for Bowel Cancer UK,
                and book two out now.
              </p>
              <div className="rounded-xl overflow-hidden border border-white/10 mb-4">
                <iframe
                  src="https://open.spotify.com/embed/episode/39mCD1Kz3u1fkTFNenfIDB?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Graft Podcast: What Nobody Tells You About Life After Cancer Surgery"
                />
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="https://open.spotify.com/episode/39mCD1Kz3u1fkTFNenfIDB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[#1DB954] text-white font-semibold hover:opacity-90"
                >
                  🎵 Listen on Spotify
                </a>
                <a
                  href="https://podcasts.apple.com/gb/podcast/the-graft-podcast/id1811506979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[#9333EA] text-white font-semibold hover:opacity-90"
                >
                  🎙 Listen on Apple Podcasts
                </a>
              </div>
            </div>

            {/* Graft Podcast — earlier episode (diagnosis) */}
            <div className="mb-10 bg-white/5 rounded-2xl border border-white/10 p-6">
              <div className="mb-1 text-xs uppercase tracking-wider text-neutral-400 font-semibold">The Graft Podcast — Earlier</div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-3">
                "The Fittest I'd Ever Been — Then I Got Bowel Cancer | GRAFT According to Dar Barrow"
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-5">
                Hosted by Ben Glimmerveen, this episode covers how Dar was training for ultramarathons
                when he was diagnosed with stage 3B bowel cancer — and why being fit is no substitute
                for listening to your body. The conversation covers diagnosis, surgery, chemotherapy,
                and finding purpose through writing.
              </p>
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
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="https://open.spotify.com/episode/41TVhA2SSDgeCwCLGiJwfE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[#1DB954] text-white font-semibold hover:opacity-90"
                >
                  🎵 Listen on Spotify
                </a>
                <a
                  href="https://podcasts.apple.com/ie/podcast/the-fittest-id-ever-been-then-i-got-bowel-cancer/id1811506979?i=1000732918438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[#9333EA] text-white font-semibold hover:opacity-90"
                >
                  🎙 Listen on Apple Podcasts
                </a>
              </div>
            </div>

            {/* Short clips — smaller, 2-up on mobile, 3-up on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <article className="bg-white/5 rounded-xl border border-white/10 p-3">
                <h3 className="font-semibold text-sm mb-2 leading-snug">
                  He couldn’t leave the hospital until he’d done this
                </h3>
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

              <article className="bg-white/5 rounded-xl border border-white/10 p-3">
                <h3 className="font-semibold text-sm mb-2 leading-snug">
                  1 in 17 men will be diagnosed with this
                </h3>
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

              <article className="bg-white/5 rounded-xl border border-white/10 p-3">
                <h3 className="font-semibold text-sm mb-2 leading-snug">
                  “I can’t do this anymore” — the front door breakdown
                </h3>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/assets/clips/clip3.jpg"
                  className="w-full rounded-lg"
                >
                  <source src="/assets/clips/clip3.mp4" type="video/mp4" />
                  Sorry, your browser doesn’t support embedded video.
                </video>
              </article>
            </div>
          </div>
          {/* --------------------------------------------------------------- */}
        </div>{/* end .max-w-6xl */}
      </section>
    </main>
  );
}