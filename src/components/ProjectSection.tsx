import React, { useState } from 'react';
import { Building2, ChevronLeft, ChevronRight, Wrench, X, Zap } from 'lucide-react';
import FitOut1 from "../assets/projects/fitout_1.png";
import FitOut2 from "../assets/projects/fitout_2.png";
import FitOut3 from "../assets/projects/fitout_3.png";
import FitOut4 from "../assets/projects/fitout_4.png";
import FitOut5 from "../assets/projects/fitout_5.png";
import FitOut6 from "../assets/projects/fitout_6.png";
import FitOut7 from "../assets/projects/fitout_7.png";
import FitOut8 from "../assets/projects/fitout_8.png";
import Mep1 from "../assets/projects/mep_1.png";
import Mep2 from "../assets/projects/mep_2.png";
import Mep3 from "../assets/projects/mep_3.png";
import Mep4 from "../assets/projects/mep_4.png";
import Mep5 from "../assets/projects/mep_5.png";
import Mep6 from "../assets/projects/mep_6.png";
import Ev1 from "../assets/projects/ev1.png";
import Ev2 from "../assets/projects/ev2.png";
import Ev3 from "../assets/projects/ev3.png";
import Ev4 from "../assets/projects/ev4.png";
import Ev5 from "../assets/projects/ev5.png";
import Ev6 from "../assets/projects/ev6.png";
import Ev7 from "../assets/projects/ev7.png";
import ContactPopup from './ContactPopup';
import ProjectsShowcase from './ProjectsShowcase';


const ProjectSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'general', name: 'General Projects' },
        { id: 'ev', name: 'EV Projects' },
        { id: 'mep', name: 'MEP Projects' }
    ];

    const projects = {
        general: {
            title: 'Projects',
            description: 'At MACINS Group of Companies, we have completed over 400 projects, ranging from small-scale to large-scale fit-out works. Our portfolio includes prestigious projects in diverse sectors, such as cafes, universities, airports, and corporate offices.',
            images: [
                FitOut1,
                FitOut2,
                FitOut3,
                FitOut4,
                FitOut5,
                FitOut6,
                FitOut7,
                FitOut8,
                // FitOut9

            ]
        },
        ev: {
            title: 'EV Projects',
            description: 'Leading the charge in electric vehicle infrastructure with Tesla charging stations and sustainable energy solutions.',
            images: [
                Ev1,
                Ev2,
                // Ev3,
                Ev4,
                Ev5,
                Ev6,
                Ev7
            ]
        },
        mep: {
            title: 'MEP Projects',
            description: 'Comprehensive mechanical, electrical, and plumbing solutions for commercial and retail spaces.',
            images: [
                Mep1,
                Mep2,
                Mep3,
                Mep4,
                Mep5,
                Mep6,
                // Mep7
            ]
        }
    };

    const getFilteredProjects = () => {
        if (selectedCategory === 'all') {
            return Object.values(projects).flatMap(cat =>
                cat.images.map(img => ({ ...cat, image: img }))
            );
        }
        const category = projects[selectedCategory as keyof typeof projects];
        return category.images.map(img => ({ ...category, image: img }));
    };

    const filteredProjects = getFilteredProjects();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Header */}
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                style={{
                    // opacity: isVisible ? 1 : 0,
                    // transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
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

            <section className="py-16 sm:py-24 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Transforming Spaces Into
                        <span className="text-[#064e3b]"> Functional Excellence</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Over 400 projects completed across diverse sectors, from small-scale to large-scale fit-out works.
                        Delivering high-quality results with meticulous attention to detail.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <button
                        onClick={() => setIsPopupOpen(true)}
                         className="bg-white text-[#064e3b] border-2 border-[#064e3b] px-8 py-3 rounded-lg hover:bg-green-50 transition">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl sm:text-5xl font-bold text-[#064e3b] mb-2">400+</div>
                            <div className="text-gray-600">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-4xl sm:text-5xl font-bold text-[#064e3b] mb-2">15+</div>
                            <div className="text-gray-600">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl sm:text-5xl font-bold text-[#064e3b] mb-2">100%</div>
                            <div className="text-gray-600">Quality Commitment</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 sm:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Our Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Wrench className="text-[#064e3b]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">MEP Projects</h3>
                            <p className="text-gray-600">
                                Comprehensive mechanical, electrical, and plumbing solutions for commercial and residential spaces,
                                including fit-out works and building renovations.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="text-[#064e3b]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">EV & Electrical</h3>
                            <p className="text-gray-600">
                                Specialized in solar park installations, ELV systems, trench work, and electrical modifications
                                for modern infrastructure needs.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Building2 className="text-[#064e3b]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Shade Solutions</h3>
                            <p className="text-gray-600">
                                Expert installation of pergola, tension, and canopy shades for car parking areas,
                                mosques, and public spaces across the UAE.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectsShowcase/>

          


           

            <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
    );
};

export default ProjectSection;