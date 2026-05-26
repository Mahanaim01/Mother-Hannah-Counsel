/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("individual");

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    
    // Smooth scroll directly to calendar form with accurate offset margin
    const element = document.getElementById("booking");
    if (element) {
      const offset = 80; // height of sticky navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] font-sans text-beige-800 antialiased selection:bg-sage-100 selection:text-sage-800">
      {/* Dynamic Floating Support Watermark or floating bubble (kept extremely elegant and minimal) */}
      
      {/* Navigation Layer */}
      <Navbar />

      {/* Pages Layout stacked in sequential requirements order */}
      <main className="relative">
        <Hero />
        
        <About />
        
        <Services onSelectService={handleSelectService} />
        
        <HowItWorks />
        
        <Testimonials />
        
        <BookingForm
          selectedServiceId={selectedServiceId}
          setSelectedServiceId={setSelectedServiceId}
        />
        
        <FAQ />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
