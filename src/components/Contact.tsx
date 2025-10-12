import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Thank you for your interest! We will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const offices = [
    {
      city: 'Dubai, UAE',
      address: 'Business Bay, Dubai',
      phone: '+971 23 123 456',
      email: 'dubai@macinsgroup.com',
    },
    {
      city: 'Saudi Arabia',
      address: 'Riyadh',
      phone: '+966 11 234 5678',
      email: 'saudi@macinsgroup.com',
    },
    {
      city: 'India',
      address: 'Mumbai',
      phone: '+91 22 1234 5678',
      email: 'india@macinsgroup.com',
    },
    {
      city: 'Qatar',
      address: 'Doha',
      phone: '+974 4412 3456',
      email: 'qatar@macinsgroup.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
            Get in Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements. Our team is ready to help you bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="mep">MEP Contracting</option>
                    <option value="interior">Interior Fit-Out</option>
                    <option value="energy">Energy Solutions</option>
                    <option value="ev">EV Infrastructure</option>
                    <option value="fabrication">Fabrication</option>
                    <option value="realestate">Real Estate</option>
                    <option value="civil">Civil Works</option>
                    <option value="bms">BMS & Retrofit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={20} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Global Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="pb-6 border-b border-white/20 last:border-0">
                    <h4 className="font-bold text-lg mb-3">{office.city}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-3">
                        <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone size={18} className="flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="hover:underline">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail size={18} className="flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:underline">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
