import React from 'react';

const AlgoStreakTerms = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.content}>
        <h1 style={styles.title}>Terms & Conditions</h1>
        <p style={styles.lastUpdated}>Last Updated: June 2026</p>

        <p style={styles.paragraph}>
          Welcome to AlgoStreak. By downloading or using the app, these terms will automatically apply to you. You should make sure that you read them carefully before using the app.
        </p>

        <h2 style={styles.heading}>1. User Accounts</h2>
        <p style={styles.paragraph}>
          To use certain features of AlgoStreak, you must sign in using your Google Account. You are responsible for maintaining the confidentiality of your login credentials. We reserve the right to terminate accounts that violate our terms or engage in malicious activity.
        </p>

        <h2 style={styles.heading}>2. Educational Disclaimer</h2>
        <p style={styles.paragraph}>
          AlgoStreak is an educational tool designed to help users practice Data Structures and Algorithms. However, we make no guarantees regarding academic performance, job placement, or success in technical interviews. The content provided is for informational and practice purposes only.
        </p>

        <h2 style={styles.heading}>3. Intellectual Property</h2>
        <p style={styles.paragraph}>
          The AlgoStreak app, including its original content, features, curriculum, and functionality, are owned by the developer and are protected by international copyright and trademark laws. You are not allowed to copy, modify, or extract the source code of the app.
        </p>

        <h2 style={styles.heading}>4. User Data & Privacy</h2>
        <p style={styles.paragraph}>
          Your privacy is important to us. We only store essential data (such as your display name and streak count) necessary for the app to function. By using AlgoStreak, you consent to the collection and use of this data as outlined in our Privacy Policy.
        </p>

        <h2 style={styles.heading}>5. Changes to These Terms</h2>
        <p style={styles.paragraph}>
          We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.
        </p>

        <h2 style={styles.heading}>6. Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us through the developer portfolio page.
        </p>
        
        <div style={styles.footer}>
          <a href="/" style={styles.textLink}>&larr; Return to Home</a>
        </div>
      </div>
    </div>
  );
};

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
    fontSize: '20px',
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

export default AlgoStreakTerms;