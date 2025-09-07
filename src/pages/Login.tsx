import React, { useState } from 'react';
import { Phone, Lock, Users, AlertCircle, Loader, X, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [step, setStep] = useState<'mobile' | 'password'>('mobile');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [foundCustomer, setFoundCustomer] = useState<any>(null);
  const [error, setError] = useState('');
  const [showNotMemberPopup, setShowNotMemberPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { loginWithCustomer } = useAuth();

  const handleMobileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShowNotMemberPopup(false);

    // Validate mobile number
    if (!mobile.trim()) {
      setError('Please enter your mobile number');
      return;
    }

    if (mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if customer exists (import the function)
      const { findCustomerByMobile, debugCustomerData } = await import('../data/customers');
      
      // Debug and fix customer data if needed
      debugCustomerData();
      
      const customer = findCustomerByMobile(mobile);
      
      if (customer) {
        setFoundCustomer(customer);
        setStep('password');
        setError('');
      } else {
        setShowNotMemberPopup(true);
        setMobile('');
      }
    } catch (error) {
      console.error('Error checking customer:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('🔐 Starting password verification...');
      console.log('👤 Customer:', foundCustomer?.name, foundCustomer?.mobile);
      console.log('🔑 Customer password exists:', !!foundCustomer?.password);
      console.log('🔑 Customer password value:', foundCustomer?.password);
      console.log('🔑 Entered password:', password.trim());
      console.log('🔑 Password check:', foundCustomer?.password?.trim() === password.trim());
      
      // Verify password (trim both for comparison) - add safety check
      if (foundCustomer && foundCustomer.password && foundCustomer.password.trim() === password.trim()) {
        // Check if customer is active before allowing login
        if (!foundCustomer.isActive) {
          console.log('⚠️ Customer account is inactive');
          setError('Your account is inactive. Please contact support.');
          setIsSubmitting(false);
          return;
        }
        
        console.log('✅ Password verified, attempting login...');
        // Use the loginWithCustomer method for direct login after password verification
        const success = await loginWithCustomer(foundCustomer);
        console.log('🔐 Login result:', success);
        
        if (!success) {
          setError('Login failed. Please try again.');
        }
        // If success, the user will be redirected automatically by the AuthContext
      } else {
        console.log('❌ Password verification failed');
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 10) {
      setMobile(value);
      setError('');
    }
  };

  const goBackToMobile = () => {
    setStep('mobile');
    setPassword('');
    setFoundCustomer(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      {/* Not a Member Popup Modal */}
      {showNotMemberPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-slate-800 rounded-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowNotMemberPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center">
              <div className="bg-red-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-10 w-10 text-red-400" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">Not a Part of Our Community?</h2>
              <p className="text-gray-300 mb-6">
                You are not currently a member of PrimeFit Studio. Please join us today to explore our facilities!
              </p>
              
              <div className="bg-slate-700 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">Join PrimeFit Studio Today!</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2 text-blue-400" />
                    <span>Call: +91 7975832709</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="h-4 w-4 mr-2 text-green-400" />
                    <span>Visit: Hp Halli Road, Huvina Hadagali</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setShowNotMemberPopup(false)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Try Another Number
                </button>
                
                <a
                  href="tel:+917975832709"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call to Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-md w-full">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent mb-2">
            PrimeFit Studio
          </h1>
          <p className="text-gray-400">Member Login</p>
        </div>

        {/* Login Form */}
        <div className="bg-slate-800 rounded-xl p-8 shadow-xl">
          {/* Step 1: Mobile Number */}
          {step === 'mobile' && (
            <>
              <div className="text-center mb-6">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
                <p className="text-gray-400">Enter your mobile number to continue</p>
              </div>

              <form onSubmit={handleMobileSubmit} className="space-y-6">
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-400">+91</span>
                    </div>
                    <input
                      type="tel"
                      id="mobile"
                      value={mobile}
                      onChange={handleMobileChange}
                      placeholder="9876543210"
                      className="w-full pl-12 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !mobile}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin h-5 w-5 mr-2" />
                      Checking...
                    </>
                  ) : (
                    'Continue'
                  )}
                </button>
              </form>
            </>
          )}

          {/* Step 2: Password */}
          {step === 'password' && (
            <>
              <div className="text-center mb-6">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Welcome {foundCustomer?.name}!</h2>
                <p className="text-gray-400">Enter your password to login</p>
                <p className="text-sm text-gray-500 mt-1">Mobile: +91 {mobile}</p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {error}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting || !password}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin h-5 w-5 mr-2" />
                        Logging in...
                      </>
                    ) : (
                      'Login'
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={goBackToMobile}
                    disabled={isSubmitting}
                    className="w-full bg-slate-600 hover:bg-slate-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Change Mobile Number
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Contact Info */}
        <div className="text-center mt-6 text-gray-400">
          <p className="text-sm">
            Need help? Call us at{' '}
            <a href="tel:+917975832709" className="text-blue-400 hover:text-blue-300">
              +91 7975832709
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
