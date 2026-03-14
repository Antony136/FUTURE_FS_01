import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('https://portfolio-o6p3.onrender.com/api/blogs');
        setBlogs(res.data);
      } catch (error) {
        console.error('Error fetching blogs', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Mock data if no blogs exist yet (to show case design)
  const displayBlogs = blogs.length > 0 ? blogs : [
    {
      _id: '1',
      title: 'Building a Scalable MERN Stack Application',
      excerpt: 'Learn the best practices and architectural designs for building full-stack applications that can scale to thousands of users.',
      createdAt: new Date().toISOString(),
      tags: ['React', 'Node.js', 'Architecture']
    },
    {
      _id: '2',
      title: 'Mastering Framer Motion in React',
      excerpt: 'A comprehensive guide on how to create smooth, complex animations on the web using Framer Motion and React.',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      tags: ['Frontend', 'Animation', 'UI/UX']
    }
  ];

  return (
    <section id="blog">
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Latest <span className="gradient-text">Articles</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Thoughts, insights, and tutorials about web development, architecture, and design.</p>
      </div>

      <div className="grid grid-2">
        {displayBlogs.map((blog, index) => (
          <motion.div 
            key={blog._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card"
            style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Calendar size={16} />
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', lineHeight: '1.3' }}>{blog.title}</h3>
            <p style={{ color: 'var(--text-secondary)', flexGrow: 1 }}>{blog.excerpt}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '10px 0' }}>
              {blog.tags && blog.tags.map(tag => (
                <span key={tag} style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'var(--glass-border)', borderRadius: '20px' }}>{tag}</span>
              ))}
            </div>

            <a href={`#blog-${blog._id}`} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '500', marginTop: '10px' }}>
              Read More <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
