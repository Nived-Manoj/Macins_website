

import React, { useState, useEffect } from 'react';
import { ExternalLink, Bed, Bath, Layout } from 'lucide-react';
import homeVideo2 from "../assets/home_video2.mp4";

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
    <section id="portfolio" className="relative overflow-hidden py-20">
     


      {/* Light overlay so text is readable */}
      <div className="absolute inset-0 bg-[#f5f5f4]/80 -z-10"></div>

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