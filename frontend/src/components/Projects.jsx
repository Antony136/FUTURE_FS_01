import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Campus Event Tracking System",
    description: "Developed a campus event portal enabling students to discover, register & track events with secure authentication and real-time updates.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "TypeScript"],
    github: "https://github.com/Antony136",
    live: "#"
  },
  {
    title: "IoT-Blockchain Supply Chain",
    description: "Built real-time perishable goods tracking, enhancing transparency and reducing spoilage.",
    tech: ["IoT", "Blockchain", "Node.js"],
    github: "https://github.com/Antony136",
    live: "#"
  },
  {
    title: "AI-Driven Traffic Management System",
    description: "Smart traffic management platform analyzing real-time traffic data to optimize signals and detect congestion with a live dashboard.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Computer Vision", "IoT Sensors"],
    github: "https://github.com/Antony136",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Featured <span className="gradient-text">Projects</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>A collection of projects that demonstrate my technical expertise and creative problem-solving.</p>
      </div>

      <div className="grid grid-3">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="glass-card"
            style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map(t => (
                <span key={t} style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'var(--glass-border)', borderRadius: '20px' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
              <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}><Github size={20} /></a>
              <a href={project.live} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}><ExternalLink size={20} /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
