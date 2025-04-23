import React from 'react';

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
};

export default function SearchBar({ placeholder = "Search tools...", onSearch, className = '' }: SearchBarProps) {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button 
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent-primary p-2 rounded-full hover:bg-opacity-90 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}
