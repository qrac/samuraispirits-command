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

export const dataNav: DataNav = {
  root: {
    name: "ホーム",
  },
  /*first: {
    name: "初サム",
  },*/
  /*sin: {
    name: "真サム",
  },*/
  zan: {
    name: "斬サム",
    charas: {
      root: {
        name: "基本操作",
      },
      haoumaru: {
        name: "覇王丸",
        types: {
          shura: {
            name: "修羅",
          },
          rasetsu: {
            name: "羅刹",
          },
        },
      },
      nakoruru: {
        name: "ナコルル",
        types: {
          shura: {
            name: "修羅",
          },
          rasetsu: {
            name: "羅刹",
          },
        },
      },
      rimururu: {
        name: "リムルル",
        types: {
          shura: {
            name: "修羅",
          },
          rasetsu: {
            name: "羅刹",
          },
        },
      },
    },
  },
  /*ten: {
    name: "天サム",
  },*/
  /*zero: {
    name: "零サム",
  },*/
  /*zerosp: {
    name: "零SP",
  },*/
}
