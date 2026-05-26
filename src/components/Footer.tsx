/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Heart, Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
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
    <footer className="bg-[#1F291B] text-beige-100 relative pt-16 pb-8 overflow-hidden border-t border-sage-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-sage-800 pb-12">
          
          {/* Logo, Mission, Blessings */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-sm bg-sage-850/60 border border-sage-700 flex items-center justify-center text-gold-500">
                <Heart className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold tracking-wide text-white leading-none">
                  Mother Hannah
                </span>
                <span className="block font-sans text-[10px] text-gold-500 tracking-[0.2em] uppercase mt-1">
                  Counseling &amp; Guidance
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-beige-200/80 font-light leading-relaxed max-w-sm">
              Providing modern clinical solutions integrated beautifully with deep spiritual grace. Our mission is to guide you back into alignment, safety, and inner stillness.
            </p>

            {/* Core Inspirational Quote */}
            <div className="pt-2 italic text-xs text-gold-500/90 font-light border-l border-gold-500/30 pl-3">
              "The Lord is near to the brokenhearted and saves the crushed in spirit." <br />
              <span className="not-italic text-[10px] text-gold-500/60 block mt-1 font-sans">— Psalm 34:18</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-white uppercase">
              Quick Resources
            </h4>
            <nav className="flex flex-col space-y-2 text-xs text-beige-200/80">
              <a
                href="#hero"
                onClick={(e) => handleLinkClick(e, "hero")}
                className="hover:text-gold-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "about")}
                className="hover:text-gold-500 transition-colors"
              >
                About Her Approach
              </a>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, "services")}
                className="hover:text-gold-500 transition-colors"
              >
                Services List
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleLinkClick(e, "testimonials")}
                className="hover:text-gold-500 transition-colors"
              >
                Client Reflections
              </a>
              <a
                href="#faq"
                onClick={(e) => handleLinkClick(e, "faq")}
                className="hover:text-gold-500 transition-colors"
              >
                Logistical FAQ
              </a>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-white uppercase">
              Healing Refuge Location
            </h4>
            <div className="space-y-3.5 text-xs text-beige-200/80">

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold-500 shrink-0" />
                <a href="tel:+2349070679648" className="hover:text-gold-500 transition-colors">
                  +234 907 067 9648
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold-500 shrink-0" />
                <a href="mailto:adelekehannah@gmail.com" className="hover:text-gold-500 transition-colors">
                  adelekehannah@gmail.com
                </a>
              </div>

              {/* Social Buttons */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href="https://wa.me/2349070679648?text=Good%20day%20ma'am%20my%20name%20is%20[%20%20%20%20]%20I'd%20like%20to%20book%20a%20counseling%20appointment%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Link"
                  className="h-8 w-8 rounded-sm bg-sage-900 flex items-center justify-center text-beige-100 hover:text-gold-500 hover:bg-sage-850 transition-all border border-sage-800"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.instagram.com/hannahnurturer?igsh=Y21sMDZnaGJlYXR5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Link"
                  className="h-8 w-8 rounded-sm bg-sage-900 flex items-center justify-center text-beige-100 hover:text-gold-500 hover:bg-sage-850 transition-all border border-sage-800"
                >
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.facebook.com/hannah.adeleke.98"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Link"
                  className="h-8 w-8 rounded-sm bg-sage-900 flex items-center justify-center text-beige-100 hover:text-gold-500 hover:bg-sage-850 transition-all border border-sage-800"
                >
                  <Facebook className="h-3.5 w-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Lower footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-beige-200/50 uppercase tracking-widest font-bold gap-4">
          <div>
            &copy; {currentYear} Mother Hannah Counseling.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-500 transition-colors">
              Privacy Policy
            </a>
            <span className="text-sage-800">|</span>
            <a href="#" className="hover:text-gold-500 transition-colors">
              Terms of Solace
            </a>
            <span className="text-sage-800">|</span>
            <a href="#" className="hover:text-gold-500 transition-colors">
              HIPAA Statement
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
