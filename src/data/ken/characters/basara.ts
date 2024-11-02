import type { DataItem } from "../../../types"

export const kenBasara: DataItem = {
  id: "ken-basara",
  name: "首斬り破沙羅",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "地刺し",
          command: "↓↘→+斬",
        },
        {
          name: "空刺し",
          command: "空中で↓↘→+斬",
        },
        {
          name: "鵺魂",
          command: "↓↘→+D",
        },
        {
          name: "影出",
          command: "→↓↘+斬",
        },
        {
          name: "友引",
          command: "近距離で→↓↘+D",
        },
        {
          name: "影騙し",
          command: "↓↙←+A or B or C or AC or AD or BC or BD",
        },
        {
          name: "影吸い",
          command: "↓↙←+D（左右で移動）",
        },
        {
          name: "影煩い",
          command: "←↓↙+A or B or C or AC or AD or BC or BD",
        },
        {
          name: "影羽織",
          command: "←↓↙+D",
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
          name: "刺し足",
          command: "空中で↓+D",
        },
        {
          name: "頭骨割り",
          command: "空中で↙ or ↘+D",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←↙↓↘→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "影出・凶守【真】",
          command: "←↙↓↘→←+BC",
        },
        {
          name: "影出・凶守【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "影舞い・酬",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
}
