import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - News Trust Insights & Updates',
  description: 'Stay updated on the latest in news transparency, AI journalism ethics, and trust indicators. Insights from the WallNews team.',
  keywords: ['news trust blog', 'AI journalism', 'media transparency', 'trust indicators updates'],
};

// Sample blog posts (placeholder data)
const blogPosts = [
  {
    id: 1,
    slug: 'introducing-wallnews-trust-hub',
    title: 'Introducing the WallNews Trust Hub: A New Standard for AI Journalism',
    excerpt: 'Today we launch our Trust Hub, bringing unprecedented transparency to AI-powered news curation. Here\'s what it means for readers and publishers.',
    category: 'Announcement',
    date: 'January 2, 2026',
    readTime: '5 min read',
    image: '/blog/trust-hub-launch.jpg',
    featured: true,
  },
  {
    id: 2,
    slug: 'understanding-bias-scores',
    title: 'How We Calculate Bias Scores: A Deep Dive into Our AI',
    excerpt: 'Bias detection is complex. We break down the methodology behind our 0-10 bias scoring system and the AI models that power it.',
    category: 'Technology',
    date: 'December 28, 2025',
    readTime: '8 min read',
    image: '/blog/bias-scores.jpg',
    featured: false,
  },
  {
    id: 3,
    slug: 'building-trust-indicators',
    title: 'How We Built Our 8 Trust Indicators',
    excerpt: 'The journey of developing transparent metrics that help readers understand news quality and bias.',
    category: 'Development',
    date: 'December 20, 2025',
    readTime: '4 min read',
    image: '/blog/indicators.jpg',
    featured: false,
  },
  {
    id: 4,
    slug: 'multi-source-verification',
    title: 'Why 3+ Sources Matter: The Science of News Verification',
    excerpt: 'Research shows multi-source verification dramatically improves accuracy. Here\'s why we require minimum 3 sources for major stories.',
    category: 'Research',
    date: 'December 15, 2025',
    readTime: '6 min read',
    image: '/blog/verification.jpg',
    featured: false,
  },
  {
    id: 5,
    slug: 'ai-transparency-manifesto',
    title: 'Our AI Transparency Manifesto: 10 Principles We Live By',
    excerpt: 'Unlike black-box algorithms, we believe in radical transparency. These 10 principles guide every decision we make.',
    category: 'Values',
    date: 'December 10, 2025',
    readTime: '7 min read',
    image: '/blog/manifesto.jpg',
    featured: false,
  },
  {
    id: 6,
    slug: 'future-of-journalism-ai',
    title: 'The Future of Journalism in the Age of AI: Threat or Opportunity?',
    excerpt: 'AI is transforming journalism. We argue it\'s an opportunity—if we build trust infrastructure now.',
    category: 'Opinion',
    date: 'December 5, 2025',
    readTime: '10 min read',
    image: '/blog/future-ai.jpg',
    featured: false,
  },
];

const categories = ['All', 'Announcement', 'Technology', 'Partnership', 'Research', 'Values', 'Opinion'];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button mb-6">
            <span className="text-sm text-[#A8D4E6]">Insights & Updates</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#E4EEF4] mb-6">
            Trust <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-lg text-[#C8D8E4]/80 leading-relaxed max-w-2xl mx-auto">
            Insights on AI journalism, transparency practices, and the future of trustworthy news.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-all
                          ${category === 'All' 
                            ? 'bg-[#A8D4E6] text-[#0A1628] font-medium' 
                            : 'glass-button text-[#C8D8E4] hover:text-[#D0F0FF]'
                          }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <Link href={`/blog/${featuredPost.slug}`} className="block glass-card overflow-hidden group">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image placeholder */}
                <div className="h-64 md:h-auto bg-gradient-to-br from-[#142640] to-[#0D1E33] 
                              flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A8D4E6]/10 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-6xl opacity-30">📰</span>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium 
                                   bg-[#A8D4E6] text-[#0A1628]">
                      Featured
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-[#142640] text-[#A8D4E6]">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-[#C8D8E4]/50">{featuredPost.date}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#E4EEF4] mb-4 
                               group-hover:text-[#D0F0FF] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#C8D8E4]/70 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#C8D8E4]/50">{featuredPost.readTime}</span>
                    <span className="text-[#A8D4E6] text-sm font-medium group-hover:text-[#D0F0FF] 
                                   flex items-center gap-1 transition-colors">
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="glass-card overflow-hidden group flex flex-col"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#142640] to-[#0D1E33] 
                              flex items-center justify-center relative">
                  <span className="text-4xl opacity-30">📄</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A8D4E6]/10 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 rounded-full text-xs bg-[#142640] text-[#A8D4E6]">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#C8D8E4]/50">{post.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#E4EEF4] mb-2 
                               group-hover:text-[#D0F0FF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#C8D8E4]/60 mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#A8D4E6]/10">
                    <span className="text-xs text-[#C8D8E4]/50">{post.readTime}</span>
                    <span className="text-[#A8D4E6] text-sm font-medium">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 md:p-10 text-center glow-soft">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#D0F0FF] to-[#A8D4E6] 
                          flex items-center justify-center">
              <svg className="w-7 h-7 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-[#E4EEF4] mb-3">
              Stay in the Loop
            </h2>
            <p className="text-[#C8D8E4]/70 mb-6">
              Get weekly insights on news transparency and AI journalism delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="input-glass flex-1"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-[#C8D8E4]/40 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
