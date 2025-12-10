import React, { useState, useEffect } from 'react';
import { ChevronLeft, MapPin, Bed, Bath, Square, Calendar, Phone, Mail, Heart, Share2, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PropertyDetail() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample property data
  const property = {
    title: "Miami, FL",
    location: "South Beach",
    price: "$895,000",
    beds: 3,
    baths: 2,
    sqft: "1,900",
    yearBuilt: 2021,
    description: "Experience luxury coastal living in this meticulously designed residence. With expertise across construction, interior solutions, and joinery, this property exemplifies our commitment to creating spaces that enhance human experience and stand the test of time. Every detail has been carefully crafted to deliver enduring value.",
    features: [
      "Premium hardwood flooring throughout",
      "Gourmet chef's kitchen with premium appliances",
      "Open-concept living and dining areas",
      "Private balcony with ocean views",
      "Smart home automation system",
      "Energy-efficient climate control",
      "Custom built-in storage solutions",
      "High-end bathroom fixtures and finishes"
    ],
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&q=80&w=1200"
    ]
  };

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 font-sans overflow-x-hidden">
      {/* Floating Header */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
        }}
      >
        <div 
          className=" mt-0 rounded-3xl px-4 py-5 flex transition-all duration-300"
          style={{
            backgroundColor:  'white',
            // marginLeft:"20px",
            // width: "130px"
            // backdropFilter: 'blur(20px)',
            // boxShadow: scrollY > 50 ? '0 10px 40px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.05)'
          }}
        >
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-all duration-300 group"
          >
            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-teal-50 transition-all">
              <ChevronLeft size={20} />
            </div>
            <span className="font-semibold">Back</span>
          </button>
          
          
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            transform: `translateY(${parallaxOffset}px) scale(${1 + scrollY * 0.0002})`,
            opacity: isVisible ? 1 : 0,
          }}
        >
          <img
            src={property.images[activeImage]}
            alt="Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        </div>

        {/* Floating Info Card */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl transition-all duration-1000 delay-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) translateX(-50%)' : 'translateY(100px) translateX(-50%)'
          }}
        >
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600">Available Now</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={20} className="text-teal-600" />
                  <span className="text-lg">{property.location}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Starting from</p>
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  {property.price}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {property.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`transition-all duration-300 rounded-full ${
                activeImage === idx 
                  ? 'w-12 h-3 bg-white' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Gallery */}
          <div className="container mx-auto px-4 py-8">
        <div 
          className="flex gap-4 overflow-x-auto pb-4 transition-all duration-1000 delay-300 hide-scrollbar"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {property.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`relative flex-shrink-0 w-40 h-32 rounded-2xl overflow-hidden transition-all duration-500 group ${
                activeImage === idx 
                  ? 'scale-105 shadow-xl' 
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                activeImage === idx ? 'bg-teal-500/20' : 'bg-black/0 group-hover:bg-black/10'
              }`} />
            </button>
          ))}
        </div>
      </div>


      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Stats */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              {[
                { icon: Bed, value: property.beds, label: 'Bedrooms', color: 'from-blue-500 to-blue-600' },
                { icon: Bath, value: property.baths, label: 'Bathrooms', color: 'from-purple-500 to-purple-600' },
                { icon: Square, value: property.sqft, label: 'Sq Ft', color: 'from-orange-500 to-orange-600' },
                { icon: Calendar, value: property.yearBuilt, label: 'Year Built', color: 'from-green-500 to-green-600' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <stat.icon className="text-gray-400 group-hover:text-teal-600 mb-3 transition-all duration-300 group-hover:scale-110" size={32} />
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div 
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg transition-all duration-700 delay-600 hover:shadow-xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full" />
                <h2 className="text-3xl font-bold text-gray-900">About This Property</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div 
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg transition-all duration-700 delay-700 hover:shadow-xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full" />
                <h2 className="text-3xl font-bold text-gray-900">Premium Features</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-teal-50 transition-all duration-300 hover:translate-x-2 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Contact Form */}
          <div className="lg:col-span-1">
            <div 
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl sticky top-24 transition-all duration-700 delay-800 border border-gray-100"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-10 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full" />
                <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
              </div>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all bg-white shadow-sm hover:shadow-md"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all bg-white shadow-sm hover:shadow-md"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all bg-white shadow-sm hover:shadow-md"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all resize-none bg-white shadow-sm hover:shadow-md"
                />
                <button className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold py-5 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Schedule a Viewing</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </button>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-gray-200 space-y-4">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  Contact Agent
                </h4>
                <a href="tel:+1234567890" className="flex items-center gap-4 text-gray-700 hover:text-teal-600 transition-all duration-300 p-3 rounded-2xl hover:bg-teal-50 group">
                  <div className="p-2 rounded-xl bg-gray-100 group-hover:bg-teal-100 transition-all">
                    <Phone size={20} />
                  </div>
                  <span className="font-medium">+1 (234) 567-890</span>
                </a>
                <a href="mailto:agent@realworld.com" className="flex items-center gap-4 text-gray-700 hover:text-teal-600 transition-all duration-300 p-3 rounded-2xl hover:bg-teal-50 group">
                  <div className="p-2 rounded-xl bg-gray-100 group-hover:bg-teal-100 transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">agent@realworld.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div 
        className="relative bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 py-20 overflow-hidden transition-all duration-700 delay-900"
        style={{
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Building Excellence Since Day One
          </h2>
          <p className="text-teal-50 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            With expertise across construction, interior solutions, joinery, energy, and real estate, 
            we deliver projects that stand the test of time.
          </p>
          
        </div>
      </div>
    </div>
  );
}