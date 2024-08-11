export type DataNav = {
  [id: string]: {
    name: string
    charas?: {
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

export type EntryDataNavItem = [id: string, { name: string }]

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
