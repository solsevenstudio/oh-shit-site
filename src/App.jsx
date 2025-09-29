import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Press from "./Press";

export default function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-[#0e2a2f] text-white font-sans">
      <Router>
        {/* Site-wide Paperback Banner */}
        {showBanner && (
          <div className="fixed inset-x-0 top-0 z-50">
            <div className="relative mx-auto max-w-6xl bg-[#0e2a2f] border border-amber-400 text-white text-center py-3 px-4 rounded-b-xl text-sm md:text-base shadow">
              Paperback formats are available for <em>OH SH!T – I’ve Got Bowel Cancer</em> on request.
              <br className="hidden sm:block" />
              Please contact us:
              <a
                href="mailto:team@itgovernancepublishing.co.uk"
                className="underline ml-1 hover:opacity-80"
              >
                team@itgovernancepublishing.co.uk
              </a>
              <span className="mx-2">|</span>
              <a
                href="tel:+443336669000"
                className="underline hover:opacity-80"
              >
                +44 (0)333 666 9000
              </a>

              {/* Close (X) Button */}
              <button
                onClick={() => setShowBanner(false)}
                className="absolute right-3 top-2 text-white/70 hover:text-white text-lg font-bold"
                aria-label="Close banner"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Spacer so content sits below the banner */}
        {showBanner && <div className="h-16" />}

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