'use client';

import React from 'react';

export default function BackgroundGlobe() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Stars */}
      <div className="stars-bg" />
      
      {/* Animated Globe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 400 400"
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-20 animate-rotate-slow"
        >
          <defs>
            {/* Gradient for globe */}
            <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D0F0FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#A8D4E6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8EC8DC" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Glow filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Main circle */}
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="url(#globeGradient)"
            strokeWidth="1"
            filter="url(#glow)"
          />
          
          {/* Latitude lines */}
          {[0.3, 0.5, 0.7, 0.9].map((scale, i) => (
            <ellipse
              key={`lat-${i}`}
              cx="200"
              cy="200"
              rx={150 * scale}
              ry={150 * scale * 0.3}
              fill="none"
              stroke="#A8D4E6"
              strokeWidth="0.5"
              opacity={0.3 - i * 0.05}
            />
          ))}
          
          {/* Longitude lines */}
          {[0, 30, 60, 90, 120, 150].map((angle, i) => (
            <ellipse
              key={`lon-${i}`}
              cx="200"
              cy="200"
              rx="40"
              ry="150"
              fill="none"
              stroke="#A8D4E6"
              strokeWidth="0.5"
              opacity={0.25}
              transform={`rotate(${angle} 200 200)`}
            />
          ))}
          
          {/* Orbiting ring */}
          <ellipse
            cx="200"
            cy="200"
            rx="180"
            ry="60"
            fill="none"
            stroke="#D0F0FF"
            strokeWidth="0.8"
            strokeDasharray="10 5"
            opacity="0.4"
            transform="rotate(-20 200 200)"
          />
          
          {/* Trust nodes - representing connected news sources */}
          {[0, 72, 144, 216, 288].map((angle, i) => {
            const x = 200 + 150 * Math.cos((angle * Math.PI) / 180);
            const y = 200 + 150 * Math.sin((angle * Math.PI) / 180);
            return (
              <g key={`node-${i}`}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#D0F0FF"
                  opacity="0.6"
                  filter="url(#glow)"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill="none"
                  stroke="#A8D4E6"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </g>
            );
          })}
          
          {/* Center core */}
          <circle
            cx="200"
            cy="200"
            r="20"
            fill="url(#globeGradient)"
            opacity="0.4"
            filter="url(#glow)"
          />
          <circle
            cx="200"
            cy="200"
            r="8"
            fill="#D0F0FF"
            opacity="0.6"
          />
        </svg>
      </div>
      
      {/* Ambient gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, #0A1628 70%)'
        }}
      />
    </div>
  );
}
