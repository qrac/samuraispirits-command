import type { DataItem } from "../../../types"

export const kenSuija: DataItem = {
  id: "ken-suija",
  name: "水邪",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "月輪波",
          command: "空中で←↓↙+斬",
        },
        {
          name: "死月",
          command: "空中で↓↙←+D",
        },
        {
          name: "翔月",
          command: "空中で↙↓↘→+斬",
        },
        {
          name: "襲月",
          command: "空中で↓↘→+D",
        },
        {
          name: "円月",
          command: "空中で→↓↘+斬",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗",
        },
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "鎌月",
          command: "空中で↓+D",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←→←→←↓+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "天翔月【真】",
          command: "空中で↓↙←↓↙←↘+BC同時押し",
        },
        {
          name: "天翔月【剣】",
          command: "空中で↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "月天法界",
          command: "空中で↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
