export const CarCondition = {
  EXCELLENT: 'Excellent (Looks new, no issues)',
  GOOD: 'Good (Minor wear, runs well)',
  FAIR: 'Fair (Some cosmetic/mechanical issues)',
  POOR: 'Poor (Not running / Significant damage)'
} as const;

export type CarCondition = typeof CarCondition[keyof typeof CarCondition];

export interface CarFormData {
  make: string;
  model: string;
  year: string;
  mileage: string;
  condition: CarCondition;
  askingPrice: string;
  pickupAddress: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  notes: string;
  photos: File[];
}

export interface QuoteResponse {
  estimatedRange: string;
  message: string;
  nextSteps: string;
}
