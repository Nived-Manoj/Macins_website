// import { Wrench, Zap, Car, Factory, Building, Cpu, Trees, Settings } from 'lucide-react';

// export default function Services() {
//   const services = [
//     {
//       icon: Wrench,
//       title: 'MEP Contracting',
//       description: 'Complete mechanical, electrical, and plumbing solutions for residential and commercial projects.',
//       color: 'from-teal-600 to-cyan-600',
//     },
//     {
//       icon: Building,
//       title: 'Interior Fit-Out',
//       description: 'Premium interior design and construction services that transform spaces into inspiring environments.',
//       color: 'from-cyan-600 to-blue-600',
//     },
//     {
//       icon: Zap,
//       title: 'Energy Solutions',
//       description: 'Smart energy systems and renewable energy integration for sustainable infrastructure.',
//       color: 'from-teal-600 to-green-600',
//     },
//     {
//       icon: Car,
//       title: 'EV Infrastructure',
//       description: 'Complete electric vehicle charging solutions and infrastructure development.',
//       color: 'from-blue-600 to-teal-600',
//     },
//     {
//       icon: Factory,
//       title: 'Fabrication',
//       description: 'High-quality steel fabrication and manufacturing services for construction projects.',
//       color: 'from-gray-600 to-teal-600',
//     },
//     {
//       icon: Building,
//       title: 'Real Estate',
//       description: 'Property development and real estate investment solutions across key markets.',
//       color: 'from-teal-600 to-cyan-700',
//     },
//     {
//       icon: Cpu,
//       title: 'BMS & Retrofit',
//       description: 'Building management systems and energy-efficient retrofit solutions.',
//       color: 'from-cyan-600 to-teal-600',
//     },
//     {
//       icon: Trees,
//       title: 'Civil Works',
//       description: 'Comprehensive civil engineering and construction services for large-scale projects.',
//       color: 'from-green-600 to-teal-600',
//     },
//   ];

//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="text-center mb-16">
//           <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
//             How We Can Help
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Our Core Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Comprehensive solutions across multiple sectors, delivering excellence in every project we undertake.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

//               <div className="relative z-10">
//                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                   <service.icon size={28} />
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
//                   {service.description}
//                 </p>

