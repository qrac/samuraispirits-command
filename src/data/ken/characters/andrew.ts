import type { DataItem } from "../../../types"

export const kenAndrew: DataItem = {
  id: "ken-andrew",
  name: "アンドリュー",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "イーグルアロー",
          command: "↓↘→+斬",
        },
        {
          name: "イーグルブレイク",
          command: "↓↙←+斬",
        },
        {
          name: "イーグルクロス",
          command: "イーグルアローにイーグルブレイクを重ねる",
        },
        {
          name: "ライジングスター",
          command: "→↓↘+斬",
          skills: [
            {
              name: "シューティングスター",
              command: "→+斬",
            },
          ],
        },
        {
          name: "スマートボム",
          command: "←↓↙+斬",
        },
        {
          name: "ブルーアイ",
          command: "↓↙←+D",
        },
        {
          name: "グランドキャノン",
          command: "→↘↓↙←→+C",
          skills: [
            {
              name: "追加攻撃",
              command: "斬（回数はブルーアイを当てた回数+3, 上限は16）",
            },
          ],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "→+B",
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
          name: "ゴールドラッシュ【真】",
          command: "↓↙←↙→+BC",
        },
        {
          name: "ゴールドラッシュ【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "スタチューオブリバティ",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
}
