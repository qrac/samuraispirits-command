import type { DataNav } from "../types"
import { firstNav } from "./first/nav"
import { shinNav } from "./shin/nav"
import { zanNav } from "./zan/nav"
import { tenNav } from "./ten/nav"
import { zeroNav } from "./zero/nav"
import { zerospNav } from "./zerosp/nav"
import { kenNav } from "./ken/nav"
import { polyNav } from "./poly/nav"
import { asuraNav } from "./asura/nav"

export const dataNav: DataNav = {
  ...{
    root: {
      name: "ホーム",
    },
  },
  ...firstNav,
  ...shinNav,
  ...zanNav,
  ...tenNav,
  ...zeroNav,
  ...zerospNav,
  ...kenNav,
  ...polyNav,
  ...asuraNav,
}

export const dataNavOther = [
  {
    id: "source",
    fullName: "参考資料・検証環境など",
  },
]
