import React from 'react';
import { Building2, Globe, Zap, Car, Hammer, Users, ChevronLast, ChevronLeft } from 'lucide-react';

const AboutUs = () => {
  const regions = [
    { name: 'United Arab Emirates', flag: '🇦🇪' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Qatar', flag: '🇶🇦' }
  ];

  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Energy Solutions',
      description: 'Smart, sustainable energy-saving solutions for education, healthcare, retail, and more.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: 'EV Charging Infrastructure',
      description: 'Advanced charging stations for Tesla and premium EVs with IoT-enabled monitoring.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80'
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: 'Joinery & Fit-Out',
      description: 'Premium bespoke craftsmanship for commercial and residential spaces.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Construction Solutions',
      description: 'MEP, ELV systems, and precision fabrication services for all project scales.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Macins Group of Companies</h1>
          <p className="text-2xl md:text-3xl mb-4">Building Tomorrow, Today</p>
          <p className="text-lg md:text-xl opacity-90">
            Leading provider of integrated solutions across technology, construction, energy, and logistics
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ color: '#059669' }}>
                How We Started
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2014 and headquartered in Dubai, Macins Group of Companies is a leading provider of integrated solutions across the technology, construction, energy, and logistics sectors.
                </p>
                <p>
                  With a reputation built on trust, quality, and innovation, we specialize in delivering high-performance services that meet the evolving needs of our clients. Our team of seasoned professionals brings deep industry expertise and a commitment to excellence in every project we undertake.
                </p>
                <p className="font-semibold text-lg">
                  At Macins, we don't just offer services — we build long-term partnerships driven by performance, precision, and progress.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src="https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/blob-04b50d0.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-20 px-4" style={{ backgroundColor: '#f0fdf4' }}>
        <div className="max-w-7xl mx-auto text-center">
          <Globe className="w-16 h-16 mx-auto mb-6" style={{ color: '#059669' }} />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Regional Presence, Global Standards</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Macins Group operates actively across the UAE, India, Kingdom of Saudi Arabia, and Qatar, delivering comprehensive services tailored to meet modern business needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{region.flag}</div>
                <h3 className="text-lg font-semibold text-gray-900">{region.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for every industry need</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="mb-4" style={{ color: '#059669' }}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Solutions Detail */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src="https://img1.wsimg.com/isteam/stock/rDAExxN/:/cr=t:0%25,l:8.41%25,w:83.17%25,h:100%25/rs=w:600,h:600,cg:true"
                alt="Solar panels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Smart, Sustainable Energy Solutions
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We specialize in delivering energy-saving solutions tailored for diverse sectors including education, healthcare, retail, real estate, transportation, shopping malls, and entertainment venues.
                </p>
                <p>
                  By integrating the latest IoT technologies, we monitor, analyze, and optimize energy usage in real-time—enabling significant savings while enhancing system performance.
                </p>
                <p>
                  We take pride in supporting organizations to lower their carbon footprint and transition toward more sustainable operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EV Charging Detail */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive EV Charging Solutions
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We specialize in the design, installation, and maintenance of advanced EV charging stations, including infrastructure tailored for Tesla and other premium electric vehicles.
                </p>
                <p>
                  Our EV stations are engineered to be user-friendly, reliable, and energy-efficient, ensuring a seamless charging experience for both private and commercial users.
                </p>
                <p>
                  By integrating smart technologies and IoT-enabled monitoring, our systems allow for real-time performance tracking, load management, and preventive maintenance.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/blob-9498e6a.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:600,cg:true"
                alt="EV Charging"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4" style={{ backgroundColor: '#059669' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed">
            To empower clients by combining cutting-edge technology with expert industry insight — helping them achieve their goals efficiently, securely, and sustainably. With every project, we aim to add value, drive growth, and enable long-term success.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Macins Group?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#059669' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Seasoned professionals with deep industry expertise</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#059669' }}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation Driven</h3>
              <p className="text-gray-600">Cutting-edge technology and future-ready solutions</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#059669' }}>
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assured</h3>
              <p className="text-gray-600">On-time, on-budget delivery that exceeds expectations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;