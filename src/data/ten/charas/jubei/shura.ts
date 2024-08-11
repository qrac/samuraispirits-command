import type { DataItem } from "../../../../types"

export const tenJubeiShura: DataItem = {
  id: "ten-jubei-shura",
  name: "柳生十兵衛（修羅）",
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
          command: "→+斬連打",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "絶 水月刀",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
