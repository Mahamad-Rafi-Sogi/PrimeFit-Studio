import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [advice, setAdvice] = useState<string>('');

  const calculateBMI = () => {
    const heightInM = parseInt(height) / 100;
    const weightInKg = parseInt(weight);
    
    if (heightInM > 0 && weightInKg > 0) {
      const calculatedBMI = weightInKg / (heightInM * heightInM);
      setBmi(parseFloat(calculatedBMI.toFixed(1)));
      
      // Determine category and advice
      if (calculatedBMI < 18.5) {
        setCategory('Underweight');
        setAdvice('Consider a muscle-building diet plan and strength training to gain healthy weight.');
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
        setCategory('Normal');
        setAdvice('Great job! Maintain your current lifestyle with regular exercise and balanced nutrition.');
      } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
        setCategory('Overweight');
        setAdvice('Focus on cardio exercises and a weight-loss diet plan to reach your ideal weight.');
      } else {
        setCategory('Obese');
        setAdvice('Consult with our trainers for a comprehensive weight-loss program including diet and exercise.');
      }
    }
  };

  useEffect(() => {
    if (height && weight) {
      calculateBMI();
    } else {
      setBmi(null);
      setCategory('');
      setAdvice('');
    }
  }, [height, weight]);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Underweight': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'Normal': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Overweight': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'Obese': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Underweight': return TrendingDown;
      case 'Normal': return Minus;
      case 'Overweight': return TrendingUp;
      case 'Obese': return TrendingUp;
      default: return Calculator;
    }
  };

  const bmiRanges = [
    { range: 'Below 18.5', category: 'Underweight', color: 'bg-blue-500' },
    { range: '18.5 - 24.9', category: 'Normal', color: 'bg-green-500' },
    { range: '25.0 - 29.9', category: 'Overweight', color: 'bg-orange-500' },
    { range: '30.0 and above', category: 'Obese', color: 'bg-red-500' }
  ];

  return (
    <div 
      className="min-h-screen bg-slate-900 py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">BMI Calculator</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Calculate your Body Mass Index and get personalized fitness recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Calculator className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Calculate Your BMI</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height in centimeters"
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight in kilograms"
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              {/* Results */}
              {bmi && (
                <div className="mt-8 p-6 bg-slate-700/50 rounded-lg">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-white mb-2">{bmi}</div>
                    <div className="text-gray-400">Your BMI</div>
                  </div>
                  
                  {category && (
                    <div className={`border rounded-lg p-4 ${getCategoryColor(category)}`}>
                      <div className="flex items-center justify-center mb-2">
                        {React.createElement(getCategoryIcon(category), { className: 'h-6 w-6 mr-2' })}
                        <span className="font-semibold text-lg">{category}</span>
                      </div>
                      <p className="text-center text-sm opacity-90">{advice}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* BMI Reference Chart */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">BMI Reference Chart</h2>
            
            <div className="space-y-4">
              {bmiRanges.map((range, index) => (
                <div key={index} className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors">
                  <div className={`w-4 h-4 rounded-full ${range.color} mr-4`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{range.category}</span>
                      <span className="text-gray-400 text-sm">{range.range}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
              <h3 className="text-white font-semibold mb-2">📝 Important Note</h3>
              <p className="text-gray-300 text-sm">
                BMI is a general indicator and may not account for muscle mass, bone density, and other factors. 
                Consult with our trainers for a comprehensive body composition analysis.
              </p>
            </div>

            <div className="mt-6 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Book Body Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Fitness Recommendations */}
        {category && (
          <div className="mt-12 bg-slate-800/60 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Recommended for You</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-600/50 transition-colors">
                <div className="text-3xl mb-3">💪</div>
                <h3 className="text-white font-semibold mb-2">Workout Plans</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {category === 'Underweight' ? 'Focus on strength training' :
                   category === 'Overweight' || category === 'Obese' ? 'Cardio and HIIT workouts' :
                   'Balanced workout routine'}
                </p>
                <button className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                  View Plans →
                </button>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-600/50 transition-colors">
                <div className="text-3xl mb-3">🥗</div>
                <h3 className="text-white font-semibold mb-2">Diet Plans</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {category === 'Underweight' ? 'Muscle gain nutrition plan' :
                   category === 'Overweight' || category === 'Obese' ? 'Weight loss meal plans' :
                   'Maintenance diet plans'}
                </p>
                <button className="text-green-400 hover:text-green-300 font-medium text-sm">
                  View Plans →
                </button>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-600/50 transition-colors">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-white font-semibold mb-2">Personal Training</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Get personalized guidance from our certified trainers for faster results
                </p>
                <button className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                  Book Session →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;