'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../../components/MotionWrappers';

/* ──────────────────────────────────────────────────────────────
   Static placeholder data — will be replaced by Strapi CMS fetch
   Each object mirrors a typical CMS "Research Paper" content-type
   ────────────────────────────────────────────────────────────── */
const PAPERS = [
  {
    id: 1,
    title: 'Compliant Mechanisms in Origami-Inspired Robotic Grippers',
    authors: ['Dr. A. Kumar', 'P. Soni'],
    abstract: 'This paper explores the integration of origami-inspired folds into compliant gripper mechanisms, achieving a 40% weight reduction while maintaining grip force fidelity across varied payloads.',
    journal: 'Journal of Mechanical Design',
    year: 2024,
    category: 'Robotics',
    doi: '#',
    status: 'Published',
  },
  {
    id: 2,
    title: 'Topology Optimization of Flexure Hinges for Precision Motion Stages',
    authors: ['S. Mehta', 'R. Joshi'],
    abstract: 'A novel topology optimization framework is proposed for designing flexure hinges with maximized range of motion while constraining parasitic errors to sub-micron levels.',
    journal: 'Precision Engineering',
    year: 2024,
    category: 'Design',
    doi: '#',
    status: 'Published',
  },
  {
    id: 3,
    title: 'Sustainable Material Selection Framework for Consumer Products',
    authors: ['V. Patel', 'Dr. A. Kumar'],
    abstract: 'A multi-criteria decision-making framework integrating lifecycle assessment data with mechanical performance metrics to guide sustainable material selection in consumer electronics.',
    journal: 'Sustainable Materials & Technologies',
    year: 2025,
    category: 'Sustainability',
    doi: '#',
    status: 'Published',
  },
  {
    id: 4,
    title: 'Physics-Based Digital Twin for Real-Time Structural Health Monitoring',
    authors: ['P. Soni', 'K. Desai'],
    abstract: 'Development of a physics-informed neural network coupled with a FEA digital twin for predictive structural health monitoring in industrial machinery systems.',
    journal: 'Engineering with Computers',
    year: 2025,
    category: 'AI & Simulation',
    doi: '#',
    status: 'Under Review',
  },
  {
    id: 5,
    title: 'Additive Manufacturing of Lattice Structures for Energy Absorption',
    authors: ['R. Joshi', 'V. Patel'],
    abstract: 'Investigation of graded lattice structures fabricated via SLS 3D printing, demonstrating superior energy absorption characteristics compared to uniform lattice designs.',
    journal: 'Additive Manufacturing',
    year: 2025,
    category: '3D Printing',
    doi: '#',
    status: 'Published',
  },
  {
    id: 6,
    title: 'Patent: Self-Deploying Origami Solar Panel Array for Microsatellites',
    authors: ['Dr. A. Kumar', 'S. Mehta'],
    abstract: 'A patented mechanism utilizing Miura-ori fold patterns for compact stowage and autonomous deployment of solar panels in microsatellite applications.',
    journal: 'Indian Patent Office',
    year: 2024,
    category: 'Patent',
    doi: '#',
    status: 'Granted',
  },
];

const CATEGORIES = ['All', 'Robotics', 'Design', 'Sustainability', 'AI & Simulation', '3D Printing', 'Patent'];

const STATS = [
  { value: '15+', label: 'Published Papers' },
  { value: '3', label: 'Patents Filed' },
  { value: '8+', label: 'Industry Collaborations' },
  { value: '2024–25', label: 'Active Research Years' },
];

