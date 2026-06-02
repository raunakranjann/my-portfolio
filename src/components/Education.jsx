export default function Education({ isDarkMode }) {
  const myEducationalJourney = [
    {
      id: 1,
      institution: "Siwan College of Engineering and Management",
      location: "Islamia Nagar, Surapur, Siwan, Bihar",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2022 - Expected June 2026",
      description: "Affiliated with Bihar Engineering University, Patna"
    },
    {
      id: 2,
      institution: "Mahaviri Saraswati Vidya Mandir",
      location: "Vijayhata, Siwan, Bihar",
      degree: "Class XII (Senior Secondary) - PCM",
      duration: "2020 - 2022",
      description: "CBSE Board"
    },
    {
      id: 3,
      institution: "Mahaviri Saraswati Vidya Mandir",
      location: "Vijayhata, Siwan, Bihar",
      degree: "Class X (Secondary)",
      duration: "2019 - 2020",
      description: "CBSE Board"
    }
  ];

  return (
    <section id="education" style={{ marginTop: "40px" }}>
      <h2>Educational Journey</h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "25px", marginTop: "20px" }}>
        {myEducationalJourney.map((item) => (
          <div key={item.id} style={{ position: "relative", paddingLeft: "25px", borderLeft: isDarkMode ? "2px solid #4da3ff" : "2px solid #0056b3" }}>
            <div style={{ position: "absolute", left: "-6px", top: "5px", width: "10px", height: "10px", backgroundColor: isDarkMode ? "#4da3ff" : "#0056b3", borderRadius: "50%" }}></div>
            
            {/* 1. Primary Focus: The Institution (Place) */}
            <h3 style={{ margin: "0 0 5px 0", fontSize: "1.25rem", color: isDarkMode ? "#ffffff" : "#1a202c", fontWeight: "bold" }}>
              {item.institution}
            </h3>
            
            {/* 2. Subline Focus: Highlighting Geography & Timeline */}
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "6px", fontSize: "0.9rem", fontWeight: "600" }}>
              <span style={{ color: isDarkMode ? "#4da3ff" : "#0056b3" }}>📍 {item.location}</span>
              <span style={{ color: isDarkMode ? "#aaa" : "#555" }}>{item.duration}</span>
            </div>

            {/* 3. Tertiary Focus: The degree title */}
            <h4 style={{ margin: "0 0 8px 0", fontSize: "1rem", color: isDarkMode ? "#cbd5e1" : "#4a5568", fontWeight: "600", fontStyle: "italic" }}>
              {item.degree}
            </h4>
            
            {/* 4. Details without any numerical grading indicators */}
            <p style={{ margin: "0", lineHeight: "1.6", color: isDarkMode ? "#aaaaaa" : "#555555", fontSize: "0.95rem" }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}