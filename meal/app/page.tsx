import Link from "next/link";
import MealCard from "@/components/mealcard";

const features = [
  { icon: "🥗", title: "Browse Meals", description: "Explore a variety of healthy meals with calories and ingredients." },
  { icon: "📅", title: "Plan Your Week", description: "Organize your meals for the week and stay on track with your goals." },
  { icon: "🔥", title: "Track Calories", description: "Keep an eye on your daily calorie intake with every meal you add." },
];

const stats = [
  { value: "50+", label: "Healthy Meals" },
  { value: "7", label: "Days Planned" },
  { value: "100%", label: "Nutrition Focused" },
];

const featuredMeals = [
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
];

export default function Home() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-white dark:bg-zinc-900">
        <span className="text-5xl mb-4">🍽️</span>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 max-w-xl leading-tight">
          Eat Smart. Live Better.
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 max-w-md">
          Discover healthy meals, plan your week, and track your calories — all in one place.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link
            href="/meals"
            className="px-6 py-3 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            Browse Meals
          </Link>
          <Link
            href="/meal-plan"
            className="px-6 py-3 rounded-full border border-zinc-300 text-zinc-700 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
          >
            View Meal Plan
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-zinc-900 dark:bg-zinc-800 px-4 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-zinc-700">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 px-4">
              <span className="text-3xl font-bold text-white">{value}</span>
              <span className="text-xs text-zinc-400 uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-zinc-50 dark:bg-zinc-950 px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 text-center mb-10">
            Everything you need
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 flex flex-col gap-3"
              >
                <span className="text-3xl">{icon}</span>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Meals */}
      <section className="bg-white dark:bg-zinc-900 px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Featured Meals</h2>
            <Link
              href="/meals"
              className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredMeals.map((meal) => (
              <MealCard key={meal.id} {...meal} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 bg-zinc-50 dark:bg-zinc-950">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Ready to start?</h2>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm max-w-sm">
          Check out our curated meal list and build your perfect weekly plan today.
        </p>
        <Link
          href="/meals"
          className="mt-6 px-6 py-3 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
        >
          Get Started
        </Link>
      </section>

    </main>
  );
}
