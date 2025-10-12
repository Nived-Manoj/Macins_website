import { Wrench, Zap, Car, Factory, Building, Cpu, Trees, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'MEP Contracting',
      description: 'Complete mechanical, electrical, and plumbing solutions for residential and commercial projects.',
      color: 'from-teal-600 to-cyan-600',
    },
    {
      icon: Building,
      title: 'Interior Fit-Out',
      description: 'Premium interior design and construction services that transform spaces into inspiring environments.',
      color: 'from-cyan-600 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Energy Solutions',
      description: 'Smart energy systems and renewable energy integration for sustainable infrastructure.',
      color: 'from-teal-600 to-green-600',
    },
    {
      icon: Car,
      title: 'EV Infrastructure',
      description: 'Complete electric vehicle charging solutions and infrastructure development.',
      color: 'from-blue-600 to-teal-600',
    },
    {
      icon: Factory,
      title: 'Fabrication',
      description: 'High-quality steel fabrication and manufacturing services for construction projects.',
      color: 'from-gray-600 to-teal-600',
    },
    {
      icon: Building,
      title: 'Real Estate',
      description: 'Property development and real estate investment solutions across key markets.',
      color: 'from-teal-600 to-cyan-700',
    },
    {
      icon: Cpu,
      title: 'BMS & Retrofit',
      description: 'Building management systems and energy-efficient retrofit solutions.',
      color: 'from-cyan-600 to-teal-600',
    },
    {
      icon: Trees,
      title: 'Civil Works',
      description: 'Comprehensive civil engineering and construction services for large-scale projects.',
      color: 'from-green-600 to-teal-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
            How We Can Help
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions across multiple sectors, delivering excellence in every project we undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>

                <div className="mt-6 inline-flex items-center text-teal-600 font-semibold text-sm group-hover:text-white transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
