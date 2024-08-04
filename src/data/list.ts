import zan from "./zan"
import zanHaoumaruShura from "./zan/haoumaru/shura"

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

export default [zan, zanHaoumaruShura] as DataItem[]
