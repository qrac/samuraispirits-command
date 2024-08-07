import zanRoot from "./zan/root"
import zanHaoumaruShura from "./zan/haoumaru/shura"
import zanHaoumaruRasetsu from "./zan/haoumaru/rasetsu"
import zanNakoruruShura from "./zan/nakoruru/shura"
import zanNakoruruRasetsu from "./zan/nakoruru/rasetsu"
import zanRimururuShura from "./zan/rimururu/shura"
import zanRimururuRasetsu from "./zan/rimururu/rasetsu"

export const dataList = [
  zanRoot,
  zanHaoumaruShura,
  zanHaoumaruRasetsu,
  zanNakoruruShura,
  zanNakoruruRasetsu,
  zanRimururuShura,
  zanRimururuRasetsu,
] as DataItem[]

export type DataItem = {
  id: string
  name: string
  layout?: "slim"
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
