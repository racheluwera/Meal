type MealCardProps ={
    name: string;
    description: string;
    caloies: number;
    image: string;
};
export default function MealCard({ name, description, caloies, image }: MealCardProps){
    return(
   <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden dark:bg-zinc-900 dark:border-zinc-700">
      {image && (
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      )}
<div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{name}</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{calories} kcal</span>
      </div>
    </div>
  );
}