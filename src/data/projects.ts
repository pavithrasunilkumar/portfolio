export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  features: string[];
  tech: string[];
  color: string;
  icon: string;
  github: string;
  // ─────────────────────────────────────────────────────────────────
  // live: your deployed app URL — shown as "Project Live" button.
  // Replace placeholder URLs with your real Vercel / Render / Railway
  // deployment URLs once you deploy.
  // ─────────────────────────────────────────────────────────────────
  live: string;
  // ─────────────────────────────────────────────────────────────────
  // screenshots: 3 slides shown in the auto-sliding card preview.
  // Each slide has:
  //   imageUrl — real screenshot URL (Google Drive / hosted image).
  //              Leave as '' to show the animated placeholder instead.
  //   label    — caption shown on the slide.
  //   bg       — dark fallback background colour.
  //   accent   — highlight colour matching the project theme.
  //
  // HOW TO ADD A REAL SCREENSHOT IMAGE:
  //   Option A — Google Drive:
  //     1. Upload screenshot to Google Drive
  //     2. Share → "Anyone with the link" → Copy link
  //     3. Convert: https://drive.google.com/file/d/FILE_ID/view
  //              → https://drive.google.com/uc?export=view&id=FILE_ID
  //     4. Paste into imageUrl below
  //   Option B — Any hosted image:
  //     Right-click image on any site → "Copy image address" → paste
  //   Option C — Local file:
  //     Drop image into /public/screenshots/inhire-1.png
  //     Then set  imageUrl: '/screenshots/inhire-1.png'
  // ─────────────────────────────────────────────────────────────────
  screenshots: { label: string; bg: string; accent: string; imageUrl: string }[];
}

