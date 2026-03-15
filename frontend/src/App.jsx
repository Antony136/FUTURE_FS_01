import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Highlights from './components/Highlights';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import SEO from './components/SEO';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
      <div className="app-container">
        <SEO 
          title="Antony Abishek A | Full-Stack Developer" 
          description="Crafting digital experiences. Full-stack developer specializing in building modern, scalable, and user-centric web applications using the MERN stack."
          keywords="Antony Abishek A, Full-Stack Developer, MERN Stack, React, Node.js, Next.js, Portfolio"
          url="https://antonyabishek.vercel.app/"
        />
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
                <About />
                <Highlights />
                <Blog />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
    </HelmetProvider>
  );
};

export default App;
