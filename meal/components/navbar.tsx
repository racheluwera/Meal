import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/meals", label: "Meals" },
  { href: "/meal-plan", label: "Meal Plan" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-green-200 bg-white dark:bg-green-950 dark:border-green-900">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-green-700 dark:text-green-400 text-lg tracking-tight">
           MealApp
        </Link>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-green-700 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
  
}
