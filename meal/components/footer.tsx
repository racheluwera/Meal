import Link from "next/link";

const links = [
  { label: "Meals", href: "/meals" },
  { label: "Meal Plan", href: "/meal-plan" },
];

const socials = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-green-200 bg-white dark:bg-green-950 dark:border-green-900 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-bold text-green-700 dark:text-green-400 text-base"> MealApp</span>
          <span className="text-xs text-green-500 dark:text-green-600">Eat well. Feel great.</span>
        </div>

        <div className="flex gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-green-600 hover:text-green-800 dark:text-green-500 dark:hover:text-green-300 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          {socials.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-600 hover:text-green-800 dark:text-green-500 dark:hover:text-green-300 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-green-100 dark:border-green-900 py-3 text-center text-xs text-green-500 dark:text-green-600">
        © {new Date().getFullYear()} MealApp. All rights reserved.
      </div>
    </footer>
  );
}
