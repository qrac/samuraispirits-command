import type { DataItem } from "../../../types"

export const kenMizuki: DataItem = {
  id: "ken-mizuki",
  name: "羅将神ミヅキ",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "呪歌爪弾",
          command: "↓↘→+斬",
        },
        {
          name: "覇気陰滅陣",
          command: "↓↙←+斬",
        },
        {
          name: "邪心共鳴",
          command: "↓↙←+D",
        },
        {
          name: "我神共鳴魂",
          command: "空中で↓↘→+斬",
        },
        {
          name: "神魔滅殺陣",
          command: "近距離で→↓↘+D",
        },
        {
          name: "魔界転生",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化【真】",
          command: "↘↓↙←↓↙+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "幻魔怨呪魂【真】",
          command: "↓↘→↘↓↙←+BC同時押し",
        },
        {
          name: "幻魔怨呪魂【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "天地魔境陣",
          command: "↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
