// Customer database with persistent storage
export interface Customer {
  id: string;
  name: string;
  mobile: string;
  password: string; // Added password field for authentication
  membershipType: 'Basic' | 'Premium' | 'VIP';
  gender: 'Male' | 'Female' | 'Other';
  joinDate: string;
  isActive: boolean;
  isAdmin?: boolean; // Admin flag for special privileges
}

// Local Storage configuration
const CUSTOMERS_STORAGE_KEY = 'gym_customers_data';
const STORAGE_VERSION_KEY = 'gym_customers_version';
const CURRENT_VERSION = '1.1'; // Bumped version to force reset

// Default customer data - reduced to essential customers only
const defaultCustomers: Customer[] = [
  {
    id: 'ADMIN001',
    name: 'Admin',
    mobile: '7975832709',
    password: 'admin123',
    membershipType: 'VIP',
    gender: 'Male',
    joinDate: '2024-01-01',
    isActive: true,
    isAdmin: true
  },
  {
    id: 'PFS001',
    name: 'Ravi Kumar',
    mobile: '9876543210',
    password: 'ravi123',
    membershipType: 'Premium',
    gender: 'Male',
    joinDate: '2024-01-15',
    isActive: true
  },
  {
    id: 'PFS002',
    name: 'Priya Sharma',
    mobile: '8765432109',
    password: 'priya123',
    membershipType: 'Basic',
    gender: 'Female',
    joinDate: '2024-02-20',
    isActive: true
  },
  {
    id: 'PFS003',
    name: 'Arjun Reddy',
    mobile: '7654321098',
    password: 'arjun123',
    membershipType: 'VIP',
    gender: 'Male',
    joinDate: '2024-03-10',
    isActive: true
  },
  {
    id: 'PFS004',
    name: 'Sneha Patel',
    mobile: '6543210987',
    password: 'sneha123',
    membershipType: 'Premium',
    gender: 'Female',
    joinDate: '2024-01-25',
    isActive: false
  }
];

// Runtime customer data - loaded from storage or defaults
let customers: Customer[] = [];

// Initialize storage and load data
const initializeStorage = (): void => {
  try {
    // Check if localStorage is available
    if (typeof localStorage === 'undefined') {
      console.warn('localStorage not available, using in-memory storage');
      customers = [...defaultCustomers];
      return;
    }

    const storedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
    const storedData = localStorage.getItem(CUSTOMERS_STORAGE_KEY);
    
    // If no data or version mismatch, use default data
    if (!storedData || storedVersion !== CURRENT_VERSION) {
      customers = [...defaultCustomers];
      saveToStorage();
      localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);
      return;
    }
    
    // Parse and load existing data
    const parsed = JSON.parse(storedData);
    if (Array.isArray(parsed)) {
      customers = parsed;
      
      // CRITICAL: Ensure admin user always exists
      const adminExists = customers.find(c => c.mobile === '7975832709' && c.isAdmin);
      if (!adminExists) {
        console.warn('⚠️ Admin user missing! Adding admin user...');
        const adminUser = {
          id: 'ADMIN001',
          name: 'Admin',
          mobile: '7975832709',
          password: 'admin123',
          membershipType: 'VIP' as const,
          gender: 'Male' as const,
          joinDate: '2024-01-01',
          isActive: true,
          isAdmin: true
        };
        customers.unshift(adminUser); // Add at beginning
        saveToStorage();
      }
    } else {
      throw new Error('Invalid data format - not an array');
    }
  } catch (error) {
    console.error('❌ Error loading customer data:', error);
    customers = [...defaultCustomers];
    try {
      saveToStorage();
    } catch (saveError) {
      console.error('❌ Error saving default data:', saveError);
    }
  }
};

// Save customers to localStorage
const saveToStorage = (): void => {
  try {
    if (typeof localStorage === 'undefined') {
      console.warn('localStorage not available, cannot save data');
      return;
    }
    
    localStorage.setItem(CUSTOMERS_STORAGE_KEY, JSON.stringify(customers));
  } catch (error) {
    console.error('❌ Error saving customers to storage:', error);
    // Don't show alert during initialization to avoid blocking the app
    if (error instanceof Error && error.message.includes('QuotaExceededError')) {
      console.error('💽 Storage quota exceeded');
    }
  }
};

