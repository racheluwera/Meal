type Notification = {
  id: number;
  role: "Chef" | "Manager";
  title: string;
  message: string;
  time: string;
  urgent: boolean;
  category: "Cook Now" | "Stock Alert" | "Ready" | "Info";
};

const notifications: Notification[] = [
  {
    id: 1,
    role: "Chef",
    title: "Cook Now — Grilled Chicken Bowl",
    message: "3 orders are waiting for Grilled Chicken Bowl. Start preparation immediately. Target serve time: 20 minutes.",
    time: "8:02 AM",
    urgent: true,
    category: "Cook Now",
  },
  {
    id: 2,
    role: "Manager",
    title: "Stock Alert — Salmon Running Low",
    message: "Salmon & Quinoa stock is critically low. Only 2 portions remaining. Reorder or remove from today's menu before the lunch rush.",
    time: "8:15 AM",
    urgent: true,
    category: "Stock Alert",
  },
  {
    id: 3,
    role: "Chef",
    title: "Ready to Serve — Beef Stir Fry",
    message: "Beef Stir Fry is ready for Table 4 and Table 7. Please notify the serving staff immediately.",
    time: "8:30 AM",
    urgent: false,
    category: "Ready",
  },
  {
    id: 4,
    role: "Manager",
    title: "Today's Special Confirmation",
    message: "Greek Salad is listed as today's special. Please confirm with the kitchen team by 9:00 AM and update the board.",
    time: "8:45 AM",
    urgent: false,
    category: "Info",
  },
  {
    id: 5,
    role: "Chef",
    title: "Cook Now — Avocado Toast (Breakfast Rush)",
    message: "5 orders for Avocado Toast have come in. Prioritize this before 9:30 AM. Eggs need to be freshly poached.",
    time: "9:00 AM",
    urgent: true,
    category: "Cook Now",
  },
  {
    id: 6,
    role: "Manager",
    title: "Inventory Check — End of Morning Shift",
    message: "Please do a full inventory check at 11:00 AM before the lunch menu goes live. Update stock levels in the system.",
    time: "9:10 AM",
    urgent: false,
    category: "Info",
  },
];

const categoryStyles: Record<Notification["category"], string> = {
  "Cook Now": "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
  "Stock Alert": "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",
  Ready: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
  Info: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
};

const categoryIcon: Record<Notification["category"], string> = {
  "Cook Now": "🔥",
  "Stock Alert": "⚠️",
  Ready: "✅",
  Info: "📋",
};

export default function NotificationsPage() {
  const chefNotifs = notifications.filter((n) => n.role === "Chef");
  const managerNotifs = notifications.filter((n) => n.role === "Manager");

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-orange-900 dark:text-orange-50">Kitchen Notifications</h1>
        <p className="text-sm text-orange-500 dark:text-orange-400 mt-1">
          Real-time alerts for the kitchen team — what to cook, what to restock, and what's ready to serve.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* Chef Notifications */}
        <div>
          <h2 className="text-base font-bold text-orange-800 dark:text-orange-200 mb-4 flex items-center gap-2">
            👨‍🍳 Chef Notifications
            <span className="text-xs font-medium bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300 px-2 py-0.5 rounded-full">
              {chefNotifs.length}
            </span>
          </h2>
          <div className="flex flex-col gap-4">
            {chefNotifs.map(({ id, title, message, time, urgent, category }) => (
              <div
                key={id}
                className={`rounded-2xl border p-4 shadow-sm ${urgent ? "border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-900" : "border-orange-100 bg-white dark:bg-orange-900 dark:border-orange-800"}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryStyles[category]}`}>
                    {categoryIcon[category]} {category}
                  </span>
                  <span className="text-xs text-orange-400">{time}</span>
                </div>
                <h3 className="text-sm font-semibold text-orange-900 dark:text-orange-50 mb-1">{title}</h3>
                <p className="text-xs text-orange-600 dark:text-orange-400 leading-relaxed">{message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manager Notifications */}
        <div>
          <h2 className="text-base font-bold text-orange-800 dark:text-orange-200 mb-4 flex items-center gap-2">
            📋 Manager Notifications
            <span className="text-xs font-medium bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300 px-2 py-0.5 rounded-full">
              {managerNotifs.length}
            </span>
          </h2>
          <div className="flex flex-col gap-4">
            {managerNotifs.map(({ id, title, message, time, urgent, category }) => (
              <div
                key={id}
                className={`rounded-2xl border p-4 shadow-sm ${urgent ? "border-yellow-200 bg-yellow-50 dark:bg-yellow-950 dark:border-yellow-900" : "border-orange-100 bg-white dark:bg-orange-900 dark:border-orange-800"}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryStyles[category]}`}>
                    {categoryIcon[category]} {category}
                  </span>
                  <span className="text-xs text-orange-400">{time}</span>
                </div>
                <h3 className="text-sm font-semibold text-orange-900 dark:text-orange-50 mb-1">{title}</h3>
                <p className="text-xs text-orange-600 dark:text-orange-400 leading-relaxed">{message}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
