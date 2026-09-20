export interface Article {
  slug: string;
  title: string;
  cluster: 'Industrial / RFQ' | 'Tender Monitoring' | 'Automation Architecture' | 'Data & Python' | 'Teaching & Systems Literacy';
  date: string;
  readTime: string;
  summary: string;
  targetServiceUrl: string;
  targetServiceLabel: string;
  content: string[];
}
