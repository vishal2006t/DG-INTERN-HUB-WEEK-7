import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetailsPage from './pages/JobDetailsPage';
import Contact from './pages/Contact';
import { jobsData } from './data/jobs';
import './App.css';

// Automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // Application Modal state
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleOpenApplyModal = (job = null) => {
    // If no specific job passed, default to the first one
    setSelectedJob(job || jobsData[0]);
    setIsApplyModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="app-layout">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="main-content" id="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<Home onApplyJob={handleOpenApplyModal} />} 
            />
            <Route 
              path="/jobs" 
              element={<Jobs onApplyJob={handleOpenApplyModal} />} 
            />
            <Route 
              path="/jobs/:id" 
              element={<JobDetailsPage onApplyJob={handleOpenApplyModal} />} 
            />
            <Route 
              path="/contact" 
              element={<Contact />} 
            />
            {/* Fallback route to Home */}
            <Route 
              path="*" 
              element={<Home onApplyJob={handleOpenApplyModal} />} 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Application Modal */}
        <ApplicationForm
          isOpen={isApplyModalOpen}
          job={selectedJob}
          onClose={handleCloseApplyModal}
        />
      </div>
    </HashRouter>
  );
}

export default App;
