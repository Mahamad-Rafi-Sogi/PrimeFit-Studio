// Customer database - Add your 300 gym members here
export interface Customer {
  id: string;
  name: string;
  mobile: string;
  membershipType: 'Basic' | 'Premium' | 'VIP';
  gender: 'Male' | 'Female' | 'Other';
  joinDate: string;
  isActive: boolean;
  isAdmin?: boolean; // Admin flag for special privileges
}

// Sample customer data - Extended to 500+ customers for scalability testing
export const customers: Customer[] = [
  {
    id: 'ADMIN001',
    name: 'Admin',
    mobile: '7975832709',
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
    membershipType: 'Premium',
    gender: 'Male',
    joinDate: '2024-01-15',
    isActive: true
  },
  {
    id: 'PFS002',
    name: 'Priya Sharma',
    mobile: '8765432109',
    membershipType: 'Basic',
    gender: 'Female',
    joinDate: '2024-02-20',
    isActive: true
  },
  {
    id: 'PFS003',
    name: 'Arjun Reddy',
    mobile: '7654321098',
    membershipType: 'VIP',
    gender: 'Male',
    joinDate: '2024-03-10',
    isActive: true
  },
  {
    id: 'PFS004',
    name: 'Sneha Patel',
    mobile: '6543210987',
    membershipType: 'Premium',
    gender: 'Female',
    joinDate: '2024-01-25',
    isActive: true
  },
  {
    id: 'PFS005',
    name: 'Vikram Singh',
    mobile: '5432109876',
    membershipType: 'Basic',
    gender: 'Male',
    joinDate: '2024-04-05',
    isActive: true
  },
  // Auto-generated customers for scale testing (500 total)
  ...generateCustomers(495)
];

