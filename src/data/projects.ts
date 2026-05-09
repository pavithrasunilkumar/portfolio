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
    description: 'A Tinder-like job discovery platform powered by AI that matches candidates to roles based on skill vectors, preferences, and career trajectory — making job hunting intuitive and intelligent.',
    problem: "Traditional job boards overwhelm candidates with irrelevant listings, leading to decision fatigue and poor matches. Job seekers need a smarter, more engaging way to discover opportunities aligned with their actual skills.",
    approach: 'Built a swipe-based interface backed by an AI recommendation engine using collaborative filtering and NLP-based skill extraction. The system learns from user swipe behavior to continuously refine job matches using real-time feedback loops.',
    features: [
      'Swipe-based intuitive job card interface',
      'AI-powered skill vector matching engine',
      'Real-time preference learning from interactions',
      'Smart filters by role, stack, and culture fit',
      'Instant apply with parsed resume data',
      'Match score transparency dashboard',
    ],
    tech: ['Python', 'React', 'Node.js', 'NLP', 'Collaborative Filtering', 'MongoDB', 'REST APIs'],
    color: '#00F5FF',
    icon: '🎯',
    github: 'https://github.com/pavithrasunilkumar/InHire',
    live: 'https://inhire-demo.vercel.app', // ← REPLACE with your real URL
    screenshots: [
      { label: 'Job Discovery Feed',    bg: '#030F14', accent: '#00F5FF', imageUrl: '' },
      { label: 'Match Score Dashboard', bg: '#030814', accent: '#0EA5E9', imageUrl: '' },
      { label: 'Profile & Skills',      bg: '#020810', accent: '#00F5FF', imageUrl: '' },
    ],
  },
  {
    id: 'intrivue',
    name: 'IntriVue',
    tagline: 'AI Interview Intelligence Platform',
    description: 'An end-to-end AI interview simulation and analysis platform that coaches candidates in real-time using LLMs, speech analysis, and behavioral scoring — turning every practice session into actionable feedback.',
    problem: "Candidates lack access to personalized, data-driven interview preparation. Generic prep resources don't adapt to individual weakness patterns or role-specific competencies.",
    approach: 'Integrated large language models for domain-specific question generation, real-time speech-to-text analysis, sentiment scoring, and a multi-dimensional feedback engine that benchmarks against successful interview patterns.',
    features: [
      'LLM-powered adaptive question generation',
      'Real-time speech analysis and transcription',
      'Behavioral scoring with STAR method detection',
      'Confidence and sentiment heatmaps',
      'Role-specific competency frameworks',
      'Progress tracking across sessions',
    ],
    tech: ['Python', 'LLMs', 'NLP', 'Speech-to-Text', 'React', 'FastAPI', 'PostgreSQL'],
    color: '#7B2FBE',
    icon: '🤖',
    github: 'https://github.com/pavithrasunilkumar/IntriVue',
    live: 'https://intrivue.vercel.app', // ← REPLACE with your real URL
    screenshots: [
      { label: 'Interview Simulator', bg: '#0A0514', accent: '#7B2FBE', imageUrl: '' },
      { label: 'Feedback Analytics',  bg: '#080414', accent: '#6D28D9', imageUrl: '' },
      { label: 'Session History',     bg: '#060314', accent: '#7B2FBE', imageUrl: '' },
    ],
  },
  {
    id: 'pathAegis',
    name: 'PathAegis',
    tagline: 'AI Career Path Guardian',
    description: 'Intelligent career navigation system that analyzes your skills, industry trends, and market demand to generate personalized step-by-step career roadmaps with real-time opportunity alerts.',
    problem: 'Most professionals lack data-driven career strategy — relying on guesswork and fragmented advice, missing high-value skill investments and role transitions.',
    approach: 'Combined resume parsing, graph-based skill dependency mapping, and LLM-driven roadmap generation with live job market signals for always-relevant recommendations.',
    features: [
      'AI-generated personalized career roadmaps',
      'Skill gap analysis against target roles',
      'Live job market trend integration',
      'Graph-based skill dependency visualization',
      'Curated micro-learning path suggestions',
      'Opportunity alert & tracking system',
      'Resume & LinkedIn optimization tips',
      'Salary benchmarking by role & location',
    ],
    tech: ['Python', 'LLMs', 'Graph Algorithms', 'React', 'FastAPI', 'NLP', 'MongoDB', 'REST APIs'],
    color: '#FFB800',
    icon: '🧭',
    github: 'https://github.com/pavithrasunilkumar/PathAegis',
    live: 'https://pathaegis.vercel.app', // ← REPLACE with your real URL
    screenshots: [
      { label: 'Career Roadmap View', bg: '#0E0900', accent: '#FFB800', imageUrl: '' },
      { label: 'Skill Gap Dashboard', bg: '#0C0800', accent: '#D97706', imageUrl: '' },
      { label: 'Opportunity Feed',    bg: '#0A0700', accent: '#FFB800', imageUrl: '' },
    ],
  },
  {
    id: 'securesight',
    name: 'SecureSight AI',
    tagline: 'Privacy Risk Scoring System',
    description: 'An intelligent privacy risk assessment platform that analyzes data flows, user permissions, and system behaviors to generate real-time privacy risk scores and compliance alerts.',
    problem: 'Organizations struggle to monitor and quantify privacy risks across complex data pipelines, leading to compliance failures and data breaches that could have been prevented.',
    approach: 'Developed a multi-layer risk scoring model combining static analysis of data access patterns, dynamic monitoring of API calls, and ML-based anomaly detection to produce actionable risk scores with explainable outputs.',
    features: [
      'Real-time privacy risk score dashboard',
      'Automated data flow mapping and analysis',
      'GDPR/CCPA compliance breach detection',
      'ML-based behavioral anomaly detection',
      'Explainable AI risk justifications',
      'Automated remediation recommendations',
    ],
    tech: ['Python', 'Machine Learning', 'FastAPI', 'React', 'Docker', 'Graph Analysis', 'SQL'],
    color: '#FF3CAC',
    icon: '🔐',
    github: 'https://github.com/pavithrasunilkumar/SecureSightAI',
    live: 'https://securesight-ai.vercel.app',
    screenshots: [
      { label: 'Risk Score Overview', bg: '#0F0306', accent: '#FF3CAC', imageUrl: '' },
      { label: 'Data Flow Graph',     bg: '#0D0205', accent: '#E11D48', imageUrl: '' },
      { label: 'Compliance Alerts',   bg: '#0B0204', accent: '#FF3CAC', imageUrl: '' },
    ],
  },
  {
    id: 'maritime-sentinel',
    name: 'Maritime Sentinel',
    tagline: 'AI Coastal Monitoring System',
    description: 'A deep learning-based maritime surveillance system that monitors coastal zones using satellite and drone imagery to detect unauthorized vessels, oil spills, and environmental anomalies in real-time.',
    problem: 'Coastal authorities face massive blind spots in monitoring vast maritime zones, with manual surveillance being too slow and resource-intensive to be effective against modern threats.',
    approach: 'Deployed YOLO-based object detection models on satellite imagery streams, combined with AIS data fusion and temporal anomaly detection to build a real-time alert system for maritime threats and environmental events.',
    features: [
      'Real-time satellite imagery analysis',
      'YOLO-based vessel detection and classification',
      'Oil spill and environmental anomaly detection',
      'AIS data fusion for vessel tracking',
      'Automated threat alert system',
      'Geospatial visualization dashboard',
    ],
    tech: ['Python', 'YOLO', 'Computer Vision', 'Deep Learning', 'GIS', 'OpenCV', 'FastAPI'],
    color: '#00C9FF',
    icon: '🌊',
    github: 'https://github.com/pavithrasunilkumar/MaritimeSentinel',
    live: 'https://maritime-sentinel.vercel.app',
    screenshots: [
      { label: 'Coastal Surveillance Map', bg: '#020C10', accent: '#00C9FF', imageUrl: '' },
      { label: 'Vessel Detection Feed',    bg: '#020A0D', accent: '#0891B2', imageUrl: '' },
      { label: 'Anomaly Alerts',           bg: '#01080B', accent: '#00C9FF', imageUrl: '' },
    ],
  },
  {
    id: 'crowdsense',
    name: 'CrowdSense AI',
    tagline: 'Intelligent Crowd Detection System',
    description: 'A real-time crowd density estimation and behavior analysis system using computer vision, capable of detecting anomalies, predicting stampede risks, and triggering safety alerts in public venues.',
    problem: 'Public safety in crowded venues remains a major challenge, with reactive emergency responses often being too late. Predictive crowd intelligence can save lives.',
    approach: 'Trained CNN-based density estimation models on multi-camera feeds, integrated optical flow for movement pattern analysis, and built a risk prediction pipeline that issues proactive safety alerts before dangerous situations escalate.',
    features: [
      'Real-time crowd density heat mapping',
      'Anomaly and stampede risk prediction',
      'Multi-camera feed integration',
      'Optical flow movement analysis',
      'Proactive safety alert system',
      'Historical crowd analytics dashboard',
    ],
    tech: ['Python', 'OpenCV', 'CNN', 'Deep Learning', 'RTSP Streams', 'Flask', 'React'],
    color: '#FFB800',
    icon: '👥',
    github: 'https://github.com/pavithrasunilkumar/CrowdSenseAI',
    live: 'https://crowdsense-ai.vercel.app',
    screenshots: [
      { label: 'Density Heatmap',   bg: '#0E0700', accent: '#FFB800', imageUrl: '' },
      { label: 'Risk Dashboard',    bg: '#0C0600', accent: '#D97706', imageUrl: '' },
      { label: 'Camera Grid View',  bg: '#0A0500', accent: '#FFB800', imageUrl: '' },
    ],
  },
  {
    id: 'resumiq',
    name: 'ResumIQ',
    tagline: 'AI Resume Screening Platform',
    description: "An intelligent resume screening and ranking platform that uses NLP to parse resumes, extract skill entities, and match candidates against job descriptions with explainable scoring.",
    problem: "HR teams spend 70% of hiring time on manual resume screening, introducing bias and missing qualified candidates who don't use exact keyword matches.",
    approach: 'Built an NLP pipeline using named entity recognition for skill extraction, semantic similarity scoring for JD-resume matching, and a bias-aware ranking algorithm that surfaces qualified candidates regardless of formatting.',
    features: [
      'Automated resume parsing and NER',
      'Semantic JD-to-resume matching',
      'Bias-aware candidate ranking',
      'Skill gap analysis and reporting',
      'Bulk screening with priority queuing',
      'Explainable match score breakdowns',
    ],
    tech: ['Python', 'NLP', 'spaCy', 'BERT', 'FastAPI', 'React', 'PostgreSQL'],
    color: '#4ADE80',
    icon: '📋',
    github: 'https://github.com/pavithrasunilkumar/ResumIQ',
    live: 'https://resumiq.vercel.app',
    screenshots: [
      { label: 'Resume Analyzer',    bg: '#020E08', accent: '#4ADE80', imageUrl: '' },
      { label: 'Candidate Rankings', bg: '#020C07', accent: '#16A34A', imageUrl: '' },
      { label: 'JD Match Report',    bg: '#010A06', accent: '#4ADE80', imageUrl: '' },
    ],
  },
  {
    id: 'isro360',
    name: 'Mission ISRO 360',
    tagline: 'Space Data Visualization Platform',
    description: "An immersive 3D data visualization platform for ISRO mission data, transforming raw telemetry and orbital mechanics data into stunning interactive visualizations for public outreach and research.",
    problem: "Space mission data is rich but inaccessible to the public and even non-specialist researchers due to its raw, technical nature. Visualization bridges this gap.",
    approach: "Integrated Three.js for 3D orbital visualization, D3.js for telemetry dashboards, and a real-time data pipeline from ISRO's public APIs to create an engaging, educational space data experience.",
    features: [
      '3D orbital trajectory visualization',
      'Real-time telemetry dashboards',
      'Mission timeline and milestone explorer',
      'Satellite coverage zone mapping',
      'Public outreach educational modules',
      'Data export and research tools',
    ],
    tech: ['React', 'Three.js', 'D3.js', 'Python', 'REST APIs', 'WebGL', 'Node.js'],
    color: '#818CF8',
    icon: '🚀',
    github: 'https://github.com/pavithrasunilkumar/MissionISRO360',
    live: 'https://mission-isro-360.vercel.app',
    screenshots: [
      { label: '3D Orbital View',     bg: '#04030F', accent: '#818CF8', imageUrl: '' },
      { label: 'Telemetry Dashboard', bg: '#03020D', accent: '#6366F1', imageUrl: '' },
      { label: 'Mission Timeline',    bg: '#02010C', accent: '#818CF8', imageUrl: '' },
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
    live: 'https://bnhs-migration.vercel.app',
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
    live: 'https://adversarial-ml-demo.vercel.app',
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
    link: '#',      // ← paste your certificate link here
    badge: 'WPR',
    imageUrl: '',   // ← paste your image URL here (see guide above)
  },
  {
    name: 'Data Analytics Virtual Internship',
    issuer: 'Deloitte (Forage)',
    year: '2024',
    color: '#7B2FBE',
    link: '#',
    badge: 'DLT',
    imageUrl: '',
  },
  {
    name: 'Software Engineering Virtual Experience',
    issuer: 'JPMorgan Chase (Forage)',
    year: '2024',
    color: '#FF3CAC',
    link: '#',
    badge: 'JPM',
    imageUrl: '',
  },
  {
    name: 'AI & Machine Learning Certifications',
    issuer: 'edX',
    year: '2023',
    color: '#FFB800',
    link: '#',
    badge: 'edX',
    imageUrl: '',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    color: '#FF9900',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    badge: 'AWS',
    imageUrl: '',
  },
  {
    name: 'AWS Certified DevOps Engineer – Professional',
    issuer: 'Amazon Web Services',
    year: '2024',
    color: '#FF6B35',
    link: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
    badge: 'AWS+',
    imageUrl: '',
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
