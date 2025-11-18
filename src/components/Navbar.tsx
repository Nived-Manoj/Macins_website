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
//         isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
//       }`}
//     >
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <div className={`text-2xl font-bold transition-colors ${
//               isScrolled ? 'text-teal-700' : 'text-white'
//             }`}>
//               <span className="italic">Macins</span> Group
//             </div>
//           </div>

//           <div className="hidden lg:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={`font-medium transition-colors hover:text-teal-600 ${
//                   isScrolled ? 'text-gray-700' : 'text-white'
//                 }`}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           <div className="hidden lg:flex items-center space-x-4">
//             <a
//               href="tel:+97123123456"
//               className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
//                 isScrolled
//                   ? 'bg-teal-600 text-white hover:bg-teal-700'
//                   : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
//               }`}
//             >
//               <Phone size={18} />
//               <span>(971) 23 123 456</span>
//             </a>
//           </div>

//           <button
//             className={`lg:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-6 pb-6 space-y-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={`block font-medium transition-colors ${
//                   isScrolled ? 'text-gray-700' : 'text-white'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </a>
//             ))}
//             <a
//               href="tel:+97123123456"
//               className="flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg w-full justify-center"
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
import { Menu, X, Phone } from 'lucide-react';

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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b-2 border-[#dfd9cd] py-4' : 'bg-gradient-to-b from-[#465a50]/80 to-transparent backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-[#465a50]' : 'text-white'
            }`}>
              <span className="italic">Macins</span> <span className={`${isScrolled ? 'text-[#465a50]' : 'text-[#e3ff1e]'} transition-colors duration-300`}>Group</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled ? 'text-[#465a50] hover:text-[#e3ff1e]' : 'text-white hover:text-[#e3ff1e]'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e3ff1e] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+97123123456"
              className={`group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-semibold shadow-lg ${
                isScrolled
                  ? 'bg-[#465a50] text-white hover:bg-[#e3ff1e] hover:text-[#465a50] hover:shadow-xl'
                  : 'bg-[#e3ff1e] text-[#465a50] hover:bg-white hover:shadow-2xl'
              }`}
            >
              <Phone size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>(971) 23 123 456</span>
            </a>
          </div>

          <button
            className={`lg:hidden transition-colors duration-300 ${isScrolled ? 'text-[#465a50]' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-6 pb-6 space-y-4 ${
            isScrolled ? 'bg-white/50' : 'bg-[#465a50]/30'
          } backdrop-blur-md rounded-2xl p-6 border-2 border-[#dfd9cd]`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block font-medium transition-all duration-300 hover:translate-x-2 ${
                  isScrolled ? 'text-[#465a50] hover:text-[#e3ff1e]' : 'text-white hover:text-[#e3ff1e]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+97123123456"
              className="flex items-center space-x-2 px-6 py-3 bg-[#e3ff1e] text-[#465a50] rounded-full w-full justify-center font-semibold hover:bg-[#465a50] hover:text-white transition-all duration-300 shadow-lg"
            >
              <Phone size={18} />
              <span>(971) 23 123 456</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
