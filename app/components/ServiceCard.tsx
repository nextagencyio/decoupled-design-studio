import Link from 'next/link'
import { DrupalService } from '@/lib/types'

interface ServiceCardProps {
  item: DrupalService
}

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group flex items-center justify-between py-6 border-b border-primary-200 transition-all duration-200 hover:pl-1"
    >
      <h3 className="text-lg font-medium text-primary-900 group-hover:text-accent-500 transition-colors duration-200">
        {item.title}
      </h3>
      <span className="text-sm text-primary-400 shrink-0 ml-4">
        {(item as any).iconName || 'View'}
      </span>
    </Link>
  )
}
