import './Login.css'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login({ onLoginSuccess }) {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const DUMMY_CREDS = {
    email: 'user@example.com',
    password: 'password123'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const form = e.target
    const email = form.email.value
    const password = form.password.value

    // Validate dummy credentials
    if (email === DUMMY_CREDS.email && password === DUMMY_CREDS.password) {
      // Simulate network delay
      setTimeout(() => {
        onLoginSuccess({ email })
        navigate('/home')
        setLoading(false)
      }, 500)
    } else {
      setError('Invalid email or password. Try: user@example.com / password123')
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card" role="region" aria-label="Login form">
        <div className="brand">MyApp</div>

        <h2 className="title">Welcome back</h2>
        <p className="subtitle">Sign in to continue to your account</p>

        {error && <div className="error-message">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="field">
            <span className="label-text">Email</span>
            <input name="email" type="email" placeholder="you@domain.com" required />
          </label>

          <label className="field">
            <span className="label-text">Password</span>
            <input name="password" type="password" placeholder="••••••••" required />
          </label>

          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          <div className="divider"><span>or</span></div>

          <div className="socials">
            <button type="button" className="btn social">Continue with Google</button>
            <button type="button" className="btn social">Continue with GitHub</button>
          </div>

          <div className="foot">
            <a className="muted" href="#">Forgot password?</a>
            <span>New here? <Link to="/signup">Create account</Link></span>
          </div>

          <div className="demo-creds">
            <p><strong>Demo Credentials:</strong></p>
            <p>Email: user@example.com</p>
            <p>Password: password123</p>
          </div>
        </form>
      </div>
    </div>
  )
}
