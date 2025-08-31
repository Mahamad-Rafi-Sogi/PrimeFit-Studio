import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import PerformanceDashboard from '../components/PerformanceDashboard';
import CustomerManagement from '../components/CustomerManagement';

const AdminDashboard: React.FC = () => {
  const { isAdmin } = useAuth();

  // Redirect non-admin users
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your gym customers and monitor system performance</p>
        </div>

        {/* Performance Dashboard */}
        <div className="mb-8">
          <PerformanceDashboard />
        </div>

        {/* Customer Management */}
        <CustomerManagement />
      </div>
    </div>
  );
};

export default AdminDashboard;
