import Link from "next/link";
import MealCard from "@/components/mealcard";




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
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-white dark:bg-green-950">
        <span className="text-5xl mb-4"></span>
        <h1 className="text-4xl font-bold text-green-900 dark:text-green-50 max-w-xl leading-tight">
          Eat Smart. Live Better.
        </h1>
        <p className="mt-4 text-lg text-green-600 dark:text-green-400 max-w-md">
          Discover healthy meals, plan your week, and track your calories — all in one place.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link
            href="/meals"
            className="px-6 py-3 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Browse Meals
          </Link>
          <Link
            href="/meal-plan"
            className="px-6 py-3 rounded-full border border-green-300 text-green-700 text-sm font-medium hover:bg-green-50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900 transition-colors"
          >
            View Meal Plan
          </Link>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="bg-green-700 dark:bg-green-900 px-4 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-green-600 dark:divide-green-800">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 px-4">
              <span className="text-3xl font-bold text-white">{value}</span>
              <span className="text-xs text-green-200 uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </div> */}
      {/* </section>

      {/* Features */}
      {/* <section className="bg-green-50 dark:bg-green-950 px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-50 text-center mb-10">
            Everything you need
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white dark:bg-green-900 rounded-2xl border border-green-100 dark:border-green-800 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{icon}</span>
                <h3 className="font-semibold text-green-900 dark:text-green-50">{title}</h3>
                <p className="text-sm text-green-600 dark:text-green-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */} 

      {/* Featured Meals */}
      <section className="bg-white dark:bg-green-950 px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">Featured Meals</h2>
            <Link
              href="/meals"
              className="text-sm text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200 transition-colors"
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
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 bg-green-50 dark:bg-green-900">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">Ready to start?</h2>
        <p className="mt-2 text-green-600 dark:text-green-400 text-sm max-w-sm">
          Check out our curated meal list and build your perfect weekly plan today.
        </p>
        <Link
          href="/meals"
          className="mt-6 px-6 py-3 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
        >
          Get Started
        </Link>
      </section>

    </main>
  );
}
