import { Link } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export default function CaseShell({ children }) {
  return (
    <>
      <div className="progress" />
      <div className="case-back">
        <Link to="/#work" className="pill">← All work</Link>
      </div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
