// import { useState, useEffect } from 'react';
// import { Leaf, Zap, Recycle, Sun, Wind, Droplet, TrendingUp, Award } from 'lucide-react';

// export default function Sustainability() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const initiatives = [
//     {
//       icon: Sun,
//       title: 'Solar Energy Integration',
//       description: 'Implementing large-scale solar panel installations for sustainable power generation.',
//       stat: '40%',
//       label: 'Energy Savings'
//     },
//     {
//       icon: Zap,
//       title: 'Smart Grid Technology',
//       description: 'Advanced energy management systems for optimal efficiency and reduced waste.',
//       stat: '35%',
//       label: 'Cost Reduction'
//     },
//     {
//       icon: Recycle,
//       title: 'Sustainable Materials',
//       description: 'Using eco-friendly and recycled materials in all construction projects.',
//       stat: '60%',
//       label: 'Recycled Content'
//     },
//     {
//       icon: Wind,
//       title: 'Green Building Design',
//       description: 'LEED-certified designs that minimize environmental impact.',
//       stat: '100%',
//       label: 'Certified Projects'
//     },
//     {
//       icon: Droplet,
//       title: 'Water Conservation',
//       description: 'Advanced water management and recycling systems.',
//       stat: '50%',
//       label: 'Water Saved'
//     },
//     {
//       icon: Leaf,
//       title: 'Carbon Neutral Goals',
//       description: 'Committed to achieving carbon neutrality across all operations.',
//       stat: '2030',
//       label: 'Target Year'
//     },
//   ];

//   const highlights = [
//     {
//       icon: Zap,
//       title: 'Smart Energy Solutions',
//       description: 'Deploying AI-powered energy management systems that reduce consumption by up to 40%.',
//       gradient: 'from-[#059669] to-[#10b981]'
//     },
//     {
//       icon: Leaf,
//       title: 'EV Infrastructure Leadership',
//       description: 'Building the region\'s most comprehensive electric vehicle charging network.',
//       gradient: 'from-[#10b981] to-[#34d399]'
//     },
//     {
//       icon: Recycle,
//       title: 'Circular Construction',
//       description: 'Implementing waste reduction strategies and material recycling in all projects.',
//       gradient: 'from-[#059669] to-[#064e3b]'
//     },
//   ];

