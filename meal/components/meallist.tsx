import MealCard from "./mealcard";

type Meal = {
  id: number;
  name: string;
  description: string;
  calories: number;
  image: string;
};

type MealListProps = {
  meals: Meal[];
};

export default function MealList({ meals }: MealListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {meals.map((meal) => (
        <MealCard key={meal.id} {...meal} />
      ))}
    </div>
  );
}
