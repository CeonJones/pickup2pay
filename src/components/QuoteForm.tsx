import { useState } from 'react';
import type { CarFormData } from '../types';
import { CarCondition } from '../types';
import { CONDITION_OPTIONS } from '../constants';
import PhotoUpload from './PhotoUpload';
// import { generateQuoteEstimate } from '../services/geminiService';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';

const QuoteForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiResponse, setApiResponse] = useState<{message: string, range: string, next: string} | null>(null);

  const [formData, setFormData] = useState<CarFormData>({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: CarCondition.GOOD,
    askingPrice: '',
    pickupAddress: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    notes: '',
    photos: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotosChange = (files: File[]) => {
    setFormData(prev => ({ ...prev, photos: files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Temporary mock response
      await new Promise(resolve => setTimeout(resolve, 1000));
      setApiResponse({
        message: `Thank you for your interest in selling your ${formData.year} ${formData.make} ${formData.model}! We've received your submission.`,
        range: "$2,000 - $5,000",
        next: "Our team will review your information and contact you within 24 hours with a guaranteed cash offer."
      });
      setIsSuccess(true);

      // Google Ads conversion tracking for Contact
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {'send_to': 'AW-17936496351/X93JCNn0kPcbEN_t5OhC'});
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess && apiResponse) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto border border-green-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Submission Received!</h2>
        <p className="text-slate-600 mb-8 text-lg">
          {apiResponse.message}
        </p>

        <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
          <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold mb-2">Estimated Offer Range</p>
          <p className="text-3xl font-bold text-green-600">{apiResponse.range}</p>
        </div>

        <div className="text-left bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="font-semibold text-blue-900 mb-2">Next Steps:</h3>
          <p className="text-blue-800">{apiResponse.next}</p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="mt-8 text-slate-500 hover:text-slate-800 underline text-sm"
        >
          Submit another vehicle
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 p-6 border-b border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800">Get Your Instant Offer</h2>
        <p className="text-slate-500 mt-1">Tell us about your car to get started.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
        {/* Section 1: Vehicle Info */}
        <section>
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
            <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">1</span>
            Vehicle Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Year</label>
              <input
                required
                type="number"
                name="year"
                placeholder="e.g. 2018"
                value={formData.year}
                onChange={handleChange}
                className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Make</label>
              <input
                required
                type="text"
                name="make"
                placeholder="e.g. Toyota"
                value={formData.make}
                onChange={handleChange}
                className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Model</label>
              <input
                required
                type="text"
                name="model"
                placeholder="e.g. Camry"
                value={formData.model}
                onChange={handleChange}
                className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mileage</label>
              <input
                required
                type="number"
                name="mileage"
                placeholder="e.g. 120000"
                value={formData.mileage}
                onChange={handleChange}
                className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* Section 2: Condition */}
        <section>
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
            <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">2</span>
            Condition & Photos
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Vehicle Condition</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
              >
                {CONDITION_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <PhotoUpload onFilesChange={handlePhotosChange} />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Any accidents? Mechanical issues? Recent repairs?"
                value={formData.notes}
                onChange={handleChange}
                className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* Section 3: Contact & Price */}
        <section>
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
            <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">3</span>
            Your Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
             <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">How much do you want for it?</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                <input
                  type="number"
                  name="askingPrice"
                  placeholder="Target Price"
                  value={formData.askingPrice}
                  onChange={handleChange}
                  className="w-full rounded-lg border-slate-300 border p-2.5 pl-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
               <label className="block text-sm font-medium text-slate-700 mb-1">Pickup Address</label>
               <input
                required
                type="text"
                name="pickupAddress"
                placeholder="Street, City, Zip"
                value={formData.pickupAddress}
                onChange={handleChange}
                className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input
                required
                type="text"
                name="contactName"
                placeholder="John Doe"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input
                required
                type="tel"
                name="contactPhone"
                placeholder="(555) 555-5555"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                required
                type="email"
                name="contactEmail"
                placeholder="john@example.com"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
          </div>
        </section>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2" /> Processing...
            </>
          ) : (
            <>
              Get My Offer <Send className="ml-2" size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
