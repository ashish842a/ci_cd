import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'

function App() {
  const [user, setUser] = useState(null)

  const handleLoginSuccess = (userData) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <Routes>
      <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
      <Route path="/signup" element={<Signup />} />
      <Route 
        path="/home" 
        element={user ? <Home user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />} 
      />
      <Route path="/" element={<Navigate to={user ? '/home' : '/login'} replace />} />
    </Routes>
  )
}

export default App
