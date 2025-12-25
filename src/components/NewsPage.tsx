import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [visibleArticles, setVisibleArticles] = useState(6);

  const categories = ['All Posts', 'Civil', 'ELV', 'EV Solutions', 'Fit Out', 'MEP', 'WAREHOUSE'];

  const newsArticles = [
    {
      id: 1,
      category: 'Fit Out',
      date: '27 October 2025',
      title: 'Top Fit-Out Companies in Dubai for 2025: Expert Insights',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      excerpt: 'Discover the leading fit-out companies shaping Dubai\'s interior landscape in 2025.'
    },
    {
      id: 2,
      category: 'EV Solutions',
      date: '22 October 2025',
      title: 'EV Charging Infrastructure in Dubai: Complete Guide',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      excerpt: 'Everything you need to know about EV charging stations and infrastructure in Dubai.'
    },
    {
      id: 3,
      category: 'MEP',
      date: '17 October 2025',
      title: 'Top MEP Contracting Company in Dubai: 2025 Rankings',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      excerpt: 'Leading MEP contractors delivering excellence in mechanical, electrical, and plumbing services.'
    },
    {
      id: 4,
      category: 'WAREHOUSE',
      date: '14 October 2025',
      title: 'How Much Does a Warehouse Fit-Out Cost? A Guide by Macins',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      excerpt: 'Comprehensive breakdown of warehouse fit-out costs and investment considerations.'
    },
    {
      id: 5,
      category: 'Civil',
      date: '10 October 2025',
      title: 'Modern Civil Construction Techniques in UAE',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
      excerpt: 'Exploring innovative civil construction methods transforming the UAE landscape.'
    },
    {
      id: 6,
      category: 'ELV',
      date: '05 October 2025',
      title: 'Smart Building ELV Systems: Future of Construction',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      excerpt: 'How Extra Low Voltage systems are revolutionizing smart building infrastructure.'
    },
    {
      id: 7,
      category: 'Fit Out',
      date: '01 October 2025',
      title: 'Luxury Office Fit-Out Trends in Dubai',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      excerpt: 'Discover the latest trends in premium office interior design and fit-out solutions.'
    },
    {
      id: 8,
      category: 'EV Solutions',
      date: '28 September 2025',
      title: 'Tesla Charging Stations: Installation Guide',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      excerpt: 'Complete guide to installing Tesla and EV charging infrastructure for businesses.'
    },
    {
      id: 9,
      category: 'MEP',
      date: '25 September 2025',
      title: 'Energy-Efficient MEP Solutions for Commercial Buildings',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
      excerpt: 'Implementing sustainable MEP systems to reduce energy consumption and costs.'
    },
    {
      id: 10,
      category: 'WAREHOUSE',
      date: '20 September 2025',
      title: 'Warehouse Automation: The Future of Logistics',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      excerpt: 'How automation is transforming warehouse operations and logistics efficiency.'
    },
    {
      id: 11,
      category: 'Civil',
      date: '15 September 2025',
      title: 'Sustainable Construction Materials in UAE',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      excerpt: 'Exploring eco-friendly construction materials and sustainable building practices.'
    },
    {
      id: 12,
      category: 'ELV',
      date: '10 September 2025',
      title: 'Security Systems Integration in Smart Buildings',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
      excerpt: 'Advanced security and access control systems for modern commercial spaces.'
    }
  ];

  const filteredArticles = activeCategory === 'All Posts' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  const displayedArticles = filteredArticles.slice(0, visibleArticles);
  const hasMoreArticles = visibleArticles < filteredArticles.length;

  const handleLoadMore = () => {
    setVisibleArticles(prev => prev + 6);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleArticles(6);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">NEWS</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Latest insights, updates, and industry expertise
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-md z-30 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={activeCategory === category ? { backgroundColor: '#059669' } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-4 py-2 rounded-full text-white text-sm font-semibold"
                      style={{ backgroundColor: '#059669' }}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#059669] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <button className="flex items-center space-x-2 font-semibold group/btn" style={{ color: '#059669' }}>
                    <span>Continue Reading</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreArticles && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#059669' }}
              >
                Load More Articles ({filteredArticles.length - visibleArticles} remaining)
              </button>
            </div>
          )}

          {/* All Articles Loaded Message */}
          {!hasMoreArticles && filteredArticles.length > 0 && (
            <div className="text-center mt-12">
              <p className="text-gray-600 text-lg">
                You've reached the end. All articles loaded! ✓
              </p>
            </div>
          )}

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No articles found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Carousel Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Articles
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500">
                {newsArticles.slice(0, 3).map((article) => (
                  <div key={article.id} className="min-w-full relative">
                    <div className="relative h-[500px]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                        <span
                          className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                          style={{ backgroundColor: '#059669' }}
                        >
                          {article.category}
                        </span>
                        <h3 className="text-4xl font-bold mb-4">{article.title}</h3>
                        <p className="text-lg mb-6 opacity-90">{article.excerpt}</p>
                        <button className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all">
                          <span>Read Full Article</span>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Navigation */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all shadow-lg"
              style={{ color: '#059669' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all shadow-lg"
              style={{ color: '#059669' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#059669' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest news, insights, and industry updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;