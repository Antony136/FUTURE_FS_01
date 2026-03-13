import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { title: "Frontend", icon: <Layout size={24} />, items: ["React", "Next.js", "Redux", "Tailwind CSS"] },
    { title: "Backend", icon: <Database size={24} />, items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { title: "Languages", icon: <Code2 size={24} />, items: ["JavaScript", "TypeScript", "Python", "Go"] },
    { title: "Mobile", icon: <Smartphone size={24} />, items: ["React Native", "Flutter"] }
  ];

  return (
    <section id="about">
      <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
        <div>
          <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>About <span className="gradient-text">Me</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '1.1rem' }}>
            I am a passionate Full Stack Developer with a strong foundation in modern web technologies. I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem' }}>
            My goal is to build high-performance applications that provide value to users and help businesses grow. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
          </p>
          
          <div className="glass-card" style={{ padding: '30px' }}>
            <h4 style={{ marginBottom: '15px' }}>Education</h4>
            <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Bachelor of Science in Computer Science</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>University of Technology • 2018 - 2022</p>
          </div>
        </div>

        <div className="grid grid-2">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ padding: '20px' }}
            >
              <div className="gradient-text" style={{ marginBottom: '15px' }}>{skill.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{skill.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {skill.items.map(item => (
                  <span key={item} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>• {item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
