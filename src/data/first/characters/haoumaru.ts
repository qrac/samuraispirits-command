import type { DataItem } from "../../../types"

export const firstHaoumaru: DataItem = {
  id: "first-haoumaru",
  name: "覇王丸",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "奥義 旋風裂斬",
          command: "↓↘→+斬",
        },
        {
          name: "奥義 弧月斬",
          command: "→↙↓↘+斬",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "横投げ",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "真空巴投げ",
          command: "近距離で→ or ←+D or CD",
        },
      ],
    },
  ],
}
