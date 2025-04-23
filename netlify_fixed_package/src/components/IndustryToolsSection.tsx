import React, { useState, useEffect } from 'react';
import { Tool } from '../lib/types';
import { Industry } from '../lib/types';

type IndustryToolsProps = {
  tools: Tool[];
  industries: Industry[];
  selectedIndustry?: string;
};

export default function IndustryToolsSection({ 
  tools, 
  industries,
  selectedIndustry 
}: IndustryToolsProps) {
  const [activeIndustry, setActiveIndustry] = useState<string>(selectedIndustry || 'all');
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  
  useEffect(() => {
    if (selectedIndustry) {
      setActiveIndustry(selectedIndustry);
    }
  }, [selectedIndustry]);
  
  useEffect(() => {
    if (activeIndustry === 'all') {
      // Show featured tools from all industries
      setFilteredTools(tools.filter(tool => tool.featured).slice(0, 6));
    } else {
      // Filter tools by industry
      setFilteredTools(
        tools
          .filter(tool => tool.industries && tool.industries.includes(activeIndustry))
          .slice(0, 6)
      );
    }
  }, [activeIndustry, tools]);
  
  const handleIndustryChange = (industryId: string) => {
    setActiveIndustry(industryId);
  };
  
  // Find the current industry object
  const currentIndustry = activeIndustry !== 'all' 
    ? industries.find(ind => ind.id === activeIndustry) 
    : null;
  
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">AI Tools by Industry</h2>
        <a href="/tools" className="text-accent-primary hover:underline">
          View all tools →
        </a>
      </div>
      
      <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <button
          onClick={() => handleIndustryChange('all')}
          className={`flex-shrink-0 px-4 py-2 rounded-full mr-3 ${
            activeIndustry === 'all'
              ? 'bg-accent-primary text-white'
              : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
          }`}
        >
          All Industries
        </button>
        
        {industries.map(industry => (
          <button
            key={industry.id}
            onClick={() => handleIndustryChange(industry.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full mr-3 ${
              activeIndustry === industry.id
                ? 'bg-accent-primary text-white'
                : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
            }`}
          >
            {industry.name}
          </button>
        ))}
      </div>
      
      {currentIndustry && (
        <div className="bg-primary-secondary p-6 rounded-card mb-8">
          <h3 className="text-xl font-bold mb-2">AI Tools for {currentIndustry.name}</h3>
          <p className="text-text-secondary mb-4">{currentIndustry.description}</p>
          <div className="flex items-center">
            <span className="text-accent-primary font-medium">{currentIndustry.toolCount} tools available</span>
            <a href={`/tools?industry=${currentIndustry.id}`} className="ml-4 text-accent-primary hover:underline">
              Browse all {currentIndustry.name} tools →
            </a>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map(tool => (
          <div key={tool.id} className="bg-primary-card rounded-card overflow-hidden hover:translate-y-[-4px] transition-all">
            <a href={`/tool/${tool.slug}`}>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-secondary rounded-md flex items-center justify-center mr-4">
                      {/* Tool logo placeholder */}
                      <span className="text-accent-primary font-bold">{tool.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{tool.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <svg 
                              key={star}
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-4 w-4 ${star <= Math.round(tool.rating) ? 'text-accent-secondary' : 'text-primary-border'}`}
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-text-secondary text-xs ml-2">({tool.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                  {tool.pricing === 'free' && (
                    <span className="bg-status-success/20 text-status-success text-xs px-2 py-1 rounded-full">
                      Free
                    </span>
                  )}
                  {tool.pricing === 'freemium' && (
                    <span className="bg-status-warning/20 text-status-warning text-xs px-2 py-1 rounded-full">
                      Freemium
                    </span>
                  )}
                  {tool.pricing === 'paid' && (
                    <span className="bg-primary-secondary text-text-secondary text-xs px-2 py-1 rounded-full">
                      Paid
                    </span>
                  )}
                </div>
                
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {tool.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {tool.categories.slice(0, 3).map(category => (
                    <span key={category} className="text-xs bg-primary-secondary px-2 py-1 rounded-full">
                      {category}
                    </span>
                  ))}
                  {tool.categories.length > 3 && (
                    <span className="text-xs bg-primary-secondary px-2 py-1 rounded-full">
                      +{tool.categories.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      
      {filteredTools.length === 0 && (
        <div className="bg-primary-card p-8 rounded-card text-center">
          <h3 className="text-xl font-bold mb-2">No tools found</h3>
          <p className="text-text-secondary mb-4">
            We couldn't find any tools for this industry. Please try another industry or check back later.
          </p>
          <button
            onClick={() => handleIndustryChange('all')}
            className="bg-accent-primary text-white px-4 py-2 rounded-md"
          >
            View All Industries
          </button>
        </div>
      )}
      
      {filteredTools.length > 0 && (
        <div className="mt-6 text-center">
          <a 
            href={activeIndustry === 'all' ? '/tools' : `/tools?industry=${activeIndustry}`}
            className="bg-accent-primary text-white px-6 py-3 rounded-md inline-block hover:bg-accent-primary/90 transition-colors"
          >
            {activeIndustry === 'all' 
              ? 'Explore All AI Tools' 
              : `View All ${currentIndustry?.name} Tools (${currentIndustry?.toolCount})`}
          </a>
        </div>
      )}
    </div>
  );
}
