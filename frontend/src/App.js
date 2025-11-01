import { useState, useEffect } from 'react';
import './App.css';
import { Code, Briefcase, Mail, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'PHP', icon: Code, category: 'Backend' },
    { name: 'JavaScript', icon: Code, category: 'Language' },
    { name: 'Laravel', icon: Code, category: 'Framework' },
    { name: 'HTML & CSS', icon: Code, category: 'Frontend' },
    { name: 'React', icon: Code, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: Code, category: 'Styling' },
    { name: 'MySQL', icon: Code, category: 'Database' },
    { name: 'Git', icon: Code, category: 'Tools' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Online Letter / Document Disposition System',
      description: 'A comprehensive web application for managing official correspondence and document workflows. Features include document tracking, approval workflows, and automated notifications.',
      tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
      type: 'Web Application',
      year: '2024'
    },
    {
      id: 2,
      title: 'Small Retail Shop System',
      description: 'Point of Sale web application designed for small retail businesses. Includes inventory management, sales tracking, customer management, and reporting features.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      type: 'POS Application',
      year: '2024'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className={`portfolio-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <Code className="logo-icon" />
            <span>Portfolio</span>
          </div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link nav-link-cta">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="about">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for work</span>
          </div>
          <h1 className="hero-title">
            Building clean, modern <span className="text-gradient">web experiences</span>.
          </h1>
          <p className="hero-subtitle">
            Frontend developer since 2024 — expanding into full-stack development with PHP, JavaScript, and Laravel.
          </p>
          <div className="hero-cta">
            <Button 
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="btn-icon" />
              Get in touch
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary"
              onClick={() => scrollToSection('projects')}
            >
              <Briefcase className="btn-icon" />
              View Projects
            </Button>
          </div>
          <div className="hero-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <button onClick={() => scrollToSection('skills')} className="scroll-indicator">
          <ChevronDown size={24} />
        </button>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Tech Stack & Skills</h2>
            <p className="section-subtitle">
              Technologies and tools I work with to build modern web applications
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-icon-wrapper">
                    <Icon className="skill-icon" size={24} />
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-category">{skill.category}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Recent work and case studies showcasing my development experience
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Card key={project.id} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="project-header">
                  <div className="project-meta">
                    <span className="project-type">{project.type}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <button className="project-link">
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-container">
          <div className="contact-content">
            <h2 className="contact-title">Let's work together</h2>
            <p className="contact-subtitle">
              I'm currently available for freelance projects and full-time opportunities. Let's build something amazing.
            </p>
            <a href="mailto:your.email@example.com" className="contact-email-link">
              <Button className="btn-primary btn-large">
                <Mail className="btn-icon" />
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <Code size={24} />
              <span>Portfolio</span>
            </div>
            <p className="footer-text">Frontend & Full-stack Web Developer</p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