// Initialize on module load
if (typeof window !== 'undefined') {
  try {
    initializeStorage();
  } catch (error) {
    console.error('❌ Critical error during customer data initialization:', error);
    // Set fallback data to prevent complete failure
    customers = [
      {
        id: 'ADMIN001',
        name: 'Admin',
        mobile: '7975832709',
        password: 'admin123',
        membershipType: 'VIP',
        gender: 'Male',
        joinDate: '2024-01-01',
        isActive: true,
        isAdmin: true
      }
    ];
  }
} else {
  console.log('🖥️ Running in non-browser environment (SSR)');
}

// Customer management functions with persistence

// Optimized helper function to find customer by mobile number
export const findCustomerByMobile = (mobile: string): Customer | undefined => {
  return customers.find(customer => customer.mobile === mobile);
};

// Helper function to find active customer by mobile (for old compatibility)
export const findActiveCustomerByMobile = (mobile: string): Customer | undefined => {
  return customers.find(customer => customer.mobile === mobile && customer.isActive);
};

// Helper function to validate mobile number format
export const isValidMobile = (mobile: string): boolean => {
  const mobileRegex = /^[6-9]\d{9}$/; // Indian mobile number format
  return mobileRegex.test(mobile);
};

// Helper function to check if customer is admin
export const isAdminCustomer = (customer: Customer | null): boolean => {
  return customer?.isAdmin === true;
};

