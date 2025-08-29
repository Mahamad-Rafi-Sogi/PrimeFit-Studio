export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  muscleGroup: string;
}

export interface DayPlan {
  day: string;
  focus: string;
  exercises: Exercise[];
}

export interface WorkoutPlan {
  level: string;
  description: string;
  weeklyPlan: DayPlan[];
}

export interface Meal {
  name: string;
  calories: number;
  protein: string;
  description: string;
}

export interface DietPlan {
  type: 'veg' | 'non-veg';
  goal: 'weight-loss' | 'muscle-gain';
  meals: {
    breakfast: Meal[];
    lunch: Meal[];
    dinner: Meal[];
    snacks: Meal[];
  };
}

export interface MembershipPlan {
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'event' | 'offer' | 'holiday' | 'batch';
  date: string;
  urgent?: boolean;
}