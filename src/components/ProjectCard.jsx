import { useScrub } from '../hooks/useScrub'

export default function ProjectCard({ title, description, tags, image, demoUrl, codeUrl, index = 0 }) {
  const rotateClass = index % 2 === 0 ? 'tilt-left' : 'tilt-right'
  const scrubRef = useScrub(24)

  return (
    <div className={`polaroid ${rotateClass}`} ref={scrubRef}>
      <div className="p-shot">
        {image ? <img src={image} alt={title} /> : `preview-proyek-${index + 1}.png`}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="p-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="p-links">
        <a href={demoUrl}>Live Demo</a>
        <a href={codeUrl}>Source Code</a>
      </div>
    </div>
  )
}
