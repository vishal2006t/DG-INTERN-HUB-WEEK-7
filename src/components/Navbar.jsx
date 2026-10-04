import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import dgLogo from '../assets/dg-interns-hub-logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const logoTargetRef = useRef(null);

  // Check if session has already experienced the intro animation
  const [introState, setIntroState] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        const seen = window.sessionStorage.getItem('dg_logo_intro_seen');
        return seen ? 'done' : 'init';
      }
    } catch {
      return 'done';
    }
    return 'done';
  });

  // Animated intro logo state (pixel coordinates for smooth natural easing)
  const [animStyle, setAnimStyle] = useState({
    opacity: 0,
    transform: 'scale(1.18)',
    left: typeof window !== 'undefined' ? (window.innerWidth - 110) / 2 : 0,
    top: typeof window !== 'undefined' ? window.innerHeight * 0.28 : 0,
    width: 110,
    transition: 'none'
  });

  useEffect(() => {
    if (introState === 'done') return;

    // Calculate initial center/top-center coordinates
    const initialWidth = window.innerWidth <= 768 ? 90 : 115;
    const initialLeft = (window.innerWidth - initialWidth) / 2;
    const initialTop = window.innerHeight * (window.innerWidth <= 768 ? 0.25 : 0.28);

    setAnimStyle({
      opacity: 0,
      transform: 'scale(1.15)',
      left: initialLeft,
      top: initialTop,
      width: initialWidth,
      transition: 'none'
    });

    // Step 1: Smooth fade-in and scale-in at top-center (~40ms -> 350ms)
    const timerAppear = setTimeout(() => {
      setIntroState('visible');
      setAnimStyle((prev) => ({
        ...prev,
        opacity: 1,
        transform: 'scale(1.04)',
        transition: 'opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }));
    }, 50);

    // Step 2: Smooth glide to the left side of the Navbar (~420ms -> 1450ms)
    const timerGlide = setTimeout(() => {
      if (logoTargetRef.current) {
        const targetRect = logoTargetRef.current.getBoundingClientRect();
        const targetWidth = targetRect.width > 0 ? targetRect.width : (window.innerWidth <= 768 ? 40 : 52);
        const targetLeft = targetRect.left > 0 ? targetRect.left : (window.innerWidth <= 768 ? 16 : Math.max(16, (window.innerWidth - 1200) / 2 + 24));
        const targetTop = targetRect.top >= 0 ? targetRect.top : 10;

        setIntroState('gliding');
        setAnimStyle({
          opacity: 1,
          left: targetLeft,
          top: targetTop,
          width: targetWidth,
          transform: 'scale(1)',
          // 1.02s natural ease-out curve directly into final navbar position
          transition: 'left 1.02s cubic-bezier(0.2, 0.8, 0.2, 1), top 1.02s cubic-bezier(0.2, 0.8, 0.2, 1), width 1.02s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1.02s cubic-bezier(0.2, 0.8, 0.2, 1)'
        });
      }
    }, 420);

    // Step 3: Animation completes, settle permanently into navbar (~1.48s total)
    const timerDone = setTimeout(() => {
      setIntroState('done');
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          window.sessionStorage.setItem('dg_logo_intro_seen', 'true');
        }
      } catch {}
    }, 1480);

    return () => {
      clearTimeout(timerAppear);
      clearTimeout(timerGlide);
      clearTimeout(timerDone);
    };
  }, [introState]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const isIntroRunning = introState !== 'done';

  return (
    <>
      {/* Intro Backdrop Overlay (Soft white curtain that dissolves during glide) */}
      {isIntroRunning && (
        <div 
          className={`logo-intro-backdrop ${introState === 'gliding' ? 'fade-out' : ''}`}
          aria-hidden="true"
        />
      )}

      {/* Floating Animated Intro Logo Asset */}
      {isIntroRunning && (
        <img
          src={dgLogo}
          alt="DG Interns Hub Logo"
          className="logo-intro-animating-asset"
          style={{
            position: 'fixed',
            left: `${animStyle.left}px`,
            top: `${animStyle.top}px`,
            width: `${animStyle.width}px`,
            height: 'auto',
            opacity: animStyle.opacity,
            transform: animStyle.transform,
            transition: animStyle.transition,
            zIndex: 9999,
            pointerEvents: 'none',
            objectFit: 'contain'
          }}
        />
      )}

      {/* Primary Sticky Header */}
      <header className="navbar-header">
        <div className="container navbar-container">
          {/* Brand Logo & Name */}
          <Link to="/" className="navbar-brand" onClick={handleLinkClick}>
            <img 
              ref={logoTargetRef}
              src={dgLogo} 
              alt="DG Interns Hub Logo" 
              className="navbar-brand-logo"
              style={{
                opacity: isIntroRunning ? 0 : 1,
                transition: 'opacity 0.25s ease'
              }}
            />
            <div 
              className="brand-text-group"
              style={{
                opacity: introState === 'done' || introState === 'gliding' ? 1 : 0,
                transition: 'opacity 0.4s ease 0.2s'
              }}
            >
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
    </>
  );
};

export default Navbar;
