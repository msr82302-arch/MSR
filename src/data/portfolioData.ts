export interface OptionalSocialLinks {
  instagram: string | null;
  x: string | null;
  facebook: string | null;
}

export interface TimelineStage {
  id: string;
  stageNumber: string;
  title: string;
  organization: string;
  location?: string;
  programOrRole: string;
  period: string;
  verificationNote?: string;
  category: 'Mentorship' | 'Internship' | 'Education' | 'AI Project' | 'Fellowship' | 'Web3 Flagship' | 'Current Focus';
  summary: string;
  progressionNote: string;
  topics: string[];
  link?: {
    label: string;
    url: string;
  };
  /**
   * Set to false for milestones awaiting verified details (e.g., Stage 02 Internship).
   * Unpublished items are excluded from the public timeline until verified.
   */
  published: boolean;
}

export interface CaseStudySection {
  title: string;
  content: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Speech' | 'Web3 & Blockchain' | 'Python & Django' | 'Databases';
  filterTags: Array<'Python & Django' | 'AI & Speech' | 'Web3 & Blockchain' | 'Databases'>;
  statusLabel: string;
  shortDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string | null;
  architectureType?: 'web3-supply-chain' | 'icat-speech';
  highlights: string[];
  caseStudySections: CaseStudySection[];
  isFlagship: boolean;
}

export interface AdditionalProjectItem {
  id: string;
  title: string;
  roleOrContext: string;
  statusNote: string;
  scopeSummary: string;
  implementedCapabilities: string[];
  plannedOrRestrictedNote: string;
  technologies: string[];
  permissionVerified: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  contextNote: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  platform: string;
  description: string;
  deliverables: string[];
  url: string;
  ctaLabel: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  program: string;
  period: string;
  statusNote: string;
  location: string;
  focusAreas: string[];
}

export const SITE_CONFIG = {
  brandMark: 'MSR',
  fullName: 'Muhammad Sohaib Rasheed',
  shortName: 'Sohaib Rasheed',
  tagline: 'BS Artificial Intelligence Student at NUTECH · Python & Django Developer',
  heroHeadline:
    'Building Intelligent Applications Through Backend Engineering, AI & Emerging Technologies.',
  heroSupporting:
    "I'm Muhammad Sohaib Rasheed, a BS Artificial Intelligence student at NUTECH and a Python/Django developer interested in building practical software solutions through backend engineering, AI and Web3 technologies.",
  location: 'Islamabad, Pakistan',
  email: 'msr82302@gmail.com',
  phoneDisplay: '+92 322 5071982',
  whatsappUrl: 'https://wa.me/923225071982',
  linkedinUrl: 'https://www.linkedin.com/in/muhammad-sohaib-rasheed-14a544324/',
  githubUrl: 'https://github.com/msr82302-arch',
  repositoryName: 'msr-professional-portfolio',
  /**
   * Authentic uploaded photograph at the Gauth AI Registration Booth.
   * Keep natural aspect ratio and facial identity unaltered.
   */
  heroPhotoPath: '/assets/aistudio/Gauth_AI_Registration_Booth_ae94b6cb.png',
  heroPhotoAlt:
    'Muhammad Sohaib Rasheed standing behind the Gauth AI Registration Booth',
  /**
   * Optional separate portrait slot for future updates.
   * Set to a valid asset path if a dedicated portrait is added later.
   */
  secondaryPortraitPath: null as string | null,
  /**
   * Only populate social links once verified and supplied.
   */
  optionalSocials: {
    instagram: null,
    x: null,
    facebook: null,
  } as OptionalSocialLinks,
};

export const HERO_METRICS = [
  {
    label: 'Academic Program',
    value: 'BS Artificial Intelligence',
    detail: 'NUTECH Islamabad · 3rd Semester (Nov 2026)',
  },
  {
    label: 'Core Backend Stack',
    value: 'Python & Django',
    detail: 'DRF · REST APIs · PostgreSQL · SQLite',
  },
  {
    label: 'Applied Domains',
    value: 'Speech AI & Web3',
    detail: 'Whisper Pipelines · Solidity & Web3.py',
  },
  {
    label: 'Availability',
    value: 'Islamabad · Remote',
    detail: 'Backend Engineering · Freelance & Internships',
  },
];

