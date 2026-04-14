import NavBar from "../../components/NavBar";

export default function MealPlans() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-32 px-4 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <header className="mb-12 text-center mt-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-3">Your Meal Plans</h1>
            <p className="text-on-surface-variant font-medium">Curated weekly schedules specifically for your biological profile.</p>
          </header>
          
          <div className="bg-surface-container-low rounded-2xl p-8 mb-12 text-center border border-dashed border-emerald-200">
            <span className="material-symbols-outlined text-4xl text-emerald-400 mb-4 block">calendar_month</span>
            <h3 className="text-xl font-bold mb-2">No active meal plan</h3>
            <p className="text-slate-500 text-sm mb-6">Ask the assistant to generate a new weekly meal plan to get started.</p>
            <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform">
               Generate Plan
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
