import React, { useState } from 'react';
import { brandsData } from '../data/brandsData';
import { Wind, Disc, Check } from 'lucide-react';

export const BrandsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ac' | 'wm'>('all');

  const acBrands = brandsData[0].brands;
  const wmBrands = brandsData[1].brands;

  return (
    <section id="brands" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Universal Compatibility
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Brands We Service
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted">
            Expert diagnostic and service capabilities for all major air conditioner and washing machine brands in Kerala.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
              activeCategory === 'all'
                ? 'bg-brand-blue text-white shadow-glow-blue'
                : 'bg-white/5 text-brand-muted hover:text-white border border-brand-border'
            }`}
          >
            All Brands
          </button>
          <button
            onClick={() => setActiveCategory('ac')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
              activeCategory === 'ac'
                ? 'bg-brand-blue text-white shadow-glow-blue'
                : 'bg-white/5 text-brand-muted hover:text-white border border-brand-border'
            }`}
          >
            <Wind className="w-3.5 h-3.5" />
            <span>Air Conditioners</span>
          </button>
          <button
            onClick={() => setActiveCategory('wm')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
              activeCategory === 'wm'
                ? 'bg-brand-blue text-white shadow-glow-blue'
                : 'bg-white/5 text-brand-muted hover:text-white border border-brand-border'
            }`}
          >
            <Disc className="w-3.5 h-3.5" />
            <span>Washing Machines</span>
          </button>
        </div>

        {/* AC Brands Block */}
        {(activeCategory === 'all' || activeCategory === 'ac') && (
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <Wind className="w-4 h-4 text-brand-cyan" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-soft">
                Air Conditioning Brands
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {acBrands.map((brand) => (
                <div
                  key={brand}
                  className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:border-brand-cyan/40 transition duration-200"
                >
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-brand-cyan transition-colors">
                    {brand}
                  </span>
                  <Check className="w-4 h-4 text-brand-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Washing Machine Brands Block */}
        {(activeCategory === 'all' || activeCategory === 'wm') && (
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <Disc className="w-4 h-4 text-brand-cyan" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-soft">
                Washing Machine Brands
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {wmBrands.map((brand) => (
                <div
                  key={brand}
                  className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:border-brand-cyan/40 transition duration-200"
                >
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-brand-cyan transition-colors">
                    {brand}
                  </span>
                  <Check className="w-4 h-4 text-brand-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer Note */}
        <p className="mt-10 text-center text-xs text-brand-muted max-w-2xl mx-auto">
          Independent doorstep multi-brand service provider. All brand logos and names are registered trademarks of their respective manufacturers and are referenced strictly for identification of repair compatibility.
        </p>
      </div>
    </section>
  );
};
