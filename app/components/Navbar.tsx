'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
  const updateNavHeight = () => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      document.documentElement.style.setProperty('--nav-height', `${height}px`);
    }
  };

  updateNavHeight();

  window.addEventListener('resize', updateNavHeight);
  return () => window.removeEventListener('resize', updateNavHeight);
}, [isScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync active link with pathname and hash
  useEffect(() => {
    const updateActiveLink = () => {
      if (pathname !== '/') {
        setActiveLink(pathname);
      } else {
        setActiveLink(window.location.hash || '/');
      }
    };

    updateActiveLink();
    window.addEventListener('hashchange', updateActiveLink);
    return () => window.removeEventListener('hashchange', updateActiveLink);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav ref={navRef} className={`navbar glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link href="/" className="logo" onClick={() => handleLinkClick('/')} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/assets/csc_logo.png"
            alt="CSC Logo"
            style={{ height: '64px', width: 'auto', objectFit: 'contain', display: 'block', margin: '-12px 0' }}
          />
          <span style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '0.5px', color: 'white', lineHeight: '1.2' }}>
            THE CORRECT STEPS
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          <li>
            <Link
              href="/"
              className={activeLink === '/' || activeLink === '' ? 'active' : ''}
              onClick={() => handleLinkClick('/')}
            >HOME</Link>
          </li>
          <li>
            <Link
              href="/#solutions"
              className={activeLink === '#solutions' ? 'active' : ''}
              onClick={() => handleLinkClick('#solutions')}
            >SOLUTIONS</Link>
          </li>
          <li>
            <Link
              href="/#our-products"
              className={activeLink === '#our-products' ? 'active' : ''}
              onClick={() => handleLinkClick('#our-products')}
            >OUR PRODUCTS</Link>
          </li>
          <li>
            <Link
              href="/virtual-research-lab"
              className={activeLink === '/virtual-research-lab' ? 'active' : ''}
              onClick={() => handleLinkClick('/virtual-research-lab')}
            >VIRTUAL RESEARCH LAB</Link>
          </li>
          <li>
            <Link
              href="/oltp"
              className={activeLink === '/oltp' ? 'active' : ''}
              onClick={() => handleLinkClick('/oltp')}
            >OLTP</Link>
          </li>
          <li>
            <Link
              href="/#about-us"
              className={activeLink === '#about-us' ? 'active' : ''}
              onClick={() => handleLinkClick('#about-us')}
            >ABOUT US</Link>
          </li>
          <li>
            <Link
              href="/#contact-us"
              className={activeLink === '#contact-us' ? 'active' : ''}
              onClick={() => handleLinkClick('#contact-us')}
            >CONTACT US</Link>
          </li>
          {/* <li>
            <Link
              href="/#consult"
              className={`btn-secondary nav-btn ${activeLink === '#consult' ? 'active' : ''}`}
              onClick={() => handleLinkClick('#consult')}
            >CONSULT AN EXPERT</Link>
          </li> */}
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
          <li><Link href="/" className={activeLink === '/' || activeLink === '' ? 'active' : ''} onClick={() => handleLinkClick('/')}>HOME</Link></li>
          <li><Link href="/#solutions" className={activeLink === '#solutions' ? 'active' : ''} onClick={() => handleLinkClick('#solutions')}>SOLUTIONS</Link></li>
          <li><Link href="/#tech-stack" className={activeLink === '#tech-stack' ? 'active' : ''} onClick={() => handleLinkClick('#tech-stack')}>TECH STACK</Link></li>
          <li><Link href="/virtual-research-lab" className={activeLink === '/virtual-research-lab' ? 'active' : ''} onClick={() => handleLinkClick('/virtual-research-lab')}>VIRTUAL RESEARCH LAB</Link></li>
          <li><Link href="/#contact" className={activeLink === '#contact' ? 'active' : ''} onClick={() => handleLinkClick('#contact')}>CONTACT</Link></li>
          <li><Link href="/#consult" className={`btn-secondary nav-btn ${activeLink === '#consult' ? 'active' : ''}`} onClick={() => handleLinkClick('#consult')}>CONSULT AN EXPERT</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
