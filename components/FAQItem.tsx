import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQItem: React.FC<{ question: string, answer: React.ReactNode }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-corporate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left hover:bg-corporate-50 transition-colors px-2 rounded-sm group"
      >
        <span className="font-medium text-corporate-900 pr-4 group-hover:text-corporate-700 transition-colors">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-corporate-500 flex-shrink-0" /> : <ChevronDown size={20} className="text-corporate-500 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="pb-6 pt-2 px-2 text-sm text-corporate-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};