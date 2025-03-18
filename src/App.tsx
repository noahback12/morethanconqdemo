import React from 'react';
import { Facebook, Heart, School, Users, PrinterIcon as Prison, ChevronRight, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.discordapp.com/attachments/617523776535658538/1351664666920615936/morethanconquerorsroundlogo.png?ex=67db3351&is=67d9e1d1&hm=365425d272c81c03307d0806504cf9ebcb7a4159c061450ede72d41d2e489ae5&" 
                alt="More Than Conquerors Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">More Than Conquerors</span>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.facebook.com/morethanconquerorsaf/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2">
                Donate Now <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center pt-16"
        style={{
          backgroundImage: 'url("https://i.imgur.com/kMuE5ap.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
            Empowering Communities Through Christ's Love
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            For over 30 years, we've been serving communities in Uganda through education, 
            prisoner support, and spiritual guidance.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            Learn More <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Impact in Uganda
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <ImpactCard 
              icon={<School className="w-8 h-8 text-red-600" />}
              title="Education in Rakai"
              description="Supporting a school that provides Christ-centered education, English language learning, and essential life skills to children in Rakai, Uganda."
            />
            <ImpactCard 
              icon={<Users className="w-8 h-8 text-red-600" />}
              title="30+ Years of Partnership"
              description="Working hand-in-hand with a Ugandan family for over three decades, enabling Ugandans to support Ugandans effectively."
            />
            <ImpactCard 
              icon={<Prison className="w-8 h-8 text-red-600" />}
              title="Prisoner Support"
              description="Providing material aid and spiritual support to prisoners across Uganda, sharing Christ's message of hope and redemption."
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Christ-Centered Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Through faith and dedication, we've built lasting relationships in Uganda that enable us 
                to make a real difference. Our partnership with a local Ugandan family spans over three 
                decades, allowing us to understand and serve the community's needs effectively.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in empowering communities through Christ's teachings, focusing on education 
                and spiritual support. Our work extends from classrooms to prisons, touching lives and 
                spreading hope wherever we go.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                Join Our Mission <ExternalLink className="w-5 h-5" />
              </button>
            </div>
            <div 
              className="h-[500px] rounded-2xl overflow-hidden"
              style={{
                backgroundImage: 'url("https://i.imgur.com/IazbYJl.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Make a Difference Today
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Your support helps us continue our mission of serving communities in Uganda through 
            education, spiritual guidance, and prisoner support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.discordapp.com/attachments/617523776535658538/1351664666920615936/morethanconquerorsroundlogo.png?ex=67db3351&is=67d9e1d1&hm=365425d272c81c03307d0806504cf9ebcb7a4159c061450ede72d41d2e489ae5&" 
                  alt="More Than Conquerors Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold">More Than Conquerors</span>
              </div>
              <p className="text-gray-400 max-w-md">
                A 501(c) charity organization dedicated to serving communities in Uganda through 
                Christ's love and teachings.
             </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              
              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.facebook.com/morethanconquerorsaf" target="_blank" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="https://www.facebook.com/morethanconquerorsaf" target="_blank" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
                  <li><a href="https://www.facebook.com/morethanconquerorsaf" target="_blank" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} More Than Conquerors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ImpactCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;