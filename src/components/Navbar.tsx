import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import WhiteLogo from "../assets/White.png";
import DarkLogo from "../assets/Black.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", scrollTo: "home" },
    { name: "About", scrollTo: "about" },
    { name: "Services", scrollTo: "services" },
    { name: "Portfolio", route: "/projectsection" },
    { name: "Verticals", route: "/verticalsection" },

    { name: "News", route: "/newspage" },
        { name: "Blogs", route: "/blogs" },

    { name: "Contact", scrollTo: "contact" },
  ];

  const handleNavigation = (link) => {
    if (link.route) {
      navigate(link.route);
    } else if (link.scrollTo) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(link.scrollTo)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document
          .getElementById(link.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-gradient-to-b from-[#064e3b]/90 to-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <img
            src={isScrolled ? DarkLogo : WhiteLogo}
            alt="Logo"
            className="h-14 cursor-pointer"
            style={{
              height: "100px"
            }}
            onClick={() => navigate("/")}
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link)}
                className={`font-semibold transition ${
                  isScrolled
                    ? "text-gray-700 hover:text-green-600"
                    : "text-white hover:text-green-300"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+971554560554"
              className={`flex items-center gap-2 ${
                isScrolled ? "text-green-600" : "text-white"
              }`}
            >
              <Phone size={18} /> (971) 55 456 0554
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center px-6 py-3 bg-[#059669] text-white rounded-xl font-bold hover:bg-[#064e3b] transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden z-50 transition-colors ${
              isMobileMenuOpen 
                ? "text-white" 
                : isScrolled 
                ? "text-gray-900" 
                : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-[#059669] to-[#064e3b] z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          {/* Menu Items */}
          <div className="flex-1 space-y-2">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link)}
                className="group w-full flex items-center justify-between px-6 py-4 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                style={{
                  animation: isMobileMenuOpen
                    ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                    : "none",
                }}
              >
                <span className="text-lg">{link.name}</span>
                <ChevronRight
                  size={20}
                  className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all"
                />
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-4 border-t border-white/20 pt-6">
            <a
              href="tel:+971554560554"
              className="flex items-center gap-3 text-white hover:text-green-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs opacity-70">Call Us</div>
                <div className="font-semibold">(971) 55 456 0554</div>
              </div>
            </a>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-4 bg-white text-[#059669] rounded-xl font-bold hover:shadow-2xl transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}