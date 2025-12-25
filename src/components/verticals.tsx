import React, { useState } from 'react';
import { Building, Heart, Pencil, Shield, ArrowRight, Globe2, Users, Award, ChevronLeft } from 'lucide-react';
import ContactPopup from './ContactPopup';

const Verticals = () => {

          const [isPopupOpen, setIsPopupOpen] = useState(false);
    


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
       <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">            Expanding Horizons, Delivering Excellence
</h1>
          {/* <p className="text-2xl md:text-3xl mb-4">Building Tomorrow, Today</p> */}
          <p className="text-lg md:text-xl opacity-90">
Macins Group of Companies operates across multiple verticals, each backed by deep industry knowledge, 
            cutting-edge solutions, and a commitment to client success. Explore our diverse business divisions.          </p>
        </div>
      </section>
    

      {/* Intro Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Expanding Horizons, Delivering Excellence
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Macins Group of Companies operates across multiple verticals, each backed by deep industry knowledge, 
            cutting-edge solutions, and a commitment to client success. Explore our diverse business divisions.
          </p>
        </div>
      </section>

      {/* Real Estate Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6" style={{ backgroundColor: '#059669' }}>
                <Building className="w-10 h-10 text-white" />
              </div> */}
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Real Estate Agency in Dubai
              </h2>
              <p className="text-lg text-gray-600 mb-6">Real Estate Brokers</p>
              <p className="text-gray-700 leading-relaxed mb-8">
                At Macins Group of Companies, our team of experienced real estate professionals is dedicated to helping you find properties that perfectly match your lifestyle, investment goals, and vision. Whether you're buying, selling, or leasing, we combine market expertise with a personalized approach to deliver smart, seamless real estate solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Property Sales', 'Leasing Services', 'Investment Consulting', 'Market Analysis'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#059669' }} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
            
              href='https://macinsluxe.com/'
              className="group flex items-center space-x-2 px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#059669', width: "180px" }}>
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg"
                alt="Real Estate"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* AM Health Hub Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg"
                alt="Healthcare"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-around">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-1">40+</div>
                  <div className="text-sm opacity-90">Countries</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-1">35+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6" style={{ backgroundColor: '#059669' }}>
                <Heart className="w-10 h-10 text-white" />
              </div> */}
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                AM Health Hub
              </h2>
              <p className="text-lg text-gray-600 mb-6">Medical & Healthcare Solutions</p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Macins Group proudly expands into the healthcare sector through AM Health Hub, a trusted platform for medical tourism and personalized healthcare solutions. With a strong network of leading hospitals, clinics, and specialists across 40+ countries, AM Health Hub ensures seamless access to world-class treatments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                From free consultations and treatment planning to travel coordination and post-care support, the hub offers end-to-end solutions with a patient-first approach. Backed by 35+ years of combined expertise, AM Health Hub strengthens Macins Group's vision of delivering excellence across diverse industries while bringing quality healthcare within reach for everyone.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Free Consultations', 'Treatment Planning', 'Travel Coordination', 'Post-Care Support'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#059669' }} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
              href='https://www.amhealthhub.com/'
              className="group flex items-center space-x-2 px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300" 
              style={{ backgroundColor: '#059669', width: "180px" }}>
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Design Future Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6" style={{ backgroundColor: '#059669' }}>
                <Pencil className="w-10 h-10 text-white" />
              </div> */}
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Design Future
              </h2>
              <p className="text-lg text-gray-600 mb-6">Interior Design Excellence</p>
              <p className="text-gray-700 leading-relaxed mb-8">
                From initial consultation to final installation, our streamlined process ensures that your interior design project runs smoothly and efficiently. We transform spaces into stunning environments that reflect your unique style and functional needs.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Consultation', desc: 'Understanding your vision and requirements' },
                  { title: 'Design Development', desc: 'Creating tailored design concepts' },
                  { title: 'Project Management', desc: 'Coordinating all aspects seamlessly' },
                  { title: 'Installation', desc: 'Flawless execution and final touches' }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#059669' }}>
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a 
              href='https://designfuture.store/'
              className="group flex items-center space-x-2 px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300" 
              style={{ backgroundColor: '#059669', width: "220px" }}>
                <span>View Our Process</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
                alt="Interior Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Check Point Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="order-1 md:order-2">
              {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6" style={{ backgroundColor: '#059669' }}>
                <Shield className="w-10 h-10 text-white" />
              </div> */}
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Check Point Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">Portfolio & Past Projects</p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Take a look at some of our past projects and get inspired for your own interior design project. We have experience working on a wide variety of spaces, from residential to commercial.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Residential Projects', 'Commercial Spaces', 'Hospitality Design', 'Retail Interiors'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#059669' }} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
              href='https://checkpointservices.store/'
              className="group flex items-center space-x-2 px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300" 
              style={{ backgroundColor: '#059669', width: "230px" }}>
                <span>View Our Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#059669' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <Globe2 className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you need real estate services, healthcare solutions, interior design, or project management, 
            our expert teams are ready to deliver excellence tailored to your needs.
          </p>
          <button 
                         onClick={() => setIsPopupOpen(true)}

          className="px-10 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Contact Us Today
          </button>
        </div>
      </section>

                  <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

    </div>
  );
};

export default Verticals;