import type { DataItem } from "../types"
import { firstList } from "./first/list"
import { shinList } from "./shin/list"
import { zanList } from "./zan/list"
import { tenList } from "./ten/list"
import { zeroList } from "./zero/list"

export const dataList = [
  ...firstList,
  ...shinList,
  ...zanList,
  ...tenList,
  ...zeroList,
] as DataItem[]
