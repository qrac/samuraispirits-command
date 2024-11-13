import type { DataItem } from "../../../types"

export const zeroJubei: DataItem = {
  id: "zero-jubei",
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
          name: "二ッ角羅刀",
          command: "→↓↘+斬",
        },
        {
          name: "八相発破",
          command: "斬連打",
        },
        {
          name: "柳生 心眼刀・水月",
          command: "↓↙←+A",
        },
        {
          name: "柳生 心眼刀・相破",
          command: "↓↙←+B",
        },
        {
          name: "柳生 心眼刀・天羅",
          command: "↓↙←+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "絶 水月刀",
          command: "↓↘→+CD",
        },
      ],
    },
  ],
}
