/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, Heart, Check, ChevronDown, User, Mail, Phone, MessageSquare, Sparkles, ShieldCheck } from "lucide-react";
import { services, availableTimeSlots } from "../data";
import { BookingFormData } from "../types";

interface BookingFormProps {
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
}

export default function BookingForm({ selectedServiceId, setSelectedServiceId }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    email: "",
    phone: "",
    serviceId: selectedServiceId || "individual",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationId, setConfirmationId] = useState("");

  // Keep state in sync with prop selection changes
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  // Set minimum date restriction to today for validation
  const getTodayString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (min 7 digits)";
    }

    if (!formData.serviceId) {
      newErrors.serviceId = "Please select a service";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please choose a date";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select a time slot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      // Scroll to the first error
      const firstErrorKey = Object.keys(errors)[0] as keyof BookingFormData;
      const errorField = document.getElementsByName(firstErrorKey)[0];
      if (errorField) {
        errorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate safe API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setConfirmationId(`MH-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleTimeSelect = (timeSlot: string) => {
    setFormData((prev) => ({ ...prev, preferredTime: timeSlot }));
    if (errors.preferredTime) {
      setErrors((prev) => ({ ...prev, preferredTime: "" }));
    }
  };

  const selectedServiceDetails = services.find((s) => s.id === formData.serviceId);

  return (
    <section id="booking" className="py-20 bg-[#FDFBF7] relative border-b border-beige-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] block">
            Calendar Booking Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-beige-900 tracking-tight leading-tight">
            Schedule Your Connection
          </h2>
          <p className="font-sans text-xs text-beige-800 font-light leading-relaxed max-w-lg mx-auto">
            Fill in the parameters below to request a secure session. No fees are charged immediately. We will check calendar availability and coordinate details soon.
          </p>
        </div>

        {/* Card Frame with Precise Geometric Style */}
        <div className="bg-white rounded-sm border border-beige-200 shadow-sm overflow-hidden relative">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="p-6 sm:p-10 lg:p-12 space-y-8"
              >
                {/* Form Body - Grid splits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Left Column - Contact Details */}
                  <div className="space-y-5">
                    <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-beige-900 border-b border-beige-200 pb-2">
                      1. Contact Identification
                    </h3>

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-[10px] font-bold text-beige-800 uppercase tracking-widest">
                        Full Name <span className="text-sage-500">*</span>
                      </label>
                      <div className="relative rounded-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-beige-800">
                          <User className="h-4 w-4" />
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Your beautiful name"
                          className={`block w-full pl-11 pr-4 py-3 text-xs bg-[#FDFBF7] border rounded-sm focus:outline-none focus:ring-1 focus:ring-sage-500 focus:bg-white transition-all ${
                            errors.fullName ? "border-red-400 focus:ring-red-400" : "border-beige-200"
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wide">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-[10px] font-bold text-beige-800 uppercase tracking-widest">
                        Email Address <span className="text-sage-500">*</span>
                      </label>
                      <div className="relative rounded-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-beige-800">
                          <Mail className="h-4 w-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@personal.com"
                          className={`block w-full pl-11 pr-4 py-3 text-xs bg-[#FDFBF7] border rounded-sm focus:outline-none focus:ring-1 focus:ring-sage-500 focus:bg-white transition-all ${
                            errors.email ? "border-red-400 focus:ring-red-400" : "border-beige-200"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wide">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-[10px] font-bold text-beige-800 uppercase tracking-widest">
                        Phone Number <span className="text-sage-500">*</span>
                      </label>
                      <div className="relative rounded-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-beige-800">
                          <Phone className="h-4 w-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 000-0000"
                          className={`block w-full pl-11 pr-4 py-3 text-xs bg-[#FDFBF7] border rounded-sm focus:outline-none focus:ring-1 focus:ring-sage-500 focus:bg-white transition-all ${
                            errors.phone ? "border-red-400 focus:ring-red-400" : "border-beige-200"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wide">{errors.phone}</p>
                      )}
                    </div>

                    {/* Service Type Dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="serviceId" className="block text-[10px] font-bold text-beige-800 uppercase tracking-widest">
                        Service Type <span className="text-sage-500">*</span>
                      </label>
                      <div className="relative rounded-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-beige-800">
                          <Heart className="h-4 w-4" />
                        </div>
                        <select
                          name="serviceId"
                          id="serviceId"
                          value={formData.serviceId}
                          onChange={(e) => {
                            handleInputChange(e);
                            setSelectedServiceId(e.target.value);
                          }}
                          className={`block w-full pl-11 pr-10 py-3 text-xs bg-[#FDFBF7] border rounded-sm focus:outline-none focus:ring-1 focus:ring-sage-500 focus:bg-white transition-all appearance-none cursor-pointer ${
                            errors.serviceId ? "border-red-400 focus:ring-red-400" : "border-beige-200"
                          }`}
                        >
                          {services.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.title} ({service.duration} — {service.investment})
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-beige-800">
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                      {errors.serviceId && (
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wide">{errors.serviceId}</p>
                      )}
                    </div>

                  </div>

                  {/* Right Column - Booking Schedule */}
                  <div className="space-y-5">
                    <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-beige-900 border-b border-beige-200 pb-2">
                      2. Preferred Schedule
                    </h3>

                    {/* Date Picker */}
                    <div className="space-y-1.5">
                      <label htmlFor="preferredDate" className="block text-[10px] font-bold text-beige-800 uppercase tracking-widest">
                        Preferred Date <span className="text-sage-500">*</span>
                      </label>
                      <div className="relative rounded-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-beige-800">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <input
                          type="date"
                          name="preferredDate"
                          id="preferredDate"
                          min={getTodayString()}
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className={`block w-full pl-11 pr-4 py-3 text-xs bg-[#FDFBF7] border rounded-sm focus:outline-none focus:ring-1 focus:ring-sage-500 focus:bg-white transition-all cursor-pointer ${
                            errors.preferredDate ? "border-red-400 focus:ring-red-400" : "border-beige-200"
                          }`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wide">{errors.preferredDate}</p>
                      )}
                    </div>

                    {/* Custom Time Slots Picker */}
                    <div className="space-y-2">
                      <span className="block text-[10px] font-bold text-beige-800 uppercase tracking-widest">
                        Preferred Time Slot <span className="text-sage-500">*</span>
                      </span>
                      <div className="grid grid-cols-2 xs:grid-cols-3 gap-2">
                        {availableTimeSlots.map((time) => {
                          const isSelected = formData.preferredTime === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => handleTimeSelect(time)}
                              className={`py-2 px-3 rounded-sm text-xs font-medium border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                isSelected
                                  ? "bg-sage-500 border-sage-500 text-white"
                                  : "bg-[#FDFBF7] border-beige-200 text-beige-800 hover:border-sage-300 hover:bg-white"
                              }`}
                            >
                              <Clock className="h-3 w-3 shrink-0" />
                              <span>{time}</span>
                            </button>
                          );
                        })}
                      </div>
                      {errors.preferredTime && (
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wide">{errors.preferredTime}</p>
                      )}
                    </div>

                    {/* Messaging context detail */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-[10px] font-bold text-beige-800 uppercase tracking-widest">
                        Message / Reason for visit <span className="text-[10px] text-beige-800 normal-case font-normal">(Optional)</span>
                      </label>
                      <div className="relative rounded-sm">
                        <div className="absolute top-3.5 left-3.5 pointer-events-none text-beige-800">
                          <MessageSquare className="h-4 w-4" />
                        </div>
                        <textarea
                          name="message"
                          id="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Is there anything specific you would like Mother Hannah to hold in thoughts before speaking?"
                          className="block w-full pl-11 pr-4 py-3 text-xs bg-[#FDFBF7] border border-beige-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-sage-500 focus:bg-white transition-all resize-none font-light"
                        />
                      </div>
                    </div>

                  </div>

                </div>

                {/* Submit Container details */}
                <div className="pt-6 border-t border-beige-200 flex flex-col sm:flex-row gap-5 items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] text-beige-850 font-bold uppercase tracking-wider text-center sm:text-left">
                    <ShieldCheck className="h-4 w-4 text-sage-500 shrink-0" />
                    <span>Records protected by healthcare confidentiality standards.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 bg-sage-500 hover:bg-sage-600 text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-wait cursor-pointer focus:outline-none focus:ring-1 focus:ring-sage-500"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Appointment</span>
                      </>
                    )}
                  </button>
                </div>

              </motion.form>
            ) : (
              /* Confirmation Screen layout - Precise solid shapes */
              <motion.div
                key="booking-confirmation"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-6"
              >
                {/* Success icon */}
                <div className="h-14 w-14 bg-sage-50 border border-sage-200 rounded-full flex items-center justify-center text-sage-500 shadow-sm">
                  <Check className="h-6 w-6 stroke-[2.5]" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <span className="text-xs font-bold text-gold-500 uppercase tracking-[0.2em] flex items-center justify-center gap-1.5">
                    Appointment Request Logged
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-beige-900">
                    Thank You, {formData.fullName.split(" ")[0]}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-beige-800 font-light leading-relaxed">
                    We have successfully captured your booking request. Mother Hannah has been alerted with your session preferences and will connect soon.
                  </p>
                </div>

                {/* Request Details Receipt */}
                <div className="bg-[#FDFBF7] border border-beige-200 rounded-sm p-6 w-full max-w-md text-left space-y-3.5 shadow-sm">
                  <div className="flex items-center justify-between text-[10px] border-b border-beige-200 pb-2">
                    <span className="font-bold uppercase tracking-widest text-beige-800">Booking ID:</span>
                    <span className="font-mono font-bold text-sage-500">{confirmationId}</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 text-xs text-beige-800">
                    <div>
                      <strong className="font-bold text-beige-900 block mb-0.5">Selected Service:</strong>
                      <span>{selectedServiceDetails?.title} ({selectedServiceDetails?.duration})</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <strong className="font-bold text-beige-900 block mb-0.5">Preferred Date:</strong>
                        <span>{new Date(formData.preferredDate + "T00:00:00").toLocaleDateString(undefined, {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                         })}</span>
                      </div>
                      <div>
                        <strong className="font-bold text-beige-900 block mb-0.5">Arranged Time:</strong>
                        <span>{formData.preferredTime}</span>
                      </div>
                    </div>

                    <div>
                      <strong className="font-bold text-beige-900 block mb-0.5 font-sans">Notification Details:</strong>
                      <span>{formData.email} / {formData.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Close/Reset button */}
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      serviceId: "individual",
                      preferredDate: "",
                      preferredTime: "",
                      message: "",
                    });
                  }}
                  className="font-sans text-[10px] font-bold uppercase tracking-widest text-sage-500 hover:text-white hover:bg-sage-500 bg-[#FDFBF7] border border-beige-200 px-6 py-3 rounded-sm transition-all focus:outline-none"
                >
                  Schedule Another Appointment
                </button>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
