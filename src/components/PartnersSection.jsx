"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    id: 1,
    name: 'Right to Dream',
    logo: '/images/partner-right-to-dream.png', // Save your transparent PNG with this name
  },
  {
    id: 2,
    name: 'Ghana Education Service',
    logo: '/images/partner-ges.png', // Save your transparent PNG with this name
  },
  {
    id: 3,
    name: 'Common Goal',
    logo: '/images/partner-common-goal.png', // Save your transparent PNG with this name
  }
];

export default function PartnersSection() {
  return (
    <section className="py-12 bg-white sm:py-16 border-b border-gray-100">
      <div className="mx-auto max-w-[92%] px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
            Proudly Partnered With
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex justify-center group cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                // The grayscale and opacity classes give it that premium uniform look until hovered
                className="h-24 sm:h-32 md:h-36 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}