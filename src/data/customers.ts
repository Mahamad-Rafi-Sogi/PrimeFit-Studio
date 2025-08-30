// Customer database - Add your 300 gym members here
export interface Customer {
  id: string;
  name: string;
  mobile: string;
  membershipType: 'Basic' | 'Premium' | 'VIP';
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
    joinDate: '2024-01-01',
    isActive: true,
    isAdmin: true
  },
  {
    id: 'PFS001',
    name: 'Ravi Kumar',
    mobile: '9876543210',
    membershipType: 'Premium',
    joinDate: '2024-01-15',
    isActive: true
  },
  {
    id: 'PFS002',
    name: 'Priya Sharma',
    mobile: '8765432109',
    membershipType: 'Basic',
    joinDate: '2024-02-20',
    isActive: true
  },
  {
    id: 'PFS003',
    name: 'Arjun Reddy',
    mobile: '7654321098',
    membershipType: 'VIP',
    joinDate: '2024-03-10',
    isActive: true
  },
  {
    id: 'PFS004',
    name: 'Sneha Patel',
    mobile: '6543210987',
    membershipType: 'Premium',
    joinDate: '2024-01-25',
    isActive: true
  },
  {
    id: 'PFS005',
    name: 'Vikram Singh',
    mobile: '5432109876',
    membershipType: 'Basic',
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
  
  const customers: Customer[] = [];
  
  for (let i = 0; i < count; i++) {
    const customerNumber = String(i + 6).padStart(3, '0');
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const membershipType = membershipTypes[Math.floor(Math.random() * membershipTypes.length)];
    
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
