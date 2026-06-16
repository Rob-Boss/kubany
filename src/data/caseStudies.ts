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
