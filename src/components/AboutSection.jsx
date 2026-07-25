"use client";

import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    name: "Dorla Agbadza",
    secondaryTitle: 'Executive Director',
    title: "Lead Curriculum Design & Training",
    image: '/images/dorla.jpg',
    desc: "Designs and updates the STEM curriculum. Plans and leads training sessions to ensure all educational content deeply aligns with project goals.",
    colorText: "text-pink-500",
    colorBg: "bg-gradient-to-br from-white to-pink-50",
    borderColor: "border-pink-200",
    shadowHover: "hover:shadow-pink-500/20",
    linkedin: "javascript:void(0)", twitter: "javascript:void(0)", github: "javascript:void(0)"
  },
    {
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    name: "Christian Taylor",
    title: "Tech Lead for Projects & Infrastructure",
    image: '/images/taylor.jpg',
    desc: "Manages project tech setup and infrastructure, ensures systems are secure and efficient, and supports the team with technical needs.",
    colorText: "text-blue-500",
    colorBg: "bg-gradient-to-br from-white to-blue-50",
    borderColor: "border-blue-200",
    shadowHover: "hover:shadow-blue-500/20",
    linkedin: "javascript:void(0)", twitter: "javascript:void(0)", github: "javascript:void(0)"
  },
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    name: "Steven Asare",
    title: "Legal Advisor, Compliance & Sponsorship",
    image: '/images/steven.jpg',
    desc: "Handles NGO registration, permits, and legal docs. Ensures projects comply with laws and regulations while pursuing sponsorship opportunities.",
    colorText: "text-amber-500",
    colorBg: "bg-gradient-to-br from-white to-amber-50",
    borderColor: "border-amber-200",
    shadowHover: "hover:shadow-amber-500/20",
    linkedin: "javascript:void(0)", twitter: "javascript:void(0)", github: "javascript:void(0)"
  },
  
  {
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    name: "Kwadzo Lorlornyo Ti",
    title: "Youth Engagement & Community Outreach",
    image: '/images/ti.jpg',
    desc: "Engages directly with youth and community groups. Builds strong relationships with local stakeholders to support project outreach activities.",
    colorText: "text-emerald-500",
    colorBg: "bg-gradient-to-br from-white to-emerald-50",
    borderColor: "border-emerald-200",
    shadowHover: "hover:shadow-emerald-500/20",
    linkedin: "javascript:void(0)", twitter: "javascript:void(0)", github: "javascript:void(0)"
  },
  {
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    name: "Paul Kwabena Oppong",
    title: "AI Integration & Tech Innovation",
    image: '/images/paul.jpg',
    desc: "Integrates Artificial Intelligence into project activities, drives technological innovation, engages students, and provides hands-on mentorship.",
    colorText: "text-purple-500",
    colorBg: "bg-gradient-to-br from-white to-purple-50",
    borderColor: "border-purple-200",
    shadowHover: "hover:shadow-purple-500/20",
    linkedin: "javascript:void(0)", twitter: "javascript:void(0)", github: "javascript:void(0)"
  },
  {
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    name: "Devine Jacobson",
    title: "Bookkeeper",
    image: '/images/devine.jpg',
    desc: "Manages the financial records and ensures accurate bookkeeping for the organization.",
    colorText: "text-cyan-500",
    colorBg: "bg-gradient-to-br from-white to-cyan-50",
    borderColor: "border-cyan-200",
    shadowHover: "hover:shadow-cyan-500/20",
    linkedin: "javascript:void(0)", twitter: "javascript:void(0)", github: "javascript:void(0)"
  },
  {
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    name: "Tumfo Perin",
    title: "Robotics Instructor & Social Media Manager",
    image: '/images/tumfo.jpg',
    desc: "Facilitates interactive learning sessions, helping students build critical thinking skills through hardware and programming challenges.",
    colorText: "text-orange-500",
    colorBg: "bg-gradient-to-br from-white to-orange-50",
    borderColor: "border-orange-200",
    shadowHover: "hover:shadow-orange-500/20",
    linkedin: "https://www.linkedin.com/in/perin-tumfo-5aa56031a", twitter: "javascript:void(0)", github: "https://github.com/PerinTumfo"
  }
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

 return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 sm:py-32 overflow-hidden relative">
      
      {/* Decorative colorful background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-amber/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="mx-auto max-w-[92%] px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24 lg:space-y-32"
        >
          
          {/* 1. Top Section: Logo & About Company */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <motion.div variants={itemLeft} className="flex-shrink-0">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-brand-cyan flex items-center justify-center p-2 bg-white shadow-2xl shadow-cyan-500/20 overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="Empowered STEM Youth Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            <motion.div variants={itemRight} className="flex-1 text-center md:text-left">
              <h2 className="text-sm font-bold tracking-widest text-brand-cyan uppercase mb-3">
                Our Organization
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan sm:text-4xl mb-6">
                Turning raw curiosity into real innovation.
              </h3>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Go to any rural village, and you won’t find a shortage of brilliance. You will find kids with intensely curious minds, tearing apart broken electronics, wiring up salvaged motors, and engineering complex mechanical toys out of scrap and localized materials. They are already makers by nature.
                </p>
                <p>
                  But imagine what happens when you take that raw, unfiltered ingenuity and place a real development board in their hands. What could that same curious mind create with access to microcontrollers, sensors, and proper circuitry? If they can build wonders out of scrap, they can build the future with the right tools.
                </p>
                <p>
                  That is exactly the gap Empowered STEM Youth is here to close. We aren't just teaching concepts; we are actively mentoring these natural innovators. By providing the hardware, the guidance, and the digital skills they previously lacked, we are equipping overlooked communities to solve real-world problems.
                </p>
              </div>
            </motion.div>
          </div>

          <hr className="border-brand-cyan/20" />

          {/* 2. Middle Section: About Founder & Picture */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
            <motion.div variants={itemLeft} className="flex-1 text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-xs uppercase tracking-widest mb-6">
                Leadership
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl mb-2">
                Koffi Akpavi
              </h3>
              <p className="text-brand-blue font-semibold text-lg mb-6">
                Founder & Executive Director
              </p>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  With a dynamic career spanning 26 years—14 years driving corporate innovation and 12 years transforming the classroom—Koffi uniquely bridges the gap between industry demands and modern tech education.
                </p>
                <p>
                  Deeply passionate about Robotics, Artificial Intelligence, Digital Skills, and Entrepreneurship, his mission is clear: to equip the next generation of students with the future-proof skills they need to build, innovate, and lead in a rapidly evolving world. 
                </p>
                <p>
                  In addition to spearheading Empowered STEM Youth, Koffi actively shapes young minds as a dedicated tech facilitator and educator at Right to Dream, bringing real-world applications directly into the hands of his students.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemRight} className="flex-shrink-0">
              <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-brand-amber shadow-2xl shadow-amber-500/20">
                <img 
                  src="/images/founder-photo.jpg" 
                  alt="Managing Director" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>

          <hr className="border-brand-amber/20" />

          {/* 3. Bottom Section: The Team */}
          <div className="pt-8">
             <div className="text-center mb-24">
                <h2 className="text-sm font-bold tracking-widest text-brand-cyan uppercase mb-3">
                  Our People
                </h2>
                <h3 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
                  The minds behind the mission
                </h3>
             </div>
             
             {/* The Dynamic Offset Card Grid */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-28 gap-x-12 lg:gap-x-20 px-4 sm:px-8 lg:px-12">
                 {team.map((item, idx) => (
                     <div 
                        key={idx} 
                        // Outer card taking on the dynamic background, border, and hover shadow
                        className={`relative rounded-3xl p-6 sm:p-8 sm:pr-10 mt-16 lg:mt-0 flex flex-col sm:flex-row shadow-lg border ${item.colorBg} ${item.borderColor} ${item.shadowHover} transition-all duration-300 hover:-translate-y-2 group w-full`}
                     >
                         
                         {/* Offset Image Container */}
                         <div className="w-48 h-56 sm:w-48 sm:h-64 flex-shrink-0 mx-auto sm:mx-0 -mt-24 sm:mt-0 sm:-ml-16 rounded-3xl overflow-hidden shadow-xl shadow-gray-400/50 z-10 bg-white">
                             <img
                                 src={item.image}
                                 alt={item.name}
                                 className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                             />
                         </div>

                         {/* Text & Icon Details */}
                         <div className="flex-1 mt-6 sm:mt-0 sm:ml-8 text-center sm:text-left flex flex-col justify-center">
                             <h4 className="text-2xl font-extrabold text-brand-dark mb-1 tracking-tight capitalize">
                               {item.name}
                             </h4>
                             <p className={`${item.colorText} font-bold uppercase text-xs tracking-widest mb-4`}>
                               {item.title}
                             </p>
                             {item.secondaryTitle && <p className="text-gray-400 font-bold uppercase text-[11px] tracking-widest mb-4 -mt-3">{item.secondaryTitle}</p>}
                             <p className="text-gray-600 text-sm leading-relaxed mb-6">
                               {item.desc}
                             </p>

                             {/* Circular Social Icons */}
                             <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-400">
                                 <a href={item.twitter} className={`w-10 h-10 rounded-full border bg-white flex items-center justify-center transition-colors ${item.borderColor} hover:${item.colorText}`}>
                                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 48 48">
                                         <path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" />
                                     </svg>
                                 </a>
                                 <a href={item.github} className={`w-10 h-10 rounded-full border bg-white flex items-center justify-center transition-colors ${item.borderColor} hover:text-gray-800`}>
                                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 48 48">
                                         <path fillRule="evenodd" d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z" clipRule="evenodd" />
                                     </svg>
                                 </a>
                                 <a href={item.linkedin} className={`w-10 h-10 rounded-full border bg-white flex items-center justify-center transition-colors ${item.borderColor} hover:${item.colorText}`}>
                                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 48 48">
                                         <path d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" />
                                     </svg>
                                 </a>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}