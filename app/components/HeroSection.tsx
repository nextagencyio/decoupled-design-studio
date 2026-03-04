'use client'

import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Welcome'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="bg-white py-32 md:py-48">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tight text-primary-950 leading-[0.9]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-primary-400 mt-8 max-w-xl">{subtitle}</p>
        )}
        {description && !subtitle && (
          <div className="text-lg text-primary-400 mt-8 max-w-xl" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </section>
  )
}
