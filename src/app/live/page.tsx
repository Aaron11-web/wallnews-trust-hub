'use client';

import { useState, useEffect } from 'react';
import { SuperNewsCard } from '@/lib/api';
import staticData from '@/data/supercards.json';

// Simple Icons
const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const IconDiscover = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
  </svg>
);

const IconSaved = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
  </svg>
);

const IconShare = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
  </svg>
);

const IconBookmark = () => (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
   </svg>
);

const LogoWallNews = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-8 h-8 flex items-center justify-center">
       {/* Globe Icon simplified */}
       <svg className="w-full h-full text-black" viewBox="0 0 24 24" fill="currentColor">
         <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4.07 13H8.24l2.43 7.82C6.73 20.25 4.29 17.22 4.07 13ZM2 12c0-.68.09-1.34.25-1.97h5.18l-1.6 6.38c-1.35-1.12-2.31-2.7-2.83-4.41H2Zm9 9.88l-2.72-8.88h7.44L13 21.88c-.32.08-.66.12-1 .12s-.68-.04-1-.12ZM14.93 11H9.07L7.82 6h8.36l-1.25 5ZM11.23 2.16l2.16 3.84H10.61l.62-3.84Zm4.7 18.66l2.43-7.82h4.17c-.22 4.22-2.66 7.25-6.6 7.82Zm3.82-9.82h-5.18l1.6-6.38c1.35 1.12 2.31 2.7 2.83 4.41h1V11Z"/>
       </svg>
    </div>
    <span className="font-bold text-xl tracking-tight text-black">WallNews</span>
  </div>
);

export default function LivePage() {
  const [cards, setCards] = useState<SuperNewsCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load static data
    const data = staticData as { exportedAt: string; count: number; superCards: SuperNewsCard[] };
    setCards(data.superCards || []);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-100 flex justify-center font-sans selection:bg-cyan-200 selection:text-black">
      {/* Mobile Frame Simulation */}
      <div className="w-full max-w-[430px] bg-black min-h-screen shadow-2xl relative flex flex-col">
        
        {/* App Header (White background as per screenshot) */}
        <header className="bg-white px-5 pt-12 pb-2 rounded-b-xl relative z-10">
          <div className="flex justify-center mb-6">
             <LogoWallNews />
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex justify-between items-center text-xs font-bold tracking-wider text-gray-400 border-t border-gray-100 pt-4">
            <button className="hover:text-black transition-colors uppercase">Worldwide</button>
            <div className="relative">
                <button className="text-black uppercase pb-1">Live Feed</button>
                <div className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-black"></div>
            </div>
            <button className="hover:text-black transition-colors uppercase">My Pod</button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto bg-black p-4 space-y-4 no-scrollbar">
          {loading ? (
             <div className="space-y-4 animate-pulse">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-40 bg-slate-900 rounded-2xl border border-slate-800" />
                ))}
             </div>
          ) : (
            cards.map((card, idx) => (
              <div 
                key={idx} 
                className="group relative bg-slate-900/40 backdrop-blur-xl rounded-2xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-black/50"
              >
                {/* Glow Effect Top */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Worldwide News</span>
                        <div className="flex gap-3 text-slate-500">
                             <button className="hover:text-cyan-400 transition-colors"><IconBookmark /></button>
                             <button className="hover:text-cyan-400 transition-colors"><IconShare /></button>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-white leading-tight mb-2 line-clamp-2">
                        {card.title || "Headline unavailable"}
                    </h3>

                    <p className="text-sm text-slate-400 mb-3 line-clamp-2 font-light">
                        {card.summary || "No summary available for this story."}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                        <div className="flex items-center gap-2">
                            <span className="text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded-full">{card.sourceCount || 1} sources</span>
                            <span className="text-slate-600">•</span>
                            <span>{new Date().toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})}</span>
                        </div>
                    </div>
                </div>
              </div>
            ))
          )}
          
          {/* Spacer for bottom nav */}
          <div className="h-20" />
        </main>

        {/* Floating Bottom Navigation */}
        <div className="absolute bottom-6 left-6 right-6 h-16 bg-slate-900/90 backdrop-blur-2xl rounded-full border border-white/10 flex items-center justify-around px-2 shadow-2xl z-20">
             <button className="flex flex-col items-center gap-1 p-2 text-cyan-400">
                <IconHome />
                <span className="text-[10px] font-medium">Home</span>
             </button>
             <button className="flex flex-col items-center gap-1 p-2 text-slate-500 hover:text-white transition-colors">
                <IconDiscover />
                <span className="text-[10px] font-medium">Discover</span>
             </button>
             <button className="flex flex-col items-center gap-1 p-2 text-slate-500 hover:text-white transition-colors">
                <IconSaved />
                <span className="text-[10px] font-medium">Saved</span>
             </button>
        </div>

      </div>
    </div>
  );
}
