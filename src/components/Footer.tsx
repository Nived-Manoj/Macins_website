import React from 'react';
import { Building2, Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const quickLinks = [
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    'MEP Contracting',
    'Interior Fit-Out',
    'Energy Solutions',
    'EV Infrastructure'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MACINS GROUP</h3>
                <p className="text-sm text-slate-400">Building Excellence</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Transforming visions into reality across construction, energy, and technology sectors with over a decade of excellence.
            </p>
            
            <div className="flex space-x-4">
              <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-slate-300 hover:text-amber-400 transition-colors duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-slate-300">
                  Business Bay, Dubai<br />
                  United Arab Emirates
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <p className="text-slate-300">+971 4 123 4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <p className="text-slate-300">info@macinsgroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Macins Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;