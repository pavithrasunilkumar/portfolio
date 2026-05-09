import FadeIn from './FadeIn';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-xs text-accent font-mono tracking-[0.3em] uppercase">02 / Projects</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            From AI-powered platforms to computer vision systems — each project is a solution to a real-world challenge.
          </p>
        </FadeIn>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.3} className="text-center mt-12">
          <a
            href="https://github.com/pavithrasunilkumar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-white/10 text-white/60 hover:border-accent/40 hover:text-accent transition-all duration-300"
          >
            View all on GitHub →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
