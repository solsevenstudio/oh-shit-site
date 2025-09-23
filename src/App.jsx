import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaShoppingCart } from "react-icons/fa";
import Home from "./Home.jsx";
import About from "./About.jsx";

const BUY_LINK =
  "mailto:david@solsevenstudio.com?subject=OH%20SH!T%20Book%20Order";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0e2a2f] text-white font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur bg-[#0e2a2f]/80 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo / Title */}
            <Link to="/" className="font-serif text-xl">
              OH SH!T, I’ve Got Bowel Cancer
            </Link>

            {/* Nav */}
            <nav className="flex items-center gap-6">
              <Link to="/about" className="hover:text-amber-300 flex items-center gap-1">
                About the Author
              </Link>

              <a
                href="mailto:david@solsevenstudio.com?subject=Media%20Enquiry"
                className="hover:text-amber-300 flex items-center gap-1"
              >
                <FaEnvelope size={18} />
                <span>Media Enquiries</span>
              </a>

              <a
                href="https://www.linkedin.com/in/davidbarrowsolsevenstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 flex items-center gap-1"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>

              {/* Divider space before Buy button */}
              <div className="pl-4">
                <a
                  href={BUY_LINK}
                  className="rounded-xl px-4 py-2 bg-amber-400 text-[#0e2a2f] font-semibold hover:bg-amber-300 flex items-center gap-2"
                >
                  <FaShoppingCart size={18} />
                  <span>Buy the book</span>
                </a>
              </div>
            </nav>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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