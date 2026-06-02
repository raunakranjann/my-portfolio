import { useState } from 'react';
import './index.css'; // Global styles and dark mode classes
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Education from './components/Education';
import GithubActivity from './components/GithubActivity';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appStyles = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#333333',
    minHeight: '100vh',
    padding: '20px 0', // Changed padding slightly for full-bleed background transitions
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflowX: 'hidden' // Prevents the floating blobs from creating horizontal scrollbars
  };

  return (
    // Added dark-mode-active class to let index.css know which theme is live
    <div className={isDarkMode ? "dark-mode-active" : ""} style={appStyles}>
      
      {/* MODERN UI ACCENTS: Fixed floating lighting effects background layers */}
      <div className="ambient-blob-1"></div>
      <div className="ambient-blob-2"></div>

      {/* Main Container */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Navbar with embedded Dark Mode Toggle Switch */}
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        
        {/* Main Content Sections with perfect prop pipeline routing */}
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
}

export default App;