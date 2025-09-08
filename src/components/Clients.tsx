import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Clients = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'Project Director',
      company: 'Emirates Construction',
      content: 'Macins Group delivered exceptional MEP solutions for our Dubai Marina project. Their attention to detail and commitment to quality exceeded our expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Facilities Manager',
      company: 'Luxury Hotels Group',
      content: 'The interior fit-out work by Macins Group transformed our hotel spaces into world-class accommodations. Outstanding craftsmanship and timely delivery.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Mohammed Hassan',
      position: 'Development Manager',
      company: 'Green Energy Solutions',
      content: 'Their solar energy implementation exceeded performance expectations. Macins Group is our trusted partner for sustainable energy projects across the region.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
    }
  ];

  const clientLogos = [
    'Emirates Group', 'Dubai Municipality', 'ADNOC', 'Etisalat', 'Dubai Airports',
    'DEWA', 'Emaar', 'Nakheel', 'DP World', 'ENOC', 'Aldar Properties',
    'Majid Al Futtaim', 'Jumeirah Group', 'Dubai Metro', 'RAKBANK'
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clients" className="py-20 bg-[#fbfbfb] dark:bg-[#151419] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-6">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-[#f56f10] mx-auto mb-6"></div>
          <p className="text-xl text-[#878787] dark:text-[#878787] max-w-3xl mx-auto leading-relaxed">
            Over 500 satisfied clients across the Middle East trust us to deliver exceptional results.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-8 text-center">
            Our Valued Clients
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {clientLogos.map((client, index) => (
              <div 
                key={client}
                className="bg-white dark:bg-[#262626] p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
              >
                <span className="text-sm font-medium text-[#878787] dark:text-[#878787] group-hover:text-[#f56f10] transition-colors duration-300 text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-12 text-center">
            What Our Clients Say
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="bg-white dark:bg-[#262626] rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Client Image */}
                <div className="relative flex-shrink-0">
                  <img 
                    src={testimonials[activeTestimonial].image} 
                    alt={testimonials[activeTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="absolute -top-2 -right-2 bg-[#f56f10] rounded-full p-2">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#f56f10] fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg text-[#878787] dark:text-[#878787] mb-6 leading-relaxed italic">
                    "{testimonials[activeTestimonial].content}"
                  </p>

                  {/* Client Info */}
                  <div>
                    <h4 className="text-xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-1">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-[#f56f10] font-medium">
                      {testimonials[activeTestimonial].position}
                    </p>
                    <p className="text-[#878787] dark:text-[#878787]">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-[#262626] shadow-lg rounded-full p-3 hover:bg-[#f56f10] hover:text-white transition-all duration-300 group"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-[#262626] shadow-lg rounded-full p-3 hover:bg-[#f56f10] hover:text-white transition-all duration-300 group"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-[#f56f10]' : 'bg-[#878787]/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-[#f56f10] mb-2">500+</div>
            <div className="text-[#878787] dark:text-[#878787]">Happy Clients</div>
          </div>
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-[#f56f10] mb-2">98%</div>
            <div className="text-[#878787] dark:text-[#878787]">Satisfaction Rate</div>
          </div>
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-[#f56f10] mb-2">4</div>
            <div className="text-[#878787] dark:text-[#878787]">Countries</div>
          </div>
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-[#f56f10] mb-2">24/7</div>
            <div className="text-[#878787] dark:text-[#878787]">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;