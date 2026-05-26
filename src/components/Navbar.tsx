/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "About", target: "about" },
    { name: "Services", target: "services" },
    { name: "Process", target: "how-it-works" },
    { name: "Testimonials", target: "testimonials" },
    { name: "FAQ", target: "faq" },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-beige-200 py-3"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Geometric Circular Balance */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-sage-500 rounded-sm p-1"
          >
            <div className="h-9 h-9 w-9 w-9 bg-sage-500 rounded-full flex items-center justify-center text-white transition-colors duration-300">
              <span className="font-serif text-lg font-bold leading-none select-none">H</span>
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-beige-800 leading-none">
                Mother Hannah
              </span>
              <span className="block font-sans text-[10px] text-sage-500 tracking-[0.2em] uppercase mt-0.5 font-bold">
                Spiritual Guide
              </span>
            </div>
          </a>

          {/* Desktop Nav in Precise Uppercase Tracking Widest Geometry */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => handleLinkClick(e, link.target)}
                className="font-sans text-[11px] font-bold uppercase tracking-widest text-sage-500 hover:text-gold-500 transition-colors focus:outline-none focus:text-gold-500"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={(e) => handleLinkClick(e, "booking")}
              className="font-sans text-[11px] font-bold uppercase tracking-widest bg-gold-500 hover:bg-gold-600 text-white px-5 py-2.5 rounded-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold-500"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-sm text-beige-800 hover:text-sage-500 hover:bg-beige-100 focus:outline-none focus:ring-1 focus:ring-sage-500"
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-beige-200 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible max-h-(screen-80)" : "opacity-0 invisible max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleLinkClick(e, link.target)}
              className="block px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-sage-500 hover:text-gold-500 hover:bg-beige-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="#booking"
              onClick={(e) => handleLinkClick(e, "booking")}
              className="block text-center font-sans text-xs font-bold uppercase tracking-widest bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold-500"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
