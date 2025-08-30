import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const PerformanceDashboard: React.FC = () => {
  const { customerStats, loginAttempts, lastLoginTime, isAdmin } = useAuth();

  // Only show performance dashboard to admin users
  if (!isAdmin) {
    return null;
  }

  if (!customerStats) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">🔧 Admin Dashboard - Loading...</h3>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">🔧 Admin Performance Dashboard</h3>
        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
          Admin Only
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <div className="text-2xl font-bold text-white">{customerStats.total}</div>
          <div className="text-sm text-white/80">Total Customers</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <div className="text-2xl font-bold text-white">{customerStats.active}</div>
          <div className="text-sm text-white/80">Active Members</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <div className="text-2xl font-bold text-white">{loginAttempts}</div>
          <div className="text-sm text-white/80">Login Attempts</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <div className="text-2xl font-bold text-white">
            {customerStats.inactive}
          </div>
          <div className="text-sm text-white/80">Inactive</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <h4 className="font-semibold text-white mb-2">Membership Breakdown</h4>
          {Object.entries(customerStats.membershipBreakdown).map(([type, count]) => (
            <div key={type} className="flex justify-between items-center py-1">
              <span className="text-white/80">{type}</span>
              <span className="font-semibold text-white">{count}</span>
            </div>
          ))}
        </div>

        {lastLoginTime && (
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Last Admin Login</h4>
            <div className="text-sm text-white/80">
              {lastLoginTime.toLocaleString()}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-xs text-white/60">
        ✅ Optimized for 500+ customers | 🔒 Admin-only view | ⚡ O(1) lookup performance
      </div>
    </div>
  );
};

export default PerformanceDashboard;