export const projects: Project[] = [
  {
    id: 'inhire',
    name: 'InHire',
    tagline: 'Swipe-Based AI Job Discovery Platform',
    description: 'description: InHire is a full-stack AI-powered job and internship discovery platform that transforms traditional job searching into an intelligent swipe-based experience. The platform uses machine learning, behavioral analytics, and NLP-driven resume-job matching to deliver highly personalized opportunity recommendations, adaptive ranking, and real-time preference learning for smarter career discovery.',
    problem: "Traditional job boards overwhelm candidates with irrelevant listings, leading to decision fatigue and poor matches. Job seekers need a smarter, more engaging way to discover opportunities aligned with their actual skills.",
    approach: 'Designed and developed a full-stack swipe-based recommendation platform using React, Node.js, and MongoDB with an ML-driven matching engine. Implemented NLP-based resume parsing, semantic similarity scoring, and behavioral learning pipelines to analyze user interactions, adapt recommendations in real time, and improve job relevance through personalized ranking algorithms.',
    
    features: [
  'Swipe-based job and internship discovery interface',
  'ML-powered personalized recommendation engine',
  'NLP-based resume and job description matching',
  'Real-time adaptive ranking from user interactions',
  'Semantic similarity scoring and skill analysis',
  'Responsive full-stack dashboard with dynamic job feeds'
    ],
    
    tech: [
  'Python',
  'Machine Learning',
  'NLP',
  'React.js',
  'Node.js',
  'MongoDB',
  'REST APIs',
  'JavaScript',
  'FastAPI',
],
    color: '#00F5FF',
    icon: '🎯',
    github: 'https://github.com/pavithrasunilkumar/InHire',
    live: 'https://in-hire.vercel.app/login', 
   screenshots: [
  {
    label: 'Job Discovery Feed',
    bg: '#030F14',
    accent: '#00F5FF',
    imageUrl: '/screenshots/inhire/image1.png',
  },
  {
    label: 'Match Score Dashboard',
    bg: '#030814',
    accent: '#0EA5E9',
    imageUrl: '/screenshots/inhire/image2.png',
  },
  {
    label: 'Profile & Skills',
    bg: '#020810',
    accent: '#00F5FF',
    imageUrl: '/screenshots/inhire/image3.png',
  },
],
  },
  {
    id: 'intrivue',
    name: 'IntriVue',
    tagline: 'AI Interview Intelligence Platform',
    description: 'IntriVue is an AI-powered interview intelligence platform that generates personalized mock interviews from resumes and job descriptions using machine learning, NLP, and LLM-based semantic analysis to deliver real-time evaluation and actionable feedback.',
    problem: "Candidates lack access to personalized, data-driven interview preparation. Generic prep resources don't adapt to individual weakness patterns or role-specific competencies.",
    approach: 'Integrated large language models for domain-specific question generation, real-time speech-to-text analysis, sentiment scoring, and a multi-dimensional feedback engine that benchmarks against successful interview patterns.',
    features: [
      'Personalized AI-generated mock interviews',
      'Resume and job description based question generation',
      'Real-time speech-to-text and semantic analysis',
      'AI-powered confidence and communication scoring',
      'Skill-gap analysis and performance tracking',
      'LLM-powered adaptive question generation',
      'Confidence and sentiment heatmaps',
      'Role-specific competency frameworks',
      'Progress tracking across sessions',
    ],
    tech: [
  'Python',
  'Machine Learning',
  'NLP',
  'LLMs',
  'React.js',
  'Node.js',
  'FastAPI',
  'MongoDB',
  'REST APIs',
],
    color: '#7B2FBE',
    icon: '🤖',
    github: 'https://github.com/pavithrasunilkumar/IntriVue',
    live: 'https://intri-vue.vercel.app/login', // ← REPLACE with your real URL
   screenshots: [
  {
    label: 'Interview Simulator',
    bg: '#0A0514',
    accent: '#7B2FBE',
    imageUrl: '/screenshots/intrivue/image1.png',
  },
  {
    label: 'Feedback Analytics',
    bg: '#080414',
    accent: '#6D28D9',
    imageUrl: '/screenshots/intrivue/image2.png',
  },
  {
    label: 'Session History',
    bg: '#060314',
    accent: '#7B2FBE',
    imageUrl: '/screenshots/intrivue/image3.png',
  },
],
  },
  {
  id: 'pathAegis',
  name: 'PathAegis',
  tagline: 'Real-Time AI Pothole Detection System',

  description: 'PathAegis is a full-stack AI-powered pothole detection and road monitoring platform that uses computer vision and real-time video analysis to identify potholes, track geolocation data, and visualize road damage through an interactive analytics dashboard.',

  problem: 'Manual road inspection is time-consuming, expensive, and inefficient, leading to delayed pothole detection and poor road maintenance management.',

  approach: 'Built a real-time computer vision pipeline using YOLOv8 and OpenCV for pothole detection, integrated with geolocation tracking and interactive dashboard visualization for live road monitoring and analytics.',

  features: [
    'Real-time pothole detection using computer vision',
    'YOLOv8-based object detection and video analysis',
    'Interactive OpenStreetMap-based visualization',
    'Live geolocation tracking and monitoring',
    'Real-time analytics and reporting dashboard',
    'Scalable backend APIs for live detection processing',
  ],

  tech: [
    'Python',
    'Machine Learning',
    'Computer Vision',
    'YOLOv8',
    'OpenCV',
    'React.js',
    'Node.js',
    'REST APIs',
    'OpenStreetMap',
  ],

  color: '#FFB800',
  icon: '🛣️',

  github: 'https://github.com/pavithrasunilkumar/PathAegis',
  live: 'https://path-aegis.vercel.app/',

  screenshots: [
    {
      label: 'Live Detection',
      bg: '#0E0900',
      accent: '#FFB800',
      imageUrl: '/screenshots/pathaegis/image1.png',
    },
    {
      label: 'Map Dashboard',
      bg: '#0C0800',
      accent: '#D97706',
      imageUrl: '/screenshots/pathaegis/image2.png',
    },
    {
      label: 'Analytics View',
      bg: '#0A0700',
      accent: '#FFB800',
      imageUrl: '/screenshots/pathaegis/image3.png',
    },
  ],
},
{
  id: 'finflow',
  name: 'FinFlow',
  tagline: 'AI-Powered Personal Finance & Expense Intelligence Platform',

  description:
    'FinFlow is a full-stack AI-powered personal finance intelligence platform that helps users track expenses, analyze spending behavior, generate financial insights, and optimize budgeting through intelligent analytics and interactive dashboards.',

  problem:
    'Traditional finance tracking applications often lack intelligent analytics, behavioral insights, and adaptive budgeting systems, making personal financial management inefficient and difficult to sustain.',

  approach:
    'Built a full-stack finance analytics platform using React, Node.js, and MongoDB integrated with intelligent expense categorization, behavioral spending analysis, dynamic budgeting systems, and real-time financial visualization pipelines.',

  features: [
    'AI-powered expense categorization and tracking',
    'Interactive financial analytics dashboard',
    'Budget planning and smart spending insights',
    'Behavioral spending analysis system',
    'Real-time expense monitoring and visualization',
    'Responsive full-stack finance management interface',
  ],

  tech: [
    'React.js',
    'Node.js',
    'MongoDB',
    'JavaScript',
    'REST APIs',
    'Data Visualization',
    'Financial Analytics',
  ],

  color: '#4ADE80',
  icon: '💸',

  github: 'https://github.com/pavithrasunilkumar/FinFlow',
  live: '',

  screenshots: [
    {
      label: 'Finance Dashboard',
      bg: '#02120A',
      accent: '#4ADE80',
      imageUrl: '',
    },
    {
      label: 'Expense Analytics',
      bg: '#03150C',
      accent: '#22C55E',
      imageUrl: '',
    },
    {
      label: 'Budget Insights',
      bg: '#04180E',
      accent: '#4ADE80',
      imageUrl: '',
    },
  ],
},{
  id: 'classwatch',
  name: 'ClassWatch',
  tagline: 'AI-Powered Smart Classroom Monitoring System',

  description:
    'ClassWatch is an AI-powered classroom intelligence and monitoring platform that uses computer vision, behavioral analytics, and real-time monitoring pipelines to analyze classroom engagement, automate attendance tracking, and generate actionable learning insights.',

  problem:
    'Traditional classroom monitoring and attendance systems are manual, inefficient, and unable to provide meaningful engagement analytics or real-time behavioral insights for educators.',

  approach:
    'Developed a computer vision-driven smart classroom system using OpenCV and deep learning pipelines for automated attendance tracking, engagement monitoring, behavioral analysis, and real-time classroom analytics.',

  features: [
    'AI-powered automated attendance tracking',
    'Real-time classroom engagement monitoring',
    'Computer vision-based behavioral analytics',
    'Interactive classroom analytics dashboard',
    'Student activity and participation analysis',
    'Scalable real-time monitoring pipeline',
  ],

  tech: [
    'Python',
    'Machine Learning',
    'Computer Vision',
    'OpenCV',
    'React.js',
    'FastAPI',
    'Deep Learning',
    'REST APIs',
  ],

  color: '#22D3EE',
  icon: '📚',

  github: 'https://github.com/pavithrasunilkumar/ClassWatch',
  live: '',

  screenshots: [
    {
      label: 'Classroom Monitoring Dashboard',
      bg: '#021116',
      accent: '#22D3EE',
      imageUrl: '',
    },
    {
      label: 'Engagement Analytics',
      bg: '#03161B',
      accent: '#06B6D4',
      imageUrl: '',
    },
    {
      label: 'Attendance Intelligence',
      bg: '#041A20',
      accent: '#22D3EE',
      imageUrl: '',
    },
  ],
},
  {
  id: 'securesight',
  name: 'SecureSight AI',
  tagline: 'AI-Powered Privacy Risk Detection System',

  description: 'SecureSight AI is an intelligent privacy and cybersecurity monitoring platform that analyzes user behavior, browsing activity, and system interactions to generate real-time digital privacy risk scores and security insights.',

  problem: 'Users and organizations often lack visibility into privacy vulnerabilities, unsafe browsing behavior, and potential security risks across digital platforms and online activity.',

  approach: 'Developed an AI-driven behavioral analysis system combining anomaly detection, risk scoring algorithms, and real-time monitoring pipelines to identify suspicious activity and generate explainable privacy risk assessments.',

  features: [
    'Real-time privacy risk score generation',
    'AI-based behavioral anomaly detection',
    'Browsing activity and security analysis',
    'Interactive security analytics dashboard',
    'Threat monitoring and alert system',
    'Scalable backend monitoring APIs',
  ],

  tech: [
    'Python',
    'Machine Learning',
    'Cybersecurity',
    'React.js',
    'FastAPI',
    'Docker',
    'SQL',
    'REST APIs',
  ],

  color: '#FF3CAC',
  icon: '🔐',

  github: 'https://github.com/pavithrasunilkumar/SecureSightAI',
  live: '',

  screenshots: [
    {
      label: 'Risk Score Overview',
      bg: '#0F0306',
      accent: '#FF3CAC',
      imageUrl: '/screenshots/securesight/image1.png',
    },
    {
      label: 'Security Analytics',
      bg: '#0D0205',
      accent: '#E11D48',
      imageUrl: '/screenshots/securesight/image2.png',
    },
    {
      label: 'Threat Monitoring',
      bg: '#0B0204',
      accent: '#FF3CAC',
      imageUrl: '/screenshots/securesight/image3.png',
    },
  ],
},
  
  {
  id: 'maritime-sentinel',
  name: 'Maritime Sentinel',
  tagline: 'AI-Powered Coastal Monitoring System',

  description: 'Maritime Sentinel is an AI-powered coastal surveillance platform that uses satellite imagery, computer vision, and real-time anomaly detection to identify vessels, monitor maritime activity, and detect potential security threats.',

  problem: 'Traditional coastal monitoring systems struggle to efficiently track unauthorized vessels and detect maritime threats across large ocean regions in real time.',

  approach: 'Built a deep learning-based surveillance pipeline using computer vision, satellite imagery analysis, and geospatial tracking to enable intelligent vessel detection and real-time maritime monitoring.',

  features: [
    'Real-time satellite imagery analysis',
    'AI-based vessel detection and classification',
    'Geospatial monitoring and tracking',
    'Anomaly and threat detection system',
    'Interactive coastal surveillance dashboard',
    'Real-time maritime analytics and alerts',
  ],

  tech: [
    'Python',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'OpenCV',
    'FastAPI',
    'GIS',
    'REST APIs',
  ],

  color: '#00C9FF',
  icon: '🌊',

  github: 'https://github.com/pavithrasunilkumar/MaritimeSentinel',
  live: '',

  screenshots: [
    {
      label: 'Coastal Surveillance Map',
      bg: '#020C10',
      accent: '#00C9FF',
      imageUrl: '/screenshots/maritime-sentinel/image1.png',
    },
    {
      label: 'Vessel Detection Feed',
      bg: '#020A0D',
      accent: '#0891B2',
      imageUrl: '/screenshots/maritime-sentinel/image2.png',
    }
  ],
},
  {
  id: 'crowdsense',
  name: 'CrowdSense AI',
  tagline: 'Real-Time Crowd Monitoring System',

  description: 'CrowdSense AI is a real-time crowd detection and monitoring platform that uses computer vision and deep learning to analyze video feeds, estimate crowd density, and detect potential safety risks in public spaces.',

  problem: 'Managing large crowds in public venues is challenging, with delayed detection of overcrowding and abnormal behavior often leading to safety and security risks.',

  approach: 'Built a computer vision-based monitoring pipeline using deep learning and real-time video analytics to estimate crowd density, analyze movement patterns, and generate proactive safety alerts.',

  features: [
    'Real-time crowd density estimation',
    'AI-based human detection and monitoring',
    'Video feed analysis and tracking',
    'Crowd movement and behavior analytics',
    'Interactive monitoring dashboard',
    'Automated safety alert system',
  ],

  tech: [
    'Python',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'OpenCV',
    'React.js',
    'Flask',
    'REST APIs',
  ],

  color: '#FFB800',
  icon: '👥',

  github: 'https://github.com/pavithrasunilkumar/CrowdSenseAI',
  live: '',

  screenshots: [
    {
      label: 'Density Heatmap',
      bg: '#0E0700',
      accent: '#FFB800',
      imageUrl: '/screenshots/crowdsense/image1.png',
    },
    {
      label: 'Risk Dashboard',
      bg: '#0C0600',
      accent: '#D97706',
      imageUrl: '/screenshots/crowdsense/image2.png',
    },
    {
      label: 'Camera Monitoring',
      bg: '#0A0500',
      accent: '#FFB800',
      imageUrl: '/screenshots/crowdsense/image3.png',
    },
  ],
},
  {
  id: 'resumiq',
  name: 'ResumIQ',
  tagline: 'AI Resume Screening & Job Matching Platform',

  description: 'ResumIQ is an AI-powered resume screening and job matching platform that uses NLP and semantic analysis to evaluate resumes, identify skill gaps, and rank candidates based on job compatibility.',

  problem: 'Manual resume screening is time-consuming and often misses qualified candidates due to keyword mismatch and inconsistent evaluation processes.',

  approach: 'Built an NLP-driven resume analysis pipeline using semantic similarity scoring, skill extraction, and intelligent ranking algorithms to automate candidate evaluation and improve job matching accuracy.',

  features: [
    'Automated resume parsing and analysis',
    'AI-powered resume-job matching',
    'Skill extraction and gap analysis',
    'Semantic similarity scoring',
    'Candidate ranking dashboard',
    'Interactive analytics and reporting',
  ],

  tech: [
    'Python',
    'Machine Learning',
    'NLP',
    'React.js',
    'FastAPI',
    'PostgreSQL',
    'REST APIs',
    'Semantic Analysis',
  ],

  color: '#4ADE80',
  icon: '📄',

  github: 'https://github.com/pavithrasunilkumar/ResumIQ',
  live: '',

  screenshots: [
    {
      label: 'Resume Analyzer',
      bg: '#020E08',
      accent: '#4ADE80',
      imageUrl: '/screenshots/resumiq/image1.png',
    },
    {
      label: 'Candidate Rankings',
      bg: '#020C07',
      accent: '#16A34A',
      imageUrl: '/screenshots/resumiq/image2.png',
    },
    {
      label: 'JD Match Report',
      bg: '#010A06',
      accent: '#4ADE80',
      imageUrl: '/screenshots/resumiq/image3.png',
    },
  ],
},
  {
  id: 'isro360',
  name: 'Mission ISRO 360',
  tagline: 'AI & Space Data Visualization Platform',

  description: 'Mission ISRO 360 is an interactive space analytics and visualization platform that presents ISRO mission data, satellite insights, and global space agency comparisons using AI-driven analytics and immersive visual dashboards.',

  problem: 'Space mission data is often complex and difficult for students and researchers to explore, limiting accessibility, understanding, and public engagement.',

  approach: 'Built a full-stack data visualization platform integrating interactive dashboards, space analytics, and real-time mission data pipelines to simplify exploration of ISRO missions and satellite insights.',

  features: [
    'Interactive ISRO mission visualization',
    'Satellite and launch analytics dashboard',
    'Global space agency comparison system',
    'Real-time mission insights and tracking',
    'Data-driven charts and visual reports',
    'Responsive analytics interface',
  ],

  tech: [
    'Python',
    'React.js',
    'Data Visualization',
    'JavaScript',
    'REST APIs',
    'Node.js',
    'HTML',
    'CSS',
  ],

  color: '#818CF8',
  icon: '🚀',

  github: 'https://github.com/pavithrasunilkumar/MissionISRO360',
  live: '',

  screenshots: [
    {
      label: 'Mission Dashboard',
      bg: '#04030F',
      accent: '#818CF8',
      imageUrl: '/screenshots/isro/image1.png',
    },
    {
      label: 'Satellite Analytics',
      bg: '#03020D',
      accent: '#6366F1',
      imageUrl: '/screenshots/isro/image2.png',
    },
    {
      label: 'Launch Insights',
      bg: '#02010C',
      accent: '#818CF8',
      imageUrl: '/screenshots/isro/image3.png',
    },
  ],
},
  {
    id: 'bird-migration',
    name: 'BNHS Bird Migration',
    tagline: 'ML-Powered Avian Migration Analysis',
    description: 'A machine learning analysis project for the Bombay Natural History Society studying bird migration patterns across India using GPS tracking data, climate correlations, and predictive modeling.',
    problem: 'Understanding bird migration patterns is critical for conservation, but manual analysis of large GPS tracking datasets is time-intensive and misses subtle multi-variable correlations.',
    approach: 'Applied clustering algorithms to identify migration corridors, built time-series models for route prediction, and correlated migration patterns with climate variables using geospatial analysis tools.',
    features: [
      'GPS trajectory clustering and corridor mapping',
      'Climate-migration correlation analysis',
      'Species-specific pattern recognition',
      'Interactive migration route visualization',
      'Predictive migration timeline modeling',
      'Conservation risk zone identification',
    ],
    tech: ['Python', 'scikit-learn', 'Pandas', 'GeoPandas', 'Clustering', 'Time-Series', 'Folium'],
    color: '#34D399',
    icon: '🦅',
    github: 'https://github.com/pavithrasunilkumar/BNHSBirdMigration',
    live: '',
    screenshots: [
      { label: 'Migration Route Map',  bg: '#020E08', accent: '#34D399', imageUrl: '' },
      { label: 'Species Analytics',    bg: '#020C07', accent: '#059669', imageUrl: '' },
      { label: 'Climate Correlation',  bg: '#010A06', accent: '#34D399', imageUrl: '' },
    ],
  },
  {
    id: 'adversarial-ml',
    name: 'Adversarial ML Zero-Day',
    tagline: 'Zero-Day Attack Detection with Adversarial ML',
    description: 'A research-driven system that uses adversarial machine learning techniques to detect novel zero-day cyber attacks by training models to recognize attack patterns beyond their training distribution.',
    problem: 'Traditional IDS/IPS systems fail against zero-day exploits because they rely on known attack signatures. Adversarial ML can enable detection of attacks that have never been seen before.',
    approach: 'Combined adversarial training, generative models for synthetic attack data augmentation, and anomaly detection to build a robust detection system that generalizes to unseen attack vectors with high precision.',
    features: [
      'Zero-day attack pattern detection',
      'Adversarial training pipeline',
      'Synthetic attack data generation with GANs',
      'Out-of-distribution anomaly scoring',
      'Real-time network traffic analysis',
      'Attack classification and attribution',
    ],
    tech: ['Python', 'PyTorch', 'GANs', 'Adversarial ML', 'Network Analysis', 'scikit-learn', 'Docker'],
    color: '#F87171',
    icon: '🛡️',
    github: 'https://github.com/pavithrasunilkumar/AdversarialML-ZeroDay',
    live: '',
    screenshots: [
      { label: 'Attack Detection Feed', bg: '#0E0202', accent: '#F87171', imageUrl: '' },
      { label: 'Anomaly Heatmap',       bg: '#0C0202', accent: '#EF4444', imageUrl: '' },
      { label: 'Model Performance',     bg: '#0A0101', accent: '#F87171', imageUrl: '' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// SKILLS — all badges
// ─────────────────────────────────────────────────────────────
export const skills = {
  'Languages': {
    items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'SQL'],
    color: '#00F5FF',
  },
  'AI / ML': {
    items: [
      'Machine Learning', 'Deep Learning', 'Generative AI', 'NLP',
      'Computer Vision', 'LLMs', 'GANs', 'Transformers',
      'Model Training', 'Semantic Analysis', 'Speech Processing',
      'Recommendation Systems',
    ],
    color: '#7B2FBE',
  },
  'Frameworks & Libraries': {
    items: ['React.js', 'Node.js', 'FastAPI', 'Flask', 'PyTorch', 'TensorFlow', 'scikit-learn'],
    color: '#FF3CAC',
  },
  'Backend & APIs': {
    items: ['Backend Development', 'REST APIs', 'API Integration', 'MongoDB', 'SQL', 'PostgreSQL'],
    color: '#FFB800',
  },
  'Frontend': {
    items: [
      'Frontend Development', 'Full-Stack Development', 'Responsive Web Development',
      'Data Visualization', 'HTML5', 'CSS3', 'Tailwind CSS',
    ],
    color: '#4ADE80',
  },
  'DevOps & Cloud': {
    items: ['DevOps', 'Docker', 'Cloud Computing', 'AWS', 'Linux', 'Git', 'GitHub', 'Real-Time Systems'],
    color: '#00C9FF',
  },
  'CS Fundamentals': {
    items: ['Data Structures & Algorithms'],
    color: '#818CF8',
  },
};

// ─────────────────────────────────────────────────────────────
// CERTIFICATIONS
// ─────────────────────────────────────────────────────────────
// HOW TO ADD YOUR CERTIFICATE IMAGE (imageUrl field):
//
//   Option A — Google Drive:
//     1. Upload cert image to Google Drive
//     2. Share → "Anyone with the link" → Copy link
//     3. Convert URL:
//        FROM: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
//        TO:   https://drive.google.com/uc?export=view&id=FILE_ID
//     4. Paste that URL into imageUrl below
//
//   Option B — Forage / Credly / AWS badge:
//     Open your cert page → right-click cert image → "Copy image address"
//     Paste directly as imageUrl
//
//   Option C — Local file:
//     Drop image into /public/certs/wipro.jpg
//     Set imageUrl: '/certs/wipro.jpg'
// ─────────────────────────────────────────────────────────────
export const certifications = [
  {
    name: 'AI & Data Science Trainee',
    issuer: 'Wipro',
    year: '2024',
    color: '#00F5FF',
  },
  {
    name: 'Data Analytics Virtual Internship',
    issuer: 'Deloitte (Forage)',
    year: '2024',
    color: '#7B2FBE',
  },
  {
    name: 'Software Engineering Virtual Experience',
    issuer: 'JPMorgan Chase (Forage)',
    year: '2024',
    color: '#FF3CAC',
  },
  {
    name: 'AI & Machine Learning Certifications',
    issuer: 'edX',
    year: '2023',
    color: '#FFB800',
  },
  {
  name: 'AI & Full Stack Development Program',
  issuer: 'Infosys Springboard',
  year: '2024',
  color: '#00AEEF',
},
 
];

// ─────────────────────────────────────────────────────────────
// SOCIAL LINKS — edit once, updates every button on the site
// ─────────────────────────────────────────────────────────────
export const socialLinks = {
  github: 'https://github.com/pavithrasunilkumar',
  linkedin: 'https://www.linkedin.com/in/pavithra-sunilkumar68/',
  email: 'pavithrasunilk68@gmail.com',
};
