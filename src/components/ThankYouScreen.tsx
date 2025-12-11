import React, { useEffect, useState } from 'react';
import { CheckCircle, Home, Send, ArrowRight, ArrowLeft, Loader2, MessageCircle,  } from 'lucide-react';

interface ThankYouScreenProps {
  // Function to handle navigation back to the home page
  onGoHome: () => void;
  // Your WhatsApp number (e.g., '1234567890')
  whatsappNumber: string; 
  // Optional: A message to pre-fill in WhatsApp
  whatsappMessage?: string;
}

const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ 
  onGoHome, 
  whatsappNumber, 
  whatsappMessage = "Hello, I just submitted the contact form and would like to follow up.",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Format WhatsApp link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 overflow-hidden">
      
      {/* Background Gradient & Animated Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Card Container */}
      <div 
        className={`relative z-10 p-8 md:p-12 max-w-lg w-full bg-slate-800/80 backdrop-blur-md rounded-3xl shadow-2xl border border-emerald-500/20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`}
      >
        
        {/* Success Icon Animation */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-emerald-500/20 animate-icon-pulse">
            <CheckCircle className="w-12 h-12 text-emerald-400 animate-fade-in" />
          </div>
        </div>

        {/* Header Text */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Thank You!
          </h1>
          <p className="text-xl text-gray-300 font-light">
            Your message has been received successfully.
          </p>
          <p className="text-gray-400 mt-2">
            We appreciate you reaching out and will get back to you within 24 hours.
          </p>
        </div>

        {/* Buttons (Call-to-Action) */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          {/* 1. Go Back Home Button */}
          <button
            onClick={onGoHome}
            className="flex-1 px-6 py-3 border border-gray-600 rounded-xl text-gray-300 font-semibold hover:bg-gray-700/50 transition duration-300 ease-in-out flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" />
            Go Back Home
          </button>

          {/* 2. WhatsApp Button */}
          <a
            onClick={() => window.open('https://wa.me/971554560554', '_blank')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition duration-300 ease-in-out flex items-center justify-center gap-2 group transform hover:scale-[1.02]"
          >
             <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515" />
            </svg>
            {/* <whatsappMessage className="w-5 h-5" /> */}
             WhatsApp
          </a>
        </div>
        
      </div>

      {/* Tailwind CSS Keyframes for Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, -0.2, 0.4, 1.2);
        }
        .animation-delay-2000 {
          animation-delay: -2s;
        }
        @keyframes icon-pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-icon-pulse {
            animation: icon-pulse 2s infinite ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ThankYouScreen;