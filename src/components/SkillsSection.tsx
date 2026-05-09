import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { skills } from '../data/projects';

function SkillBadge({ name, color, index }: { name: string; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={{ scale: 1.08, y: -3, boxShadow: `0 0 20px ${color}40`, borderColor: `${color}60` }}
      className="px-4 py-2 rounded-xl text-sm font-medium cursor-default transition-all duration-200"
      style={{ background: `${color}0C`, border: `1px solid ${color}20`, color: `${color}CC` }}
    >
      {name}
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-xs text-accent font-mono tracking-[0.3em] uppercase">03 / Skills</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            My <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm">
            Technologies and tools I use to build intelligent, scalable systems.
          </p>
        </FadeIn>

        <div className="space-y-5">
          {Object.entries(skills).map(([category, { items, color }], catIndex) => (
            <FadeIn key={category} delay={catIndex * 0.07}>
              <div className="glass rounded-2xl p-6 relative overflow-hidden">
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }} />

                <div className="flex items-center gap-3 mb-5 ml-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                    {['⌨️','🧠','⚡','🔌','🎨','☁️','📐'][catIndex] ?? '🔹'}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color }}>
                    {category}
                  </h3>
                  <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${color}30, transparent)` }} />
                  <span className="text-xs font-mono text-white/20">{items.length}</span>
                </div>

                <div className="flex flex-wrap gap-2.5 ml-3">
                  {items.map((skill, i) => (
                    <SkillBadge key={skill} name={skill} color={color} index={i} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Proficiency bars */}
        <FadeIn delay={0.4} className="mt-8">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Core Competency Areas</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { label: 'Machine Learning & Deep Learning', value: 90, color: '#00F5FF' },
                { label: 'Generative AI & LLMs',            value: 85, color: '#7B2FBE' },
                { label: 'Natural Language Processing',     value: 84, color: '#FF3CAC' },
                { label: 'Computer Vision',                 value: 82, color: '#4ADE80' },
                { label: 'Full-Stack Development',          value: 80, color: '#FFB800' },
                { label: 'DevOps & Cloud (AWS)',            value: 76, color: '#FF9900' },
                { label: 'Data Engineering & Analytics',    value: 75, color: '#818CF8' },
              ].map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-white/60">{item.label}</span>
                    <span className="text-xs font-mono" style={{ color: item.color }}>{item.value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${item.color}80, ${item.color})` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
