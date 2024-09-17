import type { DataItem } from "../../../types"

export const shinUkyo: DataItem = {
  id: "shin-ukyo",
  name: "橘右京",
  groups: [
    {
      title: "必殺技",
      skills: [
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
          command: "↓↙←+蹴",
        },
        {
          name: "残像踏み込み斬り",
          command: "↓↘→+蹴",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "↘↓↙←→↓↘+B",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "ツバメ六連",
          command: "→←↙↓↘→+AB同時押し（C押しながらで演出変化）",
        },
      ],
    },
  ],
}
