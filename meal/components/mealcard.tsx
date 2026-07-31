type MealCardProps = {
  name: string;
  description: string;
  calories: number;
  image: string;
};

export default function MealCard({ name, description, calories, image }: MealCardProps) {
  return (
    <div className="rounded-2xl border border-green-100 bg-white shadow-sm overflow-hidden dark:bg-green-950 dark:border-green-900 hover:shadow-md transition-shadow">
      {image && (
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      )}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-green-900 dark:text-green-50">{name}</h2>
        <p className="text-sm text-green-600 dark:text-green-400">{description}</p>
        <span className="text-sm font-medium text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900 px-2 py-0.5 rounded-full w-fit">
          🔥 {calories} kcal
        </span>
      </div>
    </div>
  );
}
