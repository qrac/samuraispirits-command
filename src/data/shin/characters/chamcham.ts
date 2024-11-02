import type { DataItem } from "../../../types"

export const shinChamcham: DataItem = {
  id: "shin-chamcham",
  name: "チャムチャム",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ブーメラン投げ・横",
          command: "↓↘→+斬",
        },
        {
          name: "ブーメラン投げ・上",
          command: "↓↙←+斬",
        },
        {
          name: "とびひっかき",
          command: "↓↘→+蹴",
        },
        {
          name: "パクパク・デオス",
          command: "→↘↓↙←+C",
        },
        {
          name: "ムーラ・パクパク",
          command: "→↘↓↙←+D",
        },
        {
          name: "パクパク・ガブル",
          command: "→↘↓↙←+CD",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
        {
          name: "ぬいぐるみ変化",
          command: "↘↓↙←↓↙+C",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "メタモアニマルアタック",
          command: "→←↙↓↘→+A",
        },
      ],
    },
  ],
}
