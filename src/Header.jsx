// src/Header.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaShoppingCart, FaBars, FaTimes, FaAmazon } from "react-icons/fa";

const BUY_LINK     = "https://www.itgovernance.co.uk/shop/product/oh-sht-ive-got-bowel-cancer-part-one-diagnosis-and-treatment-diaries";
const AMAZON_LINK  = "https://www.amazon.co.uk/dp/1787785777";
const EMAIL        = "mailto:david@solsevenstudio.com";
const LINKEDIN     = "https://www.linkedin.com/in/davidbarrowsolsevenstudio/";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const link = "hover:text-amber-400";

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#0e2a2f]/90 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Nav */}
        <NavLink to="/" className="font-serif text-lg md:text-xl">
          Home
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/about" className={link}>About the Author</NavLink>
          <NavLink to="/press" className={link}>Press</NavLink>
          <a href={EMAIL} className="flex items-center gap-1 hover:text-amber-400">
            <FaEnvelope /> Media Enquiries
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1 hover:text-amber-400">
            <FaLinkedin /> LinkedIn
          </a>
          {/* Buttons */}
          <a
            href={BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-1.5 bg-amber-400 text-[#0e2a2f] font-semibold text-sm flex items-center gap-2 hover:bg-amber-300 whitespace-nowrap"
          >
            <FaShoppingCart /> Buy the Book
          </a>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-1.5 bg-[#FF9900] text-white font-semibold text-sm flex items-center gap-2 hover:bg-[#e68a00] whitespace-nowrap"
          >
            <FaAmazon /> Available via Amazon
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
          <a href={EMAIL} className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <FaEnvelope /> Media Enquiries
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-1.5 bg-amber-400 text-[#0e2a2f] font-semibold text-sm flex items-center gap-2 hover:bg-amber-300 whitespace-nowrap"
            onClick={() => setIsOpen(false)}
          >
            <FaShoppingCart /> Buy the Book
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