export default function ResearchPapersPage() {
  return (
    <div className="relative bg-[#f9fafb] text-slate-800 min-h-screen overflow-hidden">

      {/* ── Background Gradients ── */}
      <div className="fixed top-[10%] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,188,212,0.15)_0%,transparent_70%)] blur-[100px] z-0 pointer-events-none"></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,139,163,0.10)_0%,transparent_70%)] blur-[140px] z-0 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[-200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,188,212,0.12)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>

      {/* ══════════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative pt-[160px] pb-24 px-6 z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInLeft>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#008ba3]/20 shadow-sm text-sm font-bold text-[#008ba3] tracking-widest uppercase mb-6">
              Research & Innovation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-900 leading-[1.1] mb-8">
              Research <span className="bg-gradient-to-r from-[#008ba3] to-[#00bcd4] bg-clip-text text-transparent">Papers</span> & Patents
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-xl">
              Explore our published research contributions spanning robotics, sustainable design, computational physics, and advanced manufacturing. Each paper reflects our commitment to bridging academic rigor with industrial application.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us" className="bg-[#008ba3] text-white px-8 py-4 font-bold rounded-full uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(0,188,212,0.3)] hover:-translate-y-1 transition-all duration-300">
                Collaborate With Us
              </Link>
              <Link href="/research/blogs-articles-news" className="bg-white/60 backdrop-blur-md border border-slate-200 text-slate-800 px-8 py-4 font-bold rounded-full uppercase tracking-widest hover:bg-white hover:border-[#008ba3]/30 hover:-translate-y-1 transition-all duration-300">
                Read Blog
              </Link>
            </div>
          </SlideInLeft>

          <SlideInRight className="relative group lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#008ba3]/20 to-transparent rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative w-full h-[350px] lg:h-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl z-10">
              <Image src="/assets/research/papers-hero.png" alt="Research Papers" fill className="object-cover transition-transform duration-[10s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 border-y border-black/5 bg-white/40 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-[#008ba3] mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. CATEGORY FILTER (visual only — CMS will power this)
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 pt-24 pb-8 px-6 max-w-[1200px] mx-auto">
        <FadeInUp className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight mb-4">
            Browse Publications
          </h2>
          <div className="w-20 h-1.5 bg-[#008ba3] mx-auto rounded-full mb-8"></div>
        </FadeInUp>

        <FadeInUp>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat, i) => (
              <button
                key={i}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  i === 0
                    ? 'bg-[#008ba3] text-white border-[#008ba3] shadow-[0_4px_15px_rgba(0,139,163,0.3)]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#008ba3]/40 hover:text-[#008ba3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeInUp>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. PAPERS LIST
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 pb-24 px-6 max-w-[1200px] mx-auto">
        <StaggerContainer className="space-y-6">
          {PAPERS.map((paper) => (
            <StaggerItem key={paper.id}>
              <article className="bg-white rounded-[2rem] border border-black/5 p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,139,163,0.08)] transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  
                  {/* Left: Number badge */}
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#008ba3]/10 flex items-center justify-center border border-[#008ba3]/10 group-hover:bg-[#008ba3]/20 transition-colors">
                    <span className="text-lg font-black text-[#008ba3]">{String(paper.id).padStart(2, '0')}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        paper.category === 'Patent' 
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-[#008ba3]/10 text-[#008ba3] border border-[#008ba3]/15'
                      }`}>
                        {paper.category}
                      </span>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        paper.status === 'Published' || paper.status === 'Granted'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-orange-50 text-orange-700 border border-orange-200'
                      }`}>
                        {paper.status}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">{paper.year}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#008ba3] transition-colors leading-snug">
                      {paper.title}
                    </h3>

                    <p className="text-slate-500 font-medium text-sm mb-4">
                      {paper.authors.join(', ')} &mdash; <span className="italic">{paper.journal}</span>
                    </p>

                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-2">
                      {paper.abstract}
                    </p>

                    <div className="flex items-center gap-4">
                      <a href={paper.doi} className="inline-flex items-center gap-2 text-[#008ba3] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                        Read Paper
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. CTA SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 pb-32 max-w-[1200px] mx-auto">
        <FadeInUp>
          <div className="bg-white/80 backdrop-blur-3xl border border-black/5 shadow-[0_30px_80px_rgba(0,0,0,0.05)] rounded-[3rem] p-16 md:p-24 relative overflow-hidden group text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#008ba3]/5 rounded-full blur-[80px] group-hover:bg-[#008ba3]/10 transition-colors duration-700 pointer-events-none"></div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 mb-6 tracking-tight relative z-10">
              Interested in <span className="bg-gradient-to-r from-[#008ba3] to-[#00bcd4] bg-clip-text text-transparent">Research Collaboration</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 relative z-10 font-medium">
              We are always looking for academic and industry partners to advance the boundaries of engineering research.
            </p>
            <Link href="/contact-us" className="relative z-10 bg-slate-900 text-white px-10 py-5 font-bold text-lg rounded-full uppercase tracking-widest hover:bg-[#008ba3] hover:shadow-[0_10px_30px_rgba(0,188,212,0.3)] hover:-translate-y-1 transition-all duration-300 inline-block">
              Get In Touch
            </Link>
          </div>
        </FadeInUp>
      </section>

    </div>
  );
}
