/**
 * CMS Service — Public API
 *
 * This module is the single entry point for all CMS operations.
 * Pages and components import from here; they never touch providers directly.
 *
 * To add a new CMS provider:
 *   1. Create lib/cms/providers/<name>.ts implementing CMSProvider
 *   2. Add a case to createProvider() below
 *   3. Set CMS_PROVIDER=<name> in .env.local
 */

import type { CMSProvider, ResearchPaper, CMSStats, BlogPost } from './types';
import { StrapiProvider } from './providers/strapi';

// ── Factory ──────────────────────────────────────────────────

function createProvider(): CMSProvider {
  const provider = process.env.CMS_PROVIDER || 'strapi';

  switch (provider) {
    case 'strapi':
      return new StrapiProvider();

    // ── Future providers ──
    // case 'contentful':
    //   return new ContentfulProvider();
    // case 'sanity':
    //   return new SanityProvider();

    default:
      console.warn(
        `[CMS] Unknown provider "${provider}", falling back to Strapi`
      );
      return new StrapiProvider();
  }
}

const cms = createProvider();

// ── Public API — Research Papers ────────────────────────────

export async function getResearchPapers(): Promise<ResearchPaper[]> {
  return cms.getResearchPapers();
}

export function deriveStats(papers: ResearchPaper[]): CMSStats {
  const patentFields = new Set(['patent']);

  const publishedPapers = papers.filter(
    (p) =>
      p.status?.toLowerCase() === 'published' &&
      !patentFields.has(p.field?.toLowerCase() ?? '')
  ).length;

  const patentsFiled = papers.filter((p) =>
    patentFields.has(p.field?.toLowerCase() ?? '')
  ).length;

  const years = papers
    .map((p) => p.year)
    .filter((y): y is number => y !== null)
    .sort((a, b) => a - b);

  let activeYears = '—';
  if (years.length > 0) {
    const min = years[0];
    const max = years[years.length - 1];
    activeYears =
      min === max ? String(min) : `${min}–${String(max).slice(2)}`;
  }

  return {
    totalPapers: papers.length,
    publishedPapers,
    patentsFiled,
    activeYears,
  };
}

// ── Public API — Blog Posts ─────────────────────────────────

export async function getBlogPosts(): Promise<BlogPost[]> {
  return cms.getBlogPosts();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return cms.getBlogPostBySlug(slug);
}

// ── Re-exports ───────────────────────────────────────────────

export type { ResearchPaper, CMSStats, BlogPost } from './types';
