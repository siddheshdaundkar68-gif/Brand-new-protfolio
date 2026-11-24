/**
 * Central portfolio data — Siddhesh's details.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

const BASE = import.meta.env.BASE_URL;

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Siddhesh Daundkar',
  displayName: 'Siddhesh Daundkar',
  firstName: 'SIDDHESH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SIDDHESH ORIGINAL',
  role: 'Web Developer',
  age: 17,
  tagline: ['Web Developer', 'AI Content Creator', 'UGC Ad Creator'],
  intro:
    'A 17-year-old web developer and Computer Engineering diploma student at PK Technical Campus. I build websites with HTML, CSS and JavaScript for clients — and I also create AI content and UGC ads.',
  location: 'PK Technical Campus',
  email: 'siddheshdaundkar68@gmail.com',
  /** Price range shown to clients for a website. */
  pricing: '₹10,000 – ₹15,000',
  pricingShort: '₹10k – ₹15k',
  resumePdf: `${BASE}assets/Siddhesh_Daundkar_Resume.pdf`,
  portrait: {
    src: `${BASE}assets/portrait-720.webp`,
    srcSet: `${BASE}assets/portrait-420.webp 420w, ${BASE}assets/portrait-720.webp 720w, ${BASE}assets/portrait-1100.webp 1100w`,
    alt: 'Portrait of Siddhesh Daundkar',
  },
  interests: ['Web Development', 'AI Content Creation', 'UGC Ads'],
};

export const education = [
  {
    school: 'PK Technical Campus',
    place: '',
    degree: 'Polytechnic Diploma — Computer Engineering',
    period: 'Currently studying',
    score: 'Diploma',
  },
];

