"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { WrenchScrewdriverIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: 'Igniting Curiosity',
    category: 'Environmental Engineering & Robotics',
    description: 'Our visit to South Senchi Primary School was a hands-on STEM outreach program designed to inspire and equip young learners with foundational technology skills. Through interactive sessions, students explored robotics, basic electricity, programming, and Arduino, gaining practical experience while discovering how science and technology can be used to solve real-world challenges. Beyond the technical lessons, the program aimed to ignite curiosity, creativity, and confidence in every child. By bringing quality STEM education to rural communities, we are empowering the next generation of innovators and demonstrating that talent can thrive anywhere when given the right opportunity.',
    image: '/images/project-senchi1.jpg',
    tags: ['Microcontrollers', 'Passive Mechanics', 'Prototyping']
  },
  {
    id: 2,
    title: 'AI Bootcamp for Rural Students',
    category: 'IoT & Software Development',
    description: 'We are bringing together students from underserved rural schools across the Asutifi Constituency for a hands-on STEM experience that many have never had the opportunity to access. Through robotics, artificial intelligence, programming, and practical engineering activities, we aim to ignite curiosity, unlock potential, and show every young learner that where they come from should never limit what they can achieve. By opening doors to quality STEM education, we are investing in a future where talent is discovered, nurtured, and empowered to create lasting change.',
    image: '/images/project-iot.jpg',
    tags: ['AI Fundamentals', 'Robotics', 'Programming']
  }
];

export default function ProjectsSection() {
  return (
    <section id="impact" className="py-24 bg-slate-50 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[92%] px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-pink-600 flex items-center gap-2">
              <WrenchScrewdriverIcon className="w-5 h-5" />
              Applied Learning
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building solutions for the real world
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <a href="#all-projects" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
              View all student projects
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-3xl p-4 sm:p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-2xl bg-gray-200 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="px-2 pb-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
