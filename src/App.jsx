// src/App.jsx
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Press from "./Press.jsx";

function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(true);   // show/hide on scroll
  const [mounted, setMounted] = useState(false);  // for initial fade-in
  const lastY = useRef(0);

  // read saved state
  useEffect(() => {
    const wasDismissed = localStorage.getItem("bannerDismissed") === "true";
    setDismissed(wasDismissed);
    setMounted(true);
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current + 8;
      const goingUp   = y < lastY.current - 8;
      if (!dismissed) {
        if (goingDown && y > 40) setVisible(false);
        if (goingUp) setVisible(true);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const close = () => {
    setVisible(false);
    setDismissed(true);
    localStorage.setItem("bannerDismissed", "true");
  };

  if (dismissed) return null;

  // on-brand styling: dark teal background, white text, subtle amber border
  return (
    <div
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        mounted && visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative mx-3 sm:mx-4 rounded-b-xl border border-amber-300/40 bg-[#0e2a2f] text-white shadow-md">
          <div className="px-4 py-2.5 text-center text-sm md:text-base">
            <span className="font-semibold">Paperback formats are available for</span>{" "}
            <em>OH SH!T – I’ve Got Bowel Cancer</em>{" "}
            <span className="font-semibold">on request.</span>
            <br className="hidden sm:block" />
            Please contact us:
            <a href="mailto:team@itgovernancepublishing.co.uk" className="underline ml-1 hover:opacity-80">
              team@itgovernancepublishing.co.uk
            </a>
            <span className="mx-2">|</span>
            <a href="tel:+443336669000" className="underline hover:opacity-80">
              +44 (0)333 666 9000
            </a>
          </div>

          {/* Close (big tap target) */}
          <button
            onClick={close}
            aria-label="Dismiss announcement"
            className="absolute right-2 top-2 inline-flex items-center justify-center
                       h-9 w-9 rounded-md border border-white/15 bg-white/5
                       hover:bg-white/10 focus:outline-none focus-visible:ring-2
                       focus-visible:ring-amber-400"
          >
            <span className="text-lg leading-none">×</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  // Spacer to keep content below the fixed banner when it’s visible
  // We toggle it with a small effect that watches localStorage.
  const [needsSpacer, setNeedsSpacer] = useState(
    localStorage.getItem("bannerDismissed") !== "true"
  );

  useEffect(() => {
    const onStorage = () => {
      setNeedsSpacer(localStorage.getItem("bannerDismissed") !== "true");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e2a2f] text-white font-sans">
      <Router>
        <AnnouncementBanner />
        {/* Spacer height matches banner height (~56px). It collapses once banner is dismissed. */}
        <div className={`transition-[height] duration-300 ${needsSpacer ? "h-14" : "h-0"}`} />

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/press" element={<Press />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>

        <footer className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-300 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} David Barrow. All rights reserved.</p>
            <p>Built with honesty, humour, and hope.</p>
          </div>
        </footer>
      </Router>
    </div>
  );
}