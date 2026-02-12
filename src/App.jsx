import './App.css'

function App() {
  return (
    <div className="page">
      <header className="navbar">
        <h1 className="logo">Ashish Development New React</h1>
        <div className="nav-buttons">
          <button className="secondary-btn">Login</button>
          <button className="primary-btn">Get Started</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>Build • Deploy • Scale 🚀</h2>
          <p>
            A modern React application powered by Vite.
            Designed for performance, automation, and CI/CD workflows.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">View Project</button>
            <button className="secondary-btn">GitHub Repo</button>
          </div>
        </div>

        <div className="hero-card">
          <h3>⚡ Lightning Fast</h3>
          <p>
            Vite ensures instant server start and blazing fast builds,
            making development smooth and efficient.
          </p>
        </div>
      </section>

      {/* ✅ NEW ABOUT SECTION */}

      <section className="about">
        <h3>👨‍💻 Developer Workflow</h3>
        <p className="about-subtext">
          This project simulates a real-world CI/CD pipeline used in modern
          production systems.
        </p>

        <div className="workflow-grid">
          <div className="workflow-step">
            <h4>🛠 Development</h4>
            <p>
              Code is written and tested locally using Vite’s fast dev server.
            </p>
          </div>

          <div className="workflow-step">
            <h4>📦 Continuous Integration</h4>
            <p>
              Every push triggers GitHub Actions to install dependencies and
              build the application.
            </p>
          </div>

          <div className="workflow-step">
            <h4>🚀 Continuous Deployment</h4>
            <p>
              On successful build, the pipeline automatically deploys the
              production bundle to GitHub Pages.
            </p>
          </div>

          <div className="workflow-step">
            <h4>🌍 Production</h4>
            <p>
              Users access a fully static, optimized website served globally.
            </p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h4>🚀 CI/CD Ready</h4>
          <p>Automated build & deploy pipelines using GitHub Actions.</p>
        </div>

        <div className="feature">
          <h4>⚡ High Performance</h4>
          <p>Optimized production bundles with minimal overhead.</p>
        </div>

        <div className="feature">
          <h4>🌐 Easy Deployment</h4>
          <p>Seamless hosting via GitHub Pages.</p>
        </div>
      </section>

      <footer className="footer">
        Built with React + Vite • DevOps Style Deployment 😎🚀
      </footer>
    </div>
  )
}

export default App
