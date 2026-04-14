"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    if (pathname === path) {
      return "text-emerald-700 font-bold border-b-2 border-emerald-600 pb-1 transition-colors";
    }
    return "text-slate-600 font-medium hover:text-emerald-600 transition-colors";
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm h-16 flex justify-between items-center px-8 max-w-full">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-emerald-900 tracking-tight">NutriGuide AI</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center h-full">
          <Link className={getLinkClass("/")} href="/">Dashboard</Link>
          <Link className={getLinkClass("/meal-plans")} href="/meal-plans">Meal Plans</Link>
          <Link className={getLinkClass("/wellness-hub")} href="/wellness-hub">Wellness Hub</Link>
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
        <Link href="/" className="flex flex-col items-center justify-center px-4 py-1 hover:text-emerald-700 transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/" ? "'FILL' 1" : "'FILL' 0" }}>forum</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Assistant</span>
        </Link>
        <Link href="/meal-plans" className="flex flex-col items-center justify-center px-4 py-1 hover:text-emerald-700 transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/meal-plans" ? "'FILL' 1" : "'FILL' 0" }}>calendar_today</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Plan</span>
        </Link>
        <Link href="/wellness-hub" className="flex flex-col items-center justify-center px-4 py-1 hover:text-emerald-700 transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/wellness-hub" ? "'FILL' 1" : "'FILL' 0" }}>menu_book</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Hub</span>
        </Link>
      </nav>
    </>
  );
}
