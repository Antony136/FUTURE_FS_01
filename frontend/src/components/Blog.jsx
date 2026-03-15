import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import BlogModal from './BlogModal';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

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

  const displayBlogs = blogs.length > 0 ? blogs : [
    {
      _id: '1',
      title: 'Building a Scalable MERN Stack Application',
      excerpt: 'Learn how to design and structure scalable full-stack applications using the MERN stack. This article covers project architecture, API design, database modeling, and production deployment.',
      createdAt: '2026-03-15T00:00:00.000Z',
      tags: ['React', 'Node.js', 'Architecture'],
      details: {
        introduction: "Modern web applications need to handle growing traffic, large datasets, and complex user interactions. The MERN stack (MongoDB, Express, React, Node) has become a industry favorite because it allows developers to build high-performance systems using a unified JavaScript environment.",
        sections: [
          {
            title: "1. Project Architecture & Folder Structure",
            content: "A scalable MERN application starts with a 'Clean Architecture' approach. Instead of dumping all logic into one file, we separate concerns. The backend should be divided into Models (Data schema), Controllers (Business logic), Routes (Endpoints), and Middleware (Authentication/Logging). On the frontend, using a feature-based folder structure rather than a type-based one (e.g., grouping everything related to 'Auth' in one folder) makes it much easier to maintain as the app grows."
          },
          {
            title: "2. State Management: Choosing the Right Tool",
            content: "For smaller apps, React's Context API is sufficient. However, for large-scale enterprise applications, tools like Redux Toolkit or Zustand are essential. They provide a predictable state container that helps debug complex data flows and ensures that the UI stays in sync across different components without 'prop drilling'."
          },
          {
            title: "3. Database Efficiency & Horizontal Scaling",
            content: "MongoDB is built for scaling. To keep it fast, we use indexing on frequently searched fields. As traffic increases, we can implement 'Sharding'—distributing data across multiple servers—and 'Replication' to ensure high availability. Using Mongoose as an ODM (Object Data Modeling) tool provides a layer of validation that prevents 'dirty' data from entering your collection."
          },
          {
            title: "4. API Performance and Security",
            content: "Scalable APIs must be fast and secure. We implement 'Rate Limiting' to prevent DDoS attacks and 'JWT (JSON Web Tokens)' for secure, stateless authentication. Centralized error handling middleware ensures that even if something breaks, the user gets a clean error message, and the incident is logged in the backend for developers to fix."
          }
        ],
        takeaways: [
          "Always separate business logic from your API routes.",
          "Optimize MongoDB with custom indexes to avoid slow collection scans.",
          "Use lazy loading and code splitting in React to reduce initial bundle size.",
          "Implement structured logging (like Winston or Bunyan) to monitor production health."
        ]
      }
    },
    {
      _id: '2',
      title: 'Integrating Computer Vision with Web Applications',
      excerpt: 'Discover how computer vision systems can be integrated with web applications to create intelligent platforms. This article explains the technical bridge between AI models and dashboards.',
      createdAt: '2026-03-13T00:00:00.000Z',
      tags: ['AI', 'Computer Vision', 'Web Development'],
      details: {
        introduction: "The gap between Artificial Intelligence and daily web usage is closing. Integrating Computer Vision (CV)—the ability for machines to 'see'—into a web dashboard allows for real-time monitoring and automated decision-making. Whether it's counting vehicles in traffic or detecting quality defects on a factory line, the architecture remains surprisingly similar.",
        sections: [
          {
            title: "1. The AI Service: Python and YOLO",
            content: "Most modern CV models, like YOLO (You Only Look Once), are written in Python due to its rich ecosystem of libraries like OpenCV and PyTorch. The AI service runs as a standalone process that captures video frames, processes them through a pre-trained neural network, and outputs detection coordinates (bounding boxes) and confidence scores."
          },
          {
            title: "2. The Bridge: Connecting Python to Node.js",
            content: "To get AI data onto a web page, we need a bridge. Two common methods are: 1. REST API (simpler, but higher latency) and 2. WebSockets (ideal for real-time). The Python script sends detection snapshots to the Node.js backend, which then broadcasts those updates to the React frontend using Socket.io, allowing for sub-second updates on the dashboard."
          },
          {
            title: "3. Real-Time Data Visualization",
            content: "Displaying AI data requires thoughtful UX. Instead of showing a raw video feed, we often use Canvas API or SVG overlays to draw bounding boxes over the video. We also aggregate data into charts (using Recharts or Chart.js) to show trends, such as 'Peak Traffic Hours' or 'Daily Violation Counts', turning raw detections into actionable business intelligence."
          },
          {
            title: "4. Deployment: Docker and Hardware Acceleration",
            content: "AI models are computationally expensive. When deploying, we use Docker containers to package the AI environment (Python, CUDA, PyTorch) separate from the web stack. For production, we leverage GPU acceleration (NVIDIA CUDA) to ensure the model can process 30+ frames per second without lagging the rest of the application."
          }
        ],
        takeaways: [
          "Keep AI processing isolated from the main web server to prevent performance bottlenecks.",
          "Use WebSockets for any feature that requires 'real-time' visual feedback.",
          "Optimize images or video frames before sending them to the model to reduce overhead.",
          "Always provide a fallback for when the AI service is offline or unreachable."
        ]
      }
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
              <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', lineHeight: '1.3' }}>{blog.title}</h3>
            <p style={{ color: 'var(--text-secondary)', flexGrow: 1 }}>{blog.excerpt}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '10px 0' }}>
              {blog.tags && blog.tags.map(tag => (
                <span key={tag} style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'var(--glass-border)', borderRadius: '20px' }}>{tag}</span>
              ))}
            </div>

            <button 
              onClick={() => setSelectedBlog(blog)}
              style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--accent-primary)', cursor: 'pointer', fontWeight: '500', marginTop: '10px', padding: 0 }}
            >
              Read More <ArrowRight size={16} />
            </button>
          </motion.div>
        ))}
      </div>

      {selectedBlog && <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}
    </section>
  );
};

export default Blog;
