import React, { useState } from 'react';
import { CONTEUDO_MEMORIA } from './constants';
import { LocationData } from './types';
import Header from './components/Header';
import MemoryMap from './components/MemoryMap';
import Timeline from './components/Timeline';
import Modal from './components/Modal';
import LearningPath from './components/LearningPath';

const App: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);

  const handleOpenLocation = (location: LocationData) => {
    setSelectedLocation(location);
  };

  const handleCloseLocation = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-800">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative bg-historic-ink text-white py-24 px-4 overflow-hidden">
          
          {/* Watermark Map Background */}
          <div className="absolute inset-0 z-0">
            {/* Imagem Aérea de Boa Vista mostrando o traçado radial */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Boa_Vista_%28Roraima%29_%282%29.jpg" 
              alt="Vista aérea do traçado urbano de Boa Vista" 
              className="w-full h-full object-cover opacity-25 grayscale sepia brightness-50 contrast-125"
            />
            {/* Camadas de superposição para garantir legibilidade e tom azulado */}
            <div className="absolute inset-0 bg-blue-900/30 mix-blend-color"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-historic-ink/90 via-historic-ink/60 to-historic-ink"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight drop-shadow-lg">
              Guia de Memória <br/><span className="text-amber-500">e História de Roraima</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 font-light mb-8 max-w-2xl mx-auto drop-shadow-md">
              Uma investigação crítica sobre monumentos, escolas e avenidas que narram — e ocultam — a história da Ditadura Civil-Militar.
            </p>
            <button 
              onClick={() => document.getElementById('memory-map')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg border-2 border-transparent hover:border-amber-400"
            >
              Iniciar Exploração
            </button>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 px-4 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed font-serif italic">
            "A memória não é apenas uma lembrança do passado, mas um campo de batalha no presente. 
            Ao caminhar por Boa Vista, passamos por nomes e estátuas que celebram o 'progresso', 
            mas o que essas homenagens silenciam sobre os povos originários e a repressão política?"
          </p>
        </section>

        {/* Memory Map Section */}
        <MemoryMap 
          locations={CONTEUDO_MEMORIA.locations} 
          onLocationClick={handleOpenLocation} 
        />

        {/* Learning Path Section */}
        <LearningPath steps={CONTEUDO_MEMORIA.learningPath} />

        {/* Timeline Section */}
        <Timeline events={CONTEUDO_MEMORIA.timeline} />

        {/* Padlet Section */}
        <section id="padlet" className="py-16 bg-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-historic-ink mb-4">Mural Colaborativo</h2>
              <p className="text-gray-600 mb-6">Explore documentos, fotos e contribuições adicionais no nosso Padlet.</p>
            </div>
            <div className="w-full h-[600px] bg-white rounded-xl shadow-lg overflow-hidden border-4 border-white">
              <iframe 
                src="https://padlet.com/embed/1070h2awfn8e1hzz" 
                className="w-full h-full border-0" 
                title="Padlet Guia Interativo"
                loading="lazy"
                allow="camera;microphone;geolocation"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-historic-ink text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-serif text-lg text-stone-200 mb-2">Guia Interativo de História e Memória</p>
          <p className="text-sm">Desenvolvido para fins educacionais - Pesquisa sobre Ditadura e Memória em Roraima.</p>
          <p className="text-xs mt-8 opacity-50">&copy; {new Date().getFullYear()} Produto Educacional. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Modal Overlay */}
      <Modal location={selectedLocation} onClose={handleCloseLocation} />
    </div>
  );
};

export default App;