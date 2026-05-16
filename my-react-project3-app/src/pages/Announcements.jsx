import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

function Announcements() {
  const [announcements, setAnnouncements] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0]
  })

  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'announcements'))
        const announcementsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        // Sort by date, newest first
        setAnnouncements(announcementsData.sort((a, b) => new Date(b.date) - new Date(a.date)))
      } catch (error) {
        console.error('Error fetching announcements:', error)
      }
    }
    loadAnnouncements()
  }, [])

  const fetchAnnouncements = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'announcements'))
      const announcementsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      // Sort by date, newest first
      setAnnouncements(announcementsData.sort((a, b) => new Date(b.date) - new Date(a.date)))
    } catch (error) {
      console.error('Error fetching announcements:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        await updateDoc(doc(db, 'announcements', editingId), formData)
      } else {
        await addDoc(collection(db, 'announcements'), formData)
      }
      setFormData({ title: '', content: '', date: new Date().toISOString().split('T')[0] })
      setShowForm(false)
      setEditingId(null)
      fetchAnnouncements()
    } catch (error) {
      console.error('Error saving announcement:', error)
    }
  }

  const handleEdit = (announcement) => {
    setFormData({
      title: announcement.title,
      content: announcement.content,
      date: announcement.date
    })
    setEditingId(announcement.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      try {
        await deleteDoc(doc(db, 'announcements', id))
        fetchAnnouncements()
      } catch (error) {
        console.error('Error deleting announcement:', error)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold text-gold-500">Announcements</h1>
          <button
            onClick={() => {
              setShowForm(!showForm)
              setEditingId(null)
              setFormData({ title: '', content: '', date: new Date().toISOString().split('T')[0] })
            }}
            className="bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-all"
          >
            {showForm ? 'Cancel' : 'Add Announcement'}
          </button>
        </div>

        {showForm && (
          <div className="bg-gradient-to-br from-cream-200 to-cream-100 rounded-xl shadow-lg p-10 mb-10 border border-cream-500">
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              {editingId ? 'Edit Announcement' : 'New Announcement'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Announcement title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="date">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="content">
                  Content *
                </label>
                <textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Announcement content..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-all"
              >
                {editingId ? 'Update' : 'Publish'}
              </button>
            </form>
          </div>
        )}

        <div className="space-y-8">
          {announcements.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-10 text-center text-gray-600 border border-cream-500">
              No announcements yet. Check back soon!
            </div>
          ) : (
            announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-xl shadow-lg p-10 border border-cream-500">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal mb-2">{announcement.title}</h2>
                    <p className="text-gray-500 text-sm">
                      {new Date(announcement.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(announcement)}
                      className="bg-gold-500 text-white px-4 py-2 rounded hover:bg-gold-600 transition-all text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(announcement.id)}
                      className="bg-gold-500 text-white px-4 py-2 rounded hover:bg-gold-600 transition-all text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">{announcement.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Announcements
