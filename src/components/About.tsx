


import { useNavigate } from 'react-router-dom';
import heroBg1 from '../assets/pexels-houzlook-3356416.jpg';

export default function About() {
   const navigate = useNavigate();
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
            <h2 className="text-5xl lg:text-6xl font-bold text-[#064e3b] mb-4">
              WHO WE ARE
            </h2>


            <p className="text-[#57534e] text-base leading-relaxed">
              Founded in 2014 and headquartered in Dubai, Macins Group is a leading provider of integrated solutions across technology, construction, energy, and logistics. Operating across the UAE, India, Kingdom of Saudi Arabia, and Qatar, we bring global standards, regional expertise, and a relentless commitment to excellence for every engagement.            </p>
            <p className="text-[#57534e] text-base leading-relaxed">
              Macins Group was founded on the belief that infrastructure should inspire progress. From our beginnings as a contracting company, we have expanded into a diversified group that builds smarter, greener, and more responsible environments.
            </p>
            <p className="text-[#57534e] text-base leading-relaxed">
              With expertise across construction, interior solutions, joinery, energy, and real estate, we deliver projects that enhance human experience, elevate standards, and stand the test of time. Our work is not just about building structures it’s about creating enduring value for communities and industries                </p>

            <button
             onClick={() => navigate(`/aboutsection`)}
              className="flex items-center justify-center px-6 py-3 bg-[#059669] text-white rounded-xl font-bold hover:bg-[#064e3b] transition-all duration-300 shadow-lg"
            >
              READ MORE
            </button>


            {/* <button>READ MORE</button> */}
          </div>

        </div>



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
              <h3 className="text-5xl font-bold text-[#064e3b] mb-2">235+</h3>
              <p className="text-[#78716c] text-lg">Ready Units</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#064e3b] mb-2">50M+</h3>
              <p className="text-[#78716c] text-lg">Generating Income</p>
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