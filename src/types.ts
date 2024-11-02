export type DataNav = {
  [id: string]: {
    name: string
    fullName?: string
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

export type NavItem = [id: string, { name: string; fullName?: string }]

export type Skill = {
  name: string
  command: string
  notes?: string[]
  isShort?: boolean
  skills?: Skill[]
}

export type DataItem = {
  id: string
  name: string
  layout?: string
  groups: {
    title?: string
    titleColor?: number
    titleNote?: string
    layout?: string
    skills: Skill[]
  }[]
}
