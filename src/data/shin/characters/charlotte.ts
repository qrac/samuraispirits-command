import type { DataItem } from "../../../types"

export const shinCharlotte: DataItem = {
  id: "shin-charlotte",
  name: "シャルロット",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "トライスラッシュ",
          command: "→↓↘+斬",
        },
        {
          name: "パワーグラデーション",
          command: "↙↓↘+斬",
        },
        {
          name: "スプラッシュファーント",
          command: "斬連打",
        },
      ],
    },
    {
      title: "特殊技",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "↘↓↙←↓↙+D",
        },
      ],
    },
    {
      title: "武器破壊",
      titleColor: 2,
      skills: [
        {
          name: "スプラッシュグラデーション",
          command: "→↘↓↙←→+B",
        },
      ],
    },
  ],
}
