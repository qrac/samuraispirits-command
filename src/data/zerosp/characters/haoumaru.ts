import type { DataItem } from "../../../types"

export const zerospHaoumaru: DataItem = {
  id: "zerosp-haoumaru",
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
          command: "↓↘→+C",
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
          command: "→↘↓↙←→+AB",
        },
        {
          name: "酒攻撃",
          command: "↓↙←+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "秘奥義 天覇封神斬",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "天覇凄煌斬",
          command: "↓↙←+CD",
        },
      ],
    },
  ],
}
