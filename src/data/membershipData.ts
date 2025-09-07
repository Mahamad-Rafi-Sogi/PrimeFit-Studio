import { MembershipPlan, Notification } from '../types';

export const membershipPlans: MembershipPlan[] = [
  {
    name: 'Basic',
    duration: '1 Month',
    price: 699,
    originalPrice: 999,
    features: [
      'Access to gym equipment',
      'Basic workout guidance',
      'Locker facility',
      'Free Wi-Fi',
      'Water dispenser access'
    ]
  },
  {
    name: 'Premium',
    duration: '3 Months',
    price: 1950,
    originalPrice: 3999,
    popular: true,
    features: [
      'Everything in Basic',
      'Personal trainer consultation',
      'Diet plan consultation',
      'Group fitness classes',
      'Steam room access',
      'Protein shake bar discount'
    ]
  },
  {
    name: 'Elite',
    duration: '6 Months',
    price: 3599,
    originalPrice: 5999,
    features: [
      'Everything in Premium',
      '2 personal training sessions/month',
      'Customized diet plan',
      'Body composition analysis',
      'Supplement guidance',
      'Guest pass (2 per month)',
      'Free parking'
    ]
  },
  {
    name: 'Ultimate',
    duration: '12 Months',
    price: 6599,
    originalPrice: 11999,
    features: [
      'Everything in Elite',
      'Unlimited personal training',
      'Nutrition counseling',
      'Massage therapy (monthly)',
      'Priority equipment access',
      'Unlimited guest passes',
      'Merchandise discounts',
      'Free fitness assessment'
    ]
  }
];

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'New Year Special Offer!',
    message: 'Get 30% off on annual memberships. Limited time offer until January 31st!',
    type: 'offer',
    date: '2025-01-15',
    urgent: true
  },
  {
    id: '2',
    title: 'Morning Batch Starting Soon',
    message: 'New 6 AM morning batch for working professionals starts February 1st. Limited spots available.',
    type: 'batch',
    date: '2025-01-20'
  },
  {
    id: '3',
    title: 'Weekend Yoga Classes',
    message: 'Join our new weekend yoga sessions every Saturday and Sunday at 8 AM. Free for Premium+ members.',
    type: 'event',
    date: '2025-01-18'
  },
  {
    id: '4',
    title: 'Republic Day Holiday',
    message: 'Gym will be closed on January 26th (Republic Day). Regular timings resume from January 27th.',
    type: 'holiday',
    date: '2025-01-24'
  },
  {
    id: '5',
    title: 'Transformation Challenge',
    message: '12-week body transformation challenge starts February 15th. Prize money of ₹50,000 for winners!',
    type: 'event',
    date: '2025-01-22',
    urgent: true
  },
  {
    id: '6',
    title: 'Equipment Maintenance',
    message: 'Cardio section will be under maintenance on January 30th from 2-4 PM. Plan your workouts accordingly.',
    type: 'event',
    date: '2025-01-28'
  }
];