"use client";

import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: "Your Name Here",
    role: "Lead Coordinator",
    description: "Driving the vision to bring hands-on technology and robotics education to rural communities.",
    image: "/images/team-placeholder-1.jpg", // Replace with your image path
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Co-Founder Name",
    role: "Head of Operations",
    description: "Managing project logistics and ensuring our STEM workshops run smoothly and effectively.",
    image: "/images/team-placeholder-2.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Team Member",
    role: "Curriculum Developer",
    description: "Designing engaging, accessible content for our AI, programming, and engineering programs.",
    image: "/images/team-placeholder-3.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Team Member",
    role: "Technical Mentor",
    description: "Guiding students through low-level hardware design, microcontrollers, and coding challenges.",
    image: "/images/team-placeholder-4.jpg",
    linkedin: "#",
    twitter: "#",
  }
];

export default function TeamSection() {
  return (
    <section id="about" className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-[92%] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-base font-semibold leading-7 text-brand-blue">
            Our People
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Meet the team empowering the next generation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a dedicated group of engineers, educators, and innovators committed to bridging the opportunity gap in STEM education.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {teamMembers.map((person, index) => (
            <motion.div 
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex flex-col sm:flex-row gap-8 items-start"
            >
              {/* Image Frame */}
              <div className="w-full sm:w-48 h-60 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 shadow-sm ring-1 ring-gray-200">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Profile Details */}
              <div className="flex-1 mt-2 sm:mt-0">
                <h3 className="text-xl font-bold text-brand-dark">{person.name}</h3>
                <p className="text-brand-pink font-medium mt-1">{person.role}</p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {person.description}
                </p>
                
                {/* Social Icons */}
                <div className="mt-6 flex gap-4 text-gray-400">
                  <a href={person.linkedin} className="hover:text-brand-blue transition-colors" aria-label="LinkedIn Profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={person.twitter} className="hover:text-brand-blue transition-colors" aria-label="Twitter Profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}