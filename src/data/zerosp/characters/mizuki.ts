import type { DataItem } from "../../../types"

export const zerospMizuki: DataItem = {
  id: "zerosp-mizuki",
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
          command: "↓↙←+C",
        },
        {
          name: "我神共鳴魂",
          command: "→↓↘+斬",
        },
        {
          name: "神魔滅殺陣",
          command: "近距離で→↓↘+C",
        },
        {
          name: "魔界転生",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "天地魔境陣",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "狂魔祀怨獄",
          command: "↓↙←+CD",
        },
      ],
    },
  ],
}
