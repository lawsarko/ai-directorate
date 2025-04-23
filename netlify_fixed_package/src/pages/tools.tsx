import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import ToolCard from '../components/ToolCard';
import IndustryFilter from '../components/IndustryFilter';
import { Tool, Industry } from '../lib/types';
import { getAllTools } from '../lib/api';
import industriesData from '../data/industries.json';

export default function Tools() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  
  useEffect(() => {
    // Load tools data
    const allTools = getAllTools();
    setTools(allTools);
    setFilteredTools(allTools);
    
    // Load industries data
    setIndustries(industriesData as Industry[]);
    
    // Check for URL parameters
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const industryParam = params.get('industry');
      if (industryParam) {
        setSelectedIndustries([industryParam]);
      }
    }
  }, []);
  
  useEffect(() => {
    // Apply filters
    let result = [...tools];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(tool => 
        tool.name.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by industries
    if (selectedIndustries.length > 0) {
      result = result.filter(tool => 
        tool.industries && 
        tool.industries.some(industry => selectedIndustries.includes(industry))
      );
    }
    
    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter(tool => 
        tool.categories.some(category => selectedCategories.includes(category))
      );
    }
    
    // Filter by pricing
    if (selectedPricing.length > 0) {
      result = result.filter(tool => selectedPricing.includes(tool.pricing));
    }
    
    // Filter by rating
    if (selectedRating !== null) {
      result = result.filter(tool => Math.floor(tool.rating) >= selectedRating);
    }
    
    setFilteredTools(result);
  }, [tools, searchQuery, selectedIndustries, selectedCategories, selectedPricing, selectedRating]);
  
  const handleIndustryChange = (industryId: string) => {
    setSelectedIndustries(prev => {
      if (prev.includes(industryId)) {
        return prev.filter(id => id !== industryId);
      } else {
        return [...prev, industryId];
      }
    });
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  const handlePricingChange = (pricing: string) => {
    setSelectedPricing(prev => {
      if (prev.includes(pricing)) {
        return prev.filter(p => p !== pricing);
      } else {
        return [...prev, pricing];
      }
    });
  };
  
  const handleRatingChange = (rating: number | null) => {
    setSelectedRating(rating);
  };
  
  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedIndustries([]);
    setSelectedCategories([]);
    setSelectedPricing([]);
    setSelectedRating(null);
  };
  
  return (
    <div className="min-h-screen bg-primary-background">
      <Head>
        <title>AI Tools Directory | AI Directorate</title>
        <meta name="description" content="Discover and compare the best AI tools for various use cases. Filter by industry, category, pricing, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">AI Tools Directory</h1>
          
          <div className="mb-8">
            <SearchBar 
              placeholder="Search AI tools..." 
              onSearch={handleSearch} 
              initialValue={searchQuery}
            />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <IndustryFilter 
                industries={industries}
                selectedIndustries={selectedIndustries}
                onIndustryChange={handleIndustryChange}
              />
              
              <FilterSidebar 
                onCategoryChange={handleCategoryChange}
                onPricingChange={handlePricingChange}
                onRatingChange={handleRatingChange}
                selectedCategories={selectedCategories}
                selectedPricing={selectedPricing}
                selectedRating={selectedRating}
                clearAllFilters={clearAllFilters}
              />
            </div>
            
            <div className="lg:w-3/4">
              <div className="bg-primary-card p-4 rounded-card mb-6 flex justify-between items-center">
                <p className="text-text-secondary">
                  {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'} found
                </p>
                
                <div className="flex items-center">
                  <label htmlFor="sort" className="mr-2 text-text-secondary">Sort by:</label>
                  <select 
                    id="sort"
                    className="bg-primary-secondary border border-primary-border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="rating">Rating (High to Low)</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>
              
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTools.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="bg-primary-card p-8 rounded-card text-center">
                  <h3 className="text-xl font-bold mb-2">No tools found</h3>
                  <p className="text-text-secondary mb-4">
                    We couldn't find any tools matching your filters. Try adjusting your search criteria.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="bg-accent-primary text-white px-4 py-2 rounded-md"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
              
              {filteredTools.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-primary-border bg-primary-card text-sm font-medium text-text-secondary hover:bg-primary-secondary">
                      <span className="sr-only">Previous</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" aria-current="page" className="relative inline-flex items-center px-4 py-2 border border-primary-border bg-accent-primary text-sm font-medium text-white">
                      1
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-primary-border bg-primary-card text-sm font-medium text-text-secondary hover:bg-primary-secondary">
                      2
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-primary-border bg-primary-card text-sm font-medium text-text-secondary hover:bg-primary-secondary">
                      3
                    </a>
                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-primary-border bg-primary-card text-sm font-medium text-text-secondary hover:bg-primary-secondary">
                      <span className="sr-only">Next</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
