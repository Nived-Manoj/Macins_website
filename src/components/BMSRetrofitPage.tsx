import React, { useState, useEffect } from 'react';
import { Zap, Gauge, Thermometer, Settings, CheckCircle, ArrowRight, Building2, Cpu, Leaf, Home, ChevronLeft } from 'lucide-react';
import ContactForm from "../components/Contact";
import ContactPopup from './ContactPopup';
import { useNavigate } from 'react-router-dom';

export default function BMSRetrofitPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);



    const navigate = useNavigate();


    useEffect(() => {
        setIsVisible(true);
    }, []);

    const services = [
        {
            icon: <Settings className="w-8 h-8" />,
            title: "Control System Retrofitting",
            description: "Modernize outdated valves, sensors, and actuators with energy-efficient solutions.",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"
        },
        {
            icon: <Building2 className="w-8 h-8" />,
            title: "BMS & Building Automation",
            description: "Seamless installation, integration, and commissioning of DDC panels, controllers, and sensors.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
        },
        {
            icon: <Thermometer className="w-8 h-8" />,
            title: "Chilled Water & HVAC Controls",
            description: "Optimize network performance with advanced flow control, temperature monitoring, and automation.",
            image: "https://images.unsplash.com/photo-1635241161466-541f065683ba?w=600&q=80"
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "Custom Control Panels & Electrical Works",
            description: "Tailor-made panel design, wiring, and integration for smooth automation workflows.",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Technical Support & On-Site Services",
            description: "Expert supervision, testing, commissioning, and documentation to ensure flawless execution.",
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80"
        }
    ];

    const projects = [
        {
            title: "Siemens Integration Projects",
            description: "Successfully executed Building Management System (BMS) solutions, ensuring seamless automation and energy efficiency across multiple facilities.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
            category: "BMS Integration",
            impact: "35% Energy Savings"
        },
        {
            title: "Retrofit Works at Lipton",
            description: "Upgraded legacy systems with modern automation solutions, improving operational efficiency and reducing energy consumption.",
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
            category: "System Retrofit",
            impact: "40% Cost Reduction"
        },
        {
            title: "EV Charging Infrastructure",
            description: "Designed and implemented state-of-the-art electric vehicle charging stations for commercial and residential complexes, supporting sustainable mobility.",
            image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
            category: "Green Energy",
            impact: "50+ Charging Points"
        },
        {
            title: "Smart Building Implementations",
            description: "Integrated IoT-based controls for lighting, HVAC, and security systems, enhancing convenience and energy management.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
            category: "IoT Solutions",
            impact: "Real-time Monitoring"
        }
    ];


    const partners = ["Siemens", "Honeywell", "Schneider Electric", "Johnson Controls"];

    return (
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
            style={{
                paddingTop: "70px"
            }}
        >
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
                }}
            >
                <div
                    className=" mt-0 rounded-3xl px-4 py-5 flex transition-all duration-300"
                    style={{
                        backgroundColor: 'white',
                    }}
                >
                    <button
                    onClick={() => (window.location.href = "/#services")}
                        // onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-all duration-300 group"
                    >
                        <div className="p-2 rounded-full bg-gray-100 group-hover:bg-teal-50 transition-all">
                            <ChevronLeft size={20} />
                        </div>
                        <span className="font-semibold">Back</span>
                    </button>


                </div>
            </header>
            {/* Back Button */}


            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(240, 253, 244, 0.05) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>

                <div className="relative max-w-7xl mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-1 bg-gradient-to-r from-[#f0fdf4] to-emerald-400"></div>
                                <span className="text-[#f0fdf4] font-semibold tracking-wider">MACINS GROUP</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                BMS & RETROFIT
                            </h1>

                            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
                                Empowering Buildings with Intelligent, Energy-Efficient Solutions
                            </p>

                            <p className="text-lg text-gray-400 leading-relaxed">
                                At Macins Group, we transform spaces into smarter, greener buildings through advanced automation, retrofit, and control solutions, in collaboration with industry leaders.
                            </p>

                            {/* Partner Logos Section */}
                            <div className="mt-12 flex flex-wrap gap-6 items-center">
                                {partners.map((partner, idx) => (
                                    <div
                                        key={partner}
                                        className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#f0fdf4]/30 transition-all duration-300"
                                        style={{
                                            animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                                        }}
                                    >
                                        <span className="text-gray-300 font-medium">{partner}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#f0fdf4]/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                                    alt="Building Management System"
                                    className="relative rounded-3xl shadow-2xl border border-white/10"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* What We Do Section */}
            <div className=" mx-auto px-6 py-20"
                style={{
                    backgroundColor: "white"
                }}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#059669]"
                        style={{
                            fontWeight: "300"
                        }}
                    >What We Do</h2>
                    <div className="w-30 h-1 bg-gradient-to-r from-[#f0fdf4] to-emerald-400 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-gradient-to-br rounded-2xl border border-white/10 hover:border-[#f0fdf4]/30 transition-all duration-500 cursor-pointer overflow-hidden"
                            onMouseEnter={() => setActiveService(idx)}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                            }}
                        >
                            {/* Image Background */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div> */}

                                {/* Icon Overlay */}
                                <div className="absolute bottom-4 left-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#f0fdf4]/90 to-emerald-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <div className="text-slate-900">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#f0fdf4] transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-[#f0fdf4] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm font-semibold">Learn More</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Value Proposition */}
                <div className="mt-16 p-8 bg-[#059669] rounded-2xl border border-[#f0fdf4]/20">
                    <div className="flex items-start gap-4">
                        <Leaf className="w-8 h-8 text-[#f0fdf4] flex-shrink-0 mt-1" />
                        <p className="text-lg text-gray-300 leading-relaxed">
                            We work hand-in-hand with contractors and consultants to deliver <span className="text-[#f0fdf4] font-semibold">smart, sustainable, and efficient buildings</span> that meet the demands of modern infrastructure.
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Projects Section */}
            <div className="bg-white py-20">
                <div className="mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#059669]">Recent Projects</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#f0fdf4] to-emerald-400 mx-auto mb-4"></div>
                        <p className="text-gray-400 text-lg">Delivering excellence across diverse industries</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                                }}
                            >
                                {/* Large Project Image */}
                                <div className="relative h-[500px] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-90"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent"></div>

                                    {/* Success Badge */}
                                    <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-[#f0fdf4]/90 backdrop-blur-sm rounded-full shadow-lg">
                                        <CheckCircle className="w-5 h-5 text-slate-900" />
                                        <span className="text-slate-900 font-bold text-sm">Completed</span>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        {/* Project Number */}
                                        <div className="inline-block px-3 py-1 bg-[#f0fdf4]/20 backdrop-blur-sm rounded-lg border border-[#f0fdf4]/30 mb-4">
                                            <span className="text-[#f0fdf4] font-bold text-sm">PROJECT {String(idx + 1).padStart(2, '0')}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl font-bold mb-4 group-hover:text-[#f0fdf4] transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Bottom Bar with CTA */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                                <span className="flex items-center gap-2">
                                                    <Building2 className="w-4 h-4" />
                                                    {project.category}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <Zap className="w-4 h-4" />
                                                    {project.impact}
                                                </span>
                                            </div>
                                            {/* <div className="flex items-center text-[#f0fdf4] font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div> */}
                                        </div>
                                    </div>

                                    {/* Hover Effect Line */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f0fdf4] to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className=" mx-auto px-6 py-20"
                style={{
                    backgroundColor: "white"
                }}>
                <div className="relative overflow-hidden bg-gradient-to-r from-[#f0fdf4]/10 to-emerald-500/10 rounded-3xl p-12 border border-[#f0fdf4]/20"
                    style={{
                        backgroundColor: "#064e3b"
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5"></div>
                    <div className="relative text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Your Building?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Let's work together to create smarter, more efficient spaces that drive sustainability and performance.
                        </p>

                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="group px-8 py-4 bg-gradient-to-r from-[#f0fdf4] to-emerald-400 text-slate-900 font-bold rounded-xl hover:shadow-lg hover:shadow-[#f0fdf4]/20 transition-all duration-300 hover:scale-105">
                            <span className="flex items-center gap-2">
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />


            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}