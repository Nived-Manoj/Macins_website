import React, { useState, useEffect, useRef } from 'react';
// Import the EmailJS library
import emailjs from '@emailjs/browser'; 
import { X, Mail, Phone, MessageSquare, User, ArrowRight, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Replace these placeholders with your actual EmailJS IDs

  const SERVICE_ID = 'service_luw286n'; 
const TEMPLATE_ID = 'template_mwx7j7h'; 
const PUBLIC_KEY = 'kfC6202TCJEQwSZ1k';// This is your User ID

// Reusable Popup Component
export default function ContactPopup({ isOpen, onClose }) {
  // Ref for the form element to use with EmailJS
  const formRef = useRef();
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // State for form submission status
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  // Effect to manage body overflow when the popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmissionStatus('idle'); // Reset status when opening
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (submissionStatus === 'loading') return;

    setSubmissionStatus('loading');
    
    // Check if the formRef current exists
    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS! Email sent. Navigating to thank-you screen.');
            setSubmissionStatus('success');
            
            // --- THE KEY CHANGE ---
            // Navigate to the defined 'thank-you' route on success
            navigate('/thankyou'); 
            // -----------------------

          },
          (error) => {
            console.log('FAILED...', error.text);
            setSubmissionStatus('error');
          },
        );
    } else {
      console.error("Form reference is not available.");
      setSubmissionStatus('error');
    }
  };

  if (!isOpen) return null;

  const isSuccess = submissionStatus === 'success';
  const isError = submissionStatus === 'error';
  const isLoading = submissionStatus === 'loading';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Popup Content */}
      <div className={`relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl max-w-md w-full border border-[#064e3b]/30 shadow-2xl overflow-hidden animate-scale-in transition-all duration-300 ${isSuccess ? 'scale-105' : ''}`}>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#064e3b]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 border border-white/10 hover:border-[#064e3b]/50 hover:bg-slate-800 transition-all duration-300 group"
          disabled={isLoading} // Disable close button while loading
        >
          <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </button>

        {/* Content */}
        <div className="relative p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#064e3b] to-emerald-600 rounded-2xl flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Get Started Today</h3>
            <p className="text-gray-400">Fill in your details and we'll contact you shortly</p>
          </div>
          
          {/* --- Success/Error Messages --- */}
          {isSuccess && (
              <div className="flex items-center p-4 mb-4 text-sm text-emerald-100 border border-emerald-400 rounded-lg bg-emerald-700/50" role="alert">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <div>
                      <span className="font-medium">Success!</span> Your message has been sent. We will contact you soon.
                  </div>
              </div>
          )}
          
          {isError && (
              <div className="flex items-center p-4 mb-4 text-sm text-red-100 border border-red-400 rounded-lg bg-red-700/50" role="alert">
                  <AlertTriangle className="w-5 h-5 mr-3" />
                  <div>
                      <span className="font-medium">Error!</span> Failed to send your message. Please try again.
                  </div>
              </div>
          )}
          {/* --- End Messages --- */}

          {/* Form */}
          {/* Add ref to the form element for EmailJS */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4"> 
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#064e3b]/50 focus:ring-2 focus:ring-[#064e3b]/20 transition-all"
                  placeholder="John Doe"
                  // disabled when loading or success to prevent further input
                  disabled={isLoading || isSuccess} 
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#064e3b]/50 focus:ring-2 focus:ring-[#064e3b]/20 transition-all"
                  placeholder="john@example.com"
                  // disabled when loading or success
                  disabled={isLoading || isSuccess} 
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#064e3b]/50 focus:ring-2 focus:ring-[#064e3b]/20 transition-all"
                  placeholder="+1 (555) 000-0000"
                  // disabled when loading or success
                  disabled={isLoading || isSuccess} 
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3} // Changed #3 to valid JSX prop rows={3}
                className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#064e3b]/50 focus:ring-2 focus:ring-[#064e3b]/20 transition-all resize-none"
                placeholder="Tell us about your project..."
                // disabled when loading or success
                disabled={isLoading || isSuccess} 
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 bg-gradient-to-r from-[#064e3b] to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 
                ${isLoading 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:shadow-lg hover:shadow-[#064e3b]/30 hover:scale-[1.02]'
                }
                ${isSuccess ? 'bg-emerald-500 hover:scale-[1.00]' : ''}
              `}
              disabled={isLoading || isSuccess}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Sent Successfully!
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}