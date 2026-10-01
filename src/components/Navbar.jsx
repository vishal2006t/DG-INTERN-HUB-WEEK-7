import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Briefcase, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" onClick={handleLinkClick}>
          <div className="brand-icon-box">
            <Briefcase className="brand-icon" size={20} />
          </div>
          <div className="brand-text-group">
            <span className="brand-title">DG Interns Hub</span>
            <span className="brand-tagline">Careers & Internships</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/jobs" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Jobs
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <button 
            type="button" 
            className="btn btn-primary btn-sm nav-cta-btn"
            onClick={() => {
              navigate('/jobs');
              setMobileMenuOpen(false);
            }}
          >
            <span>Explore Internships</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button" 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <nav className="mobile-nav-links">
            <NavLink 
              to="/" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={handleLinkClick}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/jobs" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Jobs
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
            <div className="mobile-drawer-cta">
              <button 
                type="button" 
                className="btn btn-primary btn-lg" 
                style={{ width: '100%' }}
                onClick={() => {
                  navigate('/jobs');
                  setMobileMenuOpen(false);
                }}
              >
                Explore Internships
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
