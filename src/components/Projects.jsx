export default function Projects({ isDarkMode }) {
  const myProjects = [
    {
      id: 1,
      title: "Academic Analytics and Archival System",
      techStack: "Java 17, Spring Boot, Playwright, SQLite, Thymeleaf",
      description: "A zero-dependency Linux application for automated academic data ingestion. Built a web-scraping engine to extract university portal data, secured by JWT, with a BI dashboard using Chart.js.",
      github: "https://github.com/raunakranjann/Academic-Analytics_and_Archival-System" 
    },
    {
      id: 2,
      title: "PixelPatrol: UI Regression Testing Tool",
      techStack: "Java 21, Spring Boot 3.5, SQLite, TailwindCSS, OpenPDF",
      description: "Self-hosted automated UI testing application to detect visual anomalies between web environments using algorithmic image comparison and a Singleton browser engine.",
      github: "https://github.com/raunakranjann/PixelPatrol"
    },
    {
      id: 1,
      title: "GCES Enterprise Data Sync Engine",
      techStack: "Java, Spring Boot, REST APIs, JPA/Hibernate, Token Auth",
      description: "Engineered a high-throughput integration engine for automated data synchronization across hierarchical administrative boundaries. Built dependent state verification systems mapping State, District, and Sub-District branches down to individual LGD-coded villages.",
      caption: "Developed during internship at Amnex Infotechnologies",
      github: "https://github.com/raunakranjann/gcesapi"
    },
    {
      id: 3,
      title: "College ID Card Generator",
      techStack: "HTML, CSS, JavaScript, HTML5 Canvas",
      description: "An open-source web application developed for a college tech fest to generate and download customizable student ID cards.",
      github: "https://github.com/siwanscem/siwanscem.github.io",
      demo: "https://siwanscem.github.io" 
    },
    // {
    //   id: 4,
    //   title: "Interactive CSS Keyboard",
    //   techStack: "HTML, Advanced CSS, JavaScript",
    //   description: "A creative keyboard design showcasing advanced CSS styling and user interface development skills.",
    //   demo: "https://raunakranjann.github.io/Keyboard_project/my_keyboard.html"
    // }
  ];

  return (
    <section id="projects" style={{ marginTop: "40px" }}>
      <h2>Featured Projects</h2>
      
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
      {myProjects.map((project) => (
        <div 
          key={project.id} 
          className="design-card" // ADDED THIS CLASS FOR THE INTERACTIVE LIFT
          style={{ 
            border: isDarkMode ? "1px solid #333" : "1px solid #e2e8f0", 
            backgroundColor: isDarkMode ? "rgba(30, 30, 30, 0.7)" : "#fff",
            backdropFilter: "blur(10px)", // Glassmorphism frosted backplane effect
            padding: "25px", 
            borderRadius: "12px", // Softer, more modern rounded corners
            display: "flex", 
            flexDirection: "column",
          }}
        >
            {/* FORCED COLOR: Title text now explicitly changes between black and white */}
            <h3 style={{ margin: "0 0 10px 0", color: isDarkMode ? "#ffffff" : "#1a202c" }}>
              {project.title}
            </h3>
            
            {/* Tech Stack - Switches between neon blue and deep blue */}
            <p style={{ margin: "0 0 10px 0", fontSize: "0.9rem", color: isDarkMode ? "#4da3ff" : "#0056b3", fontWeight: "bold" }}>
              {project.techStack}
            </p>
            
            {/* Description - Switches between light gray and dark gray */}
            <p style={{ margin: "0 0 20px 0", flexGrow: 1, color: isDarkMode ? "#aaaaaa" : "#555555", lineHeight: "1.5" }}>
              {project.description}
            </p>
            
            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" style={{ 
                  padding: "8px 16px", backgroundColor: isDarkMode ? "#0066cc" : "#0056b3", color: "white", 
                  textDecoration: "none", borderRadius: "4px", fontSize: "0.9rem", fontWeight: "bold" 
                }}>Live Demo</a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" style={{ 
                  padding: "8px 16px", 
                  backgroundColor: isDarkMode ? "#2d2d2d" : "#ffffff",
                  border: isDarkMode ? "1px solid #555" : "1px solid #333", 
                  color: isDarkMode ? "#ffffff" : "#333333", 
                  textDecoration: "none", 
                  borderRadius: "4px", 
                  fontSize: "0.9rem" 
                }}>Source Code</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}