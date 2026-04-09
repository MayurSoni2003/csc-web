'use client';

import Image from 'next/image';
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionWrappers';

import sustainableImg from './assets/sustainable.png';
import origamiImg from './assets/origami.png';
import physicsImg from './assets/physics.png';
import cadImg from './assets/cad.png';
import printImg from './assets/3dprint.png';

const SOLUTIONS = [
  {
    id: 'sustainable-products',
    title: 'Sustainable & Renewable Products',
    overview: 'We design and develop environmentally responsible products focusing on efficiency, durability, and minimal environmental impact.',
    capabilities: [
      'Sustainable material selection',
      'Energy-efficient product design',
      'Lifecycle analysis and optimization',
      'Waste reduction strategies',
    ],
    applications: [
      'Eco-friendly consumer products',
      'Renewable energy systems',
      'Smart energy-efficient devices',
    ],
    image: sustainableImg,
  },
  {
    id: 'origami-robotics',
    title: 'Origami & Flexure in Robotics',
    overview: 'We leverage origami principles and flexure mechanisms to develop highly efficient and lightweight robotic systems.',
    capabilities: [
      'Reduced mechanical complexity',
      'No friction-based joints',
      'High precision and durability',
    ],
    applications: [
      'Medical robotics',
      'Space deployable structures',
      'Micro-scale engineering systems',
    ],
    image: origamiImg,
  },
  {
    id: 'physics-design',
    title: 'Physics of Design',
    overview: 'Our designs are deeply rooted in engineering physics principles, ensuring optimized performance and structural integrity.',
    capabilities: [
      'Mechanics and force analysis',
      'Motion and kinematics optimization',
      'Material behavior and stress analysis',
    ],
    applications: [],
    image: physicsImg,
  },
  {
    id: 'cad-cae',
    title: 'CAD & CAE (Design & Simulation)',
    overview: 'We provide complete digital product development solutions, from conceptual modeling to advanced simulations.',
    capabilities: [
      '3D modeling and assembly design',
      'Finite Element Analysis (FEA)',
      'Computational Fluid Dynamics (CFD)',
      'Motion and thermal simulations',
    ],
    applications: [],
    image: cadImg,
  },
  {
    id: '3d-printing',
    title: '3D Printing & Prototyping',
    overview: 'We transform digital designs into physical prototypes using advanced additive manufacturing technologies.',
    capabilities: [
      'Rapid prototyping',
      'Functional model development',
      'Design validation',
    ],
    applications: [],
    image: printImg,
  },
];

export default function SolutionsPage() {
  return (
    <div className="app bg-[#f9fafb] text-slate-800 pb-20">
      
      {/* ── Background Shades (Matching Light Theme) ── */}
      <div className="fixed top-[10%] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,188,212,0.25)_0%,transparent_70%)] blur-[100px] z-0 pointer-events-none"></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,139,163,0.20)_0%,transparent_70%)] blur-[140px] z-0 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[-200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,188,212,0.25)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>

      {/* ── Hero ── */}
      <header className="relative pt-[120px] pb-16 flex flex-col items-center justify-center text-center overflow-hidden z-10 px-6">
        <FadeInUp>
          <h2 className="text-[0.9rem] font-bold tracking-[0.2rem] text-[#008ba3] mb-4 uppercase">Capabilities & Expertise</h2>
          <h1 className="text-4xl md:text-5xl lg:text-showcase font-extrabold uppercase tracking-tight mb-6 max-w-4xl bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-transparent leading-tight">
            Our Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-normal max-w-2xl mx-auto">
            From advanced robotic principles to complete digital product development and rapid prototyping, we provide engineering answers that create impact.
          </p>
        </FadeInUp>
      </header>

      {/* ── Solutions Zigzag ── */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 space-y-24">
        {SOLUTIONS.map((solution, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div key={solution.id} id={solution.id} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'md:flex-row-reverse'}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                {isEven ? (
                  <SlideInLeft>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,139,163,0.1)] border border-black/5 group">
                      <Image 
                        src={solution.image} 
                        alt={solution.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </SlideInLeft>
                ) : (
                  <SlideInRight>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,139,163,0.1)] border border-black/5 group">
                      <Image 
                        src={solution.image} 
                        alt={solution.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </SlideInRight>
                )}
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                {isEven ? (
                  <SlideInRight>
                    <SolutionContent solution={solution} idx={idx} />
                  </SlideInRight>
                ) : (
                  <SlideInLeft>
                    <SolutionContent solution={solution} idx={idx} />
                  </SlideInLeft>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CTA ── */}
      {/* <section className="mx-auto px-6 max-w-[1200px] relative z-10 mt-8 text-center py-16">
        
        <FadeInUp>
          <div className="bg-white/70 backdrop-blur-md border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-2xl p-12 md:p-20">
            <h2 className="text-3xl font-extrabold uppercase text-slate-900 mb-4 tracking-tight">Ready to Innovate?</h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-8">
              Discuss your project requirements with our engineering team and discover the correct steps to automation.
            </p>
            <button className="bg-[#008ba3] text-white px-8 py-4 font-bold rounded-full uppercase tracking-wide hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(0,139,163,0.3)] transition-all duration-300">
              Consult An Expert
            </button>
          </div>
        </FadeInUp>
      </section> */}
    </div>
  );
}

function SolutionContent({ solution, idx }: { solution: any, idx: number }) {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#008ba3]/10 text-[#008ba3] font-bold text-lg border border-[#008ba3]/20 mb-2">
        {String(idx + 1).padStart(2, '0')}
      </div>
      <h3 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight leading-tight">
        {solution.title}
      </h3>
      <p className="text-slate-600 text-lg leading-relaxed">
        {solution.overview}
      </p>

      {solution.capabilities.length > 0 && (
        <div className="pt-4 border-t border-black/5">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#008ba3] mb-4">Key Capabilities / Advantages</h4>
          <ul className="space-y-2">
            {solution.capabilities.map((cap: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#008ba3] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700 font-medium">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {solution.applications.length > 0 && (
        <div className="pt-4 border-t border-black/5">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#008ba3] mb-4">Applications / Services</h4>
          <div className="flex flex-wrap gap-2">
            {solution.applications.map((app: string, i: number) => (
              <span key={i} className="bg-white border border-black/10 text-slate-600 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">
                {app}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}