'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Palette, Layout, Layers, Monitor, Pen, ArrowRight, ArrowUpRight } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const capabilities = [
  { icon: Palette, title: 'Brand Identity', description: 'Visual systems that define and distinguish your brand from everything else in the market.' },
  { icon: Layout, title: 'Web Design', description: 'Digital experiences built for clarity, impact, and conversion at every breakpoint.' },
  { icon: Layers, title: 'Design Systems', description: 'Scalable component libraries and guidelines that keep teams aligned at speed.' },
  { icon: Monitor, title: 'UI/UX Design', description: 'Interfaces shaped by user research, intuition, and obsessive attention to detail.' },
  { icon: Pen, title: 'Art Direction', description: 'Creative vision from concept to execution across every touchpoint.' },
  { icon: ArrowRight, title: 'Strategy', description: 'Purpose-driven design thinking that connects business goals to user needs.' },
]

const selectedWork = [
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80&fit=crop', alt: 'Branding project', label: 'Lumina Rebrand', category: 'Brand Identity' },
  { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&fit=crop', alt: 'Web design project', label: 'Arch Digital', category: 'Web Design' },
  { src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80&fit=crop', alt: 'UI design mockup', label: 'Nocturn App', category: 'UI/UX Design' },
  { src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&q=80&fit=crop', alt: 'Design system', label: 'Horizon DS', category: 'Design Systems' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-primary-950">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Capabilities */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent-500" />
            <span className="text-accent-500 text-sm font-semibold tracking-[0.2em] uppercase">
              Capabilities
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-primary-950 tracking-tight">
              What we do
            </h2>
            <p className="text-primary-500 max-w-md text-lg">
              Full-spectrum design services for brands that demand excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const IconComponent = cap.icon
              return (
                <div
                  key={cap.title}
                  className="group relative p-8 border border-primary-100 rounded-none hover:border-accent-500/30 transition-all duration-300 hover:bg-primary-950 cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-accent-500 group-hover:w-full transition-all duration-500" />
                  <IconComponent className="w-6 h-6 text-accent-500 mb-5" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-bold text-primary-950 group-hover:text-white mb-3 transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-primary-500 group-hover:text-primary-300 text-sm leading-relaxed transition-colors duration-300">
                    {cap.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24 md:py-32 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent-500" />
            <span className="text-accent-400 text-sm font-semibold tracking-[0.2em] uppercase">
              Portfolio
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white tracking-tight">
              Selected work
            </h2>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 text-sm font-semibold tracking-wide uppercase transition-colors"
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedWork.map((work, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/20 transition-colors duration-500" />
                </div>
                <p className="text-xs text-accent-400 font-semibold tracking-[0.15em] uppercase mb-2">
                  {work.category}
                </p>
                <p className="text-xl font-heading font-bold text-white group-hover:text-accent-400 transition-colors duration-300">
                  {work.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Social proof band */}
      <section className="bg-accent-500 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-heading font-bold text-white leading-snug">
            &ldquo;Form & Function transformed our brand from forgettable to unmistakable. Their work speaks louder than any pitch deck.&rdquo;
          </blockquote>
          <p className="text-white/80 mt-6 text-sm font-medium tracking-wide uppercase">
            Sarah Chen, CEO at Lumina
          </p>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <footer className="bg-primary-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-heading text-lg font-bold text-white uppercase tracking-tight">
                Form & Function
              </p>
              <p className="text-sm text-primary-500 mt-1">
                Portland, OR
              </p>
            </div>
            <div className="flex items-center space-x-8 text-sm text-primary-400">
              <Link href="/work" className="hover:text-accent-400 transition-colors">Work</Link>
              <Link href="/services" className="hover:text-accent-400 transition-colors">Services</Link>
              <Link href="/team" className="hover:text-accent-400 transition-colors">Team</Link>
              <Link href="/contact" className="hover:text-accent-400 transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-primary-600">
              &copy; {new Date().getFullYear()} Form &amp; Function Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
