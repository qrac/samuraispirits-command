import type { DataItem } from "../types"

import { zanRoot } from "./zan/root"
import { zanHaoumaruShura } from "./zan/haoumaru/shura"
import { zanHaoumaruRasetsu } from "./zan/haoumaru/rasetsu"
import { zanNakoruruShura } from "./zan/nakoruru/shura"
import { zanNakoruruRasetsu } from "./zan/nakoruru/rasetsu"
import { zanRimururuShura } from "./zan/rimururu/shura"
import { zanRimururuRasetsu } from "./zan/rimururu/rasetsu"
import { zanShizumaruShura } from "./zan/shizumaru/shura"
import { zanShizumaruRasetsu } from "./zan/shizumaru/rasetsu"

export const dataList = [
  zanRoot,
  zanHaoumaruShura,
  zanHaoumaruRasetsu,
  zanNakoruruShura,
  zanNakoruruRasetsu,
  zanRimururuShura,
  zanRimururuRasetsu,
  zanShizumaruShura,
  zanShizumaruRasetsu,
] as DataItem[]
