
import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://aguinaldo1.github.io/webcv/img/img_perf.jpg" 
                alt="Aguinaldo Américo" 
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/20"
              />
              <span className="font-bold text-gray-900 text-lg">Aguinaldo Américo</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['sobre', 'experiencia', 'projetos', 'habilidades', 'certificacoes', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 capitalize"
                >
                  {item === 'certificacoes' ? 'Certificações' : 
                   item === 'experiencia' ? 'Experiência' : item}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Botão Download CV Flutuante - Azul, Transparente e Redondo */}
      <div className="fixed top-20 left-4 z-40">
        <a
          href="https://aguinaldo1.github.io/webcv/Curriculo/curriculo_aguinaldo.pdf"
          download
          className="group flex items-center justify-center w-12 h-12 bg-blue-600/80 text-white rounded-full hover:bg-blue-700/90 transition-all duration-300 shadow-lg backdrop-blur-sm"
          title="Download CV"
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" />
        </a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-white border-b shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              {['sobre', 'experiencia', 'projetos', 'habilidades', 'certificacoes', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 capitalize"
                >
                  {item === 'certificacoes' ? 'Certificações' : 
                   item === 'experiencia' ? 'Experiência' : item}
                </button>
              ))}
              <a
                href="https://aguinaldo1.github.io/webcv/Curriculo/curriculo_aguinaldo.pdf"
                download
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
