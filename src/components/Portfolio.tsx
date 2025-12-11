// import { useState } from 'react';
// import { ExternalLink } from 'lucide-react';

// export default function Portfolio() {
//   const [activeFilter, setActiveFilter] = useState('All');

//   const filters = ['All', 'Construction', 'Energy', 'Interior', 'Infrastructure'];

//   const projects = [
//     {
//       title: 'Dubai Marina Tower',
//       category: 'Construction',
//       image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Luxury residential tower with MEP systems',
//     },
//     {
//       title: 'Smart Energy Grid',
//       category: 'Energy',
//       image: 'https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Solar power integration for commercial complex',
//     },
//     {
//       title: 'Executive Office Suite',
//       category: 'Interior',
//       image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Premium office interior fit-out',
//     },
//     {
//       title: 'EV Charging Hub',
//       category: 'Infrastructure',
//       image: 'https://images.pexels.com/photos/7656740/pexels-photo-7656740.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Multi-station EV charging facility',
//     },
//     {
//       title: 'Commercial Complex',
//       category: 'Construction',
//       image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Mixed-use development with retail and offices',
//     },
//     {
//       title: 'Boutique Hotel',
//       category: 'Interior',
//       image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Luxury hotel interior design and execution',
//     },
//   ];

//   const filteredProjects = activeFilter === 'All'
//     ? projects
//     : projects.filter(project => project.category === activeFilter);

//   return (
//     <section id="portfolio" className="py-20 bg-white">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="text-center mb-16">
//           <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
//             Our Work
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//             Explore our portfolio of successful projects across construction, energy, and infrastructure sectors.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`px-6 py-3 rounded-full font-semibold transition-all ${
//                   activeFilter === filter
//                     ? 'bg-teal-600 text-white shadow-lg'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//             >
//               <div className="relative overflow-hidden h-64">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
//                     <span className="text-white font-semibold">View Details</span>
//                     <ExternalLink className="text-white" size={20} />
//                   </div>
//                 </div>
//                 <div className="absolute top-4 right-4">
//                   <span className="px-4 py-2 bg-teal-600 text-white text-xs font-semibold rounded-full">
//                     {project.category}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
//                 <p className="text-gray-600 text-sm">{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from 'react';
import { ExternalLink, Bed, Bath, Layout } from 'lucide-react';

// NOTE: Since the design uses different data fields (beds, baths, sqft) 
// than the portfolio data (title, category, description), I will adapt 
// the original "Projects" data structure and filtering for the new design.
// The Bed/Bath/Area icons and logic from the first component will be kept.

// --- 1. Icons from the Projects Component ---

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

const AreaIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0 0h-4m4-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 4l-5-5" /></svg>
);


