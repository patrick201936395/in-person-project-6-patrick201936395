import { useState } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function handleNavClick(e) {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const sectionId = e.currentTarget.hash.slice(1)
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav id="navbar">
      <div className="nav-brand">
        <span>Alex Johnson</span>
      </div>
      <button
        type="button"
        className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="nav-menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul id="nav-menu" className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" className="nav-link" onClick={handleNavClick}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={handleNavClick}>About</a></li>
        <li><a href="#skills" className="nav-link" onClick={handleNavClick}>Skills</a></li>
        <li><a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a></li>
        <li><a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
