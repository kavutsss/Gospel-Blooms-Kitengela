import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      // Redirect will be handled by auth state change
      window.location.href = '/admin'
    } catch (error) {
      setError('Invalid email or password')
      console.error('Login error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white flex items-center justify-center py-16">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-xl shadow-lg p-10 border border-cream-500">
          <h1 className="text-3xl font-bold text-center mb-8 text-gold-500">Admin Login</h1>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="admin@gospelblooms.org"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="••••••••"
              />
            </div>
            
            <button
              type="submit"
              className="special-font w-full bg-gold-500 text-white py-3 rounded-lg font-semibold hover:bg-gold-600 transition-all"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">
              Don't have an account?{' '}
              <Link to="/signup" className="text-black hover:text-gray-800 font-semibold">
                Sign Up
              </Link>
            </p>
            <Link to="/" className="text-charcoal hover:text-black">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
