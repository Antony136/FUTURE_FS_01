import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured MERN stack shop with Redux, Cloudinary integration, and PayPal payment processing.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "AI Chat Application",
    description: "Real-time communication app utilizing OpenAI API and Socket.io for seamless interactions.",
    tech: ["React", "Socket.io", "OpenAI", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Project Management Tool",
    description: "Collaborative workspace for teams to manage tasks, track progress, and share resources.",
    tech: ["React", "GraphQL", "Apollo", "Express"],
    github: "https://github.com",
    live: "https://example.com"
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
