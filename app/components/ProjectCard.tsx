import Link from 'next/link'
import { DrupalProject } from '@/lib/types'

interface ProjectCardProps {
  item: DrupalProject
}

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group flex items-center justify-between py-6 border-b border-primary-200 transition-all duration-200 hover:pl-1"
    >
      <div className="flex items-baseline gap-4">
        <h3 className="text-lg font-medium text-primary-900 group-hover:text-accent-500 transition-colors duration-200">
          {item.title}
        </h3>
        {(item as any).clientName && (
          <span className="text-sm text-primary-400">{(item as any).clientName}</span>
        )}
      </div>
      <span className="text-sm text-primary-400 shrink-0 ml-4">
        View
      </span>
    </Link>
  )
}
