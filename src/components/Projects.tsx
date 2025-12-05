import React, { useState, useEffect } from 'react';

// Sample Icons for property features
const BedIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-9a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2zm1-9h6m4-2a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const BathIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 1l-2 2m2-2l2 2m7-2l2 2m-2-2l-2 2M9 13h6m-3-6v6" />
  </svg>
);

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the entrance animations on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const properties = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Austin, TX',
      price: '$1,450,000',
      beds: 4,
      baths: 3,
      sqft: '2,400 sq ft',
      description: 'Contemporary style with spacious backyard in a desirable neighborhood.',
      featured: false
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Miami, FL',
      price: '$895,000',
      beds: 3,
      baths: 2,
      sqft: '1,800 sq ft',
      description: 'Modern luxury condo with breathtaking ocean views and private beach access.',
      featured: false
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Austin, TX',
      price: '$1,450,000',
      beds: 4,
      baths: 3,
      sqft: '2,400 sq ft',
      description: 'A contemporary masterpiece featuring smart home technology and a heated pool.',
      featured: true // This property will use the larger, detailed card layout
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Chicago, IL',
      price: '$1,750,000',
      beds: 5,
      baths: 4,
      sqft: '3,200 sq ft',
      description: 'A spacious family home with stunning mountain views and an open floor plan.',
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f4] relative overflow-hidden">
      {/* Large Background Text with Slide-In Animation */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <h2
          className="text-[280px] font-black text-[#064e3b] whitespace-nowrap leading-none"
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
        {/* Header Title with Fade-In Animation */}
        <div
          className="flex justify-between items-center mb-16 text-sm text-[#78716c]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.8s ease-out 0.2s' // Delayed fade-in
          }}
        >
          <h2 className="text-3xl font-extrabold text-[#064e3b] uppercase tracking-widest">
            Latest Projects
          </h2>
          <span className="text-lg font-semibold">
            View All Properties →
          </span>
        </div>

        {/* Properties Carousel */}
        <div className="relative">
          <div 
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {properties.map((property, index) => (
              <div
                key={property.id}
                className={`flex-shrink-0 snap-center ${property.featured ? 'w-[500px] lg:w-[500px]' : 'w-[320px] lg:w-[320px]'}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(80px) scale(0.8)',
                  // Staggered animation: each card appears slightly later
                  transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.15 + 0.3}s`
                }}
              >
                {/* Card */}
                <div className="bg-white rounded-[32px] overflow-hidden shadow-xl transition-all duration-500 h-full transform hover:scale-[1.01] hover:shadow-2xl">
                  {/* Image Container with Hover Zoom */}
                  <div className="relative overflow-hidden" style={{ height: property.featured ? '520px' : '400px' }}>
                    <img
                      src={property.image}
                      alt={property.location}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" // Image zoom on hover
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    {/* Featured Tag (only for featured card) */}
                    {property.featured && (
                      <span className="absolute top-6 left-6 px-4 py-2 bg-white text-[#064e3b] font-bold rounded-full text-sm shadow-md animate-pulse">
                        FEATURED LISTING
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Standard Card Layout */}
                    {!property.featured ? (
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-extrabold text-[#064e3b] leading-tight">
                            {property.location}
                          </h3>
                          <span className="text-2xl font-bold text-[#064e3b] whitespace-nowrap">
                            {property.price}
                          </span>
                        </div>
                        <p className="text-[#78716c] text-sm mb-4">{property.description}</p>
                        <div className="flex space-x-4 text-[#78716c] text-sm font-semibold">
                          <div className="flex items-center">
                            <BedIcon className="w-4 h-4 mr-1 text-[#064e3b]" />
                            <span>{property.beds} Beds</span>
                          </div>
                          <div className="flex items-center">
                            <BathIcon className="w-4 h-4 mr-1 text-[#064e3b]" />
                            <span>{property.baths} Baths</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-[#064e3b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0 0h-4m4-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 4l-5-5" /></svg>
                            <span>{property.sqft}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Featured Card Layout (Larger, more detailed) */
                      <div>
                        <h3 className="text-3xl font-extrabold text-[#064e3b] mb-4">
                          {property.location}
                        </h3>
                        <p className="text-[#78716c] text-lg mb-4">
                          {property.description}
                        </p>
                        <div className="grid grid-cols-3 gap-4 text-[#78716c] mb-6">
                            <div className="flex flex-col items-center p-3 border border-[#e7e5e4] rounded-xl">
                                <BedIcon className="w-6 h-6 mb-1 text-[#064e3b]" />
                                <span className="font-bold text-[#064e3b]">{property.beds}</span>
                                <span className="text-xs">BEDS</span>
                            </div>
                            <div className="flex flex-col items-center p-3 border border-[#e7e5e4] rounded-xl">
                                <BathIcon className="w-6 h-6 mb-1 text-[#064e3b]" />
                                <span className="font-bold text-[#064e3b]">{property.baths}</span>
                                <span className="text-xs">BATHS</span>
                            </div>
                            <div className="flex flex-col items-center p-3 border border-[#e7e5e4] rounded-xl">
                                <svg className="w-6 h-6 mb-1 text-[#064e3b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0 0h-4m4-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 4l-5-5" /></svg>
                                <span className="font-bold text-[#064e3b]">{property.sqft}</span>
                                <span className="text-xs">AREA</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-4xl font-extrabold text-[#064e3b]">
                            {property.price}
                          </span>
                        </div>
                        <button className="w-full bg-[#064e3b] text-white py-4 rounded-full font-bold text-lg hover:bg-[#059669] transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                          EXPLORE MORE
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Social Icons with Fade-In Animation */}
        <div
          className="flex justify-center gap-6 mt-16 text-[#78716c]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease-out 1.2s' // Heavily delayed fade-in for a grand finale
          }}
        >
          {/* Twitter Icon */}
          <a href="#" aria-label="Twitter" className="hover:text-[#064e3b] transition-colors duration-300 transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.25 6.095c-.71.314-1.472.525-2.274.622.816-.487 1.442-1.256 1.734-2.172-.76.452-1.6.78-2.502.957-.718-.764-1.74-1.242-2.887-1.242-2.185 0-3.96 1.775-3.96 3.96 0 .31.035.61.103.898-3.29-.165-6.21-1.745-8.164-4.14-.34.58-.535 1.255-.535 1.97 0 1.37.697 2.585 1.758 3.296-.645-.02-1.25-.198-1.78-.49v.05c0 1.92 1.365 3.52 3.177 3.88-.33.095-.68.145-1.04.145-.25 0-.495-.025-.73-.07 4.54 3.58 10.395 2.5 13.99-1.39C21.43 12.82 22.25 10.5 22.25 8.08V7.57c.76-.55 1.41-1.23 1.93-2.015z" /></svg>
          </a>
          {/* Instagram Icon */}
          <a href="#" aria-label="Instagram" className="hover:text-[#064e3b] transition-colors duration-300 transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.5 2C4.463 2 2 4.463 2 7.5v9c0 3.037 2.463 5.5 5.5 5.5h9c3.037 0 5.5-2.463 5.5-5.5v-9c0-3.037-2.463-5.5-5.5-5.5h-9zm0 2h9c2.035 0 3.5 1.465 3.5 3.5v9c0 2.035-1.465 3.5-3.5 3.5h-9c-2.035 0-3.5-1.465-3.5-3.5v-9c0-2.035 1.465-3.5 3.5-3.5zm9.5 2c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5c0-.828.672-1.5 1.5-1.5zm-4.5 2.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5zm0 2c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5c0-1.38-1.12-2.5-2.5-2.5z" /></svg>
          </a>
          {/* LinkedIn Icon */}
          <a href="#" aria-label="LinkedIn" className="hover:text-[#064e3b] transition-colors duration-300 transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8.16c-1.12 0-2.03.9-2.03 2.02v5.77h-3.95V9.45H8.05v8.5h3.95V10.18c0-.62.5-.94.94-.94.46 0 .93.32.93.94v7.77h3.95v-7.85c0-2.14-1.54-3.15-2.87-3.15zM4.02 6.54c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM4.02 8.16H4v8.5h3.95V8.16H4.02z"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE and Edge */
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
        }
      `}</style>
    </section>
  );
};

export default Projects;