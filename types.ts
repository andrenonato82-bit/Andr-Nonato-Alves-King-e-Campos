export interface LocationData {
  id: string;
  title: string;
  category: 'Monumento' | 'Praça' | 'Escola' | 'Logradouro' | 'Edifício Público' | 'Bairro';
  officialVersion: string;
  criticalAnalysis: string;
  reflectiveQuestion: string;
  imageUrl: string;
  mapsUrl?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'local' | 'national';
}

export interface LearningStep {
  stepNumber: number;
  title: string;
  description: string;
  reflectiveQuestion: string; // Nova propriedade para a pergunta pedagógica
  actionLabel: string;
  targetSectionId: string;
}

export interface ContentMemory {
  locations: LocationData[];
  timeline: TimelineEvent[];
  learningPath: LearningStep[];
}