import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_SERVICES } from '@/lib/queries'
import { ServicesData } from '@/lib/types'
import Header from '../components/Header'
import ServiceCard from '../components/ServiceCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Services | Design Studio',
  description: 'Browse our services.',
}

async function getServices() {
  try {
    const client = getClient()
    const data = await client.raw(GET_SERVICES, { first: 50 })
    return data?.nodeServices?.nodes || []
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export default async function ServicesPage() {
  const items = await getServices()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-primary-950">
            Services
          </h1>
          <div className="border-b border-primary-200 mt-8"></div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="py-16">
              <p className="text-primary-400 text-sm">No services yet.</p>
            </div>
          ) : (
            <div className="flex flex-col">
              {items.map((item: any) => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
