import type { DataItem } from "../../../types"

export const shinHaoumaru: DataItem = {
  id: "shin-haoumaru",
  name: "覇王丸",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "奥義 旋風裂斬",
          command: "↓↘→+斬",
        },
        {
          name: "奥偽 旋風裂斬",
          command: "↓↘→+蹴",
        },
        {
          name: "奥義 弧月斬",
          command: "→↙↓↘+斬",
        },
        {
          name: "奥義 烈震斬",
          command: "→↓↘+蹴",
        },
        {
          name: "酒攻撃",
          command: "↓↙←+A",
        },
      ],
    },
    {
      title: "特殊技",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "→↘↓↙←→←+B",
        },
      ],
    },
    {
      title: "秘奥義",
      skills: [
        {
          name: "天覇封神斬",
          command: "↘←↙↓↘→←↓↙+BC同時押し",
        },
      ],
    },
    {
      title: "武器破壊",
      titleColor: 2,
      skills: [
        {
          name: "天覇凄煌斬",
          command: "→↘↓↙←→+A",
        },
      ],
    },
  ],
}
