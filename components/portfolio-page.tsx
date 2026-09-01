'use client'

import { useState } from 'react'
import { ArrowUpRight, Copy, LogoGithub, LogoLinkedin } from '@carbon/icons-react'

const stack = {
  frontend: ['Angular', 'Vue 3', 'React', 'TypeScript', 'Tailwind CSS'],
  backend: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'ASP.NET Core'],
  delivery: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'GitHub Actions'],
}

const projects = [
  { mark: 'DV', type: 'PINNED REPO', name: 'DeckView', description: 'Repository pinned in my GitHub profile, presented here as a featured work.', tags: ['GitHub', 'Portfolio'], href: 'https://github.com/JeanPoolArias' },
  { mark: 'LD', type: 'PINNED REPO', name: 'LogisticDemoModuler', description: 'Repository pinned in my GitHub profile, shown here as one of the main works.', tags: ['GitHub', 'Portfolio'], href: 'https://github.com/JeanPoolArias' },
  { mark: 'IV', type: 'FULL STACK & DEVOPS', name: 'IntegraVida Platform', description: 'Health platform with a Spring Boot backend, Angular frontend, OpenAPI docs, and Render deployment.', tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'], href: 'https://integravida-frontend.onrender.com' },
  { mark: 'CT', type: 'FULL STACK', name: 'ColdTrace Platform', description: 'Enterprise Web API with .NET, Vue 3, multi-tenancy, RBAC, and deployment on Google Cloud Run and Vercel.', tags: ['ASP.NET Core', '.NET 10', 'Vue 3', 'MySQL'], href: 'https://github.com/JeanPoolArias' },
]

export function PortfolioPage() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText('jean.arias.dev@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <main id="main-content" className="portfolio">
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#home">JEAN <span>AT</span></a>
        <div className="nav-links">
          <a href="#home">HOME</a><a href="#stack">STACK</a><a href="#works">WORKS</a><a href="#credentials">CREDENTIALS</a>
        </div>
        <div className="nav-actions"><a href="#contact">CONTACT</a><button type="button" onClick={copyEmail}><Copy size={16} /> {copied ? 'COPIED' : 'COPY EMAIL'}</button></div>
      </nav>

      <section id="home" className="hero-topology">
        <div className="hero-copy">
          <p className="eyebrow">FULL STACK DEVELOPER · LIMA, PERU · 2+ YEARS BUILDING PRODUCTION SOFTWARE</p>
          <h1>JEAN<br /><em>POOL ARIAS</em></h1>
          <p className="hero-description">Full Stack Developer focused on robust backend architecture, modern frontend systems, and cloud-native delivery. I design and ship software across Java, Node.js, Angular, Vue, React, and .NET with an emphasis on clarity, maintainability, and real production constraints.</p>
          <div className="hero-links"><a className="text-link" href="#works">EXPLORE WORKS <ArrowUpRight size={18} /></a><a className="text-link" href="#contact">CONTACT</a></div>
        </div>
        <div className="topology-art" aria-label="Abstract iridescent topology artwork" role="img"><div className="topology-core" /><div className="topology-ring ring-one" /><div className="topology-ring ring-two" /><div className="topology-ring ring-three" /><div className="topology-ring ring-four" /><div className="topology-orbit orbit-one" /><div className="topology-orbit orbit-two" /></div>
        <dl className="hero-facts"><div><dt>LOCATION</dt><dd>Lima, Peru</dd></div><div><dt>FOCUS</dt><dd>Backend + Frontend</dd></div><div><dt>WHAT I BUILD</dt><dd>APIs, dashboards, authentication flows, deployment pipelines, and interfaces that need to survive real usage.</dd></div><div><dt>AVAILABILITY</dt><dd>Open to product work, platform work, and teams that value engineering discipline.</dd></div></dl>
      </section>

      <section id="stack" className="content-section"><div className="section-intro"><p className="eyebrow">LIVE METRICS & STACK</p><h2>Engineering<br /><em>stack</em></h2><p>The goal is not to list every tool. It is to show the parts of the stack I use to ship stable, maintainable work.</p></div><div className="stack-grid"><div className="metric"><span>EXPERIENCE</span><strong>2+ years</strong><small>Production software delivery</small></div><div className="metric"><span>CORE FOCUS</span><strong>Full Stack</strong><small>Backend, UI, Cloud</small></div>{Object.entries(stack).map(([key, items]) => <article className="stack-card" key={key}><span>{key === 'delivery' ? 'DATA & DELIVERY' : `${key.toUpperCase()} CORE`}</span><p>{key === 'frontend' ? 'Interfaces built for clarity, accessibility, and maintainability.' : key === 'backend' ? 'APIs and services for real production constraints.' : 'Databases, containers, CI/CD, and deployment discipline.'}</p><div className="tag-list">{items.map(item => <b key={item}>{item}</b>)}</div></article>)}</div></section>

      <section id="works" className="content-section works-section"><div className="section-intro"><p className="eyebrow">SELECTED WORKS</p><h2>Works that<br /><em>matter</em></h2><p>A compact set of repositories and shipped projects that represent the range of my work.</p></div><div className="project-list">{projects.map(project => <article className="project-card" key={project.name}><div className="project-mark">{project.mark}</div><div className="project-info"><span>{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <b key={tag}>{tag}</b>)}</div></div><a className="project-link" href={project.href} target="_blank" rel="noreferrer">SOURCE <ArrowUpRight size={18} /></a></article>)}</div></section>

      <section id="credentials" className="content-section credentials"><div className="section-intro"><p className="eyebrow">CREDENTIALS</p><h2>Background<br /><em>and training</em></h2></div><div className="credential-grid"><article><span>EXPERIENCE</span><h3>Full Stack Developer</h3><p>Freelance and project-based delivery across backend and frontend systems.</p><h3>Cloud & DevOps</h3><p>Docker, GitHub Actions, AWS, Azure, Google Cloud Run, Render.</p></article><article><span>EDUCATION</span><h3>Software Engineering</h3><p>Universidad Peruana de Ciencias Aplicadas (UPC), in progress.</p></article><article><span>CERTIFICATIONS</span>{['Scrum Fundamentals Certified', 'Scrum Master Certification', 'Google Cloud Computing Foundations', 'Git and GitHub'].map(item => <p className="cert" key={item}>{item}</p>)}</article></div></section>

      <footer id="contact" className="portfolio-footer"><div className="footer-socials" aria-label="Social networks"><a href="https://github.com/JeanPoolArias" target="_blank" rel="noreferrer"><LogoGithub size={18} /> GITHUB</a><a href="https://www.linkedin.com/in/jeanpoolarias/" target="_blank" rel="noreferrer"><LogoLinkedin size={18} /> LINKEDIN</a><a href="mailto:jean.arias.dev@gmail.com">EMAIL</a></div><span className="copy-status" aria-live="polite">{copied ? 'Email copied to clipboard.' : ''}</span></footer>
    </main>
  )
}
