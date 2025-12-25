import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Factory, Building, Brain, Lightbulb, TrendingDown, Server, Leaf, Flame, Wind, Battery, ChevronLeft } from 'lucide-react';
import ContactPopup from './ContactPopup';

const MacinsEnergySolutions = () => {
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

    const mainServices = [
        {
            id: 'energy-solutions',
            title: 'Energy Solutions',
            description: 'The Macins Group offers tailored finance options and energy efficiency solutions aimed at significantly lowering energy usage for its clients. We combine our knowledge and expertise to optimize all types of buildings and production facilities by implementing smart technologies, energy-saving equipment, and environmentally-friendly solutions through design, installation, and operation.',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800',
            icon: Zap,
            highlight: 'Performance-based contracts with guaranteed savings plans'
        },
        {
            id: 'utility-solutions',
            title: 'Utility Solutions',
            description: 'The MACINS Group offers an all-inclusive, on-site energy production solution that facilitates the implementation of decarbonization projects. We take charge of the entire process, including design, construction, financing, and operation and maintenance, to help clients achieve their decarbonization targets.',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800',
            icon: Factory,
            highlight: 'No upfront capital expenses or debt required'
        },
        {
            id: 'facility-management',
            title: 'Comprehensive Facility Management',
            description: 'The MACINS Group is dedicated to being a reliable and long-term partner, providing facility services with a focus on energy management and asset optimization. Our all-encompassing facility management solutions are tailored to address the unique challenges faced by organizations across various industries.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
            icon: Building,
            highlight: 'Demand-driven solutions for organizational growth'
        },
        {
            id: 'smart-energy',
            title: 'Smart Energy Savings',
            description: 'The MACINS Group employs Smart Building Technology to revolutionize the way it manages assets across various industries, properties, and communities committed to reducing their carbon footprint. Our technology-based business models and data-driven approach enable clients to move from traditional cost management to optimized business productivity.',
            image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800',
            icon: Brain,
            highlight: 'AI-powered Operations Control Center (iCEE)'
        }
    ];

    const technologies = [
        { name: 'Combined Heat & Power (CHP)', icon: Flame },
        { name: 'Trigeneration', icon: Factory },
        { name: 'Biomass Boilers', icon: Leaf },
        { name: 'Anaerobic Digestion', icon: Lightbulb },
        { name: 'Heat Pumps', icon: Wind },
        { name: 'Electric Boilers', icon: Zap },
        { name: 'Heat Recovery Systems', icon: TrendingDown },
        { name: 'Chillers & Air Compressors', icon: Battery }
    ];

    const features = [
        {
            icon: Lightbulb,
            title: 'Energy Efficiency',
            description: 'Significantly lower energy usage through smart technologies and equipment'
        },
        {
            icon: TrendingDown,
            title: 'Cost Reduction',
            description: 'Optimize operational and capital expenditures with data-driven solutions'
        },
        {
            icon: Leaf,
            title: 'Sustainability',
            description: 'Environmentally-friendly solutions to reduce carbon footprint'
        },
        {
            icon: Server,
            title: 'Smart IoT Platforms',
            description: 'AI and machine learning for automatic savings detection'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
           
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000)',
                        transform: `translateY(${scrollY * 0.5}px)`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent)]" />

                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
                        Energy Solutions & Smart Building Technology
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-95 animate-fade-in-delay">
                        Revolutionizing energy management with tailored finance options, decarbonization solutions, and AI-powered optimization
                    </p>
                    <a
                        href="#services"
                        className="inline-flex items-center gap-2 bg-white text-[#064e3b] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Discover Our Solutions <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    id={`feature-${index}`}
                                    data-observe
                                    className={`text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-500 ${visibleCards.has(`feature-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#064e3b] rounded-2xl mb-4">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#064e3b] mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section id="services" className="py-20 md:py-32 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] text-center mb-16">
                        Comprehensive Energy Services
                    </h2>

                    <div className="space-y-12">
                        {mainServices.map((service, index) => {
                            const Icon = service.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={service.id}
                                    id={service.id}
                                    data-observe
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${visibleCards.has(service.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}
                                >
                                    <div className="lg:w-1/2 h-96 lg:h-full relative overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 left-6 bg-[#064e3b] p-4 rounded-2xl">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <div className="lg:w-1/2 p-8 lg:p-12">
                                        <h3 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-6">
                                            {service.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#064e3b] to-[#065f46] text-white px-6 py-3 rounded-full font-semibold">
                                            <Zap className="w-5 h-5" />
                                            {service.highlight}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-[#064e3b] to-[#065f46] text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                        Advanced Technologies We Deploy
                    </h2>
                    <p className="text-xl text-center mb-16 opacity-95 max-w-3xl mx-auto">
                        Our utility solutions incorporate cutting-edge technologies for comprehensive decarbonization projects
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {technologies.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={index}
                                    id={`tech-${index}`}
                                    data-observe
                                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 hover:-translate-y-2 transition-all duration-500 ${visibleCards.has(`tech-${index}`) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                        }`}
                                    style={{ transitionDelay: `${index * 80}ms` }}
                                >
                                    <Icon className="w-12 h-12 mx-auto mb-4" />
                                    <h3 className="font-semibold text-lg">
                                        {tech.name}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* iCEE Operations Center */}
            <section className="py-20 md:py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                                    alt="iCEE Operations Control Center"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/80 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">iCEE</h3>
                                    <p className="text-white/90 text-lg">Integrated Center for Engineering & Environment</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] mb-6">
                                Operations Control Center
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                As part of our digital transformation strategy, the MACINS Group has established an Operations Control Center called The Integrated Center for Engineering & Environment (iCEE) at our head office. This acts as the hub for all our operations and improves the visibility and control of energy and asset performance across our clients' portfolios.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                From the iCEE, we use smart IoT platforms incorporating artificial intelligence and machine learning to automatically detect and identify savings and inefficiencies. Our solutions also empower our clients to make data-driven decisions about the lifecycle and replacement of their assets.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-[#064e3b]/10 px-4 py-2 rounded-full">
                                    <Brain className="w-5 h-5 text-[#064e3b]" />
                                    <span className="font-semibold text-[#064e3b]">AI & Machine Learning</span>
                                </div>
                                <div className="flex items-center gap-2 bg-[#064e3b]/10 px-4 py-2 rounded-full">
                                    <Server className="w-5 h-5 text-[#064e3b]" />
                                    <span className="font-semibold text-[#064e3b]">Smart IoT Platforms</span>
                                </div>
                                <div className="flex items-center gap-2 bg-[#064e3b]/10 px-4 py-2 rounded-full">
                                    <TrendingDown className="w-5 h-5 text-[#064e3b]" />
                                    <span className="font-semibold text-[#064e3b]">Automatic Savings Detection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] mb-6">
                        Ready to Transform Your Energy Management?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Contact us today to learn how our tailored energy solutions can significantly reduce costs while achieving your sustainability goals.
                    </p>
                    <button
                         onClick={() => setIsPopupOpen(true)}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#064e3b] to-[#065f46] text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Contact Us <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </section>

            <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

           

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

export default MacinsEnergySolutions;