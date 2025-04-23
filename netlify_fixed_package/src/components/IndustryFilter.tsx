import React, { useState } from 'react';
import Link from 'next/link';

type IndustryFilterProps = {
  industries: {
    id: string;
    name: string;
    icon: string;
    description: string;
    toolCount: number;
  }[];
  selectedIndustries: string[];
  onIndustryChange: (industryId: string) => void;
};

export default function IndustryFilter({ 
  industries, 
  selectedIndustries, 
  onIndustryChange 
}: IndustryFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Display only first 6 industries when collapsed
  const displayedIndustries = isExpanded ? industries : industries.slice(0, 6);
  
  return (
    <div className="bg-primary-card p-6 rounded-card mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Filter by Industry</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent-primary text-sm hover:underline"
        >
          {isExpanded ? 'Show Less' : `Show All (${industries.length})`}
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {displayedIndustries.map(industry => (
          <div 
            key={industry.id}
            onClick={() => onIndustryChange(industry.id)}
            className={`
              p-3 rounded-md cursor-pointer transition-all
              ${selectedIndustries.includes(industry.id) 
                ? 'bg-accent-primary/20 border border-accent-primary' 
                : 'bg-primary-secondary hover:bg-primary-secondary/70 border border-transparent'}
            `}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                {/* Placeholder for industry icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">{industry.name}</p>
                <p className="text-xs text-text-secondary">{industry.toolCount} tools</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {!isExpanded && industries.length > 6 && (
        <div className="mt-4 text-center">
          <button 
            onClick={() => setIsExpanded(true)}
            className="text-accent-primary hover:underline"
          >
            Show {industries.length - 6} more industries
          </button>
        </div>
      )}
      
      {selectedIndustries.length > 0 && (
        <div className="mt-4 pt-4 border-t border-primary-border">
          <div className="flex justify-between items-center">
            <p className="text-sm text-text-secondary">
              {selectedIndustries.length} {selectedIndustries.length === 1 ? 'industry' : 'industries'} selected
            </p>
            <button 
              onClick={() => selectedIndustries.forEach(id => onIndustryChange(id))}
              className="text-sm text-accent-primary hover:underline"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
