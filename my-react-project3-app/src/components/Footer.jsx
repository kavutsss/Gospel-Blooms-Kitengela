function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Gospel Blooms Kitengela</h3>
            <p className="text-gray-300">
              A centralized platform for church operations and communication.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/announcements" className="text-gray-300 hover:text-white">Announcements</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-white">Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Kitengela, Kenya<br />
              Email: info@gospelblooms.org
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Gospel Blooms Kitengela. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
