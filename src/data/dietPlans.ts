import { DietPlan } from '../types';

export const dietPlans: DietPlan[] = [
  {
    type: 'veg',
    goal: 'weight-loss',
    meals: {
      breakfast: [
        { name: 'Oats with Berries', calories: 250, protein: '8g', description: 'Steel-cut oats with mixed berries and almond milk' },
        { name: 'Green Smoothie', calories: 180, protein: '12g', description: 'Spinach, banana, protein powder, and coconut water' },
        { name: 'Quinoa Breakfast Bowl', calories: 220, protein: '10g', description: 'Quinoa with nuts, seeds, and fresh fruits' }
      ],
      lunch: [
        { name: 'Chickpea Salad', calories: 350, protein: '15g', description: 'Mixed greens, chickpeas, cucumber, tomatoes, olive oil dressing' },
        { name: 'Lentil Soup with Vegetables', calories: 280, protein: '18g', description: 'Red lentils cooked with seasonal vegetables' },
        { name: 'Quinoa Buddha Bowl', calories: 320, protein: '14g', description: 'Quinoa with roasted vegetables and tahini dressing' }
      ],
      dinner: [
        { name: 'Grilled Paneer with Vegetables', calories: 300, protein: '20g', description: 'Grilled paneer cubes with mixed vegetables' },
        { name: 'Black Bean Curry', calories: 260, protein: '16g', description: 'Black beans in tomato-based curry with brown rice' },
        { name: 'Stuffed Bell Peppers', calories: 220, protein: '12g', description: 'Bell peppers stuffed with quinoa and vegetables' }
      ],
      snacks: [
        { name: 'Mixed Nuts', calories: 160, protein: '6g', description: '1 handful of almonds, walnuts, and cashews' },
        { name: 'Greek Yogurt with Berries', calories: 120, protein: '15g', description: 'Plain Greek yogurt with fresh berries' },
        { name: 'Hummus with Vegetables', calories: 100, protein: '4g', description: 'Hummus with carrot and cucumber sticks' }
      ]
    }
  },
  {
    type: 'veg',
    goal: 'muscle-gain',
    meals: {
      breakfast: [
        { name: 'Protein Pancakes', calories: 400, protein: '25g', description: 'Oats, protein powder, banana, and almond butter pancakes' },
        { name: 'Chia Pudding Bowl', calories: 350, protein: '20g', description: 'Chia seeds soaked in protein-enriched plant milk' },
        { name: 'Quinoa Protein Bowl', calories: 420, protein: '22g', description: 'Quinoa with nuts, seeds, protein powder, and fruits' }
      ],
      lunch: [
        { name: 'Lentil Power Bowl', calories: 500, protein: '28g', description: 'Mixed lentils with quinoa, vegetables, and tahini' },
        { name: 'Chickpea Curry with Brown Rice', calories: 480, protein: '24g', description: 'Protein-rich chickpea curry with brown rice' },
        { name: 'Paneer Tikka with Quinoa', calories: 520, protein: '30g', description: 'Grilled paneer with quinoa and vegetables' }
      ],
      dinner: [
        { name: 'Tofu Stir-fry', calories: 450, protein: '26g', description: 'Marinated tofu with vegetables and brown rice' },
        { name: 'Bean and Vegetable Casserole', calories: 420, protein: '22g', description: 'Mixed beans with roasted vegetables' },
        { name: 'Quinoa-stuffed Portobello', calories: 380, protein: '20g', description: 'Portobello mushrooms stuffed with quinoa and cheese' }
      ],
      snacks: [
        { name: 'Protein Smoothie', calories: 280, protein: '25g', description: 'Plant protein powder with banana and almond butter' },
        { name: 'Trail Mix', calories: 320, protein: '12g', description: 'Nuts, seeds, and dried fruits mix' },
        { name: 'Cottage Cheese Bowl', calories: 200, protein: '18g', description: 'Cottage cheese with nuts and honey' }
      ]
    }
  },
  {
    type: 'non-veg',
    goal: 'weight-loss',
    meals: {
      breakfast: [
        { name: 'Egg White Scramble', calories: 180, protein: '20g', description: 'Scrambled egg whites with spinach and tomatoes' },
        { name: 'Greek Yogurt with Berries', calories: 150, protein: '15g', description: 'High-protein Greek yogurt with fresh berries' },
        { name: 'Protein Smoothie', calories: 200, protein: '25g', description: 'Whey protein with spinach, banana, and almond milk' }
      ],
      lunch: [
        { name: 'Grilled Chicken Salad', calories: 320, protein: '35g', description: 'Grilled chicken breast with mixed greens and vinaigrette' },
        { name: 'Fish and Vegetable Bowl', calories: 280, protein: '30g', description: 'Baked white fish with steamed vegetables' },
        { name: 'Turkey Lettuce Wraps', calories: 250, protein: '28g', description: 'Ground turkey with lettuce cups and vegetables' }
      ],
      dinner: [
        { name: 'Baked Salmon with Asparagus', calories: 350, protein: '32g', description: 'Herb-crusted salmon with roasted asparagus' },
        { name: 'Chicken Vegetable Soup', calories: 220, protein: '25g', description: 'Clear chicken broth with vegetables and lean chicken' },
        { name: 'Grilled Prawns with Salad', calories: 280, protein: '30g', description: 'Grilled prawns with mixed green salad' }
      ],
      snacks: [
        { name: 'Hard-boiled Eggs', calories: 140, protein: '12g', description: '2 hard-boiled eggs with sea salt' },
        { name: 'Tuna Salad', calories: 120, protein: '20g', description: 'Tuna in water with cucumber and tomato' },
        { name: 'Protein Shake', calories: 160, protein: '25g', description: 'Whey protein with water or unsweetened almond milk' }
      ]
    }
  },
  {
    type: 'non-veg',
    goal: 'muscle-gain',
    meals: {
      breakfast: [
        { name: 'Muscle Builder Omelet', calories: 450, protein: '35g', description: '4 whole eggs with cheese, spinach, and lean ham' },
        { name: 'Protein Pancakes Deluxe', calories: 500, protein: '40g', description: 'Oats, protein powder, eggs, with Greek yogurt topping' },
        { name: 'Steak and Eggs', calories: 550, protein: '45g', description: 'Lean beef steak with 2 whole eggs and vegetables' }
      ],
      lunch: [
        { name: 'Chicken Power Bowl', calories: 600, protein: '50g', description: 'Grilled chicken with quinoa, sweet potato, and vegetables' },
        { name: 'Salmon Rice Bowl', calories: 580, protein: '45g', description: 'Baked salmon with brown rice and mixed vegetables' },
        { name: 'Turkey and Sweet Potato', calories: 520, protein: '42g', description: 'Roasted turkey breast with baked sweet potato' }
      ],
      dinner: [
        { name: 'Lean Beef with Quinoa', calories: 550, protein: '48g', description: 'Grass-fed beef with quinoa and roasted vegetables' },
        { name: 'Chicken Curry with Rice', calories: 500, protein: '40g', description: 'Chicken curry with brown rice and vegetables' },
        { name: 'Fish and Potato Bake', calories: 480, protein: '38g', description: 'White fish fillet with roasted potatoes and herbs' }
      ],
      snacks: [
        { name: 'Protein Shake Plus', calories: 350, protein: '35g', description: 'Whey protein with banana, peanut butter, and milk' },
        { name: 'Chicken Jerky', calories: 120, protein: '20g', description: 'Homemade lean chicken jerky strips' },
        { name: 'Tuna and Crackers', calories: 200, protein: '25g', description: 'Tuna with whole grain crackers and avocado' }
      ]
    }
  }
];