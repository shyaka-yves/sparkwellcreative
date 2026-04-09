export interface Service {
  id: string
  title: string
  description: string
  icon: string
  category: string
  order: number
}

export interface Project {
  id: string
  title: string
  description: string
  image_url: string
  category: string
  client: string
  created_at: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image_url: string
  bio: string
  order: number
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  features: string[]
  is_popular: boolean
  order: number
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

export interface SiteContent {
  id: string
  section: string
  key: string
  value: string
}
