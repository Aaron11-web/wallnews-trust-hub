'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SuperNewsCard } from '@/lib/api';
import SuperNewsCardComponent from '@/components/SuperNewsCard';
import staticData from '@/data/supercards.json';

export default function LivePage() {
  const [cards, setCards] = useState<SuperNewsCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [exportedAt, setExportedAt] = useState<string | null>(null);

  useEffect(() => {
    // Load static data
    const data = staticData as { exportedAt: string; count: number; superCards: SuperNewsCard[] };
    setCards(data.superCards || []);
    setExportedAt(data.exportedAt);
    setLoading(false);
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleString('fr-FR', {
        dateStyle: 'long',
        timeStyle: 'short',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Live News</span>
          </div>

          {/* Title */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500">
                  Live
                </span>{' '}
                SuperNewsCards
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl">
                Actualités synthétisées par l&apos;IA WallNews avec vérification multi-sources, 
                citations traçables et analyse de confiance.
              </p>
            </div>
          </div>

          {/* Status Bar */}
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Données statiques
            </div>
            
            <div className="px-4 py-2 rounded-full bg-slate-800/50 border border-white/10 text-slate-400 text-sm">
              {cards.length} SuperNewsCard{cards.length !== 1 ? 's' : ''}
            </div>
            
            {exportedAt && (
              <div className="text-sm text-slate-500">
                Dernière mise à jour: {formatDate(exportedAt)}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4" />
              <p className="text-slate-400">Chargement des SuperNewsCards...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && cards.length === 0 && (
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Aucune SuperNewsCard</h3>
              <p className="text-slate-400 mb-4">
                Les données n&apos;ont pas encore été exportées. Lancez le script d&apos;export depuis le backend.
              </p>
              <div className="text-sm text-slate-500 font-mono bg-slate-800 px-4 py-2 rounded-lg inline-block">
                node scripts/export-supercards.js
              </div>
            </div>
          )}

          {/* Cards Grid */}
          {!loading && cards.length > 0 && (
            <div className="grid gap-6">
              {cards.map((card) => (
                <SuperNewsCardComponent key={card.id} card={card} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                <span className="text-xl">🔍</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">Multi-Sources</h3>
              <p className="text-slate-400 text-sm">
                Chaque SuperNewsCard agrège minimum 2 sources indépendantes pour une vue complète.
              </p>
            </div>
            <div className="glass-card p-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <span className="text-xl">✓</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">Citations Traçables</h3>
              <p className="text-slate-400 text-sm">
                Chaque affirmation est liée à sa source via des citations [1], [2], [3] cliquables.
              </p>
            </div>
            <div className="glass-card p-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">WallBot Analysis</h3>
              <p className="text-slate-400 text-sm">
                Notre IA analyse les divergences et incertitudes pour vous aider à forger votre opinion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
