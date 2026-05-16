function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-16 text-gold-500">
          Service Times & Location
        </h1>

        {/* Service Times */}
        <div className="bg-gradient-to-br from-cream-200 to-cream-100 rounded-xl shadow-lg p-10 mb-10 border border-cream-500">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Weekly Services</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-cream-500 pb-6">
              <div>
                <h3 className="text-xl font-semibold text-charcoal">Sunday Morning Service</h3>
                <p className="text-gray-700">Join us for uplifting worship, practical teaching, and community fellowship</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-black mb-2">10:00 AM - 12:00 PM</p>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special-font inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-cream-500 pb-6">
              <div>
                <h3 className="text-xl font-semibold text-charcoal">Wednesday Bible Study</h3>
                <p className="text-gray-700">Dive deeper into Scripture with discussion and practical application</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-black mb-2">6:00 PM - 8:00 PM</p>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special-font inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-cream-500 pb-6">
              <div>
                <h3 className="text-xl font-semibold text-charcoal">Friday Prayer Meeting</h3>
                <p className="text-gray-700">Come together for intercessory prayer and worship</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-black mb-2">7:00 PM - 9:00 PM</p>
                <a
                  href="https://meet.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special-font inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
                >
                  Join Google Meet
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-charcoal">Saturday Youth Service</h3>
                <p className="text-gray-700">Youth gathering with music, teaching, and fun activities</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-black mb-2">3:00 PM - 5:00 PM</p>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special-font inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-gradient-to-br from-gold-200 to-cream-100 rounded-xl shadow-lg p-10 mb-10 border-2 border-gold-500">
          <h2 className="text-5xl font-bold text-black mb-8">Location</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal">Address</h3>
              <p className="text-gray-700 mb-2">
                <strong>Church Name:</strong> Gospel Blooms Kitengela
              </p>
              <p className="text-gray-700 mb-2">
                <strong className="text-black text-lg">Location:</strong> Kitengela, Kajiado County
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Landmark:</strong> Near Kitengela Town Center
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal">Getting Here</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Matatus drop off at Kitengela Town Center, 5-minute walk</li>
                <li>• Free parking available for all services</li>
                <li>• Wheelchair accessible entrance and seating</li>
                <li>• Look for the gold sign near the main road</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-cream-100 to-cream-50 rounded-xl shadow-lg p-10 border border-cream-500">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-semibold mb-2 text-charcoal">Phone</h3>
              <p className="text-gray-700">+254 712 345 678</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="font-semibold mb-2 text-charcoal">Email</h3>
              <p className="text-gray-700">info@gospelblooms.org</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🕐</div>
              <h3 className="font-semibold mb-2 text-charcoal">Office Hours</h3>
              <p className="text-gray-700">Mon-Fri: 9AM-5PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
