export default function NavBar() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm h-16 flex justify-between items-center px-8 max-w-full">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-emerald-900 tracking-tight">NutriGuide AI</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center h-full">
          <a className="text-slate-600 font-medium hover:text-emerald-600 transition-colors" href="#">Dashboard</a>
          <a className="text-slate-600 font-medium hover:text-emerald-600 transition-colors" href="#">Meal Plans</a>
          <a className="text-emerald-700 font-bold border-b-2 border-emerald-600 pb-1 transition-colors" href="#">Wellness Hub</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-all">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden bg-slate-200 ring-2 ring-emerald-500/20">
            <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChWY0r5qYJZw82Bb5JvW9sjpeUqptqwPpr41favkXDbyQFjz5J45eBq_KrfIxk6a7KeD0brrju91OQuOZNVDbl9kilYiOxFITRcKtuxGkGF6ci5H_Ej5V-zcuZzQkiyTH7WAJG0iWYWjwiq0SVKsAGUSN1mS7WcjIW27TYeXAF2mvUK4T8Dzv8ltobrU5g20dwaeWh--LFEf7L2yOFnlnjVw2XOxVOM-364JtR-veHl0p4RYwX0y45SunxVc0kcLiUopSTT2uSRg"/>
          </div>
        </div>
      </header>
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 lg:hidden bg-surface/90 backdrop-blur-xl border-t border-emerald-100/10 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
        <div className="flex flex-col items-center justify-center bg-emerald-100 text-emerald-900 rounded-xl px-4 py-1">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Assistant</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 px-4 py-1">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Journal</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 px-4 py-1">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Plan</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 px-4 py-1">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Profile</span>
        </div>
      </nav>
    </>
  );
}