export const ABOUT_CONTENT = {
  heading: 'Engineering Discipline Built Step by Step',
  paragraphs: [
    'My path into software engineering started with intensive foundational mentorship in Python and Django in Islamabad, focusing on clean object-oriented programming, structured data handling, and backend application architecture before entering university.',
    'Currently in my 3rd semester of the Bachelor of Science in Artificial Intelligence program at the National University of Technology (NUTECH), Islamabad (started Fall 2025), I combine formal academic study in algorithms, database systems, linear algebra, and information security with hands-on software engineering.',
    'Across my recent projects, I have worked on applied AI pipelines such as ICAT (multilingual speech-to-text, translation, and speech synthesis) and hybrid Web2/Web3 architectures such as a Decentralized Supply Chain & Product Verification System backed by Django REST Framework, PostgreSQL, and Ethereum smart contracts.',
    'Looking ahead, I am actively developing my skills toward AI and Cloud Engineering—deepening my fluency in backend APIs, Linux environments, cloud infrastructure, and production database design.',
  ],
  careerDirection: {
    title: 'Developing Career Direction',
    statement:
      'Growing from foundational Python/Django backend engineering toward AI Systems & Cloud Engineering through continuous university coursework, applied prototypes, and backend architecture practice.',
  },
};

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    id: 'stage-01',
    stageNumber: '01',
    title: 'Python Development Foundation',
    organization: 'Nizi Solution',
    location: 'Islamabad',
    programOrRole: 'Python & Django Mentorship Program',
    period: 'January – August 2025',
    verificationNote: 'Period subject to confirmation against original records',
    category: 'Mentorship',
    summary:
      'Completed structured mentorship in core Python programming and backend web fundamentals, establishing the technical discipline behind later university and full-stack projects.',
    progressionNote:
      'Progressed from basic syntax and control flow to modular OOP design and database-backed Django web applications.',
    topics: [
      'Python fundamentals, variables & data types',
      'Conditional statements & iterative loops',
      'Core data structures (lists, tuples, dicts, sets)',
      'Functions, modules & reusable packages',
      'File handling & exception handling',
      'Object-Oriented Programming (OOP)',
      'Django fundamentals & MVT architecture',
      'Backend application development workflows',
    ],
    published: true,
  },
  {
    id: 'stage-02',
    stageNumber: '02',
    title: 'Python Internship',
    organization: '[PENDING VERIFIED ORGANIZATION]',
    location: '[PENDING]',
    programOrRole: 'Python Development Intern',
    period: '[PENDING VERIFIED DATES]',
    verificationNote:
      'Unpublished draft placeholder: requires verified organization name, dates, responsibilities, and deliverables before public display.',
    category: 'Internship',
    summary:
      'Placeholder entry reserved for Python internship milestone. Kept unpublished until supporting records are confirmed.',
    progressionNote: 'Awaiting verified internship documentation.',
    topics: [],
    published: false,
  },
  {
    id: 'stage-03',
    stageNumber: '03',
    title: 'NUTECH Admission & Academic Journey',
    organization: 'National University of Technology (NUTECH)',
    location: 'Islamabad, Pakistan',
    programOrRole: 'Bachelor of Science in Artificial Intelligence (BS AI)',
    period: 'Fall 2025 – Expected 2029',
    verificationNote: '3rd Semester as of November 2026 · Expected graduation subject to confirmation',
    category: 'Education',
    summary:
      'Admitted to NUTECH in Fall 2025 to pursue a BS in Artificial Intelligence. Currently progressing through the 3rd semester while bridging theoretical computer science with practical backend and AI engineering.',
    progressionNote:
      'Building mathematical and algorithmic depth alongside software engineering and security principles.',
    topics: [
      'Programming & Problem Solving',
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Database Systems',
      'Mathematics & Linear Algebra',
      'Artificial Intelligence Foundations',
      'Software Engineering',
      'Information Security',
    ],
    published: true,
  },
  {
    id: 'stage-04',
    stageNumber: '04',
    title: 'ICAT — Multilingual Speech Processing',
    organization: 'Independent Applied AI Project',
    location: 'GitHub Open Source Prototype',
    programOrRole: 'Backend & Speech Pipeline Developer',
    period: '2025 – 2026',
    verificationNote: 'Prototype repository available on GitHub (not claimed as production deployment)',
    category: 'AI Project',
    summary:
      'Designed and built an integrated speech processing prototype combining Whisper speech recognition, multilingual translation, and text-to-speech synthesis behind a Django and SQLite backend.',
    progressionNote:
      'Demonstrated how classical Django backend engineering can orchestrate multi-stage AI audio processing workflows.',
    topics: [
      'Python & Django Backend',
      'Whisper Speech-to-Text',
      'Multilingual Translation Integration',
      'Text-to-Speech (TTS) Audio Synthesis',
      'SQLite Persistence',
      'HTML & CSS Web Interface',
    ],
    link: {
      label: 'View ICAT Repository on GitHub',
      url: 'https://github.com/msr82302-arch/Multilingual-Speech',
    },
    published: true,
  },
  {
    id: 'stage-05',
    stageNumber: '05',
    title: 'Blockchain Technology Fellowship',
    organization: 'Citadel – Edversity',
    location: 'Fellowship Program',
    programOrRole: 'Blockchain Technology Fellow',
    period: 'April – July 2026',
    verificationNote: 'Period subject to confirmation',
    category: 'Fellowship',
    summary:
      'Expanded technical scope from conventional Web2 backend development into decentralized ledger architecture, Ethereum token standards, and Solidity smart contract programming.',
    progressionNote:
      'Provided the smart-contract engineering foundation needed to connect Python/Django backends with on-chain verification.',
    topics: [
      'Blockchain fundamentals & decentralization',
      'Cryptographic wallets & transactions',
      'Ethereum architecture',
      'Token standards: ERC-20, ERC-721, ERC-1155',
      'Solidity smart contract development',
      'Variables, data types, arrays & mappings',
      'Structs, modifiers & contract functions',
    ],
    published: true,
  },
  {
    id: 'stage-06',
    stageNumber: '06',
    title: 'Web3 Decentralized Supply Chain System',
    organization: 'Flagship Hybrid Web2/Web3 Case Study',
    location: 'GitHub Open Source Prototype',
    programOrRole: 'Full-Stack Backend & Blockchain Architect',
    period: '2026',
    verificationNote: 'Prototype repository available on GitHub',
    category: 'Web3 Flagship',
    summary:
      'Architected a hybrid Web2/Web3 supply chain and product authenticity verification prototype combining Django REST Framework, PostgreSQL, React, Web3.py, and Ethereum smart contracts.',
    progressionNote:
      'Unified relational database workflows, role-based access control, and immutable on-chain provenance records.',
    topics: [
      'Django REST Framework & PostgreSQL',
      'Web3.py & Ethereum Smart Contracts',
      'React Frontend Integration',
      'Manufacturer & Distributor Workflows',
      'Role-Based Access Control (RBAC)',
      'Product Provenance & Customer Verification',
    ],
    link: {
      label: 'View Web3 Supply Chain Repository',
      url: 'https://github.com/msr82302-arch/Web3-Supply-chain',
    },
    published: true,
  },
  {
    id: 'stage-07',
    stageNumber: '07',
    title: 'Current Academic & Technical Development',
    organization: 'NUTECH & Continuous Engineering Practice',
    location: 'Islamabad, Pakistan',
    programOrRole: 'BS AI (3rd Semester) · Aspiring AI & Cloud Engineer',
    period: 'November 2026 – Present',
    verificationNote: 'Ongoing academic & engineering progression',
    category: 'Current Focus',
    summary:
      'Advancing through the 3rd semester of BS Artificial Intelligence while deepening expertise in backend systems, database architecture, Linux environments, cloud computing fundamentals, and applied AI.',
    progressionNote:
      'Actively preparing for software engineering internships, international remote backend roles, and freelance Web2/Web3 engineering engagements.',
    topics: [
      'Python & Django Backend Engineering',
      'Database Architecture & Optimization',
      'AI Application Development',
      'Cloud Computing & Linux Fundamentals',
      'Blockchain & Hybrid Web3 Systems',
      'Software Engineering Best Practices',
    ],
    published: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    contextNote: 'Core problem solving, OOP, and university DSA coursework',
    items: ['Python', 'C++', 'Java'],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    contextNote: 'API architecture, server logic, and role-based workflows',
    items: ['Django', 'Django REST Framework', 'REST APIs'],
  },
  {
    id: 'databases',
    title: 'Databases',
    contextNote: 'Relational schema design and application persistence',
    items: ['PostgreSQL', 'SQLite', 'MySQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    contextNote: 'Clean responsive interfaces integrated with backend APIs',
    items: ['HTML', 'CSS', 'React fundamentals'],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    contextNote: 'Applied audio, speech recognition, and language pipelines',
    items: ['Speech processing', 'Whisper', 'NLP & translation integration'],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    contextNote: 'Smart contracts, token standards, and Python Web3 bridges',
    items: ['Ethereum fundamentals', 'Solidity', 'Web3.py', 'ERC-20 / ERC-721 / ERC-1155'],
  },
  {
    id: 'tools',
    title: 'Tools & Environment',
    contextNote: 'Version control, isolated environments, and daily workflow',
    items: ['Git', 'GitHub', 'VS Code', 'Virtual environments', 'Linux fundamentals'],
  },
];

export const FLAGSHIP_PROJECTS: ProjectItem[] = [
  {
    id: 'web3-supply-chain',
    title: 'Web3 Decentralized Supply Chain & Product Verification System',
    subtitle: 'Hybrid Web2 API + Web3 Ethereum Provenance Prototype',
    category: 'Web3 & Blockchain',
    filterTags: ['Python & Django', 'Web3 & Blockchain', 'Databases'],
    statusLabel: 'Flagship Case Study · GitHub Prototype',
    shortDescription:
      'A full-stack product provenance and anti-counterfeiting prototype combining Django REST Framework, PostgreSQL, React, Web3.py, and Ethereum smart contracts with role-based supply chain workflows.',
    technologies: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Web3.py',
      'Ethereum',
      'Solidity Smart Contracts',
      'React',
    ],
    githubUrl: 'https://github.com/msr82302-arch/Web3-Supply-chain',
    liveDemoUrl: null,
    architectureType: 'web3-supply-chain',
    highlights: [
      'Product authenticity verification & end-to-end provenance tracking',
      'Role-based access control across Manufacturer, Supplier, Distributor, Logistics, Retailer, and Customer',
      'Hybrid data design keeping rich relational records in PostgreSQL while anchoring verification hashes on Ethereum',
      'RESTful API bridge powered by Django REST Framework and Web3.py',
    ],
    caseStudySections: [
      {
        title: '1. Business Problem',
        content:
          'Traditional supply chains rely on fragmented, siloed databases where product custody logs can be altered without external auditability, making counterfeit detection and end-customer verification difficult.',
      },
      {
        title: '2. System Architecture',
        content:
          'Structured as a hybrid Web2/Web3 architecture: a React client communicates with a Django REST Framework backend, which manages authentication, RBAC, and operational metadata in PostgreSQL while interacting with Ethereum smart contracts through Web3.py.',
      },
      {
        title: '3. Database Structure',
        content:
          'PostgreSQL stores structured relational entities including registered participants, role assignments, product metadata, batch descriptors, transfer logs, and transaction hash references linking off-chain state to on-chain events.',
      },
      {
        title: '4. Backend APIs',
        content:
          'Django REST Framework endpoints enforce permission checks per supply-chain role, validate payload transitions, log custody handoffs, and invoke smart contract write/read operations asynchronously or synchronously via Web3.py.',
      },
      {
        title: '5. Frontend Integration',
        content:
          'The React interface provides dedicated views for manufacturers registering new product batches, intermediaries updating shipment checkpoints, and customers verifying authenticity via product identifiers.',
      },
      {
        title: '6. Blockchain Integration',
        content:
          'Solidity smart contracts enforce immutable ownership and state transitions on Ethereum. Web3.py handles ABI loading, transaction signing/submission in prototype environments, and verification queries.',
      },
      {
        title: '7. Product Verification Workflow',
        content:
          'Manufacturer registers item -> Smart contract records origin -> Supplier/Distributor/Logistics/Retailer record verified custody checkpoints -> Customer queries item ID to cross-check PostgreSQL history against on-chain provenance.',
      },
      {
        title: '8. Technical Challenges',
        content:
          'Balancing on-chain immutability with gas efficiency and query speed—resolved by storing bulky metadata off-chain in PostgreSQL while keeping critical provenance checkpoints and verification proofs on-chain.',
      },
      {
        title: '9. Future SaaS & Production Roadmap',
        content:
          'Planned next steps include Layer-2 network deployment for lower gas fees, QR-code label generation for physical packaging, asynchronous Celery task queues for blockchain confirmations, and multi-tenant SaaS onboarding.',
      },
    ],
    isFlagship: true,
  },
  {
    id: 'icat-multilingual-speech',
    title: 'ICAT — Multilingual Speech Processing Application',
    subtitle: 'Speech-to-Text, Translation & Audio Synthesis Pipeline',
    category: 'AI & Speech',
    filterTags: ['Python & Django', 'AI & Speech', 'Databases'],
    statusLabel: 'Flagship AI Case Study · GitHub Prototype',
    shortDescription:
      'An integrated multilingual audio pipeline built on Python and Django that transcribes spoken input with Whisper, translates across target languages, and generates synthesized speech output.',
    technologies: [
      'Python',
      'Django',
      'Speech Recognition',
      'Whisper',
      'Translation Integration',
      'Text-to-Speech (TTS)',
      'SQLite',
      'HTML / CSS',
    ],
    githubUrl: 'https://github.com/msr82302-arch/Multilingual-Speech',
    liveDemoUrl: null,
    architectureType: 'icat-speech',
    highlights: [
      'Automated Speech-to-Text transcription powered by Whisper',
      'Cross-language translation integration linking recognized text to target languages',
      'Text-to-Speech synthesis returning playable audio responses',
      'Django request handling with SQLite logging and clean HTML/CSS web interface',
    ],
    caseStudySections: [
      {
        title: 'Problem Statement',
        content:
          'Cross-lingual spoken communication often requires manual multi-step tools—separate transcription, text translation, and voice generation utilities—creating friction for users needing a unified speech workflow.',
      },
      {
        title: 'Proposed Solution',
        content:
          'ICAT unifies speech recognition, language translation, and audio synthesis into a single Django-managed pipeline accessible from a clean web interface.',
      },
      {
        title: 'Speech-to-Text Workflow',
        content:
          'Uploaded or recorded audio input is routed through the Django backend to the Whisper speech recognition module, which produces clean source-language transcripts.',
      },
      {
        title: 'Translation Workflow',
        content:
          'Recognized transcript text is normalized and passed to the translation integration layer to produce accurate target-language text while preserving sentence context.',
      },
      {
        title: 'Audio Generation (TTS)',
        content:
          'The translated text is forwarded to a Text-to-Speech engine that renders synthesized target-language audio files served back to the user interface for playback.',
      },
      {
        title: 'Backend Architecture',
        content:
          'Built with Python and Django to coordinate media uploads, sequential inference steps, SQLite record persistence, and HTML/CSS template rendering.',
      },
      {
        title: 'Technical Challenges',
        content:
          'Managing audio file formatting, processing latency during local Whisper inference, and clean temporary media cleanup across sequential pipeline stages.',
      },
      {
        title: 'Future Improvements',
        content:
          'Adding background task queues for long audio clips, real-time WebSocket streaming transcription, expanded language pair presets, and containerized cloud deployment.',
      },
    ],
    isFlagship: true,
  },
];

