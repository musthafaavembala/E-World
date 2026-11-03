import React from 'react';

const homeImage = new URL('../images-ewold/first image for e-world website.jpeg', import.meta.url).href;

export const Hero: React.FC = () => (
  <section id="home" className="relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10">
    <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-blue/15 blur-[100px] pointer-events-none" />
    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
      <div>
        <p className="mb-3 text-xs font-semibold text-brand-cyan">
          Parappanangadi &amp; Kondotty
        </p>
        <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          <span className="gradient-text-cool">AC &amp; Washing Machine</span> Service
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-brand-muted sm:text-base">
          Home service for AC cleaning, maintenance, and washing machine repair.
        </p>
      </div>
      <img
        src={homeImage}
        alt="E WORLD Cooling & Appliances service"
        width="1200"
        height="800"
        loading="eager"
        decoding="async"
        className="aspect-[16/9] w-full rounded-2xl border border-white/10 object-cover shadow-xl shadow-black/20 lg:aspect-[4/3]"
      />
    </div>
  </section>
);
