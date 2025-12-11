import { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#064e3b] text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#059669] to-[#10b981] flex items-center justify-center">
                <span className="text-white font-black text-xl">R</span>
              </div>
              <div className="text-2xl font-bold">
                <span style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}>MACINS GROUP</span>
              </div>
            </div>
            <p className="text-[#d1fae5] mb-6 leading-relaxed">
              Building tomorrow's infrastructure today. Excellence across construction, energy, and technology sectors.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#10b981] transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#10b981] transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#10b981] transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#10b981] transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-[#d1fae5] hover:text-[#fde68a] transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#fde68a] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#d1fae5] hover:text-[#fde68a] transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#fde68a] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-[#d1fae5] hover:text-[#fde68a] transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#fde68a] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#sustainability" className="text-[#d1fae5] hover:text-[#fde68a] transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#fde68a] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#d1fae5] hover:text-[#fde68a] transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#fde68a] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#d1fae5] hover:text-[#fde68a] transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#fde68a] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Property Buying
                </a>
              </li>
              <li>
                <a href="#" className="text-[#d1fae5] hover:text-[#fde68a] transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#fde68a] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Property Selling
                </a>
              </li>
              <li>
                <a href="#" className="text-[#d1fae5] hover:text-[#fde68a] transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#fde68a] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Property Renting
                </a>
              </li>
              <li>
                <a href="#" className="text-[#d1fae5] hover:text-[#fde68a] transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#fde68a] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Investment Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-[#d1fae5] hover:text-[#fde68a] transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#fde68a] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Property Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.6s'
            }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <a
                  href="https://maps.app.goo.gl/Tks1PJ1xiwPKvDLD8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#10b981] transition-all duration-300"
                >
                  <MapPin size={20} className="text-[#10b981] group-hover:text-white transition-colors duration-300" />
                </a>

                <span className="text-[#d1fae5] leading-relaxed pt-2">Platinum Business Tower - Baghdad Street - opp. Millenium school - Dubai - United Arab Emirates</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#10b981] transition-all duration-300">
                  <Phone size={20} className="text-[#10b981] group-hover:text-white transition-colors duration-300" />
                </div>
                <a href="tel:+971554560554" className="text-[#d1fae5] hover:text-[#fde68a] transition-colors duration-300">
                  +971 55 456 0554
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#10b981] transition-all duration-300">
                  <Mail size={20} className="text-[#10b981] group-hover:text-white transition-colors duration-300" />
                </div>
                <a href="mailto:info@realworld.com" className="text-[#d1fae5] hover:text-[#fde68a] transition-colors duration-300">
                  Info@macins.ae
                </a>
                <a href="mailto:support@macins.ae" className="text-[#d1fae5] hover:text-[#fde68a] transition-colors duration-300">
                  support@macins.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">






        </div>

        {/* Bottom Bar */}
        <div
          className="border-t border-white/10 pt-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out 1s'
          }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-[#d1fae5] text-sm">
              © {currentYear} RealWorld. All rights reserved. Designed with ❤️ by
              <a href="https://codynamixsoftwaresolutions.com" target="_blank"
                className="text-decoration: none; color: inherit; font-weight: 600;"
                style={{
                  paddingLeft: "5px",
                }}>
                Codynamix Software Solutions
              </a>.
            </p>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#d1fae5] hover:text-[#fde68a] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-[#d1fae5] hover:text-[#fde68a] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-[#d1fae5] hover:text-[#fde68a] transition-colors duration-300">Sitemap</a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[#059669] to-[#10b981] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-50 animate-bounce"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
}