import React, { useState, useEffect } from 'react';

export default function EventModal({ event, onClose }) {
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [attendeeRoll, setAttendeeRoll] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!event) return null;

  const isUpcoming = event.type === 'upcoming';

  const handleRegister = (e) => {
    e.preventDefault();
    if (!attendeeName.trim() || !attendeeEmail.trim() || !attendeeRoll.trim()) {
      setError('Please provide all requested registration details.');
      return;
    }
    setIsRegistered(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div className="modal-badge-row">
              <span className="badge badge-navy">{event.category}</span>
              <span className={`badge ${isUpcoming ? 'badge-green' : 'badge-gold'}`}>
                {event.status}
              </span>
            </div>
            <h3 id="modal-title" className="modal-title">{event.title}</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close details modal"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-info-grid">
            <div className="info-cell">
              <span className="info-cell-label">Date & Timing</span>
              <span className="info-cell-val">{event.date} • {event.time}</span>
            </div>
            <div className="info-cell">
              <span className="info-cell-label">Location / Platform</span>
              <span className="info-cell-val">{event.venue}</span>
            </div>
            <div className="info-cell">
              <span className="info-cell-label">Speaker / Host</span>
              <span className="info-cell-val">{event.speaker}</span>
            </div>
            <div className="info-cell">
              <span className="info-cell-label">Capacity / Status</span>
              <span className="info-cell-val">{event.seats}</span>
            </div>
          </div>

          <div className="modal-section-block">
            <h4 className="modal-block-heading">Event Overview</h4>
            <p className="modal-block-text">{event.description}</p>
          </div>

          <div className="modal-section-block">
            <h4 className="modal-block-heading">Prerequisites & Information</h4>
            <p className="modal-block-text">{event.prerequisites}</p>
          </div>

          {/* Interactive Registration / Participation */}
          {isUpcoming && (
            <div className="modal-registration-box">
              <h4 className="modal-block-heading">
                {isRegistered ? 'Registration Confirmed!' : 'Reserve Your Seat'}
              </h4>

              {!isRegistered ? (
                <form onSubmit={handleRegister} className="modal-rsvp-form">
                  {error && <p className="modal-error-text">{error}</p>}
                  <div className="form-row">
                    <input
                      type="text"
                      placeholder="Student Full Name"
                      className="form-input"
                      value={attendeeName}
                      onChange={(e) => { setAttendeeName(e.target.value); setError(''); }}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Roll / Reg No"
                      className="form-input"
                      value={attendeeRoll}
                      onChange={(e) => { setAttendeeRoll(e.target.value); setError(''); }}
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Institutional Email Address"
                    className="form-input"
                    value={attendeeEmail}
                    onChange={(e) => { setAttendeeEmail(e.target.value); setError(''); }}
                    required
                  />
                  <button type="submit" className="btn btn-gold btn-md" style={{ width: '100%', marginTop: '8px' }}>
                    Confirm Event RSVP
                  </button>
                </form>
              ) : (
                <div className="modal-rsvp-success">
                  <span className="success-badge-icon">✓</span>
                  <div>
                    <strong>RSVP Confirmed for {attendeeName} ({attendeeRoll})</strong>
                    <p>A calendar invite placeholder has been sent to {attendeeEmail}. Bring your student ID card to {event.venue}.</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
