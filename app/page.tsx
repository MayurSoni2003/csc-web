import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';

// Using local asset paths
const HERO_IMG = '/assets/hero.png';
const CFD_IMG = '/assets/cfd.png';
const LIGHT_IMG = '/assets/light.png';
const THERMAL_IMG = '/assets/thermal.png';
const VIBE_IMG = '/assets/vibe.png';

export const metadata = {
  title: 'Engineering Answers | The Correct Steps',
  description: 'Problem solving robotics and automation solutions for industrial and defense issues.',
};

export default function Page() {
  return (
    <div className="app">
      <div className="shade-left"></div>
      <div className="shade-center"></div>
      <div className="shade-right"></div>
      
      <Navbar />

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
          <div className="hero-text">
            <h2>Problem Solving Robotics & Automation</h2>
            <h1>Engineering Answers for Industrial & Defense Issues</h1>
            <p className="subtitle">We provide mission-critical robotics and automation solutions through advanced CAD, Crash & Impact dynamics, and biomechanical principles.</p>
            <div className="hero-btns">
              <button className="btn-primary">Start Project</button>
              <button className="btn-secondary">Our Methodology</button>
            </div>
          </div>
        </div>
      </header>

      <section className="services-grid-wrapper container">
        <div className="services-header">
          <h2>Core Automation & Robotic Solutions</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="img-container">
              <Image src={CFD_IMG} alt="Robotics" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>PROBLEM-SOLVING ROBOTICS</p>
          </div>
          <div className="service-card">
            <div className="img-container">
              <Image src={LIGHT_IMG} alt="Automation" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>AUTOMATION SOLUTIONS</p>
          </div>
          <div className="service-card">
            <div className="img-container">
              <Image src={THERMAL_IMG} alt="FEM" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>FEM & STRUCTURAL ANALYSIS</p>
          </div>
          <div className="service-card">
            <div className="img-container">
              <Image src={VIBE_IMG} alt="Crash" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>CRASH & IMPACT SIMULATION</p>
          </div>
        </div>
      </section>

      <section className="bottom-sections container">
        <div className="specializations">
          <h3><span className="accent">▶</span> SPECIALIZATIONS</h3>
          <div className="spec-grid">
            <div className="spec-item"><div className="icon">⬡</div><p>Structural Integrity</p></div>
            <div className="spec-item"><div className="icon">⚙</div><p>Sensing Systems</p></div>
            <div className="spec-item"><div className="icon">🌐</div><p>Thermal Analysis</p></div>
          </div>
        </div>

        <div className="recent-apps">
          <h3><span className="accent">▶</span> RECENT APPLICATIONS</h3>
          <div className="app-grid">
            <div className="app-card glass">
              <Image src={THERMAL_IMG} alt="App 1" width={150} height={100} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="app-card glass">
              <Image src={CFD_IMG} alt="App 2" width={150} height={100} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="app-card glass">
              <Image src={VIBE_IMG} alt="App 3" width={150} height={100} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
          <button className="btn-primary learn-more">LEARN MORE</button>
        </div>
      </section>

      <section className="stack-impact-section container">
        <div className="tech-stack">
          <h3><span className="accent">▶</span> TECH STACK</h3>
          <div className="stack-timeline">
            <div className="stack-item">
              <div className="stack-icon-circle"><span className="icon">∨</span></div>
              <p>BIOMECHANICS</p>
            </div>
            <div className="stack-item">
              <div className="stack-icon-circle"><span className="icon">⚙</span></div>
              <p>FLEXURE JOINTS</p>
            </div>
            <div className="stack-item">
              <div className="stack-icon-circle"><span className="icon">⬡</span></div>
              <p>ADVANCED CAD</p>
            </div>
            <div className="stack-item">
              <div className="stack-icon-circle"><span className="icon">🤖</span></div>
              <p>MICRO ROBOTICS</p>
            </div>
          </div>
        </div>

        <div className="engineering-impact">
          <h3><span className="accent">▶</span> ENGINEERING FOR IMPACT</h3>
          <div className="impact-cards">
            <div className="impact-card glass">
              <div className="img-placeholder">
                <Image src={THERMAL_IMG} alt="Defense Infrastructure" width={300} height={150} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="impact-content">
                <h4>DEFENSE INFRASTRUCTURE</h4>
                <p>Validating structural integrity against crash scenarios.</p>
                <button className="btn-primary learn-more-btn">LEARN MORE</button>
              </div>
            </div>
            <div className="impact-card glass">
              <div className="img-placeholder">
                <Image src={CFD_IMG} alt="Industrial Automation" width={300} height={150} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="impact-content">
                <h4>INDUSTRIAL AUTOMATION</h4>
                <p>Custom end effectors to solve throughput issues.</p>
                <button className="btn-primary learn-more-btn">LEARN MORE</button>
              </div>
            </div>
            <div className="impact-card glass">
              <div className="img-placeholder">
                <Image src={VIBE_IMG} alt="Mechanical Specs" width={300} height={150} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="impact-content">
                <h4>MECHANICAL SPECS</h4>
                <p>Flexure joints for next-generation robotic...</p>
                <button className="btn-primary learn-more-btn">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-issues-section container border-top border-bottom">
        <div className="tech-issues-content">
          <h2>SOLVE YOUR TECHNICAL ISSUES</h2>
          <p className="subtitle">Our approach combines fundamental physics with advanced robotics to provide the correct steps for industrial automation.</p>
          <div className="tech-issues-btns">
            <Link href="mailto:contact@thecorrectsteps.com" className="btn-outline-primary">EMAIL CONTACT</Link>
            <button className="btn-solid-muted">CASE STUDIES</button>
          </div>
        </div>
        <div className="process-overview glass">
          <div className="process-icon">▤</div>
          <p>PROCESS OVERVIEW</p>
        </div>
      </section>

      <footer className="main-footer container">
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
              <li><Link href="#">CRASH & IMPACT SIMULATION</Link></li>
              <li><Link href="#">FEM & CAD MODELLING</Link></li>
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
      </footer>
    </div>
  );
}
