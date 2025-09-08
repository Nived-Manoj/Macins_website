import React, { useEffect, useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#151419] via-[#262626] to-[#151419]">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#f56f10]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#f56f10]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Hero Text */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Design</span>
            <span className="text-[#f56f10]">•</span>
            <span className="block">Build</span>
            <span className="text-[#f56f10]">•</span>
            <span className="block">Inspire</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#fbfbfb]/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading diversified conglomerate delivering excellence across construction, energy, technology, and real estate sectors in the UAE and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#f56f10] hover:bg-[#f56f10]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Discover Our Story
            </button>
            <button className="border-2 border-white/30 hover:border-[#f56f10] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 hover:bg-[#f56f10]/10">
              <Play className="h-5 w-5" />
              <span>Watch Projects</span>
            </button>
          </div>
        </div>

        {/* Animated Counters */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#f56f10] mb-2">
              <AnimatedCounter end={10} suffix="+" />
            </div>
            <p className="text-[#fbfbfb]/80 text-lg">Years Expertise</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#f56f10] mb-2">
              <AnimatedCounter end={1000} suffix="+" />
            </div>
            <p className="text-[#fbfbfb]/80 text-lg">Projects Executed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#f56f10] mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <p className="text-[#fbfbfb]/80 text-lg">Clients Served</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/60 hover:text-[#f56f10] transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;