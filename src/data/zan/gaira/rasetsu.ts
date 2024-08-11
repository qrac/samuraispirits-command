import type { DataItem } from "../../../types"

export const zanGairaRasetsu: DataItem = {
  id: "zan-gaira-rasetsu",
  name: "花諷院骸羅（羅刹）",
  groups: [
    {
      title: "必殺技",
      list: [
        {
          name: "喝！",
          command: "↓↙←+A",
        },
        {
          name: "ぶちころし",
          command: "↓↘→+斬",
        },
        {
          name: "地震丸",
          command: "↓↓+AB同時押し",
        },
        {
          name: "円心殺～天",
          command: "↓↙←→+AB同時押し",
        },
        {
          name: "円心殺～地",
          command: "↓↙←→+CD同時押し",
        },
        {
          name: "百貫落とし",
          command: "空中で↓+D",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      list: [
        {
          name: "拳舞",
          command: "↓↘→↓↘+AB同時押し",
        },
      ],
    },
  ],
}
