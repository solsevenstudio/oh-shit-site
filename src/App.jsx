// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Press from "./Press";

export default function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const closeBanner = () => {
    // trigger fade-out, then remove from DOM
    setIsFading(true);
    setTimeout(() => setShowBanner(false), 220); // match CSS duration
  };

  return (
    <div className="min-h-screen bg-[#0e2a2f] text-white font-sans">
      <Router>
        {/* Fixed Announcement Banner (site-wide) */}
        {showBanner && (
          <div className="fixed inset-x-0 top-0 z-50">
            <div
              className={
                "relative mx-auto max-w-6xl bg-[#12343b] text-white text-center py-3 px-4 " +
                "shadow-sm border-b border-white/10 text-sm md:text-base " +
                "transition-opacity duration-200 " +
                (isFading ? "opacity-0" : "opacity-100")
              }
            >
              <p>
                Paperback formats are available for <em>OH SH!T – I’ve Got Bowel Cancer</em> on
                request.
                <br className="hidden sm:block" />
                Please contact us:
                <a
                  href="mailto:team@itgovernancepublishing.co.uk"
                  className="underline ml-1 hover:opacity-80"
                >
                  team@itgovernancepublishing.co.uk
                </a>
                <span className="mx-2">|</span>
                <a href="tel:+443336669000" className="underline hover:opacity-80">
                  +44 (0)333 666 9000
                </a>
              </p>

              {/* Close Button — mobile friendly */}
              <button
                onClick={closeBanner}
                className="absolute right-3 top-3 w-8 h-8 flex items-center justify-center
                           rounded-full bg-white/10 hover:bg-white/20 focus:outline-none
                           focus:ring-2 focus:ring-white/50"
                aria-label="Close banner"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Spacer so content sits below the fixed banner */}
        {showBanner && <div className="h-14" />}

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/press" element={<Press />} />
        </Routes>
      </Router>
    </div>
  );
}