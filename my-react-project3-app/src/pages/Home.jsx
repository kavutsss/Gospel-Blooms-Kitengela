function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Gospel Blooms Kitengela
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your centralized platform for church operations and communication
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/services"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
            >
              View Services
            </a>
            <a
              href="/announcements"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition"
            >
              Latest Updates
            </a>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide a centralized platform that brings together church operations,
              improves communication, and ensures everyone has access to accurate information
              anytime from any device.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To create a seamless digital experience for church members, leaders, and visitors,
              making it easy to stay connected, informed, and engaged with church activities.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Quick Access
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <a
              href="/announcements"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-xl font-semibold mb-2">Announcements</h3>
              <p className="text-gray-600">Stay updated with latest news</p>
            </a>
            <a
              href="/events"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <p className="text-gray-600">View upcoming church events</p>
            </a>
            <a
              href="/booking"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2">Facility Booking</h3>
              <p className="text-gray-600">Request facility use</p>
            </a>
            <a
              href="/contact"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600">Get in touch with us</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
