export interface LabItem {
  id: string;
  title: string;
  type: 'EXPERIMENT' | 'PROTOTYPE' | 'VISUAL BUILD';
  date: string;
  summary: string;
  tech: string[];
  notes: string;
}

export const LAB_ITEMS: LabItem[] = [
  {
    id: 'lab-01',
    title: 'Automated Audio-to-Visual Subtitle Alignment',
    type: 'EXPERIMENT',
    date: 'February 2026',
    summary: 'Testing sub-frame alignment of generated SRT subtitles against speaker pauses in high-noise recordings.',
    tech: ['Python', 'faster-whisper', 'FFmpeg', 'NumPy'],
    notes: 'Investigating how speech energy decay curves can refine punctuation placement in automated transcriptions.'
  },
  {
    id: 'lab-02',
    title: 'Headless Browser DOM-Diffing for Tender Notice Feeds',
    type: 'PROTOTYPE',
    date: 'January 2026',
    summary: 'Evaluating DOM tree hashing against static regex scraping on portals with frequent layout variations.',
    tech: ['Playwright', 'Python', 'lxml', 'PostgreSQL'],
    notes: 'Tests showed structural hash diffing detected newly added tables with 98.4% accuracy even when class names mutated.'
  },
  {
    id: 'lab-03',
    title: 'Constrained JSON Schema Extraction from Scanned PDF Invoices',
    type: 'EXPERIMENT',
    date: 'January 2026',
    summary: 'Benchmarking latency and token efficiency of open models when extracting multi-tier line item tables.',
    tech: ['Pydantic', 'Ollama', 'Tesseract OCR', 'Python'],
    notes: 'Strict grammar-constrained generation prevented JSON hallucination across 150 test invoice scans.'
  },
  {
    id: 'lab-04',
    title: 'Minimalist Industrial Specification Layout Engine',
    type: 'VISUAL BUILD',
    date: 'December 2025',
    summary: 'CSS print stylesheet generator for automated production of clean, ink-friendly engineering spec sheets.',
    tech: ['CSS Paged Media', 'HTML5', 'TypeScript'],
    notes: 'Designed to generate verifiable physical-paper style dossiers from dynamic JSON datasets.'
  }
];
