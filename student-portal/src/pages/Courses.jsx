import CourseCard from '../components/CourseCard.jsx'

const courses = [
  {
    code: 'DCIT 26',
    title: 'Application Development and Emerging Technologies',
    units: 3,
    instructor: 'Department Faculty',
  },
  {
    code: 'ITEC 85',
    title: 'Information Assurance and Security',
    units: 3,
    instructor: 'Department Faculty',
  },
  {
    code: 'ITEC 90',
    title: 'System Integration and Architecture',
    units: 3,
    instructor: 'Department Faculty',
  },
]

function Courses() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Learning at CvSU</p>
        <h1>Courses</h1>
        <p>Explore a selection of courses offered by the department.</p>
      </div>
      <div className="card-grid">
        {courses.map((course) => (
          <CourseCard key={course.code} {...course} />
        ))}
      </div>
    </section>
  )
}

export default Courses
