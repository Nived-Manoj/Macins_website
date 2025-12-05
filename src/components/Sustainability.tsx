import { useState, useEffect } from 'react';
import { Leaf, Zap, Recycle, Sun, Wind, Droplet, TrendingUp, Award } from 'lucide-react';

export default function Sustainability() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const initiatives = [
    {
      icon: Sun,
      title: 'Solar Energy Integration',
      description: 'Implementing large-scale solar panel installations for sustainable power generation.',
      stat: '40%',
      label: 'Energy Savings'
    },
    {
      icon: Zap,
      title: 'Smart Grid Technology',
      description: 'Advanced energy management systems for optimal efficiency and reduced waste.',
      stat: '35%',
      label: 'Cost Reduction'
    },
    {
      icon: Recycle,
      title: 'Sustainable Materials',
      description: 'Using eco-friendly and recycled materials in all construction projects.',
      stat: '60%',
      label: 'Recycled Content'
    },
    {
      icon: Wind,
      title: 'Green Building Design',
      description: 'LEED-certified designs that minimize environmental impact.',
      stat: '100%',
      label: 'Certified Projects'
    },
    {
      icon: Droplet,
      title: 'Water Conservation',
      description: 'Advanced water management and recycling systems.',
      stat: '50%',
      label: 'Water Saved'
    },
    {
      icon: Leaf,
      title: 'Carbon Neutral Goals',
      description: 'Committed to achieving carbon neutrality across all operations.',
      stat: '2030',
      label: 'Target Year'
    },
  ];

  const highlights = [
    {
      icon: Zap,
      title: 'Smart Energy Solutions',
      description: 'Deploying AI-powered energy management systems that reduce consumption by up to 40%.',
      gradient: 'from-[#059669] to-[#10b981]'
    },
    {
      icon: Leaf,
      title: 'EV Infrastructure Leadership',
      description: 'Building the region\'s most comprehensive electric vehicle charging network.',
      gradient: 'from-[#10b981] to-[#34d399]'
    },
    {
      icon: Recycle,
      title: 'Circular Construction',
      description: 'Implementing waste reduction strategies and material recycling in all projects.',
      gradient: 'from-[#059669] to-[#064e3b]'
    },
  ];

  return (
    <section 
      id="sustainability" 
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #fafaf9 50%, #fef3c7 100%)' }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fde68a]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#f0fdf4] border-2 border-[#10b981] text-[#059669] px-5 py-2 rounded-full text-sm font-bold mb-6">
            <Leaf size={16} />
            <span>Sustainability & Innovation</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#064e3b] mb-6" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}>
            BUILDING A SUSTAINABLE FUTURE
          </h2>
          <p className="text-lg text-[#78716c] max-w-3xl mx-auto leading-relaxed">
            At RealWorld, sustainability isn't just a buzzword—it's a commitment woven into every project we undertake. We're pioneering green technologies and sustainable practices across all our operations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Side - Highlights */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 1s ease-out 0.3s'
            }}
          >
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.8s ease-out ${0.5 + index * 0.2}s`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center text-white shadow-lg`}>
                      <highlight.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-[#064e3b] mb-2 group-hover:text-[#059669] transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-[#78716c] leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Card */}
            <div 
              className="mt-8 bg-gradient-to-br from-[#064e3b] to-[#059669] rounded-2xl p-8 shadow-2xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'all 1s ease-out 1.2s'
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-[#fde68a]" size={32} />
                <h4 className="text-2xl font-bold text-white">Our Commitment</h4>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-black text-white mb-1">2030</div>
                  <div className="text-sm text-[#d1fae5]">Carbon Neutral Target</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">100%</div>
                  <div className="text-sm text-[#d1fae5]">Green Certified</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">40%</div>
                  <div className="text-sm text-[#d1fae5]">Energy Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">60%</div>
                  <div className="text-sm text-[#d1fae5]">Recycled Materials</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Initiative Cards */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 1s ease-out 0.3s'
            }}
          >
            <div className="grid grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-2 hover:border-[#10b981] border-2 border-transparent"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                    transition: `all 0.6s ease-out ${0.6 + index * 0.1}s`
                  }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f0fdf4] to-[#d1fae5] flex items-center justify-center text-[#059669] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <initiative.icon size={28} />
                  </div>
                  <h4 className="font-bold text-[#064e3b] mb-2 text-lg group-hover:text-[#059669] transition-colors">
                    {initiative.title}
                  </h4>
                  <p className="text-sm text-[#78716c] mb-4 leading-relaxed">
                    {initiative.description}
                  </p>
                  <div className="pt-4 border-t-2 border-[#f0fdf4]">
                    <div className="text-3xl font-black text-[#059669] mb-1">{initiative.stat}</div>
                    <div className="text-xs text-[#78716c] font-semibold uppercase tracking-wide">{initiative.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 1.5s'
          }}
        >
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-[#10b981]">
            <TrendingUp className="text-[#059669]" size={24} />
            <span className="text-[#064e3b] font-bold text-lg">Learn More About Our Green Initiatives</span>
          </div>
        </div>
      </div>
    </section>
  );
}