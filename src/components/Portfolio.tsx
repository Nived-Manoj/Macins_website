import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Construction', 'Energy', 'Interior', 'Infrastructure'];

  const projects = [
    {
      title: 'Dubai Marina Tower',
      category: 'Construction',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury residential tower with MEP systems',
    },
    {
      title: 'Smart Energy Grid',
      category: 'Energy',
      image: 'https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Solar power integration for commercial complex',
    },
    {
      title: 'Executive Office Suite',
      category: 'Interior',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium office interior fit-out',
    },
    {
      title: 'EV Charging Hub',
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/7656740/pexels-photo-7656740.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-station EV charging facility',
    },
    {
      title: 'Commercial Complex',
      category: 'Construction',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mixed-use development with retail and offices',
    },
    {
      title: 'Boutique Hotel',
      category: 'Interior',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury hotel interior design and execution',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
            Our Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of successful projects across construction, energy, and infrastructure sectors.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-white font-semibold">View Details</span>
                    <ExternalLink className="text-white" size={20} />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-teal-600 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
