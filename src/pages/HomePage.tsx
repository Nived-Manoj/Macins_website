import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ArrowRight, 
  Award, 
  Users, 
  Building, 
  Zap, 
  Car, 
  Truck, 
  CheckCircle, 
  Globe, 
  Shield, 
  TrendingUp,
  Star,
  Quote,
  Calendar,
  Target
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import ServiceCard from '../components/ServiceCard';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Building,
      title: 'Construction',
      description: 'Premium construction and MEP contracting solutions',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      icon: Zap,
      title: 'Energy Solutions',
      description: 'Smart energy systems and sustainable power solutions',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Car,
      title: 'EV Infrastructure',
      description: 'Electric vehicle charging solutions and infrastructure',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Comprehensive logistics and supply chain management',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Multiple awards for excellence in construction and sustainability',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Zero-accident record across all major projects',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      icon: Globe,
      title: 'Regional Leader',
      description: 'Expanding presence across Middle East and South Asia',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Growth Excellence',
      description: '300% growth in renewable energy projects',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'CEO, Emirates Development',
      content: 'Macins Group delivered our tower project with exceptional quality and innovation.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      position: 'Director, Green Energy Corp',
      content: 'Outstanding solar installation project that exceeded all our expectations.',
      rating: 5
    },
    {
      name: 'Raj Patel',
      position: 'Manager, TechHub Solutions',
      content: 'Their interior fit-out work transformed our workspace completely.',
      rating: 5
    }
  ];

  const newsItems = [
    {
      date: '2024-12-15',
      title: 'Macins Group Wins Major Solar Project in Dubai',
      description: 'Awarded 100MW solar installation contract for Dubai South development'
    },
    {
      date: '2024-12-10',
      title: 'New EV Charging Network Launch',
      description: 'Expanding electric vehicle infrastructure across UAE with 200+ stations'
    },
    {
      date: '2024-12-05',
      title: 'Sustainability Award Recognition',
      description: 'Received Green Building Excellence Award for innovative construction practices'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-indigo-900/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        ></div>

        <div className={`relative z-20 text-center text-white max-w-5xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              Design
            </span>
            <span className="mx-4 text-slate-300">•</span>
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Build
            </span>
            <span className="mx-4 text-slate-300">•</span>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
              Inspire
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed max-w-4xl mx-auto">
            Transforming visions into reality across construction, energy, technology, and beyond with innovative solutions that shape the future
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Explore Our Work
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105">
              <Play className="inline mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Our Story
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-1 h-16 bg-gradient-to-b from-emerald-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Excellence in Numbers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <AnimatedCounter end={10} suffix="+" />
              <p className="text-slate-600 dark:text-slate-300 font-medium">Years Expertise</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-8 w-8 text-white" />
              </div>
              <AnimatedCounter end={1000} suffix="+" />
              <p className="text-slate-600 dark:text-slate-300 font-medium">Projects Executed</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-violet-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <AnimatedCounter end={500} suffix="+" />
              <p className="text-slate-600 dark:text-slate-300 font-medium">Clients Served</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <AnimatedCounter end={4} suffix="+" />
              <p className="text-slate-600 dark:text-slate-300 font-medium">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Delivering excellence across multiple industries with innovative solutions and unmatched expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Excellence in Every Project
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Based in Dubai, Macins Group stands as a beacon of innovation and excellence in the construction, energy, and technology sectors. Our commitment to quality and sustainable solutions has positioned us as a trusted partner for clients across the UAE, India, Saudi Arabia, and Qatar.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Multi-sector expertise across 8+ industries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Regional presence in 4+ countries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Commitment to sustainable innovation</span>
                </div>
              </div>
              
              <button className="group bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-slate-300 hover:from-slate-800 hover:to-blue-700 dark:hover:from-white dark:hover:to-slate-200 text-white dark:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Learn More About Us
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 rounded-3xl p-1">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Macins Group Projects"
                    className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Key Achievements
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Milestones that define our journey towards excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className={`bg-gradient-to-br ${achievement.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing our latest innovations and breakthrough achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dubai Marina Tower"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Dubai Marina Tower</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Luxury residential tower with premium MEP systems</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 text-sm rounded-full">MEP</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-sm rounded-full">Luxury</span>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/9875417/pexels-photo-9875417.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Solar Energy Farm"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Solar Energy Farm</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">100MW solar installation powering 15,000+ homes</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 text-sm rounded-full">Solar</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-sm rounded-full">Sustainable</span>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7728047/pexels-photo-7728047.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="EV Charging Network"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">EV Charging Network</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Smart charging infrastructure across Dubai</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-400 text-sm rounded-full">EV</span>
                  <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-400 text-sm rounded-full">Smart</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              View All Projects
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Trusted by industry leaders across the region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="text-center mb-6">
                  <Quote className="h-8 w-8 text-emerald-500 mx-auto mb-4" />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-emerald-400 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-slate-600 dark:text-slate-300 text-center mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="text-center">
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Technology */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 rounded-3xl p-1">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Smart Technology"
                    className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Innovation & Technology
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                We leverage cutting-edge technologies including IoT sensors, AI analytics, and smart building management systems to deliver solutions that are not just built for today, but designed for tomorrow.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-slate-700 dark:text-slate-300">Smart Building Management Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                  <span className="text-slate-700 dark:text-slate-300">AI-Powered Energy Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-violet-500" />
                  <span className="text-slate-700 dark:text-slate-300">IoT Integration & Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyan-500" />
                  <span className="text-slate-700 dark:text-slate-300">Sustainable Construction Technologies</span>
                </div>
              </div>
              
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Explore Our Technology
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Latest News & Updates
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest projects, achievements, and industry insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <article 
                key={index}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-5 w-5 text-emerald-500" />
                  <time className="text-sm text-slate-500 dark:text-slate-400">
                    {new Date(news.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {news.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {news.description}
                </p>
                
                <button className="group/btn text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300">
                  Read More
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Target className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              Ready to Transform Your Vision?
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              Partner with us to bring your most ambitious projects to life with innovative solutions, unmatched expertise, and unwavering commitment to excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Start Your Project
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;