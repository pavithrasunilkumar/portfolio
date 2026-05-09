import { motion } from 'framer-motion';
import { Brain, Sparkles, Code2, Target } from 'lucide-react';
import FadeIn from './FadeIn';

const traits = [
  {
    icon: Brain,
    label: 'AI + ML Focus',
    desc: 'Deep expertise in machine learning, deep learning, NLP, and computer vision — building models that learn and adapt.',
    color: '#00F5FF',
  },
  {
    icon: Target,
    label: 'Product Mindset',
    desc: 'Engineering with the end-user in mind. Every system I build solves a real problem at real scale.',
    color: '#7B2FBE',
  },
  {
    icon: Sparkles,
    label: 'Generative AI',
    desc: 'Exploring the frontier of LLMs, GANs, and diffusion models to build the next generation of intelligent applications.',
    color: '#FF3CAC',
  },
  {
    icon: Code2,
    label: 'Full-Stack Build',
    desc: 'From data pipelines to polished UIs — I own the full development cycle and ship end-to-end solutions.',
    color: '#4ADE80',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <span className="text-xs text-accent font-mono tracking-[0.3em] uppercase">01 / About</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Main about card */}
          <FadeIn direction="left">
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-24 h-24 rounded-br-full opacity-20"
                style={{ background: 'linear-gradient(135deg, #00F5FF, transparent)' }} />
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-10"
                style={{ background: 'radial-gradient(circle, #7B2FBE, transparent)' }} />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-3xl"
                  style={{ background: 'linear-gradient(135deg, #00F5FF22, #7B2FBE22)', border: '1px solid rgba(0,245,255,0.2)' }}>
                  👩‍💻
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  Pavithra Sunilkumar
                </h3>
                <p className="text-white/50 text-xs font-mono mb-6 tracking-wider">
                  B.Tech AI & Data Science · MIT World Peace University, Pune · CGPA: 7.98
                </p>

                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    I'm a Computer Science engineer with a specialization in{' '}
                    <span className="text-accent font-medium">Artificial Intelligence & Data Science</span>,
                    driven by the belief that intelligent systems can fundamentally transform how we solve
                    the world's hardest problems.
                  </p>
                  <p>
                    My work spans the full AI stack — from architecting neural network pipelines and
                    training large-scale models, to building beautiful interfaces that make AI accessible.
                    I bring a{' '}
                    <span className="text-purple-400 font-medium">product engineer's mindset</span>{' '}
                    to every project: ship fast, iterate smart, and always keep the user at the center.
                  </p>
                  <p>
                    When I'm not training models or shipping features, I'm exploring the frontier of{' '}
                    <span className="text-pink-400 font-medium">Generative AI</span> and contributing
                    to open-source AI tools that democratize access to intelligent technology.
                  </p>
                </div>

                {/* Skill highlights */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Python', 'PyTorch', 'LLMs', 'Computer Vision', 'NLP', 'React', 'FastAPI'].map(tag => (
                    <span key={tag}
                      className="text-xs px-3 py-1 rounded-full font-mono"
                      style={{
                        background: 'rgba(0,245,255,0.06)',
                        border: '1px solid rgba(0,245,255,0.15)',
                        color: '#00F5FF99',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <FadeIn key={trait.label} delay={i * 0.1} direction="right">
                <motion.div
                  className="glass glass-hover rounded-xl p-5 h-full cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
                    style={{ background: `${trait.color}15`, border: `1px solid ${trait.color}30` }}>
                    <trait.icon size={18} style={{ color: trait.color }} />
                  </div>
                  <h4 className="font-bold text-sm mb-2" style={{ color: trait.color }}>
                    {trait.label}
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed">{trait.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom metrics bar */}
        <FadeIn delay={0.3} className="mt-12">
          <div className="glass rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '9+', label: 'AI Projects Built', color: '#00F5FF' },
              { value: '5+', label: 'ML Models Deployed', color: '#7B2FBE' },
              { value: '4+', label: 'Industry Certifications', color: '#FF3CAC' },
              { value: '7.98', label: 'CGPA', color: '#4ADE80' },
            ].map(metric => (
              <div key={metric.label} className="flex flex-col items-center gap-1">
                <motion.span
                  className="text-3xl font-black"
                  style={{ color: metric.color }}
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {metric.value}
                </motion.span>
                <span className="text-xs text-white/40 uppercase tracking-wider">{metric.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
