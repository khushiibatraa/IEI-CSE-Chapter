import React, { useState } from 'react';
import { clubData } from '../data/clubData';

export default function Activities({ onSelectActivity }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Activities' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'competitions', label: 'Coding Competitions' },
    { id: 'lectures', label: 'Guest Lectures' },
    { id: 'projects', label: 'Technical Projects' }
  ];

  const filteredActivities = selectedFilter === 'all'
    ? clubData.activities
    : clubData.activities.filter(act => act.id === selectedFilter);

  return (
    <section id="activities" className="section-wrapper activities-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Technical Endeavors</span>
          <h2 className="section-title">Chapter Activities & Initiatives</h2>
          <p className="section-description">
            We deliver rigorous hands-on technical engagements designed to elevate engineering intuition,
            algorithmic problem-solving, and collaborative software development.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="filter-pill-container" role="tablist" aria-label="Activity Filter Tabs">
          {filterOptions.map(option => (
            <button
              key={option.id}
              role="tab"
              aria-selected={selectedFilter === option.id}
              className={`filter-pill-btn ${selectedFilter === option.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="activities-grid">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="activity-card">
              <div className="activity-card-header">
                <span className="badge badge-gold">{activity.badge}</span>
                <span className="activity-schedule">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {activity.schedule}
                </span>
              </div>

              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-desc">{activity.description}</p>

              <div className="activity-topics-wrapper">
                <span className="topics-subhead">Key Focus Areas:</span>
                <ul className="topics-list">
                  {activity.topics.map((topic, index) => (
                    <li key={index} className="topic-tag">
                      <span className="topic-bullet" aria-hidden="true">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="activity-card-footer">
                <a
                  href="#events"
                  className="activity-learn-link"
                  onClick={() => {
                    if (onSelectActivity) onSelectActivity(activity);
                  }}
                >
                  <span>View Related Events</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
