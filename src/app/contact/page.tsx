'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Contact methods
const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    description: 'For general inquiries',
    value: 'trust@wallnews.com',
    link: 'mailto:trust@wallnews.com',
  },
  {
    icon: '𝕏',
    title: 'X (Twitter)',
    description: 'Follow for updates',
    value: '@willwallnews',
    link: 'https://x.com/willwallnews',
  },
  {
    icon: '💼',
    title: 'Partnerships',
    description: 'For business inquiries',
    value: 'partners@wallnews.com',
    link: 'mailto:partners@wallnews.com',
  },
  {
    icon: '🐛',
    title: 'Bug Reports',
    description: 'Found an issue?',
    value: 'GitHub Issues',
    link: 'https://github.com/wallnews/trust-hub/issues',
  },
];

// FAQ items
const faqs = [
  {
    question: 'How accurate are your bias scores?',
    answer: 'Our bias detection model achieves 94% accuracy on benchmark datasets. We continuously improve by incorporating user feedback and new training data.',
  },
  {
    question: 'Can I integrate your trust indicators into my app?',
    answer: 'Yes! We offer a REST API for developers. Apply through our Join page to get API access.',
  },
  {
    question: 'How do you handle corrections when you\'re wrong?',
    answer: 'Transparency includes admitting mistakes. All corrections are logged publicly and trust scores are adjusted accordingly.',
  },
  {
    question: 'Is WallNews free to use?',
    answer: 'Yes, WallNews is free for readers. We offer premium features for publishers and developers through our partnership program.',
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button mb-6">
            <span className="text-sm text-[#A8D4E6]">Get in Touch</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#E4EEF4] mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-lg text-[#C8D8E4]/80 leading-relaxed max-w-2xl mx-auto">
            Have questions about trust indicators, partnerships, or just want to say hi? 
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card p-5 text-center hover:glow-soft transition-all group"
              >
                <div className="text-2xl mb-2">{method.icon}</div>
                <h3 className="font-display text-sm font-semibold text-[#E4EEF4] mb-1 
                             group-hover:text-[#D0F0FF] transition-colors">
                  {method.title}
                </h3>
                <p className="text-xs text-[#C8D8E4]/50 mb-2">{method.description}</p>
                <p className="text-sm text-[#A8D4E6]">{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + FAQ */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="glass-card p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 
                                flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#E4EEF4] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#C8D8E4]/70 mb-4">
                    We&apos;ll get back to you within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-xl font-bold text-[#E4EEF4] mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-[#C8D8E4] mb-2">Name *</label>
                        <input
                          type="text"
                          {...register('name', { required: 'Name is required' })}
                          className="input-glass"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-[#C8D8E4] mb-2">Email *</label>
                        <input
                          type="email"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email'
                            }
                          })}
                          className="input-glass"
                          placeholder="you@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[#C8D8E4] mb-2">Subject</label>
                      <select
                        {...register('subject')}
                        className="input-glass"
                      >
                        <option value="">Select a topic...</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership Interest</option>
                        <option value="api">API Access</option>
                        <option value="press">Press/Media</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-[#C8D8E4] mb-2">Message *</label>
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        className="input-glass min-h-[150px] resize-none"
                        placeholder="How can we help?"
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-xl font-bold text-[#E4EEF4] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="glass-card overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between"
                    >
                      <span className="font-medium text-[#E4EEF4] pr-4">{faq.question}</span>
                      <svg 
                        className={`w-5 h-5 text-[#A8D4E6] flex-shrink-0 transition-transform
                                  ${openFaq === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === index && (
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-[#C8D8E4]/70 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional Links */}
              <div className="mt-8 p-6 glass-panel rounded-xl">
                <h3 className="font-display text-sm font-semibold text-[#A8D4E6] mb-4">
                  More Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/how-it-works" className="text-[#C8D8E4]/70 hover:text-[#D0F0FF] text-sm flex items-center gap-2">
                      <span>→</span> How our AI works
                    </a>
                  </li>
                  <li>
                    <a href="/indicators" className="text-[#C8D8E4]/70 hover:text-[#D0F0FF] text-sm flex items-center gap-2">
                      <span>→</span> Trust Indicators explained
                    </a>
                  </li>
                  <li>
                    <a href="/join" className="text-[#C8D8E4]/70 hover:text-[#D0F0FF] text-sm flex items-center gap-2">
                      <span>→</span> Partnership opportunities
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-[#C8D8E4]/70 hover:text-[#D0F0FF] text-sm flex items-center gap-2">
                      <span>→</span> Latest blog posts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 text-center">
            <p className="text-[#C8D8E4]/50 text-sm mb-2">🌍 We&apos;re a distributed team</p>
            <p className="text-[#C8D8E4]/70">
              Working from Paris, San Francisco, London, and beyond to build trustworthy news infrastructure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
