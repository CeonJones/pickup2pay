import { CarCondition } from './types';

export const BUSINESS_PHONE = "816-305-8255";
export const BUSINESS_PHONE_E164 = "+18163058255";
export const BUSINESS_EMAIL = "pickup2pay@pickup2pay.com";

export function trackCallConversion() {
  const phoneUrl = `tel:${BUSINESS_PHONE_E164}`;
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17936496351/izw2CJ7hovgbEN_t5OhC',
      'event_callback': () => {
        window.location.href = phoneUrl;
      },
    });
    // Fallback in case the callback never fires
    setTimeout(() => {
      window.location.href = phoneUrl;
    }, 1000);
  } else {
    window.location.href = phoneUrl;
  }
}

export const CONDITION_OPTIONS = [
  { value: CarCondition.EXCELLENT, label: "Excellent - Like New" },
  { value: CarCondition.GOOD, label: "Good - Runs Well" },
  { value: CarCondition.FAIR, label: "Fair - Needs Work" },
  { value: CarCondition.POOR, label: "Poor - Not Running / Damaged" },
];
