/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, Users, Sparkles, LifeBuoy, Clock, DollarSign, ArrowRight } from "lucide-react";
import { services } from "../data";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  // Mapping service icons securely
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Heart":
        return <Heart className="h-5 w-5 stroke-[1.8]" />;
      case "Users":
        return <Users className="h-5 w-5 stroke-[1.8]" />;
      case "Sparkles":
        return <Sparkles className="h-5 w-5 stroke-[1.8]" />;
      case "LifeBuoy":
        return <LifeBuoy className="h-5 w-5 stroke-[1.8]" />;
      default:
        return <Heart className="h-5 w-5 stroke-[1.8]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#FDFBF7] relative border-b border-beige-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] block">
            Professional Counseling & Spiritual Solace
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-beige-900 tracking-tight leading-tight">
            Nurturing Pathways to Whole-Self Balance
          </h2>
          <p className="font-sans text-sm text-beige-800 font-light leading-relaxed max-w-2xl mx-auto">
            Choose a custom-tailored counseling option where clinical scientific wisdom integrates beautifully with deep heartfelt awareness and faith.
          </p>
        </div>

        {/* Services Grid with sharp Geometric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white rounded-sm p-6 lg:p-8 border border-beige-200 flex flex-col justify-between hover:border-sage-500 transition-all duration-300 relative"
            >
              {/* Geometric corner mark */}
              <div className="absolute top-0 right-0 h-8 w-8 bg-[#F9F7F2] border-b border-l border-beige-200 flex items-center justify-center text-[10px] text-sage-500 font-bold pointer-events-none select-none">
                ◈
              </div>
              
              <div className="space-y-5">
                {/* Icon wrapper - Sharp shape */}
                <div className="h-11 w-11 rounded-sm bg-[#F9F7F2] border border-beige-200 text-sage-500 flex items-center justify-center transition-colors duration-300 group-hover:bg-sage-500 group-hover:text-white group-hover:border-sage-500">
                  {getIcon(service.iconName)}
                </div>

                {/* Title & Desc */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-beige-900 group-hover:text-sage-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-beige-800 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Service Metadata & Booking Action */}
              <div className="mt-8 pt-6 border-t border-beige-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-1.5 text-xs text-beige-800 font-medium">
                    <Clock className="h-4 w-4 text-sage-500 shrink-0" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-beige-800 font-medium font-mono">
                    <DollarSign className="h-4 w-4 text-sage-500 shrink-0" />
                    <span>{service.investment}</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest bg-[#FDFBF7] text-beige-800 hover:text-white hover:bg-sage-500 px-5 py-3 rounded-sm border border-beige-200 hover:border-sage-500 transition-all duration-200 cursor-pointer focus:outline-none"
                >
                  Select &amp; Schedule
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Supportive Note banner - Sharp box */}
        <div className="mt-12 bg-white rounded-sm p-6 border border-beige-200 max-w-2xl mx-auto text-center shadow-sm">
          <p className="font-sans text-xs text-beige-800 leading-relaxed italic font-light">
            "Are you worried about session costs? I offer a dedicated sliding-scale index for people in financial distress or active transition. Please enquire respectfully during your booking selection."
          </p>
        </div>

      </div>
    </section>
  );
}
