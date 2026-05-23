interface Hero {
  name: string;
  contribution: string;
  years: string;
  image: string;
  imageAlt: string;
  link: string;
  symbols?: string[];
}

export const scienceHeroes: Hero[] = [
  {
    name: "John Dalton",
    contribution: "Proposed in the 1800s that atoms were solid spheres, laying the foundation for modern atomic theory.",
    years: "1766-1844",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gottfried_Wilhelm_von_Leibniz.jpg/200px-Gottfried_Wilhelm_von_Leibniz.jpg",
    imageAlt: "Portrait of John Dalton",
    link: "https://en.wikipedia.org/wiki/John_Dalton"
  },
  {
    name: "J.J. Thomson",
    contribution: "Discovered electrons in 1897, proving that atoms were not indivisible but contained smaller particles.",
    years: "1856-1940",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/J.J_Thomson.jpg/220px-J.J_Thomson.jpg",
    imageAlt: "Portrait of J.J. Thomson",
    link: "https://en.wikipedia.org/wiki/J._J._Thomson"
  },
  {
    name: "Ernest Rutherford",
    contribution: "Conducted the gold foil experiment in 1909, firing alpha particles at atoms and discovering the nuclear model of the atom.",
    years: "1871-1937",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ernest_Rutherford_LOC.jpg/220px-Ernest_Rutherford_LOC.jpg",
    imageAlt: "Portrait of Ernest Rutherford",
    link: "https://en.wikipedia.org/wiki/Ernest_Rutherford"
  },
  {
    name: "Niels Bohr",
    contribution: "Proposed the electron shell model of the atom, explaining how electrons orbit the nucleus in specific energy levels.",
    years: "1885-1962",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/220px-Niels_Bohr.jpg",
    imageAlt: "Portrait of Niels Bohr",
    link: "https://en.wikipedia.org/wiki/Niels_Bohr"
  },
  {
    name: "Dmitri Mendeleev",
    contribution: "Created the periodic table around 1869, organizing elements by atomic weight and properties.",
    years: "1834-1907",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/DIMendeleevCab.jpg/220px-DIMendeleevCab.jpg",
    imageAlt: "Portrait of Dmitri Mendeleev",
    link: "https://en.wikipedia.org/wiki/Dmitri_Mendeleev"
  },
  {
    name: "Gottfried Wilhelm Leibniz",
    contribution: "Co-discovered calculus, introduced integral notation and d/dx differential notation. Made significant contributions to mathematics, physics, and philosophy.",
    years: "1646-1716",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gottfried_Wilhelm_von_Leibniz.jpg/200px-Gottfried_Wilhelm_von_Leibniz.jpg",
    imageAlt: "Portrait of Gottfried Wilhelm Leibniz",
    link: "https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz"
  },
  {
    name: "Sir Isaac Newton",
    contribution: "Laws of Motion, Universal Gravitation, development of calculus, groundbreaking work in optics and mathematics that laid the foundation for classical mechanics.",
    years: "1643-1727",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/200px-GodfreyKneller-IsaacNewton-1689.jpg",
    imageAlt: "Portrait of Sir Isaac Newton by Godfrey Kneller",
    link: "https://en.wikipedia.org/wiki/Isaac_Newton"
  },
  {
    name: "James Clerk Maxwell",
    contribution: "Unified electricity, magnetism and light through Maxwell's four equations of electromagnetism. His work laid the foundation for modern physics and led to numerous technological advances.",
    years: "1831-1879",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/James_Clerk_Maxwell.png/200px-James_Clerk_Maxwell.png",
    imageAlt: "Portrait of James Clerk Maxwell",
    link: "https://en.wikipedia.org/wiki/James_Clerk_Maxwell"
  },
  {
    name: "Albert Einstein",
    contribution: "Theory of Relativity, Quantum Physics foundations, photoelectric effect, and fundamental contributions to statistical mechanics.",
    years: "1879-1955",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/200px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    imageAlt: "Portrait of Albert Einstein by F. Schmutzer",
    link: "https://en.wikipedia.org/wiki/Albert_Einstein"
  },
  {
    name: "Paul Dirac",
    contribution: "Pioneering work in quantum mechanics and quantum electrodynamics. Predicted the existence of antimatter and developed the Dirac equation.",
    years: "1902-1984",
    image: "https://ichef.bbci.co.uk/images/ic/1200x675/p083rp9r.jpg",
    imageAlt: "Portrait of Paul Dirac",
    link: "https://en.wikipedia.org/wiki/Paul_Dirac"
  }
];

