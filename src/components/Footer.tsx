import React from 'react';
import { BUSINESS_PHONE, BUSINESS_EMAIL } from '../constants';
import { Car } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center text-white font-bold text-xl mb-4">
              <Car className="mr-2" /> QuickCash Cars
            </div>
            <p className="text-sm leading-relaxed">
              We make selling your used car simple, fast, and safe.
              Top dollar paid for all makes and models.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Phone: <a href={`tel:${BUSINESS_PHONE.replace(/-/g, '')}`} className="hover:text-white transition">{BUSINESS_PHONE}</a></li>
              <li>Email: <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-white transition">{BUSINESS_EMAIL}</a></li>
              <li>Hours: Mon-Fri 8am - 8pm</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <p className="text-sm mb-2">We proudly serve the greater metropolitan area and surrounding suburbs for free pickup.</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} QuickCash Cars. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
