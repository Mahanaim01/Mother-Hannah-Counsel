/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
// @ts-ignore
import hannahPortrait from "../assets/images/hannah_portrait_1779753789251.png";

export default function About() {
  const [imageError, setImageError] = useState(false);
  const specialties = [
    { name: "Anxiety & Stress", desc: "Finding calming anchors in storm-filled moments." },
    { name: "Grief & Loss Support", desc: "Honoring memory while gently charting forward paths." },
    { name: "Relationship Healing", desc: "Repairing broken cords with compassionate truth." },
    { name: "Spiritual Integration", desc: "Gently bridging mental balance with soulful grace." },
  ];

  return (
    <section id="about" className="py-20 bg-[#FDFBF7] border-b border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Geometric Framed Illustration & Backdrops */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-sm"
            >
              {/* Overlapping background offset panels (signature Geometric design) */}
              <div className="absolute -inset-3 bg-[#F5F2ED] border border-beige-200 rounded-sm -rotate-1 z-0" />
              <div className="absolute -inset-1 bg-[#E8EBDF] border border-beige-200 rounded-sm rotate-1 z-0" />

              <div className="relative z-10 bg-white p-6 rounded-sm border border-beige-200 text-center shadow-sm">
                
                {/* Portrait Frame - Sharp Geometric Shape matching services and testimonials */}
                <div className="mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-sm overflow-hidden bg-gradient-to-b from-[#F2EFE8] to-[#E5DEC9] border border-beige-200 relative flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={hannahPortrait}
                      alt="Mother Hannah"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover text-beige-800"
                    >
                      {/* Background halo */}
                      <circle cx="50" cy="50" r="45" fill="url(#haloGrad)" />
                      {/* Simplified Elegant portrait of a maternal figure */}
                      <path d="M50 32C41 32 37 38 37 45C37 54 41 58 50 58C59 58 63 54 63 45C63 38 59 32 50 32Z" fill="#F4DCC4" />
                      {/* Hair */}
                      <path d="M50 26C36 26 34 35 34 44C36 41 39 39 42 39C46 39 47 42 50 42C53 42 54 39 58 39C61 39 64 41 66 44C66 35 64 26 50 26Z" fill="#D2C8BA" />
                      <circle cx="50" cy="22" r="8" fill="#D2C8BA" />
                      <path d="M41 29C44 28 47 29 48 31" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M59 29C56 28 53 29 52 31" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Elegant dress */}
                      <path d="M26 82C26 69 34 62 50 62C66 62 74 69 74 82V90H26V82Z" fill="#7C9070" />
                      <path d="M50 62V72M44 63L50 72L56 63" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
                      {/* Soft closed eyes and smile */}
                      <path d="M44 46C45 47 46 47 47 46" stroke="#5C5043" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M53 46C54 47 55 47 56 46" stroke="#5C5043" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M47 52C49 54 51 54 53 52" stroke="#5C5043" strokeWidth="1.5" strokeLinecap="round" />

                      <defs>
                        <linearGradient id="haloGrad" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F9F5EC" />
                          <stop offset="0.72" stopColor="#E5E1D8" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#DCD8CE" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>

                <div className="mt-5">
                  <h3 className="font-serif text-lg font-bold text-beige-900 leading-snug">
                    Mother Hannah, LMFT, SD
                  </h3>
                  <p className="font-sans text-[10px] text-sage-500 font-bold uppercase tracking-wider mt-1.5 leading-normal">
                    Licensed Marriage &amp; Family Therapist <br />
                    &amp; Ordained Spiritual Guide
                  </p>
                </div>

                {/* Trust Badges - Geometric Lines */}
                <div className="mt-5 pt-4 border-t border-beige-200 flex items-center justify-around text-beige-800">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-gold-500">15+</span>
                    <span className="text-[9px] font-bold tracking-wider uppercase text-beige-800">Years Care</span>
                  </div>
                  <div className="border-l border-beige-200 h-6" />
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-sage-500">✓</span>
                    <span className="text-[9px] font-bold tracking-wider uppercase text-beige-800">Licensed</span>
                  </div>
                  <div className="border-l border-beige-200 h-6" />
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-sage-500">EMDR</span>
                    <span className="text-[9px] font-bold tracking-wider uppercase text-beige-800">Trained</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* About Biography Details */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] block">
                The Healing Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-beige-900 tracking-tight leading-tight">
                "We don't just heal from our heads; <br /> we heal from our hearts."
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 font-sans text-beige-800 text-sm leading-relaxed font-light"
            >
              <p>
                I am <strong className="text-beige-900 font-bold">Mother Hannah</strong>, a clinical guide and spiritual caregiver. My life's call is to provide a quiet, safe harbor for those carrying heavy burdens. Over the past fifteen years, I have walked alongside individuals and families facing their darkest seasons — counseling them through grief, calming intense anxiety, and reconstructing paths toward deep self-worth and love.
              </p>
              <p>
                My approach is warm, dynamic, and integrated. By combining robust clinical psychological evidence (including EMDR and trauma-informed cognitive therapy) with a soft spiritual awareness, I nurture your complete self: mind, heart, and spirit. 
              </p>
            </motion.div>

            {/* Specialties Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pt-6 border-t border-beige-200"
            >
              <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-beige-900 mb-4 flex items-center gap-2">
                <span className="text-sage-500">◈</span>
                Specialties of Professional Care
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specialties.map((item, idx) => (
                  <div key={idx} className="flex gap-3 bg-white p-4 rounded-sm border border-beige-200">
                    <div className="text-sage-500 font-bold shrink-0 text-sm mt-0.5 select-none">◈</div>
                    <div>
                      <h5 className="font-sans text-xs font-bold text-beige-900 uppercase tracking-widest leading-none">
                        {item.name}
                      </h5>
                      <p className="font-sans text-[11px] text-beige-800 leading-relaxed mt-2 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
