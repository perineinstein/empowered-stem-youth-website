"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CpuChipIcon, CommandLineIcon, SparklesIcon, WrenchIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';

const programs = [
  {
    id: 1,
    title: 'Robotics Engineering',
    shortTitle: 'Robotics',
    description: 'Students get hands-on experience designing and assembling physical systems. Moving beyond basic kits, we introduce real-world hardware, teaching them how to integrate sensors and control microcontrollers like Arduino and ESP32 nodes.',
    icon: <CpuChipIcon className="w-8 h-8" />,
    color: 'from-blue-600 to-blue-800',
    image: '/images/program-robotics.jpg'
  },
  {
    id: 2,
    title: 'Programming & Logic',
    shortTitle: 'Programming',
    description: 'We demystify software development by teaching the fundamental building blocks of code. Students learn to structure logic, build functional applications, and understand how software interfaces with the physical world.',
    icon: <CommandLineIcon className="w-8 h-8" />,
    color: 'from-pink-500 to-pink-700',
    image: '/images/program-coding.jpg'
  },
  {
    id: 3,
    title: 'Artificial Intelligence',
    shortTitle: 'AI',
    description: 'Preparing youth for the future by exploring how machines learn and process information. We focus on ethical tech development and practical AI applications that can be used to solve local community challenges.',
    icon: <SparklesIcon className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-700',
    image: '/images/program-ai.jpg'
  },
  {
    id: 4,
    title: 'Embedded Systems',
    shortTitle: 'Embedded',
    description: 'Deep dives into custom circuit design, analog hardware optimization, and low-level system architectures. We teach students how to build the fundamental brains behind modern electronics.',
    icon: <WrenchIcon className="w-8 h-8" />,
    color: 'from-brand-yellow to-orange-500',
    image: '/images/program-embedded.jpg' // You'll need to add a 4th image to your public/images folder!
  }
];

export default function ProgramsSection() {
  // This state tracks which card is currently expanded. Defaults to the first one (id: 1).
  const [active, setActive] = useState(1);

  return (
    <section id="programs" className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-[92%] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-brand-blue">Our Core Focus</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
            Equipping youth with the skills of tomorrow
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            We deliver hands-on technology education that transforms curiosity into capability, giving students the tools they need to become creators, not just consumers, of technology.
          </p>
        </div>

        {/* Expanding Accordion Container */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] w-full gap-4">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              // When the user hovers over this card, it sets it as the active one
              onMouseEnter={() => setActive(program.id)}
              onClick={() => setActive(program.id)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-[flex] duration-700 ease-in-out flex-shrink-0 lg:flex-shrink
                ${active === program.id ? 'lg:flex-[4] h-[400px] lg:h-full' : 'lg:flex-[1] h-[100px] lg:h-full'}
              `}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gray-200">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                />
                {/* Dark gradient overlay for text readability */}
                <div className={`absolute inset-0 bg-gradient-to-t via-brand-dark/40 to-transparent transition-opacity duration-700
                  ${active === program.id ? 'from-brand-dark/90 opacity-100' : 'from-brand-dark/70 opacity-100 lg:opacity-60'}
                `} />
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                
                {/* Inactive State Content (Vertical Title) */}
                <div className={`absolute inset-0 flex flex-col items-center justify-end pb-8 lg:justify-center transition-opacity duration-500
                  ${active === program.id ? 'opacity-0 pointer-events-none' : 'opacity-100 lg:delay-200'}
                `}>
                  <div className="text-white hidden lg:flex flex-col items-center gap-6">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold tracking-widest whitespace-nowrap -rotate-90 origin-center mt-24">
                      {program.shortTitle}
                    </h3>
                  </div>
                  {/* Mobile inactive view */}
                  <h3 className="text-2xl font-bold text-white lg:hidden">
                    {program.shortTitle}
                  </h3>
                </div>

                {/* Active State Content (Full Details) */}
                <div className={`transition-all duration-500 ease-in-out transform
                  ${active === program.id ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8 pointer-events-none'}
                `}>
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${program.color} text-white mb-4 lg:mb-6 shadow-lg`}>
                    {program.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {program.title}
                  </h3>
                  {/* Hide description on mobile to save space, show on desktop */}
                  <p className="hidden md:block text-gray-200 text-lg leading-relaxed max-w-xl mb-6">
                    {program.description}
                  </p>
                  
                  <a href="#" className="inline-flex items-center gap-2 text-white font-semibold group/link">
                    Explore Program
                    <ArrowLongRightIcon className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
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