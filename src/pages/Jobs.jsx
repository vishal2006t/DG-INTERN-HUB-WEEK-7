import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { jobsData, categoriesList } from '../data/jobs';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import { Briefcase, SlidersHorizontal, RefreshCw, AlertCircle } from 'lucide-react';

const Jobs = ({ onApplyJob }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam && categoriesList.includes(categoryParam) ? categoryParam : 'All'
  );
  const [selectedWorkType, setSelectedWorkType] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Sync category param if url changes
  useEffect(() => {
    if (categoryParam && categoriesList.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Compute category counts
  const countsByCategory = useMemo(() => {
    const counts = { All: jobsData.length };
    categoriesList.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = jobsData.filter((job) => job.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      // Search term matching
      const matchesSearch =
        searchTerm.trim() === '' ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()));

      // Category matching
      const matchesCategory =
        selectedCategory === 'All' || job.category === selectedCategory;

      // Work type matching
      const matchesWorkType =
        selectedWorkType === 'All' || job.workType === selectedWorkType;

      return matchesSearch && matchesCategory && matchesWorkType;
    }).sort((a, b) => {
      if (sortBy === 'stipend-high') {
        const numA = parseInt(a.stipend.replace(/[^0-9]/g, ''), 10) || 0;
        const numB = parseInt(b.stipend.replace(/[^0-9]/g, ''), 10) || 0;
        return numB - numA;
      }
      return 0; // Default order
    });
  }, [searchTerm, selectedCategory, selectedWorkType, sortBy]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedWorkType('All');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="page-wrapper jobs-page">
      {/* Page Header */}
      <section className="jobs-header-section">
        <div className="container">
          <div className="jobs-header-content">
            <span className="section-eyebrow">Verified Listings</span>
            <h1 className="jobs-page-title">Internship Opportunities</h1>
            <p className="jobs-page-subtitle">
              Explore opportunities that match your skills and career goals. All internships include verified mentorship and stipends.
            </p>
          </div>

          {/* Search Bar */}
          <div className="jobs-search-section">
            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
              onClear={() => setSearchTerm('')} 
              placeholder="Search internships by role, technology (e.g. React, Python), or company..."
            />
          </div>

          {/* Category Filter Pills */}
          <div className="jobs-filter-section">
            <FilterBar 
              categories={categoriesList} 
              selectedCategory={selectedCategory} 
              onSelectCategory={handleSelectCategory}
              countsByCategory={countsByCategory}
            />
          </div>
        </div>
      </section>

      {/* Main Listing Section */}
      <section className="jobs-listing-section">
        <div className="container">
          {/* Controls Bar */}
          <div className="listing-controls-bar">
            <div className="listing-results-count">
              <span>Showing <strong>{filteredJobs.length}</strong> of {jobsData.length} opportunities</span>
              {selectedCategory !== 'All' && (
                <span className="active-filter-badge">
                  Category: {selectedCategory}
                </span>
              )}
              {searchTerm && (
                <span className="active-filter-badge">
                  Search: "{searchTerm}"
                </span>
              )}
            </div>

            <div className="listing-quick-filters">
              {/* Work Type Filter */}
              <div className="quick-filter-group">
                <span className="filter-label">Mode:</span>
                <div className="work-type-buttons">
                  {['All', 'Remote', 'Hybrid'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`work-type-btn ${selectedWorkType === type ? 'active' : ''}`}
                      onClick={() => setSelectedWorkType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort by */}
              <div className="sort-dropdown-wrap">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                  aria-label="Sort internships"
                >
                  <option value="featured">Featured / Default</option>
                  <option value="stipend-high">Highest Stipend</option>
                </select>
              </div>

              {(searchTerm || selectedCategory !== 'All' || selectedWorkType !== 'All') && (
                <button
                  type="button"
                  className="btn btn-secondary btn-sm clear-filters-btn"
                  onClick={handleClearFilters}
                >
                  <RefreshCw size={13} />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Cards Grid or Empty State */}
          {filteredJobs.length > 0 ? (
            <div className="job-cards-grid">
              {filteredJobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  onApply={onApplyJob} 
                />
              ))}
            </div>
          ) : (
            <div className="empty-results-card">
              <AlertCircle size={40} className="empty-icon text-muted" />
              <h3 className="empty-title">No internships matched your criteria</h3>
              <p className="empty-desc">
                We couldn't find any opportunities matching "<strong>{searchTerm || selectedCategory}</strong>". Try clearing your filters or searching for broader keywords like "Web", "Python", or "Design".
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClearFilters}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Jobs;
