import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Building2,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const offices = [
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      address: 'Business Bay, Dubai, UAE',
      phone: '+971 4 XXX XXXX',
      email: 'dubai@macinsgroup.com',
      type: 'Headquarters'
    },
    {
      city: 'Mumbai',
      country: 'India',
      address: 'Bandra Kurla Complex, Mumbai, India',
      phone: '+91 22 XXXX XXXX',
      email: 'india@macinsgroup.com',
      type: 'Regional Office'
    },
    {
      city: 'Riyadh',
      country: 'Saudi Arabia',
      address: 'King Fahd Road, Riyadh, KSA',
      phone: '+966 11 XXX XXXX',
      email: 'ksa@macinsgroup.com',
      type: 'Operations'
    },
    {
      city: 'Doha',
      country: 'Qatar',
      address: 'West Bay, Doha, Qatar',
      phone: '+974 4XXX XXXX',
      email: 'qatar@macinsgroup.com',
      type: 'Strategic Projects'
    }
  ];

  const services = [
    'MEP Contracting',
    'Interior Fit-Out',
    'Energy Solutions',
    'EV Infrastructure',
    'Fabrication',
    'Real Estate',
    'Civil Works',
    'BMS & Retrofit'
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#262626] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#f56f10] mx-auto mb-6"></div>
          <p className="text-xl text-[#878787] dark:text-[#878787] max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Contact our experts for a consultation and discover how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-[#fbfbfb] dark:bg-[#151419] p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#151419] dark:text-[#fbfbfb] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#878787]/20 bg-white dark:bg-[#262626] text-[#151419] dark:text-[#fbfbfb] focus:outline-none focus:ring-2 focus:ring-[#f56f10] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#151419] dark:text-[#fbfbfb] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#878787]/20 bg-white dark:bg-[#262626] text-[#151419] dark:text-[#fbfbfb] focus:outline-none focus:ring-2 focus:ring-[#f56f10] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#151419] dark:text-[#fbfbfb] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#878787]/20 bg-white dark:bg-[#262626] text-[#151419] dark:text-[#fbfbfb] focus:outline-none focus:ring-2 focus:ring-[#f56f10] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#151419] dark:text-[#fbfbfb] mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#878787]/20 bg-white dark:bg-[#262626] text-[#151419] dark:text-[#fbfbfb] focus:outline-none focus:ring-2 focus:ring-[#f56f10] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#151419] dark:text-[#fbfbfb] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-4 py-3 rounded-lg border border-[#878787]/20 bg-white dark:bg-[#262626] text-[#151419] dark:text-[#fbfbfb] focus:outline-none focus:ring-2 focus:ring-[#f56f10] focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f56f10] hover:bg-[#f56f10]/90 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information & Offices */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-[#fbfbfb] dark:bg-[#151419] p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#f56f10]/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#f56f10]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#151419] dark:text-[#fbfbfb]">Phone</p>
                    <p className="text-[#878787] dark:text-[#878787]">+971 4 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#f56f10]/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#f56f10]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#151419] dark:text-[#fbfbfb]">Email</p>
                    <p className="text-[#878787] dark:text-[#878787]">info@macinsgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#f56f10]/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#f56f10]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#151419] dark:text-[#fbfbfb]">Business Hours</p>
                    <p className="text-[#878787] dark:text-[#878787]">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-[#fbfbfb] dark:bg-[#151419] p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-[#151419] dark:text-[#fbfbfb] mb-6">
                Our Offices
              </h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={office.city} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f56f10]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#f56f10]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-[#151419] dark:text-[#fbfbfb]">
                          {office.city}
                        </h4>
                        <span className="text-xs bg-[#f56f10]/20 text-[#f56f10] px-2 py-1 rounded-full">
                          {office.type}
                        </span>
                      </div>
                      <p className="text-sm text-[#878787] dark:text-[#878787] mb-1">
                        {office.address}
                      </p>
                      <p className="text-sm text-[#878787] dark:text-[#878787]">
                        {office.phone} • {office.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;