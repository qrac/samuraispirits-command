import type { DataItem } from "../../../../types"

export const tenUkyoShura: DataItem = {
  id: "ten-ukyo-shura",
  name: "橘右京（修羅）",
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
          command: "↓↙←+D",
        },
        {
          name: "秘剣 朧刀",
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
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
