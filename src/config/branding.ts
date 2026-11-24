// ============================================================
// src/config/branding.ts
// Centralized Rebranded Configuration: AiroShield 2.0 AI
// Next-Generation Atmospheric Defense & Safe Corridor Intelligence Platform
// ============================================================

export const AIROSHIELD_2_BRANDING = {
  productName: 'AiroShield 2.0 AI',
  productNameShort: 'AiroShield 2.0',
  suiteName: 'AiroShield 2.0 Atmospheric Defense & Safe Corridor Intelligence',
  tagline: 'Next-Generation Atmospheric Intelligence • Hyperlocal Safe Passage & Neural Community Defense',
  companyName: 'AiroShield Technologies Inc.',
  version: '2.0.0 Enterprise & Community Sentinel Edition',
  buildTag: '2026.11-AIROSHIELD-V2',
  supportEmail: 'support@airoshield.ai',
  portalName: 'AiroShield 2.0 Atmospheric Defense & Clean Corridor Portal',

  // Core Engine
  engineName: 'AiroShield 2.0 Neural Engine',
  engineBadge: 'Powered by AiroShield 2.0 AI Neural Engine',

  // Compliance & Standards badges
  standards: [
    { label: 'WCAG 2.2 AA', tooltip: 'Full accessibility & screen-reader twin representation' },
    { label: 'EPA Standardized', tooltip: 'Calibrated air quality sub-indexes & breakpoints' },
    { label: 'Community Powered', tooltip: 'Hyperlocal clean route sharing & neighborhood defense pledges' },
    { label: 'Gemini 3.1 AI', tooltip: 'Server-side neural routine optimization & advisory' },
  ],

  // Theme primary palettes - High-performance, clean air & accessible
  colors: {
    primary: '#0284c7', // Sky cyan / atmospheric shield
    primaryHover: '#0369a1',
    secondary: '#059669', // Emerald clean air
    accent: '#0d9488', // Teal safe passage
    backgroundLight: '#fafaf9', // Warm stone/paper canvas
    backgroundDark: '#0c0f14', // Deep space obsidian
    surfaceLight: '#ffffff',
    surfaceDark: '#141a24',
    textPrimaryLight: '#1c1917',
    textPrimaryDark: '#f8fafc',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
} as const;

export const AIROSHIELD_BRANDING = AIROSHIELD_2_BRANDING;
export const BRANDING = AIROSHIELD_2_BRANDING;
export const AEROPULSE_BRANDING = AIROSHIELD_2_BRANDING;

export type BrandingConfig = typeof AIROSHIELD_2_BRANDING;
