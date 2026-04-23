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

import type { CMSProvider, ResearchPaper, CMSStats } from './types';
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

// ── Public API ───────────────────────────────────────────────

/**
 * Fetch all research papers from the configured CMS.
 */
export async function getResearchPapers(): Promise<ResearchPaper[]> {
  return cms.getResearchPapers();
}

/**
 * Derive display stats from a list of research papers.
 * Stats are computed client-side from already-fetched data,
 * so this works regardless of which CMS is behind the scenes.
 */
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

  // Derive active research years from the year range
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

// ── Re-exports ───────────────────────────────────────────────

export type { ResearchPaper, CMSStats } from './types';
