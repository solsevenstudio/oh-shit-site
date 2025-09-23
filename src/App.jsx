import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Press from "./Press.jsx";   // keep if you have a Press page

const BUY_LINK = "mailto:david@solsevenstudio.com?subject=OH%20SH!T%20Book%20Order";

export default function App() {
  const [open, setOpen] = useState(false);

  const NavItems = ({ onClick }) => (
    <>
      <NavLink to="/about" onClick={onClick} className="hover:text-amber-300 flex items-center gap-1 py-2">
        About the Author
      </NavLink>
      <NavLink to="/press" onClick={onClick} className="hover:text-amber-300 flex items-center gap-1 py-2">
        Press
      </NavLink>
      <a
        href="mailto:david@solsevenstudio.com?subject=Media%20Enquiry"
        onClick={onClick}
        className="hover:text-amber-300 flex items-center gap-2 py-2"
      >
        <FaEnvelope size={18} />
        <span>Media Enquiries</span>
      </a>
      <a
        href="https://www.linkedin.com/in/davidbarrowsolsevenstudio/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="hover:text-amber-300 flex items-center gap-2 py-2"
      >
        <FaLinkedin size={18} />
        <span>LinkedIn</span>
      </a>
      <a
        href={BUY_LINK}
        onClick={onClick}
        className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-amber-400 text-[#0e2a2f] font-semibold hover:bg-amber-300 shadow-sm"
      >
        <FaShoppingCart size={18} />
        <span>Buy the book</span>
      </a>
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-[#0e2a2f] text-white font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#0e2a2f]/75 backdrop-blur supports-[backdrop-filter]:bg-[#0e2a2f]/60 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/" className="font-serif text-lg sm:text-xl tracking-tight hover:text-amber-300 transition">
              OH SH!T, I’ve Got Bowel Cancer
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <NavItems />
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile menu drawer */}
          {open && (
            <div className="md:hidden border-t border-white/10">
              <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
                <NavItems onClick={() => setOpen(false)} />
              </div>
            </div>
          )}
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/press" element={<Press />} />
        </Routes>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-300 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} David Barrow. All rights reserved.</p>
            <p>Built with honesty, humour, and hope.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}