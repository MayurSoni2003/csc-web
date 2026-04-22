'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../../components/MotionWrappers';

/* ──────────────────────────────────────────────────────────────
   Static placeholder data — will be replaced by Strapi CMS fetch
   Each object mirrors a typical CMS "Blog Post" content-type
   ────────────────────────────────────────────────────────────── */
const FEATURED_POST = {
  id: 1,
  title: 'How Origami Principles are Revolutionizing Modern Robotics',
  excerpt: 'Discover how ancient folding techniques are being applied to cutting-edge robotic systems, enabling lighter, more precise, and maintenance-free mechanisms for industries ranging from healthcare to space exploration.',
  author: 'Dr. A. Kumar',
  date: 'March 15, 2025',
  readTime: '8 min read',
  category: 'Robotics',
  image: '/assets/research/blogs-hero.png',
  slug: '#',
};

const BLOG_POSTS = [
  {
    id: 2,
    title: 'The Future of Sustainable Product Design: A Physics-First Approach',
    excerpt: 'Why starting with physics principles leads to drastically better sustainable products—and how lifecycle analysis is changing the game.',
    author: 'V. Patel',
    date: 'February 28, 2025',
    readTime: '6 min read',
    category: 'Sustainability',
    slug: '#',
  },
  {
    id: 3,
    title: 'FEA vs CFD: Choosing the Right Simulation for Your Project',
    excerpt: 'A practical guide to understanding when Finite Element Analysis or Computational Fluid Dynamics is the right tool for engineering validation.',
    author: 'R. Joshi',
    date: 'February 10, 2025',
    readTime: '5 min read',
    category: 'CAD & CAE',
    slug: '#',
  },
  {
    id: 4,
    title: '5 Myths About 3D Printing in Industrial Prototyping',
    excerpt: 'Separating fact from fiction about additive manufacturing capabilities, material strengths, and production viability in modern engineering.',
    author: 'P. Soni',
    date: 'January 22, 2025',
    readTime: '4 min read',
    category: '3D Printing',
    slug: '#',
  },
  {
    id: 5,
    title: 'Building Digital Twins: From Concept to Predictive Maintenance',
    excerpt: 'An inside look at how we create physics-informed digital twins that predict structural failures before they happen.',
    author: 'K. Desai',
    date: 'January 5, 2025',
    readTime: '7 min read',
    category: 'AI & Simulation',
    slug: '#',
  },
  {
    id: 6,
    title: 'Compliant Mechanisms: Engineering Without Bearings',
    excerpt: 'How flexure-based systems are enabling a new era of frictionless, maintenance-free precision machinery across multiple industries.',
    author: 'S. Mehta',
    date: 'December 18, 2024',
    readTime: '6 min read',
    category: 'Robotics',
    slug: '#',
  },
  {
    id: 7,
    title: 'The Correct Steps Wins National Innovation Award 2024',
    excerpt: 'Our team was recognized for breakthrough contributions in origami-inspired robotics and sustainable engineering design at the National Innovation Summit.',
    author: 'Team CSC',
    date: 'December 1, 2024',
    readTime: '3 min read',
    category: 'News',
    slug: '#',
  },
];

const CATEGORIES = ['All', 'Robotics', 'Sustainability', 'CAD & CAE', '3D Printing', 'AI & Simulation', 'News'];

const getCategoryColor = (cat: string) => {
  const colors: Record<string, string> = {
    'Robotics': 'bg-violet-50 text-violet-700 border-violet-200',
    'Sustainability': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'CAD & CAE': 'bg-blue-50 text-blue-700 border-blue-200',
    '3D Printing': 'bg-orange-50 text-orange-700 border-orange-200',
    'AI & Simulation': 'bg-cyan-50 text-cyan-700 border-cyan-200',
    'News': 'bg-amber-50 text-amber-700 border-amber-200',
  };
  return colors[cat] || 'bg-[#008ba3]/10 text-[#008ba3] border-[#008ba3]/15';
};

