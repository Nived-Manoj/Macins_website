import React, { useState } from 'react';
import { Search, Building2, Calendar, CheckCircle2, Clock, MapPin, ArrowRight, ChevronLeft } from 'lucide-react';
// import Ellister from  "../assets/projects/12"

const ProjectsShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const completedProjects = [
    { name: 'Mezdan Business center - Khalifa', scope: 'Office fitout', category: 'Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
    { name: 'Emaar Residences', scope: 'Reception Lobby work', category: 'Residential', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
    { name: 'Louis vuitton -chalhoub group', scope: 'Cooperate office', category: 'Retail', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80' },
    { name: 'Life pharmacy al wasal', scope: 'Retail fitout', category: 'Retail', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80' },
    { name: 'Abudhabi Airport', scope: 'Retail fitout', category: 'Commercial', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80' },
    { name: 'Dubai Airport Terminal 3 - Emirates Lounge', scope: 'Renovation', category: 'Commercial', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80' },
    { name: 'Dp World Expo center', scope: 'Office + clinic fitout', category: 'Office', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
    { name: 'Dp World Gate 3 Jafza', scope: 'Police Headquarter', category: 'Government', image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&q=80' },
    { name: 'Mumuso - Dubai mall', scope: 'Retail fitout', category: 'Retail', image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80' },
    { name: 'Yas island AUH - tryano', scope: 'Retail fitout', category: 'Retail', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80' },
    { name: 'Marina Plaza Residence', scope: 'Reception cooridoors work', category: 'Residential', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
    { name: 'Redcarpet Showroom - Mall of Emirates', scope: 'Retail fitout', category: 'Retail', image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80' },
    { name: 'Molten Chocolat Café', scope: 'F&B fitout', category: 'F&B', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80' },
    { name: 'Just Accessories', scope: 'Retail fitout', category: 'Retail', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80' },
    { name: 'CuCa university Ajman - Class rooms', scope: 'Renovation fitout', category: 'Education', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80' },
    { name: 'City university Ajman clinic', scope: 'Renovation work', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80' },
    { name: 'Gf cory Dip', scope: 'Office + entrance area renovation', category: 'Office', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80' },
    { name: 'Life Clinic Center - DWC', scope: 'Renovation fitout', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80' },
    { name: 'Elister Polyclinic Al quasis', scope: 'Fitout work', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80' },
    { name: 'Beisped Shipping', scope: 'Office fitout Work', category: 'Office', image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80' }
  ];

  const ongoingProjects = [
    { name: 'Nesto al wasl village', scope: 'Fitout partial - hvac', category: 'Retail', image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80' },
    { name: 'Roboyee - Ghosi Warehouse', scope: 'Fitout work', category: 'Industrial', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80' },
    { name: 'Florence Residences - Discovery garden', scope: 'G+11 renovation work + Pooldeck', category: 'Residential', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80' },
    { name: 'Nadalsheba mall - Retail', scope: 'SPA+Health Clinic', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80' },
    { name: 'Kotak manhindra - Near fuure musuem', scope: 'Office fitout', category: 'Office', image: 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=800&q=80' },
    { name: 'Sahara clinic', scope: 'Clinic fitout', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80' },
    { name: 'Skmc clinic -AUH', scope: 'Clinic fitout', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80' },
    { name: 'DESIGN VILLA', scope: 'VILLA RENOVATION', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' }
  ];

  const filterProjects = (projects) => {
    return projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.scope.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getDisplayProjects = () => {
    if (activeTab === 'completed') return filterProjects(completedProjects);
    if (activeTab === 'ongoing') return filterProjects(ongoingProjects);
    return [...filterProjects(completedProjects), ...filterProjects(ongoingProjects)];
  };

  const displayProjects = getDisplayProjects();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
       
      {/* Animated Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="flex items-center gap-3 mb-2 animate-fade-in">
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#064e3b' }}>
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Projects Portfolio</h1>
          </div>
          <p className="text-gray-600 ml-16 text-lg">Showcasing excellence in design and construction</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Animated Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '0ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Completed</p>
                <p className="text-4xl font-bold text-gray-900 mt-2">{completedProjects.length}</p>
                <p className="text-xs text-gray-500 mt-1">Projects delivered</p>
              </div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-110" style={{ backgroundColor: '#064e3b' }}>
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div> */}

          {/* <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">In Progress</p>
                <p className="text-4xl font-bold text-gray-900 mt-2">{ongoingProjects.length}</p>
                <p className="text-xs text-gray-500 mt-1">Active projects</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                <Clock className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
          </div> */}

          {/* <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Total</p>
                <p className="text-4xl font-bold text-gray-900 mt-2">{completedProjects.length + ongoingProjects.length}</p>
                <p className="text-xs text-gray-500 mt-1">Overall portfolio</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div> */}
        </div>

        {/* Search and Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-gray-600" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-opacity-100 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                style={{ borderColor: searchTerm ? '#064e3b' : '' }}
              />
            </div>

            <div className="flex gap-2 bg-gray-100 p-1.5 rounded-xl">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                }`}
                style={activeTab === 'all' ? { backgroundColor: '#064e3b' } : {}}
              >
                All ({completedProjects.length + ongoingProjects.length})
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'completed'
                    ? 'text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                }`}
                style={activeTab === 'completed' ? { backgroundColor: '#064e3b' } : {}}
              >
                Completed ({completedProjects.length})
              </button>
              <button
                onClick={() => setActiveTab('ongoing')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'ongoing'
                    ? 'text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                }`}
                style={activeTab === 'ongoing' ? { backgroundColor: '#064e3b' } : {}}
              >
                Ongoing ({ongoingProjects.length})
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => {
            const isOngoing = ongoingProjects.some(p => p.name === project.name);
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1.5 text-xs font-bold rounded-full backdrop-blur-sm shadow-lg ${
                        isOngoing
                          ? 'bg-amber-500/90 text-white'
                          : 'bg-green-500/90 text-white'
                      }`}
                    >
                      {isOngoing ? '🔄 Ongoing' : '✓ Completed'}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute bottom-4 left-4 right-4 transform transition-all duration-500" style={{ transform: hoveredCard === index ? 'translateY(0)' : 'translateY(20px)' }}>
                      <button className="flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all">
                        View Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-start gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600 font-medium">{project.scope}</p>
                  </div>

                  {/* Progress Bar (for ongoing projects) */}
                  {/* {isOngoing && (
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Progress</span>
                        <span className="font-semibold">In Progress</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full animate-pulse" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  )} */}
                </div>

                {/* Bottom Accent Line */}
                {/* <div className="h-1.5 bg-gradient-to-r transition-all duration-300" style={{ 
                  backgroundImage: isOngoing 
                    ? 'linear-gradient(to right, #f59e0b, #d97706)' 
                    : 'linear-gradient(to right, #064e3b, #065f46)'
                }}></div> */}
              </div>
            );
          })}
        </div>

        {displayProjects.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-6">
              <Building2 className="w-16 h-16 text-gray-300" />
            </div>
            <p className="text-gray-500 text-xl font-medium">No projects found matching your search.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProjectsShowcase;