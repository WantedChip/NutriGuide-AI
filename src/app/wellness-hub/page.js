import NavBar from "../../components/NavBar";

export default function WellnessHub() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-32 px-4 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <header className="mb-12 text-center mt-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-3">Wellness Hub</h1>
            <p className="text-on-surface-variant font-medium">Your personalized repository of health data and clinical insights.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-black/5 flex flex-col gap-4">
               <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-500">water_drop</span>
               </div>
               <h3 className="font-bold text-lg">Hydration Log</h3>
               <p className="text-slate-500 text-sm flex-1">Track your daily water intake and electrolyte balance.</p>
               <button className="text-emerald-700 font-bold text-sm text-left uppercase tracking-widest mt-2">View Log &rarr;</button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-black/5 flex flex-col gap-4">
               <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-orange-500">directions_run</span>
               </div>
               <h3 className="font-bold text-lg">Activity Metrics</h3>
               <p className="text-slate-500 text-sm flex-1">Sync your cardiovascular performance and recovery times.</p>
               <button className="text-emerald-700 font-bold text-sm text-left uppercase tracking-widest mt-2">Sync Devices &rarr;</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
