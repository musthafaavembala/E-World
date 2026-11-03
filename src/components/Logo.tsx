import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8 rounded-lg',
    md: 'w-9 h-9 sm:w-10 sm:h-10 rounded-xl',
    lg: 'w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl',
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  };

  const subTextSizes = {
    sm: 'text-[8px] sm:text-[9px] tracking-wider',
    md: 'text-[8.5px] sm:text-[10px] tracking-wider sm:tracking-widest',
    lg: 'text-[9.5px] sm:text-[11px] tracking-wider sm:tracking-widest',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none min-w-0 ${className}`}>
      {/* Original Brand Badge with Cooling Gradient */}
      <div
        className={`${iconSizes[size]} gradient-cool flex items-center justify-center shrink-0 shadow-glow-blue border border-white/20`}
        aria-hidden="true"
      >
        {/* Original Snowflake Mark */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3/5 h-3/5 drop-shadow-sm"
        >
          <path d="m10 20-1.25-2.5L6 18" />
          <path d="M10 4 8.75 6.5 6 6" />
          <path d="m14 20 1.25-2.5L18 18" />
          <path d="m14 4 1.25 2.5L18 6" />
          <path d="m17 21-3-6h-4" />
          <path d="m17 3-3 6 1.5 3" />
          <path d="M2 12h6.5L10 9" />
          <path d="m20 10-1.5 2 1.5 2" />
          <path d="M22 12h-6.5L14 15" />
          <path d="m4 10 1.5 2L4 14" />
          <path d="m7 21 3-6-1.5-3" />
          <path d="m7 3 3 6h4" />
        </svg>
      </div>

      {/* Brand Wordmark with Ocean / Sky Blue Identity */}
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight leading-none ${textSizes[size]}`}>
          <span className={variant === 'dark' ? 'text-white' : 'text-brand-midnight'}>
            E{' '}
          </span>
          <span className="text-brand-cyan">WORLD</span>
        </div>
        <span
          className={`font-semibold uppercase ${subTextSizes[size]} text-brand-muted mt-1 leading-none`}
        >
          Cooling &amp; Appliances
        </span>
      </div>
    </div>
  );
};
