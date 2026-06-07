export default function Certificates({ isDarkMode }) {
  const myCertificates = [
    {
      id: 2,
      name: "Programming in Java (Elite Certification)", 
      issuer: "IIT Kharagpur (NPTEL)",
      year: "Oct 2025",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs110/Course/NPTEL25CS110S35670046710767551.pdf"
    },
    {
      id: 3,
      name: "Cloud Computing Certification",
      issuer: "IIT Kharagpur (NPTEL)",
      year: "Apr 2025",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S104580016404247778.pdf"
    },
    {
      id: 1,
      name: "Smart India Hackathon 2024",
      issuer: "Ministry of Education",
      year: "Dec 2024",
      image: "/sih-cert.jpg" 
    },
    {
      id: 4,
      name: "Typing Certificate (Silver)",
      issuer: "TypingTest.com",
      year: "2024",
      image: "/typing-cert.jpg"
    }
  ];

  return (
    <section id="certificates" style={{ marginTop: "40px" }}>
      <h2>Achievements & Certifications</h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {myCertificates.map((cert) => {
          
          if (cert.image) {
            return (
              <div key={cert.id} style={{ 
                padding: "20px", 
                backgroundColor: isDarkMode ? "#1e1e1e" : "#f8f9fa", 
                border: isDarkMode ? "1px solid #444" : "1px solid #ddd", 
                borderRadius: "8px",
                textAlign: "center"
              }}>
                <h3 style={{ margin: "0 0 5px 0", color: isDarkMode ? "#ffffff" : "#1a202c" }}>{cert.name}</h3>
                <p style={{ margin: "0 0 15px 0", color: isDarkMode ? "#aaa" : "#555" }}>{cert.issuer} • {cert.year}</p>
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  style={{ width: "100%", maxWidth: "600px", borderRadius: "4px", border: "1px solid #ccc" }} 
                />
              </div>
            );
          }

          return (
            <div key={cert.id} style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              padding: "15px", 
              backgroundColor: isDarkMode ? "#1e1e1e" : "#f8f9fa", 
              // FIXED: Line changes between bright blue and deep blue based on the active theme
              borderLeft: isDarkMode ? "4px solid #4da3ff" : "4px solid #0056b3",
              borderRadius: "4px",
              borderTop: isDarkMode ? "none" : "1px solid #e2e8f0",
              borderRight: isDarkMode ? "none" : "1px solid #e2e8f0",
              borderBottom: isDarkMode ? "none" : "1px solid #e2e8f0"
            }}>
              <div>
                <h3 style={{ margin: "0 0 5px 0", fontSize: "1.1rem", color: isDarkMode ? "#ffffff" : "#1a202c" }}>{cert.name}</h3>
                <p style={{ margin: "0", color: isDarkMode ? "#aaa" : "#555", fontSize: "0.9rem" }}>{cert.issuer}</p>
              </div>
              
              <div style={{ textAlign: "right" }}>
                <span style={{ display: "block", fontWeight: "bold", marginBottom: "5px", color: isDarkMode ? "#ffffff" : "#1a202c" }}>{cert.year}</span>
                {/* FIXED: Link text switches color automatically so it is legible on light gray backgrounds */}
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ color: isDarkMode ? "#4da3ff" : "#0056b3", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  View Credential &rarr;
                </a>
              </div>
            </div>
          );

        })}
      </div>
    </section>
  );
}