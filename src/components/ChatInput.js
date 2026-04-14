"use client";

import { useState } from "react";

export default function ChatInput({ onSendMessage, isThinking }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() && !isThinking) {
      onSendMessage(value);
      setValue("");
    }
  };

  return (
    <div className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-3xl px-6 z-40">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-primary blur opacity-10 group-focus-within:opacity-20 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden focus-within:ring-2 ring-primary/20 transition-all">
          <button type="button" aria-label="Add attachment" className="pl-4 pr-2 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
          <input 
            aria-label="Type your message"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={isThinking}
            className="w-full py-5 px-2 bg-transparent border-none focus:outline-none focus:ring-0 text-on-surface placeholder:text-slate-400 font-medium" 
            placeholder="Ask NutriGuide anything..." 
            type="text"
          />
          <button 
            type="submit" 
            aria-label="Send message"
            disabled={!value.trim() || isThinking}
            className={`mx-3 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform ${(!value.trim() || isThinking) ? 'bg-slate-200 text-slate-400 opacity-50 cursor-not-allowed' : 'bg-gradient-to-br from-primary to-primary-container text-white shadow-emerald-500/20 active:scale-95'}`}
          >
            {isThinking ? (
              <span className="material-symbols-outlined animate-spin text-slate-400">progress_activity</span>
            ) : (
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
            )}
          </button>
        </div>
      </form>
      <p className="text-center text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest">Powered by Clinical Health Intelligence</p>
    </div>
  );
}
