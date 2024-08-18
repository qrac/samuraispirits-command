import type { DataItem } from "../../../types"

export const zerospCharlotte: DataItem = {
  id: "zerosp-charlotte",
  name: "シャルロット",
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
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "クリスタルローズ",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "スプラッシュグラデーション",
          command: "↓↙←+CD同時押し",
        },
      ],
    },
  ],
}
