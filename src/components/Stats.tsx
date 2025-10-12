import { useEffect, useState, useRef } from 'react';
import { Building2, Users, Award, Home } from 'lucide-react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Building2, value: 1000, suffix: '+', label: 'Projects', color: 'text-teal-600' },
    { icon: Users, value: 500, suffix: '+', label: 'Clients Served', color: 'text-cyan-600' },
    { icon: Award, value: 10, suffix: '+', label: 'Years of Experience', color: 'text-teal-600' },
    { icon: Home, value: 1415, suffix: '', label: 'Completed Works', color: 'text-cyan-600' },
  ];

  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
            Modern Design
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Excellence in Every Project
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over a decade of expertise, Macins Group has established itself as a trusted partner in construction, energy solutions, and infrastructure development across the Middle East region.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 ${stat.color} mb-4`}>
                <stat.icon size={32} />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
