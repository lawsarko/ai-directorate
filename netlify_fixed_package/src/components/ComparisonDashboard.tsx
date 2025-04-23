import React, { useState, useEffect } from 'react';
import { Tool } from '../lib/types';
import { compareTools } from '../lib/api';

type ComparisonDashboardProps = {
  initialTools: Tool[];
  allTools: Tool[];
  onAddTool?: (tool: Tool) => void;
  onRemoveTool?: (toolId: string) => void;
};

export default function ComparisonDashboard({ 
  initialTools, 
  allTools,
  onAddTool,
  onRemoveTool 
}: ComparisonDashboardProps) {
  const [selectedTools, setSelectedTools] = useState<Tool[]>(initialTools);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Tool[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  // Get all unique features across selected tools
  const allFeatures = React.useMemo(() => {
    const featureSet = new Set<string>();
    selectedTools.forEach(tool => {
      tool.features.forEach(feature => featureSet.add(feature));
    });
    return Array.from(featureSet);
  }, [selectedTools]);
  
  // Group features into categories (simplified version)
  const featureCategories = React.useMemo(() => {
    return [
      {
        name: 'Core Features',
        features: allFeatures.slice(0, Math.ceil(allFeatures.length / 2))
      },
      {
        name: 'Advanced Features',
        features: allFeatures.slice(Math.ceil(allFeatures.length / 2))
      }
    ];
  }, [allFeatures]);
  
  // Handle search for adding tools
  useEffect(() => {
    if (searchQuery.length > 0) {
      const query = searchQuery.toLowerCase();
      const results = allTools
        .filter(tool => !selectedTools.some(t => t.id === tool.id))
        .filter(tool => 
          tool.name.toLowerCase().includes(query) || 
          tool.description.toLowerCase().includes(query)
        );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery, allTools, selectedTools]);
  
  const handleRemoveTool = (toolId: string) => {
    setSelectedTools(prev => prev.filter(tool => tool.id !== toolId));
    if (onRemoveTool) {
      onRemoveTool(toolId);
    }
  };
  
  const handleAddTool = (tool: Tool) => {
    if (!selectedTools.some(t => t.id === tool.id)) {
      setSelectedTools(prev => [...prev, tool]);
      setSearchQuery('');
      setShowSearchResults(false);
      if (onAddTool) {
        onAddTool(tool);
      }
    }
  };
  
  const handleQuickAdd = (toolId: string) => {
    const tool = allTools.find(t => t.id === toolId);
    if (tool && !selectedTools.some(t => t.id === tool.id)) {
      handleAddTool(tool);
    }
  };
  
  // Check if a tool has a specific feature
  const hasFeature = (tool: Tool, feature: string) => {
    return tool.features.includes(feature);
  };
  
  return (
    <div className="space-y-8">
      {/* Currently comparing section */}
      <div className="bg-primary-card p-6 rounded-card">
        <h2 className="text-xl font-bold mb-4">Currently Comparing</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          {selectedTools.map((tool) => (
            <div key={tool.id} className="flex items-center bg-primary-secondary px-3 py-2 rounded-full">
              <span>{tool.name}</span>
              <button 
                className="ml-2 text-text-secondary hover:text-status-error"
                onClick={() => handleRemoveTool(tool.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
          
          {/* Add tool search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Add tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-primary-secondary px-3 py-2 rounded-full text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
            />
            
            {/* Search results dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-primary-card rounded-md shadow-lg z-10">
                <ul className="py-1">
                  {searchResults.slice(0, 5).map(tool => (
                    <li 
                      key={tool.id}
                      className="px-4 py-2 hover:bg-primary-secondary cursor-pointer"
                      onClick={() => handleAddTool(tool)}
                    >
                      {tool.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Quick add section */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Quick Add</h3>
          <div className="flex flex-wrap gap-2">
            {allTools
              .filter(tool => !selectedTools.some(t => t.id === tool.id))
              .slice(0, 4)
              .map(tool => (
                <button 
                  key={tool.id}
                  className="bg-primary-secondary px-3 py-1 rounded-md text-sm hover:bg-opacity-80"
                  onClick={() => handleQuickAdd(tool.id)}
                >
                  {tool.name}
                </button>
              ))
            }
          </div>
        </div>
      </div>
      
      {/* Feature comparison table */}
      {selectedTools.length > 0 && (
        <div className="bg-primary-card p-6 rounded-card overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">Feature Comparison</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-secondary">
                <th className="p-4 text-left border-b border-primary-card">Features</th>
                {selectedTools.map((tool) => (
                  <th key={tool.id} className="p-4 text-center border-b border-primary-card min-w-[200px]">
                    {tool.name}
                    <div className="flex items-center justify-center mt-1">
                      <span className="text-accent-primary mr-1">★</span>
                      <span>{tool.averageRating.toFixed(1)}</span>
                    </div>
                    <div className="text-sm text-text-secondary mt-1">{tool.pricing.model}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureCategories.map((category) => (
                <React.Fragment key={category.name}>
                  <tr className="bg-primary-secondary">
                    <td colSpan={selectedTools.length + 1} className="p-3 font-medium">
                      {category.name}
                    </td>
                  </tr>
                  {category.features.map((feature) => (
                    <tr key={feature} className="border-b border-primary-card hover:bg-primary-secondary/50">
                      <td className="p-4">{feature}</td>
                      {selectedTools.map((tool) => (
                        <td key={`${tool.id}-${feature}`} className="p-4 text-center">
                          {hasFeature(tool, feature) ? (
                            <span className="text-accent-secondary text-xl">✓</span>
                          ) : (
                            <span className="text-status-error text-xl">✕</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Pricing comparison table */}
      {selectedTools.length > 0 && (
        <div className="bg-primary-card p-6 rounded-card overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">Pricing Comparison</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-secondary">
                <th className="p-4 text-left border-b border-primary-card">Plan</th>
                {selectedTools.map((tool) => (
                  <th key={tool.id} className="p-4 text-center border-b border-primary-card min-w-[200px]">
                    {tool.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-primary-card hover:bg-primary-secondary/50">
                <td className="p-4 font-medium">Free Tier</td>
                {selectedTools.map((tool) => (
                  <td key={`${tool.id}-free`} className="p-4 text-center">
                    {tool.pricing.hasFreeTier ? (
                      <span className="text-accent-secondary">Available</span>
                    ) : (
                      <span className="text-status-error">Not available</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-primary-card hover:bg-primary-secondary/50">
                <td className="p-4 font-medium">Starting Price</td>
                {selectedTools.map((tool) => (
                  <td key={`${tool.id}-price`} className="p-4 text-center">
                    {tool.pricing.startingPrice ? (
                      <span>${tool.pricing.startingPrice}/mo</span>
                    ) : (
                      <span>Free</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-primary-card hover:bg-primary-secondary/50">
                <td className="p-4 font-medium">Pricing Model</td>
                {selectedTools.map((tool) => (
                  <td key={`${tool.id}-model`} className="p-4 text-center">
                    <span className="capitalize">{tool.pricing.model}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
      
      {/* Action buttons */}
      {selectedTools.length > 0 && (
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn-primary flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            Save Comparison
          </button>
          <button className="btn-secondary flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export as PDF
          </button>
          <button className="btn-secondary flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </button>
        </div>
      )}
    </div>
  );
}
