import type { DataItem } from "../../../types"

export const shinWanfu: DataItem = {
  id: "shin-wanfu",
  name: "王虎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "真気功爆転法",
          command: "↓↙←+斬",
        },
        {
          name: "気功旋風斬",
          command: "→↓↘+斬",
        },
        {
          name: "気功大撲殺",
          command: "↓↘→+斬",
        },
        {
          name: "怒髪柱撃",
          command: "↓↙←+CD同時押し",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "しゃがみ移動",
          command: "↙ or ↘",
        },
        {
          name: "ぬいぐるみ変化",
          command: "→←↙↓↘→←+D",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "気功大爆天",
          command: "→←↙↓↘→+B",
        },
      ],
    },
  ],
}
