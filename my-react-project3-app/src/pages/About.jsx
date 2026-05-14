function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          About Gospel Blooms Kitengela
        </h1>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Gospel Blooms Kitengela is a modern church facility dedicated to serving the spiritual
            and community needs of Kitengela and its surrounding areas. We believe in creating a
            welcoming environment where everyone can experience God's love and grow in their faith.
          </p>
          <p className="text-gray-700">
            Our mission is to provide a centralized platform that brings together church operations,
            improves communication, and ensures everyone has access to accurate information anytime
            from any device.
          </p>
        </div>

        {/* What We Believe */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">What We Believe</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">The Bible</h3>
              <p className="text-gray-600">
                We believe the Bible is the inspired Word of God and the ultimate authority for
                faith and practice.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">God</h3>
              <p className="text-gray-600">
                We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">Jesus Christ</h3>
              <p className="text-gray-600">
                We believe Jesus Christ is the Son of God, fully divine and fully human, who died for
                our sins and rose again.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">Salvation</h3>
              <p className="text-gray-600">
                We believe salvation is by grace through faith in Jesus Christ alone.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="text-xl font-semibold mb-2">Love</h3>
              <p className="text-gray-600">
                We love God and love people, showing compassion and kindness to all.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We build authentic relationships and support one another in faith.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="text-xl font-semibold mb-2">Truth</h3>
              <p className="text-gray-600">
                We teach and live according to biblical truth with integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Leadership</h2>
          <p className="text-gray-700 mb-4">
            Our church is led by a team of dedicated pastors and elders who are committed to
            serving the congregation and fulfilling God's mission.
          </p>
          <p className="text-gray-700">
            For more information about our leadership team or to get involved in ministry,
            please contact us through our contact page or speak with one of our pastors after service.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
