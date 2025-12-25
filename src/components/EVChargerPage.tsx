import React, { useState } from 'react';
import { Zap, Home, Building2, Wrench, Phone, CheckCircle2, ArrowRight, ChevronLeft } from 'lucide-react';
import MobileConnector from "../assets/mobile_connector.jfif";
import ContactPopup from './ContactPopup';

export default function EVChargerPage() {
    const [activeTab, setActiveTab] = useState('wall');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
           
            {/* Hero Section */}
            <div className="relative h-screen overflow-hidden">
                {/* <div className="absolute inset-0 bg-black"></div> */}
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/9800006/pexels-photo-9800006.jpeg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/10" />


                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                    <div className="max-w-5xl">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                            Energy Solutions & Smart Building Technology
                        </h1>
                        <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 font-light max-w-4xl mx-auto">
                            Revolutionizing energy management with tailored finance options, decarbonization solutions, and AI-powered optimization
                        </p>
                        <button className="bg-white text-[#064e3b] px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-100 transition flex items-center gap-3 mx-auto shadow-2xl">
                            Discover Our Solutions <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Tesla Authorized Announcement Banner */}
            <section className="relative h-48 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1920&h=400&fit=crop"
                        alt="Tesla Charging Station"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-between">
                    <h2 className="text-2xl md:text-4xl font-bold text-white max-w-4xl uppercase tracking-wide">
                        "WE ARE THRILLED TO ANNOUNCE THAT MACINS IS NOW A TESLA AUTHORIZED INSTALLER, THANK YOU"
                    </h2>
                    <button className="bg-gray-800/80 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition whitespace-nowrap ml-6">
                        Find out more
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] mb-6">
                            EV Charger Installation Company in Dubai, UAE
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Macins Group is proud to be an authorized Tesla installer, delivering exceptional EV charging solutions to customers across the Middle East. With a focus on quality and customer satisfaction, we have successfully completed numerous projects in UAE, demonstrating our expertise in this field.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-[#064e3b] to-[#0a6847] p-8 rounded-2xl text-white text-center transform hover:scale-105 transition">
                            <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Tesla Authorized</h3>
                            <p className="text-white/90">Official Tesla installation partner</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#064e3b] to-[#0a6847] p-8 rounded-2xl text-white text-center transform hover:scale-105 transition">
                            <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                            <p className="text-white/90">Certified and experienced installers</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#064e3b] to-[#0a6847] p-8 rounded-2xl text-white text-center transform hover:scale-105 transition">
                            <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Quality Service</h3>
                            <p className="text-white/90">Exceeding customer expectations</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tesla Products Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] text-center mb-12">
                        Tesla Charging Solutions
                    </h2>

                    <div className="flex justify-center mb-8">
                        <div className="bg-white rounded-full p-2 shadow-lg">
                            <button
                                onClick={() => setActiveTab('wall')}
                                className={`px-8 py-3 rounded-full font-semibold transition ${activeTab === 'wall'
                                        ? 'bg-[#064e3b] text-white'
                                        : 'text-gray-600 hover:text-[#064e3b]'
                                    }`}
                            >
                                Wall Connector
                            </button>
                            <button
                                onClick={() => setActiveTab('mobile')}
                                className={`px-8 py-3 rounded-full font-semibold transition ${activeTab === 'mobile'
                                        ? 'bg-[#064e3b] text-white'
                                        : 'text-gray-600 hover:text-[#064e3b]'
                                    }`}
                            >
                                Mobile Connector
                            </button>
                        </div>
                    </div>

                    {activeTab === 'wall' && (
                        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="grid md:grid-cols-2">
                                <div className="relative h-96 md:h-auto">
                                    <img
                                        src="https://img1.wsimg.com/isteam/ip/9e4a5c06-f47b-488e-a820-94cfc3f8cda0/WhatsApp%20Image%202023-02-18%20at%208.08.40%20PM.jpeg/:/cr=t:6.81%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true/qt=q:25"
                                        alt="Tesla Wall Connector"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                                </div>
                                <div className="p-12">
                                    <h3 className="text-3xl font-bold text-[#064e3b] mb-6">TESLA Wall Connector</h3>
                                    <div className="space-y-4 text-gray-700">
                                        <div className="flex items-start gap-3">
                                            <Zap className="w-6 h-6 text-[#064e3b] flex-shrink-0 mt-1" />
                                            <p>
                                                <strong className="text-[#064e3b]">Faster Charging:</strong> Provides up to 77 km of range per hour of charge, significantly faster than standard Level 2 charging stations (30-40 km per hour).
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-[#064e3b] flex-shrink-0 mt-1" />
                                            <p>
                                                <strong className="text-[#064e3b]">Sleek Design:</strong> Compact wall-mounted unit for easy access in your garage or parking lot.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-[#064e3b] flex-shrink-0 mt-1" />
                                            <p>
                                                <strong className="text-[#064e3b]">Smart Features:</strong> Schedule charging times and remotely monitor progress through the Tesla app.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'mobile' && (
                        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="grid md:grid-cols-2">
                                <div className="relative h-96 md:h-auto">
                                    <img
                                        src={MobileConnector}
                                        alt="Tesla Mobile Connector"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                                </div>
                                <div className="p-12">
                                    <h3 className="text-3xl font-bold text-[#064e3b] mb-6">TESLA Mobile Connector</h3>
                                    <div className="space-y-4 text-gray-700">
                                        <div className="flex items-start gap-3">
                                            <Zap className="w-6 h-6 text-[#064e3b] flex-shrink-0 mt-1" />
                                            <p>
                                                <strong className="text-[#064e3b]">Versatile Charging:</strong> Stay charged during extended trips with flexible charging options.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-[#064e3b] flex-shrink-0 mt-1" />
                                            <p>
                                                <strong className="text-[#064e3b]">NEMA 5-15 Adapter:</strong> Recharge up to 3 miles of range per hour using a standard outlet.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-[#064e3b] flex-shrink-0 mt-1" />
                                            <p>
                                                <strong className="text-[#064e3b]">NEMA 14-50 Adapter:</strong> Charge up to 30 miles of range per hour for faster charging.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-[#064e3b] flex-shrink-0 mt-1" />
                                            <p>
                                                <strong className="text-[#064e3b]">Complete Package:</strong> Includes 20-foot cable, adapters, and storage bag for portability.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Installation Locations */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] text-center mb-16">
                        Where We Install
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Home Charging */}
                        <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                                    alt="Home Charging"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            </div>
                            <div className="relative p-10 h-full flex flex-col justify-end">
                                <Home className="w-16 h-16 text-white mb-4" />
                                <h3 className="text-3xl font-bold text-white mb-4">Charger for Home</h3>
                                <p className="text-white/90 text-lg leading-relaxed">
                                    Convenience of charging overnight without relying on public stations. Save time, ensure your vehicle is fully charged, and enjoy peace of mind for long drives. Stay ahead in the growing world of electric mobility with a home EV charger.
                                </p>
                            </div>
                        </div>

                        {/* Office Charging */}
                        <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                                    alt="Office Charging"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            </div>
                            <div className="relative p-10 h-full flex flex-col justify-end">
                                <Building2 className="w-16 h-16 text-white mb-4" />
                                <h3 className="text-3xl font-bold text-white mb-4">Charger for Office</h3>
                                <p className="text-white/90 text-lg leading-relaxed">
                                    Demonstrate your company's commitment to sustainability. Boost employee morale, enable work-related EV travel, and attract top talent prioritizing eco-friendly transportation. A valuable perk for modern workplaces.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gradient-to-br from-[#064e3b] to-[#0a6847] text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Services</h2>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 hover:bg-white/20 transition">
                            <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                                <Wrench className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Installation Services</h3>
                            <p className="text-white/90 leading-relaxed">
                                Professional and efficient installation of EV charging stations at your location, ensuring seamless integration into your existing infrastructure. We offer a variety of options for electric vehicle supply equipment (EVSE), providing complete satisfaction to our customers.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 hover:bg-white/20 transition">
                            <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Operation & Maintenance</h3>
                            <p className="text-white/90 leading-relaxed">
                                After procurement and installation of electric vehicle supply equipment (EVSE), we handle all operational aspects including safe usage and maintenance. Our comprehensive support ensures your charging infrastructure operates smoothly and efficiently.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] mb-6">
                        Ready to Go Electric?
                    </h2>
                    <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
                        Join the future of sustainable transportation with Macins Group. Contact us today to discuss your EV charging installation needs.
                    </p>
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="bg-[#064e3b] text-white px-12 py-5 rounded-full font-semibold text-lg hover:bg-[#0a6847] transition shadow-xl flex items-center gap-3 mx-auto">
                        <Phone className="w-6 h-6" /> Get in Touch
                    </button>
                </div>
            </section>
            <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />


        </div>
    );
}