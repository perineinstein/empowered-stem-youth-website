"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const contactMethods = [
  {
    icon: <EnvelopeIcon className="w-6 h-6" />,
    title: "Email Us",
    contact: "empoweredsteamgh@gmail.com" // Replace with your actual email
  },
  {
    icon: <PhoneIcon className="w-6 h-6" />,
    title: "Call Us",
    contact: "+233 54 477 5671 / +233 24 641 1569" // Replace with your actual number
  },
  {
    icon: <MapPinIcon className="w-6 h-6" />,
    title: "Visit Us",
    contact: "Akosombo, Ghana" // Replace with your actual location
  },
];

export default function ContactSection() {
  return (
    <section id="partner" className="py-24 bg-slate-50 sm:py-32">
      <div className="max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Context and Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg space-y-6"
          >
            <h3 className="text-brand-pink font-semibold tracking-wide uppercase text-sm">
              Partner With Us
            </h3>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Let’s build the future together
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you are a school looking to integrate our programs, a company wanting to sponsor our initiatives, or a volunteer eager to mentor, we want to hear from you.
            </p>
            
            <div className="pt-8 space-y-8">
              {contactMethods.map((item, idx) => (
                <div key={idx} className="flex items-center gap-x-4">
                  <div className="flex-none w-12 h-12 rounded-full bg-white shadow-sm ring-1 ring-gray-200 flex items-center justify-center text-brand-blue">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{item.title}</p>
                    <p className="text-lg font-semibold text-brand-dark">{item.contact}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-200"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" id="first-name" required className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 transition-all" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" id="last-name" required className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 transition-all" />
                </div>
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" id="email" required className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 transition-all" />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">I am interested in...</label>
                <select id="interest" required className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 bg-white">
                  <option value="">Select an option</option>
                  <option value="school">School Partnership</option>
                  <option value="corporate">Corporate Sponsorship</option>
                  <option value="volunteer">Volunteering / Mentorship</option>
                  <option value="donation">Making a Donation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} required className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 resize-none transition-all"></textarea>
              </div>

              <button type="submit" className="w-full rounded-xl bg-brand-blue px-4 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition-all active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}