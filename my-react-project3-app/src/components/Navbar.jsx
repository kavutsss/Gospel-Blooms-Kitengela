import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-cream-100 text-charcoal shadow-lg border-b border-cream-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-wide text-gold-500 hover:text-black transition-colors duration-300">
              Gospel Blooms Kitengela
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className="text-charcoal hover:text-white hover:bg-gold-500 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300">
              Home
            </Link>
            <Link to="/services" className="text-charcoal hover:text-white hover:bg-gold-500 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300">
              Services
            </Link>
            <Link to="/announcements" className="text-charcoal hover:text-white hover:bg-gold-500 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300">
              Announcements
            </Link>
            <Link to="/events" className="text-charcoal hover:text-white hover:bg-gold-500 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300">
              Events
            </Link>
            <Link to="/booking" className="text-charcoal hover:text-white hover:bg-gold-500 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300">
              Booking
            </Link>
            <Link to="/about" className="text-charcoal hover:text-white hover:bg-gold-500 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300">
              About
            </Link>
            <Link to="/contact" className="text-charcoal hover:text-white hover:bg-gold-500 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300">
              Contact
            </Link>
            <Link to="/admin" className="bg-gold-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gold-600 transition-all duration-300 shadow-lg ml-4">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
