'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L2 8L12 13L22 8L12 3Z" stroke="var(--primary-accent)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="var(--primary-accent)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M2 16L12 21L22 16" stroke="var(--primary-accent)" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          THE CORRECT STEPS
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          <li><Link href="#home" className="active">HOME</Link></li>
          <li><Link href="#solutions">SOLUTIONS</Link></li>
          <li><Link href="#tech-stack">TECH STACK</Link></li>
          <li><Link href="#contact">CONTACT</Link></li>
          <li><Link href="#consult" className="btn-secondary nav-btn">CONSULT AN EXPERT</Link></li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="20" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="2" fill="currentColor" />
            <rect y="7" width="24" height="2" fill="currentColor" />
            <rect y="14" width="24" height="2" fill="currentColor" />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <ul className={`nav-links mobile-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link href="#home" className="active" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link></li>
          <li><Link href="#solutions" onClick={() => setIsMobileMenuOpen(false)}>SOLUTIONS</Link></li>
          <li><Link href="#tech-stack" onClick={() => setIsMobileMenuOpen(false)}>TECH STACK</Link></li>
          <li><Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link></li>
          <li><Link href="#consult" className="btn-secondary nav-btn" onClick={() => setIsMobileMenuOpen(false)}>CONSULT AN EXPERT</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
