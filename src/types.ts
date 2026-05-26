/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  investment: string;
  iconName: string; // Lucide icon name mapping
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number; // 1-5
  role?: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
