'use client'

import { ArrowDownRight } from 'lucide-react'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'We design what others talk about.'
  const subtitle = (homepageContent as any)?.heroSubtitle || 'Brand, digital, and experience design for companies that refuse to blend in.'
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-primary-950">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=2000&q=80&fit=crop"
          alt="Design workspace"
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-950/70 to-primary-950" />
      </div>

      {/* Decorative accent stripe */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-600" />

      {/* Decorative floating shapes */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="absolute bottom-1/3 left-[5%] w-48 h-48 rounded-full bg-accent-500/5 blur-2xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-40 md:pb-32 md:pt-48">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-accent-500" />
              <span className="text-accent-400 text-sm font-semibold tracking-[0.2em] uppercase">
                Design Studio
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95]">
              {title.split('.').length > 1 ? (
                <>
                  {title.split('.')[0]}.
                  <span className="text-accent-400">{title.split('.').slice(1).join('.')}</span>
                </>
              ) : (
                title
              )}
            </h1>

            {subtitle && (
              <p className="text-lg md:text-xl text-primary-300 mt-8 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            {description && !subtitle && (
              <div
                className="text-lg md:text-xl text-primary-300 mt-8 max-w-2xl leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            <div className="flex flex-wrap gap-4 mt-12">
              <a
                href="/work"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white px-8 py-4 text-sm font-bold tracking-wide uppercase transition-all duration-200 hover:gap-3"
              >
                View Our Work
                <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 text-sm font-bold tracking-wide uppercase hover:border-accent-400 hover:text-accent-400 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-6 text-right">
            <div>
              <p className="text-4xl font-heading font-black text-white">150+</p>
              <p className="text-sm text-primary-400 mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-black text-white">12</p>
              <p className="text-sm text-primary-400 mt-1">Years of Craft</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-black text-white">40+</p>
              <p className="text-sm text-primary-400 mt-1">Awards Won</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
    </section>
  )
}
