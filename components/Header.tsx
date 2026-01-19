import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-historic-ink text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-amber-500" />
            <span className="font-serif font-bold text-lg tracking-wide">Guia Memória Roraima</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Início</button>
              <button onClick={() => scrollToSection('memory-map')} className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Mapa da Memória</button>
              <button onClick={() => scrollToSection('learning-path')} className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors border border-amber-500/30">Trilha de Aprendizagem</button>
              <button onClick={() => scrollToSection('timeline')} className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Linha do Tempo</button>
              <button onClick={() => scrollToSection('padlet')} className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Mural Padlet</button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-historic-ink border-t border-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium">Início</button>
            <button onClick={() => scrollToSection('memory-map')} className="block w-full text-left hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium">Mapa da Memória</button>
            <button onClick={() => scrollToSection('learning-path')} className="block w-full text-left hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium text-amber-400">Trilha de Aprendizagem</button>
            <button onClick={() => scrollToSection('timeline')} className="block w-full text-left hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium">Linha do Tempo</button>
            <button onClick={() => scrollToSection('padlet')} className="block w-full text-left bg-amber-600 hover:bg-amber-700 px-3 py-2 rounded-md text-base font-medium">Mural Padlet</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;