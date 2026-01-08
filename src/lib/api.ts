/**
 * API Client for fetching SuperNewsCards from WallNews backend
 */

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';

export interface Source {
  name: string;
  url: string;
  title?: string;
  description?: string;
}

export interface RootsCheck {
  status: 'verified' | 'partial' | 'unverified';
  icon: string;
  message: string;
  confidence: string;
}

export interface Compliance {
  score: number;
  isValid: boolean;
  details: {
    hasCitations: boolean;
    hasConclusion: boolean;
    noForbiddenAdjectives: boolean;
    summaryNoCitations: boolean;
    wallbotHasCitations: boolean;
    hasFacts: boolean;
    hasDivergences: boolean;
    hasWallbotAnalysis: boolean;
    hasPerspectives: boolean;
  };
}

export interface SuperNewsCard {
  id: string;
  title: string;
  summary: string;
  description: string;
  url: string;
  sources: Source[];
  sourceCount: number;
  category: string;
  publishedAt: string;
  isSuperNewsCard: boolean;
  aiSynthesized: boolean;
  body_cited: string;
  citationsMap: Record<string, Source>;
  facts: string[];
  divergences: string[];
  uncertainties: string[];
  perspectives: {
    main: string;
    alternative: string;
  };
  geoZones: string[];
  wallbotAnalysis: string;
  rootsCheck: RootsCheck | string;
  compliance: Compliance;
  who?: {
    people: string[];
    organizations: string[];
    countries: string[];
  };
  what?: string;
  when?: {
    eventDate: string;
    isFresh: boolean;
    timeframe: string;
  };
  why?: {
    context: string;
    rootsCheck: string;
    confidence: string;
  };
}

export interface SuperCardsResponse {
  success: boolean;
  count: number;
  superCards: SuperNewsCard[];
}

/**
 * Fetch all SuperNewsCards from the backend
 */
export async function getSuperNewsCards(): Promise<SuperNewsCard[]> {
  try {
    const response = await fetch(`${BACKEND_URL}/api/stream/supercards`, {
      cache: 'no-store', // Always get fresh data
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data: SuperCardsResponse = await response.json();
    
    if (data.success && data.superCards) {
      return data.superCards;
    }
    
    return [];
  } catch (error) {
    console.error('Failed to fetch SuperNewsCards:', error);
    return [];
  }
}

/**
 * Check if backend is ready
 */
export async function isBackendReady(): Promise<boolean> {
  try {
    const response = await fetch(`${BACKEND_URL}/api/health/ready`, {
      cache: 'no-store',
    });
    const data = await response.json();
    return data.ready === true;
  } catch {
    return false;
  }
}
