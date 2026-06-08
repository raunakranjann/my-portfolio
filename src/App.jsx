import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; 
import Navbar from './components/portfolio/Navbar'; 
import Hero from './components/portfolio/Hero';
import Skills from './components/portfolio/Skills';
import Experience from './components/portfolio/Experience';
import Projects from './components/portfolio/Projects';
import Certificates from './components/portfolio/Certificates';
import Contact from './components/portfolio/Contact';
import Education from './components/portfolio/Education';
import GithubActivity from './components/portfolio/GithubActivity';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appStyles = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#333333',
    minHeight: '100vh',
    padding: '20px 0', 
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflowX: 'hidden' 
  };

  // Grouped all your Portfolio styling, Navbar, and components together
  const portfolioContent = (
    <div className={isDarkMode ? "dark-mode-active" : ""} style={appStyles}>
      
      {/* MODERN UI ACCENTS: Fixed floating lighting effects background layers */}
      <div className="ambient-blob-1"></div>
      <div className="ambient-blob-2"></div>

      {/* Main Container */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Navbar inside the portfolio wrapper so it only shows here */}
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        
        <Hero isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Education isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Certificates isDarkMode={isDarkMode} />
        <GithubActivity isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        {/* Main Portfolio Layout */}
        <Route path="/" element={portfolioContent} />
      </Routes>
    </Router>
  );
}

export default App;