import type { DataItem } from "../../../types"

export const kenNicotine: DataItem = {
  id: "ken-nicotine",
  name: "花諷院和狆",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "式神霊符・炎",
          command: "↓↘→+斬",
        },
        {
          name: "式神霊符・雷",
          command: "→↓↘+斬",
        },
        {
          name: "式神霊符・命",
          command: "↓↙←+斬",
        },
        {
          name: "縛鎖杖撃",
          command: "→↘↓↙←+D",
        },
        {
          name: "心乱呪符",
          command: "→↓↘+D",
        },
        {
          name: "支杖螺旋脚（攻撃）",
          command: "空中で↙↓↘→+斬",
        },
        {
          name: "支杖螺旋脚（降りる）",
          command: "空中で↙↓↘→+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "↘+B",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "←↙↓↙←→+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "式神霊符・仁王符霊殺【真】",
          command: "→←↙↓↘→+BC同時押し",
        },
        {
          name: "式神霊符・仁王符霊殺【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "封魔真言",
          command: "↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
