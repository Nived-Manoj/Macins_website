// import { useState } from 'react';
// import { MapPin, Phone, Mail, Send, Clock, Globe, Check } from 'lucide-react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = () => {
//     if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
//       alert('Please fill in all fields');
//       return;
//     }
    
//     setIsSubmitting(true);

//     setTimeout(() => {
//       setSubmitted(true);
//       setTimeout(() => {
//         setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//         setIsSubmitting(false);
//         setSubmitted(false);
//       }, 2000);
//     }, 1500);
//   };

//   const offices = [
//     {
//       city: 'Dubai, UAE',
//       address: 'Business Bay, Dubai',
//       phone: '+971 23 123 456',
//       email: 'dubai@macinsgroup.com',
//     },
//     {
//       city: 'Saudi Arabia',
//       address: 'Riyadh',
//       phone: '+966 11 234 5678',
//       email: 'saudi@macinsgroup.com',
//     },
//     {
//       city: 'India',
//       address: 'Mumbai',
//       phone: '+91 22 1234 5678',
//       email: 'india@macinsgroup.com',
//     },
//     {
//       city: 'Qatar',
//       address: 'Doha',
//       phone: '+974 4412 3456',
//       email: 'qatar@macinsgroup.com',
//     },
//   ];

//   return (
//     <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50 overflow-hidden min-h-screen">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
//       </div>

//       <div className="container mx-auto px-6 lg:px-12 relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
//             <Globe size={16} />
//             <span>Get in Touch</span>
//           </div>
//           <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             Let's Build Something
//             <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//               Great Together
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Contact us today to discuss your project requirements. Our team is ready to help you bring your vision to life.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Form Section */}
//           <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 transform transition-all duration-300 hover:shadow-3xl">
//             {submitted ? (
//               <div className="flex flex-col items-center justify-center py-16 space-y-4">
//                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
//                   <Check size={40} className="text-green-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
//                 <p className="text-gray-600 text-center">Thank you for your interest. We will contact you shortly.</p>
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="group">
//                     <label className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-teal-600">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all bg-gray-50 focus:bg-white"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div className="group">
//                     <label className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-teal-600">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all bg-gray-50 focus:bg-white"
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="group">
//                     <label className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-teal-600">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       value={formData.phone}
//                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                       className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all bg-gray-50 focus:bg-white"
//                       placeholder="+971 XX XXX XXXX"
//                     />
//                   </div>
//                   <div className="group">
//                     <label className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-teal-600">
//                       Service Required
//                     </label>
//                     <select
//                       value={formData.service}
//                       onChange={(e) => setFormData({ ...formData, service: e.target.value })}
//                       className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all bg-gray-50 focus:bg-white"
//                     >
//                       <option value="">Select a service</option>
//                       <option value="mep">MEP Contracting</option>
//                       <option value="interior">Interior Fit-Out</option>
//                       <option value="energy">Energy Solutions</option>
//                       <option value="ev">EV Infrastructure</option>
//                       <option value="fabrication">Fabrication</option>
//                       <option value="realestate">Real Estate</option>
//                       <option value="civil">Civil Works</option>
//                       <option value="bms">BMS & Retrofit</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="group">
//                   <label className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-teal-600">
//                     Project Details
//                   </label>
//                   <textarea
//                     rows={6}
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
//                     placeholder="Tell us about your project requirements, timeline, and budget..."
//                   />
//                 </div>

//                 <button
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-bold flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed group transform hover:scale-105 active:scale-95"
//                 >
//                   <span className="text-lg">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
//                   <Send size={20} className="group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Info Section */}
//           <div className="space-y-6">
//             {/* Global Offices Card */}
//             <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 rounded-3xl p-8 text-white shadow-2xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
//               <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
              
//               <div className="relative z-10">
//                 <div className="flex items-center space-x-3 mb-8">
//                   <Globe size={28} className="text-teal-200" />
//                   <h3 className="text-3xl font-bold">Our Global Offices</h3>
//                 </div>
                
