export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  primaryImage?: string;
  imageUrls?: string[];
  features?: string[];
  tags: string[];
  link?: string;
  githubUrl?: string;
  technicalDetails?: {
    architecture?: string[];
    technologies?: string[];
    challenges?: string[];
    solutions?: string[];
  };
  archived?: boolean;
}