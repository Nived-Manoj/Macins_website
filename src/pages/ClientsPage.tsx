import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const ClientsPage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'CEO, Emirates Development',
      company: 'Emirates Development',
      content: 'Macins Group delivered our 50-floor tower project ahead of schedule with exceptional quality. Their MEP expertise is truly world-class.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      position: 'Project Director, Green Energy Corp',
      company: 'Green Energy Corp',
      content: 'The solar installation project exceeded our expectations. Professional team, innovative solutions, and outstanding results.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Raj Patel',
      position: 'Operations Manager, TechHub',
      company: 'TechHub Solutions',
      content: 'Their interior fit-out work transformed our office space into a modern, inspiring workplace. Attention to detail was remarkable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const clientLogos = [
    'ADNOC', 'Emirates', 'Dubai Municipality', 'ENOC', 'DEWA',
    'Emaar', 'Nakheel', 'Majid Al Futtaim', 'Dubai Parks', 'DMCC',
    'Etisalat', 'du', 'FAB Bank', 'CBD', 'Sobha'
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
            Our Clients
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Trusted by industry leaders and visionary companies across the region
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Trusted by 500+ Clients
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              From government entities to private corporations, we've built lasting partnerships
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {client.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                    {client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Real testimonials from satisfied clients across our projects
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="text-center mb-8">
                <Quote className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-left">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-amber-600 dark:text-amber-400">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-slate-600 dark:text-slate-300" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-slate-600 dark:text-slate-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-amber-500 scale-125'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-amber-400 dark:hover:bg-amber-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;