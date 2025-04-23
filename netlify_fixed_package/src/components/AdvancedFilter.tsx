import React, { useState, useEffect } from 'react';
import { Tool } from '../lib/types';
import { filterTools, FilterOptions } from '../lib/api';

type AdvancedFilterProps = {
  initialTools: Tool[];
  categories: { id: string; name: string; count: number }[];
  onFilterChange: (filteredTools: Tool[]) => void;
};

export default function AdvancedFilter({ initialTools, categories, onFilterChange }: AdvancedFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPricingModels, setSelectedPricingModels] = useState<('free' | 'freemium' | 'paid' | 'subscription')[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  
  // Extract unique features from all tools
  const allFeatures = React.useMemo(() => {
    const featureSet = new Set<string>();
    initialTools.forEach(tool => {
      tool.features.forEach(feature => featureSet.add(feature));
    });
    return Array.from(featureSet).map(feature => ({
      id: feature.toLowerCase().replace(/\s+/g, '-'),
      name: feature,
      count: initialTools.filter(tool => tool.features.includes(feature)).length
    }));
  }, [initialTools]);
  
  // Pricing model options
  const pricingModels = [
    { id: 'free', name: 'Free', count: initialTools.filter(tool => tool.pricing.model === 'free').length },
    { id: 'freemium', name: 'Freemium', count: initialTools.filter(tool => tool.pricing.model === 'freemium').length },
    { id: 'paid', name: 'Paid', count: initialTools.filter(tool => tool.pricing.model === 'paid').length },
    { id: 'subscription', name: 'Subscription', count: initialTools.filter(tool => tool.pricing.model === 'subscription').length },
  ];
  
  // Apply filters whenever filter state changes
  useEffect(() => {
    const filterOptions: FilterOptions = {
      categoryIds: selectedCategories.length > 0 ? selectedCategories : undefined,
      pricingModels: selectedPricingModels.length > 0 ? selectedPricingModels as any : undefined,
      features: selectedFeatures.length > 0 ? selectedFeatures : undefined,
      minRating: minRating > 0 ? minRating : undefined,
    };
    
    const filteredTools = filterTools(filterOptions);
    onFilterChange(filteredTools);
  }, [selectedCategories, selectedPricingModels, minRating, selectedFeatures, onFilterChange]);
  
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };
  
  const handlePricingModelChange = (modelId: string) => {
    setSelectedPricingModels(prev => {
      if (prev.includes(modelId as any)) {
        return prev.filter(id => id !== modelId);
      } else {
        return [...prev, modelId] as any;
      }
    });
  };
  
  const handleFeatureChange = (featureId: string) => {
    const featureName = allFeatures.find(f => f.id === featureId)?.name || '';
    setSelectedFeatures(prev => {
      if (prev.includes(featureName)) {
        return prev.filter(name => name !== featureName);
      } else {
        return [...prev, featureName];
      }
    });
  };
  
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinRating(Number(e.target.value));
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPricingModels([]);
    setMinRating(0);
    setSelectedFeatures([]);
  };
  
  return (
    <div className="bg-primary-card p-6 rounded-card">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Filters</h3>
        <button 
          onClick={clearFilters}
          className="text-accent-primary text-sm hover:underline"
        >
          Clear all
        </button>
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Categories</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {categories.map(category => (
            <div key={category.id} className="flex items-center">
              <input
                type="checkbox"
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-accent-primary focus:ring-accent-primary"
              />
              <label htmlFor={`category-${category.id}`} className="flex-1 text-sm">
                {category.name}
                <span className="text-text-secondary ml-1">({category.count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Model Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Price</h4>
        <div className="space-y-2">
          {pricingModels.map(model => (
            <div key={model.id} className="flex items-center">
              <input
                type="checkbox"
                id={`price-${model.id}`}
                checked={selectedPricingModels.includes(model.id as any)}
                onChange={() => handlePricingModelChange(model.id)}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-accent-primary focus:ring-accent-primary"
              />
              <label htmlFor={`price-${model.id}`} className="flex-1 text-sm">
                {model.name}
                <span className="text-text-secondary ml-1">({model.count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Minimum Rating</h4>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">{minRating} ★</span>
          <span className="text-sm">5 ★</span>
        </div>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={minRating}
          onChange={handleRatingChange}
          className="w-full h-2 bg-primary-secondary rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Features Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Features</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {allFeatures.map(feature => (
            <div key={feature.id} className="flex items-center">
              <input
                type="checkbox"
                id={`feature-${feature.id}`}
                checked={selectedFeatures.includes(feature.name)}
                onChange={() => handleFeatureChange(feature.id)}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-accent-primary focus:ring-accent-primary"
              />
              <label htmlFor={`feature-${feature.id}`} className="flex-1 text-sm">
                {feature.name}
                <span className="text-text-secondary ml-1">({feature.count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
