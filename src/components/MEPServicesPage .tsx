import React, { useState } from 'react';
import { ChevronDown, Zap, Wifi, Wind, Flame, Droplets, X, ChevronLeft } from 'lucide-react';

// --- Data Structure (Same as before, moved outside the component for clarity) ---
const servicesData = [
  {
    id: 'electrical',
    title: 'Electrical Works',
    icon: Zap,
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
    items: [
      'Systems for cable containment',
      'Implementation of Electrical Switchgear Panels, including Main Distribution Boards (MDBs), Sub Main Distribution Boards (SMDBs), Distribution Boards (DBs), and Capacitor Banks',
      'Both interior and exterior Lighting and Power solutions',
      'Laying of cables, glanding, and termination',
      'Installation of Motor Control Centers and Control Panels',
      'Earthing and Lightning Protection Systems'
    ]
  },
  {
    id: 'lowvoltage',
    title: 'Extra Low Voltage Works',
    icon: Wifi,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    items: [
      'Fiber Optic Cable installation, testing, splicing, and termination',
      'Closed-Circuit Television systems (IP/Analog)',
      'Public Announcement Systems',
      'Audio and Visual Systems',
      'Systems for controlling access, Satellite Master Antenna Television and IP TV Systems',
      'Structured Cable Infrastructure Solutions',
      'Building Monitoring and Management Systems',
      'Instrumentation and Control Cable infrastructure and termination services',
      'Programmable Logic Controller and Supervisory Control and Data Acquisition Systems'
    ]
  },
  {
    id: 'hvac',
    title: 'Heating, Ventilation and Air Conditioning',
    icon: Wind,
    image: 'https://images.pexels.com/photos/416423/pexels-photo-416423.jpeg',
    items: [
      'Balancing air and water flow',
      'Ensuring proper air pressure in stairways',
      'Designing HVAC ducting systems that meet SMACNA/DW 144 standards',
      'Calculating heat load and choosing the appropriate equipment',
      'Installation, testing, and commissioning of AC ducting, chilled water piping, and accessories in accordance with ASHRAE and CIBSE standards',
      'Implementing chillers, direct expansion units, pumps, air handling units, fan coil units, fans, and related accessories',
      'Implementing systems for smoke and heat ventilation'
    ]
  },
  {
    id: 'fire',
    title: 'Fire Detection and Suppression Systems',
    icon: Flame,
    image: 'https://images.pexels.com/photos/31470430/pexels-photo-31470430.jpeg',
    items: [
      'Installation, testing, and commissioning of fire pumps',
      'Advanced fire detection and fire fighting systems such as foam, pre-action, VESDA aspiration, FM 200, deluge, etc.',
      'Fire Hydrant System',
      'Addressable and conventional fire alarm systems',
      'Centralized battery and standalone emergency lighting systems, Public address and voice evacuation systems',
      'Wet and Dry Riser and Sprinkler Systems'
    ]
  },
  {
    id: 'plumbing',
    title: 'Sanitary and Plumbing Solutions',
    icon: Droplets,
    image: 'https://images.pexels.com/photos/161502/shower-shower-head-water-drop-of-water-161502.jpeg',
    items: [
      'Drainage Systems (Storm Water, Industrial and Domestic Drainage)',
      'Installation of pumps, tanks, and solar water heaters',
      'Water Supply Network (Hot, Cold, and Controlled Temperature Systems)'
    ]
  }
];

// --- New Modal Component ---
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: string[];
  Icon: React.ElementType;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, items, Icon }) => {
  if (!isOpen) return null;

  return (
    // Overlay (Fixed position, full screen, dark background)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300 "
      onClick={onClose} // Close on clicking outside the content
    >
      {/* Modal Content */}
       <div
        className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700/50 transform scale-100 transition-transform duration-300 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Modal Header */}
        <div className="sticky top-0 p-6 flex items-center justify-between bg-gray-900 border-b border-gray-700/50 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#f0fdf4]/10 rounded-lg border border-[#f0fdf4]/20 flex-shrink-0">
              <Icon className="w-6 h-6 text-[#f0fdf4]" />
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body / Service Items */}
        <div className="p-6 space-y-4">
          <p className="text-gray-300 text-lg mb-6">
            Detailed list of services provided under **{title}**:
          </p>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-gray-900/40 rounded-lg border border-gray-700/30"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#f0fdf4] mt-2 flex-shrink-0" />
              <p className="text-gray-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const MEPServicesPage = () => {
  // State to hold the data of the service to be displayed in the modal
  const [modalService, setModalService] = useState<typeof servicesData[0] | null>(null);

  const openModal = (service: typeof servicesData[0]) => {
    setModalService(service);
  };

  const closeModal = () => {
    setModalService(null);
  };

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
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/10 z-10" />
        <img
          src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg"
          alt="MEP Systems"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              MEP CONTRACTING
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Macins brings deep expertise in delivering comprehensive end-to-end MEP solutions—including mechanical, electrical, low voltage, fire protection, plumbing, and drainage systems—across a wide range of sectors, from commercial to residential developments throughout the U.A.E.
            </p>
            <div className="mt-8 h-px w-32 bg-[#f0fdf4] mx-auto" />
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-[#f0fdf4]/20 rounded-2xl p-8 md:p-12">
            <p className="text-gray-200 text-lg leading-relaxed">
              Our reputation as a trusted MEP contractor is built on a consistent track record of professional excellence, timely project delivery, and a relentless focus on quality. At every level of our organization, from leadership to on-site teams, we are driven by a commitment to exceed industry standards and client expectations—ensuring not only project success, but long-term value and growth for our clients and partners.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid (Modified to open modal instead of expanding inline) */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#059669] text-center mb-16">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((service) => {
              const Icon = service.icon;
              
              return (
                <div
                  key={service.id}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#f0fdf4]/30 transition-all duration-500 cursor-pointer"
                  onClick={() => openModal(service)} // Open modal on card click
                >
                  {/* Service Header with Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="p-2.5 bg-[#f0fdf4]/10 backdrop-blur-sm rounded-lg border border-[#f0fdf4]/20 flex-shrink-0">
                            <Icon className="w-6 h-6 text-[#f0fdf4]" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white text-left">
                            {service.title}
                          </h3>
                        </div>
                        {/* Replaced ChevronDown with a 'Read More' style element */}
                        <div className='py-1 px-3 text-sm bg-[#f0fdf4] text-gray-900 font-semibold rounded-full flex items-center'>
                            View Details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#f0fdf4]/10 to-[#f0fdf4]/5 backdrop-blur-sm border border-[#f0fdf4]/20 rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss how our MEP solutions can bring your vision to life.
            </p>
            <button className="px-8 py-4 bg-[#f0fdf4] text-gray-900 font-semibold rounded-xl hover:bg-[#f0fdf4]/90 transition-colors duration-300 shadow-lg shadow-[#f0fdf4]/20">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Service Detail Modal */}
      {modalService && (
        <Modal
          isOpen={!!modalService}
          onClose={closeModal}
          title={modalService.title}
          items={modalService.items}
          Icon={modalService.icon}
        />
      )}
    </div>
  );
};

export default MEPServicesPage;