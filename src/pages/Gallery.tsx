import React, { useState } from 'react';
import { Play, Users, Trophy, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('gym');

  const categories = [
    { id: 'gym', name: 'Gym Facilities', icon: Camera },
    { id: 'trainers', name: 'Our Trainers', icon: Users },
    { id: 'transformations', name: 'Transformations', icon: Trophy }
  ];

  const galleryItems = {
    gym: [
      { type: 'image', src: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Main Workout Floor' },
      { type: 'image', src: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Cardio Section' },
      { type: 'image', src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Free Weights Area' },
      { type: 'image', src: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Functional Training Zone' },
      { type: 'image', src: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Strength Training' },
      { type: 'image', src: 'https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Group Class Studio' }
    ],
    trainers: [
      { type: 'image', src: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Personal Training Session' },
      { type: 'image', src: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Yoga Instruction' },
      { type: 'image', src: 'https://images.pexels.com/photos/3757956/pexels-photo-3757956.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Strength Coaching' },
      { type: 'image', src: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Group Fitness Class' },
      { type: 'image', src: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Nutrition Consultation' },
      { type: 'image', src: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'HIIT Training' }
    ],
    transformations: [
      { type: 'image', src: 'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Weight Loss Success - Sarah' },
      { type: 'image', src: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Muscle Gain - Mike' },
      { type: 'image', src: 'https://images.pexels.com/photos/3757956/pexels-photo-3757956.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Strength Training - Alex' },
      { type: 'image', src: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Flexibility Journey - Emma' },
      { type: 'image', src: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Fitness Competition Prep' },
      { type: 'image', src: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Complete Lifestyle Change' }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at our facilities, trainers, and amazing member transformations
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 rounded-lg p-1 flex space-x-1">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-md font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems[selectedCategory as keyof typeof galleryItems].map((item, index) => (
            <div key={index} className="group relative bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="relative w-full h-full bg-slate-700 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white opacity-70" />
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="mt-20 bg-slate-800/60 backdrop-blur-sm rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-400">Success Stories</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
              <p className="text-gray-400">Happy Members</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">4.9★</h3>
              <p className="text-gray-400">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;