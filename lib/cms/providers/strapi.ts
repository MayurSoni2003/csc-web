/**
 * Strapi CMS Adapter
 *
 * Implements the CMSProvider interface for Strapi v5.
 * All Strapi-specific logic (response shapes, field mapping, media URLs)
 * is contained within this file. Swap this file to swap CMS.
 */

import { CMSProvider, ResearchPaper } from '../types';

// ── Strapi-specific response types ──────────────────────────

interface StrapiMediaFile {
  url: string;
  name: string;
  mime: string;
}

interface StrapiResearchPaper {
  id: number;
  documentId: string;
  title: string;
  paper_id: string | null;
  field: string | null;
  paper_status: string | null;
  year: number | null;
  authors: string | null;
  summary: string | null;
  paper_link: string | null;
  paper_pdf: StrapiMediaFile | null;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: StrapiPagination;
  };
}

// ── Provider Implementation ─────────────────────────────────

export class StrapiProvider implements CMSProvider {
  private readonly baseUrl: string;
  private readonly token: string;

  constructor() {
    this.baseUrl = process.env.STRAPI_API_URL || '';
    this.token = process.env.STRAPI_API_TOKEN || '';

    if (!this.baseUrl) {
      console.warn('[CMS:Strapi] STRAPI_API_URL is not configured');
    }
  }

  /**
   * Fetch all research papers from Strapi.
   * Uses `populate=*` to include media relations (paper_pdf).
   * Requests up to 100 items per page (adjust if more are needed).
   */
  async getResearchPapers(): Promise<ResearchPaper[]> {
    try {
      const url = new URL('/api/research-papers', this.baseUrl);
      url.searchParams.set('populate', '*');
      url.searchParams.set('pagination[pageSize]', '100');
      url.searchParams.set('sort', 'year:desc');

      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (this.token) {
        headers['Authorization'] = `Bearer ${this.token}`;
      }

      const res = await fetch(url.toString(), {
        headers,
        next: { revalidate: 60 },
      });

      if (!res.ok) {
        throw new Error(`Strapi responded with ${res.status} ${res.statusText}`);
      }

      const json: StrapiResponse<StrapiResearchPaper> = await res.json();

      return json.data.map((item) => this.mapToResearchPaper(item));
    } catch (error) {
      console.error('[CMS:Strapi] Failed to fetch research papers:', error);
      return [];
    }
  }

  // ── Private helpers ─────────────────────────────────────────

  /**
   * Maps a Strapi research-paper entry to the canonical ResearchPaper type.
   * All Strapi-specific field names and transformations live here.
   */
  private mapToResearchPaper(item: StrapiResearchPaper): ResearchPaper {
    return {
      id: item.documentId || String(item.id),
      title: item.title || 'Untitled',
      authors: this.parseAuthors(item.authors),
      summary: item.summary,
      field: item.field,
      year: item.year,
      status: item.paper_status,
      paperLink: item.paper_link,
      pdfUrl: this.resolveMediaUrl(item.paper_pdf),
    };
  }

  /**
   * Splits a comma-separated author string into an array.
   * Handles null/empty values gracefully.
   */
  private parseAuthors(raw: string | null): string[] {
    if (!raw) return [];
    return raw
      .split(',')
      .map((name) => name.trim())
      .filter(Boolean);
  }

  /**
   * Constructs a full media URL from a Strapi media object.
   * Strapi may return relative URLs — this ensures they're absolute.
   */
  private resolveMediaUrl(media: StrapiMediaFile | null): string | null {
    if (!media?.url) return null;

    // If the URL is already absolute, return as-is
    if (media.url.startsWith('http')) return media.url;

    // Otherwise, prefix with the Strapi base URL
    return `${this.baseUrl}${media.url}`;
  }
}
