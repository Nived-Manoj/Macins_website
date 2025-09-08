import React from 'react';
import { Leaf, Recycle, Lightbulb, Car, Sun, Droplets } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: Sun,
      title: 'Smart Energy Solutions',
      description: 'Innovative renewable energy systems and smart grid technologies for sustainable power management.',
      features: ['Solar Power Systems', 'Energy Storage', 'Grid Optimization']
    },
    {
      icon: Car,
      title: 'EV Infrastructure',
      description: 'Comprehensive electric vehicle charging networks supporting the transition to sustainable transportation.',
      features: ['Fast Charging Stations', 'Smart Grid Integration', 'Mobile App Management']
    },
    {
      icon: Lightbulb,
      title: 'Green Building Technologies',
      description: 'Sustainable construction practices and smart building systems for enhanced energy efficiency.',
      features: ['Smart HVAC Systems', 'LED Lighting Solutions', 'Automated Controls']
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Advanced water management systems and conservation technologies for sustainable resource use.',
      features: ['Rainwater Harvesting', 'Water Recycling', 'Smart Irrigation']
    },
    {
      icon: Recycle,
      title: 'Waste Management',
      description: 'Comprehensive waste reduction and recycling programs across all our projects and operations.',
      features: ['Material Recycling', 'Waste Reduction', 'Circular Economy']
    },
    {
      icon: Leaf,
      title: 'Carbon Footprint Reduction',
      description: 'Systematic approach to reducing carbon emissions through innovative technologies and practices.',
      features: ['Emission Monitoring', 'Green Materials', 'Carbon Offsetting']
    }
  ];

  const stats = [
    { value: '40%', label: 'Energy Efficiency Improvement' },
    { value: '25%', label: 'Carbon Footprint Reduction' },
    { value: '100+', label: 'EV Charging Stations' },
    { value: '15MW', label: 'Solar Power Capacity' }
  ];

  return (
    <section id="sustainability" className="py-20 bg-white dark:bg-[#262626] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-6">
            Sustainability & Innovation
          </h2>
          <div className="w-24 h-1 bg-[#f56f10] mx-auto mb-6"></div>
          <p className="text-xl text-[#878787] dark:text-[#878787] max-w-3xl mx-auto leading-relaxed">
            Leading the charge towards a sustainable future through innovative technologies and responsible practices.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-[#f56f10]/5 to-[#f56f10]/10 dark:from-[#f56f10]/10 dark:to-[#f56f10]/5 rounded-2xl"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#f56f10] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#878787] dark:text-[#878787] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div 
              key={initiative.title}
              className="group bg-[#fbfbfb] dark:bg-[#151419] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f56f10] to-[#f56f10]/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <initiative.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-[#f56f10]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-4 group-hover:text-[#f56f10] transition-colors duration-300">
                {initiative.title}
              </h3>
              
              <p className="text-[#878787] dark:text-[#878787] mb-6 leading-relaxed">
                {initiative.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {initiative.features.map((feature, featureIndex) => (
                  <li 
                    key={feature}
                    className="flex items-center text-sm text-[#878787] dark:text-[#878787]"
                  >
                    <div className="w-1.5 h-1.5 bg-[#f56f10] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#f56f10]/10 to-[#f56f10]/5 dark:from-[#f56f10]/20 dark:to-[#f56f10]/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-4">
            Join Us in Building a Sustainable Future
          </h3>
          <p className="text-[#878787] dark:text-[#878787] mb-8 max-w-2xl mx-auto">
            Partner with us to implement sustainable solutions that drive both environmental and business success.
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#f56f10] hover:bg-[#f56f10]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Explore Sustainable Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;