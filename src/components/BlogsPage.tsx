import React, { useState } from 'react';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const categories = ['All Posts', 'Industry Insights', 'Technology', 'Sustainability', 'Case Studies', 'Best Practices', 'Innovation'];

  const blogPosts = [
    {
      id: 1,
      category: 'Industry Insights',
      date: '25 December 2025',
      title: 'The Future of Smart Buildings in the Middle East',
      author: 'Ahmed Hassan',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      excerpt: 'Exploring how IoT and AI are transforming building management systems across the UAE and Saudi Arabia.'
    },
    {
      id: 2,
      category: 'Technology',
      date: '20 December 2025',
      title: 'EV Infrastructure: Building the Foundation for Electric Mobility',
      author: 'Sarah Mitchell',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      excerpt: 'A comprehensive look at the technology behind modern EV charging stations and future innovations.'
    },
    {
      id: 3,
      category: 'Sustainability',
      date: '18 December 2025',
      title: 'Energy Efficiency: Reducing Carbon Footprint in Commercial Buildings',
      author: 'Dr. Fatima Al Zaabi',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
      excerpt: 'Strategies and technologies for achieving net-zero goals in modern commercial real estate.'
    },
    {
      id: 4,
      category: 'Case Studies',
      date: '15 December 2025',
      title: 'Transforming Dubai Mall: A MEP Success Story',
      author: 'Mohammed Al Rashid',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
      excerpt: 'How we retrofitted one of Dubai\'s largest shopping centers with cutting-edge MEP systems.'
    },
    {
      id: 5,
      category: 'Best Practices',
      date: '12 December 2025',
      title: 'Interior Design Trends: Blending Aesthetics with Functionality',
      author: 'Linda Chen',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
      excerpt: 'The latest trends in commercial fit-out design that balance beauty and practical workspace needs.'
    },
    {
      id: 6,
      category: 'Innovation',
      date: '08 December 2025',
      title: 'AI-Powered Energy Management Systems',
      author: 'Raj Patel',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      excerpt: 'How artificial intelligence is revolutionizing energy consumption monitoring and optimization.'
    },
    {
      id: 7,
      category: 'Technology',
      date: '05 December 2025',
      title: 'The Rise of Modular Construction in the UAE',
      author: 'James Wilson',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
      excerpt: 'Exploring how prefabricated building solutions are changing the construction landscape.'
    },
    {
      id: 8,
      category: 'Industry Insights',
      date: '01 December 2025',
      title: 'Healthcare Infrastructure: Meeting Growing Demands',
      author: 'Dr. Aisha Mohammed',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
      excerpt: 'The evolution of healthcare facilities and the technology supporting modern medical tourism.'
    },
    {
      id: 9,
      category: 'Sustainability',
      date: '28 November 2025',
      title: 'Solar Integration in Commercial Buildings',
      author: 'Hassan Ibrahim',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      excerpt: 'Best practices for incorporating solar power systems into existing building infrastructure.'
    },
    {
      id: 10,
      category: 'Case Studies',
      date: '25 November 2025',
      title: 'Warehouse Automation: A Real-World Implementation',
      author: 'David Lee',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      excerpt: 'From concept to reality: How we automated a 50,000 sq ft logistics facility in Dubai.'
    },
    {
      id: 11,
      category: 'Best Practices',
      date: '22 November 2025',
      title: 'Project Management Excellence in Construction',
      author: 'Omar Khalid',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      excerpt: 'Key methodologies and tools for delivering complex construction projects on time and budget.'
    },
    {
      id: 12,
      category: 'Innovation',
      date: '18 November 2025',
      title: 'Digital Twin Technology in Building Management',
      author: 'Emily Rodriguez',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      excerpt: 'How virtual building replicas are transforming facility management and predictive maintenance.'
    }
  ];

  const filteredBlogs = activeCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(blog => blog.category === activeCategory);

  const displayedBlogs = filteredBlogs.slice(0, visibleBlogs);
  const hasMoreBlogs = visibleBlogs < filteredBlogs.length;

  const handleLoadMore = () => {
    setVisibleBlogs(prev => prev + 6);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleBlogs(6);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">BLOG</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Insights, expertise, and thought leadership
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-md z-40 py-6">
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

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-4 py-2 rounded-full text-white text-sm font-semibold"
                      style={{ backgroundColor: '#059669' }}
                    >
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#059669] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      <span>{blog.author}</span>
                    </div>
                    <button className="flex items-center space-x-1 font-semibold group/btn" style={{ color: '#059669' }}>
                      <span className="text-sm">Read</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreBlogs && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#059669' }}
              >
                Load More Articles ({filteredBlogs.length - visibleBlogs} remaining)
              </button>
            </div>
          )}

          {/* All Articles Loaded Message */}
          {!hasMoreBlogs && filteredBlogs.length > 0 && (
            <div className="text-center mt-12">
              <p className="text-gray-600 text-lg">
                You've reached the end. All articles loaded! ✓
              </p>
            </div>
          )}

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No articles found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Blog Highlight */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Editor's Pick
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((blog) => (
              <div key={blog.id} className="group cursor-pointer">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span
                      className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                      style={{ backgroundColor: '#059669' }}
                    >
                      {blog.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                    <div className="flex items-center gap-4 text-sm opacity-90">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {blog.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#059669' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Blog</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest insights, trends, and expert advice delivered directly to your inbox
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

export default BlogsPage;