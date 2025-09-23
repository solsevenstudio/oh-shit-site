// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Press from "./Press.jsx"; // if you don't have this file yet, comment this import + route

const EMAIL = "mailto:david@solsevenstudio.com";
const LINKEDIN = "https://www.linkedin.com/in/davidbarrowsolsevenstudio/";

function Header() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "inline-flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition";
  const navLink =
    ({ isActive }) =>
      `${linkBase} ${isActive ? "bg-white/10" : "bg-transparent"}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0e2a2f]/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl">
          OH SH!T, I’ve Got Bowel Cancer
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/about" className={navLink}>
            About the author
          </NavLink>
          <NavLink to="/press" className={navLink}>
            Media enquiries
          </NavLink>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={linkBase} aria-label="LinkedIn">
            <FaLinkedin />
            <span className="hidden lg:inline">LinkedIn</span>
          </a>
          <a href={EMAIL} className={linkBase} aria-label="Email">
            <FaEnvelope />
            <span className="hidden lg:inline">Email</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0e2a2f]/95">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            <NavLink to="/about" className={navLink} onClick={() => setOpen(false)}>
              About the author
            </NavLink>
            <NavLink to="/press" className={navLink} onClick={() => setOpen(false)}>
              Media enquiries
            </NavLink>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={linkBase} onClick={() => setOpen(false)}>
              <FaLinkedin /> LinkedIn
            </a>
            <a href={EMAIL} className={linkBase} onClick={() => setOpen(false)}>
              <FaEnvelope /> Email
            </a>
          </div>
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
          {/* Comment this route if you haven’t created Press.jsx yet */}
          <Route path="/press" element={<Press />} />
          {/* 404 fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}