// Function to generate sample customers for testing scalability
function generateCustomers(count: number): Customer[] {
  const firstNames = ['Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan', 'Krishna', 'Ishaan', 
                     'Ananya', 'Aadhya', 'Anika', 'Diya', 'Ira', 'Kavya', 'Kiara', 'Myra', 'Navya', 'Pihu'];
  const lastNames = ['Sharma', 'Verma', 'Gupta', 'Kumar', 'Singh', 'Patel', 'Agarwal', 'Jain', 'Bansal', 'Agrawal',
                    'Chopra', 'Malhotra', 'Kapoor', 'Arora', 'Mittal', 'Goel', 'Saxena', 'Joshi', 'Yadav', 'Reddy'];
  const membershipTypes: ('Basic' | 'Premium' | 'VIP')[] = ['Basic', 'Premium', 'VIP'];
  const genders: ('Male' | 'Female' | 'Other')[] = ['Male', 'Female', 'Other'];
  
  const customers: Customer[] = [];
  
  for (let i = 0; i < count; i++) {
    const customerNumber = String(i + 6).padStart(3, '0');
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const membershipType = membershipTypes[Math.floor(Math.random() * membershipTypes.length)];
    const gender = genders[Math.floor(Math.random() * genders.length)];
    
    // Generate unique mobile numbers starting from 6000000000
    const mobile = `${6000000000 + i}`;
    
    // Random join date in 2024
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    const joinDate = `2024-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    // 95% active customers
    const isActive = Math.random() > 0.05;
    
    customers.push({
      id: `PFS${customerNumber}`,
      name: `${firstName} ${lastName}`,
      mobile,
      membershipType,
      gender,
      joinDate,
      isActive
    });
  }
  
  return customers;
}

// Create an indexed map for O(1) lookups - optimized for 500+ customers
const customerMobileIndex = new Map<string, Customer>();

// Initialize the index
const initializeCustomerIndex = () => {
  customerMobileIndex.clear();
  customers.forEach(customer => {
    if (customer.isActive) {
      customerMobileIndex.set(customer.mobile, customer);
    }
  });
};

// Initialize on module load
initializeCustomerIndex();

// Optimized helper function to find customer by mobile number - O(1) lookup
export const findCustomerByMobile = (mobile: string): Customer | undefined => {
  return customerMobileIndex.get(mobile);
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
    if (customer.isActive) {
      acc[customer.membershipType] = (acc[customer.membershipType] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return {
    total: totalCustomers,
    active: activeCustomers,
    inactive: totalCustomers - activeCustomers,
    membershipBreakdown: membershipStats
  };
};

// Helper function to refresh the index (call this if customers data changes)
export const refreshCustomerIndex = () => {
  initializeCustomerIndex();
};

// **REAL** Customer Management Functions - Actually modify the data
export const addCustomer = (customerData: Omit<Customer, 'id'>): Customer => {
  // Generate new ID
  const existingIds = customers.map(c => parseInt(c.id.replace('PFS', '')) || 0);
  const maxId = Math.max(...existingIds, 0);
  const newId = `PFS${String(maxId + 1).padStart(3, '0')}`;
  
  // Create new customer
  const newCustomer: Customer = {
    id: newId,
    ...customerData
  };
  
  // Add to customers array
  customers.push(newCustomer);
  
  // Update the index
  if (newCustomer.isActive) {
    customerMobileIndex.set(newCustomer.mobile, newCustomer);
  }
  
  console.log(`✅ Added customer: ${newCustomer.name} (${newCustomer.id})`);
  return newCustomer;
};

export const deleteCustomer = (customerId: string): boolean => {
  const customerIndex = customers.findIndex(c => c.id === customerId);
  
  if (customerIndex === -1) {
    console.log(`❌ Customer not found: ${customerId}`);
    return false;
  }
  
  const customer = customers[customerIndex];
  
  // Remove from customers array
  customers.splice(customerIndex, 1);
  
  // Remove from index
  customerMobileIndex.delete(customer.mobile);
  
  console.log(`🗑️ Deleted customer: ${customer.name} (${customer.id})`);
  return true;
};

export const updateCustomer = (customerId: string, updates: Partial<Omit<Customer, 'id'>>): Customer | null => {
  const customerIndex = customers.findIndex(c => c.id === customerId);
  
  if (customerIndex === -1) {
    console.log(`❌ Customer not found: ${customerId}`);
    return null;
  }
  
  const oldCustomer = customers[customerIndex];
  const updatedCustomer = { ...oldCustomer, ...updates };
  
  // Update in customers array
  customers[customerIndex] = updatedCustomer;
  
  // Update index if mobile changed or status changed
  if (oldCustomer.mobile !== updatedCustomer.mobile || oldCustomer.isActive !== updatedCustomer.isActive) {
    // Remove old entry
    customerMobileIndex.delete(oldCustomer.mobile);
    
    // Add new entry if active
    if (updatedCustomer.isActive) {
      customerMobileIndex.set(updatedCustomer.mobile, updatedCustomer);
    }
  }
  
  console.log(`✏️ Updated customer: ${updatedCustomer.name} (${updatedCustomer.id})`);
  return updatedCustomer;
};

export const getAllCustomers = (): Customer[] => {
  return [...customers]; // Return a copy to prevent direct mutation
};

export const searchCustomers = (query: string): Customer[] => {
  const lowerQuery = query.toLowerCase();
  return customers.filter(customer => 
    customer.name.toLowerCase().includes(lowerQuery) ||
    customer.mobile.includes(query) ||
    customer.id.toLowerCase().includes(lowerQuery)
  );
};

// Filter customers by various criteria
export const filterCustomers = (filters: {
  gender?: 'Male' | 'Female' | 'Other' | 'All';
  membershipType?: 'Basic' | 'Premium' | 'VIP' | 'All';
  isActive?: boolean | 'All';
  searchQuery?: string;
}): Customer[] => {
  let filteredCustomers = [...customers];

  // Apply search query filter
  if (filters.searchQuery && filters.searchQuery.trim()) {
    const lowerQuery = filters.searchQuery.toLowerCase();
    filteredCustomers = filteredCustomers.filter(customer => 
      customer.name.toLowerCase().includes(lowerQuery) ||
      customer.mobile.includes(filters.searchQuery!) ||
      customer.id.toLowerCase().includes(lowerQuery)
    );
  }

  // Apply gender filter
  if (filters.gender && filters.gender !== 'All') {
    filteredCustomers = filteredCustomers.filter(customer => customer.gender === filters.gender);
  }

  // Apply membership type filter
  if (filters.membershipType && filters.membershipType !== 'All') {
    filteredCustomers = filteredCustomers.filter(customer => customer.membershipType === filters.membershipType);
  }

  // Apply active status filter
  if (filters.isActive !== undefined && filters.isActive !== 'All') {
    filteredCustomers = filteredCustomers.filter(customer => customer.isActive === filters.isActive);
  }

  return filteredCustomers;
};

// Get customer statistics including gender breakdown
export const getCustomerStatistics = () => {
  const total = customers.length;
  const active = customers.filter(c => c.isActive).length;
  const inactive = total - active;
  
  const membershipBreakdown = customers.reduce((acc, customer) => {
    acc[customer.membershipType] = (acc[customer.membershipType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const genderBreakdown = customers.reduce((acc, customer) => {
    acc[customer.gender] = (acc[customer.gender] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    total,
    active,
    inactive,
    membershipBreakdown,
    genderBreakdown
  };
};
