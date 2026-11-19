import React from 'react';
import { clubData } from '../data/clubData';

export default function About() {
  const { about, chapter } = clubData;

  return (
    <section id="about" className="section-wrapper bg-light about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Institutional Heritage</span>
          <h2 className="section-title">About the IEI CSE Chapter</h2>
          <p className="section-description">
            Dedicated to upholding the highest ideals of engineering inquiry, academic integrity,
            and technological advancement in Computer Science.
          </p>
        </div>

        {/* Narrative & Institutional Profile */}
        <div className="about-overview-grid">
          <div className="about-narrative-card">
            <div className="charter-emblem-wrap">
              <span className="charter-year">ESTD {chapter.estd}</span>
              <span className="charter-sub">Royal Charter {chapter.royalCharter}</span>
            </div>
            <h3 className="narrative-heading">A Century of Engineering Stewardship</h3>
            <p className="narrative-text">
              {about.overview}
            </p>
            <p className="narrative-text">
              The Institution of Engineers (India) is the pioneer body that was incorporated by Royal
              Charter in 1935. Today, our Student Chapter in the Department of Computer Science &
              Engineering carries forward this venerable tradition by equipping undergraduate scholars
              with real-world competencies across distributed computing, intelligent systems, and software craftsmanship.
            </p>

            <div className="quote-box">
              <blockquote className="motto-quote">
                "{chapter.motto}"
              </blockquote>
              <cite className="motto-caption">— Official Motto of The Institution of Engineers (India)</cite>
            </div>
          </div>

          <div className="about-vision-mission-cards">
            <div className="card-statement vision-card">
              <div className="statement-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div>
                <h4 className="statement-title">Our Vision</h4>
                <p className="statement-body">{about.vision}</p>
              </div>
            </div>

            <div className="card-statement mission-card">
              <div className="statement-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div>
                <h4 className="statement-title">Our Mission</h4>
                <p className="statement-body">{about.mission}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars / Core Values */}
        <div className="values-container">
          <h3 className="values-header-title">Our Core Foundational Pillars</h3>
          <div className="values-grid">
            {about.values.map((val, idx) => (
              <div key={idx} className="value-pillar-card">
                <div className="pillar-index">0{idx + 1}</div>
                <h4 className="pillar-title">{val.title}</h4>
                <p className="pillar-desc">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
