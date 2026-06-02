import { useState } from 'react';

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  // State to track if the mobile dropdown is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '15px 20px',
    borderBottom: isDarkMode ? '1px solid #444' : '1px solid #e0e0e0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000, 
    transition: 'background-color 0.3s ease'
  };

  const linkStyle = {
    marginLeft: '20px',
    textDecoration: 'none',
    color: isDarkMode ? '#ffffff' : '#333333',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    cursor: 'pointer'
  };

  // Styles specifically for the links inside the mobile dropdown
  const mobileLinkStyle = {
    ...linkStyle,
    marginLeft: '0',
    padding: '12px 0',
    borderBottom: isDarkMode ? '1px solid #333' : '1px solid #eee',
    display: 'block'
  };

  const toggleBtnStyle = {
    marginLeft: '25px',
    padding: '6px 14px',
    cursor: 'pointer',
    borderRadius: '20px',
    border: isDarkMode ? '1px solid #555' : '1px solid #ccc',
    backgroundColor: isDarkMode ? '#2d2d2d' : '#f4f4f9',
    color: isDarkMode ? '#ffffff' : '#333333',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };

  return (
    <nav id="navbar" style={navStyle}>
      <div style={{ fontWeight: '900', fontSize: '1.2rem', color: isDarkMode ? '#4da3ff' : '#0056b3' }}>
        DevPortfolio.
      </div>
      
      {/* --- DESKTOP NAVIGATION --- */}
      <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#experience" style={linkStyle}>Experience</a>
        <a href="#education" style={linkStyle}>Education</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#github-activity" style={linkStyle}>GitHub</a>
        
        <button onClick={toggleDarkMode} style={toggleBtnStyle}>
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <button 
        className="mobile-toggle-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ color: isDarkMode ? '#ffffff' : '#333333' }}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
          borderBottom: isDarkMode ? '1px solid #444' : '1px solid #e0e0e0',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        }}>
          <a href="#skills" style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#experience" style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#education" style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>Education</a>
          <a href="#projects" style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#github-activity" style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>GitHub</a>
          
          <div style={{ marginTop: '15px' }}>
            <button onClick={toggleDarkMode} style={{...toggleBtnStyle, marginLeft: 0, width: '100%', justifyContent: 'center', padding: '10px'}}>
              {isDarkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}