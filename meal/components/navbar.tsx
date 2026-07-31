import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/meals", label: "Meals" },
  { href: "/meal-plan", label: "Meal Plan" },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-700">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-zinc-900 dark:text-zinc-50 text-lg">
          MealApp
        </Link>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
