import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home({ user, onLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <div className="home-page">
      <nav className="home-navbar">
        <div className="brand">MyApp</div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>

      <main className="home-content">
        <div className="welcome-card">
          <h1>Welcome back, {user?.email || 'User'}! 👋</h1>
          <p>You've successfully logged in to your account.</p>

          <div className="user-info">
            <h3>Account Details</h3>
            <div className="info-row">
              <span className="label">Email:</span>
              <span className="value">{user?.email}</span>
            </div>
            <div className="info-row">
              <span className="label">Login Time:</span>
              <span className="value">{new Date().toLocaleString()}</span>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h4>🚀 Dashboard</h4>
              <p>View your account analytics and activity.</p>
            </div>
            <div className="feature-card">
              <h4>⚙️ Settings</h4>
              <p>Manage your profile and preferences.</p>
            </div>
            <div className="feature-card">
              <h4>📊 Reports</h4>
              <p>Access your reports and data exports.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
