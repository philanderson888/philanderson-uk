import { KnowledgeSubject } from '../types/knowledge';
import { astronomy } from './subjects/astronomy';
import { biology } from './subjects/biology';
import { chemistry } from './subjects/chemistry';
import { mathematics } from './subjects/mathematics';
import { people } from './subjects/people';
import { economics } from './subjects/economics';

export const knowledgeBase: KnowledgeSubject[] = [
  astronomy,
  biology,
  chemistry,
  mathematics,
  people,
  economics
];