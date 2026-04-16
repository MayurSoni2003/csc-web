'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../../components/MotionWrappers';

export default function CadCaePage() {
  const content = {
    title: 'CAD & CAE',
    tagline: 'Digital Product Development',
    overview: 'We provide complete digital product development solutions, from conceptual 3D modeling to advanced engineering simulations. By creating high-fidelity digital twins, we help you validate performance, identify potential failures, and optimize designs before a single physical component is ever manufactured.',
    capabilities: [
      {
        title: 'High-Fidelity 3D Modeling',
        desc: 'Detailed assembly design and complex surfacing using industry-leading CAD platforms.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
      },
      {
        title: 'Finite Element Analysis (FEA)',
        desc: 'Simulating structural stress, vibration, and fatigue to ensure product reliability under operational conditions.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
      },
      {
        title: 'Fluid Dynamics (CFD)',
        desc: 'Computational modeling of liquid and gas flow to optimize aerodynamics, cooling, and pressure drops.',
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
      },
      {
        title: 'Thermal & Motion Simulation',
        desc: 'Analyzing heat distribution and complex multibody dynamics to refine mechanical performance.',
        icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z'
      }
    ],
    applications: [
      'Industrial Machinery Design',
      'Automotive Component Validation',
      'Aerospace structural analysis',
      'Electronics cooling systems',
      'Civil engineering simulations'
    ],
    image: '/assets/solutions/cad.png'
  };

  return (
    <div className="relative bg-[#f9fafb] text-slate-800 min-h-screen pt-[var(--nav-height)] overflow-hidden">
      
      {/* ── Background Gradients ── */}
      <div className="fixed top-[10%] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,188,212,0.15)_0%,transparent_70%)] blur-[100px] z-0 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[-200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,139,163,0.12)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>

      {/* ── 1. Hero Section ── */}
      <section className="relative pt-16 pb-24 px-6 z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInLeft>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#008ba3]/20 shadow-sm text-sm font-bold text-[#008ba3] tracking-widest uppercase mb-6">
              {content.tagline}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-900 leading-[1.1] mb-8">
              {content.title.split('&').map((part, i) => (
                <span key={i}>
                  {i > 0 && <span className="text-[#008ba3]">&</span>}
                  {part}
                </span>
              ))}
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-xl">
              {content.overview}
            </p>
            <div className="flex gap-4">
              <Link href="/contact-us" className="bg-[#008ba3] text-white px-8 py-4 font-bold rounded-full uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(0,188,212,0.3)] hover:-translate-y-1 transition-all duration-300">
                Start Simulation
              </Link>
            </div>
          </SlideInLeft>

          <SlideInRight className="relative aspect-square md:aspect-video lg:aspect-square group lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#008ba3]/20 to-transparent rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl z-10">
              <Image src={content.image} alt={content.title} fill className="object-cover transition-transform duration-[10s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* ── 2. Capabilities Grid ── */}
      <section className="relative z-10 py-24 px-6 bg-white/50 backdrop-blur-md border-y border-black/5">
        <div className="max-w-[1200px] mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight mb-4">Engineering Services</h2>
            <div className="w-20 h-1.5 bg-[#008ba3] mx-auto rounded-full"></div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.capabilities.map((cap, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-10 rounded-[2rem] border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,139,163,0.1)] transition-all duration-300 group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#008ba3]/10 flex items-center justify-center mb-6 border border-[#008ba3]/10 transition-transform group-hover:scale-110">
                    <svg className="w-7 h-7 text-[#008ba3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={cap.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{cap.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{cap.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 3. Applications / Services ── */}
      <section className="relative z-10 py-32 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <SlideInLeft className="lg:col-span-5">
            <h2 className="text-4xl font-extrabold uppercase text-slate-900 tracking-tight leading-tight mb-6">
              Simulation <br/> <span className="text-[#008ba3]">Use Cases</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Our CAD & CAE services empower engineers to test boundaries and optimize designs within a risk-free digital environment, saving time and resources.
            </p>
          </SlideInLeft>

          <SlideInRight className="lg:col-span-7">
            <div className="flex flex-wrap gap-4">
              {content.applications.map((app, i) => (
                <div key={i} className="bg-white px-8 py-5 rounded-3xl border border-black/5 shadow-sm text-lg font-bold text-slate-700 hover:border-[#008ba3]/30 hover:shadow-[0_10px_30px_rgba(0,139,163,0.08)] transition-all cursor-default group">
                  <span className="text-[#008ba3] mr-3 group-hover:animate-pulse">●</span>
                  {app}
                </div>
              ))}
            </div>
          </SlideInRight>
        </div>
      </section>

    </div>
  );
}