// --- 2. Combined Portfolio Component (using original Project design/animations) ---

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the entrance animations on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // NOTE: Data structure is adapted to the complex real estate card design
  // but still includes the 'category' field for filtering.
  const projects = [
    {
      id: 1,
      location: 'Site Preparation',
      category: 'Construction',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070',
      price: '$50M',
      beds: 10,
      baths: 12,
      sqft: '25,000 sq ft',
      description: 'Luxury residential tower with cutting-edge MEP systems.',
      featured: false
    },
    {
      id: 2,
      location: 'Smart Energy Grid',
      category: 'Energy',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800',
      price: '$12M',
      beds: 0,
      baths: 0,
      sqft: '8,000 kW',
      description: 'Solar power integration and smart grid for commercial complex.',
      featured: false
    },
    // {
    //   id: 3,
    //   location: 'Executive Office Suite',
    //   category: 'Interior',
    //   image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   price: '$1.5M',
    //   beds: 0,
    //   baths: 0,
    //   sqft: '5,200 sq ft',
    //   description: 'Premium office interior fit-out with bespoke finishes.',
    //   featured: true // Use the featured card style for visual variety
    // },
    {
      id: 4,
      location: 'EV Charging Hub',
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/9800006/pexels-photo-9800006.jpeg',
      price: '$4.5M',
      beds: 0,
      baths: 0,
      sqft: '10 Stations',
      description: 'Multi-station EV charging facility with integrated canopy.',
      featured: false
    },
     {
      id: 4,
      location: 'Luxuary Interiors',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800',
      price: '$4.5M',
      beds: 0,
      baths: 0,
      sqft: '10 Stations',
      description: 'Building Foundations, Shaping Futures',
      featured: false
    },
     {
      id: 4,
      location: 'Luxuary Home',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      price: '$4.5M',
      beds: 0,
      baths: 0,
      sqft: '10 Stations',
      description: 'Luxury residential tower with cutting-edge MEP systems.',
      featured: false
    },
    {
      id: 5,
      location: 'Commercial Complex',
      category: 'Construction',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$25M',
      beds: 0,
      baths: 0,
      sqft: '40,000 sq ft',
      description: 'Mixed-use development with retail and office spaces.',
      featured: false
    },
   
  ];

  const filters = ['All', 'Construction', 'Energy', 'Interior', 'Infrastructure'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Define colors based on the original design: 
  // Primary (dark green): #064e3b (Emerald-900 / Dark Teal)
  // Accent (lighter green for hover): #059669 (Emerald-600)
  // Background: #f5f5f4 (Stone-100 / Off-White)
  // Text: #78716c (Stone-600 / Gray)

  return (
    <section id="portfolio" className="py-20 bg-[#f5f5f4] relative overflow-hidden">

      {/* Large Background Text with Slide-In Animation (Design maintained) */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <h2
          className="text-[280px] font-black text-[#064e3b] whitespace-nowrap leading-none"
          style={{
            fontFamily: 'Impact, sans-serif',
            letterSpacing: '10px',
            transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 2s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          REALWORLD
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Title & Filter Buttons (Portfolio component's structure) */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.8s ease-out 0.2s'
          }}
        >
          <div className="text-sm font-semibold tracking-widest uppercase text-[#064e3b] mb-3">
            Our Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#064e3b] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#78716c] max-w-3xl mx-auto mb-8">
            Explore our portfolio of successful projects across all sectors.
          </p>

          {/* Filter Buttons - Color adjusted to match the theme */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${activeFilter === filter
                    ? 'bg-[#064e3b] text-white shadow-lg transform hover:scale-[1.05]'
                    : 'bg-white text-[#064e3b] border border-[#e7e5e4] hover:bg-[#e7e5e4]'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Using the large/featured card design from Projects component */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${project.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(80px) scale(0.8)',
                transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.15 + 0.3}s`
              }}
            >
              {/* Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 h-full transform hover:scale-[1.02] hover:shadow-2xl">
                {/* Image Container */}
                <div className={`relative overflow-hidden ${project.featured ? 'h-80 lg:h-96' : 'h-64'}`}>
                  <img
                    src={project.image}
                    alt={project.location}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Featured Tag */}
                  {project.featured && (
                    <span className="absolute top-6 left-6 px-4 py-2 bg-white text-emerald-900 font-bold rounded-full text-sm shadow-md">
                      FEATURED LISTING
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {!project.featured ? (
                    /* Standard Card Layout */
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-extrabold text-emerald-900 leading-tight flex-1 pr-2">
                          {project.location}
                        </h3>
                        
                      </div>
                      <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      
                    </div>
                  ) : (
                    /* Featured Card Layout */
                    <div>
                      <h3 className="text-3xl font-extrabold text-emerald-900 mb-3">
                        {project.location}
                      </h3>
                      <p className="text-stone-600 text-base mb-6">
                        {project.description}
                      </p>
                      
                      {/* Property Stats Grid */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="flex flex-col items-center p-4 border border-stone-200 rounded-xl bg-stone-50">
                          <Bed className="w-6 h-6 mb-2 text-emerald-900" />
                          <span className="font-bold text-emerald-900 text-lg">{project.beds}</span>
                          <span className="text-xs text-stone-600 font-semibold">BEDS</span>
                        </div>
                        <div className="flex flex-col items-center p-4 border border-stone-200 rounded-xl bg-stone-50">
                          <Bath className="w-6 h-6 mb-2 text-emerald-900" />
                          <span className="font-bold text-emerald-900 text-lg">{project.baths}</span>
                          <span className="text-xs text-stone-600 font-semibold">BATHS</span>
                        </div>
                        <div className="flex flex-col items-center p-4 border border-stone-200 rounded-xl bg-stone-50">
                          <svg className="w-6 h-6 mb-2 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0 0h-4m4-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 4l-5-5" />
                          </svg>
                          <span className="font-bold text-emerald-900 text-lg">{project.sqft}</span>
                          <span className="text-xs text-stone-600 font-semibold">AREA</span>
                        </div>
                      </div>
                      
                      {/* Price and CTA */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-4xl font-extrabold text-emerald-900">
                          {project.price}
                        </span>
                      </div>
                      <button className="w-full bg-emerald-900 text-white py-4 rounded-full font-bold text-base hover:bg-emerald-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                        EXPLORE MORE
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Bottom Social Icons (Design maintained) */}
        <div
          className="flex justify-center gap-6 mt-16 text-[#78716c]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease-out 1.2s'
          }}
        >

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
}