export const experience = [
  {
    company: 'Freelance',
    role: 'Web Developer',
    place: '',
    period: 'Open for client work',
    points: [
      'Designs and builds websites for clients using HTML, CSS and JavaScript.',
      `Website projects are priced between ${profile.pricing} per website.`,
      'Also creates AI content and UGC ads — but client enquiries on this portfolio are for website work only.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when there is no public repository — the GitHub button is hidden. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'client-websites',
    title: 'Client Websites',
    year: '2026',
    genre: 'Web • HTML • CSS • JavaScript',
    logline: `Websites built for clients — ${profile.pricing} per website.`,
    stack: ['HTML', 'CSS', 'JavaScript'],
    build: [
      'Designs and develops websites end to end for clients using HTML, CSS and JavaScript.',
      `Every website is priced between ${profile.pricing}, depending on the work involved.`,
      `Need a website? Email ${profile.email} and tell me what you need.`,
    ],
    features: [
      'Custom website for your business or idea',
      'Built with HTML, CSS & JavaScript',
      `Clear pricing: ${profile.pricing}`,
      'Work directly with the developer',
    ],
    metrics: [
      { value: profile.pricingShort, label: 'per client website' },
      { value: '3', label: 'core web languages' },
      { value: '1-to-1', label: 'direct with the developer' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'ai-content',
    title: 'AI Content Creation',
    year: '2026',
    genre: 'AI • Content • Creative',
    logline: 'Creating content with the help of AI tools.',
    stack: ['AI Tools', 'Content', 'Creative'],
    build: [
      'Creates content with the help of AI tools, alongside web development.',
      'A creative skill that pairs well with building websites.',
      'Client enquiries on this portfolio are for website work only.',
    ],
    features: ['AI-assisted content', 'Creative ideas', 'Works alongside web development'],
    metrics: [
      { value: 'AI', label: 'powered content' },
      { value: '2', label: 'creator skills' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'ugc-ads',
    title: 'UGC Ad Creation',
    year: '2026',
    genre: 'UGC • Ads • Creative',
    logline: 'Creating UGC-style ad content.',
    stack: ['UGC', 'Ads', 'Content'],
    build: [
      'Creates UGC-style ads as a creator, alongside web development and AI content.',
      'Another creative skill in the toolkit.',
      'Client enquiries on this portfolio are for website work only.',
    ],
    features: ['UGC-style ad content', 'Creative storytelling', 'Works alongside web development'],
    metrics: [
      { value: 'UGC', label: 'ad creator' },
      { value: '2', label: 'creator skills' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'diploma',
    title: 'Diploma Student',
    org: 'PK Technical Campus',
    detail: 'Pursuing a Polytechnic Diploma in Computer Engineering.',
    laurel: 'Now Studying',
  },
  {
    id: 'web-dev',
    title: 'Web Developer',
    org: 'HTML • CSS • JavaScript',
    detail: 'Builds websites for clients — at just 17 years old.',
    laurel: 'Age 17',
  },
  {
    id: 'programming',
    title: 'C & C++',
    org: 'Programming',
    detail: 'Learned C and C++ — the foundation for everything that came next.',
    laurel: 'Programmer',
  },
  {
    id: 'ai-creator',
    title: 'AI Content Creator',
    org: 'Creator',
    detail: 'Creates content with the help of AI tools.',
    laurel: 'Creator',
  },
  {
    id: 'ugc-creator',
    title: 'UGC Ad Creator',
    org: 'Creator',
    detail: 'Creates UGC-style ad content.',
    laurel: 'Creator',
  },
];

export type Subject = { area: string; name: string };

/** What Siddhesh has studied — shown in the rail under Top Moments. */
export const subjects: Subject[] = [
  { area: 'Language', name: 'C' },
  { area: 'Language', name: 'C++' },
  { area: 'Web', name: 'HTML' },
  { area: 'Web', name: 'CSS' },
  { area: 'Web', name: 'JavaScript' },
  { area: 'College', name: 'DBMS' },
  { area: 'College', name: 'Data Structures' },
  { area: 'College', name: 'Electronics' },
  { area: 'College', name: 'Computer Engineering subjects' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'web',
    title: 'Web Development',
    subtitle: 'What clients hire me for',
    skills: [
      { name: 'HTML', mono: 'Ht', note: 'Core' },
      { name: 'CSS', mono: 'Cs', note: 'Core' },
      { name: 'JavaScript', mono: 'Js', note: 'Core' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming foundations',
    skills: [
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'college',
    title: 'College Subjects',
    subtitle: 'Computer Engineering diploma',
    skills: [
      { name: 'DBMS', mono: 'Db' },
      { name: 'Data Structures', mono: 'Ds' },
      { name: 'Electronics', mono: 'El' },
    ],
  },
  {
    id: 'creator',
    title: 'Creator',
    subtitle: 'Beyond code',
    skills: [
      { name: 'AI Content', mono: 'Ai' },
      { name: 'UGC Ads', mono: 'Ug' },
    ],
  },
];

/** Shown when a skill card is hovered/tapped. */
export const skillEvidence: Record<string, string[]> = {
  HTML: ['Client Websites', 'Web Developer'],
  CSS: ['Client Websites', 'Web Developer'],
  JavaScript: ['Client Websites', 'Web Developer'],
  C: ['Programming foundation'],
  'C++': ['Programming foundation'],
  DBMS: ['Learned at PK Technical Campus'],
  'Data Structures': ['Learned at PK Technical Campus'],
  Electronics: ['Part of the Computer Engineering diploma'],
  'AI Content': ['AI Content Creation'],
  'UGC Ads': ['UGC Ad Creation'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: 'Learning to code',
    synopsis: 'It started with the languages that power everything — C and C++.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The First Line',
        description: 'Learned C — the language where programming fundamentals begin.',
        tags: ['C', 'Programming'],
        runtime: 'Language: C',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Going Further',
        description: 'Learned C++ — building on C with a deeper way of thinking about programs.',
        tags: ['C++', 'Programming'],
        runtime: 'Language: C++',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Computer Engineering',
    period: 'Now',
    synopsis: 'A Polytechnic Diploma in Computer Engineering at PK Technical Campus.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Student',
        description: 'Studying Computer Engineering at PK Technical Campus.',
        tags: ['Diploma', 'Computer Engineering'],
        runtime: 'PK Technical Campus',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Database',
        description: 'Learned DBMS — how data is stored, organised and managed.',
        tags: ['DBMS'],
        runtime: 'College subject',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Structure',
        description: 'Learned Data Structures — and Electronics, the hardware side of computing.',
        tags: ['Data Structures', 'Electronics'],
        runtime: 'College subjects',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: 'The web',
    synopsis: 'Turning code into things people can open in a browser.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Structure of the Web',
        description: 'Learned HTML and CSS to structure and style web pages.',
        tags: ['HTML', 'CSS'],
        runtime: 'Frontend',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Bringing It to Life',
        description: 'Learned JavaScript to make websites interactive.',
        tags: ['JavaScript'],
        runtime: 'Frontend',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Going Pro',
    period: '2026',
    synopsis: 'Taking on client work and creating content as a 17-year-old.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Web Developer',
        description: `Builds websites for clients at ${profile.pricing} per website.`,
        tags: ['Web Developer', 'Clients'],
        runtime: profile.pricing,
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The AI Creator',
        description: 'Creates content with the help of AI tools.',
        tags: ['AI Content'],
        runtime: 'Creator',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The UGC Creator',
        description: 'Creates UGC-style ad content.',
        tags: ['UGC Ads'],
        runtime: 'Creator',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The next episode could be your website.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Your Project',
        description: `Want a website? Email ${profile.email} — websites are ${profile.pricing}.`,
        tags: ['Hire Me', 'Websites'],
        runtime: 'Open for work',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Main skill', title: 'Web Development', detail: 'HTML • CSS • JavaScript', palette: crimson },
  { label: 'For clients', title: 'Websites', detail: `${profile.pricing} per website`, palette: amber },
  { label: 'Studying', title: 'Computer Engineering', detail: 'Polytechnic Diploma', palette: violet },
  { label: 'College', title: 'PK Technical Campus', detail: 'Diploma student', palette: ocean },
  { label: 'Language', title: 'C & C++', detail: 'Programming foundations', palette: jade },
  { label: 'Database', title: 'DBMS', detail: 'Learned at college', palette: amber },
  { label: 'Fundamentals', title: 'Data Structures', detail: 'Learned at college', palette: crimson },
  { label: 'Hardware side', title: 'Electronics', detail: 'Part of the diploma', palette: ocean },
  { label: 'Creator', title: 'AI Content', detail: 'AI content creator', palette: jade },
  { label: 'Creator', title: 'UGC Ads', detail: 'UGC ad creator', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Who',
    title: 'Siddhesh.',
    lines: ['17 years old', 'Web Developer · AI Content Creator · UGC Ad Creator'],
    chips: ['Age 17', 'Web Developer'],
  },
  {
    kicker: 'Education',
    title: 'Computer Engineering',
    lines: ['Polytechnic Diploma', 'PK Technical Campus'],
    chips: ['Diploma'],
  },
  {
    kicker: 'Skills',
    title: 'Code first.',
    lines: ['C, C++ · HTML, CSS, JavaScript', 'DBMS · Data Structures · Electronics'],
    chips: ['C', 'C++', 'HTML', 'CSS', 'JavaScript', 'DBMS'],
  },
  {
    kicker: 'Services',
    title: 'Three Originals',
    lines: ['Client Websites', 'AI Content Creation', 'UGC Ad Creation'],
  },
  {
    kicker: 'For clients',
    title: 'Websites',
    lines: [`${profile.pricing} per website`, 'Built with HTML, CSS and JavaScript'],
    chips: [profile.pricing],
  },
  {
    kicker: 'Contact',
    title: 'Need a website?',
    lines: [profile.email, 'Website enquiries only'],
  },
];

export type ProfileId = 'siddhesh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'siddhesh',
    name: 'Siddhesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, highlights & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Client',
    blurb: 'Services, pricing & skills first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & services', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Services', meta: `${projects.length} Originals • Websites ${profile.pricingShort}`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 about me', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Highlights', meta: `${achievements.length} Moments • ${subjects.length} Subjects`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
