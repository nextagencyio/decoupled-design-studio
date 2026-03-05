'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  if (!stats || stats.length === 0) return null

  return (
    <section className="bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-wrap items-center justify-start gap-x-8 gap-y-4">
            {stats.map((stat: any, i: number) => (
              <span key={stat.id || i} className="flex items-center gap-x-3">
                {i > 0 && <span className="text-accent-500/40 text-lg">/</span>}
                <span className="font-heading font-black text-2xl text-white">{stat.value || stat.statValue}</span>
                <span className="text-sm text-primary-400">{stat.label || stat.statLabel || stat.title}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
