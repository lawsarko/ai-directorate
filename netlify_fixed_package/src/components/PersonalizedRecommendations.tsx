import React, { useState, useEffect } from 'react';
import { Tool } from '../lib/types';

type PersonalizedRecommendationsProps = {
  tools: Tool[];
  userPreferences?: {
    categories?: string[];
    features?: string[];
    pricingModels?: string[];
    previouslyViewed?: string[];
  };
};

export default function PersonalizedRecommendations({ 
  tools, 
  userPreferences = {} 
}: PersonalizedRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Tool[]>([]);
  const [activeTab, setActiveTab] = useState<'foryou' | 'trending' | 'new'>('foryou');
  
  // Generate recommendations based on user preferences
  useEffect(() => {
    let recommended: Tool[] = [];
    
    if (activeTab === 'foryou') {
      // If user has preferences, use them for personalized recommendations
      if (userPreferences.categories?.length || 
          userPreferences.features?.length || 
          userPreferences.previouslyViewed?.length) {
        
        // Score each tool based on how well it matches user preferences
        const scoredTools = tools.map(tool => {
          let score = 0;
          
          // Score based on matching categories
          if (userPreferences.categories?.length) {
            const categoryMatches = tool.categoryIds.filter(cat => 
              userPreferences.categories?.includes(cat)
            ).length;
            score += categoryMatches * 2; // Weight category matches higher
          }
          
          // Score based on matching features
          if (userPreferences.features?.length) {
            const featureMatches = tool.features.filter(feature => 
              userPreferences.features?.some(pref => 
                feature.toLowerCase().includes(pref.toLowerCase())
              )
            ).length;
            score += featureMatches;
          }
          
          // Score based on pricing model preferences
          if (userPreferences.pricingModels?.length && 
              userPreferences.pricingModels.includes(tool.pricing.model)) {
            score += 1;
          }
          
          // Avoid recommending recently viewed tools
          if (userPreferences.previouslyViewed?.includes(tool.id)) {
            score -= 3; // Penalize already viewed tools
          }
          
          return { tool, score };
        });
        
        // Sort by score and take top 4
        recommended = scoredTools
          .sort((a, b) => b.score - a.score)
          .slice(0, 4)
          .map(item => item.tool);
      } else {
        // If no preferences, recommend highly rated tools
        recommended = tools
          .sort((a, b) => b.averageRating - a.averageRating)
          .slice(0, 4);
      }
    } else if (activeTab === 'trending') {
      // Show trending tools
      recommended = tools
        .filter(tool => tool.isTrending)
        .slice(0, 4);
    } else if (activeTab === 'new') {
      // Show newest tools based on creation date
      recommended = tools
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 4);
    }
    
    setRecommendations(recommended);
  }, [tools, userPreferences, activeTab]);
  
  return (
    <div className="bg-primary-card p-6 rounded-card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Recommended for You</h2>
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 rounded-full text-sm ${
              activeTab === 'foryou' 
                ? 'bg-accent-primary text-white' 
                : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('foryou')}
          >
            For You
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-sm ${
              activeTab === 'trending' 
                ? 'bg-accent-primary text-white' 
                : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('trending')}
          >
            Trending
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-sm ${
              activeTab === 'new' 
                ? 'bg-accent-primary text-white' 
                : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('new')}
          >
            New
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendations.map(tool => (
          <div key={tool.id} className="bg-primary-secondary p-4 rounded-card hover:translate-y-[-4px] transition-all cursor-pointer">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-primary-background rounded-md mr-3 flex items-center justify-center">
                {tool.logoUrl ? (
                  <img src={tool.logoUrl} alt={tool.name} className="w-8 h-8" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="font-bold">{tool.name}</h3>
                <div className="flex items-center text-xs text-text-secondary">
                  <span className="flex items-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-accent-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {tool.averageRating.toFixed(1)}
                  </span>
                  <span className="capitalize">{tool.pricing.model}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-3 line-clamp-2">{tool.shortDescription}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {tool.categoryIds.slice(0, 2).map(category => (
                <span key={category} className="text-xs bg-primary-background px-2 py-1 rounded-full">
                  {category.replace(/-/g, ' ')}
                </span>
              ))}
            </div>
            <a href={`/tool/${tool.slug}`} className="text-accent-primary text-sm hover:underline">
              View details →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
