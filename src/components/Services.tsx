import React from 'react';
import { 
  Wrench, 
  Palette, 
  Zap, 
  Car, 
  Settings, 
  Building, 
  Hammer, 
  Cpu 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'MEP Contracting',
      description: 'Comprehensive mechanical, electrical, and plumbing solutions for commercial and residential projects.',
      features: ['HVAC Systems', 'Electrical Installation', 'Plumbing & Fire Protection']
    },
    {
      icon: Palette,
      title: 'Interior Fit-Out',
      description: 'Premium interior design and fit-out services creating inspiring spaces that reflect your vision.',
      features: ['Commercial Spaces', 'Residential Design', 'Luxury Hospitality']
    },
    {
      icon: Zap,
      title: 'Energy Solutions',
      description: 'Innovative energy systems and smart grid solutions for sustainable power management.',
      features: ['Solar Systems', 'Smart Grids', 'Energy Efficiency']
    },
    {
      icon: Car,
      title: 'EV Infrastructure',
      description: 'Complete electric vehicle charging solutions for the future of sustainable transportation.',
      features: ['Charging Stations', 'Network Management', 'Smart Integration']
    },
    {
      icon: Settings,
      title: 'Fabrication',
      description: 'Precision fabrication services delivering high-quality components for diverse applications.',
      features: ['Steel Fabrication', 'Custom Components', 'Quality Assurance']
    },
    {
      icon: Building,
      title: 'Real Estate',
      description: 'Strategic real estate development and investment opportunities across prime locations.',
      features: ['Property Development', 'Investment Advisory', 'Asset Management']
    },
    {
      icon: Hammer,
      title: 'Civil Works',
      description: 'Comprehensive civil engineering and construction services for infrastructure projects.',
      features: ['Infrastructure', 'Site Development', 'Project Management']
    },
    {
      icon: Cpu,
      title: 'BMS & Retrofit',
      description: 'Building Management Systems and retrofit solutions for enhanced efficiency and control.',
      features: ['Smart Controls', 'System Integration', 'Performance Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-[#262626] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-6">
            Core Services
          </h2>
          <div className="w-24 h-1 bg-[#f56f10] mx-auto mb-6"></div>
          <p className="text-xl text-[#878787] dark:text-[#878787] max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions across multiple sectors, delivering excellence through innovation and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-[#fbfbfb] dark:bg-[#151419] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-[#f56f10]/20"
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f56f10] to-[#f56f10]/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-[#f56f10]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-4 group-hover:text-[#f56f10] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-[#878787] dark:text-[#878787] mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={feature}
                    className="flex items-center text-sm text-[#878787] dark:text-[#878787]"
                  >
                    <div className="w-1.5 h-1.5 bg-[#f56f10] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f56f10]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#f56f10] hover:bg-[#f56f10]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;