import React from 'react';
import { Linkedin, Twitter, Mail, Quote } from 'lucide-react';
import Parveen from "../assets/praveen2.jpeg";

export default function FounderSection() {
  const founder = {
    name: "Praveen Pillai",
    role: "Founder & CEO",
    image: Parveen,
    bio: "Driven by the belief that progress demands purpose, Praveen Pillai founded Macins Group in 2014 to redefine how infrastructure is built in the Middle East. Starting his career as a Sales Engineer, he quickly recognized opportunities to modernize and optimize the industry through quality-focused execution, technology adoption, and ethical leadership.",
    journey: "Praveen's journey is a reflection of his philosophy: start small, think big, grow steadily, and deliver consistently. Today, his vision has led Macins Group into key verticals such as Contracting, Interiors, Smart Energy Solutions, EV Charging Infrastructure, and Real Estate, serving governments, enterprises, and communities across the region.",
    leadership: "He continues to lead by example, shaping a culture of accountability, innovation, and excellence within every division of the group.",
    verticals: [
      "Primary Care",
      "Specialized Medical Services",
      "Emergency Care",
      "Diagnostic Services",
      "Patient Wellness Programs"
    ],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "praveen@macinsgroup.com"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">Leadership</p>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">About the Founder</h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* Founder Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Image Section */}
            <div className="lg:col-span-2 relative h-full min-h-96 bg-gradient-to-br from-emerald-600 to-emerald-800">
              {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
              <img 
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-4xl font-bold text-white mb-2">{founder.name}</h3>
                <p className="text-emerald-100 text-xl font-medium">{founder.role}</p>
                <p className="text-emerald-200 text-sm mt-2">Macins Group</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-3 p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <p className="text-slate-700 text-lg leading-relaxed">{founder.bio}</p>
                </div>

                <div>
                  <p className="text-slate-700 text-lg leading-relaxed">{founder.journey}</p>
                </div>

                <div>
                  <p className="text-slate-700 text-lg leading-relaxed">{founder.leadership}</p>
                </div>

                {/* Key Verticals */}
                <div className="pt-6">
                  <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-4">Key Verticals</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {founder.verticals.map((vertical, index) => (
                      <div key={index} className="flex items-center gap-3 bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-800 font-medium text-sm">{vertical}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-4">Connect</h4>
                <div className="flex gap-4">
                  <a 
                    href={founder.social.linkedin}
                    className="flex items-center justify-center w-12 h-12 bg-slate-100 hover:bg-emerald-600 text-slate-600 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={founder.social.twitter}
                    className="flex items-center justify-center w-12 h-12 bg-slate-100 hover:bg-emerald-600 text-slate-600 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href={`mailto:${founder.social.email}`}
                    className="flex items-center justify-center w-12 h-12 bg-slate-100 hover:bg-emerald-600 text-slate-600 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-12 text-center shadow-xl">
          <Quote className="w-12 h-12 text-emerald-200 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-light text-white italic max-w-4xl mx-auto leading-relaxed">
            Start small, think big, grow steadily, and deliver consistently.
          </blockquote>
          <p className="mt-6 text-emerald-100 font-semibold text-lg">— {founder.name}</p>
          <p className="text-emerald-200 text-sm">Founder, Macins Group</p>
        </div>
      </div>
    </div>
  );
}