import React, { useEffect } from 'react';
import { X, Book, AlertTriangle, Lightbulb, Map } from 'lucide-react';
import { LocationData } from '../types';

interface ModalProps {
  location: LocationData | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ location, onClose }) => {
  useEffect(() => {
    if (location) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [location]);

  if (!location) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl w-full">
          
          <div className="relative h-64 sm:h-72">
             <img 
               className="w-full h-full object-cover" 
               src={location.imageUrl} 
               alt={location.title} 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
               <div className="p-6 text-white w-full">
                 <div className="flex justify-between items-end">
                   <div>
                     <span className="inline-block px-2 py-1 bg-amber-600 text-xs font-bold uppercase tracking-wider rounded mb-2 shadow-sm">
                       {location.category}
                     </span>
                     <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight" id="modal-title">
                       {location.title}
                     </h3>
                   </div>
                   
                   {/* Maps Button */}
                   {location.mapsUrl && (
                     <a 
                       href={location.mapsUrl}
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hidden sm:flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium transition-all border border-white/30 hover:border-white/50"
                     >
                       <Map className="h-4 w-4" />
                       Ver no Maps
                     </a>
                   )}
                 </div>
               </div>
             </div>
             <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 rounded-full p-2 text-white transition-colors backdrop-blur-sm border border-white/20"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-6 space-y-6 bg-historic-paper">
            
            {/* Mobile Maps Button (Only visible on small screens) */}
            {location.mapsUrl && (
               <a 
                 href={location.mapsUrl}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="sm:hidden w-full flex justify-center items-center gap-2 bg-blue-100 text-blue-800 px-4 py-3 rounded-lg text-sm font-bold mb-4 border border-blue-200"
               >
                 <Map className="h-4 w-4" />
                 Ver localização no Google Maps
               </a>
            )}

            {/* Official Version */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-900 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3 text-blue-900 border-b border-gray-100 pb-2">
                <Book className="h-5 w-5" />
                <h4 className="text-sm font-bold uppercase tracking-widest">História Oficial</h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-serif text-base">
                {location.officialVersion}
              </p>
            </div>

            {/* Critical Analysis */}
            <div className="bg-stone-100 p-6 rounded-lg border-l-4 border-red-700 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-red-700 border-b border-gray-200 pb-2">
                <AlertTriangle className="h-5 w-5" />
                <h4 className="text-sm font-bold uppercase tracking-widest">Análise Crítica</h4>
              </div>
              <p className="text-gray-800 leading-relaxed text-base">
                {location.criticalAnalysis}
              </p>
            </div>

            {/* Reflective Question Box */}
            <div className="mt-8 bg-amber-50 rounded-xl border-2 border-amber-200 p-6 shadow-inner relative">
              <div className="absolute -top-3 left-6 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-700" />
                <span className="text-xs font-bold text-amber-800 uppercase">Para Refletir</span>
              </div>
              <p className="text-amber-900 font-serif font-medium text-lg text-center leading-relaxed pt-2">
                "{location.reflectiveQuestion}"
              </p>
            </div>

          </div>
          
          <div className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse border-t border-gray-200">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-2.5 bg-historic-ink text-base font-medium text-white hover:bg-slate-800 focus:outline-none transition-colors sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Fechar Guia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;