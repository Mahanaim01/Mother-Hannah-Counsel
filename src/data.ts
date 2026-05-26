/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, FAQItem, Testimonial } from "./types";

export const services: Service[] = [
  {
    id: "individual",
    title: "Individual Counseling",
    description: "A gentle space to explore personal challenges, anxiety, grief, life transitions, and healing. Together, we walk toward restoration.",
    duration: "50 Minutes",
    investment: "$120",
    iconName: "Heart",
  },
  {
    id: "couples-family",
    title: "Couples & Family Counseling",
    description: "Rebuild trust, master compassionate communication, and mend fragile bonds within a warm, non-judgmental environment.",
    duration: "75 Minutes",
    investment: "$150",
    iconName: "Users",
  },
  {
    id: "spiritual-guidance",
    title: "Spiritual Guidance",
    description: "Nurture your soul. Explore spiritual questions, prayer-based inner healing, and connect deeply with your divine purpose.",
    duration: "60 Minutes",
    investment: "$110",
    iconName: "Sparkles",
  },
  {
    id: "crisis-support",
    title: "Crisis Support",
    description: "Immediate triage and comforting presence during critical life disruptions, sudden loss, or acute emotional storms.",
    duration: "45 Minutes",
    investment: "Sliding Scale / Priority",
    iconName: "LifeBuoy",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What should I expect during my first session with Mother Hannah?",
    answer: "Your initial session is a gentle, introductory conversation focused entirely on establishing a safe trust. Mother Hannah will listen closely to your current heartbeat—your concerns, your story, and what you hope to heal—allowing you both to align on a tailored path of recovery.",
  },
  {
    id: "faq-2",
    question: "Do you offer virtual or in-person counseling?",
    answer: "Mother Hannah offers both secure virtual (telehealth) sessions from the comfort of your home, as well as offline in-person sessions at our peaceful counseling refuge. You can specify your preference when requesting your initial slot.",
  },
  {
    id: "faq-3",
    question: "Is this counseling restricted to a specific religious faith?",
    answer: "Not at all. While Mother Hannah is deeply rooted in general spiritual wellness and a compassionate faith-inspired philosophy, she welcomes and honors individuals from all backgrounds, walks of life, and personal faith journeys without exception.",
  },
  {
    id: "faq-4",
    question: "What is your pricing and insurance policy?",
    answer: "Sessions range from $110 to $150. While we do not process insurance directly, we can provide standard detailed out-of-network invoices (superbills) that you may submit to your provider. Sliding scales are available for families under active strain.",
  },
  {
    id: "faq-5",
    question: "Is my privacy absolutely protected?",
    answer: "Yes, completely. Client safety and absolute confidentiality are sacred and protected under HIPAA and ethical compliance boundaries. What is shared in our space remains permanently preserved there.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah M.",
    location: "Oregon",
    text: "Mother Hannah has a gift for calming the storm inside you. In her presence, I felt permission to collapse, heal, and learn to breathe again after profound grief.",
    rating: 5,
    role: "Grief Recovery Client",
  },
  {
    id: "test-2",
    name: "David & Rebecca K.",
    location: "California",
    text: "Our marriage was on the precipice of breakdown. Mother Hannah didn't choose sides; she taught us how to listen from the heart and hold each other's pain gently.",
    rating: 5,
    role: "Couples Session Clients",
  },
  {
    id: "test-3",
    name: "Evelyn T.",
    location: "Texas",
    text: "I was highly skeptical of combining emotional therapy with spiritual focus. Her methods are grounded, deeply clinical, yet packed with divine grace and light.",
    rating: 5,
    role: "Spiritual Seeking Client",
  },
];

export const availableTimeSlots = [
  "09:00 AM",
  "10:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
];
