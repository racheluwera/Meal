# MealApp

> **Eat Smart. Live Better.**

MealApp is a modern, full-stack-ready meal planning web application built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. It helps users discover healthy meals, plan their week, and stay on top of their calorie goals — all from a clean, fast, and accessible interface.

---

##  Folder Structure

Understanding how the project is organized is the first step to contributing confidently. Here's a breakdown:

```
meal/
├── app/                        # Next.js App Router — all pages live here
│   ├── layout.tsx              # Root layout: wraps every page with Navbar + Footer
│   ├── page.tsx                # Home page — hero, stats, features, featured meals, CTA
│   ├── globals.css             # Global styles + Tailwind CSS + CSS variables (color theme)
│   ├── meals/
│   │   └── page.tsx            # /meals — full meal listing page
│   └── meal-plan/
│       └── page.tsx            # /meal-plan — weekly meal plan page
│
├── components/                 # Reusable UI components shared across pages
│   ├── navbar.tsx              # Top navigation bar with brand + page links
│   ├── footer.tsx              # Footer with links, socials, and copyright
│   ├── mealcard.tsx            # Individual meal card (image, name, description, calories)
│   └── meallist.tsx            # Renders a responsive grid of MealCards
│
├── public/                     # Static assets (images, icons, SVGs)
├── .next/                      # Next.js build output (auto-generated, do not edit)
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript compiler configuration
└── package.json                # Project dependencies and scripts
```

### Why this structure?

The `app/` directory follows the **Next.js App Router** convention — each folder inside `app/` maps directly to a URL route. For example, `app/meals/page.tsx` is automatically served at `/meals`. No manual routing configuration needed.

The `components/` folder holds all reusable UI pieces. The rule is simple: if something appears on more than one page, it belongs in `components/`. This keeps pages lean and focused on layout and data, while components handle the visual building blocks.


# Clone the repository
git clone https://github.com/your-username/mealapp.git
cd mealapp/meal

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command         | Description                        |
|-----------------|------------------------------------|
| `npm run dev`   | Start the development server       |
| `npm run build` | Build the app for production       |
| `npm run start` | Run the production build           |
| `npm run lint`  | Run ESLint to check code quality   |

---

##  Why TypeScript and Not JavaScript?

This is a question worth answering properly, because the choice matters more than people think.

JavaScript is flexible — maybe too flexible. You can pass anything to a function, return anything from it, and the language won't complain until something breaks at runtime, often in production, in front of a real user.

TypeScript adds a **type system on top of JavaScript**. It's still JavaScript under the hood — it compiles down to plain JS — but during development, it enforces rules about what kind of data your code expects and produces.

Here's a concrete example from this project:

**JavaScript** — no safety:
```js
function MealCard({ name, description, calories, image }) {
  // What if calories is a string? What if image is undefined?
  // You won't know until it crashes.
}
```

**TypeScript** — explicit contract:
```ts
type MealCardProps = {
  name: string;
  description: string;
  calories: number;   // must be a number, always
  image: string;
};

function MealCard({ name, description, calories, image }: MealCardProps) {
  // TypeScript will warn you at compile time if you pass the wrong type
}
```



##  Current Features

- **Home Page** — Hero section, stats bar, feature highlights, featured meal preview, and a call-to-action
- **Meals Page** — Full responsive grid of meal cards with image, name, description, and calorie count
- **Meal Plan Page** — Placeholder page ready for weekly planning functionality
- **Navbar** — Responsive top navigation with brand logo and page links
- **Footer** — Links, social media, tagline, and dynamic copyright year
- **Dark Mode** — Full dark mode support via Tailwind CSS dark variant
- **Green Theme** — Consistent health-focused green color palette across all pages
- **TypeScript** — Fully typed components and props throughout the codebase
- **Responsive Design** — Mobile-first layout that adapts from 1 to 3 columns

---

## 🗺️ Roadmap — Features We Want to Add

These are the features planned for future development, roughly in priority order:

### 🔜 Coming Soon

- [ ] **Meal Detail Page** — Click on a meal card to see full ingredients, prep time, macros (protein, carbs, fat), and step-by-step instructions
- [ ] **Search & Filter** — Filter meals by calorie range, meal type (breakfast, lunch, dinner), or dietary preference (vegan, gluten-free, high-protein)
- [ ] **Weekly Meal Planner** — Drag-and-drop interface to assign meals to each day of the week
- [ ] **Calorie Tracker** — Daily calorie summary that updates as you add meals to your plan
- [ ] **Favorites** — Save meals to a personal favorites list stored in localStorage

### Future Ideas

- [ ] **User Authentication** — Sign up / log in with email or Google (NextAuth.js)
- [ ] **Personal Dashboard** — Track weekly calorie history, most eaten meals, and nutrition trends
- [ ] **Custom Meal Creation** — Add your own meals with a form (name, image URL, calories, ingredients)
- [ ] **Meal Categories** — Organize meals by tags like Breakfast, Lunch, Dinner, Snack, Dessert
- [ ] **Shopping List Generator** — Auto-generate a grocery list from your weekly meal plan
- [ ] **API Integration** — Connect to a real nutrition API (e.g., Edamam, Spoonacular) for live meal data
- [ ] **Notifications / Reminders** — Browser notifications to remind you to log meals
- [ ] **PWA Support** — Make the app installable on mobile as a Progressive Web App
- [ ] **Internationalization (i18n)** — Support multiple languages

---

##  Tech Stack

| Technology       | Purpose                                      |
|------------------|----------------------------------------------|
| Next.js 16       | React framework with App Router and SSR      |
| React 19         | UI component library                         |
| TypeScript 5     | Type-safe JavaScript                         |
| Tailwind CSS 4   | Utility-first CSS styling                    |
| Geist Font       | Clean, modern typography by Vercel           |



