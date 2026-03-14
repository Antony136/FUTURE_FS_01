import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

const App = () => {
  return (
    <Router>
      <div className="app-container">
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
                <Blog />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
