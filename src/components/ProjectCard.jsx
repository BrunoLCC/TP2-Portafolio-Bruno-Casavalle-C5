import { useState } from 'react'

function ProjectCard({ number, title, description, technologies, extra }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className="project-card">
      <span className="project-number">{number}</span>
      <h2>{title}</h2>
      <p className="project-description">{description}</p>
      <ul className="tag-list" aria-label={`Tecnologías de ${title}`}>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <button
        className="project-toggle"
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {isExpanded ? 'Ver menos −' : 'Ver más +'}
      </button>
      {isExpanded && <p className="project-extra">{extra}</p>}
    </article>
  )
}

export default ProjectCard
