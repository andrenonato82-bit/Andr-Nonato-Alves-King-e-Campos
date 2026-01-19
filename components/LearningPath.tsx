import React, { useState } from 'react';
import { ArrowRight, BookOpen, Compass, Search, PenTool, Lightbulb, MessageSquare, Share2 } from 'lucide-react';
import { LearningStep } from '../types';

interface LearningPathProps {
  steps: LearningStep[];
}

const LearningPath: React.FC<LearningPathProps> = ({ steps }) => {
  const [reflection, setReflection] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="h-6 w-6 text-white" />;
      case 1: return <Search className="h-6 w-6 text-white" />;
      case 2: return <BookOpen className="h-6 w-6 text-white" />;
      case 3: return <PenTool className="h-6 w-6 text-white" />;
      default: return <ArrowRight className="h-6 w-6 text-white" />;
    }
  };

  const handleContribute = () => {
    // Copy to clipboard concept or just scroll
    if (reflection.trim()) {
      navigator.clipboard.writeText(reflection).then(() => {
        alert("Sua reflexão foi copiada! Agora cole no mural Padlet abaixo.");
        scrollToSection('padlet');
      });
    } else {
      scrollToSection('padlet');
    }
  };

  return (
    <section id="learning-path" className="py-16 bg-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-historic-ink mb-4">Trilha de Aprendizagem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A história não se decora, se investiga. Siga este roteiro para desenvolver um olhar crítico sobre Boa Vista.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group flex flex-col h-full">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-1 bg-stone-300 -z-0"></div>
              )}
              
              <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-amber-500 flex flex-col items-center text-center relative z-10 flex-grow hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 bg-historic-ink rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-amber-600 transition-colors shrink-0">
                  {getIcon(index)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Reflective Question Box */}
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mb-6 w-full text-left relative flex-grow">
                   <Lightbulb className="h-5 w-5 text-amber-500 absolute top-3 right-3" />
                   <p className="text-xs font-bold text-amber-800 uppercase mb-1">Questão Norteadora</p>
                   <p className="text-sm text-amber-900 italic font-serif">"{step.reflectiveQuestion}"</p>
                </div>
                
                <button 
                  onClick={() => scrollToSection(step.targetSectionId)}
                  className="mt-auto inline-flex items-center gap-2 text-amber-700 font-bold hover:text-amber-900 text-sm uppercase tracking-wide py-2"
                >
                  {step.actionLabel}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interaction & Collaboration Space */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200">
          <div className="bg-historic-ink p-6 md:p-8 text-white flex items-center gap-4">
             <div className="p-3 bg-white/10 rounded-lg">
                <MessageSquare className="h-8 w-8 text-amber-400" />
             </div>
             <div>
               <h3 className="text-2xl font-serif font-bold">Caderno de Campo Digital</h3>
               <p className="text-stone-300">Registre suas conclusões e compartilhe com outros pesquisadores.</p>
             </div>
          </div>
          
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-12">
            <div>
               <label htmlFor="reflection" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                 Sua Reflexão
               </label>
               <textarea
                 id="reflection"
                 rows={6}
                 className="w-full p-4 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-serif text-gray-700 resize-none shadow-inner"
                 placeholder="Com base nas perguntas acima, o que você descobriu sobre a memória de Roraima? Escreva aqui..."
                 value={reflection}
                 onChange={(e) => setReflection(e.target.value)}
               ></textarea>
               <p className="text-xs text-gray-500 mt-2">
                 * Este é um rascunho temporário. Use o botão ao lado para levar seu texto ao Mural.
               </p>
            </div>

            <div className="flex flex-col justify-center space-y-6">
               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                 <h4 className="font-bold text-blue-900 mb-2">Por que compartilhar?</h4>
                 <p className="text-sm text-blue-800 leading-relaxed mb-4">
                   A história não é feita apenas por grandes nomes, mas pela soma de nossas percepções. Ao publicar no mural, você ajuda a construir uma memória coletiva mais democrática.
                 </p>
               </div>

               <button
                 onClick={handleContribute}
                 className="w-full group bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-3"
               >
                 <Share2 className="h-5 w-5" />
                 <span>Copiar Texto & Ir para o Mural Padlet</span>
                 <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningPath;