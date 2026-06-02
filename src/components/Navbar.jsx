export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const navStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
    padding: '15px 20px',
    borderBottom: isDarkMode ? '1px solid #444' : '1px solid #e0e0e0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000, 
    marginBottom: '20px',
    transition: 'background-color 0.3s ease'
  };

  const linkStyle = {
    marginLeft: '20px',
    textDecoration: 'none',
    color: isDarkMode ? '#ffffff' : '#333333',
    fontWeight: 'bold',
    fontSize: '0.95rem'
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
    gap: '6px',
    transition: 'all 0.3s ease'
  };

  return (
    <nav id="navbar" style={navStyle}>
      <div style={{ fontWeight: '900', fontSize: '1.2rem', color: isDarkMode ? '#4da3ff' : '#0056b3' }}>
        DevPortfolio.
      </div>
      
      {/* Container for links and button */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#experience" style={linkStyle}>Experience</a>
        <a href="#education" style={linkStyle}>Education</a>
        <a href="#certificates" style={linkStyle}>Certificates</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#contact" style={linkStyle}>Contact</a>
        
        {/* Sleek Theme Toggle Button */}
        <button onClick={toggleDarkMode} style={toggleBtnStyle}>
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}