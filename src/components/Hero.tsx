
import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <img 
            src="https://aguinaldo1.github.io/webcv/img/img_perf.jpg" 
            alt="Aguinaldo Américo" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 object-cover ring-4 ring-blue-500/20 shadow-2xl"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Aguinaldo Américo
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
            Site Reliability Engineer (SRE) | DevOps Engineer
          </p>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transformando tecnologia em soluções resilientes e sustentáveis. 
            Especialista em observabilidade, automação e práticas DevOps com foco em performance e experiência do usuário.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Conheça meu trabalho
            </button>
            
            <a
              href="#contato"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Vamos conversar
            </a>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </button>
      </div>
    </section>
  );
};
