import type { DataItem } from "../../../types"

export const zerospUkyo: DataItem = {
  id: "zerosp-ukyo",
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
          command: "↓↙←+C",
        },
        {
          name: "残像踏み込み斬り",
          command: "↓↘→+斬",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "ツバメ六連",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "夢想残光霞",
          command: "↓↙←+CD同時押し",
        },
      ],
    },
  ],
}
