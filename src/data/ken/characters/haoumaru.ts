import type { DataItem } from "../../../types"

export const kenHaoumaru: DataItem = {
  id: "ken-haoumaru",
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
          command: "↓↘→+D",
        },
        {
          name: "奥義 弧月斬",
          command: "→↓↘+斬",
        },
        {
          name: "奥義 疾風弧月斬",
          command: "踏み込み中に→↓↘+斬",
        },
        {
          name: "奥義 烈震斬",
          command: "←↓↙+斬",
        },
        {
          name: "斬鋼閃",
          command: "→↘↓↙←→+AB同時押し",
        },
        {
          name: "酒攻撃",
          command: "↓↙←+D",
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
          command: "→↘↓↙←→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "天覇封神斬【真】",
          command: "↘←↙↓↘→←↓↙+BC同時押し",
        },
        {
          name: "天覇封神斬【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "天覇凄煌斬",
          command: "↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
