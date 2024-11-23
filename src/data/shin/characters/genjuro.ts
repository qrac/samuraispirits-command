import type { DataItem } from "../../../types"

export const shinGenjuro: DataItem = {
  id: "shin-genjuro",
  name: "牙神幻十郎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "桜華斬",
          command: "↓↙←+斬",
        },
        {
          name: "桐覇 光翼刃",
          command: "→↓↘+斬",
        },
        {
          name: "三連殺",
          command: "↓↘→+斬",
          notes: ["3回まで連続入力可能"],
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "不動鬼返し",
          command: "近距離で→ or ←+中 or 強攻撃",
        },
        {
          name: "桐覇二段蹴り",
          command: "アースクェイクに対して投げ",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "→↘↓↙←→←+B",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "五光斬",
          command: "→↘↓↙←→+A",
        },
      ],
    },
  ],
}
