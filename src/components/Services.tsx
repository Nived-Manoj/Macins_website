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
    // scrollInterval = window.setInterval(() => {
    //   // If we are at the end, scroll back to the start
    //   if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
    //     container.scrollTo({ left: 0, behavior: 'smooth' });
    //   } else {
    //     // Scroll right by a small amount
    //     container.scrollBy({ left: 1, behavior: 'auto' });
    //   }
    // }, 50); // Adjust interval for desired speed

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

  const listings = [
    {
      title: "Miami, FL",
      location: "South Beach",
      specs: "3 beds, 2 baths, 1,900 sq ft",
      price: "$895,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Austin, TX",
      location: "Hill Country",
      specs: "4 beds, 3 baths, 2,400 sq ft", // Detailed specs
      price: "$1,450,000",
      image: "https://images.unsplash.com/photo-1600596542815-e32cb141d3d1?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Chicago, IL",
      location: "Lincoln Park",
      specs: "5 beds, 4 baths, 3,200 sq ft",
      price: "$1,750,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Seattle, WA",
      location: "Queen Anne",
      specs: "3 beds, 2 baths, 2,100 sq ft",
      price: "$1,200,000",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Austin, TX",
      location: "Hill Country",
      specs: "4 beds, 3 baths, 2,400 sq ft", // Detailed specs
      price: "$1,450,000",
      image: "https://images.unsplash.com/photo-1600596542815-e32cb141d3d1?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Chicago, IL",
      location: "Lincoln Park",
      specs: "5 beds, 4 baths, 3,200 sq ft",
      price: "$1,750,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Seattle, WA",
      location: "Queen Anne",
      specs: "3 beds, 2 baths, 2,100 sq ft",
      price: "$1,200,000",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=1000",
    }
  ];

  return (
    <section id="services" className="relative py-16 sm:py-20 bg-gray-50 font-sans overflow-hidden">

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
          {/* <button 
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -mt-10 hidden lg:flex items-center justify-center w-12 h-20 bg-white/70 backdrop-blur-sm rounded-r-xl shadow-xl z-20 
                       text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={30} />
          </button> */}

          {/* <button 
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -mt-10 hidden lg:flex items-center justify-center w-12 h-20 bg-white/70 backdrop-blur-sm rounded-l-xl shadow-xl z-20 
                       text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            <ChevronRight size={30} />
          </button> */}

          {/* --- HORIZONTAL SCROLL CONTAINER --- */}
          <div className="w-full bg-gray-50 p-10">

            {/* KEY FIX 1: 'items-start' 
          This prevents the other cards from stretching vertically when one expands.
      */}
            <div
              ref={scrollContainerRef}
              className="flex items-start space-x-6 overflow-x-auto py-12 px-4 scrollbar-hide"
            >
              {listings.map((item, index) => (
                <div
                  key={index}
                  className="group relative min-w-[280px] w-[280px] flex-shrink-0 cursor-pointer 
               bg-white rounded-3xl overflow-hidden 
               shadow-lg hover:shadow-2xl 
               transition-all duration-500 ease-in-out
               hover:w-[320px] hover:min-w-[320px] hover:-translate-y-2"
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                    border: "1px solid grey"
                  }}
                >
                  {/* Image Area */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      style={{
                        backgroundColor: "white",
                        borderRadius: "20px"
                      }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content Area - Added padding-top (pt-4) for the Title */}
                  <div className="pt-4 px-2">

                    {/* Title - Always Visible */}
                   
                    <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between"

                    }}>
                       <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                        <div className="mb-1">
                          <p className="text-xl font-bold text-gray-900">{item.price}</p>
                        </div>
                    </div>

                    {/* Hidden Content 
         1. Removed the outer 'p-6' wrapper div which caused the whitespace.
         2. Increased max-h-20 to max-h-[300px] so the content fits when expanded.
      */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out">

                      {/* Added a margin-top here so space only appears when expanded */}
                      <div className="mt-4 flex flex-col">
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                          {item.specs} <br />
                          <span className="text-xs text-gray-400 font-light">Contemporary style with spacious backyard</span>
                        </p>

                        <div className="mb-1">
                          <p className="text-xl font-bold text-gray-900">{item.price}</p>
                        </div>

                        <button className="w-full mt-4 bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 text-sm">
                          EXPLORE MORE
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* --- END HORIZONTAL SCROLL CONTAINER --- */}
        </div>
        {/* --- END SCROLL WRAPPER --- */}
      </div>
    </section>
  );
}