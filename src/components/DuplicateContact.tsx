import React from 'react';
import { Search, X, Instagram, Github, Mail, Linkedin } from 'lucide-react';

// NOTE: I'm using icons from 'lucide-react' as placeholders for the social media links.
// The image shows an 'X' (Twitter), Instagram, Github, and two others that are hard to distinguish,
// so I've chosen Mail and LinkedIn as representative icons often found in a footer.

const socialLinks = [
  { icon: X, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Github, href: "#" },
  { icon: Mail, href: "#" }, // Placeholder for the 4th icon
  { icon: Linkedin, href: "#" }, // Placeholder for the 5th icon
];

const navLinks = [
  "Get in Touch",
  "About Us",
  "Our Services",
  "Join Our Team",
];

const DuplicateContact = () => {
  return (
    <footer className="bg-black text-white p-8 md:p-12 lg:p-16 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Navigation Row */}
        <div className="flex flex-wrap justify-between mb-8 pb-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm md:text-base">
            {navLinks.slice(0, 2).map((link) => (
              <a key={link} href="#" className="hover:text-gray-400 transition duration-200">
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm md:text-base mt-4 md:mt-0">
            {navLinks.slice(2, 4).map((link) => (
              <a key={link} href="#" className="hover:text-gray-400 transition duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content Area (Location, Social, Search, Image) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Location, Social, Search */}
          <div className="flex-1 min-w-0 relative z-10">
            <h3 className="text-base font-medium mb-1">Location</h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              1234 Maple Avenue, Suite<br />600, Rivertown, AZ 12345
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mb-8">
              {socialLinks.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="w-8 h-8 rounded-full bg-white text-black hover:bg-gray-200 transition duration-200 flex items-center justify-center"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2.5 pl-10 pr-4 bg-transparent border border-gray-700 rounded-full text-sm focus:outline-none focus:border-gray-500 transition duration-200 placeholder:text-gray-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-80 flex-shrink-0 relative z-10">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" 
                alt="Modern luxury house"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Large "REALWORLD" Background Text */}
        <div className="absolute left-0 bottom-8 overflow-hidden pointer-events-none select-none w-full">
          <p className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-gray-900/20 leading-none tracking-tighter whitespace-nowrap">
            REALWORLD
          </p>
        </div>

        {/* Copyright and Designer Info */}
        <div className="mt-8 pt-4 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500 relative z-10">
          <p className="mb-2 md:mb-0">
            © 2024 RealWORLD
          </p>
          <p>
            Designed by: SahilDesign.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DuplicateContact;