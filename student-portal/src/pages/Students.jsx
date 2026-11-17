import StudentCard from '../components/StudentCard.jsx'

const students = [
  {
    name: 'Alex Reyes',
    studentNumber: '2023-00124',
    course: 'BS Information Technology',
    yearLevel: '3rd Year',
  },
  {
    name: 'Jamie Santos',
    studentNumber: '2023-00218',
    course: 'BS Information Technology',
    yearLevel: '3rd Year',
  },
  {
    name: 'Morgan Dela Cruz',
    studentNumber: '2022-00407',
    course: 'BS Computer Science',
    yearLevel: '4th Year',
  },
]

function Students() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Our community</p>
        <h1>Students</h1>
        <p>Meet some of the students at Cavite State University.</p>
      </div>
      <div className="card-grid">
        {students.map((student) => (
          <StudentCard key={student.studentNumber} {...student} />
        ))}
      </div>
    </section>
  )
}

export default Students
