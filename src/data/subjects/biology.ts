import { KnowledgeSubject } from '../../types/knowledge';

export const biology: KnowledgeSubject = {
  id: 'biology',
  name: 'Biology',
  description: 'Study of living organisms and their vital processes',
  icon: 'Leaf',
  facts: [
    {
      id: 'bio-001',
      term: 'Mitochondria',
      definition: 'The powerhouse of the cell, responsible for cellular respiration and energy production',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'Mitochondria are membrane-bound cell organelles that generate most of the chemical energy needed to power the cell\'s biochemical reactions.',
        images: ['https://images.unsplash.com/photo-1532187643603-ba119ca4109e']
      }
    },
    {
      id: 'bio-002',
      term: 'DNA',
      definition: 'Deoxyribonucleic acid, the hereditary material in humans and almost all other organisms',
      topic: 'Genetics',
      moreInfo: {
        text: 'DNA contains the instructions needed for an organism to develop, survive, and reproduce.',
        links: ['https://www.google.com/search?q=dna+genetics+biology']
      }
    },
    {
      id: 'bio-003',
      term: 'RNA',
      definition: 'Ribonucleic acid, a molecule similar to DNA that plays crucial roles in protein synthesis and other cellular processes',
      topic: 'Genetics',
      moreInfo: {
        text: 'RNA differs from DNA in that it contains ribose sugar instead of deoxyribose and uracil instead of thymine. It is typically single-stranded.',
        links: ['https://www.google.com/search?q=rna+structure+function']
      }
    },
    {
      id: 'bio-004',
      term: 'Gene',
      definition: 'A segment of DNA that codes for a specific protein or functional RNA molecule',
      topic: 'Genetics',
      moreInfo: {
        text: 'Humans have approximately 20,000 genes. Each gene contains instructions for making specific proteins that determine traits.',
        links: ['https://www.google.com/search?q=gene+definition+biology']
      }
    },
    {
      id: 'bio-005',
      term: 'Protein',
      definition: 'Large, complex molecules made up of amino acids that play critical roles in the body',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'Proteins are essential for the structure, function, and regulation of the body\'s tissues and organs.',
        links: ['https://www.google.com/search?q=protein+structure+function']
      }
    },
    {
      id: 'bio-006',
      term: 'Amino Acid',
      definition: 'The building blocks of proteins, with 20 different types commonly found in living organisms',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'There are essential amino acids that must be obtained from food and non-essential amino acids that the body can produce.',
        links: ['https://www.google.com/search?q=amino+acids+biology']
      }
    },
    {
      id: 'bio-007',
      term: 'Essential Amino Acids',
      definition: 'The nine amino acids that cannot be produced by the human body and must be obtained through diet',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'The nine essential amino acids are: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine.',
        links: ['https://www.google.com/search?q=essential+amino+acids']
      }
    },
    {
      id: 'bio-008',
      term: 'Non-essential Amino Acids',
      definition: 'Amino acids that can be synthesized by the human body',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'While these amino acids can be produced by the body, they are still important for protein synthesis and other biological functions.',
        links: ['https://www.google.com/search?q=non+essential+amino+acids']
      }
    },
    {
      id: 'bio-009',
      term: 'Conditionally Essential Amino Acids',
      definition: 'Amino acids that become essential under specific conditions of stress or illness',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'These amino acids are normally non-essential but may need to be supplied by the diet in certain situations when the body\'s demand exceeds its ability to produce them.',
        links: ['https://www.google.com/search?q=conditionally+essential+amino+acids']
      }
    },
    {
      id: 'bio-010',
      term: 'Genetic Code',
      definition: 'The set of rules by which DNA and RNA sequences are translated into proteins',
      topic: 'Genetics',
      moreInfo: {
        text: 'The genetic code consists of 64 three-letter combinations (codons) of nucleotides, which specify which amino acid will be added during protein synthesis.',
        links: ['https://www.google.com/search?q=genetic+code+biology']
      }
    },
    {
      id: 'bio-011',
      term: 'Denaturation',
      definition: 'The process by which proteins lose their shape and biological function',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'Denaturation can be caused by heat, strong acids or bases, and certain chemicals. It disrupts the protein\'s normal structure and function.',
        links: ['https://www.google.com/search?q=protein+denaturation']
      }
    },
    {
      id: 'bio-012',
      term: 'Catabolic',
      definition: 'Metabolic processes that break down complex molecules into simpler ones',
      topic: 'Metabolism',
      moreInfo: {
        text: 'Catabolic reactions release energy and are essential for breaking down nutrients and recycling cellular components.',
        links: ['https://www.google.com/search?q=catabolic+metabolism']
      }
    },
    {
      id: 'bio-013',
      term: 'Anabolic',
      definition: 'Metabolic processes that build complex molecules from simpler ones',
      topic: 'Metabolism',
      moreInfo: {
        text: 'Anabolic reactions require energy and are responsible for growth, repair, and synthesis of cellular components.',
        links: ['https://www.google.com/search?q=anabolic+metabolism']
      }
    },
    {
      id: 'bio-014',
      term: 'Alveoli',
      definition: 'Tiny air sacs in the lungs where gas exchange occurs between air and blood',
      topic: 'Respiratory System',
      moreInfo: {
        text: 'Alveoli are surrounded by capillaries, allowing oxygen to enter the bloodstream and carbon dioxide to be removed.',
        links: ['https://www.google.com/search?q=alveoli+lungs']
      }
    },
    {
      id: 'bio-015',
      term: 'Bronchi',
      definition: 'The main airways that branch from the trachea into the lungs',
      topic: 'Respiratory System',
      moreInfo: {
        text: 'Bronchi divide into smaller branches called bronchioles, forming a tree-like network for air distribution in the lungs.',
        links: ['https://www.google.com/search?q=bronchi+respiratory+system']
      }
    },
    {
      id: 'bio-016',
      term: 'Platelet',
      definition: 'A type of blood cell that helps form blood clots to stop bleeding',
      topic: 'Circulatory System',
      moreInfo: {
        text: 'Platelets are cell fragments that circulate in the blood and play a crucial role in blood clotting and wound healing.',
        links: ['https://www.google.com/search?q=platelets+blood+clotting']
      }
    },
    {
      "id": "bio-017",
      "term": "Prokaryote",
      "definition": "A single-celled organism with no nucleus or mitochondria, but has a membrane",
      "topic": "Cell Biology",
      "moreInfo": {
        "text": "Prokaryotic organisms include archaea and bacteria. They are simpler than eukaryotic cells and reproduce through binary fission.",
        "links": ["https://www.google.com/search?q=prokaryotic+cells+structure"]
      }
    },
    {
      id: 'bio-018',
      term: 'Enzyme',
      definition: 'A protein that acts as a biological catalyst to speed up chemical reactions',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'Enzymes work by lowering the activation energy required for reactions. They remain unchanged after the reaction.',
        links: ['https://www.google.com/search?q=enzymes+biology']
      }
    },
    {
      id: 'bio-019',
      term: 'Amylase',
      definition: 'An enzyme that breaks down complex carbohydrates into simple sugars',
      topic: 'Digestion',
      moreInfo: {
        text: 'Amylase is found in saliva and pancreatic juice. It begins the digestion of starches in the mouth.',
        links: ['https://www.google.com/search?q=amylase+enzyme']
      }
    },
    {
      id: 'bio-020',
      term: 'Protease',
      definition: 'An enzyme that breaks down proteins into smaller peptides and amino acids',
      topic: 'Digestion',
      moreInfo: {
        text: 'Proteases are essential for protein digestion and are found in the stomach (pepsin) and small intestine (trypsin).',
        links: ['https://www.google.com/search?q=protease+enzyme']
      }
    },
    {
      id: 'bio-021',
      term: 'RNA',
      definition: 'Ribonucleic acid, a nucleic acid involved in protein synthesis and other cellular processes',
      topic: 'Genetics',
      moreInfo: {
        text: 'RNA differs from DNA in having ribose sugar instead of deoxyribose, and uracil instead of thymine. It plays crucial roles in gene expression.',
        links: ['https://www.google.com/search?q=rna+molecular+biology']
      }
    },
    {
      id: 'bio-022',
      term: 'Lipase',
      definition: 'An enzyme that breaks down fats (lipids) into fatty acids and glycerol',
      topic: 'Digestion',
      moreInfo: {
        text: 'Lipase is produced by the pancreas and is essential for fat digestion in the small intestine.',
        links: ['https://www.google.com/search?q=lipase+enzyme']
      }
    },
    {
      id: 'bio-023',
      term: 'Gall Bladder',
      definition: 'An organ that stores and concentrates bile produced by the liver',
      topic: 'Digestive System',
      moreInfo: {
        text: 'The gallbladder releases bile into the small intestine to help break down fats during digestion.',
        links: ['https://www.google.com/search?q=gallbladder+function']
      }
    },
    {
      id: 'bio-024',
      term: 'Bile',
      definition: 'A digestive fluid produced by the liver that helps break down fats',
      topic: 'Digestion',
      moreInfo: {
        text: 'Bile emulsifies fats, making them more accessible to lipase enzymes for digestion.',
        links: ['https://www.google.com/search?q=bile+digestion']
      }
    },
    {
      id: 'bio-025',
      term: 'Benedict\'s Reagent',
      definition: 'A chemical solution used to test for the presence of reducing sugars',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'When heated with reducing sugars, Benedict\'s reagent changes color from blue to green, yellow, or brick red depending on sugar concentration.',
        links: ['https://www.google.com/search?q=benedicts+test+biology']
      }
    },
    {
      id: 'bio-026',
      term: 'Biuret',
      definition: 'A compound formed by heating urea, used in tests for protein detection',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'The biuret test uses copper sulfate and sodium hydroxide to detect peptide bonds in proteins, producing a violet color.',
        links: ['https://www.google.com/search?q=biuret+test+protein']
      }
    },
    {
      id: 'bio-027',
      term: 'Urea',
      definition: 'A waste product of protein metabolism excreted in urine',
      topic: 'Metabolism',
      moreInfo: {
        text: 'Urea is produced in the liver during the breakdown of amino acids and is removed from the blood by the kidneys.',
        links: ['https://www.google.com/search?q=urea+metabolism']
      }
    },
    {
      id: 'bio-028',
      term: 'Cellulose',
      definition: 'A complex carbohydrate made of glucose units, forming plant cell walls',
      topic: 'Plant Biology',
      moreInfo: {
        text: 'Cellulose is the most abundant organic polymer on Earth, providing structural support to plants.',
        links: ['https://www.google.com/search?q=cellulose+structure']
      }
    },
    {
      id: 'bio-029',
      term: 'Glucose',
      definition: 'A simple sugar (C₆H₁₂O₆) that serves as a primary energy source for living cells',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'Glucose is produced through photosynthesis in plants and is broken down during cellular respiration to provide energy.',
        links: ['https://www.google.com/search?q=glucose+molecule']
      }
    },
    {
      id: 'bio-030',
      term: 'ATP',
      definition: 'Adenosine triphosphate, the primary energy currency of cells',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'ATP stores and transfers energy within cells through the breaking and forming of phosphate bonds.',
        links: ['https://www.google.com/search?q=atp+energy+biology']
      }
    },
    {
      id: 'bio-031',
      term: 'Lysis',
      definition: 'The breaking down of a cell membrane, causing cell contents to be released',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'Cell lysis can occur due to osmotic pressure, enzymes, viruses, or mechanical stress.',
        links: ['https://www.google.com/search?q=cell+lysis']
      }
    },
    {
      id: 'bio-032',
      term: 'Crenation',
      definition: 'The shrinkage of a cell due to water loss in a hypertonic solution',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'During crenation, cells become wrinkled as water moves out through osmosis.',
        links: ['https://www.google.com/search?q=cell+crenation']
      }
    },
    {
      id: 'bio-033',
      term: 'Lipid',
      definition: 'A class of biomolecules that includes fats, oils, and steroids',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'Lipids are hydrophobic molecules that serve as energy storage, cell membrane components, and signaling molecules.',
        links: ['https://www.google.com/search?q=lipids+biology']
      }
    },
    {
      id: 'bio-034',
      term: 'Starch',
      definition: 'A complex carbohydrate made up of many glucose units, used for energy storage in plants',
      topic: 'Plant Biology',
      moreInfo: {
        text: 'Starch exists in two forms: amylose (straight chain) and amylopectin (branched chain).',
        links: ['https://www.google.com/search?q=starch+structure']
      }
    },
    {
      id: 'bio-035',
      term: 'Sugar',
      definition: 'A simple carbohydrate that provides quick energy for cells',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'Sugars include monosaccharides like glucose and fructose, and disaccharides like sucrose and lactose.',
        links: ['https://www.google.com/search?q=sugar+molecules']
      }
    },
    {
      id: 'bio-036',
      term: 'Pepsin',
      definition: 'A digestive enzyme that breaks down proteins in the stomach',
      topic: 'Digestion',
      moreInfo: {
        text: 'Pepsin works best in the acidic environment of the stomach and begins protein digestion.',
        links: ['https://www.google.com/search?q=pepsin+enzyme']
      }
    },
    {
      id: 'bio-037',
      term: 'Mesophyll',
      definition: 'The internal tissue of a leaf where photosynthesis occurs',
      topic: 'Plant Biology',
      moreInfo: {
        text: 'Mesophyll includes palisade and spongy layers, containing chloroplasts for photosynthesis.',
        links: ['https://www.google.com/search?q=leaf+mesophyll']
      }
    },
    {
      id: 'bio-038',
      term: 'Stomata',
      definition: 'Pores in plant leaves that allow gas exchange',
      topic: 'Plant Biology',
      moreInfo: {
        text: 'Stomata are surrounded by guard cells that control their opening and closing.',
        links: ['https://www.google.com/search?q=stomata+function']
      }
    },
    {
      id: 'bio-039',
      term: 'Haemoglobin',
      definition: 'The protein in red blood cells that carries oxygen',
      topic: 'Circulatory System',
      moreInfo: {
        text: 'Each haemoglobin molecule can carry four oxygen molecules and gives blood its red color.',
        links: ['https://www.google.com/search?q=hemoglobin+function']
      }
    },
    {
      id: 'bio-040',
      term: 'Fibrinogen',
      definition: 'A plasma protein that is converted to fibrin during blood clotting',
      topic: 'Blood',
      moreInfo: {
        text: 'Fibrinogen is essential for blood clot formation and wound healing.',
        links: ['https://www.google.com/search?q=fibrinogen+blood+clotting']
      }
    },
    {
      id: 'bio-041',
      term: 'Fibrin',
      definition: 'An insoluble protein formed from fibrinogen that creates blood clots',
      topic: 'Blood',
      moreInfo: {
        text: 'Fibrin forms a mesh-like network that traps blood cells to form a clot.',
        links: ['https://www.google.com/search?q=fibrin+blood+clot']
      }
    },
    {
      id: 'bio-042',
      term: 'Isotonic',
      definition: 'Solutions having the same solute concentration and osmotic pressure',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'In isotonic solutions, there is no net movement of water across cell membranes.',
        links: ['https://www.google.com/search?q=isotonic+solution']
      }
    },
    {
      id: 'bio-043',
      term: 'Hypertonic',
      definition: 'A solution with higher solute concentration than another solution',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'In hypertonic solutions, water moves out of cells through osmosis, causing them to shrink.',
        links: ['https://www.google.com/search?q=hypertonic+solution']
      }
    },
    {
      id: 'bio-044',
      term: 'Hypotonic',
      definition: 'A solution with lower solute concentration than another solution',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'In hypotonic solutions, water moves into cells through osmosis, causing them to swell.',
        links: ['https://www.google.com/search?q=hypotonic+solution']
      }
    },
    {
      id: 'bio-045',
      term: 'Plasmolysis',
      definition: 'The shrinkage of cell contents away from the cell wall due to water loss',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'Plasmolysis occurs in plant cells placed in hypertonic solutions.',
        links: ['https://www.google.com/search?q=plasmolysis+cell']
      }
    },
    {
      id: 'bio-046',
      term: 'Plasmids',
      definition: 'Small, circular DNA molecules that can replicate independently',
      topic: 'Genetics',
      moreInfo: {
        text: 'Plasmids are common in bacteria and are important tools in genetic engineering.',
        links: ['https://www.google.com/search?q=plasmid+dna']
      }
    },
    {
      id: 'bio-047',
      term: 'Bronchioles',
      definition: 'The smallest branches of the bronchi in the lungs',
      topic: 'Respiratory System',
      moreInfo: {
        text: 'Bronchioles terminate in alveoli, where gas exchange occurs.',
        links: ['https://www.google.com/search?q=bronchioles+lungs']
      }
    },
    {
      id: 'bio-048',
      term: 'Eukaryote',
      definition: 'An organism whose cells contain a membrane-bound nucleus and organelles',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'Eukaryotic cells are found in animals, plants, fungi, and protists.',
        links: ['https://www.google.com/search?q=eukaryotic+cell']
      }
    },
    {
      id: 'bio-049',
      term: 'Bioenergetics',
      definition: 'The study of energy flow through living systems',
      topic: 'Metabolism',
      moreInfo: {
        text: 'Bioenergetics includes processes like photosynthesis, cellular respiration, and ATP synthesis.',
        links: ['https://www.google.com/search?q=bioenergetics+biology']
      }
    },
    {
      id: 'bio-050',
      term: 'Phagocytosis',
      definition: 'The process by which cells engulf and digest particles or microorganisms',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'Phagocytosis is an important defense mechanism in the immune system.',
        links: ['https://www.google.com/search?q=phagocytosis+immune+system']
      }
    },
    {
      id: 'bio-051',
      term: 'Antibodies',
      definition: 'Proteins produced by the immune system to fight specific antigens',
      topic: 'Immunology',
      moreInfo: {
        text: 'Antibodies are Y-shaped proteins that recognize and help eliminate specific pathogens.',
        links: ['https://www.google.com/search?q=antibodies+immune+system']
      }
    },
    {
      id: 'bio-052',
      term: 'Antitoxins',
      definition: 'Substances produced by the body to neutralize toxins from pathogens',
      topic: 'Immunology',
      moreInfo: {
        text: 'Antitoxins bind to specific toxins, preventing them from causing harm to cells.',
        links: ['https://www.google.com/search?q=antitoxins+immunity']
      }
    },
    {
      id: 'bio-053',
      term: 'Pathogens',
      definition: 'Disease-causing microorganisms including bacteria, viruses, fungi, and protists',
      topic: 'Microbiology',
      moreInfo: {
        text: 'Pathogens can cause infections and diseases by invading and damaging host tissues.',
        links: ['https://www.google.com/search?q=pathogens+disease']
      }
    },
    {
      id: 'bio-054',
      term: 'mRNA',
      definition: 'Messenger RNA that carries genetic information from DNA to ribosomes for protein synthesis',
      topic: 'Genetics',
      moreInfo: {
        text: 'mRNA is transcribed from DNA and serves as a template for protein synthesis during translation.',
        links: ['https://www.google.com/search?q=mrna+protein+synthesis']
      }
    },
    {
      id: 'bio-055',
      term: 'Lymphocytes',
      definition: 'White blood cells that play key roles in the immune system',
      topic: 'Immunology',
      moreInfo: {
        text: 'Lymphocytes include T cells and B cells, which are crucial for adaptive immunity.',
        links: ['https://www.google.com/search?q=lymphocytes+immune+system']
      }
    },
    {
      id: 'bio-056',
      term: 'Ribosomes',
      definition: 'Cellular structures where protein synthesis occurs',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'Ribosomes read mRNA and assemble amino acids into proteins.',
        links: ['https://www.google.com/search?q=ribosomes+protein+synthesis']
      }
    },
    {
      id: 'bio-057',
      term: 'Chromosome',
      definition: 'A structure containing DNA and proteins that carries genetic information',
      topic: 'Genetics',
      moreInfo: {
        text: 'Humans have 23 pairs of chromosomes, which contain genes that determine traits.',
        links: ['https://www.google.com/search?q=chromosomes+genetics']
      }
    },
    {
      id: 'bio-058',
      term: 'Meiosis',
      definition: 'Cell division that produces gametes with half the normal chromosome number',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'Meiosis is essential for sexual reproduction and genetic diversity.',
        links: ['https://www.google.com/search?q=meiosis+cell+division']
      }
    },
    {
      id: 'bio-059',
      term: 'Stem Cell',
      definition: 'Undifferentiated cells capable of developing into various specialized cell types',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'Stem cells play crucial roles in development, growth, and tissue repair.',
        links: ['https://www.google.com/search?q=stem+cells+biology']
      }
    },
    {
      id: 'bio-060',
      term: 'Uracil',
      definition: 'A pyrimidine nucleobase that pairs with adenine in RNA, replacing thymine found in DNA',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'Uracil is one of the four nucleobases in RNA. It forms base pairs with adenine through hydrogen bonding and is essential for RNA structure and function.',
        links: ['https://www.google.com/search?q=uracil+rna+structure']
      }
    },
    {
      id: 'bio-061',
      term: 'Pyrimidine',
      definition: 'A six-sided organic molecule with nitrogen atoms at positions 1 and 3, forming the base structure for nucleobases like cytosine, thymine, and uracil',
      topic: 'Biochemistry',
      moreInfo: {
        text: 'Pyrimidines are essential components of nucleic acids. The three main pyrimidine bases are cytosine (found in both DNA and RNA), thymine (DNA only), and uracil (RNA only).',
        links: ['https://www.google.com/search?q=pyrimidine+structure+biology']
      }
    },
    {
      id: 'bio-062',
      term: 'Measles',
      definition: 'A highly contagious viral infection characterized by fever and a distinctive red rash',
      topic: 'Virology',
      moreInfo: {
        text: 'Measles is caused by the measles virus (genus Morbillivirus). It spreads through respiratory droplets and can be prevented through vaccination. The virus causes characteristic symptoms including fever, cough, and a red, blotchy rash.',
        links: ['https://www.google.com/search?q=measles+virus+infection']
      }
    },
    {
      id: 'bio-063',
      term: 'HIV',
      definition: 'Human Immunodeficiency Virus, a retrovirus that attacks the immune system',
      topic: 'Virology',
      moreInfo: {
        text: 'HIV specifically targets CD4+ T cells, weakening the immune system over time. If left untreated, it can lead to AIDS (Acquired Immunodeficiency Syndrome). Modern antiretroviral therapy can effectively control the virus.',
        links: ['https://www.google.com/search?q=hiv+virus+biology']
      }
    },
    {
      id: 'bio-064',
      term: 'Pain Relief',
      definition: 'Medications that reduce pain sensation, including NSAIDs (like aspirin and ibuprofen) and other analgesics (like paracetamol)',
      topic: 'Pharmacology',
      moreInfo: {
        text: 'Different pain relievers work through various mechanisms. NSAIDs reduce inflammation and pain by inhibiting prostaglandin synthesis, while paracetamol affects pain perception in the central nervous system.',
        links: ['https://www.google.com/search?q=pain+relief+mechanisms']
      }
    },
    {
      id: 'bio-065',
      term: 'Methicillin',
      definition: 'A semisynthetic penicillin-class antibiotic developed to treat penicillin-resistant bacteria',
      topic: 'Pharmacology',
      moreInfo: {
        text: 'Methicillin was developed to combat penicillin-resistant Staphylococcus aureus. Though no longer used clinically, the term "methicillin-resistant" (MRSA) remains important in describing antibiotic resistance.',
        links: ['https://www.google.com/search?q=methicillin+antibiotic']
      }
    },
    {
      id: 'bio-066',
      term: 'Homologous',
      definition: 'Structures or genes that share a common evolutionary ancestry',
      topic: 'Evolution',
      moreInfo: {
        text: 'Homologous structures may serve different functions but share a common developmental origin. For example, human arms, bird wings, and whale flippers are homologous structures.',
        links: ['https://www.google.com/search?q=homologous+structures+evolution']
      }
    },
    {
      id: 'bio-067',
      term: 'Haploid Gamete',
      definition: 'A reproductive cell (sperm or egg) containing only one set of chromosomes',
      topic: 'Genetics',
      moreInfo: {
        text: 'Haploid gametes are produced through meiosis and contain half the normal chromosome number. When two gametes unite during fertilization, they form a diploid zygote with the full chromosome complement.',
        links: ['https://www.google.com/search?q=haploid+gametes+reproduction']
      }
    },
    {
      id: 'bio-068',
      term: 'Diploid Cell',
      definition: 'A cell containing two complete sets of chromosomes',
      topic: 'Genetics',
      moreInfo: {
        text: 'Most body cells are diploid, containing pairs of chromosomes (one from each parent). In humans, diploid cells have 46 chromosomes (23 pairs).',
        links: ['https://www.google.com/search?q=diploid+cells+genetics']
      }
    },
    {
      id: 'bio-069',
      term: 'Pluripotency',
      definition: 'The ability of a cell to develop into any cell type in the body except those needed to support and develop a fetus',
      topic: 'Cell Biology',
      moreInfo: {
        text: 'Pluripotent stem cells can give rise to all cell types of the three germ layers (endoderm, mesoderm, and ectoderm) but cannot form extra-embryonic tissues.',
        links: ['https://www.google.com/search?q=pluripotency+stem+cells']
      }
    },
    {
      id: 'bio-070',
      term: 'Embryonic',
      definition: 'Relating to the early stages of development after conception',
      topic: 'Development',
      moreInfo: {
        text: 'The embryonic period involves rapid cell division, tissue formation, and organ development. In humans, this period spans from fertilization to the end of the eighth week of pregnancy.',
        links: ['https://www.google.com/search?q=embryonic+development+biology']
      }
    },
    {
      "id": "bio-071",
      "term": "Isomer",
      "definition": "Compounds with the same chemical formula but different atomic or molecular structure",
      "topic": "Biochemistry",
      "moreInfo": {
        "text": "For example, butane and isobutane are isomers with chemical formula C4H10. Their different structures give them distinct properties despite having identical molecular formulas.",
        "links": ["https://www.google.com/search?q=isomers+biochemistry"]
      }
    },
    {
      "id": "bio-072",
      "term": "Large Intestine",
      "definition": "Part of the digestive system that absorbs water and forms feces",
      "topic": "Digestive System",
      "moreInfo": {
        "text": "The large intestine is crucial for water reabsorption and the final stages of digestion, hosting beneficial bacteria that aid in digestion.",
        "links": ["https://www.google.com/search?q=large+intestine+function"]
      }
    },
    {
      "id": "bio-073",
      "term": "Small Intestine",
      "definition": "Digestive organ that absorbs nutrients from food and transfers them to the bloodstream",
      "topic": "Digestive System",
      "moreInfo": {
        "text": "The small intestine is where most nutrient absorption occurs, using tiny finger-like projections called villi to maximize absorption surface area.",
        "links": ["https://www.google.com/search?q=small+intestine+absorption"]
      }
    },
    {
      "id": "bio-074",
      "term": "Liver",
      "definition": "Organ that filters blood, removes toxins, produces bile, and regulates blood composition",
      "topic": "Digestive System",
      "moreInfo": {
        "text": "The liver is the largest internal organ and performs over 500 different functions, including protein synthesis and drug metabolism.",
        "links": ["https://www.google.com/search?q=liver+functions"]
      }
    },
    {
      "id": "bio-075",
      "term": "Endocrine Gland",
      "definition": "A gland that secretes hormones directly into the bloodstream",
      "topic": "Endocrine System",
      "moreInfo": {
        "text": "Examples include the thyroid, pituitary, and adrenal glands. These glands regulate various body functions through hormone secretion.",
        "links": ["https://www.google.com/search?q=endocrine+glands"]
      }
    },
    {
      "id": "bio-076",
      "term": "Exocrine Gland",
      "definition": "A gland that secretes substances onto body surfaces through ducts",
      "topic": "Anatomy",
      "moreInfo": {
        "text": "Examples include sweat glands, salivary glands, and oil glands. They release their products through specific ducts rather than directly into the blood.",
        "links": ["https://www.google.com/search?q=exocrine+glands"]
      }
    },
    {
      "id": "bio-077",
      "term": "Tissue",
      "definition": "A group of similar cells that work together to perform a specific function",
      "topic": "Anatomy",
      "moreInfo": {
        "text": "The four main types of tissue are epithelial, connective, muscle, and nervous tissue. Each type has specific functions and characteristics.",
        "links": ["https://www.google.com/search?q=types+of+tissue+biology"]
      }
    },
    {
      "id": "bio-078",
      "term": "Active Site",
      "definition": "The specific region of an enzyme where substrates bind and reactions occur",
      "topic": "Biochemistry",
      "moreInfo": {
        "text": "The active site has a unique shape that allows only specific substrates to bind, following the lock-and-key or induced fit model.",
        "links": ["https://www.google.com/search?q=enzyme+active+site"]
      }
    },
    {
      "id": "bio-079",
      "term": "Reaction Rate",
      "definition": "The speed of a chemical reaction, measured as change in mass over time",
      "topic": "Biochemistry",
      "moreInfo": {
        "text": "Reaction rates are influenced by factors including temperature, pH, enzyme concentration, and substrate concentration.",
        "links": ["https://www.google.com/search?q=biochemical+reaction+rates"]
      }
    },
    {
      "id": "bio-080",
      "term": "Bacteria",
      "definition": "Single-celled prokaryotic organisms that multiply through binary fission",
      "topic": "Microbiology",
      "moreInfo": {
        "text": "Bacteria are among the largest microbes and come in seven main types. They can be beneficial or harmful to other organisms.",
        "links": ["https://www.google.com/search?q=bacteria+types+biology"]
      }
    },
    {
      "id": "bio-081",
      "term": "Virus",
      "definition": "Non-living infectious agents that require host cells to reproduce",
      "topic": "Microbiology",
      "moreInfo": {
        "text": "Viruses are the smallest microbes and consist of genetic material (DNA or RNA) enclosed in a protein coat. They can only replicate inside living cells.",
        "links": ["https://www.google.com/search?q=virus+structure+biology"]
      }
    },
    {
      "id": "bio-082",
      "term": "Protist",
      "definition": "A eukaryotic organism that has a nucleus but is not an animal, plant, or fungus",
      "topic": "Cell Biology",
      "moreInfo": {
        "text": "Protists are mostly single-celled organisms that include algae, slime molds, and amoebae. They represent a diverse group of organisms that don't fit into other kingdoms.",
        "links": ["https://www.google.com/search?q=protist+biology"]
      }
    },
    {
      "id": "bio-083",
      "term": "Vaccine",
      "definition": "A preparation containing weakened or dead pathogens that stimulates immune system protection against the live version",
      "topic": "Immunology",
      "moreInfo": {
        "text": "Vaccines work by training the immune system to recognize and combat specific pathogens without causing the actual disease.",
        "links": ["https://www.google.com/search?q=how+do+vaccines+work"]
      }
    },
    {
      "id": "bio-084",
      "term": "Gastric Acid",
      "definition": "Digestive fluid in the stomach consisting mainly of hydrochloric acid (HCl) with pH between 1 and 3",
      "topic": "Digestive System",
      "moreInfo": {
        "text": "Gastric acid is a crucial component of the body's defense against pathogens and aids in protein digestion. It's one of several defense mechanisms including skin, mucus, and cilia.",
        "links": ["https://www.google.com/search?q=gastric+acid+stomach"]
      }
    },
    {
      "id": "bio-085",
      "term": "Leukocyte",
      "definition": "White blood cells that are part of the immune system",
      "topic": "Immunology",
      "moreInfo": {
        "text": "Leukocytes play a crucial role in defending the body against infections and diseases. They include several types such as lymphocytes, neutrophils, and macrophages.",
        "links": ["https://www.google.com/search?q=leukocytes+white+blood+cells"]
      }
    },
    {
      "id": "bio-086",
      "term": "Femur",
      "definition": "The thigh bone, the longest and strongest bone in the human body",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The femur connects to the pelvis at the hip joint and to the tibia and patella at the knee joint.",
        "links": ["https://www.google.com/search?q=femur+bone+anatomy"]
      }
    },
    {
      "id": "bio-087",
      "term": "Patella",
      "definition": "The kneecap, a sesamoid bone that protects the knee joint and prevents tendon wear on the femur",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The patella is embedded in the quadriceps tendon and helps improve leverage for leg extension.",
        "links": ["https://www.google.com/search?q=patella+kneecap+anatomy"]
      }
    },
    {
      "id": "bio-088",
      "term": "Vertebral Column",
      "definition": "The spine, consisting of 33 vertebrae including 7 cervical, 12 thoracic, 5 lumbar, 5 fused sacral, and 4 fused coccygeal vertebrae",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The spine provides structural support, protects the spinal cord, and allows flexibility of movement. Though it contains 33 vertebrae, due to fusion there are effectively 26 movable bones.",
        "links": ["https://www.google.com/search?q=vertebral+column+anatomy"]
      }
    },
    {
      "id": "bio-089",
      "term": "Clavicle",
      "definition": "The collar bone, connecting the sternum to the scapula",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The clavicle helps stabilize the shoulder joint and protects important blood vessels and nerves.",
        "links": ["https://www.google.com/search?q=clavicle+collar+bone"]
      }
    },
    {
      "id": "bio-090",
      "term": "Scapula",
      "definition": "The shoulder blade, a flat triangular bone in the upper back",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The scapula serves as an attachment point for multiple muscles and forms part of the shoulder joint.",
        "links": ["https://www.google.com/search?q=scapula+shoulder+blade"]
      }
    },
    {
      "id": "bio-091",
      "term": "Cranium",
      "definition": "The skull, a bony structure that protects the brain",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The cranium consists of several fused bones that form a protective case around the brain and support facial structures.",
        "links": ["https://www.google.com/search?q=cranium+skull+anatomy"]
      }
    },
    {
      "id": "bio-092",
      "term": "Sternum",
      "definition": "The breast bone, a flat bone in the center of the chest",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The sternum connects to the ribs and helps protect vital organs in the chest cavity, including the heart and lungs.",
        "links": ["https://www.google.com/search?q=sternum+breast+bone"]
      }
    },
    {
      "id": "bio-093",
      "term": "Tarsal",
      "definition": "The bones that form the ankle and part of the foot",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "Tarsals consist of seven bones including the talus, calcaneus, and navicular. Metatarsals are the five long bones in the foot that connect the tarsals to the phalanges.",
        "links": ["https://www.google.com/search?q=tarsal+bones+anatomy"]
      }
    },
    {
      "id": "bio-094",
      "term": "Phalanges",
      "definition": "The bones that form the fingers and toes",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "Each finger and toe has three phalanges (proximal, middle, and distal), except for the thumb and big toe which have only two (proximal and distal).",
        "links": ["https://www.google.com/search?q=phalanges+bones+anatomy"]
      }
    },
    {
      "id": "bio-095",
      "term": "Radius",
      "definition": "One of the two bones of the forearm, located on the thumb side",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The radius works with the ulna to allow rotation of the forearm. It's essential for wrist movement and forearm rotation.",
        "links": ["https://www.google.com/search?q=radius+bone+anatomy"]
      }
    },
    {
      "id": "bio-096",
      "term": "Ulna",
      "definition": "One of the two bones of the forearm, located on the pinky side",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The ulna works with the radius to enable forearm rotation and provides attachment points for many muscles.",
        "links": ["https://www.google.com/search?q=ulna+bone+anatomy"]
      }
    },
    {
      "id": "bio-097",
      "term": "Carpal",
      "definition": "The eight small bones that form the wrist",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "Carpals and metacarpals form the framework of the wrist and palm. The eight carpal bones are arranged in two rows and allow for complex wrist movements.",
        "links": ["https://www.google.com/search?q=carpal+bones+anatomy"]
      }
    },
    {
      "id": "bio-098",
      "term": "Humerus",
      "definition": "The long bone in the upper arm that extends from the shoulder to the elbow",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The humerus articulates with the scapula at the shoulder and with the radius and ulna at the elbow. It's crucial for arm movement and strength.",
        "links": ["https://www.google.com/search?q=humerus+bone+anatomy"]
      }
    },
    {
      "id": "bio-099",
      "term": "Fibula",
      "definition": "The smaller of the two bones in the lower leg, running parallel to the tibia",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The fibula helps stabilize the ankle and provides attachment points for leg muscles. It's thinner than the tibia and bears less weight.",
        "links": ["https://www.google.com/search?q=fibula+bone+anatomy"]
      }
    },
    {
      "id": "bio-100",
      "term": "Tibia",
      "definition": "The larger of the two bones in the lower leg, commonly known as the shinbone",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The tibia is the main weight-bearing bone of the lower leg, connecting the knee to the ankle. It's the second largest bone in the body after the femur.",
        "links": ["https://www.google.com/search?q=tibia+bone+anatomy"]
      }
    },
    {
      "id": "bio-101",
      "term": "Pelvis",
      "definition": "The large, butterfly-shaped structure formed by the hip bones, sacrum, and coccyx",
      "topic": "Skeletal System",
      "moreInfo": {
        "text": "The pelvis supports the spinal column and protects the abdominal organs. It provides attachment points for legs and core muscles.",
        "links": ["https://www.google.com/search?q=pelvis+bone+anatomy"]
      }
    }
  ]
};