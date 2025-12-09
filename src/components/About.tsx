// import { Globe, Users, Target, Award } from 'lucide-react';
// import heroBg1 from '../assets/pexels-houzlook-3356416.jpg';

// export default function About() {
//   return (
//     <section id="about" className="py-20 bg-gradient-to-br from-teal-700 to-cyan-700 relative overflow-hidden">
//       <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

//       <div className="container mx-auto px-6 lg:px-12 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <div className="rounded-3xl overflow-hidden shadow-2xl">
//               <img
//                 src= {heroBg1}
//                 alt="Modern office interior"
//                 className="w-full h-96 object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-8 shadow-2xl max-w-xs">
//               <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-2">
//                 Modern Design
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 About Macins Group
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Building the future with innovation and excellence
//               </p>
//             </div>
//           </div>

//           <div className="text-white space-y-8">
//             <div>
//               <div className="text-sm font-semibold tracking-widest uppercase text-cyan-200 mb-3">
//                 Our Story
//               </div>
//               <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//                 Building Tomorrow's Infrastructure Today
//               </h2>
//               <p className="text-lg text-gray-200 mb-6">
//                 Founded with a vision to transform the Middle East's construction and infrastructure landscape, Macins Group has grown into a diversified conglomerate delivering excellence across multiple sectors.
//               </p>
//               <p className="text-gray-200">
//                 Under the leadership of Praveen Pillai, we've established a reputation for innovation, quality, and reliability. Our integrated approach combines traditional craftsmanship with cutting-edge technology to deliver projects that stand the test of time.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-6">
//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
//                   <Globe className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-lg mb-1">Regional Presence</h4>
//                   <p className="text-sm text-gray-200">UAE, India, Saudi Arabia, Qatar</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
//                   <Users className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-lg mb-1">Expert Team</h4>
//                   <p className="text-sm text-gray-200">Skilled professionals across all sectors</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
//                   <Target className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-lg mb-1">Our Mission</h4>
//                   <p className="text-sm text-gray-200">Excellence in every project</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
//                   <Award className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-lg mb-1">Quality Assured</h4>
//                   <p className="text-sm text-gray-200">International standards certified</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <a
//                 href="#contact"
//                 className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition-all font-semibold"
//               >
//                 <span>Get in Touch</span>
//               </a>
//               <a
//                 href="#portfolio"
//                 className="inline-flex items-center space-x-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all font-semibold border border-white/30"
//               >
//                 <span>View Projects</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import heroBg1 from '../assets/pexels-houzlook-3356416.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #fafaf9 50%, #fef3c7 100%)' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={heroBg1}
                alt="Modern architecture"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#064e3b] mb-4" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}>
              WHO WE ARE
            </h2>
            <p className="text-[#57534e] text-base leading-relaxed italic">
              Founded in 2014 and headquartered in Dubai, Macins Group is a leading provider of integrated solutions across technology, construction, energy, and logistics. Operating across the UAE, India, Kingdom of Saudi Arabia, and Qatar, we bring global standards, regional expertise, and a relentless commitment to excellence for every engagement.            </p>
            <p className="text-[#57534e] text-base leading-relaxed">
              Macins Group was founded on the belief that infrastructure should inspire progress. From our beginnings as a contracting company, we have expanded into a diversified group that builds smarter, greener, and more responsible environments.          
                </p>
                <p className="text-[#57534e] text-base leading-relaxed">
With expertise across construction, interior solutions, joinery, energy, and real estate, we deliver projects that enhance human experience, elevate standards, and stand the test of time. Our work is not just about building structures it’s about creating enduring value for communities and industries                </p>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-5xl font-bold text-[#064e3b] mb-2">1500+</h3>
            <p className="text-[#78716c] text-lg">Project Finished</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#064e3b] mb-2">950+</h3>
            <p className="text-[#78716c] text-lg">Global Customer</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#064e3b] mb-2">235+</h3>
            <p className="text-[#78716c] text-lg">Ready Units</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#064e3b] mb-2">$50M+</h3>
            <p className="text-[#78716c] text-lg">Generating Income</p>
          </div>
        </div> */}

        {/* Second Image */}
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8 mb-20">
          {/* Left side - Stats in 2x2 grid */}
          <div className="grid grid-cols-2 gap-x-20 gap-y-8 w-full lg:w-auto">
            <div>
              <h3 className="text-5xl font-bold text-[#064e3b] mb-2">1500+</h3>
              <p className="text-[#78716c] text-lg">Project Finished</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#064e3b] mb-2">950+</h3>
              <p className="text-[#78716c] text-lg">Global Customer</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#064e3b] mb-2">1500+</h3>
              <p className="text-[#78716c] text-lg">Project Finished</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#064e3b] mb-2">950+</h3>
              <p className="text-[#78716c] text-lg">Global Customer</p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl w-full lg:max-w-2xl">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern luxury home"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Top Picks Section */}
        {/* <div className="mt-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#064e3b] mb-8" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}>
            TOP PICKS
          </h2>

          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            <button className="px-6 py-3 bg-[#064e3b] text-white rounded-full font-semibold whitespace-nowrap">
              Top Sellers
            </button>
            <button className="px-6 py-3 bg-white text-[#57534e] rounded-full font-semibold whitespace-nowrap border border-[#e7e5e4]">
              Condo
            </button>
            <button className="px-6 py-3 bg-white text-[#57534e] rounded-full font-semibold whitespace-nowrap border border-[#e7e5e4]">
              Villa
            </button>
            <button className="px-6 py-3 bg-white text-[#57534e] rounded-full font-semibold whitespace-nowrap border border-[#e7e5e4]">
              Business
            </button>
            <button className="px-6 py-3 bg-white text-[#57534e] rounded-full font-semibold whitespace-nowrap border border-[#e7e5e4]">
              Warehouse
            </button>
            <button className="px-6 py-3 bg-white text-[#57534e] rounded-full font-semibold whitespace-nowrap border border-[#e7e5e4]">
              Lease
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Property 1"
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                <span className="text-[#78716c]">♡</span>
              </button>
              <div className="absolute top-4 left-4 bg-[#064e3b] text-white px-3 py-1 rounded-full text-sm font-semibold">
                4.4 ★
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Property 2"
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                <span className="text-[#78716c]">♡</span>
              </button>
              <div className="absolute top-4 left-4 bg-[#064e3b] text-white px-3 py-1 rounded-full text-sm font-semibold">
                4.4 ★
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Property 3"
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                <span className="text-[#78716c]">♡</span>
              </button>
              <div className="absolute top-4 left-4 bg-[#064e3b] text-white px-3 py-1 rounded-full text-sm font-semibold">
                4.0 ★
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}