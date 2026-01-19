import React, { useState } from 'react';
import { MapPin, Search, LayoutGrid, Map as MapIcon, Filter } from 'lucide-react';
import { LocationData } from '../types';

interface MemoryMapProps {
  locations: LocationData[];
  onLocationClick: (location: LocationData) => void;
}

const MemoryMap: React.FC<MemoryMapProps> = ({ locations, onLocationClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Categories definition
  const categories = [
    { id: 'Todos', label: 'Todos' },
    { id: 'Monumento', label: 'Monumentos' },
    { id: 'Praça', label: 'Praças' },
    { id: 'Edifício Público', label: 'Edifícios' },
    { id: 'Escola', label: 'Escolas' },
    { id: 'Logradouro', label: 'Logradouros' },
    { id: 'Bairro', label: 'Bairros' },
  ];

  // Filter logic
  const filteredLocations = locations.filter((location) => {
    const matchesSearch = 
      location.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.officialVersion.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Todos' || location.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="memory-map" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-amber-500 rounded-lg text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-historic-ink">Mapa da Memória</h2>
          </div>
          <p className="text-gray-600 text-lg">
            Explore monumentos e espaços públicos que carregam a história
          </p>
        </div>

        {/* Toolbar Section (Search & Filter) */}
        <div className="bg-white border border-stone-200 rounded-xl p-2 mb-12 shadow-sm flex flex-col md:flex-row items-center gap-4">
          
          {/* Search Input */}
          <div className="relative flex-grow w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar por nome ou localização..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm"
            />
          </div>

          {/* Divider (Hidden on mobile) */}
          <div className="hidden md:block h-8 w-px bg-stone-200">
            <Filter className="h-4 w-4 text-stone-300 ml-[-7px] mt-2" />
          </div>

          {/* Filter Buttons */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* View Toggles (Visual only for now) */}
          <div className="flex items-center gap-1 pl-2 border-l border-stone-200">
            <button className="p-2 bg-historic-ink text-white rounded-lg">
              <LayoutGrid className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg">
              <MapIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Results Grid */}
        {filteredLocations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((location) => (
              <div 
                key={location.id}
                onClick={() => onLocationClick(location)}
                className="group cursor-pointer bg-historic-paper rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-stone-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={location.imageUrl} 
                    alt={location.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-historic-ink shadow-sm uppercase">
                    {location.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-historic-ink mb-2 group-hover:text-amber-700 transition-colors">
                    {location.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Boa Vista, RR</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {location.officialVersion}
                  </p>
                  <div className="mt-4 pt-4 border-t border-stone-200 flex justify-between items-center">
                    <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Toque para investigar</span>
                    <div className="h-8 w-8 rounded-full bg-stone-200 group-hover:bg-amber-600 flex items-center justify-center transition-colors">
                      <span className="text-stone-500 group-hover:text-white font-bold text-lg leading-none">+</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Nenhum local encontrado</h3>
            <p className="text-gray-500">Tente ajustar seus filtros ou termos de busca.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MemoryMap;