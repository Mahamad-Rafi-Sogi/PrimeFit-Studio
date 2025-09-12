import React, { useState } from 'react';
import { Clock, Users, Award, MapPin, Phone, Mail, X, ArrowRight, CheckCircle, Code, Github, Linkedin, Instagram, Star, Heart, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PerformanceDashboard from '../components/PerformanceDashboard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showJourneyModal, setShowJourneyModal] = useState(false);

  const handleStartJourney = () => {
    setShowJourneyModal(true);
  };

  const facilities = [
    { name: 'Cardio Zone', icon: '🏃‍♂️', description: 'State-of-the-art treadmills, bikes, and ellipticals', comingSoon: true },
    { name: 'Weight Training', icon: '💪', description: 'Complete free weights and machine equipment', comingSoon: false },
    { name: 'Group Classes', icon: '👥', description: 'Zumba, Yoga, CrossFit, and more', comingSoon: true },
    { name: 'Personal Training', icon: '🎯', description: 'One-on-one sessions with certified trainers', comingSoon: true },
    { name: 'Steam Room', icon: '🧖‍♀️', description: 'Relax and recover in our premium steam facilities', comingSoon: true },
    { name: 'Nutrition Bar', icon: '🥤', description: 'Fresh protein shakes and healthy snacks', comingSoon: true }
  ];

  const trainers = [
    { name: 'Shabbir Basha', specialty: 'Strength Training', experience: '8 years', image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Coming Soon', specialty: 'Yoga & Flexibility', experience: 'TBA', image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Coming Soon', specialty: 'HIIT & Cardio', experience: 'TBA', image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Shabbir Basha', specialty: 'Nutrition Coaching', experience: '8 years', image: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const timings = [
    { day: 'Monday - Friday', time: '5:00 AM - 11:00 PM' },
    { day: 'Saturday', time: '6:00 AM - 10:00 PM' },
    { day: 'Sunday', time: 'Closed for Rest' }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Performance Dashboard */}
      <div className="container mx-auto px-4 py-6">
        <PerformanceDashboard />
      </div>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1600')` 
        }}
      >
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            PrimeFit Studio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-medium">
            Where Fitness Meets Lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleStartJourney}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => navigate('/membership')}
              className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View Membership
            </button>
          </div>
        </div>
      </section>

      {/* Community Appreciation Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Heart className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Thank You for Being Part of Our Community!</h2>
            <p className="text-xl text-gray-100 leading-relaxed">
              We are glad to have you in our PrimeFit Studio community. Your fitness journey matters to us, 
              and together we're building something amazing in Huvina Hadagali.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Rate App */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-white mb-3">Rate Our App</h3>
              <p className="text-gray-200 text-sm mb-4">
                Love our app? Help others discover PrimeFit Studio by rating us on the Play Store!
              </p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.primefitstudio.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                ⭐ Rate on Play Store
              </a>
            </div>

            {/* Follow Instagram */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <Instagram className="h-8 w-8 text-pink-400 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-white mb-3">Follow Us on Instagram</h3>
              <p className="text-gray-200 text-sm mb-4">
                Stay updated with our latest workouts, success stories, and fitness tips!
              </p>
              <a 
                href="https://instagram.com/primefitstudio_huvina_hadagali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📸 Follow on Instagram
              </a>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-200 text-sm">
              Your support means the world to us! 💪
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">About PrimeFit Studio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              PrimeFit Studio is the first-of-its-kind gym in Huvina Hadagali, built on the values of respect, inclusivity, and community support. We welcome youth, adults, men, and women alike, 
              helping each individual work towards a healthier body and mind. With the right mix of local guidance, encouragement, and simple technology, we aim to bring modern fitness within the reach of our town.
              <br />
              <br />
              At PrimeFit Studio, we believe fitness is more than just working out – it’s a journey of lifestyle transformation. Our welcoming space and supportive environment make it easier for
              everyone to stay motivated and consistent in their fitness journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Trainer</h3>
              <p className="text-gray-400">guidance from fitness Trainer</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Support</h3>
              <p className="text-gray-400">Join a motivated community of fitness enthusiasts</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Flexible Hours</h3>
              <p className="text-gray-400">Train on your schedule with extended operating hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Timings */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Opening Hours</h2>
            <p className="text-gray-400">We're here when you need us most</p>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-8 max-w-2xl mx-auto">
            {timings.map((timing, index) => (
              <div key={index} className="flex justify-between items-center py-4 border-b border-slate-700 last:border-b-0">
                <span className="text-white font-medium">{timing.day}</span>
                <span className="text-blue-400 font-semibold">{timing.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Trainers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our Trainer is here to guide you every step of the way
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-slate-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{trainer.name}</h3>
                  <p className="text-blue-400 font-medium mb-1">{trainer.specialty}</p>
                  <p className="text-gray-400 text-sm">{trainer.experience} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">World-Class Facilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need for a complete fitness experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="relative bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{facility.name}</h3>
                <p className="text-gray-400">{facility.description}</p>
                
                {/* Coming Soon Tooltip */}
                {facility.comingSoon && (
                  <div className="absolute inset-0 bg-slate-900/95 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🚧</div>
                      <div className="text-yellow-400 font-bold text-lg mb-1">Coming Soon</div>
                      <div className="text-gray-300 text-sm">This facility will be available soon</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment-section" className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 sm:p-8">
            <div className="text-center mb-8">
              <CreditCard className="h-12 w-12 text-white mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Quick & Easy Payments</h2>
              <p className="text-gray-100 text-base sm:text-lg">
                Pay your membership fees instantly using UPI. Quick, secure, and hassle-free!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 text-center">Pay with UPI</h3>
              <div className="flex flex-col space-y-4">
                {/* UPI Payment Button */}
                <div className="text-center">
                  <a 
                    href="upi://pay?pa=primefitstudio@paytm&pn=PrimeFit%20Studio&mc=7299&tr=PRIMEFIT001&tn=Membership%20Payment%20-%20PrimeFit%20Studio&am=&cu=INR"
                    className="inline-block bg-white hover:bg-gray-100 text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-base sm:text-lg w-full sm:w-auto"
                  >
                    💳 Pay Now with UPI
                  </a>
                </div>

                {/* UPI ID Display */}
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <p className="text-white text-sm mb-2">UPI ID:</p>
                  <p className="text-yellow-300 font-mono text-lg font-semibold">primefitstudio@paytm</p>
                  <button 
                    onClick={() => navigator.clipboard.writeText('primefitstudio@paytm')}
                    className="text-blue-200 hover:text-blue-100 text-sm mt-2 underline"
                  >
                    📋 Copy UPI ID
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="text-center text-white">
                <div className="text-2xl mb-2">✅</div>
                <p className="text-sm">Secure payments through your UPI app</p>
              </div>
              <div className="text-center text-white">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-sm">Instant payment confirmation</p>
              </div>
              <div className="text-center text-white">
                <div className="text-2xl mb-2">💰</div>
                <p className="text-sm">No additional charges</p>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-lg p-4 text-center">
              <p className="text-white text-sm sm:text-base">
                <strong>📱 After Payment:</strong> Please share the transaction screenshot with us on WhatsApp
              </p>
              <a 
                href="https://wa.me/917975832709" 
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors mt-3"
              >
                💬 WhatsApp: +91 7975832709
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Life?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center text-white">
              <Phone className="h-5 w-5 mr-2" />
              <span>+91 7975832709</span>
            </div>
            <div className="flex items-center text-white">
              <Mail className="h-5 w-5 mr-2" />
              <span>primefitstudio@gmail.com</span>
            </div>
            <div className="flex items-center text-white">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Hp Halli Road, Huvina Hadagali</span>
            </div>
            <a 
              href="https://instagram.com/primefitstudio_huvina_hadagali" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-pink-200 transition-colors group"
            >
              <Instagram className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>@primefitstudio_huvina_hadagali</span>
            </a>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer-section" className="py-12 bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-blue-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Developed By</h3>
            </div>
            
            <div className="bg-slate-700 rounded-xl p-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">MR</span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2">Mahamad Rafi Sogi</h4>
                <p className="text-blue-400 font-medium mb-1">Full Stack Developer</p>
                <p className="text-gray-400 text-sm mb-4">React • TypeScript • Modern Web Technologies</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://github.com/Mahamad-Rafi-Sogi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors group"
                    title="GitHub Profile"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/mdrafisogi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors group"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/al_buraq_whitebeast/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-lg transition-colors group"
                    title="Instagram Profile"
                  >
                    <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                  
                  <a 
                    href="mailto:mrafisogi.dev@gmail.com"
                    className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-colors group"
                    title="Email Developer"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                
                <div className="mt-4 text-xs text-gray-500">
                  © 2025 • Built with React & TypeScript
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Journey Modal */}
      {showJourneyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-slate-800 rounded-xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowJourneyModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Welcome to Your Fitness Journey!</h2>
              <p className="text-gray-300 text-lg">
                Ready to transform your life? Here's how to get started at PrimeFit Studio.
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Choose Your Membership</h3>
                  <p className="text-gray-300 mb-3">
                    Select from our flexible membership plans that suit your lifestyle and fitness goals.
                  </p>
                  <button 
                    onClick={() => {
                      setShowJourneyModal(false);
                      navigate('/membership');
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    View Membership Plans
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Our Facility</h3>
                  <p className="text-gray-300 mb-3">
                    Come check out our modern equipment and meet our friendly team. We're located at Hp Halli Road, Huvina Hadagali.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href="tel:+917975832709"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
                    >
                      Call Us: +91 7975832709
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Start Training</h3>
                  <p className="text-gray-300 mb-3">
                    Begin your fitness journey with our expert guidance and supportive community.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>Weight Training Available</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>More Facilities Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-700 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Why Choose PrimeFit Studio?</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• First modern gym in Huvina Hadagali</li>
                <li>• Welcoming environment for all fitness levels</li>
                <li>• Expert trainer guidance</li>
                <li>• Community-focused approach</li>
                <li>• Flexible timing to suit your schedule</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <button 
                onClick={() => setShowJourneyModal(false)}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Got It!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;