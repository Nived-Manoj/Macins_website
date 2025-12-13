import React from 'react';
import Abudhabi from "../assets/clients/abudhabi.png";


const ClientLogos = () => {
  // Sample client logos - replace with your actual logo URLs
 // Sample client logos - replace with your actual logo URLs
  const clients = [
    { name: 'Client 1', logo: Abudhabi },
    { name: 'Client 2', logo: Abudhabi },
    { name: 'Client 3', logo: Abudhabi },
    { name: 'Client 4', logo: Abudhabi },
    { name: 'Client 5', logo: Abudhabi },
    { name: 'Client 6', logo: Abudhabi },
    { name: 'Client 7', logo: Abudhabi },
    { name: 'Client 8', logo: Abudhabi },
     { name: 'Client 1', logo: Abudhabi },
    { name: 'Client 2', logo: Abudhabi },
    { name: 'Client 3', logo: Abudhabi },
    { name: 'Client 4', logo: Abudhabi },
    { name: 'Client 5', logo: Abudhabi },
    { name: 'Client 6', logo: Abudhabi },
    { name: 'Client 7', logo: Abudhabi },
    { name: 'Client 8', logo: Abudhabi },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600">
            Join hundreds of satisfied clients worldwide
          </p>
        </div>

        {/* Scrolling container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 via-gray-100 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling logos */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {clients.map((client, index) => (
                <div
                  key={`original-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            {/* <div className="flex animate-scroll">
              {clients.map((client, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;