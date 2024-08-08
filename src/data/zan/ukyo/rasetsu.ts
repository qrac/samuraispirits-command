import type { DataItem } from "../../../types"

export const zanUkyoRasetsu: DataItem = {
  id: "zan-ukyo-rasetsu",
  name: "橘右京（羅刹）",
  groups: [
    {
      title: "必殺技",
      list: [
        {
          name: "秘剣 ツバメ返し",
          command: "空中で↙↓↘→+斬",
        },
        {
          name: "秘剣 ささめゆき・閃",
          command: "↓↙←+斬",
        },
        {
          name: "雲雀",
          command: "←→+A",
        },
        {
          name: "秘剣 陽炎",
          command: "→↓↘+斬",
        },
        {
          name: "秘剣 夢霞",
          command: "↘↓↙←→+C",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      list: [
        {
          name: "夢想残光霞",
          command: "→←→+CD同時押し",
        },
      ],
    },
  ],
}
