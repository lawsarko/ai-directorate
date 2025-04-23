import React from 'react';

type FilterSidebarProps = {
  categories: {
    id: string;
    name: string;
    count: number;
  }[];
  priceModels: {
    id: string;
    name: string;
    count: number;
  }[];
  features: {
    id: string;
    name: string;
    count: number;
  }[];
  onFilterChange?: (filters: any) => void;
};

export default function FilterSidebar({ 
  categories, 
  priceModels, 
  features,
  onFilterChange 
}: FilterSidebarProps) {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [selectedPriceModels, setSelectedPriceModels] = React.useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = React.useState<string[]>([]);
  const [minRating, setMinRating] = React.useState<number>(0);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handlePriceModelChange = (priceModelId: string) => {
    setSelectedPriceModels(prev => {
      if (prev.includes(priceModelId)) {
        return prev.filter(id => id !== priceModelId);
      } else {
        return [...prev, priceModelId];
      }
    });
  };

  const handleFeatureChange = (featureId: string) => {
    setSelectedFeatures(prev => {
      if (prev.includes(featureId)) {
        return prev.filter(id => id !== featureId);
      } else {
        return [...prev, featureId];
      }
    });
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinRating(Number(e.target.value));
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceModels([]);
    setSelectedFeatures([]);
    setMinRating(0);
  };

  React.useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        categories: selectedCategories,
        priceModels: selectedPriceModels,
        features: selectedFeatures,
        minRating
      });
    }
  }, [selectedCategories, selectedPriceModels, selectedFeatures, minRating, onFilterChange]);

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
        <div className="space-y-2">
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
          {priceModels.map(priceModel => (
            <div key={priceModel.id} className="flex items-center">
              <input
                type="checkbox"
                id={`price-${priceModel.id}`}
                checked={selectedPriceModels.includes(priceModel.id)}
                onChange={() => handlePriceModelChange(priceModel.id)}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-accent-primary focus:ring-accent-primary"
              />
              <label htmlFor={`price-${priceModel.id}`} className="flex-1 text-sm">
                {priceModel.name}
                <span className="text-text-secondary ml-1">({priceModel.count})</span>
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
        <div className="space-y-2">
          {features.map(feature => (
            <div key={feature.id} className="flex items-center">
              <input
                type="checkbox"
                id={`feature-${feature.id}`}
                checked={selectedFeatures.includes(feature.id)}
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
