import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Tag, ArrowLeft, CheckCircle2, Lightbulb, BookOpen, PenTool } from 'lucide-react';

const BlogModal = ({ blog, onClose }) => {
  useEffect(() => {
    if (blog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [blog]);

  if (!blog) return null;

  return (
    <AnimatePresence>
      <div 
        style={{ 
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
          backgroundColor: 'rgba(3, 7, 18, 0.9)', backdropFilter: 'blur(12px)', 
          zIndex: 99999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' 
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="glass-card"
          style={{ 
            width: '100%', maxWidth: '1050px', maxHeight: '92vh', overflowY: 'auto', 
            position: 'relative', padding: '0', backgroundColor: 'var(--bg-primary)',
            borderRadius: '28px', border: '1px solid var(--glass-border)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Featured Header Area */}
          <div style={{ 
            height: '240px', background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)', 
            position: 'relative', overflow: 'hidden', padding: '40px' 
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <button 
              onClick={onClose}
              style={{ 
                position: 'absolute', top: '25px', left: '25px', background: 'rgba(255, 255, 255, 0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '12px', 
                padding: '8px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                backdropFilter: 'blur(10px)', fontWeight: 'bold'
              }}
            >
              <ArrowLeft size={18} /> Back
            </button>

            <div style={{ position: 'absolute', bottom: '30px', left: '40px', right: '40px' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                {blog.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.7rem', padding: '5px 12px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{tag}</span>
                ))}
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', fontWeight: '800', lineHeight: '1.1', maxWidth: '800px' }}>{blog.title}</h2>
            </div>
          </div>

          <div style={{ padding: '50px 40px', background: 'var(--bg-primary)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '40px', color: 'var(--text-secondary)', fontSize: '0.95rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>A</div> Antony Abishek A</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Calendar size={18} /> {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><BookOpen size={18} /> Technical Case Study</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
              
              {/* Introduction Card */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-40px', top: '0', bottom: '0', width: '4px', background: 'var(--accent-primary)', borderRadius: '0 4px 4px 0' }}></div>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: '1.8', margin: 0, fontWeight: '500' }}>
                  {blog.details.introduction}
                </p>
              </div>

              {/* Detailed Breakdown Section */}
              <section>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                  <PenTool size={24} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Technical Deep Dive</h3>
                </div>
                
                <div className="grid grid-2" style={{ gap: '25px' }}>
                  {blog.details.sections.map((section, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5 }}
                      className="glass-card" 
                      style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '20px' }}
                    >
                      <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: '700', paddingLeft: '15px', borderLeft: '3px solid var(--accent-secondary)' }}>
                        {section.title}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Takeaways Section */}
              <section style={{ 
                background: 'rgba(16, 185, 129, 0.03)', 
                padding: '40px', borderRadius: '24px', border: '1px solid rgba(16, 185, 129, 0.1)' 
              }}>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700' }}>
                  <CheckCircle2 size={26} color="#10b981" /> Architecture Takeaways
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                  {blog.details.takeaways.map((point, i) => (
                    <div key={i} style={{ display: 'flex', gap: '15px' }}>
                      <div style={{ padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', display: 'flex', height: 'fit-content' }}>
                        <Lightbulb size={18} color="#10b981" />
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0, lineHeight: '1.6' }}>{point}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Reader Completion CTA */}
              <div style={{ 
                textAlign: 'center', padding: '60px 0 20px', 
                background: 'linear-gradient(to top, rgba(99, 102, 241, 0.05), transparent)',
                borderRadius: '0 0 28px 28px'
              }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '15px', fontSize: '1.2rem' }}>Ready to build something similar?</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>Let's connect and discuss how we can implement these patterns in your next project.</p>
                <button 
                  onClick={onClose}
                  style={{ background: 'var(--accent-primary)', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Contact Me
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BlogModal;
