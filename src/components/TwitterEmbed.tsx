'use client';

import { useEffect } from 'react';

interface TwitterEmbedProps {
  tweetUrl: string;
}

export default function TwitterEmbed({ tweetUrl }: TwitterEmbedProps) {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (existingScript) {
        // Don't remove - may be used by other components
      }
    };
  }, []);

  return (
    <div className="twitter-embed-container max-w-xl mx-auto">
      <blockquote 
        className="twitter-tweet" 
        data-theme="dark"
        data-dnt="true"
      >
        <a href={tweetUrl}>Loading tweet...</a>
      </blockquote>
    </div>
  );
}
