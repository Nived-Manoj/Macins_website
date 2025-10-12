import { Leaf, Zap, Recycle, Sun, Wind, Droplet } from 'lucide-react';

export default function Sustainability() {
  const initiatives = [
    {
      icon: Sun,
      title: 'Solar Energy Integration',
      description: 'Implementing large-scale solar panel installations for sustainable power generation.',
    },
    {
      icon: Zap,
      title: 'Smart Grid Technology',
      description: 'Advanced energy management systems for optimal efficiency and reduced waste.',
    },
    {
      icon: Recycle,
      title: 'Sustainable Materials',
      description: 'Using eco-friendly and recycled materials in all construction projects.',
    },
    {
      icon: Wind,
      title: 'Green Building Design',
      description: 'LEED-certified designs that minimize environmental impact.',
    },
    {
      icon: Droplet,
      title: 'Water Conservation',
      description: 'Advanced water management and recycling systems.',
    },
    {
      icon: Leaf,
      title: 'Carbon Neutral Goals',
      description: 'Committed to achieving carbon neutrality across all operations.',
    },
  ];

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
              Sustainability & Innovation
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Building a Sustainable Future
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Macins Group, sustainability isn't just a buzzword—it's a commitment woven into every project we undertake. We're pioneering green technologies and sustainable practices across all our operations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-green-600 flex items-center justify-center text-white">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Smart Energy Solutions</h4>
                  <p className="text-gray-600">
                    Deploying AI-powered energy management systems that reduce consumption by up to 40%.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center text-white">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">EV Infrastructure Leadership</h4>
                  <p className="text-gray-600">
                    Building the region's most comprehensive electric vehicle charging network.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white">
                  <Recycle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Circular Construction</h4>
                  <p className="text-gray-600">
                    Implementing waste reduction strategies and material recycling in all projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-100 to-green-100 flex items-center justify-center text-teal-600 mb-4">
                  <initiative.icon size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{initiative.title}</h4>
                <p className="text-sm text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
