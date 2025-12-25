import React, { useState } from 'react';
import { HardHat, Layers, MapPin, Shield, Wrench, CheckCircle, Camera, Cable, Droplets, Mountain, ChevronLeft } from 'lucide-react';
import ContactPopup from './ContactPopup';

const CivilWorksPage = () => {
      const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
        
      {/* Hero Section with Background Image */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/10"></div>
        </div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">CIVIL WORKS</h1>
            <p className="text-3xl md:text-4xl font-light tracking-wide mb-4">Building Foundations, Shaping Futures</p>
            <div className="w-32 h-1 bg-white mx-auto mt-8"></div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div> */}
      </div>

      {/* General Civil Works Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">General Civil Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our civil division covers all core construction activities needed to prepare, build and support projects of any scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Site Preparation */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl h-96 cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Layers className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Site Preparation & Earthworks</h3>
              <p className="text-emerald-100 leading-relaxed">Excavation, grading, compaction, backfilling and asphalt cutting/removal</p>
            </div>
          </div>

          {/* Concrete Works */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl h-96 cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/2557098/pexels-photo-2557098.jpeg')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <HardHat className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Concrete & Structural Works</h3>
              <p className="text-emerald-100 leading-relaxed">Foundations, pedestals, slabs, structural bases and reinforced concrete works</p>
            </div>
          </div>

          {/* Manholes */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl h-96 cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Mountain className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Manholes & Chambers</h3>
              <p className="text-emerald-100 leading-relaxed">In-situ construction of manholes, draw pits, access chambers and duct systems</p>
            </div>
          </div>

          {/* Waterproofing */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl h-96 cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Droplets className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Waterproofing & Protection</h3>
              <p className="text-emerald-100 leading-relaxed">Membranes, screeds, protective coatings and asphaltic boards for long-term durability</p>
            </div>
          </div>

          {/* Infrastructure Ducting */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl h-96 cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Cable className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Infrastructure Ducting</h3>
              <p className="text-emerald-100 leading-relaxed">Installation of conduits, sleeves and underground service routes for electrical and communication networks</p>
            </div>
          </div>

          {/* Support Services */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl h-96 cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=2072')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <CheckCircle className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Support Services</h3>
              <p className="text-emerald-100 leading-relaxed">Surface leveling, landscaping, site logistics and coordination with fit-out and MEP works</p>
            </div>
          </div>
        </div>
      </div>

      {/* Specialized Works Section with Large Images */}
      <div className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')`
          }}
        >
          <div className="absolute inset-0 bg-emerald-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Specialized Civil Works</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              In addition to general contracting, we provide tailored civil solutions that support specialized projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CCTV & Security */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl h-80">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070')`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Camera className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-3">CCTV & Security Infrastructure</h3>
                <p className="text-gray-200 leading-relaxed">Excavation, ducting, draw pits, manholes and pole/camera foundations</p>
              </div>
            </div>

            {/* Utility Integration */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl h-80">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070')`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Wrench className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Utility Integration Works</h3>
                <p className="text-gray-200 leading-relaxed">Duct installations for electrical and communication lines, future cable provisions and connectivity chambers</p>
              </div>
            </div>

            {/* Retrofit */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl h-80">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031')`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <HardHat className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Retrofit & Fit-out Support</h3>
                <p className="text-gray-200 leading-relaxed">Enabling works for upgrades, renovations and green building projects</p>
              </div>
            </div>

            {/* Safety */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl h-80">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=2072')`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Shield className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Safety & Temporary Works</h3>
                <p className="text-gray-200 leading-relaxed">Site mobilization, barricades, cones, fencing, safety nets and controlled access arrangements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Underground Utility Survey - Full Width Image Section */}
      <div className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-emerald-900/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-8">Underground Utility Survey</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                We also specialize in underground utility detection and mapping to support safe excavation and infrastructure planning. Using advanced survey equipment such as Ground Penetrating Radar (GPR), RD8100 Cable Detector and GPS systems, we deliver accurate underground data with minimal disruption.
              </p>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Our Utility Survey Services Include:</h3>
                <div className="space-y-4">
                  {[
                    "Site reconnaissance and desktop study with available NOC/topography drawings",
                    "Detection and mapping of underground utilities using GSSI GPR and RD8100 Cable Detector",
                    "Locating and recording positions of manholes, chambers, and service markers",
                    "Opening manhole covers to capture invert levels and utility details",
                    "Preparation of utility survey drawings, manhole schedules, photos and GPR reports",
                    "Deliverables aligned with Dubai Municipality datum and control points"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-emerald-400 mr-4 flex-shrink-0 mt-1" />
                      <p className="text-gray-200 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=2070')`
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-xl">Ground Penetrating Radar (GPR)</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069')`
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-xl">RD8100 Cable Detection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA with Background */}
      <div className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')`
          }}
        >
          <div className="absolute inset-0 bg-emerald-900/95"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Build Your Future?
          </h2>
          <p className="text-emerald-100 text-xl mb-12 leading-relaxed">
            Let's discuss how our civil works expertise can bring your project to life
          </p>
          <button 
          onClick={() => setIsPopupOpen(true)}
          className="bg-white text-emerald-900 px-12 py-5 rounded-xl text-lg font-bold hover:bg-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default CivilWorksPage;