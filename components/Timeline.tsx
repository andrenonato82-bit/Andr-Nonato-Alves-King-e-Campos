import React from 'react';
import { TimelineEvent } from '../types';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <section id="timeline" className="py-16 bg-historic-paper border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-historic-ink mb-4">Linha do Tempo (1943-1988)</h2>
          <p className="text-gray-600">A evolução política de Roraima no contexto da Ditadura Civil-Militar.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-stone-300"></div>

          <div className="space-y-12">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center justify-between w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5/12"></div>
                  
                  {/* Dot */}
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-historic-ink rounded-full ring-4 ring-stone-200 shadow-lg">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
                    <div className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${event.type === 'local' ? 'border-amber-600' : 'border-blue-900'}`}>
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold text-white mb-2 ${event.type === 'local' ? 'bg-amber-600' : 'bg-blue-900'}`}>
                        {event.year}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-600 leading-snug">{event.description}</p>
                      <span className="block mt-2 text-xs text-gray-400 uppercase tracking-widest">{event.type === 'local' ? 'Contexto Local' : 'Contexto Nacional'}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;