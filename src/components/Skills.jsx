export default function Skills({ isDarkMode }) {
  // Ordered progressively from foundational/accessible tools (Easy) to enterprise systems architecture (Hard)
  const mySkills = [
    // 1. Presentation & Styling (Easy)
    "HTML & CSS", 
    "TailwindCSS", 
    
    // 2. Fundamental Workflow & Scripting (Easy-Medium)
    "Postman", 
    "Git & GitHub", 
    "Python", 
    
    // 3. Frontend Architecture (Medium)
    "JavaScript", 
    "React", 
    
    // 4. Component Bridges & Build Ecosystems (Medium)
    "Thymeleaf", 
    "REST APIs", 
    "Maven", 
    
    // 5. Core Development, Databases & Environments (Medium-Hard)
    "SQLite", 
    "Java", 
    "PostgreSQL", 
    "Linux Environment", 
    
    // 6. Systems Engineering & Complex Paradigms (Hard)
    "Docker", 
    "C/C++", 
    "Spring Boot"
  ];

  return (
    <section id="skills" style={{ marginTop: "40px" }}>
      <h2>Technical Skills</h2>
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {mySkills.map((skill, index) => (
          <span 
            key={index} 
            style={{ 
              padding: "8px 16px", 
              borderRadius: "20px", 
              fontWeight: "bold",
              fontSize: "0.9rem",
              transition: "all 0.3s ease",
              // Set colors dynamically based on the dark mode theme toggle
              backgroundColor: isDarkMode ? "#333333" : "#e2e8f0", 
              color: isDarkMode ? "#ffffff" : "#334155",
              border: isDarkMode ? "1px solid #444" : "1px solid transparent"
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}