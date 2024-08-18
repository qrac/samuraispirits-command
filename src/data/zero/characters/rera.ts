import type { DataItem } from "../../../types"

export const zeroRera: DataItem = {
  id: "zero-rera",
  name: "レラ",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "狼に乗る",
          command: "↓↙←+C",
          skills: [
            {
              name: "狼から降りる",
              command: "レバー+C",
            },
            {
              name: "狼乗り攻撃",
              command: "斬",
            },
            {
              name: "イメル シキテ",
              command: "空中で↓↘→+斬（↑ or ↓以外+Cで分離）",
            },
            {
              name: "メㇽ シキテ",
              command: "←↙↓+斬（↑ or ↓以外+Cで分離）",
            },
            {
              name: "カント シキテ",
              command: "→↓↘+斬（↑ or ↓以外+Cで分離）",
            },
          ],
        },
      ],
    },
    {
      title: "特殊技",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
        {
          name: "カムイ フㇺ ケスㇷ゚",
          command: "空中で↙ or ↓ or ↘+C",
        },
        {
          name: "レラ キシマ テㇰ",
          command: "空中近距離で↙ or ↓ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "ヌペキ カムイ シキテ",
          command: "↓↘→+CD同時押し（狼乗り中も使用可能）",
        },
      ],
    },
  ],
}
