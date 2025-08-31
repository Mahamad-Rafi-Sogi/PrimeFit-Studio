import React from 'react';
import { Clock, Users, Award, MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PerformanceDashboard from '../components/PerformanceDashboard';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const facilities = [
    { name: 'Cardio Zone', icon: '🏃‍♂️', description: 'State-of-the-art treadmills, bikes, and ellipticals' },
    { name: 'Weight Training', icon: '💪', description: 'Complete free weights and machine equipment' },
    { name: 'Group Classes', icon: '👥', description: 'Zumba, Yoga, CrossFit, and more' },
    { name: 'Personal Training', icon: '🎯', description: 'One-on-one sessions with certified trainers' },
    { name: 'Steam Room', icon: '🧖‍♀️', description: 'Relax and recover in our premium steam facilities' },
    { name: 'Nutrition Bar', icon: '🥤', description: 'Fresh protein shakes and healthy snacks' }
  ];

  const trainers = [
    { name: 'Alex Rodriguez', specialty: 'Strength Training', experience: '8 years', image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Sarah Johnson', specialty: 'Yoga & Flexibility', experience: '6 years', image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Mike Chen', specialty: 'HIIT & Cardio', experience: '5 years', image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Emma Davis', specialty: 'Nutrition Coaching', experience: '7 years', image: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const timings = [
    { day: 'Monday - Friday', time: '5:00 AM - 11:00 PM' },
    { day: 'Saturday', time: '6:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '7:00 AM - 9:00 PM' }
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105">
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
              <h3 className="text-xl font-semibold text-white mb-2">Certified Trainers</h3>
              <p className="text-gray-400">Expert guidance from certified fitness professionals</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Expert Trainers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our certified professionals are here to guide you every step of the way
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
              <div key={index} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{facility.name}</h3>
                <p className="text-gray-400">{facility.description}</p>
              </div>
            ))}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;