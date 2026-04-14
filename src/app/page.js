"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";
import ChatInput from "../components/ChatInput";
import ThinkingSkeleton from "../components/ThinkingSkeleton";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      type: "assistant_text",
      text: "Welcome back, Alex. What health goals are we reaching today?",
      greeting: true
    }
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const handleSendMessage = async (text) => {
    // Add user message
    setMessages((prev) => [...prev, { type: "user", text }]);
    setIsThinking(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text })
      });
      const data = await res.json();
      
      setMessages((prev) => [...prev, { type: "recipe", recipe: data }]);
    } catch (error) {
      setMessages((prev) => [...prev, { type: "assistant_text", text: "Sorry, something went wrong processing your request." }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <>
      <NavBar />
      <main className="pt-24 pb-32 px-4 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="space-y-6">
            {messages.map((msg, idx) => {
              if (msg.type === "assistant_text" && msg.greeting) {
                return (
                  <div key={idx}>
                    <header className="mb-12 text-center mt-6">
                      <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-3">Welcome back, Alex.</h1>
                      <p className="text-on-surface-variant font-medium">What health goals are we reaching today?</p>
                    </header>
                    <div className="grid grid-cols-1 gap-6 mb-12">
                      <div className="bg-white p-6 rounded-xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.06)] flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary-fixed-dim/20 flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-primary">auto_awesome</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Morning Analysis</h3>
                          <p className="text-on-surface-variant text-sm leading-relaxed">Based on your sleep data and current macros, I recommend a high-protein breakfast with complex carbs to fuel your 11 AM HIIT session.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Quick Suggestions</h2>
                      <div className="flex flex-wrap gap-2">
                        <button className="bg-white px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 shadow-sm border border-slate-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all active:scale-95">
                            High protein post-workout
                        </button>
                        <button className="bg-white px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 shadow-sm border border-slate-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all active:scale-95">
                            Low carb dinner ideas
                        </button>
                        <button className="bg-white px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 shadow-sm border border-slate-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all active:scale-95">
                            Track my water intake
                        </button>
                        <button className="bg-white px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 shadow-sm border border-slate-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all active:scale-95">
                            Supplement guide
                        </button>
                      </div>
                    </div>
                    <div className="bg-surface-container-low rounded-2xl p-8 mb-12 overflow-hidden relative">
                      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-4">Your Nutrition Snapshot</h3>
                        <div className="flex gap-4">
                          <div className="flex-1 bg-white/60 backdrop-blur-md p-4 rounded-xl">
                            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Protein</span>
                            <div className="text-2xl font-extrabold text-emerald-800">142g</div>
                            <div className="w-full bg-slate-200 h-1 rounded-full mt-2 overflow-hidden">
                              <div className="bg-primary w-3/4 h-full"></div>
                            </div>
                          </div>
                          <div className="flex-1 bg-white/60 backdrop-blur-md p-4 rounded-xl">
                            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Calories</span>
                            <div className="text-2xl font-extrabold text-emerald-800">1,840</div>
                            <div className="w-full bg-slate-200 h-1 rounded-full mt-2 overflow-hidden">
                              <div className="bg-primary w-1/2 h-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (msg.type === "assistant_text") {
                return (
                  <div key={idx} className="flex justify-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-emerald-700 text-sm">auto_awesome</span>
                    </div>
                    <div className="bg-white border border-emerald-100/20 p-4 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
                      <p className="text-sm text-on-surface-variant leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                );
              }
              if (msg.type === "user") {
                return (
                  <div key={idx} className="flex justify-end">
                    <div className="bg-emerald-700 text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                );
              }
              if (msg.type === "recipe") {
                return (
                  <div key={idx} className="flex justify-center w-full mt-4">
                     <RecipeCard recipe={msg.recipe} />
                  </div>
                );
              }
              return null;
            })}
          </div>
          
          {isThinking && (
            <ThinkingSkeleton />
          )}
        </div>
      </main>
      <ChatInput onSendMessage={handleSendMessage} isThinking={isThinking} />
    </>
  );
}
