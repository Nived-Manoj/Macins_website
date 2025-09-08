import React from 'react';
import { Leaf, Recycle, Zap, Globe, Award, TrendingUp } from 'lucide-react';

const SustainabilityPage: React.FC = () => {
  const initiatives = [
    {
      icon: Zap,
      title: 'Smart Energy Solutions',
      description: 'Implementing intelligent energy management systems that reduce consumption by up to 40%',
      impact: '40% Energy Reduction',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Recycle,
      title: 'Sustainable Construction',
      description: 'Using eco-friendly materials and waste reduction practices in all our projects',
      impact: '70% Waste Reduction',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Leaf,
      title: 'Carbon Neutral Goals',
      description: 'Committed to achieving carbon neutrality across all operations by 2030',
      impact: 'Net Zero by 2030',
      color: 'from-teal-500 to-green-600'
    }
  ];

  const technologies = [
    {
      title: 'IoT Sensors',
      description: 'Smart monitoring systems for optimal resource utilization',
      percentage: 95
    },
    {
      title: 'AI Analytics',
      description: 'Predictive maintenance and energy optimization',
      percentage: 88
    },
    {
      title: 'Green Materials',
      description: 'Sustainable and recycled construction materials',
      percentage: 92
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/9875417/pexels-photo-9875417.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-400 bg-clip-text text-transparent">
            Sustainability & Innovation
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Leading the way towards a sustainable future through innovative technologies and responsible practices
          </p>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our Green Initiatives
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Pioneering sustainable solutions that benefit both business and environment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className={`bg-gradient-to-br ${initiative.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <initiative.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {initiative.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {initiative.description}
                </p>
                
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4">
                  <p className="text-green-800 dark:text-green-400 font-bold text-lg">
                    {initiative.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                Advanced Technologies
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                We integrate cutting-edge technologies to maximize efficiency, reduce environmental impact, and deliver superior results.
              </p>

              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {tech.title}
                      </h3>
                      <span className="text-amber-600 dark:text-amber-400 font-bold">
                        {tech.percentage}%
                      </span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                      {tech.description}
                    </p>
                    
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-amber-400 to-orange-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl p-1">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Smart Technology"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our commitment to sustainability has been recognized by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Green Building Award</h3>
              <p className="text-slate-600 dark:text-slate-300">2024 Excellence in Sustainable Construction</p>
            </div>

            <div className="group p-8 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Environmental Impact</h3>
              <p className="text-slate-600 dark:text-slate-300">2023 Best Environmental Initiative</p>
            </div>

            <div className="group p-8 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Innovation Leader</h3>
              <p className="text-slate-600 dark:text-slate-300">2024 Technology Innovation Award</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;