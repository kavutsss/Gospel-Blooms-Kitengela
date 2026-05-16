function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-16 text-gold-500">
          About Gospel Blooms Kitengela
        </h1>

        {/* About Section */}
        <div className="bg-gradient-to-br from-cream-200 to-cream-100 rounded-xl shadow-lg p-10 mb-10 border border-cream-500">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Who We Are</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Gospel Blooms Kitengela has been serving the Kitengela community since 2015. We're a growing church family that believes in making faith practical and accessible to everyone. Whether you're new to the area or have been here for years, you'll find a place where you can belong and grow.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We built this platform to help our community stay connected. From service times to event updates, we wanted to make it easy for everyone to find what they need without having to make multiple calls or wait for Sunday announcements.
          </p>
        </div>

        {/* What We Believe */}
        <div className="bg-white rounded-xl shadow-lg p-10 mb-10 border border-cream-500">
          <h2 className="text-3xl font-bold text-charcoal mb-6">What We Believe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-gold-500 pl-6">
              <h3 className="text-xl font-semibold mb-2 text-charcoal">The Bible</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe the Bible is the inspired Word of God and the ultimate authority for
                faith and practice.
              </p>
            </div>
            <div className="border-l-4 border-gold-500 pl-6">
              <h3 className="text-xl font-semibold mb-2 text-charcoal">God</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.
              </p>
            </div>
            <div className="border-l-4 border-gold-500 pl-6">
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Jesus Christ</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe Jesus Christ is the Son of God, fully divine and fully human, who died for
                our sins and rose again.
              </p>
            </div>
            <div className="border-l-4 border-gold-500 pl-6">
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Salvation</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe salvation is by grace through faith in Jesus Christ alone.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-br from-cream-100 to-cream-50 rounded-xl shadow-lg p-10 mb-10 border border-cream-500">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Love</h3>
              <p className="text-gray-600 leading-relaxed">
                We love God and love people, showing compassion and kindness to all.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We build authentic relationships and support one another in faith.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Truth</h3>
              <p className="text-gray-600 leading-relaxed">
                We teach and live according to biblical truth with integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white rounded-xl shadow-lg p-10 border border-cream-500">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Our Leadership</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our church is led by Pastor James and a team of dedicated elders who have been serving the Kitengela community together for over 8 years. They're committed to helping everyone grow in their faith and find their place in ministry.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Interested in joining our ministry team or learning more about leadership opportunities? Stop by after any Sunday service or reach out through our contact page - we'd love to chat with you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
