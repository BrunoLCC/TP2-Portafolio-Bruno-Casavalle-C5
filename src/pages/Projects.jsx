import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Landing para una cafetería',
    description:
      'Una página de práctica para presentar un local, mostrar su propuesta e invitar a conocer el menú.',
    technologies: ['HTML', 'CSS'],
    extra:
      'La idea del ejercicio es organizar una página en secciones y cuidar que se pueda recorrer desde el celular.',
  },
  {
    title: 'Lista de tareas',
    description:
      'Una propuesta sencilla para anotar tareas y practicar interacciones habituales de una aplicación.',
    technologies: ['JavaScript', 'CSS'],
    extra:
      'Este ejemplo sirve para practicar eventos, actualización de la interfaz y organización de datos.',
  },
  {
    title: 'Portfolio multipágina',
    description:
      'Este mismo trabajo práctico: un portfolio con páginas separadas y navegación sin recargas.',
    technologies: ['React', 'React Router', 'CSS'],
    extra:
      'La navegación utiliza rutas y componentes reutilizables; el menú lateral permanece visible al cambiar de sección.',
  },
]

function Projects() {
  return (
    <section>
      <p className="page-kicker">Ideas y práctica</p>
      <h1 className="page-title">
        Proyectos para
        <br />
        <span>aprender haciendo.</span>
      </h1>
      <p className="page-lead">
        Estos son ejemplos de práctica para mostrar el tipo de cosas que puedo
        construir mientras sigo aprendiendo. Puedo reemplazarlos por trabajos
        propios a medida que avance.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            number={`0${index + 1}`}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            extra={project.extra}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
