import Header from '../components/Header'
import ErrorBoundary from '../components/ErrorBoundary'
import HomepageRenderer from '../components/HomepageRenderer'
import ResponsiveImage from '../components/ResponsiveImage'
import { headers } from 'next/headers'
import { Metadata } from 'next'
import { GET_NODE_BY_PATH } from '@/lib/queries'
import { getServerApolloClient } from '@/lib/apollo-client'

export const revalidate = 300

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params
  const path = `/${(resolvedParams.slug || []).join('/')}`
  try {
    const apollo = getServerApolloClient(await headers())
    const { data } = await apollo.query({ query: GET_NODE_BY_PATH, variables: { path } })
    const title = data?.route?.entity?.title || 'Page'
    return { title }
  } catch {
    return { title: 'Page' }
  }
}

function PageNotFound({ path }: { path: string }) {
  return (
    <div className="py-24">
      <h1 className="font-heading text-2xl font-bold text-primary-900 mb-4">Page Not Found</h1>
      <p className="text-primary-500 mb-2">We couldn&#39;t find any content at this path.</p>
      <p className="text-sm text-primary-400">Path: {path}</p>
    </div>
  )
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params
  const path = `/${(resolvedParams.slug || []).join('/')}`
  const apollo = getServerApolloClient(await headers())

  try {
    const { data } = await apollo.query({ query: GET_NODE_BY_PATH, variables: { path }, fetchPolicy: 'no-cache' })
    const entity = data?.route?.entity

    if (!entity) {
      return (
        <div className="min-h-screen bg-white">
          <Header />
          <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
            <PageNotFound path={path} />
          </main>
        </div>
      )
    }

    if (entity.__typename === 'NodeHomepage') {
      return <HomepageRenderer homepageContent={entity} />
    }

    const title = entity.title || 'Untitled'
    const bodyHtml = entity?.body?.processed || ''
    const image = entity?.image

    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <ErrorBoundary>
            <article>
              {image && (
                <div className="mb-8">
                  <ResponsiveImage
                    image={image}
                    alt={image.alt || title}
                    priority={true}
                  />
                </div>
              )}
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-950 mb-8">{title}</h1>
              {bodyHtml && (
                <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:tracking-tight prose-p:text-primary-600 prose-a:text-accent-500 prose-a:no-underline hover:prose-a:underline" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
              )}
            </article>
          </ErrorBoundary>
        </main>
      </div>
    )
  } catch (error) {
    console.error('Error loading page by path:', error)
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <PageNotFound path={path} />
        </main>
      </div>
    )
  }
}
