'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navigationItems = [
  { name: 'Projects', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) {
        return item.name
      }
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-primary-950/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <Link
            href="/"
            className="font-heading text-xl font-black tracking-tight text-white hover:text-accent-400 transition-colors duration-200 uppercase"
          >
            Form & Function
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'text-sm font-medium tracking-wide uppercase transition-colors duration-200',
                  activeTab === item.name
                    ? 'text-accent-400'
                    : 'text-primary-300 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-accent-500 hover:bg-accent-400 text-white px-5 py-2.5 text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:gap-2.5"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-white hover:text-accent-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-white/10">
            <nav className="flex flex-col pt-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    'text-sm font-medium tracking-wide uppercase transition-colors duration-200',
                    activeTab === item.name
                      ? 'text-accent-400'
                      : 'text-primary-300 hover:text-white'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 bg-accent-500 text-white px-5 py-2.5 text-sm font-semibold tracking-wide uppercase w-fit"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
