import React from 'react';

const AlgoStreakDisclaimer = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.content}>
        <h1 style={styles.title}>Disclaimer</h1>
        <p style={styles.lastUpdated}>Last updated: June 2026</p>

        <p style={styles.paragraph}>
          The information contained on the AlgoStreak mobile application (the "Service") is for general educational and informational purposes only. AlgoStreak assumes no responsibility for errors or omissions in the contents of the Service.
        </p>

        <h2 style={styles.heading}>1. Educational Purposes Only</h2>
        <p style={styles.paragraph}>
          AlgoStreak is designed to help students and developers practice Data Structures and Algorithms. The content provided within the app is strictly for learning and practice. It is not intended to be a substitute for formal education, computer science degrees, or professional academic tutoring.
        </p>

        <h2 style={styles.heading}>2. No Guarantees of Employment or Success</h2>
        <p style={styles.paragraph}>
          While AlgoStreak aims to prepare users for technical interviews, we make no representations, warranties, or guarantees that using this app will result in job offers, successful interview outcomes, passing grades, or career advancement. Technical interviews are subjective and depend on many factors outside the scope of this application.
        </p>

        <h2 style={styles.heading}>3. Accuracy of Information</h2>
        <p style={styles.paragraph}>
          We strive to provide accurate, optimized, and industry-standard solutions to all coding problems. However, software engineering is an ever-evolving field. AlgoStreak does not warrant that the explanations, code snippets, or algorithms provided are completely free of bugs, errors, or typos. You are encouraged to verify concepts independently and test your own code.
        </p>

        <h2 style={styles.heading}>4. "As Is" and "As Available" Basis</h2>
        <p style={styles.paragraph}>
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, AlgoStreak expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service. We do not guarantee that the app will operate without interruption or be entirely free of technical issues or server downtime.
        </p>

        <h2 style={styles.heading}>5. External Links Disclaimer</h2>
        <p style={styles.paragraph}>
          The Service may contain links to external websites, articles, or documentation that are not provided or maintained by or in any way affiliated with AlgoStreak. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
        </p>

        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions about this Disclaimer, You can contact us by email at <strong>raunakranjann@gmail.com</strong>.
        </p>

        <div style={styles.footer}>
          <a href="/" style={styles.textLink}>&larr; Return to Home</a>
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
    justifyContent: 'center',
    backgroundColor: '#F8F9FA',
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    color: '#333'
  },
  content: {
    backgroundColor: '#FFFFFF',
    maxWidth: '800px',
    width: '100%',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  },
  title: {
    margin: '0 0 10px 0',
    color: '#202124',
    fontSize: '32px'
  },
  lastUpdated: {
    color: '#9AA0A6',
    fontSize: '14px',
    marginBottom: '32px'
  },
  heading: {
    color: '#202124',
    fontSize: '24px',
    marginTop: '32px',
    marginBottom: '12px',
    borderBottom: '2px solid #FFF3E0',
    paddingBottom: '8px',
    display: 'inline-block'
  },
  paragraph: {
    color: '#5F6368',
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  footer: {
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #E8EAED'
  },
  textLink: {
    color: '#E65100',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default AlgoStreakDisclaimer;