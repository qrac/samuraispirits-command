import type { DataItem } from "../../../types"

export const kenWanfu: DataItem = {
  id: "ken-wanfu",
  name: "王虎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "真気功爆転法",
          command: "↓↙←+斬（空中も可）",
        },
        {
          name: "気功旋風突",
          command: "→↓↘+斬",
        },
        {
          name: "真気功大撲殺",
          command: "↓↘→+斬",
        },
        {
          name: "気功大失投",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "気功大爆投",
          command: "→←↙↓↘→+C",
        },
        {
          name: "怒髪球撃",
          command: "↓↙←+D",
        },
        {
          name: "気功肉弾砲",
          command: "素手時に近距離で→↓↘+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "↘+C",
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
          name: "超気功旋風大撲殺【真】",
          command: "↘←↙↓↘→←↓↙+BC",
        },
        {
          name: "超気功旋風大撲殺【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "極気功大爆天",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
}
