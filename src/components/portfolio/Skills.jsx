export default function Skills({ isDarkMode }) {
  // Ordered progressively from foundational data/scripting skills to advanced enterprise systems architecture
  const mySkills = [
    // 1. Foundational Data & Scripting (Easy)
    "MS Excel",
    "HTML & CSS", 
    "TailwindCSS",
    
    // 2. Fundamental Workflow & Analytics (Easy-Medium)
    "Python",
    "Git & GitHub",
    "Postman",
    
    // 3. Frontend & Web Development (Medium)
    "JavaScript",
    "React",
    
    // 4. Data Processing & Analytical Skills (Medium)
    "Exploratory Data Analysis (EDA)",
    "Statistical Analysis",
    "REST APIs",
    "Thymeleaf",
    
    // 5. Backend Engineering & Databases (Medium-Hard)
    "Java",
    "Spring Boot",
    "Advanced SQL",
    "PostgreSQL",
    "SQLite",
    "Linux Environment",
    
    // 6. Systems Architecture & DevOps (Hard)
    "Data Warehousing",
    "Docker",
    "Maven"
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
