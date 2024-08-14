import type { DataItem } from "../../../../types"

export const tenCharlotteShura: DataItem = {
  id: "ten-charlotte-shura",
  name: "シャルロット（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "トライスラッシュ",
          command: "↓↘→+斬（タメ可能）",
        },
        {
          name: "パワーグラデーション",
          command: "→↓↘+斬",
        },
        {
          name: "スプラッシュファーント",
          command: "→+斬連打",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "スプラッシュグラデーション",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
