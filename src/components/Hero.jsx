import React from 'react';
import { clubData } from '../data/clubData';

export default function Hero({ onOpenJoinModal }) {
  return (
    <section id="hero" className="hero-section">
      {/* Subtle Technical Engineering Grid Overlay */}
      <div className="hero-pattern-overlay" aria-hidden="true"></div>
      
      <div className="container hero-container">
        {/* Institutional Credential Eyebrow */}
        <div className="hero-badge">
          <span className="badge-bullet" aria-hidden="true"></span>
          <span>{clubData.chapter.parentBody} • {clubData.chapter.department}</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Engineering Ideas. <br />
          <span className="hero-title-accent">Building Tomorrow.</span>
        </h1>

        {/* Narrative Introduction */}
        <p className="hero-subtitle">
          Welcome to the official IEI CSE Students' Chapter. Grounded in a century-old national
          engineering legacy, we bridge academic theory and real-world technology through
          deep-dive systems workshops, competitive hackathons, algorithmic rigor, and peer research.
        </p>

        {/* Interactive Call to Action Buttons */}
        <div className="hero-actions">
          <a href="#activities" className="btn btn-gold btn-lg hero-btn-primary">
            <span>Explore Activities</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <a
            href="#join"
            className="btn btn-outline-gold btn-lg hero-btn-secondary"
            onClick={(e) => {
              if (onOpenJoinModal) {
                e.preventDefault();
                onOpenJoinModal();
              }
            }}
          >
            <span>Join Our Chapter</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          </a>

          <a href="#about" className="btn btn-outline-white btn-lg hero-btn-tertiary">
            <span>About IEI Legacy</span>
          </a>
        </div>

        {/* Institutional Stats Strip (Solid Surfaces, No Glassmorphism) */}
        <div className="hero-stats-grid" aria-label="Key Chapter Statistics">
          {clubData.stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-detail">{stat.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
