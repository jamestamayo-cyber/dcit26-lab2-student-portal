function StudentCard({ name, studentNumber, course, yearLevel }) {
  return (
    <article className="info-card">
      <h2 className="card-heading">{name}</h2>
      <dl className="card-details">
        <div>
          <dt>Student Number</dt>
          <dd>{studentNumber}</dd>
        </div>
        <div>
          <dt>Course</dt>
          <dd>{course}</dd>
        </div>
        <div>
          <dt>Year Level</dt>
          <dd>{yearLevel}</dd>
        </div>
      </dl>
    </article>
  )
}

export default StudentCard
