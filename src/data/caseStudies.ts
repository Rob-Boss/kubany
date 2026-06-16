export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  discipline: string; // short descriptor under the title
  role: string; // what KUBANY did
  year?: string;
  summary: string; // one line, used on the index + as the page lede
  body: string[]; // sample narrative paragraphs
  hero: CaseStudyImage;
  gallery: CaseStudyImage[];
  coverage?: string[]; // outlets where it landed
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ikon-studio",
    title: "Ikon Studio",
    discipline: "Design & furniture",
    role: "Communications & media relations",
    year: "2025",
    summary:
      "Reintroducing an icon of American design — and the studio reviving it — to the press that defines the field.",
    body: [
      "When Ikon Studio reissued a modernist icon, the story was never just the object — it was the lineage behind it, the makers reviving it, and why it still matters today. We built the narrative that connected all three.",
      "Working closely with the studio, we shaped a press strategy that led with credibility: the right editors, the right outlets, and a story told with the nuance the design world expects. The result was sustained, high-quality coverage rather than a single news spike.",
    ],
    hero: {
      src: "/assets/ikon-galerie.jpg",
      alt: "A bright, skylit gallery interior with art on the walls — featured in Galerie.",
    },
    gallery: [
      {
        src: "/assets/ikon-galerie.jpg",
        alt: "Galerie feature: a stunning new art space in Texas Hill Country.",
        caption: "Galerie — “A Stunning New Art Space in Texas Hill Country”",
      },
      {
        src: "/assets/ikon-ad.jpg",
        alt: "Architectural Digest 'Object Lesson' feature on a reissued 1979 SOM chair.",
        caption: "Architectural Digest — “Object Lesson: Back in Style”",
      },
    ],
    coverage: ["Galerie", "Architectural Digest"],
  },
  {
    slug: "rothko-chapel",
    title: "The Rothko Chapel",
    discipline: "Cultural institution & landscape",
    role: "Restoration campaign & global communications",
    year: "2024",
    summary:
      "Restoring and expanding a landmark sanctuary of art and contemplation in Houston, Texas.",
    body: [
      "The Rothko Chapel is a unique cultural monument, uniting modern art and spiritual contemplation. For its major restoration and campus expansion, we designed a campaign to explain the physical preservation of the chapel itself alongside the creation of a new campus designed by Architecture Research Office (ARO).",
      "By engaging international art and architecture critics early, we helped articulate how the new landscape and community spaces honor Mark Rothko's original vision while welcoming a broader public. The campaign successfully positioned the project as a critical evolution for one of the world's most sacred modern spaces.",
    ],
    hero: {
      src: "/assets/rothko-chapel.png",
      alt: "A minimalist modern brick and concrete chapel pavilion by a reflecting pool.",
    },
    gallery: [
      {
        src: "/assets/rothko-chapel.png",
        alt: "Minimalist brick pavilion reflecting in the water.",
        caption: "The Rothko Chapel expansion — architecture designed for quiet contemplation.",
      },
    ],
    coverage: ["The New York Times", "Artforum", "The Art Newspaper"],
  },
  {
    slug: "one-world-trade",
    title: "One World Trade Center",
    discipline: "Architecture & civic infrastructure",
    role: "Strategic communications & launch PR for SOM",
    year: "2014",
    summary:
      "Representing the architectural narrative of a defining addition to the global skyline.",
    body: [
      "As the public relations lead for Skidmore, Owings & Merrill's design of One World Trade Center, we managed a decade-long communication plan for the historic tower. The challenge was balancing its civic and symbolic weight with the functional reality of a state-of-the-art office high-rise.",
      "We coordinated exclusive design access with key architectural critics, broadcast networks, and international press, ensuring the dialogue focused on the building's structural innovation, sustainability, and its contribution to the rebirth of Lower Manhattan.",
    ],
    hero: {
      src: "/assets/one-world-trade.png",
      alt: "One World Trade Center skyscraper soaring into a bright blue sky.",
    },
    gallery: [
      {
        src: "/assets/one-world-trade.png",
        alt: "One World Trade Center skyscraper towering above Lower Manhattan.",
        caption: "One World Trade Center — a symbol of resilience and modern design.",
      },
    ],
    coverage: ["Architectural Record", "Wired", "CNN", "Wall Street Journal"],
  },
  {
    slug: "exhibit-columbus",
    title: "Exhibit Columbus",
    discipline: "Civic design & public biennial",
    role: "Inaugural launch agency & communications advisory",
    year: "2023",
    summary:
      "Amplifying a unique community-driven exhibition of architecture and temporary design installations.",
    body: [
      "Exhibit Columbus honors the design heritage of Columbus, Indiana, by inviting contemporary designers to insert temporary pavilions throughout the city. We served as the launch PR agency, crafting the initial brand identity narrative for the biennial.",
      "Through ongoing strategic advisory, we positioned Columbus not just as an open-air museum of mid-century architecture, but as a living laboratory for the future of public space, drawing national coverage from leading design and lifestyle media.",
    ],
    hero: {
      src: "/assets/exhibit-columbus.png",
      alt: "A dynamic wooden and steel open-air pavilion in Columbus, Indiana, with visitors around.",
    },
    gallery: [
      {
        src: "/assets/exhibit-columbus.png",
        alt: "An open-air wooden structure with seating under a geometric canopy.",
        caption: "Exhibit Columbus — temporary installations fostering community dialogue.",
      },
    ],
    coverage: ["Metropolis", "The Architect's Newspaper", "Fast Company"],
  },
  {
    slug: "center-for-art-and-landscape",
    title: "Center for Art and Landscape",
    discipline: "Architecture & cultural institution",
    role: "Launch communications & brand narrative",
    year: "2025",
    summary:
      "Positioning a new building where art, architecture, and landscape meet — and giving it a voice from day one.",
    body: [
      "A new cultural building is more than a structure; it is an argument about how people should gather, learn, and encounter art. We helped articulate that argument before the doors opened.",
      "From naming the moments that mattered to briefing the journalists who would tell the story, we built a launch narrative rooted in the architecture itself — the light, the landscape, and the intention behind every decision.",
    ],
    hero: {
      src: "/assets/center-art-landscape.jpg",
      alt: "A glass-and-steel pavilion glowing at dusk, framed by autumn trees.",
    },
    gallery: [
      {
        src: "/assets/center-art-landscape.jpg",
        alt: "The Center for Art and Landscape pavilion at dusk.",
        caption: "The pavilion at dusk — architecture in its landscape.",
      },
    ],
    coverage: ["Press coverage forthcoming"],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
