import type { DataItem } from "../../../types"

export const shinJubei: DataItem = {
  id: "shin-jubei",
  name: "柳生十兵衛",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "喝咄 水月刀",
          command: "↓↘→+斬",
        },
        {
          name: "二ッ角羅刀・改",
          command: "→↓↘+斬",
        },
        {
          name: "八相発破",
          command: "斬連打",
        },
        {
          name: "柳生 心眼刀",
          command: "↓↙←→+A",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "→↘↓↙←→←+D",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "絶 水月刀",
          command: "→↘↓↙←→+C",
        },
      ],
    },
  ],
}
