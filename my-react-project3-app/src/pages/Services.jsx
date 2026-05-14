function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Service Times & Location
        </h1>

        {/* Service Times */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Weekly Services</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="text-xl font-semibold">Sunday Morning Service</h3>
                <p className="text-gray-600">Main worship service with praise and worship</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-purple-600">10:00 AM - 12:00 PM</p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="text-xl font-semibold">Wednesday Bible Study</h3>
                <p className="text-gray-600">Mid-week spiritual growth and fellowship</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-purple-600">6:00 PM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="text-xl font-semibold">Friday Prayer Meeting</h3>
                <p className="text-gray-600">Intercessory prayer and worship</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-purple-600">7:00 PM - 9:00 PM</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Saturday Youth Service</h3>
                <p className="text-gray-600">Youth-focused service and activities</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-purple-600">3:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Location</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p className="text-gray-700 mb-2">
                <strong>Church Name:</strong> Gospel Blooms Kitengela
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Location:</strong> Kitengela, Kajiado County
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Landmark:</strong> Near Kitengela Town Center
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Getting Here</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Accessible via public transport (matatus)</li>
                <li>• Parking available on site</li>
                <li>• Wheelchair accessible</li>
                <li>• 5 minutes walk from Kitengela town</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-600">+254 XXX XXX XXX</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-600">info@gospelblooms.org</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🕐</div>
              <h3 className="font-semibold mb-1">Office Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM-5PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
