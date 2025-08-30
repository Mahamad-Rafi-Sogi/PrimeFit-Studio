import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Customer, findCustomerByMobile, getCustomerStats, isAdminCustomer } from '../data/customers';

interface AuthContextType {
  customer: Customer | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (mobile: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  customerStats: ReturnType<typeof getCustomerStats> | null;
  loginAttempts: number;
  lastLoginTime: Date | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Performance monitoring
const performanceMonitor = {
  loginTimes: [] as number[],
  getAverageLoginTime: () => {
    if (performanceMonitor.loginTimes.length === 0) return 0;
    const sum = performanceMonitor.loginTimes.reduce((a, b) => a + b, 0);
    return sum / performanceMonitor.loginTimes.length;
  },
  addLoginTime: (time: number) => {
    performanceMonitor.loginTimes.push(time);
    // Keep only last 10 measurements
    if (performanceMonitor.loginTimes.length > 10) {
      performanceMonitor.loginTimes.shift();
    }
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [customerStats, setCustomerStats] = useState<ReturnType<typeof getCustomerStats> | null>(null);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lastLoginTime, setLastLoginTime] = useState<Date | null>(null);

  // Load customer stats on app start (cached)
  useEffect(() => {
    const loadStats = () => {
      try {
        const stats = getCustomerStats();
        setCustomerStats(stats);
        console.log('Customer database loaded:', stats);
      } catch (error) {
        console.error('Error loading customer stats:', error);
      }
    };
    
    loadStats();
  }, []);

  // Check if user is already logged in on app start
  useEffect(() => {
    const savedCustomer = localStorage.getItem('primefit_customer');
    const savedLoginTime = localStorage.getItem('primefit_login_time');
    
    if (savedCustomer) {
      try {
        const parsedCustomer = JSON.parse(savedCustomer);
        setCustomer(parsedCustomer);
        
        if (savedLoginTime) {
          setLastLoginTime(new Date(savedLoginTime));
        }
      } catch (error) {
        console.error('Error parsing saved customer data:', error);
        localStorage.removeItem('primefit_customer');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (mobile: string): Promise<boolean> => {
    const startTime = performance.now();
    console.log('Attempting login for mobile:', mobile);
    
    setLoginAttempts(prev => prev + 1);
    
    // Optimized lookup with performance monitoring
    const foundCustomer = findCustomerByMobile(mobile);
    
    const endTime = performance.now();
    const lookupTime = endTime - startTime;
    performanceMonitor.addLoginTime(lookupTime);
    
    console.log(`Customer lookup took ${lookupTime.toFixed(2)}ms`);
    console.log(`Average lookup time: ${performanceMonitor.getAverageLoginTime().toFixed(2)}ms`);
    
    if (foundCustomer) {
      setCustomer(foundCustomer);
      const loginTime = new Date();
      setLastLoginTime(loginTime);
      
      // Cache user session
      localStorage.setItem('primefit_customer', JSON.stringify(foundCustomer));
      localStorage.setItem('primefit_login_time', loginTime.toISOString());
      
      console.log('Login successful for:', foundCustomer.name);
      return true;
    }
    
    console.log('Customer not found for mobile:', mobile);
    return false;
  };

  const logout = () => {
    setCustomer(null);
    setLastLoginTime(null);
    localStorage.removeItem('primefit_customer');
    localStorage.removeItem('primefit_login_time');
    console.log('User logged out successfully');
  };

  const value: AuthContextType = {
    customer,
    isAuthenticated: !!customer,
    isAdmin: isAdminCustomer(customer),
    login,
    logout,
    isLoading,
    customerStats,
    loginAttempts,
    lastLoginTime
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
