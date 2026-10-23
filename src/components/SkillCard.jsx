function SkillCard({ name, level, description }) {
  return (
    <article className="skill-card">
      <div className="skill-card-top">
        <h2>{name}</h2>
        <span className="skill-level">{level}</span>
      </div>
      <p>{description}</p>
    </article>
  )
}

export default SkillCard
