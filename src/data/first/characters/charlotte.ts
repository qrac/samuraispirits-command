import type { DataItem } from "../../../types"

export const firstCharlotte: DataItem = {
  id: "first-charlotte",
  name: "シャルロット",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "パワーグラデーション",
          command: "→↓↘+斬",
        },
        {
          name: "スプラッシュファーント",
          command: "斬連打",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "リオン・ランセ",
          command: "近距離で→ or ←+中 or 強攻撃",
        },
      ],
    },
  ],
}
