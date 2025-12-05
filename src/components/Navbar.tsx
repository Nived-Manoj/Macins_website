



// import { useState, useEffect } from 'react';
// import { Menu, X, Phone } from 'lucide-react';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Services', href: '#services' },
//     { name: 'Portfolio', href: '#portfolio' },
//     { name: 'Sustainability', href: '#sustainability' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b-2 border-[#dfd9cd] py-4' : 'bg-gradient-to-b from-[#465a50]/80 to-transparent backdrop-blur-sm py-6'
//       }`}
//     >
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <div className={`text-2xl font-bold transition-all duration-300 ${
//               isScrolled ? 'text-[#465a50]' : 'text-white'
//             }`}>
//               <span className="italic">Macins</span> <span className={`${isScrolled ? 'text-[#465a50]' : 'text-[#e3ff1e]'} transition-colors duration-300`}>Group</span>
//             </div>
//           </div>

//           <div className="hidden lg:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={`font-medium transition-all duration-300 relative group ${
//                   isScrolled ? 'text-[#465a50] hover:text-[#e3ff1e]' : 'text-white hover:text-[#e3ff1e]'
//                 }`}
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e3ff1e] group-hover:w-full transition-all duration-300"></span>
//               </a>
//             ))}
//           </div>

//           <div className="hidden lg:flex items-center space-x-4">
//             <a
//               href="tel:+97123123456"
//               className={`group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-semibold shadow-lg ${
//                 isScrolled
//                   ? 'bg-[#465a50] text-white hover:bg-[#e3ff1e] hover:text-[#465a50] hover:shadow-xl'
//                   : 'bg-[#e3ff1e] text-[#465a50] hover:bg-white hover:shadow-2xl'
//               }`}
//             >
//               <Phone size={18} className="group-hover:rotate-12 transition-transform duration-300" />
//               <span>(971) 23 123 456</span>
//             </a>
//           </div>

//           <button
//             className={`lg:hidden transition-colors duration-300 ${isScrolled ? 'text-[#465a50]' : 'text-white'}`}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {isMobileMenuOpen && (
//           <div className={`lg:hidden mt-6 pb-6 space-y-4 ${
//             isScrolled ? 'bg-white/50' : 'bg-[#465a50]/30'
//           } backdrop-blur-md rounded-2xl p-6 border-2 border-[#dfd9cd]`}>
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={`block font-medium transition-all duration-300 hover:translate-x-2 ${
//                   isScrolled ? 'text-[#465a50] hover:text-[#e3ff1e]' : 'text-white hover:text-[#e3ff1e]'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </a>
//             ))}
//             <a
//               href="tel:+97123123456"
//               className="flex items-center space-x-2 px-6 py-3 bg-[#e3ff1e] text-[#465a50] rounded-full w-full justify-center font-semibold hover:bg-[#465a50] hover:text-white transition-all duration-300 shadow-lg"
//             >
//               <Phone size={18} />
//               <span>(971) 23 123 456</span>
//             </a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }


import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-4' 
          : 'bg-gradient-to-b from-[#064e3b]/90 to-transparent backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-gradient-to-br from-[#064e3b] to-[#059669]' : 'bg-white/20'
            }`}>
              <span className="text-white font-black text-xl">R</span>
            </div>
            <div className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-[#064e3b]' : 'text-white'
            }`}>
              <span style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}>Macins Group</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-5 py-2 font-semibold transition-all duration-300 relative group rounded-lg ${
                  isScrolled 
                    ? 'text-[#57534e] hover:text-[#059669] hover:bg-[#f0fdf4]' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300 ${
                  isScrolled ? 'bg-[#059669]' : 'bg-white'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+97123123456"
              className={`group flex items-center space-x-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-semibold ${
                isScrolled
                  ? 'text-[#059669] hover:bg-[#f0fdf4]'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <Phone size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm">(971) 23 123 456</span>
            </a>
            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-xl transition-all duration-300 font-bold shadow-lg transform hover:scale-105 ${
                isScrolled
                  ? 'bg-[#059669] text-white hover:bg-[#064e3b] hover:shadow-xl'
                  : 'bg-white text-[#064e3b] hover:bg-[#f0fdf4] hover:shadow-2xl'
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-[#064e3b] hover:bg-[#f0fdf4]' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className={`lg:hidden mt-6 rounded-2xl overflow-hidden transition-all duration-300 ${
              isScrolled ? 'bg-white shadow-2xl' : 'bg-white/95 backdrop-blur-lg shadow-2xl'
            }`}
            style={{
              animation: 'slideDown 0.3s ease-out'
            }}
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-[#064e3b] font-semibold rounded-xl hover:bg-[#f0fdf4] hover:text-[#059669] transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    animation: `fadeInLeft 0.3s ease-out ${index * 0.1}s both`
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="px-6 pb-6 space-y-3">
              <a
                href="tel:+97123123456"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#f0fdf4] text-[#059669] rounded-xl font-semibold hover:bg-[#059669] hover:text-white transition-all duration-300 shadow-md"
              >
                <Phone size={18} />
                <span>(971) 23 123 456</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3 bg-[#059669] text-white rounded-xl font-bold hover:bg-[#064e3b] transition-all duration-300 shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}