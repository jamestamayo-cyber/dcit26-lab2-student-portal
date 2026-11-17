function CourseCard({ code, title, units, instructor }) {
  return (
    <article className="info-card">
      <h2 className="card-heading">{code}</h2>
      <dl className="card-details">
        <div>
          <dt>Course Title</dt>
          <dd>{title}</dd>
        </div>
        <div>
          <dt>Units</dt>
          <dd>{units}</dd>
        </div>
        <div>
          <dt>Instructor</dt>
          <dd>{instructor}</dd>
        </div>
      </dl>
    </article>
  )
}

export default CourseCard
