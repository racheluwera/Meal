# Meal planner


Meal planner is a restaurant kitchen management system built for the people who actually run the kitchen — the **manager** and the **chef**. It tells them exactly what needs to be cooked today, what's running low on stock, what's ready to serve, and what needs urgent attention — all from a single, clean dashboard.

No more shouting across the kitchen. No more missed orders. Just clear, real-time communication between the front desk, the manager, and the cook.

---

##  Folder Structure

```
meal/
├── app/                          # Next.js App Router — all pages live here
│   ├── layout.tsx                # Root layout: wraps every page with Navbar + Footer
│   ├── page.tsx                  # Dashboard — today's summary, stats, live notifications
│   ├── globals.css               # Global styles, Tailwind CSS, and color theme variables
│   ├── meals/
│   │   └── page.tsx              # /meals — Today's Menu with dish status and assignments
│   └── meal-plan/
│       └── page.tsx              # /meal-plan — Full Kitchen Notifications board
│
├── components/                   # Reusable UI components shared across pages
│   ├── navbar.tsx                # Top navigation: KitchenDesk brand + page links
│   ├── footer.tsx                # Footer with links and internal-use notice
│   ├── mealcard.tsx              # Dish card with status badge (Pending/In Progress/Ready)
│   └── meallist.tsx              # Responsive grid of dish cards
│
├── public/                       # Static assets
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript compiler configuration
└── package.json                  # Project dependencies and scripts
```

### How the routing works

The `app/` folder follows the **Next.js App Router** convention. Each subfolder with a `page.tsx` file becomes a live URL automatically:

| File                          | URL             | Purpose                          |
|-------------------------------|-----------------|----------------------------------|
| `app/page.tsx`                | `/`             | Main dashboard                   |
| `app/meals/page.tsx`          | `/meals`        | Today's menu with dish statuses  |
| `app/meal-plan/page.tsx`      | `/meal-plan`    | Kitchen notifications board      |

No manual routing setup needed — Next.js handles it all.

---


### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/your-username/kitchendesk.git
cd kitchendesk/meal

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command         | Description                      |
|-----------------|----------------------------------|
| `npm run dev`   | Start the development server     |
| `npm run build` | Build the app for production     |
| `npm run start` | Run the production build         |
| `npm run lint`  | Run ESLint to check code quality |

---

## Why TypeScript and Not JavaScript?

This is worth explaining properly because the choice has a real impact on a project like this.

JavaScript is flexible — sometimes too flexible. You can pass anything to a function, forget a required field, or return the wrong type, and the language won't say a word until something breaks in production, in the middle of a busy lunch service.

TypeScript adds a **type system on top of JavaScript**. It still compiles down to plain JS, but during development it enforces rules about what kind of data your code expects and produces. Think of it as a second pair of eyes that never gets tired.

Here's a real example from this project:

**JavaScript** — no safety:
```js
function MealCard({ name, description, calories, status, assignedTo }) {
  // What if status is "Cooked" instead of "Ready"?
  // What if assignedTo is missing? You won't know until it breaks.
}
```

**TypeScript** — explicit contract:
```ts
type Status = "Pending" | "In Progress" | "Ready";
type Role = "Chef" | "Manager";

type MealCardProps = {
  name: string;
  description: string;
  calories: number;
  status: Status;       // can ONLY be one of these three values
  assignedTo: Role;     // can ONLY be "Chef" or "Manager"
};
```

If someone accidentally passes `status: "Cooked"` or forgets `assignedTo`, TypeScript catches it before the code even runs. In a kitchen management system where the right person needs the right information at the right time, that kind of reliability matters.



##  Current Features

- **Dashboard** — Morning greeting, today's date, live stats (orders, cooking, ready, pending), today's menu summary, and live notification preview
- **Today's Menu** — Full dish list with status badges ( Pending / In Progress /  Ready), assigned role (Chef / Manager), and a status summary bar
- **Kitchen Notifications** — Separate notification boards for Chef and Manager with categories: Cook Now , Stock Alert , Ready , Info — urgent alerts highlighted in red/yellow
- **Navbar** — KitchenDesk brand with links to Dashboard, Today's Menu, and Notifications
- **Footer** — Internal-use notice, quick links, and dynamic copyright year
- **Dark Mode** — Full dark mode support across all pages and components
- **Orange Theme** — Warm, kitchen-appropriate color palette throughout
- **TypeScript** — Fully typed components, props, and data throughout the codebase
- **Responsive Design** — Works on tablets and desktops used in restaurant environments

---

##  Roadmap — Features to Add

### Coming Soon

- [ ] **Mark Dish as Ready** — Chef clicks a button on a dish card to update its status to "Ready" in real time
- [ ] **Dismiss Notifications** — Mark notifications as read/resolved so the board stays clean
- [ ] **Order Count per Dish** — Show how many orders are waiting for each dish on the menu
- [ ] **Urgent Alert Banner** — A top-of-page banner that flashes when a critical notification comes in (e.g., stock running out)
- [ ] **Print Today's Menu** — One-click print view of the day's dishes for the kitchen board

###  Future Ideas

- [ ] **Real-Time Updates** — Use WebSockets or Server-Sent Events so notifications update live without refreshing the page
- [ ] **Role-Based Login** — Separate login for Manager and Chef so each only sees what's relevant to them
- [ ] **Order Management** — Accept incoming orders from the front desk and automatically push cook notifications to the kitchen
- [ ] **Stock / Inventory Tracker** — Track ingredient quantities and auto-alert the manager when something is running low
- [ ] **Shift Scheduling** — Assign staff to shifts and notify them of their duties for the day
- [ ] **Daily Report** — End-of-day summary: total dishes cooked, orders served, stock used, and alerts triggered
- [ ] **Mobile App (PWA)** — Install KitchenDesk on a tablet or phone as a Progressive Web App for use in the kitchen
- [ ] **Multi-Restaurant Support** — Support multiple branches under one account, each with their own kitchen dashboard
- [ ] **SMS / Email Notifications** — Send urgent alerts to the manager's phone via SMS when stock is critically low

---

##  Tech Stack

| Technology       | Purpose                                          |
|------------------|--------------------------------------------------|
| Next.js 16       | React framework with App Router and file-based routing |
| React 19         | UI component library                             |
| TypeScript 5     | Type-safe JavaScript for reliable, maintainable code |
| Tailwind CSS 4   | Utility-first CSS for fast, consistent styling   |

---

##  Who Is This For?

Meal planner is built for **restaurant internal use**. The two primary users are:

- **The Manager** — Needs to know what's on the menu today, what stock is running low, and what needs to be confirmed or actioned before service starts.
- **The Chef / Cook** — Needs to know what to cook right now, what's been ordered, and when to notify the serving staff that a dish is ready.

The goal is to replace verbal communication and paper notes with a fast, reliable digital board that both roles can check at a glance.


