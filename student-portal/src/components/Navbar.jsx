import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Students', path: '/students' },
  { label: 'Courses', path: '/courses' },
  { label: 'About', path: '/about' },
]

function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link className="brand" to="/">
          CvSU Student Portal
        </Link>
        <div className="nav-links">
          {links.map(({ label, path }) => (
            <Link
              aria-current={pathname === path ? 'page' : undefined}
              className={`nav-link${pathname === path ? ' active' : ''}`}
              key={path}
              to={path}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
