import React, { useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Code, Palette } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Add floating animation to devices
    const devices = document.querySelectorAll('.floating-device');
    devices.forEach((device, index) => {
      const element = device as HTMLElement;
      element.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
      
      {/* Floating Devices */}
      <div className="absolute top-20 right-10 floating-device opacity-20">
        <div className="w-32 h-20 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg backdrop-blur-sm border border-purple-500/20"></div>
      </div>
      <div className="absolute bottom-20 left-10 floating-device opacity-20">
        <div className="w-24 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg backdrop-blur-sm border border-blue-500/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Anuj D. Dighe
            </h1>
            <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl text-gray-300">
              <Palette className="w-8 h-8 text-purple-400" />
              <span>AI-Enhanced UI/UX Designer & Prototyper</span>
              <Code className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Bridging stunning designs to functional prototypes with{' '}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold">
              AI superpowers
            </span>
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Figma to Code', 'AI-Enhanced Workflows', 'Interactive Prototypes', 'UX Research'].map((feature) => (
              <div
                key={feature}
                className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-500/20 text-purple-300 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{feature}</span>
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
              <Sparkles className="inline-block w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      <style jsx>{`
        .floating-device {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;