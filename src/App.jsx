import './App.css'

function App() {
  return (
    <div className="page">
      <header className="navbar">
        <h1 className="logo">Ashish React</h1>
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
        Built with React + Vite • Ashish DevOps Playground 😎
      </footer>
    </div>
  )
}

export default App
