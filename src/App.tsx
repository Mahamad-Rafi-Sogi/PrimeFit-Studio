import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import WorkoutPlans from './pages/WorkoutPlans';
import DietPlans from './pages/DietPlans';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import Notifications from './pages/Notifications';
import BMICalculator from './pages/BMICalculator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<WorkoutPlans />} />
          <Route path="/diet" element={<DietPlans />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/bmi" element={<BMICalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;