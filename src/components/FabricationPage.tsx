import React, { useState } from 'react';
import { Zap, Home, Building2, Wrench, Phone, CheckCircle2, ArrowRight, Hammer, Sparkles, Shield, Palette, ChevronLeft } from 'lucide-react';
import ContactPopup from './ContactPopup';

export default function FabricationPage() {
  const [activeService, setActiveService] = useState('mild');
   const [isPopupOpen, setIsPopupOpen] = useState(false);
    

  const services = [
    {
      id: 'mild',
      title: 'Mild Steel Fabrication',
      description: 'Creation of steelworks through processes such as design, cutting, bending, and assembly. Fabrication capabilities extend to table bases, outdoor furniture, bar counter footrests, chairs and stools, as well as coffee tables.',
      image: 'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg'
    },
    {
      id: 'structural',
      title: 'Structural Steel Fabrication',
      description: 'Fabrication of structural steel and metalworks including stainless steel cladding, sliding door hardware, handrails, water fountains, chandeliers, bicycle stands, and staircases.',
      image: 'https://images.pexels.com/photos/28951817/pexels-photo-28951817.jpeg'
    },
    {
      id: 'architectural',
      title: 'Architectural Steel Fabrication',
      description: 'Architectural steel fabrication services catering to modern construction and engineering projects, as well as interior designers and architects in Dubai, United Arab Emirates.',
      image: 'https://images.pexels.com/photos/3818947/pexels-photo-3818947.jpeg'
    },
    {
      id: 'powder',
      title: 'Powder Coating - Metal Paint',
      description: 'Powder coating and metal painting services that result in more durable, water-resistant, and stronger finishes compared to regular liquid paints for any metal or steel finish materials.',
      image: 'https://images.pexels.com/photos/13779227/pexels-photo-13779227.jpeg'
    },
    {
      id: 'electroplating',
      title: 'Electroplating Fabrication',
      description: 'Electroplating process involving chrome plating and metal plating to prevent premature aging and corrosion of steel and metal.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9Bto3n0PB9vJZRPjH-teSvXF-alL4Vi91w&s'
    },
    {
      id: 'brass',
      title: 'Brass and Aluminium Works',
      description: 'Brass and Aluminium Fabrication for unique, non-corrosive works and designs for Modern Interiors, Furniture and Commercial Display.',
      image: 'https://images.pexels.com/photos/256206/pexels-photo-256206.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/22863134/pexels-photo-22863134.jpeg')] bg-cover bg-center"></div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Customized Metal Fabrication in UAE
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 font-light max-w-4xl mx-auto">
              Creating custom architectural metal pieces and interior metalworks tailored to your specific requirements
            </p>
            <button 
             onClick={() => setIsPopupOpen(true)}
            className="bg-white text-[#064e3b] px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-100 transition flex items-center gap-3 mx-auto shadow-2xl">
              Contact Us <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Expertise Banner */}
      

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] mb-6">
              Customized Fabrication in UAE
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our area of expertise is in creating custom architectural metal pieces, as well as interior metal works, tailored to the specific requirements of our customers. Whether it's for a project, a residential villa, or a retail shop, we can fabricate anything with metal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We offer a variety of finishes such as electroplating, powder coating, and raw patina. We can even make metal furniture. Additionally, we provide fabrication services for various project types in industries such as healthcare, industrial, commercial, and residential.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#064e3b] to-[#0a6847] p-8 rounded-2xl text-white text-center transform hover:scale-105 transition">
              <Hammer className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Design</h3>
              <p className="text-white/90 text-sm">Tailored metal pieces</p>
            </div>
            <div className="bg-gradient-to-br from-[#064e3b] to-[#0a6847] p-8 rounded-2xl text-white text-center transform hover:scale-105 transition">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Finishes</h3>
              <p className="text-white/90 text-sm">Multiple finish options</p>
            </div>
            <div className="bg-gradient-to-br from-[#064e3b] to-[#0a6847] p-8 rounded-2xl text-white text-center transform hover:scale-105 transition">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Durable Quality</h3>
              <p className="text-white/90 text-sm">Long-lasting materials</p>
            </div>
            <div className="bg-gradient-to-br from-[#064e3b] to-[#0a6847] p-8 rounded-2xl text-white text-center transform hover:scale-105 transition">
              <Building2 className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-Industry</h3>
              <p className="text-white/90 text-sm">All project types</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] text-center mb-16">
            Our Fabrication Services
          </h2>

          {/* Service Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white hover:shadow-3xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#064e3b] mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] text-center mb-16">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Healthcare */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/7518801/pexels-photo-7518801.jpeg"
                  alt="Healthcare"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="relative p-10 h-80 flex flex-col justify-end">
                <Building2 className="w-16 h-16 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-4">Healthcare</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Specialized metal fabrication for medical facilities, hospitals, and healthcare environments requiring precision and hygiene standards.
                </p>
              </div>
            </div>

            {/* Industrial */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/221028/pexels-photo-221028.jpeg"
                  alt="Industrial"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="relative p-10 h-80 flex flex-col justify-end">
                <Wrench className="w-16 h-16 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-4">Industrial</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Heavy-duty metal fabrication for industrial facilities, warehouses, and manufacturing plants with robust structural requirements.
                </p>
              </div>
            </div>

            {/* Commercial */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                  alt="Commercial"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="relative p-10 h-80 flex flex-col justify-end">
                <Building2 className="w-16 h-16 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-4">Commercial</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Custom metalwork for retail shops, offices, restaurants, and commercial spaces that combine aesthetics with functionality.
                </p>
              </div>
            </div>

            {/* Residential */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                  alt="Residential"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="relative p-10 h-80 flex flex-col justify-end">
                <Home className="w-16 h-16 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-4">Residential</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Elegant metal furniture and architectural elements for residential villas, homes, and luxury living spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            From concept to completion, we deliver exceptional metal fabrication services tailored to your needs. Contact us today to discuss your project.
          </p>
          <button
           onClick={() => setIsPopupOpen(true)}
           className="bg-[#064e3b] text-white px-12 py-5 rounded-full font-semibold text-lg hover:bg-[#0a6847] transition shadow-xl flex items-center gap-3 mx-auto">
            <Phone className="w-6 h-6" /> Contact Us Today
          </button>
        </div>
      </section>
       <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

    
    </div>
  );
}