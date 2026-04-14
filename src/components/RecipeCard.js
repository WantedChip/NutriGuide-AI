export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden ring-1 ring-black/5 w-full max-w-3xl">
      <section className="bg-emerald-50 border-l-4 border-emerald-500 p-8">
        <div className="flex items-start gap-4">
          <div className="bg-emerald-500 text-white p-2 rounded-lg shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-emerald-900 mb-2 font-headline tracking-tight">Why this fits your goal</h2>
            <p className="text-emerald-800 leading-relaxed font-body">
              {recipe.reasoning}
            </p>
          </div>
        </div>
      </section>
      
      <div className="p-8 space-y-8">
        <header className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {recipe.tags?.map((tag, i) => (
              <span key={i} className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-900">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-extrabold text-on-background font-headline tracking-tight leading-tight">
            {recipe.title}
          </h1>
        </header>

        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
          <img alt={recipe.title} className="object-cover w-full h-full" src={recipe.imageUrl} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 flex gap-6 text-white">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">schedule</span>
              <span className="text-sm font-bold tracking-tight">{recipe.time} MINS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">restaurant</span>
              <span className="text-sm font-bold tracking-tight">{recipe.servings} SERVING{recipe.servings > 1 ? 'S' : ''}</span>
            </div>
          </div>
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          <div className="bg-surface-container-low p-4 rounded-xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Calories</p>
            <p className="text-2xl font-bold text-on-surface">{recipe.nutrition.calories}</p>
            <div className="w-full bg-slate-200 h-1 mt-3 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-3/4"></div>
            </div>
          </div>
          <div className="bg-surface-container-low p-4 rounded-xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Protein</p>
            <p className="text-2xl font-bold text-on-surface">{recipe.nutrition.protein}g</p>
            <div className="w-full bg-slate-200 h-1 mt-3 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[85%]"></div>
            </div>
          </div>
          <div className="bg-surface-container-low p-4 rounded-xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Carbs</p>
            <p className="text-2xl font-bold text-on-surface">{recipe.nutrition.carbs}g</p>
            <div className="w-full bg-slate-200 h-1 mt-3 rounded-full overflow-hidden">
              <div className="bg-tertiary-container h-full w-1/3"></div>
            </div>
          </div>
          <div className="bg-surface-container-low p-4 rounded-xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Fat</p>
            <p className="text-2xl font-bold text-on-surface">{recipe.nutrition.fat}g</p>
            <div className="w-full bg-slate-200 h-1 mt-3 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-2/5"></div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Ingredients</h3>
            <ul className="space-y-4">
              {recipe.ingredients?.map((ing, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Preparation</h3>
            <div className="space-y-6">
              {recipe.preparation?.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-primary font-bold text-lg font-headline">{(idx + 1).toString().padStart(2, '0')}</span>
                  <p className="text-on-surface leading-relaxed text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <footer className="pt-8 flex flex-col sm:flex-row gap-4 border-t border-slate-100">
          <button className="flex-1 bg-gradient-to-br from-primary to-primary-container text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 hover:opacity-90 transition-all">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_add_on</span>
            Add to My Plan
          </button>
          <button className="flex-1 bg-secondary-container text-on-secondary-container font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-200 transition-all">
            <span className="material-symbols-outlined">shopping_cart</span>
            Create Shopping List
          </button>
        </footer>
      </div>
      
      <div className="mt-8 text-center pb-8">
        <button className="text-emerald-700 text-sm font-bold uppercase tracking-widest flex items-center gap-2 mx-auto hover:underline">
          <span className="material-symbols-outlined">refresh</span>
          Regenerate Alternative
        </button>
      </div>
    </article>
  );
}
