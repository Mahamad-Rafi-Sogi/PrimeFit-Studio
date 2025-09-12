import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, LogOut, Shield, Bell } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { customer, logout, isAdmin } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Workout Plans', path: '/workouts' },
    { name: 'Diet Plans', path: '/diet' },
    { name: 'Membership', path: '/membership' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Notifications', path: '/notifications' },
    { name: 'BMI Calculator', path: '/bmi' },
    ...(isAdmin ? [{ name: 'Admin Dashboard', path: '/admin' }] : [])
  ];

  const scrollToDeveloper = () => {
    // First navigate to home page if not already there
    if (location.pathname !== '/') {
      window.location.href = '/#developer';
      return;
    }
    
    // Scroll to developer section
    const developerSection = document.getElementById('developer-section');
    if (developerSection) {
      developerSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  const scrollToPayment = () => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // First navigate to home page if not already there
    if (location.pathname !== '/') {
      // Use window.location.href to ensure page loads first, then scroll
      window.location.href = '/#payment';
      return;
    }
    
    // Small delay to ensure DOM is ready, then scroll to payment section
    setTimeout(() => {
      const paymentSection = document.getElementById('payment-section');
      if (paymentSection) {
        paymentSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start' 
        });
      }
    }, 100);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors flex-shrink-0 min-w-0">
            <Dumbbell className="h-8 w-8 text-blue-400 flex-shrink-0" />
            <div className="min-w-0">
              <span className="font-bold text-lg sm:text-xl whitespace-nowrap">PrimeFit Studio</span>
              {customer && (
                <div className="text-xs sm:text-sm text-gray-300 flex items-center gap-2">
                  <span className="truncate">Welcome, {customer.name}</span>
                  {isAdmin && (
                    <span className="bg-yellow-500 text-black px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 flex-shrink-0">
                      <Shield className="h-3 w-3" />
                      ADMIN
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Payment Button */}
              <button
                onClick={scrollToPayment}
                className="px-3 py-2 rounded-md text-sm font-medium bg-green-600 hover:bg-green-700 text-white transition-colors flex items-center"
              >
                💳 Payment
              </button>
              
              {/* Developer Info Button */}
              <button
                onClick={scrollToDeveloper}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
              >
                Developer Info
              </button>
              
              {/* Notification Icon */}
              <Link
                to="/notifications"
                className="relative p-2 rounded-md text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              
              {/* Logout Button */}
              <button
                onClick={logout}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-red-400 hover:bg-red-600 hover:text-white transition-colors"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Notification Icon */}
            <Link
              to="/notifications"
              className="relative p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white hover:bg-slate-700 p-2 rounded-md transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Payment Button */}
              <button
                onClick={() => {
                  scrollToPayment();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                💳 Payment
              </button>
              
              {/* Mobile Developer Info Button */}
              <button
                onClick={() => {
                  scrollToDeveloper();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
              >
                Developer Info
              </button>
              
              {/* Mobile Logout Button */}
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-400 hover:bg-red-600 hover:text-white transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2 inline" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;