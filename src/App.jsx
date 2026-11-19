import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Events from './components/Events';
import Team from './components/Team';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import EventModal from './components/EventModal';
import './App.css';

export default function App() {
  const [modalEvent, setModalEvent] = useState(null);

  useEffect(() => {
    // Elegant, performant viewport entrance observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleOpenEventModal = (event) => {
    setModalEvent(event);
  };

  const handleCloseEventModal = () => {
    setModalEvent(null);
  };

  const handleScrollToJoin = () => {
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
      // Place focus into the full name input for immediate accessibility
      setTimeout(() => {
        const nameInput = document.getElementById('fullName');
        if (nameInput) nameInput.focus();
      }, 500);
    }
  };

  return (
    <div className="iei-app-root">
      {/* 1. Navbar with Glassmorphism ONLY */}
      <Navbar onOpenJoinModal={handleScrollToJoin} />

      <main id="main-content">
        {/* 2. Hero: Solid Deep Navy, Technical Grid, Attractive Typography */}
        <Hero onOpenJoinModal={handleScrollToJoin} />

        {/* 3. About Us: Clean Solid Light Background */}
        <div className="reveal-on-scroll">
          <About />
        </div>

        {/* 4. Activities: Clean Solid White Background */}
        <div className="reveal-on-scroll">
          <Activities onSelectActivity={() => {
            const eventsSec = document.getElementById('events');
            if (eventsSec) eventsSec.scrollIntoView({ behavior: 'smooth' });
          }} />
        </div>

        {/* 5. Events: Clean Solid Light Background */}
        <div className="reveal-on-scroll">
          <Events onOpenEventModal={handleOpenEventModal} />
        </div>

        {/* 6. Team: Clean Solid White Background */}
        <div className="reveal-on-scroll">
          <Team />
        </div>

        {/* 7. Join Us: Clean Solid Deep Navy Background (No Glassmorphism) */}
        <div className="reveal-on-scroll">
          <JoinUs />
        </div>
      </main>

      {/* 8. Footer: Solid Deep Navy Background */}
      <Footer />

      {/* Event Details & RSVP Modal */}
      {modalEvent && (
        <EventModal
          event={modalEvent}
          onClose={handleCloseEventModal}
        />
      )}
    </div>
  );
}
