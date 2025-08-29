import { WorkoutPlan } from '../types';

export const workoutPlans: WorkoutPlan[] = [
  {
    level: 'Beginner',
    description: 'Perfect for newcomers to fitness. Focus on form, basic movements, and building consistency.',
    weeklyPlan: [
      {
        day: 'Monday',
        focus: 'Upper Body Foundation',
        exercises: [
          { name: 'Push-ups (Modified)', sets: 3, reps: '8-12', rest: '60s', muscleGroup: 'Chest' },
          { name: 'Assisted Pull-ups', sets: 3, reps: '5-8', rest: '90s', muscleGroup: 'Back' },
          { name: 'Dumbbell Shoulder Press', sets: 3, reps: '10-15', rest: '60s', muscleGroup: 'Shoulders' },
          { name: 'Bicep Curls', sets: 3, reps: '12-15', rest: '45s', muscleGroup: 'Arms' },
          { name: 'Tricep Dips (Assisted)', sets: 3, reps: '8-12', rest: '45s', muscleGroup: 'Arms' }
        ]
      },
      {
        day: 'Tuesday',
        focus: 'Cardio & Core',
        exercises: [
          { name: 'Treadmill Walk', sets: 1, reps: '20-30 min', rest: '-', muscleGroup: 'Cardio' },
          { name: 'Plank Hold', sets: 3, reps: '20-30s', rest: '60s', muscleGroup: 'Core' },
          { name: 'Crunches', sets: 3, reps: '15-20', rest: '45s', muscleGroup: 'Core' },
          { name: 'Mountain Climbers', sets: 3, reps: '10 each leg', rest: '60s', muscleGroup: 'Core' }
        ]
      },
      {
        day: 'Wednesday',
        focus: 'Lower Body Foundation',
        exercises: [
          { name: 'Bodyweight Squats', sets: 3, reps: '12-15', rest: '60s', muscleGroup: 'Legs' },
          { name: 'Lunges (Static)', sets: 3, reps: '10 each leg', rest: '60s', muscleGroup: 'Legs' },
          { name: 'Glute Bridges', sets: 3, reps: '15-20', rest: '45s', muscleGroup: 'Glutes' },
          { name: 'Calf Raises', sets: 3, reps: '15-20', rest: '30s', muscleGroup: 'Calves' }
        ]
      },
      {
        day: 'Thursday',
        focus: 'Active Recovery',
        exercises: [
          { name: 'Light Walking', sets: 1, reps: '20-30 min', rest: '-', muscleGroup: 'Cardio' },
          { name: 'Stretching Routine', sets: 1, reps: '15-20 min', rest: '-', muscleGroup: 'Flexibility' },
          { name: 'Foam Rolling', sets: 1, reps: '10-15 min', rest: '-', muscleGroup: 'Recovery' }
        ]
      },
      {
        day: 'Friday',
        focus: 'Full Body Circuit',
        exercises: [
          { name: 'Modified Burpees', sets: 3, reps: '5-8', rest: '90s', muscleGroup: 'Full Body' },
          { name: 'Wall Sit', sets: 3, reps: '20-30s', rest: '60s', muscleGroup: 'Legs' },
          { name: 'Knee Push-ups', sets: 3, reps: '8-12', rest: '60s', muscleGroup: 'Upper Body' },
          { name: 'Dead Bug', sets: 3, reps: '10 each side', rest: '45s', muscleGroup: 'Core' }
        ]
      },
      {
        day: 'Saturday',
        focus: 'Flexibility & Mobility',
        exercises: [
          { name: 'Yoga Flow', sets: 1, reps: '30-45 min', rest: '-', muscleGroup: 'Flexibility' },
          { name: 'Hip Flexor Stretch', sets: 3, reps: '30s each leg', rest: '30s', muscleGroup: 'Flexibility' },
          { name: 'Shoulder Circles', sets: 3, reps: '10 each direction', rest: '30s', muscleGroup: 'Mobility' }
        ]
      },
      {
        day: 'Sunday',
        focus: 'Rest Day',
        exercises: [
          { name: 'Complete Rest', sets: 1, reps: 'All day', rest: '-', muscleGroup: 'Recovery' },
          { name: 'Light Stretching (Optional)', sets: 1, reps: '10-15 min', rest: '-', muscleGroup: 'Flexibility' }
        ]
      }
    ]
  },
  {
    level: 'Intermediate',
    description: 'For those with 6+ months of consistent training. Increased intensity and complexity.',
    weeklyPlan: [
      {
        day: 'Monday',
        focus: 'Push Day (Chest, Shoulders, Triceps)',
        exercises: [
          { name: 'Barbell Bench Press', sets: 4, reps: '8-12', rest: '90s', muscleGroup: 'Chest' },
          { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', rest: '75s', muscleGroup: 'Chest' },
          { name: 'Overhead Press', sets: 4, reps: '8-10', rest: '90s', muscleGroup: 'Shoulders' },
          { name: 'Lateral Raises', sets: 3, reps: '12-15', rest: '60s', muscleGroup: 'Shoulders' },
          { name: 'Tricep Dips', sets: 3, reps: '10-15', rest: '60s', muscleGroup: 'Triceps' },
          { name: 'Close-Grip Push-ups', sets: 3, reps: '12-15', rest: '45s', muscleGroup: 'Triceps' }
        ]
      },
      {
        day: 'Tuesday',
        focus: 'Pull Day (Back, Biceps)',
        exercises: [
          { name: 'Pull-ups/Lat Pulldown', sets: 4, reps: '8-12', rest: '90s', muscleGroup: 'Back' },
          { name: 'Barbell Rows', sets: 4, reps: '8-10', rest: '90s', muscleGroup: 'Back' },
          { name: 'T-Bar Rows', sets: 3, reps: '10-12', rest: '75s', muscleGroup: 'Back' },
          { name: 'Face Pulls', sets: 3, reps: '15-20', rest: '60s', muscleGroup: 'Rear Delts' },
          { name: 'Barbell Curls', sets: 4, reps: '10-12', rest: '60s', muscleGroup: 'Biceps' },
          { name: 'Hammer Curls', sets: 3, reps: '12-15', rest: '45s', muscleGroup: 'Biceps' }
        ]
      },
      {
        day: 'Wednesday',
        focus: 'Legs & Glutes',
        exercises: [
          { name: 'Squats', sets: 4, reps: '10-15', rest: '2 min', muscleGroup: 'Quadriceps' },
          { name: 'Romanian Deadlifts', sets: 4, reps: '8-12', rest: '90s', muscleGroup: 'Hamstrings' },
          { name: 'Bulgarian Split Squats', sets: 3, reps: '10-12 each leg', rest: '75s', muscleGroup: 'Legs' },
          { name: 'Hip Thrusts', sets: 3, reps: '15-20', rest: '60s', muscleGroup: 'Glutes' },
          { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '45s', muscleGroup: 'Calves' }
        ]
      },
      {
        day: 'Thursday',
        focus: 'HIIT Cardio & Core',
        exercises: [
          { name: 'Burpees', sets: 4, reps: '30s on, 30s off', rest: '60s', muscleGroup: 'Full Body' },
          { name: 'Mountain Climbers', sets: 4, reps: '30s on, 30s off', rest: '60s', muscleGroup: 'Core' },
          { name: 'Jump Squats', sets: 4, reps: '30s on, 30s off', rest: '60s', muscleGroup: 'Legs' },
          { name: 'Plank to Push-up', sets: 3, reps: '10-12', rest: '60s', muscleGroup: 'Core' },
          { name: 'Russian Twists', sets: 3, reps: '20-30', rest: '45s', muscleGroup: 'Core' }
        ]
      },
      {
        day: 'Friday',
        focus: 'Upper Body Power',
        exercises: [
          { name: 'Dumbbell Bench Press', sets: 4, reps: '8-10', rest: '90s', muscleGroup: 'Chest' },
          { name: 'Seated Cable Rows', sets: 4, reps: '10-12', rest: '75s', muscleGroup: 'Back' },
          { name: 'Arnold Press', sets: 3, reps: '10-12', rest: '75s', muscleGroup: 'Shoulders' },
          { name: 'Preacher Curls', sets: 3, reps: '10-12', rest: '60s', muscleGroup: 'Biceps' },
          { name: 'Overhead Tricep Extension', sets: 3, reps: '12-15', rest: '60s', muscleGroup: 'Triceps' }
        ]
      },
      {
        day: 'Saturday',
        focus: 'Functional Training',
        exercises: [
          { name: 'Deadlifts', sets: 4, reps: '6-8', rest: '2 min', muscleGroup: 'Full Body' },
          { name: 'Farmer\'s Walk', sets: 3, reps: '30-45s', rest: '90s', muscleGroup: 'Grip/Core' },
          { name: 'Kettlebell Swings', sets: 4, reps: '15-20', rest: '75s', muscleGroup: 'Full Body' },
          { name: 'Battle Ropes', sets: 3, reps: '30s on, 30s off', rest: '60s', muscleGroup: 'Cardio' }
        ]
      },
      {
        day: 'Sunday',
        focus: 'Active Recovery',
        exercises: [
          { name: 'Light Yoga', sets: 1, reps: '30-45 min', rest: '-', muscleGroup: 'Flexibility' },
          { name: 'Foam Rolling', sets: 1, reps: '15-20 min', rest: '-', muscleGroup: 'Recovery' },
          { name: 'Meditation', sets: 1, reps: '10-15 min', rest: '-', muscleGroup: 'Mental' }
        ]
      }
    ]
  },
  {
    level: 'Advanced',
    description: 'For experienced lifters (12+ months). High intensity, complex movements, and periodization.',
    weeklyPlan: [
      {
        day: 'Monday',
        focus: 'Heavy Push Day',
        exercises: [
          { name: 'Barbell Bench Press', sets: 5, reps: '5-6', rest: '3 min', muscleGroup: 'Chest' },
          { name: 'Incline Barbell Press', sets: 4, reps: '6-8', rest: '2.5 min', muscleGroup: 'Chest' },
          { name: 'Weighted Dips', sets: 4, reps: '8-12', rest: '2 min', muscleGroup: 'Chest/Triceps' },
          { name: 'Overhead Press', sets: 4, reps: '6-8', rest: '2 min', muscleGroup: 'Shoulders' },
          { name: 'Close-Grip Bench Press', sets: 3, reps: '8-10', rest: '90s', muscleGroup: 'Triceps' },
          { name: 'Lateral Raises (Drop Set)', sets: 3, reps: '12-8-failure', rest: '75s', muscleGroup: 'Shoulders' }
        ]
      },
      {
        day: 'Tuesday',
        focus: 'Heavy Pull Day',
        exercises: [
          { name: 'Deadlifts', sets: 5, reps: '5-6', rest: '3 min', muscleGroup: 'Back' },
          { name: 'Weighted Pull-ups', sets: 4, reps: '6-10', rest: '2.5 min', muscleGroup: 'Back' },
          { name: 'T-Bar Rows', sets: 4, reps: '8-10', rest: '2 min', muscleGroup: 'Back' },
          { name: 'Cable Rows (Wide Grip)', sets: 3, reps: '10-12', rest: '90s', muscleGroup: 'Back' },
          { name: 'Barbell Curls', sets: 4, reps: '8-10', rest: '75s', muscleGroup: 'Biceps' },
          { name: 'Cable Hammer Curls', sets: 3, reps: '12-15', rest: '60s', muscleGroup: 'Biceps' }
        ]
      },
      {
        day: 'Wednesday',
        focus: 'Heavy Legs',
        exercises: [
          { name: 'Back Squats', sets: 5, reps: '5-8', rest: '3 min', muscleGroup: 'Quadriceps' },
          { name: 'Romanian Deadlifts', sets: 4, reps: '8-10', rest: '2.5 min', muscleGroup: 'Hamstrings' },
          { name: 'Bulgarian Split Squats', sets: 4, reps: '10-12 each leg', rest: '2 min', muscleGroup: 'Legs' },
          { name: 'Hip Thrusts (Weighted)', sets: 4, reps: '12-15', rest: '90s', muscleGroup: 'Glutes' },
          { name: 'Walking Lunges', sets: 3, reps: '12-15 each leg', rest: '75s', muscleGroup: 'Legs' },
          { name: 'Calf Raises (Weighted)', sets: 4, reps: '15-20', rest: '60s', muscleGroup: 'Calves' }
        ]
      },
      {
        day: 'Thursday',
        focus: 'Power & Conditioning',
        exercises: [
          { name: 'Box Jumps', sets: 5, reps: '5-8', rest: '2 min', muscleGroup: 'Power' },
          { name: 'Medicine Ball Slams', sets: 4, reps: '10-12', rest: '90s', muscleGroup: 'Power' },
          { name: 'Kettlebell Swings', sets: 4, reps: '20-25', rest: '75s', muscleGroup: 'Power' },
          { name: 'Battle Ropes', sets: 4, reps: '30s on, 90s off', rest: '90s', muscleGroup: 'Cardio' },
          { name: 'Burpee Box Jumps', sets: 3, reps: '8-10', rest: '2 min', muscleGroup: 'Full Body' }
        ]
      },
      {
        day: 'Friday',
        focus: 'Volume Push',
        exercises: [
          { name: 'Incline Dumbbell Press', sets: 4, reps: '10-12', rest: '2 min', muscleGroup: 'Chest' },
          { name: 'Decline Barbell Press', sets: 3, reps: '10-12', rest: '90s', muscleGroup: 'Chest' },
          { name: 'Dumbbell Flyes', sets: 3, reps: '12-15', rest: '75s', muscleGroup: 'Chest' },
          { name: 'Seated Dumbbell Press', sets: 4, reps: '10-12', rest: '90s', muscleGroup: 'Shoulders' },
          { name: 'Cable Tricep Pushdowns', sets: 4, reps: '12-15', rest: '60s', muscleGroup: 'Triceps' },
          { name: 'Diamond Push-ups', sets: 3, reps: 'To failure', rest: '60s', muscleGroup: 'Triceps' }
        ]
      },
      {
        day: 'Saturday',
        focus: 'Volume Pull',
        exercises: [
          { name: 'Cable Lat Pulldowns', sets: 4, reps: '10-12', rest: '90s', muscleGroup: 'Lats' },
          { name: 'Seated Cable Rows', sets: 4, reps: '10-12', rest: '90s', muscleGroup: 'Mid Back' },
          { name: 'Single-arm Dumbbell Rows', sets: 3, reps: '12-15 each arm', rest: '75s', muscleGroup: 'Back' },
          { name: 'Reverse Flyes', sets: 3, reps: '15-20', rest: '60s', muscleGroup: 'Rear Delts' },
          { name: 'EZ-Bar Curls', sets: 4, reps: '10-12', rest: '75s', muscleGroup: 'Biceps' },
          { name: 'Cable Hammer Curls', sets: 3, reps: '12-15', rest: '60s', muscleGroup: 'Biceps' }
        ]
      },
      {
        day: 'Sunday',
        focus: 'Conditioning',
        exercises: [
          { name: 'HIIT Sprints', sets: 8, reps: '20s on, 40s off', rest: '40s', muscleGroup: 'Cardio' },
          { name: 'Plank Variations', sets: 4, reps: '45-60s', rest: '60s', muscleGroup: 'Core' },
          { name: 'Mobility Flow', sets: 1, reps: '20-30 min', rest: '-', muscleGroup: 'Recovery' }
        ]
      }
    ]
  }
];