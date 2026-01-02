'use client';

import Link from 'next/link';
import TwitterEmbed from '@/components/TwitterEmbed';

// Trust Indicators Preview Data
const trustIndicators = [
  {
    icon: '🎯',
    title: 'Bias Score',
    description: 'AI-powered political and ideological bias detection',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: '📊',
    title: 'Source Diversity',
    description: 'Multi-source verification and cross-referencing',
    color: 'from-purple-400 to-pink-400',
  },
  {
    icon: '🔍',
    title: 'Fact Verification',
    description: 'Automated claim checking against trusted databases',
    color: 'from-green-400 to-emerald-400',
  },
  {
    icon: '⏱️',
    title: 'Freshness Index',
    description: 'Real-time relevance and timeliness tracking',
    color: 'from-orange-400 to-amber-400',
  },
];

// Stats
const stats = [
  { value: '8', label: 'Trust Indicators' },
  { value: '500+', label: 'Sources Analyzed' },
  { value: '99.2%', label: 'Accuracy Rate' },
  { value: '24/7', label: 'Real-time Monitoring' },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-[#C8D8E4]">Pioneering Trust in AI News</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient">Building Trust</span>
            <br />
            <span className="text-[#E4EEF4]">in the Age of AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#C8D8E4]/80 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
             style={{ animationDelay: '0.2s' }}>
            WallNews Trust Hub brings transparency to AI-powered journalism through 
            <span className="text-[#A8D4E6]"> open standards</span>, 
            <span className="text-[#A8D4E6]"> bias detection</span>, and 
            <span className="text-[#A8D4E6]"> verified sources</span>. 
            Because trust isn&apos;t given—it&apos;s earned.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
               style={{ animationDelay: '0.3s' }}>
            <Link href="/indicators" className="btn-primary text-base px-8 py-4">
              Explore Trust Indicators
            </Link>
            <Link href="/join" className="btn-secondary text-base px-8 py-4">
              Join the Movement
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in-up"
               style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#C8D8E4]/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY TRUST MATTERS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#E4EEF4] mb-6">
                Why <span className="text-gradient">Trust</span> Matters Now More Than Ever
              </h2>
              <div className="space-y-4 text-[#C8D8E4]/80 leading-relaxed">
                <p>
                  In an era of information overload, distinguishing fact from fiction has become 
                  increasingly challenging. AI has the power to either exacerbate this problem—or solve it.
                </p>
                <p>
                  At WallNews, we chose the latter. Our Trust Hub is built on the belief that 
                  <strong className="text-[#A8D4E6]"> transparency breeds trust</strong>. Every article 
                  you read comes with a complete breakdown of its sources, potential biases, and 
                  verification status.
                </p>
                <p>
                  We&apos;ve developed foundational principles for the AI age, 
                  creating a new standard for algorithmic journalism and transparent news delivery.
                </p>
              </div>
              <Link href="/how-it-works" className="inline-flex items-center gap-2 mt-6 text-[#A8D4E6] hover:text-[#D0F0FF] transition-colors">
                Learn how our AI works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right: X Thread Embed */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-[#A8D4E6]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-sm font-medium text-[#C8D8E4]">Our Vision Thread</span>
              </div>
              <TwitterEmbed tweetUrl="https://x.com/willwallnews/status/2007077492444803208" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRUST INDICATORS PREVIEW
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#E4EEF4] mb-4">
              8 Pillars of <span className="text-gradient">Trust</span>
            </h2>
            <p className="text-[#C8D8E4]/70 max-w-2xl mx-auto">
              Every piece of news on WallNews is evaluated against our comprehensive trust framework.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index} 
                className="trust-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${indicator.color} 
                              flex items-center justify-center text-2xl mb-4
                              group-hover:scale-110 transition-transform`}>
                  {indicator.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-[#E4EEF4] mb-2">
                  {indicator.title}
                </h3>
                <p className="text-sm text-[#C8D8E4]/70 leading-relaxed">
                  {indicator.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/indicators" className="btn-secondary inline-flex items-center gap-2">
              View All 8 Indicators
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MISSION STATEMENT
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center glow-soft">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D0F0FF] to-[#A8D4E6] 
                          flex items-center justify-center animate-pulse-glow">
              <svg className="w-8 h-8 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <blockquote className="font-display text-2xl md:text-3xl font-bold text-[#E4EEF4] mb-6 leading-relaxed">
              &ldquo;In a world where anyone can publish, trust becomes the ultimate currency. 
              We&apos;re building the infrastructure for that trust.&rdquo;
            </blockquote>
            <p className="text-[#A8D4E6] font-medium">— The WallNews Team</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Newsrooms */}
            <div className="glass-card p-8 hover:glow-soft">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-[#E4EEF4] mb-3">
                For Newsrooms
              </h3>
              <p className="text-[#C8D8E4]/70 mb-6 leading-relaxed">
                Join our network of verified publishers. Get your content analyzed, 
                earn trust badges, and reach readers who value transparency.
              </p>
              <Link href="/join" className="btn-secondary text-sm">
                Partner With Us
              </Link>
            </div>

            {/* For Readers */}
            <div className="glass-card p-8 hover:glow-soft">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-[#E4EEF4] mb-3">
                For Readers
              </h3>
              <p className="text-[#C8D8E4]/70 mb-6 leading-relaxed">
                Take control of your news diet. Understand what you&apos;re reading, 
                where it comes from, and make informed decisions.
              </p>
              <Link href="https://wallnews.com" className="btn-primary text-sm" target="_blank">
                Try WallNews Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
