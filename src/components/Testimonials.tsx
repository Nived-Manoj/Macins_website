import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ahmed Al Mansouri',
      position: 'CEO, Emirates Development Corp',
      content: 'Macins Group delivered our commercial complex ahead of schedule with exceptional quality. Their attention to detail and commitment to excellence is unmatched.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Sarah Johnson',
      position: 'Director, Green Energy Solutions',
      content: 'The EV infrastructure project exceeded all our expectations. Macins Group\'s expertise in sustainable technology is truly impressive.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Rajesh Kumar',
      position: 'VP Operations, Al Noor Hotels',
      content: 'Outstanding work on our hotel interior fit-out. The team was professional, creative, and delivered a stunning result that our guests love.',
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by over 500 clients across the Middle East region.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative">
            <Quote className="absolute top-8 left-8 text-teal-100" size={64} />

            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-teal-100"
                />
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeIndex
                          ? 'bg-teal-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center hover:bg-teal-700 transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h3>
          <p className="text-gray-600">500+ satisfied clients across the region</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span className="text-lg font-semibold text-gray-700">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
