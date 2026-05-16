function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cream-200 to-cream-100 text-charcoal py-24 border-b border-cream-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide text-gold-500">
            Welcome to Gospel Blooms Kitengela
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-700">
            Connecting our community through faith, fellowship, and shared purpose
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="/services"
              className="special-font bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-all shadow-lg"
            >
              View Services
            </a>
            <a
              href="/announcements"
              className="special-font border-2 border-gold-500 text-charcoal px-8 py-4 rounded-lg font-semibold hover:bg-gold-500 hover:text-white transition-all"
            >
              Latest Updates
            </a>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-xl shadow-lg border border-cream-500">
            <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We want to make church life simpler and more connected. No more missed announcements or wondering about service times - everything you need to know about what's happening at Gospel Blooms is right here.
            </p>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-lg border border-cream-500">
            <h2 className="text-3xl font-bold text-black mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              Building a community where everyone feels at home and can easily participate in church life, whether you're attending in person or staying connected from afar.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-cream-50 py-20 border-t border-cream-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal">
            Quick Access
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <a
              href="/announcements"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center border border-cream-500 hover:border-gold-500"
            >
              <div className="text-5xl mb-4">📢</div>
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Announcements</h3>
              <p className="text-gray-600">Stay updated with latest news</p>
            </a>
            <a
              href="/events"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center border border-cream-500 hover:border-gold-500"
            >
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Events</h3>
              <p className="text-gray-600">View upcoming church events</p>
            </a>
            <a
              href="/booking"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center border border-cream-500 hover:border-gold-500"
            >
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Facility Booking</h3>
              <p className="text-gray-600">Request facility use</p>
            </a>
            <a
              href="/contact"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center border border-cream-500 hover:border-gold-500"
            >
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Contact Us</h3>
              <p className="text-gray-600">Get in touch with us</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
