// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaShoppingCart, FaBars, FaTimes, FaXmark } from "react-icons/fa6";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Press from "./Press.jsx"; // if you don't have this yet, comment the import + its Route

const BUY_LINK = "mailto:david@solsevenstudio.com?subject=OH%20SH!T%20Book%20Order";
const EMAIL = "mailto:david@solsevenstudio.com";
const LINKEDIN = "https://www.linkedin.com/in/davidbarrowsolsevenstudio/";

/* ----------------------------- Header (nav) ----------------------------- */
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const link = "hover:text-amber-400";

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#0e2a2f]/90 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="font-serif text-lg md:text-xl">
          OH SH!T, I’ve Got Bowel Cancer
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={link}>Home</NavLink>
          <NavLink to="/about" className={link}>About the Author</NavLink>
          <NavLink to="/press" className={link}>Press</NavLink>
          <a href={EMAIL} className="flex items-center gap-1 hover:text-amber-400">
            <FaEnvelope /> Media Enquiries
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-amber-400">
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={BUY_LINK}
            className="rounded-xl px-4 py-2 bg-amber-400 text-[#0e2a2f] font-semibold flex items-center gap-2 hover:bg-amber-300"
          >
            <FaShoppingCart /> Buy the Book
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0e2a2f] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About the Author</NavLink>
          <NavLink to="/press" onClick={() => setIsOpen(false)}>Press</NavLink>
          <a href={EMAIL} className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <FaEnvelope /> Media Enquiries
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={BUY_LINK}
            className="rounded-xl px-4 py-2 bg-amber-400 text-[#0e2a2f] font-semibold flex items-center gap-2 hover:bg-amber-300"
            onClick={() => setIsOpen(false)}
          >
            <FaShoppingCart /> Buy the Book
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------------------- Dismissible Site-wide Banner --------------------- */
function SiteBanner() {
  const STORAGE_KEY = "bannerDismissed_v1";
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed === "true") setVisible(false);
  }, []);

  const close = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl relative">
        <div className="bg-amber-100 text-[#0e2a2f] text-center py-2.5 px-12 shadow-sm border border-amber-200/70 rounded-b-xl text-sm md:text-base">
          Paperback formats are available for all <em>OH SH!T – I’ve Got Bowel Cancer</em> on request.
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

        {/* X button */}
        <button
          onClick={close}
          aria-label="Dismiss announcement"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-amber-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          title="Dismiss"
        >
          <FaXmark />
        </button>
      </div>
    </div>
  );
}

/* --------------------------------- App ---------------------------------- */
export default function App() {
  // If the banner is visible, we need a spacer so content sits below it.
  // We can’t easily read SiteBanner’s visibility here, so we always include a small spacer;
  // the header’s sticky position means the layout still feels right.
  return (
    <div className="min-h-screen bg-[#0e2a2f] text-white font-sans">
      <Router>
        <SiteBanner />
        {/* Spacer so content sits below the fixed banner */}
        <div className="h-14" />

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Comment out the next line if you don't have Press.jsx yet */}
          <Route path="/press" element={<Press />} />
          {/* 404 fallback */}
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