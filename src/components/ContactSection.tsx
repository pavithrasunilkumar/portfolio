import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import FadeIn from './FadeIn';
import { socialLinks } from '../data/projects';

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="text-xs text-accent font-mono tracking-[0.3em] uppercase">05 / Contact</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Open to internships, research collaborations, and exciting AI projects.
            Let's build something meaningful together.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-10"
              style={{ background: 'radial-gradient(circle, #00F5FF, transparent)' }} />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-10"
              style={{ background: 'radial-gradient(circle, #7B2FBE, transparent)' }} />

            <div className="relative z-10">
              <div className="text-6xl mb-6">📬</div>
              <h3 className="text-2xl font-black mb-2 text-white">Pavithra Sunilkumar</h3>
              <p className="text-white/40 text-sm mb-8">AI & Data Science Engineer · Pune, India</p>

              <motion.a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-bg font-bold text-sm transition-all duration-300 mb-8"
                style={{ background: 'linear-gradient(135deg, #00F5FF, #7B2FBE)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,245,255,0.35)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Send size={16} />
                Send a Message
              </motion.a>

              <div className="flex justify-center gap-6">
                {[
                  { icon: Github,   label: 'GitHub',   href: socialLinks.github,               color: '#E8E8E8' },
                  { icon: Linkedin, label: 'LinkedIn',  href: socialLinks.linkedin,             color: '#0A66C2' },
                  { icon: Mail,     label: 'Email',     href: `mailto:${socialLinks.email}`,    color: '#00F5FF' },
                ].map(link => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex flex-col items-center gap-2 group"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 transition-all duration-300"
                      style={{ background: `${link.color}12` }}>
                      <link.icon size={20} style={{ color: link.color }} />
                    </div>
                    <span className="text-xs text-white/30 group-hover:text-white/60 transition-colors">{link.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Email display */}
              <p className="mt-6 text-xs font-mono text-white/20">{socialLinks.email}</p>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-white/5">
        <p className="text-xs text-white/20 font-mono">
          Crafted with ♥ by <span className="text-accent">Pavithra Sunilkumar</span> · AI & DS Engineer
        </p>
      </div>
    </section>
  );
}
