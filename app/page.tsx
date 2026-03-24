'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import {
  FadeInUp,
  ScaleIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  HeroTextReveal,
  HeroItem,
} from './components/MotionWrappers';

// Using local asset paths
const HERO_IMG = '/assets/hero.png';
const CFD_IMG = '/assets/cfd.png';
const LIGHT_IMG = '/assets/light.png';
const THERMAL_IMG = '/assets/thermal.png';
const VIBE_IMG = '/assets/vibe.png';

const DEFENSE_IMG = '/assets/def.png';
const INDUSTRIAL_IMG = '/assets/ind.png';
const MECHANICAL_IMG = '/assets/mech.png';

const TECH_STACK = [
  {
    title: "Biomechanics",
    icon: (
      <svg className="tech-stack-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    ),
  },
  {
    title: "Flexure Joints",
    icon: (
      <svg className="tech-stack-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Advanced CAD",
    icon: (
      <svg className="tech-stack-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Micro Robotics",
    icon: (
      <svg className="tech-stack-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 14.25h7.5M8.25 9.75h7.5M10.5 18.75h3M2.25 8.25v7.5M21.75 8.25v7.5M6 18.75V5.25A2.25 2.25 0 018.25 3h7.5A2.25 2.25 0 0118 5.25v13.5A2.25 2.25 0 0115.75 21h-7.5A2.25 2.25 0 016 18.75z" />
      </svg>
    ),
  },
];

const SPECIALIZATIONS = [
  {
    title: "Structural Integrity",
    icon: (
      <svg className="spec-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Sensing Systems",
    icon: (
      <svg className="spec-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Thermal Analysis",
    icon: (
      <svg className="spec-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <div className="app">
      <div className="shade-left"></div>
      <div className="shade-center"></div>
      <div className="shade-right"></div>

      <Navbar />

      {/* ── Hero ──────────────────────────────────────────── */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <Image
          src={HERO_IMG}
          alt="Aerospace Engineering"
          className="hero-bg"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="container hero-content">
          <HeroTextReveal className="hero-text">
            <HeroItem>
              <h2>Problem Solving Robotics &amp; Automation</h2>
            </HeroItem>
            <HeroItem>
              <h1>Engineering Answers for Industrial &amp; Defense Issues</h1>
            </HeroItem>
            <HeroItem>
              <p className="subtitle">We provide mission-critical robotics and automation solutions through advanced CAD, Crash &amp; Impact dynamics, and biomechanical principles.</p>
            </HeroItem>
            <HeroItem>
              <div className="hero-btns">
                <button className="btn-primary">Start Project</button>
                <button className="btn-secondary">Our Methodology</button>
              </div>
            </HeroItem>
          </HeroTextReveal>
        </div>
      </header>

      {/* ── Services Grid ──────────────────────────────────── */}
      <section className="services-grid-wrapper container">
        <FadeInUp className="services-header">
          <h2>Core Automation &amp; Robotic Solutions</h2>
        </FadeInUp>
        <StaggerContainer className="services-grid">
          <StaggerItem className="service-card">
            <div className="img-container">
              <Image src={CFD_IMG} alt="Robotics" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>PROBLEM-SOLVING ROBOTICS</p>
          </StaggerItem>
          <StaggerItem className="service-card">
            <div className="img-container">
              <Image src={LIGHT_IMG} alt="Automation" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>AUTOMATION SOLUTIONS</p>
          </StaggerItem>
          <StaggerItem className="service-card">
            <div className="img-container">
              <Image src={THERMAL_IMG} alt="FEM" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>FEM &amp; STRUCTURAL ANALYSIS</p>
          </StaggerItem>
          <StaggerItem className="service-card">
            <div className="img-container">
              <Image src={VIBE_IMG} alt="Crash" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>CRASH &amp; IMPACT SIMULATION</p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ── Specializations + Recent Apps ────────────────── */}
      <section className="bottom-sections container">
        <SlideInLeft className="specializations">
          <h3>
            <svg className="spec-heading-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Specializations
          </h3>
          <StaggerContainer className="spec-grid">
            {SPECIALIZATIONS.map((item) => (
              <StaggerItem key={item.title} className="spec-item">
                <div className="spec-icon-circle">
                  {item.icon}
                </div>
                <p>{item.title}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SlideInLeft>

        <SlideInRight className="recent-apps">
          <h3><span className="accent">▶</span> RECENT APPLICATIONS</h3>
          <StaggerContainer className="app-grid">
            <StaggerItem className="app-card glass">
              <Image src={THERMAL_IMG} alt="App 1" width={150} height={100} style={{ width: '100%', height: 'auto' }} />
            </StaggerItem>
            <StaggerItem className="app-card glass">
              <Image src={CFD_IMG} alt="App 2" width={150} height={100} style={{ width: '100%', height: 'auto' }} />
            </StaggerItem>
            <StaggerItem className="app-card glass">
              <Image src={VIBE_IMG} alt="App 3" width={150} height={100} style={{ width: '100%', height: 'auto' }} />
            </StaggerItem>
          </StaggerContainer>
          <button className="btn-primary learn-more">LEARN MORE</button>
        </SlideInRight>
      </section>

      {/* ── Tech Stack + Engineering Impact ──────────────── */}
      <section className="stack-impact-section container">
        <SlideInLeft className="tech-stack">
          <h3><span className="accent">▶</span> Tech Stack</h3>
          <StaggerContainer className="stack-timeline">
            {TECH_STACK.map((item) => (
              <StaggerItem key={item.title} className="stack-item">
                <div className="stack-icon-circle">
                  {item.icon}
                </div>
                <p>{item.title}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SlideInLeft>

        <SlideInRight className="engineering-impact">
          <h3><span className="accent">▶</span> ENGINEERING FOR IMPACT</h3>
          <StaggerContainer className="impact-cards">
            <StaggerItem>
              <div className="impact-card glass">
                <div className="img-placeholder">
                  <Image src={DEFENSE_IMG} alt="Defense Infrastructure" width={300} height={150} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="impact-content">
                  <h4>DEFENSE INFRASTRUCTURE</h4>
                  <p>Validating structural integrity against crash scenarios.</p>
                  <button className="btn-primary learn-more-btn">LEARN MORE</button>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="impact-card glass">
                <div className="img-placeholder">
                  <Image src={INDUSTRIAL_IMG} alt="Industrial Automation" width={300} height={150} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="impact-content">
                  <h4>INDUSTRIAL AUTOMATION</h4>
                  <p>Custom end effectors to solve throughput issues.</p>
                  <button className="btn-primary learn-more-btn">LEARN MORE</button>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="impact-card glass">
                <div className="img-placeholder">
                  <Image src={MECHANICAL_IMG} alt="Mechanical Specs" width={300} height={150} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="impact-content">
                  <h4>MECHANICAL SPECS</h4>
                  <p>Flexure joints for next-generation robotic...</p>
                  <button className="btn-primary learn-more-btn">LEARN MORE</button>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </SlideInRight>
      </section>

      {/* ── Technical Issues CTA ─────────────────────────── */}
      <section className="technical-issues-section container border-top border-bottom">
        <FadeInUp className="tech-issues-content">
          <h2>SOLVE YOUR TECHNICAL ISSUES</h2>
          <p className="subtitle">Our approach combines fundamental physics with advanced robotics to provide the correct steps for industrial automation.</p>
          <div className="tech-issues-btns">
            <Link href="mailto:contact@thecorrectsteps.com" className="btn-outline-primary">EMAIL CONTACT</Link>
            <button className="btn-solid-muted">CASE STUDIES</button>
          </div>
        </FadeInUp>
        <ScaleIn className="process-overview glass">
          <div className="process-icon">▤</div>
          <p>PROCESS OVERVIEW</p>
        </ScaleIn>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="main-footer">
        <FadeInUp className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <h3><span className="accent">📚</span> THE CORRECT STEPS</h3>
              <p>SPECIALIZED IN PROBLEM-SOLVING ROBOTICS AND AUTOMATION FOR INDUSTRIAL AND DEFENSE SECTORS.</p>
            </div>
            <div className="footer-links">
              <h4>SOLUTIONS</h4>
              <ul>
                <li><Link href="#">CUSTOM ROBOTICS</Link></li>
                <li><Link href="#">INDUSTRIAL AUTOMATION</Link></li>
                <li><Link href="#">CRASH &amp; IMPACT SIMULATION</Link></li>
                <li><Link href="#">FEM &amp; CAD MODELLING</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>TECHNOLOGIES</h4>
              <ul>
                <li><Link href="#">BIOMECHANICS</Link></li>
                <li><Link href="#">FLEXURE JOINTS</Link></li>
                <li><Link href="#">ORIGAMI MICRO-ROBOTICS</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>LEGAL</h4>
              <ul>
                <li><Link href="#">PRIVACY POLICY</Link></li>
                <li><Link href="#">TERMS OF SERVICE</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom border-top">
            <p>© 2026 THE CORRECT STEPS. ALL RIGHTS RESERVED.</p>
            <p><Link href="https://thecorrectsteps.com" target="_blank">THECORRECTSTEPS.COM ↗</Link></p>
          </div>
        </FadeInUp>
      </footer>
    </div>
  );
}
