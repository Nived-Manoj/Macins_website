


import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();


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
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Austin, TX",
      location: "Hill Country",
      specs: "4 beds, 3 baths, 2,400 sq ft",
      price: "$1,450,000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Chicago, IL",
      location: "Lincoln Park",
      specs: "5 beds, 4 baths, 3,200 sq ft",
      price: "$1,750,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Seattle, WA",
      location: "Queen Anne",
      specs: "3 beds, 2 baths, 2,100 sq ft",
      price: "$1,200,000",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Austin, TX",
      location: "Hill Country",
      specs: "4 beds, 3 baths, 2,400 sq ft",
      price: "$1,450,000",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
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
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
    }
  ];

  return (
    <section id="services" className="relative py-16 sm:py-20 bg-gray-50 font-sans overflow-hidden"
      style={{
        // backgroundColor: "red"
      }}>

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

      <div className="container mx-auto relative z-10"
        style={{
          // backgroundColor: "yellow"
        }}>
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
          <div className="bg-gray-50 "
            style={{
              // backgroundColor: "green",
              width: "100%"
            }}>

            {/* KEY FIX 1: 'items-start' 
          This prevents the other cards from stretching vertically when one expands.
      */}
        <div
  ref={scrollContainerRef}
  className="flex items-start overflow-x-auto py-12 scrollbar-hide"
>
  {listings.map((item, index) => (
    <div
      key={index}
      className="group min-w-[300px] w-[300px] flex-shrink-0 cursor-pointer 
        transition-all duration-500 ease-in-out
        hover:z-10"
      style={{
        padding: "10px"
      }}
    >
      <div
        className="relative bg-white rounded-3xl overflow-visible
          shadow-lg hover:shadow-2xl 
          transition-all duration-500 ease-in-out
          group-hover:scale-[1.03]
          group-hover:-translate-y-12"
        style={{
          backgroundColor: "white",
          border: "1px solid grey",
          padding: "10px"
        }}
      >
        {/* Image Area */}
        <div className="relative h-64 overflow-hidden rounded-[20px]">
          <img
            style={{
              borderRadius: "20px"
            }}
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        {/* Content Area */}
        <div className="pt-4 px-2">
          {/* Title - Always Visible */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <h3 className="text-xl font-bold text-gray-900">
              {item.title}
            </h3>
          </div>
          
          {/* Hidden Content - Expands on hover/tap */}
          <div
            className="max-h-0 opacity-0 overflow-hidden 
              group-hover:max-h-[300px] group-hover:opacity-100 
              transition-all duration-500 ease-in-out"
          >
            <div className="mt-4 flex flex-col">
              <p className="text-sm text-gray-500 mb-4">
                {item.specs} <br />
                <span className="text-xs text-gray-400 font-light">
                  Contemporary style with spacious backyard
                </span>
              </p>

              <button
                onClick={() => navigate(`/property/${index}`)}
                className="w-full mt-4 bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 text-sm"
              >
                EXPLORE MORE
              </button>
            </div>
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