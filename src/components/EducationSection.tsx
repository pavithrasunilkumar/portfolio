import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, Award, ImageIcon } from 'lucide-react';
import FadeIn from './FadeIn';
import { certifications } from '../data/projects';

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09, duration: 0.5 }}
      className="group glass rounded-xl overflow-hidden border border-white/5 flex flex-col"
    >
      {/* ── Certificate image area ── */}
      <a
        href={cert.link}
        target="_blank"
        rel="noreferrer"
        className="block relative overflow-hidden group/img flex-shrink-0"
        style={{ height: 110 }}
        title="Click to view certificate"
      >
        {cert.imageUrl ? (
          /* Real image when provided */
          <>
            <img
              src={cert.imageUrl}
              alt={`${cert.name} Certificate`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(0,0,0,0.55)' }}>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass">
                <ExternalLink size={11} style={{ color: cert.color }} />
                <span className="text-[10px] font-mono tracking-widest" style={{ color: cert.color }}>VIEW CERT</span>
              </div>
            </div>
          </>
        ) : (
          /* Placeholder when no image set yet */
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 relative"
            style={{ background: `${cert.color}08` }}>
            {/* Dashed frame */}
            <div className="absolute inset-3 rounded-lg" style={{ border: `1px dashed ${cert.color}22` }} />
            {/* Corner marks */}
            {['top-3 left-3','top-3 right-3','bottom-3 left-3','bottom-3 right-3'].map(pos => (
              <div key={pos} className={`absolute ${pos} w-2 h-2 rounded-sm`}
                style={{ border: `1px solid ${cert.color}40` }} />
            ))}
            {/* Badge */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>
              <span className="font-bold text-sm" style={{ color: cert.color }}>{cert.badge}</span>
            </div>
            {/* Hint */}
            <div className="flex items-center gap-1 text-white/20 group-hover/img:text-white/50 transition-colors">
              <ImageIcon size={9} />
              <span className="text-[9px] font-mono tracking-widest">CLICK TO VIEW</span>
            </div>
            {/* Hover tint */}
            <div className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity"
              style={{ background: `${cert.color}06` }} />
          </div>
        )}
      </a>

      {/* ── Text row ── */}
      <div className="flex items-center gap-3 p-3 flex-1">
        <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: cert.color }} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white/90 leading-tight truncate">{cert.name}</p>
          <p className="text-xs text-white/40 mt-0.5">
            <span style={{ color: cert.color }}>{cert.issuer}</span> · {cert.year}
          </p>
        </div>
        <motion.a href={cert.link} target="_blank" rel="noreferrer"
          onClick={e => e.stopPropagation()}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}>
          <ExternalLink size={13} style={{ color: cert.color }} />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-xs text-accent font-mono tracking-[0.3em] uppercase">04 / Education & Certs</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Learning <span className="gradient-text">Journey</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* ── Education ── */}
          <FadeIn direction="left">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              <GraduationCap size={16} className="text-accent" />
              Education
            </h3>

            <div className="glass rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-10"
                style={{ background: 'radial-gradient(circle, #00F5FF, transparent)' }} />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: '#00F5FF12', border: '1px solid #00F5FF25' }}>
                    🎓
                  </div>
                  <div>
                    <div className="text-xs text-accent font-mono mb-1 tracking-wider">2022 — 2026</div>
                    <h4 className="text-xl font-black text-white">B.Tech AI & Data Science</h4>
                    <p className="text-white/60 text-sm mt-0.5">MIT World Peace University, Pune</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="flex-1 glass rounded-xl p-4 text-center">
                    <div className="text-3xl font-black gradient-text">7.98</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mt-1">CGPA</div>
                  </div>
                  {/* ── CHANGED: 4th → 3rd ── */}
                  <div className="flex-1 glass rounded-xl p-4 text-center">
                    <div className="text-3xl font-black" style={{ color: '#7B2FBE' }}>3rd</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Year</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Key Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning','Deep Learning','NLP','Computer Vision','Data Structures','Database Systems','Cloud Computing','Statistics'].map(c => (
                      <span key={c} className="text-xs px-2.5 py-1 rounded-lg text-white/50 border border-white/8"
                        style={{ background: 'rgba(255,255,255,0.03)' }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Certifications grid ── */}
          <FadeIn direction="right">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              <Award size={16} className="text-accent" />
              Certifications
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <CertCard key={cert.name} cert={cert} index={i} />
              ))}
            </div>

            <div className="glass rounded-xl p-4 border border-dashed border-white/5 text-center mt-3">
              <p className="text-xs text-white/25">+ More certifications from NPTEL, Coursera & edX</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
