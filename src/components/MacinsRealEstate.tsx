import React, { useState } from 'react';
import { Building2, Home, TrendingUp, Users, CheckCircle, MapPin, Award, Phone, Mail, ChevronLeft } from 'lucide-react';
import ContactPopup from './ContactPopup';

export default function MacinsRealEstate() {
  const [activeService, setActiveService] = useState(0);
   const [isPopupOpen, setIsPopupOpen] = useState(false);
    

  const services = [
    {
      title: "Property Development",
      description: "From concept to completion, we develop residential, commercial, and mixed-use projects that meet global standards.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      title: "Property Management",
      description: "Offering end-to-end management solutions ensuring high returns, smooth operations, and 100% tenant satisfaction.",
      icon: Home,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
    },
    {
      title: "Leasing & Sales",
      description: "Connecting clients to 200+ premium property units with a proven track record of 100% occupancy rates in prime locations.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
    },
    {
      title: "Investment Advisory",
      description: "Assisting clients in making the right real estate investments with strong ROI, backed by data and industry expertise.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    }
  ];

  const stats = [
    { value: "200+", label: "Property Units Managed" },
    { value: "100%", label: "Occupancy Rate" },
    { value: "10+", label: "Landmark Developments" },
    { value: "500+", label: "Trusted Clients" }
  ];

  const locations = ["Dubai", "Abu Dhabi", "Sharjah"];

  return (
    <div className="min-h-screen bg-white">
        <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                style={{
                    // opacity: isVisible ? 1 : 0,
                    // transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
                }}
            >
                <div
                    className=" mt-0 rounded-3xl px-4 py-5 flex transition-all duration-300"
                    style={{
                        backgroundColor: 'white',
                    }}
                >
                    <button
                        onClick={() => (window.location.href = "/#services")}
                        // onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-all duration-300 group"
                    >
                        <div className="p-2 rounded-full bg-gray-100 group-hover:bg-teal-50 transition-all">
                            <ChevronLeft size={20} />
                        </div>
                        <span className="font-semibold">Back</span>
                    </button>


                </div>
            </header>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/10 to-transparent"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              Macins Group • 15+ Years of Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Real Estate Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              We don't just build spaces — we create opportunities for growth and living.
            </p>
            <button className="px-8 py-4 bg-white text-[#064e3b] font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Contact Us Today
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/50 to-transparent h-32"></div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-20 z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-2xl p-6 text-center border-t-4 border-[#064e3b] transform hover:-translate-y-2 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Expertise Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions backed by decades of industry experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Service Navigation */}
          <div className="space-y-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  className={`w-full text-left p-6 rounded-xl transition-all ${
                    activeService === idx
                      ? 'bg-[#064e3b] text-white shadow-xl'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className={activeService === idx ? 'text-gray-100' : 'text-gray-600'}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Image */}
          <div className="sticky top-8">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <div className="text-3xl font-bold mb-2">{services[activeService].title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Macins Real Estate?</h2>
            <p className="text-xl text-gray-600">Excellence, integrity, and results-driven approach</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/11013077/pexels-photo-11013077.jpeg"
                alt="Professional Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {[
                "200+ property units developed & managed across Dubai, Abu Dhabi & Sharjah",
                "100% occupancy rate in flagship projects",
                "10+ landmark developments delivered in the UAE",
                "Trusted by 500+ clients, from corporates to individuals",
                "Strong integration with Macins Group's MEP, Interior Fit-Out & Fabrication divisions, ensuring quality construction and premium finishes"
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                  <CheckCircle className="w-6 h-6 text-[#064e3b] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Presence</h2>
          <p className="text-xl text-gray-600">Strategic locations across the UAE</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, idx) => (
            <div key={idx} className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
              <img
              src={idx === 0 ? "https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg":
                idx === 1? "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80"
                : "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=600&q=80"
              }
                // src={`https://images.unsplash.com/photo-${
                //   idx === 0 ? '1512453979522-23b0803f8c82' : 
                //   idx === 1 ? '1518684079-3c830dcef090' : 
                //   '1578469645742-46cae010e5d4'
                // }?w=600&q=80`}
                alt={location}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-[#064e3b]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 flex items-end p-8">
                <div className="text-white">
                  <MapPin className="w-8 h-8 mb-2" />
                  <h3 className="text-3xl font-bold">{location}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&q=80"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#064e3b]/90"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Future?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Partner with Macins Real Estate for premium developments and property management solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
             onClick={() => setIsPopupOpen(true)}className="px-8 py-4 bg-white text-[#064e3b] font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Us
            </button>
            
          </div>
        </div>
      </div>
 <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      
    </div>
  );
}