import type { DataItem } from "../../../types"

export const kenSankuro: DataItem = {
  id: "ken-sankuro",
  name: "萬三九六",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "おニ四！",
          command: "↓↙←+A",
        },
        {
          name: "五七！",
          command: "↓↙←+B",
        },
        {
          name: "一八！",
          command: "↓↙←+C",
        },
        {
          name: "俺の生き様を見さらせ！！",
          command: "→+斬連打（連打で技継続・左右移動可）",
        },
        {
          name: "俺の種子島",
          command: "↓↘→+斬",
        },
        {
          name: "自慢の一物",
          command: "↓↘→+D",
        },
        {
          name: "寿司は江戸前！！",
          command: "近距離で→↓↘+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化【真】",
          command: "→↘↓↙←→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "寿司は江戸前やで、ほんま！！【真】",
          command: "近距離で↘↗→+BC同時押し",
        },
        {
          name: "寿司は江戸前やで、ほんま！！【剣】",
          command: "近距離で↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "暴力はええのぅ",
          command: "↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
