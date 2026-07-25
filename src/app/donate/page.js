import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CurrencyDollarIcon, DevicePhoneMobileIcon, BuildingLibraryIcon, GlobeAltIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Donate | Empowered STEM Youth',
  description: 'Support our mission to bring robotics and tech education to rural communities.',
};

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/30 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Fuel the Future of Innovation
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            100% of your public donations go directly toward purchasing hardware, funding rural outreach logistics, and developing curriculums that transform lives.
          </p>
        </div>
      </section>

      {/* Impact Tiers */}
      <section className="py-16 max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-brand-blue mb-4">
              <CurrencyDollarIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Hardware Kits</h3>
            <p className="text-gray-600 text-sm">Provides Arduinos, ESP32 nodes, and sensors for hands-on student learning.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 text-center border-t-4 border-brand-pink md:border-t-0 md:-translate-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-50 text-brand-pink mb-4">
              <GlobeAltIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Rural Outreach</h3>
            <p className="text-gray-600 text-sm">Covers transport and logistics to bring our workshops directly to underserved communities.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-50 text-brand-purple mb-4">
              <BuildingLibraryIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Curriculum</h3>
            <p className="text-gray-600 text-sm">Funds the development of accessible, high-quality AI and programming educational materials.</p>
          </div>
        </div>
      </section>

      {/* Payment Details Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-dark">How to Send Your Support</h2>
          <p className="mt-4 text-gray-600">Choose the most convenient method for you. We deeply appreciate every contribution.</p>
        </div>

        <div className="space-y-8">
          
          {/* Mobile Money Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm ring-1 ring-gray-200 flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-shrink-0 p-4 bg-brand-yellow/10 rounded-2xl">
              <DevicePhoneMobileIcon className="w-10 h-10 text-brand-yellow" />
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Mobile Money (MoMo)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Network</p>
                  <p className="text-lg font-medium text-gray-900">MTN Mobile Money</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Registered Name</p>
                  <p className="text-lg font-medium text-gray-900">Empowered STEAM Youth</p>
                </div>
                <div className="sm:col-span-2 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">MoMo Number</p>
                  <p className="text-2xl font-bold text-brand-blue tracking-widest">054 477 5671</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Transfer Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm ring-1 ring-gray-200 flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-shrink-0 p-4 bg-brand-blue/10 rounded-2xl">
              <BuildingLibraryIcon className="w-10 h-10 text-brand-blue" />
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Direct Bank Transfer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Bank Name</p>
                  <p className="text-lg font-medium text-gray-900">Zenith Bank</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Account Name</p>
                  <p className="text-lg font-medium text-gray-900">Empowered STEM Youth</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Branch</p>
                  <p className="text-lg font-medium text-gray-900">Enter Branch Info</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Swift / BIC Code</p>
                  <p className="text-lg font-medium text-gray-900">Enter SWIFT for Int. Transfers</p>
                </div>
                <div className="sm:col-span-2 p-4 bg-gray-50 rounded-xl border border-gray-100 mt-2">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Account Number</p>
                  <p className="text-2xl font-bold text-brand-dark tracking-widest">XXXX XXXX XXXX XXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Physical Hardware & Equipment Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm ring-1 ring-gray-200 flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-shrink-0 p-4 bg-brand-pink/10 rounded-2xl">
              <ArchiveBoxIcon className="w-10 h-10 text-brand-pink" />
            </div>
            <div className="flex-1 w-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-dark">Hardware & Equipment</h3>
                <p className="mt-2 text-gray-600 text-base leading-relaxed">
                  We gladly accept physical donations of new or lightly used laptops, Arduinos, ESP32 nodes, ATtiny85 chips, test equipment, and other electronics tools that students can use for hands-on learning.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Attention To</p>
                  <p className="text-lg font-medium text-gray-900">Lead Coordinator, Empowered STEM Youth</p>
                </div>
                <div className="sm:col-span-2 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Shipping Address</p>
                  <p className="text-lg font-medium text-brand-dark leading-relaxed">
                    Empowered STEM Youth<br />
                    Akosombo<br />
                    Atimpoku Police station<br />
                    Asuogyaman, Eastern Region<br />
                    Ghana
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}