export const ADDITIONAL_PROJECTS: AdditionalProjectItem[] = [
  {
    id: 'easytravel-prototype',
    title: 'EasyTravel',
    roleOrContext: 'Travel & Visa Application Management Prototype',
    statusNote: 'Frontend Prototype · Backend & Payments Planned',
    scopeSummary:
      'Designed a structured frontend prototype for managing travel and visa application workflows. Clearly scoped as an early-stage prototype rather than a live production booking platform.',
    implementedCapabilities: [
      'Completed frontend interface layouts and navigation flows',
      'Structured applicant information and visa requirement presentation views',
      'Responsive UI components prepared for future API binding',
    ],
    plannedOrRestrictedNote:
      'Backend API persistence, document storage, payment gateway integration, and production deployment remain planned phases and are not yet implemented.',
    technologies: ['HTML', 'CSS', 'Frontend Prototyping'],
    permissionVerified: false,
  },
  {
    id: 'xerotech-management-system',
    title: 'XeroTech Technologies Management System',
    roleOrContext: 'Software-House Operations Management System (Sanitized Overview)',
    statusNote: 'Sanitized Architectural Overview · Confidential Client Details Excluded',
    scopeSummary:
      'Contributed to backend architecture and internal workflow modeling for software-house operations management. Public documentation is strictly sanitized to protect private operational data.',
    implementedCapabilities: [
      'Structured internal workflow entities and operational state tracking',
      'Role-scoped administrative and team operations architecture',
      'Relational database modeling for internal task and project coordination',
    ],
    plannedOrRestrictedNote:
      'Client data, credentials, private branding assets, and internal screenshots are intentionally withheld pending formal publication authorization.',
    technologies: ['Python', 'Django', 'Relational Database Architecture'],
    permissionVerified: false,
  },
];

