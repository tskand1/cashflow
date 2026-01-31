import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${dark ? 'bg-corporate-50' : 'bg-white'} ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode, subtitle?: boolean }> = ({ children, subtitle }) => (
  <div className="mb-12 md:mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold text-corporate-900 tracking-tight mb-4">
      {children}
    </h2>
    {subtitle && (
      <div className="h-1 w-16 bg-corporate-900 opacity-20 mb-6"></div>
    )}
  </div>
);