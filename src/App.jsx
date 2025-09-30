// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Press from "./Press";

export default function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollFadeActive, setScrollFadeActive] = useState(false);

  // Activate scroll fade after short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollFadeActive(true);
    }, 2500); // 2.5 second delay
    return () => clearTimeout(timer);
  }, []);

  // Fade out on scroll (only after delay)
  useEffect(() => {
    if (!scrollFadeActive) return;

    const handleScroll = () => {
      if (window.scrollY > 50 && showBanner) {
        setIsVisible(false);
        setTimeout(() => setShowBanner(false), 300); // match fade duration
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollFadeActive, showBanner]);

  return (
    <div className="min-h-screen bg-[#0e2a2f] text-white font-sans">
      <Router>
        {/* Fixed Announcement Banner (on-brand) */}
        {showBanner && (
          <div
            className={`fixed inset-x-0 top-0 z-50 transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="mx-auto max-w-6xl bg-[#0e2a2f] text-white text-center py-2.5 px-4 shadow-sm border-b border-white/20 flex items-center justify-center relative">
              <span className="text-sm md:text-base font-medium">
                Paperback formats are available for <em>OH SH!T – I’ve Got Bowel Cancer</em> on request.{" "}
                Please contact us:{" "}
                <a
                  href="mailto:team@itgovernancepublishing.co.uk"
                  className="underline hover:opacity-80"
                >
                  team@itgovernancepublishing.co.uk
                </a>{" "}
                |{" "}
                <a href="tel:+443336669000" className="underline hover:opacity-80">
                  +44 (0)333 666 9000
                </a>
              </span>
              {/* Close button */}
              <button
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => setShowBanner(false), 300);
                }}
                aria-label="Close banner"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-2xl leading-none hover:text-amber-300 focus:outline-none"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Spacer so content sits below banner */}
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