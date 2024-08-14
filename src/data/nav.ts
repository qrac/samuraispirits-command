import type { DataNav } from "../types"
import { zanNav } from "./zan/nav"
import { tenNav } from "./ten/nav"

export const dataNav: DataNav = {
  ...{
    root: {
      name: "ホーム",
    },
  },
  ...zanNav,
  ...tenNav,
  ...{
    /*first: {
    name: "初サム",
    },*/
    /*shin: {
      name: "真サム",
    },*/
    /*zero: {
    name: "零サム",
    },*/
    /*zerosp: {
      name: "零SP",
    },*/
  },
}
