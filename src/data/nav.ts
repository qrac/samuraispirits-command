import type { DataNav } from "../types"
import { firstNav } from "./first/nav"
import { shinNav } from "./shin/nav"
import { zanNav } from "./zan/nav"
import { tenNav } from "./ten/nav"

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
}
