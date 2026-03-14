import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
      
      {/* 3D Particle Background */}
      <ThreeBackground />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
        style={{ zIndex: 10 }}
      >
        <span className="gradient-text" style={{ fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '20px', display: 'block' }}>
          Hi, I am Antony Abishek A
        </span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: '1.1', marginBottom: '30px' }}>
          Crafting Digital <br /> <span className="gradient-text">Experiences</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
          Full-stack developer specializing in building modern, scalable, and user-centric web applications using the MERN stack.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="glass-card" style={{ padding: '15px 30px', textDecoration: 'none', color: 'var(--bg-primary)', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', display: 'flex', alignItems: 'center', gap: '10px', transition: 'var(--transition)', fontWeight: 'bold' }}>
            View My Work <ArrowRight size={20} />
          </a>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <a href="https://github.com/Antony136" target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '12px', color: 'var(--text-primary)', border: '1px solid var(--glass-border)' }}><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/antonyabishek136" target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '12px', color: 'var(--text-primary)', border: '1px solid var(--glass-border)' }}><Linkedin size={20} /></a>
            <a href="mailto:antonyabishek014@gmail.com" className="glass-card" style={{ padding: '12px', color: 'var(--text-primary)', border: '1px solid var(--glass-border)' }}><Mail size={20} /></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
