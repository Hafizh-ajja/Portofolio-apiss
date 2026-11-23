import Tag from './Tag'

const HEADING_COLORS = ['pink', 'blue', 'orange']

export default function SkillCard({ title, tags, index = 0 }) {
  const headingColor = HEADING_COLORS[index % HEADING_COLORS.length]

  return (
    <div className="skill-card">
      <h3 style={{ color: `var(--${headingColor})` }}>{title}</h3>
      <div className="tag-row">
        {tags.map((tag, i) => (
          <Tag key={tag} index={i} floatIndex={index * 10 + i}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  )
}
