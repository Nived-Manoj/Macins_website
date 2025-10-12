import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="italic text-teal-400">Macins</span> Group
            </div>
            <p className="text-gray-400 mb-6">
              Building tomorrow's infrastructure today. Excellence across construction, energy, and technology sectors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-teal-400 transition-colors">Portfolio</a></li>
              <li><a href="#sustainability" className="text-gray-400 hover:text-teal-400 transition-colors">Sustainability</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">MEP Contracting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Interior Fit-Out</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Energy Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">EV Infrastructure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Real Estate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-teal-400" />
                <span className="text-gray-400">Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-teal-400" />
                <a href="tel:+97123123456" className="text-gray-400 hover:text-teal-400 transition-colors">
                  +971 23 123 456
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-teal-400" />
                <a href="mailto:info@macinsgroup.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                  info@macinsgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Macins Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
