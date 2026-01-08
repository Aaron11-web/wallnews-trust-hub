'use client';

import { SuperNewsCard, Source } from '@/lib/api';

interface SuperNewsCardProps {
  card: SuperNewsCard;
  onClick?: () => void;
}

/**
 * Render a citation with clickable link
 */
function CitationLink({ num, citationsMap }: { num: string; citationsMap: Record<string, Source> }) {
  const source = citationsMap[num];
  if (!source) return <span className="text-cyan-400">[{num}]</span>;
  
  return (
    <a 
      href={source.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
      title={source.name}
    >
      [{num}]
    </a>
  );
}

/**
 * Parse body_cited to render citations as clickable links
 */
function RenderCitedText({ text, citationsMap }: { text: string; citationsMap: Record<string, Source> }) {
  if (!text) return null;
  
  // Split by citation patterns [1], [2], etc.
  const parts = text.split(/(\[\d+\])/g);
  
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/\[(\d+)\]/);
        if (match) {
          return <CitationLink key={index} num={match[1]} citationsMap={citationsMap} />;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

/**
 * SuperNewsCard component for Trust Hub
 */
export default function SuperNewsCardComponent({ card, onClick }: SuperNewsCardProps) {
  const rootsCheck = typeof card.rootsCheck === 'string' 
    ? { icon: '❓', message: card.rootsCheck, status: 'unknown' as const, confidence: 'unknown' }
    : card.rootsCheck;

  const complianceScore = card.compliance?.score ?? 0;
  const isHighCompliance = complianceScore >= 90;

  return (
    <article 
      className="glass-card p-6 hover:glow-soft transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      {/* Header: Category + Compliance Badge + Sources */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30">
            {card.category?.toUpperCase() || 'NEWS'}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            {card.sourceCount} Sources
          </span>
        </div>
        {isHighCompliance && (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-300 border border-green-500/30">
            ✓ WallNews Verified
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors leading-tight">
        {card.title}
      </h3>

      {/* Summary (NO citations) */}
      <p className="text-slate-300 mb-4 leading-relaxed">
        {card.summary}
      </p>

      {/* Roots Check Badge */}
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-4 ${
        rootsCheck.status === 'verified' ? 'bg-green-500/10 border border-green-500/30 text-green-300' :
        rootsCheck.status === 'partial' ? 'bg-amber-500/10 border border-amber-500/30 text-amber-300' :
        'bg-red-500/10 border border-red-500/30 text-red-300'
      }`}>
        <span className="text-lg">{rootsCheck.icon}</span>
        <span className="text-sm font-medium">{rootsCheck.message}</span>
      </div>

      {/* Body Cited (with clickable citations) */}
      {card.body_cited && (
        <div className="mb-4 p-4 rounded-lg bg-slate-800/50 border border-white/5">
          <h4 className="text-sm font-bold text-cyan-400 mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Analyse Complète
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            <RenderCitedText text={card.body_cited} citationsMap={card.citationsMap || {}} />
          </p>
        </div>
      )}

      {/* Facts */}
      {card.facts && card.facts.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-bold text-green-400 mb-2 flex items-center gap-2">
            <span>✓</span> FAITS ÉTABLIS
          </h4>
          <ul className="space-y-1">
            {card.facts.map((fact, idx) => (
              <li key={idx} className="text-slate-300 text-sm pl-4 border-l-2 border-green-500/30">
                <RenderCitedText text={fact} citationsMap={card.citationsMap || {}} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Divergences */}
      {card.divergences && card.divergences.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-bold text-amber-400 mb-2 flex items-center gap-2">
            <span>⚡</span> DIVERGENCES
          </h4>
          <ul className="space-y-1">
            {card.divergences.map((div, idx) => (
              <li key={idx} className="text-slate-300 text-sm pl-4 border-l-2 border-amber-500/30">
                <RenderCitedText text={div} citationsMap={card.citationsMap || {}} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Uncertainties */}
      {card.uncertainties && card.uncertainties.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-bold text-purple-400 mb-2 flex items-center gap-2">
            <span>❓</span> INCERTITUDES
          </h4>
          <ul className="space-y-1">
            {card.uncertainties.map((unc, idx) => (
              <li key={idx} className="text-slate-300 text-sm pl-4 border-l-2 border-purple-500/30">
                <RenderCitedText text={unc} citationsMap={card.citationsMap || {}} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* WallBot Analysis (with citations) */}
      {card.wallbotAnalysis && (
        <div className="mb-4 p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
          <h4 className="text-sm font-bold text-cyan-300 mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2M7.5 13A2.5 2.5 0 005 15.5 2.5 2.5 0 007.5 18a2.5 2.5 0 002.5-2.5A2.5 2.5 0 007.5 13m9 0a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5z"/>
            </svg>
            WallBot Analysis
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            <RenderCitedText text={card.wallbotAnalysis} citationsMap={card.citationsMap || {}} />
          </p>
        </div>
      )}

      {/* Sources */}
      <div className="border-t border-white/10 pt-4 mt-4">
        <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Sources</h4>
        <div className="flex flex-wrap gap-2">
          {card.sources?.map((source, idx) => (
            <a
              key={idx}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-slate-800/50 text-slate-400 hover:text-cyan-300 hover:bg-slate-700/50 transition-colors border border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-cyan-400">[{idx + 1}]</span>
              {source.name}
            </a>
          ))}
        </div>
      </div>

      {/* Compliance Score */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span>Compliance Score: {complianceScore}/100</span>
        <span>{card.when?.timeframe || 'Recent'}</span>
      </div>
    </article>
  );
}
