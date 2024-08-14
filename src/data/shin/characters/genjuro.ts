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
          command: "↓↘→+斬（3回まで）",
        },
      ],
    },
    {
      title: "特殊技",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "→↘↓↙←→←+B",
        },
      ],
    },
    {
      title: "武器飛ばし",
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
