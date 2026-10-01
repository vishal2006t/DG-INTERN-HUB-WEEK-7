import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { jobsData } from '../data/jobs';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Banknote, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Share2, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Gift, 
  Users, 
  Check, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const JobDetailsPage = ({ onApplyJob }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copiedShare, setCopiedShare] = useState(false);

  const job = jobsData.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="page-wrapper job-not-found-page">
        <div className="container text-center not-found-container">
          <h2>Internship Not Found</h2>
          <p>The internship opportunity you are looking for does not exist or may have been filled.</p>
          <Link to="/jobs" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
            <ArrowLeft size={16} />
            <span>Browse All Internships</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="page-wrapper job-details-page">
      {/* Top Breadcrumb & Back bar */}
      <section className="details-top-bar">
        <div className="container">
          <div className="breadcrumbs-row">
            <Link to="/jobs" className="back-link">
              <ArrowLeft size={16} />
              <span>Back to all internships</span>
            </Link>
            <div className="breadcrumb-trail">
              <Link to="/">Home</Link>
              <span className="trail-sep">/</span>
              <Link to="/jobs">Internships</Link>
              <span className="trail-sep">/</span>
              <span className="current-trail">{job.title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Content */}
      <section className="details-main-section">
        <div className="container">
          <div className="details-grid-layout">
            {/* Left Column: Primary Content */}
            <div className="details-main-column">
              {/* Job Header Card */}
              <div className="details-header-card">
                <div className="details-header-top">
                  <div className="company-badge-avatar">
                    {job.company.charAt(0)}
                  </div>
                  <div className="details-header-meta">
                    <span className="details-company-name">{job.company}</span>
                    <h1 className="details-job-title">{job.title}</h1>
                    <div className="details-meta-tags-row">
                      <span className="badge badge-blue">{job.category}</span>
                      <span className="badge badge-green">{job.workType}</span>
                      <span className="badge badge-gray">Posted {job.postedDate}</span>
                    </div>
                  </div>
                </div>

                <div className="details-key-metrics-bar">
                  <div className="metric-box">
                    <span className="metric-label">Monthly Stipend</span>
                    <span className="metric-value text-success">{job.stipend}</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">Duration</span>
                    <span className="metric-value">{job.duration}</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">Location</span>
                    <span className="metric-value">{job.location}</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">Openings</span>
                    <span className="metric-value">{job.openings} Seats</span>
                  </div>
                </div>
              </div>

              {/* About the Internship */}
              <div className="details-section-card">
                <h2 className="details-section-heading">About the Internship</h2>
                <p className="details-body-text">{job.about}</p>
              </div>

              {/* Responsibilities */}
              <div className="details-section-card">
                <h2 className="details-section-heading">Responsibilities</h2>
                <ul className="details-bullet-list">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="details-bullet-item">
                      <CheckCircle2 size={18} className="bullet-icon text-primary" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Skills */}
              <div className="details-section-card">
                <h2 className="details-section-heading">Required Skills & Competencies</h2>
                <div className="details-skills-pills">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="skill-pill-large">
                      {skill}
                    </span>
                  ))}
                </div>
                <ul className="details-bullet-list" style={{ marginTop: '1.25rem' }}>
                  {job.requiredSkills.map((req, index) => (
                    <li key={index} className="details-bullet-item">
                      <CheckCircle2 size={18} className="bullet-icon text-muted" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Can Apply */}
              <div className="details-section-card">
                <h2 className="details-section-heading">Who Can Apply</h2>
                <ul className="details-bullet-list">
                  {job.whoCanApply.map((item, index) => (
                    <li key={index} className="details-bullet-item">
                      <GraduationCap size={18} className="bullet-icon text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What You'll Learn */}
              <div className="details-section-card">
                <h2 className="details-section-heading">What You'll Learn & Gain</h2>
                <ul className="details-bullet-list">
                  {job.whatYoullLearn.map((item, index) => (
                    <li key={index} className="details-bullet-item">
                      <BookOpen size={18} className="bullet-icon text-success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="details-section-card">
                <h2 className="details-section-heading">Perks & Benefits</h2>
                <ul className="details-bullet-list">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="details-bullet-item">
                      <Gift size={18} className="bullet-icon text-amber" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Sticky Summary & Apply Card */}
            <aside className="details-sidebar-column">
              <div className="sticky-sidebar-card">
                <div className="sidebar-apply-header">
                  <div className="sidebar-stipend-wrap">
                    <span className="stipend-label">Offered Stipend</span>
                    <div className="stipend-amount">{job.stipend}</div>
                  </div>
                  <span className="badge badge-green">Direct Employer</span>
                </div>

                <div className="sidebar-meta-list">
                  <div className="sidebar-meta-row">
                    <Clock size={16} className="text-muted" />
                    <div className="meta-text-col">
                      <span className="meta-row-label">Duration</span>
                      <span className="meta-row-value">{job.duration}</span>
                    </div>
                  </div>

                  <div className="sidebar-meta-row">
                    <MapPin size={16} className="text-muted" />
                    <div className="meta-text-col">
                      <span className="meta-row-label">Location</span>
                      <span className="meta-row-value">{job.location}</span>
                    </div>
                  </div>

                  <div className="sidebar-meta-row">
                    <Users size={16} className="text-muted" />
                    <div className="meta-text-col">
                      <span className="meta-row-label">Applicants</span>
                      <span className="meta-row-value">{job.applicantsCount} students applied</span>
                    </div>
                  </div>

                  <div className="sidebar-meta-row">
                    <Calendar size={16} className="text-muted" />
                    <div className="meta-text-col">
                      <span className="meta-row-label">Start Date</span>
                      <span className="meta-row-value">Immediate (Rolling basis)</span>
                    </div>
                  </div>
                </div>

                {/* Apply Button Primary CTA */}
                <div className="sidebar-actions">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg sidebar-apply-btn"
                    id="details-apply-now-btn"
                    onClick={() => onApplyJob(job)}
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={17} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary sidebar-share-btn"
                    onClick={handleShare}
                  >
                    {copiedShare ? (
                      <>
                        <Check size={16} className="text-success" />
                        <span>Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 size={16} />
                        <span>Share Opportunity</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Employer Verification Note */}
                <div className="sidebar-trust-box">
                  <ShieldCheck size={18} className="text-primary" />
                  <p className="trust-note-text">
                    This internship is verified by DG Interns Hub. Never pay any fee for applying or receiving an offer letter.
                  </p>
                </div>

                {/* Company Snapshot */}
                <div className="sidebar-company-box">
                  <h4 className="company-box-heading">About {job.company}</h4>
                  <p className="company-box-desc">{job.companyOverview}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetailsPage;
