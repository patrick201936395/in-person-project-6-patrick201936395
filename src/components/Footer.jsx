function Footer({ projectCount }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2026 Alex Johnson. All rights reserved.</p>
          <p>{projectCount} projects</p>
          <div className="social-links">
            <a href="https://github.com/patrick201936395" className="social-link">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
