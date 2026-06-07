import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; 
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Education from './components/Education';
import GithubActivity from './components/GithubActivity';
import AlgoStreakSupport from './components/AlgoStreakSupport'; 
import AlgoStreakDeveloper from './components/AlgoStreakDeveloper';
import AlgoStreakDisclaimer from './components/AlgoStreakDisclaimer';
import AlgoStreakTerms from './components/AlgoStreakTerms';
import AlgoStreakPrivacy from './components/AlgoStreakPrivacy';



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
        {/* ROUTE 1: Main Portfolio (Shows Navbar, Blobs, and All Sections) */}
        <Route path="/" element={portfolioContent} />

        {/* ROUTE 2: App Deletion Link (Shows ONLY the Support Card) */}
        <Route path="/algostreak-support" element={<AlgoStreakSupport />} />

        {/* ROUTE 3: The New Developer Page! */}
        <Route path="/algostreak-developer" element={<AlgoStreakDeveloper />} />
    
        {/* ROUTE 4: Disclaimer Page */}
        <Route path="/algostreak-disclaimer" element={<AlgoStreakDisclaimer />} />

        {/* ROUTE 5: Terms and Conditions Page */}
        <Route path="/algostreak-terms" element={<AlgoStreakTerms />} />

        {/* ROUTE 6: Privacy Policy Page */}
        <Route path="/algostreak-privacy" element={<AlgoStreakPrivacy />} />    
    
      </Routes>
    </Router>
  );
}

export default App;