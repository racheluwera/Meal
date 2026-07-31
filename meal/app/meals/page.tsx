import MealList from "@/components/meallist";

const meals = [
  {
    id: 1,
    name: "Grilled Chicken Bowl",
    description: "Tender grilled chicken with brown rice and steamed broccoli.",
    calories: 520,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: "Whole grain toast topped with smashed avocado and poached eggs.",
    calories: 380,
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=600&q=80",
  },
  {
    id: 3,
    name: "Salmon & Quinoa",
    description: "Baked salmon fillet served with quinoa and roasted vegetables.",
    calories: 610,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
  },
  {
    id: 4,
    name: "Greek Salad",
    description: "Fresh cucumber, tomatoes, olives, and feta with olive oil dressing.",
    calories: 290,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
  },
  {
    id: 5,
    name: "Beef Stir Fry",
    description: "Lean beef strips with mixed vegetables in a savory soy-ginger sauce.",
    calories: 480,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
  },
  {
    id: 6,
    name: "Overnight Oats",
    description: "Rolled oats soaked in almond milk with berries and chia seeds.",
    calories: 340,
    image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=600&q=80",
  },
];

export default function MealsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">All Meals</h1>
      <MealList meals={meals} />
    </main>
  );
}
