import { CarCondition } from './types';

export const BUSINESS_PHONE = "1-800-555-CARS";
export const BUSINESS_EMAIL = "offers@quickcashcars.com";

export const CONDITION_OPTIONS = [
  { value: CarCondition.EXCELLENT, label: "Excellent - Like New" },
  { value: CarCondition.GOOD, label: "Good - Runs Well" },
  { value: CarCondition.FAIR, label: "Fair - Needs Work" },
  { value: CarCondition.POOR, label: "Poor - Not Running / Damaged" },
];
