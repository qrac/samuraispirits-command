import type { DataItem } from "../../../types"

export const shinNicotine: DataItem = {
  id: "shin-nicotine",
  name: "花諷院和狆",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "式神霊符・雷",
          command: "↓↘→+斬",
        },
        {
          name: "式神霊符・炎",
          command: "↓↘→+蹴",
        },
        {
          name: "縛鎖杖撃",
          command: "→↘↓↙←+斬",
        },
        {
          name: "心乱呪符",
          command: "←↓↙+AB同時押し",
        },
        {
          name: "支杖螺旋脚",
          command: "空中で↙↓↘→+蹴",
        },
      ],
    },
    {
      title: "特殊技",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "←↙↓↙←→+D",
        },
      ],
    },
    {
      title: "武器破壊",
      titleColor: 2,
      skills: [
        {
          name: "仁王符霊殺",
          command: "→←↙↓↘→+D",
        },
      ],
    },
  ],
}
