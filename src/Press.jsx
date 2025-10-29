// src/Press.jsx
import React from "react";

export default function Press() {
  return (
    <main className="bg-[#0e2a2f] text-white">
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl mb-8">Press &amp; Media</h1>
          <p className="text-neutral-300 mb-10">
            Media assets, short bios, and pull quotes for reviews and coverage.
          </p>

          {/* --- Assets ----------------------------------------------------- */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Book cover */}
            <article className="bg-white/5 rounded-xl border border-white/10 p-4">
              <h2 className="font-semibold mb-3">Book Cover (hi-res)</h2>
              <img
                src="/assets/Cover.webp"
                alt="Book cover"
                className="w-full rounded-lg border border-white/10"
                loading="lazy"
              />
              <a
                href="/assets/Cover.webp"
                download
                className="mt-4 inline-flex items-center rounded-xl bg-amber-400 text-[#0e2a2f] px-4 py-2 font-semibold hover:bg-amber-300"
              >
                ⬇ Download Book Cover
              </a>
            </article>

            {/* Author photo */}
            <article className="bg-white/5 rounded-xl border border-white/10 p-4">
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
                className="mt-4 inline-flex items-center rounded-xl bg-amber-400 text-[#0e2a2f] px-4 py-2 font-semibold hover:bg-amber-300"
              >
                ⬇ Download Author Photo
              </a>
            </article>
          </div>

          {/* --- Podcasts & Clips ------------------------------------------ */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl sm:text-3xl mb-6">Podcasts &amp; Clips</h2>

            {/* Spotify embed */}
            <div className="mb-10">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src="https://open.spotify.com/embed/episode/41TVhA2SSDgeCwCLGiJwfE?utm_source=generator"
                  width="100%"
                  height="232"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Podcast: OH SH!T episode"
                />
              </div>
              <div className="mt-2 text-sm">
                <a
                  href="https://open.spotify.com/episode/41TVhA2SSDgeCwCLGiJwfE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-amber-300 hover:text-amber-200"
                >
                  Open on Spotify
                </a>
              </div>
            </div>

            {/* Two short clips */}
            <div className="grid gap-6 sm:grid-cols-2">
              <article className="bg-white/5 rounded-xl border border-white/10 p-4">
                <h3 className="font-semibold mb-3">
                  He couldn’t leave the hospital until he’d done this
                </h3>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/assets/clips/farts.jpg"
                  className="w-full rounded-lg"
                >
                  <source src="/assets/clips/farts.m4v" type="video/mp4" />
                  Sorry, your browser doesn’t support embedded video.
                </video>
              </article>

              <article className="bg-white/5 rounded-xl border border-white/10 p-4">
                <h3 className="font-semibold mb-3">
                  1 in 17 men will be diagnosed with this
                </h3>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/assets/clips/1in17.jpg"
                  className="w-full rounded-lg"
                >
                  <source src="/assets/clips/1in17.m4v" type="video/mp4" />
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