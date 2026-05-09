import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { socialLinks } from '../data/projects';

const TYPING_STRINGS = [
  'AI & Data Science Engineer',
  'Machine Learning Researcher',
  'Computer Vision Specialist',
  'Software developer',
  'Full-Stack Developer',
  'GenAI Explorer',
];

function useTyping(strings: string[], speed = 60, pause = 1800) {
  const [text, setText] = useState('');
  const [strIndex, setStrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setStrIndex(s => (s + 1) % strings.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, strIndex, strings, speed, pause]);

  return text;
}

function Particle({ i }: { i: number }) {
  const size = Math.random() * 3 + 1;
  const x = Math.random() * 100;
  const duration = Math.random() * 15 + 10;
  const delay = Math.random() * -20;

  return (
    <motion.div
      className="absolute rounded-full opacity-30"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        background: i % 3 === 0 ? '#00F5FF' : i % 3 === 1 ? '#7B2FBE' : '#FF3CAC',
      }}
      animate={{
        y: ['-10vh', '110vh'],
        x: [0, (Math.random() - 0.5) * 100],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

function GirlIllustration() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set((e.clientX - cx) / 12);
      mouseY.set((e.clientY - cy) / 12);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className="relative flex items-center justify-center select-none"
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Glow rings */}
      <div className="absolute inset-0 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)' }} />
      <motion.div
        className="absolute w-72 h-72 rounded-full border border-accent/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full border border-purple-500/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      {/* Orbiting dots */}
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i === 0 ? '#00F5FF' : i === 1 ? '#7B2FBE' : '#FF3CAC',
            boxShadow: `0 0 8px ${i === 0 ? '#00F5FF' : i === 1 ? '#7B2FBE' : '#FF3CAC'}`,
          }}
          animate={{ rotate: [deg, deg + 360] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
          transformTemplate={(_vals, t) => `${t} translateX(130px)`}
        />
      ))}

      {/* SVG Girl Illustration */}
      <div className="relative z-10 w-56 h-56">
        <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          {/* Glow */}
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7B2FBE" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDBCB4" />
              <stop offset="100%" stopColor="#F4A590" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D1B00" />
              <stop offset="100%" stopColor="#1A0E00" />
            </linearGradient>
            <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1E2E" />
              <stop offset="100%" stopColor="#0D0D1A" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7B2FBE" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B2FBE" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
          </defs>

          {/* Background glow */}
          <ellipse cx="100" cy="160" rx="70" ry="30" fill="url(#glow)" />

          {/* Body/Torso */}
          <rect x="65" y="105" width="70" height="60" rx="10" fill="url(#shirtGrad)" />

          {/* Arms */}
          <path d="M65 115 C45 120, 40 135, 50 150" stroke="url(#skinGrad)" strokeWidth="14" strokeLinecap="round" fill="none" />
          <path d="M135 115 C155 120, 160 135, 150 150" stroke="url(#skinGrad)" strokeWidth="14" strokeLinecap="round" fill="none" />

          {/* Hands */}
          <ellipse cx="50" cy="153" rx="8" ry="6" fill="url(#skinGrad)" />
          <ellipse cx="150" cy="153" rx="8" ry="6" fill="url(#skinGrad)" />

          {/* Neck */}
          <rect x="90" y="88" width="20" height="20" rx="4" fill="url(#skinGrad)" />

          {/* Head */}
          <ellipse cx="100" cy="72" rx="30" ry="32" fill="url(#skinGrad)" />

          {/* Hair */}
          <ellipse cx="100" cy="50" rx="32" ry="22" fill="url(#hairGrad)" />
          <path d="M70 60 C65 85, 68 95, 73 100" stroke="#1A0E00" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M130 60 C135 85, 132 95, 127 100" stroke="#1A0E00" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M72 45 C80 30, 120 30, 128 45" fill="#2D1B00" />

          {/* Face features */}
          {/* Eyes */}
          <ellipse cx="88" cy="70" rx="5" ry="6" fill="#1A0A00" />
          <ellipse cx="112" cy="70" rx="5" ry="6" fill="#1A0A00" />
          <circle cx="90" cy="68" r="1.5" fill="white" />
          <circle cx="114" cy="68" r="1.5" fill="white" />

          {/* Eyebrows */}
          <path d="M82 63 C86 60, 92 61, 94 63" stroke="#2D1B00" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M106 63 C108 61, 114 60, 118 63" stroke="#2D1B00" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Smile */}
          <path d="M92 80 C96 86, 104 86, 108 80" stroke="#C97060" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Nose */}
          <path d="M98 73 C97 77, 99 79, 102 79, 103 77" stroke="#D49070" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Earrings */}
          <circle cx="70" cy="75" r="3" fill="#00F5FF" opacity="0.9" />
          <circle cx="130" cy="75" r="3" fill="#00F5FF" opacity="0.9" />

          {/* Laptop base */}
          <rect x="40" y="155" width="120" height="8" rx="4" fill="#2A2A3E" />
          <rect x="45" y="140" width="110" height="18" rx="3" fill="url(#laptopGrad)" />

          {/* Laptop screen */}
          <rect x="48" y="118" width="104" height="68" rx="5" fill="url(#laptopGrad)" />
          <rect x="52" y="122" width="96" height="60" rx="3" fill="#050510" />

          {/* Screen content - glowing code */}
          <rect x="56" y="126" width="40" height="2" rx="1" fill="#00F5FF" opacity="0.8" />
          <rect x="56" y="131" width="60" height="2" rx="1" fill="#7B2FBE" opacity="0.6" />
          <rect x="60" y="136" width="50" height="2" rx="1" fill="#00F5FF" opacity="0.4" />
          <rect x="60" y="141" width="35" height="2" rx="1" fill="#FF3CAC" opacity="0.5" />
          <rect x="56" y="146" width="55" height="2" rx="1" fill="#7B2FBE" opacity="0.6" />
          <rect x="60" y="151" width="45" height="2" rx="1" fill="#00F5FF" opacity="0.4" />
          <rect x="56" y="156" width="30" height="2" rx="1" fill="#4ADE80" opacity="0.5" />
          <rect x="56" y="161" width="65" height="2" rx="1" fill="#00F5FF" opacity="0.3" />
          <rect x="60" y="166" width="40" height="2" rx="1" fill="#FF3CAC" opacity="0.4" />
          <rect x="56" y="171" width="50" height="2" rx="1" fill="#7B2FBE" opacity="0.5" />

          {/* Screen cursor blink indicator */}
          <motion.rect
            x="108" y="156" width="2" height="8" rx="1" fill="#00F5FF"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />

          {/* AI badge on shirt */}
          <rect x="82" y="118" width="36" height="16" rx="4" fill="#00F5FF" opacity="0.15" />
          <rect x="83" y="119" width="34" height="14" rx="3" stroke="#00F5FF" strokeWidth="0.5" fill="none" opacity="0.5" />
          <text x="92" y="130" fontSize="6" fill="#00F5FF" fontFamily="JetBrains Mono" opacity="0.9">A I / M L</text>

          {/* Floating data particles around figure */}
          <motion.circle cx="160" cy="80" r="3" fill="#00F5FF" opacity="0.6"
            animate={{ y: [-5, 5, -5], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle cx="38" cy="90" r="2" fill="#FF3CAC" opacity="0.5"
            animate={{ y: [5, -5, 5], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.circle cx="170" cy="120" r="2" fill="#7B2FBE" opacity="0.5"
            animate={{ y: [-3, 7, -3] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const typedText = useTyping(TYPING_STRINGS);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex flex-col overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => <Particle key={i} i={i} />)}
      </div>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10 blob"
          style={{ background: 'radial-gradient(circle, #00F5FF, transparent)' }} />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl opacity-10 blob-2"
          style={{ background: 'radial-gradient(circle, #7B2FBE, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5 blob-3"
          style={{ background: 'radial-gradient(circle, #FF3CAC, transparent)' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent font-mono tracking-widest">OPEN TO OPPORTUNITIES</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text glow-text block mt-1">Pavithra</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="text-lg sm:text-xl text-white/60 font-light min-h-[2rem]"
            >
              <span className="text-accent font-mono">&gt;</span>{' '}
              <span>{typedText}</span>
              <span className="inline-block w-0.5 h-5 bg-accent ml-1 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-white/50 text-base leading-relaxed max-w-lg"
            >
              A passionate Computer Science engineer specializing in AI & Data Science — building intelligent systems that transform raw data into real-world impact. From computer vision to generative AI, I engineer solutions that matter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-3 mt-2"
            >
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white/80 text-sm font-medium hover:border-accent/40 hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={16} />
                GitHub
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white/80 text-sm font-medium hover:border-accent/40 hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Linkedin size={16} />
                LinkedIn
              </motion.a>
              <motion.a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white/80 text-sm font-medium hover:border-accent/40 hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={16} />
                Email
              </motion.a>
              <motion.button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-bg transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #00F5FF, #7B2FBE)' }}
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 30px rgba(0,245,255,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ChevronDown size={16} />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-8 mt-2"
            >
              {[
                { label: 'Projects', value: '10+' },
                { label: 'CGPA', value: '7.98' },
                { label: 'Certifications', value: '10+' },
              ].map(stat => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-black gradient-text">{stat.value}</span>
                  <span className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <GirlIllustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="text-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
