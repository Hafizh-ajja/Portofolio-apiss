import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="proyek">
      <div className="wrap">
        <SectionHeading tag="hasil kerja" title="Proyek Pilihan" />

        <div className="projects">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              style={{
                transitionDelay: `${i * 90}ms`,
                '--from-x': i % 2 === 0 ? '-64px' : '64px',
                '--from-r': i % 2 === 0 ? '-5deg' : '5deg',
              }}
            >
              <ProjectCard {...project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
