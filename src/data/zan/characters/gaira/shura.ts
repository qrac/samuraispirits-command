import type { DataItem } from "../../../../types"

export const zanGairaShura: DataItem = {
  id: "zan-gaira-shura",
  name: "花諷院骸羅（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "喝！",
          command: "↓↙←+A",
        },
        {
          name: "かちあげ",
          command: "→↓↘+斬",
        },
        {
          name: "みだれうち",
          command: "↓↘→+AB",
        },
        {
          name: "地震丸",
          command: "↓↓+AB",
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
          command: "空中で↓+C",
        },
        {
          name: "百貫落とし",
          command: "空中で↓+D",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "拳舞",
          command: "↓↘→↓↘+AB",
        },
      ],
    },
  ],
}
