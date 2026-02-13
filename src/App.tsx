import React, { useRef } from 'react';
import Hero from './components/Hero';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import { BUSINESS_PHONE, trackCallConversion } from './constants';
import { Phone, Car, HelpCircle, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center font-bold text-xl text-slate-900">
            <Car className="text-blue-600 mr-2" />
            <span className="hidden sm:inline">QuickCash Cars</span>
            <span className="sm:hidden">QuickCash</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                trackCallConversion();
              }}
              className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span className="hidden sm:inline">{BUSINESS_PHONE}</span>
              <span className="sm:hidden">Call Us</span>
            </button>
            <button
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              Get Offer
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero scrollToForm={scrollToForm} />

        {/* How It Works Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Selling your car used to be a hassle. We built a process that puts cash in your hand without the headaches of private listings.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <HelpCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Submit Details</h3>
                <p className="text-slate-500">
                  Fill out our simple form with your car's basic info. It takes less than 2 minutes.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Get an Offer</h3>
                <p className="text-slate-500">
                  We'll review your details and give you a guaranteed cash offer instantly or within an hour.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. We Pick It Up</h3>
                <p className="text-slate-500">
                  We come to you, tow it for free, handle the paperwork, and hand you the payment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form Section */}
        <div ref={formRef} className="py-20 bg-slate-50" id="quote-form">
          <div className="container mx-auto px-4">
             <div className="max-w-3xl mx-auto">
               <QuoteForm />
             </div>
          </div>
        </div>

        {/* Trust/Reviews Badge Section */}
        <div className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="text-center md:text-left">
               <h4 className="text-white text-lg font-bold">Trusted by Thousands</h4>
               <p className="text-sm opacity-80">We are the highest rated local car buyer.</p>
             </div>
             <div className="flex gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               <div className="text-2xl font-serif font-bold tracking-widest">BBB</div>
               <div className="text-2xl font-sans font-black italic">Google</div>
               <div className="text-2xl font-mono font-bold">Yelp</div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
