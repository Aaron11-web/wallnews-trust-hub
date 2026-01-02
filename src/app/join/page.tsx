'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface PartnershipFormData {
  organizationType: string;
  organizationName: string;
  website: string;
  contactName: string;
  email: string;
  role: string;
  message: string;
  interests: string[];
}

// Partnership Types
const partnershipTypes = [
  {
    id: 'newsroom',
    title: 'Newsrooms & Publishers',
    description: 'Get your content analyzed and earn trust badges to build reader confidence.',
    icon: '📰',
    benefits: [
      'Trust badge certification',
      'Audience insights dashboard',
      'Priority content indexing',
      'Co-marketing opportunities',
    ],
  },
  {
    id: 'developer',
    title: 'Developers & Platforms',
    description: 'Integrate our Trust API into your apps to provide transparent news experiences.',
    icon: '💻',
    benefits: [
      'RESTful API access',
      'SDKs for major platforms',
      'Webhook notifications',
      'Developer support',
    ],
  },
  {
    id: 'researcher',
    title: 'Researchers & Academics',
    description: 'Access our data for media studies, AI research, and journalism innovation.',
    icon: '🔬',
    benefits: [
      'Research data access',
      'Collaboration opportunities',
      'Publication support',
      'Academic pricing',
    ],
  },
  {
    id: 'advertiser',
    title: 'Ethical Advertisers',
    description: 'Reach engaged audiences in brand-safe, verified content environments.',
    icon: '📊',
    benefits: [
      'Brand safety guarantee',
      'Contextual targeting',
      'Transparency reports',
      'Engaged audiences',
    ],
  },
];

export default function JoinPage() {
  const [selectedType, setSelectedType] = useState<string>('newsroom');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PartnershipFormData>();

  const onSubmit = async (data: PartnershipFormData) => {
    // Simulate API call (replace with EmailJS/Formspree in production)
    console.log('Partnership form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="glass-card p-12 text-center max-w-lg glow-soft">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 
                        flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-bold text-[#E4EEF4] mb-4">
            Application Received!
          </h2>
          <p className="text-[#C8D8E4]/70 mb-6">
            Thank you for your interest in joining the WallNews Trust Hub. 
            Our team will review your application and get back to you within 48 hours.
          </p>
          <a href="/" className="btn-secondary">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button mb-6">
            <span className="text-sm text-[#A8D4E6]">Partnership Program</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#E4EEF4] mb-6">
            Join the <span className="text-gradient">Trust Movement</span>
          </h1>
          <p className="text-lg text-[#C8D8E4]/80 leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re a newsroom, developer, researcher, or ethical advertiser, 
            there&apos;s a place for you in building the future of trustworthy journalism.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnershipTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`text-left p-6 rounded-2xl transition-all duration-300
                          ${selectedType === type.id 
                            ? 'glass-card glow-soft border-[#A8D4E6]/40' 
                            : 'glass-panel hover:border-[#A8D4E6]/20'
                          }`}
              >
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className={`font-display text-lg font-semibold mb-2
                              ${selectedType === type.id ? 'text-[#D0F0FF]' : 'text-[#E4EEF4]'}`}>
                  {type.title}
                </h3>
                <p className="text-sm text-[#C8D8E4]/60 line-clamp-2">
                  {type.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Type Benefits + Form */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="glass-card p-8">
              <h2 className="font-display text-2xl font-bold text-[#E4EEF4] mb-2">
                {partnershipTypes.find(t => t.id === selectedType)?.title}
              </h2>
              <p className="text-[#C8D8E4]/70 mb-6">
                {partnershipTypes.find(t => t.id === selectedType)?.description}
              </p>
              
              <h3 className="text-sm font-semibold text-[#A8D4E6] mb-4 uppercase tracking-wide">
                Partnership Benefits
              </h3>
              <ul className="space-y-3">
                {partnershipTypes.find(t => t.id === selectedType)?.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#A8D4E6]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#A8D4E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#E4EEF4]">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Testimonial placeholder */}
              <div className="mt-8 p-4 rounded-xl bg-[#142640]/50 border border-[#A8D4E6]/10">
                <p className="text-sm text-[#C8D8E4]/70 italic mb-2">
                  &ldquo;WallNews Trust Hub has transformed how our readers perceive our content. 
                  The trust badge gives them confidence in our journalism.&rdquo;
                </p>
                <p className="text-xs text-[#A8D4E6]">— Partner Newsroom (Coming Soon)</p>
              </div>
            </div>

            {/* Form */}
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-bold text-[#E4EEF4] mb-6">
                Apply for Partnership
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <input type="hidden" {...register('organizationType')} value={selectedType} />
                
                <div>
                  <label className="block text-sm text-[#C8D8E4] mb-2">Organization Name *</label>
                  <input
                    type="text"
                    {...register('organizationName', { required: 'Organization name is required' })}
                    className="input-glass"
                    placeholder="Your organization"
                  />
                  {errors.organizationName && (
                    <p className="text-red-400 text-xs mt-1">{errors.organizationName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-[#C8D8E4] mb-2">Website</label>
                  <input
                    type="url"
                    {...register('website')}
                    className="input-glass"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#C8D8E4] mb-2">Contact Name *</label>
                    <input
                      type="text"
                      {...register('contactName', { required: 'Contact name is required' })}
                      className="input-glass"
                      placeholder="Your name"
                    />
                    {errors.contactName && (
                      <p className="text-red-400 text-xs mt-1">{errors.contactName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-[#C8D8E4] mb-2">Role</label>
                    <input
                      type="text"
                      {...register('role')}
                      className="input-glass"
                      placeholder="Editor, Developer, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#C8D8E4] mb-2">Email *</label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="input-glass"
                    placeholder="you@organization.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-[#C8D8E4] mb-2">Tell us about your interest</label>
                  <textarea
                    {...register('message')}
                    className="input-glass min-h-[120px] resize-none"
                    placeholder="What are you hoping to achieve with the Trust Hub partnership?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>

                <p className="text-xs text-[#C8D8E4]/50 text-center">
                  By submitting, you agree to our privacy policy. We&apos;ll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-[#E4EEF4] mb-4">
            Questions? We&apos;ve Got <span className="text-gradient">Answers</span>
          </h2>
          <p className="text-[#C8D8E4]/70 mb-8">
            Check our FAQ or reach out directly—we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/faq" className="btn-secondary">View FAQ</a>
            <a href="/contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
