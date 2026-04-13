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
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const solutionsItems = [
    'Sustainable & Renewable Products',
    'Origami & Flexure in Robotics',
    'Physics Of Design',
    'CAD & CAE',
    '3D Printing',
  ];

  const researchItems = [
    { label: 'Research Papers & Patents', href: '/research/research-papers-patents' },
    { label: 'Blogs, Articles & News', href: '/research/blogs-articles-news' },
  ];

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

  const desktopLinkBaseClasses =
    'text-[0.9rem] font-medium tracking-[0.2px] transition-all duration-300 ease-[ease] hover:text-[var(--secondary-accent)]';
  const desktopLinkClasses = (isActive: boolean) =>
    `${desktopLinkBaseClasses} ${isActive ? 'text-[var(--secondary-accent)]' : ''}`;

  const mobileLinkBaseClasses =
    'text-[0.9rem] font-medium tracking-[0.2px] transition-all duration-300 ease-[ease] hover:text-[var(--secondary-accent)] max-[600px]:w-full max-[600px]:p-2 max-[600px]:text-center max-[600px]:text-[1.2rem]';
  const mobileLinkClasses = (isActive: boolean) =>
    `${mobileLinkBaseClasses} ${isActive ? 'text-[var(--secondary-accent)]' : 'text-white max-[600px]:text-[var(--text-high)]'}`;

  const dropdownChevronClasses =
    'shrink-0 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]';
  const dropdownItemBaseClasses =
    'flex items-center gap-3 rounded-[8px] px-4 py-3 text-[0.82rem] font-medium tracking-[0.02em] whitespace-nowrap text-[rgba(255,255,255,0.8)] transition-all duration-200 ease-[ease] hover:bg-[rgba(0,188,212,0.1)] hover:text-[var(--secondary-accent)]';

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 z-[1000] w-full border border-[rgba(0,0,0,0.05)] border-b-0 bg-[var(--nav-bg)] backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] [transition:background_0.3s] hover:bg-[var(--nav-bg)] hover:shadow-none [transform:none!important] hover:[transform:none!important] ${
        isScrolled
          ? 'py-3 shadow-[0_4px_30px_rgba(0,0,0,0.2)] max-[600px]:py-3'
          : 'py-6 shadow-none max-[600px]:py-4'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10">
        <Link href="/" className="flex shrink-0 items-center gap-[10px] max-[600px]:text-[1.1rem] max-[600px]:whitespace-nowrap" onClick={() => handleLinkClick('/')}>
          <img
            src="/assets/csc_logo1.png"
            alt="CSC Logo"
            className="block h-12 w-auto object-contain"
          />
          <span className="whitespace-nowrap text-[1rem] font-bold leading-[1.2] tracking-[0.5px] text-white">
            THE CORRECT STEPS
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="flex list-none flex-wrap justify-center gap-8 text-white max-[900px]:hidden">
          <li>
            <Link
              href="/"
              className={desktopLinkClasses(activeLink === '/' || activeLink === '')}
              onClick={() => handleLinkClick('/')}
            >Home</Link>
          </li>
          <li className="group/nav-dropdown relative !flex items-center">
            <div className={`inline-flex !items-center gap-[5px] cursor-pointer text-[0.9rem] font-medium tracking-[0.2px] text-white group-hover/nav-dropdown:text-[var(--secondary-accent)] ${pathname.startsWith('/solutions') ? 'text-[var(--secondary-accent)]' : ''}`}
            >
              Solutions
              <svg className={`${dropdownChevronClasses} group-hover/nav-dropdown:rotate-180`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="invisible pointer-events-none absolute top-full left-1/2 z-[1100] w-max -translate-x-1/2 translate-y-2 pt-4 opacity-0 [transition:opacity_0.3s_cubic-bezier(0.4,0,0.2,1),transform_0.3s_cubic-bezier(0.4,0,0.2,1),visibility_0.3s] group-hover/nav-dropdown:visible group-hover/nav-dropdown:pointer-events-auto group-hover/nav-dropdown:translate-y-0 group-hover/nav-dropdown:opacity-100">
              <div className="flex min-w-[280px] flex-col rounded-[12px] border border-[rgba(0,188,212,0.15)] bg-[rgba(6,51,79,0.97)] p-2 backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)] shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,188,212,0.08),0_0_30px_rgba(0,188,212,0.05)]">
                {solutionsItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href="/solutions"
                    className={dropdownItemBaseClasses}
                    onClick={() => handleLinkClick('/solutions')}
                  >
                    {/* <span className="nav-dropdown-number">{String(idx + 1).padStart(2, '0')}</span> */}
                    <span className="flex-1 text-center">{item}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link
              href="/#products"
              className={desktopLinkClasses(activeLink === '#products')}
              onClick={() => handleLinkClick('#products')}
            >
              Our Products
            </Link>
          </li>
          <li>
            <Link
              href="/virtual-research-lab"
              className={desktopLinkClasses(activeLink === '/virtual-research-lab')}
              onClick={() => handleLinkClick('/virtual-research-lab')}
            >
              Virtual Research Lab
            </Link>
          </li>
          <li>
            <Link
              href="https://oltp.thecorrectsteps.com"
              target="_blank"
              className={desktopLinkClasses(false)}
            >
              OLTP
            </Link>
          </li>
          <li className="group/nav-dropdown relative !flex items-center">
            <div 
              className={`inline-flex !items-center gap-[5px] cursor-pointer text-[0.9rem] font-medium tracking-[0.2px] text-white group-hover/nav-dropdown:text-[var(--secondary-accent)] ${pathname.startsWith('/research') ? 'text-[var(--secondary-accent)]' : ''}`}
            >
               Research
              <svg className={`${dropdownChevronClasses} group-hover/nav-dropdown:rotate-180`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="invisible pointer-events-none absolute top-full left-1/2 z-[1100] w-max -translate-x-1/2 translate-y-2 pt-4 opacity-0 [transition:opacity_0.3s_cubic-bezier(0.4,0,0.2,1),transform_0.3s_cubic-bezier(0.4,0,0.2,1),visibility_0.3s] group-hover/nav-dropdown:visible group-hover/nav-dropdown:pointer-events-auto group-hover/nav-dropdown:translate-y-0 group-hover/nav-dropdown:opacity-100">
              <div className="flex min-w-[280px] flex-col rounded-[12px] border border-[rgba(0,188,212,0.15)] bg-[rgba(6,51,79,0.97)] p-2 backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)] shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,188,212,0.08),0_0_30px_rgba(0,188,212,0.05)]">
                {researchItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`${dropdownItemBaseClasses} ${pathname === item.href ? 'bg-[rgba(0,188,212,0.1)] text-[var(--secondary-accent)]' : ''}`}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    <span className="flex-1 text-center">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link 
              href="/about-us" 
              className={desktopLinkClasses(pathname.startsWith('/about-us'))}
              onClick={() => handleLinkClick('/about-us')}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={desktopLinkClasses(pathname.startsWith('/contact-us'))}
              onClick={() => handleLinkClick('/contact-us')}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/#careers"
              className={desktopLinkClasses(activeLink === '#careers')}
              onClick={() => handleLinkClick('#careers')}
            >
              Careers
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="hidden cursor-pointer border-0 max-[600px]:block max-[600px]:bg-transparent max-[600px]:p-2 max-[600px]:text-[1.5rem] max-[600px]:text-[var(--text-high)]"
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
        <ul className={`absolute top-full left-0 z-[1001] w-full list-none flex-col justify-center gap-8 bg-[var(--nav-bg)] p-8 max-[600px]:items-center max-[600px]:gap-6 max-[600px]:border-t max-[600px]:border-t-[rgba(0,0,0,0.05)] max-[600px]:bg-white max-[600px]:px-0 max-[600px]:py-8 max-[600px]:shadow-[0_10px_20px_rgba(0,0,0,0.1)] ${isMobileMenuOpen ? 'flex [animation:slideDown_0.3s_ease-out]' : 'hidden'}`}>
          <li>
            <Link href="/" className={mobileLinkClasses(activeLink === '/' || activeLink === '')} onClick={() => handleLinkClick('/')}>
              HOME
            </Link>
          </li>
          <li className="w-full">
            <button
              className={`flex w-full items-center justify-between border-0 bg-transparent p-0 text-[0.9rem] font-medium tracking-[0.2px] uppercase transition-all duration-300 ease-[ease] ${activeLink === '#solutions' ? 'text-[var(--secondary-accent)]' : 'text-white hover:text-[var(--secondary-accent)]'}`}
              onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
              aria-expanded={isMobileSolutionsOpen}
              >
              SOLUTIONS
              <svg className={`${dropdownChevronClasses} ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <ul className={`m-0 list-none overflow-hidden p-0 opacity-0 [transition:max-height_0.35s_cubic-bezier(0.4,0,0.2,1),opacity_0.3s_ease] ${isMobileSolutionsOpen ? 'max-h-[320px] pt-2 opacity-100' : 'max-h-0'}`}>
              {solutionsItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="/#solutions"
                    className="block border-l-2 border-l-[rgba(0,188,212,0.2)] py-2 pr-0 pl-5 text-[0.82rem] text-[rgba(255,255,255,0.7)] transition-all duration-200 ease-[ease] hover:border-l-[var(--secondary-accent)] hover:text-[var(--secondary-accent)]"
                    onClick={() => handleLinkClick('#solutions')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href="/#tech-stack" className={mobileLinkClasses(activeLink === '#tech-stack')} onClick={() => handleLinkClick('#tech-stack')}>
                TECH STACK
            </Link>
          </li>
          <li>
            <Link href="/virtual-research-lab" className={mobileLinkClasses(activeLink === '/virtual-research-lab')} onClick={() => handleLinkClick('/virtual-research-lab')}>
              VIRTUAL RESEARCH LAB
            </Link>
          </li>
          <li>
            <Link href="/about-us" className={mobileLinkClasses(pathname.startsWith('/about-us'))} onClick={() => handleLinkClick('/about-us')}>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className={mobileLinkClasses(pathname.startsWith('/contact-us'))} onClick={() => handleLinkClick('/contact-us')}>
              CONTACT
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className={`${mobileLinkBaseClasses} rounded-[50px] border-2 border-white bg-transparent px-7 py-[0.6rem] font-semibold normal-case hover:bg-[rgba(255,255,255,0.1)] ${pathname.startsWith('/contact-us') ? 'text-[var(--secondary-accent)]' : 'text-white max-[600px]:text-[var(--text-high)]'}`} onClick={() => handleLinkClick('/contact-us')}>
              CONSULT AN EXPERT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
