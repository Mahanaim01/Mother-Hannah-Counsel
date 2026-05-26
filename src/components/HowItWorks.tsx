/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BookOpen, Calendar, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a Service",
      description: "Review our gentle therapy paths and select the support stream that aligns with your current inner state.",
      icon: <BookOpen className="h-5 w-5 text-sage-500" />,
    },
    {
      number: "02",
      title: "Pick Date & Time",
      description: "Use our interactive automated booking calendar below to specify your preferred consultation slots.",
      icon: <Calendar className="h-5 w-5 text-sage-500" />,
    },
    {
      number: "03",
      title: "Receive Confirmation",
      description: "Submit your details. Mother Hannah will personally review and send a secure calendar invite to align with you.",
      icon: <CheckCircle className="h-5 w-5 text-[#7C9070]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#FDFBF7] relative overflow-hidden border-b border-beige-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] block">
            A Clean, Uncomplicated Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-beige-900 tracking-tight leading-tight">
            How It Works
          </h2>
          <p className="font-sans text-xs sm:text-sm text-beige-800 font-light leading-relaxed max-w-lg mx-auto">
            Your energy shouldn't be spent navigating complex administrative systems. We've simplified the entire scheduling pattern to keep you focused on healing.
          </p>
        </div>

        {/* Steps Cards Grid */}
        <div className="relative mt-8">
          {/* Connector Line (visible on desktop) - Precise solid line */}
          <div className="hidden lg:block absolute top-[43px] left-[15%] right-[15%] h-[1px] bg-beige-200 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white p-6 sm:p-8 rounded-sm border border-beige-200 text-center flex flex-col items-center space-y-5 shadow-sm"
              >
                {/* Icon Circle */}
                <div className="relative">
                  <div className="h-14 w-14 rounded-full bg-[#F9F7F2] border border-beige-200 flex items-center justify-center">
                    {step.icon}
                  </div>
                  {/* Number Badge */}
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-white font-serif text-[9px] font-bold h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    {step.number}
                  </span>
                </div>

                {/* Text info */}
                <div className="space-y-2">
                  <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-beige-900">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-beige-800 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
