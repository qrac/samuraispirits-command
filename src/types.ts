export type DataNav = {
  [id: string]: {
    name: string
    fullName?: string
    category?: string
    characters?: {
      [id: string]: {
        name: string
        types?: {
          [id: string]: {
            name: string
          }
        }
      }
    }
  }
}

export type NavItem = [
  id: string,
  {
    name: string
    fullName?: string
    category?: string
    characters?: {
      [id: string]: {
        name: string
        types?: {
          [id: string]: {
            name: string
          }
        }
      }
    }
  }
]

export type Tag = {
  name: string
  color?: number
}

export type Accordion = {
  normal: boolean
  combination: boolean
  scs: boolean
  unique: boolean
  mode: boolean
}

export type AccordionId = "normal" | "combination" | "scs" | "unique" | "mode"

export type Skill = {
  name: string
  tags?: Tag[]
  command: string
  notes?: string[]
  layout?: string
  skills?: Skill[]
}

export type Group = {
  title?: string
  titleColor?: number
  titleNote?: string
  layout?: string
  accordion?: AccordionId
  skills: Skill[]
}

export type Source = {
  title?: string
  links: {
    head?: string
    name: string
    href?: string
  }[]
}

export type DataItem = {
  id: string
  name: string
  layout?: string
  groups: Group[]
  sources?: Source[]
  rootSources?: Source[]
}

export type Breadcrumb = {
  name: string
  item: string
}

export type Route = {
  robots: boolean
  path: string
  url: string
  fileName: string
  type: string
  name: string
  description: string
  breadcrumbs: Breadcrumb[]
}

export type GetRoutes = () => Route[]
export type Render = (url: string) => Promise<string>
