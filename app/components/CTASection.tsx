'use client'

import { ArrowUpRight } from 'lucide-react'
import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || "Let's make something remarkable."
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Start a Project'

  return (
    <section className="relative bg-primary-950 py-32 md:py-40 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-500/5 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-px bg-accent-500" />
          <span className="text-accent-400 text-sm font-semibold tracking-[0.2em] uppercase">
            Ready?
          </span>
          <div className="w-12 h-px bg-accent-500" />
        </div>

        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-12">
          {title}
        </h2>

        <a
          href="/contact"
          className="group inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-400 text-white px-10 py-5 text-base font-bold tracking-wide uppercase transition-all duration-300 hover:gap-4"
        >
          {primaryLabel}
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <p className="text-primary-500 text-sm mt-8">
          No commitment needed. We love talking shop.
        </p>
      </div>
    </section>
  )
}