export const FIVERR_SERVICES: ServiceItem[] = [
  {
    id: 'fiverr-ethereum',
    index: '01',
    title: 'Ethereum Blockchain Smart Contract Development',
    platform: 'Fiverr Service',
    description:
      'Foundational Solidity smart contracts, token standards (ERC-20, ERC-721, ERC-1155), and structured contract logic designed for verification prototypes and Web3 applications.',
    deliverables: [
      'Solidity smart contract architecture & state logic',
      'ERC-20, ERC-721 & ERC-1155 contract implementations',
      'Web3.py integration readiness for Python backends',
    ],
    url: 'https://www.fiverr.com/s/EmrGLxD',
    ctaLabel: 'View Smart Contract Gig',
  },
  {
    id: 'fiverr-python-django',
    index: '02',
    title: 'Python & Django Web2 / Web3 Development',
    platform: 'Fiverr Service',
    description:
      'Clean backend engineering with Python, Django, Django REST Framework, and PostgreSQL/SQLite—plus optional Web3.py integration for hybrid decentralized applications.',
    deliverables: [
      'RESTful APIs with Django & Django REST Framework',
      'PostgreSQL / SQLite relational schema design',
      'Web2 backend workflows & Web3.py bridge endpoints',
    ],
    url: 'https://www.fiverr.com/s/lrva4QR',
    ctaLabel: 'View Python & Django Gig',
  },
  {
    id: 'fiverr-tutoring',
    index: '03',
    title: 'Web2 / Web3 Programming Tutoring',
    platform: 'Fiverr Service',
    description:
      'Structured 1-on-1 programming guidance covering Python fundamentals, OOP, Django backend development, database basics, and foundational Ethereum/Solidity concepts.',
    deliverables: [
      'Python syntax, data structures & OOP foundations',
      'Django backend & REST API guided walkthroughs',
      'Introductory Solidity & Ethereum contract concepts',
    ],
    url: 'https://www.fiverr.com/s/8xyr3Xv',
    ctaLabel: 'View Programming Tutoring Gig',
  },
];

