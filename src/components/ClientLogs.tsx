import React from 'react';
import Abudhabi from "../assets/clients/abudhabi.png";
import Dubai from "../assets/clients/dubai.png";
import Alain from "../assets/clients/alain.jfif";
import Appareal from "../assets/clients/appareal.png";
import Aried from "../assets/clients/aries.jfif";
import Bab from "../assets/clients/bab.jfif";
import CityUniversity from "../assets/clients/cityUniversity.png";
import DpWoris from "../assets/clients/dpWorls.jfif";
import Emaar from "../assets/clients/emaar.png";
import Enova from "../assets/clients/enova.png";
import Global from "../assets/clients/global.jfif";
import Image from "../assets/clients/images.png";
import IslamicAffairs from "../assets/clients/islamicAffairs.jfif";
import Khidma from "../assets/clients/khidma.jfif";
import MajidFuttai from "../assets/clients/majidFuttaim.png";
import inistry from "../assets/clients/ministry.jfif";
import Provis from "../assets/clients/provis.jfif";
import ShuaaEnergy from "../assets/clients/shuaaEnergy.jfif";
import Tesla from "../assets/clients/tesla.png";
import TransGit from "../assets/clients/transgilf.jfif";
import VoxCinesa from "../assets/clients/voxCineas.png";
import WorldScruity from "../assets/clients/worldScurity.jfif";

const ClientLogos = () => {
  const clients = [
    { name: 'Abu Dhabi', logo: Abudhabi },
    { name: 'Dubai', logo: Dubai },
    { name: 'Al Ain', logo: Alain },
    { name: 'Appareal', logo: Appareal },
    { name: 'Aries', logo: Aried },
    { name: 'BAB', logo: Bab },
    { name: 'City University', logo: CityUniversity },
    { name: 'DP World', logo: DpWoris },
    { name: 'Emaar', logo: Emaar },
    { name: 'Enova', logo: Enova },
    { name: 'Global', logo: Global },
    { name: 'Client', logo: Image },
    { name: 'Islamic Affairs', logo: IslamicAffairs },
    { name: 'Khidma', logo: Khidma },
    { name: 'Majid Futtaim', logo: MajidFuttai },
    { name: 'Ministry', logo: inistry },
    { name: 'Provis', logo: Provis },
    { name: 'Shuaa Energy', logo: ShuaaEnergy },
    { name: 'Tesla', logo: Tesla },
    { name: 'Trans Gulf', logo: TransGit },
    { name: 'VOX Cinemas', logo: VoxCinesa },
    { name: 'World Security', logo: WorldScruity },
        { name: 'World Security', logo: "https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/Elister%20med.png/:/rs=w:179,h:100,cg:true,m/cr=w:179,h:100" },

    { name: 'Acciona', logo: "https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/Acciona_Logo.jpg/:/rs=w:267,h:100,cg:true,m/cr=w:267,h:100/qt=q:25" },
    { name: 'Lipton', logo: "https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/Lipton%20teas%20and%20Infusions.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:25" },
    { name: 'Mall of the Emirates', logo: "https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/mall%20of%20the%20emirates.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:180,h:100,cg:true/qt=q:25" },
    { name: 'PVH', logo: "https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/pvh%20logo.png/:/rs=w:206,h:100,cg:true,m/cr=w:206,h:100/qt=q:25" },
    { name: 'World Security', logo: "https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/grs%20logo%201.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:25" },
    { name: 'World Security', logo: "https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/lulu-group-international-logo-vector%20(2).webp/:/rs=w:180,h:100,cg:true,m/cr=w:180,h:100/qt=q:25" },

  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600">
            Join hundreds of satisfied clients worldwide
          </p>
        </div>

        {/* Scrolling container */}
        <div className="relative">
          {/* Gradient overlays */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div> */}

          {/* Scrolling track */}
          <div className="flex">
            <div className="flex animate-scroll-container">
              {/* First set of logos */}
              <div className="flex">
                {clients.map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 mx-8 flex items-center justify-center w-40 h-24"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      style={{
                        height: "150px"
                      }}
                      className="max-w-full max-h-full object-contain hover:opacity-100 transition-all duration-300 filter drop-shadow-sm"
                    />
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex" aria-hidden="true">
                {clients.map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 mx-8 flex items-center justify-center w-40 h-24"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      style={{
                        height: "150px"
                      }}
                      className="max-w-full max-h-full object-contain hover:opacity-100 transition-all duration-300 filter drop-shadow-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-container {
          animation: scroll 60s linear infinite;
        }

        .animate-scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;