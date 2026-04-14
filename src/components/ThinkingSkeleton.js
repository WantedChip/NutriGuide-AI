export default function ThinkingSkeleton() {
  return (
    <div className="flex justify-start gap-3 w-full max-w-3xl">
      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 animate-pulse">
        <span className="material-symbols-outlined text-emerald-400 text-sm">psychology</span>
      </div>
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <p className="text-xs font-label uppercase tracking-widest text-emerald-700 font-bold animate-pulse">Analyzing nutritional density...</p>
        </div>
        
        <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2 flex-1">
              <div className="h-6 w-3/4 bg-slate-100 rounded-lg animate-pulse" style={{animationDelay: "0.1s"}}></div>
              <div className="h-4 w-1/2 bg-slate-50 rounded-lg animate-pulse" style={{animationDelay: "0.2s"}}></div>
            </div>
            <div className="h-10 w-10 bg-slate-100 rounded-full animate-pulse"></div>
          </div>
          
          <div className="aspect-[16/9] w-full bg-slate-100 rounded-2xl animate-pulse overflow-hidden relative" style={{animationDelay: "0.1s"}}>
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 via-white/20 to-slate-100"></div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="h-12 bg-slate-50 rounded-xl animate-pulse" style={{animationDelay: "0.2s"}}></div>
            <div className="h-12 bg-slate-50 rounded-xl animate-pulse" style={{animationDelay: "0.3s"}}></div>
            <div className="h-12 bg-slate-50 rounded-xl animate-pulse" style={{animationDelay: "0.1s"}}></div>
          </div>
          
          <div className="space-y-3">
            <div className="h-3 w-full bg-slate-100 rounded-full animate-pulse"></div>
            <div className="h-3 w-11/12 bg-slate-100 rounded-full animate-pulse" style={{animationDelay: "0.2s"}}></div>
            <div className="h-3 w-4/5 bg-slate-100 rounded-full animate-pulse" style={{animationDelay: "0.3s"}}></div>
          </div>
          
          <div className="h-12 w-full bg-slate-100 rounded-xl animate-pulse"></div>
        </div>
        
        <p className="text-[10px] text-slate-400 font-label uppercase tracking-wider text-center italic">Cross-referencing with your dietary preferences</p>
      </div>
    </div>
  );
}
