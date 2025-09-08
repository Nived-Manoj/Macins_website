import React from 'react';
import { 
  Building, 
  Zap, 
  Car, 
  Truck, 
  Wrench, 
  Home, 
  Settings, 
  Cpu 
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Building,
      title: 'MEP Contracting',
      description: 'Comprehensive mechanical, electrical, and plumbing solutions for commercial and residential projects.',
      features: ['HVAC Systems', 'Electrical Installation', 'Plumbing & Fire Fighting', 'Smart Building Integration'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Home,
      title: 'Interior Fit-Out',
      description: 'Luxury interior design and fit-out services creating stunning spaces that inspire.',
      features: ['Commercial Interiors', 'Residential Design', 'Custom Furniture', 'Lighting Design'],
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Zap,
      title: 'Energy Solutions',
      description: 'Sustainable energy systems and smart power management solutions.',
      features: ['Solar Power Systems', 'Energy Management', 'Smart Grid Solutions', 'Battery Storage'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Car,
      title: 'EV Infrastructure',
      description: 'Complete electric vehicle charging infrastructure and smart mobility solutions.',
      features: ['EV Charging Stations', 'Smart Charging Networks', 'Fleet Management', 'Mobile Apps'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Fabrication',
      description: 'Precision fabrication services for industrial and commercial applications.',
      features: ['Steel Fabrication', 'Custom Manufacturing', 'Quality Control', 'Installation Services'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Building,
      title: 'Real Estate',
      description: 'End-to-end real estate development and property management services.',
      features: ['Property Development', 'Investment Advisory', 'Property Management', 'Market Analysis'],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Settings,
      title: 'Civil Works',
      description: 'Complete civil engineering and construction services.',
      features: ['Infrastructure Development', 'Road Construction', 'Utilities Installation', 'Project Management'],
      color: 'from-slate-500 to-slate-700'
    },
    {
      icon: Cpu,
      title: 'BMS & Retrofit',
      description: 'Building management systems and energy retrofit solutions.',
      features: ['Smart Building Controls', 'Energy Retrofitting', 'IoT Integration', 'Monitoring Systems'],
      color: 'from-amber-500 to-yellow-600'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions across multiple industries, delivered with precision and innovation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-200 dark:border-slate-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-600 dark:text-slate-300">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Macins Group
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Setting industry standards through innovation, quality, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Proven Excellence
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Over 1000 successful projects demonstrating our commitment to quality and innovation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Cutting-Edge Technology
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Leveraging the latest technologies to deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Regional Expertise
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Deep understanding of local markets with global best practices and standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;