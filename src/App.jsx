// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Press from "./Press.jsx"; // if you don't have this file yet, comment this import + its Route

const BUY_LINK = "https://www.itgovernance.co.uk/shop/product/oh-sht-ive-got-bowel-cancer-part-one-diagnosis-and-treatment-diaries";
const EMAIL = "mailto:david@solsevenstudio.com";
const LINKEDIN = "https://www.linkedin.com/in/davidbarrowsolsevenstudio/";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const link = "hover:text-amber-400";
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0e2a2f]/90 border-b border-white/10">
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e2a2f] text-white font-sans">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Comment out the next line if you don't have Press.jsx yet */}
          <Route path="/press" element={<Press />} />

          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <main className="bg-[#0e2a2f] text-white min-h-screen flex items-center justify-center text-center p-6">
                <div>
                  <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                    OH SH!T, that page doesn’t exist.
                  </h1>
                  <p className="mb-6 text-lg text-neutral-300">
                    But don’t worry — you can head back to the homepage instead.
                  </p>
                  <a
                    href="/"
                    className="inline-block rounded-xl px-6 py-3 bg-amber-400 text-[#0e2a2f] font-bold hover:bg-amber-300"
                  >
                    Go Home
                  </a>
                </div>
              </main>
            }
          />
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