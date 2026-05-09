import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, Check, ExternalLink, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { projects } from '../data/projects';

// ─── Full detail page screenshot slider ───────────────────────────────────
function DetailSlider({ screenshots, color }: {
  screenshots: typeof projects[0]['screenshots'];
  color: string;
}) {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => { setDir(1);  setCur(c => (c+1) % screenshots.length); }, [screenshots.length]);
  const prev = useCallback(() => { setDir(-1); setCur(c => (c-1+screenshots.length) % screenshots.length); }, [screenshots.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3200);
    return () => clearInterval(t);
  }, [next, paused]);

  const sc = screenshots[cur];

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ height: 280 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={cur}
          custom={dir}
          variants={{
            enter:  (d: number) => ({ x: d * 60, opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit:   (d: number) => ({ x: -d * 60, opacity: 0 }),
          }}
          initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {sc.imageUrl ? (
            <img src={sc.imageUrl} alt={sc.label} className="w-full h-full object-cover" />
          ) : (
            /* Animated placeholder */
            <div className="w-full h-full flex flex-col" style={{ background: sc.bg }}>
              <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: `${sc.accent}15` }}>
                {['#F87171','#FFB800','#4ADE80'].map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-full" style={{ background: `${c}60` }} />
                ))}
                <div className="flex-1 mx-3 h-5 rounded-full flex items-center px-2"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="font-mono text-[9px] tracking-wider" style={{ color: `${sc.accent}60` }}>{sc.label}</span>
                </div>
              </div>
              <div className="flex-1 p-5 grid grid-cols-3 gap-4">
                {/* Sidebar */}
                <div className="space-y-2">
                  {[0.7,1,0.85,0.6,0.9,0.75,0.5].map((h,i) => (
                    <div key={i} className="rounded-lg p-2" style={{
                      height: `${h*28}px`,
                      background: i===2 ? `${sc.accent}18` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${i===2 ? `${sc.accent}25` : 'rgba(255,255,255,0.05)'}`,
                    }} />
                  ))}
                </div>
                {/* Main panel */}
                <div className="col-span-2 space-y-3">
                  <div className="rounded-xl p-4" style={{ background: `${sc.accent}08`, border: `1px solid ${sc.accent}15` }}>
                    <div className="flex justify-between mb-3">
                      <div className="space-y-1.5">
                        {[0.6,0.4,0.7].map((w,i) => (
                          <div key={i} className="h-2 rounded" style={{ width: `${w*140}px`, background: i===0 ? `${sc.accent}40` : 'rgba(255,255,255,0.08)' }} />
                        ))}
                      </div>
                      <motion.div className="w-10 h-10 rounded-lg" style={{ background: `${sc.accent}20` }}
                        animate={{ scale:[1,1.05,1] }} transition={{ duration:2, repeat:Infinity }} />
                    </div>
                    <div className="flex items-end gap-1.5 h-12">
                      {[0.3,0.6,0.4,0.8,0.5,0.9,0.65,0.75].map((h,i) => (
                        <motion.div key={i} className="flex-1 rounded-sm"
                          style={{ height:`${h*100}%`, background:`${sc.accent}${i===5?'60':'25'}` }}
                          initial={{ scaleY:0 }} animate={{ scaleY:1 }}
                          transition={{ delay:i*0.04, duration:0.35 }} />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[0.82,0.94,0.71].map((v,i) => (
                      <div key={i} className="rounded-lg p-3 text-center"
                        style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.05)' }}>
                        <div className="font-bold text-base" style={{ color:sc.accent }}>{Math.round(v*100)}%</div>
                        <div className="font-mono text-[8px] text-white/20 mt-0.5 tracking-widest">METRIC {i+1}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Upload hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(0,0,0,0.5)' }}>
                <div className="flex flex-col items-center gap-2">
                  <ImageIcon size={24} style={{ color: sc.accent }} />
                  <span className="font-mono text-xs text-white/60 tracking-widest">ADD SCREENSHOT IMAGE</span>
                  <span className="font-mono text-[10px] text-white/30">Set imageUrl in projects.ts</span>
                </div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 0%, ${sc.accent}06, transparent 70%)` }} />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center z-20"
        style={{ border: `1px solid ${sc.accent}35` }}>
        <ChevronLeft size={14} style={{ color: sc.accent }} />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center z-20"
        style={{ border: `1px solid ${sc.accent}35` }}>
        <ChevronRight size={14} style={{ color: sc.accent }} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {screenshots.map((_, i) => (
          <button key={i} onClick={() => { setDir(i>cur?1:-1); setCur(i); }}
            className="rounded-full transition-all duration-300"
            style={{ width: i===cur ? 20 : 6, height: 6, background: i===cur ? sc.accent : 'rgba(255,255,255,0.2)' }} />
        ))}
      </div>

      {/* Counter badge */}
      <div className="absolute top-14 right-3 z-10 px-2 py-1 rounded-full glass font-mono text-[10px] tracking-wider"
        style={{ border: `1px solid ${sc.accent}30`, color: sc.accent }}>
        {cur+1}/{screenshots.length}
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 mb-4">Project not found</p>
          <button onClick={() => navigate('/')} className="text-accent hover:underline">← Go Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10 group text-sm"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
              {project.icon}
            </div>
            <div>
              <p className="text-xs font-mono text-white/20 tracking-[0.3em] mb-1">AI PROJECT</p>
              <h1 className="text-4xl sm:text-5xl font-black text-white">{project.name}</h1>
              <p className="text-sm mt-1 font-mono" style={{ color: `${project.color}CC` }}>{project.tagline}</p>
            </div>
          </div>
        </motion.div>

        {/* Screenshot slider */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-6">
          <DetailSlider screenshots={project.screenshots} color={project.color} />
        </motion.div>

        {/* Action buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="flex flex-wrap gap-3 mb-8">
          <a href={project.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}>
            <Github size={16} />
            View on GitHub
            <ExternalLink size={12} />
          </a>

          <a href={project.live} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300"
            style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`, color: '#000' }}>
            <ExternalLink size={16} />
            Project Live
          </a>

          <button onClick={() => navigate('/')}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm text-white/30 hover:text-white/60 transition-colors border border-white/6">
            <ArrowLeft size={14} />
            All Projects
          </button>
        </motion.div>

        {/* Detail card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="glass rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)` }} />

          <div className="space-y-10">
            {/* Overview */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: `${project.color}80` }}>Overview</p>
              <p className="text-white/65 leading-relaxed">{project.description}</p>
            </div>
            <div className="h-px bg-white/5" />

            {/* Problem */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: `${project.color}80` }}>Problem Statement</p>
              <div className="rounded-2xl p-6" style={{ background: `${project.color}06`, borderLeft: `3px solid ${project.color}` }}>
                <p className="text-white/60 leading-relaxed italic">"{project.problem}"</p>
              </div>
            </div>
            <div className="h-px bg-white/5" />

            {/* Approach */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: `${project.color}80` }}>Approach & Architecture</p>
              <p className="text-white/65 leading-relaxed">{project.approach}</p>
            </div>
            <div className="h-px bg-white/5" />

            {/* Features */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-5" style={{ color: `${project.color}80` }}>Key Features</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((f, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${project.color}18` }}>
                      <Check size={10} style={{ color: project.color }} />
                    </div>
                    <span className="text-sm text-white/55">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="h-px bg-white/5" />

            {/* Tech stack */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: `${project.color}80` }}>Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <motion.span key={t} whileHover={{ scale: 1.06, y: -2 }}
                    className="px-4 py-2 rounded-xl text-sm font-medium cursor-default transition-all"
                    style={{ background: `${project.color}0E`, border: `1px solid ${project.color}20`, color: `${project.color}CC` }}>
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
