import React from 'react';
import { clubData } from '../data/clubData';

export default function Footer() {
  const { chapter, contact } = clubData;

  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-top-grid">
          {/* Col 1: Identity & Official Affiliation */}
          <div className="footer-col footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-logo-frame">
                <img
                  src="/iei-logo.jpg"
                  alt="IEI Official Logo"
                  className="footer-logo-img"
                  loading="lazy"
                />
              </div>
              <div className="footer-brand-headings">
                <span className="footer-club-title">{chapter.name}</span>
                <span className="footer-club-sub">{chapter.department}</span>
              </div>
            </div>

            <p className="footer-about-text">
              Under the charter of {chapter.parentBody} (Estd. {chapter.estd}, Incorporated by Royal Charter in {chapter.royalCharter}). Serving engineering scholars with a commitment to national development, scholarly research, and technical rigor.
            </p>

            <div className="footer-motto-strip">
              <span>{chapter.motto}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero" className="footer-link">Home Overview</a></li>
              <li><a href="#about" className="footer-link">Institutional Heritage</a></li>
              <li><a href="#activities" className="footer-link">Technical Activities</a></li>
              <li><a href="#events" className="footer-link">Events & Calendar</a></li>
              <li><a href="#team" className="footer-link">Advisory & Team</a></li>
              <li><a href="#join" className="footer-link">Join Chapter</a></li>
            </ul>
          </div>

          {/* Col 3: Resources & National IEI */}
          <div className="footer-col">
            <h4 className="footer-col-title">Institutional Resources</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="https://www.ieindia.org" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                  <span>IEI National Headquarters</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </li>
              <li><a href="#about" className="footer-link">Code of Engineering Ethics</a></li>
              <li><a href="#join" className="footer-link">Student Membership Bylaws</a></li>
              <li><a href="#activities" className="footer-link">Research & Publication Wing</a></li>
              <li><a href="#events" className="footer-link">Annual Symposium Archives</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-col-title">Chapter Secretariat</h4>
            <div className="footer-contact-details">
              <div className="contact-detail-row">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <address className="contact-text">
                  {contact.office}, <br />
                  {contact.campus}
                </address>
              </div>

              <div className="contact-detail-row">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href={`mailto:${contact.email}`} className="contact-text email-link">
                  {contact.email}
                </a>
              </div>

              <div className="contact-detail-row">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className="contact-text">{contact.hours}</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="footer-social-section">
              <span className="social-heading">Follow Chapter Updates:</span>
              <div className="social-icons-row">
                {contact.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={social.name}
                    title={social.label}
                  >
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} {chapter.name}, {chapter.department}. Affiliated with {chapter.parentBody}. All rights reserved.
          </p>
          <div className="footer-bottom-tags">
            <span className="tag-item">Non-Profit Technical Student Body</span>
            <span className="tag-separator">•</span>
            <span className="tag-item">Pure Static React Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
