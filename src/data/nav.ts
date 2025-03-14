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
import { senNav } from "./sen/nav"
import { reiNav } from "./rei/nav"

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
  ...senNav,
  ...reiNav,
  ...{
    source: {
      name: "資料",
      fullName: "参考資料・検証環境など",
      category: "Source Materials",
    },
  },
}
