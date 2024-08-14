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
  skills?: Skill[]
}

export type DataItem = {
  id: string
  name: string
  layout?: "slim"
  groups: {
    title?: string
    titleColor?: number
    skills: Skill[]
  }[]
}
