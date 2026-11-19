import React, { useState } from 'react';
import { clubData } from '../data/clubData';

export default function Events({ onOpenEventModal }) {
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredEvents = activeTab === 'all'
    ? clubData.events
    : clubData.events.filter(ev => ev.type === activeTab);

  return (
    <section id="events" className="section-wrapper bg-light events-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Academic & Technical Calendar</span>
          <h2 className="section-title">Events & Symposiums</h2>
          <p className="section-description">
            Participate in our hands-on workshops, annual national hackathons, and high-impact
            academic lectures. Placeholder dates and details can be easily updated in <code className="code-pill">src/data/clubData.js</code>.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="events-tab-nav" role="tablist" aria-label="Events timeline filter">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'upcoming'}
            className={`events-tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events ({clubData.events.filter(e => e.type === 'upcoming').length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'past'}
            className={`events-tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past Highlights ({clubData.events.filter(e => e.type === 'past').length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'all'}
            className={`events-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Events ({clubData.events.length})
          </button>
        </div>

        {/* Event Cards Grid */}
        <div className="events-grid">
          {filteredEvents.map((event) => {
            const isUpcoming = event.type === 'upcoming';

            return (
              <article key={event.id} className={`event-card ${isUpcoming ? 'is-upcoming' : 'is-past'}`}>
                <div className="event-card-top">
                  <div className="event-badge-group">
                    <span className="badge badge-navy">{event.category}</span>
                    <span className={`badge ${isUpcoming ? 'badge-green' : 'badge-gold'}`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="event-date-stamp">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                </div>

                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.description}</p>

                <div className="event-meta-list">
                  <div className="event-meta-item">
                    <span className="meta-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <span className="meta-text">{event.time}</span>
                  </div>

                  <div className="event-meta-item">
                    <span className="meta-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <span className="meta-text">{event.venue}</span>
                  </div>

                  <div className="event-meta-item">
                    <span className="meta-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <span className="meta-text"><strong>Led by:</strong> {event.speaker}</span>
                  </div>
                </div>

                <div className="event-card-bottom">
                  <div className="event-capacity">
                    <span className="capacity-dot" aria-hidden="true"></span>
                    <span>{event.seats}</span>
                  </div>

                  <button
                    type="button"
                    className={`btn btn-sm ${isUpcoming ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => {
                      if (onOpenEventModal) onOpenEventModal(event);
                    }}
                  >
                    {isUpcoming ? 'Register & Details' : 'View Event Summary'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Note for Coordinators */}
        <div className="events-notice-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>
            <strong>Note for Event Coordinators:</strong> Add or modify upcoming events by updating the structured <code className="code-pill">events</code> array in <code className="code-pill">src/data/clubData.js</code>. No database or backend code required.
          </span>
        </div>
      </div>
    </section>
  );
}
