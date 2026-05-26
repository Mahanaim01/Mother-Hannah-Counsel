/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { faqItems } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Open first item by default for better initial UX

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#FDFBF7] relative border-b border-beige-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] block">
            Got Questions? We Have Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-beige-900 tracking-tight leading-tight">
            Frequently Asked Queries
          </h2>
          <p className="font-sans text-xs sm:text-sm text-beige-800 font-light leading-relaxed max-w-lg mx-auto">
            Find immediate clarity regarding session logistics, pricing parameters, safety norms, and therapeutic alignment.
          </p>
        </div>

        {/* FAQs Accordion Block */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-white rounded-sm border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-sage-500" : "border-beige-200"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left font-serif text-sm sm:text-base font-bold text-beige-900 hover:text-sage-500 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="pr-4">{item.question}</span>
                  <div
                    className={`h-6 w-6 rounded-sm bg-[#F9F7F2] border border-beige-200 flex items-center justify-center text-beige-800 transition-transform duration-200 shrink-0 ${
                      isOpen ? "transform rotate-180 bg-sage-500 border-sage-500 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated Answer Wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 font-sans text-xs sm:text-sm text-beige-800 font-light leading-relaxed border-t border-beige-200 pt-3">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions? Custom call to action */}
        <div className="mt-12 text-center pt-8 border-t border-beige-200 flex flex-col sm:flex-row gap-4 items-center justify-between max-w-xl mx-auto">
          <div className="flex items-center gap-3 text-left">
            <div className="h-10 w-10 bg-[#F9F7F2] border border-beige-200 rounded-sm flex items-center justify-center text-sage-500 shrink-0">
              <MessageCircleQuestion className="h-4.5 w-4.5" />
            </div>
            <div>
              <h4 className="font-sans text-xs font-bold text-beige-900 uppercase tracking-wider">
                Still have unanswered curiosities?
              </h4>
              <p className="font-sans text-[11px] text-beige-800 font-light mt-0.5">
                Send a quick question over in the message section of the booking setup.
              </p>
            </div>
          </div>
          <a
            href="#booking"
            className="text-[10px] font-bold uppercase tracking-widest text-beige-800 hover:text-white bg-[#FDFBF7] hover:bg-sage-500 border border-beige-200 hover:border-sage-500 px-5 py-3 rounded-sm transition-all focus:outline-none"
          >
            Ask Mother Hannah
          </a>
        </div>

      </div>
    </section>
  );
}
