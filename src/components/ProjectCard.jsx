import { useState } from 'react'

function ProjectCard({ number, title, description, technologies, extra }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className="tarjeta-proyecto">
      <span className="numero-proyecto">{number}</span>
      <h2>{title}</h2>
      <p className="descripcion-proyecto">{description}</p>
      <ul className="lista-etiquetas" aria-label={`Tecnologías de ${title}`}>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <button
        className="boton-detalles"
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {isExpanded ? 'Ver menos −' : 'Ver más +'}
      </button>
      {isExpanded && <p className="detalles-proyecto">{extra}</p>}
    </article>
  )
}

export default ProjectCard
