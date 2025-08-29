import React, { useState } from 'react';
import { workoutPlans } from '../data/workoutPlans';
import { Calendar, Target, Clock, Zap } from 'lucide-react';

const WorkoutPlans: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState('Beginner');

  const currentPlan = workoutPlans.find(plan => plan.level === selectedLevel);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-600 hover:bg-green-700';
      case 'Intermediate': return 'bg-blue-600 hover:bg-blue-700';
      case 'Advanced': return 'bg-red-600 hover:bg-red-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  const getMuscleGroupColor = (muscleGroup: string) => {
    const colors = [
      'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-cyan-500', 
      'bg-teal-500', 'bg-emerald-500', 'bg-lime-500', 'bg-amber-500'
    ];
    return colors[muscleGroup.length % colors.length];
  };

  return (
    <div 
      className="min-h-screen bg-slate-900 py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Workout Plans</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your fitness level and follow our expertly crafted workout plans
          </p>
        </div>

        {/* Level Selection Tabs */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-2 sm:space-y-0 sm:space-x-4">
          {workoutPlans.map((plan) => (
            <button
              key={plan.level}
              onClick={() => setSelectedLevel(plan.level)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                selectedLevel === plan.level
                  ? `${getLevelColor(plan.level)} text-white shadow-lg`
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
              }`}
            >
              {plan.level}
            </button>
          ))}
        </div>

        {/* Plan Description */}
        {currentPlan && (
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 mb-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{currentPlan.level} Level</h2>
            <p className="text-gray-300 text-lg">{currentPlan.description}</p>
          </div>
        )}

        {/* Weekly Plan */}
        {currentPlan && (
          <div className="grid gap-6">
            {currentPlan.weeklyPlan.map((dayPlan, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/80 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <Calendar className="h-6 w-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{dayPlan.day}</h3>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-red-400 mr-2" />
                    <span className="text-gray-300 font-medium">{dayPlan.focus}</span>
                  </div>
                </div>

                {dayPlan.exercises.length > 0 && (
                  <div className="grid gap-4">
                    {dayPlan.exercises.map((exercise, exerciseIndex) => (
                      <div key={exerciseIndex} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-600/50 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex items-center mb-2 md:mb-0">
                            <span className={`inline-block w-3 h-3 rounded-full mr-3 ${getMuscleGroupColor(exercise.muscleGroup)}`}></span>
                            <h4 className="font-semibold text-white">{exercise.name}</h4>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center text-gray-300">
                              <Zap className="h-4 w-4 mr-1 text-yellow-400" />
                              <span>{exercise.sets} sets</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <Target className="h-4 w-4 mr-1 text-green-400" />
                              <span>{exercise.reps} reps</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <Clock className="h-4 w-4 mr-1 text-blue-400" />
                              <span>{exercise.rest} rest</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="text-xs bg-slate-600 text-gray-300 px-2 py-1 rounded-full">
                            {exercise.muscleGroup}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {dayPlan.exercises.length === 0 && (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🧘‍♀️</div>
                    <p className="text-gray-400 font-medium">Rest and Recovery Day</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutPlans;