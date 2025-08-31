import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Customer, 
  addCustomer, 
  deleteCustomer, 
  updateCustomer, 
  getAllCustomers, 
  filterCustomers
} from '../data/customers';
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Save, 
  X, 
  User, 
  Phone, 
  Calendar,
  UserCheck,
  UserX,
  Filter
} from 'lucide-react';

const CustomerManagement: React.FC = () => {
  const { isAdmin } = useAuth();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  // Filter states
  const [genderFilter, setGenderFilter] = useState<'All' | 'Male' | 'Female' | 'Other'>('All');
  const [membershipFilter, setMembershipFilter] = useState<'All' | 'Basic' | 'Premium' | 'VIP'>('All');
  const [activeFilter, setActiveFilter] = useState<'All' | boolean>('All');

  // Form states for new customer
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    mobile: '',
    membershipType: 'Basic' as 'Basic' | 'Premium' | 'VIP',
    gender: 'Male' as 'Male' | 'Female' | 'Other',
    joinDate: new Date().toISOString().split('T')[0],
    isActive: true
  });

  // Only allow admin access
  if (!isAdmin) {
    return null;
  }

  // Load customers on component mount
  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = () => {
    const allCustomers = getAllCustomers();
    applyFilters();
    console.log(`📊 Loaded ${allCustomers.length} customers`);
  };

  const applyFilters = () => {
    const filtered = filterCustomers({
      searchQuery: searchQuery.trim() || undefined,
      gender: genderFilter !== 'All' ? genderFilter : undefined,
      membershipType: membershipFilter !== 'All' ? membershipFilter : undefined,
      isActive: activeFilter !== 'All' ? activeFilter : undefined
    });
    setCustomers(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Apply filters immediately when search changes
    const filtered = filterCustomers({
      searchQuery: query.trim() || undefined,
      gender: genderFilter !== 'All' ? genderFilter : undefined,
      membershipType: membershipFilter !== 'All' ? membershipFilter : undefined,
      isActive: activeFilter !== 'All' ? activeFilter : undefined
    });
    setCustomers(filtered);
    console.log(`🔍 Found ${filtered.length} customers with current filters`);
  };

  const handleAddCustomer = () => {
    try {
      // Validate required fields
      if (!newCustomer.name.trim() || !newCustomer.mobile.trim()) {
        alert('Please fill in all required fields');
        return;
      }

      // Validate mobile number
      if (newCustomer.mobile.length !== 10 || !/^[6-9]\d{9}$/.test(newCustomer.mobile)) {
        alert('Please enter a valid 10-digit mobile number');
        return;
      }

      // Check if mobile number already exists
      const allCustomers = getAllCustomers();
      const existingCustomer = allCustomers.find(c => c.mobile === newCustomer.mobile);
      if (existingCustomer) {
        alert('A customer with this mobile number already exists');
        return;
      }

      // Add the customer
      const addedCustomer = addCustomer(newCustomer);
      
      // Refresh the customer list
      loadCustomers();
      
      // Reset form
      setNewCustomer({
        name: '',
        mobile: '',
        membershipType: 'Basic',
        gender: 'Male',
        joinDate: new Date().toISOString().split('T')[0],
        isActive: true
      });
      setShowAddForm(false);

      alert(`✅ Successfully added ${addedCustomer.name}!`);
    } catch (error) {
      console.error('Error adding customer:', error);
      alert('Failed to add customer. Please try again.');
    }
  };

  const handleDeleteCustomer = (customerId: string) => {
    try {
      const success = deleteCustomer(customerId);
      
      if (success) {
        loadCustomers();
        setDeleteConfirm(null);
        alert('✅ Customer deleted successfully!');
      } else {
        alert('❌ Failed to delete customer');
      }
    } catch (error) {
      console.error('Error deleting customer:', error);
      alert('Failed to delete customer. Please try again.');
    }
  };

  const handleUpdateCustomer = () => {
    if (!editingCustomer) return;

    try {
      const updated = updateCustomer(editingCustomer.id, {
        name: editingCustomer.name,
        mobile: editingCustomer.mobile,
        gender: editingCustomer.gender,
        membershipType: editingCustomer.membershipType,
        joinDate: editingCustomer.joinDate,
        isActive: editingCustomer.isActive
      });

      if (updated) {
        loadCustomers();
        setEditingCustomer(null);
        alert('✅ Customer updated successfully!');
      } else {
        alert('❌ Failed to update customer');
      }
    } catch (error) {
      console.error('Error updating customer:', error);
      alert('Failed to update customer. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Customer Management</h2>
          <p className="text-gray-600">Manage your gym members with advanced filtering</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Customer
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name, mobile, or ID..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Filters */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="h-4 w-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Filter Customers</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Gender</label>
            <select
              value={genderFilter}
              onChange={(e) => {
                setGenderFilter(e.target.value as 'All' | 'Male' | 'Female' | 'Other');
                setTimeout(() => applyFilters(), 0);
              }}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="All">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Membership</label>
            <select
              value={membershipFilter}
              onChange={(e) => {
                setMembershipFilter(e.target.value as 'All' | 'Basic' | 'Premium' | 'VIP');
                setTimeout(() => applyFilters(), 0);
              }}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="All">All Memberships</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="VIP">VIP</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Status</label>
            <select
              value={activeFilter === 'All' ? 'All' : activeFilter ? 'Active' : 'Inactive'}
              onChange={(e) => {
                const value = e.target.value === 'All' ? 'All' : e.target.value === 'Active';
                setActiveFilter(value);
                setTimeout(() => applyFilters(), 0);
              }}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setGenderFilter('All');
                setMembershipFilter('All');
                setActiveFilter('All');
                setSearchQuery('');
                loadCustomers();
              }}
              className="w-full px-3 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{customers.length}</div>
          <div className="text-sm text-gray-600">Total Customers</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {customers.filter(c => c.isActive).length}
          </div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-red-600">
            {customers.filter(c => !c.isActive).length}
          </div>
          <div className="text-sm text-gray-600">Inactive</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">
            {customers.filter(c => c.membershipType === 'VIP').length}
          </div>
          <div className="text-sm text-gray-600">VIP Members</div>
        </div>
      </div>

      {/* Customer Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Customer</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Mobile</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Gender</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Membership</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Join Date</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <User className="h-8 w-8 text-gray-400 bg-gray-100 rounded-full p-1" />
                    <div>
                      <div className="font-medium text-gray-900">{customer.name}</div>
                      <div className="text-sm text-gray-500">{customer.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-900">{customer.mobile}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    customer.gender === 'Male' ? 'bg-blue-100 text-blue-800' :
                    customer.gender === 'Female' ? 'bg-pink-100 text-pink-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {customer.gender}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    customer.membershipType === 'VIP' ? 'bg-purple-100 text-purple-800' :
                    customer.membershipType === 'Premium' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {customer.membershipType}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-900">{customer.joinDate}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {customer.isActive ? (
                      <>
                        <UserCheck className="h-4 w-4 text-green-500" />
                        <span className="text-green-700 text-sm font-medium">Active</span>
                      </>
                    ) : (
                      <>
                        <UserX className="h-4 w-4 text-red-500" />
                        <span className="text-red-700 text-sm font-medium">Inactive</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setEditingCustomer({...customer})}
                      className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit Customer"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(customer.id)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                      title="Delete Customer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Customer Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Add New Customer</h3>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name *</label>
                <input
                  type="text"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter customer name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  value={newCustomer.mobile}
                  onChange={(e) => setNewCustomer({...newCustomer, mobile: e.target.value.replace(/\D/g, '')})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  value={newCustomer.gender}
                  onChange={(e) => setNewCustomer({...newCustomer, gender: e.target.value as 'Male' | 'Female' | 'Other'})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Membership Type</label>
                <select
                  value={newCustomer.membershipType}
                  onChange={(e) => setNewCustomer({...newCustomer, membershipType: e.target.value as any})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="VIP">VIP</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Join Date</label>
                <input
                  type="date"
                  value={newCustomer.joinDate}
                  onChange={(e) => setNewCustomer({...newCustomer, joinDate: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={newCustomer.isActive}
                  onChange={(e) => setNewCustomer({...newCustomer, isActive: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isActive" className="ml-2 text-sm font-medium text-gray-700">
                  Active Member
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustomer}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Customer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Customer Modal */}
      {editingCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Edit Customer</h3>
              <button
                onClick={() => setEditingCustomer(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name *</label>
                <input
                  type="text"
                  value={editingCustomer.name}
                  onChange={(e) => setEditingCustomer({...editingCustomer, name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  value={editingCustomer.mobile}
                  onChange={(e) => setEditingCustomer({...editingCustomer, mobile: e.target.value.replace(/\D/g, '')})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  maxLength={10}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  value={editingCustomer.gender}
                  onChange={(e) => setEditingCustomer({...editingCustomer, gender: e.target.value as 'Male' | 'Female' | 'Other'})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Membership Type</label>
                <select
                  value={editingCustomer.membershipType}
                  onChange={(e) => setEditingCustomer({...editingCustomer, membershipType: e.target.value as any})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="VIP">VIP</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Join Date</label>
                <input
                  type="date"
                  value={editingCustomer.joinDate}
                  onChange={(e) => setEditingCustomer({...editingCustomer, joinDate: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="editIsActive"
                  checked={editingCustomer.isActive}
                  onChange={(e) => setEditingCustomer({...editingCustomer, isActive: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="editIsActive" className="ml-2 text-sm font-medium text-gray-700">
                  Active Member
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setEditingCustomer(null)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateCustomer}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm mx-4">
            <div className="text-center">
              <Trash2 className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Customer</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this customer? This action cannot be undone.
              </p>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteCustomer(deleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerManagement;
