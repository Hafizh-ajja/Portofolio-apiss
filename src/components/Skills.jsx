import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SkillCard from './SkillCard'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skill">
      <div className="wrap">
        <SectionHeading tag="tools favorit" title="Skill & Tech Stack" />

        <div className="skill-groups">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} style={{ transitionDelay: `${i * 110}ms` }}>
              <SkillCard title={group.title} tags={group.tags} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
