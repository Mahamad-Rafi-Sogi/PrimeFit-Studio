import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import WorkoutPlans from './pages/WorkoutPlans';
import DietPlans from './pages/DietPlans';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import Notifications from './pages/Notifications';
import BMICalculator from './pages/BMICalculator';
import AdminDashboard from './pages/AdminDashboard';
import { useAuth } from './contexts/AuthContext';

// Component to handle initial navigation
const NavigationController: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    // When user becomes authenticated
    if (isAuthenticated && !isLoading) {
      // Check if user just logged in
      const justLoggedIn = localStorage.getItem('primefit_just_logged_in');
      
      if (justLoggedIn === 'true') {
        // Clear the flag and redirect to home
        localStorage.removeItem('primefit_just_logged_in');
        navigate('/', { replace: true });
      } else if (location.pathname === '/login' || location.pathname === '') {
        // If on login page or empty path, go to home
        navigate('/', { replace: true });
      }
      // Otherwise, stay on current page (preserves navigation)
    }
  }, [isAuthenticated, isLoading, navigate, location]);

  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-slate-900">
          <ProtectedRoute>
            <NavigationController>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workouts" element={<WorkoutPlans />} />
                <Route path="/diet" element={<DietPlans />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/bmi" element={<BMICalculator />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </NavigationController>
          </ProtectedRoute>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;