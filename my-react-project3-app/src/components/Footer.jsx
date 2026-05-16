function Footer() {
  return (
    <footer className="bg-cream-100 text-charcoal py-16 border-t border-cream-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wide text-gold-500">Gospel Blooms Kitengela</h3>
            <p className="text-gray-700 leading-relaxed">
              Bringing our community together through faith, fellowship, and shared purpose since 2015.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-700 hover:text-black hover:underline transition-colors duration-300">Home</a></li>
              <li><a href="/services" className="text-gray-700 hover:text-black hover:underline transition-colors duration-300">Services</a></li>
              <li><a href="/announcements" className="text-gray-700 hover:text-black hover:underline transition-colors duration-300">Announcements</a></li>
              <li><a href="/events" className="text-gray-700 hover:text-black hover:underline transition-colors duration-300">Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wide">Contact</h3>
            <p className="text-gray-700 leading-relaxed">
              Kitengela, Kenya<br />
              Email: info@gospelblooms.org
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cream-600 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Gospel Blooms Kitengela. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
