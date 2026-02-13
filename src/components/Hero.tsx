import React from 'react';
import { Phone, CheckCircle, Truck, DollarSign } from 'lucide-react';
import { BUSINESS_PHONE, trackCallConversion } from '../constants';

interface HeroProps {
  scrollToForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToForm }) => {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Car Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-green-500/30">
          <DollarSign size={16} className="mr-1" /> Top Dollar Paid Instantly
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Sell Your Car in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Minutes</span>.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
          We buy cars in any condition. Free pickup from your driveway.
          Get a guaranteed offer online or call us now.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <button
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5"
          >
            Get My Offer Online
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              trackCallConversion();
            }}
            className="flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 font-semibold py-4 px-8 rounded-xl shadow-lg transition-colors"
          >
            <Phone size={20} className="mr-2" />
            Call {BUSINESS_PHONE}
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-medium text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="text-green-400" size={20} />
            <span>Instant Cash Offers</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Truck className="text-blue-400" size={20} />
            <span>Free Towing & Pickup</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="text-green-400" size={20} />
            <span>We Handle Paperwork</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
