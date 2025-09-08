import React from 'react';
import { MapPin, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const regions = [
    { name: 'Dubai, UAE', description: 'Headquarters' },
    { name: 'India', description: 'Regional Office' },
    { name: 'Saudi Arabia', description: 'Operations' },
    { name: 'Qatar', description: 'Strategic Projects' },
  ];

  return (
    <section id="about" className="py-20 bg-[#fbfbfb] dark:bg-[#151419] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-6">
            About Macins Group
          </h2>
          <div className="w-24 h-1 bg-[#f56f10] mx-auto mb-6"></div>
          <p className="text-xl text-[#878787] dark:text-[#878787] max-w-3xl mx-auto leading-relaxed">
            A visionary conglomerate transforming industries through innovation, excellence, and sustainable practices across the Middle East and beyond.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-6">
              Our Story
            </h3>
            <p className="text-[#878787] dark:text-[#878787] mb-6 leading-relaxed">
              Founded with a vision to reshape industries, Macins Group has emerged as a leading diversified conglomerate in the UAE. Our journey began with a commitment to excellence and has evolved into a comprehensive portfolio spanning construction, energy solutions, technology, and real estate.
            </p>
            <p className="text-[#878787] dark:text-[#878787] mb-8 leading-relaxed">
              Today, we stand as trusted partners to over 500 clients, delivering innovative solutions that drive progress and sustainability across multiple sectors. Our expertise spans from MEP contracting and interior fit-outs to cutting-edge EV infrastructure and smart energy solutions.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white dark:bg-[#262626] rounded-lg shadow-sm">
                <Award className="h-8 w-8 text-[#f56f10] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#151419] dark:text-[#fbfbfb]">Excellence</div>
                <div className="text-sm text-[#878787]">Driven</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-[#262626] rounded-lg shadow-sm">
                <Globe className="h-8 w-8 text-[#f56f10] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#151419] dark:text-[#fbfbfb]">Global</div>
                <div className="text-sm text-[#878787]">Reach</div>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="bg-gradient-to-br from-[#f56f10]/5 to-[#f56f10]/10 dark:from-[#f56f10]/10 dark:to-[#f56f10]/5 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-6">
              Leadership
            </h3>
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f56f10] to-[#f56f10]/80 rounded-full flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#151419] dark:text-[#fbfbfb] mb-2">
                  Praveen Pillai
                </h4>
                <p className="text-[#878787] dark:text-[#878787] mb-3">
                  Chief Executive Officer
                </p>
                <p className="text-sm text-[#878787] dark:text-[#878787] leading-relaxed">
                  Visionary leader with extensive experience in driving organizational growth and innovation across multiple industry sectors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Presence */}
        <div>
          <h3 className="text-3xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-12 text-center">
            Our Regional Presence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div 
                key={region.name}
                className="bg-white dark:bg-[#262626] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <MapPin className="h-8 w-8 text-[#f56f10] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-[#151419] dark:text-[#fbfbfb] mb-2">
                  {region.name}
                </h4>
                <p className="text-[#878787] dark:text-[#878787] text-sm">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;