// Helper function to get customer statistics
export const getCustomerStats = () => {
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.isActive).length;
  const membershipStats = customers.reduce((acc, customer) => {
    acc[customer.membershipType] = (acc[customer.membershipType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    total: totalCustomers,
    active: activeCustomers,
    inactive: totalCustomers - activeCustomers,
    byMembership: membershipStats
  };
};

// Generate next customer ID
const generateNextId = (): string => {
  const existingIds = customers.map(c => parseInt(c.id.replace('PFS', '')) || 0);
  const maxId = Math.max(...existingIds, 0);
  return `PFS${String(maxId + 1).padStart(3, '0')}`;
};

// Add a new customer with persistence
export const addCustomer = (customerData: Omit<Customer, 'id'>): Customer => {
  const newCustomer: Customer = {
    id: generateNextId(),
    ...customerData
  };

  customers.push(newCustomer);
  saveToStorage();
  console.log(`Added customer: ${newCustomer.name} (${newCustomer.id})`);
  return newCustomer;
};

// Delete a customer with persistence
export const deleteCustomer = (customerId: string): boolean => {
  const customerIndex = customers.findIndex(c => c.id === customerId);
  
  if (customerIndex === -1) {
    console.error(`Customer not found: ${customerId}`);
    return false;
  }

  // Don't allow deletion of admin user
  const customer = customers[customerIndex];
  if (customer.isAdmin) {
    console.error('Cannot delete admin user');
    return false;
  }

  customers.splice(customerIndex, 1);
  saveToStorage();
  console.log(`Deleted customer: ${customer.name} (${customerId})`);
  return true;
};

// Update a customer with persistence
export const updateCustomer = (customerId: string, updates: Partial<Omit<Customer, 'id'>>): Customer | null => {
  const customerIndex = customers.findIndex(c => c.id === customerId);
  
  if (customerIndex === -1) {
    console.error(`Customer not found: ${customerId}`);
    return null;
  }

  const oldCustomer = customers[customerIndex];
  
  // Don't allow removing admin privileges from admin user
  if (oldCustomer.isAdmin && updates.isAdmin === false) {
    console.error('Cannot remove admin privileges from admin user');
    return null;
  }

  const updatedCustomer = { ...oldCustomer, ...updates };
  customers[customerIndex] = updatedCustomer;
  saveToStorage();
  console.log(`Updated customer: ${updatedCustomer.name} (${customerId})`);
  return updatedCustomer;
};

// Search and filter customers
export const filterCustomers = (filters: {
  searchQuery?: string;
  gender?: 'All' | 'Male' | 'Female' | 'Other';
  membershipType?: 'All' | 'Basic' | 'Premium' | 'VIP';
  isActive?: 'All' | boolean;
}) => {
  let filtered = [...customers];

  // Search by name or mobile
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(customer =>
      customer.name.toLowerCase().includes(query) ||
      customer.mobile.includes(query)
    );
  }

  // Filter by gender
  if (filters.gender && filters.gender !== 'All') {
    filtered = filtered.filter(customer => customer.gender === filters.gender);
  }

  // Filter by membership type
  if (filters.membershipType && filters.membershipType !== 'All') {
    filtered = filtered.filter(customer => customer.membershipType === filters.membershipType);
  }

  // Filter by active status
  if (filters.isActive !== undefined && filters.isActive !== 'All') {
    filtered = filtered.filter(customer => customer.isActive === filters.isActive);
  }

  return filtered;
};

// Get all customers (copy to prevent mutation)
export const getAllCustomers = (): Customer[] => {
  return [...customers];
};

// Data export/import functions for admin backup/restore

// Export customer data as JSON
export const exportCustomerData = (): string => {
  const exportData = {
    version: CURRENT_VERSION,
    timestamp: new Date().toISOString(),
    customers: customers,
    stats: getCustomerStats()
  };
  return JSON.stringify(exportData, null, 2);
};

// Import customer data from JSON
export const importCustomerData = (jsonData: string): { success: boolean; message: string; imported?: number } => {
  try {
    const importData = JSON.parse(jsonData);
    
    // Validate import data structure
    if (!importData.customers || !Array.isArray(importData.customers)) {
      return { success: false, message: 'Invalid data format: missing customers array' };
    }

    // Validate customer data structure
    const validCustomers = importData.customers.filter((customer: any) => {
      return customer.id && customer.name && customer.mobile && 
             customer.membershipType && customer.gender && customer.joinDate;
    });

    if (validCustomers.length !== importData.customers.length) {
      return { 
        success: false, 
        message: `Invalid customer data found. Expected ${importData.customers.length}, got ${validCustomers.length} valid customers.` 
      };
    }

    // Replace current data
    customers = validCustomers;
    saveToStorage();
    
    return { 
      success: true, 
      message: `Successfully imported ${validCustomers.length} customers`, 
      imported: validCustomers.length 
    };
  } catch (error) {
    return { 
      success: false, 
      message: `Import failed: ${error instanceof Error ? error.message : 'Unknown error'}` 
    };
  }
};

// Reset to default customer data
export const resetToDefaultData = (): void => {
  customers = [...defaultCustomers];
  saveToStorage();
  console.log('Reset customer data to defaults');
};

// Clear all customer data (admin only, keep admin user)
export const clearAllCustomerData = (): void => {
  customers = customers.filter(c => c.isAdmin);
  saveToStorage();
  console.log('Cleared all non-admin customer data');
};

// Debug function to check and fix customer data
export const debugCustomerData = () => {
  console.log('🔍 Debug: Current customers:', customers);
  
  // Check for customers without passwords
  const customersWithoutPassword = customers.filter(c => !c.password);
  if (customersWithoutPassword.length > 0) {
    console.warn('⚠️ Found customers without passwords:', customersWithoutPassword);
    
    // Fix customers without passwords
    customersWithoutPassword.forEach(customer => {
      if (customer.mobile === '7975832709') {
        customer.password = 'admin123';
      } else if (customer.mobile === '9876543210') {
        customer.password = 'ravi123';
      } else if (customer.mobile === '8765432109') {
        customer.password = 'priya123';
      } else if (customer.mobile === '7654321098') {
        customer.password = 'arjun123';
      } else if (customer.mobile === '6543210987') {
        customer.password = 'sneha123';
      } else {
        customer.password = 'default123';
      }
    });
    
    saveToStorage();
    console.log('✅ Fixed customers without passwords');
  }
  
  return customers;
};
