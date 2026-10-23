import SkillCard from '../components/SkillCard'

const skills = [
  {
    name: 'HTML',
    level: 'En práctica',
    description: 'Estructurar contenido con etiquetas claras y semánticas.',
  },
  {
    name: 'CSS',
    level: 'En práctica',
    description: 'Dar estilo a páginas y adaptarlas a distintos tamaños.',
  },
  {
    name: 'JavaScript',
    level: 'Aprendiendo',
    description: 'Agregar lógica e interacciones a una página web.',
  },
  {
    name: 'React',
    level: 'Aprendiendo',
    description: 'Crear interfaces con componentes, props y estado.',
  },
  {
    name: 'Git',
    level: 'En práctica',
    description: 'Guardar cambios y revisar el avance de mis proyectos.',
  },
  {
    name: 'GitHub',
    level: 'En práctica',
    description: 'Compartir código y mantener repositorios.',
  },
]

function Skills() {
  return (
    <section>
      <p className="page-kicker">Lo que estoy aprendiendo</p>
      <h1 className="page-title">
        Herramientas para
        <br />
        <span>seguir creando.</span>
      </h1>
      <p className="page-lead">
        Este listado muestra tecnologías que estoy empezando a usar o con las
        que practico. Los niveles reflejan mi proceso actual, no una
        certificación.
      </p>

      <div className="skill-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            level={skill.level}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
