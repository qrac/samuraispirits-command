import type { DataItem } from "../../../../types"

export const tenGairaShura: DataItem = {
  id: "ten-gaira-shura",
  name: "花諷院骸羅（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "かちあげ",
          command: "→↓↘+斬",
        },
        {
          name: "みだれうち",
          command: "↓↘→+斬",
        },
        {
          name: "地震丸",
          command: "↓↓+斬 or D",
        },
        {
          name: "つかむぞ～組み天井",
          command: "←↓↙+A",
        },
        {
          name: "つかむぞ～石頭",
          command: "←↓↙+B",
        },
        {
          name: "つかむぞ～尻めくり",
          command: "←↓↙+C",
        },
        {
          name: "ぶちのめし",
          command: "空中で↓+斬 or D",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "拳舞",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
