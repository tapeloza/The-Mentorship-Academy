import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const exploreItems = [
  { to: '/programs', icon: 'book', title: 'Our Programs', text: 'Discover growth and mentorship pathways.' },
  { to: '/events', icon: 'calendar', title: 'Events', text: 'Join our upcoming gatherings and workshops.' },
  { to: '/news', icon: 'news', title: 'News', text: 'Read the latest stories, updates and features.' },
  { to: '/mentees', icon: 'community', title: 'Mentees', text: 'Meet the women shaping what comes next.' },
  { to: '/contact', icon: 'community', title: 'Memberships', text: 'Become part of our thriving leadership network.' },
];

function MenuIcon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z" /><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2V5.5Z" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    news: <><path d="M4 4h12v16H4z" /><path d="M16 8h4v12H8" /><path d="M7 8h6M7 12h6M7 16h4" /></>,
    community: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0M14 20a4 4 0 0 1 6.5-3.1" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const close = () => { setOpen(false); setExploreOpen(false); };
  return <nav className="navbar">
    <Link to="/" onClick={close}><img src={logo} className="logo-img" alt="The Mentorship Academy" /></Link>
    <div className="nav-links desktop-nav-links">
      <NavLink to="/our-story" onClick={close}>Our Story</NavLink>
      <div className="dropdown-container" onMouseEnter={() => setExploreOpen(true)} onMouseLeave={() => setExploreOpen(false)}>
        <button className="dropdown-trigger" onClick={() => setExploreOpen(!exploreOpen)} aria-expanded={exploreOpen}>Explore <span>▾</span></button>
        <div className={`mega-menu ${exploreOpen ? 'show' : ''}`}><div className="mega-menu-inner"><div className="mega-menu-intro"><p>Explore the Academy</p><span>Choose a path built to help you grow, connect and lead with confidence.</span></div><div className="mega-menu-grid">
          {exploreItems.map((item) => <Link key={item.title} to={item.to} className="mega-menu-item" onClick={close}><span className="mega-icon"><MenuIcon type={item.icon} /></span><span><strong>{item.title}</strong><small>{item.text}</small><b>Explore <i>→</i></b></span></Link>)}
        </div></div></div>
      </div>
      <NavLink to="/our-mentors" onClick={close}>Our Mentors</NavLink>
      <NavLink to="/contact" onClick={close}>Get in Touch</NavLink>
    </div>
    <Link to="/contact?interest=Joining%20a%20programme" onClick={close} className="cta-button">Become a member</Link>
    <button className="hamburger" onClick={() => { if (open) close(); else { setExploreOpen(false); setOpen(true); } }} aria-label="Toggle navigation" aria-expanded={open}>{open ? '×' : '☰'}</button>
    <div className={`mobile-nav ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className={`mobile-nav-panels ${exploreOpen ? 'show-explore' : ''}`}>
        <div className="mobile-nav-panel mobile-nav-main">
          <NavLink to="/our-story" onClick={close}>Our Story</NavLink>
          <button className="mobile-explore-button" onClick={() => setExploreOpen(true)}>Explore <span>→</span></button>
          <NavLink to="/our-mentors" onClick={close}>Our Mentors</NavLink>
          <NavLink to="/contact" onClick={close}>Get in Touch</NavLink>
          <Link to="/contact?interest=Joining%20a%20programme" onClick={close} className="mobile-member-link">Become a member</Link>
        </div>
        <div className="mobile-nav-panel mobile-nav-explore">
          <button className="mobile-back-button" onClick={() => setExploreOpen(false)}>← Back to menu</button>
          <div className="mobile-explore-intro"><p>Explore the Academy</p><span>Choose a path to grow, connect and lead with confidence.</span></div>
          <div className="mobile-explore-list">
            {exploreItems.map((item) => <Link key={item.title} to={item.to} className="mobile-explore-item" onClick={close}><span className="mega-icon"><MenuIcon type={item.icon} /></span><span><strong>{item.title}</strong><small>{item.text}</small></span><i>→</i></Link>)}
          </div>
        </div>
      </div>
    </div>
  </nav>;
}
