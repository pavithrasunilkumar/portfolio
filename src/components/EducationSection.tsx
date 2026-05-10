import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import FadeIn from './FadeIn';
import { certifications } from '../data/projects';

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="glass rounded-xl p-4 border border-white/5 group"
    >
      <div className="flex items-start gap-3">
        <div
          className="w-1 self-stretch rounded-full flex-shrink-0"
          style={{ background: cert.color }}
        />

        <div className="flex-1">
          <h4 className="text-sm font-semibold text-white/90 leading-snug">
            {cert.name}
          </h4>

          <p className="text-xs text-white/40 mt-1">
            <span style={{ color: cert.color }}>{cert.issuer}</span> · {cert.year}
          </p>
        </div>
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
          <span className="text-xs text-accent font-mono tracking-[0.3em] uppercase">
            04 / Education & Certifications
          </span>

          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Learning <span className="gradient-text">Journey</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education */}
          <FadeIn direction="left">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              <GraduationCap size={16} className="text-accent" />
              Education
            </h3>

            <div className="glass rounded-2xl p-7 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, #00F5FF, transparent)',
                }}
              />

              <div className="relative z-10">
                {/* Education Timeline */}
                <div className="space-y-4 mb-6">

                  {/* College */}
                  <div className="glass rounded-xl p-4 border border-white/5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs text-accent font-mono tracking-wider mb-1">
                          2023 — 2027
                        </div>

                        <h4 className="text-base font-bold text-white">
                          B.Tech — AI & Data Science
                        </h4>

                        <p className="text-sm text-white/50 mt-1">
                          MIT World Peace University, Pune
                        </p>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-black gradient-text">7.98</div>

                        <div className="text-[10px] uppercase tracking-widest text-white/30">
                          CGPA
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* School */}
                  <div className="glass rounded-xl p-4 border border-white/5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs text-purple-400 font-mono tracking-wider mb-1">
                          12th
                        </div>

                        <h4 className="text-base font-bold text-white">
                          Higher Secondary Education
                        </h4>

                        <p className="text-sm text-white/50 mt-1">
                          holy trinity school, kerala
                        </p>
                      </div>

                      <div className="text-right">
                        <div
                          className="text-lg font-black"
                          style={{ color: '#7B2FBE' }}
                        >
                          90.4
                        </div>

                        <div className="text-[10px] uppercase tracking-widest text-white/30">
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Coursework */}
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-3">
                    Key Coursework
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      'Machine Learning',
                      'Deep Learning',
                      'NLP',
                      'Computer Vision',
                      'Data Structures',
                      'Database Systems',
                      'Cloud Computing',
                      'Statistics',
                    ].map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2.5 py-1 rounded-lg text-white/50 border border-white/8"
                        style={{ background: 'rgba(255,255,255,0.03)' }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Certifications */}
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
              <p className="text-xs text-white/25">
                + More certifications from NPTEL, Coursera & edX
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}