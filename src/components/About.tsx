import { Globe, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-teal-700 to-cyan-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7937666/pexels-photo-7937666.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office interior"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-8 shadow-2xl max-w-xs">
              <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-2">
                Modern Design
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                About Macins Group
              </h3>
              <p className="text-gray-600 text-sm">
                Building the future with innovation and excellence
              </p>
            </div>
          </div>

          <div className="text-white space-y-8">
            <div>
              <div className="text-sm font-semibold tracking-widest uppercase text-cyan-200 mb-3">
                Our Story
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Building Tomorrow's Infrastructure Today
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                Founded with a vision to transform the Middle East's construction and infrastructure landscape, Macins Group has grown into a diversified conglomerate delivering excellence across multiple sectors.
              </p>
              <p className="text-gray-200">
                Under the leadership of Praveen Pillai, we've established a reputation for innovation, quality, and reliability. Our integrated approach combines traditional craftsmanship with cutting-edge technology to deliver projects that stand the test of time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Regional Presence</h4>
                  <p className="text-sm text-gray-200">UAE, India, Saudi Arabia, Qatar</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Expert Team</h4>
                  <p className="text-sm text-gray-200">Skilled professionals across all sectors</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Mission</h4>
                  <p className="text-sm text-gray-200">Excellence in every project</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Quality Assured</h4>
                  <p className="text-sm text-gray-200">International standards certified</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition-all font-semibold"
              >
                <span>Get in Touch</span>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all font-semibold border border-white/30"
              >
                <span>View Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
