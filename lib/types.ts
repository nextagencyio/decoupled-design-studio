// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename?: string
  id: string
  title: string
  path: string
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Project
export interface DrupalProject extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  projectCategory?: DrupalTerm[]
  clientName?: string
  completionYear?: string
  image?: DrupalImage
  gallery?: DrupalImage[]
}

export interface ProjectsData {
  nodeProjects: {
    nodes: DrupalProject[]
  }
}

// Service
export interface DrupalService extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  serviceDiscipline?: DrupalTerm[]
  iconName?: string
  image?: DrupalImage
}

export interface ServicesData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

// Team Member
export interface DrupalTeamMember extends DrupalNode {
  body?: {
    processed: string
  }
  position?: string
  specialties?: string[]
  email?: string
  photo?: DrupalImage
}

export interface TeamMembersData {
  nodeTeamMembers: {
    nodes: DrupalTeamMember[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
