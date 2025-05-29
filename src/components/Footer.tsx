
import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://aguinaldo1.github.io/webcv/img/img_perf.jpg" 
              alt="Aguinaldo Américo" 
              className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/50 mr-3"
            />
            <span className="text-xl font-bold">Aguinaldo Américo</span>
          </div>
          
          <p className="text-gray-400 mb-4">
            Site Reliability Engineer (SRE) | DevOps Engineer
          </p>
          
          <div className="flex items-center justify-center text-gray-400 text-sm">
            <span>&copy; {currentYear} Aguinaldo Américo. Feito com</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <span>e muito código em React</span>
          </div>
          
          <div className="mt-4 text-xs text-gray-500">
            <p>Transformando ideias em soluções tecnológicas resilientes</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
