import type { DataItem } from "../../../types"

export const zeroYoshitora: DataItem = {
  id: "zero-yoshitora",
  name: "徳川慶寅",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "壱の太刀 撫子",
          command: "↓↘→+斬",
        },
        {
          name: "弐の太刀 白百合",
          command: "→↓↘+斬",
        },
        {
          name: "参の太刀 牡丹",
          command: "空中で↓↘→+斬",
        },
        {
          name: "四の太刀 椿",
          command: "←↓↙+斬",
        },
        {
          name: "五の太刀 朝顔",
          command: "↓↙←+斬",
        },
        {
          name: "六の太刀 夕顔",
          command: "近距離で→↓↘+C",
        },
        {
          name: "七の太刀 遊蝶華",
          command: "壱〜六をすべて当て終わったラウンドで→↘↓↙←→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "葵",
          command: "↓↘→+CD",
        },
      ],
    },
  ],
}
