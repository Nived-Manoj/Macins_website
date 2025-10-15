import { ArrowRight, Phone } from 'lucide-react';
import heroBg from '../assets/modern-minimalist-office.jpg';


export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/60 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="text-sm font-semibold tracking-widest uppercase text-cyan-200">
                Design • Build • Inspire
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                From Outdated To
                <span className="block text-cyan-300">Outstanding</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 max-w-xl">
                Building tomorrow's infrastructure today. Macins Group delivers excellence across construction, energy, technology, and real estate sectors throughout the Middle East and beyond.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+97123123456"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all border border-white/30"
              >
                <Phone size={20} />
                <span className="font-semibold">(971) 23 123 456</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition-all font-semibold"
              >
                <span>Request a Quote</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src= {heroBg}
                    alt="Modern interior"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Modern kitchen"
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
