import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.',
      category: 'fullstack',
      categoryLabel: 'Full-Stack',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: '#4f46e5',
      featured: true
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.',
      category: 'frontend',
      categoryLabel: 'Frontend',
      tags: ['JavaScript', 'CSS3', 'API'],
      color: '#059669',
      featured: false
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.',
      category: 'webapp',
      categoryLabel: 'Web App',
      tags: ['React', 'TypeScript', 'Firebase'],
      color: '#dc2626',
      featured: false
    },
    {
      id: 4,
      title: 'Creative Portfolio',
      description: 'Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.',
      category: 'design',
      categoryLabel: 'Design',
      tags: ['HTML5', 'CSS3', 'GSAP'],
      color: '#7c3aed',
      featured: false
    }
  ]

  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
      <Footer projectCount={projects.length} />
    </div>
  )
}

export default App
