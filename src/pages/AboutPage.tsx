import React from 'react';
import { MapPin, Award, Globe, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const regions = [
    { name: 'UAE', city: 'Dubai', status: 'Headquarters' },
    { name: 'India', city: 'Multiple Cities', status: 'Operations Hub' },
    { name: 'Saudi Arabia', city: 'Riyadh', status: 'Regional Office' },
    { name: 'Qatar', city: 'Doha', status: 'Branch Office' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
            About Macins Group
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            A legacy of excellence, innovation, and trust spanning over a decade
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                Our Story
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded with a vision to revolutionize the construction and technology landscape, Macins Group has grown from a local contractor to a regional powerhouse. Our journey began with a simple belief: that every project deserves excellence, innovation, and unwavering commitment to quality.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Today, we stand proud as a diversified conglomerate operating across multiple sectors, from cutting-edge MEP contracting to sustainable energy solutions, from luxury interior fit-outs to revolutionary EV infrastructure.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <Award className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-900 dark:text-white">Quality First</p>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-900 dark:text-white">Global Vision</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl p-1">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Macins Group Team"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Leadership
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Guided by visionary leadership and decades of industry expertise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left space-y-4">
                  <div className="w-32 h-32 mx-auto md:mx-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full p-1">
                    <div className="w-full h-full bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                      <Users className="h-16 w-16 text-slate-600 dark:text-slate-300" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Praveen Pillai
                    </h3>
                    <p className="text-lg text-amber-600 dark:text-amber-400 font-medium mb-4">
                      Founder & Managing Director
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    With over 15 years of industry experience, Praveen Pillai has been instrumental in shaping Macins Group's vision and strategic direction. His leadership philosophy centers on innovation, sustainability, and excellence in execution.
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Under his guidance, the company has expanded across multiple sectors and geographical regions, establishing a reputation for delivering complex projects with precision and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Global Presence
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Strategically positioned across the Middle East and South Asia to serve our clients better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <div 
                key={index}
                className="group text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-br from-amber-400 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {region.name}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  {region.city}
                </p>
                
                <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-sm rounded-full">
                  {region.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;