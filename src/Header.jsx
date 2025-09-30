// src/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const BUY_LINK  = "https://www.itgovernance.co.uk/shop/product/oh-sht-ive-got-bowel-cancer-part-one-diagnosis-and-treatment-diaries";
const EMAIL     = "mailto:david@solsevenstudio.com";
const LINKEDIN  = "https://www.linkedin.com/in/davidbarrowsolsevenstudio/";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // --- Banner state ---
  const [bannerVisible, setBannerVisible] = useState(false); // visual state (opacity/slide)
  const [bannerDismissed, setBannerDismissed] = useState(false); // true = never show again
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);
  const reappearTimerRef = useRef(null);

  // On mount, read dismissal
  useEffect(() => {
    const dismissed = localStorage.getItem("bannerDismissed") === "1";
    setBannerDismissed(dismissed);
    setBannerVisible(!dismissed); // show on first load if not dismissed
    lastYRef.current = window.scrollY || 0;
  }, []);

  // Scroll logic: hide on down, (delayed) show on up — unless dismissed
  useEffect(() => {
    if (bannerDismissed) return; // never reattach if dismissed

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const dy = y - lastYRef.current;

        // small deadzone
        const threshold = 6;

        if (dy > threshold) {
          // scrolling down -> hide fast
          if (reappearTimerRef.current) {
            clearTimeout(reappearTimerRef.current);
            reappearTimerRef.current = null;
          }
          setBannerVisible(false);
        } else if (dy < -threshold) {
          // scrolling up -> re-show after a short delay
          if (!bannerDismissed) {
            if (reappearTimerRef.current) clearTimeout(reappearTimerRef.current);
            reappearTimerRef.current = setTimeout(() => {
              setBannerVisible(true);
              reappearTimerRef.current = null;
            }, 250); // <- delay before reappearing
          }
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (reappearTimerRef.current) clearTimeout(reappearTimerRef.current);
    };
  }, [bannerDismissed]);

  const dismissBanner = () => {
    setBannerDismissed(true);
    setBannerVisible(false);
    localStorage.setItem("bannerDismissed", "1");
    // also clear any pending reappears
    if (reappearTimerRef.current) {
      clearTimeout(reappearTimerRef.current);
      reappearTimerRef.current = null;
    }
  };

  const link = "hover:text-amber-400";

  return (
    <>
      {/* Fixed Announcement Banner (site-wide). Spacer stays below to prevent layout jump. */}
      <div
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
          bannerVisible && !bannerDismissed
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none",
        ].join(" ")}
        aria-hidden={bannerVisible && !bannerDismissed ? "false" : "true"}
      >
        <div className="mx-auto max-w-6xl">
          <div className="relative mx-3 mt-2 rounded-b-xl border border-amber-200/70 bg-amber-100 text-[#0e2a2f] shadow-sm">
            {/* Content */}
            <div className="px-4 py-2.5 text-center text-sm md:text-base leading-snug">
              <strong>Paperback formats</strong> are available for <em>OH SH!T – I’ve Got Bowel Cancer</em> on request.
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

            {/* Close (touch-friendly, accessible) */}
            <button
              onClick={dismissBanner}
              aria-label="Dismiss announcement"
              className="absolute right-2.5 top-2.5 grid place-items-center rounded-full bg-[#0e2a2f]/10 hover:bg-[#0e2a2f]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              style={{ width: 36, height: 36 }}
            >
              <span className="sr-only">Close</span>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Spacer (kept always so content doesn’t jump when banner hides) */}
      <div className="h-14" />

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
    </>
  );
}