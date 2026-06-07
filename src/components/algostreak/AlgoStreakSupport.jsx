import React, { useState } from 'react';

export default function AlgoStreakSupport() {
  const [copied, setCopied] = useState(false);
  const developerEmail = "raunakranjann@gmail.com"; // Replace with your actual email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.container}>
      <main style={styles.card}>
        {/* Header Section */}
        <header style={styles.header}>
          <div style={styles.logoIcon}>🔥</div>
          <h1 style={styles.title}>AlgoStreak</h1>
          <p style={styles.subtitle}>Account Deletion & Data Privacy Support</p>
        </header>

        <hr style={styles.divider} />

        {/* Content Section */}
        <section style={styles.content}>
          <h2 style={styles.sectionTitle}>Account Deletion Request</h2>
          <p style={styles.text}>
            If you no longer have the AlgoStreak mobile application installed and wish to permanently delete your account along with all associated historical data (including profile information, authentication logs, and accumulated streak progress), you can submit a manual deletion request.
          </p>

          <div style={styles.instructionCard}>
            <h3 style={styles.instructionTitle}>How to submit your request:</h3>
            <ol style={styles.list}>
              <li style={styles.listItem}>
                Compose a new email from the <strong>exact email address</strong> associated with your AlgoStreak account.
              </li>
              <li style={styles.listItem}>
                Address the email to the developer contact below.
              </li>
              <li style={styles.listItem}>
                Use the exact subject line: <code style={styles.code}>Account Deletion Request</code>
              </li>
            </ol>
          </div>

          {/* Email Interaction Area */}
          <div style={styles.emailContainer}>
            <span style={styles.emailLabel}>Developer Contact:</span>
            <div style={styles.emailBox}>
              <span style={styles.emailText}>{developerEmail}</span>
              <button 
                onClick={handleCopyEmail} 
                style={copied ? styles.copyButtonActive : styles.copyButton}
              >
                {copied ? "✓ Copied" : "Copy Email"}
              </button>
            </div>
          </div>
        </section>

        <hr style={styles.divider} />

        {/* Footer/Timeline Section */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>
            <strong>Data Processing Timeline:</strong> Following verification, your account security tokens, cloud storage entries, and progress milestones will be permanently purged from our Firebase infrastructure within <strong>7 business days</strong>. This process is irreversible.
          </p>
        </footer>
      </main>
    </div>
  );
}

// Clean, modern CSS-in-JS style object to ensure zero external dependency issues
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#F8F9FA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24dp',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    backgroundColor: '#FFFFFF',
    maxWidth: '580px',
    width: '100%',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    padding: '40px',
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  logoIcon: {
    fontSize: '40px',
    marginBottom: '12px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#202124',
    margin: '0 0 4px 0',
  },
  subtitle: {
    fontSize: '15px',
    color: '#5F6368',
    margin: 0,
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #EADCE0',
    margin: '24px 0',
  },
  content: {
    color: '#202124',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 12px 0',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#5F6368',
    margin: '0 0 20px 0',
  },
  instructionCard: {
    backgroundColor: '#F1F3F4',
    padding: '16px 20px',
    borderRadius: '8px',
    marginBottom: '24px',
  },
  instructionTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    color: '#202124',
  },
  list: {
    margin: 0,
    paddingLeft: '20px',
    fontSize: '14px',
    color: '#3C4043',
    lineHeight: '1.6',
  },
  listItem: {
    marginBottom: '8px',
  },
  code: {
    backgroundColor: '#E8EAED',
    padding: '2px 6px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '13px',
    color: '#202124',
  },
  emailContainer: {
    marginTop: '20px',
  },
  emailLabel: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#5F6368',
    display: 'block',
    marginBottom: '6px',
  },
  emailBox: {
    display: 'flex',
    justifyContent: 'between',
    alignItems: 'center',
    border: '1px solid #DADCE0',
    borderRadius: '8px',
    padding: '8px 12px',
    backgroundColor: '#F8F9FA',
  },
  emailText: {
    fontSize: '14px',
    color: '#202124',
    fontFamily: 'monospace',
    flexGrow: 1,
  },
  copyButton: {
    backgroundColor: '#202124',
    color: '#FFFFFF',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '13px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  },
  copyButtonActive: {
    backgroundColor: '#388E3C',
    color: '#FFFFFF',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '13px',
    cursor: 'pointer',
    fontWeight: '500',
  },
  footer: {
    marginTop: '24px',
  },
  footerText: {
    fontSize: '12px',
    lineHeight: '1.5',
    color: '#70757A',
    margin: 0,
  }
};