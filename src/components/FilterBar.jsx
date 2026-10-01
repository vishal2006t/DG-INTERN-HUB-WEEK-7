import React from 'react';

const FilterBar = ({ categories, selectedCategory, onSelectCategory, countsByCategory = {} }) => {
  return (
    <div className="filter-bar-container" role="tablist" aria-label="Filter internships by category">
      <div className="filter-pills-scroll">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          const count = countsByCategory[category];

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`filter-pill-btn ${isActive ? 'active' : ''}`}
              id={`filter-pill-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => onSelectCategory(category)}
            >
              <span>{category}</span>
              {typeof count === 'number' && (
                <span className={`filter-count-badge ${isActive ? 'active' : ''}`}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
