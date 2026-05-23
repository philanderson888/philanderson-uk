import { KnowledgeSubject } from '../../types/knowledge';

export const astronomy: KnowledgeSubject = {
  id: 'astronomy',
  name: 'Astronomy',
  description: 'Knowledge about celestial objects, space, and the physical universe',
  icon: 'Star',
  facts: [
    {
      id: 'ast-001',
      term: 'Light Year',
      definition: 'The distance light travels in one year, approximately 9.46 trillion kilometers',
      topic: 'Astronomical Measurements',
      moreInfo: {
        text: 'Light years are used to measure the vast distances between celestial objects in space. One light year equals about 9.46 trillion kilometers or 5.88 trillion miles.',
        links: ['https://www.google.com/search?q=light+year+astronomy']
      }
    },
    {
      id: 'ast-002',
      term: 'Red Giant',
      definition: 'A large, cool star in a late phase of stellar evolution',
      topic: 'Stellar Evolution',
      moreInfo: {
        text: 'Red giants are stars that have depleted their core hydrogen and expanded significantly. Our Sun will become a red giant in about 5 billion years.',
        images: ['https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700']
      }
    },
    {
      id: 'ast-003',
      term: 'Black Hole',
      definition: 'A region of spacetime where gravity is so strong that nothing, not even light, can escape from it',
      topic: 'Cosmic Phenomena',
      moreInfo: {
        text: 'Black holes form when massive stars die and collapse under their own gravity. The point of no return around a black hole is called the event horizon.',
        images: ['https://images.unsplash.com/photo-1462331940025-496dfbfc7564'],
        links: ['https://www.google.com/search?q=black+hole+astronomy']
      }
    },
    {
      id: 'ast-004',
      term: 'Nebula',
      definition: 'A giant cloud of dust and gas in space, often serving as a birthplace for new stars',
      topic: 'Stellar Formation',
      moreInfo: {
        text: 'Nebulae come in many forms: emission nebulae glow with their own light, while reflection nebulae shine by reflecting light from nearby stars.',
        images: ['https://images.unsplash.com/photo-1543722530-d2c3201371e7']
      }
    },
    {
      id: 'ast-005',
      term: 'Parsec',
      definition: 'A unit of distance equal to about 3.26 light-years or 31 trillion kilometers',
      topic: 'Astronomical Measurements',
      moreInfo: {
        text: 'The parsec is derived from the parallax angle of one arcsecond. It\'s commonly used by astronomers to measure galactic and intergalactic distances.',
        links: ['https://www.google.com/search?q=parsec+unit']
      }
    },
    {
      id: 'ast-006',
      term: 'Supernova',
      definition: 'A powerful and luminous stellar explosion that occurs at the end of a star\'s life',
      topic: 'Stellar Evolution',
      moreInfo: {
        text: 'Supernovae are among the most energetic events in the universe. They play a crucial role in spreading heavy elements throughout space.',
        images: ['https://images.unsplash.com/photo-1465101162946-4377e57745c3']
      }
    },
    {
      id: 'ast-007',
      term: 'Pulsar',
      definition: 'A rapidly rotating neutron star that emits regular pulses of radiation',
      topic: 'Stellar Remnants',
      moreInfo: {
        text: 'Pulsars are incredibly dense objects that spin hundreds of times per second, emitting beams of radiation that we detect as regular pulses.',
        links: ['https://www.google.com/search?q=pulsar+astronomy']
      }
    },
    {
      id: 'ast-008',
      term: 'Dark Matter',
      definition: 'A hypothetical form of matter that accounts for approximately 85% of the matter in the universe',
      topic: 'Cosmology',
      moreInfo: {
        text: 'Dark matter doesn\'t interact with electromagnetic radiation, such as light, but makes its presence known through gravitational effects on visible matter.',
        images: ['https://images.unsplash.com/photo-1462331321792-cc44368b8894']
      }
    }
  ]
};