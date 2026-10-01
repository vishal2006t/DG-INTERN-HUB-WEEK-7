import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchTerm, onSearchChange, onClear, placeholder = "Search internships by title, skill, or company..." }) => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-input-container">
        <Search className="search-icon" size={19} />
        <input
          type="text"
          id="internship-search-input"
          className="search-input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search internships"
        />
        {searchTerm && (
          <button 
            type="button" 
            className="search-clear-btn" 
            onClick={onClear}
            aria-label="Clear search input"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
