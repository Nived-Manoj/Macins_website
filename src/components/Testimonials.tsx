// import { useState } from 'react';
// import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const testimonials = [
//     {
//       name: 'Ahmed Al Mansouri',
//       position: 'CEO, Emirates Development Corp',
//       content: 'Macins Group delivered our commercial complex ahead of schedule with exceptional quality. Their attention to detail and commitment to excellence is unmatched.',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
//     },
//     {
//       name: 'Sarah Johnson',
//       position: 'Director, Green Energy Solutions',
//       content: 'The EV infrastructure project exceeded all our expectations. Macins Group\'s expertise in sustainable technology is truly impressive.',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200',
//     },
//     {
//       name: 'Rajesh Kumar',
//       position: 'VP Operations, Al Noor Hotels',
//       content: 'Outstanding work on our hotel interior fit-out. The team was professional, creative, and delivered a stunning result that our guests love.',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
//     },
//   ];

//   const nextTestimonial = () => {
//     setActiveIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const clients = [
//     'Dubai Properties',
//     'ENOC',
//     'Emaar',
//     'Damac',
//     'Nakheel',
//     'DP World',
//     'Emirates NBD',
//     'Etihad Airways',
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="text-center mb-16">
//           <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
//             Testimonials
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Trusted by over 500 clients across the Middle East region.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto mb-16">
//           <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative">
//             <Quote className="absolute top-8 left-8 text-teal-100" size={64} />

//             <div className="relative z-10">
//               <div className="flex items-center mb-8">
//                 <img
//                   src={testimonials[activeIndex].image}
//                   alt={testimonials[activeIndex].name}
//                   className="w-20 h-20 rounded-full object-cover border-4 border-teal-100"
//                 />
//                 <div className="ml-6">
//                   <h4 className="text-xl font-bold text-gray-900">
//                     {testimonials[activeIndex].name}
//                   </h4>
//                   <p className="text-gray-600">{testimonials[activeIndex].position}</p>
//                   <div className="flex mt-2">
//                     {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
//                       <Star key={i} size={18} className="text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <p className="text-xl text-gray-700 leading-relaxed mb-8">
//                 "{testimonials[activeIndex].content}"
//               </p>

//               <div className="flex justify-between items-center">
//                 <div className="flex space-x-2">
//                   {testimonials.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setActiveIndex(index)}
//                       className={`w-3 h-3 rounded-full transition-all ${
//                         index === activeIndex
//                           ? 'bg-teal-600 w-8'
//                           : 'bg-gray-300 hover:bg-gray-400'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <div className="flex space-x-4">
//                   <button
//                     onClick={prevTestimonial}
//                     className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all"
//                   >
//                     <ChevronLeft size={24} />
//                   </button>
//                   <button
//                     onClick={nextTestimonial}
//                     className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center hover:bg-teal-700 transition-all"
//                   >
//                     <ChevronRight size={24} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mb-8">
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h3>
//           <p className="text-gray-600">500+ satisfied clients across the region</p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {clients.map((client, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center h-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
//             >
//               <span className="text-lg font-semibold text-gray-700">{client}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: 'Ahmed Al Mansouri',
      position: 'CEO, Emirates Development Corp',
      content: 'RealWorld delivered our commercial complex ahead of schedule with exceptional quality. Their attention to detail and commitment to excellence is unmatched.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Sarah Johnson',
      position: 'Director, Green Energy Solutions',
      content: 'The real estate project exceeded all our expectations. RealWorld\'s expertise in property management is truly impressive.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Rajesh Kumar',
      position: 'VP Operations, Al Noor Hotels',
      content: 'Outstanding work on our hotel property acquisition. The team was professional, creative, and delivered a stunning result that our guests love.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const clients = [
    'Dubai Properties',
    'ENOC',
    'Emaar',
    'Damac',
    'Nakheel',
    'DP World',
    'Emirates NBD',
    'Etihad Airways',
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fafaf9 0%, #f0fdf4 50%, #fef3c7 100%)' }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#10b981]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#fde68a]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
            <Star size={16} className="fill-current" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#064e3b] mb-4" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}>
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-lg text-[#78716c] max-w-3xl mx-auto">
            Trusted by over 500 clients across the Middle East region.
          </p>
        </div>

        {/* Testimonial Card */}
        <div 
          className="max-w-5xl mx-auto mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 1s ease-out 0.3s'
          }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-16 relative overflow-hidden">
            {/* Large Quote Mark */}
            <Quote className="absolute top-8 left-8 text-[#f0fdf4] opacity-50" size={80} />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="relative mb-6 md:mb-0">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-[#10b981] shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#059669] to-[#10b981] rounded-full flex items-center justify-center shadow-lg">
                    <Quote size={20} className="text-white" />
                  </div>
                </div>
                
                <div className="md:ml-8 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-[#064e3b] mb-1">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-[#78716c] mb-3">{testimonials[activeIndex].position}</p>
                  <div className="flex justify-center md:justify-start">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-[#fde68a] fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xl text-[#57534e] leading-relaxed mb-10 italic">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? 'bg-[#059669] w-12'
                          : 'bg-[#e7e5e4] w-2 hover:bg-[#d6d3d1]'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-14 h-14 rounded-full bg-[#f0fdf4] text-[#059669] flex items-center justify-center hover:bg-[#059669] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-14 h-14 rounded-full bg-[#059669] text-white flex items-center justify-center hover:bg-[#064e3b] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Section */}
        <div 
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.8s'
          }}
        >
          <h3 className="text-3xl font-bold text-[#064e3b] mb-3">Trusted by Leading Brands</h3>
          <p className="text-[#78716c] text-lg">500+ satisfied clients across the region</p>
        </div>

        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out 1s'
          }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-28 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-2 hover:border-[#10b981] border-2 border-transparent"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${1.1 + index * 0.1}s`
              }}
            >
              <span className="text-lg font-bold text-[#064e3b]">{client}</span>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 1.5s'
          }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-[#064e3b] to-[#059669] rounded-2xl shadow-xl">
            <div className="text-5xl font-black text-white mb-2">500+</div>
            <div className="text-[#d1fae5] font-semibold">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#059669] to-[#10b981] rounded-2xl shadow-xl">
            <div className="text-5xl font-black text-white mb-2">98%</div>
            <div className="text-[#d1fae5] font-semibold">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#10b981] to-[#34d399] rounded-2xl shadow-xl">
            <div className="text-5xl font-black text-white mb-2">4.9/5</div>
            <div className="text-[#d1fae5] font-semibold">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}