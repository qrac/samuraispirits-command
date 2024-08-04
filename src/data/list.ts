import zan from "./zan"
import zanHaoumaruShura from "./zan/haoumaru/shura"
import zanHaoumaruRasetsu from "./zan/haoumaru/rasetsu"

type DataItem = {
  id: string
  name: string
  groups: {
    title?: string
    titleColor?: string
    list: {
      name: string
      command: string
    }[]
  }[]
}

export default [zan, zanHaoumaruShura, zanHaoumaruRasetsu] as DataItem[]
