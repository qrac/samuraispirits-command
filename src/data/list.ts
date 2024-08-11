import type { DataItem } from "../types"
import { zanList } from "./zan/list"
import { tenList } from "./ten/list"

export const dataList = [...zanList, ...tenList] as DataItem[]
