const skills = [
  { name: 'React', level: 90, icon: '⚛️', category: 'Frontend Framework' },
  { name: 'CSS3', level: 95, icon: '🎨', category: 'Styling' },
  { name: 'Responsive Design', level: 88, icon: '📱', category: 'Design' },
  { name: 'JavaScript', level: 85, icon: '🚀', category: 'Programming' },
  { name: 'Figma', level: 80, icon: '🎯', category: 'Design Tools' },
  { name: 'Node.js', level: 75, icon: '🌐', category: 'Backend' }
]

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-category">{skill.category}</div>
              <div className="skill-level">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
