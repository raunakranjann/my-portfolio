export default function Experience({ isDarkMode }) {
  const myExperience = [
    {
      id: 1,
      role: "Software Trainee",
      company: "Amnex Infotechnologies Private Limited",
      duration: "Jun 2025 - Aug 2025",
      description: "Developed a full-stack Spring Boot application to integrate with an external API. Engineered a dynamic front-end dashboard using Thymeleaf and Tailwind CSS, featuring server-side pagination and Excel export functions. Implemented secure token-based authentication systems for data synchronization."
    }
  ];

  return (
    <section id="experience" style={{ marginTop: "40px" }}>
      <h2>Experience</h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "15px" }}>
        {myExperience.map((item) => (
          <div key={item.id} style={{ position: "relative", paddingLeft: "20px", borderLeft: isDarkMode ? "2px solid #4da3ff" : "2px solid #0056b3" }}>
            <div style={{ position: "absolute", left: "-6px", top: "5px", width: "10px", height: "10px", backgroundColor: isDarkMode ? "#4da3ff" : "#0056b3", borderRadius: "50%" }}></div>
            <h3 style={{ margin: "0 0 5px 0", fontSize: "1.2rem" }}>{item.role}</h3>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", color: isDarkMode ? "#aaa" : "#555", fontSize: "0.95rem", fontWeight: "bold" }}>
              <span>{item.company}</span>
              <span>{item.duration}</span>
            </div>
            <p style={{ margin: "0", lineHeight: "1.5" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}