export const EDUCATION_RECORDS: EducationItem[] = [
  {
    id: 'nutech-bs-ai',
    institution: 'National University of Technology (NUTECH)',
    program: 'Bachelor of Science in Artificial Intelligence (BS AI)',
    period: 'Fall 2025 – Expected 2029',
    statusNote: 'Current: 3rd Semester (November 2026) · Graduation year subject to confirmation',
    location: 'Islamabad, Pakistan',
    focusAreas: [
      'Programming & Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Database Systems',
      'Mathematics & Linear Algebra',
      'Artificial Intelligence',
      'Software Engineering & Information Security',
    ],
  },
  {
    id: 'nizi-solution',
    institution: 'Nizi Solution',
    program: 'Python & Django Mentorship Program',
    period: 'January – August 2025',
    statusNote: 'Period subject to confirmation against original records',
    location: 'Islamabad, Pakistan',
    focusAreas: [
      'Core Python, Data Structures & Exception Handling',
      'Object-Oriented Programming & Modular Design',
      'Django Framework & Backend Application Development',
    ],
  },
  {
    id: 'citadel-edversity',
    institution: 'Citadel – Edversity',
    program: 'Blockchain Technology Fellowship',
    period: 'April – July 2026',
    statusNote: 'Period subject to confirmation',
    location: 'Fellowship Program',
    focusAreas: [
      'Decentralization, Wallets & Ethereum Fundamentals',
      'ERC-20, ERC-721 & ERC-1155 Token Standards',
      'Solidity Smart Contracts, Mappings, Arrays & Structs',
    ],
  },
];
