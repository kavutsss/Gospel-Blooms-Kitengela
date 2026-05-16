import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement form submission to Firebase
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-16 text-gold-500">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-cream-200 to-cream-100 rounded-xl shadow-lg p-10 border border-cream-500">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="+254 712 345 678"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="What is this about?"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gold-500 text-white py-3 rounded-lg font-semibold hover:bg-gold-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-10 border border-cream-500">
              <h2 className="text-3xl font-bold text-charcoal mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Address</h3>
                    <p className="text-gray-600">Kitengela, Kajiado County<br />Kenya</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Phone</h3>
                    <p className="text-gray-600">+254 712 345 678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Email</h3>
                    <p className="text-gray-600">info@gospelblooms.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🕐</div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday<br />9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cream-100 to-cream-50 rounded-xl shadow-lg p-10 border border-cream-500">
              <h2 className="text-3xl font-bold text-charcoal mb-4">Follow Us</h2>
              <p className="text-gray-600 mb-6">
                Follow us on social media for weekly updates, event reminders, and community highlights.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="special-font bg-gold-500 text-white px-6 py-3 rounded-lg hover:bg-gold-600 transition-all">
                  Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="special-font bg-gold-500 text-white px-6 py-3 rounded-lg hover:bg-gold-600 transition-all">
                  Instagram
                </a>
                <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="special-font bg-gold-500 text-white px-6 py-3 rounded-lg hover:bg-gold-600 transition-all">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
