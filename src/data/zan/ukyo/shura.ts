import type { DataItem } from "../../../types"

export const zanUkyoShura: DataItem = {
  id: "zan-ukyo-shura",
  name: "橘右京（修羅）",
  groups: [
    {
      title: "必殺技",
      list: [
        {
          name: "秘剣 ツバメ返し",
          command: "空中で↙↓↘→+斬",
        },
        {
          name: "秘剣 ささめゆき",
          command: "↓↙←+斬",
        },
        {
          name: "非剣 ささめゆき",
          command: "↓↙←+D",
        },
        {
          name: "秘剣 朧刀",
          command: "↓↘→+斬",
        },
        {
          name: "秘剣 天つ風",
          command: "→↘↓↙←+C後にA",
        },
        {
          name: "秘剣 霜風",
          command: "→↘↓↙←+C後にB",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      list: [
        {
          name: "ツバメ六連",
          command: "→↘↓↙←→+BC同時押し",
        },
      ],
    },
  ],
}
