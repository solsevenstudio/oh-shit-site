// src/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaShoppingCart, FaBars, FaTimes, FaAmazon, FaChevronDown } from "react-icons/fa";

const BUY_LINK_PART1 = "https://www.itgovernance.co.uk/shop/product/oh-sht-ive-got-bowel-cancer-part-one-diagnosis-and-treatment-diaries";
const BUY_LINK_PART2 = "https://uk.grcsolutions.io/product/oh-sht-ive-got-bowel-cancer-part-two-in-the-fog-of-chemotherapy";
const AMAZON_LINK    = "https://www.amazon.co.uk/dp/1787785777";
const EMAIL          = "mailto:david@solsevenstudio.com";
const LINKEDIN       = "https://www.linkedin.com/in/davidbarrowsolsevenstudio/";

const JOURNEY_LINKS = [
  { to: "/symptoms",               label: "Symptoms",              sub: "The signs I ignored" },
  { to: "/diagnosis",              label: "Diagnosis",             sub: "What the process looks like" },
  { to: "/what-they-dont-tell-you",label: "What They Don't Tell You", sub: "The stuff I had to figure out" },
  { to: "/worried",                label: "Worried?",              sub: "Here's where to start" },
];

function LivedExperienceDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1 hover:text-amber-400 focus:outline-none"
      >
        My Lived Experience <FaChevronDown className={`text-xs transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 mt-2 min-w-[260px] rounded-lg border border-white/15 bg-[#0e2a2f] shadow-xl z-50 overflow-hidden"
        >
          {JOURNEY_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-white hover:bg-white/10 border-b border-white/10 last:border-0"
            >
              <div className="font-semibold">{item.label}</div>
              <div className="text-xs text-neutral-400">{item.sub}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function BuyDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="rounded-lg px-3 py-1.5 bg-amber-400 text-[#0e2a2f] font-semibold text-sm flex items-center gap-2 hover:bg-amber-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
      >
        <FaShoppingCart /> Buy the Book
        <FaChevronDown className={`text-xs transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 min-w-[240px] rounded-lg border border-white/15 bg-[#0e2a2f] shadow-xl z-50 overflow-hidden"
        >
          <a
            href={BUY_LINK_PART1}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className="block px-4 py-3 text-sm text-white hover:bg-white/10 border-b border-white/10"
            onClick={() => setOpen(false)}
          >
            <div className="font-semibold">Buy Part One</div>
            <div className="text-xs text-neutral-400">Diagnosis &amp; Treatment Diaries</div>
          </a>
          <a
            href={BUY_LINK_PART2}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className="block px-4 py-3 text-sm text-white hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            <div className="font-semibold flex items-center gap-2">
              Buy Part Two
              <span className="text-[10px] uppercase tracking-wider bg-amber-400 text-[#0e2a2f] rounded-full px-2 py-0.5">New</span>
            </div>
            <div className="text-xs text-neutral-400">In the Fog of Chemotherapy</div>
          </a>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const link = "hover:text-amber-400 whitespace-nowrap";

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#0e2a2f]/90 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Nav */}
        <NavLink to="/" className="font-serif text-lg md:text-xl">
          Home
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">
          <NavLink to="/about" className={link}>About the Author</NavLink>
          <NavLink to="/press" className={link}>Press</NavLink>
          <NavLink to="/bowel-cancer-uk" className={link}>Bowel Cancer UK</NavLink>
          <LivedExperienceDropdown />
          <a
            href={EMAIL}
            aria-label="Media Enquiries"
            className="flex items-center gap-1 hover:text-amber-400 whitespace-nowrap"
          >
            <FaEnvelope /> <span className="hidden xl:inline">Media Enquiries</span>
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-1 hover:text-amber-400 whitespace-nowrap"
          >
            <FaLinkedin /> <span className="hidden xl:inline">LinkedIn</span>
          </a>
          {/* Buy dropdown (Part 1 / Part 2) */}
          <BuyDropdown />
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-1.5 bg-[#FF9900] text-white font-semibold text-sm flex items-center gap-2 hover:bg-[#e68a00] whitespace-nowrap"
          >
            <FaAmazon /> <span className="lg:hidden">Amazon</span><span className="hidden lg:inline">Available via Amazon</span>
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

      {/* On-brand site title under nav */}
      <div className="max-w-6xl mx-auto px-4 pb-3 text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-wide">
          <span className="text-white">OH SH!T, </span>
          <span className="text-amber-400">I’ve Got Bowel Cancer</span>
        </h1>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0e2a2f] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About the Author</NavLink>
          <NavLink to="/press" onClick={() => setIsOpen(false)}>Press</NavLink>
          <NavLink to="/bowel-cancer-uk" onClick={() => setIsOpen(false)}>Bowel Cancer UK</NavLink>
          <div className="border-t border-white/10 pt-3">
            <p className="text-xs text-neutral-400 uppercase tracking-wide mb-2">My Lived Experience</p>
            {JOURNEY_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="block py-1.5 hover:text-amber-400"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <a href={EMAIL} className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <FaEnvelope /> Media Enquiries
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={BUY_LINK_PART1}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-1.5 bg-amber-400 text-[#0e2a2f] font-semibold text-sm flex items-center gap-2 hover:bg-amber-300 whitespace-nowrap"
            onClick={() => setIsOpen(false)}
          >
            <FaShoppingCart /> Buy Part One
          </a>
          <a
            href={BUY_LINK_PART2}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-1.5 bg-amber-400 text-[#0e2a2f] font-semibold text-sm flex items-center gap-2 hover:bg-amber-300 whitespace-nowrap"
            onClick={() => setIsOpen(false)}
          >
            <FaShoppingCart /> Buy Part Two
            <span className="text-[10px] uppercase tracking-wider bg-[#0e2a2f] text-amber-300 rounded-full px-2 py-0.5 border border-amber-300/40">New</span>
          </a>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-1.5 bg-[#FF9900] text-white font-semibold text-sm flex items-center gap-2 hover:bg-[#e68a00] whitespace-nowrap"
            onClick={() => setIsOpen(false)}
          >
            <FaAmazon /> Available via Amazon
          </a>
        </div>
      )}
    </header>
  );
}
