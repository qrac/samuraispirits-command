import type { DataItem } from "../../../types"

export const zeroCharlotte: DataItem = {
  id: "zero-charlotte",
  name: "シャルロット",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "トライスラッシュ",
          command: "↓↘→+斬",
          notes: ["ボタン継続押しでタメ可能"],
        },
        {
          name: "パワーグラデーション",
          command: "→↓↘+斬",
        },
        {
          name: "スプラッシュファーント",
          command: "→+斬連打",
        },
        {
          name: "バイオネットラージュ",
          command: "↓↙←+斬",
        },
        {
          name: "リオンランセ",
          command: "↓↘→+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "クリスタルローズ",
          command: "↓↘→+CD",
        },
      ],
    },
  ],
}