//   return (
//     <section 
//       id="sustainability" 
//       className="py-20 relative overflow-hidden"
//       style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #fafaf9 50%, #fef3c7 100%)' }}
//     >
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fde68a]/20 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-6 lg:px-12 relative z-10">
//         {/* Header Section */}
//         <div 
//           className="text-center mb-16"
//           style={{
//             opacity: isVisible ? 1 : 0,
//             transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
//             transition: 'all 0.8s ease-out'
//           }}
//         >
//           <div className="inline-flex items-center space-x-2 bg-[#f0fdf4] border-2 border-[#10b981] text-[#059669] px-5 py-2 rounded-full text-sm font-bold mb-6">
//             <Leaf size={16} />
//             <span>Sustainability & Innovation</span>
//           </div>
//           <h2 className="text-5xl lg:text-6xl font-bold text-[#064e3b] mb-6" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}>
//             BUILDING A SUSTAINABLE FUTURE
//           </h2>
//           <p className="text-lg text-[#78716c] max-w-3xl mx-auto leading-relaxed">
//             At RealWorld, sustainability isn't just a buzzword—it's a commitment woven into every project we undertake. We're pioneering green technologies and sustainable practices across all our operations.
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
//           {/* Left Side - Highlights */}
//           <div
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
//               transition: 'all 1s ease-out 0.3s'
//             }}
//           >
//             <div className="space-y-6">
//               {highlights.map((highlight, index) => (
//                 <div
//                   key={index}
//                   className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
//                   style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
//                     transition: `all 0.8s ease-out ${0.5 + index * 0.2}s`
//                   }}
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center text-white shadow-lg`}>
//                       <highlight.icon size={28} />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-bold text-xl text-[#064e3b] mb-2 group-hover:text-[#059669] transition-colors">
//                         {highlight.title}
//                       </h4>
//                       <p className="text-[#78716c] leading-relaxed">
//                         {highlight.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Stats Card */}
//             <div 
//               className="mt-8 bg-gradient-to-br from-[#064e3b] to-[#059669] rounded-2xl p-8 shadow-2xl"
//               style={{
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'scale(1)' : 'scale(0.9)',
//                 transition: 'all 1s ease-out 1.2s'
//               }}
//             >
//               <div className="flex items-center space-x-3 mb-6">
//                 <Award className="text-[#fde68a]" size={32} />
//                 <h4 className="text-2xl font-bold text-white">Our Commitment</h4>
//               </div>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <div className="text-4xl font-black text-white mb-1">2030</div>
//                   <div className="text-sm text-[#d1fae5]">Carbon Neutral Target</div>
//                 </div>
//                 <div>
//                   <div className="text-4xl font-black text-white mb-1">100%</div>
//                   <div className="text-sm text-[#d1fae5]">Green Certified</div>
//                 </div>
//                 <div>
//                   <div className="text-4xl font-black text-white mb-1">40%</div>
//                   <div className="text-sm text-[#d1fae5]">Energy Reduction</div>
//                 </div>
//                 <div>
//                   <div className="text-4xl font-black text-white mb-1">60%</div>
//                   <div className="text-sm text-[#d1fae5]">Recycled Materials</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Initiative Cards */}
//           <div
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
//               transition: 'all 1s ease-out 0.3s'
//             }}
//           >
//             <div className="grid grid-cols-2 gap-6">
//               {initiatives.map((initiative, index) => (
//                 <div
//                   key={index}
//                   className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-2 hover:border-[#10b981] border-2 border-transparent"
//                   style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'scale(1)' : 'scale(0.8)',
//                     transition: `all 0.6s ease-out ${0.6 + index * 0.1}s`
//                   }}
//                 >
//                   <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f0fdf4] to-[#d1fae5] flex items-center justify-center text-[#059669] mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <initiative.icon size={28} />
//                   </div>
//                   <h4 className="font-bold text-[#064e3b] mb-2 text-lg group-hover:text-[#059669] transition-colors">
//                     {initiative.title}
//                   </h4>
//                   <p className="text-sm text-[#78716c] mb-4 leading-relaxed">
//                     {initiative.description}
//                   </p>
//                   <div className="pt-4 border-t-2 border-[#f0fdf4]">
//                     <div className="text-3xl font-black text-[#059669] mb-1">{initiative.stat}</div>
//                     <div className="text-xs text-[#78716c] font-semibold uppercase tracking-wide">{initiative.label}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div 
//           className="text-center"
//           style={{
//             opacity: isVisible ? 1 : 0,
//             transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
//             transition: 'all 1s ease-out 1.5s'
//           }}
//         >
//           <div className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-[#10b981]">
//             <TrendingUp className="text-[#059669]" size={24} />
//             <span className="text-[#064e3b] font-bold text-lg">Learn More About Our Green Initiatives</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState, useEffect } from 'react';
import { Leaf, Zap, Recycle, Sun, Wind, Droplet, TrendingUp, Award, Home, MapPin, DollarSign, Bed, Bath, Star, Heart } from 'lucide-react';

export default function Sustainability() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Basic Intersection Observer or simple mount effect for animation
    const handleScroll = () => {
      const section = document.getElementById('sustainability');
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    setIsVisible(true); // Trigger visibility on mount for simplicity in this example

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Content adapted for the image's structure
  const initiativeCardData = [
    {
      city: 'Office Fit-Outs',
      icon: Sun,
      rating: '4.8',
      beds: 5,
      baths: 4,
      sqft: '3,200 sq ft',
      type: 'Luxurious Penthouse',
      price: '$1,750,000',
      stat: '40%',
      label: 'Energy Savings',
      image: 'https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/josh-boot--L5W8-yFERs-unsplash.jpg/:/cr=t:0%25,l:26.65%25,w:46.7%25,h:100%25/rs=w:600,h:800,cg:true' // Placeholder for actual image
    },
    {
      city: 'Retail & Commercial Interiors',
      icon: Zap,
      rating: '4.5',
      beds: 4,
      baths: 3,
      sqft: '2,900 sq ft',
      type: 'Contemporary Villa',
      price: '$2,300,000',
      stat: '60%',
      label: 'Recycled Content',
      image: 'image_e89964_la.jpg'
    },
    {
      city: 'Luxury Residential Fit-Outs',
      icon: Leaf,
      rating: '4.6',
      beds: 3,
      baths: 2.5,
      sqft: '1,900 sq ft',
      type: 'Modern Townhouse',
      price: '$1,100,000',
      stat: '50%',
      label: 'Water Saved',
      image: 'image_e89964_seattle.jpg'
    },
  ];

  const mainSectionData = {
    title: 'REFINED SUSTAINABILITY STRATEGIES AND EXPERT ADVICE',
    cardTitle: 'Pioneering Green Building Certification',
    description: 'Discover why our clients rave about the outstanding service and unwavering commitment we provide throughout every new development. Learn how we\'ve transformed their living spaces and enriched their lives with eco-conscious technology.',
    // buttonText: 'Explore Further',
    stat: 'Carbon Neutral by 2030',
    statLabel: 'Our Core Goal',
    icon: Award,
  };

  // Utility to handle placeholder images (since we cannot display real images)
  const getPlaceholderStyle = (index) => {
    const backgrounds = [
      'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/josh-boot--L5W8-yFERs-unsplash.jpg/:/cr=t:0%25,l:26.65%25,w:46.7%25,h:100%25/rs=w:600,h:800,cg:true)',
      'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://images.pexels.com/photos/11875898/pexels-photo-11875898.jpeg)',
      'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://images.pexels.com/photos/35143428/pexels-photo-35143428.jpeg)',
    ];
    return {
      backgroundImage: backgrounds[index % backgrounds.length],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  };

  // The main section is dark, mimicking the image's structure
  return (
    <section
      id="sustainability"
      className="pt-10 pb-20 relative overflow-hidden bg-white" // Outer container is white/light
    >
      {/* Header Section */}
      <div
        className="text-center mb-16"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out'
        }}
      >
        <div className="inline-flex items-center space-x-2 bg-[#f0fdf4] border-2 border-[#10b981] text-[#059669] px-5 py-2 rounded-full text-sm font-bold mb-6">
          <Leaf size={16} />
          <span>Sustainability & Innovation</span>
        </div>
        <h2 className="text-5xl lg:text-6xl font-bold text-[#064e3b] mb-6">
          BUILDING A SUSTAINABLE FUTURE
        </h2>
        <p className="text-lg text-[#78716c] max-w-3xl mx-auto leading-relaxed">
          At RealWorld, sustainability isn't just a buzzword—it's a commitment woven into every project we undertake. We're pioneering green technologies and sustainable practices across all our operations.
        </p>
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* --- Top Property Listing Style Section --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {initiativeCardData.map((data, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl h-80 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] transform"
              style={{
                // --- THIS IS WHERE THE BACKGROUND IMAGE IS ADDED ---
                ...getPlaceholderStyle(index),
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.8s ease-out ${0.2 + index * 0.15}s`
              }}
            >
              {/* Rating and Like button (as seen in the original full code) */}
              {/* <div className="absolute top-4 left-4 flex items-center bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {data.rating} <Star size={14} className="ml-1 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white cursor-pointer hover:bg-black/80">
                <Heart size={20} className="hover:fill-red-500" />
              </div> */}

              {/* Text Overlay at Bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-1 leading-snug">{data.city}</h3>
                {/* <p className="text-sm opacity-90 mb-3">
                  {data.beds} <Bed size={14} className="inline mr-1" />Beds, {data.baths} <Bath size={14} className="inline mr-1" />Baths, {data.sqft}
                </p>
                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold text-sm">
                  {data.price}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* --- Main Dark Section (mimicking the bottom half of the image) --- */}
        <div
          className="bg-[#064e3b] text-white rounded-3xl p-10 lg:p-16 shadow-2xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.6s'
          }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-10 tracking-wider">
            {mainSectionData.title}
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left: Large Placeholder Image/Card */}
           <div className="w-full lg:w-1/2 h-80 rounded-2xl overflow-hidden relative shadow-lg">
  {/* Image Placeholder */}
  <div
    className="w-full h-full"
    style={{
      // Use a new image URL that aligns with the modern, luxurious, and eco-friendly theme
      // Increased the black gradient opacity for better text contrast, matching the image.
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/1114875/pexels-photo-1114875.jpeg)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    {/* Optional Text Overlay */}
    <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
      <span className="bg-green-700/80 px-3 py-1 rounded-md">LEED Certified</span>
    </div>
  </div>
</div>

            {/* Right: Content and Button */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-bold mb-4">
                {mainSectionData.cardTitle}
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {mainSectionData.description}
              </p>

              {/* Stat/Icon Row */}
              <div className="flex items-center space-x-3 mb-8">
                <mainSectionData.icon className="text-green-400" size={32} />
                <div className="text-xl font-bold text-green-400">{mainSectionData.stat}</div>
                <div className="text-sm text-gray-500">({mainSectionData.statLabel})</div>
              </div>

              {/* Button matching the image style */}
              {/* <button className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
                {mainSectionData.buttonText}
              </button> */}
            </div>
          </div>

          {/* Faint 'DREAM HOME' text in background (mimicking the image) */}
          <div className="absolute inset-0 flex items-end justify-start opacity-5 pointer-events-none">
            <h1 className="text-[200px] font-extrabold select-none leading-none -ml-4 -mb-10" style={{ fontFamily: 'Impact, sans-serif' }}>
              MACINS GROUP
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}