//                 <div className="space-y-6">
//                   {offices.map((office, index) => (
//                     <div 
//                       key={index} 
//                       className="pb-6 border-b border-white/20 last:border-0 transform transition-all duration-300 hover:translate-x-2"
//                     >
//                       <h4 className="font-bold text-xl mb-4 text-teal-100">{office.city}</h4>
//                       <div className="space-y-3 text-sm">
//                         <div className="flex items-start space-x-3 group">
//                           <MapPin size={18} className="flex-shrink-0 mt-0.5 text-teal-200 group-hover:scale-110 transition-transform" />
//                           <span className="text-white/90">{office.address}</span>
//                         </div>
//                         <div className="flex items-center space-x-3 group">
//                           <Phone size={18} className="flex-shrink-0 text-teal-200 group-hover:rotate-12 transition-transform" />
//                           <a href={`tel:${office.phone}`} className="hover:text-teal-200 transition-colors">
//                             {office.phone}
//                           </a>
//                         </div>
//                         <div className="flex items-center space-x-3 group">
//                           <Mail size={18} className="flex-shrink-0 text-teal-200 group-hover:scale-110 transition-transform" />
//                           <a href={`mailto:${office.email}`} className="hover:text-teal-200 transition-colors">
//                             {office.email}
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Business Hours Card */}
//             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
//               <div className="flex items-center space-x-3 mb-6">
//                 <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center">
//                   <Clock size={24} className="text-teal-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-gray-50 to-teal-50 border border-gray-100">
//                   <span className="font-semibold text-gray-700">Monday - Friday</span>
//                   <span className="text-teal-600 font-bold">8:00 AM - 6:00 PM</span>
//                 </div>
//                 <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-gray-50 to-cyan-50 border border-gray-100">
//                   <span className="font-semibold text-gray-700">Saturday</span>
//                   <span className="text-cyan-600 font-bold">9:00 AM - 3:00 PM</span>
//                 </div>
//                 <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-100">
//                   <span className="font-semibold text-gray-700">Sunday</span>
//                   <span className="text-gray-500 font-bold">Closed</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setIsSubmitting(false);
        setSubmitted(false);
      }, 2000);
    }, 1500);
  };

  const offices = [
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Business Bay, Dubai',
      phone: '+971 23 123 456',
      email: 'dubai@realworld.com'
    },
    {
      city: 'Riyadh',
      country: 'Saudi Arabia',
      address: 'Riyadh',
      phone: '+966 11 234 5678',
      email: 'saudi@realworld.com'
    },
    {
      city: 'Mumbai',
      country: 'India',
      address: 'Mumbai',
      phone: '+91 22 1234 5678',
      email: 'india@realworld.com'
    },
    {
      city: 'Doha',
      country: 'Qatar',
      address: 'Doha',
      phone: '+974 4412 3456',
      email: 'qatar@realworld.com'
    },
  ];

  return (
    <section 
      id="contact" 
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #fafaf9 50%, #fef3c7 100%)' }}
    >
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
          <h2 className="text-5xl lg:text-6xl font-bold text-[#064e3b] mb-4" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}>
            GET IN TOUCH
          </h2>
          <p className="text-lg text-[#78716c] max-w-2xl mx-auto">
            Contact us today to discuss your project requirements. Our team is ready to help you bring your vision to life.
          </p>
        </div>

        {/* Main Content Card */}
        <div 
          className="max-w-6xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 1s ease-out 0.3s'
          }}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Form Section - Takes 2 columns */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full space-y-6 py-12">
                    <div className="w-20 h-20 bg-[#059669] rounded-full flex items-center justify-center animate-bounce">
                      <Check size={40} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#064e3b]">Message Sent!</h3>
                    <p className="text-[#78716c] text-center text-lg">Thank you for your interest. We will contact you shortly.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-[#064e3b] mb-2">Send us a message</h3>
                      <p className="text-[#78716c]">Fill out the form below and we'll get back to you within 24 hours</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#064e3b] mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-[#e7e5e4] bg-[#fafaf9] text-[#064e3b] placeholder-[#a8a29e] focus:border-[#059669] focus:ring-2 focus:ring-[#10b981]/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#064e3b] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-[#e7e5e4] bg-[#fafaf9] text-[#064e3b] placeholder-[#a8a29e] focus:border-[#059669] focus:ring-2 focus:ring-[#10b981]/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#064e3b] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-[#e7e5e4] bg-[#fafaf9] text-[#064e3b] placeholder-[#a8a29e] focus:border-[#059669] focus:ring-2 focus:ring-[#10b981]/20 outline-none transition-all"
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#064e3b] mb-2">
                          Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-[#e7e5e4] bg-[#fafaf9] text-[#064e3b] focus:border-[#059669] focus:ring-2 focus:ring-[#10b981]/20 outline-none transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="buying">Buying Property</option>
                          <option value="selling">Selling Property</option>
                          <option value="renting">Renting Property</option>
                          <option value="investment">Investment Consultation</option>
                          <option value="property-management">Property Management</option>
                          <option value="commercial">Commercial Real Estate</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#064e3b] mb-2">
                        Project Details
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#e7e5e4] bg-[#fafaf9] text-[#064e3b] placeholder-[#a8a29e] focus:border-[#059669] focus:ring-2 focus:ring-[#10b981]/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements, timeline, and budget..."
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-[#064e3b] text-white px-8 py-4 rounded-xl hover:bg-[#059669] transition-all duration-300 font-bold flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] hover:shadow-xl"
                    >
                      <span className="text-lg">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <Send size={20} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                )}
              </div>

              {/* Office Locations - Takes 1 column */}
              <div className="lg:col-span-1 p-8 lg:p-10 bg-[#f0fdf4]">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#064e3b] mb-2">Our Offices</h3>
                  <p className="text-sm text-[#78716c]">Visit us at any of our global locations</p>
                </div>
                
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-2xl p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border-2 border-transparent hover:border-[#10b981]"
                    >
                      <div className="mb-3">
                        <h4 className="font-bold text-lg text-[#064e3b]">{office.city}</h4>
                        <p className="text-sm text-[#78716c]">{office.country}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start space-x-2">
                          <MapPin size={16} className="flex-shrink-0 mt-0.5 text-[#059669]" />
                          <span className="text-[#57534e]">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone size={16} className="flex-shrink-0 text-[#059669]" />
                          <a href={`tel:${office.phone}`} className="text-[#57534e] hover:text-[#059669] transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail size={16} className="flex-shrink-0 text-[#059669]" />
                          <a href={`mailto:${office.email}`} className="text-[#57534e] hover:text-[#059669] transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-white rounded-2xl border-2 border-[#10b981]">
                  <p className="text-sm text-[#57534e] text-center">
                    <span className="font-bold text-[#059669]">Available 24/7</span> for support and consultations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}