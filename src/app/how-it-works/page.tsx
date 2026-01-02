import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works - AI-Powered News Trust Pipeline',
  description: 'Discover how WallNews AI analyzes, verifies, and rates news articles in real-time. Learn about our transparent trust pipeline.',
  keywords: ['AI news analysis', 'trust pipeline', 'news verification', 'bias detection algorithm', 'fact-checking AI'],
};

// Pipeline Steps
const pipelineSteps = [
  {
    step: 1,
    title: 'Content Ingestion',
    description: 'Our AI crawlers continuously monitor 500+ trusted news sources worldwide, collecting articles in real-time.',
    details: [
      'RSS feed monitoring',
      'API integrations with major outlets',
      'Social media signal detection',
      'Breaking news alerts',
    ],
    icon: '📥',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    step: 2,
    title: 'Entity Extraction',
    description: 'Natural Language Processing identifies key entities: people, organizations, locations, and claims within each article.',
    details: [
      'Named Entity Recognition (NER)',
      'Relationship mapping',
      'Claim extraction',
      'Quote attribution',
    ],
    icon: '🔬',
    color: 'from-purple-400 to-pink-400',
  },
  {
    step: 3,
    title: 'Bias Analysis',
    description: 'Our proprietary bias detection model analyzes linguistic patterns, source selection, and framing to calculate bias scores.',
    details: [
      'Sentiment analysis',
      'Framing detection',
      'Loaded language identification',
      'Comparative source analysis',
    ],
    icon: '⚖️',
    color: 'from-amber-400 to-orange-400',
  },
  {
    step: 4,
    title: 'Fact Verification',
    description: 'Claims are cross-referenced against fact-checking databases, academic sources, and official records.',
    details: [
      'Fact-checker API integration',
      'Statistical claim verification',
      'Source reliability scoring',
      'Historical accuracy tracking',
    ],
    icon: '✓',
    color: 'from-green-400 to-emerald-400',
  },
  {
    step: 5,
    title: 'Multi-Source Aggregation',
    description: 'Related articles are grouped together to provide multiple perspectives on the same story.',
    details: [
      'Semantic similarity matching',
      'Timeline construction',
      'Perspective diversity scoring',
      'Consensus detection',
    ],
    icon: '🔗',
    color: 'from-indigo-400 to-violet-400',
  },
  {
    step: 6,
    title: 'Trust Score Generation',
    description: 'All indicators are combined into a comprehensive trust profile for each article and source.',
    details: [
      'Weighted indicator aggregation',
      'Confidence interval calculation',
      'Trend analysis',
      'User feedback integration',
    ],
    icon: '🏆',
    color: 'from-rose-400 to-pink-400',
  },
];

// Tech Stack
const techStack = [
  { name: 'GPT-4 & Claude', role: 'Language Understanding', icon: '🧠' },
  { name: 'Custom NLP Models', role: 'Bias Detection', icon: '⚙️' },
  { name: 'Knowledge Graphs', role: 'Entity Relations', icon: '🕸️' },
  { name: 'Real-time APIs', role: 'Fact-Checking', icon: '⚡' },
];

export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button mb-6">
            <span className="text-sm text-[#A8D4E6]">Under the Hood</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#E4EEF4] mb-6">
            How Our <span className="text-gradient">AI Pipeline</span> Works
          </h1>
          <p className="text-lg text-[#C8D8E4]/80 leading-relaxed max-w-2xl mx-auto">
            From raw news to trusted insights in milliseconds. Here&apos;s exactly how WallNews 
            processes, verifies, and scores every piece of content.
          </p>
        </div>
      </section>

      {/* Pipeline Visualization */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line connector */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#A8D4E6] via-[#8EC8DC] to-[#A8D4E6] opacity-30 hidden md:block" />
            
            <div className="space-y-8">
              {pipelineSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Step indicator */}
                  <div className="flex items-start gap-6">
                    {/* Number circle */}
                    <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} 
                                  flex items-center justify-center text-2xl flex-shrink-0 
                                  shadow-lg shadow-[#A8D4E6]/20`}>
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 glass-card p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-display text-xs text-[#A8D4E6] opacity-60">
                          STEP {String(step.step).padStart(2, '0')}
                        </span>
                        {index < pipelineSteps.length - 1 && (
                          <div className="flex-1 h-px bg-gradient-to-r from-[#A8D4E6]/30 to-transparent" />
                        )}
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#E4EEF4] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#C8D8E4]/70 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail, dIndex) => (
                          <span key={dIndex} className="px-3 py-1 rounded-full text-xs 
                                                       bg-[#142640]/50 text-[#C8D8E4]/60 
                                                       border border-[#A8D4E6]/10">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-[#E4EEF4] mb-4">
              Powered by <span className="text-gradient">Cutting-Edge AI</span>
            </h2>
            <p className="text-[#C8D8E4]/70">
              We combine the best of modern AI with custom-built models for news analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="glass-card p-5 text-center hover:glow-soft transition-all">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-display text-sm font-semibold text-[#E4EEF4] mb-1">
                  {tech.name}
                </h3>
                <p className="text-xs text-[#C8D8E4]/60">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Commitment */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 glow-soft">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#D0F0FF] to-[#A8D4E6] 
                            flex items-center justify-center flex-shrink-0">
                <svg className="w-12 h-12 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-[#E4EEF4] mb-3">
                  Our Transparency Commitment
                </h2>
                <p className="text-[#C8D8E4]/80 leading-relaxed">
                  Unlike black-box algorithms used by social media platforms, we believe you have the 
                  right to know exactly how content is selected, analyzed, and presented to you. 
                  Every trust score comes with a detailed breakdown of how it was calculated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#E4EEF4] mb-4">
            Want to Integrate Our <span className="text-gradient">Trust API</span>?
          </h2>
          <p className="text-[#C8D8E4]/70 mb-8 max-w-xl mx-auto">
            Publishers and developers can access our trust indicators via API. 
            Join the network of transparent journalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join" className="btn-primary text-base px-8 py-4">
              Join Partnership Program
            </Link>
            <Link href="/contact" className="btn-secondary text-base px-8 py-4">
              Contact for API Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
