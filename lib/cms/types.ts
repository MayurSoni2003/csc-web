/**
 * CMS-Agnostic Domain Types
 *
 * These types define the canonical data shapes used throughout the application.
 * They are intentionally decoupled from any specific CMS vendor.
 *
 * ┌─────────────────────────────────┐
 * │  To swap CMS providers:         │
 * │  1. Create a new adapter in     │
 * │     lib/cms/providers/          │
 * │  2. Implement CMSProvider       │
 * │  3. Update the factory in       │
 * │     lib/cms/index.ts            │
 * │  4. Update .env                 │
 * │  Pages & components stay as-is. │
 * └─────────────────────────────────┘
 */

// ── Research Paper ───────────────────────────────────────────

export interface ResearchPaper {
  /** Unique identifier (CMS-agnostic) */
  id: string;

  /** Paper title */
  title: string;

  /** List of author names */
  authors: string[];

  /** Abstract / summary */
  summary: string | null;

  /** Research field / category (e.g. "Robotics", "Patent") */
  field: string | null;

  /** Publication year */
  year: number | null;

  /** Publication status (e.g. "Published", "Under Review", "Granted") */
  status: string | null;

  /** External link to the paper (DOI, ResearchGate, etc.) */
  paperLink: string | null;

  /** Direct URL to the uploaded PDF, if available */
  pdfUrl: string | null;
}

// ── Derived Stats ────────────────────────────────────────────

export interface CMSStats {
  totalPapers: number;
  publishedPapers: number;
  patentsFiled: number;
  activeYears: string;
}

// ── CMS Provider Interface ──────────────────────────────────

export interface CMSProvider {
  /**
   * Fetch all research papers from the CMS.
   * Implementations should handle errors gracefully and return
   * an empty array on failure.
   */
  getResearchPapers(): Promise<ResearchPaper[]>;
}
