import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Globe, 
  Brain, 
  BarChart3, 
  Link as LinkIcon, 
  Terminal, 
  Users,
  Award
} from 'lucide-react';

const highlights = [
  {
    icon: <Globe size={24} />,
    title: "Multiple Full-Stack Applications",
    description: "Built scalable web applications using the React + Node.js + Express.js + MongoDB stack, focusing on clean architecture and responsive user interfaces.",
    color: "#a855f7"
  },
  {
    icon: <Brain size={24} />,
    title: "Applied AI & Computer Vision",
    description: "Implemented intelligent systems combining machine learning models and web platforms to solve practical problems like traffic monitoring and anomaly detection.",
    color: "#ec4899"
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Interactive Data Dashboards",
    description: "Created dynamic dashboards for monitoring analytics, enabling users to visualize system insights in real time using modern frontend frameworks.",
    color: "#3b82f6"
  },
  {
    icon: <LinkIcon size={24} />,
    title: "AI-Driven Traffic Management System",
    description: "Developed an intelligent traffic monitoring platform using computer vision to analyze real-time traffic flow, detect congestion, and visualize insights through a live dashboard.",
    color: "#10b981"
  },
  {
    icon: <Terminal size={24} />,
    title: "Strong Multi-Language Foundation",
    description: "Experienced in multiple programming languages including C, C++, Java, Python, JavaScript, and TypeScript, enabling development across different system layers.",
    color: "#f59e0b"
  },
  {
    icon: <Users size={24} />,
    title: "Collaborative & Problem-Solving Focus",
    description: "Comfortable working in team environments, contributing to design discussions, debugging complex issues, and delivering efficient software solutions.",
    color: "#ef4444"
  }
];

const Highlights = () => {
  return (
    <section id="highlights">
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>
          🏆 <span className="gradient-text">Achievements</span> & Highlights
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
          Key milestones and core strengths that define my journey as a developer.
        </p>
      </div>

      <div className="grid grid-3" style={{ gap: '25px' }}>
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, borderColor: item.color }}
            className="glass-card"
            style={{ 
              padding: '30px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '15px',
              border: '1px solid var(--glass-border)',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '12px', 
              background: `${item.color}15`, 
              color: item.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10px'
            }}>
              {item.icon}
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>
              {item.title}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
