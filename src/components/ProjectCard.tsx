import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../data/projects';

// ─── Screenshot slider ─────────────────────────────────────────────────────
function ScreenshotSlider({ screenshots, color, name }: {
  screenshots: Project['screenshots'];
  color: string;
  name: string;
}) {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => { setDir(1);  setCur(c => (c + 1) % screenshots.length); }, [screenshots.length]);
  const prev = useCallback(() => { setDir(-1); setCur(c => (c - 1 + screenshots.length) % screenshots.length); }, [screenshots.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 2800);
    return () => clearInterval(t);
  }, [next, paused]);

  const sc = screenshots[cur];

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden flex-shrink-0 group/slider"
      style={{ height: 148 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={cur}
          custom={dir}
          variants={{
            enter:  (d: number) => ({ x: d * 40, opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit:   (d: number) => ({ x: -d * 40, opacity: 0 }),
          }}
          initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {sc.imageUrl ? (
            /* ── Real screenshot ── */
            <img
              src={sc.imageUrl}
              alt={`${name} — ${sc.label}`}
              className="w-full h-full object-cover"
            />
          ) : (
            /* ── Animated placeholder ── */
            <div className="w-full h-full flex flex-col" style={{ background: sc.bg }}>
              {/* Fake window bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: `${sc.accent}15` }}>
                {['#F87171','#FFB800','#4ADE80'].map((c, i) => (
                  <div key={i} className="w-2 h-2 rounded-full" style={{ background: `${c}60` }} />
                ))}
                <span className="ml-2 font-mono text-[9px] tracking-widest truncate" style={{ color: `${sc.accent}55` }}>
                  {name} · {sc.label}
                </span>
              </div>

              {/* Fake content */}
              <div className="flex-1 p-3 relative overflow-hidden">
                <div className="flex gap-2 mb-2">
                  {[0.5, 0.8, 0.35].map((w, i) => (
                    <div key={i} className="h-2 rounded" style={{ width: `${w*100}%`, background: `${sc.accent}${i===1?'30':'16'}` }} />
                  ))}
                </div>
                <div className="flex gap-2 h-20">
                  <div className="flex-1 space-y-1.5">
                    {[0.9, 0.6, 0.8, 0.5, 0.7, 0.4].map((w, i) => (
                      <div key={i} className="h-1.5 rounded-sm" style={{
                        width: `${w*100}%`,
                        background: i%3===0 ? `${sc.accent}28` : i%3===1 ? 'rgba(255,255,255,0.06)' : `${sc.accent}14`,
                      }} />
                    ))}
                  </div>
                  <div className="w-14 rounded-lg p-2 flex flex-col gap-1" style={{ background: `${sc.accent}0C`, border: `1px solid ${sc.accent}18` }}>
                    {[1, 0.6, 0.8].map((h, i) => (
                      <div key={i} className="rounded-sm" style={{ height: `${h*14}px`, background: `${sc.accent}${i===0?'40':'20'}` }} />
                    ))}
                  </div>
                </div>
                {/* Bottom bars */}
                <div className="absolute bottom-2 left-3 right-3 flex gap-1.5">
                  {[0.45, 0.7, 0.55].map((w, i) => (
                    <div key={i} className="flex-1 h-2.5 rounded relative overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div className="absolute left-0 inset-y-0 rounded" style={{ width: `${w*100}%`, background: `${sc.accent}35` }} />
                    </div>
                  ))}
                </div>
                {/* Pulse dot */}
                <motion.div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full"
                  style={{ background: sc.accent, boxShadow: `0 0 8px ${sc.accent}` }}
                  animate={{ scale: [1,1.3,1], opacity:[0.7,1,0.7] }}
                  transition={{ duration: 2, repeat: Infinity }} />
                {/* Upload hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(0,0,0,0.45)' }}>
                  <div className="flex flex-col items-center gap-1">
                    <ImageIcon size={16} style={{ color: sc.accent }} />
                    <span className="font-mono text-[9px] tracking-widest text-white/60">ADD SCREENSHOT</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 0%, ${sc.accent}08, transparent 70%)` }} />
        </motion.div>
      </AnimatePresence>

      {/* Nav arrows — appear on hover */}
      {screenshots.length > 1 && (
        <>
          <button onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity"
            style={{ background: 'rgba(0,0,0,0.6)', border: `1px solid ${sc.accent}35` }}>
            <ChevronLeft size={11} style={{ color: sc.accent }} />
          </button>
          <button onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity"
            style={{ background: 'rgba(0,0,0,0.6)', border: `1px solid ${sc.accent}35` }}>
            <ChevronRight size={11} style={{ color: sc.accent }} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {screenshots.map((_, i) => (
          <button key={i}
            onClick={e => { e.stopPropagation(); setDir(i > cur ? 1 : -1); setCur(i); }}
            className="rounded-full transition-all duration-300"
            style={{ width: i === cur ? 14 : 5, height: 5, background: i === cur ? sc.accent : 'rgba(255,255,255,0.22)' }} />
        ))}
      </div>
    </div>
  );
}

// ─── Project Card ──────────────────────────────────────────────────────────
interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group glass rounded-2xl overflow-hidden cursor-pointer relative border border-white/5 transition-all duration-300 flex flex-col"
    >
      {/* Top accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 65%)`, boxShadow: `inset 0 0 0 1px ${project.color}15` }} />

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Screenshot slider */}
        <ScreenshotSlider
          screenshots={project.screenshots}
          color={project.color}
          name={project.name}
        />

        {/* Header row */}
        <div className="flex items-start justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: `${project.color}12`, border: `1px solid ${project.color}25` }}>
              {project.icon}
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-white/90 leading-tight">{project.name}</h3>
              <p className="text-[11px] font-mono mt-0.5" style={{ color: `${project.color}AA` }}>{project.tagline}</p>
            </div>
          </div>
          <motion.button onClick={() => navigate(`/project/${project.id}`)}
            className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
            style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
            whileHover={{ scale: 1.1 }}>
            <ArrowUpRight size={13} style={{ color: project.color }} />
          </motion.button>
        </div>

        {/* Description */}
        <p className="text-[13px] text-white/45 leading-relaxed line-clamp-2 relative z-10">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 relative z-10">
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className="text-xs px-2 py-0.5 rounded font-mono"
              style={{ background: `${project.color}0D`, border: `1px solid ${project.color}20`, color: `${project.color}BB` }}>
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded font-mono text-white/30 border border-white/10">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-2 border-t border-white/5 relative z-10 mt-auto">
          {/* Details */}
          <motion.button onClick={() => navigate(`/project/${project.id}`)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-semibold tracking-wider transition-all duration-300"
            style={{ background: `${project.color}10`, border: `1px solid ${project.color}20`, color: `${project.color}CC` }}
            whileHover={{ scale: 1.02 }}>
            <ArrowUpRight size={11} />
            Details
          </motion.button>

          {/* GitHub */}
          <motion.a href={project.github} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-semibold transition-all duration-300"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
            whileHover={{ scale: 1.02, color: '#fff' }}>
            <Github size={11} />
            GitHub
          </motion.a>

          {/* Project Live */}
          <motion.a href={project.live} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold transition-all duration-300"
            style={{ background: `${project.color}18`, border: `1px solid ${project.color}30`, color: `${project.color}DD` }}
            whileHover={{ scale: 1.02, boxShadow: `0 0 18px ${project.color}30` }}>
            <ExternalLink size={11} />
            Live
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
