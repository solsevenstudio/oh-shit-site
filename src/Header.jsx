// src/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaLinkedin,
  FaEnvelope,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// Links
const BUY_LINK =
  "https://www.itgovernance.co.uk/shop/product/oh-sht-ive-got-bowel-cancer-part-one-diagnosis-and-treatment-diaries";
const EMAIL = "mailto:david@solsevenstudio.com";
const LINKEDIN =
  "https://www.linkedin.com/in/davidbarrowsolsevenstudio/";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const lastYRef = useRef(0);
  const [scrollUpDistance, setScrollUpDistance] = useState(0);

  // Scroll handler for banner auto-hide/reveal
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;

      if (y > lastYRef.current) {
        // scrolling down
        setHideOnScroll(true);
        setScrollUpDistance(0);
      } else {
        // scrolling up
        setScrollUpDistance((prev) => prev + (lastYRef.current - y));
        if (scrollUpDistance > 50) {
          setHideOnScroll(false);
        }
      }

      lastYRef.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollUpDistance]);

  const link = "hover:text-amber-400";

  return (
    <header className="sticky top-0 z-40">
      {/* Announcement Banner */}
      {showBanner && (
        <div
          className={`fixed inset-x-0 top-0 z-50 transform transition-all duration-300 ${
            hideOnScroll ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <div className="relative mx-auto max-w-6xl bg-[#0e2a2f] text-white text-center py-3 px-4 shadow-sm border-b border-white/10 text-sm md:text-base">
            <p>
              Paperback formats are available for <em>OH SH!T – I’ve Got Bowel Cancer</em>{" "}
              on request.
              <br className="hidden sm:block" />
              Please contact us:{" "}
              <a
                href="mailto:team@itgovernancepublishing.co.uk"
                className="underline hover:opacity-80"
              >
                team@itgovernancepublishing.co.uk
              </a>
              <span className="mx-2">|</span>
              <a href="tel:+443336669000" className="underline hover:opacity-80">
                +44 (0)333 666 9000
              </a>
            </p>
            {/* Close (X) button */}
            <button
              onClick={() => setShowBanner(false)}
              aria-label="Close announcement"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xl md:text-2xl hover:text-amber-400 focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Spacer so content isn’t hidden under banner */}
      {showBanner && <div className="h-14" />}

      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between backdrop-blur bg-[#0e2a2f]/90 border-b border-white/10">
        <NavLink to="/" className="font-serif text-lg md:text-xl">
          OH SH!T, I’ve Got Bowel Cancer
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={link}>
            Home
          </NavLink>
          <NavLink to="/about" className={link}>
            About the Author
          </NavLink>
          <NavLink to="/press" className={link}>
            Press
          </NavLink>
          <a href={EMAIL} className="flex items-center gap-1 hover:text-amber-400">
            <FaEnvelope /> Media Enquiries
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-amber-400"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
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
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About the Author
          </NavLink>
          <NavLink to="/press" onClick={() => setIsOpen(false)}>
            Press
          </NavLink>
          <a
            href={EMAIL}
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaEnvelope /> Media Enquiries
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
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