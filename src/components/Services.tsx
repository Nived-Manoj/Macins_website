// import { Wrench, Zap, Car, Factory, Building, Cpu, Trees, Settings } from 'lucide-react';

// export default function Services() {
//   const services = [
//     {
//       icon: Wrench,
//       title: 'MEP Contracting',
//       description: 'Complete mechanical, electrical, and plumbing solutions for residential and commercial projects.',
//       color: 'from-teal-600 to-cyan-600',
//     },
//     {
//       icon: Building,
//       title: 'Interior Fit-Out',
//       description: 'Premium interior design and construction services that transform spaces into inspiring environments.',
//       color: 'from-cyan-600 to-blue-600',
//     },
//     {
//       icon: Zap,
//       title: 'Energy Solutions',
//       description: 'Smart energy systems and renewable energy integration for sustainable infrastructure.',
//       color: 'from-teal-600 to-green-600',
//     },
//     {
//       icon: Car,
//       title: 'EV Infrastructure',
//       description: 'Complete electric vehicle charging solutions and infrastructure development.',
//       color: 'from-blue-600 to-teal-600',
//     },
//     {
//       icon: Factory,
//       title: 'Fabrication',
//       description: 'High-quality steel fabrication and manufacturing services for construction projects.',
//       color: 'from-gray-600 to-teal-600',
//     },
//     {
//       icon: Building,
//       title: 'Real Estate',
//       description: 'Property development and real estate investment solutions across key markets.',
//       color: 'from-teal-600 to-cyan-700',
//     },
//     {
//       icon: Cpu,
//       title: 'BMS & Retrofit',
//       description: 'Building management systems and energy-efficient retrofit solutions.',
//       color: 'from-cyan-600 to-teal-600',
//     },
//     {
//       icon: Trees,
//       title: 'Civil Works',
//       description: 'Comprehensive civil engineering and construction services for large-scale projects.',
//       color: 'from-green-600 to-teal-600',
//     },
//   ];

//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="text-center mb-16">
//           <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
//             How We Can Help
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Our Core Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Comprehensive solutions across multiple sectors, delivering excellence in every project we undertake.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

//               <div className="relative z-10">
//                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                   <service.icon size={28} />
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
//                   {service.description}
//                 </p>

//                 <div className="mt-6 inline-flex items-center text-teal-600 font-semibold text-sm group-hover:text-white transition-colors">
//                   Learn More
//                   <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





import { Wrench, Zap, Car, Factory, Building, Cpu, Trees } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'MEP Contracting',
      description: 'Complete mechanical, electrical, and plumbing solutions for residential and commercial projects.',
      color: 'bg-gradient-to-br from-teal-600 to-cyan-600',
    },
    {
      icon: Building,
      title: 'Interior Fit-Out',
      description: 'Premium interior design and construction services that transform spaces into inspiring environments.',
      color: 'bg-gradient-to-br from-cyan-600 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Energy Solutions',
      description: 'Smart energy systems and renewable energy integration for sustainable infrastructure.',
      color: 'bg-gradient-to-br from-teal-600 to-green-600',
    },
    {
      icon: Car,
      title: 'EV Infrastructure',
      description: 'Complete electric vehicle charging solutions and infrastructure development.',
      color: 'bg-gradient-to-br from-blue-600 to-teal-600',
    },
    {
      icon: Factory,
      title: 'Fabrication',
      description: 'High-quality steel fabrication and manufacturing services for construction projects.',
      color: 'bg-gradient-to-br from-gray-600 to-teal-600',
    },
    {
      icon: Building,
      title: 'Real Estate',
      description: 'Property development and real estate investment solutions across key markets.',
      color: 'bg-gradient-to-br from-teal-600 to-cyan-700',
    },
    {
      icon: Cpu,
      title: 'BMS & Retrofit',
      description: 'Building management systems and energy-efficient retrofit solutions.',
      color: 'bg-gradient-to-br from-cyan-600 to-teal-600',
    },
    {
      icon: Trees,
      title: 'Civil Works',
      description: 'Comprehensive civil engineering and construction services for large-scale projects.',
      color: 'bg-gradient-to-br from-green-600 to-teal-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
            How We Can Help
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions across multiple sectors, delivering excellence in every project we undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative w-full font-sans p-6 cursor-pointer rounded-xl bg-gray-100 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.color} text-white mb-5`}>
                <service.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 group-hover:underline transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="text-gray-500 text-xs mb-8">
                Available Now
              </div>
              
              <div className="absolute bottom-0 right-0 bg-teal-600 group-hover:bg-gray-900 p-3 rounded-tl-xl rounded-br-xl transition-colors duration-200 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  height={15} 
                  width={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path 
                    fill="#fff" 
                    d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z" 
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}