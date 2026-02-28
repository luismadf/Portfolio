import { ReactNode } from 'react'

// Project types
export interface ProjectImages {
  show: string
  desktop: string
  mobile: string
}

export interface ProjectInfo {
  shortDescription: string
  description: string
}

export interface Project {
  id: number
  name: string
  translationKey: string
  info: ProjectInfo
  images: ProjectImages
  buttonColor: string
  stack: string[]
  code: string
  live: string
}

// CV types
export interface SocialLink {
  name: string
  url: string
}

export interface Experience {
  companyName: string
  position: string
  time: string
  description?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Education {
  title: string
  description: string
  year?: string
}

export interface CVInfo {
  name: string
  lastName: string
  position: string
  image: string
  description: string
  social: SocialLink[]
  experience: Experience[]
  skills: SkillCategory[]
  education: Education[]
  languages: string[]
}

// Layout types
export interface LayoutProps {
  children: ReactNode
}

// Menu types
export interface FooterProps {
  menuItems?: MenuItem[]
}

export interface MenuItem {
  id: string
  text: string
  url: string
}

export interface MobileMenuItem {
  id: string
  text: string
  onClick: () => void
}
