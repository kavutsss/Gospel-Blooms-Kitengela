import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

function Events() {
  const [events, setEvents] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    description: ''
  })

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'))
        const eventsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        // Sort by date, upcoming first
        setEvents(eventsData.sort((a, b) => new Date(a.date) - new Date(b.date)))
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }
    loadEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'events'))
      const eventsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      // Sort by date, upcoming first
      setEvents(eventsData.sort((a, b) => new Date(a.date) - new Date(b.date)))
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        await updateDoc(doc(db, 'events', editingId), formData)
      } else {
        await addDoc(collection(db, 'events'), formData)
      }
      setFormData({ title: '', date: '', time: '', venue: '', description: '' })
      setShowForm(false)
      setEditingId(null)
      fetchEvents()
    } catch (error) {
      console.error('Error saving event:', error)
    }
  }

  const handleEdit = (event) => {
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      venue: event.venue,
      description: event.description
    })
    setEditingId(event.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await deleteDoc(doc(db, 'events', id))
        fetchEvents()
      } catch (error) {
        console.error('Error deleting event:', error)
      }
    }
  }

  const isUpcoming = (eventDate) => {
    return new Date(eventDate) >= new Date().setHours(0, 0, 0, 0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold text-gold-500">Events</h1>
          <button
            onClick={() => {
              setShowForm(!showForm)
              setEditingId(null)
              setFormData({ title: '', date: '', time: '', venue: '', description: '' })
            }}
            className="bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-all"
          >
            {showForm ? 'Cancel' : 'Add Event'}
          </button>
        </div>

        {showForm && (
          <div className="bg-gradient-to-br from-cream-200 to-cream-100 rounded-xl shadow-lg p-10 mb-10 border border-cream-500">
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              {editingId ? 'Edit Event' : 'New Event'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Event title"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="date">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="time">
                    Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="venue">
                    Venue *
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Event venue"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
                  Description *
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Event description..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-all"
              >
                {editingId ? 'Update' : 'Create Event'}
              </button>
            </form>
          </div>
        )}

        <div className="space-y-8">
          {events.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-10 text-center text-gray-600 border border-cream-500">
              No events scheduled yet. Check back soon!
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Upcoming Events</h2>
              {events.filter(event => isUpcoming(event.date)).length === 0 && (
                <p className="text-gray-600 mb-6">No upcoming events at the moment.</p>
              )}
              {events.filter(event => isUpcoming(event.date)).map((event) => (
                <div key={event.id} className="bg-gradient-to-br from-cream-200 to-cream-100 rounded-xl shadow-lg p-10 mb-8 border border-cream-500">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-charcoal mb-2">{event.title}</h2>
                      <div className="space-y-1 text-gray-600">
                        <p>📅 {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</p>
                        <p>🕐 {event.time}</p>
                        <p>📍 {event.venue}</p>
                      </div>
                    </div>
                    <div className="space-x-2 ml-4">
                      <button
                        onClick={() => handleEdit(event)}
                        className="bg-gold-500 text-white px-4 py-2 rounded hover:bg-gold-600 transition-all text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="bg-gold-500 text-white px-4 py-2 rounded hover:bg-gold-600 transition-all text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">{event.description}</p>
                </div>
              ))}

              <h2 className="text-3xl font-bold text-gray-600 mb-6 mt-12">Past Events</h2>
              {events.filter(event => !isUpcoming(event.date)).map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg p-10 mb-8 opacity-75 border border-cream-500">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-600 mb-2">{event.title}</h2>
                      <div className="space-y-1 text-gray-600">
                        <p>📅 {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</p>
                        <p>🕐 {event.time}</p>
                        <p>📍 {event.venue}</p>
                      </div>
                    </div>
                    <div className="space-x-2 ml-4">
                      <button
                        onClick={() => handleEdit(event)}
                        className="bg-gold-500 text-white px-4 py-2 rounded hover:bg-gold-600 transition-all text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="bg-gold-500 text-white px-4 py-2 rounded hover:bg-gold-600 transition-all text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">{event.description}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Events
