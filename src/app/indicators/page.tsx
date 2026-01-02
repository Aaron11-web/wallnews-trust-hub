import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust Indicators - 8 Pillars of News Transparency',
  description: 'Discover the 8 AI-powered trust indicators WallNews uses to ensure news transparency: bias detection, source verification, fact-checking, and more.',
  keywords: ['trust indicators', 'news transparency', 'bias detection', 'fact checking', 'AI journalism', 'source verification'],
};

// Complete Trust Indicators Data
const trustIndicators = [
  {
    id: 1,
    icon: '🎯',
    title: 'Bias Score',
    subtitle: 'AI-Powered Political Analysis',
    description: 'Our proprietary AI analyzes linguistic patterns, source selection, and framing to detect political and ideological bias on a scale of 0-10.',
    features: [
      'Multi-dimensional bias analysis (political, emotional, commercial)',
      'Comparison against a baseline of neutral reporting',
      'Historical tracking of source bias trends',
      'Real-time bias alerts for breaking news',
    ],
    metric: '0-10 Scale',
    color: 'from-blue-400 to-cyan-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 2,
    icon: '📊',
    title: 'Source Diversity',
    subtitle: 'Cross-Reference Verification',
    description: 'We aggregate news from multiple sources to provide a balanced view. Each story shows how many independent outlets are reporting the same facts.',
    features: [
      'Minimum 3-source verification for major stories',
      'Geographic diversity of sources',
      'Editorial independence scoring',
      'Wire service vs. original reporting ratio',
    ],
    metric: '3+ Sources',
    color: 'from-purple-400 to-pink-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 3,
    icon: '🔍',
    title: 'Fact Verification',
    subtitle: 'Automated Claim Checking',
    description: 'Our AI cross-references claims against trusted fact-checking databases, academic sources, and official records in real-time.',
    features: [
      'Integration with leading fact-checkers (Snopes, PolitiFact)',
      'Automated detection of statistical claims',
      'Historical accuracy tracking per source',
      'Disputed claim flagging and context',
    ],
    metric: 'Verified ✓',
    color: 'from-green-400 to-emerald-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
  },
  {
    id: 4,
    icon: '⏱️',
    title: 'Freshness Index',
    subtitle: 'Relevance & Timeliness',
    description: 'News has a shelf life. Our Freshness Index shows how current and relevant a story is, preventing the spread of outdated information.',
    features: [
      'Real-time timestamp verification',
      'Story evolution tracking',
      'Update frequency monitoring',
      'Evergreen vs. breaking news classification',
    ],
    metric: 'Live Updates',
    color: 'from-orange-400 to-amber-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
  },
  {
    id: 5,
    icon: '🏛️',
    title: 'Publisher Transparency',
    subtitle: 'Know Your Source',
    description: 'Every publisher on WallNews has a transparency profile showing ownership, funding sources, editorial policies, and corrections history.',
    features: [
      'Ownership chain disclosure',
      'Advertising vs. subscription revenue ratio',
      'Editorial board composition',
      'Corrections and retractions history',
    ],
    metric: 'Full Disclosure',
    color: 'from-indigo-400 to-violet-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
  },
  {
    id: 6,
    icon: '👤',
    title: 'Author Credentials',
    subtitle: 'Journalist Verification',
    description: 'Know who wrote what you\'re reading. We verify and display author credentials, beat expertise, and publication history.',
    features: [
      'Professional background verification',
      'Subject matter expertise scoring',
      'Publication history and awards',
      'Contact information availability',
    ],
    metric: 'Verified Author',
    color: 'from-teal-400 to-cyan-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
  },
  {
    id: 7,
    icon: '📍',
    title: 'Geographic Context',
    subtitle: 'Local vs. Global Perspective',
    description: 'Understand the geographic context of news. Is it local reporting or international coverage? Our system provides spatial context for every story.',
    features: [
      'Reporter location vs. story location',
      'Regional impact assessment',
      'International perspective diversity',
      'Local source prioritization',
    ],
    metric: 'Geo-Tagged',
    color: 'from-rose-400 to-pink-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
  },
  {
    id: 8,
    icon: '🤖',
    title: 'AI Transparency',
    subtitle: 'Algorithm Accountability',
    description: 'Unlike black-box algorithms, we show exactly how AI influenced the content you see—from curation to summarization.',
    features: [
      'AI involvement disclosure per article',
      'Summary vs. original content ratio',
      'Recommendation algorithm explanation',
      'Human editorial override indicators',
    ],
    metric: 'Open AI',
    color: 'from-slate-400 to-gray-400',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/30',
  },
];

export default function IndicatorsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button mb-6">
            <span className="text-sm text-[#A8D4E6]">Our Framework</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#E4EEF4] mb-6">
            8 Pillars of <span className="text-gradient">Trust</span>
          </h1>
          <p className="text-lg text-[#C8D8E4]/80 leading-relaxed max-w-2xl mx-auto">
            Designed for the AI era. 
            Each indicator gives you complete transparency about the news you consume.
          </p>
        </div>
      </section>

      {/* Indicators Grid */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {trustIndicators.map((indicator, index) => (
              <div 
                key={indicator.id}
                className={`glass-card p-6 md:p-8 border-l-4 ${indicator.borderColor}`}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left: Icon & Title */}
                  <div className="md:col-span-1">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${indicator.color} 
                                  flex items-center justify-center text-3xl mb-4`}>
                      {indicator.icon}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-display text-sm text-[#A8D4E6] opacity-60">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-[#E4EEF4] mb-1">
                      {indicator.title}
                    </h2>
                    <p className="text-sm text-[#A8D4E6]">{indicator.subtitle}</p>
                    
                    {/* Metric Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                                  ${indicator.bgColor} border ${indicator.borderColor} mt-4`}>
                      <span className="text-sm font-medium text-[#E4EEF4]">{indicator.metric}</span>
                    </div>
                  </div>

                  {/* Right: Description & Features */}
                  <div className="md:col-span-2">
                    <p className="text-[#C8D8E4]/80 leading-relaxed mb-6">
                      {indicator.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {indicator.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[#A8D4E6] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-[#C8D8E4]/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#E4EEF4] mb-6">
              How We Compare to <span className="text-gradient">Traditional News</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Traditional */}
              <div className="text-left">
                <h3 className="font-display text-lg font-semibold text-[#C8D8E4]/60 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/50" />
                  Traditional News
                </h3>
                <ul className="space-y-3">
                  {[
                    'Hidden bias and editorial agenda',
                    'Single-source reporting',
                    'Opaque fact-checking process',
                    'Unknown algorithm curation',
                    'Limited publisher transparency',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#C8D8E4]/50 text-sm">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* WallNews */}
              <div className="text-left">
                <h3 className="font-display text-lg font-semibold text-[#A8D4E6] mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  WallNews Trust Hub
                </h3>
                <ul className="space-y-3">
                  {[
                    'Transparent bias scoring (0-10)',
                    'Multi-source verification (3+)',
                    'Real-time fact-checking integration',
                    'Explainable AI recommendations',
                    'Full ownership & funding disclosure',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#E4EEF4] text-sm">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#E4EEF4] mb-4">
            Ready to Experience <span className="text-gradient">Trustworthy News</span>?
          </h2>
          <p className="text-[#C8D8E4]/70 mb-8">
            See our trust indicators in action on WallNews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wallnews.com" target="_blank" rel="noopener noreferrer" 
               className="btn-primary text-base px-8 py-4">
              Try WallNews Free
            </a>
            <a href="/how-it-works" className="btn-secondary text-base px-8 py-4">
              Learn How It Works
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