export default function BlogsArticlesPage() {
  return (
    <div className="relative bg-[#f9fafb] text-slate-800 min-h-screen overflow-hidden">

      {/* ── Background Gradients ── */}
      <div className="fixed top-[10%] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,188,212,0.15)_0%,transparent_70%)] blur-[100px] z-0 pointer-events-none"></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,139,163,0.10)_0%,transparent_70%)] blur-[140px] z-0 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[-200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,188,212,0.12)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>

      {/* ══════════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative pt-[160px] pb-24 px-6 z-10 text-center max-w-[1000px] mx-auto">
        <FadeInUp>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#008ba3]/20 shadow-sm text-sm font-bold text-[#008ba3] tracking-widest uppercase mb-6">
            Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-900 leading-[1.1] mb-8">
            Blogs, Articles <span className="bg-gradient-to-r from-[#008ba3] to-[#00bcd4] bg-clip-text text-transparent">& News</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Insights, technical deep-dives, and the latest news from the engineering world. Explore our thoughts on robotics, design, simulation, and innovation.
          </p>
        </FadeInUp>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. FEATURED POST
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 pb-24 max-w-[1200px] mx-auto">
        <FadeInUp>
          <a href={FEATURED_POST.slug} className="group block bg-white rounded-[2.5rem] overflow-hidden border border-black/5 shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_70px_rgba(0,139,163,0.1)] transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-[300px] lg:h-[450px] overflow-hidden">
                <Image
                  src={FEATURED_POST.image}
                  alt={FEATURED_POST.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[8s]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-white/20"></div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-[#008ba3] text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-5 ${getCategoryColor(FEATURED_POST.category)}`}>
                  {FEATURED_POST.category}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-5 group-hover:text-[#008ba3] transition-colors">
                  {FEATURED_POST.title}
                </h2>
                <p className="text-slate-600 leading-relaxed font-medium mb-8 line-clamp-3">
                  {FEATURED_POST.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
                  <span>{FEATURED_POST.author}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{FEATURED_POST.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{FEATURED_POST.readTime}</span>
                </div>
              </div>
            </div>
          </a>
        </FadeInUp>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. CATEGORY FILTER
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 pb-12 max-w-[1200px] mx-auto">
        <FadeInUp>
          <div className="flex flex-wrap justify-center gap-3">
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
          4. BLOG GRID
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 pb-24 px-6 max-w-[1200px] mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <StaggerItem key={post.id}>
              <a href={post.slug} className="group block h-full">
                <article className="bg-white rounded-[2rem] border border-black/5 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,139,163,0.08)] transition-all duration-300 h-full flex flex-col hover:-translate-y-2">
                  
                  {/* Category + Meta */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#008ba3] transition-colors flex-1">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-500 leading-relaxed text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-black/5 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#008ba3] to-[#00bcd4] flex items-center justify-center text-white text-xs font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700">{post.author}</p>
                        <p className="text-xs text-slate-400">{post.date}</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-slate-300 group-hover:text-[#008ba3] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </article>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. NEWSLETTER + CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 pb-32 max-w-[1200px] mx-auto">
        <FadeInUp>
          <div className="bg-gradient-to-br from-[#06334f] to-[#008ba3] rounded-[3rem] p-12 md:p-20 relative overflow-hidden group text-center">
            {/* Decorative elements */}
            <div className="absolute top-[-60px] right-[-60px] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-[-40px] left-[-40px] w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-5 tracking-tight">
                Stay <span className="text-[#80e5f2]">Updated</span>
              </h2>
              <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 font-medium">
                Subscribe to our newsletter to receive the latest engineering insights, research updates, and industry trends directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/15 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all backdrop-blur-md"
                />
                <button className="bg-white text-[#008ba3] px-8 py-4 font-bold rounded-full uppercase tracking-widest hover:bg-[#80e5f2] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

    </div>
  );
}