//                 <div className="mt-6 inline-flex items-center text-teal-600 font-semibold text-sm group-hover:text-white transition-colors">
//                   Learn More
//                   <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useRef, useEffect, useState } from 'react';
import { Wrench, Zap, Car, Factory, Building, Cpu, Trees, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: Wrench,
      title: 'MEP Contracting',
      description: 'Complete mechanical, electrical, and plumbing solutions for residential and commercial projects.',
      color: 'bg-gradient-to-br from-teal-600 to-cyan-600',
    },
    {
      icon: Building,
      title: 'Interior Fit-Out',
      description: 'Premium interior design and construction services that transform spaces into inspiring environments.',
      color: 'bg-gradient-to-br from-cyan-600 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Energy Solutions',
      description: 'Smart energy systems and renewable energy integration for sustainable infrastructure.',
      color: 'bg-gradient-to-br from-teal-600 to-green-600',
    },
    {
      icon: Car,
      title: 'EV Infrastructure',
      description: 'Complete electric vehicle charging solutions and infrastructure development.',
      color: 'bg-gradient-to-br from-blue-600 to-teal-600',
    },
    {
      icon: Factory,
      title: 'Fabrication',
      description: 'High-quality steel fabrication and manufacturing services for construction projects.',
      color: 'bg-gradient-to-br from-gray-600 to-teal-600',
    },
    {
      icon: Building,
      title: 'Real Estate',
      description: 'Property development and real estate investment solutions across key markets.',
      color: 'bg-gradient-to-br from-teal-600 to-cyan-700',
    },
    {
      icon: Cpu,
      title: 'BMS & Retrofit',
      description: 'Building management systems and energy-efficient retrofit solutions.',
      color: 'bg-gradient-to-br from-cyan-600 to-teal-600',
    },
    {
      icon: Trees,
      title: 'Civil Works',
      description: 'Comprehensive civil engineering and construction services for large-scale projects.',
      color: 'bg-gradient-to-br from-green-600 to-teal-600',
    },
  ];

  // Logic for the background text animation
  useEffect(() => {
    // Set isVisible to true after component mounts to trigger the slide-in animation
    setIsVisible(true);
  }, []);

  // Scrolling functions for manual buttons
  const scrollAmount = 300; // How much to scroll on click

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Autoscroll Logic
  useEffect(() => {
    let scrollInterval: number | undefined;
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleInteraction = () => {
      if (scrollInterval !== undefined) {
        window.clearInterval(scrollInterval);
      }
    };

    // start autoscroll
    scrollInterval = window.setInterval(() => {
      // If we are at the end, scroll back to the start
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll right by a small amount
        container.scrollBy({ left: 1, behavior: 'auto' });
      }
    }, 50); // Adjust interval for desired speed

    // Stop autoscroll when user interacts with the container
    container.addEventListener('mouseenter', handleInteraction);
    container.addEventListener('touchstart', handleInteraction);

    return () => {
      if (scrollInterval !== undefined) {
        window.clearInterval(scrollInterval);
      }
      container.removeEventListener('mouseenter', handleInteraction);
      container.removeEventListener('touchstart', handleInteraction);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section id="services" className="relative py-16 sm:py-20 bg-gray-50 font-sans min-h-screen overflow-hidden">
      
      {/* Large Background Text with Slide-In Animation */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
        <h2
          className="text-[200px] sm:text-[280px] font-black text-[#064e3b] whitespace-nowrap leading-none transition-transform duration-2000"
          style={{
            fontFamily: 'Impact, sans-serif',
            letterSpacing: '10px',
            transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 2s cubic-bezier(0.22, 1, 0.36, 1)' // Custom cubic-bezier for a smooth, spring-like effect
          }}
        >
          REALWORLD
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
            How We Can Help
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions across multiple sectors, delivering excellence in every project we undertake.
          </p>
        </div>

        {/* --- SCROLL WRAPPER (Relative for buttons) --- */}
        <div className="relative">
          
          {/* Scroll Navigation Buttons */}
          <button 
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -mt-10 hidden lg:flex items-center justify-center w-12 h-20 bg-white/70 backdrop-blur-sm rounded-r-xl shadow-xl z-20 
                       text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={30} />
          </button>
          
          <button 
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -mt-10 hidden lg:flex items-center justify-center w-12 h-20 bg-white/70 backdrop-blur-sm rounded-l-xl shadow-xl z-20 
                       text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            <ChevronRight size={30} />
          </button>

          {/* --- HORIZONTAL SCROLL CONTAINER --- */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-8 overflow-x-auto py-4 px-2 -mx-2 lg:px-0 lg:-mx-0 
                       scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-gray-100"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#4c929a #f3f4f6' }} 
          >
            {services.map((service, index) => (
              <div
                key={index}
                // Awesome Card Styling Adaptation
                className="group relative min-w-[20rem] w-[20rem] flex-shrink-0 font-sans p-7 cursor-pointer 
                           bg-white rounded-[32px] overflow-hidden 
                           shadow-2xl shadow-gray-300/50 
                           transition-all duration-500 transform hover:scale-[1.03] hover:shadow-teal-500/30"
              >
                {/* Icon Circle */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.color} text-white mb-6 p-2 shadow-lg`}>
                  <service.icon size={32} strokeWidth={2.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6 h-16 line-clamp-3">
                  {service.description}
                </p>
                
                {/* Call to Action Link */}
                <a 
                  href="#" 
                  className="text-base font-bold text-teal-600 group-hover:text-gray-900 flex items-center transition-colors duration-200"
                >
                  Discover Solutions
                  {/* Arrow Icon */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    height={18} 
                    width={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path 
                      fill="currentColor" 
                      d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z" 
                    />
                  </svg>
                </a>
                
                {/* Decorative Element on hover */}
                <div 
                  className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-10 
                              rounded-[32px] transition-opacity duration-500 pointer-events-none 
                              ${service.color} blur-3xl`}
                />
              </div>
            ))}
          </div>
          {/* --- END HORIZONTAL SCROLL CONTAINER --- */}
        </div>
        {/* --- END SCROLL WRAPPER --- */}
      </div>
    </section>
  );
}