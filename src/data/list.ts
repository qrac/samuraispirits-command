import zan from "./zan"
import zanHaoumaruShura from "./zan/haoumaru/shura"
import zanHaoumaruRasetsu from "./zan/haoumaru/rasetsu"
import zanNakoruruShura from "./zan/nakoruru/shura"
import zanNakoruruRasetsu from "./zan/nakoruru/rasetsu"

type DataItem = {
  id: string
  name: string
  groups: {
    title?: string
    titleColor?: string
    list: {
      name: string
      command: string
      list?: {
        name: string
        command: string
      }[]
    }[]
  }[]
}

export default [
  zan,
  zanHaoumaruShura,
  zanHaoumaruRasetsu,
  zanNakoruruShura,
  zanNakoruruRasetsu,
] as DataItem[]
