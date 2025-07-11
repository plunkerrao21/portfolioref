import React from 'react';
import { Heart, Zap, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Anuj D. Dighe
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
              © 2024 Anuj D. Dighe. Crafted with 
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              and AI superpowers
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Tagline */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Bridging design and development with artificial intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;