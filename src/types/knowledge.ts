export interface FactualPair {
  id: string;
  term: string;
  definition: string;
  topic?: string;
  moreInfo?: {
    text: string;
    images?: string[];
    links?: string[];
  };
}

export interface KnowledgeSubject {
  id: string;
  name: string;
  description: string;
  icon: string;
  facts: FactualPair[];
}