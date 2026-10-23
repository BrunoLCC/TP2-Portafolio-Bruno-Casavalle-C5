function SkillCard({ name, level, description }) {
  return (
    <article className="tarjeta-habilidad">
      <div className="encabezado-habilidad">
        <h2>{name}</h2>
        <span className="nivel-habilidad">{level}</span>
      </div>
      <p>{description}</p>
    </article>
  )
}

export default SkillCard
