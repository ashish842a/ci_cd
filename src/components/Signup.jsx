import './Signup.css'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

export default function Signup({ onSignupSuccess }) {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const { email, password, confirmPassword } = formData

    // Validation
    if (!email || !password || !confirmPassword) {
      setError('All fields are required')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    // Simulate account creation
    setTimeout(() => {
      setSuccess('Account created successfully! Redirecting to login...')
      setTimeout(() => {
        navigate('/login')
        setLoading(false)
      }, 1500)
    }, 500)
  }

  return (
    <div className="signup-page">
      <div className="signup-card" role="region" aria-label="Signup form">
        <div className="brand">MyApp</div>

        <h2 className="title">Create Account</h2>
        <p className="subtitle">Join us today and get started</p>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form className="signup-form" onSubmit={handleSubmit}>
          <label className="field">
            <span className="label-text">Email</span>
            <input 
              name="email" 
              type="email" 
              placeholder="you@domain.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </label>

          <label className="field">
            <span className="label-text">Password</span>
            <input 
              name="password" 
              type="password" 
              placeholder="••••••••" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </label>

          <label className="field">
            <span className="label-text">Confirm Password</span>
            <input 
              name="confirmPassword" 
              type="password" 
              placeholder="••••••••" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required 
            />
          </label>

          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>

          <div className="divider"><span>or</span></div>

          <div className="socials">
            <button type="button" className="btn social">Sign up with Google</button>
            <button type="button" className="btn social">Sign up with GitHub</button>
          </div>

          <div className="foot">
            <span>Already have an account? <Link to="/login">Sign in</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}
