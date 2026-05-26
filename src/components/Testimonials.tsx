/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, MessageSquareQuote } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#FDFBF7] relative overflow-hidden border-b border-beige-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] block">
            Voices of Restoration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-beige-900 tracking-tight leading-tight">
            Client Testimonials
          </h2>
          <p className="font-sans text-xs sm:text-sm text-beige-800 font-light leading-relaxed max-w-lg mx-auto">
            Read comments and personal reflections shared by individuals who have found clarity and hope through counseling sessions. (Names protected for therapeutic privacy)
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-sm p-6 sm:p-8 border border-beige-200 flex flex-col justify-between relative"
            >
              {/* Geometric corner design */}
              <div className="absolute top-0 right-0 h-6 w-6 bg-[#F9F7F2] border-b border-l border-beige-200 flex items-center justify-center text-[8px] text-sage-500 pointer-events-none select-none">
                ◈
              </div>

              <div className="space-y-4">
                {/* 5-Star rating indicator */}
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xs">★</span>
                  ))}
                </div>

                {/* Testimonial body text */}
                <blockquote className="font-sans text-xs sm:text-sm text-beige-800 font-light leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="mt-8 pt-4 border-t border-beige-200 flex flex-col">
                <cite className="font-serif text-sm font-bold text-beige-900 not-italic">
                  {testimonial.name}
                </cite>
                {testimonial.role && (
                  <span className="font-sans text-[10px] text-sage-500 uppercase tracking-widest font-bold mt-1">
                    {testimonial.role}
                  </span>
                )}
                <span className="font-sans text-[10px] text-beige-800 italic mt-1 font-light">
                  Verified — {testimonial.location}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Supporting notice about strict anonymity */}
        <div className="text-center mt-12">
          <p className="font-sans text-[10px] text-beige-850 flex items-center justify-center gap-1.5 max-w-md mx-auto">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage-500" />
            Every testimonial is shared with explicit permission. Details altered to protect confidentiality.
          </p>
        </div>

      </div>
    </section>
  );
}
