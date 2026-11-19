import React from 'react';
import { clubData } from '../data/clubData';

export default function Team() {
  const { faculty, students } = clubData.team;

  return (
    <section id="team" className="section-wrapper team-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Governance & Leadership</span>
          <h2 className="section-title">Chapter Team & Advisors</h2>
          <p className="section-description">
            Guided by distinguished departmental faculty counselors and driven by passionate
            student leaders striving for technical excellence and institutional integrity.
          </p>
        </div>

        {/* Subsection 1: Faculty Advisors */}
        <div className="team-group-block">
          <div className="group-heading-row">
            <h3 className="group-title">Faculty Advisory Board</h3>
            <span className="group-line" aria-hidden="true"></span>
          </div>

          <div className="faculty-grid">
            {faculty.map((member) => (
              <div key={member.id} className="faculty-card">
                <div className="faculty-avatar-seal">
                  <span className="seal-monogram">
                    {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </span>
                </div>

                <div className="faculty-content">
                  <div className="faculty-header">
                    <h4 className="faculty-name">{member.name}</h4>
                    <span className="faculty-role-badge">{member.role}</span>
                  </div>
                  <span className="faculty-qualifications">{member.qualification}</span>
                  <span className="faculty-department">{member.department}</span>
                  <p className="faculty-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection 2: Student Executive Committee */}
        <div className="team-group-block">
          <div className="group-heading-row">
            <h3 className="group-title">Student Executive Committee</h3>
            <span className="group-line" aria-hidden="true"></span>
          </div>

          <div className="students-grid">
            {students.map((student) => (
              <div key={student.id} className="student-card">
                <div className="student-avatar-frame">
                  <div className="student-monogram">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="student-status-indicator" title="Active Chapter Executive"></div>
                </div>

                <div className="student-info">
                  <h4 className="student-name">{student.name}</h4>
                  <span className="student-role">{student.role}</span>
                  <span className="student-year">{student.year}</span>
                  
                  <div className="student-focus-badge">
                    <span className="focus-label">Focus:</span> {student.focus}
                  </div>

                  <a href={`mailto:${student.email}`} className="student-contact-link" title={`Email ${student.name}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>{student.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
