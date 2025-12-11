import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Check, X } from 'lucide-react';
import emailjs from '@emailjs/browser'; 
import { useNavigate } from 'react-router-dom';

const SERVICE_ID = 'service_luw286n'; 
const TEMPLATE_ID = 'template_mwx7j7h'; 
const PUBLIC_KEY = 'kfC6202TCJEQwSZ1k';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const navigate = useNavigate(); 

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Define office locations data
  const offices = [
    {
      city: 'Dubai, UAE',
      address: 'Business Bay, Dubai, UAE',
      phone: '+971 55 456 0554 ',
      email: 'dubai@realworld.com'
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
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      setErrorMessage('Please fill in all required fields to send the message.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Template parameters for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      full_phone: formData.phone,
      service: formData.service,
      message: formData.message,
      to_name: 'Macins Team',
    };

    // Send email using EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitted(true);
        setIsSubmitting(false);
        
        // Navigate to thank you page after short delay
        setTimeout(() => {
          navigate('/thankyou');
          // Clear form data
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
          setSubmitted(false);
        }, 800);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setIsSubmitting(false);
        setErrorMessage('Failed to send message. Please try again or contact us directly via phone or email.');
      });
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

        {/* Main Contact Card (Form and Image) */}
        <div 
          className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-transparent"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 1s ease-out 0.6s'
          }}
        >
          <div className="grid lg:grid-cols-2 items-center">
            
            {/* Form Section - Left Column */}
            <div className="p-8 lg:p-12 relative">
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
            </div>

            {/* Image Section - Right Column */}
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