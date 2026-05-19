import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../data/projects';

// ─────────────────────────────────────────────────────────────
// Screenshot Slider
// ─────────────────────────────────────────────────────────────

function ScreenshotSlider({
  screenshots,
  color,
  name,
}: {
  screenshots: Project['screenshots'];
  color: string;
  name: string;
}) {
  
  // No screenshots → premium placeholder UI
if (
  !screenshots ||
  screenshots.length === 0 ||
  screenshots.every((s) => !s.imageUrl)
) {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden flex-shrink-0"
      style={{
        height: 148,
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
        border: `1px solid ${color}25`,
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at top right, ${color}30, transparent 60%)`,
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Floating Orb */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20"
        style={{
          background: color,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3"
          style={{
            background: `${color}15`,
            border: `1px solid ${color}35`,
            boxShadow: `0 0 25px ${color}20`,
          }}
        >
          <ImageIcon size={26} style={{ color }} />
        </div>

        <h3
          className="text-sm font-bold tracking-wide"
          style={{ color }}
        >
          Preview Coming Soon
        </h3>

        <p className="text-[11px] text-white/40 mt-1 leading-relaxed max-w-[220px]">
          Interactive project visuals and dashboard previews will appear here.
        </p>

        {/* Animated Dots */}
        <div className="flex gap-1 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDir(1);
    setCur((c) => (c + 1) % screenshots.length);
  }, [screenshots.length]);

  const prev = useCallback(() => {
    setDir(-1);
    setCur((c) => (c - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

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
            enter: (d: number) => ({
              x: d * 40,
              opacity: 0,
            }),

            center: {
              x: 0,
              opacity: 1,
            },

            exit: (d: number) => ({
              x: -d * 40,
              opacity: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.42,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <img
            src={sc.imageUrl}
            alt={`${name} — ${sc.label}`}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${sc.accent}08, transparent 70%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {screenshots.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: `1px solid ${sc.accent}35`,
            }}
          >
            <ChevronLeft size={11} style={{ color: sc.accent }} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: `1px solid ${sc.accent}35`,
            }}
          >
            <ChevronRight size={11} style={{ color: sc.accent }} />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setDir(i > cur ? 1 : -1);
              setCur(i);
            }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === cur ? 14 : 5,
              height: 5,
              background:
                i === cur
                  ? sc.accent
                  : 'rgba(255,255,255,0.22)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Project Card
// ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group glass rounded-2xl overflow-hidden cursor-pointer relative border border-white/5 transition-all duration-300 flex flex-col"
    >
      {/* Top Glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }}
      />

      {/* Hover Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 65%)`,
          boxShadow: `inset 0 0 0 1px ${project.color}15`,
        }}
      />

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Slider */}
        <ScreenshotSlider
          screenshots={project.screenshots}
          color={project.color}
          name={project.name}
        />

        {/* Header */}
        <div className="flex items-start justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{
                background: `${project.color}12`,
                border: `1px solid ${project.color}25`,
              }}
            >
              {project.icon}
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-white/90 leading-tight">
                {project.name}
              </h3>

              <p
                className="text-[11px] font-mono mt-0.5"
                style={{
                  color: `${project.color}AA`,
                }}
              >
                {project.tagline}
              </p>
            </div>
          </div>

          <motion.button
            onClick={() =>
              navigate(`/project/${project.id}`)
            }
            className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}25`,
            }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight
              size={13}
              style={{ color: project.color }}
            />
          </motion.button>
        </div>

        {/* Description */}
        <p className="text-[13px] text-white/45 leading-relaxed line-clamp-2 relative z-10">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 relative z-10">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded font-mono"
              style={{
                background: `${project.color}0D`,
                border: `1px solid ${project.color}20`,
                color: `${project.color}BB`,
              }}
            >
              {t}
            </span>
          ))}

          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded font-mono text-white/30 border border-white/10">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2 border-t border-white/5 relative z-10 mt-auto">
          {/* Details */}
          <motion.button
            onClick={() =>
              navigate(`/project/${project.id}`)
            }
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-semibold tracking-wider transition-all duration-300"
            style={{
              background: `${project.color}10`,
              border: `1px solid ${project.color}20`,
              color: `${project.color}CC`,
            }}
            whileHover={{ scale: 1.02 }}
          >
            <ArrowUpRight size={11} />
            Details
          </motion.button>

          {/* GitHub */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-semibold transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.5)',
            }}
            whileHover={{
              scale: 1.02,
              color: '#fff',
            }}
          >
            <Github size={11} />
            GitHub
          </motion.a>

          {/* Live */}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold transition-all duration-300"
              style={{
                background: `${project.color}18`,
                border: `1px solid ${project.color}30`,
                color: `${project.color}DD`,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 0 18px ${project.color}30`,
              }}
            >
              <ExternalLink size={11} />
              Live
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}