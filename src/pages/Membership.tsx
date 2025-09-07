import React from 'react';
import { membershipPlans } from '../data/membershipData';
import { Check, Star, Phone, Mail, MapPin } from 'lucide-react';

const Membership: React.FC = () => {
  return (
    <div 
      className="min-h-screen bg-slate-900 py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Membership Plans</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your fitness journey. All plans include access to our premium facilities.
          </p>
        </div>

        {/* Membership Plans */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {membershipPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/80 transition-all transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.duration}</p>
                <div className="mb-4">
                  {plan.originalPrice && (
                    <span className="text-gray-500 line-through text-lg mr-2">₹{plan.originalPrice.toLocaleString()}</span>
                  )}
                  <span className="text-3xl font-bold text-white">₹{plan.price.toLocaleString()}</span>
                </div>
                {plan.originalPrice && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    Save ₹{(plan.originalPrice - plan.price).toLocaleString()}
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">🎉 Limited Time Offers!</h2>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Student Discount</h3>
              <p className="text-sm">10% off on all plans with valid student ID</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Couple's Package</h3>
              <p className="text-sm">Join with a partner and get 10% off each plan</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Team Discount</h3>
              <p className="text-sm">Groups of 10+ members get 10% off each plan</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Join?</h2>
          <p className="text-gray-300 mb-8 text-lg">Contact us today to start your fitness journey</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors">
              <Phone className="h-8 w-8 text-blue-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Call Us</h3>
              <p className="text-gray-400">+91 7760570036</p>
              <p className="text-gray-400">+91 7975832709</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors">
              <Mail className="h-8 w-8 text-green-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Email Us</h3>
              <p className="text-gray-400">primefitstudio@gmail.com</p>
              <p className="text-gray-400">primefitstudioinfo@gmail.com</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors">
              <MapPin className="h-8 w-8 text-red-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Visit Us</h3>
              <p className="text-gray-400">PrimeFit Studio </p>
              <p className="text-gray-400">Hp Halli Road, Huvina Hadgali 583219</p>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Schedule a Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;