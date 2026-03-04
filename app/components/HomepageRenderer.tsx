'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Palette, Layout, Layers, Monitor, Pen, ArrowRight } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const capabilities = [
  { icon: Palette, title: 'Brand Identity', description: 'Visual systems that define and distinguish' },
  { icon: Layout, title: 'Web Design', description: 'Digital experiences built for clarity and impact' },
  { icon: Layers, title: 'Design Systems', description: 'Scalable component libraries and guidelines' },
  { icon: Monitor, title: 'UI/UX Design', description: 'Interfaces shaped by research and intuition' },
  { icon: Pen, title: 'Art Direction', description: 'Creative vision from concept to execution' },
  { icon: ArrowRight, title: 'Strategy', description: 'Purpose-driven design thinking and planning' },
]

const selectedWork = [
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80&fit=crop', alt: 'Branding project', label: 'Lumina Rebrand' },
  { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&fit=crop', alt: 'Web design project', label: 'Arch Digital' },
  { src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80&fit=crop', alt: 'UI design mockup', label: 'Nocturn App' },
  { src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&q=80&fit=crop', alt: 'Design system', label: 'Horizon DS' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary-950 mb-16 tracking-tight">
            What we do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {capabilities.map((cap) => {
              const IconComponent = cap.icon
              return (
                <div key={cap.title} className="group">
                  <IconComponent className="w-5 h-5 text-accent-500 mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg font-semibold text-primary-950 mb-1">{cap.title}</h3>
                  <p className="text-primary-400 text-sm leading-relaxed">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary-950 mb-16 tracking-tight">
            Selected work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedWork.map((work, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <p className="text-sm text-primary-400">{work.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <footer className="bg-white border-t border-primary-100 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-400">
              &copy; {new Date().getFullYear()} Form &amp; Function Studio &middot; Portland, OR
            </p>
            <div className="flex items-center space-x-6 text-sm text-primary-400">
              <Link href="/projects" className="hover:text-primary-900 transition-colors">Work</Link>
              <Link href="/services" className="hover:text-primary-900 transition-colors">Services</Link>
              <Link href="/team" className="hover:text-primary-900 transition-colors">Team</Link>
              <Link href="/contact" className="hover:text-primary-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
