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
import { MapPin, Phone, Mail, Send, Check, X } from 'lucide-react';

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
  const [errorMessage, setErrorMessage] = useState('');

  // Define office locations data
  const offices = [
    {
      city: 'Dubai, UAE',
      address: 'Business Bay, Dubai, UAE',
      phone: '+971 23 123 456',
      email: 'dubai@realworld.com'
    },
    {
      city: 'Riyadh, KSA',
      address: 'King Abdullah Rd, Riyadh, KSA',
      phone: '+966 11 234 5678',
      email: 'saudi@realworld.com'
    },
    {
      city: 'Mumbai, India',
      address: 'Lower Parel, Mumbai, India',
      phone: '+91 22 1234 5678',
      email: 'india@realworld.com'
    },
  ];

  // Animation hook
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      setErrorMessage('Please fill in all required fields to send the message.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate API submission delay
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      // Clear form and reset status after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setSubmitted(false);
      }, 2000);
    }, 1500);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:border-[#34d399] focus:ring-2 focus:ring-[#34d399]/30 outline-none transition-all";
  const labelClass = "block text-sm font-semibold text-gray-300 mb-2";

  return (
    <section 
      id="contact" 
      className="relative py-20 text-white overflow-hidden"
      style={{ 
        background: 'radial-gradient(circle at center, #064e3b 0%, #064e3b 100%)',
        borderRadius: "20px",
        margin: "20px"
      }}
    >
      {/* Massive REALWORLD background text */}
      <div className="absolute inset-0 flex items-end justify-end opacity-[0.08] pointer-events-none overflow-hidden">
        <span className="text-[18vw] lg:text-[12vw] font-black text-white whitespace-nowrap leading-none tracking-[0.2em]" style={{ fontWeight: 900 }}>
          MACINS MACINS
        </span>
      </div>
      
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
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            CONNECT WITH US
          </h2>
          <p className="mt-3 text-lg text-gray-300">
            We are here to help you navigate the global real estate market.
          </p>
        </div>

        {/* 1. Office Locations (Placed ABOVE the Form) */}
        <div 
          className="mb-20 grid md:grid-cols-3 gap-6 max-w-7xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease-out 0.3s'
          }}
        >
          {offices.map((office, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl border border-gray-700 hover:border-[#34d399]"
            >
              <h4 className="font-bold text-2xl text-[#34d399] mb-3 flex items-center">
                <MapPin size={20} className="mr-2"/> {office.city}
              </h4>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-3">
                  <span className="text-gray-300">{office.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="flex-shrink-0 text-gray-400" />
                  <a href={`tel:${office.phone}`} className="text-gray-300 hover:text-white transition-colors">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="flex-shrink-0 text-gray-400" />
                  <a href={`mailto:${office.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* 2. Main Contact Card (Form and Image) */}
        <div 
          className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-transparent"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 1s ease-out 0.6s'
          }}
        >
          <div className="grid lg:grid-cols-2 items-center">
            
            {/* Form Section - Left Column (lg:col-span-1) */}
            <div className="p-8 lg:p-12 relative">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full space-y-6 py-12 relative z-10">
                  <div className="w-20 h-20 bg-[#10b981] rounded-full flex items-center justify-center animate-bounce">
                    <Check size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400 text-center text-lg">Thank you for your interest. We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">Send us a message</h3>
                  <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>

                  {/* Error Message Box */}
                  {errorMessage && (
                    <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-xl flex items-center justify-between transition-opacity duration-300">
                      <span>{errorMessage}</span>
                      <X size={20} className="cursor-pointer" onClick={() => setErrorMessage('')} />
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+971 XX XXX XXXX" />
                    </div>
                    <div>
                      <label className={labelClass}>Service Required</label>
                      <select name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                        <option value="" className='text-gray-500 bg-gray-800'>Select a service</option>
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
                    <label className={labelClass}>Project Details</label>
                    <textarea rows={4} name="message" value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us about your requirements, timeline, and budget..."></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#10b981] text-white px-8 py-4 rounded-xl hover:bg-[#059669] transition-all duration-300 font-bold flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01] hover:shadow-xl hover:shadow-[#10b981]/20"
                  >
                    <span className="text-lg">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={20} className={`transition-transform ${!isSubmitting ? 'group-hover:translate-x-1' : 'animate-spin'}`} />
                  </button>
                </form>
              )}
            </div>

            {/* Image Section - Right Column (lg:col-span-1) */}

            <div 
            className="rounded-3xl h-80 overflow-hidden shadow-xl transform hover:scale-90 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Modern kitchen"
                    className="w-full object-cover"
                  />
                </div>
            

          </div>
        </div>
      </div>
    </section>
  );
}