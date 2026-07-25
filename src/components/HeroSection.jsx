"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFAFC] pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-100/30 via-transparent to-transparent"></div>

      <div className="mx-auto max-w-[92%] px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Storytelling & CTAs */}
          <motion.div 
            className="lg:col-span-6 text-center lg:text-left flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="h-1 w-12 bg-brand-pink rounded-full"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-brand-dark">
                Empowered STEAM Youth
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl lg:text-7xl lg:leading-[1.1]">
              What happens to the dreams of a young aspiring engineer  <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-950">
                when the tools of technology remain out of reach?
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-8 text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Talent is universal, but opportunity is not. We are putting Robotics, AI, and hardware directly into the hands of rural innovators who just need the right tools to build the future.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a href="/donate" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-brand-blue rounded-xl hover:bg-blue-800 shadow-xl shadow-brand-blue/30 transition-all duration-200 active:scale-95 group">
                Donate Today
                <HeartIcon className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform" />
              </a>
              
              <a href="#programs" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-dark bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 active:scale-95">
                Explore Our Programs
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Image Grid */}
          <motion.div 
            className="lg:col-span-6 mt-16 lg:mt-0 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
              
              {/* Left Side of the Grid (Images 1 & 2) */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <img 
                  src="/images/stem-student-robotics.jpg" 
                  alt="Student building a robotics project" 
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl shadow-gray-200/50"
                />
                <img 
                  src="/images/stem-community-learning.jpg" 
                  alt="Students collaborating on laptops" 
                  className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg shadow-gray-200/50"
                />
              </div>

              {/* Right Side of the Grid (Images 3 & 4) */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 pt-12 sm:pt-16 lg:pt-24">
                <img 
                  src="/images/stem-ai-future.jpg" 
                  alt="Young student learning AI programming" 
                  className="w-full h-56 sm:h-64 object-cover rounded-2xl shadow-2xl shadow-blue-900/10"
                />
                {/* ---> NEW 4TH IMAGE HERE <--- */}
                <img 
                  src="/images/R.jpg" 
                  alt="New workshop photo" 
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl shadow-gray-200/50"
                />
              </div>

            </div>
            
            <div className="absolute -right-8 -bottom-8 -z-10">
              <svg width="120" height="120" fill="none" viewBox="0 0 100 100" className="text-brand-pink opacity-60">
                 <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeDasharray="10 10" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}