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
    <div className="min-h-screen bg-gradient-to-br from-beige-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold text-black">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl font-bold text-black mb-2">{stats.announcements}</div>
            <div className="text-gray-600">Total Announcements</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl font-bold text-black mb-2">{stats.events}</div>
            <div className="text-gray-600">Total Events</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl font-bold text-black mb-2">{stats.pendingBookings}</div>
            <div className="text-gray-600">Pending Bookings</div>
            <Link to="/booking" className="text-black hover:text-gray-800 mt-2 inline-block">
              View →
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-10 mb-10 border border-gray-200">
          <h2 className="text-3xl font-bold text-black mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/announcements"
              className="bg-beige-100 text-black p-8 rounded-xl hover:bg-beige-200 transition-all text-center border border-gray-200"
            >
              <div className="text-4xl mb-2">📢</div>
              <div className="font-semibold">Manage Announcements</div>
            </Link>
            <Link
              to="/events"
              className="bg-beige-100 text-black p-8 rounded-xl hover:bg-beige-200 transition-all text-center border border-gray-200"
            >
              <div className="text-4xl mb-2">📅</div>
              <div className="font-semibold">Manage Events</div>
            </Link>
            <Link
              to="/booking"
              className="bg-beige-100 text-black p-8 rounded-xl hover:bg-beige-200 transition-all text-center border border-gray-200"
            >
              <div className="text-4xl mb-2">🏢</div>
              <div className="font-semibold">Manage Bookings</div>
            </Link>
            <Link
              to="/contact"
              className="bg-beige-100 text-black p-8 rounded-xl hover:bg-beige-200 transition-all text-center border border-gray-200"
            >
              <div className="text-4xl mb-2">📞</div>
              <div className="font-semibold">View Messages</div>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-200">
          <h2 className="text-3xl font-bold text-black mb-6">Recent Activity</h2>
          <p className="text-gray-600">Recent activity will be displayed here.</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
