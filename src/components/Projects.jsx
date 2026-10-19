import { useState } from 'react'

const filters = [
  { category: 'all', label: 'All Projects' },
  { category: 'frontend', label: 'Frontend' },
  { category: 'fullstack', label: 'Full-Stack' },
  { category: 'design', label: 'Design' },
  { category: 'webapp', label: 'Web App' }
]

function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.category}
              type="button"
              className={`filter-btn ${activeFilter === filter.category ? 'active' : ''}`}
              aria-pressed={activeFilter === filter.category}
              onClick={() => setActiveFilter(filter.category)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <p aria-live="polite">Showing {filteredProjects.length} of {projects.length} projects</p>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className={`project-card ${project.featured ? 'featured' : ''}`} key={project.id}>
              <div className="project-image" style={{ backgroundColor: project.color }}>
                <span>{project.title}</span>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.categoryLabel}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
