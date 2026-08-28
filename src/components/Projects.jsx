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
            <Reveal key={project.title}>
              <ProjectCard {...project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
