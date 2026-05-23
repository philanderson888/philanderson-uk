import { KnowledgeSubject } from '../../types/knowledge';

export const people: KnowledgeSubject = {
  id: 'people',
  name: 'Famous People',
  description: 'Notable individuals who made significant contributions to science and other fields',
  icon: 'Users',
  facts: [
    {
      id: 'ppl-001',
      term: 'John Dalton',
      definition: 'Proposed in the 1800s that atoms were solid spheres, laying the foundation for modern atomic theory',
      topic: 'Chemistry',
      moreInfo: {
        text: 'Dalton\'s atomic theory was revolutionary for its time, suggesting that all matter is composed of indivisible particles called atoms. His work laid the groundwork for modern chemistry and our understanding of atomic structure.',
        links: ['https://www.google.com/search?q=john+dalton+atomic+theory']
      }
    },
    {
      id: 'ppl-002',
      term: 'J.J. Thomson',
      definition: 'Discovered electrons in 1897, proving that atoms were not indivisible but contained smaller particles',
      topic: 'Physics',
      moreInfo: {
        text: 'Thomson\'s discovery of electrons through cathode ray experiments revolutionized our understanding of atomic structure. He proposed the "plum pudding" model of the atom, where electrons were embedded in a positively charged sphere.',
        links: ['https://www.google.com/search?q=jj+thomson+electron+discovery']
      }
    },
    {
      id: 'ppl-003',
      term: 'Ernest Rutherford',
      definition: 'Conducted the gold foil experiment in 1909, firing alpha particles at atoms and discovering the nuclear model of the atom',
      topic: 'Physics',
      moreInfo: {
        text: 'Rutherford\'s famous gold foil experiment showed that atoms were mostly empty space with a dense, positively charged nucleus at the center. This disproved Thomson\'s plum pudding model and led to the nuclear model of the atom.',
        links: ['https://www.google.com/search?q=rutherford+gold+foil+experiment']
      }
    },
    {
      id: 'ppl-004',
      term: 'Niels Bohr',
      definition: 'Proposed the electron shell model of the atom, explaining how electrons orbit the nucleus in specific energy levels',
      topic: 'Physics',
      moreInfo: {
        text: 'Bohr\'s model introduced the concept of electron shells or energy levels, explaining atomic spectra and chemical bonding. While later refined by quantum mechanics, his model remains influential in explaining basic atomic structure.',
        links: ['https://www.google.com/search?q=bohr+model+atom']
      }
    },
    {
      id: 'ppl-005',
      term: 'Dmitri Mendeleev',
      definition: 'Created the periodic table around 1869, organizing elements by atomic weight and properties',
      topic: 'Chemistry',
      moreInfo: {
        text: 'Mendeleev\'s periodic table was revolutionary because it not only organized known elements but predicted the properties of elements yet to be discovered. His arrangement by atomic weight and chemical properties revealed periodic patterns in element characteristics.',
        links: ['https://www.google.com/search?q=mendeleev+periodic+table']
      }
    }
  ]
};