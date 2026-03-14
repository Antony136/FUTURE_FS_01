import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await axios.post('/api/contact', formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: err.response?.data?.message || 'Something went wrong. Please try again.' 
      });
    }
  };

  return (
    <section id="contact">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Get in <span className="gradient-text">Touch</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Have a project in mind? Let's talk about it.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="grid grid-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '10px', color: 'var(--text-primary)', outline: 'none' }} 
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '10px', color: 'var(--text-primary)', outline: 'none' }} 
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label>Subject</label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
              style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '10px', color: 'var(--text-primary)', outline: 'none' }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label>Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              rows="5"
              style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '10px', color: 'var(--text-primary)', resize: 'none', outline: 'none' }} 
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status.loading}
            style={{ 
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', 
              color: 'var(--bg-primary)', border: 'none', padding: '15px', borderRadius: '10px', 
              fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', gap: '10px', marginTop: '10px' 
            }}
          >
            {status.loading ? 'Sending...' : <><Send size={20} /> Send Message</>}
          </button>

          {status.success && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              <CheckCircle2 size={20} /> Message sent successfully!
            </motion.div>
          )}

          {status.error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              <AlertCircle size={20} /> {status.error}
            </motion.div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
