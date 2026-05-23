import { KnowledgeSubject } from '../../types/knowledge';

export const chemistry: KnowledgeSubject = {
  id: 'chemistry',
  name: 'Chemistry',
  description: 'Study of matter, its properties, structure, composition, and the changes it undergoes',
  icon: 'Flask',
  facts: [
    {
      id: 'chem-001',
      term: 'Atom',
      definition: 'The basic unit of matter consisting of a nucleus containing protons and neutrons, surrounded by electrons',
      topic: 'Atomic Structure',
      moreInfo: {
        text: 'Atoms are the fundamental building blocks of all matter. While once thought to be indivisible, we now know they consist of subatomic particles. The number of protons determines the element, while the number of electrons influences chemical behavior and bonding.',
        images: ['https://images.unsplash.com/photo-1532187643603-ba119ca4109e'],
        links: ['https://www.google.com/search?q=atomic+structure+chemistry']
      }
    },
    {
      id: 'chem-002',
      term: 'Molecule',
      definition: 'A group of two or more atoms held together by chemical bonds',
      topic: 'Chemical Bonding',
      moreInfo: {
        text: 'Molecules can range from simple diatomic structures like H2 (hydrogen gas) to complex organic compounds. The type of chemical bonds between atoms determines the molecule\'s properties and behavior.',
        links: ['https://www.google.com/search?q=molecular+structure+chemistry']
      }
    },
    {
      id: 'chem-003',
      term: 'Periodic Table',
      definition: 'A systematic arrangement of chemical elements organized by atomic number and electron configuration',
      topic: 'Elements',
      moreInfo: {
        text: 'The periodic table is organized into periods (rows) and groups (columns). Elements in the same group share similar chemical properties due to their electron configurations. This arrangement helps predict chemical behavior and relationships between elements.',
        images: ['https://images.unsplash.com/photo-1532634993-15f421e42ec0'],
        links: ['https://www.google.com/search?q=periodic+table+of+elements']
      }
    },
    {
      id: 'chem-004',
      term: 'Valence Electrons',
      definition: 'The electrons in the outermost shell of an atom that participate in chemical bonding',
      topic: 'Electronic Structure',
      moreInfo: {
        text: 'Valence electrons determine an atom\'s chemical properties and bonding behavior. Elements in the same group have the same number of valence electrons, which explains their similar chemical properties.',
        links: ['https://www.google.com/search?q=valence+electrons+chemistry']
      }
    },
    {
      id: 'chem-005',
      term: 'Chemical Reaction',
      definition: 'A process where substances (reactants) are converted into different substances (products)',
      topic: 'Reactions',
      moreInfo: {
        text: 'Chemical reactions involve breaking and forming chemical bonds. They are often accompanied by observable changes like color change, gas formation, precipitation, or temperature change. The law of conservation of mass states that mass is neither created nor destroyed in chemical reactions.',
        images: ['https://images.unsplash.com/photo-1532634922-8fe0b757fb13'],
        links: ['https://www.google.com/search?q=chemical+reactions+chemistry']
      }
    },
    {
      id: 'chem-006',
      term: 'Atomic Number',
      definition: 'The number of protons in the nucleus of an atom, which determines the element\'s identity',
      topic: 'Atomic Structure',
      moreInfo: {
        text: 'The atomic number is a fundamental property that defines each element. For example, all carbon atoms have 6 protons, all oxygen atoms have 8 protons. This number appears on the periodic table and is unique to each element.',
        links: ['https://www.google.com/search?q=atomic+number+chemistry']
      }
    },
    {
      id: 'chem-007',
      term: 'Mass Number',
      definition: 'The total number of protons and neutrons in an atom\'s nucleus',
      topic: 'Atomic Structure',
      moreInfo: {
        text: 'The mass number helps identify isotopes of elements. It is calculated by adding the number of protons and neutrons together. For example, carbon-12 has 6 protons and 6 neutrons, giving it a mass number of 12.',
        links: ['https://www.google.com/search?q=mass+number+chemistry']
      }
    },
    {
      id: 'chem-008',
      term: 'Isotope',
      definition: 'Atoms of the same element with the same number of protons but different numbers of neutrons',
      topic: 'Atomic Structure',
      moreInfo: {
        text: 'Isotopes have identical chemical properties but different physical properties due to their different masses. Some isotopes are radioactive, while others are stable. For example, carbon-12, carbon-13, and carbon-14 are all isotopes of carbon.',
        links: ['https://www.google.com/search?q=isotopes+chemistry']
      }
    },
    {
      id: 'chem-009',
      term: 'Covalent Bond',
      definition: 'A chemical bond formed by sharing electrons between atoms',
      topic: 'Chemical Bonding',
      moreInfo: {
        text: 'Covalent bonds typically form between non-metal atoms. The shared electrons create a stable electron configuration for both atoms. Examples include the bonds in water (H2O) and carbon dioxide (CO2).',
        links: ['https://www.google.com/search?q=covalent+bond+chemistry']
      }
    },
    {
      id: 'chem-010',
      term: 'Ionic Bond',
      definition: 'A chemical bond formed by the complete transfer of electrons from one atom to another',
      topic: 'Chemical Bonding',
      moreInfo: {
        text: 'Ionic bonds typically form between metals and non-metals. One atom loses electrons while the other gains them, creating oppositely charged ions that attract each other. Common example is sodium chloride (table salt).',
        links: ['https://www.google.com/search?q=ionic+bond+chemistry']
      }
    },
    {
      id: 'chem-011',
      term: 'Metallic Bond',
      definition: 'A chemical bond formed between metal atoms, where electrons are shared in a "sea of electrons"',
      topic: 'Chemical Bonding',
      moreInfo: {
        text: 'In metallic bonding, the outer electrons of metal atoms become delocalized and move freely through the structure. This explains properties like electrical conductivity and malleability in metals.',
        links: ['https://www.google.com/search?q=metallic+bond+chemistry']
      }
    },
    {
      id: 'chem-012',
      term: 'Bauxite',
      definition: 'The primary ore of aluminum, containing aluminum oxide and other minerals',
      topic: 'Materials',
      moreInfo: {
        text: 'Bauxite is crucial for aluminum production worldwide. It typically contains 30-60% aluminum oxide (Al2O3) along with various impurities. The ore is processed using the Bayer process to extract pure aluminum.',
        links: ['https://www.google.com/search?q=bauxite+ore+chemistry']
      }
    },
    {
      id: 'chem-013',
      term: 'Cryolite',
      definition: 'A rare mineral (Na3AlF6) used in the electrolysis of aluminum oxide',
      topic: 'Materials',
      moreInfo: {
        text: 'Cryolite is essential in aluminum production as it dissolves aluminum oxide, lowering its melting point and making the electrolysis process more efficient. Most cryolite used today is synthetic.',
        links: ['https://www.google.com/search?q=cryolite+chemistry']
      }
    },
    {
      id: 'chem-014',
      term: 'H+ Ion',
      definition: 'A hydrogen atom that has lost its electron, creating a proton',
      topic: 'Ions',
      moreInfo: {
        text: 'H+ ions are crucial in acid-base chemistry. In water, they exist as hydronium ions (H3O+). Their concentration determines the pH of a solution.',
        links: ['https://www.google.com/search?q=hydrogen+ion+chemistry']
      }
    },
    {
      id: 'chem-015',
      term: 'OH- Ion',
      definition: 'A hydroxide ion formed by oxygen and hydrogen with an extra electron',
      topic: 'Ions',
      moreInfo: {
        text: 'Hydroxide ions are important in basic solutions. Their presence determines the basicity (pH > 7) of a solution. They react with H+ ions to form water.',
        links: ['https://www.google.com/search?q=hydroxide+ion+chemistry']
      }
    },
    {
      id: 'chem-016',
      term: 'Mole',
      definition: 'The amount of substance containing 6.022 × 10²³ particles (Avogadro\'s number)',
      topic: 'Measurements',
      moreInfo: {
        text: 'The mole is a fundamental unit in chemistry, making it possible to work with atoms and molecules on a practical scale. One mole of any substance contains the same number of particles.',
        links: ['https://www.google.com/search?q=mole+chemistry']
      }
    },
    {
      id: 'chem-017',
      term: 'Redox',
      definition: 'Chemical reactions involving simultaneous reduction and oxidation',
      topic: 'Reactions',
      moreInfo: {
        text: 'Redox reactions involve electron transfer between species. Reduction is the gain of electrons (or loss of oxygen), while oxidation is the loss of electrons (or gain of oxygen). These reactions are crucial in batteries and cellular respiration.',
        links: ['https://www.google.com/search?q=redox+reactions+chemistry']
      }
    },
    {
      id: 'chem-018',
      term: 'Halide',
      definition: 'A compound containing a halogen atom bonded to a less electronegative element',
      topic: 'Compounds',
      moreInfo: {
        text: 'Halides include compounds like sodium chloride (NaCl) and potassium bromide (KBr). They are important in various applications from food seasoning to photography.',
        links: ['https://www.google.com/search?q=halide+chemistry']
      }
    },
    {
      id: 'chem-019',
      term: 'Deposition',
      definition: 'The direct transition of a substance from gas to solid state',
      topic: 'Phase Changes',
      moreInfo: {
        text: 'Deposition occurs when gas molecules lose enough energy to form a solid without passing through the liquid phase. This process is seen in frost formation and chemical vapor deposition.',
        links: ['https://www.google.com/search?q=deposition+phase+change+chemistry']
      }
    },
    {
      id: 'chem-020',
      term: 'Sublimation',
      definition: 'The direct transition of a substance from solid to gas state',
      topic: 'Phase Changes',
      moreInfo: {
        text: 'Sublimation occurs when solid molecules gain enough energy to become gas without passing through the liquid phase. Dry ice (solid CO2) subliming to CO2 gas is a common example.',
        links: ['https://www.google.com/search?q=sublimation+chemistry']
      }
    },
    {
      id: 'chem-021',
      term: 'Haber Process',
      definition: 'Industrial process for producing ammonia from nitrogen and hydrogen gases',
      topic: 'Industrial Processes',
      moreInfo: {
        text: 'The Haber process combines N2 and H2 under high pressure and temperature with an iron catalyst to produce NH3. This process is crucial for fertilizer production and revolutionized agriculture.',
        links: ['https://www.google.com/search?q=haber+process+chemistry']
      }
    },
    {
      id: 'chem-022',
      term: 'Noble Gases',
      definition: 'Group 18 elements with complete outer electron shells, making them chemically inert',
      topic: 'Elements',
      moreInfo: {
        text: 'Noble gases (helium, neon, argon, etc.) have stable electron configurations and rarely form compounds. They are used in lighting, welding shields, and other applications where chemical inertness is desired.',
        links: ['https://www.google.com/search?q=noble+gases+chemistry']
      }
    },
    {
      id: 'chem-023',
      term: 'Alkanes',
      definition: 'Hydrocarbons with single bonds between carbon atoms (CnH2n+2)',
      topic: 'Organic Chemistry',
      moreInfo: {
        text: 'Alkanes are saturated hydrocarbons, meaning they contain only single bonds. They form a homologous series (methane, ethane, propane, etc.) and are important fuels and industrial chemicals.',
        links: ['https://www.google.com/search?q=alkanes+chemistry']
      }
    }
  ]
};