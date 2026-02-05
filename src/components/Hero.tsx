

import { ArrowRight, Phone } from 'lucide-react';
import { useState } from 'react';
import ContactPopup from './ContactPopup';
import video1 from "../assets/home_video1.mp4";

export default function Hero() {
      const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50">
{/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video1}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/70 via-stone-50/50 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm font-semibold tracking-widest uppercase text-emerald-700">
                Design • Build • Inspire
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-emerald-950">
                Transforming Ordinary
                <span className="block text-emerald-700">Into Extraordinary</span>
              </h1>
              <p className="text-lg lg:text-xl text-stone-700 max-w-xl">
                Building tomorrow’s infrastructure today. Macins Group delivers excellence across construction, energy, technology, and real estate sectors throughout the Middle East and beyond.              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <a
                href="tel:+97123123456"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-emerald-700 rounded-full hover:bg-stone-50 transition-all border-2 border-stone-200 shadow-md"
              >
                <Phone size={20} />
                <span className="font-semibold">(971) 55 456 0554</span>
              </a> */}
              <button
               onClick={() => setIsPopupOpen(true)}
                // href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-all font-semibold shadow-lg"
              >
                <span>Get Consultation</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            {/* <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Modern interior"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Modern kitchen"
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            </div> */}

            {/* Decorative organic shapes */}
            {/* <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-300 rounded-full opacity-20 blur-3xl"></div> */}
          </div>
        </div>
      </div>

      {/* Organic wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.3" />
        </svg>
      </div>
            <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      
    </section>
  );
}

