"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/#programs' },
  { name: 'Projects', href: '/#impact' },
  { name: 'Team & About', href: '/#about' },
  { name: 'Partner With Us', href: '/#partner' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Changed lg:px-8 to xl:px-8 to match our new breakpoint */}
      <nav className="flex items-center justify-between p-4 xl:px-8 max-w-[92%] mx-auto" aria-label="Global">
        
        {/* Logo Area */}
        <div className="flex xl:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <img 
              src="/images/logo.png" 
              alt="Empowered STEM Youth Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain group-hover:scale-105 transition-transform duration-200"
            />
            {/* The brand text stays hidden until XL screens */}
            <span className="text-xl font-extrabold tracking-tight text-brand-dark group-hover:text-brand-blue transition-colors hidden xl:block">
              Empowered<span className="text-brand-blue">STEAM</span>Youth
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button - Now stays visible until XL screens */}
        <div className="flex xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation - Now only shows on XL screens */}
        <div className="hidden xl:flex xl:gap-x-8">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-base font-bold leading-6 text-gray-600 hover:text-brand-blue transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA (Support Us) - Now only shows on XL screens */}
        <div className="hidden xl:flex xl:flex-1 xl:justify-end">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-blue-700 transition-all active:scale-95"
          >
            Support Us
            <HeartIcon className="w-5 h-5" />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-0 inset-x-0 bg-white shadow-lg border-b border-gray-200"
          >
            <div className="flex items-center justify-between p-4">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
                <img 
                  src="/images/logo.png" 
                  alt="Empowered STEAM Youth Logo" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-lg font-extrabold text-brand-dark">
                  Empowered<span className="text-brand-blue">STEAM</span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-2 space-y-2 px-4 pb-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="-mx-3 mt-4 flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-3 py-3 text-base font-semibold leading-7 text-white hover:bg-blue-700"
              >
                Support Us <HeartIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}