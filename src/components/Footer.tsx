import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#A8D4E6]/10 mt-20">
      <div className="glass-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10">
                  <svg viewBox="0 0 50 50" className="w-full h-full">
                    <defs>
                      <linearGradient id="footerGlobeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D0F0FF" />
                        <stop offset="50%" stopColor="#A8D4E6" />
                        <stop offset="100%" stopColor="#8EC8DC" />
                      </linearGradient>
                    </defs>
                    <circle cx="25" cy="25" r="20" fill="none" stroke="url(#footerGlobeGrad)" strokeWidth="1.5" />
                    <ellipse cx="25" cy="25" rx="15" ry="6" fill="none" stroke="#A8D4E6" strokeWidth="0.8" opacity="0.6" />
                    <text x="25" y="30" textAnchor="middle" fill="url(#footerGlobeGrad)" fontSize="16" fontWeight="bold" fontFamily="Orbitron">W</text>
                  </svg>
                </div>
                <div>
                  <span className="font-display text-lg font-bold text-gradient">WallNews</span>
                  <span className="block text-[10px] text-[#A8D4E6] tracking-widest">TRUST HUB</span>
                </div>
              </div>
              <p className="text-sm text-[#C8D8E4]/70 leading-relaxed">
                Building transparency in AI-powered news through open standards and community trust.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-sm font-semibold text-[#D0F0FF] mb-4">Explore</h4>
              <ul className="space-y-2">
                {['Trust Indicators', 'How It Works', 'Blog', 'FAQ'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-sm text-[#C8D8E4]/70 hover:text-[#A8D4E6] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-display text-sm font-semibold text-[#D0F0FF] mb-4">Community</h4>
              <ul className="space-y-2">
                {['Join Partnership', 'Newsrooms', 'Developers', 'Research'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-sm text-[#C8D8E4]/70 hover:text-[#A8D4E6] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-display text-sm font-semibold text-[#D0F0FF] mb-4">Connect</h4>
              <div className="flex gap-3 mb-4">
                {/* X/Twitter */}
                <a
                  href="https://x.com/willwallnews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-button flex items-center justify-center
                           hover:border-[#A8D4E6]/50 transition-colors"
                  aria-label="Follow on X"
                >
                  <svg className="w-5 h-5 text-[#A8D4E6]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/wallnews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-button flex items-center justify-center
                           hover:border-[#A8D4E6]/50 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-[#A8D4E6]" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/wallnews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-button flex items-center justify-center
                           hover:border-[#A8D4E6]/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-[#A8D4E6]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <Link href="/contact" className="text-sm text-[#A8D4E6] hover:text-[#D0F0FF] transition-colors">
                Contact Us →
              </Link>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-[#A8D4E6]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#C8D8E4]/50">
              © {new Date().getFullYear()} WallNews Trust Hub. Inspired by{' '}
              <a href="https://thetrustproject.org" target="_blank" rel="noopener noreferrer" className="text-[#A8D4E6] hover:underline">
                The Trust Project
              </a>
              .
            </p>
            <div className="flex gap-6 text-xs text-[#C8D8E4]/50">
              <Link href="/privacy" className="hover:text-[#A8D4E6] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[#A8D4E6] transition-colors">Terms</Link>
              <Link href="/accessibility" className="hover:text-[#A8D4E6] transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
