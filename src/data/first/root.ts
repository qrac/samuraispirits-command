import type { DataItem } from "../../types"

export const firstRoot: DataItem = {
  id: "first-root",
  name: "基本操作（初サム）",
  layout: "slim",
  groups: [
    {
      skills: [
        {
          name: "弱斬り",
          command: "A",
        },
        {
          name: "中斬り",
          command: "B",
        },
        {
          name: "強斬り",
          command: "AB同時押し",
        },
        {
          name: "弱蹴り",
          command: "C",
        },
        {
          name: "中蹴り",
          command: "D",
        },
        {
          name: "強蹴り",
          command: "CD同時押し",
        },
        {
          name: "防御崩し",
          command: "近距離で→ or ←+中 or 強攻撃",
        },
        {
          name: "踏み込み",
          command: "→→",
        },
        {
          name: "引き込み",
          command: "←←",
        },
      ],
    },
  ],
}
