import React from 'react';

const AlgoStreakDeveloper = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        
        {/* Avatar / Icon */}
        <div style={styles.avatarContainer}>
          <div style={styles.avatar}>👨‍💻</div>
        </div>
        
        {/* Header Info */}
        <h1 style={styles.name}>Raunak Ranjan</h1>
        <p style={styles.title}>Android Developer & Creator of AlgoStreak</p>
        
        <div style={styles.divider}></div>
        
        {/* Bio */}
        <p style={styles.bio}>
          Hello! I built <strong>AlgoStreak</strong> to help developers and students master Data Structures and Algorithms through the power of daily consistency. 
          <br /><br />
          I am passionate about building clean, user-centric mobile applications using Java, Firebase, and modern UI/UX principles. When I'm not coding, I'm usually exploring new tech stacks or optimizing my apps!
        </p>
        
        {/* Professional Links (Update these with your actual links!) */}
        <div style={styles.linkContainer}>
          <a href="https://github.com/your-github-username" target="_blank" rel="noreferrer" style={styles.primaryButton}>
            View My GitHub
          </a>
          <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noreferrer" style={styles.secondaryButton}>
            Connect on LinkedIn
          </a>
        </div>

        {/* Safe link back to your main website */}
        <div style={styles.footer}>
          <a href="/" style={styles.textLink}>&larr; View Full Web Portfolio</a>
        </div>

      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  pageContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F9FA', // Clean light gray background
    padding: '20px',
    fontFamily: 'sans-serif'
  },
  card: {
    backgroundColor: '#FFFFFF',
    maxWidth: '500px',
    width: '100%',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)', // Soft shadow
    textAlign: 'center'
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  avatar: {
    width: '80px',
    height: '80px',
    backgroundColor: '#FFF3E0', // Light orange to match AlgoStreak vibe
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px'
  },
  name: {
    margin: '0 0 5px 0',
    color: '#202124',
    fontSize: '28px',
    fontWeight: 'bold'
  },
  title: {
    margin: '0',
    color: '#E65100', // AlgoStreak orange
    fontSize: '16px',
    fontWeight: '500'
  },
  divider: {
    height: '1px',
    backgroundColor: '#E8EAED',
    margin: '24px 0'
  },
  bio: {
    color: '#5F6368',
    fontSize: '15px',
    lineHeight: '1.6',
    textAlign: 'left',
    marginBottom: '32px'
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '32px'
  },
  primaryButton: {
    backgroundColor: '#202124',
    color: '#FFFFFF',
    padding: '14px 20px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '15px',
    transition: 'opacity 0.2s'
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    color: '#202124',
    border: '1px solid #DADCE0',
    padding: '14px 20px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '15px',
    transition: 'background-color 0.2s'
  },
  footer: {
    marginTop: '20px'
  },
  textLink: {
    color: '#9AA0A6',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500'
  }
};

export default AlgoStreakDeveloper;