export const faithHeroes: Hero[] = [
  {
    name: "Jesus Christ",
    contribution: "The Son of God who lived and died for sinners to pave the way of salvation for all mankind. Through His death and resurrection, He established the New Testament faith known today as Christianity. His teachings of love, forgiveness, and redemption continue to transform lives across the world.",
    years: "c. 4 BC - c. 30/33 AD",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Spas_vsederzhitel_sinay.jpg/200px-Spas_vsederzhitel_sinay.jpg",
    imageAlt: "Christ Pantocrator, 6th century icon from Saint Catherine's Monastery, Mount Sinai",
    link: "https://en.wikipedia.org/wiki/Jesus"
  },
  {
    name: "St. Paul (Saul of Tarsus)",
    contribution: "A converted Jewish Pharisee who became one of Christianity's most influential apostles. Through his missionary journeys across Asia Minor, he established numerous churches and authored many New Testament epistles that form the theological foundation of Christian doctrine. His letters continue to guide Christian faith and practice, covering topics from salvation by grace through faith to practical Christian living.",
    years: "c. 5 - c. 64/67 AD",
    image: "https://c8.alamy.com/comp/BBNDA9/paul-saul-of-tarsus-circa-1-64-ad-saint-apostle-to-the-gentiles-portrait-BBNDA9.jpg",
    imageAlt: "Portrait of Saint Paul",
    link: "https://en.wikipedia.org/wiki/Paul_the_Apostle"
  },
  {
    name: "Dr. Paul Yonggi Cho",
    contribution: "Founder of Yoido Full Gospel Church in South Korea, which became the world's largest congregation. His innovative use of cell groups and emphasis on prayer revolutionized church growth in Asia. Through his ministry, millions were introduced to Christianity, and his model of cell-based church structure influenced Christian communities worldwide. His teachings on prayer, faith, and the Holy Spirit have impacted believers across denominations.",
    years: "1936-2021",
    image: "https://kairosmin.org/wp-content/uploads/2021/09/iu-4.jpeg",
    imageAlt: "Dr. Paul Yonggi Cho",
    link: "https://en.wikipedia.org/wiki/David_Yonggi_Cho"
  }
];

export const mythologyHeroes: Hero[] = [
  {
    name: "Zeus (Jupiter)",
    contribution: "King of the Greek gods, ruler of Mount Olympus, and god of the sky, lightning, thunder, law, order, and justice. Known by the Romans as Jupiter, he was the most powerful of all Olympian deities. His symbols include the thunderbolt ⚡, eagle 🦅, bull, and oak tree.",
    years: "Ancient Greek mythology",
    image: "https://i.ytimg.com/vi/IaCmqFSKpws/hq720.jpg",
    imageAlt: "Zeus, King of the Gods",
    link: "https://en.wikipedia.org/wiki/Zeus",
    symbols: ["⚡ Thunderbolt", "🦅 Eagle", "🌳 Oak", "👑 Crown"]
  }
];

export const movieHeroes: Hero[] = [
  {
    name: "James Bond",
    contribution: "The legendary British Secret Service agent created by Ian Fleming. Featured in 12 novels and 2 short-story collections, Bond's character has been brought to life in 25 films, making him one of cinema's most iconic characters. Known for his sophistication, wit, and unwavering dedication to Queen and country, 007 has become synonymous with espionage thriller genre.",
    years: "1953-present",
    image: "https://www.gbnews.com/media-library/daniel-craig.jpg?id=59803574&width=1600&height=1200&quality=90&coordinates=465%2C401%2C262%2C2614",
    imageAlt: "Daniel Craig as James Bond",
    link: "https://en.wikipedia.org/wiki/James_Bond"
  }
];