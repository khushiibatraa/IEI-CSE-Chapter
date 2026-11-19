import React, { useState } from 'react';
import { clubData } from '../data/clubData';

export default function JoinUs() {
  const { membership } = clubData;

  const [formData, setFormData] = useState({
    fullName: '',
    rollNo: '',
    email: '',
    year: 'Second Year',
    domain: 'Distributed Systems & Cloud',
    statement: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.rollNo.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in all required academic fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMessage('Please provide a valid college or institutional email address.');
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      rollNo: '',
      email: '',
      year: 'Second Year',
      domain: 'Distributed Systems & Cloud',
      statement: ''
    });
    setSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section id="join" className="section-wrapper bg-navy join-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Student Community</span>
          <h2 className="section-title">Join the IEI CSE Chapter</h2>
          <p className="section-description">
            Be part of a historic national engineering fraternity. Expand your practical skillset,
            lead technical initiatives, and collaborate with passionate peers.
          </p>
        </div>

        <div className="join-content-grid">
          {/* Left Column: Why Join & 3-Step Process */}
          <div className="join-info-column">
            <div className="join-eligibility-card">
              <div className="card-badge-pill">Eligibility</div>
              <p className="eligibility-text">{membership.eligibility}</p>
            </div>

            <div className="join-benefits-box">
              <h3 className="benefits-title">Why Become an IEI Student Member?</h3>
              <ul className="benefits-list">
                {membership.benefits.map((benefit, idx) => (
                  <li key={idx} className="benefit-item">
                    <span className="benefit-check" aria-hidden="true">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="membership-steps">
              <h4 className="steps-title">Induction Process</h4>
              <div className="steps-grid">
                {membership.steps.map((st, i) => (
                  <div key={i} className="step-card">
                    <span className="step-number">{st.step}</span>
                    <h5 className="step-name">{st.title}</h5>
                    <p className="step-desc">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="join-form-column">
            <div className="join-form-wrapper">
              {!submitted ? (
                <form className="membership-form" onSubmit={handleSubmit}>
                  <div className="form-head">
                    <h3 className="form-title">Membership Application</h3>
                    <p className="form-subtitle">Department of Computer Science & Engineering</p>
                  </div>

                  {errorMessage && (
                    <div className="form-error-alert" role="alert">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Legal Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-input"
                      placeholder="e.g. Vikramaditya Sen"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="rollNo" className="form-label">
                        University Roll No <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="rollNo"
                        name="rollNo"
                        className="form-input"
                        placeholder="e.g. 23CSE0892"
                        value={formData.rollNo}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="year" className="form-label">
                        Year of Study <span className="required-star">*</span>
                      </label>
                      <select
                        id="year"
                        name="year"
                        className="form-select"
                        value={formData.year}
                        onChange={handleChange}
                      >
                        <option value="First Year">First Year (B.Tech)</option>
                        <option value="Second Year">Second Year (B.Tech)</option>
                        <option value="Third Year">Third Year (B.Tech)</option>
                        <option value="Final Year">Final Year (B.Tech)</option>
                        <option value="Postgraduate (M.Tech/Ph.D)">Postgraduate (M.Tech/Ph.D)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Institutional / College Email <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="e.g. yourname@student.university.edu.in"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="domain" className="form-label">
                      Primary Area of Technical Interest
                    </label>
                    <select
                      id="domain"
                      name="domain"
                      className="form-select"
                      value={formData.domain}
                      onChange={handleChange}
                    >
                      <option value="Distributed Systems & Cloud">Distributed Systems & Cloud Infrastructure</option>
                      <option value="Competitive Programming & DSA">Competitive Programming & Data Structures</option>
                      <option value="Machine Learning & Applied AI">Machine Learning & Applied AI</option>
                      <option value="Cyber Security & Cryptography">Cyber Security & Cryptography</option>
                      <option value="Full-Stack & Web Systems">Full-Stack & Web Systems</option>
                      <option value="Open Source & Robotics">Open Source & Embedded / Robotics</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="statement" className="form-label">
                      Brief Statement of Purpose (Optional)
                    </label>
                    <textarea
                      id="statement"
                      name="statement"
                      rows="3"
                      className="form-textarea"
                      placeholder="What projects or skills would you like to build with the IEI CSE Chapter?"
                      value={formData.statement}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-gold btn-lg form-submit-btn">
                    <span>Submit Membership Application</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>

                  <p className="form-footer-note">
                    Membership is strictly static & client-side in this demonstration. Student data is processed in browser state.
                  </p>
                </form>
              ) : (
                <div className="submission-success-card" role="status">
                  <div className="success-icon-wrap">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="success-title">Application Received!</h3>
                  <p className="success-body">
                    Thank you, <strong>{formData.fullName}</strong> ({formData.rollNo}). Your registration request for the <strong>IEI CSE Students' Chapter</strong> has been recorded in the current session.
                  </p>
                  
                  <div className="submission-summary">
                    <div className="summary-item">
                      <span className="summary-label">Registered Email:</span>
                      <span className="summary-value">{formData.email}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Academic Standing:</span>
                      <span className="summary-value">{formData.year}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Preferred Domain:</span>
                      <span className="summary-value">{formData.domain}</span>
                    </div>
                  </div>

                  <p className="next-steps-instruction">
                    The Chapter Executive Committee verifies applications each week. Please check your institutional email for induction details and Discord channel invitation.
                  </p>

                  <button
                    type="button"
                    className="btn btn-outline-gold btn-sm"
                    onClick={handleReset}
                  >
                    Submit Another Application
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
