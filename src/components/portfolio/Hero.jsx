import { useState, useEffect } from 'react';

export default function Hero({ isDarkMode }) {
  const fullText = "Hi, I'm Raunak Ranjan";
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Colors dynamically adjusting based on mode
  const heroBg = isDarkMode ? '#1e1e1e' : '#f4f4f9';
  const subTextColor = isDarkMode ? '#aaaaaa' : '#555555';
  const cursorColor = isDarkMode ? '#4da3ff' : '#0056b3';

  useEffect(() => {
    // 1. If we are currently typing out the text string
    if (charIndex < fullText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 180); // 👈 SLOWER SPEED: Increased from 100ms to 180ms per letter

      return () => clearTimeout(typingTimeout);
    } 
    // 2. REPEAT TRIGGER: Once typing finishes, pause, clear, and loop back to start
    else {
      const loopTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
      }, 2500); // 👈 PAUSE AT END: Waits 2.5 seconds before starting over

      return () => clearTimeout(loopTimeout);
    }
  }, [charIndex]);

  return (
    <section id="hero" style={{ textAlign: "center", padding: "40px 20px", backgroundColor: heroBg, borderRadius: "8px", transition: 'all 0.3s ease' }}>
      
      <img 
        src="/profile.jpg" 
        alt="Raunak Ranjan" 
        style={{
          width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover",
          border: "4px solid #fff", 
          boxShadow: "0 0 20px 5px rgba(0, 255, 255, 0.4)", 
          marginBottom: "20px"
        }}
      />

      {/* Typing Header Wrapper */}
      <div style={{ minHeight: "4rem" }}> 
        <h2 style={{ fontSize: "2.5rem", margin: "0 0 10px 0", display: "inline-block" }}>
          <span className="typing-text-container" style={{ borderRightColor: cursorColor }}>
            {displayedText}
          </span>
        </h2>
      </div>

      <h3 style={{ margin: "0 0 20px 0", color: subTextColor }}>Backend Developer & CSE Graduate</h3>
      <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6", marginBottom: "25px", color: isDarkMode ? "#aaaaaa" : "#555555" }}>
        I am a Computer Science Engineering graduate and hackathon finalist with a proven track record of solving complex technical problems. I specialize in engineering robust, end-to-end web applications using Java, Spring Boot, and PostgreSQL. Welcome to my portfolio!
      </p>
      
      <a 
        href="/resume.pdf" download="Raunak_Ranjan_Resume.pdf"
        style={{
          display: "inline-block", padding: "12px 24px", backgroundColor: "#0056b3",
          color: "white", textDecoration: "none", borderRadius: "6px", fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }}
      >
        Download Resume
      </a>
    </section>
  );
}