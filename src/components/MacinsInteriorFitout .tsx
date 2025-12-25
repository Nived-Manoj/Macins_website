import React, { useState, useEffect } from 'react';
import { ArrowRight, Building2, Package, Sparkles, Palette, Wrench, Zap, ChevronLeft } from 'lucide-react';
import ContactPopup from './ContactPopup';

const MacinsInteriorFitout = () => {
    const [scrollY, setScrollY] = useState(0);
    const [visibleCards, setVisibleCards] = useState(new Set());
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleCards(prev => new Set(prev).add(entry.target.id));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const services = [
        {
            id: 'build-design',
            title: 'Build & Design',
            description: 'A project delivery system where MACINS offers comprehensive design and interior fit out services in-house as part of a single turnkey solution contract. This type of design and build agreement can minimize overall project risks and expenses and may also lead to an earlier project completion due to having a single point of contact.',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
            icon: Building2
        },
        {
            id: 'ffe',
            title: 'FF&E',
            description: 'As part of our offerings, our knowledgeable procurement team of FF&E specialists collaborate closely with suppliers to offer tailored furniture, fixtures, and equipment (FF&E) solutions. Their specialized knowledge guarantees timely and cost-effective delivery and assures that your project will come to fruition.',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800',
            icon: Package
        },
        {
            id: 'luxury',
            title: 'Luxury Fit Out',
            description: 'MACINS FITOUT boasts considerable expertise in delivering grand-scale, upscale interior fit out solutions for 5-star hotels and resorts, recreational facilities, commercial properties, and mixed-use projects throughout the Middle East and North Africa region.',
            image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800',
            icon: Sparkles
        },
        {
            id: 'experiential',
            title: 'Experiential Fit Out',
            description: 'MACINS has accomplished the creation of a range of cultural, immersive, and permanent exhibition fit out projects throughout the Middle East and North Africa region. Our methodical and inventive delivery approach provides our clients with a comprehensive, experiential fit out solution managed under a single agreement.',
            image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=800',
            icon: Palette
        },
        {
            id: 'refurbishment',
            title: 'Refurbishment',
            description: 'Our expertise lies in efficiently finishing crucial refurbishment projects in operating and shut-down environments such as 5-star hotels, airport passenger terminals, high-end food and beverage establishments, entertainment venues, and corporate headquarters buildings.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
            icon: Wrench
        },
        {
            id: 'rapid',
            title: 'Rapid-Response Solutions',
            description: 'MACINS has achieved a number of Quick-Fix projects utilizing an unconventional, non-linear delivery method in which design, procurement, and installation are performed simultaneously and in parallel to guarantee prompt completion.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
            icon: Zap
        }
    ];

    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '15+', label: 'Years Experience' },
        { number: '100%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Support Available' }
    ];

    return (
        <div className="min-h-screen bg-white">
          
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000)',
                        transform: `translateY(${scrollY * 0.5}px)`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/10" />
                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" /> */}

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
                        Best Interior Fitout Company Dubai
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-95 animate-fade-in-delay">
                        Leading the UAE in comprehensive interior design and fitout solutions with excellence and precision
                    </p>
                    <a
                        href="#services"
                        className="inline-flex items-center gap-2 bg-white text-[#064e3b] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Explore Our Services <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 md:py-32 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] mb-8">
                        Macins Group - Your Trusted Partner
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        Macins Group, a leading Interior Fitout company in the UAE, offers a comprehensive system for delivering fit-out services. Our experienced team collaborates seamlessly with your architect, designer, and project manager to ensure outstanding results. From initial design and planning to final installation, we manage every detail—including partitions, ceilings, flooring, furnishings, and complete electrical, mechanical, and plumbing (MEP) works, along with custom joinery and finishing—to make the interior space fully functional and ready for use.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-20 md:py-32 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] text-center mb-16">
                        Our Comprehensive Services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    id={service.id}
                                    data-observe
                                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer ${visibleCards.has(service.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-[#064e3b] p-3 rounded-full">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-[#064e3b] mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Feature Banner */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#064e3b] to-[#065f46] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Excellence in Every Detail
                    </h2>
                    <p className="text-xl md:text-2xl opacity-95 leading-relaxed">
                        From concept to completion, Macins Group delivers turnkey interior fitout solutions that transform spaces into exceptional environments. Our commitment to quality, innovation, and client satisfaction sets us apart as the premier choice in the UAE.
                    </p>
                </div>
            </section>

            <div className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-[#f0fdf4]/10 to-[#f0fdf4]/5 backdrop-blur-sm border border-[#f0fdf4]/20 rounded-2xl p-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-6">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-[#059669] text-lg mb-8">
                            Let's discuss how our MEP solutions can bring your vision to life.
                        </p>
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="group px-8 py-4 bg-[#064e3b] text-slate-900 font-bold rounded-xl hover:shadow-lg hover:shadow-[#f0fdf4]/20 transition-all duration-300 hover:scale-105">
                            <span className="flex items-center gap-2 text-white">
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* Footer */}
            <footer className="bg-[#064e3b] text-white py-12 px-4 text-center">
                <p className="text-lg opacity-90">
                    &copy; 2024 Macins Group. All rights reserved. | Best Interior Fitout Company in Dubai, UAE
                </p>
            </footer>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
      `}</style>
        </div>
    );
};

export default MacinsInteriorFitout;