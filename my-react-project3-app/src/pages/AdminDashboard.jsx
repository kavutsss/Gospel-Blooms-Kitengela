import { useState, useEffect, useCallback } from 'react'
import { signOut } from 'firebase/auth'
import { auth, db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({
    announcements: 0,
    events: 0,
    pendingBookings: 0,
    approvedBookings: 0
  })

  const fetchStats = useCallback(async () => {
    try {
      const announcementsSnap = await getDocs(collection(db, 'announcements'))
      const eventsSnap = await getDocs(collection(db, 'events'))
      const bookingsSnap = await getDocs(collection(db, 'bookings'))
      
      const bookings = bookingsSnap.docs.map(doc => doc.data())
      const pendingBookings = bookings.filter(b => b.status === 'Pending').length
      const approvedBookings = bookings.filter(b => b.status === 'Approved').length

      setStats({
        announcements: announcementsSnap.size,
        events: eventsSnap.size,
        pendingBookings,
        approvedBookings
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }, [])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser)
      if (currentUser) {
        fetchStats()
      }
    })

    return () => unsubscribe()
  }, [fetchStats])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      window.location.href = '/login'
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Please log in to access the admin dashboard</p>
          <Link to="/login" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
            Go to Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">{stats.announcements}</div>
            <div className="text-gray-600">Total Announcements</div>
            <Link to="/announcements" className="text-purple-600 hover:text-purple-700 mt-2 inline-block">
              Manage →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">{stats.events}</div>
            <div className="text-gray-600">Total Events</div>
            <Link to="/events" className="text-purple-600 hover:text-purple-700 mt-2 inline-block">
              Manage →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-yellow-600 mb-2">{stats.pendingBookings}</div>
            <div className="text-gray-600">Pending Bookings</div>
            <Link to="/booking" className="text-purple-600 hover:text-purple-700 mt-2 inline-block">
              Review →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.approvedBookings}</div>
            <div className="text-gray-600">Approved Bookings</div>
            <Link to="/booking" className="text-purple-600 hover:text-purple-700 mt-2 inline-block">
              View →
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/announcements"
              className="bg-purple-100 p-6 rounded-lg hover:bg-purple-200 transition"
            >
              <h3 className="text-xl font-semibold text-purple-600 mb-2">📢 Add Announcement</h3>
              <p className="text-gray-600">Create a new announcement for the church</p>
            </Link>
            <Link
              to="/events"
              className="bg-purple-100 p-6 rounded-lg hover:bg-purple-200 transition"
            >
              <h3 className="text-xl font-semibold text-purple-600 mb-2">📅 Create Event</h3>
              <p className="text-gray-600">Add a new event to the calendar</p>
            </Link>
            <Link
              to="/booking"
              className="bg-purple-100 p-6 rounded-lg hover:bg-purple-200 transition"
            >
              <h3 className="text-xl font-semibold text-purple-600 mb-2">🏢 Review Bookings</h3>
              <p className="text-gray-600">Approve or reject facility booking requests</p>
            </Link>
            <Link
              to="/"
              className="bg-purple-100 p-6 rounded-lg hover:bg-purple-200 transition"
            >
              <h3 className="text-xl font-semibold text-purple-600 mb-2">🏠 View Website</h3>
              <p className="text-gray-600">See the public-facing website</p>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Admin Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                {user.email?.[0].toUpperCase()}
              </div>
              <div>
                <p className="font-semibold">{user.email}</p>
                <p className="text-gray-600 text-sm">Administrator</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="text-gray-600">
                <strong>Project:</strong> Gospel Blooms Kitengela Church Facility WebApp
              </p>
              <p className="text-gray-600">
                <strong>Version:</strong> 1.0.0
              </p>
              <p className="text-gray-600">
                <strong>Deployment:</strong> Firebase Hosting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
