import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Construction', 'Energy', 'Technology', 'Real Estate', 'Infrastructure'];

  const projects = [
    {
      id: 1,
      title: 'Dubai Marina Tower',
      category: 'Construction',
      image: 'https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg',
      description: 'Premium residential tower with state-of-the-art MEP systems and luxury interior fit-out.',
      location: 'Dubai, UAE',
      year: '2023'
    },
    {
      id: 2,
      title: 'Solar Park Initiative',
      category: 'Energy',
      image: 'https://images.pexels.com/photos/9875449/pexels-photo-9875449.jpeg',
      description: 'Large-scale solar energy project providing sustainable power solutions.',
      location: 'Abu Dhabi, UAE',
      year: '2023'
    },
    {
      id: 3,
      title: 'Smart City Infrastructure',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/2513086/pexels-photo-2513086.jpeg',
      description: 'IoT-enabled infrastructure solutions for next-generation urban development.',
      location: 'Riyadh, KSA',
      year: '2024'
    },
    {
      id: 4,
      title: 'Luxury Residential Complex',
      category: 'Real Estate',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      description: 'Premium residential development with integrated smart home technologies.',
      location: 'Doha, Qatar',
      year: '2023'
    },
    {
      id: 5,
      title: 'Metro Station Development',
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/1104974/pexels-photo-1104974.jpeg',
      description: 'Modern metro station with advanced MEP systems and sustainable design.',
      location: 'Dubai, UAE',
      year: '2024'
    },
    {
      id: 6,
      title: 'Corporate Headquarters',
      category: 'Construction',
      image: 'https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg',
      description: 'State-of-the-art corporate facility with premium interior design and smart building systems.',
      location: 'Mumbai, India',
      year: '2023'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-[#fbfbfb] dark:bg-[#151419] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#f56f10] mx-auto mb-6"></div>
          <p className="text-xl text-[#878787] dark:text-[#878787] max-w-3xl mx-auto leading-relaxed">
            Showcasing our portfolio of exceptional projects across various sectors and regions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 mb-2 ${
                activeFilter === category
                  ? 'bg-[#f56f10] text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-[#262626] text-[#878787] hover:text-[#f56f10] hover:bg-[#f56f10]/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-[#262626] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#f56f10] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-[#f56f10] transition-colors duration-300">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#151419] dark:text-[#fbfbfb] group-hover:text-[#f56f10] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-[#878787] dark:text-[#878787] font-medium">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-[#878787] dark:text-[#878787] mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center text-sm text-[#f56f10] font-medium">
                  <div className="w-2 h-2 bg-[#f56f10] rounded-full mr-2"></div>
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#f56f10] hover:bg-[#f56f10]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;