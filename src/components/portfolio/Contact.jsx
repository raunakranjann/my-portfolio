import { useState } from 'react'; // 1. Import useState

export default function Contact({ isDarkMode }) {
  // 2. Create state to track if the email was sent successfully
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerStyle = {
    marginTop: "60px", padding: "30px", textAlign: "center",
    borderTop: isDarkMode ? "1px solid #444" : "1px solid #ccc",
  };

  const inputStyle = {
    width: "100%", maxWidth: "500px", padding: "10px", marginBottom: "15px",
    borderRadius: "4px", border: "1px solid #ccc", fontFamily: "inherit",
    backgroundColor: isDarkMode ? "#222" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
  };

  // 3. This function handles sending the data without reloading the page
  const handleSubmit = async (event) => {
    event.preventDefault(); // Stops the browser from reloading
    const formData = new FormData(event.target);
    
    // Add your Web3Forms key
    formData.append("access_key", "2dcfccb1-790f-4f67-8be4-84f8eb797a19");

    // Send the data to Web3Forms in the background
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setIsSubmitted(true); // 4. If successful, change the state to true!
    }
  };

  return (
    <footer id="contact" style={containerStyle}>
      <h2 style={{ marginBottom: "20px" }}>Contact Me</h2>
      
      {/* 5. The Magic: If isSubmitted is true, show the Success Message. If false, show the Form. */}
      {isSubmitted ? (
        
        <div style={{ padding: "40px 20px", backgroundColor: isDarkMode ? "#1e1e1e" : "#e8f5e9", borderRadius: "8px", maxWidth: "600px", margin: "0 auto", border: isDarkMode ? "1px solid #444" : "1px solid #c8e6c9" }}>
          <h3 style={{ color: "#2e7d32", fontSize: "1.8rem", margin: "0 0 10px 0" }}>Message Sent!</h3>
          <p style={{ margin: "0 0 20px 0", fontSize: "1.1rem" }}>Thank you for reaching out. I'll get back to you as soon as possible.</p>
          <button 
            onClick={() => setIsSubmitted(false)} 
            style={{ padding: "10px 20px", cursor: "pointer", fontWeight: "bold", borderRadius: "4px", border: "none", backgroundColor: "#0056b3", color: "white" }}
          >
            Send Another Message
          </button>
        </div>

      ) : (
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
          <input type="text" name="name" placeholder="Enter your name" required style={inputStyle} />
          <input type="tel" name="mobile" placeholder="Enter your mobile number" style={inputStyle} />
          <input type="email" name="email" placeholder="Enter your email address" required style={inputStyle} />
          <textarea name="message" placeholder="Write your messages here..." rows="5" required style={inputStyle}></textarea>

          <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <button type="submit" style={{ padding: "10px 20px", cursor: "pointer", fontWeight: "bold", borderRadius: "4px", border: "none", backgroundColor: "#0056b3", color: "white" }}>
              Send Message
            </button>
            <button type="reset" style={{ padding: "10px 20px", cursor: "pointer", fontWeight: "bold", borderRadius: "4px", border: "1px solid #ccc", backgroundColor: isDarkMode ? "#444" : "#f4f4f4", color: isDarkMode ? "#fff" : "#000" }}>
              Reset
            </button>
          </div>
        </form>

      )}

      {/* --- THE SOCIAL ICONS --- */}
      <div style={{ display: "flex", justifyContent: "center", gap: "25px", marginTop: "40px" }}>
        
        {/* GitHub */}
        <a href="https://github.com/raunakranjann" target="_blank" rel="noreferrer" style={{ color: isDarkMode ? "#fff" : "#333" }} title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/rawnac/" target="_blank" rel="noreferrer" style={{ color: isDarkMode ? "#fff" : "#0077b5" }} title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/_rawnac/" target="_blank" rel="noreferrer" style={{ color: isDarkMode ? "#fff" : "#e1306c" }} title="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}