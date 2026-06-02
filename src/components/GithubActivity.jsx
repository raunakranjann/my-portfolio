import { useState, useEffect } from 'react';

export default function GithubActivity({ isDarkMode }) {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // 1. Fetch your main profile stats
        const profileRes = await fetch('https://api.github.com/users/raunakranjann');
        if (!profileRes.ok) throw new Error('Failed to fetch GitHub profile');
        const profileData = await profileRes.json();

        // 2. Fetch your 3 most recently updated public repositories
        const reposRes = await fetch('https://api.github.com/users/raunakranjann/repos?sort=updated&per_page=3');
        if (!reposRes.ok) throw new Error('Failed to fetch GitHub repositories');
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(reposData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // Shared glassmorphism style for the stat widgets
  const statCardStyle = {
    padding: "25px",
    backgroundColor: isDarkMode ? "rgba(30, 30, 30, 0.7)" : "#ffffff",
    backdropFilter: "blur(10px)",
    border: isDarkMode ? "1px solid #444" : "1px solid #e2e8f0",
    borderRadius: "12px",
    flex: "1",
    minWidth: "200px",
    textAlign: "center",
    boxShadow: isDarkMode ? "0 4px 6px rgba(0,0,0,0.3)" : "0 4px 6px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <section id="github-activity" style={{ marginTop: "40px" }}>
      <h2>Live GitHub Activity</h2>
      
      {loading && <p style={{ color: isDarkMode ? "#aaa" : "#555" }}>Connecting to GitHub servers...</p>}
      {error && <p style={{ color: "#ff4d4d" }}>Could not load live data: {error}</p>}

      {!loading && !error && profile && (
        <div>
          {/* Dashboard Stats & Follow Button */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
            
            <div className="design-card" style={statCardStyle}>
              <h3 style={{ margin: "0 0 10px 0", color: isDarkMode ? "#4da3ff" : "#0056b3", fontSize: "1.1rem" }}>Public Repositories</h3>
              <p style={{ fontSize: "2.5rem", fontWeight: "900", margin: "0", color: isDarkMode ? "#ffffff" : "#1a202c" }}>
                {profile.public_repos}
              </p>
            </div>
            
            <div className="design-card" style={statCardStyle}>
              <h3 style={{ margin: "0 0 10px 0", color: isDarkMode ? "#4da3ff" : "#0056b3", fontSize: "1.1rem" }}>Followers</h3>
              <p style={{ fontSize: "2.5rem", fontWeight: "900", margin: "0", color: isDarkMode ? "#ffffff" : "#1a202c" }}>
                {profile.followers}
              </p>
            </div>

            {/* Direct Follow Button Card */}
            <div className="design-card" style={{ ...statCardStyle, backgroundColor: isDarkMode ? "#24292e" : "#24292e", border: "none" }}>
              <h3 style={{ margin: "0 0 15px 0", color: "#ffffff", fontSize: "1.1rem" }}>Connect with me</h3>
              <a 
                href={profile.html_url} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "10px 20px", backgroundColor: "#2ea043", color: "#ffffff",
                  textDecoration: "none", borderRadius: "6px", fontWeight: "bold", fontSize: "1rem",
                  transition: "background-color 0.2s ease"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2c974b'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#2ea043'}
              >
                {/* Embedded GitHub SVG Icon */}
                <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                Follow on GitHub
              </a>
            </div>

          </div>

          {/* Latest Repositories Grid - Now with Glassmorphism Cards */}
          <h3 style={{ marginTop: "40px", marginBottom: "20px", color: isDarkMode ? "#ffffff" : "#1a202c" }}>Recent Commits</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {repos.map(repo => (
              <div key={repo.id} className="design-card" style={{
                padding: "20px",
                backgroundColor: isDarkMode ? "rgba(30, 30, 30, 0.7)" : "#ffffff",
                backdropFilter: "blur(10px)",
                border: isDarkMode ? "1px solid #444" : "1px solid #e2e8f0",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                boxShadow: isDarkMode ? "0 4px 6px rgba(0,0,0,0.3)" : "0 4px 6px rgba(0,0,0,0.05)"
              }}>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ fontWeight: "bold", fontSize: "1.2rem", textDecoration: "none", color: isDarkMode ? "#4da3ff" : "#0056b3", marginBottom: "10px" }}
                >
                  {repo.name}
                </a>
                <p style={{ fontSize: "0.95rem", margin: "0 0 15px 0", flexGrow: 1, color: isDarkMode ? "#aaaaaa" : "#555555", lineHeight: "1.5" }}>
                  {repo.description || "No description provided for this repository."}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", fontWeight: "bold", color: isDarkMode ? "#ddd" : "#444" }}>
                  <span style={{ color: repo.language ? (isDarkMode ? "#6cb6ff" : "#0056b3") : "inherit" }}>
                    {repo.language || "Mixed"}
                  </span>
                  <span>⭐ {repo.stargazers_count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}