/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Heart, Shield } from "lucide-react";

export default function Hero() {
  const handleCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("booking");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#FDFBF7] pt-24 overflow-hidden border-b border-beige-200"
    >
      {/* Structural Minimalist Grid Lines in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E1D8_1px,transparent_1px),linear-gradient(to_bottom,#E5E1D8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center border border-beige-200 bg-white p-6 sm:p-10 lg:p-14">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 self-center lg:self-start"
            >
              <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em]">
                Faith-Inspired Wellness
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-beige-900 tracking-tight leading-[1.15]"
            >
              Find Peace, Healing & <br className="hidden sm:inline" />
              <span className="text-sage-500 font-serif italic font-normal">Clarity</span> with Mother Hannah
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-sm sm:text-base text-beige-800 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Compassionate counseling for your mind, heart, and soul. Discover a professional, warm, faith-inspired sanctuary where your journey is honored, mended, and supported.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-2"
            >
              <button
                onClick={handleCTA}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-sage-500 text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-sage-600 active:bg-sage-900 transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-sage-500"
              >
                Book Your Appointment
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center text-xs font-bold uppercase tracking-widest text-sage-500 hover:text-gold-500 py-3 transition-colors focus:outline-none"
              >
                Learn Her Approach
              </a>
            </motion.div>

            {/* Micro Badges / Credibility Bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-beige-200 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2 text-beige-800">
                <span className="text-sage-500 font-bold">◈</span>
                <span className="text-xs font-medium uppercase tracking-wider">Safe & Confidential</span>
              </div>
              <div className="flex items-center gap-2 text-beige-800">
                <span className="text-sage-500 font-bold">◈</span>
                <span className="text-xs font-medium uppercase tracking-wider">Licensed Specialist</span>
              </div>
              <div className="flex items-center gap-2 text-beige-800 col-span-2 md:col-span-1">
                <span className="text-sage-500 font-bold">◈</span>
                <span className="text-xs font-medium uppercase tracking-wider">Faith-Inspired</span>
              </div>
            </motion.div>
          </div>

          {/* Aesthetic Counseling Room Visual Collage / Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#FDFBF7] p-4 border border-beige-200">
              {/* Outer Golden Ring Decorative Accent */}
              <div className="absolute inset-0 border border-beige-200 pointer-events-none" />
              
              {/* Main Decorative Container with Calming Colors & Shapes */}
              <div className="w-full h-full bg-[#F9F7F2] border border-beige-200 overflow-hidden flex items-center justify-center relative">
                {/* Clean, Artistic, Abstract Minimalist Landscape representing Mother Hannah's guidance */}
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full object-cover opacity-90"
                >
                  <rect width="200" height="200" fill="#FDFBF7" />
                  {/* Subtle grid lines inside */}
                  <line x1="100" y1="0" x2="100" y2="200" stroke="#E5E1D8" strokeWidth="1" />
                  <line x1="0" y1="100" x2="200" y2="100" stroke="#E5E1D8" strokeWidth="1" />
                  
                  {/* Calming Sun/Gold circle */}
                  <circle cx="100" cy="85" r="30" fill="#F5F2ED" stroke="#C5A059" strokeWidth="1" />
                  <circle cx="100" cy="85" r="22" fill="#EBDAB7" opacity="0.4" />
                  
                  {/* Serene rolling hills / overlapping waves in Earth Tones */}
                  <path d="M-10 160C30 148 70 175 110 152C150 128 190 155 210 145V210H-10V160Z" fill="#E2EADF" opacity="0.8" stroke="#7C9070" strokeWidth="1" />
                  <path d="M-10 180C40 168 80 190 120 172C160 150 180 182 210 168V210H-10V180Z" fill="#CBD5C6" />
                  <path d="M-10 200C50 188 90 202 130 192C170 182 180 198 210 188V210H-10V200Z" fill="#7C9070" opacity="0.9" />
                  
                  {/* Geometric bird marks */}
                  <path d="M45 60 L50 65 L55 60" stroke="#7C9070" strokeWidth="1.2" />
                  <path d="M145 42 L150 47 L155 42" stroke="#7C9070" strokeWidth="1.2" />
                </svg>
              </div>

              {/* Floating Testimonial Floating Card Pattern (Safe and secure) - Symmetrical Box */}
              <div className="absolute -bottom-4 right-2 sm:-right-6 bg-white shadow-md rounded-sm p-4 border border-beige-200 max-w-[210px]">
                <div className="flex items-center gap-1 text-gold-500 mb-2">
                  <span className="text-xs font-bold text-beige-800 mr-1">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[10px]">★</span>
                  ))}
                </div>
                <p className="font-sans text-[11px] text-beige-800 leading-relaxed italic">
                  "I finally found a sanctuary to process my anxiety without any judgment."
                </p>
                <div className="mt-2 font-sans text-[9px] font-bold uppercase tracking-wider text-sage-500 block text-right">
                  — Evelyn T.
                </div>
              </div>

              {/* Pure Love Heart Shield Badge - Geometric Circle inside Square */}
              <div className="absolute -top-3 -left-3 bg-[#FDFBF7] shadow-sm rounded-sm h-12 w-12 flex items-center justify-center border border-beige-200">
                <div className="h-8 w-8 bg-sage-500 rounded-full flex items-center justify-center text-white text-xs font-bold select-none">H</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
