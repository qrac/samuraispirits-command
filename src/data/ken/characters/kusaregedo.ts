import type { DataItem } from "../../../types"

export const kenKusaregedo: DataItem = {
  id: "ken-kusaregedo",
  name: "妖怪腐れ外道",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "悪霊呼び",
          command: "↓↘→+斬",
        },
        {
          name: "胃液吐き",
          command: "↓↙←+斬",
        },
        {
          name: "外道の烙印押し",
          command: "近距離で→←↓↑+C",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "←+D",
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
          name: "外道の晩餐【真】",
          command: "近距離で←↙↓↘→↗↑↓+BC",
        },
        {
          name: "外道の晩餐【剣】",
          command: "近距離で↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "飛び頭突き",
          command: "↓↘→+AB or AD",
        },
        {
          name: "外道の獲物狩り",
          command: "近距離で→↗↑↖←↙↓↑+AB",
        },
      ],
    },
  ],
}
