import type { DataItem } from "../../../types"

export const tenCharlotteRasetsu: DataItem = {
  id: "ten-charlotte-rasetsu",
  name: "シャルロット（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "バイオネットラージュ",
          command: "↓↘→+斬",
        },
        {
          name: "パワーグラデーション",
          command: "→↓↘+斬",
        },
        {
          name: "リオンランセ",
          command: "↓↘→+D",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "クリスタルローズ",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
