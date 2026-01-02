'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/indicators', label: 'Trust Indicators' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/join', label: 'Join Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-panel border-b border-[#A8D4E6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* W + Globe Logo */}
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <svg viewBox="0 0 50 50" className="w-full h-full">
                  <defs>
                    <linearGradient id="headerGlobeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D0F0FF" />
                      <stop offset="50%" stopColor="#A8D4E6" />
                      <stop offset="100%" stopColor="#8EC8DC" />
                    </linearGradient>
                  </defs>
                  {/* Globe circle */}
                  <circle cx="25" cy="25" r="20" fill="none" stroke="url(#headerGlobeGrad)" strokeWidth="1.5" />
                  {/* Latitude lines */}
                  <ellipse cx="25" cy="25" rx="15" ry="6" fill="none" stroke="#A8D4E6" strokeWidth="0.8" opacity="0.6" />
                  <ellipse cx="25" cy="25" rx="10" ry="4" fill="none" stroke="#A8D4E6" strokeWidth="0.6" opacity="0.4" />
                  {/* W letter */}
                  <text
                    x="25"
                    y="30"
                    textAnchor="middle"
                    fill="url(#headerGlobeGrad)"
                    fontSize="16"
                    fontWeight="bold"
                    fontFamily="Orbitron, sans-serif"
                  >
                    W
                  </text>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg md:text-xl font-bold text-gradient">
                  WallNews
                </span>
                <span className="text-[10px] md:text-xs text-[#A8D4E6] tracking-widest uppercase">
                  Trust Hub
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[#C8D8E4] hover:text-[#D0F0FF] 
                           transition-colors rounded-full hover:bg-[#A8D4E6]/10"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <Link href="/join" className="btn-primary text-sm">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg glass-button"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-[#A8D4E6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel border-t border-[#A8D4E6]/10">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-[#C8D8E4] hover:text-[#D0F0FF] 
                           hover:bg-[#A8D4E6]/10 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center btn-primary mt-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
