import React, { useState } from 'react';
import { dietPlans } from '../data/dietPlans';
import { Leaf, Target, Clock, Zap } from 'lucide-react';

const DietPlans: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'veg' | 'non-veg'>('veg');
  const [selectedGoal, setSelectedGoal] = useState<'weight-loss' | 'muscle-gain'>('weight-loss');

  const currentPlan = dietPlans.find(plan => plan.type === selectedType && plan.goal === selectedGoal);

  const mealTimes = [
    { key: 'breakfast', name: 'Breakfast', icon: '🌅', time: '7:00 - 9:00 AM', color: 'from-orange-500 to-yellow-500' },
    { key: 'lunch', name: 'Lunch', icon: '☀️', time: '12:00 - 2:00 PM', color: 'from-green-500 to-emerald-500' },
    { key: 'dinner', name: 'Dinner', icon: '🌙', time: '7:00 - 9:00 PM', color: 'from-purple-500 to-indigo-500' },
    { key: 'snacks', name: 'Snacks', icon: '🍎', time: 'Anytime', color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <div 
      className="min-h-screen bg-slate-900 py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Diet Plans</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fuel your body with our carefully crafted nutrition plans
          </p>
        </div>

        {/* Type and Goal Selection */}
        <div className="space-y-6 mb-12">
          {/* Diet Type Selection */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Select Diet Type</h3>
            <div className="flex justify-center space-x-4">
              {(['veg', 'non-veg'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                    selectedType === type
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <Leaf className="h-4 w-4 inline mr-2" />
                  {type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                </button>
              ))}
            </div>
          </div>

          {/* Goal Selection */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Select Your Goal</h3>
            <div className="flex justify-center space-x-4">
              {(['weight-loss', 'muscle-gain'] as const).map((goal) => (
                <button
                  key={goal}
                  onClick={() => setSelectedGoal(goal)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                    selectedGoal === goal
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <Target className="h-4 w-4 inline mr-2" />
                  {goal === 'weight-loss' ? 'Weight Loss' : 'Muscle Gain'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Meal Plans */}
        {currentPlan && (
          <div className="grid gap-8">
            {mealTimes.map((mealTime) => (
              <div key={mealTime.key} className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${mealTime.color} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-2xl">{mealTime.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{mealTime.name}</h3>
                    <div className="flex items-center text-gray-400 mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{mealTime.time}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentPlan.meals[mealTime.key as keyof typeof currentPlan.meals].map((meal, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-600/50 transition-colors">
                      <h4 className="font-semibold text-white mb-2">{meal.name}</h4>
                      <p className="text-gray-400 text-sm mb-3">{meal.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-orange-400">
                          <Zap className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">{meal.calories} cal</span>
                        </div>
                        <div className="text-green-400 text-sm font-medium">
                          {meal.protein} protein
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Nutrition Tips */}
        <div className="mt-12 bg-slate-800/60 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Nutrition Tips</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">💧 Stay Hydrated</h4>
              <p className="text-gray-400 text-sm">Drink at least 3-4 liters of water daily to support metabolism and recovery.</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">⏰ Timing Matters</h4>
              <p className="text-gray-400 text-sm">Eat your post-workout meal within 30-60 minutes for optimal recovery.</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">🥗 Meal Prep</h4>
              <p className="text-gray-400 text-sm">Prepare meals in advance to stay consistent with your nutrition goals.</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">📊 Track Progress</h4>
              <p className="text-gray-400 text-sm">Monitor your intake and adjust portions based on your progress and energy levels.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlans;