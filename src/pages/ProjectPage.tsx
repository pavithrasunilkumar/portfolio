import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Check, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 mb-4">Project not found</p>
          <button onClick={() => navigate('/')} className="text-accent hover:underline">Go Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-5"
          style={{ background: `radial-gradient(circle, ${project.color}, transparent)` }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/#projects')}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Projects</span>
        </motion.button>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
            >
              {project.icon}
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white">{project.name}</h1>
              <p className="text-sm mt-1" style={{ color: project.color }}>{project.tagline}</p>
            </div>
          </div>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8 sm:p-10 mb-6 relative overflow-hidden"
        >
          {/* Accent top border */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
          />

          <div className="space-y-10">
            {/* Description */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: project.color }}>
                Overview
              </h2>
              <p className="text-white/70 leading-relaxed text-base">{project.description}</p>
            </div>

            <div className="h-px bg-white/5" />

            {/* Problem */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: project.color }}>
                Problem Statement
              </h2>
              <div
                className="rounded-xl p-5 border-l-4"
                style={{ background: `${project.color}08`, borderColor: project.color }}
              >
                <p className="text-white/70 leading-relaxed italic">"{project.problem}"</p>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            {/* Approach */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: project.color }}>
                Approach & Architecture
              </h2>
              <p className="text-white/70 leading-relaxed">{project.approach}</p>
            </div>

            <div className="h-px bg-white/5" />

            {/* Features */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: project.color }}>
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${project.color}20` }}
                    >
                      <Check size={10} style={{ color: project.color }} />
                    </div>
                    <span className="text-sm text-white/70">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/5" />

            {/* Tech stack */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: project.color }}>
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
                    style={{
                      background: `${project.color}10`,
                      border: `1px solid ${project.color}25`,
                      color: `${project.color}CC`,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-bg transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}88)` }}
            >
              <Github size={16} />
              View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-white/10 text-white/70 hover:border-white/20 transition-all"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-white/10 text-white/50 hover:text-white transition-all"
          >
            <ArrowLeft size={16} />
            All Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
}
