import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="nav__brand"><span className="nav__dot" />Sergey Azarov</Link>
      <nav className="nav__links">
        <Link to="/#work">Work</Link>
        <Link to="/#experience">Experience</Link>
        <Link to="/#about">About</Link>
        <a href="mailto:azarovmarketing@gmail.com" className="is-cta">Get in touch</a>
      </nav>
    </header>
  )
}
